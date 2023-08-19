<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue';

import profile1 from '~/public/images/testimonial/profile 1.png'


const slideContent = Array<{
    image: string,
    name: string,
    message: string
}>()


slideContent.push({
    image: profile1,
    name: 'Nutan shmukh',
    message: 'Nice place and multiple flavours of ice cream and shakes are available .... Well maintained ....'
})

slideContent.push({
    image: profile1,
    name: 'NutaD eshmukh',
    message: 'Nice place and multiple flavours of ice cream and shakes are available .... Well maintained ....'
})


slideContent.push({
    image: profile1,
    name: 'Nutan Desukh',
    message: 'Nice place and multiple flavours of ice cream and shakes are available .... Well maintained ....'
})


slideContent.push({
    image: profile1,
    name: 'Nutan Deshmukh',
    message: 'Nice place and multiple flavours of ice cream and shakes are available .... Well maintained ....'
})





const autoPlay = {
    delay: 3000
}


const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}


</script>
<template>
    <section class="testimonial">
        <img src="../public/images/outline/top.png">
        <div class="content">
            <div class="page">
                <h2>Testimonials</h2>
                <div class="hr">
                    <hr>
                </div>

                <!-- testimonial area -->
                <div class="container">
                    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperController]"
                        :slides-per-view="1" :loop="true" :effect="'creative'" :autoplay="autoPlay"
                        :navigation="navigation">

                        <SwiperSlide v-for="slide, index in slideContent" :key="index">

                            <div class="profile">
                                <img :src="slide.image" :alt="slide.name">
                                <p>{{ slide.message }}</p>
                                <h4>{{ slide.name }}</h4>

                                <svg class="quotes" width="40" height="26" viewBox="0 0 40 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.450938 18.88C0.450938 16.9067 0.930938 14.9867 1.89094 13.12C2.85094 11.2 4.05094 9.46666 5.49094 7.92C6.98427 6.32 8.63761 4.93333 10.4509 3.76C12.3176 2.53333 14.1309 1.57333 15.8909 0.879999L18.2109 4.24C16.2376 5.73333 14.7443 7.06667 13.7309 8.24C12.7709 9.41333 12.2909 10.5867 12.2909 11.76C12.2909 13.6267 13.7843 15.6533 16.7709 17.84C16.7709 19.12 16.5309 20.2667 16.0509 21.28C15.5709 22.2933 14.9043 23.1467 14.0509 23.84C13.2509 24.5333 12.3176 25.0667 11.2509 25.44C10.2376 25.8133 9.17094 26 8.05094 26C5.86427 26 4.05094 25.4133 2.61094 24.24C1.17094 23.0667 0.450938 21.28 0.450938 18.88ZM21.6509 18.88C21.6509 16.9067 22.1309 14.9867 23.0909 13.12C24.0509 11.2 25.2509 9.46666 26.6909 7.92C28.1843 6.32 29.8376 4.93333 31.6509 3.76C33.5176 2.53333 35.3309 1.57333 37.0909 0.879999L39.3309 4.24C37.4109 5.73333 35.9443 7.06667 34.9309 8.24C33.9709 9.41333 33.4909 10.5867 33.4909 11.76C33.4909 13.6267 34.9843 15.6533 37.9709 17.84C37.9709 19.12 37.7309 20.2667 37.2509 21.28C36.7709 22.2933 36.1043 23.1467 35.2509 23.84C34.4509 24.5333 33.5176 25.0667 32.4509 25.44C31.3843 25.8133 30.2909 26 29.1709 26C27.0376 26 25.2509 25.4133 23.8109 24.24C22.3709 23.0667 21.6509 21.28 21.6509 18.88Z"
                                        fill="#B1099E" fill-opacity="0.5" />
                                </svg>


                            </div>

                        </SwiperSlide>
                    </Swiper>

                    <div class="button swiper-button-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.1716 6.77822L6.8076 1.41421L8.2218 0L16 7.77822L8.2218 15.5563L6.8076 14.1421L12.1716 8.77822H0V6.77822H12.1716Z" />
                        </svg>
                    </div>
                    <div class="button swiper-button-next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.1716 6.77822L6.8076 1.41421L8.2218 0L16 7.77822L8.2218 15.5563L6.8076 14.1421L12.1716 8.77822H0V6.77822H12.1716Z" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
        <img src="../public/images/outline/bottom.png">

        <!-- outline image -->
        <img class="outline" src="../public/images/outline/cashcrew2.png">

    </section>
</template>
<style scoped>
.testimonial {
    display: grid;
    grid-template-columns: 100%;
    position: relative;
}

.testimonial>img {
    width: 100%;
}

.testimonial .content {
    width: 100%;
    min-height: 400px;
    background-color: var(--color-secondary-light);
    background-image: url('../public/images/testimonial/testimonial.png');
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: 90%;
}


.testimonial h2 {
    text-align: center;
    color: var(--color-secondary);
    margin: 0;
    margin-top: 5rem;
}


.testimonial .hr {
    width: 100px;
    position: relative;
    margin: auto;
}

.testimonial hr {
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--color-secondary-variant);
    margin: 0.4rem auto;
}

.testimonial hr::before,
.testimonial hr::after {
    content: "";
    background-color: var(--color-secondary-variant);
    height: 8px;
    width: 8px;
    transform: rotateZ(45deg) translate(-20%, -40%);
    position: absolute;
}

.testimonial hr::after {
    right: 0;
    left: unset;
}



/* ------------------ profile card --------------- */

.testimonial .container {
    margin: 2rem auto;
    width: 100%;
    max-width: 1070px;
    position: relative;
}

.testimonial .profile {
    width: 600px;
    background-color: white;
    border-radius: 12px;
    padding: 2rem 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
    position: relative;
    text-align: center;
}

.testimonial .profile .quotes{
    position: absolute;
    left: 30px;
    top: 35%;
    width: 32px;
}


.testimonial .profile img {
    width: 60px;
    height: 60px;
    object-fit: cover;
}

.testimonial .outline{
    position: absolute;
    width: 120px;
    bottom: 50px;
    right: 0;
}

.testimonial .profile h4 {
    font-weight: bold;
    font-family: 'Poppins';
    color: var(--color-secondary);
}

.swiper-slide .profile {
    transition: all 200ms;
    opacity: 0.5;
    box-shadow: 0px 4px 24px 0px rgba(71, 0, 63, 0.05)
}

.swiper-slide-prev .profile {
    transform: translateX(-30%) scale(0.9, 0.9);
}

.swiper-slide-next .profile {
    transform: translateX(30%) scale(0.9, 0.9);
}

.swiper-slide-active .profile {
    box-shadow: 0px 4px 24px 0px rgba(71, 0, 63, 0.12);
    opacity: 1;
}


/* ------------------- swiper button --------------- */
.testimonial .swiper-button-prev::after,
.testimonial .swiper-button-next::after {
    content: '';
}

.testimonial .container .button {
    position: absolute;
    width: 60px;
    height: 38px;
    border-radius: 50px;
}

.testimonial .container .button svg {
    fill: inherit;
    width: 16px;
}

.testimonial .swiper-button-prev svg {
    transform: rotateZ(180deg);
}

.testimonial .swiper-button-prev {
    left: 0;
    top: 50%;
    fill: var(--color-secondary);
    background-color: white;
    border: 1px solid var(--color-secondary);
}

.testimonial .swiper-button-next {
    right: 0;
    top: 50%;
    fill: white;
    background-color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
}
</style>

