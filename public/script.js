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

const exploreTeamsButton = document.querySelector('#exploreTeams');

exploreTeamsButton.addEventListener("click", () => {
  const prompt = confirm("This link will direct you to the list of global soccer teams website in a new tab, Do you wish to continue?");
  if (prompt){
    /* Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm */
    window.open("https://www.espn.com/soccer/teams", "_blank");
  }
})
