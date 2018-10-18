import newsSection from './newsSection.js'
import { fnNewsListTemplate } from '../templates/news.js'
import { fnNewsCompanyList } from '../templates/company.js'

document.addEventListener("DOMContentLoaded", () => {
  const news = new newsSection();
  news.init({template: [fnNewsListTemplate, fnNewsCompanyList]});
});
