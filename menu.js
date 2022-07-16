function DropDownFunc() {
    var x = document.getElementById("content");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
