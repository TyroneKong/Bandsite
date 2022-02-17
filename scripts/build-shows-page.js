
const apiKey = "26f7fbd0-3fdd-499f-b4b6-45cd5a42c2c4"

axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
.then(response => {

console.log(response.data)

//target dom element
const showInfo = document.querySelector(".show__list");
const buttonContainer = document.querySelector('.show__button-container')
// display shows
for (let i = 0; i < response.data.length; i++) {
  // create new elements

  const list = document.createElement("li");
  const listDate = document.createElement("p");
  const listVenue = document.createElement("p");
  const listLocation = document.createElement("p");
  const titleDate = document.createElement("h3");
  const titleVenue = document.createElement("h3");
  const titleLocation = document.createElement("h3");
  const button = document.createElement("button");

  // add class names
  titleDate.classList.add("show__info-heading");
  titleVenue.classList.add("show__info-heading");
  titleLocation.classList.add("show__info-heading");

  list.classList.add("show__list-tickets");
  listDate.classList.add("show__date");
  listVenue.classList.add("show__venue");
  listLocation.classList.add("show__location");
  button.classList.add("show__buy-button");
  

  //appending the parent

  list.appendChild(titleDate);
  list.appendChild(listDate);
  list.appendChild(titleVenue);
  list.appendChild(listVenue);
  list.appendChild(titleLocation);
  list.appendChild(listLocation);
  list.appendChild(button);
  showInfo.appendChild(list);


  // adding the content



  const convertedEpoch = new Date(Number(response.data[i].date)).toDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });



  listDate.innerText = convertedEpoch
  listVenue.innerText = response.data[i].place;
  listLocation.innerText = response.data[i].location;
  titleDate.innerText = "DATE";
  titleVenue.innerText = "VENUE";
  titleLocation.innerText = "LOCATION";
  button.innerText = "BUY TICKETS";
}





//using spread operator to spread items in an array before looping over each row 

const tickets = document.querySelectorAll('.show__list-tickets ');

[...tickets].forEach(row => {

  
  row.addEventListener('click',(item)=> {

    const activeRow = document.querySelector('.active');
    //ternary checks condition
    activeRow !== null? activeRow.classList.remove('active'):row.classList.add('active')

  })
})

})