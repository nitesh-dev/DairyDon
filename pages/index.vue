<script setup lang='ts'>
</script>
<template>
    <section class="landing">
        <div class="content">
            <Header></Header>
        </div>
        <div class="image-holder">
            <img src="../public/images/outline/Vector 3.png">
        </div>
    </section>
</template>
<style scoped>

.landing{
    display: grid;
    grid-template-columns: 100%;
}

.landing .content{
    background-color: var(--color-primary);
    min-height: 400px;
}


.landing .image-holder img{
    width: 100%;
}


</style>