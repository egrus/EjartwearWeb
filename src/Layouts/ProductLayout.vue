<script setup>
import ProductHeader from "../components/ProductHeaderView.vue";
import ProductFooter from "../components/ProductFooterView.vue";
import FilterView from "../views/Product/components/FilterView.vue";
import { ref } from 'vue';


const sirala = ref("onecikan");

const filterOpen = ref(false);

</script>


<template>
    <div class="PageViewer">
        <ProductHeader />
        <main>

            <div class="filter" :class="{ 'filterOpen': filterOpen }">
                <FilterView />
                <span class="filterCloseButton" @click="filterOpen = false"><i class="pi pi-times-circle"></i></span>
            </div>

            <div class="products-container">
                <div class="productHead">
                    <div class="filterButton">
                        <span class="filterIcon" @click="filterOpen = true"><i class="pi pi-filter"></i>
                            Filter</span>
                    </div>

                    <div class="price">
                        <span>Sıralama:</span>
                        <div class="select">
                            <select v-model="sirala">
                                <option value="onecikan">Öne Çıkan</option>
                                <option value="enyeni">En Yeni</option>
                                <option value="fiyatdusuk">Fiyat (Düşükten - Yükseğe)</option>
                                <option value="fiyatyuksek">Fiyat (Yüksekten - Düşüğe)</option>
                                <option value="urunadiaz">Ürün Adı A-Z</option>
                                <option value="urunadiza">Ürün Adı Z-A</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="products">
                    <slot />
                </div>
            </div>
        </main>
        <ProductFooter />
    </div>
</template>

<style scoped lang="scss">
main {
    display: flex;
    max-width: 1500px;
    width: 100%;
    height: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 0 10px;
    box-sizing: border-box;
}

.filter {
    max-width: 350px;
    width: 100%;
    margin-right: 10px;
    box-sizing: border-box;
    padding-left: 10px;
    height: fit-content;
}

.products-container {
    width: 100%;
    height: 100%;
    margin-left: 10px;
}

.price {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
}

.products {
    width: 100%;
}

.select select {
    font-size: 14px;
    font-weight: 600;
}

.price span:nth-child(1) {
    margin-right: 10px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
}

.PageViewer {
    /* background-image: url("../assets/images/product-background-pattern-white.webp"); */
    /* background-repeat: repeat;
    background-size: 200px;
    backdrop-filter: saturate(80%);
   */
    background-image: url("../assets/images/japanese-temple-product-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.filterButton {
    display: none;

    & .filterIcon {
        width: fit-content;
        height: 40px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        gap: 10px;
        padding: 10px 20px;
        box-sizing: border-box;
        border: 2px solid #ffffff;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 2px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            // margin-top: -5px;
            transform: scale(1.1);
            color: red;

            & .pi-filter {
                color: red;
            }
        }

        & .pi-filter {
            transition: all 0.3s ease-in-out;
        }
    }
}

.productHead {
    margin-bottom: 40px;
}

.filterCloseButton {
    position: fixed;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-self: center;
    align-items: center;
    font-size: 24px;
}

@media screen and (max-width: 1024px) {
    .productHead {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        align-content: center;
        gap: 20px;

        margin-bottom: 20px;


    }

    .filterButton {
        display: flex;
    }

    .filter {
        position: fixed;
        background: #0c0c0c;
        padding: 40px;
        box-sizing: border-box;
        z-index: 99;
        transition: all 0.3s ease-in-out;
        transform: translateX(-105%)
    }

    .filterOpen {
        width: 100% !important;
        height: 100% !important;
        max-width: unset;
        max-height: unset;
        top: 0;
        left: 0;
        transform: translateX(0%)
    }
}
</style>
