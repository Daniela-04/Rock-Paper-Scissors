const rules = document.querySelector('#rules-btn');
const imgRules=document.querySelector('#rules-img');
const closeRules=document.querySelector('#close-rules')


rules.addEventListener('click',()=>{
    if(imgRules.style.display === "grid"){
        imgRules.style.display = "none";
        rules.style.display = "block";
    } else {
        imgRules.style.display = "grid";
        rules.style.display = "none";

    }
    
});

closeRules.addEventListener('click',()=>{
    imgRules.style.display = "none";
    rules.style.display = "block";
});

