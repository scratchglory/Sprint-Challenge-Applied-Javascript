// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const url = "https://lambda-times-backend.herokuapp.com/topics";

axios
  .get(url)
  .then(res => {
    let data = res.data.topics;
    tabCreator(data);
  })
  .catch(err => {
    console.log(err);
  });

const tabs = document.querySelector(".tabs");
const topics = document.querySelector(".topics");

function tabCreator(data) {
  data.forEach(topic => {
    const tab = document.createElement("div");
    topics.appendChild(tab);
    tab.classList.add("tab");
    tab.textContent = topic;
  });
}
