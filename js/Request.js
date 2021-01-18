export default class Request  {
    static getCategories(){
        return fetch("https://opentdb.com/api_category.php")
    }
    static getQuestions(){
        const url = this.getFilters();
        return fetch(url)
    }
    static getFilters(){
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
        return url
    }
}