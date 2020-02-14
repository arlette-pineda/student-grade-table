var tableElement = document.getElementById('table-el');
var noGradesElement = document.querySelector('#noGradeElement');
var gradeTableIn = new GradeTable(tableElement, noGradesElement);
var headerElement = document.querySelector('header');
var pageHeader = new PageHeader(headerElement);
var formElement = document.querySelector('form');
var gradeForm = new GradeForm(formElement);

var app = new App(gradeTableIn, pageHeader, gradeForm);
app.start();
