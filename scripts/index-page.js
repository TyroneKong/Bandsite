
const url = "https://project-1-api.herokuapp.com/comments"
const apiKey = "26f7fbd0-3fdd-499f-b4b6-45cd5a42c2c4";

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios
  .get(`${url}?api_key=${apiKey}`)
  .then((response) => {
    const comments = response.data.map((item) => item);

    const inputField = document.querySelector(".input");

    // confirm alert
    const alerting = () => {
      const ok = confirm("Please fill in name!");

      // user clicks ok
      if (ok) {
        inputField.classList.remove('conversation__input-border-red');
        inputField.focus();
      }

      //user clicks cancel
      else {
        inputField.classList.remove('conversation__input-border-red');
        inputField.focus();
      }
    };

    // validate name input
    const formValidation = () => {
      let userInput = document.querySelector(".input").value;

      if (userInput === "") {
        inputField.classList.add('input-border')
        setTimeout(() => alerting(), 10);
      }
    };

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
        comments.unshift({
          name: nameInput,
          timestamp: formattedDate,
          comment: commentInput,
        });

        console.log(comments);

        // post a comment to the backend

        const body = { name: nameInput, comment: commentInput };

        axios
          .post(
            `${url}?api_key=${apiKey}`,
            body,
            header
          )
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }

      commentList.innerText = "";
      event.preventDefault();
      formValidation();
      displayComment();

      //clears input and text area after submission
      document.querySelector(".input").value = "";
      document.querySelector(".text").value = "";
    };

    //button
    const form = document.querySelector("form");
    form.addEventListener("submit", applyNewComment);

    // display default comments
    const displayComment = () => {
      //new sorted comments array
      const sortedComments = [];

      // sort comments by timestamp
      comments.forEach((comment) => {
        sortedComments.push(comments.sort((a, b) => b.timestamp - a.timestamp));
      });

      for (let i = 0; i < sortedComments.length; i++) {
        // target dom elements
        const commentList = document.querySelector(".comment__list");

        // create new elements
        const likeBtnContainer = document.createElement("div");
        const deleteBtnContainer = document.createElement("div");
        const likeBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        const date = document.createElement("p");
        const comment = document.createElement("p");
        const nameTitle = document.createElement("h3");
        const commentItem = document.createElement("li");
        const avatar = document.createElement("img");
        const divider = document.createElement("hr");

        // add classes to new elements
        likeBtnContainer.classList.add("comment__likeBtn-container");
        deleteBtnContainer.classList.add("comment__deleteBtn-container");
        likeBtn.classList.add("comment__likeBtn");
        deleteBtn.classList.add("comment__deleteBtn");
        date.classList.add("comment__date");
        avatar.classList.add("conversation__avatar-img");
        nameTitle.classList.add("comment__name");
        commentItem.classList.add("comment__item");
        divider.classList.add("divider");
        comment.classList.add("conversation__comment");

        // append children to parent element
        commentItem.appendChild(avatar);
        commentItem.appendChild(date);
        commentItem.appendChild(nameTitle);
        commentItem.appendChild(comment);
        commentList.appendChild(commentItem);
        deleteBtnContainer.appendChild(deleteBtn);
        commentItem.appendChild(deleteBtnContainer);
        commentList.appendChild(divider);
        deleteBtn.addEventListener('click', ()=> deleteComment(i))

        //convert epoch timestamp
        const convertedDate = new Date(
          comments[i].timestamp
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

        nameTitle.innerText = comments[i].name;
        date.innerText = convertedDate;
        comment.innerText = comments[i].comment;
        deleteBtn.innerText = "DELETE COMMENT";
      }
    };

    //invoke display comments
    displayComment();

  ;
    const deleteComment = (index) => {
      axios
        .delete(
          `${url}/${comments[index].id}?api_key=${apiKey}`,
          header
        )
        .then((response) => {
          //handle success
          console.log(response);
          setTimeout(() => location.reload(), 10);
        })
        .catch((error) => {
          //handle error
          console.log(error);
        });
    };
  });
