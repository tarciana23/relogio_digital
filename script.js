function updateClock (){
    const horasElement = document.querySelector(".horas");
    const minutosElement = document.querySelector(".minutos"); 
    const segundosElement = document.querySelector(".segundos"); 

// Classe para obter a data 

    const now = new Date();

    const horas = now.getHours().toString().padStart(2,"0");//pega a hora  -> transforma para string->padstar para sempre fica dois dígitos
    const minutos = now.getMinutes().toString().padStart(2,"0");
    const segundos = now.getSeconds().toString().padStart(2,"0");

    horasElement.textContent = horas;
    minutosElement.textContent = minutos;
    segundosElement.textContent = segundos;

}

setInterval(updateClock,1000)//vai chamar a função a cada 1 segundo