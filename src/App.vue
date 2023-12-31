<script setup>
// import { RouterView } from "vue-router";
</script>

<template>
    <component :is="$route.meta.layout" class="RouterView">
        <router-view />
    </component>
</template>

<style>
:root {
    --bg-black: #000;
    --text-white: #fff;
    --text-red: #d61429;
    --bg-second-black: #0d0d0d;
}

.RouterView {
    background-color: var(--bg-black);
}

* {
    color: var(--text-white);
    font-family: "Roboto";
}

.pages-detail {
    max-width: 1500px;
    width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
}

:root {
    --slider-bg: #d1d5db1e;
    --slider-height: 5px;
    --slider-connect-bg: #ff0000;
    --slider-handle-ring-color: #ffffff48;
    --slider-width: 10px;

    --slider-handle-width: 14px;
    --slider-handle-height: 14px;
    --slider-handle-ring-width: 3px;

    --slider-tooltip-font-size: 0.875rem;
    --slider-tooltip-line-height: 1.25rem;
    --slider-tooltip-font-weight: 600;
    --slider-tooltip-min-width: 20px;
    --slider-tooltip-bg: #ff0000;
    --slider-tooltip-bg-disabled: #9ca3af;
    --slider-tooltip-color: #ffffff;
    --slider-tooltip-radius: 5px;
    --slider-tooltip-py: 2px;
    --slider-tooltip-px: 6px;
    --slider-tooltip-arrow-size: 5px;
    --slider-tooltip-distance: 3px;
}</style>
