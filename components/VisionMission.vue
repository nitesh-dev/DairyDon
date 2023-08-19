<script setup lang='ts'>


</script>
<template>
    <section class="vision-mission">
        <img src="../public/images/outline/top.png">
        <div class="content">
            <div class="page">
                <div class="inner-content content1">
                    <div class="text">
                        <h2>Vision</h2>
                        <hr>
                        <p>”To Become One of the Top 10 Most Popular Premium Icecream Brands by 2025 in India.”</p>
                    </div>
                    <img src="../public/images/vision/vision.png" alt="vision">
                </div>

                <div class="inner-content content2">
                    <img src="../public/images/vision/mission.png" alt="mission">
                    <div class="text">
                        <h2>Mission</h2>
                        <hr>
                        <p>We manufacture Premium icecream thick shakes and softy which are made from 100% pure milk and
                            high-quality ingredients made by world-class manufacturing setup, freshly serving to customers
                            from tier 1 and tier 2 cities through our parlour.
                        </p>
                    </div>
                </div>
            </div>

            <img src="../public/images/vision/vision-text.png" class="outline top-left">
            <img src="../public/images/vision/mission-text.png" class="outline bottom-right">
        </div>
        <img src="../public/images/outline/bottom.png">


        <!-- outline image -->

        <!-- <img src="../public/images/outline/barries.png" class="outline top-right">
        <img src="../public/images/outline/oreo.png" class="outline bottom-right"> -->

    </section>
</template>
<style scoped>
.vision-mission {
    display: grid;
    grid-template-columns: 100%;
    position: relative;
}

.vision-mission>img {
    width: 100%;
}

.vision-mission .content {
    min-height: 400px;
    background-color: var(--color-secondary-light);
    position: relative;
}


.vision-mission h2 {
    line-height: 1;
    color: var(--color-secondary);
    margin-bottom: 0;
}

.vision-mission hr {
    width: 100px;
    margin: 0;
    border: none;
    border-bottom: 2px solid var(--color-secondary-variant);
    margin: 1rem 0;
}

.vision-mission hr::before {
    content: "";
    background-color: var(--color-secondary-variant);
    height: 8px;
    width: 8px;
    transform: rotateZ(45deg) translate(-20%, -40%);
    position: absolute;
}




/* -------------------- outline --------- */

.vision-mission .outline {
    position: absolute;
    height: 100px;
    width: auto;
}

.vision-mission .top-left {
    left: 0;
    top: 20px;
    width: 55%;
    height: auto;
}

.vision-mission .bottom-right {
    right: 0;
    bottom: -20px;
    width: 55%;
    height: auto;
}




/* --------------- inner content -------------- */

.vision-mission .inner-content {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.vision-mission .inner-content>* {
    width: 50%;
}

.vision-mission .inner-content img {
    width: 50%;
    max-height: 320px;
    object-fit: contain;
}

.vision-mission .inner-content p {
    max-width: 440px;
}
</style>