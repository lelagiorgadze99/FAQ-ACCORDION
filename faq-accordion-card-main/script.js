// const question1 = document.getElementById('question1');
// console.log(question1);
// const answer1 = document.getElementById('answer1');
// console.log(answer1);
// const arrow1 = document.getElementById('arrow1')
// console.log(arrow1);

// const question2 = document.getElementById('question2');
// const answer2 = document.getElementById('answer2');
// const arrow2 = document.getElementById('arrow2');

// const question3 = document.getElementById('question3');
// const answer3 = document.getElementById('answer3');
// const arrow3 = document.getElementById('arrow3');

// const question4 = document.getElementById('question4');
// const answer4 = document.getElementById('answer4');
// const arrow4 = document.getElementById('arrow4');

// const question5 = document.getElementById('question5');
// const answer5 = document.getElementById('answer5');
// const arrow5 = document.getElementById('arrow5');

let active = null;
const containers = document.querySelectorAll(".accordion");
console.log(containers);

Array.from(containers).forEach((element) => {
  element.addEventListener("click", () => {
    debugger;

    element.classList.toggle("active");
    if (active == element) {
      element.classList.remove("active");
      active = null;
      console.log(active);
    } else {
      active?.classList.remove("active");
      console.log(active);
      active = element;
    }
  });
});

// function appearAnswer(subject, image, question) {
//   if (subject.style.display === "none") {
//     subject.style.display = "block";
//     image.style.transform = "rotate(180deg)";
//     subject.style.color = "#1E1F36";
//     question.style.fontWeight = 700;
//   } else {
//     subject.style.display = "none";
//     image.style.transform = "rotate(0deg)";
//     question.style.fontWeight = 400;
//   }
// }

// question1.addEventListener("click", (event) =>{
//     event.preventDefault();
//     appearAnswer(answer1, arrow1, question1);
//     console.log('clicked');
// })
// question2.addEventListener("click", (event) => {
//     event.preventDefault();
//     appearAnswer(answer2, arrow2, question2);
// })
// question3.addEventListener("click", (event) => {
//     event.preventDefault();
//     appearAnswer(answer3, arrow3, question3);
// })
// question4.addEventListener("click", (event) => {
//     event.preventDefault();
//     appearAnswer(answer4, arrow4, question4);
// })
// question5.addEventListener("click", (event) => {
//     event.preventDefault();
//     appearAnswer(answer5, arrow5, question5);
// })
