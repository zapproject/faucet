const faucetAbi = [
	{
		"constant": false,
		"inputs": [],
		"name": "withdrawEther",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "amt",
				"type": "uint256"
			}
		],
		"name": "buyZap",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "_rate",
				"type": "uint256"
			}
		],
		"name": "BUYZAP",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "n1",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "n2",
				"type": "uint256"
			}
		],
		"name": "Log",
		"type": "event"
	}
]
const faucetAddress = "0x534361FCfAb1b636469E3c53a34764D4a352C8d3";