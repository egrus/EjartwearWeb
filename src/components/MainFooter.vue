<script setup></script>

<template>
  <footer>
    <div class="footer-container">
      <div class="footerInformation">
        <div class="footerLogo">
          <router-link to="/"
            ><img src="../assets/images/ejartwear-logo.webp" alt=""
          /></router-link>
        </div>
        <div class="footerAboutUs">
          <p>
            Ejartwear, Japon kültürünün benzersiz tarzını ve zarif estetiğini
            yansıtan giyim ürünleri sunan bir online moda mağazasıdır. Kaliteli
            kumaşlar, özenle tasarlanmış detaylar ve benzersiz desenlerle
            birleşen Japon giyim tarzını tutkuyla takip ediyoruz ve sunuyoruz.
          </p>
        </div>
      </div>
      <div class="quickLink">
        <h5>Destek</h5>
        <router-link to="/contact">Bize Ulaşın</router-link>
        <router-link to="/delivery-and-return">Kargo ve İade</router-link>
        <router-link to="/sizetable">Beden Ölçüleri</router-link>
        <router-link to="/pravicy-policy">Gizlilik Sözleşmesi</router-link>
        <router-link to="/user-contrat">Kullanıcı Sözleşmesi</router-link>
        <router-link to="/sell-contrat">Mesafeli Satış Sözleşmesi</router-link>
      </div>
      <div class="quickLink">
        <h5>Sayfalar</h5>
        <router-link to="/">Anasayfa</router-link>
        <router-link to="/products">Ürünler</router-link>
        <router-link to="/about">Hakkımızda</router-link>
        <router-link to="/contact">İletişim</router-link>
        <router-link to="/sss">S.S.S</router-link>
      </div>
      <div class="quickLink">
        <h5>Koleksiyonlar</h5>
        <router-link to="/product1">Oversize T-Shirt</router-link>
        <router-link to="/product2">Oversize Hoodie</router-link>
        <router-link to="/product3">Oversize Sweatshirt</router-link>
        <router-link to="/product3">Short</router-link>
      </div>
    </div>
    <div class="copRight-socialMedia-payments-container">
      <div class="socialMediaContainer">
        <div class="socialIcon">
          <a href="https://www.instagram.com/ejartwear/"><i class="pi pi-instagram"></i></a>
        </div>

        <div class="socialIcon"><i class="pi pi-whatsapp"></i></div>
      </div>
      <div class="copyRightContainer">
        <p>©2023 Ejartwear • Tüm Hakları Saklıdır</p>
      </div>
      <div class="paymentsContainer">
        <img src="../assets/images/payments-logo.png" alt="" />
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: roboto, sans-serif, apple-systems;
}

.footer-container {
  max-width: 1500px;
  box-sizing: border-box;
  width: 100%;
  padding: 40px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  gap: 30px;
  flex-wrap: wrap;
}

.footer-container a {
  line-height: 32px;
  text-decoration: none;
}

/* .footer-container a.router-link-exact-active {
    color: var(--text-red);
} */

.copRight-socialMedia-payments-container {
  max-width: 1500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 40px;
  padding: 0px 10px 40px 10px;
  box-sizing: border-box;
}

.socialMediaContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  width: 33.33%;
}

.copyRightContainer {
  width: 33.33%;
  text-align: center;
}

.paymentsContainer {
  width: 33.33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.paymentsContainer img {
  width: 60%;
}

.footerLogo {
  height: 80px;
  width: 250px;
  object-fit: cover;
}

.footerLogo img {
  height: 100%;
  filter: drop-shadow(0 0 0.5rem rgb(255, 255, 255));
}

.footerInformation {
  max-width: 280px;
}

.footerAboutUs {
  margin-top: 20px;
}

.footerAboutUs p {
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
}

.quickLink {
  min-width: 220px;
  max-width: 240px;
  display: flex;
  flex-direction: column;
}

.quickLink h5 {
  font-size: 22px;
  line-height: 30px;
  margin-block: 20px;
  font-weight: 600;
}

@media only screen and (width<=768px) {
  .copRight-socialMedia-payments-container {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 20px;
  }

  .socialMediaContainer {
    width: 100%;
    justify-content: center;
  }

  .copyRightContainer {
    width: 100%;
  }

  .paymentsContainer {
    width: 100%;
    justify-content: center;
  }
}
</style>
