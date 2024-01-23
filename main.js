let serviceProvide = [{
        logo: "sync_saved_locally",
        Tradition: 'Web Devlopment',
        provide: 'Web page| Hosting | Rest Api Build'


    },
    {
        logo: 'deployed_code',
        Tradition: 'App Devlopment',
        provide: 'App Services | Any Type App Creation | Rest Api Creation'
    },
    {
        logo: "search",
        Tradition: 'SEO',
        provide: 'Top Site Ranking | Enhance The Rank '
    },
    {
        logo: "captive_portal",

        Tradition: 'Data Anylisis',
        provide: 'Any Type Of  BigData | Use Special Keyword  '
    }
]

function Servicey() {
    let Service = `  `
    for (let i = 0; i < serviceProvide.length; i++) {
        Service = Service + `<div style="box-shadow: -8px -8px 10px; " class=" flex flex-col m-2  items-center text-[15px]  sm:text-[1.4vw] bg-white rounded-xl  md:w-[20%]  h-[90%]">
         <div class="m-2 flex-col flex items-center justify-center">
         <span class="material-symbols-outlined  ">
         ${serviceProvide[i].logo}
    </span>
    
    
    
            <p class="">${serviceProvide[i].Tradition}</p>
            <p class="">${serviceProvide[i].provide}</p>
            <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet nisi doloremque impedit sequi consectetur cupiditate dolorum </p>
            <button class="">View More</button>
         </div>


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
    location.href = "https://github.com/ssdevloper/Main-Project/tree/master/SIGMA%20NETFLIX"
})


textload();
setInterval(textload, 12000);