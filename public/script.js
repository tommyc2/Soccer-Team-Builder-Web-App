const ratingBtn = document.querySelector("#rateit");

$(".delteam").click(() => confirm("Really delete this team?"));

ratingBtn &&
  ratingBtn.addEventListener("click", () => {
    let userRating = parseInt(
      prompt("Rate this collection (from 1 to 5 stars)")
    );
    if (userRating > 5 || userRating < 1 || isNaN(userRating)) {
      alert("Try again with a number between 1 and 5!");
    } else {
      document.querySelector("#rating").innerHTML = "You gave a rating of: ";
      for (let i = 0; i < userRating; i++) {
        document.querySelector("#rating").innerHTML +=
          "<i class='green money bill alternate icon'></i>";
      }
    }
  });

const 
