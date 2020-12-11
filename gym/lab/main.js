var pageCounter = 1;
var bookContainer = document.getElementById("work-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'work-' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " --trained by-- " + data[i].trainer + " ";
    
    for (ii = 0; ii < data[i].detail.start.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].detail.start[ii];
      } else {
        htmlString += " --starting on-- " + data[i].detail.start[ii];
      }
    }

    htmlString += ' ---prize.--- ';

    for (ii = 0; ii < data[i].detail.prize.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].detail.prize[ii];
      } else {
        htmlString += "  " + data[i].detail.prize[ii];
      }
    }

    htmlString += '.</p>';

  }

  bookContainer.insertAdjacentHTML('beforeend', htmlString);
}
