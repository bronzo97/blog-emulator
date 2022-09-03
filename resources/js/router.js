import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"
import PageNotFound from "./pages/PageNotFound.vue"

Vue.use(VueRouter)

const routes = [
	{ path: "/", component: Home, name: "home.index" },
    { path: "/contact", component: Contact, name: "contact.index" },
    { path: "/about", component: About, name: "about.index" },
    { path: "/*", component: PageNotFound , name: "pagenotfound.index" },
]

export default new VueRouter({
    routes: routes,
    mode: "history",
})

