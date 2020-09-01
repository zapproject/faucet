$(document).ready(() => {

    $('.hide').hide();

    $('#get-zap').click(async () => {

        let accounts = await web3.eth.getAccounts();
        let faucetContract = await new web3.eth.Contract(faucetAbi, faucetAddress);
        faucetContract.methods
            .buyZap()
            .send({ from: accounts[0], value: 1000000000000000 })
            // .then((receipt) => showReceipt(receipt)
            .then((res) => {
                console.log(res.transactionHash)

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

