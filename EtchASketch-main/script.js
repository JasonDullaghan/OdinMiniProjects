(function () {



    "use strict";
    function sizee(){
        var sizer = prompt("Enter a size between 1 and 64, its the grid size");
        sizer = parseInt(sizer);
        if (sizer < 1 || sizer > 64 || Number.isNaN(sizer)) {
            prompt("R u dum?")
        }
    return sizer;
    }



    function createDiv() {
      var boardDiv = document.createElement("div");
  
      boardDiv.className = "new-div";
      
  
      return boardDiv;
    }
  
    function createAndModifyDivs() {
        var size = sizee()
      var board = document.getElementById("board"),
        myDivs = [],
        i = 0,
        numOfDivs =  size*size;
        
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      for (i; i < numOfDivs; i += 1) {
        myDivs.push(createDiv());
        board.appendChild(myDivs[i]);
        var div = myDivs[i];
        div.onmouseover = function() {
          this.style.backgroundColor = 'black';
          document.getElementById("myBtn").onclick = function () {
            
            
            myDivs.forEach(function(item){
                
                item.style.backgroundColor = "white";  
              
              })
           
       
    }


        
        };
    

      }
  
      document.getElementById("changeSize").onclick = function () {
        window.location.reload();
    }
    }

    
  
    createAndModifyDivs()
   
  

  
  }());

 


  
