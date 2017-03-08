// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "Monit Shah") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title = "Lecture 53" + "& Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
    document.getElementById("demo").innerHTML="A2";
        document.getElementById("rollno").innerHTML="A048";
  }

  else if (name === "Devwrat Tanwar") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title = "Lecture 53" + "& Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
        document.getElementById("demo").innerHTML="A2";
        document.getElementById("rollno").innerHTML="A055";
  }

  else if (name === "Daksh Parekh") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title = "Lecture 53" + "& Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
        document.getElementById("demo").innerHTML="A2";
        document.getElementById("rollno").innerHTML="A036";
  }
}
