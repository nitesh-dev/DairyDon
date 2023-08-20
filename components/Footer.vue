<script setup lang='ts'>
</script>
<template>
    <footer>
        <img src="../public/images/outline/footer-vector.png">
        <div>
            <div class="page">
                <div class="holder">
                    <img src="../public/images/logo.png" alt="logo">
                    <div class="links">
                        <div>
                            <NuxtLink to="/">Home</NuxtLink>
                            <NuxtLink to="/">About Us</NuxtLink>
                            <NuxtLink to="/">Products</NuxtLink>
                        </div>

                        <div>
                            <NuxtLink to="/">Franchise</NuxtLink>
                            <NuxtLink to="/">Blog</NuxtLink>
                            <NuxtLink to="/">Contact Us</NuxtLink>
                        </div>
                    </div>

                    <div class="socials">
                        <h3>The most delicious place on the internet!</h3>

                        <a href="#" class="left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 640 640">
                                <path
                                    d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z" />
                            </svg>
                        </a>

                        <a href="#" class="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                viewBox="0 0 640 640">
                                <path
                                    d="M184.715 2.752h270.582C556.908 2.752 640 84.816 640 185.069v269.85c0 100.277-83.092 182.317-184.703 182.317H184.715C83.104 637.236 0 555.196 0 454.919v-269.85C0 84.816 83.103 2.752 184.715 2.752zm133.561 145.939c98.741 0 178.868 80.127 178.868 178.868 0 98.753-80.127 178.868-178.868 178.868-98.765 0-178.88-80.115-178.88-178.868 0-98.741 80.115-178.868 178.88-178.868zm0 60.414c65.387 0 118.454 53.056 118.454 118.454s-53.068 118.466-118.454 118.466c-65.41 0-118.466-53.067-118.466-118.466 0-65.398 53.056-118.454 118.466-118.454zM491.321 123.9c16.04 0 29.044 13.004 29.044 29.032 0 16.04-13.004 29.044-29.044 29.044-16.028 0-29.032-13.004-29.032-29.044 0-16.028 13.004-29.032 29.032-29.032zM206.825 54.58H433.21c85.005 0 154.526 69.178 154.526 153.712V435.81c0 84.532-69.52 153.699-154.526 153.699H206.825c-85.005 0-154.537-69.167-154.537-153.7V208.29c0-84.532 69.532-153.71 154.537-153.71z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <hr>
                <p class="copyright">Copyright © 2023 Dairy Don | Powered by Dairy Don</p>

            </div>
        </div>
    </footer>
</template>
<style scoped>
footer {
    display: grid;
    grid-template-columns: 100%;
}


footer>img {
    width: 100%;
}

footer>div {
    background-color: var(--color-primary);
}


footer .page img {
    width: 150px;
}

footer .holder {
    margin: 4rem 0;
    display: grid;
    grid-template-columns: max-content max-content max-content;
    justify-content: space-between;
}


footer .links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

footer .links a {
    display: block;
    color: rgba(255, 255, 255, 0.795);
    margin-bottom: 0.8em;
}

footer .socials {
    max-width: 250px;
}

footer .socials h3 {
    color: var(--color-secondary);
    margin-top: 0;
}

footer .socials a {
    background-color: white;
    width: 40px;
    height: 40px;
    display: inline-flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
}


footer .socials a svg {
    fill: inherit;
}

footer .socials a.right {
    fill: white;
    background-color: var(--color-secondary-variant);
}

footer .socials a.left {
    fill: var(--color-secondary-variant);
    background-color: white;
    margin-right: 1rem;
}


/* ---------------- copyright --------------- */
footer hr {
    border: none;
    border-bottom: 1px solid #6D0862;
    margin-top: 5rem;
}

footer .copyright {
    text-align: center;
    color: #c797c1b6;
}



@media only screen and (max-width: 800px) {
    footer .holder {
        grid-template-columns: 100%;
        gap: 2rem;
    }

    footer .socials {
        max-width: unset;
    }

}
</style>