//===================================================================
//======================== OBTENER PREGUNTAS ========================
//===================================================================
function getQuestions() {
    
    const totalQuestions = document.getElementById("totalQuestions").value;
    const category = document.getElementById("select-category").value;
    const difficulty = document.getElementById("select-difficulty").value;
    const type = document.getElementById("select-question-type").value;
    
    let url = `https://opentdb.com/api.php?amount=${totalQuestions}`;

    // si category==="8" quiere decir que no se escogió una categoría, las preguntas vienen variadas
    if(category !="8"){
        url += `&category=${category}`;
    }
    if(difficulty != "any"){
        url += `&difficulty=${difficulty}`;
    }
    if(type != "any"){
        url += `&type=${type}`;
    }    
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            printData(data.results);
            answerCorrert(data.results);
        })
    
}

function printData(data) {
    //obtner los datos
    const containerData = document.getElementById("questions-container");
    const containerBtn = document.getElementById("btn-send-answers");
    //generar los datos
    let html = "";
    let i = 1;
    data.forEach(element => {
        let answerBody = "RESPUESTA CORRECT";
        if (element.type === "multiple") {
            answerBody = `<div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="flexRadioDefault${i}0" value="${element.correct_answer}">
                                <label class="form-check-label" for="flexRadioDefault${i}">
                                ${element.correct_answer}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="flexRadioDefault${i}1" value="${element.incorrect_answers[0]}">
                                <label class="form-check-label" for="flexRadioDefault${i}">
                                ${element.incorrect_answers[0]}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="flexRadioDefault${i}2" value="${element.incorrect_answers[1]}">
                                <label class="form-check-label" for="flexRadioDefault${i}">
                                ${element.incorrect_answers[1]}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="flexRadioDefault${i}3" value="${element.incorrect_answers[2]}">
                                <label class="form-check-label" for="flexRadioDefault${i}">
                                ${element.incorrect_answers[2]}
                                </label>
                            </div>`;            
        }else {
            answerBody = `<div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault${i}" id="flexRadioDefault${i}0" value="${element.correct_answer}">
                                <label class="form-check-label" for="flexRadioDefault${i}">
                                ${element.correct_answer}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault${i}1" id="flexRadioDefault${i}1" value="${element.incorrect_answers[0]}">
                                <label class="form-check-label" for="flexRadioDefault${i}">
                                ${element.incorrect_answers[0]}
                                </label>
                            </div>
                            <div class="form-check" hidden>
                                <input class="form-check-input" type="radio" name="flexRadioDefault${i}1" id="flexRadioDefault${i}2" value="FALSE">
                                <label class="form-check-label" for="flexRadioDefault${i}">
                                
                                </label>
                            </div>
                            <div class="form-check" hidden>
                                <input class="form-check-input" type="radio" name="flexRadioDefault${i}1" id="flexRadioDefault${i}3" value="FALSE">
                                <label class="form-check-label" for="flexRadioDefault${i}">
                                
                                </label>
                            </div>`
        }
        html += `<div class="col-md-4 mt-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <p>
                                ${element.question}
                            </p>
                            ${answerBody}                            
                        </div>
                    </div>
                </div>`;
        i++;
    });
    //poner los datos en HTML
    containerData.innerHTML = html;
    containerBtn.innerHTML = `<button class="btn btn-primary mt-5 col-md-4" onclick="sendReply()">Enviar respuestas</button>`;
}

//===================================================================
//======================== OBTENER CATEGORIAS =======================
//===================================================================

function getCategories() {
    // alert("preguntas seleccionadas")
    // const totalQuestions = document.getElementById("totalQuestions").value;
    const url = "https://opentdb.com/api_category.php";

    fetch(url)
        .then((response) => response.json())
        .then((data) => printCategories(data.trivia_categories))
    
}

function printCategories(data) {
    
    const categoriesConatiner = document.getElementById("select-category");
    let html = `<option value="8">Any Category</option>`;
    data.forEach((element) => {
        html += `<option value="${element.id}">${element.name}</option>`
    })
    categoriesConatiner.innerHTML = html;
}

getCategories();

function answerCorrert(data){
    // alert("Answers Correct OK");
    let arrayAnswersCorrect = [];
    data.forEach(element => arrayAnswersCorrect.push(element.correct_answer));
    console.log(arrayAnswersCorrect);
}

function sendReply() {
    // alert("envio de respuestas...");
    let lista = document.getElementById("questions-container");
    let arrayResponsesSent = [];
    for(let i = 1; i <= lista.childNodes.length; i++) {
        console.log("i: "+i);
        if (document.getElementById("flexRadioDefault"+i+"0").checked)
        {
            arrayResponsesSent.push(document.getElementById("flexRadioDefault"+i+"0").value);            
        }
        if (document.getElementById("flexRadioDefault"+i+"1").checked)
        {
            arrayResponsesSent.push(document.getElementById("flexRadioDefault"+i+"1").value);
        }
        if (document.getElementById("flexRadioDefault"+i+"2").checked)
        {
            arrayResponsesSent.push(document.getElementById("flexRadioDefault"+i+"2").value);
        }
        if (document.getElementById("flexRadioDefault"+i+"3").checked)
        {
            arrayResponsesSent.push(document.getElementById("flexRadioDefault"+i+"3").value);
        }
    }
    console.log(arrayResponsesSent);
}