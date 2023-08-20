<script setup lang='ts'>

import product1 from '~/public/images/product/cup-product1.png'
import product2 from '~/public/images/product/cup-product2.png'
import product3 from '~/public/images/product/cup-product3.png'
import product4 from '~/public/images/product/cup-product4.png'


const data = Array<{
    image: string,
    title: string,
    content: string
}>()


data.push({
    image: product1,
    title: 'tender coconut',
    content: 'Our Mastani is a feast to produce the product'
})

data.push({
    image: product2,
    title: 'bub bly',
    content: 'Our Mastani is a feast to produce the product'
})
data.push({
    image: product3,
    title: 'anjeer',
    content: 'Our Mastani is a feast to produce the product'
})
data.push({
    image: product4,
    title: 'mango strowberry',
    content: 'Our Mastani is a feast to produce the product'
})

</script>
<template>
    <section class="products">
        <img src="../public/images/outline/top.png">
        <div class="content">
            <div class="page">
                <div class="content-holder">
                    <div class="left">
                        <h2>Explore The Deliciousness</h2>
                        <hr>
                        <p>Whatever the mood, whatever the situation, Dairy Don is always set to race your tastebuds.From
                            Mouth-watering Softies, Wholesome Sundaes, Flavourful Mastani and to Delish Thick Shakes. Dive
                            into the super deliciousness with Dairy Don’s range of ice cream delights.
                        </p>
                    </div>

                    <WidgetStarButton>
                        <span>Explore</span>
                        <span>More</span>
                    </WidgetStarButton>
                </div>

                <div class="product-holder">
                    <ProductCard v-for="item in data" :image="item.image" :title="item.title" :content="item.content">
                    </ProductCard>
                </div>
            </div>
        </div>
        <img src="../public/images/outline/bottom.png">


        <!-- outline image -->
        <img src="../public/images/outline/fruits2.png" class="outline top-left">
        <img src="../public/images/outline/barries.png" class="outline top-right">
        <img src="../public/images/outline/oreo.png" class="outline bottom-right">

    </section>
</template>
<style scoped>
.products {
    display: grid;
    grid-template-columns: 100%;
    position: relative;
}

.products>img {
    width: 100%;
}

.products .content {
    min-height: 400px;
    background-color: var(--color-secondary-light);
}



.products .content-holder {
    display: grid;
    grid-template-columns: 600px max-content;
    justify-content: space-between;
    align-items: center;
}

.products h2 {
    line-height: 1;
    color: var(--color-secondary);
    margin-bottom: 0;
}

.products hr {
    width: 100px;
    margin: 0;
    border: none;
    border-bottom: 2px solid var(--color-secondary-variant);
    margin: 1rem 0;
}

.products hr::before {
    content: "";
    background-color: var(--color-secondary-variant);
    height: 8px;
    width: 8px;
    transform: rotateZ(45deg) translate(-20%, -40%);
    position: absolute;
}



/* ------------------product holder -------- */

.products .product-holder {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 1rem;
}


/* -------------------- outline --------- */

.products .outline {
    position: absolute;
    width: auto;
}

.products .top-left {
    left: 0;
    top: 11vw;
    width: 7vw;
}

.products .top-right {
    right: 9vw;
    top: 3vw;
    width: 11vw;
}

.products .bottom-right {
    right: 2vw;
    bottom: 10vw;
    width: 9vw;
}


@media only screen and (max-width: 1150px) {
    .products .product-holder {
        grid-template-columns: 1fr 1fr 1fr;
    }
}


@media only screen and (max-width: 800px) {
    .products .product-holder {
        grid-template-columns: 1fr 1fr;
    }

    .products .content-holder {
        grid-template-columns: 100%;
        gap: 1rem;
    }
}

@media only screen and (max-width: 600px) {
    .products .product-holder {
        grid-template-columns: 100%;
    }
}


</style>