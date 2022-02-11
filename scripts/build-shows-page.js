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

// display shows
for (let i = 0; i < shows.length; i++) {
  // create new elements
  const container = document.createElement("div");
  const list = document.createElement("li");
  const listDate = document.createElement("p");
  const listVenue = document.createElement("p");
  const listLocation = document.createElement("p");

  const button = document.createElement("button");
  const divider = document.createElement("hr");

  // add class names
  list.classList.add("list");
  listDate.classList.add("show__date");
  listVenue.classList.add("show__venue");
  listLocation.classList.add("show__location");
  button.classList.add("buy");
  divider.classList.add("show__divider");

  list.appendChild(listDate);
  list.appendChild(listVenue);

  list.appendChild(listLocation);
  list.appendChild(button);
  // list.appendChild(divider);
  showInfo.appendChild(list);

  listDate.innerText = shows[i].DATE;
  listVenue.innerText = shows[i].VENUE;
  listLocation.innerText = shows[i].LOCATION;

  button.innerText = "BUY TICKETS";
}
