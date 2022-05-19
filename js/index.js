let img = document.getElementById('img-banner');

indice = 1;

function myFuncion(direcao) {
    if(direcao == 'posterior'){

        if(indice == 1){

            img.src = "img/img2.jpeg";
            indice = 2;
        }
        else if(indice == 2){
            img.src = "img/imimg/PicsArt_2.jpg";
            indice = 1;

        }


}



function trocarimg(){
    
}
