class App{
  constructor(gradeTable, pageHeader, gradeForm){
  this.gradeTable = gradeTable;
  this.pageHeader = pageHeader;
  this.gradeForm = gradeForm;
  this.handleGetGradesError = this.handleGetGradesError.bind(this);
  this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  this.createGrade = this.createGrade.bind(this);
  this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
  this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var total = 0;
    for(var k = 0; k < grades.length; k++){
      total += grades[k].grade;
    }
    var newAverage = total / grades.length;
    this.pageHeader.updateAverage(newAverage);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "LtCNRO4c"
      },
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess,
    })
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);//here last.4
  }
  createGrade(name, course, grade){
    console.log(name, course, grade);
  }
  handleCreateGradeError(error){
    console.error(error);
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
}
