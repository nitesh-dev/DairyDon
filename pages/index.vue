<script setup lang='ts'>
</script>
<template>
    <section class="landing">
        <div class="content">
            <Header></Header>
            <h1>Bringing in the <br>Luscious Ice Creams</h1>
            <span>Ice Cream | Shakes  | Softies</span>

        </div>
        <div class="image-holder">
            <img src="../public/images/outline/Vector 3.png">
            <img src="../public/images/cone2.png" class="cone" alt="cone">
        </div>
        
        <img src="../public/images/outline/cone.png" class="outline top-left" alt="cone">
        <img src="../public/images/outline/crunch.png" class="outline top-right" alt="crunch">
        <img src="../public/images/outline/staberry.png" class="outline bottom-left"  alt="strawberry">
    </section>
</template>
<style scoped>

.landing{
    display: grid;
    grid-template-columns: 100%;
    position: relative;
}

.landing .content{
    background-color: var(--color-primary);
    min-height: 400px;
}

.landing h1{
    color: white;
    text-align: center;
    line-height: 1;
    margin: 2em 0;
    margin-bottom: 0;
}


.landing span{
    text-align: center;
    font-size: var(--average-font);
    display: block;
    color: rgba(255, 255, 255, 0.747);
    margin-top: 0.8em;
}



.landing .image-holder{
    position: relative;
}

.landing .image-holder .cone{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 140%;
    width: auto;
    bottom: -50px;
}
.landing .image-holder img{
    width: 100%;
}



/* ----------- outline ------------- */
.landing .outline{
    position: absolute;
    object-fit: contain;
    height: 200px;
}

.landing .top-left{
    top: 80px;
}

.landing .top-right{
    right: 0px;
    top: 200px;
    height: 100px;
}

.landing .bottom-left{
    left: 0;
    bottom: 110px;
}




</style>