<template>
    <div>
        <h2 class="text-center">Pagina Home</h2>
        <div class="container">
            <div v-for="post in posts" :key="post.id" class="m-3">
                <router-link :to="{name: 'posts.show', params: { post_slug: post.slug}}">
                    <h3 class="post-title">{{ post.title }}</h3>
                    <p class="post-content">{{ post.content }}</p>
                </router-link>
                <p>Post creado da <router-link :to="{ name:'user.posts', params: {'user_id': post.user.id} }">{{ post.user.name }}</router-link> il {{ new Intl.DateTimeFormat("it-IT", {dateStyle: "long"}).format(new Date(post.created_at)) }}</p>
            </div>
            <div class="text-center m-3" v-if="paginationData.current_page < paginationData.last_page">
                <button class="btn btn-primary" @click="loadMoereData">Carica altri posts</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {

        data() {
    return {
        posts: [],
        paginationData: {},
    }
},

methods: {
    fetchData(page = 1) {
    axios.get("/api/posts?page=" + page)
        .then((resp) => {
            this.posts.push(...resp.data.data)
            this.paginationData = resp.data
        })
    },
    loadMoereData() {
        const currentPage = this.paginationData.current_page

        this.fetchData(currentPage + 1)
    }
},

mounted(){
    this.fetchData();
}

    }

</script>

<style lang="scss">

    .post-title {
        font-size: 1.5rem;
        color: #000;
        text-decoration: underline;
    }
    .post-content {
        font-size: 1rem;
        color: rgb(49, 48, 48);
    }

</style>

