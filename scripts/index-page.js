// comments array
const comments = [
  {
    Name: "Mile Acosta",
    Date: "12/20/2020",
    Comment:
      "I can stop listening Every time I hear once of their songs-the vocals - it gives me goosebumps.Shivers straight down my spine. What a beautiful expression of creativity. Cant get enough",
  },
  {
    Name: "Emilie Beach",
    Date: "01/09/2021",
    Comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    Name: "Connor Walton",
    Date: "02/17/2021",
    Comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

const inputField = document.querySelector(".input");

// confirm alert

const alerting = () => {
  const ok = confirm("Please fill in name!");

  // user clicks ok
  if (ok) {
    // location.reload();
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

const commentContainer = document.querySelector(".comment__list");
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
      Name: nameInput,
      Date: formattedDate,
      Comment: commentInput,
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
    nameTitle.innerText = comments[i].Name;
    date.innerText = comments[i].Date;
    comment.innerText = comments[i].Comment;
  }
};

displayComment();
