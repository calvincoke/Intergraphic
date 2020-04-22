function oddProjects(){


  var odd = document.getElementsByClassName("even");
  for (var i=0; i<odd.length; i++){
    if (odd[i].style.display === "none") {
      odd[i].style.display = "block";
    } else {
      odd[i].style.display = "none";
    }
  }

  var butt = document.querySelectAll("button")[0];
  
  if (butt.getAttribute("class")==="btn btn-light"){
    butt.setAttribute("class", "btn btn-primary");
  } else {
    butt.setAttribute("class", "btn btn-light");
  }
}

function evenProjects(){
  var even = document.getElementsByClassName("odd");
  for (var i=0; i<even.length; i++){
    if (even[i].style.display === "none") {
      even[i].style.display = "block";
    } else {
      even[i].style.display = "none";
    }
  }
}
