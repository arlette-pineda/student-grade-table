class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    this.tableElement.querySelector('#t-body').textContent = '';
    for(var i = 0; i < grades.length; i++){
      var newTRow = document.createElement('tr');
      var stuName = document.createElement('td');
      stuName.textContent = grades[i].name;
      var stuCourse = document.createElement('td');
      stuCourse.textContent = grades[i].course;
      var stuGrade = document.createElement('td');
      stuGrade.textContent = grades[i].grade;
      newTRow.append(stuName, stuCourse, stuGrade);
      this.tableElement.appendChild(newTRow);
      document.querySelector('thead').classList.add('thead-dark');
      // this.tableElement.classList.add('table-striped');
    }
  }
}
