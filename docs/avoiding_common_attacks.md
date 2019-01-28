Avoiding Common Attacks
This text describes how common attacks are avoided in the contracts.


Reentrancy & Cross-function Race Conditions 

To avoid reentrancy the processing is performed before transfering funds. The User which uploads a file will be notified by metamask about the blockchain cost for the IPFS storage.



DoS with Block Gas Limit

Each block has an upper bound on the amount of gas that can be spent, and thus the amount computation that can be done. This is the Block Gas Limit. If the gas spent exceeds this limit, the transaction will fail. This leads to a couple possible Denial of Service vectors

Forcibly Sending Ether to a Contract

The design of the contract is not allowing someone to forcibly send ether, as the transactions that are being done, are getting recoreded for storage on IPFS.
