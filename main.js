let serviceProvide = [{
        logo: "fa-solid fa-laptop",
        Tradition: 'Web Devlopment',
        provide: 'Web page| Hosting | Rest Api Build'


    },
    {
        logo: 'fa-brands fa-app-store-ios',
        Tradition: 'App Devlopment',
        provide: 'App Services | Any Type App Creation | Rest Api Creation'
    },
    {
        logo: "fa-brands fa-google",
        Tradition: 'SEO',
        provide: 'Top Site Ranking | Enhance The Rank '
    },
    {
        logo: "fa-solid fa-database",

        Tradition: 'Data Anylisis',
        provide: 'Any Type Of  BigData | Use Special Keyword  '
    }
]

function Servicey() {
    let Service = `  `
    for (let i = 0; i < serviceProvide.length; i++) {
        Service = Service + `<div style="box-shadow: -8px -8px 10px; " class=" text-[15px]  sm:text-[1.4vw] bg-white rounded-xl m-5  md:w-[20%] overflow-hidden h-[90%]">
        <i style="align-self: center;" class=" mt-[5%] mx-[40%]  ${serviceProvide[i].logo}  text-[200%]"></i>



        <p class="text-[10%] mt-[5%] mx-[5%]">${serviceProvide[i].Tradition}</p>
        <p class="text-[80%] mx-[5%]">${serviceProvide[i].provide}</p>
        <p class="text-[60%]  mx-[5%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet nisi doloremque impedit sequi consectetur cupiditate dolorum </p>
        <button class="bg-purple-600  text-white rounded-xl p-[7px] mx-[5%]">View More</button>


        </div>`
    }
    document.getElementById('yellow').innerHTML = Service
}
Servicey();


document.querySelector("#hambar").addEventListener("click", () => {
    document.getElementById("response").style.left = "40%"

    console.log('ok');

})

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("response").style.left = "100%"

    console.log('ok');

})

const text = document.querySelector(".second-text");
const textload = () => {
    setTimeout(() => {
        text.textContent = "Coder";
    }, 0);

    setTimeout(() => {
        text.textContent = "Content-Creator";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Devloper";
    }, 8000);

}



document.querySelector(".netflix-live").addEventListener("click", () => {
    location.href = "https://shubham2004-ux.github.io/Netflix-project"
})

document.querySelector(".git-live").addEventListener("click", () => {
    location.href = "https://github.io"
})


textload();
setInterval(textload, 12000);