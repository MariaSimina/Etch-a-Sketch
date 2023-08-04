const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    container.appendChild(row);

    for (let j = 0; j < 16; j++) {
        const divs = document.createElement('div');
        divs.setAttribute('class', 'gridDivs');
        row.appendChild(divs); 
    }

    
}