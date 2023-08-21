<script setup lang='ts'>
defineProps<{
    activeTab: string,
    pageName: string,
    deskImage: string,
    phoneImage: string
}>()
</script>
<template>
    <!-- landing -->
    <section class="landing">
        <div class="content">
            <Header :active="activeTab"></Header>
            <h2>{{ pageName }}</h2>
        </div>

        <img class="background-desk" :src="deskImage">
        <img class="background-phone" :src="phoneImage">

    </section>
</template>
<style scoped>
.landing {
    display: grid;
    grid-template-columns: 100%;
    position: relative;
    height: 600px;
}

.landing h2 {
    color: white;
    text-align: center;
    line-height: 1;
    margin: 4em 0;
}


.landing span {
    text-align: center;
    font-size: var(--average-font);
    display: block;
    color: rgba(255, 255, 255, 0.747);
    margin-top: 0.8em;
}


.landing .background-desk {
    width: 100%;
    height: 580px;
    object-fit: cover;
    position: absolute;
    z-index: -1;
}

.landing .background-phone {
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    display: none;
}


@media only screen and (max-width: 600px) {

    .landing .content{
        height: 100vw;
    }
    .landing .background-desk {
        display: none;
    }

    .landing .background-phone {
        display: block;
    }

    .landing {
        display: grid;
        grid-template-columns: 100%;
        position: relative;
        height: unset;
    }

}
</style>