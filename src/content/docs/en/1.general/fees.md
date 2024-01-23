---
title: Fees (gas)
description: 'Fees (gas) on Algorand.'
createdAt: 02-April-2022 12:00
updatedAt: 03-April-2022 08:00
category: General
---

Algorand has two systems to pay for operations on the network. One is transactions fees, which are paid for every transaction you execute. The other is a minimum balance system, which temporarily locks funds in your wallet.

## Minimum balance

The minimum balance system on Algorand is used to pay for the creation and interaction with assets and contracts on Algorand. You pay fees in the form of a minimum balance increase in your wallet.

All active wallets on Algorand have a 0.1 A minimum balance by default. If this is missing from the wallet, it is not active. As long as the wallet is active, this 0.1 A can not be removed from it. 

When you create an asset or contract, your minimum balance increases and the spendable portion of your funds is reduced. But this is not permanent. When you delete the asset or contract, the minimum balance is decreased, and you can spend the funds again. This is different from gas on Ethereum, for example where the gas is spent and is not refunded.

::alert{type="warning"}
The minimum balance is not represented in Algorand wallets at the moment. Instead, the wallets display a balance that has not had the minimum balance subtracted. This means that not all of the balance can be spent or transferred from the wallet.
::

### ASAs

ASAs are tokens on Algorand, including NFTs (None Fungible Tokens) and FTs (Fungible tokens). To be able to interact with ASAs, you first need to opt into them. This means you have to add the asset to your wallet first, and only then you can receive and send this asset.

Every ASA you opt into increases your minimum balance with 0.1 Algo. When you opt-out of the asset, after you for example sold it, you minimum balance is decreased again with 0.1 Algo. You can then spend this 0.1 Algo again.

::alert{type="warning"}
Creating an ASA does not have a cost of its own. The creator only has an increase of 0.1 A for the opt-in. But the creator can not opt-out of the asset when the wallet no longer holds it. Instead, the minimum balance increase stays in place until the asset is deleted (burned).
::

### Contracts

There are two types of smart contracts on Algorand, stateless and stateful. Stateless contracts do not store data on-chain and therefore don't increase the minimum balance directly when using them. Stateful contracts do store data on-chain, and they increase the [minimum balance for every value stored on-chain](https://developer.algorand.org/docs/get-details/dapps/smart-contracts/apps/#minimum-balance-requirement-for-a-smart-contract).

#### Listing contracts

To list an NFT on Dartroom, the contract needs to hold the NFT you want to sell. This means the contract address needs to be activated with a minimum balance of 0.1 A. And the contract needs to opt into the NFT you want to sell, increasing the minimum balance with an additional 0.1 A. This means that to list an NFT you will need to send 0.2 A to the contract.

When you remove a listing, the contract no longer needs to be active and can be de-activated. When you do this, you get the 0.2 A back to your account.

## Transaction fees

Every transaction on the network has a fixed 1000 µA (0.001 Algorand). This fee is none reversible and is permanently removed from your wallet.

::alert{type="warning"}
Sometimes you might see a transaction fee higher than 1000  µA or none at all. This can happen when <a target="_blank" href="https://developer.algorand.org/docs/get-details/transactions/?from_query=grouped%20fees#pooled-transaction-fees">fees are grouped</a> in a group transaction. In what is called an <a target="_blank" href="https://developer.algorand.org/docs/get-details/atomic_transfers">Atomic Transfer</a> on Algorand, you can program in that one transaction in the group pays for the others.
::