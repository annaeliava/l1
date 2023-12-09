let tasksDetails = `[
    {
        "task": 1,
        "link": "./task1/palindrome.html"
    },
    {
        "task": 2,
        "link": "./task2/weird-num.html"
    },
    {
        "task": 3,
        "link": "./task3/MathX.html"
    },
    {
        "task": 4,
        "link": "./task4/endings.html"
    },
    {
        "task": 5,
        "link": "./task5/linkedList.html"
    },
    {
        "task": 6,
        "link": "./task6/sorting-objects.html"
    },
    {
        "task": 7,
        "link": "./task7/callAllFunctions.html"
    },
    {
        "task": 8,
        "link": "./task8/closures.html"
    },
    {
        "task": 9,
        "link": "./task9/json-stringify.html"
    },
    {
        "task": 10,
        "link": "./task10/json-parse.html"
    },
    {
        "task": 11,
        "link": "./task11/scope-closure.html"
    },
    {
        "task": 12,
        "link": "./task12/book-info.html"
    },
    {
        "task": 13,
        "link": "./task13/class-shape.html"
    },
    {
        "task": 14,
        "link": "./task14/promise.html"
    },
    {
        "task": 15,
        "link": "./task15/async-function.html"
    },
    {
        "task": 16,
        "link": "./task16/module.html"
    },
    {
        "task": 17,
        "link": "./task17/geo.html"
    },
    {
        "task": 18,
        "link": "./task18/localStorage.html"
    },
    {
        "task": 19,
        "link": "./task19/apiVK.html"
    },
    {
        "task": 20,
        "link": "./task20/apiSize.html"
    },
    {
        "task": 21,
        "link": "./task21/callstack.html"
    },
    {
        "task": 22,
        "link": "./task22/write.html"
    },
    {
        "task": 23,
        "link": "./task23/analysePassword.html"
    },
    {
        "task": 24,
        "link": "./task24/table.html"
    },
    {
        "task": 25,
        "link": "./task25/new-element.html"
    },
    {
        "task": 26,
        "link": "./task26/tree.html"
    },
    {
        "task": 27,
        "link": "./task27/animation.html"
    },
    {
        "task": 28,
        "link": "./task28/template.html"
    },
    {
        "task": 29,
        "link": "./task29/forms.html"
    }
]`;

document.addEventListener('DOMContentLoaded', function(e){
    showTaks(tasksDetails);
});


function showTaks(json){
    let details = JSON.parse(json);
    let content = '';
    for(let detail of details) {
        content += `<a class="tasks__link" href="${detail.link}">Задача ${detail.task}</a>`
    } 
    document.getElementById('tasks').innerHTML = content;
}