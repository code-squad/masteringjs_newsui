import { newslist } from '../data/newslist.js'

export default class newsSection {
  constructor() {
    this.newsCompanyList = newslist;
  }
  init({template}) {
    const [fnNewsListTemplate, fnNewsCompanyList] = template;
    this.newsTemplate = fnNewsListTemplate;
    this.renderNewsCompanyList(fnNewsCompanyList);
    this.renderNewsList();
    this.renderEventToButton();
  }
  renderNewsList() {
    const newsContent = document.querySelector('.content');
    newsContent.innerHTML = this.newsTemplate(this.newsCompanyList[this.getActiveClass()]);
  }
  renderNewsCompanyList(fnNewsCompanyList) {
    const newsNavigation = document.querySelector('.newsNavigation');
    const newsCompanyEl = this.newsCompanyList.map((news, index) => {
      return fnNewsCompanyList.call(this, news);
    }).join("");
    newsNavigation.innerHTML = newsCompanyEl;
    this.addActiveClass(0);
    newsNavigation.addEventListener('click', this.delegateEventToChild.bind(this));
  }
  delegateEventToChild(evt) {
    if (evt.target.tagName === 'A') {
      const companyName = evt.target.textContent;
      const index = this.newsCompanyList.findIndex((company) => {
        return company.company === companyName;
      })
      this.selectCompany(index);
    }
  }
  selectCompany(index) {
    this.removeActiveClass();
    this.addActiveClass(index);
    this.renderNewsList();
  }
  getActiveClass() {
    const companyList = document.querySelectorAll('.newsNavigation > li');
    let activeIndex;
    companyList.forEach((item, index) => {
      if (item.classList.contains('active')) {
        activeIndex = index;
      }
    })
    return activeIndex;
  }
  addActiveClass(index) {
    const newsNavigation = document.querySelector('.newsNavigation');
    const activeCompany = newsNavigation.children[index];
    activeCompany.classList.add("active");
  }
  removeActiveClass() {
    const activeCompany = document.querySelector('.active');
    activeCompany.classList.remove("active");
  }
  renderEventToButton() {
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');
    leftBtn.addEventListener('click', () => this.goToBefore.call(this));
    rightBtn.addEventListener('click', () => this.goToAfter.call(this));
  }
  goToBefore() {
    let activeIndex = this.getActiveClass();
    this.removeActiveClass();
    if (activeIndex > 0) {
      this.addActiveClass(activeIndex - 1);
    } else {
      this.addActiveClass(this.newsCompanyList.length - 1);
    }
    this.renderNewsList();
  }
  goToAfter() {
    let activeIndex = this.getActiveClass();
    this.removeActiveClass();
    if (activeIndex < this.newsCompanyList.length - 1) {
      this.addActiveClass(activeIndex + 1);
    } else {
      this.addActiveClass(0);
    }
    this.renderNewsList();
  }
}
