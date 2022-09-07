<template>
    <div class="container">
        <div>
            <h4>Categorie: </h4>
            <h5>Tags: </h5> 
        </div>
        <div v-html="post.content"></div>

    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
    
    data() {
        return {
        post: {}
        }
    },
    methods: {
        fetchData() {
        axios.get("/api/posts/" + this.$route.params.post_slug)
            .then(resp => {
            this.post = resp.data
            })
        }
    },
    mounted() {
        this.fetchData()
    }
    
    }
    </script>

    

<style lang="scss">

</style>