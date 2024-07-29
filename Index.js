const inpt=document.querySelector(".input");
const btn=document.querySelector(".btn");
const notesJar=document.querySelector(".list");

btn.addEventListener("click",function(e){
    let noteItem=inpt.value;
    if(noteItem){
        let li=document.createElement("li");
        li.textContent=noteItem;
        notesJar.appendChild(li);
        inpt.value="";
    }

});