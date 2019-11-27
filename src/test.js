    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
      var ind = majorDiagonalColumnIndexAtFirstRow;
      for(var row=1; row<4; row++){
        var value; 
        for (var col=0; col<4; col++){
          if (this.get(row)[col]=== 1 && ind === (col - row)){
            return true;
         }
        }
        
      }
     
      
      return false; // fixme
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      var result = [];
      for (var row = 0; row< 4; row++) {
        for(var col = 0; col< 4; col++) {
          if(this.get(row)[col] === 1){
            result.push(col - row)
          }
        }
      }
      for (var i = 0; i < result.length; i++) {
        for(var j = i + 1; j < result.length; j++) {
          if(result[i] === result[j]) {
            return true;
          }
        }
      }
      
    return false; // fixme
    },
