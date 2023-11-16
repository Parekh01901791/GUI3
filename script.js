


function generateTable() {   
  
    var display = document.getElementById('display');
    display.innerHTML = "";
  
    //This gets the input and converts them to integers
    var minCol = parseInt(document.getElementById('inputMinCol_val').value);
    var maxCol = parseInt(document.getElementById('inputMaxCol_val').value);
    var minRow = parseInt(document.getElementById('inputMinRow_val').value);
    var maxRow = parseInt(document.getElementById('inputMaxRow_val').value);

    //stored this into the array
    var arr1 = [minCol, maxCol, minRow, maxRow];


    //Checks to see if numbers are within 50 and -50
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] > 50) {
        display.innerHTML = "Invalid Input, number is too big!!!";
        return;
      } else if (arr1[i] < -50) {
        display.innerHTML = "Invalid Input, number is too small!!!";
        return;
      }

    }

    //Error handeling 
    if (minCol > maxCol) {
      display.innerHTML = "The MIN COLUMN value is bigger than the MAX COLUMN value";
      return;
    }

    if (minRow > maxRow) {
      display.innerHTML = "The MIN ROW value is bigger than the MAX ROW value";
      return;
    }

    //Makes table
    var table = document.createElement("table");

    var headerRow = table.insertRow();
    headerRow.appendChild(document.createElement("th"));

    for (var i = minCol; i <= maxCol; i++) {
      var top_header = document.createElement("th");
      top_header.textContent = i;
      headerRow.appendChild(top_header);
    }


    for (var i = minRow; i <= maxRow; i++) {
      
      // var rowData = tableData[i];
      var row = table.insertRow();

      var left_header = row.insertCell();
      left_header.textContent = i;

      for (var j = minCol; j <= maxCol; j++) {
        var cell = row.insertCell();
        cell.textContent = i * j;
      }
    }

    display.appendChild(table);


}  

