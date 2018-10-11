import {newslist as newsList} from '../data/newslist.js';

export default class newsSection {
    constructor() {
    }

    init(fnNewsListTemplate, fnNewsCompanyList) {
        document.querySelector('.content').innerHTML = fnNewsListTemplate(newsList[0]);
        document.querySelector('.newsNavigation').innerHTML = fnNewsCompanyList(newsList).join('\n');
    }

}
