function DeckList1CardViewOn(element,String){
    element.setAttribute("style","color: var(--red)");
    document.getElementById("card-image-1").setAttribute("src",String);
}

function DeckList1CardViewOff(element){
    element.setAttribute("style","color: black");
    document.getElementById("card-image-1").setAttribute("src"," ");
}