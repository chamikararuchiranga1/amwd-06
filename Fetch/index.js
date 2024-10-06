function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            let arraData = ''
            json.forEach(element => {
                arraData += `<div class="card">
        <div class="header">
            <div class="number">
                ${element.id}
            </div>
            <h1 class="title"> ${element.title}</h1>
        </div>
        <p class="paragraph">${element.body}</p>
    </div>`
            });
            document.getElementById('displayContent').innerHTML = arraData;
        })
        .catch((err) => console.log(err))
        .finally(() => console.log("finally"))


}

function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err))
}

async function allDataAndDelete() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.co/posts/1')
        const data = await res.json();
        console.log(data.id)
        const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/'+data.id, {
            method: 'DELETE',
        });
        const data1 = await res1.json();
        console.log(data1)
    } catch (err){
        console.log(err)
    }
    
}

allDataAndDelete();