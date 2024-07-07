<template lang="pug">

div(class="navbar-container z-10 fixed top-0 flex justify-between items-center w-full")
    div(class="bg-black/10 backdrop-blur-lg navbar mx-auto my-5 p-3 md:w-auto md:inline-block text-center rounded-3xl md:rounded-full navbar-mobile transition-all border border-white/5")
        a(href="#!" class="align-middle text-white m-1 px-5 py-2 inline-block rounded-full transition-colors font-bold hover:opacity-70 active:scale-90 mr-20 menu-button") 
            img(class="w-10" src="~/assets/img/logo.svg", alt="logo")
        a(href="#!" class="text-white align-middle m-1 px-5 py-2 inline-block rounded-full transition-colors font-bold hover:bg-secondary hover:text-primary menu-button md:hidden"  onclick="document.querySelector('.navbar-mobile').classList.toggle('active')") Menu
        a(href="#!" class="text-white align-middle m-1 px-5 py-2 block md:inline-block rounded-full transition-colors font-bold border border-transparent hover:border-white/40 hover:text-secondary") Home
        a(href="#!" class="text-white align-middle m-1 px-5 py-2 block md:inline-block rounded-full transition-colors font-bold border border-transparent hover:border-white/40 hover:text-secondary") About Me
        a(href="#!" class="text-white align-middle m-1 px-5 py-2 block md:inline-block rounded-full transition-colors font-bold border border-transparent hover:border-white/40 hover:text-secondary") Projects
        a(href="#!" class="text-white align-middle m-1 px-5 py-2 block md:inline-block rounded-full transition-colors font-bold border border-transparent hover:border-white/40 hover:text-secondary") Services
        a(href="#!" class="text-white align-middle m-1 px-5 py-2 block md:inline-block rounded-full transition-colors font-bold border border-transparent hover:border-white/40 hover:text-secondary") Contact
.p-10

.header.text-center.py-24.max-w-5xl.mx-auto.px-3
    img.mx-auto.my-4.w-16(src="~/assets/img/logo.svg" alt="logo")
    h1.font-bold.my-14(class="text-white leading-relaxed text-3xl md:text-5xl md:leading-relaxed") We are #[span.text-secondary Raldin Casidar Studio], We Bring Code to Life, One Line at a Time
    p(class="text-white/80 text-md md:text-lg leading-loose md:leading-loose") Hey there! I’m #[a.font-bold.text-secondary Raldin Casidar Disomimba], the founder of #[span.text-secondary RC Studio], your friendly neighborhood full stack developer with a knack for turning coffee into code.
    a(href="#!" class="rounded-full text-lg md:text-xl mt-20 font-bold p-3 px-8 md:p-5 md:px-10 inline-block bg-secondary transition-all hover:opacity-70 active:scale-90") Contact Me


.welcome(class=" flex flex-col md:flex-row py-20 max-w-7xl mx-auto items-center px-3")
    .image.text-center(class="w-full md:w-2/5")
        img.mx-auto.my-4.w-full(class="max-w-[200px] md:max-w-[400px]" src="~/assets/img/raldin-casidar-image.png" alt="logo")
    .context.p-5(class="w-full md:w-3/5")
        h2(class=" text-secondary text-3xl md:text-4xl font-bold my-10") Welcome, Tech Enthusiasts!
        p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg my-4") With more than 4 years in the tech industry (which is like a century in developer years), I've been whipping up websites and apps that are not just functional, but downright fabulous. 
        p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg my-4") Nestled in the beautiful Philippines, I’ve become a master of both frontend and backend development. If it involves code, chances are, I’ve tinkered with it. 
        p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg my-4") Buckle up and join me on this wild adventure of creativity, caffeine, and a dash of delightful chaos!


h3(class="text-center text-secondary text-3xl md:text-4xl font-bold my-10") What I Do
p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg my-4 text-center mb-28") (Besides drinking Coffee)

div(class="grid p-5 grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 max-w-5xl mx-auto gap-7 mb-60")
    div(class="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-colors cursor-pointer rounded-3xl min-h-60 h-full md:col-span-2 bg-web-development") 
            div(class="flex flex-col md:flex-row py-6 w-full md:w-3/5")
                i.material-icons(class="text-secondary text-[40px] md:!text-[61px] drop-shadow-2xl") desktop_windows
                div(class="ml-0 md:ml-6")
                    h3(class="font-bold text-xl md:text-2xl my-8 md:mt-0 text-white") Web Development
                    p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg text-wrap") Spinning up responsive, intuitive websites faster than you can say “404 Error”
    div(class="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-colors cursor-pointer rounded-3xl min-h-60 h-full md:row-span-2 bg-app-development") 
        i.material-icons(class="text-secondary text-[40px] md:!text-[61px] drop-shadow-2xl") smartphone
        h3(class="font-bold text-xl md:text-2xl my-8 text-white") App Development
        p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg text-wrap") Crafting mobile apps so seamless you might think your phone is possessed (in a good way).
    div(class="p-8 py-14 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-colors cursor-pointer rounded-3xl min-h-60 h-full") 
        i.material-icons(class="text-secondary text-[40px] md:!text-[61px] drop-shadow-2xl") brush
        h3(class="font-bold text-xl md:text-2xl my-8 text-white") Graphic Design
        p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg") Creating visuals that make your eyes sing and your heart flutter.

    div(class="p-8 py-14 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-colors cursor-pointer rounded-3xl min-h-60 h-full") 
        i.material-icons(class="text-secondary text-[40px] md:!text-[61px] drop-shadow-2xl") code
        h3(class="font-bold text-xl md:text-2xl my-8 text-white") Wordpress
        p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg text-wrap") Building beautiful, easy-to-manage websites with WordPress magic.
    
h3(class="text-center text-secondary text-3xl md:text-4xl font-bold my-10") My Toolbox
p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg my-4 text-center mb-28") These are the technologies that I use to power up my projects

.flex.flex-row.flex-wrap.my-10.mb-20.max-w-6xl.mx-auto.gap-5.justify-center.p-2
    div(class="card py-7 px-12 h-48 w-48 flex flex-col justify-center items-center text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl hover:border-white/30 transition-colors cursor-pointer" v-for="(stack, i) in minimizeToolbox ? toolbox.slice(0, 10) : toolbox")
        img(class="h-16 w-16 mx-auto" :src="stack.icon", alt="logo")
        h4(class="mt-5 text-white text-md font-bold") {{ stack.name }}

p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg my-4 text-center mb-28") There's more! In fact, I have #[span.text-secondary {{ toolbox.length }}] technologies on my toolbox. #[a(@click="minimizeToolbox = !minimizeToolbox" class="text-secondary underline underline-offset-8 cursor-pointer") {{ minimizeToolbox ? 'Show All' : 'Show Less' }}]

h3(class="text-center text-secondary text-3xl md:text-4xl font-bold my-10 mt-40 px-5") Sneak Peek into My World
p(class="text-white/70 leading-loose md:leading-loose text-md md:text-lg my-4 px-5 text-center mb-16 mx-auto max-w-3xl") Explore a collection of my finest work, showcasing my skills in web and app development, wordpress, and graphic design. Each project is a testament to my dedication and passion for creating seamless and intuitive digital experiences.

div.p-3
    Swiper(class="-rotate-3 overflow-x-hidden" :slides-per-view="slidesPerView" :loop="true" :modules="[SwiperAutoplay]" :autoplay="{delay: 2000, disableOnInteraction: true,}")
        SwiperSlide(v-for="(project, i) in portfolio" class="p-2 md:p-5") 
            div(class="pb-[80%] w-full bg-white/5 rounded-3xl relative overflow-hidden cursor-pointer border border-transparent hover:border-white" :style="`background: url(${project.image}) rgba(255,255,255,0.05) no-repeat center center; background-size: cover;`")
                .overlay(class="flex flex-col items-center justify-center p-5 bg-black/60 h-full w-full opacity-0 hover:opacity-100 transition-all absolute inset-0")
                    h2(class=" text-white text-lg md:text-2xl font-bold text-center") {{ project.name }}
                    p(class=" text-secondary mt-5 md:mt-10 text-sm md:text-lg text-center") {{ project.client }}
                    a(href="#!" class="text-secondary mt-3 md:mt-5 text-sm md:text-md underline underline-offset-8") Learn More #[i.material-icons chevron_right]

.text-center
    a(href="#!" class="rounded-full mb-20 text-lg md:text-xl mt-20 font-bold p-3 px-8 md:p-5 md:px-10 inline-block bg-secondary transition-all hover:opacity-70 active:scale-90") Dive into my Portfolio

</template>

<style lang="scss">
// h1 {
//     color: red;
// }
</style>

<script setup>

const toolbox = [
    {
        name: 'HTML5',
        icon: '/tech-icons/html5.png'
    },
    {
        name: 'CSS3',
        icon: '/tech-icons/css3.png'
    },
    {
        name: 'JAVASCRIPT',
        icon: '/tech-icons/javascript.png'
    },
    {
        name: 'VUE JS',
        icon: '/tech-icons/vuejs.png'
    },
    {
        name: 'MYSQL',
        icon: '/tech-icons/mysql.png'
    },
    {
        name: 'FIREBASE',
        icon: '/tech-icons/firebase.png'
    },
    {
        name: 'WORDPRESS',
        icon: '/tech-icons/wordpress.png'
    },
    {
        name: 'PHP',
        icon: '/tech-icons/php.png'
    },
    {
        name: 'LARAVEL',
        icon: '/tech-icons/laravel.png'
    },
    {
        name: 'GODEIGNITER',
        icon: '/tech-icons/codeigniter.png'
    },
    {
        name: 'PYTHON',
        icon: '/tech-icons/python.png'
    },
    {
        name: 'JAVA',
        icon: '/tech-icons/java.png'
    },
    {
        name: 'IONIC',
        icon: '/tech-icons/ionic.png'
    },
    {
        name: 'C++',
        icon: '/tech-icons/cplusplus.png'
    },
    {
        name: 'C#',
        icon: '/tech-icons/csharp.png'
    },
    {
        name: 'VUETIFY',
        icon: '/tech-icons/vuetify.png'
    },
    {
        name: 'GITHUB',
        icon: '/tech-icons/github.png'
    },
    {
        name: 'VS CODE',
        icon: '/tech-icons/vscode.png'
    },

]

const slidesPerView = ref(3.3)



onMounted( () => {
    window.addEventListener ("resize", resizeCarousel, true);

    resizeCarousel();
} )

onBeforeUnmount( () => {
    window.removeEventListener ("resize", resizeCarousel, true);
} )

function resizeCarousel() {
    if (window.outerWidth < 1024) {
        slidesPerView.value = 1.1
    }
    else {
        slidesPerView.value = 3.1
    }
}

const minimizeToolbox = ref(true);

const portfolio = ref([
    {
        name: 'Wordpress Design and Theme',
        image: 'https://mockuptree.com/wp-content/uploads/edd/2018/12/clean-website-showcase-mockup.jpg',
        client: 'Open for public use',
    },
    {
        name: 'Product Website and Landing Page',
        image: 'https://zippypixels.com/wp-content/uploads/2015/11/perspective-website-mockup-for-ipad-4-slides.jpg',
        client: 'Umbrellugha, Nigeria',
    },
    {
        name: 'Business Tractor Landing Page',
        image: 'https://i.pinimg.com/736x/4f/5f/d5/4f5fd5e0d92d6252bcba1d32e3d76417.jpg',
        client: 'PTAF Construction Services',
    },
    {
        name: 'Agency Web Landing Page',
        image: 'https://img.freepik.com/premium-psd/realistic-macbook-pro-laptop-16-inch-screen-mockup-template_384205-870.jpg',
        client: 'Creative Digital Web Studio',
    },
    {
        name: 'FinTech Mobile App',
        image: 'https://i.pinimg.com/736x/6d/13/9a/6d139ad8f7dbc857fad4675463c8349c.jpg',
        client: 'Fintech Inc',
    },
    {
        name: 'E-commerce Website',
        image: 'https://graphberry-imgs.imgix.net/perspective-website-psd-mock-up-144.jpg?auto=compress,format&q=80&w=800',
        client: 'Shopify Boutique',
    },
    {
        name: 'Healthcare Website',
        image: 'https://downloadpsd.cc/wp-content/uploads/2017/11/Hospital-Website-Template-Free-PSD.jpg',
        client: 'Healthcare Services',
    },
    {
        name: 'Real Estate Website',
        image: 'https://downloadpsd.cc/wp-content/uploads/2018/03/Real-Estate-Website-Template-PSD.jpg',
        client: 'Real Estate Inc',
    },
    {
        name: 'Social Media Marketing',
        image: 'https://images01.nicepagecdn.com/page/29/94/website-design-preview-299441.jpg',
        client: 'Social Media Marketing Inc',
    },
    {
        name: 'Gaming Website',
        image: 'https://s3-alpha.figma.com/hub/file/3582967235/a4211149-c3e2-42a9-b91b-3691db3507d7-cover.png',
        client: 'Gaming Inc',
    },
    {
        name: 'Music Website',
        image: 'https://freepsd.cc/wp-content/uploads/Music-Player-App-Website-Template-Free-PSD.jpg',
        client: 'Music Inc',
    },
])

const visibleToolbox = computed(() => {
    if (minimizeToolbox) return toolbox.slice(0, 10)
    return toolbox;
})

</script>