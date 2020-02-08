class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector('#t-body')
    tbody.textContent = '';
    for(var i = 0; i < grades.length; i++){
      this.renderGradeRow;
      this.deleteGrade;
        //where the dom creation was here
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
      var newTRow = document.createElement('tr');
      var stuName = document.createElement('td');
      stuName.setAttribute('scope', 'row');
      stuName.textContent = grades[i].name;
      var stuCourse = document.createElement('td');
      stuCourse.textContent = grades[i].course;
      var stuGrade = document.createElement('td');
      stuGrade.textContent = grades[i].grade;
      var stuOperation = document.createElement('td');
      var tDBut = document.createElement('button');
      tDBut.setAttribute('type', 'button');
      tDBut.setAttribute('class', 'btn, btn-danger');
      tDBut.textContent = 'DELETE';
      tDBut.addEventListener('click', function(){
        deleteGrade(data.id);
      });
      stuOperation.append(tDBut);
      newTRow.append(stuName, stuCourse, stuGrade, stuOperation);
      tbody.appendChild(newTRow);
      document.querySelector('thead').classList.add('thead-dark');
      this.tableElement.classList.add('table-striped');
  }
}


//
// var tableRow = document.createElement('tr');
// var tabDName = document.createElement('td');
// var tabDCourse = document.createElement('td');
