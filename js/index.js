var projState = "none";

function projects(projtype){
  var proj = document.getElementsByClassName("proj");
  var butt =  $("button");
  //reset button color
  for (var k = 0; k<butt.length ; k++){
    butt[k].className = "btn btn-light"
  }

  if(projtype === projState){
    projState = "none";
    //Reset/toggle project panelS
    for (var i=0; i<proj.length; i++){
      proj[i].style.display = "block";
    }

  } else {
    projState = projtype
    //changing color of button on press
    switch (projtype) {
      case "odd":
        butt[0].className = "btn btn-secondary";
        break;
      case "even":
        butt[1].className = "btn btn-secondary";
        break;
      case "three":
        butt[2].className = "btn btn-secondary";
        break;
    }
    //Sorting projects by class type
    for (var i=0; i<proj.length; i++){
      if (proj[i].classList.contains(projtype)) {
        proj[i].style.display = "block";
      } else {
        proj[i].style.display = "none";
      }
    }

  }
}
