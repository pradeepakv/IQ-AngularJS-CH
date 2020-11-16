'use strict';
angular.module('app', ['ui.bootstrap']).controller('appController', function ($scope) {

  var ctrl = this;

  var DEMO_EVENTS = [
    { value: 100, time: moment() },
    { value: 155, time: moment() },
    { value: 83, time: moment() },
    { value: 211, time: moment().subtract(1, 'day') },
    { value: 138, time: moment().subtract(1, 'day') },
    { value: 55, time: moment().subtract(1, 'day') },
    { value: 183, time: moment().subtract(2, 'day') },
    { value: 103, time: moment().subtract(2, 'day') },
    { value: 98, time: moment().subtract(3, 'day') }
  ];
  

  ctrl.hdrTxt1 = 'Total blood sugar events';
  ctrl.hdrTxt2 = 'Average blood sugar';
  ctrl.hdrTxt3 = 'Events between 70 and 180';
  // Add your AngularJS controller logic here

  
    /****Task3******/
   
    ctrl.value = DEMO_EVENTS.length
   
      const mapData = DEMO_EVENTS.map(item => {
        const container = {};      
        container[item.time.format("ddd, D MMM YYYY")] = item.value;
        return container;
      })

      var total = 0;
      for(var i = 0; i < DEMO_EVENTS.length; i++){
          var events = DEMO_EVENTS[i];
          total += (events.value);
      }
      ctrl.avg = Math.round(total/DEMO_EVENTS.length);
     
      var percent = 0;
      for(var i = 0; i < DEMO_EVENTS.length; i++){
        
          var events = DEMO_EVENTS[i];
          if(events.value>70 && events.value>180){ percent += (events.value);}
         
      }
      ctrl.avgPer = Math.round(percent/DEMO_EVENTS.length);
   
  /****Task3 End******/

 /****Task2******/
    var date = moment().toDate();// get JS Date object from moment object
    ctrl.curdate = moment().format("ddd, D MMM YYYY");


      if (!Date.now) {
        Date.now = function() {
          return new Date().getTime();
        }
      }
      var theDate = Date.now();

      ctrl.curdate = getTheDate(theDate)
      
      $scope.prev = function() {
        theDate -= 86400000;
        ctrl.curdate = getTheDate(theDate)
      }
      $scope.next = function() {
        theDate += 86400000;
        ctrl.curdate = getTheDate(theDate)
        
      }

      function getTheDate(getDate) {
        var days = ["Sun", "Mon", "Tue",
          "Wed", "Thu", "Fri", "Sat"
        ];
        var months = ["Jan", "Feb", "Mar",
          "Apr", "May", "Jun", "Jul", "Aug",
          "Sep", "Oct", "Nov", "Dec"
        ];
        var theCDate = new Date(getDate);
        return days[theCDate.getDay()] + ', ' + theCDate.getDate() + ' ' + months[theCDate.getMonth()] + ' ' + theCDate.getFullYear();
      }
    /****End Task2******/



});
