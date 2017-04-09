var btn  = document.getElementById("btn");

btn.addEventListener("click",function() {
  var request = new XMLHttpRequest();
  var optiune;
  optiune = "Arad";
  var cale = "http://localhost:3000/"+optiune;
  request.open('GET', cale);
  request.onload = function () {
    var ourData = JSON.parse(request.responseText);
   for (i=0;i<ourData.length;i++)
    console.log(optiune," ", ourData[i].statistic_value," doi: ",ourData[i].statistic_value, " trei ",i);
  };
  request.send();
});

