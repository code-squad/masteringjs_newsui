const fnNewsListTemplate = ({ logoImgUrl, company, thumbnews: { imageUrl, text }, newslist }) => {
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
         ${newslist.reduce((html, newsTitle) => `${html}<li>${newsTitle}</li>`, '')}
        </ul>
    </div>`;
};

const fnNewsCompanyList = (newslist) => {
  return newslist.reduce((html, { id, company }) => `${html}<li class="${id}">${company}</li>`, '');
};

export { fnNewsListTemplate, fnNewsCompanyList };
