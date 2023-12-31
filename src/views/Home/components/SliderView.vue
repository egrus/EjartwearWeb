<template>
    <Carousel :items-to-show="2.5" :wrap-around="true" :settings="settings" :breakpoints="breakpoints" :transition="1000"
        class="crousel" :autoplay="5000" :pauseAutoplayOnHover="true">
        <Slide v-for="categori in categories" :key="categori.id">
            <router-link :to="'/categori/' + categori.id" @mouseover.stop="isGif = categori.id" @mouseleave="isGif = null"
                class="carousel__item">
                <!-- <img :src="isGif === categori.id ? categori.category_gif : categori.category_image" :alt="categori.title" class="categori-image"/> -->
                <div class="categori-image-img" v-if="isGif !== categori.id">
                    <img :src="categori.category_image" :alt="categori.title" class="categori-image" />
                </div>
                <div class="categori-image-gif" v-else>
                    <img :src="categori.category_gif" :alt="categori.title" class="categori-gif" />
                </div>
            </router-link>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "SliderView",
    data() {
        return {
            isGif: null,
            categories: {
                1: {
                    id: 1,
                    title: "Hellsing",
                    category_image: "src/assets/images/category-image/1.png",
                    category_gif: "src/assets/images/category-gif/hellsing.gif",
                },
                2: {
                    id: 2,
                    title: "Berserk ",
                    category_image: "src/assets/images/category-image/2.webp",
                    category_gif: "src/assets/images/category-gif/berserk.gif",
                },
                3: {
                    id: 3,
                    title: "Vagabond",
                    category_image: "src/assets/images/category-image/3.webp",
                    category_gif: "src/assets/images/category-gif/vagabond.gif",
                },
                4: {
                    id: 4,
                    title: "Vinland Saga",
                    category_image: "src/assets/images/category-image/4.webp",
                    category_gif: "src/assets/images//category-gif/vinlandsaga.gif",
                },
                5: {
                    id: 5,
                    title: "Bleach",
                    category_image: "src/assets/images/category-image/5.webp",
                    category_gif: "src/assets/images/category-gif/bleach.gif",
                },
                6: {
                    id: 6,
                    title: "OnePiece",
                    category_image: "src/assets/images/category-image/6.png",
                    category_gif: "src/assets/images/category-gif/onepiece.gif",
                },
                7: {
                    id: 7,
                    title: "Evangelion",
                    category_image: "src/assets/images/category-image/7.webp",
                    category_gif: "src/assets/images/category-gif/evengalion.gif",
                },
                8: {
                    id: 8,
                    title: "Attack On Titan ",
                    category_image: "src/assets/images/category-image/8.webp",
                    category_gif: "src/assets/images/category-gif/aot.gif",
                },
                9: {
                    id: 9,
                    title: "Baki",
                    category_image: "src/assets/images/category-image/9.webp",
                    category_gif: "src/assets/images/category-gif/baki.gif",
                },
                10: {
                    id: 10,
                    title: "Chainsaw Man",
                    category_image: "src/assets/images/category-image/10.png",
                    category_gif: "src/assets/images/category-gif/chainsawman.gif",
                },
                11: {
                    id: 11,
                    title: "Demon Slayer",
                    category_image: "src/assets/images/category-image/11.webp",
                    category_gif: "src/assets/images/category-gif/demon.gif",
                },
                12: {
                    id: 12,
                    title: "HUNTERxHUNTER",
                    category_image: "src/assets/images/category-image/12.webp",
                    category_gif: "src/assets/images/category-gif/hxh.gif",
                },
                13: {
                    id: 13,
                    title: "JoJo",
                    category_image: "src/assets/images/category-image/13.png",
                    category_gif: "src/assets/images/category-gif/jojo.gif",
                },
                14: {
                    id: 14,
                    title: "Jujutsu",
                    category_image: "src/assets/images/category-image/14.webp",
                    category_gif: "src/assets/images/category-gif/jujutsu.gif",
                },
                15: {
                    id: 15,
                    title: "Naruto",
                    category_image: "src/assets/images/category-image/15.webp",
                    category_gif: "src/assets/images/category-gif/naruto.gif",
                },
                16: {
                    id: 16,
                    title: "DarkArt",
                    category_image: "src/assets/images/category-image/darkart.webp",
                    category_gif: "src/assets/images/category-gif/dark.gif",
                },
                17: {
                    id: 17,
                    title: "JapanArt",
                    category_image: "src/assets/images/category-image/japanart.png",
                    category_gif: "src/assets/images/category-gif/japanese.gif",
                },
                18: {
                    id: 18,
                    title: "JDM",
                    category_image: "src/assets/images/category-image/jdm.png",
                    category_gif: "src/assets/images/category-gif/jdm.gif",
                },
            },

            settings: {
                itemsToShow: 1,
                snapAlign: "center",
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                280: {
                    itemsToShow: 1,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
                320: {
                    itemsToShow: 1,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
                425: {
                    itemsToShow: 1,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
                500: {
                    itemsToShow: 1.3,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
                600: {
                    itemsToShow: 1.60,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
                // 700px and up
                768: {
                    itemsToShow: 2,
                    snapAlign: "start",
                    itemsToScroll: 2,
                },

                // 1024 and up
                1024: {
                    itemsToShow: 2.5,
                    snapAlign: "start",
                    itemsToScroll: 2,
                },
                1280: {
                    itemsToShow: 3,
                    snapAlign: "start",
                    itemsToScroll: 2,
                },
                1440: {
                    itemsToShow: 4,
                    snapAlign: "start",
                    itemsToScroll: 2,
                },
            },
        };
    },

    components: {
        Carousel,
        Slide,
        Navigation,
    },
});
</script>

<style scoped>
.carousel__item img {
    height: 100%;
}

.carousel__item {
    height: 170px;
    width: 360px;
    background-color: var(--bg-second-black);
    /* padding: 10px; */
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}

.categori-image {
    max-width: 300px;
    max-height: 130px;
}

.categori-gif img {
    width: 100%;
}

.categori-image-img,
.categori-image-gif {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.gif {
    width: 20px;
}

.crousel {
    margin-top: 60px;
    box-sizing: border-box;
    max-width: 1920px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>
