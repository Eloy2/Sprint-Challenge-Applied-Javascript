// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardComponent(obj) {
    //Card div
    const card = document.createElement('div');
    card.classList.add('card');

    //Headline div
    const headLine = document.createElement('div');
    headLine.classList.add('headline');
    headLine.textContent = obj.headline;

    //Author div
    const author = document.createElement('div');
    author.classList.add('author');

    //Img-container div
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    //Img
    const img = document.createElement('img');
    img.src = obj.authorPhoto;

    //Span
    const authorName = document.createElement('span');
    authorName.textContent = `By ${obj.authorName}`;
    
    //Appended img to img container
    imgContainer.appendChild(img);

    //Appended imgContainer and authorName to author
    author.appendChild(imgContainer);
    author.appendChild(authorName);

    //Appended headLine and author to card
    card.appendChild(headLine);
    card.appendChild(author);

    return card;
}

const articleArr = ['bootstrap', 'javascript', 'jquery', 'node', 'technology'];

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((obj) => {
        //Select cards-container class in the DOM 
        const cardsContainer = document.querySelector(".cards-container");

        //Select the object that contains the infromation that I need
        const apiObj = obj.data.articles;

        //Object.values returns all of the values for all of the keys inside the given object literal
        Object.values(apiObj).forEach((array) => {
            //For each object inside each of the arrays inside of apiObj
            //put object inside of cardComponent to create the card and then append the card to 
            //the cardsContainer on the DOM
            array.forEach((obj) => {
                cardsContainer.appendChild(cardComponent(obj))
            })
        })

        console.log(obj);

        console.log(apiObj);

        console.log(Object.keys(apiObj)); //returns all of the keys of an object in the form of an array

        console.log(Object.values(apiObj)); //returns all of the values of all of the keys inside the object

        // apiArr.bootstrap.forEach((obj) => {
        //     cardsContainer.appendChild(cardComponent(obj));
        // })

        // apiArr.javascript.forEach((obj) => {
        //     cardsContainer.appendChild(cardComponent(obj));
        // })

        // apiArr.jquery.forEach((obj) => {
        //     cardsContainer.appendChild(cardComponent(obj));
        // })

        // apiArr.node.forEach((obj) => {
        //     cardsContainer.appendChild(cardComponent(obj));
        // })

        // apiArr.technology.forEach((obj) => {
        //     cardsContainer.appendChild(cardComponent(obj));
        // })
    })
    .catch((err) => { console.log(err) })