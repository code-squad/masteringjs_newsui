import {newslist as newsList} from '../data/newslist.js';

const $ = (selectors) => {
    return document.querySelector(selectors);
};

export default class newsSection {
    constructor() {
    }

    init(fnNewsListTemplate, fnNewsCompanyList) {
        $('.content').innerHTML = fnNewsListTemplate(newsList[0]);
        $('.newsNavigation').innerHTML = fnNewsCompanyList(newsList).join('\n');
    }
}