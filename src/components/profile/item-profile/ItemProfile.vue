<!-- @format -->

<script setup lang="ts">
  import { ItemInterface } from '~/interfaces/itemInterface';
  import ItemProfileCard from './ItemProfileCard.vue';
  import Breadcrumbs from '~/components/navigation/Breadcrumbs.vue';

  interface ItemProfileProps {
    item: ItemInterface;
  }

  const props = defineProps<ItemProfileProps>();
</script>

<template>
  <div class="item-page">
    <Breadcrumbs :crumbs="['home', 'marketplace', item.itemId]" />
    <div class="item-content">
      <ItemProfileCard :item="props.item" />
      <h2>Transaction History</h2>
      <table class="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Transaction Hash</th>
            <th>From Address</th>
            <th>To Address</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>0xabc123def456...</td>
            <td>0x1234567890abcdef</td>
            <td>0xfedcba0987654321</td>
            <td>1300A</td>
            <td>2022-02-01 12:30:45</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0xabc123def456...</td>
            <td>0x1234567890abcdef</td>
            <td>0xfedcba0987654321</td>
            <td>1300A</td>
            <td>2022-02-01 12:30:45</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0xabc123def456...</td>
            <td>0x1234567890abcdef</td>
            <td>0xfedcba0987654321</td>
            <td>1300A</td>
            <td>2022-02-01 12:30:45</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/helvetica-neue/500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue 300';
    src: url('/fonts/helvetica-neue/300.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  .item-page {
    background: radial-gradient(circle, #1b152b, #100e1d, #1b152b);
    padding: 80px 40px;
    min-height: 100vh;

    .item-container {
      display: flex;
      flex-direction: column;
    }

    .item-content {
      min-height: 30vh;
    }

    .transaction-table {
      width: 100%;
      height: 100vh;
      border-collapse: collapse;
      margin-top: 20px;
      border-radius: 10px;
      overflow: hidden;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.038) 0%,
        rgba(73, 63, 113, 0.257),
        80%,
        rgba(255, 255, 255, 0.038) 100%
      );
      align-items: start;

      th,
      td {
        padding: 8px;
        text-align: left;
      }

      tr {
        color: white;
        border-bottom: 2px solid #100e1d;
      }

      th {
        color: white;
        background-color: #100e1d;
        padding: 10px;
      }
    }
  }

  @media (max-width: 760px) {
    .item-page {
      padding: 80px 10px;
    }

    .item-content {
      padding: 0px;
    }
  }
</style>
