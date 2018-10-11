import newsSection from './newsSection.js'
import {fnNewsListTemplate, fnNewsCompanyList} from '../templates/news.js'

document.addEventListener("DOMContentLoaded", () => {
    const news = new newsSection();

    news.init(fnNewsListTemplate, fnNewsCompanyList);
});