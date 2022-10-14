

// 모바일 메뉴 
$('.mobileNav').on('click',function(){
const $this = $(this);
$('header').toggleClass('active');

if($('header').hasClass('active') === true){
  hamburg();
}else {close();}

$('section').click(function(){
  $('header').removeClass('active');
  close();
});

function close(){
  $this.children().attr('class', 'xi-bars xi-2x');
}
function hamburg(){
  $this.children().attr('class', 'xi-close xi-2x');
}
});





// 클릭
var menu = $('nav li');
var contents = $('section');

menu.on('click',function(e){
e.preventDefault();
var target = $($(this).find('a').attr('href'));
$('html, body').animate({
  scrollTop: target.offset().top
},300);
});

// 스크롤
$(window).on('scroll',function(){
  scrollTop = $(this).scrollTop();

if(scrollTop>0){
$('nav ul').addClass('navActive');
} else{
  $('nav ul').removeClass('navActive');
}

for(var i=0; i< contents.length; i++){
  if(scrollTop > contents.eq(i).offset().top - 30){
    menu.eq(i).addClass('on').siblings().removeClass('on');
  }
}


if(screenTop < $('#skills').offset().top){
  skillAni();
}
});



// AOS
AOS.init({
  duration: 1000
});



// 스킬
function skillAni(){
var skills = [
    {id:0, num:85},
    {id:1, num:80},
    {id:2, num:60}
];

skills.forEach((skill, i)=>{
    $({ val : 0 }).stop().animate({ val : $(skills)[i].num}, {
        step: function() {
            var aa = Math.floor(this.val);
            $('.progress-bar').eq(i).css('width',`${aa}%`);
            $('.progress-bar span').eq(i).text(`${aa}%`);
        },
        complete: function() {
            var bb = Math.floor(this.val);
            $('.progress-bar').eq(i).css('width',`${bb}%`);
            $('.progress-bar span').eq(i).text(`${bb}%`);
        },
        duration:800
    });
});
};




//포트폴리오 팝업
let win;
function openWindow(wth){
	win = window.open(
    'http://yykyeong.dothome.co.kr/temp/main.html'
    ,'winPop',
    `'toolbar=no,location=no,status=no,menubar=no,resizeable=no, scrollbars=yes,width=${wth}, height=800,left=50%,top=150'`);
}  



//포트폴리오 방향
$(window).resize(function(){
  var width =$(window).width();
  var reverseOdd = $('.oddRow .portItem:odd img');
  var reverseEven = $('.evenRow .portItem:odd img');
  if(width >= 768 && width <= 1200){
      reverseOdd.addClass('order-md-1');
      reverseEven.addClass('order-md-1');
  }
  else{
      reverseOdd.removeClass('order-md-1');
      reverseEven.removeClass('order-md-1');
  }
}).resize();


// 개인정보
$('.tabName li').click(function(){
  let activeTab = $(this).attr('data-tab');
  let tabCont = $('.tabCont');

  $('.tabName li').removeClass('tabOn');
  tabCont.removeClass('tabOn');
  $(this).addClass('tabOn');
  $('#'+ activeTab).addClass('tabOn');
})