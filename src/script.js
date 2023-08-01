const renderHtml = () => {
    const appEl = document.getElementById("app");
    appEl.innerHTML = `<div class = "content">
                <div class = "content__title-box">
                <h1 class = "content__title"> Выбери сложность</h1>
            </div>
                <div class = "game-difficulty" id = "game-form" >
                <form class = "radio-toolbar"  id = "form">           
                 <div class = "input-form">
                   <input type="radio" id="radio1" name="radios" value="1">
                    <label class = "radio__label" for="radio1">1</label>
                    <input type="radio" id="radio2" name="radios" value="2">
                    <label  class = "radio__label" for="radio2">2</label>
                    <input type="radio" id="radio3" name="radios" value="3">
                    <label class = "radio__label" for="radio3">3</label>
             </div>
                <div class = "button__box"> 
                 <button class = "start-button">Старт</button></div>
               </form> 
            </div>
    `;
    const formEl = document.getElementById("form");
    console.log(formEl[0]);
    console.log(formEl[1]);
    console.log(formEl[2]);
    formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        if (formEl[0].checked) {
            appEl.innerHTML = `1 уровень сложности`;
            console.log(1);
        }
        if (formEl[1].checked) {
            appEl.innerHTML = `2 уровень сложности`;
            console.log(2);
        }
        if (formEl[2].checked) {
            appEl.innerHTML = `3 уровень сложности`;
            console.log(3);
        }
    });
};
renderHtml();

const add = (a, b) => {

    if (a == b){

    }
    return a + b + ""
}