<script setup lang='ts'>
</script>
<template>
    <section class="map">
        <div class="page">
            <h2>Find Your Nearest Store</h2>
            <div class="hr">
                <hr>
            </div>

            <div class="map-holder">
                <img src="../public/images/map.png" alt="map">
                <WidgetStarButton>
                    <span>Locate</span>
                </WidgetStarButton>
            </div>
        </div>


        <img class="outline top-left" src="../public/images/outline/cream.png">
        <img class="outline bottom-left" src="../public/images/outline/cone-cream.png">
    </section>
</template>
<style scoped>

.map{
    position: relative;
}


.map .outline{
    position: absolute;
}

.map .top-left{
    left: 4vw;
    top: -10vw;
    width: 10vw;
}

.map .bottom-left{
    left: 0;
    bottom: -19vw;
    width: 13vw;
}

.map h2 {
    text-align: center;
    color: var(--color-secondary);
    margin: 0;
    margin-top: 5rem;
}


.map .hr {
    width: 100px;
    position: relative;
    margin: auto;
}

.map hr {
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--color-secondary-variant);
    margin: 0.4rem auto;
}

.map hr::before,
.map hr::after {
    content: "";
    background-color: var(--color-secondary-variant);
    height: 8px;
    width: 8px;
    transform: rotateZ(45deg) translate(-20%, -40%);
    position: absolute;
}

.map hr::after {
    right: 0;
    left: unset;
}



/* -----------map holder ----------- */
.map .map-holder{
    position: relative;
    height: 400px;
    background-color: #49034152;
    border-radius: 8px;
    margin: 2.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.map .map-holder img{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

@media only screen and (max-width: 700px) {

    .map .outline{
        display: none;
    }
}




</style>