<script>
import HeaderView from "../components/MainHeader.vue";
import FooterView from "../components/MainFooter.vue";

export default {
    components: {
        HeaderView,
        FooterView,
    },
};
</script>

<template>
    <div class="PageViewer">
        <HeaderView />
        <slot />
        <FooterView />
    </div>
</template>

<style scoped>
.PageViewer {}
</style>
