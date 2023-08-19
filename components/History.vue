<script setup lang='ts'>
</script>
<template>
    <section class="history">
        <div class="page desktop">
            <div class="left">
                <div class="card-holder">
                    <div class="card">
                        <div class="area">
                            <div class="circle">1989</div>
                            <h2>1989</h2>
                            <span>OUR FIRST OUTLET</span>
                            <span>@MG ROAD, NASHIK</span>

                            <div class="line">

                            </div>
                        </div>
                        <img src="../public/images/history/chip-arrow-right.png">
                    </div>
                </div>
            </div>
            <div class="right">

            </div>
        </div>
    </section>
</template>
<style scoped>
/* desktop */

.history{
    min-height: 400px;
}
.history .desktop {
    display: grid;
    grid-template-columns: 50% 50%;
}


.history .card{
    display: grid;
    grid-template-columns: auto max-content;
    align-items: center;
    height: 100px;
    justify-content: right;

}

.history .card .area{
    background-color: #B1099E;
    height: 100%;
    width: 260px;
    border-radius: 12px 0 0 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 40px;
    justify-content: center;
    position: relative;
    
}

.history .card img{
    height: 100px;
    display: block;
    width: auto;
}

.history .area h2{
    color: white;
    margin: 0;
    line-height: 1;
    font-weight: 400;
    font-size: 28px;
}

.history .area span{
    font-size: var(--medium-2-font);
    color: rgba(255, 255, 255, 0.815);
    margin: 0;
    line-height: 1;
}

.history .area .circle{
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


.history .area .line{
    position: absolute;
    width: 40px;
    right: -55px;
    top: 50%;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-50%);

}

.history .area .line::before{
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    transform: translate(-100% ,-36%);

}

</style>