<!-- @format -->

<script setup lang="ts">
import MainButton from "../buttons/MainButton.vue";
import { createOptInTransaction } from "~/utils/optInTransaction";
import { useWallet } from "@txnlab/use-wallet-vue";
import algosdk from "algosdk";

const { signTransactions } = useWallet();

const algodServer = "https://mainnet-api.algonode.cloud";
const algodToken = "0C3BF7223DB65E1E6EBF106BF63F5284";
const algodPort = "";

const algod = new algosdk.Algodv2(algodToken, algodServer);

const handleOptIn = async () => {
  console.log("handle opt in");
  const optInTransaction = await createOptInTransaction(
    "AENCK6AVVGCOQM6XGSGTSMZXVHV34QDAHH7RDH226GLD55U34BLT6YP5L4",
    1265975021
  );

  console.log("optIn transaction", optInTransaction);

  const signedTransaction = await signTransactions([optInTransaction]);

  console.log("signed transaction", signedTransaction);

  const { txId } = await algod.sendRawTransaction(signedTransaction).do();
  const result = await algosdk.waitForConfirmation(algod, txId, 4);

  if (!result) {
    throw new Error("Transaction failed.");
  }
};
</script>

<template>
  <div class="niko-card">
    <div class="niko-card-header">
      <div class="niko-card-title">
        <img class="center-niko-image" src="/img/nico_token.png" alt="niko coin" />
        <h2 class="center-title">$NIKO coin</h2>
      </div>
      <p class="center-description">
        The NIKOs token is the internal currency of the rxelms universe, acting as the
        foundation for transactions and interactions within the metaverse. It is used in
        marketplace transactions and voting, and it is also central to participation
        rewards and encouraging creativity within the community. The distribution strategy
        of NIKO, managed by Dartroom, emphasizes non-commercialization of the token,
        prioritizing its use to strengthen the rxelms ecosystem.
      </p>
    </div>
    <div class="niko-card-actions">
      <MainButton :action="handleOptIn" size="medium" text="Learn more" />
    </div>
  </div>
</template>

<style>
.niko-card {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  width: 50%;
  padding: 20px;
  border-radius: 10px;
  background: rgb(14, 10, 30); /* Fallback color */
  background: linear-gradient(
    to bottom right,
    rgba(14, 10, 30, 0.986),
    rgba(26, 20, 45, 0.905)
  );

  position: absolute;

  backdrop-filter: blur(10px);
}

.niko-card-title {
  align-items: center;
  display: flex;
}

/* .niko-card-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    h3 {
      margin: 0;
    }
  } */

.niko-card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  .center-niko-image {
    width: 5rem;
  }
}

.center-title {
  font-size: 4rem;
  margin: 0;
}

.center-description {
  color: rgb(189, 189, 189);
  font-size: 1rem;
  margin: 0;
  text-align: center;
}

@media (max-width: 768px) {
  .niko-card {
    flex-direction: column;
    gap: 20px;
    width: 80%;
  }

  .niko-card-info {
    gap: 1px;
  }

  .niko-card-header {
    display: flex;
    align-items: center;
    .center-niko-image {
      width: 4rem;
    }

    .center-title {
      font-size: 2rem;
      margin: 0;
    }
  }

  .center-description {
    font-size: 1rem;
    margin: 0;
    text-align: center;
    color: rgb(189, 189, 189);
  }
}

@media (max-width: 1000px) {
  .niko-card {
    width: 80%;
  }

  .niko-card-header {
    display: flex;
    align-items: center;
    .center-niko-image {
      width: 4rem;
    }

    .center-title {
      font-size: 2rem;
      margin: 0;
    }
  }

  .niko-card-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    h3 {
      font-size: 1rem;
      margin: 0;
    }
    p {
      font-size: 0.9rem;
    }
  }

  .niko-card-left {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .niko-card-right {
    height: 200px;
    border-left: 0px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
  }

  .center-description {
    font-size: 0.9rem;
    margin: 0;
    text-align: center;
    color: rgb(189, 189, 189);
  }
}
</style>
