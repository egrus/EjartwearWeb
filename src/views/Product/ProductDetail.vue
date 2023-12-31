<script setup>
import { vue3dLoader } from "vue-3d-loader";
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router';

const route = useRoute();


const enablePan = ref(false);
const enableZoom = ref(false);
const enableRotate = ref(true);
const autoplay = ref(false);
const beden = ref("S");

console.log(route.params.id)

const productsList = ref([]);
// const productImages = ref([]);
// const coverImages = ref([]);
const productPrice = ref([]);

const productName = ref()
const productDescription = ref(
    'R34 Nissan Skyline ve Toyota Supra, performans odaklı spor otomobiller olarak tanınır. Oversize tişörtler ise genellikle büyük ve bol kesimli tasarımlara sahip giysilerdir.R34 ve Supra tasarımları, genellikle bu ikonik otomobillerin görsellerini ve karakteristik özelliklerini içerir.Bu tasarımlar, otomobil meraklıları için popüler bir seçenektir ve genellikle sokak kültürü ile spor otomobil tutkunlarını bir araya getiren özel ürünlerdir.'
)
const coverImage = ref()
console.log(productsList)


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

            const parameter = product.title.toLowerCase().replace(/\s+/g, '-');

            if (parameter == route.params.id) {
                productName.value = product.title
                if(product.description !== null){
                    productDescription.value = `'R34 Nissan Skyline ve Toyota Supra, performans odaklı spor otomobiller olarak tanınır. Oversize tişörtler ise genellikle büyük ve bol kesimli tasarımlara sahip giysilerdir.R34 ve Supra tasarımları, genellikle bu ikonik otomobillerin görsellerini ve karakteristik özelliklerini içerir.Bu tasarımlar, otomobil meraklıları için popüler bir seçenektir ve genellikle sokak kültürü ile spor otomobil tutkunlarını bir araya getiren özel ürünlerdir.'`
                }else{
                    productDescription.value = product.description
                }
                coverImage.value = null
                productPrice.value = product.price
                //Diğerleri Eklenecek
            }
        });
    } catch (error) {
        console.error("API çağrısı hatası:", error);
    }
});
</script>
<template>
    <div class="productDetail">
        <div class="detailContainer">
            <div class="productModel">
                <vue3dLoader :width="570" :height="600" :showFps="false" :fileType="'glb'" :autoPlay="autoplay"
                    :cameraPosition="{ x: 0, y: 0, z: 1.3 }" :filePath="'/models/Glb.glb'" :textureImage="''"
                    :backgroundColor="0" :backgroundAlpha="0" :controlsOptions="{
                        enablePan,
                        enableZoom,
                        enableRotate,
                    }" :enableDamping="true" :dampingFactor="0.05" :verticalCtrl="true" :horizontalCtrl="true"
                    :intersectRecursive="false"></vue3dLoader>
            </div>
            <div class="productFeatures">
                <h1> {{ productName }}</h1>
                <div class="priceandsize">
                    <span class="price">₺{{ productPrice }}</span>
                    <a href="/sizetable" class="sizeTable"><span>Beden Tablosu</span></a>
                </div>

                <div class="select">
                    <select v-model="beden" name="beden" id="beden" class="size-selector">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>

                <a href="#" class="addToCart"><span>Sepete Ekle</span></a>

                <div class="productAccordion">
                    <CAccordion :active-item-key="2" always-open>
                        <CAccordionItem :item-key="1">
                            <CAccordionHeader> Detaylar </CAccordionHeader>
                            <CAccordionBody>
                                <p>Mevsimleri EJartwear ile kapamaya hazır mısınız? Sınırlı sayıda üretilen yeni serimizle
                                    güneşin tadını çıkarın.</p>
                            </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem :item-key="2">
                            <CAccordionHeader>Teslimat & İade</CAccordionHeader>
                            <CAccordionBody>
                                <h3>Kargo & Teslimat</h3>
                                <p>Siparişler 2-5 işgünü içinde kargoya teslim edilmektedir. Sipariş kargoya verildiğinde
                                    takip kodu e-posta ile iletilmektedir.</p>
                                <h3>İade</h3>
                                <p>
                                    Ayıplı ya da hasarlı mal teslim alındıktan sonraki 14 gün içerisinde iade
                                    edilebilmektedir. Ürünün iadesinin yapılabilmesi için, sisteme üye
                                    girişi yaptıktan sonra "Siparişlerim" kısmından iade talebi oluşturabilirsiniz. Üye
                                    olmadan satın aldıysanız iade isteğinizi "Iade - Sipariş No"
                                    başlığıyla hello@loky.shop'a iletebilirsiniz
                                </p>
                            </CAccordionBody>
                        </CAccordionItem>
                    </CAccordion>
                </div>
            </div>
        </div>
        <div class="productArticle">
            <h2>{{ productName }}</h2>
            <p>
                <!-- R34 Nissan Skyline ve Toyota Supra, performans odaklı spor otomobiller olarak tanınır. "Oversize" tişörtler
                ise genellikle büyük ve bol kesimli tasarımlara sahip
                giysilerdir. R34 ve Supra tasarımları, genellikle bu ikonik otomobillerin görsellerini ve karakteristik
                özelliklerini içerir. Bu tasarımlar, otomobil meraklıları
                için popüler bir seçenektir ve genellikle sokak kültürü ile spor otomobil tutkunlarını bir araya getiren
                özel ürünlerdir. -->

                {{ productDescription }}
            </p>
        </div>
    </div>
</template>
<style scoped>
@import url("@coreui/coreui/dist/css/coreui.min.css");

.productDetail {
    /* background: red; */
    max-width: 1500px;
    width: 100%;
    padding: 30px 0px;
    margin-left: 50%;
    transform: translateX(-50%);
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    box-sizing: border-box;
}

.detailContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
}

.productModel {
    height: 600px;
    width: 600px;
    padding-top: 15px;
    border-radius: 30px;
    background: #1b1b1b;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url("../../assets/images/600x600.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.productFeatures {
    height: 100%;
    width: calc(1500px - 700px);
}

.productFeatures h1 {
    font-size: 32px;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
}

.priceandsize {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    font-family: Roboto;
    margin: 20px 0px;
}

.priceandsize .price {
    font-size: 28px;
    font-weight: 900;
    line-height: 40px;
}

.priceandsize .sizeTable {
    font-weight: 600;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}

.priceandsize .sizeTable::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 30%;
    background: #fff;
    opacity: 1;
    height: 2px;
    transition: all 1s;
}

.priceandsize:hover .sizeTable::after {
    content: "";
    width: 100%;
    background: #e290ab;
    z-index: 2;
    opacity: 1;
}

.addToCart {
    display: flex;
    width: 200px;
    border-radius: 10px;
    margin-top: 30px;
    text-decoration: none;
    border: 1px solid #fff;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.addToCart:hover {
    border-color: #e290ab;
}

.addToCart span {
    display: inline-block;
    width: 100%;
    font-size: 18px;
    line-height: 40px;
    font-family: Roboto, sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;
}

.productAccordion {
    margin-top: 30px;
}

.productArticle {
    font-family: Roboto, arial, helvetica, sans-serif;
    margin-top: 60px;
}

.productArticle h2 {
    font-size: 26px;
    text-align: center;
    font-weight: 600;
    letter-spacing: 3px;
    line-height: 52px;
    color: #e290ab;
}

.productArticle p {
    font-size: 14px;
    line-height: 28px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-align: center;
}

.size-selector {
    padding: 8px;
    border: 2px solid #fff;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    background-color: #000000;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    font-weight: 600;
    font-family: Roboto;
    margin-bottom: 3px;
    width: 99px;
    text-align: center;
}

.size-selector option {
    background-color: rgb(0, 0, 0);
    color: #fff;
}

.size-selector:hover {
    border-color: #e290ab;
}

.size-selector option:checked {
    color: #fff;
    font-weight: 600;
    background-color: #f00;
}

.select {
    width: 99px;
}

.select::after {
    content: "+";
    background: none;
    height: 37px;
    width: 37px;
    border: none;
    color: #fff;
}
</style>
