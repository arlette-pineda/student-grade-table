var tableElement = document.getElementById('table-el');
var gradeTableIn = new GradeTable(tableElement);
var theHeader = document.querySelector('header');
var pageHeader = new PageHeader(theHeader);
var app = new App(gradeTableIn);
app.start();
