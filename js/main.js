import Request from "./Request.js"
import UI from "./UI.js"
import Answers from "./Answers.js"

const formFilter = document.getElementById("form-questions-filter");
const formAnswers = document.getElementById("form-questions-container");
const form = document.getElementById("form");

formFilter.addEventListener("submit",(event) => {
    event.preventDefault();
    // alert("detenemos el envio");
    Request.getQuestions()
        .then(response => response.json())
        .then(data => {
            UI.printQuestions(data.results);
            //Answers.corectAnswers(data.results);
            // Answers.answersArray(data.results);
        })
});

Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories));

form.addEventListener("submit",(event) => {
    event.preventDefault();
    // alert("detenemos el envio de las respuestas...");    
    /*const totalCheckedRadio = Answers.getContador();
    if( totalCheckedRadio != UI.getArrayAnswersCorrect().length ){
        $('#exampleModal').modal('hide');
    }
    else {*/
        Answers.getSelectedAnswers();
        $('#exampleModal').modal('show')
    //}
});

