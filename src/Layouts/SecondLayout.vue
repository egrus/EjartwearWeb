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
<style scoped></style>
