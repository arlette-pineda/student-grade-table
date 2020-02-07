class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    var formData = new FormData(event.target);
    var sGrade = formData.get('grades.grade')
    var sName = formData.get('grades.name');
    var sCourse = formData.get('grades.course');
    this.createGrade(sGrade, sName, sCourse);
    event.target.reset();
  }
}
