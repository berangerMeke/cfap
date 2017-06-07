 var app = angular.module('gaeaApp', []);
app.controller('calendarCtrl', function($scope, $http, $interval) { 

$scope.test = 'TOTOTOT';

$(document).ready(function() {

var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		var val = 7;
        var titre = 'Danse du chef'
        
        
        console.log(d+" "+m+" "+y);
        
        
    
		$('#calendar').fullCalendar({
			editabler: true,
			events: [
				{
					title: 'titre',
					start: new Date(y, m, 1),
                    image:'1.jpg'
				},
				{
					title: 'Long Event',
					start: new Date(y, m, d-val),
					end: new Date(y, m, d-2)
				},
				{
					id: 12,
					title: 'Repeating Event',
					start: new Date(y, m, d-3, 16, 0),
					allDay: false
				},
				{
					id: 34,
					title: 'Repeating Event',
					start: new Date(y, m, d+4, 16, 0),
					allDay: false
				},
				{
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false
				},
				{
					title: 'Lunch',
					start: new Date(y, m, d, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false
				},
				{
					title: 'Birthday Party',
					start: new Date(y, m, d+1, 19, 0),
					end: new Date(y, m, d+1, 22, 30),
					allDay: false
				},
                {
					title: 'beranger',
					start: new Date(y, m, d+1, 11, 5),
					end: new Date(y, m, d+1, 20, 27),
					allDay: false,
                    image:'1.jpg'
				},
				{
					title: 'Click for Google',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://google.com/'
				}
			]
		});  
    
    });
    
   
});    