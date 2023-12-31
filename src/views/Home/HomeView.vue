<script setup>
import Slider from "./components/SliderView.vue";
import Products from "./components/ProductsView.vue";

</script>
<template>
    <main class="homePage">
        <div class="banner">
        </div>

        <div class="categorys">
            <Slider />
        </div>

        <div class="pages-detail">
            <Products />
        </div>
    </main>
</template>

<style scoped>
.homePage {
    padding: 0px 0px 120px 0px;

}

.banner {
    height: 100%;
    overflow: hidden;
    min-height: 1000px;
    background: url("../../assets/images/son-aksam-yemegi.jpg");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center top;
}




.homePage {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px 600px;
}

.category {
    padding: 0px 10px;
    box-sizing: border-box;
}

.page-detail {
    padding: 0px 10px;
    box-sizing: border-box;
}
</style>
