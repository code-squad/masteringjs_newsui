import NewsSection from './NewsSection.js';
import { title, newsNavigation, arrowBtn } from './element.js';
import { fnNewsListTemplate, fnNewsCompanyList } from '../templates/news.js';
import { newslist } from '../data/newslist.js';

document.addEventListener('DOMContentLoaded', () => {
  const news = new NewsSection(newslist);
  news.init(fnNewsListTemplate, fnNewsCompanyList);

  newsNavigation.addEventListener('click', function(e) {
    console.log(e);
  });
  arrowBtn.addEventListener('click', function(e) {
    console.log(e);
  });
});
