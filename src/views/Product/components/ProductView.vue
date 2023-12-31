<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const productsList = ref([]);
const productImages = ref([]);
const coverImages = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('/api/b2b/products', {
            headers: {
                "token": "244BAEFB038E4C67BAA46D3F3A0FD8BC",
                "Authorization": 'Bearer 244BAEFB038E4C67BAA46D3F3A0FD8BC'
            }
        });

        productsList.value = response.data.data.products;

        productsList.value.forEach(product => {
            if (product.photo) {
                try {
                    const jsonData = JSON.parse(product.photo);
                    jsonData.forEach(item => {
                        if (item.FlCover) {
                            coverImages.value.push({
                                PhotoUrl: item.PhotoUrl,
                                PhotoUrlOriginal: item.PhotoUrlOriginal,
                                FlCover: item.FlCover
                            });
                        } else {
                            productImages.value.push({
                                PhotoUrl: item.PhotoUrl,
                                PhotoUrlOriginal: item.PhotoUrlOriginal,
                                FlCover: item.FlCover
                            });
                        }
                    });
                } catch (error) {
                    console.error("JSON parse hatası:", error);
                }
            }
        });
    } catch (error) {
        console.error("API çağrısı hatası:", error);
    }
});
</script>

<template>
    <div class="container">
        <div class="card" v-for="(product, index) in productsList" :key="index">
            <div @click="$router.push(`/product/detail/${product.title.toLowerCase().replace(/\s+/g, '-')}`)">
                <div class="imgBx">
                    <div v-for="(image, imageIndex) in coverImages" :key="imageIndex">
                        <img v-if="imageIndex === index" :src="image.PhotoUrl" :alt="index">
                    </div>
                </div>
                <div class="contentBx">
                    <h2>{{ product.title }}</h2>
                    <h4>Fiyat: {{ product.price }}TL</h4>

                    <div class="size">
                        <h3>BEDEN:</h3>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XXL</span>
                    </div>

                    <div class="color">
                        <h3>RENK:</h3>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700,800, 800i, 900&display=swap");

.container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    gap: 30px 60px;
}

.container .card {
    position: relative;
    width: 320px;
    height: 460px;
    background: #0d0d0d;
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid #fff;
    cursor: pointer;
}

.container .card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e91b1b;
    clip-path: circle(150px at 80% 20%);
    transition: 1s ease-in-out;
}

.container .card:hover:before {
    clip-path: circle(300px at 80% -20%);
}

.container .card:after {
    content: "㍿";
    position: absolute;
    top: -15%;
    left: -47%;
    font-size: 35em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.125);
}

.container .card .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 100%;
    height: 100%;
    transition: 0.5s;
}

.container .card:hover .imgBx {
    top: 15px;
    transform: translateY(-25%);
}

.container .card .imgBx img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(20deg);
    width: 300px;
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    filter: drop-shadow(0 0 2rem rgb(0, 0, 0));
}

.container .card .contentBx {
    position: absolute;
    bottom: -5%;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
}

.container .card:hover .contentBx {
    height: 180px;
}

.container .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;
    color: #fff;
}

.container .card .contentBx h4 {
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
    color: #fff;
    margin-top: 10px;
}

.container .card .contentBx .size,
.container .card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
}

.container .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
}

.container .card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
}

.container .card .contentBx .size h3,
.container .card .contentBx .color h3 {
    color: white;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}

.container .card .contentBx .size span {
    width: 32px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: 0.5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
}

.container .card .contentBx .size span:hover {
    background: #b90000;
}

.container .card .contentBx .color span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.container .card .contentBx .color span:nth-child(2) {
    background: #000000;
}

.container .card .contentBx .color span:nth-child(3) {
    background: #ffffff;
}

.container .card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
}

.container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.7s;
}

@media screen and (max-width: 1440px) {
    .container .card {
        max-width: 28%;
    }

}

@media screen and (max-width: 768px) {
    .container .card {
        min-width: 320px;
    }

}
</style>

