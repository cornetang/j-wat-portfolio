(function(){
  
  var app = angular.module('portfolio', []);

  app.controller('TabController', function(){
    this.tab = 1;
    this.slide = -1;
    this.portfo = -1;

    this.setTab = function(tabno) {
        this.tab = tabno; 
        this.slide = -1; 
        this.portfo = -1;s
    }

    this.checkTab = function(tabno) {
        return this.tab === tabno;
    }

    this.checkSlide = function(slideno) {
        return this.slide === slideno;
    }

    this.setSlide = function(index) {
        this.slide = 1;
        this.portfo = index;
    }

    this.getPortfo = function(){
        return this.portfo;
    }

  });

  app.controller('PortfolioController', function(){
    this.imgno = 0;

    this.resetImgNo = function() {
        this.imgno = 0;
    }

    this.increment = function(portno) {
        this.imgno = this.imgno + 1;
        if (this.imgno === this.pages[portno].count) this.imgno = 0;
    }

    this.decrement = function(portno) {
        this.imgno = this.imgno - 1;
        if (this.imgno === -1) this.imgno = this.pages[portno].count - 1;
    }

    this.getImgNo = function() {
        return this.imgno;
    }

    this.leftBlack = function() {
        return this.imgno === 0;
    }

    this.rightBlack = function(portno) {
        return this.imgno === this.pages[portno].count - 1;
    }

    this.pages = [
      	{ 
    		linksrc: "portfolio-animation.html",
    		imgsrc: "img/portfolio-01.jpg",
            count: 10,
            name: "ad",
            imgArray: [],
            imgnumArray: [],
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
      for (i=1;i<=entry.count;i++) {
        entry.imgArray[i-1] = "img/" + entry.name + i + ".jpg";
        entry.imgnumArray[i-1] = "img/" + entry.name + "num" + i + ".jpg";
      }
    });

    this.copyright = function(){
      $('.copyright').append("abc");
    }


  });



  app.directive('about', function(){
    return {
        restrict: 'E',
        templateUrl: 'about.html'
    }
  });

})();