var stationContainer=document.getElementById("station-info");
var clk1  = document.getElementById("clk1");

clk1.addEventListener("click",function() {

  var request = new XMLHttpRequest();
  var e = document.getElementById("ListaEvolution");
  var strUser = e.options[e.selectedIndex].text;
  console.log("valoare: "+strUser.replace(" ",""));


  var cale = "http://localhost:3000/"+strUser;
  request.open('GET', cale);
  request.onload = function () {
    var ourData = JSON.parse(request.responseText);
    for (i=0;i<ourData.length;i++)
      console.log(strUser.replace(" ","")," ", ourData[i].statistic_value," doi: ",ourData[i].statistic_value, " trei ",i);
      renderHTML(ourData);
  };
  request.send();
});

function renderHTML(ourData){
  var htmlString= "<p>"+"Date inregistrate: ";
  for (i=0;i<ourData.length;i++){
    htmlString=htmlString+" componenta: "+ourData[i].component_name+" an: "+ourData[i].statistics_year+" valoare: "+ourData[i].statistic_value+"</p>";
  }
  stationContainer.insertAdjacentHTML('beforeend',htmlString);

}

