var urlP = window.location.pathname
var linkList = $('.shadow-nav .level-item a')
linkList.forEach(function(item){
  if($(item).attr('href').indexOf(urlP)>=0){
    $(item).addClass('active')
  }
})