class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    var theBadge = document.querySelector('.badge');
    theBadge.textContent = newAverage;
  }
}
