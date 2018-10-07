const vm = new Vue({
  el: "#qa", 
    data: {
      q1: null,
      q2: null,
      q3: null,
      a: "えのき"
    }
})


$(function(){
  var topBtn=$('#pageTop');
  topBtn.hide();
  
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    } 
  });
  
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});
