const getOneZap = async () => {
    let accounts = await web3.eth.getAccounts();
    let faucetContract = await new web3.eth.Contract(faucetAbi, faucetAddress);
    faucetContract.methods
        .buyZap()
        .send({ from: accounts[0], value: 1000000000000000 })
        .then((receipt) => showReceipt(receipt))
        .catch(function (error) {
            console.log(error);
        });
};


// let networkType = await web3.eth.net.getNetworkType();
// console.log(networkType)


const showReceipt = (receipt) => {
    console.log(receipt);
    console.log("===================================");
    console.log("===================================");
    console.log("BUYZAP EVENT");
    console.log("Buyer: ", receipt.events.BUYZAP.returnValues._buyer);
    console.log("Amount: ", receipt.events.BUYZAP.returnValues._amount);
    console.log("Rate: ", receipt.events.BUYZAP.returnValues._rate);
    console.log("===================================");
    console.log("===================================");
}

// const checkLatestFaucetDraw = async () => {
//     let accounts = await web3.eth.getAccounts();
//     console.log(accounts[0]);
//     web3.eth
//         .getPastLogs({
//             address: accounts[0],
//             // fromBlock: "latest"
//         })
//         .then((response) => console.log(response));
//     // console.log(latest)
// };
