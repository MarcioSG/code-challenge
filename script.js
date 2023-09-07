const formulario = document.getElementById('form');
formulario.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formulario); //new FormData sirve para almacenar la información provista en el formulario  info: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    const data = Object.fromEntries(formData); // el método object.fromEntries()  convierte al formulario en un objeto de JS
    fetch('https://jsonplaceholder.typicode.com/users', {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
        .then(data => console.log(data));

});




/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            const names = `<li>${user.name}</li>`;
            console.log(names)
        });
    })
*/

/*const data = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonData)
};

fetch("https://jsonplaceholder.typicode.com/users", data)
    .then(response => response.json())
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    });*/

// Ejemplo implementando el metodo POST:
/*async function postData(url = 'https://jsonplaceholder.typicode.com/users', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'

        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://jsonplaceholder.typicode.com/users', { answer: 42 })
    .then(data => {
        console.log(data);
    });*/







/*fetch(" https://jsonplaceholder.typicode.com/users.", {

    method: "POST",
    body: JSON.stringify({
        title: "",
        body: "bar",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
// Converting to JSON
    .then(response => response.json())
    // Displaying results to console
    .then(json => console.log(json));*/