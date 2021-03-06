# IPFS-Uploader
Final Project for Ethereum Developer Program by Andrei Alexandru

Project can be accessed here : http://ipfs-uploader.surge.sh/


Description:

This Project is a POE for a platform which enables users to sign up , upload files to IPFS and check through the app’s database of files that were previously uploaded by other users. The files are being securely stored through the IPFS service. Currently, the Smart Contracts have been deployed on Ropsten so you will interact with that testnet when accessing the Dapp.

The project will have 1 actor:

The User (of the IPFS service)
	The User will submit a file for upload , and will be able to check and download the files that have been previously uploaded on Ethereum. The user will be able to Sign-up, and his Ethereum address and ballance will be displayed.
	



Installation:

Prerequisites: 

1. node / npm and/or yarn
2. Ethereum Browser (metamask or coinbase wallet)
3. Static hosting
4. truffle, ganache-cli 
-----------------------------------
Install Truffle and Ganache CLI globally. 

	npm install -g truffle
	npm install -g ganache-cli

Install dependencies:
	
	npm install dotenv —save
	npm install truffle-hdwallet-provider —save

Initialize Ganache-Cli with a pre-defined blocktime 
	
	ganache-cli -b 3 

-Compile and Migrate smart contracts

	truffle compile
	truffle migrate
	truffle test

Run the webpack server for front-end hot reloading

	npm run start
	
To build the application for production, use the build command. A production build will be in the build_webpack folder.

	npm run build

