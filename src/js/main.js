import reqwest from 'reqwest'



var shareFn = share('Interactive title', 'http://gu.com/p/URL', '#Interactive');
var el;
var data;
var comingSoonIndex = 0;

export function init(dom, context, config, mediator) {

console.log("main running")	

  var headline = document.querySelector('.immersive-main-media__headline-container');
  var mobileHeadline = document.querySelector('.article__header-info');
  if(headline) {
    headline.remove();
  }
  if(mobileHeadline) {
    mobileHeadline.remove();
  }

}
