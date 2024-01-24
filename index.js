
let company_logo_open = document.querySelector(".company_logo_open");
let company_logo_close = document.querySelector(".company_logo_close");
let navBar_main_div = document.querySelector(".navBar_main_div");
let company_logo_mobile_nav = document.querySelector(".company_logo_mobile_nav");

company_logo_open.addEventListener("click",function(){
    navBar_main_div.style.marginLeft = "0rem";
    company_logo_close.style.display = "block";
    company_logo_open.style.display = "none";
    company_logo_mobile_nav.style.backgroundColor = "rgb(177, 177, 177)";

})
company_logo_close.addEventListener("click",function(){
    navBar_main_div.style.marginLeft = "-31rem";
    company_logo_close.style.display = "none";
    company_logo_open.style.display = "block";
    company_logo_mobile_nav.style.backgroundColor = "#F3FAFF";

})

let p_text_click_to_more = document.querySelector(".p_text_click_to_more");
let p_text_Show_more = document.querySelector(".p_text_Show_more");


p_text_click_to_more.addEventListener("click",function(){
    p_text_Show_more.style.display = "block";
    p_text_click_to_more.style.display = "none";
})

/// porogress bar on mouse over 

let section2_main_div = document.querySelector(".section2_main_div");
let ui_progressbar = document.querySelector(".ui_progressbar");
let ux_progressbar = document.querySelector(".ux_progressbar");
let Devlopment_progressbar = document.querySelector(".Devlopment_progressbar");

section2_main_div.addEventListener("mouseover",function(){
    ui_progressbar.style.width = "80%";
    ux_progressbar.style.width = "65%";
    Devlopment_progressbar.style.width = "80%";
})
section2_main_div.addEventListener("click",function(){
    ui_progressbar.style.width = "80%";
    ux_progressbar.style.width = "65%";
    Devlopment_progressbar.style.width = "80%";
})


//// section 8 sart here 


let sec8_WorkExperience_body_div_main = document.querySelector(".sec8_WorkExperience_body_div_main");

let sec8_part_ptext_1 = document.querySelector("#sec8_part_ptext_1");
let sec8_part_Design_1 = document.querySelector(".sec8_part_Design_1");

let sec8_part_ptext_2 = document.querySelector(".sec8_part_ptext_2");
let sec8_part_Design_2 = document.querySelector("#sec8_part_Design_2");

let sec8_part_ptext_3 = document.querySelector("#sec8_part_ptext_3");
let sec8_part_Design_3 = document.querySelector(".sec8_part_Design_3");


let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");


circle1.addEventListener("click",function(){
    circle1.style.backgroundColor = "#05AD88";
    circle2.style.backgroundColor = "#F3FAFF";
    circle3.style.backgroundColor = "#F3FAFF";
    sec8_part_ptext_1.style.backgroundColor = "#00A78E";
    sec8_part_ptext_2.style.backgroundColor = "#F3FAFF";
    sec8_part_ptext_3.style.backgroundColor = "#F3FAFF";

    
})

circle2.addEventListener("click",function(){
    circle1.style.backgroundColor = "#F3FAFF";
    circle2.style.backgroundColor = "#05AD88";
    circle3.style.backgroundColor = "#F3FAFF";
    sec8_part_ptext_1.style.backgroundColor = "#F3FAFF";
    sec8_part_ptext_2.style.backgroundColor = "#00A78E";
    sec8_part_ptext_3.style.backgroundColor = "#F3FAFF";

    

})

circle3.addEventListener("click",function(){
    circle1.style.backgroundColor = "#F3FAFF";
    circle2.style.backgroundColor = "#F3FAFF";
    circle3.style.backgroundColor = "#05AD88";

    sec8_part_ptext_1.style.backgroundColor = "#F3FAFF";
    sec8_part_ptext_2.style.backgroundColor = "#F3FAFF";
    sec8_part_ptext_3.style.backgroundColor = "#00A78E";

})



let circle1_mobile = document.querySelector("#circle1");
let circle2_mobile = document.querySelector("#circle2");
let circle3_mobile = document.querySelector("#circle3");

let workName_h2 = document.querySelector(".workName_h2");
let WorkName_p1 = document.querySelector(".WorkName_p1");
let WorkName_p2 = document.querySelector(".WorkName_p2");

let Work_details_text = document.querySelector(".Work_details_text");



circle1_mobile.addEventListener("click",function(){
    circle3_mobile.style.backgroundColor = "#F3FAFF";
    circle2_mobile.style.backgroundColor = "#F3FAFF";
    circle1_mobile.style.backgroundColor = "#00A78E"
    workName_h2.innerHTML = "Graphic Designer";
    WorkName_p1.innerHTML = "Team Orio Designer Team";
    WorkName_p2.innerHTML = "March 2021 - August - 2022";
    Work_details_text.innerHTML = "111111111 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet.";
})
circle2_mobile.addEventListener("click",function(){
    circle3_mobile.style.backgroundColor = "#F3FAFF";
    circle2_mobile.style.backgroundColor = "#00A78E";
    circle1_mobile.style.backgroundColor = "#F3FAFF"
    workName_h2.innerHTML = "UI/UX Designer";
    WorkName_p1.innerHTML = "Deveeexper Designer Team";
    WorkName_p2.innerHTML = "March 2020 - September - 2021";
    Work_details_text.innerHTML = "222222222 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet.";
})
circle3_mobile.addEventListener("click",function(){
    circle3_mobile.style.backgroundColor = "#00A78E";
    circle2_mobile.style.backgroundColor = "#F3FAFF";
    circle1_mobile.style.backgroundColor = "#F3FAFF"
    workName_h2.innerHTML = "Web Developer";
    WorkName_p1.innerHTML = "DM Elegent Team";
    WorkName_p2.innerHTML = "March 2020 - october - 2022";
    Work_details_text.innerHTML = "33333333 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, officiis soluta a necessitatibus nam accusamus ex, provident placeat praesentium, cupiditate libero numquam vitae dolores blanditiis tenetur rerum mollitia deleniti amet.";
})



////  sec10 start 
let sec10_Circle_div_1 = document.querySelector(".sec10_Circle_div_1");
let sec10_Circle_div_2 = document.querySelector(".sec10_Circle_div_2");
let sec10_Circle_div_3 = document.querySelector(".sec10_Circle_div_3");

let Circle_div_main_2 = document.querySelector(".Circle_div_main_2");
let Circle_div = document.querySelector(".Circle_div");

sec10_Circle_div_1.addEventListener("click",function(){
    Circle_div_main_2.style.width = "25%";
    
})
sec10_Circle_div_2.addEventListener("click",function(){
    Circle_div_main_2.style.width = "50%";
})
sec10_Circle_div_3.addEventListener("click",function(){
    Circle_div_main_2.style.width = "100%";
})





























