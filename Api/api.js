const api = async() => {
    const list = await fetch('https://jsonplaceholder.typicode.com/posts').then(ap => ap.json());
    const ul = document.querySelector('ul');
    const id = document.querySelector('#id');
    list.forEach(el => {
        const text = document.createElement('li');
        text.innerText = el.title;
        ul.appendChild(text);
        const p = document.createElement('p');
        p.innerText = el.body;
        id.appendChild(p);
    })
    
}


api();

