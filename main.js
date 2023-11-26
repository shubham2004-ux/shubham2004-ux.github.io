let a = true
let button = ` <div class=" bg-gradient-to-t from-orange-300 to-red-300 w-[100%] h-[250px] ">
<ul style="display: flex; flex-direction: column ; row-gap: 10px; align-items: center;" class="text-white font-bold   text-[25px]">
    <li>Home</li>
    <li>Qote</li>
    <li>Service</li>
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