
const apiKey = "26f7fbd0-3fdd-499f-b4b6-45cd5a42c2c4"


axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
.then(response=>{
 

  const comments = response.data.map(item => item)
  console.log(comments)
  const inputField = document.querySelector(".input");

  // confirm alert
  
  const alerting = () => {
    const ok = confirm("Please fill in name!");
  
    // user clicks ok
    if (ok) {
    
      inputField.style.borderColor = "#e1e1e1";
      inputField.focus();
    }
  
    //user clicks cancel
  
    else {
      inputField.style.borderColor = "#e1e1e1";
      inputField.focus();
    }
  };
  
  // validate name input
  
  const formValidation = () => {
    let userInput = document.querySelector(".input").value;
  
    if (userInput === "") {
      inputField.style.borderColor = "#D22D2D";
      setTimeout(() => alerting(), 10);
    }
  };
  
  // target dom elements

  const commentBtn = document.querySelector(".comment__btn");
  // current date
  const currentDate = new Date();

  
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  //apply new comment
  
  const applyNewComment = (event) => {
    const nameInput = document.querySelector(".input").value;
    const commentInput = document.querySelector(".text").value;
    const commentList = document.querySelector(".comment__list");
  
    //only push object if name input not empty
    if (nameInput !== "") {
      comments.push({
        name: nameInput,
        timestamp: formattedDate,
        comment: commentInput,
      });

      //post a comment to the backend
      axios({
        url: `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`,
        method:"post",
        data:{
        name: nameInput,
        comment: commentInput,
        },
        headers: { "Content-Type": "application/json" },
      })
        .then(response => {
          //handle success
          console.log(response);
        })
        .catch(response => {
          //handle error
          console.log(response);
        });


 
    }

  

    commentList.innerText = "";
    event.preventDefault();
    formValidation();
    displayComment();
  
    //clears input and text area after submission
    document.querySelector(".input").value = "";
    document.querySelector(".text").value = "";
  };
  
  //button event
  
  commentBtn.addEventListener("click", applyNewComment);




// display default comments  
    const displayComment = () => {

  
      for (let i = comments.length - 1; i >= 0; i--) {
      
        // target dom elements
        const commentList = document.querySelector(".comment__list");
    
        // create new elements
        const date = document.createElement("p");
        const comment = document.createElement("p");
        const nameTitle = document.createElement("h3");
        const commentItem = document.createElement("li");
        const avatar = document.createElement("img");
        const divider = document.createElement("hr");
    
        // add classes to new elements
        date.classList.add("comment__date");
        avatar.classList.add("conversation__avatar-img");
        nameTitle.classList.add("comment__name");
        commentItem.classList.add("comment__item");
        divider.classList.add("divider");
        comment.classList.add('conversation__comment')
    
        // append children to parent element
        commentItem.appendChild(avatar);
        commentItem.appendChild(date);
        commentItem.appendChild(nameTitle);
        commentItem.appendChild(comment);
        commentList.appendChild(commentItem);
        commentList.appendChild(divider);
    
        // add content

        //convert epoch timestamp
       const convertedDate = new Date(comments[i].timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

        nameTitle.innerText = comments[i].name;
        date.innerText = convertedDate;
        comment.innerText = comments[i].comment;
      }
    };

    displayComment()
  


// comment list items
const listItem =  document.querySelectorAll('li')

const nodeArray = Array.from(listItem)
console.log(nodeArray)

nodeArray.reverse().forEach((item,index) => item.addEventListener('click', ()=> deleteComment(index)))



//deletes comment

const deleteComment=(index)=>{
axios({
method:"delete",
url: `https://project-1-api.herokuapp.com/comments/${comments[index].id}?api_key=${apiKey}`,

headers: { "Content-Type": "application/json" },
})
.then(response => {
  //handle success
  console.log(response);
})
.catch(response => {
  //handle error
  console.log(response);
});


setTimeout(()=>
  location.reload()
,1000)
}


  

})

