function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length); 
    return arr[randomIndex];  
}



const Elecciones = ['Piedra', 'Papel', 'Tijeras']; 
const EleccionesToB=['Piedra', 'Papel', 'Tijeras','Lagarto','Spock']


class Juego{
    constructor(Piedra,Papel,Tijeras){
        this.Papel=Papel
        this.Piedra=Piedra
        this.Tijeras=Tijeras
    }

    
    ComprobarPapel(random){
        if(this.Papel==random){
            alert("empate")
        }
        else if(this.Papel=="Papel" && random=="Piedra"){
            alert("Ganas")
        }
        else{
            alert("Pierdes")
        }
    }

    ComprobarPiedra(random){
        if(this.Piedra==random){
            alert("empate")
        }
        else if(this.Piedra=="Piedra" && random=="Tijeras"){
            alert("Ganas")
        }
        else{
            alert("Pierdes")
        }
    }

    
    ComprobarTijeras(random){

        
        if(this.Tijeras==random){
            alert("empate")
        }
        else if(this.Tijeras=="Tijeras" && random=="Papel"){
            alert("Ganas")
        }
        else{
            alert("Pierdes")
        }
    }

}


class Juego2 extends Juego{
    constructor(Piedra,Papel,Tijeras,spock,Lagarto){
        super(Piedra,Papel,Tijeras)
        this.spock=spock
        this.Lagarto=Lagarto
    }
    ComprobarPapel(random){
        if(this.Papel==random){
            alert("empate")
        }
        else if(this.Papel=="Papel" && random=="Piedra" || this.Papel=="Papel" && random=="Spock" ){
            alert("Ganas")
        }
        else{
            alert("Pierdes")    
        }
    }
    ComprobarPiedra(random){
        if(this.Piedra==random){
            alert("empate")
        }
        else if(this.Piedra=="Piedra" && random=="Tijeras" || this.Piedra=="Piedra" && random=="Lagarto"){
            alert("Ganas")
        }
        else{
            alert("Pierdes")
        }
    }

    ComprobarTijeras(random){
        if(this.Tijeras==random){
            alert("empate")
        }
        else if(this.Tijeras=="Tijeras" && random=="Papel" || this.Tijeras=="Tijeras" && random=="Lagarto"){
            alert("Ganas")
        }
        else{
            alert("Pierdes")
        }

    }
    ComprobarSpock(random){
        if(this.spock==random){
            alert("empate")
        }
        else if((this.spock=="Spock" && random=="Tijeras") || (this.spock=="Spock" && random=="Piedra")){
            alert("Ganas")
        }
        else{
            alert("Pierdes")
        }
    }

    ComprobarLagarto(random){
        if(this.Lagarto==random){
            alert("empate")
        }
        else if(this.Lagarto=="Lagarto" && random=="Papel " || this.Lagarto=="Lagarto" && random=="Spock"){
            alert("Ganas")
        }
        else{
            alert("Pierdes")
        }
    }
}










const JuegoClasico=new Juego("Piedra","Papel","Tijeras")

const JuegoToB= new Juego2("Piedra","Papel","Tijeras","Spock","Lagarto")


const Papel=document.getElementById("Papel");
const Piedra=document.getElementById("Piedra");
const Tijera=document.getElementById("Tijera");

//------------------------------------------------
const Lagarto=document.getElementById("Largarto");
const Spock=document.getElementById("Spock");
const PapelToB=document.getElementById("Papel2");
const PiedraToB=document.getElementById("Piedra2");
const TijeraToB=document.getElementById("Tijera2");


Piedra.addEventListener("click",()=>{

    let random=getRandomElement(Elecciones);
    JuegoClasico.ComprobarPiedra(random);
    const DivPadre = document.getElementById("ContenedorRamdomClasico");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
    }
    else{
        imagen.src ="Tijeras.png"; 
    }
})









Tijera.addEventListener("click",()=>{
    let random=getRandomElement(Elecciones)
    JuegoClasico.ComprobarTijeras(random);
    const DivPadre = document.getElementById("ContenedorRamdomClasico");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    
    

    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
    }
    else{
        imagen.src ="Tijeras.png"; 
    }
    
})


Papel.addEventListener("click",()=>{
    let random=getRandomElement(Elecciones)
    JuegoClasico.ComprobarPapel(random);
    const DivPadre = document.getElementById("ContenedorRamdomClasico");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
    }
    else{
        imagen.src ="Tijeras.png"; 
    }
});






//------------------------------------------------------Juego Dos-----------------------------------------------------------------------
PiedraToB.addEventListener("click",()=>{

    let random=getRandomElement(EleccionesToB);
    JuegoToB.ComprobarPiedra(random);
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
    }
    else{
        imagen.src ="Lagarto.png";
    }
})

PapelToB.addEventListener("click",()=>{
    let random=getRandomElement(EleccionesToB);
    JuegoToB.ComprobarPapel(random);
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
    }
    else{
        imagen.src ="Lagarto.png";
    }
})

TijeraToB.addEventListener("click",()=>{
    let random=getRandomElement(EleccionesToB);
    JuegoToB.ComprobarTijeras(random);
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
    }
    else{
        imagen.src ="Lagarto.png";
    }
})

Lagarto.addEventListener("click",()=>{
    let random=getRandomElement(EleccionesToB);
    JuegoToB.ComprobarLagarto(random);
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
    }
    else{
        imagen.src ="Lagarto.png";
    }
})

Spock.addEventListener("click",()=>{
    let random=getRandomElement(EleccionesToB);
    JuegoToB.ComprobarSpock(random);
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
    }
    else{
        imagen.src ="Lagarto.png";
    }
})




