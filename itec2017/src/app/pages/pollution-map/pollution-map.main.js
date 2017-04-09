var btn  = document.getElementById("chartButton2012");

btn.addEventListener("click",function() {
  var request = new XMLHttpRequest();
  var optiune;
  optiune = 2012;
  var cale = "http://localhost:3000/db";
  request.open('GET', cale);
  request.onload = function () {
    var ourData = JSON.parse(request.responseText);
    for(i=0;i<ourData.length;i++){
      if(ourData[i].statistics_year == 2012)
      {console.log(ourData[i].statistics_year," doi: ",ourData[i].statistic_value);}}
      renderHTML(ourData);
  };
  request.send();
});
function renderHTML(data){

}
