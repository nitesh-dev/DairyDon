<script setup lang='ts'>
defineProps<{
    data: Array<{
        year: string,
        first: string,
        last: string
    }>
}>()

</script>
<template>
    <div class="page history-phone">
        <div class="card" v-for="item in data">
            <div class="content">
                <div class="circle">{{ item.year }}</div>
                <h2>{{ item.year }}</h2>
                <span>{{ item.first }}</span>
                <span>{{ item.last }}</span>

            </div>
            <div class="image">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="126" viewBox="0 0 62 126" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 126H4.83533C10.2677 125.998 15.4944 123.919 19.448 120.188L54.9047 78.6001C58.5217 75.2155 60.8318 70.6622 61.4293 65.7406C61.7449 63.7452 61.7449 61.7126 61.4293 59.7173C60.6964 54.9944 58.3983 50.6558 54.9047 47.3999L19.448 5.81238C15.4944 2.08081 10.2677 0.00183105 4.83533 0H0V126Z"
                        />
                </svg>
                <div class="line"></div>
                <div class="outer-line"></div>
                <div class="curve"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.history-phone {
    display: none;
    margin: 2rem 0;
}

.history-phone .card {
    display: grid;
    grid-template-columns: auto max-content;
    height: 126px;
    margin-left: 1.5rem;
    margin-right: 2.4rem;
    margin-bottom: 1rem;
}

.history-phone .card:nth-child(even) .content{
    background-color: var(--color-secondary-variant);
}

.history-phone .card:nth-child(even) svg{
    fill: var(--color-secondary-variant) !important;
}

.history-phone .card:nth-child(even) .circle{
    border: 4px solid #FC0393;
}

.history-phone .card:nth-child(even) .outer-line{
    background-color: #FC0393;
}

.history-phone .card:nth-child(even) .curve{
    border: 5px solid #FC0393;
}



.history-phone .content {
    background-color: var(--color-secondary);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 0.5rem 3rem;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 126px;

}

.history-phone .content h2 {
    color: white;
    margin: 0;
    line-height: 1.2;
    font-weight: 400;
    font-size: 28px;
}

.history-phone .content span {
    font-size: var(--medium-2-font);
    color: rgba(255, 255, 255, 0.815);
    margin: 0;
    line-height: 1.3;
}

.history-phone .card .image svg {
    height: 126px;
    width: auto;
    transform: translateX(-1px);
    fill: var(--color-secondary);
}

.history-phone .card .image{
    position: relative;
}

.history-phone .card .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
    border: 4px solid #D200BB;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    background-color: white;
    color: var(--color-secondary);
    font-weight: bold;
    transform: translate(-50%, -50%);
}


.history-phone .line {
    position: absolute;
    width: 30px;
    right: 0px;
    top: 50%;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-80%);
    z-index: 10;
}

.history-phone .line::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    transform: translate(-100%, -36%);
}

.history-phone .outer-line {
    position: absolute;
    width: 30px;
    right: -28px;
    top: 50%;
    height: 5px;
    background-color: var(--color-secondary);
    transform: translateY(-80%);
    z-index: 10;
}

.history-phone .curve {
    position: absolute;
    width: 40px;
    right: -45px;
    top: 62px;
    height: 148px;
    border: 5px solid var(--color-secondary);
    z-index: -1;
    border-radius: 50%;
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
}

.history-phone .card:last-child .curve{
    display: none;
}

.history-phone .card:last-child .outer-line{
    background-color: var(--color-secondary-variant);
}




@media only screen and (max-width: 750px) {
    .history-phone {
        display: block;
    }
}
</style>