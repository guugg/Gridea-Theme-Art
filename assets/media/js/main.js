//切换 白天 夜晚模式
$(".nav-switch-dark-mode").click(function(){
	if($(this).find("i").hasClass("icon-moon")){
		$(this).attr("title","白天模式");
		$('.nav-switch-dark-mode i').removeClass("icon-moon").addClass("icon-sun text-danger");
		$("#layout-css").attr("href", THEME_URL +"/media/css/layout-dark.css");
		$.cookie('layout-css', THEME_URL +"/media/css/layout-dark.css", { expires: 7 });
	}else{
		$(this).attr("title","夜晚模式");
		$('.nav-switch-dark-mode i').removeClass("icon-sun text-danger").addClass("icon-moon");
		$("#layout-css").attr("href","");
	    $.cookie('layout-css', "", { expires: 7 });
	}

});

// 重载函数
function hljsLoad(){
$('a[data-toggle="tooltip"],div[data-toggle="tooltip"]').tooltip();


	//灯箱去掉p标签
	$(function () {
		$(".imagesss br").each(function () {
			var xx = $(this).html();
			$(this).replaceWith(xx);
		})
	})
	//相册
	$(function () {
		$('.imagesss img').each(function (i) {
			$(this).after('<div class="list-box"><div class="col-sm-6"><div class="list-item-column card card-featured p-0 box-grid"><div class="list-content p-0"><div class="media media-16x9"><a class="media-content" href="' + $(this).attr('src') + '" data-fancybox="gallery"><img src="' + $(this).attr('src') + '" /></a></div></div></div></div></div>');
			$(this).remove();
		})
	})

	// 文章
	$(function () {
		$('.nc-light-gallery img').each(function (i) {
			$(this).after('<a href="' + $(this).attr('src') + '" data-fancybox=\"gallery\"><img src="' + $(this).attr('src') + '" /></a>');
			$(this).remove();
		})
	})

	hljs.initHighlightingOnLoad();
      $('pre code').each(function(j, block) {
        hljs.highlightBlock(block);
        var lines = $(this).text().split('\n').length - 1;
          if (lines < 4) return;  // 当行数小于4时不显示行号
          var $numbering = $('<ol/>').addClass('pre-numbering');
          $(this)
              .addClass('has-numbering')
              .parent()
              .append($numbering);
          for(i=1;i<=lines;i++) {
              $numbering.append($('<li/>').text(i));
          }
      });
//弹出垂直菜单
	$(".menu").click(function () {
		if ($(this).hasClass("cura")) {
			$(this).children(".new-sub").hide(); //当前菜单下的二级菜单隐藏
			$(".menu").removeClass("cura"); //同一级的菜单项
		} else {
			$(".menu").removeClass("cura"); //移除所有的样式
			$(this).addClass("cura"); //给当前菜单添加特定样式
			$(".menu").children(".new-sub").slideUp("fast"); //隐藏所有的二级菜单
			$(this).children(".new-sub").slideDown("fast"); //展示当前的二级菜单
		}
	});
	if (window.IS_PAGE_SINGLE == 0) {
		$(document).ready(function () {
			$("#list-home").infinitescroll({
				loading: {
					img: THEME_URL + '/media/images/loading.svg',
					msgText: "加载中...",
					finishedMsg: "—— 我是有底线的 ——"
				},
				nextSelector: ".pagenavi a",
				navSelector: ".pagenavi",
				itemSelector: "#list-home .list-box",
				animate: false,
				extraScrollPx: 20, //离网页底部多少像素时触发ajax 
			});
			$("#list-grid").infinitescroll({
				loading: {
					img: THEME_URL + '/media/images/loading.svg',
					msgText: "加载中...",
					finishedMsg: "—— 我是有底线的 ——"
				},
				nextSelector: ".pagenavi a",
				navSelector: ".pagenavi",
				itemSelector: "#list-grid .list-box",
				animate: false,
				extraScrollPx: 20, //离网页底部多少像素时触发ajax 
			});
		});
	}
/** 公告栏 */
(function (win){
     var callboarTimer;
     var callboard = $('#notice');
     var callboardUl = callboard.find('ul');
     var callboardLi = callboard.find('li');
     var liLen = callboard.find('li').length;
     var initHeight = callboardLi.first().outerHeight(true);
 
     win.autoAnimation = function (){
         if (liLen <= 1) return;
         var self = arguments.callee;
         var callboardLiFirst = callboard.find('li').first();
         callboardLiFirst.animate({
             marginTop:-initHeight
         }, 500, function (){
             clearTimeout(callboarTimer);
             callboardLiFirst.appendTo(callboardUl).css({marginTop:0});
             callboarTimer = setTimeout(self, 5000);
         });
     }
 
     callboard.mouseenter(
         function (){
             clearTimeout(callboarTimer);
         }).mouseleave(function (){
             callboarTimer = setTimeout(win.autoAnimation, 5000);
         });
 }(window));
 setTimeout(window.autoAnimation, 5000);
}
// 函数
hljsLoad();



$(".pcoded-navbar .close").on("click", function() {
	var a = $(this);
	a.parents(".card").fadeOut("slow").remove()
});
var c = $(window)[0].innerWidth;
$(".search-btn").on("click", function() {
		var d = $(this);
		$(".main-search").addClass("open");
		if (c <= 991) {
			$(".main-search .form-control").css({
				width: "90px"
			})
		} else {
			$(".main-search .form-control").css({
				width: "150px"
			})
		}
	});
	$(".search-close").on("click", function() {
		var d = $(this);
		$(".main-search").removeClass("open");
		$(".main-search .form-control").css({
			width: "0"
		})
	});
	$(".pop-search").on("click", function() {
		$(".search-bar").slideToggle("fast");
		$(".search-bar input").focus();
		$(".collapse").show();

	});

	$(".search-bar .close").on("click", function() {
		$(".search-bar").slideToggle("fast")
	});
	if (c <= 991) {
		$(".main-search").addClass("open");
		$(".main-search .form-control").css({
			width: "100px"
		})
	}
$("#mobile-collapse").on("click", function() {
		if (c > 991) {
			$(".pcoded-navbar:not(.theme-horizontal)").toggleClass("navbar-collapsed")
		}
		$("#recommended_posts").css({
		    "width":"100%"
		})
});
$("#mobile-collapse,#mobile-collapse1").click(function(b) {
	var a = $(window)[0].innerWidth;
	console.log(a);
	if (a < 992) {
		$(".pcoded-navbar").removeClass("navbar-collapsed");
		$(".pcoded-navbar").toggleClass("mob-open");
		$("#content").addClass("mobile-overlay");
		b.stopPropagation()
	}
});
$(window).ready(function() {
	var a = $(window)[0].innerWidth;
	/*$(".pcoded-navbar").on("click tap", function(b) {
		b.stopPropagation()
	});*/
	$(".pcoded-main-container,.pcoded-header").on("click", function() {
		if (a < 992) {
			if ($(".pcoded-navbar").hasClass("mob-open") == true) {
				$(".pcoded-navbar").removeClass("mob-open");
				$("#content:before").removeClass("mobile-overlay");
				$("#mobile-collapse,#mobile-collapse1").removeClass("on")
			}
		}
	})
});
$(window).scroll(function() {
	if (!$(".pcoded-header").hasClass("headerpos-fixed")) {
		if ($(this).scrollTop() > 60) {
			$(".pcoded-navbar.menupos-fixed").css("position", "fixed");
			$(".pcoded-navbar.menupos-fixed").css("transition", "none");
			$(".pcoded-navbar.menupos-fixed").css("margin-top", "0px")
		} else {
			$(".pcoded-navbar.menupos-fixed").removeAttr("style");
			$(".pcoded-navbar.menupos-fixed").css("position", "absolute");
			$(".pcoded-navbar.menupos-fixed").css("margin-top", "60px")
		}
	}
	if ($("#body").hasClass("box-layout")) {
		if ($(this).scrollTop() > 60) {
			$(".pcoded-navbar").css("position", "fixed");
			$(".pcoded-navbar").css("transition", "none");
			$(".pcoded-navbar").css("margin-top", "0px");
			$(".pcoded-navbar").css("height", "100vh");
			$(".pcoded-navbar").css("border-radius", "0px")
		} else {
			$(".pcoded-navbar").removeAttr("style");
			$(".pcoded-navbar").css("position", "absolute");
			$(".pcoded-navbar").css("margin-top", "50px")
		}
	}
	
});
$("#more-details").on("click", function() {
	$("#nav-user-link").slideToggle()
});
$(".mob-toggler").on("click", function() {
		$(".pcoded-header > .collapse,.pcoded-header > .container > .collapse").toggleClass("d-flex");
	});
$(".pcoded-submenu-click").on("click",function(){
	if($(this).next().attr("data") == 'off'){
		$(this).next().slideDown()
		$(this).next().attr("data","on");
		$(this).addClass("has-ripple");
		$(this).parent().addClass("pcoded-trigger");
	}else{
		$(this).next().slideUp()
		$(this).next().attr("data","off");
		$(this).removeClass("has-ripple");
		$(this).parent().removeClass("pcoded-trigger");
	}
});
$(".menu-item-object-custom a , .pcoded-submenu a").on("click",function(){
	$(".pcoded-navbar").removeClass("mob-open");
})
//目录
var headerEl = 'h2,h3,h4',  //headers 
	content = '.nc-light-gallery',//文章容器
	idArr = {};  //标题数组以确定是否增加索引id
tocbot.init({
	tocSelector: '.toc',
	contentSelector: content,
	headingSelector: headerEl,
	scrollSmooth: true,
});

// 自定义
$(function() {
    $(document).pjax('a[target!=_blank]:not(a[target="_blank"],a[no-pjax])', '#content', {
      fragment:'#content', timeout:6000
    });
    $(document).on('submit', 'form', function (event) {
      $.pjax.submit(event, '#content', {fragment:'#content', timeout:6000});
    });
    $(document).on('pjax:send', function() {
       //载入动画
			$(".loader-bg").show();
			tocbot.destroy()
    });
    $(document).on('pjax:complete', function() {
      //需要重载的插件,载入动画结束
      $(".loader-bg").hide();
      hljsLoino();
			hljsLoad();
			tocbot.refresh()
      window.ENCODE_URI_COMPONENT_TITLE = document.title; 
      window.ENCODE_URI_COMPONENT_LINK = this.location.href;
    });
});