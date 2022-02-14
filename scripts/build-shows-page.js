// shows arrray
const shows = [
  {
    DATE: "Mon Sept 06 2021",
    VENUE: "Ronald Lane",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Tue Sept 21 2021",
    VENUE: "Pier 3 East",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Fri Oct 15 2021",
    VENUE: "View Lounge",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Sat Nov 06 2021",
    VENUE: "Hyatt Agency",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Fri Nov 26 2021",
    VENUE: "Moscow Center",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Wed Dec 15 2021",
    VENUE: "Press Club",
    LOCATION: "San Francisco, CA",
  },
];

// target dom element
const showInfo = document.querySelector(".show__list");
const buttonContainer = document.querySelector('.show__button-container')
// display shows
for (let i = 0; i < shows.length; i++) {
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

  listDate.innerText = shows[i].DATE;
  listVenue.innerText = shows[i].VENUE;
  listLocation.innerText = shows[i].LOCATION;
  titleDate.innerText = "DATE";
  titleVenue.innerText = "VENUE";
  titleLocation.innerText = "LOCATION";
  button.innerText = "BUY TICKETS";
}





