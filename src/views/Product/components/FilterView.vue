<template>
    <div id="Filter">
        <div>
            <div class="priceDiv">
                <h2>Fiyat</h2>
            </div>
            <div class="priceRange">
                <div v-if="loading">Loading...</div>
                <div v-else>
                    <Slider v-model="pricevalue" :merge="merge" :format="format" :min="minValue" :max="maxValue"
                        :tooltips="tooltip" :tooltipPosition="'bottom'" />
                </div>
            </div>
        </div>
        <hr />
        <h2>Ürün Modelleri</h2>
        <div class="modelsOptions">
            <div v-for="categori in categoriList" :key="categori.id">
                <input type="radio" v-model="modelSelect" :id="categori.id" name="modelOption" :value="categori.title"
                    hidden /><label :for="categori.id">{{ categori.title }}</label>
            </div>
        </div>
        <hr />
        <div>
            <details open>
                <summary>
                    <h2>Tasarım Seçenekleri</h2>
                </summary>
                <div class="designes">
                    <div class="checkbox-wrapper" v-for="design in designs" :key="design.value">
                        <input type="radio" :id="design.id" :name="design.id" :value="design.value"
                            v-model="selectedDesign" />
                        <label :for="design.id"> <span></span>{{ design.label }}</label>
                    </div>
                </div>
            </details>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Slider from "@vueform/slider";
import axios from "axios";

const selectedDesign = ref(null);

const designs = [
    { id: "designAot", value: "AOT", label: "Atack On Titan" },
    { id: "designBaki", value: "BAKI", label: "Baki Hanma" },
    { id: "designBersek", value: "BERSERK", label: "Berserk" },
    { id: "designClover", value: "BLACKCLOVER", label: "Black Clover" },
    { id: "designBleach", value: "BLEACH", label: "Bleach" },
    { id: "designChainsaw", value: "CHAINSAWMAN", label: "Chainsaw Man" },
    { id: "designDemon", value: "DEMONSLAYER", label: "Demon Slayer" },
    { id: "designHell", value: "HELLSING", label: "Hellsing" },
    { id: "designHunter", value: "HUNTERXHUNTER", label: "Hunter x Hunter" },
    { id: "designNaruto", value: "NARUTO", label: "Naruto" },
    { id: "designOnePiece", value: "ONEPIECE", label: "One Piece" },
    { id: "designGhoul", value: "TOKYOGHOUL", label: "Tokyo Ghoul" },
    { id: "designVaga", value: "VAGABOND", label: "Vagabond" },
    { id: "designVinland", value: "VINDLANDSAGA", label: "Vinland Saga" },
    { id: "designInital", value: "INITALD", label: "Inital D" },
    { id: "designEvangel", value: "EVANGELION", label: "Evangelion" },
    { id: "designJapan", value: "JAPANASEART", label: "Japanse Art" },
    { id: "designDark", value: "DARKART", label: "Dark Art" },
    { id: "designJDM", value: "JDM", label: "JDM" },
];

const modelSelect = ref(null);

const pricevalue = ref([]);
const merge = ref(150);
const minValue = ref();
const maxValue = ref();

const format = ref({
    suffix: " ₺",
    decimals: 0,
    thousand: ",",
});

const categoriList = ref([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const response = await axios.get("/api/b2b/categories", {
            headers: {
                token: "244BAEFB038E4C67BAA46D3F3A0FD8BC",
                Authorization: "Bearer 244BAEFB038E4C67BAA46D3F3A0FD8BC",
            },
        });
        categoriList.value = response.data.data.categories;
    } catch (error) {
        console.error("API Categires Error", error);
    }

    try {
        const response = await axios.get("/api/b2b/products", {
            headers: {
                token: "244BAEFB038E4C67BAA46D3F3A0FD8BC",
                Authorization: "Bearer 244BAEFB038E4C67BAA46D3F3A0FD8BC",
            },
        });
        const products = response.data.data.products; // Assuming the response contains an array of products
        console.log(products);
        if (products.length > 0) {
            // Find min and max prices
            const prices = products.map((product) => product.price);
            minValue.value = Math.min(...prices);
            maxValue.value = Math.max(...prices);
            pricevalue.value = [minValue.value, maxValue.value];
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        loading.value = false;
    }
});
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
hr {
    margin: 30px 0px;
    width: 70%;
    height: 1px;
    border: none;
    color: #e4e4e41e;
    background: rgb(255, 255, 255);
    background: linear-gradient(90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(0, 0, 0, 0.38279061624649857) 100%);
}

#Filter {
    padding: 0px 10px 10px 10px;
    height: 100%;
}

summary {
    display: block;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
}

details {
    -webkit-user-select: none;
    user-select: none;
}

summary::after {
    margin-left: 1ch;
    display: inline-block;
    content: "+";
    transition: 0.2s;
    font-size: 20px;
    line-height: 28px;
}

details[open] summary::after {
    transform: rotate(45deg);
    color: red;
}

summary h2 {
    display: inline-block;
    letter-spacing: 1px;
    line-height: 28px;
}

h2 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    letter-spacing: 1px;
}

.modelsOptions div {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    line-height: 25px;
}

.modelsOptions div label {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
}

.modelsOptions div label:hover {
    color: red;
    cursor: pointer;
}

.modelsOptions div:last-of-type {
    margin-bottom: 10px;
}

.designes {
    margin-top: 10px;
}

.designes div input {
    margin-right: 10px;
}

.designes div label {
    line-height: 30px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
}

.designes div label:hover {
    cursor: pointer;
}

.priceRange {
    margin-bottom: 50px;
    margin-top: 20px;
    max-width: 80%;
}

.priceDiv {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
}

.priceValue {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
}

.priceValue span {
    margin-right: 20px;
    font-size: 14px;
    font-weight: 600;
}

.priceValue span:last-of-type {
    margin-right: 0;
}
</style>
