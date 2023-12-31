<script setup>
import { ref } from "vue"

const menuacikmi = ref(false);


</script>

<template>
    <header id="header">
        <div class="logo">
            <img src="../assets/images/ejartwear-logo.webp" alt=" Ejartwear Logo" />
        </div>
        <div class="mobilHamburgerMenu">
            <div>
                <i class="pi pi-bars" @click="menuacikmi = true"></i>
            </div>
        </div>
        <nav :class="{ menuacikmi }">
            <router-link to="/" class="mobilSideBarLogo"> <img src="../assets/images/ejartwear-logo.webp"
                    alt=" Ejartwear Logo" /></router-link>
            <div class="menuCloseButton">
                <i class="pi pi-times" @click="menuacikmi = false"></i>
            </div>
            <router-link to="/">ANASAYFA</router-link>
            <router-link to="/products">ÜRÜNLER</router-link>
            <router-link to="/about">HAKKIMIZDA</router-link>
            <router-link to="/contact">İLETİŞİM</router-link>
        </nav>
    </header>
</template>
<style scoped lang="scss">
#header {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 5%;
    z-index: 99;
}

a {
    font-style: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    font-weight: 500;
    text-decoration: none;
}

a:hover{
    background-color: #881313;
    color: white !important;
}

nav {
    margin-top: 40px;
}

nav a {
    margin-right: 10px;
    border: 2px solid var(--text-white);
    border-radius: 5px;
    padding: 5px 10px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: Roboto;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
}

nav a:last-of-type {
    margin-right: 0;
}

nav a.router-link-exact-active {
    color: var(--text-red);
}

nav a small {
    text-transform: none;
    font-size: 14px;
}

.logo {
    height: 200px;
    position: relative;
}

.logo img {
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 0.50rem rgb(255, 255, 255));
}

.mobilHamburgerMenu {
    display: none;
}

.mobilSideBarLogo {
    display: none;
}

.menuCloseButton {
    display: none;
}

@media screen and (max-width: 1024px) {
    #header {

        flex-direction: row;
        max-width: 1024px;
        width: 100%;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;

        & .logo {
            max-width: 300px;
            max-height: 100px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: flex-start;


            & img {
                max-height: 100px;
                height: 100%;
                position: unset;
                transform: unset;
            }
        }
    }

}

@media screen and (max-width: 768px) {
    #header {
        align-items: flex-start;
    }

    nav {
        background: #181717;
        max-width: 400px;
        width: 100%;
        height: 100vh;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-content: center;
        gap: 40px;
        transform: translate(760px, -35px);
        opacity: 0;
        transition: all 0.6s ease-in-out;
        padding: 120px 20px;
        box-sizing: border-box;
        position: fixed;


        & a {
            width: 100px;
            margin-right: 0;
            text-align: left;
            border: none;
        }

        .mobilSideBarLogo {
            position: absolute;
            display: block;
            height: 80px;
            top: 10px;
            left: 10px;

            & img {
                height: 100%;
            }
        }

        .menuCloseButton {
            position: absolute;
            top: 40px;
            right: 15px;
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;

            & i {
                font-size: 20px;
                font-weight: 900;
            }
        }
    }

    .mobilHamburgerMenu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        font-size: 28px;

        & i:hover {

            color: #881313;
        }
    }

    .menuacikmi {
        transform: translate(358px, -35px) !important;
        opacity: 1 !important;

    }

    #header {

        overflow-x: hidden !important;
        overflow-x: clip !important;
        z-index: 999 !important;
        height: 100vh;
    }
}
</style>
