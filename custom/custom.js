(function () {
    /** 글로벌 내비게이션 **/
    // 대시보드, 과목, 달력 숨김
    $("#global_nav_dashboard_link").parent().remove();
    $("#global_nav_courses_link").parent().remove();
    $("#global_nav_calendar_link").parent().remove();

    // locale: Admin -> 관리자, 받은 편지함 -> 메시지함
    $("#global_nav_accounts_link .menu-item__text").text("관리자");
    $("#global_nav_calendar_link .menu-item__text").text("메시지함");

    // 한사대로 링크 추가
    const links = [
        {
            title: "한사대로",
            icon_svg: 'https://instructure.github.io/instructure-icons/svg/Line/android/home_lg.svg',
            href: 'https://road.hycu.ac.kr/?display=borderless',
            target: '_blank'
        }
    ];
    const globalNavCustomLinks = e => { let t = (e, t) => { e.setAttribute("id", `global_nav_${t}_svg`), e.setAttribute("class", "ic-icon-svg menu-item__icon ic-icon-svg--apps svg-icon-help ic-icon-svg-custom-tray"), e.getAttribute("height") > "26px" && e.removeAttribute("height"), e.getAttribute("width") > "26px" && e.removeAttribute("width") }; e.forEach(e => { const i = e.title.replace(/\W/g, "_").toLowerCase(); var n = $("<li>", { id: `global_nav_${i}_link`, class: "ic-app-header__menu-list-item", html: `<a id="global_nav_${i}_link" role="button" href="${e.href}" target="${e.target}" class="ic-app-header__menu-list-link">\n            <div class="menu-item-icon-container" role="presentation"><span class="svg-${i}-holder"></span></div>\n            <div class="menu-item__text">${e.title}</div></a>` }); if (1 == /^icon-[a-z]/.test(e.icon_svg)) n.find(`.svg-${i}-holder`).append($("<div>", { id: `global_nav_${i}_svg`, class: "menu-item-icon-container", html: `<i class="icon-line ${e.icon_svg} gnct_inst_menu_icon"></i></div>`, role: "presentation" })); else if (/^http/.test(e.icon_svg)) n.find(`.svg-${i}-holder`).load(e.icon_svg, (function () { let e = $(this).find("svg")[0]; t(e, i) })); else if (/^<svg/.test(e.icon_svg)) { n.find(`.svg-${i}-holder`).append($(e.icon_svg)); let s = n.find(`.svg-${i}-holder`).find("svg")[0]; t(s, i) } $("#menu").append(n) }) };
    !function () { if (0 == document.querySelectorAll('[data-global-nav-custom-css="set"]').length) { let e = { "i.gnct_inst_menu_icon:before": "font-size: 26px; width: 26px; line-height: 26px;", "i.gnct_inst_menu_icon": "width: 26px; height: 26px;" }; if (void 0 !== e && Object.keys(e).length > 0) { let t = document.createElement("style"); t.setAttribute("data-global-nav-custom-css", "set"), document.head.appendChild(t); let i = t.sheet; Object.keys(e).forEach((function (t) { i.insertRule(`${t} { ${e[t]} }`, i.cssRules.length) })) } } }();
    globalNavCustomLinks(links);

    /** 과목 토글 박스 **/
    // api token
    const api_token = 'gk0L1EVbZU7Rd9PZQwat3DEdnTNdQ4H8HePnayfW5lTbOnWsz6AfTJwXYPYya4bN';

    // 과목 토글 박스 리스트 추가
    function getCourses(callback) {
        return new Promise(function (resolve, reject) {
            $.get(document.location.origin + '/api/v1/users/' + ENV.current_user.id + '/courses?access_token=' + api_token, function (response) {
                resolve(response);
            });
        });
    }
    let options = '';
    if (!location.href.includes("courses")) {
        options = '<option>과목선택</option>';
    }
    const $course_toggle = $("#course_toggle_top");
    getCourses().then(function (courses) {
        options = options + courses.map((item, index) => '<option value="' + document.location.origin + '/courses/'
            + item.id + '">' + item.name + '</option>');
        $course_toggle.html(options);
        $course_toggle.val(location.href);
    });


    /** info & help 추가 **/
    // 매뉴얼
    $('.ic-app-nav-toggle-and-crumbs').append(
        '<div class="dialog">' +
        '<span class="dialog__close">&#x2715;</span>' +
        '<img src="https://www3.hycu.ac.kr/canvas/baram/baram_1.png" width="300px">' +
        '</div>');

    // info & help
    const dialogBox = $('.dialog'),
        infoTrigger = $('#info_top'),
        helpTrigger = $('#help_top'),
        dialogClose = $('.dialog__close'),
        dialogContent = $('.dialog__content'),
        dialogAction = $('.dialog__action');

    infoTrigger.on('click', function (e) {
        dialogBox.toggleClass('dialog--active');
        e.stopPropagation();
    });

    helpTrigger.on('click', function (e) {
        dialogBox.toggleClass('dialog--active');
        e.stopPropagation();
    });
    dialogClose.on('click', function () {
        dialogBox.removeClass('dialog--active');
    });
    $(document).on("click", function (e) {
        if ($(e.target).is(dialogBox) === false &&
            $(e.target).is(dialogContent) === false &&
            $(e.target).is(dialogAction) === false) {
            dialogBox.removeClass("dialog--active");
        }
    });

    /** 과목 내비게이션(LTI)에 배지추가  **/
    if (location.href.includes("courses")) {
        $("#section-tabs > li > .discussions").append('<b class="nav-badge">1</b>');
        $("#section-tabs > li > .quizzes").append('<b class="nav-badge">3</b>');
    }
})();
