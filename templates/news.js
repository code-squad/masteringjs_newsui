const fnNewsListTemplate = ({logoImgUrl, company, id, thumbnews:{imageUrl}, thumbnews:{text}, newslist}) => {
    return `<div class="title">
    <div class="logo-wrap">
        <img class="company" src="${logoImgUrl}" alt="${company}">
    </div>
        <button id="del-news-button"
                data-news-id="${id}"> <a href="#">X</a> </button>
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
    </div>
    <div class="an_popup_cancel hide" style="display:block">
        <p class="an_pc_words">
            <span class="an_pc_name">${company}</span>을(를)<br>구독해지 하시겠습니까?</p>
            <a href="#" class="an_pc_btn" role="button">확인</a>
            <a href="#" class="an_pc_btn" role="button">취소</a>
            <a href="#" class="an_btn_close" role="button">
            <span class="blind">구독해지 닫기</span>
            <span class="an_ico_close"></span>
        </a>
    </div>`
};

const fnNewsCompanyList = (newsList, newsId) => {
    return newsList.map((news, index) => {
        return `<li name="company"
                    data-news-index="${index}"
                    ${news.id === newsId ? 'class="selection"' : ''}>${news.company}</li>`;
    });
};


export {fnNewsListTemplate, fnNewsCompanyList}

