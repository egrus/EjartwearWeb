<script setup>
import { onMounted } from 'vue';
import sssjs from '../FAQs/assets/js/index.js/';
onMounted(() => {
  sssjs.ssstemplate();
})
</script>

<template>
  <div class="sss">
    <h1>SIKÇA SORULAN SORULAR</h1>

    <div class="faqs-container">
      <div class="faq active">
        <h3 class="faq-title">
          Kargo Takip Numaramı Nereden Bulabilirim?
        </h3>
        <p class="faq-text">
          Siteye kayıt olurken bize verdiğin email üzerine sistemimiz kargo numaranı otomatik olarak gönderir. Lütfen emailini kontrol et.
        </p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="faq">
        <h3 class="faq-title">
          Hangi Ödeme Yöntemlerini Kullanabilirim?
        </h3>
        <p class="faq-text">
          Kredi kartı veya banka kartın ile ödemeni güvenli bir şekilde yapabilirsin.
        </p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="faq">
        <h3 class="faq-title">
          Ürün Hasarlı Geldi. Ne Yapmalıyım?
        </h3>
        <p class="faq-text">
          Lütfen destek bölümünden kargo ve iade bölümüne gözat. Yapman gerekenler orada adım adım bulunmakta.
        </p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <!-- SOCIAL PANEL HTML -->
    <div class="social-panel-container">
      <div class="social-panel">
        <p>Created with <i class="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
        </p>
        <button class="close-btn"><i class="fas fa-times"></i></button>
        <h4>Get in touch on</h4>
        <ul>
          <li>
            <a href="https://www.patreon.com/florinpop17" target="_blank">
              <i class="fab fa-discord"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/florinpop1705" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/florinpop17" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/florinpop17" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/florinpop17" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <button class="floating-btn">
      Get in Touch
    </button>


  </div>
</template>

<style scoped>
h1 {
	margin: 50px 0 30px;
	text-align: center;
  font-family: Roboto;
  font-size: 34px;
  font-weight: 900;
}
.faqs-container {
  margin: 0 auto;
  max-width: 600px;
}

.faq {
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
  transition: 0.3s ease;
}

.faq.active {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
  border-color: red;
}

.faq.active::after,
.faq.active::before {
  color: #2ecc71;
  content: '\f075';
  font-family: 'Font Awesome 5 Free';
  font-size: 7rem;
  position: absolute;
  opacity: 0.2;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.faq.active::before {
  color: #3498db;
  top: -10px;
  left: -30px;
  transform: rotateY(180deg);
}

.faq-title {
  margin: 0 35px 0 0;
  font-family: Roboto;
  font-weight: 700;
}

.faq-text {
  display: none;
  margin: 30px 0 0;
  font-family: Roboto;
}

.faq.active .faq-text {
  display: block;
}

.faq-toggle {
  border: 2px solid;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 30px;
  height: 30px;
  width: 30px;
}

.faq-toggle:focus {
  outline: none;

}

.faq.active .faq-toggle {
  border-color: red;

}

.faq-toggle .fa-times {
  display: none;
}

.faq.active .faq-toggle .fa-times {
  display: block;
}

.faq-toggle .fa-chevron-down {
  color: #83888E;
}

.faq.active .faq-toggle .fa-chevron-down {
  display: none;
}

/* SOCIAL PANEL CSS */
.social-panel-container {
  position: fixed;
  right: 0;
  bottom: 80px;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
}

.social-panel-container.visible {
  transform: translateX(-10px);
}

.social-panel {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 16px 31px -17px rgba(0, 31, 97, 0.6);
  border: 5px solid #001F61;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Muli';
  position: relative;
  height: 169px;
  width: 370px;
  max-width: calc(100% - 10px);
}

.social-panel button.close-btn {
  border: 0;
  color: #97A5CE;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
}

.social-panel button.close-btn:focus {
  outline: none;
}

.social-panel p {
  background-color: #001F61;
  border-radius: 0 0 10px 10px;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  padding: 2px 17px 6px;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  text-align: center;
  width: 235px;
}

.social-panel p i {
  margin: 0 5px;
}

.social-panel p a {
  color: #FF7500;
  text-decoration: none;
}

.social-panel h4 {
  margin: 20px 0;
  color: #97A5CE;
  font-family: 'Muli';
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
}

.social-panel ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.social-panel ul li {
  margin: 0 10px;
}

.social-panel ul li a {
  border: 1px solid #DCE1F2;
  border-radius: 50%;
  color: #001F61;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  text-decoration: none;
}

.social-panel ul li a:hover {
  border-color: #FF6A00;
  box-shadow: 0 9px 12px -9px #FF6A00;
}

.floating-btn {
  border-radius: 26.5px;
  background-color: #001F61;
  border: 1px solid #001F61;
  box-shadow: 0 16px 22px -17px #03153B;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  padding: 12px 20px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}

.floating-btn:hover {
  background-color: #ffffff;
  color: #001F61;
}

.floating-btn:focus {
  outline: none;
}


@media screen and (max-width: 480px) {

  .social-panel-container.visible {
    transform: translateX(0px);
  }

  .floating-btn {
    right: 10px;
  }
}
</style>
