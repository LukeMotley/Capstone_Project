// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
	let changedfilter = d3.select(this);
	//David Comment: We are taking the output that will given later in the code
	
    // 4b. Save the value that was changed as a variable.
	let changedvalue = changedfilter.property("value");
	//David Comment: From the element, we are grabbing the value that will be important in updating the filter	
	
    // 4c. Save the id of the filter that was changed as a variable.
	let filterid = changedfilter.attr("id");
	//David Comment: Similar to what we did earlier, but now we're taking the id
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
	if (changedvalue) {
		filters[filterid] = changedvalue;
	}
	else {
		delete filters[filterid]
	}
//David Comment: Here if we find a changed value we will update our filters table with a new id and value
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
	let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (filters) {
		for (var key in filters){
			filteredData = filteredData.filter(row => row[key] === filters[key]);
		}
	}  
	//David Comment: Now that we have the updated filter variable, we will use it to go through each key in the filters variable, and then filtering the table by making sure the value in the id of each row of the table is equal to the value of the id of the filter variable

    // 10. Finally, rebuild the table using the filtered data
	buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
