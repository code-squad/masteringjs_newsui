import { title, newsNavigation, arrowBtn } from './element.js';
import { fnNewsListTemplate, fnNewsCompanyList } from '../templates/news.js';

export default class NewsSection {
  constructor(newsList) {
    this.newsList = newsList;
    this.selectedNews = this.newsList[0];
  }

  init(fnNewsListTemplate, fnNewsCompanyList) {
    this.renderer(title, fnNewsListTemplate(this.selectedNews));
    this.renderer(newsNavigation, fnNewsCompanyList(this.newsList));
  }

  renderer(target, DOM) {
    target.innerHTML = DOM;
  }

  findNews() {}

  selectNews(selectedId) {
    this.selectedNews = this.newsList.find(({ id }) => id === selectedId);

    this.renderer(title, fnNewsListTemplate(this.selectedNews));
  }
}
