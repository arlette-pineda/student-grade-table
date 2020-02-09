class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector('#t-body')
    tbody.textContent = '';
    for(var i = 0; i < grades.length; i++){
      var row = this.renderGradeRow(grades[i], this.deleteGrade);
      tbody.appendChild(row);
    }
    // if("grades parameter is true"){
    //   "p is hidden (how it is currently)"
    // } else {
    //   ""
    // }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(grades, deleteGrade){
      var newTRow = document.createElement('tr');
      var stuName = document.createElement('td');
      stuName.setAttribute('scope', 'row');
      stuName.textContent = grades.name;
      var stuCourse = document.createElement('td');
      stuCourse.textContent = grades.course;
      var stuGrade = document.createElement('td');
      stuGrade.textContent = grades.grade;
      var stuOperation = document.createElement('td');
      var tDBut = document.createElement('button');
      tDBut.setAttribute('type', 'button');
      tDBut.setAttribute('class', 'btn, btn-danger');
      tDBut.textContent = 'DELETE';
      tDBut.addEventListener('click', function(){
        deleteGrade(grades.id);
      });
      stuOperation.append(tDBut);
      newTRow.append(stuName, stuCourse, stuGrade, stuOperation);
      return newTRow;
    }
}


//
// var tableRow = document.createElement('tr');
// var tabDName = document.createElement('td');
// var tabDCourse = document.createElement('td');
