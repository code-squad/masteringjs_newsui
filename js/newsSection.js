import {newslist as newsList} from '../data/newslist.js';

const $ = (selectors) => {
    return document.querySelector(selectors);
};

export default class newsSection {
    constructor() {
    }

    init(fnNewsListTemplate, fnNewsCompanyList) {
        this.currentIndex = 0;

        newsSection.expressNewsContent(this.currentIndex, fnNewsListTemplate, fnNewsCompanyList);

        $('.btn .left a').addEventListener('click', () => {
            this.currentIndex = newsSection.getNextNewsIndex(this.currentIndex - 1);
            newsSection.expressNewsContent(this.currentIndex, fnNewsListTemplate, fnNewsCompanyList);
        });

        $('.btn .right a').addEventListener('click', () => {
            this.currentIndex = newsSection.getNextNewsIndex(this.currentIndex + 1);
            newsSection.expressNewsContent(this.currentIndex, fnNewsListTemplate, fnNewsCompanyList);
        });

        $('.newsNavigation').addEventListener('click', (evt) => {
            const target = evt.target;

            if(target.getAttribute('name') === 'company') {
                this.currentIndex = target.dataset.newsIndex;
                newsSection.expressNewsContent(this.currentIndex, fnNewsListTemplate, fnNewsCompanyList);
            }
        });
    }

    static getNextNewsIndex(nextIdx) {
        const lastIdx = newsList.length - 1;
        return (nextIdx < 0) ? lastIdx : (nextIdx > lastIdx) ? 0 : nextIdx;
    }

    static expressNewsContent(currentIndex, fnNewsListTemplate, fnNewsCompanyList) {
        const targetNews = newsList[currentIndex];

        $('.content').innerHTML = fnNewsListTemplate(targetNews);
        $('.newsNavigation').innerHTML = fnNewsCompanyList(newsList, targetNews.id).join('\n');
    }
}