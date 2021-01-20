let arrayAnswersCorrect = [];
let arrayTotalAnswers = [];
export default class UI {
    static printCategories(categories) {
        const container = document.getElementById("select-category");
        container.innerHTML = `<option value="8">Any Category</option>`;
        categories.forEach(element => {
            container.innerHTML += `<option value="${element.id}">${element.name}</option>`
        });
    }
    //                    data = data.results ==> vector de objetos, cada objeto es un pregunta.
    static printQuestions(data){
        const container = document.getElementById("form-questions-container");
        // const containerBtn = document.getElementById("btn-send-answers");        

        data.forEach(element => {
            element.incorrect_answers.push(element.correct_answer);
            element.incorrect_answers.sort();
        });

        container.innerHTML="";
        let i = 1;
        let j = 1;
        arrayAnswersCorrect = [];
        arrayTotalAnswers = [];
        data.forEach((element) => {
            let answerBody = "";
            arrayTotalAnswers.push( element.question );
            arrayAnswersCorrect.push( element.correct_answer );
            element.incorrect_answers.forEach((element ) => {
                answerBody += `<div class="form-check">
                                    <input class="form-check-input radios" type="radio" name="radioAnswers${j}" id="radioAnswers${i}" value="${element}" required>
                                    <label class="form-check-label" for="radioAnswers${i}">
                                        ${element}
                                    </label>
                                </div>`;
                i++;
            });
            j++;
            container.innerHTML += `<div class="col-md-4 mt-3">
                                        <div class="card mx-1 h-100">
                                            <div class="card-body" id="answer${i}">
                                                <p>${element.question}<p>
                                                ${answerBody}
                                            </div>
                                        </div>
                                    </div>`; 
        });
        const btnResults = document.getElementById("btn-results");
        btnResults.innerHTML = `<div class="row " id="btn-send-answers">
                                    <button type="submit" class="btn btn-primary mt-5" > Enviar respuestas </button>
                                </div>`;
        // containerBtn.innerHTML = ` <!-- <input type="submit" value="Enviar respuestas" class="btn btn-primary mt-5" id="btn-send-answers">`;
    }

    static  getArrayAnswersCorrect() {
        return arrayAnswersCorrect;
    }

    static getArrayTotalAnswers() {
        return arrayTotalAnswers;
    }
}