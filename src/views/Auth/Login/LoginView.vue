<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/AuthStore";

const userStore = useUserStore();
const users = ref(userStore.users);

const loginMail = ref("");
const loginPassword = ref("");

async function loginHelper() {
    const foundUser = users.value.find(user => user.mail === loginMail.value);

    if (foundUser) {
        if (foundUser.password === loginPassword.value) {
            console.log('%c%s', 'color: #aa00ff', loginMail.value + " Var");
            // Kullanıcı girişi başarılı, burada gerekli işlemleri gerçekleştirebilirsiniz.

            // const userStorage = {
            //     email: loginMail,
            //     password: loginPassword
            // }

            // const stringifiedUser = JSON.stringify(userStorage)

            // localStorage.setItem(
            //     "userInfo",
            //     stringifiedUser
            // )
            userStore.setIsAuth({ "status": true, "isMail": loginMail, "isPassword": loginPassword });

        } else {
            console.log("Şifre hatalı");
        }
    } else {
        console.log("Kullanıcı bulunamadı");
    }
}
</script>
<template>
    <div class="container">
        <div class="image">
            <h1>
                Welcome To <span>CodeFun</span>

            </h1>
        </div>
        <div class="content">
            <h1>Login</h1>
            <div class="form-group">
                <label for="UserEmail">UserName</label>
                <br>
                <input type="email" class="form-control" name="UserEmail" id="txt" aria-describedby="helpId"
                    placeholder="UserName" v-model="loginMail">

            </div>
            <div class="form-group">
                <label for="UserPassword">Password</label>
                <br>
                <input type="password" class="form-control" name="UserPassword" id="txt" placeholder="Password"
                    v-model="loginPassword">
            </div>
            <a class="fp" href="index.html">Forgot Password?</a>
            <br>
            <button type="button" class="btn" @click="loginHelper(loginMail, loginPassword)">Login</button>
        </div>
    </div>
</template>
<style scoped>
body {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    background: url('https://images.wallpaperscraft.com/image/single/lake_forest_snow_130421_1280x720.jpg');
}

.container {
    height: fit-content;
    width: 100%;
    box-shadow: 0px 30px 40px black;
    display: flex;
    border-radius: 10px;
    background: url('https://images.wallpaperscraft.com/image/single/lake_forest_snow_130421_1280x720.jpg');
    padding: 120px 120px;
    box-sizing: border-box;
}

.image {
    flex: 50%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.wallpaperscraft.com/image/single/lake_forest_snow_130421_1280x720.jpg');
    background-size: cover;
    text-align: center;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.image h1 {
    margin-top: 50%;
    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

span {
    color: chartreuse;
}

.content {
    flex: 50%;
    background-color: white;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}

.content h1 {
    padding: 40px;
    padding-top: 30px;
    font-family: 'Niconne', cursive;
    font-size: 40px;
    color: #c446c9;
}

#txt {
    margin: 10px;
    padding: 5px;
    border: none;
    background-color: rgba(156, 77, 156, 0.3);
    border-radius: 10px;
    font-weight: bold;
    font-size: small;
    font-family: 'Montserrat', sans-serif;
    color: #aa38a4;
}

label {
    font-weight: bold;
    font-size: small;
}

#txt:focus {
    outline: none;
}

.fp {
    text-decoration: none;
    font-weight: bold;
    font-size: small;
    transition: 0.3s;
}

.fp:hover {
    color: #c446c9;
}

button {
    padding: 10px 40px;
    margin-top: 20px;
    border: none;
    background: linear-gradient(to right, #4568DC, #B06AB3);
    border-radius: 20px;
    transition: 0.3s;
}

button:hover {
    transform: scale(1.2);
}

button a {
    text-decoration: none;
    color: white;
}
</style>