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

// target dom elements

const commentContainer = document.querySelector(".comment__list");
const commentBtn = document.querySelector(".comment-btn");

// current date
const currentDate = new Date("10-Feburary-2022");
const formattedDate = currentDate.toLocaleDateString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

//apply new comment

const applyNewComment = (event) => {
  const nameInput = document.querySelector(".input").value;
  const commentInput = document.querySelector(".text").value;
  const commentList = document.querySelector(".comment__list");
  comments.push({
    Name: nameInput,
    Date: formattedDate,
    Comment: commentInput,
  });
  console.log(comments);

  commentList.innerText = "";
  event.preventDefault();
  displayComment();
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
    const nameTitle = document.createElement("h3");
    const commenting = document.createElement("li");
    const avatar = document.createElement("img");
    const divider = document.createElement("hr");

    // add classes to new elements
    date.classList.add("comment__date");
    avatar.classList.add("avatar__img");
    nameTitle.classList.add("comment__name");
    commenting.classList.add("comment__item");
    divider.classList.add("divider");

    // append children to parent element
    commentList.appendChild(avatar);
    commentList.appendChild(date);
    commentList.appendChild(nameTitle);
    commentList.appendChild(commenting);
    commentList.appendChild(divider);

    // add content
    nameTitle.innerText = comments[i].Name;
    date.innerText = comments[i].Date;
    commenting.innerText = comments[i].Comment;
  }
};

displayComment();
