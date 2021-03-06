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
  this.deleteGrade = this.deleteGrade.bind(this);
  this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
  this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
    var newAverage;
    if(grades.length === 0){
      newAverage = "N/A";
    } else {
     newAverage = total / grades.length;
    }
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
  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      url: "http://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade,
      },
      headers: {
        "X-Access-Token": "LtCNRO4c"
      },
      error: this.handleCreateGradeError,
      success: this.handleCreateGradeSuccess,
    })
  }
  handleCreateGradeError(error){
    console.error(error);
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
  deleteGrade(id){
    $.ajax({
      method: "DELETE",
      url: "http://sgt.lfzprototypes.com/api/grades/" + id,
      headers: {
        "X-Access-Token": "LtCNRO4c"
      },
      error: this.handleDeleteGradeError,
      success: this.handleDeleteGradeSuccess,
    })
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
}
