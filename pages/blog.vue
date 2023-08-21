<script setup lang='ts'>
import Header from '../components/Header.vue';
import blog1 from '~/public/images/blog/blog1.jpg'
import blog2 from '~/public/images/blog/blog2.jpg'
import blog3 from '~/public/images/blog/blog3.jpg'
import blog4 from '~/public/images/blog/blog4.jpg'
import blog5 from '~/public/images/blog/blog5.jpg'
import blog6 from '~/public/images/blog/blog6.jpg'
import blog7 from '~/public/images/blog/blog7.jpg'
import blog8 from '~/public/images/blog/blog8.jpg'
import blog9 from '~/public/images/blog/blog9.jpg'

import deskImage from '~/public/images/header/about-desk.png'
import phoneImage from '~/public/images/header/about-phone.png'


const blogs = Array<{
    date: string,
    image: string,
    title: string,
    content: string,
    link: string
}>()



blogs.push({
    date: '13 August 2023',
    image: blog1,
    title: 'Discover a Virtual Data Room Assessment',
    content: 'Discover a online data room that’s made out of you at heart. Learn more about…',
    link: ''
})


blogs.push({
    date: '06 August 2023',
    image: blog2,
    title: 'Restricted Access To Secret Data',
    content: 'Controlled usage of confidential data is critical for avoiding a wide variety of dangers, data…',
    link: ''
})

blogs.push({
    date: '12 July 2023',
    image: blog3,
    title: 'Info Room Program – The Right Way To Manage Files In A Info Room',
    content: 'The best data room application is a tool that enhances your company productivity by making…',
    link: ''
})


blogs.push({
    date: '13 June 2023',
    image: blog4,
    title: 'Advantages Of AMD Processors',
    content: 'A cpu is the mind of a laptop, it functions the information that is certainly…',
    link: ''
})


blogs.push({
    date: '05 June 2023',
    image: blog5,
    title: 'Electronic Digital Machines For People Who Do Buiness',
    content: 'As the Industrial Revolution took hold in the nineteenth century, various kinds electronic machines for…',
    link: ''
})


blogs.push({
    date: '31 May 2023',
    image: blog6,
    title: 'A Dental Technologies And Innovations',
    content: 'From laserlight cavity detection to increased reality tools, new systems are making health care visits…',
    link: ''
})


blogs.push({
    date: '25 May 2023',
    image: blog7,
    title: 'AVG Antivirus Review',
    content: 'avg antivirus security software AVG comes with three distinct plans to match many users and…',
    link: ''
})


blogs.push({
    date: '25 May 2023',
    image: blog8,
    title: 'The Very Best Torrenting Sites For Music',
    content: 'Controlled usage of confidential data is critical for avoiding a wide variety of dangers, data…',
    link: ''
})

blogs.push({
    date: '12 July 2023',
    image: blog9,
    title: 'Buyer Relationship Management Software',
    content: 'Customer romance management software https://i-propertyassets.com/revenue-streams-that-deliver-cash-to-your...',
    link: ''
})





</script>
<template>
    <!-- landing -->
    <OtherHeader active-tab="/blog" page-name="Blog" :desk-image="deskImage" :phone-image="phoneImage"></OtherHeader>

    <section class="blog">
        <div class="page">
            <div class="card" v-for="item in blogs">
                <img :src="item.image" :alt="item.title">
                <div class="content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.content }}</p>
                    <NuxtLink to="#">
                        <span>Read More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                            <path
                                d="M13.5669 4.55045L9.19188 0.175445C9.074 0.0615964 8.91612 -0.00140039 8.75225 2.36265e-05C8.58838 0.00144764 8.43162 0.0671784 8.31574 0.183058C8.19986 0.298939 8.13413 0.455696 8.1327 0.619569C8.13128 0.783442 8.19428 0.941319 8.30813 1.05919L11.6163 4.36732H0.625C0.45924 4.36732 0.300269 4.43317 0.183058 4.55038C0.065848 4.66759 0 4.82656 0 4.99232C0 5.15808 0.065848 5.31705 0.183058 5.43426C0.300269 5.55147 0.45924 5.61732 0.625 5.61732H11.6163L8.30813 8.92544C8.24843 8.9831 8.20082 9.05206 8.16806 9.12832C8.13531 9.20457 8.11806 9.28658 8.11734 9.36957C8.11662 9.45256 8.13244 9.53486 8.16386 9.61167C8.19529 9.68848 8.2417 9.75826 8.30038 9.81694C8.35906 9.87562 8.42884 9.92203 8.50565 9.95346C8.58247 9.98488 8.66476 10.0007 8.74775 9.99998C8.83074 9.99926 8.91275 9.98201 8.989 9.94926C9.06526 9.9165 9.13422 9.86889 9.19188 9.8092L13.5669 5.43419C13.684 5.31699 13.7499 5.15805 13.7499 4.99232C13.7499 4.82659 13.684 4.66765 13.5669 4.55045Z"
                                fill="#FC0393" />
                        </svg>
                    </NuxtLink>

                    <div class="date">
                        <span>{{ item.date.split(' ')[0] }}</span>
                        <div>
                            <span>{{ item.date.split(' ')[1] }}</span>
                            <span>{{ item.date.split(' ')[2] }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="load">
            <WidgetStarButton>
                <span>Load</span>
                <span>More</span>
            </WidgetStarButton>
        </div>
    </section>


    <Footer></Footer>
</template>
<style scoped>


/* ------------------- blog -------------------- */

.blog {
    padding: 2rem 0;
}

.blog .page {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 400px;
    width: 100%;
    gap: 1.5rem;
}


.blog .card {
    box-shadow: 0px 9px 33px 0px rgba(71, 0, 63, 0.12);
    border-radius: 10px;
    overflow: auto;
}

.blog img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}


.blog .card .content {
    padding: 16px;
    position: relative;
}


.blog h3 {
    color: var(--color-secondary);
    margin: 0;
    line-height: 1.3;
    margin-top: 8px;
}

.blog a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-secondary-variant);
    font-weight: bold;
}



.blog .load {
    display: flex;
    justify-content: center;
    margin: 4rem 0;
    margin-bottom: 5rem;
}

.blog .date{
    position: absolute;
    top: -8px;
    right: 16px;
    transform: translateY(-50%);
    display: grid;
    width: 125px;
    grid-template-columns: max-content 1fr;
    padding: 4px 12px;
    align-items: center;
    background-color: #87004E;
    gap: 12px;
    border-radius: 6px;
}

.blog .date>span{
    font-size: var(--big-font);
    color: white !important;
}

.blog .date span{
    display: block;
    color: rgba(255, 255, 255, 0.788);
    line-height: 1.4;
}


</style>