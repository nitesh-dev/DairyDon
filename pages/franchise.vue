<script setup lang='ts'>

import cone from '~/public/images/cone-6.png'


const heading = "Are you an entrepreneur looking for a good brand with beneficial returns?"
const content = "Well, your search ends here. With profound hold in the Ice Cream industry, Dairy Don is looking for franchisees who will be the beholders of our brand. Fill up the form below and we will get in touch with you."

</script>
<template>
    <!-- landing -->
    <section class="landing">
        <div class="content">
            <Header active="/franchise"></Header>
            <h2>Franchise</h2>

        </div>
        <div class="image-holder">
            <img src="../public/images/header/outline.png">
        </div>
    </section>

    <IceCreamInfo :image="cone" buttonText="" :heading="heading" :content="content" subHeading=""></IceCreamInfo>


    <section class="franchise">
        <div class="background">
            <img src="../public/images/outline/top.png">
            <div></div>
            <img src="../public/images/outline/bottom.png">
        </div>

        <div class="page">
            <form>
                <h2>Franchise Form</h2>
                <div class="hr">
                    <hr>
                </div>


                <div class="equal-2">
                    <div class="input">
                        <p>Name <span>*</span></p>
                        <input type="text">
                    </div>
                    <div class="input">
                        <p>E-mail Address <span>*</span></p>
                        <input type="text">
                    </div>
                </div>

                <div class="equal-2">
                    <div class="input">
                        <p>Mobile Number <span>*</span></p>
                        <input type="text">
                    </div>
                    <div class="input">
                        <p>City <span>*</span></p>
                        <input type="text">
                    </div>
                </div>

                <div class="equal-2">
                    <div class="input">
                        <p>State <span>*</span></p>
                        <input type="text">
                    </div>
                    <div class="input">
                        <p>Pincode <span>*</span></p>
                        <input type="text">
                    </div>
                </div>

                <div class="equal-2">
                    <div class="input">
                        <p>Do You Own An Existing Commercial Space? <span>*</span></p>
                        <select>
                            <option value="">-Select-</option>
                            <option value="">Yes</option>
                            <option value="">No</option>
                        </select>
                    </div>
                </div>


                <h3>Business/work Experience</h3>
                
                <div class="equal-2">
                    <div class="input">
                        <p>Current Job Business</p>
                        <input type="text">
                    </div>
                    <div class="input">
                        <p>Have You Ever Owned A Business? <span>*</span></p>
                        <select>
                            <option value="">-Select-</option>
                            <option value="">Yes</option>
                            <option value="">No</option>
                        </select>
                    </div>
                </div>

                <div class="equal-2">
                    <div class="input">
                        <p>Have You Ever Been A Franchise Of Another Concept? <span>*</span></p>
                        <select>
                            <option value="">-Select-</option>
                            <option value="">Yes</option>
                            <option value="">No</option>
                        </select>
                    </div>
                </div>


                <h3>Location Information</h3>
                
                <div class="equal-2">
                    <div class="input">
                        <p>City <span>*</span></p>
                        <input type="text">
                    </div>
                    <div class="input">
                        <p>Location Preference <span>*</span></p>
                        <input type="text">
                    </div>
                </div>


                <button type="submit">SUBMIT FORM</button>

            </form>
        </div>
    </section>

    <Footer></Footer>
</template>
<style scoped>
.landing {
    display: grid;
    grid-template-columns: 100%;
    position: relative;
}

.landing .content {
    background-color: var(--color-primary);
}

.landing h2 {
    color: white;
    text-align: center;
    line-height: 1;
    margin: 2.5em 0;
}


.landing span {
    text-align: center;
    font-size: var(--average-font);
    display: block;
    color: rgba(255, 255, 255, 0.747);
    margin-top: 0.8em;
}



.landing .image-holder {
    position: relative;
}

.landing .image-holder img {
    width: 100%;
}



/* ------------------- franchise -------------------- */

.franchise {
    position: relative;
    min-height: 600px;
}

.franchise .page{
    overflow: auto;
}
.franchise form{
    background-color: white;
    width: 100%;
    margin-top: 18vw;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    border-radius: 16px;
    box-shadow: 0px 9px 33px 0px rgba(71, 0, 63, 0.12);
}



/* ---------- custom hr -------- */
.franchise h2{
    text-align: center;
    color: var(--color-secondary);
    margin-bottom: 0;
}

.franchise h3{
    color: var(--color-secondary);
    margin-bottom: -0.8rem;
    margin-top: 1.5em;
}


.franchise .hr {
    width: 100px;
    position: relative;
    margin: auto;
}

.franchise hr {
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--color-secondary-variant);
    margin: 0.4rem auto;
}

.franchise hr::before,
.franchise hr::after {
    content: "";
    background-color: var(--color-secondary-variant);
    height: 8px;
    width: 8px;
    transform: rotateZ(45deg) translate(-20%, -40%);
    position: absolute;
}

.franchise hr::after {
    right: 0;
    left: unset;
}


/* ----------input ----- */

.franchise .equal-2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}


.franchise .input{
    margin-top: 1.5rem;
}

.franchise .input p{
    margin: 0;
    margin-bottom: 2px;
}


.franchise .input p span{
    color: #FF4242;
}
.franchise input, .franchise select{
    width: 100%;
    border: 1px solid #EBCFE8;
    background-color: #FFFCFF;
    padding: 0.7em 1em;
    outline: none;
    border-radius: 4px;
}


.franchise button{
    margin: 3rem auto;
    display: block;
    padding: 0.8em 1em;
    max-width: 450px;
    width: 100%;
    border: none;
    background-color: var(--color-secondary-variant);
    color: white;
    border-radius: 4px;

}








/* ------------------ background ----------- */

.franchise .background {
    width: 100%;
    position: absolute;
    z-index: -2;
    display: grid;
    grid-template-columns: 100%;
    top: 0;
    left: 0;
}


.franchise .background div {
    height: 300px;
    background-color: var(--color-secondary-light);
}

.franchise .background img {
    width: 100%;
}
</style>