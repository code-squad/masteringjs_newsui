import {newslist as newsList} from '../data/newslist.js';

const $ = (selectors) => {
    return document.querySelector(selectors);
};

export default class newsSection {
    constructor() {
    }

    init(fnNewsListTemplate, fnNewsCompanyList) {
        this.currentIndex = 0;

        this.expressNewsContent(this.currentIndex, fnNewsListTemplate, fnNewsCompanyList);

        $('.btn').addEventListener('click', (evt) => {
            const nextIdx = this.currentIndex + Number(evt.target.dataset.way);

            this.currentIndex = this.getNextNewsIndex(nextIdx);
            this.expressNewsContent(this.currentIndex, fnNewsListTemplate, fnNewsCompanyList);
        });

        $('.newsNavigation').addEventListener('click', (evt) => {
            const target = evt.target;

            if(target.getAttribute('name') === 'company') {
                this.currentIndex = target.dataset.newsIndex;
                this.expressNewsContent(this.currentIndex, fnNewsListTemplate, fnNewsCompanyList);
            }
        });

        $('.an_popup_cancel').addEventListener('click', (evt) => {
            console.log()
        });
    }

    getNextNewsIndex(nextIdx) {
        const lastIdx = newsList.length - 1;
        return (nextIdx < 0) ? lastIdx : (nextIdx > lastIdx) ? 0 : nextIdx;
    }

    expressNewsContent(currentIndex, fnNewsListTemplate, fnNewsCompanyList) {
        const targetNews = newsList[currentIndex];

        $('.content').innerHTML = fnNewsListTemplate(targetNews);
        $('.newsNavigation').innerHTML = fnNewsCompanyList(newsList, targetNews.id).join('\n');

        $('#del-news-button').addEventListener('click', () => {
            $('.an_popup_cancel').classList.remove('hide');
        });
    }
}