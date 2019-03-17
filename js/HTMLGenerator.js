
/*
 * This function creates the n x n html grid
 */
function initializeHTMLGrid () { 

    var game_container = document.getElementById("game-container");
    var grid_container = document.getElementById("grid-container");
    var n = document.getElementById("nParam").value;

    for (var rows = 0; rows < n; rows++) {
        // create n rows
        var row = document.createElement('div');
        row.className = "grid-row";
        row.id = "grid-row" + rows;

        // row style attributes
        row.style.width = "500px";
        row.style.height = 515 / n - 15 + "px";
        if (rows != n - 1) {
            row.style.marginBottom = "15px"; 
        }

        for (var columns = 0; columns < n; columns++) {
            // create n cells per row
            var cell = document.createElement('div');     
            var cell_height =        
            cell.className = "grid-cell";
            cell.id = "grid-item-" + rows + "-" + columns;
            
            // cell style attributes
            cell.style.width = 515 / n - 15 + "px";
            cell.style.height = 515 / n - 15 + "px";
            cell.style.fontSize = 220 / n + "px";
            if (columns != n - 1) {
                cell.style.marginRight = "15px";
            }
            // add cell to the row
            row.appendChild(cell);
        }   
        grid_container.appendChild(row);
    }
    game_container.appendChild(grid_container);
    
}

function removeHTMLGrid () {
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    var grid = document.getElementById("grid-container");
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}
