<script setup>
import { ref } from "vue";
const name = ref("");
const surname = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
</script>

<template>
  <div class="contact">
    <div class="contact-title">
      <h3>BİZE ULAŞIN</h3>
      <p>Fikriniz bizim için önemli<br />
        Size en hızlı şekilde geri döneceğiz</p>

      <h3>Destek Hattı</h3>
      <p>
        Destek Çalışma Saatleri: Haftaiçi 10.00 - 17.00<br />
        <a href="mailto:support@ejartwear.com">support@ejartwear.com</a>
      </p>
    </div>
    <div class="contact-form">
      <div class="nameSurname">
        <div>
          <label for="name">
            <span class="input-name"> Adınız </span>
            <input type="text" name="name" id="name" class="name" placeholder="Adınız" v-model="name" />
          </label>
        </div>

        <div>
          <label for="surname">
            <span class="input-surName"> Soyadınız </span>
            <input type="text" name="surname" id="surname" class="surname" placeholder="Soyadınız" v-model="surname" />
          </label>
        </div>
      </div>
      <div class="mailAndPhone">
        <div>
          <label for="email">
            <span class="input-name"> Email </span>
            <input type="email" name="email" id="email" class="email" placeholder="info@ejartwear.com" v-model="email" />
          </label>
        </div>

        <div>
          <label for="phone">
            <span class="input-surName"> Telefon </span>
            <input type="tel" name="phone" id="phone" class="phone" placeholder="(5xx) xxx xx xx" v-model="phone" />
          </label>
        </div>
      </div>

      <label for="project-info">
        <span class="input-name"> Mesajınız </span>
        <textarea name="project-info" id="project-info" class="project-info"
          placeholder="Lütfen mesajınızı buraya yazınız..." v-model="message"></textarea>
      </label>
      <button class="btn send-btn">Gönder</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.contact {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 400px;
  max-height: 600px;
  height: 100%;
  padding: 40px 0px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

.contact-title {
  color: #fff;
  font-size: 1.5rem;
  font-family: Roboto, sans-serif, Coolvetica;
  font-weight: 500;
  line-height: 30px;
}

.contact-title h3 {
  font-family: "Roboto";
  text-transform: uppercase;
  color: #ffffff;
  font-size: 36px;
  text-align: center;
  font-weight: normal;
  font-weight: 900;
  padding-bottom: 10px;
  letter-spacing: 3px;
  filter: drop-shadow(0 0 1px rgb(143, 0, 0));
  background: rgb(112, 3, 3);
  background: linear-gradient(90deg, rgba(112, 3, 3, 1) 0%, rgba(112, 3, 3, 0.5) 32%, rgba(112, 3, 3, 1) 68%, rgba(112, 3, 3, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-title p {
  font-family: "Roboto";
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 50px;
}

.contact-title a {
  text-decoration: none;
}

.contact-form {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-family: Roboto, sans-serif, Coolvetica;
  gap: 1rem;
  border: 2px solid #ff0000;
  border-radius: 1rem;
  background: #252525;
  max-width: 675px;
  width: 100%;
  box-sizing: border-box;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #ccc;
}

label input,
label textarea {
  background: #202020;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  color: #e5e5e5;
  border: 1px solid transparent;
  transition: all 0.25s ease 0s;
}

label textarea {
  max-width: 100%;
  max-height: 200px;
  min-width: 200px;
  min-height: 100px;
}

.send-btn {
  background: linear-gradient(90deg, #ff0000 0%, #ff0000 100%);
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ccc;
  border-radius: 0.5rem;
  cursor: pointer;
}

label input:hover,
label textarea:hover,
label input:focus,
label textarea:focus {
  border-color: #ff0000;
  box-shadow: 0 0 0 1px #ff0000;
}

.send-btn:hover,
.send-btn:focus {
  background: linear-gradient(90deg, #ff0000 75%, #fff 100%);
}

.nameSurname {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 20px;

  & input,
  & div,
  &label {
    width: 100%;
    box-sizing: border-box;
  }
}

.mailAndPhone {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 20px;

  & input,
  & div,
  &label {
    width: 100%;
    box-sizing: border-box;
  }
}



@media screen and (max-width: 900px) {
  .contact {
    flex-direction: column;
    gap: 1rem;
  }

  .contact-title {
    text-align: center;
  }
}
</style>
