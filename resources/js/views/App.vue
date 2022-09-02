<template>
    <div>
        <TheNavbar></TheNavbar>
        <h1>Pagina vue funzionante</h1>
        <TheFooter></TheFooter>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';

    export default {
    components: { TheNavbar, TheFooter }
}
</script>
