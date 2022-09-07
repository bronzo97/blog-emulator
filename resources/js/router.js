import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"
import PageNotFound from "./pages/PageNotFound.vue"
import UserPosts from "./pages/UserPosts.vue"
import PostShow from "./pages/PostShow.vue"

Vue.use(VueRouter)

const routes = [
	{ path: "/", component: Home, name: "home.index", 
    meta: {
        title: "Home Blog",
        subtitle: "A Blog made by class #65",
        bgImage: "home-bg.jpg",
        }
    },
    { path: "/posts/:post_slug", component: PostShow, name: "posts.show", 
    meta: {
        title: "Dettagli post",
        subtitle: "Dettagli del post #",
        }
    },
    { path: "/:user_id/posts", component: UserPosts, name: "user.posts", 
    meta: {
        title: "Post Utente",
        subtitle: "Lista Posts scritti da questo utente",
        bgImage: "home-bg.jpg",
        }
    },
    { path: "/contact", component: Contact, name: "contact.index",
    meta: {
        title: "Contact Page",
        subtitle: "A Blog made by class #65",
        bgImage: "home-bg.jpg",
        }
    },
    { path: "/about", component: About, name: "about.index",
    meta: {
        title: "About Page",
        subtitle: "A Blog made by class #65",
        bgImage: "home-bg.jpg",
        }
    },
    { path: "/*", component: PageNotFound , name: "pagenotfound.index",
    meta: {
        title: "404 - Page not Found",
        subtitle: "A Blog made by class #65",
        bgImage: "home-bg.jpg",
        }
    },
]

const router =  new VueRouter({
    routes: routes,
    mode: "history",
})

router.beforeEach((to, from, next) =>{
    document.title = to.meta.title ?? "Welcome in Blog Emulator"

    next()
})

export default router

