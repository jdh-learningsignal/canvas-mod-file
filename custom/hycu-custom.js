////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// GLOBAL NAVIGATION START //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

//로고 링크 URL 변경
//$(".ic-app-header__logomark").attr("href", "new dashboard");

// 대시보드 숨기기
$("#global_nav_dashboard_link").hide();

// 달력 숨기기
$("#global_nav_calendar_link").hide();

// 과목 숨기기(아직 적용 안함)
$("#global_nav_courses_link").hide();

// 받은편지함>메세지함
$("#global_nav_conversations_link .menu-item__text").text("메세지함");

// admin>관리자
$("#global_nav_accounts_link .menu-item__text").text("관리자");


// 한사대로 링크
(function () {
  'use strict';
  // configure links
  const links = [
    {
      title: "한사대로",
      icon_svg: 'https://lmspub.hycu.ac.kr/images/svg-icons/svg_icon_hycu_hansadero.svg',
      href: 'https://road.hycu.ac.kr/?display=borderless',
      target: '_blank'
    }, // ready for another
  ];
  // leave this alone
  const globalNavCustomLinks=e=>{let t=(e,t)=>{e.setAttribute("id",`global_nav_${t}_svg`),e.setAttribute("class","ic-icon-svg menu-item__icon ic-icon-svg--apps svg-icon-help ic-icon-svg-custom-tray"),e.getAttribute("height")>"32px"&&e.removeAttribute("height"),e.getAttribute("width")>"32px"&&e.removeAttribute("width")};e.forEach(e=>{const i=e.title.replace(/\W/g,"_").toLowerCase();var n=$("<li>",{id:`global_nav_${i}_link`,class:"ic-app-header__menu-list-item",html:`<a id="global_nav_${i}_link" role="button" href="${e.href}" target="${e.target}" class="ic-app-header__menu-list-link">\n            <div class="menu-item-icon-container" role="presentation"><span class="svg-${i}-holder"></span></div>\n            <div class="menu-item__text">${e.title}</div></a>`});if(1==/^icon-[a-z]/.test(e.icon_svg))n.find(`.svg-${i}-holder`).append($("<div>",{id:`global_nav_${i}_svg`,class:"menu-item-icon-container",html:`<i class="icon-line ${e.icon_svg} gnct_inst_menu_icon"></i></div>`,role:"presentation"}));else if(/^http/.test(e.icon_svg))n.find(`.svg-${i}-holder`).load(e.icon_svg,(function(){let e=$(this).find("svg")[0];t(e,i)}));else if(/^<svg/.test(e.icon_svg)){n.find(`.svg-${i}-holder`).append($(e.icon_svg));let s=n.find(`.svg-${i}-holder`).find("svg")[0];t(s,i)}$("#menu").append(n)})};
  // handle css, you can remove or comment the next line if you're also using Global Nav Custom Tray
  !function(){if(0==document.querySelectorAll('[data-global-nav-custom-css="set"]').length){let e={"i.gnct_inst_menu_icon:before":"font-size: 32px; width: 32px; line-height: 32px;","i.gnct_inst_menu_icon":"width: 32px; height: 32px;"};if(void 0!==e&&Object.keys(e).length>0){let t=document.createElement("style");t.setAttribute("data-global-nav-custom-css","set"),document.head.appendChild(t);let i=t.sheet;Object.keys(e).forEach((function(t){i.insertRule(`${t} { ${e[t]} }`,i.cssRules.length)}))}}}();
  // add links to menu
  globalNavCustomLinks(links);
})();


// 학생일 경우 admin 메뉴 노출 안함
if ($.inArray('teacher', ENV['current_user_roles']) > -1 || $.inArray('admin', ENV['current_user_roles']) > -1){
  //alert(ENV['current_user_roles']);
}else{
  
}

if (window.location.pathname=="/"){
  //alert(window.location.pathname);
  // 내 강의실 링크
}

/** 과목 내비게이션에 배지 추가 -> 나중에 ajax로 변경 필요 **/
if (location.href.includes("courses")) { // 과목 페이지인 경우에만 배지 코드 동작
  $("#section-tabs > li > .context_external_tool_31").append('<b class="nav-badge">1</b>');
  $("#section-tabs > li > .context_external_tool_38").append('<b class="nav-badge">3</b>');
}

//#section-tabs > li > .context_external_tool_31 {color: #7d5dc6; font-weight: bold;}
//#section-tabs > li > .context_external_tool_31.active {background: #7d5dc6;color: #fff;}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// GLOBAL NAVIGATION END //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


/** 순정 캔버스의 과목 홈으로 들어왔을 경우 redirect **/
// if (/^[0-9]*$/.exec(location.pathname.replace("/courses/", "").replace(/\//gi, ""))) {
//   location.pathname = location.pathname + "/external_tools/30";
// }

/*
//alert(ENV['current_user']['display_name']);
var courseHome = new RegExp('/courses/[0-9]');
if (courseHome.test(window.location.pathname)){
  //alert('a'+window.location.pathname);
}else{
  //alert(window.location.pathname);
}
Set courseHome = Nothing;
*/
/*
(function() {    
    'use strict';    
    var nameOfMagicPage = 'zzz_new_page';    
    var magicPageRegex = new RegExp('/courses/[0-9]+/pages/' + nameOfMagicPage + '/edit');    
    
    if (magicPageRegex.test(window.location.pathname)) {        
        var el = document.getElementById('title');        
        if (el) {            
            el.value = '';        
        }    
    }
})();
*/

//////////////////////////////////////////////////////////////////////////
/////////////////////////// 라이너스 추가 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////

$(window).load(() => {
  // Canvas resize
  if (!(location.href.replace(/\//gi, "").includes("external_tools29") || location.href.replace(/\//gi, "").includes("external_tools40"))) {
    $("#tool_content").css("height", "207%");
  }
  $("#left-side").height("6645px");

  // dimmed 레이어 추가
  $('body').append('<div class="dimmed"id="dimmed-top"style="position:absolute; top: 0px; left: 0px; width: 500%; height: 72px; z-index: 100; opacity: 0.5; background-color: rgb(0, 0, 0); display: none;"></div>');
  $('body').append('<div class="dimmed"id="dimmed-bottom"style="position:absolute;top:2673.5px;left:300px;width:1125.5px;height:2000px;z-index:100;opacity:0.5;background-color:rgb(0,0,0); display: none;"></div>');
  $('body').append('<div class="dimmed"id="dimmed-left"style="position:absolute; top: 72px; left: 0px; width: 300px; height: 500%; z-index: 100; opacity: 0.5; background-color: rgb(0, 0, 0); display: none;"></div>');
  $('body').append('<div class="dimmed"id="dimmed-right"style="position:absolute; top: 72px; left: 1426px; width: 3000px; height: 500%; z-index: 100; opacity: 0.5; background-color: rgb(0, 0, 0); display: none;"></div>');

  /** 내강의실 클릭 시 아이콘 선택 이미지로 변경 **/
  if (location.href.replace(/\//gi, "") === "https:lmspub.hycu.ac.kraccounts1external_tools42?launch_type=global_navigation") {
    $("#context_external_tool_42_menu_item a img").attr("src", "https://lmspub.hycu.ac.kr/images/svg-icons/svg_icon_hycu_mylecture_a.png");
  }

  /** 대시보드로 이동 시 내강의실로 리다이렉트 **/
  if (location.href.replace(/\//gi, "") === "https:lmspub.hycu.ac.kr") {
    location.href = "https://lmspub.hycu.ac.kr/accounts/1/external_tools/42?launch_type=global_navigation";
  }

  /** 과목 홈 링크 수정 **/
  if (location.href.replace(/\//gi, "").replace(/\?/gi, "") == "https:lmspub.hycu.ac.kraccounts1") {
    $("table tr").find("td:first").find("a").each((index, item) => {
        $(item).attr("href", $(item).attr("href") + "/external_tools/30");
    });
  }

  /** dimmed 처리 이벤트 리스너 */
  window.addEventListener('message', (e) => {
    console.log(e);
    console.log(e.data);
    if (e.data.functionName == 'showDimmed') {
      setTimeout(function() {
        window[e.data.functionName]();
      }, 200);
    } else {
      window[e.data.functionName]();
    }
  });
});

// 글로벌 과목 셀렉트박스 현재 과목값으로 변경
if (location.href.replace(/\//gi, "").replace(/\?/gi, "").includes("https:lmspub.hycu.ac.krcourses")) {
  $("#course_toggle_top").val("https://lmspub.hycu.ac.kr/courses/" + location.href.split("/")[4] + "/external_tools/30");
}

/** info & help 추가 **/
(function () {
    $('.ic-app-crumbs').append(
        '<div id="info_dialog" class="dialog" style="float:left; background-color:#fff;width: 320px;">' +
        '<span id="info_close" class="dialog__close"></span>' +
        '<img src="https://lmspub.hycu.ac.kr/images/temp/Info.png">' +
        '</div>');
    $('.ic-app-crumbs').append(
        '<div id="help_dialog" class="dialog" style="float:left; background-color:#fff;width: 320px;">' +
        '<span id="help_close" class="dialog__close"></span>' +
        '<img src="https://lmspub.hycu.ac.kr/images/temp/Help.png" >' +
        '</div>');

    const infoDialogBox = $('#info_dialog'),
        infoTrigger = $('#info_top'),
        infoDialogClose = $('#info_close'),
        helpDialogBox = $('#help_dialog'),
        helpTrigger = $('#help_top'),
        helpDialogClose = $('#help_close'),
        dialogContent = $('.dialog__content'),
        dialogAction = $('.dialog__action');

    infoTrigger.on('click', (e) => {
        infoDialogBox.toggleClass('dialog--active');
        helpDialogBox.removeClass('dialog--active');
        e.stopPropagation();
    });
    infoDialogClose.on('click', () => {
        infoDialogBox.removeClass('dialog--active');
        e.stopPropagation();
    });

    helpTrigger.on('click', (e) => {
      helpDialogBox.toggleClass('dialog--active');
      infoDialogBox.removeClass('dialog--active');
      e.stopPropagation();
    });
    helpDialogClose.on('click', () => {
        helpDialogBox.removeClass('dialog--active');
        e.stopPropagation();
    });

    $(document).on("click", (e) => {
        if ($(e.target).is(infoDialogBox) === false &&
            $(e.target).is(dialogContent) === false &&
            $(e.target).is(dialogAction) === false) {
            infoDialogBox.removeClass("dialog--active");
        }

        if ($(e.target).is(helpDialogBox) === false &&
            $(e.target).is(dialogContent) === false &&
            $(e.target).is(dialogAction) === false) {
            helpDialogBox.removeClass("dialog--active");
        }
    });
})();

/** dimmed 처리 함수 **/
function showDimmed() {
    $('.dimmed').show();
}

function hideDimmed() {
    $('.dimmed').hide();
}
