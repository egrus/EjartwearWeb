<script>
import SecondHeader from "../components/SecondHeaderView.vue";
import ProductFooter from "../components/ProductFooterView.vue";

export default {
    components: {
        SecondHeader,
        ProductFooter,
    },
};
</script>

<template>
    <div class="PageViewer">
        <SecondHeader />
        <slot />

        <ProductFooter />
    </div>
</template>
<script setup></script>
<style scoped>
.PageViewer {
    /* background-image: url("../assets/images/product-background-pattern-white.webp"); */
    /* background-repeat: repeat;
    background-size: 200px;
    backdrop-filter: saturate(80%);
   */
    background-image: url("../assets/images/ejartwear-home-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
