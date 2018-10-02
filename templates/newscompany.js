const fnNewsCompanyList = (newslist) => {
 return `${newslist.reduce((html, news) => {
 return `${html}<li><a href="http://naver.com" alt="${news.company}">${news.company}</a></li>`;
  }, "")}`;
}


export {fnNewsCompanyList}

