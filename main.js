let a = true
let button = ` <div class=" bg-gradient-to-t from-yellow-300 to-blue-500 h-[250px] ">
<ul style="display: flex; flex-direction: column ; row-gap: 10px; align-items: center;" class="text-white font-bold font-serif   text-[25px]">
    <li>Home</li>
    <li>Menu</li>
    <li>Project</li>
    <li>About</li>
</ul>

</div>`
let j = document.getElementById('hambar')

function ok() {
    if (a == true) {
        j.hidden = true
        console.log('the button')
        a = false
    } else {
        j.hidden = false;
        j.innerHTML = button;
        a = true


    }

}

ok()




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
        provide: 'Top Site Ranking | Enhance The Rank | Use Special Keyword'
    },
    {
        logo: "fa-solid fa-database",

        Tradition: 'Data Anylisis',
        provide: 'Any Type Of  BigData  '
    }
]

function Servicey() {
    let Service = `  `
    for (let i = 0; i < serviceProvide.length; i++) {
        Service = Service + `<div style="box-shadow: -8px -8px 10px; " class="text-xl bg-white rounded-xl m-5  md:w-[20%] overflow-hidden h-[90%]">
        <i style="align-self: center;" class=" mt-[5%] mx-[40%]  ${serviceProvide[i].logo}  text-[200%]"></i>



        <p class="text-[150%] mt-[25%] mx-[5%]">${serviceProvide[i].Tradition}</p>
        <p class="text-[80%] mx-[5%]">${serviceProvide[i].provide}</p>
        <p class="text-[60%]  mx-[5%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet nisi doloremque impedit sequi consectetur cupiditate dolorum </p>
        <button class="bg-purple-600  text-white rounded-xl p-[7px] mx-[5%]">View More</button>


        </div>`
    }
    document.getElementById('yellow').innerHTML = Service
}
Servicey();