document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".Box");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Hide the bottom box
      boxes.forEach((otherBox) => {
        if (otherBox !== box) {
          otherBox.classList.add("hideBottom");
        }
      });

      //To Toggle the hideBottom
      this.classList.toggle("hideBottom");
    });
  });
});
