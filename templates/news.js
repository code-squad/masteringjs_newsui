const fnNewsListTemplate = ({logoImgUrl, company, thumbnews:{imageUrl}, thumbnews:{text}, newslist}) => {
    return `<div class="title">
    <div class="logo-wrap">
        <img class="company" src="${logoImgUrl}" alt="${company}">
    </div>
      <a href="#"><i class="fas fa-times"></i></a>
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
}


export {fnNewsListTemplate}

