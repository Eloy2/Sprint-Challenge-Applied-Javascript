// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //Div class header
    const header = document.createElement('div');
    header.classList.add('header');
///////////////////////////////////////////////// EVERYTHING BELOW APPENDED TO header
    //Span class date
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';

    //h1 title
    const title = document.createElement('h1');
    title.textContent = 'Lambda Times';

    //Span class temp
    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
////////////////////////////////////////////////// EVERYTHING ABOVE APPENDED TO header
    //Append all to header
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}


const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header())
