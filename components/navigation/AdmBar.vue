<template lang="">
    <div class="admin-bar">
        <h1>Admin Dashboard</h1>
        <div class="admin-bar-section">
            <h2> <IconsQuickReference/> <router-link to="/admin/applications">Applications</router-link></h2>
            <h2> <IconsMint/>  <router-link to="/admin/airdrop">Airdrop</router-link></h2>   
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">


.admin-bar {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;

        &-section {
        display: flex;
        flex-direction: column;
        margin-left: 40px;

        &-svg{
            width: 64px; /* Defina a largura desejada */
            height: 64px; /* Defina a altura desejada */
        }

      }
   

}
</style>