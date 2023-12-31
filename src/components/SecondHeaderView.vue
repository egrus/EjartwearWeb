<template>
    <header>
        <div class="header">
            <nav>
                <router-link to="/">Anasayfa</router-link>
                <div class="nav-between-icon">
                    <img src="../assets/images/itachi-icon-bg-overlay.webp">
                </div>
                <router-link to="/products">Ürünler</router-link>
                <div class="nav-between-icon">
                    <img src="../assets/images/itachi-icon-bg-overlay.webp">
                </div>
                <div class="logo" id="header-logo">
                    <router-link to="/"> <img src="../assets/images/ejartwear-logo.webp"
                            alt="Ejartwear Logo" /></router-link>
                </div>
                <div class="nav-between-icon">
                    <img src="../assets/images/itachi-icon-bg-overlay.webp">
                </div>
                <router-link to="/about">Hakkımızda</router-link>
                <div class="nav-between-icon">
                    <img src="../assets/images/itachi-icon-bg-overlay.webp">
                </div>
                <router-link to="/contact">İletişim</router-link>
            </nav>
        </div>
    </header>
</template>
<style scoped lang="scss">
.header {
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    padding: 25px 0px;
    box-sizing: border-box;
}

.header {
    max-width: 1500px;
    width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 20px 10px;
}

.logo img {
    height: 140px;
    filter: drop-shadow(0 0 0.75rem rgb(255, 0, 0));
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 45px;
}

a {
    font-style: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    font-weight: 500;
    text-decoration: none;
}

nav a {
    margin-right: 10px;
    border: 2px solid var(--text-white);
    border-radius: 5px;
    padding: 5px 10px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: Roboto;
    position: relative;
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

.nav-between-icon {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
    height: 20px;
    width: 20px;
    background-image: url("../assets/images/itachi-icon-bg.webp");
    background-size: cover;
    filter: drop-shadow(0px 0px 15px #770202);
    animation-duration: 0.8s;
    animation-name: itachi-bg-glow;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes itachi-bg-glow {
    from {
        filter: drop-shadow(0px 0px 3px #770202);
    }

    to {
        filter: drop-shadow(0px 0px 15px #770202);
    }
}

.nav-between-icon img {
    height: 100%;
    width: 100%;
    animation: rotate-itachi-bg-cover 2s infinite linear;

}

@keyframes rotate-itachi-bg-cover {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

#header-logo a {
    border: none;

}


@media screen and (max-width: 1100px) {

    .nav-between-icon {
        display: none !important;
        background: red;

        & img {
            display: none !important;
        }
    }
}
</style>
