<!-- @format -->

<script setup lang="ts">
const getBreadcrumbs = () => {
  const route = useRoute();

  const pathArray = route.path.split("/");
  pathArray.shift();
  const breadcrumbs = pathArray.reduce(
    (breadcrumbArray: { to: string; title: string }[], path, idx) => {
      breadcrumbArray.push({
        to: !!breadcrumbArray[idx - 1]
          ? breadcrumbArray[idx - 1].to + "/" + path
          : "/" + path,
        title: path.toString().replace("-", " "),
      });
      return breadcrumbArray;
    },
    []
  );
  return breadcrumbs;
};

const breadcrumbs = getBreadcrumbs();
</script>

<template>
  <div class="breadcrumbs">
    <p v-for="crumb in breadcrumbs" key="crumb">
      <a :href="crumb.to">{{ crumb.title }}/</a>
    </p>
  </div>
</template>

<style>
.breadcrumbs {
  display: flex;
  gap: 5px;
  p {
    color: rgb(160, 160, 160);
    margin: 10px 0;
  }
}
</style>
