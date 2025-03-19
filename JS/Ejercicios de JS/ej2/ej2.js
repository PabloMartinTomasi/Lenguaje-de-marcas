function Media(){
    let nombre = prompt("Como te llamas: ")
    console.log("Bienvenido " + nombre);

    let n1 = parseInt(prompt("Pon tu primera nota: "));
    let n2 = parseInt(prompt("Pon tu primera nota: "));
    let n3 = parseInt(prompt("Pon tu primera nota: "));

    let media = (n1 + n2 + n3) / 3;
    console.log("Tu media es " + media);
    
    if (media < 5){
        console.log("Y has suspenso");
    } else if (media < 7){
        console.log("Y has aprobado");
    } else{
        console.log("Y teiens un notable");
    }
}
Media();