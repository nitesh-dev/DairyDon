<script setup lang='ts'>
defineProps<{
    active: string
}>()


const navContainer = ref<HTMLDivElement>()

function toggleNav() {
    navContainer.value!!.classList.toggle('show')
}



</script>
<template>
    <div class="page">
        <header class="desktop">
            <NuxtLink :class="{ 'active': active == '/home' }" to="/">Home</NuxtLink>
            <NuxtLink :class="{ 'active': active == '/about' }" to="/aboutus">About Us</NuxtLink>
            <NuxtLink :class="{ 'active': active == '/products' }" to="/products">Products</NuxtLink>
            <div class="logo">
                <img src="../public/images/logo.png" alt="logo">
            </div>
            <NuxtLink :class="{ 'active': active == '/franchise' }" to="/franchise">Franchise</NuxtLink>
            <NuxtLink :class="{ 'active': active == '/blog' }" to="/blog">Blog</NuxtLink>
            <NuxtLink :class="{ 'active': active == '/contact' }" to="/contactus">Contact Us</NuxtLink>

        </header>

        <header class="phone">
            <div class="holder">
                <div></div>
                <img src="../public/images/logo.png" alt="logo">
                <div class="menu" @click="toggleNav()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 18 15" fill="none">
                        <path
                            d="M0 0.0788574H18V1.85258H0V0.0788574ZM0 6.28689H18V8.06061H0V6.28689ZM0 12.4949H18V14.2686H0V12.4949Z"
                            fill="#490341" />
                    </svg>
                </div>
            </div>

            <div ref="navContainer" class="nav-container">
                <div class="nav-background" @click="toggleNav()"></div>
                <div class="nav">
                    <NuxtLink :class="{ 'active': active == '/home' }" to="/">Home</NuxtLink>
                    <NuxtLink :class="{ 'active': active == '/about' }" to="/aboutus">About Us</NuxtLink>
                    <NuxtLink :class="{ 'active': active == '/products' }" to="/products">Products</NuxtLink>

                    <NuxtLink :class="{ 'active': active == '/franchise' }" to="/franchise">Franchise</NuxtLink>
                    <NuxtLink :class="{ 'active': active == '/blog' }" to="/blog">Blog</NuxtLink>
                    <NuxtLink :class="{ 'active': active == '/contact' }" to="/contactus">Contact Us</NuxtLink>

                </div>
            </div>
        </header>
    </div>
</template>
<style scoped>
header {
    height: 45px;
    background-color: white;
    margin: 2rem 0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}


header a {
    color: black;
    transition: all 200ms;
}

header a:hover {
    font-weight: bold;
}


header .logo {
    background-color: white;
    border-radius: 8px;
}

header .logo img {
    height: 50px;
    display: block;
    margin: 10px;
}


header .active {
    color: var(--color-secondary);
    font-weight: bold;
}


/* -----------header phone ----------- */

header.phone {
    display: none;
    height: 60px;
    border-radius: 12px;
}

header.phone .holder{
    display: flex;
    justify-content: space-between;
    height: 100%;

}

header.phone .menu{
    margin-top: 12px;
    margin-right: 12px;
}

header.phone img{
    height: 45px;
    display: block;
    margin: auto;
}

header.phone a {
    display: block;
}


/* nav */

/*  ------------------ nav -------------- */

header .nav-background {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 199;
    top: 0;
    right: 0;
    display: none;
    background-color: transparent;
}

header .nav {
    width: 250px;
    height: 100vh;
    position: fixed;
    z-index: 200;
    top: 0;
    right: 0;
    background-color: var(--color-primary);
    transform: translateX(100%);
    transition: all 200ms;
}

header .nav-container.show .nav {
    transform: translateX(0);
}

header .nav-container.show .nav-background {
    display: block;
    background-color: rgba(0, 0, 0, 0.35);
}

header .nav {
    padding: 2rem 1.5rem;
}

header .nav a {
    color: white;
    display: block;
    padding: 0.4em 0;
}

@media only screen and (max-width: 800px) {
    header.phone {
        display: block;
    }

    header.desktop {
        display: none;
    }
}
</style>