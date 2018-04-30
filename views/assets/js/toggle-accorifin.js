(function(){
  'use strict';
  const a=['click','touchstart'];
  document.addEventListener(
    'DOMContentLoaded',
    function(){
      var b=document.querySelectorAll('.accordions');
      [].forEach.call(b,function(b){
        var c=b.querySelectorAll('.accordion');
        [].forEach.call(c,function(c){
          a.forEach((a)=>{
            c.querySelector('.toggle, [data-action="toggle"]')
            .addEventListener(a,(a)=>{
              if(a.preventDefault(),!c.classList.contains('is-active')){
                let a=b.querySelector('.accordion.is-active');
                a&&a.classList.remove('is-active'),c.classList.add('is-active')}else c.classList.remove('is-active')})})})})})})();