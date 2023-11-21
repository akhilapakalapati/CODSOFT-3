let addNote = document.getElementById("btnadd");
let saveNote = document.getElementById("btnsave");
let textNote = document.getElementById("textmatter");
let cloudNote = document.getElementById("cloudnote");
let colorNote = document.getElementById("colornote");

let noteList = [];



function createCloud(noteItems) {
    //create
    let listItemNote = document.createElement("li");
    let divItemNote = document.createElement("div");
    //append
    cloudNote.appendChild(divItemNote);
    divItemNote.appendChild(listItemNote);
    //listItemNote
    listItemNote.textContent = noteItems["text"];
    console.log(noteItems)

}


function loop() {
    for (let noteItems of noteList) {
        createCloud(noteItems);
        console.log(noteItems)
    }
}


let count1 = 0;
let doneNote = function() {
    count1 += 1;
    let textValue = textNote.value;
    let noteList = [{
        text: textValue,
        count: count1
    }];
    //console.log(noteList)
    textNote.value = "";
    createCloud(noteList)
};

addNote.addEventListener('click', doneNote);