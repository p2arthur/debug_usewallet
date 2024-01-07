<template>
  <div>
    <table>
      <tr>
        <th>Stake holder</th>
        <th>Primary %</th>
        <th>Primary Pro %</th>
        <th>Secondary %</th>
      </tr>
      <tr>
        <td>Collector</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>{{ 100 - royalty - baseRate }}</td>
      </tr>
      <tr>
        <td>Creator (you)</td>
        <td>{{ 100 - royalty - baseRate }}</td>
        <td>{{ 100 }}</td>
        <td>{{ royalty }}</td>
      </tr>
      <tr>
        <td>Dartroom</td>
        <td>{{ royalty + baseRate }}</td>
        <td>N/A</td>
        <td>{{ baseRate }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">

defineProps({
  royalty: {
    typeof: Number,
    default: 0,
  }
})

const baseRate = 3

</script>

<style scoped lang="scss">

table {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 1px;
  width: 100%;
}

tr {
  height: 36px;
  align-items: center;
  color: $c-on-background;

  & th {
    font-size: 0.85rem;
    font-weight: 600;
    padding: 4px;
    outline: 2px solid $c-on-background;  
    outline-offset: -1px;  
  }

  & td {
    font-size: 0.9rem;
    font-weight: 500;
    padding: 4px;
    outline: 2px solid $c-on-background;  
    outline-offset: -1px;  
    text-align: center;
  }

  & th:first-child {
    border-radius: $radius-m 0px 0px 0px;
  }

  & th:last-child {
    border-radius: 0px $radius-m 0px 0px;
  }

  &:last-child td:first-child {
    border-radius: 0px 0px 0px $radius-m;
  }

  &:last-child td:last-child {
    border-radius: 0px 0px $radius-m 0px;
  }
}

</style>