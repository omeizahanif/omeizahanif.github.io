(function () {
    'use strict';
    /*Cache the DOM*/
    // Select size input, form and reset button
    const setHeight = document.getElementById('setHeight'),
          setWidth = document.getElementById('setWidth'),
          submitForm = document.getElementById('submitForm'),
          reset = document.getElementById('reset'),
          // Select color input & canvas
          pickColor = document.querySelector('#pickColor'),
          canvas = document.getElementById('canvas');

    /*Bind Events*/
    // When size is submitted by the user, call makeGrid()
    submitForm.addEventListener('submit', function(e){
        e.preventDefault();
        //resetCanvas();
        makeGrid();
    });
    //when element with the canvas id is clicked, the paint function is called
    canvas.addEventListener('click', paint);
    //when element with the canvas id is double-clicked, the erase function is called
    canvas.addEventListener('dblclick', erase);
    //when the button with the reset id is clicked, resetCanvas function is called
    reset.addEventListener('click', resetCanvas);
    
    /*core functions*/
    /**
    * @description creates a dynamic grid of cells
    * @param none
    * @returns {html} Rows of table data
    */
    function makeGrid(){
        //reset initial grid by calling the resetCanvas function
        resetCanvas();
        let row = '', cell = '';
        //create rows repeatedly using a loop
        for(let i = 0; i < setHeight.value; i++){
            row = canvas.insertRow(i);
        //create cells repeatedly using a loop
            for(let j = 0; j < setWidth.value; j++){
                cell = row.insertCell(j);
            }
        }
        //reset the input value
        setHeight.value = 1;
        setWidth.value = 1;
        //enable the reset button
        reset.disabled = false;
    }

    /**
    * @description compares the targeted event with the
        selector provided
    * @param {html} event and dom element
    * @returns nothing, effectively ending the function call 
    if false.
    */
    function checkEventMatch(e, selector){
        if (!e.target.matches(selector)) return;
    }
    
    /**
    * @description changes the background property of table data
    elements in the grid
    * @param {html} event
    * @returns background property of td element altered based on
    color input value
    */
    function paint(e){
        checkEventMatch(e, 'td');
        e.target.style.background = pickColor.value;
    }

    /**
    * @description resets the background property of table data
    elements in the grid to white
    * @param {html} event
    * @returns background property of td element is set to white
    */
    function erase(e){
        checkEventMatch(e, 'td');
        e.target.style.background = "#ffffff";
    }
    
    /**
    * @description deletes all rows of table data
    * @param none
    * @returns a page without rows and table data
    */
    function resetCanvas(){
        //assign the length of rows to a variable, rowCount
        let rowCount = canvas.rows.length, i = 1;
        //delete every row on the table using a for loop & deleteRow method
        for (i = 0; i < rowCount; i++) {
            canvas.deleteRow(0);
        }
        //set the reset button disabled attribute to true
        reset.disabled = true;
    }
})()