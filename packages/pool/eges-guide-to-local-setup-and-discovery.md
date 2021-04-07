# Ege's Guide for Local Setup & Discovery


## Local blockchain

Start a local blockchain via the [Hardhat Network][hhnet]:
```sh
npm start
```

That said, [Ganache][gnc] arguably is more helpful when it comes
to analyzing the state of the blockchain & contracts during
development thanks to its UI. So it can be used as an alternative
to the Hardhat Network. To do so, run Ganache on your local
computer at port 8545, then deploy the contracts:
```sh
npm run deploy:dev
```
(Note that deployment is only necessary if you use an external
blockchain such as Ganache. Don't run this command if you use the
Hardhat Network.)

Run the following script after deployment:
```sh
./generate-ganache-artifacts
```
This script converts compiled Hardhat artifacts to a format
compatible with Ganache. This is not required, but it allows you
to analyze the contracts & their state from the Ganache interface.

[hhnet]: https://hardhat.org/hardhat-network/
[gnc]: https://www.trufflesuite.com/ganache


## Contract interaction

I recommend using [OneClickDapp][ocd] to easily discover & test
the contracts. After setting up a local blockchain, get the
`address` and `abi` information of your target contracts from the
`deployments` directory, then paste those values into the new Dapp
interface of OneClickDapp.

[ocd]: https://oneclickdapp.com/new


## Contract docs

Generate contract docs:
```sh
npm run build:docs
```
Find the generated documentation in the `docgen` directory.

In addition to this, check out the tests in the `test` directory
to see examples on how to use the contracts in realistic scenarios.
