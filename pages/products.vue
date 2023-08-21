<script setup lang='ts'>
import product1 from '~/public/images/product/product1.png'
import product2 from '~/public/images/product/product2.png'
import product3 from '~/public/images/product/product3.png'
import product4 from '~/public/images/product/product4.png'
import product5 from '~/public/images/product/product5.png'
import product6 from '~/public/images/product/product6.png'
import product7 from '~/public/images/product/product7.png'
import product8 from '~/public/images/product/product8.png'
import product9 from '~/public/images/product/product9.png'

import deskImage from '~/public/images/header/about-desk.png'
import phoneImage from '~/public/images/header/about-phone.png'

const products = Array<{
    image: string,
    name: string,
    type: string
}>()


products.push({
    image: product1,
    name: 'Dark Silk Chocolate',
    type: 'ICE CREAM'
})

products.push({
    image: product2,
    name: 'Kaju Anjeer',
    type: 'ICE CREAM'
})

products.push({
    image: product3,
    name: 'Lychee Ripple',
    type: 'ICE CREAM'
})

products.push({
    image: product4,
    name: 'Strawberry Ripple',
    type: 'ICE CREAM'
})

products.push({
    image: product5,
    name: 'Swiss Chocolate',
    type: 'ICE CREAM'
})

products.push({
    image: product6,
    name: 'Pineapple Ripple',
    type: 'ICE CREAM'
})

products.push({
    image: product7,
    name: 'Black Current',
    type: 'ICE CREAM'
})

products.push({
    image: product8,
    name: 'Pineapple',
    type: 'ICE CREAM'
})

products.push({
    image: product9,
    name: 'Tender Coconut',
    type: 'ICE CREAM'
})

</script>
<template>
    <!-- landing -->
    <OtherHeader active-tab="/products" page-name="Products" :desk-image="deskImage" :phone-image="phoneImage"></OtherHeader>


    <section class="products">

        <div class="page">
            <div class="card" v-for="item in products">
                <img :src="item.image" :alt="item.name">
                <div>
                    <h3>{{ item.name }}</h3>
                    <span>{{ item.type }}</span>
                </div>

                <div class="background"></div>
            </div>
        </div>

    </section>

    <div class="center">
        <WidgetStarButton>
            <span>Load</span>
            <span>More</span>
        </WidgetStarButton>
    </div>

    <Footer></Footer>
</template>
<style scoped>

/* ------------------- products -------------------- */

.products {
    position: relative;
    min-height: 600px;
    margin-top: 2rem;
}

.products .page {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    gap: 1rem;
}

.products .card {
    display: grid;
    grid-template-columns: 100%;
    text-align: center;
    gap: 1rem;
    position: relative;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
}

.products .card img {
    width: 85%;
    margin: auto;
}


.products h3 {
    margin: 0;
    color: var(--color-secondary);
}

.products .card .background {
    position: absolute;
    background-color: #F3DAF0;
    width: 100%;
    height: 80%;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 8px;
}

.products .card span {
    color: #664C63;
}

.products .card:nth-child(even) .background {
    background-color: #FFE6F4;
}



/* ----- */

.center {
    display: flex;
    justify-content: center;
    margin: 4rem 0;
}
</style>