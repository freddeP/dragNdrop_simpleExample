// element som skall flyttas
var element = "";

// Evnentlisteners
var dragClass = Array.from(document.getElementsByClassName('box'));
var dropClass = Array.from(document.getElementsByClassName('dropSurface'));

dragClass.map( (el)=>{  
    el.addEventListener("dragstart",dragStart);
    el.addEventListener("dragend",dragEnd);
});

dropClass.map((el)=>{
    el.addEventListener("dragover", dragOver);
    el.addEventListener("dragenter", dragEnter);
    el.addEventListener("dragleave", dragLeave);
    el.addEventListener("drop", drop);
});



// Funktioner för dragNdrop

function dragStart(){
    element = this;
    setTimeout( ()=>{ this.className  += " empty";   },0);
    
    console.log("drag started" + this.innerHTML);
}
function dragEnd(){
  
    console.log("drag Ended");
}

// drop-functions

function dragOver(ev){

    ev.preventDefault();
    console.log("drag over");

}
function dragEnter(){

    console.log("drag Enter");
}
function dragLeave(){

    console.log("drag Leave");

}
function drop(){

    console.log("drop");
    this.append(element);
    element.className = "box";

}