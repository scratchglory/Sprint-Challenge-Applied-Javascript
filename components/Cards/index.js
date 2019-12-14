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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    const data = res.data.articles;
    for (let key in data) {
      data[key].forEach(value => {
        const head = value.headline;
        const photo = value.authorPhoto;
        const name = value.authorName;
        cardCreator(head, photo, name);
      });
    }
  })
  .catch(err => {
    console.log(err);
  });

const cardCont = document.querySelector(".cards-container");
function cardCreator(head, photo, name) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const span = document.createElement("span");
  const img = document.createElement("img");

  // html
  cardCont.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgCont);
  author.appendChild(span);
  imgCont.appendChild(img);

  // css
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");

  // text=src
  img.src = photo;
  headline.textContent = head;
  span.textContent = name;
  //   console.log(head, photo, name);
  //   console.log(img.src);
  return card;
}
