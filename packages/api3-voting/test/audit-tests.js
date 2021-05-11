const ERRORS = require('./helpers/errors');
const { assertBn, assertRevert, assertAmountOfEvents } = require('@aragon/contract-helpers-test/src/asserts');
const { pct16, bn, bigExp, getEventArgument, ZERO_ADDRESS } = require('@aragon/contract-helpers-test');
const { newDao, installNewApp, encodeCallScript, ANY_ENTITY, EMPTY_CALLS_SCRIPT } = require('@aragon/contract-helpers-test/src/aragon-os');
const { time, expectRevert } = require('@openzeppelin/test-helpers');
const Voting = artifacts.require('Api3VotingMock');

const Api3TokenMock = artifacts.require('Api3TokenMock');
const Api3Pool = artifacts.require('Api3Pool');
const ExecutionTarget = artifacts.require('ExecutionTarget');

const createdVoteId = receipt => getEventArgument(receipt, 'StartVote', 'voteId');

const VOTER_STATE = ['ABSENT', 'YEA', 'NAY'].reduce((state, key, index) => {
  state[key] = index;
  return state;
}, {});


contract('API3 Voting App', ([root, holder1, holder2, holder3, holder4, holder5, holder6, holder7, holder8, holder9, holder10, holder29, holder51, nonHolder]) => {
  let api3Pool, votingBase, voting, token, executionTarget;
  let CREATE_VOTES_ROLE, MODIFY_SUPPORT_ROLE, MODIFY_QUORUM_ROLE;

  const NOW = 1;
  const votingDuration = 1000;
  const APP_ID = '0x1234123412341234123412341234123412341234123412341234123412341234';

  before('load roles', async () => {
    votingBase = await Voting.new();
    CREATE_VOTES_ROLE = await votingBase.CREATE_VOTES_ROLE();
    MODIFY_SUPPORT_ROLE = await votingBase.MODIFY_SUPPORT_ROLE();
    MODIFY_QUORUM_ROLE = await votingBase.MODIFY_QUORUM_ROLE()
  });

  beforeEach('deploy DAO with Voting app', async () => {
    const { dao, acl } = await newDao(root);
    voting = await Voting.at(await installNewApp(dao, APP_ID, votingBase.address, root));
    await voting.mockSetTimestamp(NOW);
    await acl.createPermission(ANY_ENTITY, voting.address, CREATE_VOTES_ROLE, root, { from: root });
    await acl.createPermission(ANY_ENTITY, voting.address, MODIFY_SUPPORT_ROLE, root, { from: root });
    await acl.createPermission(ANY_ENTITY, voting.address, MODIFY_QUORUM_ROLE, root, { from: root })
  });

  context('audit tests', () => {
    const neededSupport = pct16(50);
    const minimumAcceptanceQuorum = pct16(20);

    beforeEach(async () => {
      token = await Api3TokenMock.new(ZERO_ADDRESS, ZERO_ADDRESS, 0, 'n', 0, 'n', true); // empty parameters minime
      api3Pool = await Api3Pool.new(token.address);
      await api3Pool.setDaoApps(voting.address, voting.address, voting.address, voting.address);
      let holders = [holder1, holder2, holder3, holder4, holder5, holder6, holder7, holder8, holder9, holder10, holder29];
      for (let holder of holders) {
        await token.generateTokens(holder, 1000000);
        await token.approve(api3Pool.address, 1000, {from: holder});
        await api3Pool.deposit(holder, 1000, holder, {from: holder});
        await api3Pool.stake(1000, {from: holder});
      }

      await voting.initialize(api3Pool.address, neededSupport, minimumAcceptanceQuorum, votingDuration);
    });

    it('user can be spammed so it cant be delegated to', async () => {
      // Create vote and afterwards generate some tokens
      const voteId = createdVoteId(await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata'));
      console.log(`propose and delegate to holder29`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata', {from: holder1})
      await api3Pool.delegateVotingPower(holder29, {from: holder1});

      console.log(`propose and delegate to holder29`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata1', {from: holder2})
      await api3Pool.delegateVotingPower(holder29, {from: holder2});
      console.log(`propose and delegate to holder29`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata2', {from: holder3})
      await api3Pool.delegateVotingPower(holder29, {from: holder3});
      console.log(`propose and delegate to holder29`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata3', {from: holder4})
      await api3Pool.delegateVotingPower(holder29, {from: holder4});
      console.log(`propose`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata5', {from: holder6})
      console.log(`try to delegate to holder29  for the 5th time (expect this to fail)`)
      await api3Pool.delegateVotingPower(holder29, {from: holder6});
    });

    it('user can be blocked from voting on proposals older than 1 week', async () =>  {
      // Create vote and afterwards generate some tokens
      const voteId = createdVoteId(await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata'));
      console.log(`create a proposal`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata', {from: holder1})
      await api3Pool.delegateVotingPower(holder29, {from: holder1});
      await api3Pool.delegateVotingPower(holder10, {from: holder3});

      console.log(`create a proposal`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata1', {from: holder2})
      await api3Pool.delegateVotingPower(holder29, {from: holder2});
      await api3Pool.delegateVotingPower(holder10, {from: holder4});

      console.log(`juamp ahead a week`)
      const latest = Number(await time.latest());
      await time.increaseTo(latest+Number(time.duration.weeks(1)));
      console.log(`create a proposal`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata2', {from: holder1})
      await api3Pool.delegateVotingPower(holder29, {from: holder8});
      await api3Pool.delegateVotingPower(holder10, {from: holder1});

      console.log(`create a proposal`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata3', {from: holder2})
      await api3Pool.delegateVotingPower(holder29, {from: holder9});
      await api3Pool.delegateVotingPower(holder10, {from: holder2});

      console.log(`create a proposal`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata4', {from: holder3})
      await api3Pool.delegateVotingPower(holder29, {from: holder3});
      await api3Pool.delegateVotingPower(holder10, {from: holder7});

      console.log(`create a proposal`)
      await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata5', {from: holder4})
      await api3Pool.delegateVotingPower(holder29, {from: holder4});

      console.log(`vote by holder10`)
      await voting.vote(voteId, true, false, { from: holder10 });
      console.log(`vote by holder29 (expected to fail because it has over 5 delegations`)
      await voting.vote(voteId, true, false, { from: holder29 });
    });
    it('user can create two proposals in an epoch by propose-delegate-propose', async () => {
      console.log(`balance of holder1`, (await api3Pool.balanceOf(holder1)).toNumber())
      console.log(`balance of nonHolder`, (await api3Pool.balanceOf(nonHolder)).toNumber())
      console.log(`create a proposal from holder1, cast also the vote`)
      const voteId = createdVoteId(await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata', {from: holder1}));
      const vote1 = (await voting.getVote(voteId))
      console.log(`vote1.snapshotBlock`, vote1.snapshotBlock.toNumber())
      console.log(`vote1.votingPower`, vote1.votingPower.toNumber())
      console.log(`!!!! Expect vote1.yea to be equal to holder1 balance`)
      console.log(`vote1.yea`, vote1.yea.toNumber())
      console.log(`vote1.nay`, vote1.nay.toNumber())
      console.log(`create a proposal from nonHolder, this is expected to fail as the onholder holds no tokens`)
      await expectRevert(
        voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata', {from: nonHolder}),
        "API3_HIT_PROPOSAL_THRESHOLD"
      );

      await api3Pool.delegateVotingPower(nonHolder, {from: holder1});
      const voteId3 = createdVoteId(await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata', {from: nonHolder}));
      const vote3 = (await voting.getVote(voteId3))
      console.log(`vote3.snapshotBlock`, vote3.snapshotBlock.toNumber())
      console.log(`vote3.yea`, vote3.yea.toNumber())
      console.log(`vote3.nay`, vote3.nay.toNumber())
      console.log(`vote3.votingPower`, vote3.votingPower.toNumber())
    });

    it.only('user can vote twice vote-delegate-vote', async () => {
      console.log(`balance of holder1`, (await api3Pool.balanceOf(holder1)).toNumber())
      console.log(`balance of nonHolder`, (await api3Pool.balanceOf(nonHolder)).toNumber())
      console.log(`create a proposal from holder1, cast also the vote`)
      const voteId = createdVoteId(await voting.newVote(EMPTY_CALLS_SCRIPT, 'metadata', {from: holder1}));
      await voting.vote(voteId, true, false, {from: holder2})
      let vote1 = (await voting.getVote(voteId))
      console.log(`vote1.yea`, vote1.yea.toNumber())
      console.log(`vote1.nay`, vote1.nay.toNumber())
      console.log(`delegate voting power from holder1 to nonholder`)
      await api3Pool.delegateVotingPower(nonHolder, {from: holder1});
      await api3Pool.delegateVotingPower(nonHolder, {from: holder2});
      await voting.vote(voteId, true, false, {from: nonHolder})
      vote1 = (await voting.getVote(voteId))
      console.log(`vote1.yea`, vote1.yea.toNumber())
      console.log(`vote1.nay`, vote1.nay.toNumber())
    });
   });

});