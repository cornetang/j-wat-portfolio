(function(){
  
    var app = angular.module('portfolio', []);

    app.value('portfoInfo',[
            { 
                name: "ad",
                title: "",
                linksrc: "portfolio-animation.html",
                imgsrc: "img/portfolio-01.jpg",
                count: 10,
                imgArray: [],
                imgnumArray: [],
                slider: true,
                youtube: false,
            },
            { 
                name: "illu",
                title: "",
                linksrc: "portfolio-illustration.html",
                imgsrc: "img/portfolio-02.jpg",
                count: 25,
                imgArray: [],
                imgnumArray: [],
                slider: true,
                youtube: false,
            },
            { 
                name: "showreel",
                title: "",
                linksrc: "portfolio-showreel.html",
                imgsrc: "img/portfolio-03.jpg",
                slider: false,
                youtube: true,
                youtubesrc: "https://www.youtube.com/embed/LSJI8RNI9Ps",
            },
            { 
                
                name: "free",
                title: "",
                linksrc: "portfolio-freelance.html",
                imgsrc: "img/portfolio-04.jpg",
                count: 3,
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

    app.controller('PortfolioController', [ '$sce', 'portfoInfo', '$scope', '$timeout', function($sce, portfoInfo, $scope, $timeout){
        var ctrl = this;
        ctrl.imgno = 0;
        this.pages = portfoInfo;

        this.pages.forEach(function(entry){
          for (i=1;i<=entry.count;i++) {
            entry.imgArray[i-1] = "img/" + entry.name + i + ".jpg";
            entry.imgnumArray[i-1] = "img/" + entry.name + "num" + i + ".jpg";
          }
          entry.title = "img/" + entry.name + "-title.jpg";
        });

        this.preload = function(portno){
            $('.testing').append("clicked");
            for (i=0; i<this.pages[portno].count; i++){
                (new Image()).src = this.pages[portno].imgArray[i];
                $('.testing').append(this.pages[portno].imgArray[i]);
            }
            
        }

        this.sliderAct = function(portno) {
            return this.pages[portno].slider;
        }

        this.youtubeAct = function(portno) {
            return this.pages[portno].youtube;
        }

        this.resetImgNo = function() {
            ctrl.imgno = 0;
        }

        this.increment = function(portno) {
            $("#portimg").fadeTo("normal", 0);

            $timeout( function(){ 
                ctrl.imgno = ctrl.imgno + 1;    
                if (ctrl.imgno === ctrl.pages[portno].count) ctrl.imgno = 0;    
                }, 400
            );
            
            $("#portimg").fadeTo("normal", 1);
        }

        this.decrement = function(portno) {
            $("#portimg").fadeTo("normal", 0);

            $timeout( function(){ 
                ctrl.imgno = ctrl.imgno - 1;
                if (ctrl.imgno === -1) ctrl.imgno = ctrl.pages[portno].count - 1;
            }, 400
            );
            
            $("#portimg").fadeTo("normal", 1);
        }

        this.getImgNo = function() {
            return ctrl.imgno;
        }

        this.leftBlack = function() {
            return ctrl.imgno === 0;
        }

        this.rightBlack = function(portno) {
            return ctrl.imgno === this.pages[portno].count - 1;
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