// getSelector
// getElementBy

// const  btnByClass = document.getElementsByClassName('.btn')[0]
// console.log(btnByClass)
//
// const btnByID = document.getElementById('#second-btn')
// console.log(btnByID)
//
// const  btnByTag = document.getElementsByTagName('button')
// console.log(btnByTag)


// const  button = document.querySelector('.btn')
// const  buttonID = document.querySelector('.btn')
// const  buttonTag = document.querySelector('.btn')
// const  buttonGroup = document.querySelector('.btn')
// console.log(button)
// console.log(buttonID)
// console.log(buttonTag)
// console.log(buttonGroup)
//
// buttonID.addEventListener("click" , () =>{
//     console.log('salam Shirin')
//     buttonID.style.background = 'red'
// })
// events
// const input =document.querySelector(".input")
// const output =document.querySelector(".output")
// const result =document.querySelector(".result")
// const btn =document.querySelector(".calc")
// const boxes =document.querySelector(".boxes")
// const title = document.querySelector(".title")
// input.addEventListener("input",(e)=>{
//     console.log(e.target.value)
// })
// function calculate(){
//     result.value = +input.value + +output.value
//     console.log(btn.classList)
//     btn.classList.remove("de-active")
//     btn.classList.add("active")
//     title.innerText =`Сиздин жообунуз${result.value}`
// }
//
// btn.addEventListener("click",()=>{
//    calculate()
// })
// for (let i = 0; i<=100;i++){
//     const box = document.createElement("div")
//     box.classList.add("box")
//     box.addEventListener("click",()=>{
//         box.style.color ="yellow"
//         box.style.display ="flex"
//         box.style.alignItems ="center"
//         box.style.justifyContent ="center"
//         box.innerText = "HELLO WORLD"
//         box.classList.add("active")
//     })
//     boxes.append(box)
// }


//click
//mousemove
//mouseover
//onchange

// <nav class="top-nav"> <a href="#" class="navlink zero" data-link="0">zero</a> <a href="#" class="navlink first" data-link="1">five</a> <a href="#" class="navlink two" data-link="2">two</a> <a href="#" class="navlink three" data-link="3">three</a> <a href="#" class="navlink four" data-link="4">one</a> </nav> <nav class="bottom-nav"> <a href="#" class="navlinkitem">Tv</a> <a href="#" class="navlinkitem">Phones</a> <a href="#" class="navlink__item">Grocery</a> </nav> <div id="append-div"></div>
//
// Task 1
//
// Напишите функцию, которая вернет текст внутри первого тэга - a.
//
//     Task 2
//
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
//
//     Task 3
//
// Напишите функцию, которая вернет массив с текстами внутри тэгов элементов с классом navlinkitem
//
// Task 4
//
// Напишите функцию, которая вернет массив со значениями атрибута class внутри тэгов элементов с классом navlinkitem
//
// Task 5
//
// Напишите функцию, которая вернет массив со значениями атрибута data-link внутри тэгов элементов с классом nav__link .

// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно, по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса. И у этого же элемента должен быть класс с текстовым номером индекса.
//     Например
// <a class="nav__link  first" data-link="1">first</a>
// Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректно.
// <a class="nav__link  zero" data-link="0">first</a>
// Ваша задача вернуть массив атрибутов data-link у элементов, у которых сломана логика. То есть текст внутри не имеет соответствующего класса.
//     Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.
//     Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a>
// Стало
// <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>
// <a href="#" class="nav__link first" data-link="1">five</a>
// Стало
// <a href="#" class="nav__link first" data-link="1">1 first</a>
// То есть `${data-link
// Используйте forEach
// yourElementsArray.forEach((element) => {
//
// })
// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()
//
// yourElementsArray.forEach((element) => {
//
// })
// Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello
// Task 10
// Напишите функцию, которая добавляет ul элемент внутрь элемента с селектором #append-div у ul элемента должен быть айди #list Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10
// Используйте:
// document.createElement(tagName).
// element.appendChild(element2).
// и другие...


function insert(num){
        document.form.textview.value =
        document.form.textview.value + num;
}