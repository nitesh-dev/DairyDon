<script setup lang='ts'>

const leftContent = Array<{
    year: string,
    first: string,
    last: string
}>()

leftContent.push({
    year: '1989',
    first: 'OUR FIRST OUTLET',
    last: '@MG ROAD, NASHIK'
})

leftContent.push({
    year: '1996',
    first: 'OUR SECOD OUTLET',
    last: '@COLLEGE ROAD, NASHIK'
})


leftContent.push({
    year: '2008',
    first: 'OUR 1ST FRANCHISE',
    last: '@INDIRANAGAR, NASHIK'
})

leftContent.push({
    year: '2010',
    first: 'SETUP OUR SECOND FRANCHISE',
    last: '@NASHIK ROAD'
})


leftContent.push({
    year: '2013',
    first: 'OUR 3RD FRANCHISE',
    last: '@PUNE, KARVE ROAD'
})

leftContent.push({
    year: '2015',
    first: 'OUR 4TH FRANCHISE',
    last: '@MALEGAON'
})

leftContent.push({
    year: '2016',
    first: 'OUR 5TH FRANCHISE',
    last: '@NAGPUR'
})

leftContent.push({
    year: '2017',
    first: 'OUR 6TH FRANCHISE',
    last: '@ASHOKA MARG, NASHIK'
})


leftContent.push({
    year: '2018',
    first: 'OUR 7TH FRANCHISE',
    last: '@SOLAPUR'
})


// const rightContent = Array<{
//     year: string,
//     first: string,
//     last: string
// }>()








</script>
<template>
    <section class="history">
        <div class="page desktop">
            <div class="left">
                <template v-for="item, index in leftContent">

                    <div class="card-holder" v-if="index % 2 == 0">
                        <div class="card">
                            <div class="area">
                                <div class="circle">{{ item.year }}</div>
                                <h2>{{ item.year }}</h2>
                                <span>{{ item.first }}</span>
                                <span>{{ item.last }}</span>
                                <div class="line"></div>
                            </div>
                            <img src="../public/images/history/chip-arrow-right.png">
                        </div>
                        <div class="hidden-line"></div>
                    </div>
                </template>
            </div>
            <div class="right">

                <template v-for="item, index in leftContent">
                    <div class="card-holder" v-if="index % 2 != 0">
                        <div class="card">
                            <img src="../public/images/history/chip-arrow-left.png">
                            <div class="area">
                                <div class="circle">{{ item.year }}</div>
                                <h2>{{ item.year }}</h2>
                                <span>{{ item.first }}</span>
                                <span>{{ item.last }}</span>
                                <div class="line"></div>
                            </div>
                        </div>
                        <div class="hidden-line"></div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>
<style scoped>
/* desktop */

.history {
    min-height: 400px;
    margin-bottom: 4rem;
}

.history .desktop {
    display: grid;
    grid-template-columns: 50% 50%;
}

.history .left {
    transform: translateX(12px);
}

.history .right {
    margin-top: 76px;
    transform: translateX(-12px);
}


.history .card-holder {
    position: relative;
    margin-top: 52px;
}


.history .card-holder .hidden-line {
    position: absolute;
    height: 80px;
    width: 100%;
    border: 4px solid var(--color-secondary-variant);
    top: -28px;
    z-index: -5;
    border-right: none;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
}

.history .card {
    display: grid;
    grid-template-columns: auto max-content;
    align-items: center;
    height: 100px;
    justify-content: right;

}

.history .card .area {
    background-color: #B1099E;
    height: 100%;
    width: 300px;
    border-radius: 12px 0 0 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 40px;
    justify-content: center;
    position: relative;

}

.history .card img {
    height: 100px;
    display: block;
    width: auto;
}

.history .area h2 {
    color: white;
    margin: 0;
    line-height: 1;
    font-weight: 400;
    font-size: 28px;
}

.history .area span {
    font-size: var(--medium-2-font);
    color: rgba(255, 255, 255, 0.815);
    margin: 0;
    line-height: 1;
}

.history .area .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border: 3px solid #D200BB;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    background-color: white;
    color: var(--color-secondary);
    font-weight: bold;
    transform: translate(-50%, -50%);
}


.history .area .line {
    position: absolute;
    width: 40px;
    right: -55px;
    top: 50%;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-50%);
    z-index: 10;

}

.history .area .line::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    transform: translate(-100%, -36%);
}


/* ------------ modification for right side ------------*/
.history .right .card {
    grid-template-columns: max-content auto;
    justify-content: left;
}

.history .right .card .area {
    background-color: var(--color-secondary-variant);
    border-radius: 0 12px 12px 0;
    padding-left: 15px;
}


.history .right .area .circle {
    border: 3px solid #FC66BD;
    left: unset;
    right: 0;
    color: var(--color-secondary-variant);
    transform: translate(50%, -50%);
}

.history .right .area .line {
    right: unset;
    left: -55px;
}

.history .right .area .line::before {
    transform: translate(100%, -36%);
    right: 0;
}

.history .right .card-holder .hidden-line {

    border: 4px solid var(--color-secondary);
    border-left: none;
    border-radius: 0;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    width: calc(100% - 24px);
    left: 24px;
}




/* phone */



/* --------extra filter -------- */

.history .left .card-holder:first-child .hidden-line {
    display: none;
}

.history .left .card-holder:last-child .line {
    display: none;
}


@media only screen and (max-width: 900px) {

    .history .card .area {
        width: 250px;
    }
}

@media only screen and (max-width: 750px) {
    .history .desktop{
        /* temp */
        display: block;         
    }
}
</style>