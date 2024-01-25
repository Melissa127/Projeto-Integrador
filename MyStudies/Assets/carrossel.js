let slides = ["../Img/1.png", "../Img/2.png", "../Img/3.png","../Img/4.png","../Img/6.png"]

let intervalo = 3000

let indice = 0

show()

function show(){

document.getElementById("slide").className += "FadeOut"   

setTimeout(function(){
   
    document.getElementById("slide").src = (`./${slides[indice]}`)
    document.getElementById("slides").className = " "


},1000)
indice ++
if(indice === slides.length){
    indice = 0

}
setTimeout(show, intervalo)
}