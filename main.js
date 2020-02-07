var tableElement = document.getElementById('table-el');
var gradeTableIn = new GradeTable(tableElement);
var headerElement = document.querySelector('header');
var pageHeader = new PageHeader(headerElement);
var app = new App(gradeTableIn, pageHeader);
app.start();
