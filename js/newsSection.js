import { title, newsNavigation, arrowBtn } from './element.js';
import { fnNewsListTemplate, fnNewsCompanyList } from '../templates/news.js';

export default class NewsSection {
  constructor(newsList) {
    this.newsList = newsList;
  }

  init(fnNewsListTemplate, fnNewsCompanyList) {
    const newsList = this.newsList;

    this.renderer(title, fnNewsListTemplate(newsList[0]));
    this.renderer(newsNavigation, fnNewsCompanyList(newsList));
  }

  renderer(target, DOM) {
    target.innerHTML = DOM;
  }
}
