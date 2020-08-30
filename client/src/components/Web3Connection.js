// Imports the react library and allows for JSX to be used
import React from 'react';

// Imports the web3 libary and allows client side JavaScript to interact with Solidity smart contracts
import Web3 from 'web3';

// Imports the faucetConfig file 
import faucetConfig from './FaucetConfig';

// Connects web3 to the local provider
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

class Web3Connection extends React.Component {

    async web3FaucetConnection() {

        // Gets local provider account
        const extractAccount = await web3.eth.getAccounts();

        // Stores the local provider account
        const localAccount = extractAccount[0];

        // Creates a new instance of the Faucet.sol contract
        // By passing the faucetAbi and faucetAddress as arguments
        const faucetContract = new web3.eth.Contract(
            faucetConfig['faucetAbi'],
            faucetConfig['faucetAddress']
        );

        // OnClick this function will deposit 1000 ZAP to the users MetaMask account
        // 1 ETH = 1000 ZAP
        // This transaction will cost the user 1 ETH for 1000 ZAP
        faucetContract.methods.buyZap()

            .send({

                // The account the testZap function is being called from
                from: localAccount,

                // Value is measured in Wei and converts to 1 ETH
                value: '1000000000000000000'
            })

            // Successful promise
            .then((res) => {
                console.log(res)
            })
            // Failed promise
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.web3FaucetConnection}>Get Zap</button>
            </div>
        )
    }
}

// Exports the Web3Connection component
export default Web3Connection;