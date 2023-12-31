<template>
  <div class="AboutContainer">
    <div class="page-title">
      <h2>HAKKIMIZDA</h2>
    </div>
  </div>

  <section id="timeline">
    <div class="tl-item">
      <div class="tl-bg" style="background-image: url('../../../src/assets/images/about-image/berserk.jpg')"></div>

      <div class="tl-year">
        <h1 class="f2 heading">Biz Kimiz ?</h1>
      </div>

      <div class="tl-content">
        <p>
          Ejartwear, Japon kültürünün benzersiz tarzını ve zarif estetiğini
          yansıtan giyim ürünleri sunan bir online moda mağazasıdır. Kaliteli
          kumaşlar, özenle tasarlanmış detaylar ve benzersiz desenlerle birleşen
          Japon giyim tarzını tutkuyla takip ediyoruz ve sunuyoruz.
        </p>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-bg" style="background-image: url('../../../src/assets/images/about-image/vagabond.jpg');"></div>

      <div class="tl-year">
        <h1 class="f2 heading">Kalite ve Zarafet</h1>
      </div>

      <div class="tl-content">
        <p>
          Ejartwear, her ürününde kaliteye ve zarafete büyük bir önem verir.
          Seçtiğimiz kumaşlar, konfor ve dayanıklılık sunmanın yanı sıra estetik
          açıdan da tatmin edicidir. Ürünlerimiz, Japon moda geleneğinin
          inceliklerini ve sadeliğini yansıtarak kullanıcılarımıza özgün bir
          deneyim sunar.
        </p>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-bg" style="background-image: url('../../../src/assets/images/about-image/bleach.jpg')"></div>

      <div class="tl-year">
        <h1 class="f2 heading">Müşteri Memnuniyeti</h1>
      </div>

      <div class="tl-content">
        <p>
          Müşterilerimizin memnuniyeti ve beklentileri, işimizin merkezindedir.
          Sizlere benzersiz ve kaliteli ürünler sunmayı hedeflerken, aynı
          zamanda mükemmel müşteri hizmeti sunmaya da büyük önem veriyoruz.
        </p>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-bg" style="background-image: url('../../../src/assets/images/about-image/naruto.jpg')"></div>

      <div class="tl-year">
        <h1 class="f2 heading">Sizinle Birlikte Büyümek</h1>
      </div>

      <div class="tl-content">
        <p>
          Ejartwear, müşteri geri bildirimlerini dikkate alır ve gelişmeye
          açıktır. Sizlerin desteğiyle büyümeye devam etmek ve Japon giyim
          dünyasına yeni bir soluk getirmek istiyoruz. Biz, Ejartwear olarak,
          Japon giyim ve estetiği ile ilgilenen herkes için bir moda
          destinasyonu olmayı amaçlıyoruz. Sizleri mağazamızda ağırlamaktan ve
          bu benzersiz stil yolculuğunda size eşlik etmekten mutluluk duyarız.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.AboutContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Coolvetica;
  letter-spacing: 30px;
  padding-bottom: 10px;
  padding-top: 40px;

}

.AboutContainer h2 {
  font-size: 72px;
  // text-shadow: 7px 7px 5px #000;
  filter: drop-shadow(0 0 1px rgb(143, 0, 0));
  background: rgb(112, 3, 3);
  background: linear-gradient(90deg, rgba(112, 3, 3, 1) 0%, rgba(112, 3, 3, 0.5) 32%, rgba(112, 3, 3, 1) 68%, rgba(112, 3, 3, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#timeline {
  display: flex;

  &:hover {
    .tl-item {
      width: 24.3333%;
    }
  }
}

.tl-item {
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 25%;
  height: 85vh;
  min-height: 600px;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;

  &:before,
  &:after {
    transform: translate3d(0, 0, 0);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:after {
    background: transparentize(#000000, 0.7);
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  &:before {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%);
    z-index: 1;
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(50%);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  &:hover {
    width: 30% !important;

    &:after {
      opacity: 0;
    }

    &:before {
      opacity: 0.99;
      transform: translate3d(0, 0, 0) translateY(0);
      transition: opacity 1s ease, transform 1s ease 0.25s;
    }

    .tl-content {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.75s ease 0.5s;
    }

    .tl-bg {
      filter: grayscale(0);
    }
  }
}

.tl-content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;
}

h1 {
  font-family: 'Roboto';
  text-transform: uppercase;
  color: #ffffff;
  font-size: 34px;
  text-align: center;
  font-weight: normal;
  font-weight: 900;
  padding-bottom: 30px;
  text-shadow: 7px 7px 5px #000;
}

.tl-year {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
}

.tl-content p {
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 30px;
  font-weight: 900;
  text-align: center;
  letter-spacing: 1px;
}

.tl-bg {
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: grayscale(100%);
}
</style>
