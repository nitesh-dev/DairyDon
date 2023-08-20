<script setup lang='ts'>
import Header from '../components/Header.vue';
import product1 from '~/public/images/cup-cream.png'

const heading1 = "We are passionate about innovation and research"
const smallHeading = "constantly for new flavours and new ice cream dishes that we can serve you."
const content1 = `In the year 1981 D.D. Yeola family established an Ice cream Parlour at Mahatma Gandhi Road Nashik (Maharashtra) India, with Variety products of softies, Thick shakes & fresh Scoop Ice creams with registerd Brand name as “DAIRY DON”. Dairy Don has specialty ice cream providing quality and value to consumers through more than 13 retail shops in Nashik, Mumbai, Pune, Ahmednagar, Aurangabad, Nagpur. We keep strict focus on quality during our manufacturing processes, and take extreme care on maintaining hygiene of our products, serve you with great warmth at our outlets which has helped us gain something very valuable over the last 34 years of our operations that is your Love and Trust.`

</script>
<template>
    <!-- landing -->
    <section class="landing">
        <div class="content">
            <Header active="/about"></Header>
            <h2>About Us</h2>

        </div>
        <div class="image-holder">
            <img src="../public/images/header/outline.png">
        </div>
    </section>


    <!-- ----------- info ------------------ -->
    <section class="info">
        <IceCreamInfo :image="product1" :heading="heading1" :content="content1" button-text="" :sub-heading="smallHeading">
        </IceCreamInfo>

        <div class="inner page">
            <p>Dairy Don has reinvented what people expect from their ice cream experience in a parlour. By using only the
                finest ingredients to make our ice cream, Dairy Don delivers the best tasting ice cream. Rich, Creamy &
                Original in terms of product range, we are equally diverse and offer you mouth-watering products across all
                categories of Ice Creams.
            </p>

            <img src="../public/images/tri-cream.png" alt="cream">
        </div>
    </section>

    <VisionMission></VisionMission>
    <History></History>

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
}

.landing h2 {
    color: white;
    text-align: center;
    line-height: 1;
    margin: 2.5em 0;
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

.landing .image-holder img {
    width: 100%;
}



/* ----------------- info section -------------- */

.info .inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

}

.info .inner img {
    width: 100%;
    max-height: 320px;
    object-fit: contain;
}


</style>