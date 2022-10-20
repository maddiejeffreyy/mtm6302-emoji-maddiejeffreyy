

// title = 'Emojis'

// const items = [];

// for (const emoji of emojis){
//     items.push(`<li>${emoji}</li>`)
// }

// const list = `
// <h1>${title}</h1>
// <ul class ="flex">
//     ${items.join('')}
// </ul>`

// const $container = document.getElementById('container')
// $container.innerHTML = list;


const $container = document.getElementById('container')

const emojis = []

for (let i = 0; i < 60; i++){
    emojis.push(`
    <div id="emojis" class="emojis" style="text-align: center;">
        <div class="display">
            <span class="emoji";">&#${i + 127780};</span><br>
            <code class="code">${i + 127780}</code>
        </div>
    </div>
    `)
}

$container.innerHTML = emojis.join('');


  