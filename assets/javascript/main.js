$(document).ready(() => {

    // Copies the kovan token address when the clipboard icon is clicked
    $('#kovan-clipboard').click(async () => {

        // Stores the id copy-kovan-address
        const copyAddress = $('#copy-kovan-address');

        // Selects the value to be copied
        copyAddress.select();

        // Copies the value 
        document.execCommand('copy');
    });

    // Copies the kovan token address when the clipboard icon is clicked
    $('#rinkeby-clipboard').click(async () => {

        // Stores the id copy-kovan-address
        const copyAddress = $('#copy-rinkeby-address');

        // Selects the value to be copied
        copyAddress.select();

        // Copies the value 
        document.execCommand('copy');
    });


    // Copies the BSC token address when the clipboard icon is clicked
    $('#bsc-clipboard').click(async () => {

        // Stores the id copy-bsc-address
        const copyAddress = $('#copy-bsc-address');

        // Selects the value to be copied
        copyAddress.select();

        // Copies the value 
        document.execCommand('copy');
    });

    // On click of the get-zap button this function starts the transaction to send users 1000 ZAP
    // on the Kovan Testnet
    $('#get-zap').click(async () => {

        $('.hide').hide();

        $('.spinner-border').show();

        // Detects the network a users MetaMask is on
        const networkId = await web3.eth.net.getId();

        // Gets the users account address
        let accounts = await web3.eth.getAccounts();

        // Instance of the Kovan Faucet
        let kovanFaucet = await new web3.eth.Contract(faucetAbi, kovanFaucetAddress);

        // Instance of the BSC Faucet
        let bscFaucet = await new web3.eth.Contract(faucetAbi, bscFaucetAddress);

        let rinkebyFaucet = await new web3.eth.Contract(faucetAbi, rinkebyFaucetAddress);

        // Converts the wei amount to a BigNumber
        // 1000000000000000000 wei = 1000 ZAP
        let value = web3.utils.toBN(1000000000000000000);

        // Checks if the network id is equal to 42(Kovan)
        if (networkId === 42) {

            // Selects the buyZap function
            kovanFaucet.methods.buyZap(accounts[0], value

            ).send({ from: accounts[0], value: 1000000000000000 })

                // Successful promise
                .then((res) => {

                    // Sets the html from the receiving address string to the (#to) id 
                    $('#to').html(res.from);

                    // Sets the html from sending contract address string to the(#from) id
                    $('#from').html(res.to);

                    // Sets the html from the Etherscan transaction string to the (#tx-hash) id
                    $('#tx-hash').html(res.transactionHash)

                    // Sets the href path to the transaction page on Etherscan by concatenating
                    // res.transactionHash
                    $('#tx-href').attr('href',
                        'https://kovan.etherscan.io/tx/' + res.transactionHash);

                    $('.spinner-border').hide();

                    // Successful transaction shows the .hide div
                    $('.hide').show();
                })

                // Failed promise
                .catch(function (error) {

                    $('.spinner-border').hide();

                    return error;

                });

            // Checks if the network id is 97(BSC)
        } else if (networkId === 97) {

            // Converts the wei amount to a BigNumber
            // 500000000000000000000 wei = 500k ZAP
            let tokenAmount = web3.utils.toBN(500000000000000000000)

            bscFaucet.methods.buyZap(accounts[0], tokenAmount)

                .send({ from: accounts[0], value: 1000000000000000 })

                .then((res) => {

                    // Sets the html from the receiving address string to the (#to) id 
                    $('#to').html(res.from);

                    // Sets the html from sending contract address string to the(#from) id
                    $('#from').html(res.to);

                    // Sets the html from the BSC Scan transaction string to the (#tx-hash) id
                    $('#tx-hash').html(res.transactionHash)

                    // Sets the href path to the transaction page on BSC Scan by concatenating
                    // res.transactionHash
                    $('#tx-href').attr('href',
                        'https://testnet.bscscan.com/tx/' + res.transactionHash);

                    $('.spinner-border').hide();

                    // Successful transaction shows the .hide div
                    $('.hide').show();

                })
                .catch((err) => {

                    $('.spinner-border').hide();

                    return err;

                })

        } else if (networkId === 4) {

            // Selects the buyZap function
            rinkebyFaucet.methods.buyZap(accounts[0], value

            ).send({ from: accounts[0], value: 1000000000000000 })

                // Successful promise
                .then((res) => {

                    // Sets the html from the receiving address string to the (#to) id 
                    $('#to').html(res.from);

                    // Sets the html from sending contract address string to the(#from) id
                    $('#from').html(res.to);

                    // Sets the html from the Etherscan transaction string to the (#tx-hash) id
                    $('#tx-hash').html(res.transactionHash)

                    // Sets the href path to the transaction page on Etherscan by concatenating
                    // res.transactionHash
                    $('#tx-href').attr('href',
                        'https://rinkeby.etherscan.io/tx/' + res.transactionHash);

                    $('.spinner-border').hide();

                    // Successful transaction shows the .hide div
                    $('.hide').show();
                })

                // Failed promise
                .catch(function (error) {

                    $('.spinner-border').hide();

                    return error;

                });

            // If the network id does not equal 42(Kovan) or 97(BSC)
        } else {

            alert(
                "Network Id: " + networkId + " is not supported. " +
                "Please switch to Kovan Testnet(42) or BSC Testnet(97)"
            );

            location.reload()
        }
    });


});

