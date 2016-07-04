(function(){
  
  var app = angular.module('portfolio', []);
  app.controller('PortfolioController', function(){
    this.pages = [
      	{ 
    		linksrc: "portfolio-animation.html",
    		imgsrc: "img/portfolio-01.jpg",
        count: 10,
        name: "ad",
    	},
    	{ 
    		linksrc: "portfolio-illustration.html",
    		imgsrc: "img/portfolio-02.jpg",
        count: 25,
        name: "illu",
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
    	}
    ];
  });

  app.directive('about', function(){
    return {
        restrict: 'E',
        templateUrl: 'about.html'
    }
  });

})();