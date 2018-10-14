const fnNewsListTemplate = ({logoImgUrl, company, thumbnews:{imageUrl}, thumbnews:{text}, newslist}) => {
    return `<div class="title">
    <div class="logo-wrap">
        <img class="company" src="${logoImgUrl}" alt="${company}">
    </div>
        <button> <a href="#">X</a> </button>
    </div>
    <div class="newsList">
        <div class="img-title-wrap">
            <img src="${imageUrl}" alt="">
            <div class="title-desc">${text}</div>
        </div>
        <ul>
         ${newslist.reduce((html, newsTitle) => {
             return html + '<li>' + newsTitle + '</li>';
         }, "")}
        </ul>
    </div>`
};

const fnNewsCompanyList = (newsList, newsId) => {
    return newsList.map((news) => {
        return `<li ${news.id === newsId ? 'class="selection"' : ''}>${news.company}</li>`;
    });
};


export {fnNewsListTemplate, fnNewsCompanyList}

