const main2 = document.querySelector(".main2");
let all_bg=document.querySelector(".all_bg");
const main2_img = document.querySelector(".main2_img")

window.addEventListener("scroll",function(event){
    all_bg=document.querySelector(".all_bg");
    if(window.getComputedStyle(all_bg).visibility === 'visible'){
        main2_img.setAttribute("class", "main2_img on_scroll")
    } else{ console.log('hidden')
        main2_img.setAttribute("class", "main2_img")
    } 
});




