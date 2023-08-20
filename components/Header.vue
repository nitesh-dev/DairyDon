<script setup lang='ts'>
defineProps<{
    active: string
}>()
</script>
<template>
    <div class="page">
        <header>
            <NuxtLink :class="{'active': active == '/home'}" to="/">Home</NuxtLink>
            <NuxtLink :class="{'active': active == '/about'}" to="/aboutus">About Us</NuxtLink>
            <NuxtLink :class="{'active': active == '/products'}" to="/products">Products</NuxtLink>
            <div class="logo">
                <img src="../public/images/logo.png" alt="logo">
            </div>
            <NuxtLink :class="{'active': active == '/franchise'}" to="/franchise">Franchise</NuxtLink>
            <NuxtLink :class="{'active': active == '/blog'}" to="/blog">Blog</NuxtLink>
            <NuxtLink :class="{'active': active == '/contact'}" to="/contactus">Contact Us</NuxtLink>

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

header a{
    color: black;
    transition: all 200ms;
}

header a:hover{
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


header .active{
    color: var(--color-secondary);
    font-weight: bold;
}
</style>