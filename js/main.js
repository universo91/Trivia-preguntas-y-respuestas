import Request from "./Request.js"
import UI from "./UI.js"
import Answers from "./Answers.js"

const formFilter = document.getElementById("form-questions-filter");
const formAnswers = document.getElementById("form-questions-container");
const btn = document.getElementById("btn-send-answers");

formFilter.addEventListener("submit",(event)=>{
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
    .then(data => UI.printCategories(data.trivia_categories))

formAnswers.addEventListener("submit",(event)=>{
    event.preventDefault();
    // alert("detenemos el envio de las respuestas...");
    Answers.getSelectedAnswers();
})

