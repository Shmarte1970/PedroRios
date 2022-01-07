const app = document.getElementById ('type');

const type = new Typewriter(app, {
    loop:true,
    delay:75 /* Velocidad de las letras*/
});

type
    .typeString('La Capital de la modernidad')
    .pauseFor(200) /*Pausa antes de empezar de 200 ms */
    .start();    
