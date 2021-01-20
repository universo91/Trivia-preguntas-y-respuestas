import UI from "./UI.js";

let arrayResponsesSent = [];
let arrayAnswersC = [];
let cont = 0;

export default class Answers {
        
    static getSelectedAnswers() {
        //let lista = document.getElementById("form-questions-container");
        let radios = document.getElementsByClassName("radios");  
        arrayAnswersC = [];       
        for( let i = 0 ; i < radios.length ; i++){
            if( radios[i].checked ){   
                cont++;             
                arrayAnswersC.push( radios[i].value );
            }
        }        
        const correctAnswers = UI.getArrayAnswersCorrect();
        const totalPreguntas = UI.getArrayTotalAnswers();
        let msj = "";
        let scoree = 0;  
        msj += "<h4> Preguntas fallidas</h4>";
        for( let i = 0 ; i < correctAnswers.length ; i++ ){
            if( arrayAnswersC[i] == correctAnswers[i] ){
                scoree++;
            }
            else{
                msj += `<ul> 
                            <p> ${totalPreguntas[i]}</p>
                            <li> <span>Rpta correcta :</span> <small>${ correctAnswers[i]  }</small> </li>
                        </ul> `;                             
                }
        }
        console.log( arrayAnswersC ); 
        msj = `<h2> SU PUNTAJE ES: ${scoree} </h2> ${msj}`; 
        const containerResponse = document.getElementById("body-response"); 
        containerResponse.innerHTML = ""; 
        containerResponse.innerHTML = msj; 

     
        
                
    }

    static getContador() {
        return cont;
    }
}