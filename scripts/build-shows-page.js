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
  
  
  //elements 
//   const showDate = document.querySelector(".show__date");
//   const showButtons = document.querySelector('.show__buttons')
//   const dateInfo = document.querySelector('.date__info')
//   const venueInfo = document.querySelector('.venue__info')
  const showInfo = document.querySelector('.show__list')
  
  // loop
  for (let i = 0; i < shows.length; i++) {
    // const datep = document.createElement("p");
    // const date = document.createElement("h3");
    // const venuep = document.createElement("p");
    // const venue = document.createElement("h3");
    // const locationp = document.createElement("p");
    // const location = document.createElement("h3");

    const listDate = document.createElement('li')
    const listVenue = document.createElement('li')
    const listLocation = document.createElement('li')
    const titleDate = document.createElement('h3')
    const titleVenue = document.createElement('h3')
    const titleLocation = document.createElement('h3')
    const button = document.createElement("button");

    button.classList.add('buy')
    showInfo.appendChild(titleDate)
    showInfo.appendChild(listDate)
    showInfo.appendChild(titleVenue)
    showInfo.appendChild(listVenue)
    showInfo.appendChild(titleLocation)
    showInfo.appendChild(listLocation)
    showInfo.appendChild(button)
    listDate.innerText = shows[i].DATE
    listVenue.innerText = shows[i].VENUE
    listLocation.innerText = shows[i].LOCATION
    titleDate.innerText = 'DATE'
    titleVenue.innerText = 'VENUE'
    titleLocation.innerText = 'LOCATION'
    button.innerText = 'BUY TICKETS'
    

    //date
    // date.classList.add("show__date-title");
    // datep.classList.add("showing");
    // dateInfo.appendChild(date);
  
    // dateInfo.appendChild(datep);
  
    //venue
    // venue.classList.add("show__date-title");
    // venuep.classList.add("showing");
    // dateInfo.appendChild(venue);
  
    // dateInfo.appendChild(venuep);
  
    //location
  
    // location.classList.add("show__date-title");
    // locationp.classList.add("showing");
    // dateInfo.appendChild(location);
  
    // dateInfo.appendChild(locationp);
  

  
   
  
  // text
  
    // date.innerText = "DATE";
    // datep.innerText = shows[i].DATE;
    // venue.innerText = "VENUE";
    // venuep.innerText = shows[i].VENUE;
    // location.innerText = "LOCATION";
    // locationp.innerText = shows[i].LOCATION;
    // button.innerText = 'BUY TICKETS'
  }
  
  

  
  

  