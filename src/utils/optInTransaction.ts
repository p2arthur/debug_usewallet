import algosdk from 'algosdk';

const algodServer = 'https://mainnet-api.algonode.cloud';
const algodToken = '';
const algodPort = '';

const algod = new algosdk.Algodv2(algodToken, algodServer, algodPort);

export const createOptInTransaction = async (
  sender: string,
  assetId: number
) => {
  const suggestedParams = await algod.getTransactionParams().do();
  const unsignedTransaction = algosdk.makeAssetTransferTxnWithSuggestedParams(
    sender,
    sender,
    undefined,
    undefined,
    0,
    undefined,
    assetId,
    suggestedParams
  );

  console.log('unsignedTransaction', unsignedTransaction);
};
