var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

xIcon.addEventListener("click", function () {
  container3.style.display = "none";
})

checkIcon.addEventListener("click", function () {
  createNote();
})

function typeNote() {
  if (container3.style.display = "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}

function createNote() {
  // pull up the written texts and display them in the newly created div elements.
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");

  // attach text to the h1 elemenet
  node1.innerText = noteText;

  // add CSS features
  node1.setAttribute("style", "width: 250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 10px 0px 24px 0px rgb(0, 0, 0, 0.75)");

  // add CSS features by assigning the functions.
  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();

  node0.appendChild(node1);


  // attach text to the container2
  container2.insertAdjacentElement("beforeend", node0);

  // make a note larger when clicking it
  node0.addEventListener("mouseenter", function () {
    node0.style.transform = "scale(1.1)";
  })

  node0.addEventListener("mouseleave", function () {
    node0.style.transform = "scale(1)"; //default
  })

  // delete the note when double-clicking
  node0.addEventListener("dblclick", function () {
    node0.remove();
  })

  // delete the text after adding the note.
  document.getElementById("note-text").value = "";
}


// create functions to give random notes by margin, rotate, color

function margin() {
  var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

  // generate random numbers by using the buil-in methods floor(), random()
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
  random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];

  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
  random_color = ["#ebb328", "#bc83e6", "#04e022", "#3dc2ff", "#c2ff3d", "#ff3de8"];

  if (i > random_color.length - 1) {
    i = 0;
  }

  // return the value in order from random_color array.
  return random_color[i++]
}