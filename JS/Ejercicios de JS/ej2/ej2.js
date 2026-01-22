function Media(){
    let nombre = document.getElementById("nombre").value;
    console.log("Bienvenido " + nombre);

    let n1 = parseInt(document.getElementById("n1").value, 10);
    let n2 = parseInt(document.getElementById("n2").value, 10);
    let n3 = parseInt(document.getElementById("n3").value, 10);

    let media = (n1 + n2 + n3) / 3;
    console.log("Tu media es " + media.toFixed(2));
    
    if (media < 5){
        console.log("Y has suspenso");
    } else if (media < 7){
        console.log("Y has aprobado");
    } else{
        console.log("Y teiens un notable");
    }
}