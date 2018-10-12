// from data.js
var tableData = data;



resetTable();

var dateInput = d3.select("#datetime");
var outputufotable = d3.select("#ufo-table");
var filterBtn = d3.select("#filter-btn");

function resetTable() {
  var reset = d3.select("#reset-btn");
  
  reset.on("click", function() {
    document.getElementById("table-body").innerHTML = "";
    console.log("Reseting table!")
  });
  };
  


outputufotable.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function(d)
        {
        return `<td>${d.datetime}</td>
                <td>${d.city}</td>
                <td>${d.state}</td>
                <td>${d.country}</td>
                <td>${d.shape}</td>
                <td>${d.durationMinutes}</td>
                <td>${d.comments}</td>`;    
        });


 
function filterDate(){
  // Prevent the page from refreshing
  d3.event.preventDefault();
  var inputDateValue = dateInput.node().value.trim();
  var inputCityValue = d3.select("#city").node().value.trim().toLowerCase();
  var inputShapeValue = d3.select("#shape").node().value;
  var inputStateValue = d3.select("#state").node().value;
  var inputCountryValue = d3.select("#country").node().value;


  var filteredData = tableData;
  
  if (inputDateValue != ""){
    filteredData=filteredData.filter(sightingvalue=> {return sightingvalue.datetime==inputDateValue});
  }

  if (inputCityValue != ""){
    filteredData=filteredData.filter(sightingvalue=> {return sightingvalue.city==inputCityValue});
  }

  if (inputShapeValue != ""){
    filteredData=filteredData.filter(sightingvalue=> {return sightingvalue.shape===inputShapeValue});
  }

  if (inputStateValue != ""){
    filteredData=filteredData.filter(sightingvalue=> {return sightingvalue.state===inputStateValue});
  }

  if (inputCountryValue != ""){
    filteredData=filteredData.filter(sightingvalue=> {return sightingvalue.country===inputCountryValue});
  }
  

  outputufotable.select("tbody").html("")

    outputufotable.select("tbody")
        .selectAll("tr")
        .data(filteredData)
        .enter()
        .append("tr")
        .html(function(d)
            {
            return `<td>${d.datetime}</td>
                    <td>${d.city}</td>
                    <td>${d.state}</td>
                    <td>${d.country}</td>
                    <td>${d.shape}</td>
                    <td>${d.durationMinutes}</td>
                    <td>${d.comments}</td>`;    
            });
  
};

filterBtn.on("click", filterDate);
  









