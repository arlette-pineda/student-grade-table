class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = addEventListener("submit", this.handleSubmit);
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    var formData = new FormData(event.target);
    var grade = formData.get('grade')
    var name = formData.get('name');
    var course = formData.get('course');
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
