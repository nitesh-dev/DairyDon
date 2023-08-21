<script setup lang='ts'>
defineProps<{
    image: string,
    title: string,
    content: string
}>()
</script>
<template>
    <div class="product">
        <img :src="image" alt="product">
        <div>
            <div class="left">
                <h4>{{ title }}</h4>
                <p>{{ content }}</p>
            </div>
            <button class="primary icon">
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.704 4.284a1 1 0 1 0-1.403 1.424L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78l-6.925-6.823Z" />
                </svg>
            </button>
        </div>
    </div>
</template>
<style scoped>
.product>div {
    display: flex;
    grid-template-columns: 1fr max-content;
    gap: 0.5rem;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-between;
}

.product h4 {
    color: var(--color-secondary);
    font-weight: normal !important;
    font-family: "Poppins";
    margin: 0;
    text-transform: uppercase;
}

.product p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin: 0.4em 0;
}


.product img {
    width: 100%;
}

button {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    aspect-ratio: 1/1;
    border: none;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 13px rgba(177, 9, 158, 0.2);
}

button svg {
    fill: var(--color-secondary);
    width: 18px;
    height: 18px;
}


@media only screen and (max-width: 600px) {
    
    .product {
        padding: 1rem;
    }

    .product>div{
        margin-right: 1rem;
    }
}
</style>