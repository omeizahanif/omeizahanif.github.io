(function () {
    'use strict';
    /*Cache the DOM*/
    // Select size input
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
    canvas.addEventListener('click', paint);
    canvas.addEventListener('dblclick', erase);
    reset.addEventListener('click', resetCanvas);
    
    /*core functions*/
    function makeGrid(){
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
    
    function checkEventMatch(e, selector){
        if (!e.target.matches(selector)) return;
    }

    function paint(e){
        checkEventMatch(e, 'td');
        e.target.style.background = pickColor.value;
    }

    function erase(e){
        checkEventMatch(e, 'td');
        e.target.style.background = "#ffffff";
    }
    
    function resetCanvas(){
        let rowCount = canvas.rows.length, i = 1;
        for (i = 0; i < rowCount; i++) {
            canvas.deleteRow(0);
        }
        reset.disabled = true;
    }
})()