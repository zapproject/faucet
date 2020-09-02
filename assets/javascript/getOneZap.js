$(document).ready(() => {


    // $('.hide').hide();

    $('.bi-clipboard').click(() => {
        const copyAddress = $('#copy-address');

        copyAddress.select();
        const copiedAddress = document.execCommand('copy');
        console.log(copiedAddress)
    })


    // On click of the get-zap button this function starts the transaction to send users 1 ZAP
    $('#get-zap').click(async () => {

        // Gets the users meta mask address
        let accounts = await web3.eth.getAccounts();

        // Creates a new instance of the Faucet.sol smart contract by connecting web3
        let faucetContract = await new web3.eth.Contract(faucetAbi, faucetAddress);

        faucetContract.methods
            .buyZap()
            .send({ from: accounts[0], value: 1000000000000000 })
            .then((res) => {

                // Sets the 
                $('#to').append(res.from);
                $('#from').append(res.to);
                $('#tx-hash').append(res.transactionHash)

                $('#tx-href').attr('href',
                    'https://kovan.etherscan.io/tx/' + res.transactionHash);

                $('.hide').show();
            })

            .catch(function (error) {
                console.log(error);
            });
    })


})

