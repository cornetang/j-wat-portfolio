(function(){
  
    var app = angular.module('portfolio', []);

    app.value('portfoInfo',[
            { 
                linksrc: "portfolio-animation.html",
                imgsrc: "img/portfolio-01.jpg",
                count: 10,
                name: "ad",
                imgArray: [],
                imgnumArray: [],
                slider: true,
                youtube: false,
            },
            { 
                linksrc: "portfolio-illustration.html",
                imgsrc: "img/portfolio-02.jpg",
                count: 25,
                name: "illu",
                imgArray: [],
                imgnumArray: [],
                slider: true,
                youtube: false,
            },
            { 
                linksrc: "portfolio-showreel.html",
                imgsrc: "img/portfolio-03.jpg",
                slider: false,
                youtube: true,
                youtubesrc: "https://www.youtube.com/embed/LSJI8RNI9Ps",
            },
            { 
                linksrc: "portfolio-freelance.html",
                imgsrc: "img/portfolio-04.jpg",
                count: 3,
                name: "free",
                imgArray: [],
                imgnumArray: [],
                slider: true,
                youtube: false,
            }
        ]);

    app.controller('TabController', [ '$window', function($window){
        this.tab = 1;
        this.slide = -1;
        this.portfo = -1;
        this.xsmenu = false;

        this.toggleXsMenu = function() {
            this.xsmenu = !this.xsmenu;
            $window.scrollTo(0, 0);
        }

        this.getXsMenu = function() {
            return this.xsmenu;
        }

        this.setTab = function(tabno) {
            if (this.tab === 1) $window.scrollTo(0, 0);
            this.tab = tabno; 
            this.slide = -1; 
            this.portfo = -1;
            if (this.tab === 1) $window.scrollTo(0, 0);
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

    }]);

    app.controller('PortfolioController', [ '$sce', 'portfoInfo', '$scope', function($sce, portfoInfo, $scope){
        $scope.imgno = 0;
        this.pages = portfoInfo;

        this.pages.forEach(function(entry){
          for (i=1;i<=entry.count;i++) {
            entry.imgArray[i-1] = "img/" + entry.name + i + ".jpg";
            entry.imgnumArray[i-1] = "img/" + entry.name + "num" + i + ".jpg";
          }
        });

        this.sliderAct = function(portno) {
            return this.pages[portno].slider;
        }

        this.youtubeAct = function(portno) {
            return this.pages[portno].youtube;
        }

        this.resetImgNo = function() {
            $scope.imgno = 0;
        }

        this.increment = function(portno) {
            $("#portimg").fadeTo("fast", 0, function(){
                $scope.imgno = $scope.imgno + 1;    
            });
            
            if ($scope.imgno === this.pages[portno].count) $scope.imgno = 0;
            $("#portimg").fadeTo("fast", 1);
            $('.testing').append("abc");
        }

        this.decrement = function(portno) {
            $scope.imgno = $scope.imgno - 1;
            if ($scope.imgno === -1) $scope.imgno = this.pages[portno].count - 1;
        }

        this.getImgNo = function() {
            return $scope.imgno;
        }

        this.leftBlack = function() {
            return $scope.imgno === 0;
        }

        this.rightBlack = function(portno) {
            return $scope.imgno === this.pages[portno].count - 1;
        }

        this.getYoutubesrc = function(portno) {
            return $sce.trustAsResourceUrl(this.pages[portno].youtubesrc);
        }

    }]);

    app.directive('header', function(){
        return {
            restrict: 'E',
            templateUrl: 'header.html'
        }
    });

    app.directive('homepage', function(){
        return {
            restrict: 'E',
            templateUrl: 'homepage.html'
        }
    });

    app.directive('about', function(){
        return {
            restrict: 'E',
            templateUrl: 'about.html'
        }
    });

    app.directive('portfolio', function(){
        return {
            restrict: 'E',
            templateUrl: 'portfolio.html'
        }
    });
    
    app.directive('contact', function(){
        return {
            restrict: 'E',
            templateUrl: 'contact.html'
        }
    });

    app.directive('footer', function(){
        return {
            restrict: 'E',
            templateUrl: 'footer.html'
        }
    });

})();