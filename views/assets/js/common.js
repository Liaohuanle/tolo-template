var urlP = window.location.pathname
var linkList = $('.shadow-nav .level-item a') 
linkList = Array.isArray(linkList) ? linkList : [linkList]
linkList.forEach(function(item){
  if($(item).attr('href').indexOf(urlP)>=0){
    $(item).addClass('active')
  }
});