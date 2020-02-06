class App{
  constructor(gradeTable){
  this.gradeTable = gradeTable;
  this.handleGetGradesError = this.handleGetGradesError.bind(this);
  this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  this.getGrades = getGrades;
  this.start = start;

  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "",
      error: handleGetGradesError,
      success: handleGetGradesSuccess,
    })
  }
  start(){
    this.getGrades();
  }

}
