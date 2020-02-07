class App{
  constructor(gradeTable, pageHeader){
  this.gradeTable = gradeTable;
  this.pageHeader = pageHeader;
  this.handleGetGradesError = this.handleGetGradesError.bind(this);
  this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
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
  }
}
