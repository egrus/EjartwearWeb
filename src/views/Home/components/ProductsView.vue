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
            }
            else {
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
  <main id="products">
    <div class="InfoText">
      <b><strong>EJARTWEAR:GELENEK VE MODERNİTE İÇ İÇE</strong></b>

      <p>
        Japon giyim geleneği, zamanın ötesinde bir zarafeti temsil eder. Biz de bu
        geleneği, günümüz modasına uyarlayarak, geçmişin izlerini taşıyan
        tasarımlarla sizi buluşturuyoruz. Her bir parça, sadece bir giyim eşyası
        değil, aynı zamanda bir kültürün, bir geçmişin ve bir estetiğin
        yansımasıdır. Japon giyim kültürünün eşsiz ve sofistike dokunuşunu,
        ürünlerimiz aracılığıyla sizlere sunarak, her anınıza geleneksel Japon
        zarafeti katıyoruz. Her giyim parçasında, bir öykü anlatan ve sizinle bir
        bütün haline gelen bir mirası keşfetmeye davet ediyoruz.
      </p>
      <br />
      <br />
      <b><strong>EJARTWEAR:RENKLERİN DANSI</strong></b>
      <p>
        Japon giyiminde renk seçimi büyük bir öneme sahiptir. Biz de
        ürünlerimizde, mevsimlere ve Japon kültürüne özgü renk paletini
        kullanarak, her anı renklendiriyoruz. Sadece kumaş değil, aynı zamanda
        renklerle de bir hikaye anlatıyoruz.
      </p>
    </div>
    <div class="title">
      <h2>ÜRÜNLER</h2>
      <span class="subtitle">HOODIE | T-SHIRT</span>
    </div>

    <div class="products-container">
      <div class="product" v-for="(product, index) in productsList" :key="index">
        <div v-for="(image, imageIndex) in coverImages" :key="imageIndex">
          <img v-if="imageIndex === index" :src="image.PhotoUrl" :alt="index">
        </div>
      </div>
    </div>
    <div class="more-button">
      <router-link to="/products">ÜRÜNLERİ GÖR</router-link>
    </div>
  </main>
</template>
<style scoped>
#products {
  margin-top: 30px;
  /*Temel değeri 250 */
}

.products-container {
  width: 100%;
  height: auto;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
  grid-gap: 70px; */
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

#products {
  padding: 0px 10px !important;
  box-sizing: border-box;
}

.title {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Coolvetica;
  letter-spacing: 30px;
}

.title h2 {
  font-size: 72px;
}

.title .subtitle {
  font-size: 28px;
  line-height: 5px;
  letter-spacing: 5px;
}

.product img {
  height: 430px;
  width: 453px;
  background-color: var(--bg-second-black);
  border-radius: 30px;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-image: url(../../../assets/images/453x430.jpg);
}

.product img {
  height: 85%;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
}

.more-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.more-button a {
  font-size: 18px;
  font-family: "Roboto";
  font-weight: 700;
  text-decoration: none;
  border: 2px solid var(--text-white);
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
}

.InfoText {
  margin-top: 150px;
  margin-bottom: 150px;
  padding: 60px 40px;
  box-sizing: border-box;
  background-image: url("../src/assets/images/japanese-temple-product-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

.InfoText strong {
  font-size: 35px;
  font-weight: bolder;
}

.InfoText p {
  max-width: 900px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 1px;
}

.InfoText b {
  font-weight: bolder;
  line-height: 22px;
  margin-bottom: 30px;
}

@media only screen and (max-width:1440px) {
  .product {
    height: 400px;
    width: 400px;
    background-size: 400px;
  }

  .products-container {
    gap: 50px;
  }
}

@media only screen and (max-width:1440px) {
  .product {
    height: 320px;
    width: 320px;
    background-size: 320px;
  }

  .products-container {
    gap: 30px;
  }
}

@media only screen and (width <=690px) {
  .product {
    height: 280px;
    width: 280px;
    background-size: 280px;
  }

  .products-container {
    gap: 30px;
  }
}

@media only screen and (width <=600px) {
  .product {
    height: 400px;
    width: 400px;
    background-size: 400px;
  }

  .products-container {
    gap: 30px;
  }
}

@media only screen and (width <=400px) {
  .product {
    height: 300px;
    width: 300px;
    background-size: 300px;
  }

  .products-container {
    gap: 20px;
  }
}
</style>
