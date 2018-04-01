"use strict";

const form = document.getElementsByTagName("form")[0];
const inputText = document.querySelector("#input-text");
const inputSubmit = document.querySelector("#input-submit");

const test = document.getElementById('test');

function requestWiki (search) {
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${search}&format=json&origin=*`)
    .then((res) => {
        if ( res.ok ){
            return res.json();
        }
        throw new Error( 'Error: ' + response.statusText );
    })
    .then((data) => {
        displayData(data);
    })
}

function displayData(data) {
    test.innerHTML = '';
    for(let i = 0; i < data[1].length; i++) {
        test.innerHTML += `<li>
            <a href="${data[3][i]}">
            <h3>${data[1][i]}</h3>
            <p>${data[2][i]}</p>
            </a>
        </li>`
    }
}

form.addEventListener('submit', (event) => event.preventDefault());
form.addEventListener(
    "submit",
    function(){ requestWiki(inputText.value);
    inputText.value = '';
});
