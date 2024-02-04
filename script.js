var settingsmenu = document.querySelector(".settings_menu");
var darkbtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings_menu-height");
}
darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark_theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");

    }


}



if(localStorage.getItem("theme") == "light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark_theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark_theme");
}
else{
    localStorage.setItem("theme","light");
}
// agar hum dark theme pr hai oor refresh kr rhe hein to vo normal ho jata to hai to ise overcome krne
// k liye hum local storage ka use krege taki agar users ne dark mode on kr diya baat khtam jb tk off nhi krega
//  tb tk off nhi hoga ((((concept:Local Storage)))).
localStorage.setItem("theme","dark");
// we are creating the local storage with the name of theme and the value is light
localStorage.getItem("theme");
