{/* 
<span style="font-size: 5rem;">&#9925;</span>
<span style="font-size: 5rem;">&#9934;</span>
<span style="font-size: 5rem;">&#9935;</span>
<span style="font-size: 5rem;">&#9937;</span>
<span style="font-size: 5rem;">&#9939;</span>
<span style="font-size: 5rem;">&#9940;</span>
<span style="font-size: 5rem;">&#9961;</span>
<span style="font-size: 5rem;">&#9962;</span>
<span style="font-size: 5rem;">&#9968;</span>
<span style="font-size: 5rem;">&#9969;</span> */}

const emojis = ['&#8986;', '&#8987;', '&#9193', '&#9194', '&#9195', '&#9196', '&#9197', '&#9198', '&#9199', '&#9200',
'&#9201;', '&#9202;', '&#9203;', '&#9208;', '&#9209;', '&#9210;', '&#9410;', '&#9748;', '&#9749;', '&#9757;', 
'&#9801;', '&#9802;', '&#9803;', '&#9804;', '&#9805;', '&#9806;', '&#9807;', '&#9808;', '&#9809;', '&#9810;',
'&#9811;', '&#9823;', '&#9855;', '&#9875;', '&#9889;', '&#9898;', '&#9899;', '&#9917;', '&#9918;', '&#9924;',
'&#9925;', '&#9934;', '&#9935;', '&#9937;', '&#9939;', '&#9940;', '&#9961;', '&#9962;', '&#9968;', '&#9969;']
title = 'Emojis'

const items = [];

for (const emoji of emojis){
    items.push(`<li>${emoji}</li>`)
}

const list = `
<h1>${title}</h1>
<ul class ="flex">
    ${items.join('')}
</ul>`

const $container = document.getElementById('container')
$container.innerHTML = list;