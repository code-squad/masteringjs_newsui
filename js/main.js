import newsSection from './newsSection.js'
import {fnNewsListTemplate} from '../news.js'
import {getNewsList} from '../data/newslist.js'

document.addEventListener("DOMContentLoaded", () => {
    const allNewsList = getNewsList();
    const initArticle = allNewsList[0];

    const newsJob = new NewsJob(allNewsList);
    const eventBind = new EventBind(newsJob, allNewsList);

    const news = new newsSection();
    news.init(fnNewsListTemplate(initArticle),  newsJob);

    eventBind.bindCompanyListClickEvent(document.querySelector("ul.newsNavigation"), news.getArticleTemplate, news);

    eventBind.bindLeftArrowClickEvent(document.querySelector("div.left"), news.getArticleTemplate, news)
    eventBind.bindRightArrowClickEvent(document.querySelector("div.right"), news.getArticleTemplate, news)
});

const NewsJob = class {
    constructor(newsListArr ){
        this.newsListArr = newsListArr ? newsListArr : [];
    }

    getAllCompanyArr(){
        const retArr = [];
        this.newsListArr.forEach(element => {
            const objCompany = {};
            objCompany.id = element.id;
            objCompany.company = element.company;
            retArr.push(objCompany);
        });

        return retArr;
    }

    getNewsTemplateWithID(companyID){
        let retNews = "";
        let chosenIndex = 0;
        this.newsListArr.forEach(element => {
            if(element.id === companyID){
                retNews = element;
                retNews.index = chosenIndex;
                return true;
            }
            chosenIndex++;
        });

        return retNews;
    }
    
    getNewTemplateWithArrowEvent(arrowFlag, newsPageInfo){
        const pageNum = newsPageInfo.PAGE;
        //> - right
        if(arrowFlag === "R"){
            return (pageNum + 1) >= newsPageInfo.LAST ? newsPageInfo.FIRST : pageNum + 1;
        }else if(arrowFlag === "L"){
        //< - left
            return (pageNum - 1) <= newsPageInfo.FIRST ? newsPageInfo.LAST : pageNum - 1;
        }else{
            return -1;
        }
    }
}

const EventBind = class {
    constructor(newsJob, allNewsList){
        this.newsJob = newsJob;
        this.allNewsList = allNewsList;
    }

    init(){
    }

    bindCompanyListClickEvent(targetObj, nextFunc, thisBind = null){
        targetObj.addEventListener("click",(evt) => {
            const targetObjID = evt.target.dataset.id;
            if(thisBind){
                nextFunc.call(thisBind, targetObjID);
            }else{
                nextFunc(targetObjID);
            }
        });
    }

    bindLeftArrowClickEvent(targetObj, nextFunc, thisBind = null){
        
        targetObj.addEventListener("click",(evt) => {
            const targetPageNum = this.newsJob.getNewTemplateWithArrowEvent('L', thisBind.getPageInfo())
            const targetObjID = this.allNewsList[targetPageNum].id;
            if(targetObjID && thisBind){
                nextFunc.call(thisBind, targetObjID);
            }else{
                return;
            }
        });
    }

    bindRightArrowClickEvent(targetObj, nextFunc, thisBind = null){
        
        targetObj.addEventListener("click",(evt) => {
            const targetPageNum = this.newsJob.getNewTemplateWithArrowEvent('R', thisBind.getPageInfo())
            const targetObjID = this.allNewsList[targetPageNum].id;
            if(targetObjID && thisBind){
                nextFunc.call(thisBind, targetObjID);
            }else{
                return;
            }
        });
    }

}