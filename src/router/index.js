import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../Layouts/MainLayout.vue";
import ProductLayout from "../Layouts/ProductLayout.vue";
import SecondLayout from "../Layouts/SecondLayout.vue";
import AboutLayout from "../Layouts/AboutLayout.vue";
import ContactLayout from "../Layouts/ContactLayout.vue";
import FAQsLayout from "../Layouts/FAQsLayout.vue";
import CargoDeliveryLayout from "../Layouts/CargoDeliveryLayout.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/Home/HomeView.vue"),
            meta: {
                title: "EJARTWEAR | SOKAK TARZI | GİYİM MAĞAZASI",
                layout: MainLayout,
                description: "Ejartwear Home Page",
                canonical: "https://ejartwear.com",
                keywords: "t-shirts, hoodies, sweatshirts",
                url: "https://ejartwear.com",
                identifierURL: "https://ejartwear.com",
            },
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/About/AboutView.vue"),
            meta: {
                title: "HAKKIMIZDA | Ejartwear",
                layout: AboutLayout,
                description: "Ejartwear About Page",
                canonical: "https://ejartwear.com/about",
                keywords: "About Ejartwear",
                url: "https://ejartwear.com/about",
                identifierURL: "https://ejartwear.com/about",
            },
        },
        {
            path: "/products",
            name: "products",
            component: () => import("../views/Product/ProductsView.vue"),
            meta: {
                title: "ÜRÜNLER | Ejartwear",
                layout: ProductLayout,
                description: "Ejartwear Products Page",
                canonical: "https://ejartwear.com/products",
                keywords: "t-shirts, printed t-shirt",
                url: "https://ejartwear.com/products",
                identifierURL: "https://ejartwear.com/products",
            },
        },
        {
            path: "/product/detail/:id",
            name: "product detail",
            component: () => import("../views/Product/ProductDetail.vue"),
            meta: {
                title: "ÜRÜNLER | Ejartwear",
                layout: SecondLayout,
                description: "Ejartwear Products Page",
                canonical: "https://ejartwear.com/products",
                keywords: "t-shirts, printed t-shirt",
                url: "https://ejartwear.com/products",
                identifierURL: "https://ejartwear.com/products",
                rquired: true,
            },
        },
        {
            path: "/sizetable",
            name: "size table",
            component: () => import("../views/SizeView.vue"),
            meta: {
                title: "BEDEN TABLOSU | Ejartwear",
                layout: SecondLayout,
                description: "Ejartwear Size Table Page",
                canonical: "https://ejartwear.com/sizetable",
                keywords: "t-shirts, printed t-shirt",
                url: "https://ejartwear.com/sizetable",
                identifierURL: "https://ejartwear.com/sizetable",
            },
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("../views/Contact/ContactView.vue"),
            meta: {
                title: "İLETİŞİM | Ejartwear",
                layout: ContactLayout,
                description: "Ejartwear Contact Page",
                canonical: "https://ejartwear.com/contact",
                keywords: "t-shirts, printed t-shirt",
                url: "https://ejartwear.com/contact",
                identifierURL: "https://ejartwear.com/contact",
            },
        },
        {
            path: "/sss",
            name: "faqs",
            component: () => import("../views/FAQs/SSSView.vue"),
            meta: {
                title: "S.S.S | Ejartwear",
                layout: FAQsLayout,
                description: "Ejartwear FAQs Page",
                canonical: "https://ejartwear.com/sss",
                keywords: "t-shirts, printed t-shirt",
                url: "https://ejartwear.com/sss",
                identifierURL: "https://ejartwear.com/sss",
            },
        },
        {
            path: "/delivery-and-return",
            name: "delivery",
            component: () => import("../views/CargoDelivery/CargoView.vue"),
            meta: {
                title: "KARGO VE TESLİMAT | Ejartwear",
                layout: CargoDeliveryLayout,
                description: "Ejartwear Cargo&Delivery Page",
                canonical: "https://ejartwear.com/delivery-and-return",
                keywords: "t-shirts, printed t-shirt",
                url: "https://ejartwear.com/delivery-and-return",
                identifierURL: "https://ejartwear.com/delivery-and-return",
            },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/Auth/Login/LoginView.vue"),
            meta: {
                title: "Giriş | Ejartwear",
                layout: FAQsLayout,
                description: "Ejartwear Login Page",
                canonical: "https://ejartwear.com/login",
                keywords: "t-shirts, printed t-shirt",
                url: "https://ejartwear.com/login",
                identifierURL: "https://ejartwear.com/login",
            },
        },

        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "NotFound",
        //     component: () => import(/* webpackChunkName: "pageNotFound" */ "../views/ErrorViews/NotFoundView.vue"),
        //     meta: {
        //         title: "Export Raijoffle - Page Not Found",
        //         description: "Export Raijoffle Page Not Found",
        //         canonical: "https://export.raijoffle.com"/pagenotfound",
        //         keywords: "Page Not Found",
        //         url: "https://export.raijoffle.com"/:pathMatch(.*)*",
        //         identifierURL: "https://export.raijoffle.com"/:pathMatch(.*)*",
        //     },
        // },
    ],

});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const keywords = document.querySelector('meta[name="keywords"]');
    const url = document.querySelector('meta[name="url"]');
    const identifierURL = document.querySelector('meta[name="identifier-URL"]');
    description.setAttribute("content", to.meta.description);
    canonical.setAttribute("href", to.meta.canonical);
    keywords.setAttribute("content", to.meta.keywords);
    url.setAttribute("content", to.meta.url);
    identifierURL.setAttribute("content", to.meta.identifierURL);

    if (to.matched.length === 0) {
        // Eşleşen bir route yoksa, yani 404 durumu
        const error = new Error("Not Found");
        error.status = 404;
        next(error);
        console.log(error);
    } else {
        // Geçerli route varsa devam et
        next();
    }


});
router.afterEach(() => {
    window.scrollTo(0, 0);

});
export default router;
