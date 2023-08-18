<script setup lang='ts'>
</script>
<template>
    <div class="page">
        <header>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/">About Us</NuxtLink>
            <NuxtLink to="/">Products</NuxtLink>
            <div class="logo">
                <img src="../public/images/logo.png" alt="logo">
            </div>
            <NuxtLink to="/">Franchise</NuxtLink>
            <NuxtLink to="/">Blog</NuxtLink>
            <NuxtLink to="/">Contact Us</NuxtLink>

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
</style>