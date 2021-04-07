#!/usr/bin/env node

const
    {mkdirSync, writeFileSync,
        existsSync, readdirSync, statSync} = require('fs'),
    path = require('path'),
    {contracts_build_directory} = require('./truffle-config.js')

const
    ignorePattern = process.argv[2],
    artifactsDir = './artifacts',
    deploymentsDir = './deployments/dev'


const main = () => {
    mkdirSync(contracts_build_directory, {recursive: true})

    mapArtifacts(artifactsDir, deploymentsDir, a => ({
        contractName: a.contract.contractName,
        abi: a.contract.abi,
        ast: a.buildSource.ast,
        networks: {
            5777: {
                links: {},
                events: {},

                ...(a.deployment && {
                    address: a.deployment.address,
                    transactionHash: a.deployment.transactionHash,
                }),
            },
        },
    }), {
        ignore: ignorePattern ? [new RegExp(ignorePattern)] : [],
    })
        .forEach(a =>
            writeFileSync(
                contracts_build_directory + '/' + a.contractName + '.json',
                JSON.stringify(a, null, 2)
            ),
        )
}


const mapArtifacts = (
    artifactsDirPath,
    deploymentsDirPath,
    mapFn,
    {ignore = []} = {},
) =>
    mapDirTree(artifactsDirPath, contractPath => {
        const
            contract = require('./' + contractPath),

            buildKeyPattern =
                '^' + path.normalize(artifactsDirPath)
                    + '/(.*)/' + contract.contractName + '.json$',

            buildKey = contractPath.match(new RegExp(buildKeyPattern))[1],

            {buildInfo: buildInfoPath} =
                require('./' + contractPath.replace(/\.json$/, '.dbg.json')),

            {output: {
                contracts: {[buildKey]: {[contract.contractName]: buildOutput}},
                sources: {[buildKey]: buildSource},
            }} =
                require('./' + path.dirname(contractPath) + '/'+ buildInfoPath),

            deploymentFilePath =
                './' + deploymentsDirPath + '/'
                    + contract.contractName + '.json',

            deployment =
                existsSync(deploymentFilePath)
                    ? require(deploymentFilePath)
                    : null

        return mapFn({contract, deployment, buildOutput, buildSource})
    }, {
        ignore: [/^build-info$/, /^.+\.dbg\.json$/, ...ignore],
    })


const mapDirTree = (rootDirPath, mapFn, {ignore = []} = {}) =>
    readdirSync(rootDirPath)

        .filter(fName => ignore.every(pattern => !fName.match(pattern)))

        .flatMap(fName => {
            const fullFilePath = path.join(rootDirPath, fName)

            if (statSync(fullFilePath).isDirectory())
                return mapDirTree(fullFilePath, mapFn, {ignore})
            else
                return [mapFn(fullFilePath)]
        })


main()
