import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', () => {
  let user: { address: string | undefined; nfd: string | undefined } = {
    address: undefined,
    nfd: undefined,
  };

  const getUserInfo = async (walletAddress: string) => {
    try {
      const { data } = await axios.get(
        `https://api.nf.domains/nfd/v2/address?address=${walletAddress}&limit=20&view=tiny`
      );

      user = { address: walletAddress, nfd: data[walletAddress][0].name };
    } catch (error) {
      user = { address: walletAddress, nfd: undefined };
    }
    return user;
  };

  return { getUserInfo };
});
