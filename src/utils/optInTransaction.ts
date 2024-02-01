import algosdk from 'algosdk';
import { useWallet } from '@txnlab/use-wallet-vue';

const algodServer = 'https://mainnet-api.algonode.cloud';
const algodToken = '';
const algodPort = '';

const algod = new algosdk.Algodv2(algodToken, algodServer, algodPort);

export const createOptInTransaction = async (
  sender: string,
  assetId: number
) => {
  const suggestedParams = await algod.getTransactionParams().do();
  const ptxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    from: sender,
    to: sender,
    closeRemainderTo: undefined,
    assetIndex: assetId,
    amount: 0,
    suggestedParams,
  });

  console.log('unsignedTransaction', ptxn);

  return ptxn;
};
