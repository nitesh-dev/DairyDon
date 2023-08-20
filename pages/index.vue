<script setup lang='ts'>
import IceCreamInfo from '../components/IceCreamInfo.vue';
import Header from '../components/Header.vue';

import product1 from '~/public/images/ice-cream1.png'
import product2 from '~/public/images/multi-ice-cream.png'


const heading1 = 'Taste That Will Make You Bombinate With Joy'
const content1 = "Rolling you through a creamy, luscious taste with tempting waves and rich ingredients, with the special twist of freshness and novelties. Taste the melt-in-the-mouth flavours, that no young or old can resist."

const heading2 = "Serving Delicious Since 1981"
const content2 = "It all started in the year 1981 when D.D. Yeola family establishes an Ice Cream Parlour at Mahatma Gandhi Road Nashik (Maharashtra) India, with intent to source Softies, Thick Shakes and Mouth-watering Ice Creams.  Today, our product lineup includes many-flavoured ice creams, lip-smacking thick shakes, irresistible softies and many more to come. Well-known for our speciality in Ice Creams, we strive to source better without exception."
</script>
<template>
    <!-- Home landing -->
    <section class="landing">
        <div class="content">
            <Header active="/home"></Header>
            <h1>Bringing in the <br>Luscious Ice Creams</h1>
            <span>Ice Cream | Shakes | Softies</span>

        </div>
        <div class="image-holder">
            <img src="../public/images/outline/Vector 3.png">
            <img src="../public/images/cone2.png" class="cone" alt="cone">
        </div>

        <img src="../public/images/outline/cone.png" class="outline top-left" alt="cone">
        <img src="../public/images/outline/crunch.png" class="outline top-right" alt="crunch">
        <img src="../public/images/outline/staberry.png" class="outline bottom-left" alt="strawberry">
    </section>



    <!-- ice cream info -->
    <section class="cream-info">
        <IceCreamInfo :heading="heading1" :content="content1" button-text="Read More" :image="product1" sub-heading="">
        </IceCreamInfo>
        <img src="../public/images/outline/strawberry2.png" class="outline top-left">
        <img src="../public/images/outline/fruits.png" class="outline top-right">
    </section>

    <ProductsArea />

    <!-- ice cream info 2 -->
    <section class="cream-info2">
        <div class="page">
            <img src="../public/images/outline/cashcrew.png" class="outline top-right">
        </div>
        <IceCreamInfo :heading="heading2" :content="content2" button-text="" :image="product2" sub-heading="">
        </IceCreamInfo>

        <img src="../public/images/outline/glass-shake.png" class="outline bottom-right">
    </section>

    <Testimonial></Testimonial>

    <Map></Map>
    <Footer></Footer>
</template>
<style scoped>
.landing {
    display: grid;
    grid-template-columns: 100%;
    position: relative;
}

.landing .content {
    background-color: var(--color-primary);
    min-height: 550px;
}

.landing h1 {
    color: white;
    text-align: center;
    line-height: 1;
    margin: 2em 0;
    margin-bottom: 0;
}


.landing span {
    text-align: center;
    font-size: var(--average-font);
    display: block;
    color: rgba(255, 255, 255, 0.747);
    margin-top: 0.8em;
}



.landing .image-holder {
    position: relative;
}

.landing .image-holder .cone {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 600px;
    width: auto;
    bottom: -50px;
}

.landing .image-holder img {
    width: 100%;
}



/* ----------- outline ------------- */
.landing .outline {
    position: absolute;
    object-fit: contain;
    width: 10vw;
}

.landing .top-left {
    top: 80px;
    width: 12vw;
}

.landing .top-right {
    right: 0px;
    top: 100px;
}

.landing .bottom-left {
    left: 0;
    bottom: 10vw;
    width: 18vw;
}



/* ---------------------- cream info ------------ */

.cream-info {
    position: relative;
    padding-top: 3rem;
}

.cream-info .outline {
    position: absolute;
}

.cream-info .top-left {
    left: 0;
    top: 0;
    width: 8vw;
}

.cream-info .top-right {
    right: 0;
    top: 0;
    width: 10vw;
}




/* ------------------- cream info 2 ---------------- */

.cream-info2 {
    position: relative;
}

.cream-info2 .page {
    padding-top: 4rem;
    position: relative;
}

.cream-info2 .outline {
    position: absolute;
}

.cream-info2 .top-right {
    right: 5vw;
    top: -6vw;
    width: 16vw;
}


.cream-info2 .bottom-right {
    right: 0;
    bottom: -11vw;
    width: 12vw;
}







/* media */
@media only screen and (max-width: 1600px) {
    .landing .image-holder .cone {
        height: 500px;
    }
}

@media only screen and (max-width: 1050px) {
    .landing .image-holder .cone {
        height: 420px;
    }
}

@media only screen and (max-width: 800px) {
    .landing .image-holder .cone {
        height: 300px;
    }

    .landing .content {

        min-height: 450px;
    }
}


</style>