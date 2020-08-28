import React from 'react';

import Web3 from 'web3';

import faucetConfig from './FaucetConfig';

// Connects to the local provider
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

class Web3Connection extends React.Component {

    async buyZap() {

        const extractAccount = await web3.eth.getAccounts();

        const localAccount = extractAccount[0];

        const faucetContract = new web3.eth.Contract(
            faucetConfig['faucetAbi'],
            faucetConfig['faucetAddress']
        );

        faucetContract.methods.buyZap()
            .send({
                from: localAccount,
                value: '1'
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })


    }

    render() {
        return (
            <div>
                <button onClick={this.buyZap}>Buy Zap</button>
            </div>
        )
    }
}



export default Web3Connection;