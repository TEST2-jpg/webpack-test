function main() {
    const container = document.querySelector('#content');
    container.textContent = '';
    const title = document.createElement('h1');
    title.textContent = 'Pizza Restaurant';
    container.appendChild(title);
    const text = document.createElement('p');
    text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vitae aliquid. Illo, at voluptatibus aliquam repellat quae aspernatur assumenda dicta neque sequi praesentium excepturi cupiditate deleniti tempora consequatur quaerat in?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vitae aliquid. Illo, at voluptatibus aliquam repellat quae aspernatur assumenda dicta neque sequi praesentium excepturi cupiditate deleniti tempora consequatur quaerat in?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vitae aliquid. Illo, at voluptatibus aliquam repellat quae aspernatur assumenda dicta neque sequi praesentium excepturi cupiditate deleniti tempora consequatur quaerat in?'
    container.appendChild(text)
}

function menu() {
    const container = document.querySelector('#content');
    container.textContent = '';
    for(let i = 1; i <= 6; i++) {
        const pizza = document.createElement('p');
        pizza.textContent = `Pizza ${i}`;
        container.appendChild(pizza);
    }
}

function contact() {
    const container = document.querySelector('#content');
    container.textContent = '';
    const num = document.createElement('p')
    num.textContent = '029103930923'
    container.appendChild(num)
}

export {main, menu, contact}