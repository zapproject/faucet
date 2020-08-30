const faucetAbi = [
	{
		"constant": false,
		"inputs": [],
		"name": "withdrawTok",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "rate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
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
		"constant": false,
		"inputs": [],
		"name": "buyZap",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
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
];

const faucetAddress = "0xE4304d24F352349CC4dA0ecDEa7FFa1924959B93";