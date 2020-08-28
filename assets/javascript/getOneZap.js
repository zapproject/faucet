// const { default: Web3 } = require("web3")

const getOneZap = async () => {
    let accounts = await web3.eth.getAccounts()
    let faucetContract = await new web3.eth.Contract(faucetAbi, faucetAddress)
    faucetContract.methods.buyZap().send({from: accounts[0], value: 1000000000000000})
        .then(function(res){
            console.log(res)
        })
        .catch(function(error) {
            console.log(error)
        })
    
}