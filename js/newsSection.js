import {fnNewsListTemplate} from '../news.js'

export default class newsSection {
    constructor() {
        this.articleHTML;
        this.companyListArr;
        this.newsJob;
        this.PAGE_INFO = {
                            FIRST : 0,
                            LAST : 0,
                            PAGE : 0
                         }
    }

    init(articleHTML, newsJob) {
        this.articleHTML = articleHTML;
        if(newsJob) {
            this.newsJob = newsJob;
            this.companyListArr = newsJob.getAllCompanyArr();
        }
        //#1. 최초 기사 정보 삽입
        this.drawArticle();

        //#2. 최초 1회 신문사 리스트 삽입
        this.drawCompanyList();

        //#3. init Index Num = 0;
        this.PAGE_INFO.PAGE = 0;
        this.PAGE_INFO.LAST = this.companyListArr.length - 1;

    }
    drawArticle(newsTemplate = null){
        document.querySelector("div.title").innerHTML = newsTemplate ? newsTemplate : this.articleHTML;
    }

    getArticleTemplate(companyID){
        const newsTemplate = this.newsJob.getNewsTemplateWithID(companyID);
        this.setPageInfo(newsTemplate.index);
        this.drawArticle(fnNewsListTemplate(newsTemplate));

    }

    setPageInfo(currentPage){
        this.PAGE_INFO.PAGE = currentPage;
    }

    getPageInfo(){
        return this.PAGE_INFO;
    }

    drawCompanyList(){
        let companyListHtml="";
        this.companyListArr.forEach(element => {
            companyListHtml += `<li data-id="${element.id}">${element.company}</li>`
        });

        document.querySelector("ul.newsNavigation").innerHTML = companyListHtml;
    }
}
