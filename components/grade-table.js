class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector('#t-body')
    tbody.textContent = '';
    for(var i = 0; i < grades.length; i++){
      var newTRow = document.createElement('tr');
      var stuName = document.createElement('td');
      stuName.setAttribute('scope', 'row');
      stuName.textContent = grades[i].name;
      var stuCourse = document.createElement('td');
      stuCourse.textContent = grades[i].course;
      var stuGrade = document.createElement('td');
      stuGrade.textContent = grades[i].grade;
      newTRow.append(stuName, stuCourse, stuGrade);
      tbody.appendChild(newTRow);
      document.querySelector('thead').classList.add('thead-dark');
      this.tableElement.classList.add('table-striped');
    }
  }
}
