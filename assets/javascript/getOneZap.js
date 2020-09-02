$(document).ready(() => {

    // Copies the token address when the clipboard icon is clicked
    $('.bi-clipboard').click(() => {

        // Stores the id copy-address
        const copyAddress = $('#copy-address');

        // Selects the value to be copied
        copyAddress.select();

        // Copies the value 
        document.execCommand('copy');
    });


    // On click of the get-zap button this function starts the transaction to send users 1 ZAP
    $('#get-zap').click(async () => {

        // Gets the users account address
        let accounts = await web3.eth.getAccounts();

        // Creates a new instance of the Faucet.sol smart contract by connecting web3
        // and passing the contracts ABI and Address as agruments
        let faucetContract = await new web3.eth.Contract(faucetAbi, faucetAddress);
        
        // Selects the functions used by the Faucet.sol smart contract
        faucetContract.methods

            // Function invoked from the Faucet.sol smart contract
            .buyZap()

            // The from property specifies the address invoking the function
            // The value property is measured in wei then converted to ETH then ZAP
            .send({ from: accounts[0], value: 1000000000000000 })

            // Successful promise
            .then((res) => {

                // Appends the receiving address string to the (#to) id 
                $('#to').append(res.from);

                // Appends the sending contract address string to the(#from) id
                $('#from').append(res.to);

                // Appends the Etherscan transaction string to the (#tx-hash) id
                $('#tx-hash').append(res.transactionHash)

                // Sets the href path to the transaction page on Etherscan by concatenating
                // res.transactionHash
                $('#tx-href').attr('href',
                    'https://kovan.etherscan.io/tx/' + res.transactionHash);

                // Successful transaction shows the .hide div
                $('.hide').show();
            })

            // Failed promise
            .catch(function (error) {
                console.log(error);
            });
    });


});

