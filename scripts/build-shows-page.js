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
  
  
 
  const showInfo = document.querySelector('.show__list')
  
  // loop
  for (let i = 0; i < shows.length; i++) {
  

    const listDate = document.createElement('li')
    const listVenue = document.createElement('li')
    const listLocation = document.createElement('li')
    const titleDate = document.createElement('h3')
    const titleVenue = document.createElement('h3')
    const titleLocation = document.createElement('h3')
    const button = document.createElement("button");
    const divider = document.createElement('hr')

    listDate.classList.add('show__date')
    listVenue.classList.add('.show__venue')
    listLocation.classList.add('.show__location')
    button.classList.add('buy')
    divider.classList.add('show__divider')
    showInfo.appendChild(titleDate)
    showInfo.appendChild(listDate)
    showInfo.appendChild(titleVenue)
    showInfo.appendChild(listVenue)
    showInfo.appendChild(titleLocation)
    showInfo.appendChild(listLocation)
    showInfo.appendChild(button)
    showInfo.appendChild(divider)
    listDate.innerText = shows[i].DATE
    listVenue.innerText = shows[i].VENUE
    listLocation.innerText = shows[i].LOCATION
    titleDate.innerText = 'DATE'
    titleVenue.innerText = 'VENUE'
    titleLocation.innerText = 'LOCATION'
    button.innerText = 'BUY TICKETS'
    
    

   
  }
  
  

  
  

  