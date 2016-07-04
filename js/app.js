(function(){
  
  var app = angular.module('portfolio', []);
  app.controller('PortfolioController', function(){
    this.pages = [
      	{ 
    		linksrc: "portfolio-animation.html",
    		imgsrc: "img/portfolio-01.jpg",
        count: 10,
        name: "ad",
        imgArray: [],
        imgnumArray: [
          "a", "b", "c",
        ],
    	},
    	{ 
    		linksrc: "portfolio-illustration.html",
    		imgsrc: "img/portfolio-02.jpg",
        count: 25,
        name: "illu",
        imgArray: [],
        imgnumArray: [],
    	},
    	{ 
    		linksrc: "portfolio-showreel.html",
    		imgsrc: "img/portfolio-03.jpg",
    	},
    	{ 
    		linksrc: "portfolio-freelance.html",
    		imgsrc: "img/portfolio-04.jpg",
        count: 3,
        name: "free",
        imgArray: [],
        imgnumArray: [],
    	}
    ];

    this.pages.forEach(function(entry){
      for (i=1;i<entry.count;i++) {
        entry.imgArray[i-1] = "img/" + entry.name + i + ".jpg";
        entry.imgnumArray[i-1] = "img/" + entry.name + "num" + i + ".jpg";
      }
    });


  });



  app.directive('about', function(){
    return {
        restrict: 'E',
        templateUrl: 'about.html'
    }
  });

})();