<script setup lang='ts'>

defineProps<{
    heading: string,
    content: string,
    buttonText: string,
    image: string,
    subHeading: string
}>()
</script>
<template>
    <div class="page">
        <div class="left">
            <img :src="image" alt="ice cream">
        </div>

        <div class="right">
            <h2>{{ heading }}</h2>
            <hr>
            <p class="sub" v-if="subHeading.length > 0">{{ subHeading }}</p>
            <p>{{ content }}</p>
            <br>
            <WidgetStarButton v-if="buttonText.length > 0">
                <span v-for="item in buttonText.split(' ')">{{ item }}</span>
            </WidgetStarButton>
        </div>
    </div>
</template>
<style scoped>
.page {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.page .left,
.page .right {
    width: 50%
}

.page img {
    width: 100%;
    max-height: 420px;
    object-fit: contain;
}

.page h2 {
    line-height: 1;
    color: var(--color-secondary);
    margin-bottom: 0;
}

.page hr {
    width: 100px;
    margin: 0;
    border: none;
    border-bottom: 2px solid var(--color-secondary-variant);
    margin: 1rem 0;
}

.page hr::before {
    content: "";
    background-color: var(--color-secondary-variant);
    height: 8px;
    width: 8px;
    transform: rotateZ(45deg) translate(-20%, -40%);
    position: absolute;
}

.page .sub {
    font-size: var(--average-font);
    font-weight: 600;
    font-style: italic;
}


@media only screen and (max-width: 700px) {
    .page {
        flex-direction: column-reverse;
        margin-bottom: 2rem;
    }

    .page .left,
    .page .right {
        width: 100%;
    }
}
</style>