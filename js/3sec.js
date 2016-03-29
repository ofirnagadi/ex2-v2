(function() {
    var date = new Date();
    var app = angular.module('myApp', []);

  app.controller('mainController', function(){
  });
    
    //this.date = d;
    
   
    app.controller('classController', function(){
        this.tab = 1;
        this.day = date.getDate();
        this.month = date.getMonth()+1;
        this.year = date.getFullYear();
        
        this.select = function(tabSelect){
            this.tab = tabSelect;
        };
    
        this.selected = function(chack){
            return this.tab === chack;
        };
    });
      
  })();