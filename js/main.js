import NewsSection from './NewsSection.js';
import { title, newsNavigation, arrowBtn } from './element.js';
import { fnNewsListTemplate, fnNewsCompanyList } from '../templates/news.js';
import { newslist } from '../data/newslist.js';

document.addEventListener('DOMContentLoaded', () => {
  const news = new NewsSection(newslist);
  news.init(fnNewsListTemplate, fnNewsCompanyList);

  newsNavigation.addEventListener('click', function({ target }) {
    const selectedNode = target.nodeName;

    if (!selectedNode === 'LI') return;
    news.selectNews(target.className);
  });

  arrowBtn.addEventListener('click', function(e) {
    const arrowBtnClassNames = e.target.parentNode.className;
    const bArrowBtn = arrowBtnClassNames === 'left' || arrowBtnClassNames === 'right';
    if (!bArrowBtn) return;
  });
});
