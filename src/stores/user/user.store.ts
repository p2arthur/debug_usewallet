import { defineStore } from 'pinia';
import axios from 'axios';
import { UserInterface } from '~/interfaces/userInterface';

export const useUserStore = defineStore('user', () => {
  let user: UserInterface = {
    address: undefined,
    nfd: undefined,
    niko_balance: undefined,
  };

  let userFromSearch: UserInterface = {
    address: undefined,
    nfd: undefined,
    niko_balance: undefined,
  };

  const getUserNfd = async (walletAddress: string) => {
    try {
      const { data } = await axios.get(
        `https://api.nf.domains/nfd/v2/address?address=${walletAddress}&limit=20&view=tiny`
      );
      return { address: walletAddress, nfd: data[walletAddress][0].name };
    } catch {
      return { address: walletAddress, nfd: undefined };
    }
  };

  const getUserNikoBalance = async (walletAddress: string) => {
    try {
      const { data } = await axios.get(
        `https://mainnet-idx.algonode.cloud/v2/accounts/${walletAddress}/assets?asset-id=1265975021`
      );

      const nikoBalance = (data.assets[0].amount / 10 ** 6).toFixed(2);

      return { niko_balance: nikoBalance };
      // const nikoBalance = data.
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentUserInfo = async (
    walletAddress: string
  ): Promise<UserInterface> => {
    const nfd = await getUserNfd(walletAddress);
    const niko_balance = await getUserNikoBalance(walletAddress);

    Object.assign(user, nfd);
    Object.assign(user, niko_balance);

    console.log('user', user);

    return user;
  };

  const getSearchedUserInfo = async (
    walletAddress: string
  ): Promise<UserInterface> => {
    const nfd = await getUserNfd(walletAddress);
    const niko_balance = await getUserNikoBalance(walletAddress);

    Object.assign(userFromSearch, nfd);
    Object.assign(userFromSearch, niko_balance);

    console.log('user', user);

    return userFromSearch;
  };

  return { getCurrentUserInfo, getSearchedUserInfo };
});
