!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
    $('[data-method]').append(function () {
        if (! $(this).find('form').length > 0)
            return "\n" +
                "<form action='" + $(this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" +
                "   <input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" +
                "   <input type='hidden' name='_token' value='" + $('meta[name="_token"]').attr('content') + "'>\n" +
                "</form>\n";
        else
            return "";
    })
        .removeAttr('href')
        .attr('style', 'cursor:pointer;')
        .attr('onclick', '$(this).find("form").submit();');
}

/**
 * Place any jQuery/helper plugins in here.
 */
$(function(){
    /**
     * Place the CSRF token as a header on all pages for access in AJAX requests
     */
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    /**
     * Add the data-method="delete" forms to all delete links
     */
    addDeleteForms();

    /**
     * Generic confirm form delete using Sweet Alert
     */
    $('body').on('submit', 'form[name=delete_item]', function(e){
        e.preventDefault();
        var form = this;
        var link = $('a[data-method="delete"]');
        var cancel = (link.attr('data-trans-button-cancel')) ? link.attr('data-trans-button-cancel') : "Cancel";
        var confirm = (link.attr('data-trans-button-confirm')) ? link.attr('data-trans-button-confirm') : "Yes, delete";
        var title = (link.attr('data-trans-title')) ? link.attr('data-trans-title') : "Warning";
        var text = (link.attr('data-trans-text')) ? link.attr('data-trans-text') : "Are you sure you want to delete this item?";

        swal({
            title: title,
            text: text,
            type: "warning",
            showCancelButton: true,
            cancelButtonText: cancel,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: confirm,
            closeOnConfirm: true
        }, function(confirmed) {
            if (confirmed)
                form.submit();
        });
    });

    /**
     * Bind all bootstrap tooltips
     */
    $("[data-toggle=\"tooltip\"]").tooltip();

    /**
     * Bind all bootstrap popovers
     */
    $("[data-toggle=\"popover\"]").popover();

    /**
     * This closes the popover when its clicked away from
     */
    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.1.1
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */


(function(){

	"use strict";

	//Declare root variable - window in the browser, global on the server
	var root = this,
		previous = root.Chart;

	//Occupy the global variable of Chart, and create a simple base class
	var Chart = function(context){
		var chart = this;
		this.canvas = context.canvas;

		this.ctx = context;

		//Variables global to the chart
		var computeDimension = function(element,dimension)
		{
			if (element['offset'+dimension])
			{
				return element['offset'+dimension];
			}
			else
			{
				return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
			}
		};

		var width = this.width = computeDimension(context.canvas,'Width') || context.canvas.width;
		var height = this.height = computeDimension(context.canvas,'Height') || context.canvas.height;

		this.aspectRatio = this.width / this.height;
		//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
		helpers.retinaScale(this);

		return this;
	};
	//Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			// Boolean - Whether to animate the chart
			animation: true,

			// Number - Number of animation steps
			animationSteps: 60,

			// String - Animation easing effect
			animationEasing: "easeOutQuart",

			// Boolean - If we should show the scale at all
			showScale: true,

			// Boolean - If we want to override with a hard coded scale
			scaleOverride: false,

			// ** Required if scaleOverride is true **
			// Number - The number of steps in a hard coded scale
			scaleSteps: null,
			// Number - The value jump in the hard coded scale
			scaleStepWidth: null,
			// Number - The scale starting value
			scaleStartValue: null,

			// String - Colour of the scale line
			scaleLineColor: "rgba(0,0,0,.1)",

			// Number - Pixel width of the scale line
			scaleLineWidth: 1,

			// Boolean - Whether to show labels on the scale
			scaleShowLabels: true,

			// Interpolated JS string - can access value
			scaleLabel: "<%=value%>",

			// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
			scaleIntegersOnly: true,

			// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero: false,

			// String - Scale label font declaration for the scale label
			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Scale label font size in pixels
			scaleFontSize: 12,

			// String - Scale label font weight style
			scaleFontStyle: "normal",

			// String - Scale label font colour
			scaleFontColor: "#666",

			// Boolean - whether or not the chart should be responsive and resize when the browser does.
			responsive: false,

			// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
			maintainAspectRatio: true,

			// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
			showTooltips: true,

			// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
			customTooltips: false,

			// Array - Array of string names to attach tooltip events
			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

			// String - Tooltip background colour
			tooltipFillColor: "rgba(0,0,0,0.8)",

			// String - Tooltip label font declaration for the scale label
			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip label font size in pixels
			tooltipFontSize: 14,

			// String - Tooltip font weight style
			tooltipFontStyle: "normal",

			// String - Tooltip label font colour
			tooltipFontColor: "#fff",

			// String - Tooltip title font declaration for the scale label
			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

			// Number - Tooltip title font size in pixels
			tooltipTitleFontSize: 14,

			// String - Tooltip title font weight style
			tooltipTitleFontStyle: "bold",

			// String - Tooltip title font colour
			tooltipTitleFontColor: "#fff",

			// String - Tooltip title template
			tooltipTitleTemplate: "<%= label%>",

			// Number - pixel width of padding around tooltip text
			tooltipYPadding: 6,

			// Number - pixel width of padding around tooltip text
			tooltipXPadding: 6,

			// Number - Size of the caret on the tooltip
			tooltipCaretSize: 8,

			// Number - Pixel radius of the tooltip border
			tooltipCornerRadius: 6,

			// Number - Pixel offset from point x to tooltip edge
			tooltipXOffset: 10,

			// String - Template string for single tooltips
			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

			// String - Template string for single tooltips
			multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>",

			// String - Colour behind the legend colour block
			multiTooltipKeyBackground: '#fff',

			// Array - A list of colors to use as the defaults
			segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928" ],

			// Array - A list of highlight colors to use as the defaults
			segmentHighlightColorDefaults: [ "#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150" ],

			// Function - Will fire on animation progression.
			onAnimationProgress: function(){},

			// Function - Will fire on animation completion.
			onAnimationComplete: function(){}

		}
	};

	//Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	//Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

		//-- Basic js utility methods
	var each = helpers.each = function(loopable,callback,self){
			var additionalArgs = Array.prototype.slice.call(arguments, 3);
			// Check to see if null or undefined firstly.
			if (loopable){
				if (loopable.length === +loopable.length){
					var i;
					for (i=0; i<loopable.length; i++){
						callback.apply(self,[loopable[i], i].concat(additionalArgs));
					}
				}
				else{
					for (var item in loopable){
						callback.apply(self,[loopable[item],item].concat(additionalArgs));
					}
				}
			}
		},
		clone = helpers.clone = function(obj){
			var objClone = {};
			each(obj,function(value,key){
				if (obj.hasOwnProperty(key)){
					objClone[key] = value;
				}
			});
			return objClone;
		},
		extend = helpers.extend = function(base){
			each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
				each(extensionObject,function(value,key){
					if (extensionObject.hasOwnProperty(key)){
						base[key] = value;
					}
				});
			});
			return base;
		},
		merge = helpers.merge = function(base,master){
			//Merge properties in left object over to a shallow clone of object right.
			var args = Array.prototype.slice.call(arguments,0);
			args.unshift({});
			return extend.apply(null, args);
		},
		indexOf = helpers.indexOf = function(arrayToSearch, item){
			if (Array.prototype.indexOf) {
				return arrayToSearch.indexOf(item);
			}
			else{
				for (var i = 0; i < arrayToSearch.length; i++) {
					if (arrayToSearch[i] === item) return i;
				}
				return -1;
			}
		},
		where = helpers.where = function(collection, filterCallback){
			var filtered = [];

			helpers.each(collection, function(item){
				if (filterCallback(item)){
					filtered.push(item);
				}
			});

			return filtered;
		},
		findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to start of the array
			if (!startIndex){
				startIndex = -1;
			}
			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
			// Default to end of the array
			if (!startIndex){
				startIndex = arrayToSearch.length;
			}
			for (var i = startIndex - 1; i >= 0; i--) {
				var currentItem = arrayToSearch[i];
				if (filterCallback(currentItem)){
					return currentItem;
				}
			}
		},
		inherits = helpers.inherits = function(extensions){
			//Basic javascript inheritance based on the model created in Backbone.js
			var parent = this;
			var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

			var Surrogate = function(){ this.constructor = ChartElement;};
			Surrogate.prototype = parent.prototype;
			ChartElement.prototype = new Surrogate();

			ChartElement.extend = inherits;

			if (extensions) extend(ChartElement.prototype, extensions);

			ChartElement.__super__ = parent.prototype;

			return ChartElement;
		},
		noop = helpers.noop = function(){},
		uid = helpers.uid = (function(){
			var id=0;
			return function(){
				return "chart-" + id++;
			};
		})(),
		warn = helpers.warn = function(str){
			//Method for warning of errors
			if (window.console && typeof window.console.warn === "function") console.warn(str);
		},
		amd = helpers.amd = (typeof define === 'function' && define.amd),
		//-- Math methods
		isNumber = helpers.isNumber = function(n){
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		max = helpers.max = function(array){
			return Math.max.apply( Math, array );
		},
		min = helpers.min = function(array){
			return Math.min.apply( Math, array );
		},
		cap = helpers.cap = function(valueToCap,maxValue,minValue){
			if(isNumber(maxValue)) {
				if( valueToCap > maxValue ) {
					return maxValue;
				}
			}
			else if(isNumber(minValue)){
				if ( valueToCap < minValue ){
					return minValue;
				}
			}
			return valueToCap;
		},
		getDecimalPlaces = helpers.getDecimalPlaces = function(num){
			if (num%1!==0 && isNumber(num)){
				var s = num.toString();
				if(s.indexOf("e-") < 0){
					// no exponent, e.g. 0.01
					return s.split(".")[1].length;
				}
				else if(s.indexOf(".") < 0) {
					// no decimal point, e.g. 1e-9
					return parseInt(s.split("e-")[1]);
				}
				else {
					// exponent and decimal point, e.g. 1.23e-9
					var parts = s.split(".")[1].split("e-");
					return parts[0].length + parseInt(parts[1]);
				}
			}
			else {
				return 0;
			}
		},
		toRadians = helpers.radians = function(degrees){
			return degrees * (Math.PI/180);
		},
		// Gets the angle from vertical upright to the point about a centre.
		getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
			var distanceFromXCenter = anglePoint.x - centrePoint.x,
				distanceFromYCenter = anglePoint.y - centrePoint.y,
				radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


			var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

			//If the segment is in the top left quadrant, we need to add another rotation to the angle
			if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
				angle += Math.PI*2;
			}

			return {
				angle: angle,
				distance: radialDistanceFromCenter
			};
		},
		aliasPixel = helpers.aliasPixel = function(pixelWidth){
			return (pixelWidth % 2 === 0) ? 0 : 0.5;
		},
		splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
			//Props to Rob Spencer at scaled innovation for his post on splining between points
			//http://scaledinnovation.com/analytics/splines/aboutSplines.html
			var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
				d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
				fa=t*d01/(d01+d12),// scaling factor for triangle Ta
				fb=t*d12/(d01+d12);
			return {
				inner : {
					x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
				},
				outer : {
					x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
					y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
				}
			};
		},
		calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
			return Math.floor(Math.log(val) / Math.LN10);
		},
		calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

			//Set a minimum step of two - a point at the top of the graph, and a point at the base
			var minSteps = 2,
				maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
				skipFitting = (minSteps >= maxSteps);

			// Filter out null values since these would min() to zero
			var values = [];
			each(valuesArray, function( v ){
				v == null || values.push( v );
			});
			var minValue = min(values),
			    maxValue = max(values);

			// We need some degree of separation here to calculate the scales if all the values are the same
			// Adding/minusing 0.5 will give us a range of 1.
			if (maxValue === minValue){
				maxValue += 0.5;
				// So we don't end up with a graph with a negative start value if we've said always start from zero
				if (minValue >= 0.5 && !startFromZero){
					minValue -= 0.5;
				}
				else{
					// Make up a whole number above the values
					maxValue += 0.5;
				}
			}

			var	valueRange = Math.abs(maxValue - minValue),
				rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
				graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphRange = graphMax - graphMin,
				stepValue = Math.pow(10, rangeOrderOfMagnitude),
				numberOfSteps = Math.round(graphRange / stepValue);

			//If we have more space on the graph we'll use it to give more definition to the data
			while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
				if(numberOfSteps > maxSteps){
					stepValue *=2;
					numberOfSteps = Math.round(graphRange/stepValue);
					// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
					if (numberOfSteps % 1 !== 0){
						skipFitting = true;
					}
				}
				//We can fit in double the amount of scale points on the scale
				else{
					//If user has declared ints only, and the step value isn't a decimal
					if (integersOnly && rangeOrderOfMagnitude >= 0){
						//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
						if(stepValue/2 % 1 === 0){
							stepValue /=2;
							numberOfSteps = Math.round(graphRange/stepValue);
						}
						//If it would make it a float break out of the loop
						else{
							break;
						}
					}
					//If the scale doesn't have to be an int, make the scale more granular anyway.
					else{
						stepValue /=2;
						numberOfSteps = Math.round(graphRange/stepValue);
					}

				}
			}

			if (skipFitting){
				numberOfSteps = minSteps;
				stepValue = graphRange / numberOfSteps;
			}

			return {
				steps : numberOfSteps,
				stepValue : stepValue,
				min : graphMin,
				max	: graphMin + (numberOfSteps * stepValue)
			};

		},
		/* jshint ignore:start */
		// Blows up jshint errors based on the new Function constructor
		//Templating methods
		//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
		template = helpers.template = function(templateString, valuesObject){

			// If templateString is function rather than string-template - call the function for valuesObject

			if(templateString instanceof Function){
			 	return templateString(valuesObject);
		 	}

			var cache = {};
			function tmpl(str, data){
				// Figure out if we're getting a template, or if we need to
				// load the template - and be sure to cache the result.
				var fn = !/\W/.test(str) ?
				cache[str] = cache[str] :

				// Generate a reusable function that will serve as a template
				// generator (and which will be cached).
				new Function("obj",
					"var p=[],print=function(){p.push.apply(p,arguments);};" +

					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" +

					// Convert the template into pure JavaScript
					str
						.replace(/[\r\t\n]/g, " ")
						.split("<%").join("\t")
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
						.replace(/\t=(.*?)%>/g, "',$1,'")
						.split("\t").join("');")
						.split("%>").join("p.push('")
						.split("\r").join("\\'") +
					"');}return p.join('');"
				);

				// Provide some basic currying to the user
				return data ? fn( data ) : fn;
			}
			return tmpl(templateString,valuesObject);
		},
		/* jshint ignore:end */
		generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
			var labelsArray = new Array(numberOfSteps);
			if (templateString){
				each(labelsArray,function(val,index){
					labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
				});
			}
			return labelsArray;
		},
		//--Animation methods
		//Easing functions adapted from Robert Penner's easing equations
		//http://www.robertpenner.com/easing/
		easingEffects = helpers.easingEffects = {
			linear: function (t) {
				return t;
			},
			easeInQuad: function (t) {
				return t * t;
			},
			easeOutQuad: function (t) {
				return -1 * t * (t - 2);
			},
			easeInOutQuad: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t;
				}
				return -1 / 2 * ((--t) * (t - 2) - 1);
			},
			easeInCubic: function (t) {
				return t * t * t;
			},
			easeOutCubic: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t + 1);
			},
			easeInOutCubic: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t + 2);
			},
			easeInQuart: function (t) {
				return t * t * t * t;
			},
			easeOutQuart: function (t) {
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
			},
			easeInOutQuart: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t * t * t;
				}
				return -1 / 2 * ((t -= 2) * t * t * t - 2);
			},
			easeInQuint: function (t) {
				return 1 * (t /= 1) * t * t * t * t;
			},
			easeOutQuint: function (t) {
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
			},
			easeInOutQuint: function (t) {
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * t * t * t * t * t;
				}
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
			},
			easeInSine: function (t) {
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
			},
			easeOutSine: function (t) {
				return 1 * Math.sin(t / 1 * (Math.PI / 2));
			},
			easeInOutSine: function (t) {
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
			},
			easeInExpo: function (t) {
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
			},
			easeOutExpo: function (t) {
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
			},
			easeInOutExpo: function (t) {
				if (t === 0){
					return 0;
				}
				if (t === 1){
					return 1;
				}
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * Math.pow(2, 10 * (t - 1));
				}
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
			},
			easeInCirc: function (t) {
				if (t >= 1){
					return t;
				}
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
			},
			easeOutCirc: function (t) {
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
			},
			easeInOutCirc: function (t) {
				if ((t /= 1 / 2) < 1){
					return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
				}
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
			},
			easeInElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0){
					return 0;
				}
				if ((t /= 1) == 1){
					return 1;
				}
				if (!p){
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else{
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			},
			easeOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0){
					return 0;
				}
				if ((t /= 1) == 1){
					return 1;
				}
				if (!p){
					p = 1 * 0.3;
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else{
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
			},
			easeInOutElastic: function (t) {
				var s = 1.70158;
				var p = 0;
				var a = 1;
				if (t === 0){
					return 0;
				}
				if ((t /= 1 / 2) == 2){
					return 1;
				}
				if (!p){
					p = 1 * (0.3 * 1.5);
				}
				if (a < Math.abs(1)) {
					a = 1;
					s = p / 4;
				} else {
					s = p / (2 * Math.PI) * Math.asin(1 / a);
				}
				if (t < 1){
					return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));}
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
			},
			easeInBack: function (t) {
				var s = 1.70158;
				return 1 * (t /= 1) * t * ((s + 1) * t - s);
			},
			easeOutBack: function (t) {
				var s = 1.70158;
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
			},
			easeInOutBack: function (t) {
				var s = 1.70158;
				if ((t /= 1 / 2) < 1){
					return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
				}
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
			},
			easeInBounce: function (t) {
				return 1 - easingEffects.easeOutBounce(1 - t);
			},
			easeOutBounce: function (t) {
				if ((t /= 1) < (1 / 2.75)) {
					return 1 * (7.5625 * t * t);
				} else if (t < (2 / 2.75)) {
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
				} else if (t < (2.5 / 2.75)) {
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
				} else {
					return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
				}
			},
			easeInOutBounce: function (t) {
				if (t < 1 / 2){
					return easingEffects.easeInBounce(t * 2) * 0.5;
				}
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
			}
		},
		//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		requestAnimFrame = helpers.requestAnimFrame = (function(){
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					return window.setTimeout(callback, 1000 / 60);
				};
		})(),
		cancelAnimFrame = helpers.cancelAnimFrame = (function(){
			return window.cancelAnimationFrame ||
				window.webkitCancelAnimationFrame ||
				window.mozCancelAnimationFrame ||
				window.oCancelAnimationFrame ||
				window.msCancelAnimationFrame ||
				function(callback) {
					return window.clearTimeout(callback, 1000 / 60);
				};
		})(),
		animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

			var currentStep = 0,
				easingFunction = easingEffects[easingString] || easingEffects.linear;

			var animationFrame = function(){
				currentStep++;
				var stepDecimal = currentStep/totalSteps;
				var easeDecimal = easingFunction(stepDecimal);

				callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
				onProgress.call(chartInstance,easeDecimal,stepDecimal);
				if (currentStep < totalSteps){
					chartInstance.animationFrame = requestAnimFrame(animationFrame);
				} else{
					onComplete.apply(chartInstance);
				}
			};
			requestAnimFrame(animationFrame);
		},
		//-- DOM methods
		getRelativePosition = helpers.getRelativePosition = function(evt){
			var mouseX, mouseY;
			var e = evt.originalEvent || evt,
				canvas = evt.currentTarget || evt.srcElement,
				boundingRect = canvas.getBoundingClientRect();

			if (e.touches){
				mouseX = e.touches[0].clientX - boundingRect.left;
				mouseY = e.touches[0].clientY - boundingRect.top;

			}
			else{
				mouseX = e.clientX - boundingRect.left;
				mouseY = e.clientY - boundingRect.top;
			}

			return {
				x : mouseX,
				y : mouseY
			};

		},
		addEvent = helpers.addEvent = function(node,eventType,method){
			if (node.addEventListener){
				node.addEventListener(eventType,method);
			} else if (node.attachEvent){
				node.attachEvent("on"+eventType, method);
			} else {
				node["on"+eventType] = method;
			}
		},
		removeEvent = helpers.removeEvent = function(node, eventType, handler){
			if (node.removeEventListener){
				node.removeEventListener(eventType, handler, false);
			} else if (node.detachEvent){
				node.detachEvent("on"+eventType,handler);
			} else{
				node["on" + eventType] = noop;
			}
		},
		bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
			// Create the events object if it's not already present
			if (!chartInstance.events) chartInstance.events = {};

			each(arrayOfEvents,function(eventName){
				chartInstance.events[eventName] = function(){
					handler.apply(chartInstance, arguments);
				};
				addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
			});
		},
		unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
			each(arrayOfEvents, function(handler,eventName){
				removeEvent(chartInstance.chart.canvas, eventName, handler);
			});
		},
		getMaximumWidth = helpers.getMaximumWidth = function(domNode){
			var container = domNode.parentNode,
			    padding = parseInt(getStyle(container, 'padding-left')) + parseInt(getStyle(container, 'padding-right'));
			// TODO = check cross browser stuff with this.
			return container ? container.clientWidth - padding : 0;
		},
		getMaximumHeight = helpers.getMaximumHeight = function(domNode){
			var container = domNode.parentNode,
			    padding = parseInt(getStyle(container, 'padding-bottom')) + parseInt(getStyle(container, 'padding-top'));
			// TODO = check cross browser stuff with this.
			return container ? container.clientHeight - padding : 0;
		},
		getStyle = helpers.getStyle = function (el, property) {
			return el.currentStyle ?
				el.currentStyle[property] :
				document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
		},
		getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
		retinaScale = helpers.retinaScale = function(chart){
			var ctx = chart.ctx,
				width = chart.canvas.width,
				height = chart.canvas.height;

			if (window.devicePixelRatio) {
				ctx.canvas.style.width = width + "px";
				ctx.canvas.style.height = height + "px";
				ctx.canvas.height = height * window.devicePixelRatio;
				ctx.canvas.width = width * window.devicePixelRatio;
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
		},
		//-- Canvas methods
		clear = helpers.clear = function(chart){
			chart.ctx.clearRect(0,0,chart.width,chart.height);
		},
		fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
			return fontStyle + " " + pixelSize+"px " + fontFamily;
		},
		longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
			ctx.font = font;
			var longest = 0;
			each(arrayOfStrings,function(string){
				var textWidth = ctx.measureText(string).width;
				longest = (textWidth > longest) ? textWidth : longest;
			});
			return longest;
		},
		drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();
		};


	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	//Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	Chart.Type = function(data,options,chart){
		this.options = options;
		this.chart = chart;
		this.id = uid();
		//Add the chart instance to the global namespace
		Chart.instances[this.id] = this;

		// Initialize is always called when a chart type is created
		// By default it is a no op, but it should be extended
		if (options.responsive){
			this.resize();
		}
		this.initialize.call(this,data);
	};

	//Core methods that'll be a part of every chart type
	extend(Chart.Type.prototype,{
		initialize : function(){return this;},
		clear : function(){
			clear(this.chart);
			return this;
		},
		stop : function(){
			// Stops any current animation loop occuring
			Chart.animationService.cancelAnimation(this);
			return this;
		},
		resize : function(callback){
			this.stop();
			var canvas = this.chart.canvas,
				newWidth = getMaximumWidth(this.chart.canvas),
				newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

			canvas.width = this.chart.width = newWidth;
			canvas.height = this.chart.height = newHeight;

			retinaScale(this.chart);

			if (typeof callback === "function"){
				callback.apply(this, Array.prototype.slice.call(arguments, 1));
			}
			return this;
		},
		reflow : noop,
		render : function(reflow){
			if (reflow){
				this.reflow();
			}
			
			if (this.options.animation && !reflow){
				var animation = new Chart.Animation();
				animation.numSteps = this.options.animationSteps;
				animation.easing = this.options.animationEasing;
				
				// render function
				animation.render = function(chartInstance, animationObject) {
					var easingFunction = helpers.easingEffects[animationObject.easing];
					var stepDecimal = animationObject.currentStep / animationObject.numSteps;
					var easeDecimal = easingFunction(stepDecimal);
					
					chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
				};
				
				// user events
				animation.onAnimationProgress = this.options.onAnimationProgress;
				animation.onAnimationComplete = this.options.onAnimationComplete;
				
				Chart.animationService.addAnimation(this, animation);
			}
			else{
				this.draw();
				this.options.onAnimationComplete.call(this);
			}
			return this;
		},
		generateLegend : function(){
			return helpers.template(this.options.legendTemplate, this);
		},
		destroy : function(){
			this.stop();
			this.clear();
			unbindEvents(this, this.events);
			var canvas = this.chart.canvas;

			// Reset canvas height/width attributes starts a fresh with the canvas context
			canvas.width = this.chart.width;
			canvas.height = this.chart.height;

			// < IE9 doesn't support removeProperty
			if (canvas.style.removeProperty) {
				canvas.style.removeProperty('width');
				canvas.style.removeProperty('height');
			} else {
				canvas.style.removeAttribute('width');
				canvas.style.removeAttribute('height');
			}

			delete Chart.instances[this.id];
		},
		showTooltip : function(ChartElements, forceRedraw){
			// Only redraw the chart if we've actually changed what we're hovering on.
			if (typeof this.activeElements === 'undefined') this.activeElements = [];

			var isChanged = (function(Elements){
				var changed = false;

				if (Elements.length !== this.activeElements.length){
					changed = true;
					return changed;
				}

				each(Elements, function(element, index){
					if (element !== this.activeElements[index]){
						changed = true;
					}
				}, this);
				return changed;
			}).call(this, ChartElements);

			if (!isChanged && !forceRedraw){
				return;
			}
			else{
				this.activeElements = ChartElements;
			}
			this.draw();
			if(this.options.customTooltips){
				this.options.customTooltips(false);
			}
			if (ChartElements.length > 0){
				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
				if (this.datasets && this.datasets.length > 1) {
					var dataArray,
						dataIndex;

					for (var i = this.datasets.length - 1; i >= 0; i--) {
						dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
						dataIndex = indexOf(dataArray, ChartElements[0]);
						if (dataIndex !== -1){
							break;
						}
					}
					var tooltipLabels = [],
						tooltipColors = [],
						medianPosition = (function(index) {

							// Get all the points at that particular index
							var Elements = [],
								dataCollection,
								xPositions = [],
								yPositions = [],
								xMax,
								yMax,
								xMin,
								yMin;
							helpers.each(this.datasets, function(dataset){
								dataCollection = dataset.points || dataset.bars || dataset.segments;
								if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
									Elements.push(dataCollection[dataIndex]);
								}
							});

							helpers.each(Elements, function(element) {
								xPositions.push(element.x);
								yPositions.push(element.y);


								//Include any colour information about the element
								tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
								tooltipColors.push({
									fill: element._saved.fillColor || element.fillColor,
									stroke: element._saved.strokeColor || element.strokeColor
								});

							}, this);

							yMin = min(yPositions);
							yMax = max(yPositions);

							xMin = min(xPositions);
							xMax = max(xPositions);

							return {
								x: (xMin > this.chart.width/2) ? xMin : xMax,
								y: (yMin + yMax)/2
							};
						}).call(this, dataIndex);

					new Chart.MultiTooltip({
						x: medianPosition.x,
						y: medianPosition.y,
						xPadding: this.options.tooltipXPadding,
						yPadding: this.options.tooltipYPadding,
						xOffset: this.options.tooltipXOffset,
						fillColor: this.options.tooltipFillColor,
						textColor: this.options.tooltipFontColor,
						fontFamily: this.options.tooltipFontFamily,
						fontStyle: this.options.tooltipFontStyle,
						fontSize: this.options.tooltipFontSize,
						titleTextColor: this.options.tooltipTitleFontColor,
						titleFontFamily: this.options.tooltipTitleFontFamily,
						titleFontStyle: this.options.tooltipTitleFontStyle,
						titleFontSize: this.options.tooltipTitleFontSize,
						cornerRadius: this.options.tooltipCornerRadius,
						labels: tooltipLabels,
						legendColors: tooltipColors,
						legendColorBackground : this.options.multiTooltipKeyBackground,
						title: template(this.options.tooltipTitleTemplate,ChartElements[0]),
						chart: this.chart,
						ctx: this.chart.ctx,
						custom: this.options.customTooltips
					}).draw();

				} else {
					each(ChartElements, function(Element) {
						var tooltipPosition = Element.tooltipPosition();
						new Chart.Tooltip({
							x: Math.round(tooltipPosition.x),
							y: Math.round(tooltipPosition.y),
							xPadding: this.options.tooltipXPadding,
							yPadding: this.options.tooltipYPadding,
							fillColor: this.options.tooltipFillColor,
							textColor: this.options.tooltipFontColor,
							fontFamily: this.options.tooltipFontFamily,
							fontStyle: this.options.tooltipFontStyle,
							fontSize: this.options.tooltipFontSize,
							caretHeight: this.options.tooltipCaretSize,
							cornerRadius: this.options.tooltipCornerRadius,
							text: template(this.options.tooltipTemplate, Element),
							chart: this.chart,
							custom: this.options.customTooltips
						}).draw();
					}, this);
				}
			}
			return this;
		},
		toBase64Image : function(){
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		}
	});

	Chart.Type.extend = function(extensions){

		var parent = this;

		var ChartType = function(){
			return parent.apply(this,arguments);
		};

		//Copy the prototype object of the this class
		ChartType.prototype = clone(parent.prototype);
		//Now overwrite some of the properties in the base class with the new extensions
		extend(ChartType.prototype, extensions);

		ChartType.extend = Chart.Type.extend;

		if (extensions.name || parent.prototype.name){

			var chartName = extensions.name || parent.prototype.name;
			//Assign any potential default values of the new chart type

			//If none are defined, we'll use a clone of the chart type this is being extended from.
			//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
			//doesn't define some defaults of their own.

			var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

			Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

			Chart.types[chartName] = ChartType;

			//Register this new chart type in the Chart prototype
			Chart.prototype[chartName] = function(data,options){
				var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
				return new ChartType(data,config,this);
			};
		} else{
			warn("Name not provided for this chart, so it hasn't been registered");
		}
		return parent;
	};

	Chart.Element = function(configuration){
		extend(this,configuration);
		this.initialize.apply(this,arguments);
		this.save();
	};
	extend(Chart.Element.prototype,{
		initialize : function(){},
		restore : function(props){
			if (!props){
				extend(this,this._saved);
			} else {
				each(props,function(key){
					this[key] = this._saved[key];
				},this);
			}
			return this;
		},
		save : function(){
			this._saved = clone(this);
			delete this._saved._saved;
			return this;
		},
		update : function(newProps){
			each(newProps,function(value,key){
				this._saved[key] = this[key];
				this[key] = value;
			},this);
			return this;
		},
		transition : function(props,ease){
			each(props,function(value,key){
				this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
			},this);
			return this;
		},
		tooltipPosition : function(){
			return {
				x : this.x,
				y : this.y
			};
		},
		hasValue: function(){
			return isNumber(this.value);
		}
	});

	Chart.Element.extend = inherits;


	Chart.Point = Chart.Element.extend({
		display: true,
		inRange: function(chartX,chartY){
			var hitDetectionRange = this.hitDetectionRadius + this.radius;
			return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
		},
		draw : function(){
			if (this.display){
				var ctx = this.ctx;
				ctx.beginPath();

				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
				ctx.closePath();

				ctx.strokeStyle = this.strokeColor;
				ctx.lineWidth = this.strokeWidth;

				ctx.fillStyle = this.fillColor;

				ctx.fill();
				ctx.stroke();
			}


			//Quick debug for bezier curve splining
			//Highlights control points and the line between them.
			//Handy for dev - stripped in the min version.

			// ctx.save();
			// ctx.fillStyle = "black";
			// ctx.strokeStyle = "black"
			// ctx.beginPath();
			// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.beginPath();
			// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
			// ctx.fill();

			// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
			// ctx.lineTo(this.x, this.y);
			// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
			// ctx.stroke();

			// ctx.restore();



		}
	});

	Chart.Arc = Chart.Element.extend({
		inRange : function(chartX,chartY){

			var pointRelativePosition = helpers.getAngleFromPoint(this, {
				x: chartX,
				y: chartY
			});

			// Normalize all angles to 0 - 2*PI (0 - 360°)
			var pointRelativeAngle = pointRelativePosition.angle % (Math.PI * 2),
			    startAngle = (Math.PI * 2 + this.startAngle) % (Math.PI * 2),
			    endAngle = (Math.PI * 2 + this.endAngle) % (Math.PI * 2) || 360;

			// Calculate wether the pointRelativeAngle is between the start and the end angle
			var betweenAngles = (endAngle < startAngle) ?
				pointRelativeAngle <= endAngle || pointRelativeAngle >= startAngle:
				pointRelativeAngle >= startAngle && pointRelativeAngle <= endAngle;

			//Check if within the range of the open/close angle
			var withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

			return (betweenAngles && withinRadius);
			//Ensure within the outside of the arc centre, but inside arc outer
		},
		tooltipPosition : function(){
			var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
				rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
			return {
				x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
				y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
			};
		},
		draw : function(animationPercent){

			var easingDecimal = animationPercent || 1;

			var ctx = this.ctx;

			ctx.beginPath();

			ctx.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle);

            ctx.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, true);

			ctx.closePath();
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			ctx.fillStyle = this.fillColor;

			ctx.fill();
			ctx.lineJoin = 'bevel';

			if (this.showStroke){
				ctx.stroke();
			}
		}
	});

	Chart.Rectangle = Chart.Element.extend({
		draw : function(){
			var ctx = this.ctx,
				halfWidth = this.width/2,
				leftX = this.x - halfWidth,
				rightX = this.x + halfWidth,
				top = this.base - (this.base - this.y),
				halfStroke = this.strokeWidth / 2;

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (this.showStroke){
				leftX += halfStroke;
				rightX -= halfStroke;
				top += halfStroke;
			}

			ctx.beginPath();

			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidth;

			// It'd be nice to keep this class totally generic to any rectangle
			// and simply specify which border to miss out.
			ctx.moveTo(leftX, this.base);
			ctx.lineTo(leftX, top);
			ctx.lineTo(rightX, top);
			ctx.lineTo(rightX, this.base);
			ctx.fill();
			if (this.showStroke){
				ctx.stroke();
			}
		},
		height : function(){
			return this.base - this.y;
		},
		inRange : function(chartX,chartY){
			return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
		}
	});

	Chart.Animation = Chart.Element.extend({
		currentStep: null, // the current animation step
		numSteps: 60, // default number of steps
		easing: "", // the easing to use for this animation
		render: null, // render function used by the animation service
		
		onAnimationProgress: null, // user specified callback to fire on each step of the animation 
		onAnimationComplete: null, // user specified callback to fire when the animation finishes
	});
	
	Chart.Tooltip = Chart.Element.extend({
		draw : function(){

			var ctx = this.chart.ctx;

			ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.xAlign = "center";
			this.yAlign = "above";

			//Distance between the actual element.y position and the start of the tooltip caret
			var caretPadding = this.caretPadding = 2;

			var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
				tooltipRectHeight = this.fontSize + 2*this.yPadding,
				tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

			if (this.x + tooltipWidth/2 >this.chart.width){
				this.xAlign = "left";
			} else if (this.x - tooltipWidth/2 < 0){
				this.xAlign = "right";
			}

			if (this.y - tooltipHeight < 0){
				this.yAlign = "below";
			}


			var tooltipX = this.x - tooltipWidth/2,
				tooltipY = this.y - tooltipHeight;

			ctx.fillStyle = this.fillColor;

			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				switch(this.yAlign)
				{
				case "above":
					//Draw a caret above the x/y
					ctx.beginPath();
					ctx.moveTo(this.x,this.y - caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
					ctx.closePath();
					ctx.fill();
					break;
				case "below":
					tooltipY = this.y + caretPadding + this.caretHeight;
					//Draw a caret below the x/y
					ctx.beginPath();
					ctx.moveTo(this.x, this.y + caretPadding);
					ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
					ctx.closePath();
					ctx.fill();
					break;
				}

				switch(this.xAlign)
				{
				case "left":
					tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
					break;
				case "right":
					tooltipX = this.x - (this.cornerRadius + this.caretHeight);
					break;
				}

				drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

				ctx.fill();

				ctx.fillStyle = this.textColor;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
			}
		}
	});

	Chart.MultiTooltip = Chart.Element.extend({
		initialize : function(){
			this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

			this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

			this.titleHeight = this.title ? this.titleFontSize * 1.5 : 0;
			this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleHeight;

			this.ctx.font = this.titleFont;

			var titleWidth = this.ctx.measureText(this.title).width,
				//Label has a legend square as well so account for this.
				labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
				longestTextWidth = max([labelWidth,titleWidth]);

			this.width = longestTextWidth + (this.xPadding*2);


			var halfHeight = this.height/2;

			//Check to ensure the height will fit on the canvas
			if (this.y - halfHeight < 0 ){
				this.y = halfHeight;
			} else if (this.y + halfHeight > this.chart.height){
				this.y = this.chart.height - halfHeight;
			}

			//Decide whether to align left or right based on position on canvas
			if (this.x > this.chart.width/2){
				this.x -= this.xOffset + this.width;
			} else {
				this.x += this.xOffset;
			}


		},
		getLineHeight : function(index){
			var baseLineHeight = this.y - (this.height/2) + this.yPadding,
				afterTitleIndex = index-1;

			//If the index is zero, we're getting the title
			if (index === 0){
				return baseLineHeight + this.titleHeight / 3;
			} else{
				return baseLineHeight + ((this.fontSize * 1.5 * afterTitleIndex) + this.fontSize / 2) + this.titleHeight;
			}

		},
		draw : function(){
			// Custom Tooltips
			if(this.custom){
				this.custom(this);
			}
			else{
				drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
				var ctx = this.ctx;
				ctx.fillStyle = this.fillColor;
				ctx.fill();
				ctx.closePath();

				ctx.textAlign = "left";
				ctx.textBaseline = "middle";
				ctx.fillStyle = this.titleTextColor;
				ctx.font = this.titleFont;

				ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

				ctx.font = this.font;
				helpers.each(this.labels,function(label,index){
					ctx.fillStyle = this.textColor;
					ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

					//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
					//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
					//Instead we'll make a white filled block to put the legendColour palette over.

					ctx.fillStyle = this.legendColorBackground;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

					ctx.fillStyle = this.legendColors[index].fill;
					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


				},this);
			}
		}
	});

	Chart.Scale = Chart.Element.extend({
		initialize : function(){
			this.fit();
		},
		buildYLabels : function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
			this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) + 10 : 0;
		},
		addXLabel : function(label){
			this.xLabels.push(label);
			this.valuesCount++;
			this.fit();
		},
		removeXLabel : function(){
			this.xLabels.shift();
			this.valuesCount--;
			this.fit();
		},
		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
		fit: function(){
			// First we need the width of the yLabels, assuming the xLabels aren't rotated

			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
			this.startPoint = (this.display) ? this.fontSize : 0;
			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

			// Apply padding settings to the start and end point.
			this.startPoint += this.padding;
			this.endPoint -= this.padding;

			// Cache the starting endpoint, excluding the space for x labels
			var cachedEndPoint = this.endPoint;

			// Cache the starting height, so can determine if we need to recalculate the scale yAxis
			var cachedHeight = this.endPoint - this.startPoint,
				cachedYLabelWidth;

			// Build the current yLabels so we have an idea of what size they'll be to start
			/*
			 *	This sets what is returned from calculateScaleRange as static properties of this class:
			 *
				this.steps;
				this.stepValue;
				this.min;
				this.max;
			 *
			 */
			this.calculateYRange(cachedHeight);

			// With these properties set we can now build the array of yLabels
			// and also the width of the largest yLabel
			this.buildYLabels();

			this.calculateXLabelRotation();

			while((cachedHeight > this.endPoint - this.startPoint)){
				cachedHeight = this.endPoint - this.startPoint;
				cachedYLabelWidth = this.yLabelWidth;

				this.calculateYRange(cachedHeight);
				this.buildYLabels();

				// Only go through the xLabel loop again if the yLabel width has changed
				if (cachedYLabelWidth < this.yLabelWidth){
					this.endPoint = cachedEndPoint;
					this.calculateXLabelRotation();
				}
			}

		},
		calculateXLabelRotation : function(){
			//Get the width of each grid by calculating the difference
			//between x offsets between 0 and 1.

			this.ctx.font = this.font;

			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
				firstRotated,
				lastRotated;


			this.xScalePaddingRight = lastWidth/2 + 3;
			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth) ? firstWidth/2 : this.yLabelWidth;

			this.xLabelRotation = 0;
			if (this.display){
				var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
					cosRotation,
					firstRotatedWidth;
				this.xLabelWidth = originalLabelWidth;
				//Allow 3 pixels x2 padding either side for label readability
				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

				//Max label rotate should be 90 - also act as a loop counter
				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
					cosRotation = Math.cos(toRadians(this.xLabelRotation));

					firstRotated = cosRotation * firstWidth;
					lastRotated = cosRotation * lastWidth;

					// We're right aligning the text now.
					if (firstRotated + this.fontSize / 2 > this.yLabelWidth){
						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
					}
					this.xScalePaddingRight = this.fontSize/2;


					this.xLabelRotation++;
					this.xLabelWidth = cosRotation * originalLabelWidth;

				}
				if (this.xLabelRotation > 0){
					this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
				}
			}
			else{
				this.xLabelWidth = 0;
				this.xScalePaddingRight = this.padding;
				this.xScalePaddingLeft = this.padding;
			}

		},
		// Needs to be overidden in each Chart type
		// Otherwise we need to pass all the data into the scale class
		calculateYRange: noop,
		drawingArea: function(){
			return this.startPoint - this.endPoint;
		},
		calculateY : function(value){
			var scalingFactor = this.drawingArea() / (this.min - this.max);
			return this.endPoint - (scalingFactor * (value - this.min));
		},
		calculateX : function(index){
			var isRotated = (this.xLabelRotation > 0),
				// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
				innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
				valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
				valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

			if (this.offsetGridLines){
				valueOffset += (valueWidth/2);
			}

			return Math.round(valueOffset);
		},
		update : function(newProps){
			helpers.extend(this, newProps);
			this.fit();
		},
		draw : function(){
			var ctx = this.ctx,
				yLabelGap = (this.endPoint - this.startPoint) / this.steps,
				xStart = Math.round(this.xScalePaddingLeft);
			if (this.display){
				ctx.fillStyle = this.textColor;
				ctx.font = this.font;
				each(this.yLabels,function(labelString,index){
					var yLabelCenter = this.endPoint - (yLabelGap * index),
						linePositionY = Math.round(yLabelCenter),
						drawHorizontalLine = this.showHorizontalLines;

					ctx.textAlign = "right";
					ctx.textBaseline = "middle";
					if (this.showLabels){
						ctx.fillText(labelString,xStart - 10,yLabelCenter);
					}

					// This is X axis, so draw it
					if (index === 0 && !drawHorizontalLine){
						drawHorizontalLine = true;
					}

					if (drawHorizontalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					linePositionY += helpers.aliasPixel(ctx.lineWidth);

					if(drawHorizontalLine){
						ctx.moveTo(xStart, linePositionY);
						ctx.lineTo(this.width, linePositionY);
						ctx.stroke();
						ctx.closePath();
					}

					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;
					ctx.beginPath();
					ctx.moveTo(xStart - 5, linePositionY);
					ctx.lineTo(xStart, linePositionY);
					ctx.stroke();
					ctx.closePath();

				},this);

				each(this.xLabels,function(label,index){
					var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
						// Check to see if line/bar here and decide where to place the line
						linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
						isRotated = (this.xLabelRotation > 0),
						drawVerticalLine = this.showVerticalLines;

					// This is Y axis, so draw it
					if (index === 0 && !drawVerticalLine){
						drawVerticalLine = true;
					}

					if (drawVerticalLine){
						ctx.beginPath();
					}

					if (index > 0){
						// This is a grid line in the centre, so drop that
						ctx.lineWidth = this.gridLineWidth;
						ctx.strokeStyle = this.gridLineColor;
					} else {
						// This is the first line on the scale
						ctx.lineWidth = this.lineWidth;
						ctx.strokeStyle = this.lineColor;
					}

					if (drawVerticalLine){
						ctx.moveTo(linePos,this.endPoint);
						ctx.lineTo(linePos,this.startPoint - 3);
						ctx.stroke();
						ctx.closePath();
					}


					ctx.lineWidth = this.lineWidth;
					ctx.strokeStyle = this.lineColor;


					// Small lines at the bottom of the base grid line
					ctx.beginPath();
					ctx.moveTo(linePos,this.endPoint);
					ctx.lineTo(linePos,this.endPoint + 5);
					ctx.stroke();
					ctx.closePath();

					ctx.save();
					ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
					ctx.rotate(toRadians(this.xLabelRotation)*-1);
					ctx.font = this.font;
					ctx.textAlign = (isRotated) ? "right" : "center";
					ctx.textBaseline = (isRotated) ? "middle" : "top";
					ctx.fillText(label, 0, 0);
					ctx.restore();
				},this);

			}
		}

	});

	Chart.RadialScale = Chart.Element.extend({
		initialize: function(){
			this.size = min([this.height, this.width]);
			this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
		},
		calculateCenterOffset: function(value){
			// Take into account half font size + the yPadding of the top value
			var scalingFactor = this.drawingArea / (this.max - this.min);

			return (value - this.min) * scalingFactor;
		},
		update : function(){
			if (!this.lineArc){
				this.setScaleSize();
			} else {
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
			}
			this.buildYLabels();
		},
		buildYLabels: function(){
			this.yLabels = [];

			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

			for (var i=0; i<=this.steps; i++){
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}
		},
		getCircumference : function(){
			return ((Math.PI*2) / this.valuesCount);
		},
		setScaleSize: function(){
			/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */


			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
				pointPosition,
				i,
				textWidth,
				halfTextWidth,
				furthestRight = this.width,
				furthestRightIndex,
				furthestRightAngle,
				furthestLeft = 0,
				furthestLeftIndex,
				furthestLeftAngle,
				xProtrusionLeft,
				xProtrusionRight,
				radiusReductionRight,
				radiusReductionLeft,
				maxWidthRadius;
			this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
			for (i=0;i<this.valuesCount;i++){
				// 5px to space the text slightly out - similar to what we do in the draw function.
				pointPosition = this.getPointPosition(i, largestPossibleRadius);
				textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
				if (i === 0 || i === this.valuesCount/2){
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
					// w/left and right text sizes
					halfTextWidth = textWidth/2;
					if (pointPosition.x + halfTextWidth > furthestRight) {
						furthestRight = pointPosition.x + halfTextWidth;
						furthestRightIndex = i;
					}
					if (pointPosition.x - halfTextWidth < furthestLeft) {
						furthestLeft = pointPosition.x - halfTextWidth;
						furthestLeftIndex = i;
					}
				}
				else if (i < this.valuesCount/2) {
					// Less than half the values means we'll left align the text
					if (pointPosition.x + textWidth > furthestRight) {
						furthestRight = pointPosition.x + textWidth;
						furthestRightIndex = i;
					}
				}
				else if (i > this.valuesCount/2){
					// More than half the values means we'll right align the text
					if (pointPosition.x - textWidth < furthestLeft) {
						furthestLeft = pointPosition.x - textWidth;
						furthestLeftIndex = i;
					}
				}
			}

			xProtrusionLeft = furthestLeft;

			xProtrusionRight = Math.ceil(furthestRight - this.width);

			furthestRightAngle = this.getIndexAngle(furthestRightIndex);

			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

			// Ensure we actually need to reduce the size of the chart
			radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
			radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

			this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

			//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

		},
		setCenterPoint: function(leftMovement, rightMovement){

			var maxRight = this.width - rightMovement - this.drawingArea,
				maxLeft = leftMovement + this.drawingArea;

			this.xCenter = (maxLeft + maxRight)/2;
			// Always vertically in the centre as the text height doesn't change
			this.yCenter = (this.height/2);
		},

		getIndexAngle : function(index){
			var angleMultiplier = (Math.PI * 2) / this.valuesCount;
			// Start from the top instead of right, so remove a quarter of the circle

			return index * angleMultiplier - (Math.PI/2);
		},
		getPointPosition : function(index, distanceFromCenter){
			var thisAngle = this.getIndexAngle(index);
			return {
				x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
				y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
			};
		},
		draw: function(){
			if (this.display){
				var ctx = this.ctx;
				each(this.yLabels, function(label, index){
					// Don't draw a centre value
					if (index > 0){
						var yCenterOffset = index * (this.drawingArea/this.steps),
							yHeight = this.yCenter - yCenterOffset,
							pointPosition;

						// Draw circular lines around the scale
						if (this.lineWidth > 0){
							ctx.strokeStyle = this.lineColor;
							ctx.lineWidth = this.lineWidth;

							if(this.lineArc){
								ctx.beginPath();
								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
								ctx.closePath();
								ctx.stroke();
							} else{
								ctx.beginPath();
								for (var i=0;i<this.valuesCount;i++)
								{
									pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
									if (i === 0){
										ctx.moveTo(pointPosition.x, pointPosition.y);
									} else {
										ctx.lineTo(pointPosition.x, pointPosition.y);
									}
								}
								ctx.closePath();
								ctx.stroke();
							}
						}
						if(this.showLabels){
							ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
							if (this.showLabelBackdrop){
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = this.backdropColor;
								ctx.fillRect(
									this.xCenter - labelWidth/2 - this.backdropPaddingX,
									yHeight - this.fontSize/2 - this.backdropPaddingY,
									labelWidth + this.backdropPaddingX*2,
									this.fontSize + this.backdropPaddingY*2
								);
							}
							ctx.textAlign = 'center';
							ctx.textBaseline = "middle";
							ctx.fillStyle = this.fontColor;
							ctx.fillText(label, this.xCenter, yHeight);
						}
					}
				}, this);

				if (!this.lineArc){
					ctx.lineWidth = this.angleLineWidth;
					ctx.strokeStyle = this.angleLineColor;
					for (var i = this.valuesCount - 1; i >= 0; i--) {
						var centerOffset = null, outerPosition = null;

						if (this.angleLineWidth > 0 && (i % this.angleLineInterval === 0)){
							centerOffset = this.calculateCenterOffset(this.max);
							outerPosition = this.getPointPosition(i, centerOffset);
							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.stroke();
							ctx.closePath();
						}

						if (this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
							if (centerOffset == null)
								centerOffset = this.calculateCenterOffset(this.max);

							if (outerPosition == null)
								outerPosition = this.getPointPosition(i, centerOffset);

							var previousOuterPosition = this.getPointPosition(i === 0 ? this.valuesCount - 1 : i - 1, centerOffset);
							var nextOuterPosition = this.getPointPosition(i === this.valuesCount - 1 ? 0 : i + 1, centerOffset);

							var previousOuterHalfway = { x: (previousOuterPosition.x + outerPosition.x) / 2, y: (previousOuterPosition.y + outerPosition.y) / 2 };
							var nextOuterHalfway = { x: (outerPosition.x + nextOuterPosition.x) / 2, y: (outerPosition.y + nextOuterPosition.y) / 2 };

							ctx.beginPath();
							ctx.moveTo(this.xCenter, this.yCenter);
							ctx.lineTo(previousOuterHalfway.x, previousOuterHalfway.y);
							ctx.lineTo(outerPosition.x, outerPosition.y);
							ctx.lineTo(nextOuterHalfway.x, nextOuterHalfway.y);
							ctx.fillStyle = this.backgroundColors[i];
							ctx.fill();
							ctx.closePath();
						}
						// Extra 3px out for some label spacing
						var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
						ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
						ctx.fillStyle = this.pointLabelFontColor;

						var labelsCount = this.labels.length,
							halfLabelsCount = this.labels.length/2,
							quarterLabelsCount = halfLabelsCount/2,
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
						if (i === 0){
							ctx.textAlign = 'center';
						} else if(i === halfLabelsCount){
							ctx.textAlign = 'center';
						} else if (i < halfLabelsCount){
							ctx.textAlign = 'left';
						} else {
							ctx.textAlign = 'right';
						}

						// Set the correct text baseline based on outer positioning
						if (exactQuarter){
							ctx.textBaseline = 'middle';
						} else if (upperHalf){
							ctx.textBaseline = 'bottom';
						} else {
							ctx.textBaseline = 'top';
						}

						ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
					}
				}
			}
		}
	});

	Chart.animationService = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		addAnimation: function(chartInstance, animationObject) {
			for (var index = 0; index < this.animations.length; ++ index){
				if (this.animations[index].chartInstance === chartInstance){
					// replacing an in progress animation
					this.animations[index].animationObject = animationObject;
					return;
				}
			}
			
			this.animations.push({
				chartInstance: chartInstance,
				animationObject: animationObject
			});

			// If there are no animations queued, manually kickstart a digest, for lack of a better word
			if (this.animations.length == 1) {
				helpers.requestAnimFrame.call(window, this.digestWrapper);
			}
		},
		// Cancel the animation for a given chart instance
		cancelAnimation: function(chartInstance) {
			var index = helpers.findNextWhere(this.animations, function(animationWrapper) {
				return animationWrapper.chartInstance === chartInstance;
			});
			
			if (index)
			{
				this.animations.splice(index, 1);
			}
		},
		// calls startDigest with the proper context
		digestWrapper: function() {
			Chart.animationService.startDigest.call(Chart.animationService);
		},
		startDigest: function() {

			var startTime = Date.now();
			var framesToDrop = 0;

			if(this.dropFrames > 1){
				framesToDrop = Math.floor(this.dropFrames);
				this.dropFrames -= framesToDrop;
			}

			for (var i = 0; i < this.animations.length; i++) {

				if (this.animations[i].animationObject.currentStep === null){
					this.animations[i].animationObject.currentStep = 0;
				}

				this.animations[i].animationObject.currentStep += 1 + framesToDrop;
				if(this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps){
					this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps;
				}
				
				this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject);
				
				// Check if executed the last frame.
				if (this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps){
					// Call onAnimationComplete
					this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance);
					// Remove the animation.
					this.animations.splice(i, 1);
					// Keep the index in place to offset the splice
					i--;
				}
			}

			var endTime = Date.now();
			var delay = endTime - startTime - this.frameDuration;
			var frameDelay = delay / this.frameDuration;

			if(frameDelay > 1){
				this.dropFrames += frameDelay;
			}

			// Do we have more stuff to animate?
			if (this.animations.length > 0){
				helpers.requestAnimFrame.call(window, this.digestWrapper);
			}
		}
	};

	// Attach global event to resize each chart instance when the browser resizes
	helpers.addEvent(window, "resize", (function(){
		// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
		var timeout;
		return function(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				each(Chart.instances,function(instance){
					// If the responsive flag is set in the chart instance config
					// Cascade the resize event down to the chart.
					if (instance.options.responsive){
						instance.resize(instance.render, true);
					}
				});
			}, 50);
		};
	})());


	if (amd) {
		define('Chart', [], function(){
			return Chart;
		});
	} else if (typeof module === 'object' && module.exports) {
		module.exports = Chart;
	}

	root.Chart = Chart;

	Chart.noConflict = function(){
		root.Chart = previous;
		return Chart;
	};

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;


	var defaultConfig = {
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
		scaleBeginAtZero : true,

		//Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - If there is a stroke on each bar
		barShowStroke : true,

		//Number - Pixel width of the bar stroke
		barStrokeWidth : 2,

		//Number - Spacing between each of the X value sets
		barValueSpacing : 5,

		//Number - Spacing between data sets within X values
		barDatasetSpacing : 1,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"

	};


	Chart.Type.extend({
		name: "Bar",
		defaults : defaultConfig,
		initialize:  function(data){

			//Expose options as a scope variable here so we can access it in the ScaleClass
			var options = this.options;

			this.ScaleClass = Chart.Scale.extend({
				offsetGridLines : true,
				calculateBarX : function(datasetCount, datasetIndex, barIndex){
					//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
					var xWidth = this.calculateBaseWidth(),
						xAbsolute = this.calculateX(barIndex) - (xWidth/2),
						barWidth = this.calculateBarWidth(datasetCount);

					return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
				},
				calculateBaseWidth : function(){
					return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
				},
				calculateBarWidth : function(datasetCount){
					//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
					var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

					return (baseWidth / datasetCount);
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

					this.eachBars(function(bar){
						bar.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activeBars, function(activeBar){
						if (activeBar) {
							activeBar.fillColor = activeBar.highlightFill;
							activeBar.strokeColor = activeBar.highlightStroke;
						}
					});
					this.showTooltip(activeBars);
				});
			}

			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.BarClass = Chart.Rectangle.extend({
				strokeWidth : this.options.barStrokeWidth,
				showStroke : this.options.barShowStroke,
				ctx : this.chart.ctx
			});

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset,datasetIndex){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					bars : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.bars.push(new this.BarClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : (typeof dataset.strokeColor == 'object') ? dataset.strokeColor[index] : dataset.strokeColor,
						fillColor : (typeof dataset.fillColor == 'object') ? dataset.fillColor[index] : dataset.fillColor,
						highlightFill : (dataset.highlightFill) ? (typeof dataset.highlightFill == 'object') ? dataset.highlightFill[index] : dataset.highlightFill : (typeof dataset.fillColor == 'object') ? dataset.fillColor[index] : dataset.fillColor,
						highlightStroke : (dataset.highlightStroke) ? (typeof dataset.highlightStroke == 'object') ? dataset.highlightStroke[index] : dataset.highlightStroke : (typeof dataset.strokeColor == 'object') ? dataset.strokeColor[index] : dataset.strokeColor
					}));
				},this);

			},this);

			this.buildScale(data.labels);

			this.BarClass.prototype.base = this.scale.endPoint;

			this.eachBars(function(bar, index, datasetIndex){
				helpers.extend(bar, {
					width : this.scale.calculateBarWidth(this.datasets.length),
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
					y: this.scale.endPoint
				});
				bar.save();
			}, this);

			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});

			this.eachBars(function(bar){
				bar.save();
			});
			this.render();
		},
		eachBars : function(callback){
			helpers.each(this.datasets,function(dataset, datasetIndex){
				helpers.each(dataset.bars, callback, this, datasetIndex);
			},this);
		},
		getBarsAtEvent : function(e){
			var barsArray = [],
				eventPosition = helpers.getRelativePosition(e),
				datasetIterator = function(dataset){
					barsArray.push(dataset.bars[barIndex]);
				},
				barIndex;

			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
				for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
					if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
						helpers.each(this.datasets, datasetIterator);
						return barsArray;
					}
				}
			}

			return barsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachBars(function(bar){
					values.push(bar.value);
				});
				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange: function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}

			this.scale = new this.ScaleClass(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].bars.push(new this.BarClass({
					value : value,
					label : label,
					datasetLabel: this.datasets[datasetIndex].label,
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
					y: this.scale.endPoint,
					width : this.scale.calculateBarWidth(this.datasets.length),
					base : this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].strokeColor,
					fillColor : this.datasets[datasetIndex].fillColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.bars.shift();
			},this);
			this.update();
		},
		reflow : function(){
			helpers.extend(this.BarClass.prototype,{
				y: this.scale.endPoint,
				base : this.scale.endPoint
			});
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			this.scale.draw(easingDecimal);

			//Draw all the bars for each dataset
			helpers.each(this.datasets,function(dataset,datasetIndex){
				helpers.each(dataset.bars,function(bar,index){
					if (bar.hasValue()){
						bar.base = this.scale.endPoint;
						//Transition then draw
						bar.transition({
							x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
							y : this.scale.calculateY(bar.value),
							width : this.scale.calculateBarWidth(this.datasets.length)
						}, easingDecimal).draw();
					}
				},this);

			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,

		//String - The colour of each segment stroke
		segmentStrokeColor : "#fff",

		//Number - The width of each segment stroke
		segmentStrokeWidth : 2,

		//The percentage of the chart that we cut out of the middle.
		percentageInnerCutout : 50,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect
		animationEasing : "easeOutBounce",

		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,

		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=segments[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"

	};

	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "Doughnut",
		//Providing a defaults will also register the defaults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){

			//Declare segments as a static property to prevent inheriting across the Chart type prototype
			this.segments = [];
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

			this.SegmentArc = Chart.Arc.extend({
				ctx : this.chart.ctx,
				x : this.chart.width/2,
				y : this.chart.height/2
			});

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}
			this.calculateTotal(data);

			helpers.each(data,function(datapoint, index){
				if (!datapoint.color) {
					datapoint.color = 'hsl(' + (360 * index / data.length) + ', 100%, 50%)';
				}
				this.addData(datapoint, index, true);
			},this);

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex !== undefined ? atIndex : this.segments.length;
			if ( typeof(segment.color) === "undefined" ) {
				segment.color = Chart.defaults.global.segmentColorDefault[index % Chart.defaults.global.segmentColorDefault.length];
				segment.highlight = Chart.defaults.global.segmentHighlightColorDefaults[index % Chart.defaults.global.segmentHighlightColorDefaults.length];				
			}
			this.segments.splice(index, 0, new this.SegmentArc({
				value : segment.value,
				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
				fillColor : segment.color,
				highlightColor : segment.highlight || segment.color,
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				startAngle : Math.PI * 1.5,
				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
				label : segment.label
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		calculateCircumference : function(value) {
			if ( this.total > 0 ) {
				return (Math.PI*2)*(value / this.total);
			} else {
				return 0;
			}
		},
		calculateTotal : function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += Math.abs(segment.value);
			},this);
		},
		update : function(){
			this.calculateTotal(this.segments);

			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor']);
			});

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			this.render();
		},

		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},

		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				});
			}, this);
		},
		draw : function(easeDecimal){
			var animDecimal = (easeDecimal) ? easeDecimal : 1;
			this.clear();
			helpers.each(this.segments,function(segment,index){
				segment.transition({
					circumference : this.calculateCircumference(segment.value),
					outerRadius : this.outerRadius,
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
				},animDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				segment.draw();
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}
				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length-1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
			},this);

		}
	});

	Chart.types.Doughnut.extend({
		name : "Pie",
		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
	});

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;

	var defaultConfig = {

		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,

		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,.05)",

		//Number - Width of the grid lines
		scaleGridLineWidth : 1,

		//Boolean - Whether to show horizontal lines (except X axis)
		scaleShowHorizontalLines: true,

		//Boolean - Whether to show vertical lines (except Y axis)
		scaleShowVerticalLines: true,

		//Boolean - Whether the line is curved between points
		bezierCurve : true,

		//Number - Tension of the bezier curve between points
		bezierCurveTension : 0.4,

		//Boolean - Whether to show a dot for each point
		pointDot : true,

		//Number - Radius of each point dot in pixels
		pointDotRadius : 4,

		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth : 1,

		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		pointHitDetectionRadius : 20,

		//Boolean - Whether to show a stroke for datasets
		datasetStroke : true,

		//Number - Pixel width of dataset stroke
		datasetStrokeWidth : 2,

		//Boolean - Whether to fill the dataset with a colour
		datasetFill : true,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].strokeColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",

		//Boolean - Whether to horizontally center the label and point dot inside the grid
		offsetGridLines : false

	};


	Chart.Type.extend({
		name: "Line",
		defaults : defaultConfig,
		initialize:  function(data){
			//Declare the extension of the default point, to cater for the options passed in to the constructor
			this.PointClass = Chart.Point.extend({
				offsetGridLines : this.options.offsetGridLines,
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx,
				inRange : function(mouseX){
					return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
				}
			});

			this.datasets = [];

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePoints, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});
					this.showTooltip(activePoints);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label : dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);


				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

				this.buildScale(data.labels);


				this.eachPoints(function(point, index){
					helpers.extend(point, {
						x: this.scale.calculateX(index),
						y: this.scale.endPoint
					});
					point.save();
				}, this);

			},this);


			this.render();
		},
		update : function(){
			this.scale.update();
			// Reset any highlight colours before updating.
			helpers.each(this.activeElements, function(activeElement){
				activeElement.restore(['fillColor', 'strokeColor']);
			});
			this.eachPoints(function(point){
				point.save();
			});
			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},
		getPointsAtEvent : function(e){
			var pointsArray = [],
				eventPosition = helpers.getRelativePosition(e);
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,function(point){
					if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
				});
			},this);
			return pointsArray;
		},
		buildScale : function(labels){
			var self = this;

			var dataTotal = function(){
				var values = [];
				self.eachPoints(function(point){
					values.push(point.value);
				});

				return values;
			};

			var scaleOptions = {
				templateString : this.options.scaleLabel,
				height : this.chart.height,
				width : this.chart.width,
				ctx : this.chart.ctx,
				textColor : this.options.scaleFontColor,
				offsetGridLines : this.options.offsetGridLines,
				fontSize : this.options.scaleFontSize,
				fontStyle : this.options.scaleFontStyle,
				fontFamily : this.options.scaleFontFamily,
				valuesCount : labels.length,
				beginAtZero : this.options.scaleBeginAtZero,
				integersOnly : this.options.scaleIntegersOnly,
				calculateYRange : function(currentHeight){
					var updatedRanges = helpers.calculateScaleRange(
						dataTotal(),
						currentHeight,
						this.fontSize,
						this.beginAtZero,
						this.integersOnly
					);
					helpers.extend(this, updatedRanges);
				},
				xLabels : labels,
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
				lineWidth : this.options.scaleLineWidth,
				lineColor : this.options.scaleLineColor,
				showHorizontalLines : this.options.scaleShowHorizontalLines,
				showVerticalLines : this.options.scaleShowVerticalLines,
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
				padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
				showLabels : this.options.scaleShowLabels,
				display : this.options.showScale
			};

			if (this.options.scaleOverride){
				helpers.extend(scaleOptions, {
					calculateYRange: helpers.noop,
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				});
			}


			this.scale = new Chart.Scale(scaleOptions);
		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets

			helpers.each(valuesArray,function(value,datasetIndex){
				//Add a new point for each piece of data, passing any required data to draw.
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					datasetLabel: this.datasets[datasetIndex].label,
					x: this.scale.calculateX(this.scale.valuesCount+1),
					y: this.scale.endPoint,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.addXLabel(label);
			//Then re-render the chart.
			this.update();
		},
		removeData : function(){
			this.scale.removeXLabel();
			//Then re-render the chart.
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.update();
		},
		reflow : function(){
			var newScaleProps = helpers.extend({
				height : this.chart.height,
				width : this.chart.width
			});
			this.scale.update(newScaleProps);
		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			this.clear();

			var ctx = this.chart.ctx;

			// Some helper methods for getting the next/prev points
			var hasValue = function(item){
				return item.value !== null;
			},
			nextPoint = function(point, collection, index){
				return helpers.findNextWhere(collection, hasValue, index) || point;
			},
			previousPoint = function(point, collection, index){
				return helpers.findPreviousWhere(collection, hasValue, index) || point;
			};

			if (!this.scale) return;
			this.scale.draw(easingDecimal);


			helpers.each(this.datasets,function(dataset){
				var pointsWithValues = helpers.where(dataset.points, hasValue);

				//Transition each point first so that the line and point drawing isn't out of sync
				//We can use this extra loop to calculate the control points of this dataset also in this loop

				helpers.each(dataset.points, function(point, index){
					if (point.hasValue()){
						point.transition({
							y : this.scale.calculateY(point.value),
							x : this.scale.calculateX(index)
						}, easingDecimal);
					}
				},this);


				// Control points need to be calculated in a separate loop, because we need to know the current x/y of the point
				// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
				if (this.options.bezierCurve){
					helpers.each(pointsWithValues, function(point, index){
						var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
						point.controlPoints = helpers.splineCurve(
							previousPoint(point, pointsWithValues, index),
							point,
							nextPoint(point, pointsWithValues, index),
							tension
						);

						// Prevent the bezier going outside of the bounds of the graph

						// Cap puter bezier handles to the upper/lower scale bounds
						if (point.controlPoints.outer.y > this.scale.endPoint){
							point.controlPoints.outer.y = this.scale.endPoint;
						}
						else if (point.controlPoints.outer.y < this.scale.startPoint){
							point.controlPoints.outer.y = this.scale.startPoint;
						}

						// Cap inner bezier handles to the upper/lower scale bounds
						if (point.controlPoints.inner.y > this.scale.endPoint){
							point.controlPoints.inner.y = this.scale.endPoint;
						}
						else if (point.controlPoints.inner.y < this.scale.startPoint){
							point.controlPoints.inner.y = this.scale.startPoint;
						}
					},this);
				}


				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();

				helpers.each(pointsWithValues, function(point, index){
					if (index === 0){
						ctx.moveTo(point.x, point.y);
					}
					else{
						if(this.options.bezierCurve){
							var previous = previousPoint(point, pointsWithValues, index);

							ctx.bezierCurveTo(
								previous.controlPoints.outer.x,
								previous.controlPoints.outer.y,
								point.controlPoints.inner.x,
								point.controlPoints.inner.y,
								point.x,
								point.y
							);
						}
						else{
							ctx.lineTo(point.x,point.y);
						}
					}
				}, this);

				if (this.options.datasetStroke) {
					ctx.stroke();
				}

				if (this.options.datasetFill && pointsWithValues.length > 0){
					//Round off the line by going to the base of the chart, back to the start, then fill.
					ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
					ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
					ctx.fillStyle = dataset.fillColor;
					ctx.closePath();
					ctx.fill();
				}

				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(pointsWithValues,function(point){
					point.draw();
				});
			},this);
		}
	});


}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		//Cache a local reference to Chart.helpers
		helpers = Chart.helpers;

	var defaultConfig = {
		//Boolean - Show a backdrop to the scale label
		scaleShowLabelBackdrop : true,

		//String - The colour of the label backdrop
		scaleBackdropColor : "rgba(255,255,255,0.75)",

		// Boolean - Whether the scale should begin at zero
		scaleBeginAtZero : true,

		//Number - The backdrop padding above & below the label in pixels
		scaleBackdropPaddingY : 2,

		//Number - The backdrop padding to the side of the label in pixels
		scaleBackdropPaddingX : 2,

		//Boolean - Show line for each value in the scale
		scaleShowLine : true,

		//Boolean - Stroke a line around each segment in the chart
		segmentShowStroke : true,

		//String - The colour of the stroke on each segment.
		segmentStrokeColor : "#fff",

		//Number - The width of the stroke value in pixels
		segmentStrokeWidth : 2,

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect.
		animationEasing : "easeOutBounce",

		//Boolean - Whether to animate the rotation of the chart
		animateRotate : true,

		//Boolean - Whether to animate scaling the chart from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=segments[i].fillColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
	};


	Chart.Type.extend({
		//Passing in a name registers this chart in the Chart namespace
		name: "PolarArea",
		//Providing a defaults will also register the defaults in the chart namespace
		defaults : defaultConfig,
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
		//Config is automatically merged by the core of Chart.js, and is available at this.options
		initialize:  function(data){
			this.segments = [];
			//Declare segment class as a chart instance specific class, so it can share props for this instance
			this.SegmentArc = Chart.Arc.extend({
				showStroke : this.options.segmentShowStroke,
				strokeWidth : this.options.segmentStrokeWidth,
				strokeColor : this.options.segmentStrokeColor,
				ctx : this.chart.ctx,
				innerRadius : 0,
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				lineArc: true,
				width: this.chart.width,
				height: this.chart.height,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				valuesCount: data.length
			});

			this.updateScaleRange(data);

			this.scale.update();

			helpers.each(data,function(segment,index){
				this.addData(segment,index,true);
			},this);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
					helpers.each(this.segments,function(segment){
						segment.restore(["fillColor"]);
					});
					helpers.each(activeSegments,function(activeSegment){
						activeSegment.fillColor = activeSegment.highlightColor;
					});
					this.showTooltip(activeSegments);
				});
			}

			this.render();
		},
		getSegmentsAtEvent : function(e){
			var segmentsArray = [];

			var location = helpers.getRelativePosition(e);

			helpers.each(this.segments,function(segment){
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
			},this);
			return segmentsArray;
		},
		addData : function(segment, atIndex, silent){
			var index = atIndex || this.segments.length;

			this.segments.splice(index, 0, new this.SegmentArc({
				fillColor: segment.color,
				highlightColor: segment.highlight || segment.color,
				label: segment.label,
				value: segment.value,
				outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
				circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
				startAngle: Math.PI * 1.5
			}));
			if (!silent){
				this.reflow();
				this.update();
			}
		},
		removeData: function(atIndex){
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
			this.segments.splice(indexToDelete, 1);
			this.reflow();
			this.update();
		},
		calculateTotal: function(data){
			this.total = 0;
			helpers.each(data,function(segment){
				this.total += segment.value;
			},this);
			this.scale.valuesCount = this.segments.length;
		},
		updateScaleRange: function(datapoints){
			var valuesArray = [];
			helpers.each(datapoints,function(segment){
				valuesArray.push(segment.value);
			});

			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes,
				{
					size: helpers.min([this.chart.width, this.chart.height]),
					xCenter: this.chart.width/2,
					yCenter: this.chart.height/2
				}
			);

		},
		update : function(){
			this.calculateTotal(this.segments);

			helpers.each(this.segments,function(segment){
				segment.save();
			});
			
			this.reflow();
			this.render();
		},
		reflow : function(){
			helpers.extend(this.SegmentArc.prototype,{
				x : this.chart.width/2,
				y : this.chart.height/2
			});
			this.updateScaleRange(this.segments);
			this.scale.update();

			helpers.extend(this.scale,{
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});

			helpers.each(this.segments, function(segment){
				segment.update({
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				});
			}, this);

		},
		draw : function(ease){
			var easingDecimal = ease || 1;
			//Clear & draw the canvas
			this.clear();
			helpers.each(this.segments,function(segment, index){
				segment.transition({
					circumference : this.scale.getCircumference(),
					outerRadius : this.scale.calculateCenterOffset(segment.value)
				},easingDecimal);

				segment.endAngle = segment.startAngle + segment.circumference;

				// If we've removed the first segment we need to set the first one to
				// start at the top.
				if (index === 0){
					segment.startAngle = Math.PI * 1.5;
				}

				//Check to see if it's the last segment, if not get the next and update the start angle
				if (index < this.segments.length - 1){
					this.segments[index+1].startAngle = segment.endAngle;
				}
				segment.draw();
			}, this);
			this.scale.draw();
		}
	});

}).call(this);

(function(){
	"use strict";

	var root = this,
		Chart = root.Chart,
		helpers = Chart.helpers;



	Chart.Type.extend({
		name: "Radar",
		defaults:{
			//Boolean - Whether to show lines for each scale point
			scaleShowLine : true,

			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut : true,

			//Boolean - Whether to show labels on the scale
			scaleShowLabels : false,

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero : true,

			//String - Colour of the angle line
			angleLineColor : "rgba(0,0,0,.1)",

			//Number - Pixel width of the angle line
			angleLineWidth : 1,

			//Number - Interval at which to draw angle lines ("every Nth point")
			angleLineInterval: 1,

			//String - Point label font declaration
			pointLabelFontFamily : "'Arial'",

			//String - Point label font weight
			pointLabelFontStyle : "normal",

			//Number - Point label font size in pixels
			pointLabelFontSize : 10,

			//String - Point label font colour
			pointLabelFontColor : "#666",

			//Boolean - Whether to show a dot for each point
			pointDot : true,

			//Number - Radius of each point dot in pixels
			pointDotRadius : 3,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,

			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span class=\"<%=name.toLowerCase()%>-legend-icon\" style=\"background-color:<%=datasets[i].strokeColor%>\"></span><span class=\"<%=name.toLowerCase()%>-legend-text\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>"

		},

		initialize: function(data){
			this.PointClass = Chart.Point.extend({
				strokeWidth : this.options.pointDotStrokeWidth,
				radius : this.options.pointDotRadius,
				display: this.options.pointDot,
				hitDetectionRadius : this.options.pointHitDetectionRadius,
				ctx : this.chart.ctx
			});

			this.datasets = [];

			this.buildScale(data);

			//Set up tooltip events on the chart
			if (this.options.showTooltips){
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
					var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

					this.eachPoints(function(point){
						point.restore(['fillColor', 'strokeColor']);
					});
					helpers.each(activePointsCollection, function(activePoint){
						activePoint.fillColor = activePoint.highlightFill;
						activePoint.strokeColor = activePoint.highlightStroke;
					});

					this.showTooltip(activePointsCollection);
				});
			}

			//Iterate through each of the datasets, and build this into a property of the chart
			helpers.each(data.datasets,function(dataset){

				var datasetObject = {
					label: dataset.label || null,
					fillColor : dataset.fillColor,
					strokeColor : dataset.strokeColor,
					pointColor : dataset.pointColor,
					pointStrokeColor : dataset.pointStrokeColor,
					points : []
				};

				this.datasets.push(datasetObject);

				helpers.each(dataset.data,function(dataPoint,index){
					//Add a new point for each piece of data, passing any required data to draw.
					var pointPosition;
					if (!this.scale.animation){
						pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
					}
					datasetObject.points.push(new this.PointClass({
						value : dataPoint,
						label : data.labels[index],
						datasetLabel: dataset.label,
						x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
						y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
						strokeColor : dataset.pointStrokeColor,
						fillColor : dataset.pointColor,
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
					}));
				},this);

			},this);

			this.render();
		},
		eachPoints : function(callback){
			helpers.each(this.datasets,function(dataset){
				helpers.each(dataset.points,callback,this);
			},this);
		},

		getPointsAtEvent : function(evt){
			var mousePosition = helpers.getRelativePosition(evt),
				fromCenter = helpers.getAngleFromPoint({
					x: this.scale.xCenter,
					y: this.scale.yCenter
				}, mousePosition);

			var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
				pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
				activePointsCollection = [];

			// If we're at the top, make the pointIndex 0 to get the first of the array.
			if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
				pointIndex = 0;
			}

			if (fromCenter.distance <= this.scale.drawingArea){
				helpers.each(this.datasets, function(dataset){
					activePointsCollection.push(dataset.points[pointIndex]);
				});
			}

			return activePointsCollection;
		},

		buildScale : function(data){
			this.scale = new Chart.RadialScale({
				display: this.options.showScale,
				fontStyle: this.options.scaleFontStyle,
				fontSize: this.options.scaleFontSize,
				fontFamily: this.options.scaleFontFamily,
				fontColor: this.options.scaleFontColor,
				showLabels: this.options.scaleShowLabels,
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
				backdropColor: this.options.scaleBackdropColor,
				backgroundColors: this.options.scaleBackgroundColors,
				backdropPaddingY : this.options.scaleBackdropPaddingY,
				backdropPaddingX: this.options.scaleBackdropPaddingX,
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
				lineColor: this.options.scaleLineColor,
				angleLineColor : this.options.angleLineColor,
				angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
        angleLineInterval: (this.options.angleLineInterval) ? this.options.angleLineInterval : 1,
				// Point labels at the edge of each line
				pointLabelFontColor : this.options.pointLabelFontColor,
				pointLabelFontSize : this.options.pointLabelFontSize,
				pointLabelFontFamily : this.options.pointLabelFontFamily,
				pointLabelFontStyle : this.options.pointLabelFontStyle,
				height : this.chart.height,
				width: this.chart.width,
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2,
				ctx : this.chart.ctx,
				templateString: this.options.scaleLabel,
				labels: data.labels,
				valuesCount: data.datasets[0].data.length
			});

			this.scale.setScaleSize();
			this.updateScaleRange(data.datasets);
			this.scale.buildYLabels();
		},
		updateScaleRange: function(datasets){
			var valuesArray = (function(){
				var totalDataArray = [];
				helpers.each(datasets,function(dataset){
					if (dataset.data){
						totalDataArray = totalDataArray.concat(dataset.data);
					}
					else {
						helpers.each(dataset.points, function(point){
							totalDataArray.push(point.value);
						});
					}
				});
				return totalDataArray;
			})();


			var scaleSizes = (this.options.scaleOverride) ?
				{
					steps: this.options.scaleSteps,
					stepValue: this.options.scaleStepWidth,
					min: this.options.scaleStartValue,
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
				} :
				helpers.calculateScaleRange(
					valuesArray,
					helpers.min([this.chart.width, this.chart.height])/2,
					this.options.scaleFontSize,
					this.options.scaleBeginAtZero,
					this.options.scaleIntegersOnly
				);

			helpers.extend(
				this.scale,
				scaleSizes
			);

		},
		addData : function(valuesArray,label){
			//Map the values array for each of the datasets
			this.scale.valuesCount++;
			helpers.each(valuesArray,function(value,datasetIndex){
				var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
				this.datasets[datasetIndex].points.push(new this.PointClass({
					value : value,
					label : label,
					datasetLabel: this.datasets[datasetIndex].label,
					x: pointPosition.x,
					y: pointPosition.y,
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
					fillColor : this.datasets[datasetIndex].pointColor
				}));
			},this);

			this.scale.labels.push(label);

			this.reflow();

			this.update();
		},
		removeData : function(){
			this.scale.valuesCount--;
			this.scale.labels.shift();
			helpers.each(this.datasets,function(dataset){
				dataset.points.shift();
			},this);
			this.reflow();
			this.update();
		},
		update : function(){
			this.eachPoints(function(point){
				point.save();
			});
			this.reflow();
			this.render();
		},
		reflow: function(){
			helpers.extend(this.scale, {
				width : this.chart.width,
				height: this.chart.height,
				size : helpers.min([this.chart.width, this.chart.height]),
				xCenter: this.chart.width/2,
				yCenter: this.chart.height/2
			});
			this.updateScaleRange(this.datasets);
			this.scale.setScaleSize();
			this.scale.buildYLabels();
		},
		draw : function(ease){
			var easeDecimal = ease || 1,
				ctx = this.chart.ctx;
			this.clear();
			this.scale.draw();

			helpers.each(this.datasets,function(dataset){

				//Transition each point first so that the line and point drawing isn't out of sync
				helpers.each(dataset.points,function(point,index){
					if (point.hasValue()){
						point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
					}
				},this);



				//Draw the line between all the points
				ctx.lineWidth = this.options.datasetStrokeWidth;
				ctx.strokeStyle = dataset.strokeColor;
				ctx.beginPath();
				helpers.each(dataset.points,function(point,index){
					if (index === 0){
						ctx.moveTo(point.x,point.y);
					}
					else{
						ctx.lineTo(point.x,point.y);
					}
				},this);
				ctx.closePath();
				ctx.stroke();

				ctx.fillStyle = dataset.fillColor;
				if(this.options.datasetFill){
					ctx.fill();
				}
				//Now draw the points over the line
				//A little inefficient double looping, but better than the line
				//lagging behind the point positions
				helpers.each(dataset.points,function(point){
					if (point.hasValue()){
						point.draw();
					}
				});

			},this);

		}

	});





}).call(this);

/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function e(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;
return!0}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!!(null==n?0:n.length)&&y(n,t,0)>-1}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function p(n){return n.split("")}function _(n){return n.match(Bt)||[]}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function g(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function y(n,t,r){return t===t?q(n,t,r):g(n,b,r)}function d(n,t,r,e){
for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function b(n){return n!==n}function w(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:Sn}function m(n){return function(t){return null==t?Y:t[n]}}function x(n){return function(t){return null==n?Y:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==Y&&(r=r===Y?i:r+i);
}return r}function O(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function I(n,t){return c(t,function(t){return[t,n[t]]})}function R(n){return function(t){return n(t)}}function z(n,t){return c(t,function(t){return n[t]})}function E(n,t){return n.has(t)}function S(n,t){for(var r=-1,e=n.length;++r<e&&y(t,n[r],0)>-1;);return r}function W(n,t){for(var r=n.length;r--&&y(t,n[r],0)>-1;);return r}function L(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function C(n){return"\\"+Gr[n]}function U(n,t){
return null==n?Y:n[t]}function B(n){return Dr.test(n)}function T(n){return Mr.test(n)}function $(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function M(n,t){return function(r){return n(t(r))}}function F(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==un||(n[r]=un,i[u++]=r)}return i}function N(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function P(n){
var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function q(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function Z(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function K(n){return B(n)?G(n):se(n)}function V(n){return B(n)?H(n):p(n)}function G(n){for(var t=Tr.lastIndex=0;Tr.test(n);)++t;return t}function H(n){return n.match(Tr)||[]}function J(n){return n.match($r)||[]}var Y,Q="4.17.20",X=200,nn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",tn="Expected a function",rn="__lodash_hash_undefined__",en=500,un="__lodash_placeholder__",on=1,fn=2,cn=4,an=1,ln=2,sn=1,hn=2,pn=4,_n=8,vn=16,gn=32,yn=64,dn=128,bn=256,wn=512,mn=30,xn="...",jn=800,An=16,kn=1,On=2,In=3,Rn=1/0,zn=9007199254740991,En=1.7976931348623157e308,Sn=NaN,Wn=4294967295,Ln=Wn-1,Cn=Wn>>>1,Un=[["ary",dn],["bind",sn],["bindKey",hn],["curry",_n],["curryRight",vn],["flip",wn],["partial",gn],["partialRight",yn],["rearg",bn]],Bn="[object Arguments]",Tn="[object Array]",$n="[object AsyncFunction]",Dn="[object Boolean]",Mn="[object Date]",Fn="[object DOMException]",Nn="[object Error]",Pn="[object Function]",qn="[object GeneratorFunction]",Zn="[object Map]",Kn="[object Number]",Vn="[object Null]",Gn="[object Object]",Hn="[object Promise]",Jn="[object Proxy]",Yn="[object RegExp]",Qn="[object Set]",Xn="[object String]",nt="[object Symbol]",tt="[object Undefined]",rt="[object WeakMap]",et="[object WeakSet]",ut="[object ArrayBuffer]",it="[object DataView]",ot="[object Float32Array]",ft="[object Float64Array]",ct="[object Int8Array]",at="[object Int16Array]",lt="[object Int32Array]",st="[object Uint8Array]",ht="[object Uint8ClampedArray]",pt="[object Uint16Array]",_t="[object Uint32Array]",vt=/\b__p \+= '';/g,gt=/\b(__p \+=) '' \+/g,yt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dt=/&(?:amp|lt|gt|quot|#39);/g,bt=/[&<>"']/g,wt=RegExp(dt.source),mt=RegExp(bt.source),xt=/<%-([\s\S]+?)%>/g,jt=/<%([\s\S]+?)%>/g,At=/<%=([\s\S]+?)%>/g,kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ot=/^\w*$/,It=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/[\\^$.*+?()[\]{}|]/g,zt=RegExp(Rt.source),Et=/^\s+|\s+$/g,St=/^\s+/,Wt=/\s+$/,Lt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ct=/\{\n\/\* \[wrapped with (.+)\] \*/,Ut=/,? & /,Bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Tt=/\\(\\)?/g,$t=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Dt=/\w*$/,Mt=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,Nt=/^\[object .+?Constructor\]$/,Pt=/^0o[0-7]+$/i,qt=/^(?:0|[1-9]\d*)$/,Zt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kt=/($^)/,Vt=/['\n\r\u2028\u2029\\]/g,Gt="\\ud800-\\udfff",Ht="\\u0300-\\u036f",Jt="\\ufe20-\\ufe2f",Yt="\\u20d0-\\u20ff",Qt=Ht+Jt+Yt,Xt="\\u2700-\\u27bf",nr="a-z\\xdf-\\xf6\\xf8-\\xff",tr="\\xac\\xb1\\xd7\\xf7",rr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",er="\\u2000-\\u206f",ur=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ir="A-Z\\xc0-\\xd6\\xd8-\\xde",or="\\ufe0e\\ufe0f",fr=tr+rr+er+ur,cr="['\u2019]",ar="["+Gt+"]",lr="["+fr+"]",sr="["+Qt+"]",hr="\\d+",pr="["+Xt+"]",_r="["+nr+"]",vr="[^"+Gt+fr+hr+Xt+nr+ir+"]",gr="\\ud83c[\\udffb-\\udfff]",yr="(?:"+sr+"|"+gr+")",dr="[^"+Gt+"]",br="(?:\\ud83c[\\udde6-\\uddff]){2}",wr="[\\ud800-\\udbff][\\udc00-\\udfff]",mr="["+ir+"]",xr="\\u200d",jr="(?:"+_r+"|"+vr+")",Ar="(?:"+mr+"|"+vr+")",kr="(?:"+cr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+cr+"(?:D|LL|M|RE|S|T|VE))?",Ir=yr+"?",Rr="["+or+"]?",zr="(?:"+xr+"(?:"+[dr,br,wr].join("|")+")"+Rr+Ir+")*",Er="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Sr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wr=Rr+Ir+zr,Lr="(?:"+[pr,br,wr].join("|")+")"+Wr,Cr="(?:"+[dr+sr+"?",sr,br,wr,ar].join("|")+")",Ur=RegExp(cr,"g"),Br=RegExp(sr,"g"),Tr=RegExp(gr+"(?="+gr+")|"+Cr+Wr,"g"),$r=RegExp([mr+"?"+_r+"+"+kr+"(?="+[lr,mr,"$"].join("|")+")",Ar+"+"+Or+"(?="+[lr,mr+jr,"$"].join("|")+")",mr+"?"+jr+"+"+kr,mr+"+"+Or,Sr,Er,hr,Lr].join("|"),"g"),Dr=RegExp("["+xr+Gt+Qt+or+"]"),Mr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Nr=-1,Pr={};
Pr[ot]=Pr[ft]=Pr[ct]=Pr[at]=Pr[lt]=Pr[st]=Pr[ht]=Pr[pt]=Pr[_t]=!0,Pr[Bn]=Pr[Tn]=Pr[ut]=Pr[Dn]=Pr[it]=Pr[Mn]=Pr[Nn]=Pr[Pn]=Pr[Zn]=Pr[Kn]=Pr[Gn]=Pr[Yn]=Pr[Qn]=Pr[Xn]=Pr[rt]=!1;var qr={};qr[Bn]=qr[Tn]=qr[ut]=qr[it]=qr[Dn]=qr[Mn]=qr[ot]=qr[ft]=qr[ct]=qr[at]=qr[lt]=qr[Zn]=qr[Kn]=qr[Gn]=qr[Yn]=qr[Qn]=qr[Xn]=qr[nt]=qr[st]=qr[ht]=qr[pt]=qr[_t]=!0,qr[Nn]=qr[Pn]=qr[rt]=!1;var Zr={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a",
"\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae",
"\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g",
"\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O",
"\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w",
"\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},Kr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Gr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hr=parseFloat,Jr=parseInt,Yr="object"==typeof global&&global&&global.Object===Object&&global,Qr="object"==typeof self&&self&&self.Object===Object&&self,Xr=Yr||Qr||Function("return this")(),ne="object"==typeof exports&&exports&&!exports.nodeType&&exports,te=ne&&"object"==typeof module&&module&&!module.nodeType&&module,re=te&&te.exports===ne,ee=re&&Yr.process,ue=function(){
try{var n=te&&te.require&&te.require("util").types;return n?n:ee&&ee.binding&&ee.binding("util")}catch(n){}}(),ie=ue&&ue.isArrayBuffer,oe=ue&&ue.isDate,fe=ue&&ue.isMap,ce=ue&&ue.isRegExp,ae=ue&&ue.isSet,le=ue&&ue.isTypedArray,se=m("length"),he=x(Zr),pe=x(Kr),_e=x(Vr),ve=function p(x){function q(n){if(oc(n)&&!yh(n)&&!(n instanceof Bt)){if(n instanceof H)return n;if(yl.call(n,"__wrapped__"))return to(n)}return new H(n)}function G(){}function H(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,
this.__index__=0,this.__values__=Y}function Bt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Wn,this.__views__=[]}function Gt(){var n=new Bt(this.__wrapped__);return n.__actions__=Uu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Uu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Uu(this.__views__),n}function Ht(){if(this.__filtered__){var n=new Bt(this);n.__dir__=-1,
n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Jt(){var n=this.__wrapped__.value(),t=this.__dir__,r=yh(n),e=t<0,u=r?n.length:0,i=Ai(0,u,this.__views__),o=i.start,f=i.end,c=f-o,a=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Vl(c,this.__takeCount__);if(!r||!e&&u==c&&p==c)return du(n,this.__actions__);var _=[];n:for(;c--&&h<p;){a+=t;for(var v=-1,g=n[a];++v<s;){var y=l[v],d=y.iteratee,b=y.type,w=d(g);if(b==On)g=w;else if(!w){if(b==kn)continue n;break n}}_[h++]=g}return _}function Yt(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Qt(){this.__data__=es?es(null):{},this.size=0}function Xt(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function nr(n){var t=this.__data__;if(es){var r=t[n];return r===rn?Y:r}return yl.call(t,n)?t[n]:Y}function tr(n){var t=this.__data__;return es?t[n]!==Y:yl.call(t,n)}function rr(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=es&&t===Y?rn:t,this}function er(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function ur(){this.__data__=[],this.size=0}function ir(n){var t=this.__data__,r=Er(t,n);return!(r<0)&&(r==t.length-1?t.pop():Sl.call(t,r,1),--this.size,!0)}function or(n){var t=this.__data__,r=Er(t,n);return r<0?Y:t[r][1]}function fr(n){return Er(this.__data__,n)>-1}function cr(n,t){var r=this.__data__,e=Er(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function ar(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){
var e=n[t];this.set(e[0],e[1])}}function lr(){this.size=0,this.__data__={hash:new Yt,map:new(Xl||er),string:new Yt}}function sr(n){var t=wi(this,n).delete(n);return this.size-=t?1:0,t}function hr(n){return wi(this,n).get(n)}function pr(n){return wi(this,n).has(n)}function _r(n,t){var r=wi(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function vr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new ar;++t<r;)this.add(n[t])}function gr(n){return this.__data__.set(n,rn),this}function yr(n){
return this.__data__.has(n)}function dr(n){this.size=(this.__data__=new er(n)).size}function br(){this.__data__=new er,this.size=0}function wr(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function mr(n){return this.__data__.get(n)}function xr(n){return this.__data__.has(n)}function jr(n,t){var r=this.__data__;if(r instanceof er){var e=r.__data__;if(!Xl||e.length<X-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new ar(e)}return r.set(n,t),this.size=r.size,this}function Ar(n,t){
var r=yh(n),e=!r&&gh(n),u=!r&&!e&&bh(n),i=!r&&!e&&!u&&Ah(n),o=r||e||u||i,f=o?O(n.length,ll):[],c=f.length;for(var a in n)!t&&!yl.call(n,a)||o&&("length"==a||u&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Wi(a,c))||f.push(a);return f}function kr(n){var t=n.length;return t?n[Xe(0,t-1)]:Y}function Or(n,t){return Yi(Uu(n),$r(t,0,n.length))}function Ir(n){return Yi(Uu(n))}function Rr(n,t,r){(r===Y||Kf(n[t],r))&&(r!==Y||t in n)||Cr(n,t,r)}function zr(n,t,r){var e=n[t];
yl.call(n,t)&&Kf(e,r)&&(r!==Y||t in n)||Cr(n,t,r)}function Er(n,t){for(var r=n.length;r--;)if(Kf(n[r][0],t))return r;return-1}function Sr(n,t,r,e){return vs(n,function(n,u,i){t(e,n,r(n),i)}),e}function Wr(n,t){return n&&Bu(t,Fc(t),n)}function Lr(n,t){return n&&Bu(t,Nc(t),n)}function Cr(n,t,r){"__proto__"==t&&Ul?Ul(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Tr(n,t){for(var r=-1,e=t.length,u=el(e),i=null==n;++r<e;)u[r]=i?Y:$c(n,t[r]);return u}function $r(n,t,r){return n===n&&(r!==Y&&(n=n<=r?n:r),
t!==Y&&(n=n>=t?n:t)),n}function Dr(n,t,e,u,i,o){var f,c=t&on,a=t&fn,l=t&cn;if(e&&(f=i?e(n,u,i,o):e(n)),f!==Y)return f;if(!ic(n))return n;var s=yh(n);if(s){if(f=Ii(n),!c)return Uu(n,f)}else{var h=Is(n),p=h==Pn||h==qn;if(bh(n))return ku(n,c);if(h==Gn||h==Bn||p&&!i){if(f=a||p?{}:Ri(n),!c)return a?$u(n,Lr(f,n)):Tu(n,Wr(f,n))}else{if(!qr[h])return i?n:{};f=zi(n,h,c)}}o||(o=new dr);var _=o.get(n);if(_)return _;o.set(n,f),jh(n)?n.forEach(function(r){f.add(Dr(r,t,e,r,n,o))}):mh(n)&&n.forEach(function(r,u){
f.set(u,Dr(r,t,e,u,n,o))});var v=l?a?gi:vi:a?Nc:Fc,g=s?Y:v(n);return r(g||n,function(r,u){g&&(u=r,r=n[u]),zr(f,u,Dr(r,t,e,u,n,o))}),f}function Mr(n){var t=Fc(n);return function(r){return Zr(r,n,t)}}function Zr(n,t,r){var e=r.length;if(null==n)return!e;for(n=cl(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===Y&&!(u in n)||!i(o))return!1}return!0}function Kr(n,t,r){if("function"!=typeof n)throw new sl(tn);return Es(function(){n.apply(Y,r)},t)}function Vr(n,t,r,e){var u=-1,i=o,a=!0,l=n.length,s=[],h=t.length;
if(!l)return s;r&&(t=c(t,R(r))),e?(i=f,a=!1):t.length>=X&&(i=E,a=!1,t=new vr(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p);if(p=e||0!==p?p:0,a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function Gr(n,t){var r=!0;return vs(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Yr(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===Y?o===o&&!yc(o):r(o,f)))var f=o,c=i}return c}function Qr(n,t,r,e){var u=n.length;for(r=jc(r),r<0&&(r=-r>u?0:u+r),
e=e===Y||e>u?u:jc(e),e<0&&(e+=u),e=r>e?0:Ac(e);r<e;)n[r++]=t;return n}function ne(n,t){var r=[];return vs(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function te(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Si),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?te(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function ee(n,t){return n&&ys(n,t,Fc)}function ue(n,t){return n&&ds(n,t,Fc)}function se(n,t){return i(t,function(t){return rc(n[t])})}function ve(n,t){t=ju(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Qi(t[r++])];
return r&&r==e?n:Y}function ye(n,t,r){var e=t(n);return yh(n)?e:a(e,r(n))}function de(n){return null==n?n===Y?tt:Vn:Cl&&Cl in cl(n)?ji(n):qi(n)}function be(n,t){return n>t}function we(n,t){return null!=n&&yl.call(n,t)}function me(n,t){return null!=n&&t in cl(n)}function xe(n,t,r){return n>=Vl(t,r)&&n<Kl(t,r)}function je(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=el(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,R(t))),s=Vl(p.length,s),l[a]=!r&&(t||u>=120&&p.length>=120)?new vr(a&&p):Y}p=n[0];
var _=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],y=t?t(g):g;if(g=r||0!==g?g:0,!(v?E(v,y):e(h,y,r))){for(a=i;--a;){var d=l[a];if(!(d?E(d,y):e(n[a],y,r)))continue n}v&&v.push(y),h.push(g)}}return h}function Ae(n,t,r,e){return ee(n,function(n,u,i){t(e,r(n),u,i)}),e}function ke(t,r,e){r=ju(r,t),t=Ki(t,r);var u=null==t?t:t[Qi(mo(r))];return null==u?Y:n(u,t,e)}function Oe(n){return oc(n)&&de(n)==Bn}function Ie(n){return oc(n)&&de(n)==ut}function Re(n){return oc(n)&&de(n)==Mn}function ze(n,t,r,e,u){
return n===t||(null==n||null==t||!oc(n)&&!oc(t)?n!==n&&t!==t:Ee(n,t,r,e,ze,u))}function Ee(n,t,r,e,u,i){var o=yh(n),f=yh(t),c=o?Tn:Is(n),a=f?Tn:Is(t);c=c==Bn?Gn:c,a=a==Bn?Gn:a;var l=c==Gn,s=a==Gn,h=c==a;if(h&&bh(n)){if(!bh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new dr),o||Ah(n)?si(n,t,r,e,u,i):hi(n,t,c,r,e,u,i);if(!(r&an)){var p=l&&yl.call(n,"__wrapped__"),_=s&&yl.call(t,"__wrapped__");if(p||_){var v=p?n.value():n,g=_?t.value():t;return i||(i=new dr),u(v,g,r,e,i)}}return!!h&&(i||(i=new dr),pi(n,t,r,e,u,i));
}function Se(n){return oc(n)&&Is(n)==Zn}function We(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=cl(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===Y&&!(c in n))return!1}else{var s=new dr;if(e)var h=e(a,l,c,n,t,s);if(!(h===Y?ze(l,a,an|ln,e,s):h))return!1}}return!0}function Le(n){return!(!ic(n)||Ti(n))&&(rc(n)?jl:Nt).test(Xi(n))}function Ce(n){return oc(n)&&de(n)==Yn}function Ue(n){return oc(n)&&Is(n)==Qn;
}function Be(n){return oc(n)&&uc(n.length)&&!!Pr[de(n)]}function Te(n){return"function"==typeof n?n:null==n?Sa:"object"==typeof n?yh(n)?Pe(n[0],n[1]):Ne(n):Da(n)}function $e(n){if(!$i(n))return Zl(n);var t=[];for(var r in cl(n))yl.call(n,r)&&"constructor"!=r&&t.push(r);return t}function De(n){if(!ic(n))return Pi(n);var t=$i(n),r=[];for(var e in n)("constructor"!=e||!t&&yl.call(n,e))&&r.push(e);return r}function Me(n,t){return n<t}function Fe(n,t){var r=-1,e=Vf(n)?el(n.length):[];return vs(n,function(n,u,i){
e[++r]=t(n,u,i)}),e}function Ne(n){var t=mi(n);return 1==t.length&&t[0][2]?Mi(t[0][0],t[0][1]):function(r){return r===n||We(r,n,t)}}function Pe(n,t){return Ci(n)&&Di(t)?Mi(Qi(n),t):function(r){var e=$c(r,n);return e===Y&&e===t?Mc(r,n):ze(t,e,an|ln)}}function qe(n,t,r,e,u){n!==t&&ys(t,function(i,o){if(u||(u=new dr),ic(i))Ze(n,t,o,r,qe,e,u);else{var f=e?e(Gi(n,o),i,o+"",n,t,u):Y;f===Y&&(f=i),Rr(n,o,f)}},Nc)}function Ze(n,t,r,e,u,i,o){var f=Gi(n,r),c=Gi(t,r),a=o.get(c);if(a)return Rr(n,r,a),Y;var l=i?i(f,c,r+"",n,t,o):Y,s=l===Y;
if(s){var h=yh(c),p=!h&&bh(c),_=!h&&!p&&Ah(c);l=c,h||p||_?yh(f)?l=f:Gf(f)?l=Uu(f):p?(s=!1,l=ku(c,!0)):_?(s=!1,l=Eu(c,!0)):l=[]:_c(c)||gh(c)?(l=f,gh(f)?l=Oc(f):ic(f)&&!rc(f)||(l=Ri(c))):s=!1}s&&(o.set(c,l),u(l,c,e,i,o),o.delete(c)),Rr(n,r,l)}function Ke(n,t){var r=n.length;if(r)return t+=t<0?r:0,Wi(t,r)?n[t]:Y}function Ve(n,t,r){t=t.length?c(t,function(n){return yh(n)?function(t){return ve(t,1===n.length?n[0]:n)}:n}):[Sa];var e=-1;return t=c(t,R(bi())),A(Fe(n,function(n,r,u){return{criteria:c(t,function(t){
return t(n)}),index:++e,value:n}}),function(n,t){return Wu(n,t,r)})}function Ge(n,t){return He(n,t,function(t,r){return Mc(n,r)})}function He(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=ve(n,o);r(f,o)&&iu(i,ju(o,n),f)}return i}function Je(n){return function(t){return ve(t,n)}}function Ye(n,t,r,e){var u=e?d:y,i=-1,o=t.length,f=n;for(n===t&&(t=Uu(t)),r&&(f=c(n,R(r)));++i<o;)for(var a=0,l=t[i],s=r?r(l):l;(a=u(f,s,a,e))>-1;)f!==n&&Sl.call(f,a,1),Sl.call(n,a,1);return n}function Qe(n,t){for(var r=n?t.length:0,e=r-1;r--;){
var u=t[r];if(r==e||u!==i){var i=u;Wi(u)?Sl.call(n,u,1):vu(n,u)}}return n}function Xe(n,t){return n+Ml(Jl()*(t-n+1))}function nu(n,t,r,e){for(var u=-1,i=Kl(Dl((t-n)/(r||1)),0),o=el(i);i--;)o[e?i:++u]=n,n+=r;return o}function tu(n,t){var r="";if(!n||t<1||t>zn)return r;do t%2&&(r+=n),t=Ml(t/2),t&&(n+=n);while(t);return r}function ru(n,t){return Ss(Zi(n,t,Sa),n+"")}function eu(n){return kr(na(n))}function uu(n,t){var r=na(n);return Yi(r,$r(t,0,r.length))}function iu(n,t,r,e){if(!ic(n))return n;t=ju(t,n);
for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=Qi(t[u]),a=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return n;if(u!=o){var l=f[c];a=e?e(l,c,f):Y,a===Y&&(a=ic(l)?l:Wi(t[u+1])?[]:{})}zr(f,c,a),f=f[c]}return n}function ou(n){return Yi(na(n))}function fu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=el(u);++e<u;)i[e]=n[e+t];return i}function cu(n,t){var r;return vs(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function au(n,t,r){
var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Cn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!yc(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return lu(n,t,Sa,r)}function lu(n,t,r,e){var u=0,i=null==n?0:n.length;if(0===i)return 0;t=r(t);for(var o=t!==t,f=null===t,c=yc(t),a=t===Y;u<i;){var l=Ml((u+i)/2),s=r(n[l]),h=s!==Y,p=null===s,_=s===s,v=yc(s);if(o)var g=e||_;else g=a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):!p&&!v&&(e?s<=t:s<t);g?u=l+1:i=l}return Vl(i,Ln)}function su(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
var o=n[r],f=t?t(o):o;if(!r||!Kf(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function hu(n){return"number"==typeof n?n:yc(n)?Sn:+n}function pu(n){if("string"==typeof n)return n;if(yh(n))return c(n,pu)+"";if(yc(n))return ps?ps.call(n):"";var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function _u(n,t,r){var e=-1,u=o,i=n.length,c=!0,a=[],l=a;if(r)c=!1,u=f;else if(i>=X){var s=t?null:js(n);if(s)return N(s);c=!1,u=E,l=new vr}else l=t?[]:a;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,c&&p===p){for(var _=l.length;_--;)if(l[_]===p)continue n;
t&&l.push(p),a.push(h)}else u(l,p,r)||(l!==a&&l.push(p),a.push(h))}return a}function vu(n,t){return t=ju(t,n),n=Ki(n,t),null==n||delete n[Qi(mo(t))]}function gu(n,t,r,e){return iu(n,t,r(ve(n,t)),e)}function yu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?fu(n,e?0:i,e?i+1:u):fu(n,e?i+1:0,e?u:i)}function du(n,t){var r=n;return r instanceof Bt&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function bu(n,t,r){var e=n.length;if(e<2)return e?_u(n[0]):[];
for(var u=-1,i=el(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Vr(i[u]||o,n[f],t,r));return _u(te(i,1),t,r)}function wu(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){r(o,n[e],e<i?t[e]:Y)}return o}function mu(n){return Gf(n)?n:[]}function xu(n){return"function"==typeof n?n:Sa}function ju(n,t){return yh(n)?n:Ci(n,t)?[n]:Ws(Rc(n))}function Au(n,t,r){var e=n.length;return r=r===Y?e:r,!t&&r>=e?n:fu(n,t,r)}function ku(n,t){if(t)return n.slice();var r=n.length,e=Il?Il(r):new n.constructor(r);
return n.copy(e),e}function Ou(n){var t=new n.constructor(n.byteLength);return new Ol(t).set(new Ol(n)),t}function Iu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.byteLength)}function Ru(n){var t=new n.constructor(n.source,Dt.exec(n));return t.lastIndex=n.lastIndex,t}function zu(n){return hs?cl(hs.call(n)):{}}function Eu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.length)}function Su(n,t){if(n!==t){var r=n!==Y,e=null===n,u=n===n,i=yc(n),o=t!==Y,f=null===t,c=t===t,a=yc(t);
if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Wu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var c=Su(u[e],i[e]);if(c){if(e>=f)return c;return c*("desc"==r[e]?-1:1)}}return n.index-t.index}function Lu(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Kl(i-o,0),l=el(c+a),s=!e;++f<c;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l;
}function Cu(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Kl(i-f,0),s=el(l+a),h=!e;++u<l;)s[u]=n[u];for(var p=u;++c<a;)s[p+c]=t[c];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Uu(n,t){var r=-1,e=n.length;for(t||(t=el(e));++r<e;)t[r]=n[r];return t}function Bu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):Y;c===Y&&(c=n[f]),u?Cr(r,f,c):zr(r,f,c)}return r}function Tu(n,t){return Bu(n,ks(n),t)}function $u(n,t){return Bu(n,Os(n),t);
}function Du(n,r){return function(e,u){var i=yh(e)?t:Sr,o=r?r():{};return i(e,n,bi(u,2),o)}}function Mu(n){return ru(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:Y,o=u>2?r[2]:Y;for(i=n.length>3&&"function"==typeof i?(u--,i):Y,o&&Li(r[0],r[1],o)&&(i=u<3?Y:i,u=1),t=cl(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Fu(n,t){return function(r,e){if(null==r)return r;if(!Vf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=cl(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Nu(n){return function(t,r,e){
for(var u=-1,i=cl(t),o=e(t),f=o.length;f--;){var c=o[n?f:++u];if(r(i[c],c,i)===!1)break}return t}}function Pu(n,t,r){function e(){return(this&&this!==Xr&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=t&sn,i=Ku(n);return e}function qu(n){return function(t){t=Rc(t);var r=B(t)?V(t):Y,e=r?r[0]:t.charAt(0),u=r?Au(r,1).join(""):t.slice(1);return e[n]()+u}}function Zu(n){return function(t){return l(Oa(oa(t).replace(Ur,"")),n,"")}}function Ku(n){return function(){var t=arguments;switch(t.length){
case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=_s(n.prototype),e=n.apply(r,t);return ic(e)?e:r}}function Vu(t,r,e){function u(){for(var o=arguments.length,f=el(o),c=o,a=di(u);c--;)f[c]=arguments[c];var l=o<3&&f[0]!==a&&f[o-1]!==a?[]:F(f,a);
return o-=l.length,o<e?ui(t,r,Ju,u.placeholder,Y,f,l,Y,Y,e-o):n(this&&this!==Xr&&this instanceof u?i:t,this,f)}var i=Ku(t);return u}function Gu(n){return function(t,r,e){var u=cl(t);if(!Vf(t)){var i=bi(r,3);t=Fc(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:Y}}function Hu(n){return _i(function(t){var r=t.length,e=r,u=H.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new sl(tn);if(u&&!o&&"wrapper"==yi(i))var o=new H([],!0)}for(e=o?e:r;++e<r;){
i=t[e];var f=yi(i),c="wrapper"==f?As(i):Y;o=c&&Bi(c[0])&&c[1]==(dn|_n|gn|bn)&&!c[4].length&&1==c[9]?o[yi(c[0])].apply(o,c[3]):1==i.length&&Bi(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&yh(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function Ju(n,t,r,e,u,i,o,f,c,a){function l(){for(var y=arguments.length,d=el(y),b=y;b--;)d[b]=arguments[b];if(_)var w=di(l),m=L(d,w);if(e&&(d=Lu(d,e,u,_)),i&&(d=Cu(d,i,o,_)),
y-=m,_&&y<a){return ui(n,t,Ju,l.placeholder,r,d,F(d,w),f,c,a-y)}var x=h?r:this,j=p?x[n]:n;return y=d.length,f?d=Vi(d,f):v&&y>1&&d.reverse(),s&&c<y&&(d.length=c),this&&this!==Xr&&this instanceof l&&(j=g||Ku(j)),j.apply(x,d)}var s=t&dn,h=t&sn,p=t&hn,_=t&(_n|vn),v=t&wn,g=p?Y:Ku(n);return l}function Yu(n,t){return function(r,e){return Ae(r,n,t(e),{})}}function Qu(n,t){return function(r,e){var u;if(r===Y&&e===Y)return t;if(r!==Y&&(u=r),e!==Y){if(u===Y)return e;"string"==typeof r||"string"==typeof e?(r=pu(r),
e=pu(e)):(r=hu(r),e=hu(e)),u=n(r,e)}return u}}function Xu(t){return _i(function(r){return r=c(r,R(bi())),ru(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ni(n,t){t=t===Y?" ":pu(t);var r=t.length;if(r<2)return r?tu(t,n):t;var e=tu(t,Dl(n/K(t)));return B(t)?Au(V(e),0,n).join(""):e.slice(0,n)}function ti(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=el(l+c),h=this&&this!==Xr&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];
return n(h,o?e:this,s)}var o=r&sn,f=Ku(t);return i}function ri(n){return function(t,r,e){return e&&"number"!=typeof e&&Li(t,r,e)&&(r=e=Y),t=xc(t),r===Y?(r=t,t=0):r=xc(r),e=e===Y?t<r?1:-1:xc(e),nu(t,r,e,n)}}function ei(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=kc(t),r=kc(r)),n(t,r)}}function ui(n,t,r,e,u,i,o,f,c,a){var l=t&_n,s=l?o:Y,h=l?Y:o,p=l?i:Y,_=l?Y:i;t|=l?gn:yn,t&=~(l?yn:gn),t&pn||(t&=~(sn|hn));var v=[n,t,u,p,s,_,h,f,c,a],g=r.apply(Y,v);return Bi(n)&&zs(g,v),g.placeholder=e,
Hi(g,n,t)}function ii(n){var t=fl[n];return function(n,r){if(n=kc(n),r=null==r?0:Vl(jc(r),292),r&&Pl(n)){var e=(Rc(n)+"e").split("e");return e=(Rc(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oi(n){return function(t){var r=Is(t);return r==Zn?D(t):r==Qn?P(t):I(t,n(t))}}function fi(n,t,r,e,u,i,o,f){var c=t&hn;if(!c&&"function"!=typeof n)throw new sl(tn);var a=e?e.length:0;if(a||(t&=~(gn|yn),e=u=Y),o=o===Y?o:Kl(jc(o),0),f=f===Y?f:jc(f),a-=u?u.length:0,t&yn){var l=e,s=u;
e=u=Y}var h=c?Y:As(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Ni(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===Y?c?0:n.length:Kl(p[9]-a,0),!f&&t&(_n|vn)&&(t&=~(_n|vn)),t&&t!=sn)_=t==_n||t==vn?Vu(n,t,f):t!=gn&&t!=(sn|gn)||u.length?Ju.apply(Y,p):ti(n,t,r,e);else var _=Pu(n,t,r);return Hi((h?bs:zs)(_,p),n,t)}function ci(n,t,r,e){return n===Y||Kf(n,_l[r])&&!yl.call(e,r)?t:n}function ai(n,t,r,e,u,i){return ic(n)&&ic(t)&&(i.set(t,n),qe(n,t,Y,ai,i),i.delete(t)),n}function li(n){return _c(n)?Y:n}function si(n,t,r,e,u,i){
var o=r&an,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return!1;var a=i.get(n),l=i.get(t);if(a&&l)return a==t&&l==n;var s=-1,p=!0,_=r&ln?new vr:Y;for(i.set(n,t),i.set(t,n);++s<f;){var v=n[s],g=t[s];if(e)var y=o?e(g,v,s,t,n,i):e(v,g,s,n,t,i);if(y!==Y){if(y)continue;p=!1;break}if(_){if(!h(t,function(n,t){if(!E(_,t)&&(v===n||u(v,n,r,e,i)))return _.push(t)})){p=!1;break}}else if(v!==g&&!u(v,g,r,e,i)){p=!1;break}}return i.delete(n),i.delete(t),p}function hi(n,t,r,e,u,i,o){switch(r){case it:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;
n=n.buffer,t=t.buffer;case ut:return!(n.byteLength!=t.byteLength||!i(new Ol(n),new Ol(t)));case Dn:case Mn:case Kn:return Kf(+n,+t);case Nn:return n.name==t.name&&n.message==t.message;case Yn:case Xn:return n==t+"";case Zn:var f=D;case Qn:var c=e&an;if(f||(f=N),n.size!=t.size&&!c)return!1;var a=o.get(n);if(a)return a==t;e|=ln,o.set(n,t);var l=si(f(n),f(t),e,u,i,o);return o.delete(n),l;case nt:if(hs)return hs.call(n)==hs.call(t)}return!1}function pi(n,t,r,e,u,i){var o=r&an,f=vi(n),c=f.length;if(c!=vi(t).length&&!o)return!1;
for(var a=c;a--;){var l=f[a];if(!(o?l in t:yl.call(t,l)))return!1}var s=i.get(n),h=i.get(t);if(s&&h)return s==t&&h==n;var p=!0;i.set(n,t),i.set(t,n);for(var _=o;++a<c;){l=f[a];var v=n[l],g=t[l];if(e)var y=o?e(g,v,l,t,n,i):e(v,g,l,n,t,i);if(!(y===Y?v===g||u(v,g,r,e,i):y)){p=!1;break}_||(_="constructor"==l)}if(p&&!_){var d=n.constructor,b=t.constructor;d!=b&&"constructor"in n&&"constructor"in t&&!("function"==typeof d&&d instanceof d&&"function"==typeof b&&b instanceof b)&&(p=!1)}return i.delete(n),
i.delete(t),p}function _i(n){return Ss(Zi(n,Y,ho),n+"")}function vi(n){return ye(n,Fc,ks)}function gi(n){return ye(n,Nc,Os)}function yi(n){for(var t=n.name+"",r=is[t],e=yl.call(is,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function di(n){return(yl.call(q,"placeholder")?q:n).placeholder}function bi(){var n=q.iteratee||Wa;return n=n===Wa?Te:n,arguments.length?n(arguments[0],arguments[1]):n}function wi(n,t){var r=n.__data__;return Ui(t)?r["string"==typeof t?"string":"hash"]:r.map;
}function mi(n){for(var t=Fc(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Di(u)]}return t}function xi(n,t){var r=U(n,t);return Le(r)?r:Y}function ji(n){var t=yl.call(n,Cl),r=n[Cl];try{n[Cl]=Y;var e=!0}catch(n){}var u=wl.call(n);return e&&(t?n[Cl]=r:delete n[Cl]),u}function Ai(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Vl(t,n+o);break;case"takeRight":n=Kl(n,t-o)}}return{start:n,end:t}}function ki(n){var t=n.match(Ct);
return t?t[1].split(Ut):[]}function Oi(n,t,r){t=ju(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=Qi(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&uc(u)&&Wi(o,u)&&(yh(n)||gh(n)))}function Ii(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&yl.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ri(n){return"function"!=typeof n.constructor||$i(n)?{}:_s(Rl(n))}function zi(n,t,r){var e=n.constructor;switch(t){case ut:return Ou(n);
case Dn:case Mn:return new e(+n);case it:return Iu(n,r);case ot:case ft:case ct:case at:case lt:case st:case ht:case pt:case _t:return Eu(n,r);case Zn:return new e;case Kn:case Xn:return new e(n);case Yn:return Ru(n);case Qn:return new e;case nt:return zu(n)}}function Ei(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Lt,"{\n/* [wrapped with "+t+"] */\n")}function Si(n){return yh(n)||gh(n)||!!(Wl&&n&&n[Wl])}function Wi(n,t){var r=typeof n;
return t=null==t?zn:t,!!t&&("number"==r||"symbol"!=r&&qt.test(n))&&n>-1&&n%1==0&&n<t}function Li(n,t,r){if(!ic(r))return!1;var e=typeof t;return!!("number"==e?Vf(r)&&Wi(t,r.length):"string"==e&&t in r)&&Kf(r[t],n)}function Ci(n,t){if(yh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!yc(n))||(Ot.test(n)||!kt.test(n)||null!=t&&n in cl(t))}function Ui(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Bi(n){
var t=yi(n),r=q[t];if("function"!=typeof r||!(t in Bt.prototype))return!1;if(n===r)return!0;var e=As(r);return!!e&&n===e[0]}function Ti(n){return!!bl&&bl in n}function $i(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||_l)}function Di(n){return n===n&&!ic(n)}function Mi(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==Y||n in cl(r)))}}function Fi(n){var t=Wf(n,function(n){return r.size===en&&r.clear(),n}),r=t.cache;return t}function Ni(n,t){var r=n[1],e=t[1],u=r|e,i=u<(sn|hn|dn),o=e==dn&&r==_n||e==dn&&r==bn&&n[7].length<=t[8]||e==(dn|bn)&&t[7].length<=t[8]&&r==_n;
if(!i&&!o)return n;e&sn&&(n[2]=t[2],u|=r&sn?0:pn);var f=t[3];if(f){var c=n[3];n[3]=c?Lu(c,f,t[4]):f,n[4]=c?F(n[3],un):t[4]}return f=t[5],f&&(c=n[5],n[5]=c?Cu(c,f,t[6]):f,n[6]=c?F(n[5],un):t[6]),f=t[7],f&&(n[7]=f),e&dn&&(n[8]=null==n[8]?t[8]:Vl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Pi(n){var t=[];if(null!=n)for(var r in cl(n))t.push(r);return t}function qi(n){return wl.call(n)}function Zi(t,r,e){return r=Kl(r===Y?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Kl(u.length-r,0),f=el(o);++i<o;)f[i]=u[r+i];
i=-1;for(var c=el(r+1);++i<r;)c[i]=u[i];return c[r]=e(f),n(t,this,c)}}function Ki(n,t){return t.length<2?n:ve(n,fu(t,0,-1))}function Vi(n,t){for(var r=n.length,e=Vl(t.length,r),u=Uu(n);e--;){var i=t[e];n[e]=Wi(i,r)?u[i]:Y}return n}function Gi(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}function Hi(n,t,r){var e=t+"";return Ss(n,Ei(e,no(ki(e),r)))}function Ji(n){var t=0,r=0;return function(){var e=Gl(),u=An-(e-r);if(r=e,u>0){if(++t>=jn)return arguments[0]}else t=0;
return n.apply(Y,arguments)}}function Yi(n,t){var r=-1,e=n.length,u=e-1;for(t=t===Y?e:t;++r<t;){var i=Xe(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function Qi(n){if("string"==typeof n||yc(n))return n;var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function Xi(n){if(null!=n){try{return gl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function no(n,t){return r(Un,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function to(n){if(n instanceof Bt)return n.clone();var t=new H(n.__wrapped__,n.__chain__);
return t.__actions__=Uu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function ro(n,t,r){t=(r?Li(n,t,r):t===Y)?1:Kl(jc(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=el(Dl(e/t));u<e;)o[i++]=fu(n,u,u+=t);return o}function eo(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function uo(){var n=arguments.length;if(!n)return[];for(var t=el(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return a(yh(r)?Uu(r):[r],te(t,1));
}function io(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),fu(n,t<0?0:t,e)):[]}function oo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,0,t<0?0:t)):[]}function fo(n,t){return n&&n.length?yu(n,bi(t,3),!0,!0):[]}function co(n,t){return n&&n.length?yu(n,bi(t,3),!0):[]}function ao(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Li(n,t,r)&&(r=0,e=u),Qr(n,t,r,e)):[]}function lo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);
return u<0&&(u=Kl(e+u,0)),g(n,bi(t,3),u)}function so(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==Y&&(u=jc(r),u=r<0?Kl(e+u,0):Vl(u,e-1)),g(n,bi(t,3),u,!0)}function ho(n){return(null==n?0:n.length)?te(n,1):[]}function po(n){return(null==n?0:n.length)?te(n,Rn):[]}function _o(n,t){return(null==n?0:n.length)?(t=t===Y?1:jc(t),te(n,t)):[]}function vo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function go(n){return n&&n.length?n[0]:Y}function yo(n,t,r){
var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);return u<0&&(u=Kl(e+u,0)),y(n,t,u)}function bo(n){return(null==n?0:n.length)?fu(n,0,-1):[]}function wo(n,t){return null==n?"":ql.call(n,t)}function mo(n){var t=null==n?0:n.length;return t?n[t-1]:Y}function xo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==Y&&(u=jc(r),u=u<0?Kl(e+u,0):Vl(u,e-1)),t===t?Z(n,t,u):g(n,b,u,!0)}function jo(n,t){return n&&n.length?Ke(n,jc(t)):Y}function Ao(n,t){return n&&n.length&&t&&t.length?Ye(n,t):n;
}function ko(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,bi(r,2)):n}function Oo(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,Y,r):n}function Io(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=bi(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return Qe(n,u),r}function Ro(n){return null==n?n:Yl.call(n)}function zo(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Li(n,t,r)?(t=0,r=e):(t=null==t?0:jc(t),r=r===Y?e:jc(r)),fu(n,t,r)):[]}function Eo(n,t){
return au(n,t)}function So(n,t,r){return lu(n,t,bi(r,2))}function Wo(n,t){var r=null==n?0:n.length;if(r){var e=au(n,t);if(e<r&&Kf(n[e],t))return e}return-1}function Lo(n,t){return au(n,t,!0)}function Co(n,t,r){return lu(n,t,bi(r,2),!0)}function Uo(n,t){if(null==n?0:n.length){var r=au(n,t,!0)-1;if(Kf(n[r],t))return r}return-1}function Bo(n){return n&&n.length?su(n):[]}function To(n,t){return n&&n.length?su(n,bi(t,2)):[]}function $o(n){var t=null==n?0:n.length;return t?fu(n,1,t):[]}function Do(n,t,r){
return n&&n.length?(t=r||t===Y?1:jc(t),fu(n,0,t<0?0:t)):[]}function Mo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,t<0?0:t,e)):[]}function Fo(n,t){return n&&n.length?yu(n,bi(t,3),!1,!0):[]}function No(n,t){return n&&n.length?yu(n,bi(t,3)):[]}function Po(n){return n&&n.length?_u(n):[]}function qo(n,t){return n&&n.length?_u(n,bi(t,2)):[]}function Zo(n,t){return t="function"==typeof t?t:Y,n&&n.length?_u(n,Y,t):[]}function Ko(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){
if(Gf(n))return t=Kl(n.length,t),!0}),O(t,function(t){return c(n,m(t))})}function Vo(t,r){if(!t||!t.length)return[];var e=Ko(t);return null==r?e:c(e,function(t){return n(r,Y,t)})}function Go(n,t){return wu(n||[],t||[],zr)}function Ho(n,t){return wu(n||[],t||[],iu)}function Jo(n){var t=q(n);return t.__chain__=!0,t}function Yo(n,t){return t(n),n}function Qo(n,t){return t(n)}function Xo(){return Jo(this)}function nf(){return new H(this.value(),this.__chain__)}function tf(){this.__values__===Y&&(this.__values__=mc(this.value()));
var n=this.__index__>=this.__values__.length;return{done:n,value:n?Y:this.__values__[this.__index__++]}}function rf(){return this}function ef(n){for(var t,r=this;r instanceof G;){var e=to(r);e.__index__=0,e.__values__=Y,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function uf(){var n=this.__wrapped__;if(n instanceof Bt){var t=n;return this.__actions__.length&&(t=new Bt(this)),t=t.reverse(),t.__actions__.push({func:Qo,args:[Ro],thisArg:Y}),new H(t,this.__chain__)}return this.thru(Ro);
}function of(){return du(this.__wrapped__,this.__actions__)}function ff(n,t,r){var e=yh(n)?u:Gr;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function cf(n,t){return(yh(n)?i:ne)(n,bi(t,3))}function af(n,t){return te(vf(n,t),1)}function lf(n,t){return te(vf(n,t),Rn)}function sf(n,t,r){return r=r===Y?1:jc(r),te(vf(n,t),r)}function hf(n,t){return(yh(n)?r:vs)(n,bi(t,3))}function pf(n,t){return(yh(n)?e:gs)(n,bi(t,3))}function _f(n,t,r,e){n=Vf(n)?n:na(n),r=r&&!e?jc(r):0;var u=n.length;return r<0&&(r=Kl(u+r,0)),
gc(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&y(n,t,r)>-1}function vf(n,t){return(yh(n)?c:Fe)(n,bi(t,3))}function gf(n,t,r,e){return null==n?[]:(yh(t)||(t=null==t?[]:[t]),r=e?Y:r,yh(r)||(r=null==r?[]:[r]),Ve(n,t,r))}function yf(n,t,r){var e=yh(n)?l:j,u=arguments.length<3;return e(n,bi(t,4),r,u,vs)}function df(n,t,r){var e=yh(n)?s:j,u=arguments.length<3;return e(n,bi(t,4),r,u,gs)}function bf(n,t){return(yh(n)?i:ne)(n,Lf(bi(t,3)))}function wf(n){return(yh(n)?kr:eu)(n)}function mf(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),
(yh(n)?Or:uu)(n,t)}function xf(n){return(yh(n)?Ir:ou)(n)}function jf(n){if(null==n)return 0;if(Vf(n))return gc(n)?K(n):n.length;var t=Is(n);return t==Zn||t==Qn?n.size:$e(n).length}function Af(n,t,r){var e=yh(n)?h:cu;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function kf(n,t){if("function"!=typeof t)throw new sl(tn);return n=jc(n),function(){if(--n<1)return t.apply(this,arguments)}}function Of(n,t,r){return t=r?Y:t,t=n&&null==t?n.length:t,fi(n,dn,Y,Y,Y,Y,t)}function If(n,t){var r;if("function"!=typeof t)throw new sl(tn);
return n=jc(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=Y),r}}function Rf(n,t,r){t=r?Y:t;var e=fi(n,_n,Y,Y,Y,Y,Y,t);return e.placeholder=Rf.placeholder,e}function zf(n,t,r){t=r?Y:t;var e=fi(n,vn,Y,Y,Y,Y,Y,t);return e.placeholder=zf.placeholder,e}function Ef(n,t,r){function e(t){var r=h,e=p;return h=p=Y,d=t,v=n.apply(e,r)}function u(n){return d=n,g=Es(f,t),b?e(n):v}function i(n){var r=n-y,e=n-d,u=t-r;return w?Vl(u,_-e):u}function o(n){var r=n-y,e=n-d;return y===Y||r>=t||r<0||w&&e>=_;
}function f(){var n=ih();return o(n)?c(n):(g=Es(f,i(n)),Y)}function c(n){return g=Y,m&&h?e(n):(h=p=Y,v)}function a(){g!==Y&&xs(g),d=0,h=y=p=g=Y}function l(){return g===Y?v:c(ih())}function s(){var n=ih(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===Y)return u(y);if(w)return xs(g),g=Es(f,t),e(y)}return g===Y&&(g=Es(f,t)),v}var h,p,_,v,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new sl(tn);return t=kc(t)||0,ic(r)&&(b=!!r.leading,w="maxWait"in r,_=w?Kl(kc(r.maxWait)||0,t):_,m="trailing"in r?!!r.trailing:m),
s.cancel=a,s.flush=l,s}function Sf(n){return fi(n,wn)}function Wf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new sl(tn);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Wf.Cache||ar),r}function Lf(n){if("function"!=typeof n)throw new sl(tn);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:
return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Cf(n){return If(2,n)}function Uf(n,t){if("function"!=typeof n)throw new sl(tn);return t=t===Y?t:jc(t),ru(n,t)}function Bf(t,r){if("function"!=typeof t)throw new sl(tn);return r=null==r?0:Kl(jc(r),0),ru(function(e){var u=e[r],i=Au(e,0,r);return u&&a(i,u),n(t,this,i)})}function Tf(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new sl(tn);return ic(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),
Ef(n,t,{leading:e,maxWait:t,trailing:u})}function $f(n){return Of(n,1)}function Df(n,t){return sh(xu(t),n)}function Mf(){if(!arguments.length)return[];var n=arguments[0];return yh(n)?n:[n]}function Ff(n){return Dr(n,cn)}function Nf(n,t){return t="function"==typeof t?t:Y,Dr(n,cn,t)}function Pf(n){return Dr(n,on|cn)}function qf(n,t){return t="function"==typeof t?t:Y,Dr(n,on|cn,t)}function Zf(n,t){return null==t||Zr(n,t,Fc(t))}function Kf(n,t){return n===t||n!==n&&t!==t}function Vf(n){return null!=n&&uc(n.length)&&!rc(n);
}function Gf(n){return oc(n)&&Vf(n)}function Hf(n){return n===!0||n===!1||oc(n)&&de(n)==Dn}function Jf(n){return oc(n)&&1===n.nodeType&&!_c(n)}function Yf(n){if(null==n)return!0;if(Vf(n)&&(yh(n)||"string"==typeof n||"function"==typeof n.splice||bh(n)||Ah(n)||gh(n)))return!n.length;var t=Is(n);if(t==Zn||t==Qn)return!n.size;if($i(n))return!$e(n).length;for(var r in n)if(yl.call(n,r))return!1;return!0}function Qf(n,t){return ze(n,t)}function Xf(n,t,r){r="function"==typeof r?r:Y;var e=r?r(n,t):Y;return e===Y?ze(n,t,Y,r):!!e;
}function nc(n){if(!oc(n))return!1;var t=de(n);return t==Nn||t==Fn||"string"==typeof n.message&&"string"==typeof n.name&&!_c(n)}function tc(n){return"number"==typeof n&&Pl(n)}function rc(n){if(!ic(n))return!1;var t=de(n);return t==Pn||t==qn||t==$n||t==Jn}function ec(n){return"number"==typeof n&&n==jc(n)}function uc(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=zn}function ic(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function oc(n){return null!=n&&"object"==typeof n}function fc(n,t){
return n===t||We(n,t,mi(t))}function cc(n,t,r){return r="function"==typeof r?r:Y,We(n,t,mi(t),r)}function ac(n){return pc(n)&&n!=+n}function lc(n){if(Rs(n))throw new il(nn);return Le(n)}function sc(n){return null===n}function hc(n){return null==n}function pc(n){return"number"==typeof n||oc(n)&&de(n)==Kn}function _c(n){if(!oc(n)||de(n)!=Gn)return!1;var t=Rl(n);if(null===t)return!0;var r=yl.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&gl.call(r)==ml}function vc(n){
return ec(n)&&n>=-zn&&n<=zn}function gc(n){return"string"==typeof n||!yh(n)&&oc(n)&&de(n)==Xn}function yc(n){return"symbol"==typeof n||oc(n)&&de(n)==nt}function dc(n){return n===Y}function bc(n){return oc(n)&&Is(n)==rt}function wc(n){return oc(n)&&de(n)==et}function mc(n){if(!n)return[];if(Vf(n))return gc(n)?V(n):Uu(n);if(Ll&&n[Ll])return $(n[Ll]());var t=Is(n);return(t==Zn?D:t==Qn?N:na)(n)}function xc(n){if(!n)return 0===n?n:0;if(n=kc(n),n===Rn||n===-Rn){return(n<0?-1:1)*En}return n===n?n:0}function jc(n){
var t=xc(n),r=t%1;return t===t?r?t-r:t:0}function Ac(n){return n?$r(jc(n),0,Wn):0}function kc(n){if("number"==typeof n)return n;if(yc(n))return Sn;if(ic(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=ic(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Et,"");var r=Ft.test(n);return r||Pt.test(n)?Jr(n.slice(2),r?2:8):Mt.test(n)?Sn:+n}function Oc(n){return Bu(n,Nc(n))}function Ic(n){return n?$r(jc(n),-zn,zn):0===n?n:0}function Rc(n){return null==n?"":pu(n)}function zc(n,t){var r=_s(n);
return null==t?r:Wr(r,t)}function Ec(n,t){return v(n,bi(t,3),ee)}function Sc(n,t){return v(n,bi(t,3),ue)}function Wc(n,t){return null==n?n:ys(n,bi(t,3),Nc)}function Lc(n,t){return null==n?n:ds(n,bi(t,3),Nc)}function Cc(n,t){return n&&ee(n,bi(t,3))}function Uc(n,t){return n&&ue(n,bi(t,3))}function Bc(n){return null==n?[]:se(n,Fc(n))}function Tc(n){return null==n?[]:se(n,Nc(n))}function $c(n,t,r){var e=null==n?Y:ve(n,t);return e===Y?r:e}function Dc(n,t){return null!=n&&Oi(n,t,we)}function Mc(n,t){return null!=n&&Oi(n,t,me);
}function Fc(n){return Vf(n)?Ar(n):$e(n)}function Nc(n){return Vf(n)?Ar(n,!0):De(n)}function Pc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,t(n,e,u),n)}),r}function qc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,e,t(n,e,u))}),r}function Zc(n,t){return Kc(n,Lf(bi(t)))}function Kc(n,t){if(null==n)return{};var r=c(gi(n),function(n){return[n]});return t=bi(t),He(n,r,function(n,r){return t(n,r[0])})}function Vc(n,t,r){t=ju(t,n);var e=-1,u=t.length;for(u||(u=1,n=Y);++e<u;){var i=null==n?Y:n[Qi(t[e])];
i===Y&&(e=u,i=r),n=rc(i)?i.call(n):i}return n}function Gc(n,t,r){return null==n?n:iu(n,t,r)}function Hc(n,t,r,e){return e="function"==typeof e?e:Y,null==n?n:iu(n,t,r,e)}function Jc(n,t,e){var u=yh(n),i=u||bh(n)||Ah(n);if(t=bi(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:ic(n)&&rc(o)?_s(Rl(n)):{}}return(i?r:ee)(n,function(n,r,u){return t(e,n,r,u)}),e}function Yc(n,t){return null==n||vu(n,t)}function Qc(n,t,r){return null==n?n:gu(n,t,xu(r))}function Xc(n,t,r,e){return e="function"==typeof e?e:Y,
null==n?n:gu(n,t,xu(r),e)}function na(n){return null==n?[]:z(n,Fc(n))}function ta(n){return null==n?[]:z(n,Nc(n))}function ra(n,t,r){return r===Y&&(r=t,t=Y),r!==Y&&(r=kc(r),r=r===r?r:0),t!==Y&&(t=kc(t),t=t===t?t:0),$r(kc(n),t,r)}function ea(n,t,r){return t=xc(t),r===Y?(r=t,t=0):r=xc(r),n=kc(n),xe(n,t,r)}function ua(n,t,r){if(r&&"boolean"!=typeof r&&Li(n,t,r)&&(t=r=Y),r===Y&&("boolean"==typeof t?(r=t,t=Y):"boolean"==typeof n&&(r=n,n=Y)),n===Y&&t===Y?(n=0,t=1):(n=xc(n),t===Y?(t=n,n=0):t=xc(t)),n>t){
var e=n;n=t,t=e}if(r||n%1||t%1){var u=Jl();return Vl(n+u*(t-n+Hr("1e-"+((u+"").length-1))),t)}return Xe(n,t)}function ia(n){return Jh(Rc(n).toLowerCase())}function oa(n){return n=Rc(n),n&&n.replace(Zt,he).replace(Br,"")}function fa(n,t,r){n=Rc(n),t=pu(t);var e=n.length;r=r===Y?e:$r(jc(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function ca(n){return n=Rc(n),n&&mt.test(n)?n.replace(bt,pe):n}function aa(n){return n=Rc(n),n&&zt.test(n)?n.replace(Rt,"\\$&"):n}function la(n,t,r){n=Rc(n),t=jc(t);
var e=t?K(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return ni(Ml(u),r)+n+ni(Dl(u),r)}function sa(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?n+ni(t-e,r):n}function ha(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?ni(t-e,r)+n:n}function pa(n,t,r){return r||null==t?t=0:t&&(t=+t),Hl(Rc(n).replace(St,""),t||0)}function _a(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),tu(Rc(n),t)}function va(){var n=arguments,t=Rc(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function ga(n,t,r){return r&&"number"!=typeof r&&Li(n,t,r)&&(t=r=Y),
(r=r===Y?Wn:r>>>0)?(n=Rc(n),n&&("string"==typeof t||null!=t&&!xh(t))&&(t=pu(t),!t&&B(n))?Au(V(n),0,r):n.split(t,r)):[]}function ya(n,t,r){return n=Rc(n),r=null==r?0:$r(jc(r),0,n.length),t=pu(t),n.slice(r,r+t.length)==t}function da(n,t,r){var e=q.templateSettings;r&&Li(n,t,r)&&(t=Y),n=Rc(n),t=zh({},t,e,ci);var u,i,o=zh({},t.imports,e.imports,ci),f=Fc(o),c=z(o,f),a=0,l=t.interpolate||Kt,s="__p += '",h=al((t.escape||Kt).source+"|"+l.source+"|"+(l===At?$t:Kt).source+"|"+(t.evaluate||Kt).source+"|$","g"),p="//# sourceURL="+(yl.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Nr+"]")+"\n";
n.replace(h,function(t,r,e,o,f,c){return e||(e=o),s+=n.slice(a,c).replace(Vt,C),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),a=c+t.length,t}),s+="';\n";var _=yl.call(t,"variable")&&t.variable;_||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(vt,""):s).replace(gt,"$1").replace(yt,"$1;"),s="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";
var v=Yh(function(){return ol(f,p+"return "+s).apply(Y,c)});if(v.source=s,nc(v))throw v;return v}function ba(n){return Rc(n).toLowerCase()}function wa(n){return Rc(n).toUpperCase()}function ma(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Et,"");if(!n||!(t=pu(t)))return n;var e=V(n),u=V(t);return Au(e,S(e,u),W(e,u)+1).join("")}function xa(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Wt,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,0,W(e,V(t))+1).join("")}function ja(n,t,r){if(n=Rc(n),
n&&(r||t===Y))return n.replace(St,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,S(e,V(t))).join("")}function Aa(n,t){var r=mn,e=xn;if(ic(t)){var u="separator"in t?t.separator:u;r="length"in t?jc(t.length):r,e="omission"in t?pu(t.omission):e}n=Rc(n);var i=n.length;if(B(n)){var o=V(n);i=o.length}if(r>=i)return n;var f=r-K(e);if(f<1)return e;var c=o?Au(o,0,f).join(""):n.slice(0,f);if(u===Y)return c+e;if(o&&(f+=c.length-f),xh(u)){if(n.slice(f).search(u)){var a,l=c;for(u.global||(u=al(u.source,Rc(Dt.exec(u))+"g")),
u.lastIndex=0;a=u.exec(l);)var s=a.index;c=c.slice(0,s===Y?f:s)}}else if(n.indexOf(pu(u),f)!=f){var h=c.lastIndexOf(u);h>-1&&(c=c.slice(0,h))}return c+e}function ka(n){return n=Rc(n),n&&wt.test(n)?n.replace(dt,_e):n}function Oa(n,t,r){return n=Rc(n),t=r?Y:t,t===Y?T(n)?J(n):_(n):n.match(t)||[]}function Ia(t){var r=null==t?0:t.length,e=bi();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new sl(tn);return[e(n[0]),n[1]]}):[],ru(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e);
}})}function Ra(n){return Mr(Dr(n,on))}function za(n){return function(){return n}}function Ea(n,t){return null==n||n!==n?t:n}function Sa(n){return n}function Wa(n){return Te("function"==typeof n?n:Dr(n,on))}function La(n){return Ne(Dr(n,on))}function Ca(n,t){return Pe(n,Dr(t,on))}function Ua(n,t,e){var u=Fc(t),i=se(t,u);null!=e||ic(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=se(t,Fc(t)));var o=!(ic(e)&&"chain"in e&&!e.chain),f=rc(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){
var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Uu(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Ba(){return Xr._===this&&(Xr._=xl),this}function Ta(){}function $a(n){return n=jc(n),ru(function(t){return Ke(t,n)})}function Da(n){return Ci(n)?m(Qi(n)):Je(n)}function Ma(n){return function(t){return null==n?Y:ve(n,t)}}function Fa(){return[]}function Na(){return!1}function Pa(){return{};
}function qa(){return""}function Za(){return!0}function Ka(n,t){if(n=jc(n),n<1||n>zn)return[];var r=Wn,e=Vl(n,Wn);t=bi(t),n-=Wn;for(var u=O(e,t);++r<n;)t(r);return u}function Va(n){return yh(n)?c(n,Qi):yc(n)?[n]:Uu(Ws(Rc(n)))}function Ga(n){var t=++dl;return Rc(n)+t}function Ha(n){return n&&n.length?Yr(n,Sa,be):Y}function Ja(n,t){return n&&n.length?Yr(n,bi(t,2),be):Y}function Ya(n){return w(n,Sa)}function Qa(n,t){return w(n,bi(t,2))}function Xa(n){return n&&n.length?Yr(n,Sa,Me):Y}function nl(n,t){
return n&&n.length?Yr(n,bi(t,2),Me):Y}function tl(n){return n&&n.length?k(n,Sa):0}function rl(n,t){return n&&n.length?k(n,bi(t,2)):0}x=null==x?Xr:ge.defaults(Xr.Object(),x,ge.pick(Xr,Fr));var el=x.Array,ul=x.Date,il=x.Error,ol=x.Function,fl=x.Math,cl=x.Object,al=x.RegExp,ll=x.String,sl=x.TypeError,hl=el.prototype,pl=ol.prototype,_l=cl.prototype,vl=x["__core-js_shared__"],gl=pl.toString,yl=_l.hasOwnProperty,dl=0,bl=function(){var n=/[^.]+$/.exec(vl&&vl.keys&&vl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:"";
}(),wl=_l.toString,ml=gl.call(cl),xl=Xr._,jl=al("^"+gl.call(yl).replace(Rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Al=re?x.Buffer:Y,kl=x.Symbol,Ol=x.Uint8Array,Il=Al?Al.allocUnsafe:Y,Rl=M(cl.getPrototypeOf,cl),zl=cl.create,El=_l.propertyIsEnumerable,Sl=hl.splice,Wl=kl?kl.isConcatSpreadable:Y,Ll=kl?kl.iterator:Y,Cl=kl?kl.toStringTag:Y,Ul=function(){try{var n=xi(cl,"defineProperty");return n({},"",{}),n}catch(n){}}(),Bl=x.clearTimeout!==Xr.clearTimeout&&x.clearTimeout,Tl=ul&&ul.now!==Xr.Date.now&&ul.now,$l=x.setTimeout!==Xr.setTimeout&&x.setTimeout,Dl=fl.ceil,Ml=fl.floor,Fl=cl.getOwnPropertySymbols,Nl=Al?Al.isBuffer:Y,Pl=x.isFinite,ql=hl.join,Zl=M(cl.keys,cl),Kl=fl.max,Vl=fl.min,Gl=ul.now,Hl=x.parseInt,Jl=fl.random,Yl=hl.reverse,Ql=xi(x,"DataView"),Xl=xi(x,"Map"),ns=xi(x,"Promise"),ts=xi(x,"Set"),rs=xi(x,"WeakMap"),es=xi(cl,"create"),us=rs&&new rs,is={},os=Xi(Ql),fs=Xi(Xl),cs=Xi(ns),as=Xi(ts),ls=Xi(rs),ss=kl?kl.prototype:Y,hs=ss?ss.valueOf:Y,ps=ss?ss.toString:Y,_s=function(){
function n(){}return function(t){if(!ic(t))return{};if(zl)return zl(t);n.prototype=t;var r=new n;return n.prototype=Y,r}}();q.templateSettings={escape:xt,evaluate:jt,interpolate:At,variable:"",imports:{_:q}},q.prototype=G.prototype,q.prototype.constructor=q,H.prototype=_s(G.prototype),H.prototype.constructor=H,Bt.prototype=_s(G.prototype),Bt.prototype.constructor=Bt,Yt.prototype.clear=Qt,Yt.prototype.delete=Xt,Yt.prototype.get=nr,Yt.prototype.has=tr,Yt.prototype.set=rr,er.prototype.clear=ur,er.prototype.delete=ir,
er.prototype.get=or,er.prototype.has=fr,er.prototype.set=cr,ar.prototype.clear=lr,ar.prototype.delete=sr,ar.prototype.get=hr,ar.prototype.has=pr,ar.prototype.set=_r,vr.prototype.add=vr.prototype.push=gr,vr.prototype.has=yr,dr.prototype.clear=br,dr.prototype.delete=wr,dr.prototype.get=mr,dr.prototype.has=xr,dr.prototype.set=jr;var vs=Fu(ee),gs=Fu(ue,!0),ys=Nu(),ds=Nu(!0),bs=us?function(n,t){return us.set(n,t),n}:Sa,ws=Ul?function(n,t){return Ul(n,"toString",{configurable:!0,enumerable:!1,value:za(t),
writable:!0})}:Sa,ms=ru,xs=Bl||function(n){return Xr.clearTimeout(n)},js=ts&&1/N(new ts([,-0]))[1]==Rn?function(n){return new ts(n)}:Ta,As=us?function(n){return us.get(n)}:Ta,ks=Fl?function(n){return null==n?[]:(n=cl(n),i(Fl(n),function(t){return El.call(n,t)}))}:Fa,Os=Fl?function(n){for(var t=[];n;)a(t,ks(n)),n=Rl(n);return t}:Fa,Is=de;(Ql&&Is(new Ql(new ArrayBuffer(1)))!=it||Xl&&Is(new Xl)!=Zn||ns&&Is(ns.resolve())!=Hn||ts&&Is(new ts)!=Qn||rs&&Is(new rs)!=rt)&&(Is=function(n){var t=de(n),r=t==Gn?n.constructor:Y,e=r?Xi(r):"";
if(e)switch(e){case os:return it;case fs:return Zn;case cs:return Hn;case as:return Qn;case ls:return rt}return t});var Rs=vl?rc:Na,zs=Ji(bs),Es=$l||function(n,t){return Xr.setTimeout(n,t)},Ss=Ji(ws),Ws=Fi(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(It,function(n,r,e,u){t.push(e?u.replace(Tt,"$1"):r||n)}),t}),Ls=ru(function(n,t){return Gf(n)?Vr(n,te(t,1,Gf,!0)):[]}),Cs=ru(function(n,t){var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),bi(r,2)):[]}),Us=ru(function(n,t){
var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),Y,r):[]}),Bs=ru(function(n){var t=c(n,mu);return t.length&&t[0]===n[0]?je(t):[]}),Ts=ru(function(n){var t=mo(n),r=c(n,mu);return t===mo(r)?t=Y:r.pop(),r.length&&r[0]===n[0]?je(r,bi(t,2)):[]}),$s=ru(function(n){var t=mo(n),r=c(n,mu);return t="function"==typeof t?t:Y,t&&r.pop(),r.length&&r[0]===n[0]?je(r,Y,t):[]}),Ds=ru(Ao),Ms=_i(function(n,t){var r=null==n?0:n.length,e=Tr(n,t);return Qe(n,c(t,function(n){return Wi(n,r)?+n:n}).sort(Su)),e}),Fs=ru(function(n){
return _u(te(n,1,Gf,!0))}),Ns=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),_u(te(n,1,Gf,!0),bi(t,2))}),Ps=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,_u(te(n,1,Gf,!0),Y,t)}),qs=ru(function(n,t){return Gf(n)?Vr(n,t):[]}),Zs=ru(function(n){return bu(i(n,Gf))}),Ks=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),bu(i(n,Gf),bi(t,2))}),Vs=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,bu(i(n,Gf),Y,t)}),Gs=ru(Ko),Hs=ru(function(n){var t=n.length,r=t>1?n[t-1]:Y;return r="function"==typeof r?(n.pop(),
r):Y,Vo(n,r)}),Js=_i(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Tr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Bt&&Wi(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qo,args:[u],thisArg:Y}),new H(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(Y),n})):this.thru(u)}),Ys=Du(function(n,t,r){yl.call(n,r)?++n[r]:Cr(n,r,1)}),Qs=Gu(lo),Xs=Gu(so),nh=Du(function(n,t,r){yl.call(n,r)?n[r].push(t):Cr(n,r,[t])}),th=ru(function(t,r,e){var u=-1,i="function"==typeof r,o=Vf(t)?el(t.length):[];
return vs(t,function(t){o[++u]=i?n(r,t,e):ke(t,r,e)}),o}),rh=Du(function(n,t,r){Cr(n,r,t)}),eh=Du(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),uh=ru(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Li(n,t[0],t[1])?t=[]:r>2&&Li(t[0],t[1],t[2])&&(t=[t[0]]),Ve(n,te(t,1),[])}),ih=Tl||function(){return Xr.Date.now()},oh=ru(function(n,t,r){var e=sn;if(r.length){var u=F(r,di(oh));e|=gn}return fi(n,e,t,r,u)}),fh=ru(function(n,t,r){var e=sn|hn;if(r.length){var u=F(r,di(fh));e|=gn;
}return fi(t,e,n,r,u)}),ch=ru(function(n,t){return Kr(n,1,t)}),ah=ru(function(n,t,r){return Kr(n,kc(t)||0,r)});Wf.Cache=ar;var lh=ms(function(t,r){r=1==r.length&&yh(r[0])?c(r[0],R(bi())):c(te(r,1),R(bi()));var e=r.length;return ru(function(u){for(var i=-1,o=Vl(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);return n(t,this,u)})}),sh=ru(function(n,t){return fi(n,gn,Y,t,F(t,di(sh)))}),hh=ru(function(n,t){return fi(n,yn,Y,t,F(t,di(hh)))}),ph=_i(function(n,t){return fi(n,bn,Y,Y,Y,t)}),_h=ei(be),vh=ei(function(n,t){
return n>=t}),gh=Oe(function(){return arguments}())?Oe:function(n){return oc(n)&&yl.call(n,"callee")&&!El.call(n,"callee")},yh=el.isArray,dh=ie?R(ie):Ie,bh=Nl||Na,wh=oe?R(oe):Re,mh=fe?R(fe):Se,xh=ce?R(ce):Ce,jh=ae?R(ae):Ue,Ah=le?R(le):Be,kh=ei(Me),Oh=ei(function(n,t){return n<=t}),Ih=Mu(function(n,t){if($i(t)||Vf(t))return Bu(t,Fc(t),n),Y;for(var r in t)yl.call(t,r)&&zr(n,r,t[r])}),Rh=Mu(function(n,t){Bu(t,Nc(t),n)}),zh=Mu(function(n,t,r,e){Bu(t,Nc(t),n,e)}),Eh=Mu(function(n,t,r,e){Bu(t,Fc(t),n,e);
}),Sh=_i(Tr),Wh=ru(function(n,t){n=cl(n);var r=-1,e=t.length,u=e>2?t[2]:Y;for(u&&Li(t[0],t[1],u)&&(e=1);++r<e;)for(var i=t[r],o=Nc(i),f=-1,c=o.length;++f<c;){var a=o[f],l=n[a];(l===Y||Kf(l,_l[a])&&!yl.call(n,a))&&(n[a]=i[a])}return n}),Lh=ru(function(t){return t.push(Y,ai),n($h,Y,t)}),Ch=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),n[t]=r},za(Sa)),Uh=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),yl.call(n,t)?n[t].push(r):n[t]=[r]},bi),Bh=ru(ke),Th=Mu(function(n,t,r){
qe(n,t,r)}),$h=Mu(function(n,t,r,e){qe(n,t,r,e)}),Dh=_i(function(n,t){var r={};if(null==n)return r;var e=!1;t=c(t,function(t){return t=ju(t,n),e||(e=t.length>1),t}),Bu(n,gi(n),r),e&&(r=Dr(r,on|fn|cn,li));for(var u=t.length;u--;)vu(r,t[u]);return r}),Mh=_i(function(n,t){return null==n?{}:Ge(n,t)}),Fh=oi(Fc),Nh=oi(Nc),Ph=Zu(function(n,t,r){return t=t.toLowerCase(),n+(r?ia(t):t)}),qh=Zu(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Zh=Zu(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Kh=qu("toLowerCase"),Vh=Zu(function(n,t,r){
return n+(r?"_":"")+t.toLowerCase()}),Gh=Zu(function(n,t,r){return n+(r?" ":"")+Jh(t)}),Hh=Zu(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Jh=qu("toUpperCase"),Yh=ru(function(t,r){try{return n(t,Y,r)}catch(n){return nc(n)?n:new il(n)}}),Qh=_i(function(n,t){return r(t,function(t){t=Qi(t),Cr(n,t,oh(n[t],n))}),n}),Xh=Hu(),np=Hu(!0),tp=ru(function(n,t){return function(r){return ke(r,n,t)}}),rp=ru(function(n,t){return function(r){return ke(n,r,t)}}),ep=Xu(c),up=Xu(u),ip=Xu(h),op=ri(),fp=ri(!0),cp=Qu(function(n,t){
return n+t},0),ap=ii("ceil"),lp=Qu(function(n,t){return n/t},1),sp=ii("floor"),hp=Qu(function(n,t){return n*t},1),pp=ii("round"),_p=Qu(function(n,t){return n-t},0);return q.after=kf,q.ary=Of,q.assign=Ih,q.assignIn=Rh,q.assignInWith=zh,q.assignWith=Eh,q.at=Sh,q.before=If,q.bind=oh,q.bindAll=Qh,q.bindKey=fh,q.castArray=Mf,q.chain=Jo,q.chunk=ro,q.compact=eo,q.concat=uo,q.cond=Ia,q.conforms=Ra,q.constant=za,q.countBy=Ys,q.create=zc,q.curry=Rf,q.curryRight=zf,q.debounce=Ef,q.defaults=Wh,q.defaultsDeep=Lh,
q.defer=ch,q.delay=ah,q.difference=Ls,q.differenceBy=Cs,q.differenceWith=Us,q.drop=io,q.dropRight=oo,q.dropRightWhile=fo,q.dropWhile=co,q.fill=ao,q.filter=cf,q.flatMap=af,q.flatMapDeep=lf,q.flatMapDepth=sf,q.flatten=ho,q.flattenDeep=po,q.flattenDepth=_o,q.flip=Sf,q.flow=Xh,q.flowRight=np,q.fromPairs=vo,q.functions=Bc,q.functionsIn=Tc,q.groupBy=nh,q.initial=bo,q.intersection=Bs,q.intersectionBy=Ts,q.intersectionWith=$s,q.invert=Ch,q.invertBy=Uh,q.invokeMap=th,q.iteratee=Wa,q.keyBy=rh,q.keys=Fc,q.keysIn=Nc,
q.map=vf,q.mapKeys=Pc,q.mapValues=qc,q.matches=La,q.matchesProperty=Ca,q.memoize=Wf,q.merge=Th,q.mergeWith=$h,q.method=tp,q.methodOf=rp,q.mixin=Ua,q.negate=Lf,q.nthArg=$a,q.omit=Dh,q.omitBy=Zc,q.once=Cf,q.orderBy=gf,q.over=ep,q.overArgs=lh,q.overEvery=up,q.overSome=ip,q.partial=sh,q.partialRight=hh,q.partition=eh,q.pick=Mh,q.pickBy=Kc,q.property=Da,q.propertyOf=Ma,q.pull=Ds,q.pullAll=Ao,q.pullAllBy=ko,q.pullAllWith=Oo,q.pullAt=Ms,q.range=op,q.rangeRight=fp,q.rearg=ph,q.reject=bf,q.remove=Io,q.rest=Uf,
q.reverse=Ro,q.sampleSize=mf,q.set=Gc,q.setWith=Hc,q.shuffle=xf,q.slice=zo,q.sortBy=uh,q.sortedUniq=Bo,q.sortedUniqBy=To,q.split=ga,q.spread=Bf,q.tail=$o,q.take=Do,q.takeRight=Mo,q.takeRightWhile=Fo,q.takeWhile=No,q.tap=Yo,q.throttle=Tf,q.thru=Qo,q.toArray=mc,q.toPairs=Fh,q.toPairsIn=Nh,q.toPath=Va,q.toPlainObject=Oc,q.transform=Jc,q.unary=$f,q.union=Fs,q.unionBy=Ns,q.unionWith=Ps,q.uniq=Po,q.uniqBy=qo,q.uniqWith=Zo,q.unset=Yc,q.unzip=Ko,q.unzipWith=Vo,q.update=Qc,q.updateWith=Xc,q.values=na,q.valuesIn=ta,
q.without=qs,q.words=Oa,q.wrap=Df,q.xor=Zs,q.xorBy=Ks,q.xorWith=Vs,q.zip=Gs,q.zipObject=Go,q.zipObjectDeep=Ho,q.zipWith=Hs,q.entries=Fh,q.entriesIn=Nh,q.extend=Rh,q.extendWith=zh,Ua(q,q),q.add=cp,q.attempt=Yh,q.camelCase=Ph,q.capitalize=ia,q.ceil=ap,q.clamp=ra,q.clone=Ff,q.cloneDeep=Pf,q.cloneDeepWith=qf,q.cloneWith=Nf,q.conformsTo=Zf,q.deburr=oa,q.defaultTo=Ea,q.divide=lp,q.endsWith=fa,q.eq=Kf,q.escape=ca,q.escapeRegExp=aa,q.every=ff,q.find=Qs,q.findIndex=lo,q.findKey=Ec,q.findLast=Xs,q.findLastIndex=so,
q.findLastKey=Sc,q.floor=sp,q.forEach=hf,q.forEachRight=pf,q.forIn=Wc,q.forInRight=Lc,q.forOwn=Cc,q.forOwnRight=Uc,q.get=$c,q.gt=_h,q.gte=vh,q.has=Dc,q.hasIn=Mc,q.head=go,q.identity=Sa,q.includes=_f,q.indexOf=yo,q.inRange=ea,q.invoke=Bh,q.isArguments=gh,q.isArray=yh,q.isArrayBuffer=dh,q.isArrayLike=Vf,q.isArrayLikeObject=Gf,q.isBoolean=Hf,q.isBuffer=bh,q.isDate=wh,q.isElement=Jf,q.isEmpty=Yf,q.isEqual=Qf,q.isEqualWith=Xf,q.isError=nc,q.isFinite=tc,q.isFunction=rc,q.isInteger=ec,q.isLength=uc,q.isMap=mh,
q.isMatch=fc,q.isMatchWith=cc,q.isNaN=ac,q.isNative=lc,q.isNil=hc,q.isNull=sc,q.isNumber=pc,q.isObject=ic,q.isObjectLike=oc,q.isPlainObject=_c,q.isRegExp=xh,q.isSafeInteger=vc,q.isSet=jh,q.isString=gc,q.isSymbol=yc,q.isTypedArray=Ah,q.isUndefined=dc,q.isWeakMap=bc,q.isWeakSet=wc,q.join=wo,q.kebabCase=qh,q.last=mo,q.lastIndexOf=xo,q.lowerCase=Zh,q.lowerFirst=Kh,q.lt=kh,q.lte=Oh,q.max=Ha,q.maxBy=Ja,q.mean=Ya,q.meanBy=Qa,q.min=Xa,q.minBy=nl,q.stubArray=Fa,q.stubFalse=Na,q.stubObject=Pa,q.stubString=qa,
q.stubTrue=Za,q.multiply=hp,q.nth=jo,q.noConflict=Ba,q.noop=Ta,q.now=ih,q.pad=la,q.padEnd=sa,q.padStart=ha,q.parseInt=pa,q.random=ua,q.reduce=yf,q.reduceRight=df,q.repeat=_a,q.replace=va,q.result=Vc,q.round=pp,q.runInContext=p,q.sample=wf,q.size=jf,q.snakeCase=Vh,q.some=Af,q.sortedIndex=Eo,q.sortedIndexBy=So,q.sortedIndexOf=Wo,q.sortedLastIndex=Lo,q.sortedLastIndexBy=Co,q.sortedLastIndexOf=Uo,q.startCase=Gh,q.startsWith=ya,q.subtract=_p,q.sum=tl,q.sumBy=rl,q.template=da,q.times=Ka,q.toFinite=xc,q.toInteger=jc,
q.toLength=Ac,q.toLower=ba,q.toNumber=kc,q.toSafeInteger=Ic,q.toString=Rc,q.toUpper=wa,q.trim=ma,q.trimEnd=xa,q.trimStart=ja,q.truncate=Aa,q.unescape=ka,q.uniqueId=Ga,q.upperCase=Hh,q.upperFirst=Jh,q.each=hf,q.eachRight=pf,q.first=go,Ua(q,function(){var n={};return ee(q,function(t,r){yl.call(q.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),q.VERSION=Q,r(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){q[n].placeholder=q}),r(["drop","take"],function(n,t){Bt.prototype[n]=function(r){
r=r===Y?1:Kl(jc(r),0);var e=this.__filtered__&&!t?new Bt(this):this.clone();return e.__filtered__?e.__takeCount__=Vl(r,e.__takeCount__):e.__views__.push({size:Vl(r,Wn),type:n+(e.__dir__<0?"Right":"")}),e},Bt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==kn||r==In;Bt.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:bi(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){
var r="take"+(t?"Right":"");Bt.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Bt.prototype[n]=function(){return this.__filtered__?new Bt(this):this[r](1)}}),Bt.prototype.compact=function(){return this.filter(Sa)},Bt.prototype.find=function(n){return this.filter(n).head()},Bt.prototype.findLast=function(n){return this.reverse().find(n)},Bt.prototype.invokeMap=ru(function(n,t){return"function"==typeof n?new Bt(this):this.map(function(r){
return ke(r,n,t)})}),Bt.prototype.reject=function(n){return this.filter(Lf(bi(n)))},Bt.prototype.slice=function(n,t){n=jc(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Bt(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==Y&&(t=jc(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Bt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Bt.prototype.toArray=function(){return this.take(Wn)},ee(Bt.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=q[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);
u&&(q.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Bt,c=o[0],l=f||yh(t),s=function(n){var t=u.apply(q,a([n],o));return e&&h?t[0]:t};l&&r&&"function"==typeof c&&1!=c.length&&(f=l=!1);var h=this.__chain__,p=!!this.__actions__.length,_=i&&!h,v=f&&!p;if(!i&&l){t=v?t:new Bt(this);var g=n.apply(t,o);return g.__actions__.push({func:Qo,args:[s],thisArg:Y}),new H(g,h)}return _&&v?n.apply(this,o):(g=this.thru(s),_?e?g.value()[0]:g.value():g)})}),r(["pop","push","shift","sort","splice","unshift"],function(n){
var t=hl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);q.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(yh(u)?u:[],n)}return this[r](function(r){return t.apply(yh(r)?r:[],n)})}}),ee(Bt.prototype,function(n,t){var r=q[t];if(r){var e=r.name+"";yl.call(is,e)||(is[e]=[]),is[e].push({name:t,func:r})}}),is[Ju(Y,hn).name]=[{name:"wrapper",func:Y}],Bt.prototype.clone=Gt,Bt.prototype.reverse=Ht,Bt.prototype.value=Jt,q.prototype.at=Js,
q.prototype.chain=Xo,q.prototype.commit=nf,q.prototype.next=tf,q.prototype.plant=ef,q.prototype.reverse=uf,q.prototype.toJSON=q.prototype.valueOf=q.prototype.value=of,q.prototype.first=q.prototype.head,Ll&&(q.prototype[Ll]=rf),q},ge=ve();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Xr._=ge,define(function(){return ge})):te?((te.exports=ge)._=ge,ne._=ge):Xr._=ge}).call(this);
/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y){'use strict';function G(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.5.11/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var f=encodeURIComponent,e;e=arguments[d];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=f(e)}return new b(c)}}function la(a){if(null==a||Ya(a))return!1;if(I(a)||D(a)||F&&a instanceof
F)return!0;var b="length"in Object(a)&&a.length;return ba(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,f;if(a)if(C(a))for(c in a)"prototype"===c||"length"===c||"name"===c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(I(a)||la(a)){var e="object"!==typeof a;c=0;for(f=a.length;c<f;c++)(e||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(xc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===
typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function yc(a,b,d){for(var c=Object.keys(a).sort(),f=0;f<c.length;f++)b.call(d,a[c[f]],c[f]);return c}function zc(a){return function(b,d){a(d,b)}}function ke(){return++sb}function Rb(a,b,d){for(var c=a.$$hashKey,f=0,e=b.length;f<e;++f){var g=b[f];if(E(g)||C(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&E(n)?ja(n)?a[m]=new Date(n.valueOf()):
Za(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Sb(n)?a[m]=n.clone():(E(a[m])||(a[m]=I(n)?[]:{}),Rb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Rb(a,va.call(arguments,1),!1)}function le(a){return Rb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Tb(a,b){return R(Object.create(a),b)}function w(){}function $a(a){return a}function ha(a){return function(){return a}}function Ac(a){return C(a.toString)&&a.toString!==ma}function z(a){return"undefined"===
typeof a}function x(a){return"undefined"!==typeof a}function E(a){return null!==a&&"object"===typeof a}function xc(a){return null!==a&&"object"===typeof a&&!Bc(a)}function D(a){return"string"===typeof a}function ba(a){return"number"===typeof a}function ja(a){return"[object Date]"===ma.call(a)}function C(a){return"function"===typeof a}function Za(a){return"[object RegExp]"===ma.call(a)}function Ya(a){return a&&a.window===a}function ab(a){return a&&a.$evalAsync&&a.$watch}function Ka(a){return"boolean"===
typeof a}function me(a){return a&&ba(a.length)&&ne.test(ma.call(a))}function Sb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function oe(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function bb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function sa(a,b){function d(a,b){var d=b.$$hashKey,e;if(I(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(xc(a))for(e in a)b[e]=c(a[e]);else if(a&&
"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!E(a))return a;var b=e.indexOf(a);if(-1!==b)return g[b];if(Ya(a)||ab(a))throw xa("cpws");var b=!1,c=f(a);void 0===c&&(c=I(a)?[]:Object.create(Bc(a)),b=!0);e.push(a);g.push(c);return b?d(a,c):c}function f(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(C(a.cloneNode))return a.cloneNode(!0)}
var e=[],g=[];if(b){if(me(b)||"[object ArrayBuffer]"===ma.call(b))throw xa("cpta");if(a===b)throw xa("cpi");I(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});e.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ja(a))return ja(b)?na(a.getTime(),
b.getTime()):!1;if(Za(a))return Za(b)?a.toString()===b.toString():!1;if(ab(a)||ab(b)||Ya(a)||Ya(b)||I(b)||ja(b)||Za(b))return!1;d=V();for(c in a)if("$"!==c.charAt(0)&&!C(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&x(b[c])&&!C(b[c]))return!1;return!0}return!1}function cb(a,b,d){return a.concat(va.call(b,d))}function db(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!C(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
cb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function pe(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Ya(b)?d="$WINDOW":b&&y.document===b?d="$DOCUMENT":ab(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return ba(b)||(b=b?2:null),JSON.stringify(a,pe,b)}function Cc(a){return D(a)?JSON.parse(a):a}function Dc(a,b){a=a.replace(qe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return ia(d)?b:d}function Ub(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Dc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=F(a).clone();try{a.empty()}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===La?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function Ec(a){try{return decodeURIComponent(a)}catch(b){}}function Fc(a){var b={};q((a||"").split("&"),function(a){var c,f,e;a&&(f=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(f=a.substring(0,c),e=a.substring(c+1)),f=Ec(f),x(f)&&(e=x(e)?Ec(e):!0,ua.call(b,f)?I(b[f])?b[f].push(e):b[f]=[b[f],e]:b[f]=e))});return b}function Vb(a){var b=[];q(a,function(a,c){I(a)?q(a,function(a){b.push(oa(c,!0)+(!0===a?"":"="+oa(a,!0)))}):b.push(oa(c,!0)+(!0===a?"":"="+oa(a,!0)))});return b.length?b.join("&"):""}function tb(a){return oa(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function oa(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function re(a,b){var d,c,f=Oa.length;for(c=0;c<f;++c)if(d=Oa[c]+b,D(d=a.getAttribute(d)))return d;return null}function se(a,b){var d,c,f={};q(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Oa,function(b){b+="app";var f;!d&&(f=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=f,c=f.getAttribute(b))});d&&(te?(f.strictDi=null!==re(d,"strict-di"),
b(d,c?[c]:[],f)):y.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Gc(a,b,d){E(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=F(a);if(a.injector()){var c=a[0]===y.document?"document":ya(a);throw xa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},f=/^NG_ENABLE_DEBUG_INFO!/,e=/^NG_DEFER_BOOTSTRAP!/;y&&f.test(y.name)&&(d.debugInfoEnabled=!0,y.name=y.name.replace(f,""));if(y&&!e.test(y.name))return c();y.name=y.name.replace(e,"");$.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};C($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function ue(){y.name=
"NG_ENABLE_DEBUG_INFO!"+y.name;y.location.reload()}function ve(a){a=$.element(a).injector();if(!a)throw xa("test");return a.get("$$testability")}function Hc(a,b){b=b||"_";return a.replace(we,function(a,c){return(c?b:"")+a.toLowerCase()})}function xe(){var a;if(!Ic){var b=ub();(za=z(b)?y.jQuery:b?y[b]:void 0)&&za.fn.on?(F=za,R(za.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=za.cleanData,za.cleanData=function(b){for(var c,
f=0,e;null!=(e=b[f]);f++)(c=za._data(e,"events"))&&c.$destroy&&za(e).triggerHandler("$destroy");a(b)}):F=W;$.element=F;Ic=!0}}function gb(a,b,d){if(!a)throw xa("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&I(a)&&(a=a[a.length-1]);gb(C(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw xa("badname",b);}function Jc(a,b,d){if(!b)return a;b=b.split(".");for(var c,f=a,e=b.length,g=0;g<e;g++)c=
b[g],a&&(a=(f=a)[c]);return!d&&C(a)?db(f,a):a}function vb(a){for(var b=a[0],d=a[a.length-1],c,f=1;b!==d&&(b=b.nextSibling);f++)if(c||a[f]!==b)c||(c=F(va.call(a,0,f))),c.push(b);return c||a}function V(){return Object.create(null)}function ye(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=G("$injector"),c=G("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||G;return b(a,"module",function(){var a={};return function(e,g,h){if("hasOwnProperty"===e)throw c("badname","module");g&&a.hasOwnProperty(e)&&
(a[e]=null);return b(a,e,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return H}}function b(a,d){return function(b,f){f&&C(f)&&(f.$$moduleName=e);c.push([a,d,arguments]);return H}}if(!g)throw d("nomod",e);var c=[],f=[],r=[],s=a("$injector","invoke","push",f),H={_invokeQueue:c,_configBlocks:f,_runBlocks:r,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide",
"constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:s,run:function(a){r.push(a);return this}};h&&s(h);return H})}})}function ka(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(E(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];
return b||a}function ze(a){R(a,{bootstrap:Gc,copy:sa,extend:R,merge:le,equals:na,element:F,forEach:q,injector:fb,noop:w,bind:db,toJson:eb,fromJson:Cc,identity:$a,isUndefined:z,isDefined:x,isString:D,isFunction:C,isObject:E,isNumber:ba,isElement:Sb,isArray:I,version:Ae,isDate:ja,lowercase:Q,uppercase:wb,callbacks:{$$counter:0},getTestability:ve,$$minErr:G,$$csp:da,reloadWithDebugInfo:ue});Wb=ye(y);Wb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Be});a.provider("$compile",Kc).directive({a:Ce,
input:Lc,textarea:Lc,form:De,script:Ee,select:Fe,option:Ge,ngBind:He,ngBindHtml:Ie,ngBindTemplate:Je,ngClass:Ke,ngClassEven:Le,ngClassOdd:Me,ngCloak:Ne,ngController:Oe,ngForm:Pe,ngHide:Qe,ngIf:Re,ngInclude:Se,ngInit:Te,ngNonBindable:Ue,ngPluralize:Ve,ngRepeat:We,ngShow:Xe,ngStyle:Ye,ngSwitch:Ze,ngSwitchWhen:$e,ngSwitchDefault:af,ngOptions:bf,ngTransclude:cf,ngModel:df,ngList:ef,ngChange:ff,pattern:Mc,ngPattern:Mc,required:Nc,ngRequired:Nc,minlength:Oc,ngMinlength:Oc,maxlength:Pc,ngMaxlength:Pc,ngValue:gf,
ngModelOptions:hf}).directive({ngInclude:jf}).directive(xb).directive(Qc);a.provider({$anchorScroll:kf,$animate:lf,$animateCss:mf,$$animateJs:nf,$$animateQueue:of,$$AnimateRunner:pf,$$animateAsyncRun:qf,$browser:rf,$cacheFactory:sf,$controller:tf,$document:uf,$exceptionHandler:vf,$filter:Rc,$$forceReflow:wf,$interpolate:xf,$interval:yf,$http:zf,$httpParamSerializer:Af,$httpParamSerializerJQLike:Bf,$httpBackend:Cf,$xhrFactory:Df,$jsonpCallbacks:Ef,$location:Ff,$log:Gf,$parse:Hf,$rootScope:If,$q:Jf,
$$q:Kf,$sce:Lf,$sceDelegate:Mf,$sniffer:Nf,$templateCache:Of,$templateRequest:Pf,$$testability:Qf,$timeout:Rf,$window:Sf,$$rAF:Tf,$$jqLite:Uf,$$HashMap:Vf,$$cookieReader:Wf})}])}function hb(a){return a.replace(Xf,function(a,d,c,f){return f?c.toUpperCase():c}).replace(Yf,"Moz$1")}function Sc(a){a=a.nodeType;return 1===a||!a||9===a}function Tc(a,b){var d,c,f=b.createDocumentFragment(),e=[];if(Xb.test(a)){d=f.appendChild(b.createElement("div"));c=(Zf.exec(a)||["",""])[1].toLowerCase();c=pa[c]||pa._default;
d.innerHTML=c[1]+a.replace($f,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;e=cb(e,d.childNodes);d=f.firstChild;d.textContent=""}else e.push(b.createTextNode(a));f.textContent="";f.innerHTML="";q(e,function(a){f.appendChild(a)});return f}function Uc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function W(a){if(a instanceof W)return a;var b;D(a)&&(a=Y(a),b=!0);if(!(this instanceof W)){if(b&&"<"!==a.charAt(0))throw Yb("nosel");return new W(a)}if(b){b=y.document;var d;a=(d=ag.exec(a))?
[b.createElement(d[1])]:(d=Tc(a,b))?d.childNodes:[]}Vc(this,a)}function Zb(a){return a.cloneNode(!0)}function yb(a,b){b||ib(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,f=d.length;c<f;c++)ib(d[c])}function Wc(a,b,d,c){if(x(c))throw Yb("offargs");var f=(c=zb(a))&&c.events,e=c&&c.handle;if(e)if(b){var g=function(b){var c=f[b];x(d)&&bb(c||[],d);x(d)&&c&&0<c.length||(a.removeEventListener(b,e,!1),delete f[b])};q(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in f)"$destroy"!==
b&&a.removeEventListener(b,e,!1),delete f[b]}function ib(a,b){var d=a.ng339,c=d&&jb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Wc(a)),delete jb[d],a.ng339=void 0))}function zb(a,b){var d=a.ng339,d=d&&jb[d];b&&!d&&(a.ng339=d=++bg,d=jb[d]={events:{},data:{},handle:void 0});return d}function $b(a,b,d){if(Sc(a)){var c=x(d),f=!c&&b&&!E(b),e=!b;a=(a=zb(a,!f))&&a.data;if(c)a[b]=d;else{if(e)return a;if(f)return a&&a[b];R(a,b)}}}function Bb(a,b){return a.getAttribute?
-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",Y((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Y(b)+" "," ")))})}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=Y(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",Y(d))}}function Vc(a,b){if(b)if(b.nodeType)a[a.length++]=
b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Xc(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,f=b.length;c<f;c++)if(x(d=F.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Yc(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}
function cg(a,b){b=b||y;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",a)}function Zc(a,b){var d=Gb[b.toLowerCase()];return d&&$c[wa(a)]&&d}function dg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],g=e?e.length:0;if(g){if(z(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};var k=e.specialHandlerWrapper||eg;1<g&&(e=ka(e));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,e[l])}};d.elem=a;return d}function eg(a,b,d){d.call(a,b)}function fg(a,b,d){var c=b.relatedTarget;c&&(c===a||gg.call(a,c))||d.call(a,b)}function Uf(){this.$get=function(){return R(W,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);
return Cb(a,b)}})}}function Aa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ke)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function ad(a){a=(Function.prototype.toString.call(a)+" ").replace(hg,"");return a.match(ig)||a.match(jg)}function kg(a){return(a=ad(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,
c){if(E(b))q(b,zc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(C(b)||I(b))b=r.instantiate(b);if(!b.$get)throw Ba("pget",a);return n[a+"Provider"]=b}function f(a,b){return function(){var c=u.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function e(a,b,d){return c(a,{$get:!1!==d?f(a,b):b})}function g(a){gb(z(a)||I(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,
!0);try{D(a)?(c=Wb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(r.invoke(a)):I(a)?b.push(r.invoke(a)):Qa(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=
c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=11>=Ia?!1:"function"===typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,
c))):a.apply(b,c)},instantiate:function(a,b,c){var d=I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(e),service:d(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return e(a,ha(b),!1)}),constant:d(function(a,b){Ra(a,"constant");
n[a]=b;s[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=u.invoke(d,c);return u.invoke(b,null,{$delegate:a})}}}},r=n.$injector=h(n,function(a,b){$.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},H=h(s,function(a,b){var c=r.get(a+"Provider",b);return u.invoke(c.$get,c,void 0,a)}),u=H;n.$injectorProvider={$get:ha(H)};var p=g(a),u=H.get("$injector");u.strictDi=b;q(p,function(a){a&&u.invoke(a)});return u}function kf(){var a=!0;this.disableAutoScrolling=
function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function f(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function e(a){if(a){a.scrollIntoView();var c;c=g.yOffset;C(c)?c=c():Sb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):ba(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=D(a)?a:ba(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?
e(b):(b=f(h.getElementsByName(a)))?e(b):"top"===a&&e(null):e(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||cg(function(){c.$evalAsync(g)})});return g}]}function kb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function lg(a){D(a)&&(a=a.split(" "));var b=V();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ca(a){return E(a)?a:{}}function mg(a,b,d,c){function f(a){try{a.apply(null,
va.call(arguments,1))}finally{if(H--,0===H)for(;u.length;)try{u.pop()()}catch(b){d.error(b)}}}function e(){N=null;g();h()}function g(){p=L();p=z(p)?null:p;na(p,J)&&(p=J);J=p}function h(){if(A!==k.url()||K!==p)A=k.url(),K=p,q(O,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,r=a.clearTimeout,s={};k.isMock=!1;var H=0,u=[];k.$$completeOutstandingRequest=f;k.$$incOutstandingRequestCount=function(){H++};k.notifyWhenNoOutstandingRequests=function(a){0===H?a():u.push(a)};var p,
K,A=l.href,v=b.find("base"),N=null,L=c.history?function(){try{return m.state}catch(a){}}:w;g();K=p;k.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=K===e;if(A===b&&(!c.history||f))return k;var h=A&&Ga(A)===Ga(b);A=b;K=e;!c.history||h&&f?(h||(N=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(N=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),K=p);N&&(N=b);return k}return N||l.href.replace(/%27/g,
"'")};k.state=function(){return p};var O=[],M=!1,J=null;k.onUrlChange=function(b){if(!M){if(c.history)F(a).on("popstate",e);F(a).on("hashchange",e);M=!0}O.push(b);return b};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",e)};k.$$checkUrlChange=h;k.baseHref=function(){var a=v.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};k.defer=function(a,b){var c;H++;c=n(function(){delete s[c];f(a)},b||0);s[c]=!0;return c};k.defer.cancel=function(a){return s[a]?(delete s[a],r(a),
f(w),!0):!1}}function rf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new mg(a,c,b,d)}]}function sf(){this.$get=function(){function a(a,c){function f(a){a!==n&&(r?r===a&&(r=a.n):r=a,e(a.n,a.p),e(a,n),n=a,n.n=null)}function e(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw G("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=V(),l=c&&c.capacity||Number.MAX_VALUE,m=V(),n=null,r=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]=
{key:a});f(c)}a in k||g++;k[a]=b;g>l&&this.remove(r.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;f(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===r&&(r=b.n);e(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=V();g=0;m=V();n=r=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,f){a[f]=b.info()});return a};
a.get=function(a){return b[a]};return a}}function Of(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Kc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=V();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||
b!==Q(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function f(a){var b=a.require||a.controller&&a.name;!I(b)&&E(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=oe("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=V();this.directive=function A(b,d){gb(b,"name");Ra(b,"directive");D(b)?(c(b),gb(d,"directiveFactory"),e.hasOwnProperty(b)||
(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,g){try{var h=a.invoke(e);C(h)?h={compile:ha(h)}:!h.compile&&h.link&&(h.compile=ha(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=f(h);var k=h,l=h.restrict;if(l&&(!D(l)||!/[EACM]/.test(l)))throw fa("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=e.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),e[b].push(d)):q(b,zc(A));return this};this.component=function(a,b){function c(a){function e(b){return C(b)||
I(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:ng(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,C(d)&&(d[b]=a))});c.$inject=["$injector"];
return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var r=!0;this.debugInfoEnabled=function(a){return x(a)?(r=a,this):r};var s=!0;this.preAssignBindingsEnabled=function(a){return x(a)?(s=a,this):s};var H=10;this.onChangesTtl=function(a){return arguments.length?(H=a,this):
H};var u=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};var p=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(p=a,this):p};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,f,n,M,J,B,T,S){function P(){try{if(!--xa)throw da=void 0,fa("infchng",H);J.$apply(function(){for(var a=[],b=0,c=da.length;b<c;++b)try{da[b]()}catch(d){a.push(d)}da=
void 0;if(a.length)throw a;})}finally{xa++}}function t(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function qa(a,b,c){ta.innerHTML="<span "+b+">";b=ta.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Ja(a,b){try{a.addClass(b)}catch(c){}}function ca(a,b,c,d,e){a instanceof F||(a=F(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===La&&k.nodeValue.match(f)&&
Uc(k,a[g]=y.document.createElement("span"))}var l=Ma(a,b,a,c,d,e);ca.$$addScopeClass(a);var m=null;return function(b,c,d){gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?F(ha(m,F("<div>").append(a).html())):c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+
h+"Controller",g[h].instance);ca.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function Ma(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,s,A;if(p)for(A=Array(c.length),m=0;m<h.length;m+=3)f=h[m],A[f]=c[f];else A=c;m=0;for(n=h.length;m<n;)k=A[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ca.$$addScopeInfo(F(k),l)):l=a,s=c.transcludeOnThisElement?G(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?G(a,b):null,c(f,l,k,d,s)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k,l,m,n,p,s=0;s<a.length;s++){k=
new t;l=cc(a[s],[],k,0===s?d:void 0,e);(f=l.length?W(l,a[s],k,b,c,null,[],[],f):null)&&f.scope&&ca.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[s].childNodes)||!m.length?null:Ma(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(s,f,k),n=!0,p=p||f;f=null}return n?g:null}function G(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=V(),
f;for(f in b.$$slots)e[f]=b.$$slots[f]?G(a,b.$$slots[f],c):null;return d}function cc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=wa(a);U(b,Da(g),"E",d,e);for(var k,l,m,n,p=a.attributes,s=0,A=p&&p.length;s<A;s++){var r=!1,u=!1;k=p[s];l=k.name;m=Y(k.value);k=Da(l);(n=Ga.test(k))&&(l=l.replace(bd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ha))&&Z(k[1])&&(r=l,u=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Da(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=
m,Zc(a,k)&&(c[k]=!0);pa(a,b,m,k,n);U(b,k,"A",d,e,r,u)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Fa)break;f=a.className;E(f)&&(f=f.animVal);if(D(f)&&""!==f)for(;a=h.exec(f);)k=Da(a[2]),U(b,k,"C",d,e)&&(c[k]=Y(a[3])),f=f.substr(a.index+a[0].length);break;case La:if(11===Ia)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===La;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);ka(b,a.nodeValue);break;case 8:if(!Ea)break;
Ta(a,b,c,d,e)}b.sort(ja);return b}function Ta(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Da(f[1]);U(b,h,"M",d,e)&&(c[h]=Y(f[2]))}}catch(k){}}function cd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function dd(a,b,c){return function(d,e,f,g,h){e=cd(e[0],b,c);return a(d,e,f,g,h)}}function dc(a,b,c,d,e,f){var g;return a?
ca(b,c,d,e,f):function(){g||(g=ca(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function W(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=dd(a,c,d));a.require=v.require;a.directiveName=S;if(u===v||v.$$isolateScope)a=ra(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=dd(b,c,d));b.require=v.require;b.directiveName=S;if(u===v||v.$$isolateScope)b=ra(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;ab(a)||(d=c,c=b,b=a,a=void 0);H&&(e=J);c||(c=H?P.parent():P);if(d){var f=
l.$$slots[d];if(f)return f(a,b,e,c,qa);if(z(f))throw fa("noslot",d,ya(P));}else return l(a,b,e,c,qa)}var p,v,B,M,T,J,S,P;b===f?(g=d,P=d.$$element):(P=F(f),g=new t(P,d));T=e;u?M=e.$new(!0):A&&(T=e.$parent);l&&(S=m,S.$$boundTransclude=l,S.isSlotFilled=function(a){return!!l.$$slots[a]});r&&(J=ba(P,g,S,r,M,e,u));u&&(ca.$$addScopeInfo(P,M,!0,!(O&&(O===u||O===u.$$originalDirective))),ca.$$addScopeClass(P,!0),M.$$isolateBindings=u.$$isolateBindings,v=la(e,g,M,M.$$isolateBindings,u),v.removeWatches&&M.$on("$destroy",
v.removeWatches));for(p in J){v=r[p];B=J[p];var L=v.$$bindings.bindToController;if(s){B.bindingInfo=L?la(T,g,B.instance,L,v):{};var ac=B();ac!==B.instance&&(B.instance=ac,P.data("$"+v.name+"Controller",ac),B.bindingInfo.removeWatches&&B.bindingInfo.removeWatches(),B.bindingInfo=la(T,g,B.instance,L,v))}else B.instance=B(),P.data("$"+v.name+"Controller",B.instance),B.bindingInfo=la(T,g,B.instance,L,v)}q(r,function(a,b){var c=a.require;a.bindToController&&!I(c)&&E(c)&&R(J[b].instance,X(b,c,P,J))});q(J,
function(a){var b=a.instance;if(C(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(C(b.$onInit))try{b.$onInit()}catch(e){c(e)}C(b.$doCheck)&&(T.$watch(function(){b.$doCheck()}),b.$doCheck());C(b.$onDestroy)&&T.$on("$destroy",function(){b.$onDestroy()})});p=0;for(v=h.length;p<v;p++)B=h[p],sa(B,B.isolateScope?M:e,P,g,B.require&&X(B.directiveName,B.require,P,J),S);var qa=e;u&&(u.template||null===u.templateUrl)&&(qa=M);a&&a(qa,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)B=
k[p],sa(B,B.isolateScope?M:e,P,g,B.require&&X(B.directiveName,B.require,P,J),S);q(J,function(a){a=a.instance;C(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,A=l.newScopeDirective,r=l.controllerDirectives,u=l.newIsolateScopeDirective,O=l.templateDirective,M=l.nonTlbTranscludeDirective,T=!1,J=!1,H=l.hasElementTranscludeDirective,B=d.$$element=F(b),v,S,P,L=e,qa,x=!1,Ja=!1,w,y=0,D=a.length;y<D;y++){v=a[y];var Ta=v.$$start,Ma=v.$$end;Ta&&(B=cd(b,Ta,Ma));P=void 0;if(p>v.priority)break;
if(w=v.scope)v.templateUrl||(E(w)?($("new/isolated scope",u||A,v,B),u=v):$("new/isolated scope",u,v,B)),A=A||v;S=v.name;if(!x&&(v.replace&&(v.templateUrl||v.template)||v.transclude&&!v.$$tlb)){for(w=y+1;x=a[w++];)if(x.transclude&&!x.$$tlb||x.replace&&(x.templateUrl||x.template)){Ja=!0;break}x=!0}!v.templateUrl&&v.controller&&(r=r||V(),$("'"+S+"' controller",r[S],v,B),r[S]=v);if(w=v.transclude)if(T=!0,v.$$tlb||($("transclusion",M,v,B),M=v),"element"===w)H=!0,p=v.priority,P=B,B=d.$$element=F(ca.$$createComment(S,
d[S])),b=B[0],ga(f,va.call(P,0),b),P[0].$$parentNode=P[0].parentNode,L=dc(Ja,P,e,p,g&&g.name,{nonTlbTranscludeDirective:M});else{var G=V();P=F(Zb(b)).contents();if(E(w)){P=[];var Q=V(),bc=V();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;G[b]=null;bc[b]=c});q(B.contents(),function(a){var b=Q[Da(wa(a))];b?(bc[b]=!0,G[b]=G[b]||[],G[b].push(a)):P.push(a)});q(bc,function(a,b){if(!a)throw fa("reqslot",b);});for(var U in G)G[U]&&(G[U]=dc(Ja,G[U],e))}B.empty();L=dc(Ja,P,e,void 0,
void 0,{needsNewScope:v.$$isolateScope||v.$$newScope});L.$$slots=G}if(v.template)if(J=!0,$("template",O,v,B),O=v,w=C(v.template)?v.template(B,d):v.template,w=Ca(w),v.replace){g=v;P=Xb.test(w)?ed(ha(v.templateNamespace,Y(w))):[];b=P[0];if(1!==P.length||1!==b.nodeType)throw fa("tplrt",S,"");ga(f,B,b);D={$attr:{}};w=cc(b,[],D);var og=a.splice(y+1,a.length-(y+1));(u||A)&&aa(w,u,A);a=a.concat(w).concat(og);ea(d,D);D=a.length}else B.html(w);if(v.templateUrl)J=!0,$("template",O,v,B),O=v,v.replace&&(g=v),
n=ia(a.splice(y,a.length-y),B,d,f,T&&L,h,k,{controllerDirectives:r,newScopeDirective:A!==v&&A,newIsolateScopeDirective:u,templateDirective:O,nonTlbTranscludeDirective:M}),D=a.length;else if(v.compile)try{qa=v.compile(B,d,L);var Z=v.$$originalDirective||v;C(qa)?m(null,db(Z,qa),Ta,Ma):qa&&m(db(Z,qa.pre),db(Z,qa.post),Ta,Ma)}catch(da){c(da,ya(B))}v.terminal&&(n.terminal=!0,p=Math.max(p,v.priority))}n.scope=A&&!0===A.scope;n.transcludeOnThisElement=T;n.templateOnThisElement=J;n.transclude=L;l.hasElementTranscludeDirective=
H;return n}function X(a,b,c,d){var e;if(D(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(I(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=X(a,b[g],c,d);else E(b)&&(e={},q(b,function(b,f){e[f]=X(a,b,c,d)}));return e||null}function ba(a,b,c,d,e,f,g){var h=V(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,
$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=M(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Tb(a[d],{$$isolateScope:b,$$newScope:c})}function U(b,c,f,g,h,k,l){if(c===h)return null;var m=null;if(e.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(f)){k&&(c=Tb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var s=
m=c,r=c.name,v={isolateScope:null,bindToController:null};E(s.scope)&&(!0===s.bindToController?(v.bindToController=d(s.scope,r,!0),v.isolateScope={}):v.isolateScope=d(s.scope,r,!1));E(s.bindToController)&&(v.bindToController=d(s.bindToController,r,!0));if(v.bindToController&&!s.controller)throw fa("noctrl",r);m=m.$$bindings=v;E(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=
c[d],b.multiElement)return!0;return!1}function ea(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ia(a,b,c,d,e,g,h,k){var l=[],m,n,p=b[0],s=a.shift(),A=Tb(s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),r=C(s.templateUrl)?s.templateUrl(b,c):s.templateUrl,v=s.templateNamespace;
b.empty();f(r).then(function(f){var u,B;f=Ca(f);if(s.replace){f=Xb.test(f)?ed(ha(v,Y(f))):[];u=f[0];if(1!==f.length||1!==u.nodeType)throw fa("tplrt",s.name,r);f={$attr:{}};ga(d,b,u);var O=cc(u,[],f);E(s.scope)&&aa(O,!0);a=O.concat(a);ea(c,f)}else u=p,b.html(f);a.unshift(A);m=W(a,u,c,e,b,s,g,h,k);q(d,function(a,c){a===u&&(d[c]=b[0])});for(n=Ma(b[0].childNodes,e);l.length;){f=l.shift();B=l.shift();var M=l.shift(),T=l.shift(),O=b[0];if(!f.$$destroyed){if(B!==p){var J=B.className;k.hasElementTranscludeDirective&&
s.replace||(O=Zb(u));ga(M,F(B),O);Ja(F(O),J)}B=m.transcludeOnThisElement?G(f,m.transclude,T):T;m(n,f,O,d,B)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=G(b,m.transclude,e)),m(n,b,c,d,a)))}}function ja(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),
a,ya(d));}function ka(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ca.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ca.$$addBindingClass(e);ca.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=y.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===
b)return B.HTML;var c=wa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return B.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b)return B.RESOURCE_URL}function pa(a,c,d,e,f){var g=oa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===wa(a))throw fa("selmulti",ya(a));c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=V());if(m.test(e))throw fa("nodomevents");var k=f[e];k!==d&&(l=
k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ga(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=y.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);
F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ra(a,b){return R(function(){return a.apply(null,arguments)},a,b)}function sa(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function la(a,c,d,e,f){function g(b,c,e){!C(d.$onChanges)||c===e||c!==c&&e!==e||(da||(a.$$postDigest(P),da=[]),m||(m={},da.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Hb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],
l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,s,A,r,u;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(D(a)||Ka(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;s=c[m];D(s)?d[h]=b(s)(a):Ka(s)&&(d[h]=s);l[h]=new Hb(ec,d[h]);k.push(p);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);u=A.literal?na:function(a,b){return a===b||a!==a&&b!==b};r=A.assign||function(){s=d[h]=A(a);throw fa("nonassign",c[m],m,f.name);};s=
d[h]=A(a);p=function(b){u(b,d[h])||(u(b,s)?r(a,b=d[h]):d[h]=b);return s=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,A.literal);k.push(p);break;case "<":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);var B=A.literal,M=d[h]=A(a);l[h]=new Hb(ec,d[h]);p=a.$watch(A,function(a,b){if(b===a){if(b===M||B&&na(b,M))return;b=M}g(h,a,b);d[h]=a},B);k.push(p);break;case "&":A=c.hasOwnProperty(m)?n(c[m]):w;if(A===w&&p)break;d[h]=function(b){return A(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var za=/^\w/,ta=y.document.createElement("div"),Ea=u,Fa=p,xa=H,da;t.prototype={$normalize:Da,$addClass:function(a){a&&0<a.length&&T.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&T.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=fd(a,b);c&&c.length&&T.addClass(this.$$element,c);(c=fd(b,a))&&c.length&&T.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
Zc(this.$$element[0],a),g=gd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Hc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=S(b,"src"===a);else if("img"===f&&"srcset"===a&&x(b)){for(var f="",g=Y(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+S(Y(g[m]),!0),f=f+(" "+Y(g[m+1]));g=Y(g[2*
l]).split(/\s/);f+=S(Y(g[0]),!0);2===g.length&&(f+=" "+Y(g[1]));this[a]=b=f}!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):za.test(e)?this.$$element.attr(e,b):qa(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=V()),e=d[a]||(d[a]=[]);e.push(b);J.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){bb(e,b)}}};var Aa=b.startSymbol(),Ba=b.endSymbol(),
Ca="{{"===Aa&&"}}"===Ba?$a:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Ba)},Ga=/^ngAttr[A-Z]/,Ha=/^(.+)Start$/;ca.$$addBindingInfo=r?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;ca.$$addBindingClass=r?function(a){Ja(a,"ng-binding")}:w;ca.$$addScopeInfo=r?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;ca.$$addScopeClass=r?function(a,b){Ja(a,b?"ng-isolate-scope":"ng-scope")}:w;ca.$$createComment=function(a,
b){var c="";r&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return y.document.createComment(c)};return ca}]}function Hb(a,b){this.previousValue=a;this.currentValue=b}function Da(a){return hb(a.replace(bd,""))}function fd(a,b){var d="",c=a.split(/\s+/),f=b.split(/\s+/),e=0;a:for(;e<c.length;e++){for(var g=c[e],h=0;h<f.length;h++)if(g===f[h])continue a;d+=(0<d.length?" ":"")+g}return d}function ed(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===La&&""===d.nodeValue.trim())&&
pg.call(a,b,1)}return a}function ng(a,b){if(b&&D(b))return b;if(D(a)){var d=hd.exec(a);if(d)return d[3]}}function tf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");E(b)?R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function f(a,b,c,d){if(!a||!E(a.$scope))throw G("$controller")("noscp",d,b);a.$scope[b]=c}return function(e,g,h,k){var l,m,n;h=!0===h;k&&D(k)&&(n=k);if(D(e)){k=e.match(hd);
if(!k)throw id("ctrlfmt",e);m=k[1];n=n||k[3];e=a.hasOwnProperty(m)?a[m]:Jc(g.$scope,m,!0)||(b?Jc(c,m,!0):void 0);if(!e)throw id("ctrlreg",m);Qa(e,m,!0)}if(h)return h=(I(e)?e[e.length-1]:e).prototype,l=Object.create(h||null),n&&f(g,n,l,m||e.name),R(function(){var a=d.invoke(e,l,g,m);a!==l&&(E(a)||C(a))&&(l=a,n&&f(g,n,l,m||e.name));return l},{instance:l,identifier:n});l=d.instantiate(e,g,m);n&&f(g,n,l,m||e.name);return l}}]}function uf(){this.$get=["$window",function(a){return F(a.document)}]}function vf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function fc(a){return E(a)?ja(a)?a.toISOString():eb(a):a}function Af(){this.$get=function(){return function(a){if(!a)return"";var b=[];yc(a,function(a,c){null===a||z(a)||(I(a)?q(a,function(a){b.push(oa(c)+"="+oa(fc(a)))}):b.push(oa(c)+"="+oa(fc(a))))});return b.join("&")}}}function Bf(){this.$get=function(){return function(a){function b(a,f,e){null===a||z(a)||(I(a)?q(a,function(a,c){b(a,f+"["+(E(a)?c:"")+"]")}):E(a)&&!ja(a)?yc(a,
function(a,c){b(a,f+(e?"":"[")+c+(e?"":"]"))}):d.push(oa(f)+"="+oa(fc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function gc(a,b){if(D(a)){var d=a.replace(qg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(jd))||(c=(c=d.match(rg))&&sg[c[0]].test(d));c&&(a=Cc(d))}}return a}function kd(a){var b=V(),d;D(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var f=Q(Y(a.substr(0,d)));a=Y(a.substr(d+1));f&&(b[f]=b[f]?b[f]+", "+a:a)}):E(a)&&q(a,function(a,d){var e=Q(d),g=Y(a);e&&
(b[e]=b[e]?b[e]+", "+g:g)});return b}function ld(a){var b;return function(d){b||(b=kd(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function md(a,b,d,c){if(C(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function zf(){var a=this.defaults={transformResponse:[gc],transformRequest:[function(a){return E(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ka(hc),put:ka(hc),
patch:ka(hc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return x(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(f,e,g,h,k,l){function m(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;
return a}function e(a,b){var c,d={};q(a,function(a,e){C(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=R({},a);b.data=md(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!E(b))throw G("$http")("badreq",b);if(!D(b.url))throw G("$http")("badreq",b.url);var g=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);g.headers=function(b){var c=a.headers,d=R({},b.headers),
f,g,h,c=R({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,ka(b))}(b);g.method=wb(g.method);g.paramSerializer=D(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;var h=[],m=[],s=k.when(g);q(H,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&m.push(a.response,a.responseError)});s=c(s,h);s=s.then(function(b){var c=b.headers,d=md(b.data,ld(c),void 0,b.transformRequest);z(d)&&
q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(f,f)});s=c(s,m);d?(s.success=function(a){Qa(a,"fn");s.then(function(b){a(b.data,b.status,b.headers,g)});return s},s.error=function(a){Qa(a,"fn");s.then(null,function(b){a(b.data,b.status,b.headers,g)});return s}):(s.success=nd("success"),s.error=nd("error"));return s}function n(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}
b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}J&&(200<=a&&300>a?J.put(S,[a,c,kd(d),e]):J.remove(S));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?O.resolve:O.reject)({data:a,status:b,headers:ld(d),config:c,statusText:e})}function H(a){n(a.data,a.status,ka(a.headers()),a.statusText)}function L(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var O=k.defer(),M=O.promise,
J,B,T=c.headers,S=r(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);M.then(L,L);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=E(c.cache)?c.cache:E(a.cache)?a.cache:s);J&&(B=J.get(S),x(B)?B&&C(B.then)?B.then(H,H):I(B)?n(B[1],B[0],ka(B[2]),B[3]):n(B,200,{},"OK"):J.put(S,M));z(B)&&((B=od(c.url)?e()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(T[c.xsrfHeaderName||a.xsrfHeaderName]=B),f(c.method,S,d,l,T,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return M}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}var s=g("$http");a.paramSerializer=D(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var H=[];q(c,function(a){H.unshift(D(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(R({},d||{},
{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function Df(){this.$get=function(){return function(){return new y.XMLHttpRequest}}}function Cf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return tg(a,c,a.defer,b,d[0])}]}function tg(a,b,d,c,f){function e(a,b,d){a=a.replace("JSON_CALLBACK",b);var e=f.createElement("script"),m=null;e.type="text/javascript";e.src=a;e.async=!0;m=function(a){e.removeEventListener("load",m,!1);e.removeEventListener("error",
m,!1);f.body.removeChild(e);e=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};e.addEventListener("load",m,!1);e.addEventListener("error",m,!1);f.body.appendChild(e);return m}return function(f,h,k,l,m,n,r,s,H,u){function p(){v&&v();N&&N.abort()}function K(b,c,e,f,g){x(O)&&d.cancel(O);v=N=null;b(c,e,f,g);a.$$completeOutstandingRequest(w)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"===Q(f))var A=c.createCallback(h),
v=e(h,A,function(a,b){var d=200===a&&c.getResponse(A);K(l,a,d,"",b);c.removeCallback(A)});else{var N=b(f,h);N.open(f,h,!0);q(m,function(a,b){x(a)&&N.setRequestHeader(b,a)});N.onload=function(){var a=N.statusText||"",b="response"in N?N.response:N.responseText,c=1223===N.status?204:N.status;0===c&&(c=b?200:"file"===ta(h).protocol?404:0);K(l,c,b,N.getAllResponseHeaders(),a)};f=function(){K(l,-1,null,null,"")};N.onerror=f;N.onabort=f;N.ontimeout=f;q(H,function(a,b){N.addEventListener(b,a)});q(u,function(a,
b){N.upload.addEventListener(b,a)});r&&(N.withCredentials=!0);if(s)try{N.responseType=s}catch(L){if("json"!==s)throw L;}N.send(z(k)?null:k)}if(0<n)var O=d(p,n);else n&&C(n.then)&&n.then(p)}}function xf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,f){function e(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(r,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();
return d(a)},b,c);return e}function k(e,k,n,p){function r(a){try{var b=a;a=n?f.getTrusted(n,b):f.valueOf(b);var d;if(p&&!x(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=eb(a)}d=a}return d}catch(g){c(Ha.interr(e,g))}}if(!e.length||-1===e.indexOf(a)){var A;k||(k=g(e),A=ha(k),A.exp=e,A.expressions=[],A.$$watchDelegate=h);return A}p=!!p;var v,q,L=0,O=[],M=[];A=e.length;for(var J=[],B=[];L<A;)if(-1!==(v=e.indexOf(a,L))&&-1!==(q=e.indexOf(b,v+
l)))L!==v&&J.push(g(e.substring(L,v))),L=e.substring(v+l,q),O.push(L),M.push(d(L,r)),L=q+m,B.push(J.length),J.push("");else{L!==A&&J.push(g(e.substring(L)));break}n&&1<J.length&&Ha.throwNoconcat(e);if(!k||O.length){var T=function(a){for(var b=0,c=O.length;b<c;b++){if(p&&z(a[b]))return;J[B[b]]=a[b]}return J.join("")};return R(function(a){var b=0,d=O.length,f=Array(d);try{for(;b<d;b++)f[b]=M[b](a);return T(f)}catch(g){c(Ha.interr(e,g))}},{exp:e,expressions:O,$$watchDelegate:function(a,b){var c;return a.$watchGroup(M,
function(d,e){var f=T(d);C(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,e),"g"),r=new RegExp(b.replace(/./g,e),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function yf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,f){function e(e,k,l,m){function n(){r?e.apply(null,s):e(p)}var r=4<arguments.length,s=r?va.call(arguments,4):[],H=b.setInterval,u=b.clearInterval,p=0,K=x(m)&&!m,A=(K?c:d).defer(),
v=A.promise;l=x(l)?l:0;v.$$intervalId=H(function(){K?f.defer(n):a.$evalAsync(n);A.notify(p++);0<l&&p>=l&&(A.resolve(p),u(v.$$intervalId),delete g[v.$$intervalId]);K||a.$apply()},k);g[v.$$intervalId]=A;return v}var g={};e.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return e}]}function ic(a){a=a.split("/");for(var b=a.length;b--;)a[b]=tb(a[b]);return a.join("/")}function pd(a,b){var d=ta(a);b.$$protocol=
d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||ug[d.protocol]||null}function qd(a,b){if(vg.test(a))throw lb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=ta(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Fc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function ra(a,b){if(b.slice(0,a.length)===a)return b.substr(a.length)}function Ga(a){var b=a.indexOf("#");return-1===
b?a:a.substr(0,b)}function mb(a){return a.replace(/(#.+)|#$/,"$1")}function jc(a,b,d){this.$$html5=!0;d=d||"";pd(a,this);this.$$parse=function(a){var d=ra(b,a);if(!D(d))throw lb("ipthprfx",a,b);qd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Vb(this.$$search),d=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=ic(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),
!0;var e,g;x(e=ra(a,c))?(g=e,g=d&&x(e=ra(d,e))?b+(ra("/",e)||e):a+g):x(e=ra(b,c))?g=b+e:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function kc(a,b,d){pd(a,this);this.$$parse=function(c){var f=ra(a,c)||ra(b,c),e;z(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",z(f)&&(a=c,this.replace())):(e=ra(d,f),z(e)&&(e=f));qd(e,this);c=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;e.slice(0,f.length)===f&&(e=e.replace(f,""));g.exec(e)||(c=(e=g.exec(c))?e[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Vb(this.$$search),f=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=ic(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ga(a)===Ga(b)?(this.$$parse(b),!0):!1}}function rd(a,b,d){this.$$html5=!0;kc.apply(this,arguments);this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;a===Ga(c)?e=c:(g=ra(b,c))?e=a+d+g:b===c+"/"&&(e=b);e&&this.$$parse(e);return!!e};this.$$compose=function(){var b=Vb(this.$$search),
f=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=ic(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+d+this.$$url}}function Ib(a){return function(){return this[a]}}function sd(a,b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Ff(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.html5Mode=function(a){if(Ka(a))return b.enabled=a,this;if(E(a)){Ka(a.enabled)&&(b.enabled=a.enabled);Ka(a.requireBase)&&
(b.requireBase=a.requireBase);if(Ka(a.rewriteLinks)||D(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,f,e,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),r;if(b.enabled){if(!m&&b.requireBase)throw lb("nobase");
r=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?jc:rd}else r=Ga(n),m=kc;var s=r.substr(0,Ga(r).lastIndexOf("/")+1);l=new m(r,s,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var H=/^\s*(javascript|mailto):/i;e.on("click",function(a){var f=b.rewriteLinks;if(f&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=F(a.target);"a"!==wa(h[0]);)if(h[0]===e[0]||!(h=h.parent())[0])return;if(!D(f)||!z(h.attr(f))){var f=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");
E(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=ta(f.animVal).href);H.test(f)||!f||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(f,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});mb(l.absUrl())!==mb(n)&&c.url(l.absUrl(),!0);var u=!0;c.onUrlChange(function(a,b){z(ra(s,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=mb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;
l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(u=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=mb(c.url()),b=mb(l.absUrl()),e=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&f.history&&e!==l.$$state;if(u||m)u=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,e).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=e):(m&&h(b,g,e===l.$$state?null:l.$$state),k(a,e)))});l.$$replace=!1});return l}]}function Gf(){var a=!0,b=
this;this.debugEnabled=function(b){return x(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function f(a){var b=d.console||{},f=b[a]||b.log||w;a=!1;try{a=!!f.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),
info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ea("isecfld",b);return a}function wg(a){return a+""}function Ea(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a.window===a)throw ea("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ea("isecdom",b);if(a===
Object)throw ea("isecobj",b);}return a}function td(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a===xg||a===yg||a===zg)throw ea("isecff",b);}}function Jb(a,b){if(a&&(a===ud||a===vd||a===wd||a===xd||a===yd||a===zd||a===Ag||a===Bg||a===Kb||a===Cg||a===Ad||a===Dg))throw ea("isecaf",b);}function Eg(a,b){return"undefined"!==typeof a?a:b}function Bd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function X(a,b){var d,c,f;switch(a.type){case t.Program:d=!0;q(a.body,function(a){X(a.expression,
b);d=d&&a.expression.constant});a.constant=d;break;case t.Literal:a.constant=!0;a.toWatch=[];break;case t.UnaryExpression:X(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case t.BinaryExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case t.LogicalExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case t.ConditionalExpression:X(a.test,
b);X(a.alternate,b);X(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case t.Identifier:a.constant=!1;a.toWatch=[a];break;case t.MemberExpression:X(a.object,b);a.computed&&X(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case t.CallExpression:d=f=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=f?c:[a];break;case t.AssignmentExpression:X(a.left,b);X(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case t.ArrayExpression:d=!0;c=[];q(a.elements,function(a){X(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case t.ObjectExpression:d=!0;c=[];q(a.properties,function(a){X(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case t.ThisExpression:a.constant=
!1;a.toWatch=[];break;case t.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Cd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Dd(a){return a.type===t.Identifier||a.type===t.MemberExpression}function Ed(a){if(1===a.body.length&&Dd(a.body[0].expression))return{type:t.AssignmentExpression,left:a.body[0].expression,right:{type:t.NGValueParameter},operator:"="}}function Fd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===
t.Literal||a.body[0].expression.type===t.ArrayExpression||a.body[0].expression.type===t.ObjectExpression)}function Gd(a,b){this.astBuilder=a;this.$filter=b}function Hd(a,b){this.astBuilder=a;this.$filter=b}function Lb(a){return"constructor"===a}function lc(a){return C(a.valueOf)?a.valueOf():Fg.call(a)}function Hf(){var a=V(),b=V(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,f;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;f=b;return this};this.$get=["$filter",
function(e){function g(c,d,f){var g,k,H;f=f||K;switch(typeof c){case "string":H=c=c.trim();var q=f?b:a;g=q[H];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=f?p:u;var B=new mc(g);g=(new nc(B,e,g)).parse(c);g.constant?g.$$watchDelegate=r:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);f&&(g=h(g));q[H]=g}return s(g,d);case "function":return s(c,d);default:return s(w,d)}}function h(a){function b(c,d,e,f){var g=K;K=!0;try{return a(c,d,e,f)}finally{K=g}}if(!a)return a;
b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=lc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&lc(b));return g},b,c,e)}for(var l=[],
m=[],n=0,s=f.length;n<s;n++)l[n]=k,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&lc(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;C(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){x(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},
function(a,c,d){g=a;C(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function r(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function s(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?
a.inputs:[a]);return c}var H=da().noUnsafeEval,u={csp:H,expensiveChecks:!1,literals:sa(d),isIdentifierStart:C(c)&&c,isIdentifierContinue:C(f)&&f},p={csp:H,expensiveChecks:!0,literals:sa(d),isIdentifierStart:C(c)&&c,isIdentifierContinue:C(f)&&f},K=!1;g.$$runningExpensiveChecks=function(){return K};return g}]}function Jf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return Id(function(b){a.$evalAsync(b)},b)}]}function Kf(){this.$get=["$browser","$exceptionHandler",function(a,b){return Id(function(b){a.defer(b)},
b)}]}function Id(a,b){function d(){var a=new g;a.resolve=f(a,a.resolve);a.reject=f(a,a.reject);a.notify=f(a,a.notify);return a}function c(){this.$$state={status:0}}function f(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{C(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),
b(h)}}}))}function g(){this.promise=new c}function h(a){var b=new g;b.reject(a);return b.promise}function k(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return h(e)}return d&&C(d.then)?d.then(function(){return b(a)},h):b(a)}function l(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)}function m(a){if(!C(a))throw n("norslvr",a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise}var n=G("$q",TypeError);R(c.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;
var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,r,a)},function(b){return k(b,h,a)},b)}});R(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(n("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function c(a){k||(k=!0,h.$$resolve(a))}function d(a){k||
(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(E(a)||C(a))g=a&&a.then;C(g)?(this.promise.$$state.status=-1,g.call(a,c,d,f(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){d(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(C(a)?a(c):c)}catch(h){b(h)}}})}});var r=l;m.prototype=c.prototype;m.defer=d;m.reject=h;m.when=l;m.resolve=r;m.all=function(a){var b=new g,c=0,d=I(a)?[]:{};q(a,function(a,e){c++;l(a).then(function(a){d[e]=a;--c||b.resolve(d)},function(a){b.reject(a)})});0===c&&b.resolve(d);return b.promise};m.race=function(a){var b=d();q(a,function(a){l(a).then(b.resolve,b.reject)});return b.promise};return m}function Tf(){this.$get=
["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,f=!!d,e=f?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};e.supported=f;return e}]}function If(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=
0;this.$id=++sb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=G("$rootScope"),c=null,f=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(e,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ia&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++sb;this.$$phase=
this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(K.$$phase)throw d("inprog",K.$$phase);K.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function H(){}function u(){for(;t.length;)try{t.shift()()}catch(a){e(a)}f=
null}function p(){null===f&&(f=h.defer(function(){K.$apply(u)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,
f,a);var h=this,k=h.$$watchers,l={fn:b,last:H,get:f,exp:e||a,eq:!!d};c=null;C(b)||(l.fn=w);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;r(this,1);return function(){var a=bb(k,l);0<=a&&(r(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(E(e))if(la(e))for(f!==n&&(f=n,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==r&&(f=r={},s=0,l++);a=0;for(b in e)ua.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)ua.call(e,b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],r={},p=!0,s=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(k)if(E(e))if(la(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,r,p,s=b,q,t=[],N,x;n("$digest");
h.$$checkUrlChange();this===K&&null!==f&&(h.defer.cancel(f),u());c=null;do{p=!1;q=this;for(r=0;r<A.length;r++){try{x=A[r],x.scope.$eval(x.expression,x.locals)}catch(z){e(z)}c=null}A.length=0;a:do{if(r=q.$$watchers)for(r.$$digestWatchIndex=r.length;r.$$digestWatchIndex--;)try{if(a=r[r.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?na(g,k):ia(g)&&ia(k)))p=!0,c=a,a.last=a.eq?sa(g,null):g,l=a.fn,l(g,k===H?g:k,q),5>s&&(N=4-s,t[N]||(t[N]=[]),t[N].push({msg:C(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,newVal:g,oldVal:k}));else if(a===c){p=!1;break a}}catch(w){e(w)}if(!(r=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(r=q.$$nextSibling);)q=q.$parent}while(q=r);if((p||A.length)&&!s--)throw K.$$phase=null,d("infdig",b,t);}while(p||A.length);for(K.$$phase=null;L<v.length;)try{v[L++]()}catch(y){e(y)}v.length=L=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===K&&h.$$applicationDestroyed();r(this,
-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners=
{};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){K.$$phase||A.length||h.defer(function(){A.length&&K.$digest()});A.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){v.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{K.$$phase=null}}catch(b){e(b)}finally{try{K.$digest()}catch(c){throw e(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);a=g(a);p()},$on:function(a,b){var c=
this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,s(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<
m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g=cb([f],arguments,1),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var K=new m,A=K.$$asyncQueue=[],v=K.$$postDigestQueue=[],t=K.$$applyAsyncQueue=[],L=0;return K}]}function Be(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var f=c?b:a,e;e=ta(d).href;return""===e||e.match(f)?d:"unsafe:"+e}}}function Gg(a){if("self"===a)return a;if(D(a)){if(-1<a.indexOf("***"))throw Fa("iwcard",a);a=Jd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Za(a))return new RegExp("^"+a.source+"$");throw Fa("imatcher");}function Kd(a){var b=[];x(a)&&q(a,function(a){b.push(Gg(a))});return b}function Mf(){this.SCE_CONTEXTS=ga;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=Kd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Kd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?od(b):!!a.exec(b.href)}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw Fa("unsafe");
};d.has("$sanitize")&&(e=d.get("$sanitize"));var g=f(),h={};h[ga.HTML]=f(g);h[ga.CSS]=f(g);h[ga.URL]=f(g);h[ga.JS]=f(g);h[ga.RESOURCE_URL]=f(h[ga.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Fa("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Fa("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&f instanceof g)return f.$$unwrapTrustedValue();if(d===ga.RESOURCE_URL){var g=
ta(f.toString()),n,r,s=!1;n=0;for(r=a.length;n<r;n++)if(c(a[n],g)){s=!0;break}if(s)for(n=0,r=b.length;n<r;n++)if(c(b[n],g)){s=!1;break}if(s)return f;throw Fa("insecurl",f.toString());}if(d===ga.HTML)return e(f);throw Fa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Lf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ia)throw Fa("iequirks");var c=ka(ga);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=$a);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var f=c.parseAs,e=c.getTrusted,g=c.trustAs;q(ga,function(a,b){var d=Q(b);c[hb("parse_as_"+d)]=function(b){return f(a,b)};c[hb("get_trusted_"+d)]=function(b){return e(a,b)};c[hb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Nf(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=Z((/android (\d+)/.exec(Q((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var r in l)if(m=k.exec(r)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||
h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!f||m&&n||(m=D(l.webkitTransition),n=D(l.webkitAnimation))}return{history:!(!c||4>f||e),hasEvent:function(a){if("input"===a&&11>=Ia)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:da(),vendorPrefix:h,transitions:m,animations:n,android:f}}]}function Pf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,f){function e(g,h){e.totalPendingRequests++;
if(!D(g)||z(b.get(g)))g=f.getTrustedResourceUrl(g);var k=d.defaults&&d.defaults.transformResponse;I(k)?k=k.filter(function(a){return a!==gc}):k===gc&&(k=null);return d.get(g,R({cache:b,transformResponse:k},a))["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw Hg("tpload",g,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function Qf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=$.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Jd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Rf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,f){function e(e,k,l){C(e)||(l=k,k=e,e=w);var m=va.call(arguments,3),n=x(l)&&!l,r=(n?c:d).defer(),s=r.promise,q;q=b.defer(function(){try{r.resolve(e.apply(null,m))}catch(b){r.reject(b),f(b)}finally{delete g[s.$$timeoutId]}n||a.$apply()},k);s.$$timeoutId=q;g[q]=r;return s}var g={};e.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),
delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return e}]}function ta(a){Ia&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,""):"",hostname:aa.hostname,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function od(a){a=D(a)?ta(a):a;return a.protocol===Ld.protocol&&a.host===Ld.host}
function Sf(){this.$get=ha(y)}function Md(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},f="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==f)for(f=a,a=f.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),z(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Wf(){this.$get=Md}function Rc(a){function b(d,c){if(E(d)){var f={};q(d,function(a,c){f[c]=b(c,a)});return f}return a.factory(d+"Filter",
c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Nd);b("date",Od);b("filter",Ig);b("json",Jg);b("limitTo",Kg);b("lowercase",Lg);b("number",Pd);b("orderBy",Qd);b("uppercase",Mg)}function Ig(){return function(a,b,d,c){if(!la(a)){if(null==a)return a;throw G("filter")("notarray",a);}c=c||"$";var f;switch(oc(b)){case "function":break;case "boolean":case "null":case "number":case "string":f=!0;case "object":b=Ng(b,d,c,f);break;default:return a}return Array.prototype.filter.call(a,
b)}}function Ng(a,b,d,c){var f=E(a)&&d in a;!0===b?b=na:C(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(E(b)||E(a)&&!Ac(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(e){return f&&!E(e)?Na(e,a[d],b,d,!1):Na(e,a,b,d,c)}}function Na(a,b,d,c,f,e){var g=oc(a),h=oc(b);if("string"===h&&"!"===b.charAt(0))return!Na(a,b.substring(1),d,c,f);if(I(a))return a.some(function(a){return Na(a,b,d,c,f)});switch(g){case "object":var k;if(f){for(k in a)if("$"!==
k.charAt(0)&&Na(a[k],b,d,c,!0))return!0;return e?!1:Na(a,b,d,c,!1)}if("object"===h){for(k in b)if(e=b[k],!C(e)&&!z(e)&&(g=k===c,!Na(g?a:a[k],e,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function oc(a){return null===a?"null":typeof a}function Nd(a){var b=a.NUMBER_FORMATS;return function(a,c,f){z(c)&&(c=b.CURRENCY_SYM);z(f)&&(f=b.PATTERNS[1].maxFrac);return null==a?a:Rd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,f).replace(/\u00A4/g,c)}}function Pd(a){var b=
a.NUMBER_FORMATS;return function(a,c){return null==a?a:Rd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Og(a){var b=0,d,c,f,e,g;-1<(c=a.indexOf(Sd))&&(a=a.replace(Sd,""));0<(f=a.search(/e/i))?(0>c&&(c=f),c+=+a.slice(f+1),a=a.substring(0,f)):0>c&&(c=a.length);for(f=0;a.charAt(f)===pc;f++);if(f===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===pc;)g--;c-=f;d=[];for(e=0;f<=g;f++,e++)d[e]=+a.charAt(f)}c>Td&&(d=d.splice(0,Td-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Pg(a,b,d,c){var f=a.d,e=
f.length-a.i;b=z(b)?Math.min(Math.max(d,e),c):+b;d=b+a.i;c=f[d];if(0<d){f.splice(Math.max(a.i,d));for(var g=d;g<f.length;g++)f[g]=0}else for(e=Math.max(0,e),a.i=1,f.length=Math.max(1,d=b+1),f[0]=0,g=1;g<d;g++)f[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)f.unshift(0),a.i++;f.unshift(1);a.i++}else f[d-1]++;for(;e<Math.max(0,b);e++)f.push(0);if(b=f.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))f.unshift(b),a.i++}function Rd(a,b,d,c,f){if(!D(a)&&!ba(a)||isNaN(a))return"";var e=
!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(e)k="\u221e";else{g=Og(h);Pg(g,f,b.minFrac,b.maxFrac);k=g.d;h=g.i;f=g.e;e=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?e=k.splice(h,k.length):(e=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);e.length&&(k+=c+e.join(""));f&&(k+="e+"+f)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+
k+b.posSuf}function Mb(a,b,d,c){var f="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,f="-");for(a=""+a;a.length<b;)a=pc+a;d&&(a=a.substr(a.length-b));return f+a}function U(a,b,d,c,f){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12===d&&(e=12);return Mb(e,b,c,f)}}function nb(a,b,d){return function(c,f){var e=c["get"+a](),g=wb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return f[g][e]}}function Ud(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Vd(a){return function(b){var d=
Ud(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Mb(b,a)}}function qc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Od(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var e=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(e=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));e=Z(b[4]||0)-e;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||
0)));k.call(a,e,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,e){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;D(c)&&(c=Qg.test(c)?Z(c):b(c));ba(c)&&(c=new Date(c));if(!ja(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Rg.exec(d))?(h=cb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();e&&(m=Dc(e,m),c=Ub(c,e,!0));q(h,function(b){k=Sg[b];g+=k?k(c,a.DATETIME_FORMATS,m):
"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Jg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Kg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(ia(b))return a;ba(a)&&(a=a.toString());if(!la(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?rc(a,d,d+b):0===d?rc(a,b,a.length):rc(a,Math.max(0,d+b),d)}}function rc(a,b,d){return D(a)?a.slice(b,d):va.call(a,b,d)}function Qd(a){function b(b){return b.map(function(b){var c=
1,d=$a;if(C(b))d=b;else if(D(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var f=d(),d=function(a){return a[f]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(E(k)&&(k=a.index),E(l)&&(l=b.index));k!==l&&(c=
k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,e,g,h){if(null==a)return a;if(!la(a))throw G("orderBy")("notarray",a);I(e)||(e=[e]);0===e.length&&(e=["+"]);var k=b(e),l=g?-1:1,m=C(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(C(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Ac(e)&&(e=e.toString(),d(e))}return{value:e,type:c,
index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Va(a){C(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ha(a)}function Wd(a,b,d,c,f){var e=this,g=[];e.$error={};e.$$success={};e.$pending=void 0;e.$name=f(b.name||b.ngForm||"")(d);e.$dirty=!1;e.$pristine=!0;e.$valid=!0;e.$invalid=!1;e.$submitted=!1;e.$$parentForm=
Nb;e.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};e.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};e.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(e[a.$name]=a);a.$$parentForm=e};e.$$renameControl=function(a,b){var c=a.$name;e[c]===a&&delete e[c];e[b]=a;a.$name=b};e.$removeControl=function(a){a.$name&&e[a.$name]===a&&delete e[a.$name];q(e.$pending,function(b,c){e.$setValidity(c,null,a)});q(e.$error,function(b,c){e.$setValidity(c,null,
a)});q(e.$$success,function(b,c){e.$setValidity(c,null,a)});bb(g,a);a.$$parentForm=Nb};Xd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},$animate:c});e.$setDirty=function(){c.removeClass(a,Wa);c.addClass(a,Ob);e.$dirty=!0;e.$pristine=!1;e.$$parentForm.$setDirty()};e.$setPristine=function(){c.setClass(a,Wa,Ob+" ng-submitted");e.$dirty=!1;e.$pristine=!0;e.$submitted=!1;q(g,function(a){a.$setPristine()})};
e.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};e.$setSubmitted=function(){c.addClass(a,"ng-submitted");e.$submitted=!0;e.$$parentForm.$setSubmitted()}}function sc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Xa(a,b,d,c,f,e){var g=Q(b[0].type);if(!f.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(e.defer.cancel(k),k=null);if(!h){var f=b.val();a=a&&a.type;"password"===
g||d.ngTrim&&"false"===d.ngTrim||(f=Y(f));(c.$viewValue!==f||""===f&&c.$$hasNativeValidators)&&c.$setViewValue(f,a)}};if(f.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=e.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(f.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Yd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=
this.validity,c=b.badInput,d=b.typeMismatch;k=e.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Pb(a,b){return function(d,c){var f,e;if(ja(d))return d;if(D(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Tg.test(d))return new Date(d);a.lastIndex=0;if(f=a.exec(d))return f.shift(),e=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),
mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(f,function(a,c){c<b.length&&(e[b[c]]=+a)}),new Date(e.yyyy,e.MM-1,e.dd,e.HH,e.mm,e.ss||0,1E3*e.sss||0)}return NaN}}function ob(a,b,d,c){return function(f,e,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return x(a)&&!ja(a)?d(a)||void 0:a}tc(f,e,g,h);Xa(f,e,g,h,k,l);var s=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;
if(b.test(a))return a=d(a,q),s&&(a=Ub(a,s)),a});h.$formatters.push(function(a){if(a&&!ja(a))throw pb("datefmt",a);if(n(a))return(q=a)&&s&&(q=Ub(q,s,!0)),m("date")(a,c,s);q=null;return""});if(x(g.min)||g.ngMin){var u;h.$validators.min=function(a){return!n(a)||z(u)||d(a)>=u};g.$observe("min",function(a){u=r(a);h.$validate()})}if(x(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!n(a)||z(p)||d(a)<=p};g.$observe("max",function(a){p=r(a);h.$validate()})}}}function tc(a,b,d,c){(c.$$hasNativeValidators=
E(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Zd(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Ug.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!ba(b))throw pb("numfmt",b);b=b.toString()}return b})}function qb(a){x(a)&&!ba(a)&&(a=parseFloat(a));return ia(a)?void 0:a}function uc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>
a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function $d(a,b,d,c,f){if(x(c)){a=a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return f}function vc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var f=a[d],m=0;m<b.length;m++)if(f===b[m])continue a;c.push(f)}return c}function f(a){var b=[];return I(a)?(q(a,function(a){b=b.concat(f(a))}),b):D(a)?a.split(" "):E(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
link:function(e,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||V(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(e.$index&1)===b){var c=f(a||[]);if(!r)k(c);else if(!na(a,r)){var d=f(r);m(d,c)}}r=I(a)?a.map(function(a){return ka(a)}):ka(a)}
var r;h.$observe("class",function(b){n(e.$eval(h[a]))});"ngClass"!==a&&e.$watch("$index",function(a,c){var d=a&1;if(d!==(c&1)){var e=f(r);d===b?k(e):(d=l(e,-1),h.$removeClass(d))}});e.$watch(h[a],n,!0)}}}]}function Xd(a){function b(a,b){b&&!e[a]?(k.addClass(f,a),e[a]=!0):!b&&e[a]&&(k.removeClass(f,a),e[a]=!1)}function d(a,c){a=a?"-"+Hc(a,"-"):"";b(rb+a,!0===c);b(ae+a,!1===c)}var c=a.ctrl,f=a.$element,e={},g=a.set,h=a.unset,k=a.$animate;e[ae]=!(e[rb]=f.hasClass(rb));c.$setValidity=function(a,e,f){z(e)?
(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),be(c.$pending)&&(c.$pending=void 0));Ka(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(ce,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(ce,!1),c.$valid=be(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;
return!0}var Vg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Q=function(a){return D(a)?a.toLowerCase():a},wb=function(a){return D(a)?a.toUpperCase():a},Ia,F,za,va=[].slice,pg=[].splice,Wg=[].push,ma=Object.prototype.toString,Bc=Object.getPrototypeOf,xa=G("ng"),$=y.angular||(y.angular={}),Wb,sb=0;Ia=y.document.documentMode;var ia=Number.isNaN||function(a){return a!==a};w.$inject=[];$a.$inject=[];var I=Array.isArray,ne=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
Y=function(a){return D(a)?a.trim():a},Jd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},da=function(){if(!x(da.rules)){var a=y.document.querySelector("[ng-csp]")||y.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");da.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=da;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,
noInlineStyle:!1}}}return da.rules},ub=function(){if(x(ub.name_))return ub.name_;var a,b,d=Oa.length,c,f;for(b=0;b<d;++b)if(c=Oa[b],a=y.document.querySelector("["+c.replace(":","\\:")+"jq]")){f=a.getAttribute(c+"jq");break}return ub.name_=f},qe=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],te=function(a){var b=a.currentScript,b=b&&b.getAttribute("src");if(!b)return!0;var d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;
default:return!1}}(y.document),we=/[A-Z]/g,Ic=!1,La=3,Ae={full:"1.5.11",major:1,minor:5,dot:11,codeName:"princely-quest"};W.expando="ng339";var jb=W.cache={},bg=1;W._data=function(a){return this.cache[a[this.expando]]||{}};var Xf=/([:\-_]+(.))/g,Yf=/^moz([A-Z])/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},Yb=G("jqLite"),ag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Xb=/<|&#?\w+;/,Zf=/<([\w:-]+)/,$f=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,pa={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};pa.optgroup=pa.option;pa.tbody=pa.tfoot=pa.colgroup=pa.caption=pa.thead;pa.th=pa.td;var gg=y.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=W.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===y.document.readyState?y.setTimeout(b):
(this.on("DOMContentLoaded",b),W(y).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?F(this[a]):F(this[this.length+a])},length:0,push:Wg,sort:[].sort,splice:[].splice},Gb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Gb[Q(a)]=a});var $c={};q("input select option textarea button form details".split(" "),function(a){$c[a]=!0});var gd={ngMinlength:"minlength",ngMaxlength:"maxlength",
ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:$b,removeData:ib,hasData:function(a){for(var b in jb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)ib(a[b])}},function(a,b){W[b]=a});q({data:$b,inheritedData:Eb,scope:function(a){return F.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate")},controller:Xc,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,
b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=hb(b);if(x(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==La&&2!==c&&8!==c)if(c=Q(b),Gb[c])if(x(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||w).specified?c:void 0;else if(x(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(x(d))a[b]=d;else return a[b]},text:function(){function a(a,
d){if(z(d)){var c=a.nodeType;return 1===c||c===La?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},empty:Yc},function(a,b){W.prototype[b]=function(b,c){var f,e,g=this.length;if(a!==Yc&&z(2===a.length&&a!==Bb&&a!==Xc?b:c)){if(E(b)){for(f=0;f<g;f++)if(a===
$b)a(this[f],b);else for(e in b)a(this[f],e,b[e]);return this}f=a.$dv;g=z(f)?Math.min(g,1):g;for(e=0;e<g;e++){var h=a(this[e],b,c);f=f?f+h:h}return f}for(f=0;f<g;f++)a(this[f],b,c);return this}});q({removeData:ib,on:function(a,b,d,c){if(x(c))throw Yb("onargs");if(Sc(a)){c=zb(a,!0);var f=c.events,e=c.handle;e||(e=c.handle=dg(a,f));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=f[b];h||(h=f[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,e,!1));
h.push(d)};g--;)b=c[g],Ab[b]?(h(Ab[b],fg),h(b,void 0,!0)):h(b)}},off:Wc,one:function(a,b,d){a=F(a);a.on(b,function f(){a.off(b,d);a.off(b,f)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);q(new W(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===
d){b=new W(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new W(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Uc(a,F(b).eq(0).clone()[0])},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new W(b);for(var f=0,e=b.length;f<e;f++){var g=b[f];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var f=d;z(f)&&
(f=!Bb(a,b));(f?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Zb,triggerHandler:function(a,b,d){var c,f,e=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[e])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:e,target:a},b.type&&(c=R(c,b)),b=ka(g),f=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,f)})}},function(a,b){W.prototype[b]=function(b,c,f){for(var e,g=0,h=this.length;g<h;g++)z(e)?(e=a(this[g],b,c,f),x(e)&&(e=F(e))):Vc(e,a(this[g],b,c,f));return x(e)?e:this}});W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off;Sa.prototype={put:function(a,
b){this[Aa(a,this.nextUid)]=b},get:function(a){return this[Aa(a,this.nextUid)]},remove:function(a){var b=this[a=Aa(a,this.nextUid)];delete this[a];return b}};var Vf=[function(){this.$get=[function(){return Sa}]}],ig=/^([^(]+?)=>/,jg=/^[^(]*\(\s*([^)]*)\)/m,Xg=/,/,Yg=/^\s*(_?)(\S+?)\1\s*$/,hg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=G("$injector");fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw D(d)&&d||(d=a.name||kg(a)),Ba("strictdi",d);b=
ad(a);q(b[1].split(Xg),function(a){a.replace(Yg,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var de=G("$animate"),nf=function(){this.$get=w},of=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function f(a,b,c){var d=!1;b&&(b=D(b)?b.split(" "):I(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function e(){q(b,function(b){var c=a.get(b);if(c){var d=lg(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.remove(b)}});b.length=0}return{enabled:w,on:w,off:w,pin:w,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=f(k,h,!0),l=f(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(e);g=new d;g.complete();return g}}}]},lf=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw de("notcsel",d);var f=d+"-animation";b.$$registeredAnimations[d.substr(1)]=f;a.factory(f,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw de("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,e,g,h){e=e&&F(e);g=g&&F(g);e=e||g.parent();b(f,e,g);return a.push(f,"enter",Ca(h))},move:function(f,e,g,h){e=e&&F(e);g=g&&F(g);e=e||g.parent();b(f,e,g);return a.push(f,"move",Ca(h))},leave:function(b,c){return a.push(b,"leave",Ca(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ca(g);g.addClass=kb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ca(g);g.removeClass=kb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ca(h);h.addClass=kb(h.addClass,c);h.removeClass=kb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ca(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=kb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],qf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},pf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,f){function e(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?f(a,0,!1):b(a)};this._state=0}e.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};e.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};e.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:w,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return e}]},mf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,f){function e(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=f||{};g.$$prepared||(g=sa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:e,end:e}}}]},fa=G("$compile"),ec=new function(){};
Kc.$inject=["$provide","$$sanitizeUriProvider"];Hb.prototype.isFirstChange=function(){return this.previousValue===ec};var bd=/^((?:x|data)[:\-_])/i,id=G("$controller"),hd=/^(\S+)(\s+as\s+([\w$]+))?$/,wf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},jd="application/json",hc={"Content-Type":jd+";charset=utf-8"},rg=/^\[|^\{(?!\{)/,sg={"[":/]$/,"{":/}$/},qg=/^\)]\}',?\n/,Zg=G("$http"),nd=function(a){return function(){throw Zg("legacy",
a);}},Ha=$.$interpolateMinErr=G("$interpolate");Ha.throwNoconcat=function(a){throw Ha("noconcat",a);};Ha.interr=function(a,b){return Ha("interr",a,b.toString())};var Ef=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var e="angular.callbacks."+a,g=b(a);c[e]=d[a]=g;return e},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},
removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},$g=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,ug={http:80,https:443,ftp:21},lb=G("$location"),vg=/^\s*[\\/]{2,}/,ah={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=$g.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:sd("$$path",function(a){a=
null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a)||ba(a))a=a.toString(),this.$$search=Fc(a);else if(E(a))a=sa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw lb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:sd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
q([rd,kc,jc],function(a){a.prototype=Object.create(ah);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==jc||!this.$$html5)throw lb("nostate");this.$$state=z(b)?null:b;return this}});var ea=G("$parse"),ud=[].constructor,vd=(!1).constructor,wd=Function.constructor,xd=(0).constructor,yd={}.constructor,zd="".constructor,Ag=ud.prototype,Bg=vd.prototype,Kb=wd.prototype,Cg=xd.prototype,Ad=yd.prototype,Dg=zd.prototype,xg=Kb.call,yg=Kb.apply,zg=Kb.bind,Fg=Ad.valueOf,Qb=V();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),
function(a){Qb[a]=!0});var bh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},mc=function(a){this.options=a};mc.prototype={constructor:mc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,
text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],f=Qb[d];Qb[a]||c||f?(a=f?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===
typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},
isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=
x(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ea("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,
text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,f=!1;this.index<this.text.length;){var e=this.text.charAt(this.index),c=c+e;if(f)"u"===e?(f=this.text.substring(this.index+
1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=bh[e]||e,f=!1;else if("\\"===e)f=!0;else{if(e===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=e}this.index++}this.throwError("Unterminated quote",b)}};var t=function(a,b){this.lexer=a;this.options=b};t.Program="Program";t.ExpressionStatement="ExpressionStatement";t.AssignmentExpression="AssignmentExpression";t.ConditionalExpression=
"ConditionalExpression";t.LogicalExpression="LogicalExpression";t.BinaryExpression="BinaryExpression";t.UnaryExpression="UnaryExpression";t.CallExpression="CallExpression";t.MemberExpression="MemberExpression";t.Identifier="Identifier";t.Literal="Literal";t.ArrayExpression="ArrayExpression";t.Property="Property";t.ObjectExpression="ObjectExpression";t.ThisExpression="ThisExpression";t.LocalsExpression="LocalsExpression";t.NGValueParameter="NGValueParameter";t.prototype={ast:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:t.Program,body:a}},expressionStatement:function(){return{type:t.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},
expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Dd(a))throw ea("lval");a={type:t.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:t.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:t.LogicalExpression,
operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:t.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:t.BinaryExpression,operator:b.text,
left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:t.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},
primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=sa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:t.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:t.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:t.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:t.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:t.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());
return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:t.Identifier,name:a.text}},constant:function(){return{type:t.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");
return{type:t.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:t.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),
b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:t.ObjectExpression,properties:a}},throwError:function(a,b){throw ea("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ea("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ea("ueoe",
this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,f){if(this.tokens.length>a){a=this.tokens[a];var e=a.text;if(e===b||e===d||e===c||e===f||!(b||d||c||f))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:t.ThisExpression},$locals:{type:t.LocalsExpression}}};Gd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},
expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};X(c,d.$filter);var f="",e;this.stage="assign";if(e=Ed(c))this.state.computing="assign",f=this.nextId(),this.recurse(e,f),this.return_(f),f="fn.assign="+this.generateFunction("assign","s,v,l");e=Cd(c.body);d.stage="inputs";q(e,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing=
"fn";this.stage="main";this.recurse(c);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",f))(this.$filter,Ua,Ea,td,wg,Jb,Eg,Bd,a);this.state=this.stage=void 0;f.literal=Fd(c);f.constant=c.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=
[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+
";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,f,e){var g,h,k=this,l,m,n;c=c||w;if(!e&&x(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,f,!0));else switch(a.type){case t.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case t.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;
case t.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case t.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case t.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);
k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case t.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case t.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||
"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Lb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case t.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){f&&1!==f&&k.addEnsureSafeAssignContext(g);if(a.computed)h=
k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),f&&1!==f&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Lb(a.property.name))m=k.ensureSafeObject(m);
k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!f);break;case t.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});
g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case t.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,
g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case t.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case t.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===t.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,
h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===t.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case t.ThisExpression:this.assign(b,"s");c("s");break;case t.LocalsExpression:this.assign(b,"l");c("l");break;case t.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||
(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),
";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},
getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,f,e){var g=this;return function(){g.recurse(a,b,d,c,f,e)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(D(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+
"'";if(ba(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ea("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Hd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;X(c,d.$filter);var f,e;if(f=Ed(c))e=this.recurse(f);f=Cd(c.body);
var g;f&&(g=[],q(f,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});f=0===c.body.length?w:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};e&&(f.assign=function(a,b,c){return e(a,c,b)});g&&(f.inputs=g);f.literal=Fd(c);f.constant=c.constant;return f},recurse:function(a,b,d){var c,f,e=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case t.Literal:return this.value(a.value,
b);case t.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,b);case t.BinaryExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case t.LogicalExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case t.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case t.Identifier:return Ua(a.name,e.expression),e.identifier(a.name,
e.expensiveChecks||Lb(a.name),b,d,e.expression);case t.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,e.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(c,f,b,d,e.expression):this.nonComputedMember(c,f,e.expensiveChecks,b,d,e.expression);case t.CallExpression:return g=[],q(a.arguments,function(a){g.push(e.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?
function(a,c,d,e){for(var n=[],r=0;r<g.length;++r)n.push(g[r](a,c,d,e));a=f.apply(void 0,n,e);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=f(a,c,d,m),r;if(null!=n.value){Ea(n.context,e.expression);td(n.value,e.expression);r=[];for(var s=0;s<g.length;++s)r.push(Ea(g[s](a,c,d,m),e.expression));r=Ea(n.value.apply(n.context,r),e.expression)}return b?{value:r}:r};case t.AssignmentExpression:return c=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,g,m){var n=c(a,
d,g,m);a=f(a,d,g,m);Ea(n.value,e.expression);Jb(n.context);n.context[n.name]=a;return b?{value:a}:a};case t.ArrayExpression:return g=[],q(a.elements,function(a){g.push(e.recurse(a))}),function(a,c,d,e){for(var f=[],r=0;r<g.length;++r)f.push(g[r](a,c,d,e));return b?{value:f}:f};case t.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:e.recurse(a.key),computed:!0,value:e.recurse(a.value)}):g.push({key:a.key.type===t.Identifier?a.key.name:""+a.key.value,computed:!1,value:e.recurse(a.value)})}),
function(a,c,d,e){for(var f={},r=0;r<g.length;++r)g[r].computed?f[g[r].key(a,c,d,e)]=g[r].value(a,c,d,e):f[g[r].key]=g[r].value(a,c,d,e);return b?{value:f}:f};case t.ThisExpression:return function(a){return b?{value:a}:a};case t.LocalsExpression:return function(a,c){return b?{value:c}:c};case t.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=x(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,f,
e){d=a(d,c,f,e);d=x(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,f,e){d=!a(d,c,f,e);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=Bd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=(x(h)?h:0)-(x(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)*b(c,f,e,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
f,e,g){c=a(c,f,e,g)/b(c,f,e,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)%b(c,f,e,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)===b(c,f,e,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!==b(c,f,e,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)==b(c,f,e,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
f,e,g){c=a(c,f,e,g)!=b(c,f,e,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<b(c,f,e,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>b(c,f,e,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<=b(c,f,e,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>=b(c,f,e,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,f,e,g){c=
a(c,f,e,g)&&b(c,f,e,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)||b(c,f,e,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h)?b(f,e,g,h):d(f,e,g,h);return c?{value:f}:f}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,f){return function(e,g,h,k){e=g&&a in g?g:e;c&&1!==c&&e&&!e[a]&&(e[a]={});g=e?e[a]:void 0;b&&Ea(g,f);return d?{context:e,name:a,
value:g}:g}},computedMember:function(a,b,d,c,f){return function(e,g,h,k){var l=a(e,g,h,k),m,n;null!=l&&(m=b(e,g,h,k),m+="",Ua(m,f),c&&1!==c&&(Jb(l),l&&!l[m]&&(l[m]={})),n=l[m],Ea(n,f));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,f,e){return function(g,h,k,l){g=a(g,h,k,l);f&&1!==f&&(Jb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Lb(b))&&Ea(h,e);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,f,e){return e?e[b]:a(d,c,f)}}};var nc=
function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new t(a,d);this.astCompiler=d.csp?new Hd(this.ast,b):new Gd(this.ast,b)};nc.prototype={constructor:nc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var Fa=G("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Hg=G("$compile"),aa=y.document.createElement("a"),Ld=ta(y.location.href);Md.$inject=["$document"];Rc.$inject=["$provide"];var Td=22,Sd=".",pc="0";Nd.$inject=["$locale"];
Pd.$inject=["$locale"];var Sg={yyyy:U("FullYear",4,0,!1,!0),yy:U("FullYear",2,0,!0,!0),y:U("FullYear",1,0,!1,!0),MMMM:nb("Month"),MMM:nb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),LLLL:nb("Month",!1,!0),dd:U("Date",2),d:U("Date",1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:nb("Day"),EEE:nb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,
b,d){a=-1*d;return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))},ww:Vd(2),w:Vd(1),G:qc,GG:qc,GGG:qc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Rg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Qg=/^-?\d+$/;Od.$inject=["$locale"];var Lg=ha(Q),Mg=ha(wb);Qd.$inject=["$parse"];var Ce=ha({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var f=
"[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(f)||a.preventDefault()})}}}}),xb={};q(Gb,function(a,b){function d(a,d,f){a.$watch(f[c],function(a){f.$set(b,!!a)})}if("multiple"!==a){var c=Da("ng-"+b),f=d;"checked"===a&&(f=function(a,b,f){f.ngModel!==f[c]&&d(a,b,f)});xb[c]=function(){return{restrict:"A",priority:100,link:f}}}});q(gd,function(a,b){xb[b]=function(){return{priority:100,link:function(a,c,f){if("ngPattern"===b&&"/"===f.ngPattern.charAt(0)&&
(c=f.ngPattern.match(Vg))){f.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(f[b],function(a){f.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Da("ng-"+a);xb[b]=function(){return{priority:99,link:function(d,c,f){var e=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",e=null);f.$observe(b,function(b){b?(f.$set(g,b),Ia&&e&&c.prop(e,f[g])):"href"===a&&f.$set(g,null)})}}}});var Nb={$addControl:w,$$renameControl:function(a,
b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Wd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var ee=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||w}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Wd,compile:function(d,e){d.addClass(Wa).addClass(rb);var g=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var r=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",r,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",r,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):w;g&&(s(a,n),e.$observe(g,function(b){n.$name!==b&&(s(a,void 0),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);s(a,void 0);R(n,Nb)})}}}}}]},De=
ee(),Pe=ee(!0),Tg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,ch=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,dh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Ug=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,fe=/^(\d{4,})-(\d{2})-(\d{2})$/,ge=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
wc=/^(\d{4,})-W(\d\d)$/,he=/^(\d{4,})-(\d\d)$/,ie=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Yd=V();q(["date","datetime-local","month","time","week"],function(a){Yd[a]=!0});var je={text:function(a,b,d,c,f,e){Xa(a,b,d,c,f,e);sc(c)},date:ob("date",fe,Pb(fe,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ge,Pb(ge,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",ie,Pb(ie,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",wc,function(a,b){if(ja(a))return a;
if(D(a)){wc.lastIndex=0;var d=wc.exec(a);if(d){var c=+d[1],f=+d[2],e=d=0,g=0,h=0,k=Ud(c),f=7*(f-1);b&&(d=b.getHours(),e=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+f,d,e,g,h)}}return NaN},"yyyy-Www"),month:ob("month",he,Pb(he,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,f,e){tc(a,b,d,c);Xa(a,b,d,c,f,e);Zd(c);var g,h;if(x(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||z(g)||a>=g},d.$observe("min",function(a){g=qb(a);c.$validate()});
if(x(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||z(h)||a<=h},d.$observe("max",function(a){h=qb(a);c.$validate()})},url:function(a,b,d,c,f,e){Xa(a,b,d,c,f,e);sc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||ch.test(d)}},email:function(a,b,d,c,f,e){Xa(a,b,d,c,f,e);sc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||dh.test(d)}},radio:function(a,b,d,c){z(d.name)&&b.attr("name",++sb);b.on("click",
function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,f,e){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=qb(a);ia(c.$modelValue)||(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){r=qb(a);ia(c.$modelValue)||(m?(a=b.val(),r<a&&(b.val(r),a=r<n?n:r),c.$setViewValue(a)):c.$validate())}function l(a){s=qb(a);ia(c.$modelValue)||(m&&c.$viewValue!==
b.val()?c.$setViewValue(b.val()):c.$validate())}tc(a,b,d,c);Zd(c);Xa(a,b,d,c,f,e);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,r=m?100:void 0,s=m?1:void 0,q=b[0].validity;a=x(d.min);f=x(d.max);e=x(d.step);var u=c.$render;c.$render=m&&x(q.rangeUnderflow)&&x(q.rangeOverflow)?function(){u();c.$setViewValue(b.val())}:u;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b>=n},g("min",h));f&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||
z(r)||b<=r},g("max",k));e&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){var d;if(!(d=c.$isEmpty(b)||z(s))){d=n||0;var e=s,f=Number(b);if((f|0)!==f||(d|0)!==d||(e|0)!==e){var g=Math.max(uc(f),uc(d),uc(e)),g=Math.pow(10,g),f=f*g;d*=g;e*=g}d=0===(f-d)%e}return d},g("step",l))},checkbox:function(a,b,d,c,f,e,g,h){var k=$d(h,a,"ngTrueValue",d.ngTrueValue,!0),l=$d(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=
c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:w,button:w,submit:w,reset:w,file:w},Lc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,e,g,h){if(h[0]){var k=Q(g.type);"range"!==k||g.hasOwnProperty("ngInputRange")||(k="text");(je[k]||je.text)(f,e,g,h[0],b,a,d,c)}}}}}],eh=/^(true|false|\d+)$/,gf=function(){return{restrict:"A",
priority:100,compile:function(a,b){return eh.test(b.ngValue)?function(a,b,f){f.$set("value",a.$eval(f.ngValue))}:function(a,b,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},He=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,f){a.$$addBindingInfo(c,f.ngBind);c=c[0];b.$watch(f.ngBind,function(a){c.textContent=z(a)?"":a})}}}}],Je=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,
d,e){c=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];e.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Ie=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,f){var e=b(f.ngBindHtml),g=b(f.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,f){d.$$addBindingInfo(c,f.ngBindHtml);b.$watch(g,function(){var d=e(b);c.html(a.getTrustedHtml(d)||"")})}}}}],ff=ha({restrict:"A",require:"ngModel",
link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ke=vc("",!0),Me=vc("Odd",0),Le=vc("Even",1),Ne=Va({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Oe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Qc={},fh={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Da("ng-"+a);
Qc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(f,e){var g=d(e[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};fh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Re=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,f,e,g){var h,k,l;d.$watch(f.ngIf,function(d){d?k||g(function(d,e){k=e;d[d.length++]=b.$$createComment("end ngIf",
f.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=vb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Se=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,f){var e=f.ngInclude||f.src,g=f.onload||"",h=f.autoscroll;return function(c,f,m,n,r){var q=0,t,u,p,z=function(){u&&(u.remove(),u=null);t&&(t.$destroy(),t=null);
p&&(d.leave(p).done(function(a){!1!==a&&(u=null)}),u=p,p=null)};c.$watch(e,function(e){var m=function(a){!1===a||!x(h)||h&&!c.$eval(h)||b()},u=++q;e?(a(e,!0).then(function(a){if(!c.$$destroyed&&u===q){var b=c.$new();n.template=a;a=r(b,function(a){z();d.enter(a,null,f).done(m)});t=b;p=a;t.$emit("$includeContentLoaded",e);c.$eval(g)}},function(){c.$$destroyed||u!==q||(z(),c.$emit("$includeContentError",e))}),c.$emit("$includeContentRequested",e)):(z(),n.template=null)})}}}}],jf=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,f){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Tc(f.template,y.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(b))}}}],Te=Va({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),ef=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var f=b.attr(d.$attr.ngList)||", ",e="false"!==d.ngTrim,g=e?Y(f):f;c.$parsers.push(function(a){if(!z(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(e?Y(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(f)});c.$isEmpty=function(a){return!a||!a.length}}}},rb="ng-valid",ae="ng-invalid",Wa="ng-pristine",Ob="ng-dirty",ce="ng-pending",pb=G("ngModel"),gh=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,f,e,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Nb;var m=f(d.ngModel),n=m.assign,r=m,s=n,t=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=f(d.ngModel+"()"),e=f(d.ngModel+"($$$p)");r=function(a){var c=m(a);C(c)&&(c=b(a));
return c};s=function(a,b){C(m(a))?e(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw pb("nonassign",d.ngModel,ya(c));};this.$render=w;this.$isEmpty=function(a){return z(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){p.$isEmpty(a)?(e.removeClass(c,"ng-not-empty"),e.addClass(c,"ng-empty")):(e.removeClass(c,"ng-empty"),e.addClass(c,"ng-not-empty"))};var y=0;Xd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:e});this.$setPristine=function(){p.$dirty=
!1;p.$pristine=!0;e.removeClass(c,Ob);e.addClass(c,Wa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;e.removeClass(c,Wa);e.addClass(c,Ob);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;e.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;e.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!ia(p.$modelValue)){var a=
p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:void 0,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!C(h.then))throw pb("nopromise",
h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},w):g(!0)}function f(a,b){h===y&&p.$setValidity(a,b)}function g(a){h===y&&c(a)}y++;var h=y;(function(){var a=p.$$parserName||"parse";if(z(u))f(a,null);else return u||(q(p.$validators,function(a,b){f(b,null)}),q(p.$asyncValidators,function(a,b){f(b,null)})),f(a,u),u;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(t);if(p.$$lastCommittedViewValue!==
a||""===a&&p.$$hasNativeValidators)p.$$updateEmptyClasses(a),p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(u=z(b)?void 0:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),z(b)){u=!1;break}ia(p.$modelValue)&&(p.$modelValue=r(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,
p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:void 0,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);q(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&x(d.debounce)&&(d=d.debounce,ba(d)?c=d:ba(d[b])?c=d[b]:ba(d["default"])&&(c=d["default"]));
g.cancel(t);c?t=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=r(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;u=void 0;for(var c=p.$formatters,d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$$updateEmptyClasses(e),p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(p.$modelValue,p.$viewValue,w))}return b})}],df=["$rootScope",function(a){return{restrict:"A",
require:["ngModel","^?form","^?ngModelOptions"],controller:gh,priority:1,compile:function(b){b.addClass(Wa).addClass("ng-untouched").addClass(rb);return{pre:function(a,b,f,e){var g=e[0];b=e[1]||g.$$parentForm;g.$$setOptions(e[2]&&e[2].$options);b.$addControl(g);f.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,f,e){var g=e[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,
function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],hh=/(\s+|^)default(\s+|$)/,hf=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=sa(a.$eval(b.ngModelOptions));x(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=Y(this.$options.updateOn.replace(hh,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=
!0}]}},Ue=Va({terminal:!0,priority:1E3}),ih=G("ngOptions"),jh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,bf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&la(a))b=a;else{b=
[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(jh);if(!n)throw ih("iexp",a,ya(b));var r=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var t=n[9];b=d(n[2]?n[1]:r);var u=a&&d(a)||b,p=t&&d(t),x=t?function(a,b){return p(c,b)}:function(a){return Aa(a)},A=function(a,b){return x(a,C(a,b))},v=d(n[2]||n[1]),z=d(n[3]||""),L=d(n[4]||""),w=d(n[8]),y={},C=q?function(a,b){y[q]=b;y[r]=a;return y}:function(a){y[r]=a;return y};return{trackBy:t,getTrackByValue:A,getWatchables:d(w,
function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=C(l,h),l=x(l,h);b.push(l);if(n[2]||n[1])l=v(c,h),b.push(l);n[4]&&(h=L(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=w(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],r=C(d[p],p),q=u(c,r),p=x(q,r),s=v(c,r),y=z(c,r),r=L(c,r),q=new e(p,q,s,y,r);a.push(q);b[p]=q}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[A(a)]},getViewValueFromOption:function(a){return t?
sa(a.viewValue):a.viewValue}}}}}var f=y.document.createElement("option"),e=y.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=w},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function n(){var a=w&&r.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];x(c.group)?Fb(c.element.parentNode):
Fb(c.element)}w=C.getOptions();var d={};A&&h.prepend(u);w.items.forEach(function(a){var b;if(x(a.group)){b=d[a.group];b||(b=e.cloneNode(!1),D.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=f.cloneNode(!1)}else b=D,c=f.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(D);s.$render();s.$isEmpty(a)||(b=r.readValue(),(C.trackBy||t?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],t=k.multiple,u;l=0;for(var p=h.children(),z=p.length;l<z;l++)if(""===p[l].value){u=
p.eq(l);break}var A=!!u,v=!1,y=F(f.cloneNode(!1));y.val("?");var w,C=c(k.ngOptions,h,d),D=b[0].createDocumentFragment(),E=function(){A?v&&u.removeAttr("selected"):u.remove()};t?(s.$isEmpty=function(a){return!a||0===a.length},r.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=w.getOptionFromViewValue(a))a.element.selected=!0})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=w.selectValueMap[a])&&!a.disabled&&b.push(w.getViewValueFromOption(a))});
return b},C.trackBy&&d.$watchCollection(function(){if(I(s.$viewValue))return s.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=function(a){var b=w.selectValueMap[h.val()],c=w.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(y.remove(),E(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):null===a||A?(y.remove(),A||h.prepend(u),h.val(""),v&&(u.prop("selected",
!0),u.attr("selected",!0))):(E(),h.prepend(y),h.val("?"),y.prop("selected",!0),y.attr("selected",!0))},r.readValue=function(){var a=w.selectValueMap[h.val()];return a&&!a.disabled?(E(),y.remove(),w.getViewValueFromOption(a)):null},C.trackBy&&d.$watch(function(){return C.getTrackByValue(s.$viewValue)},function(){s.$render()}));A?(u.remove(),a(u)(d),8===u[0].nodeType?(v=!1,r.registerOption=function(a,b){""===b.val()&&(v=!0,u=b,u.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){u=void 0;
v=!1}))}):(u.removeClass("ng-scope"),v=!0)):u=F(f.cloneNode(!1));h.empty();n();d.$watchCollection(C.getWatchables,n)}}}}],Ve=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(e,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,r=e.$eval(m)||{},s={},t=b.startSymbol(),u=b.endSymbol(),p=t+l+"-"+n+u,x=$.noop,A;q(h,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),r[c]=g.attr(h.$attr[b]))});q(r,
function(a,d){s[d]=b(a.replace(c,p))});e.$watch(l,function(b){var c=parseFloat(b),f=ia(c);f||c in r||(c=a.pluralCat(c-n));c===A||f&&ia(A)||(x(),f=s[c],z(f)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),x=w,k()):x=e.$watch(f,k),A=c)})}}}],We=["$parse","$animate","$compile",function(a,b,d){var c=G("ngRepeat"),f=function(a,b,c,d,f,m,n){a[c]=d;f&&(a[f]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,
transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],r=l[3],s=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],u=l[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw c("badident",
r);var p,x,A,v,w={$id:Aa};s?p=a(s):(A=function(a,b){return Aa(b)},v=function(a){return a});return function(a,d,e,g,l){p&&(x=function(b,c,d){u&&(w[u]=b);w[t]=c;w.$index=d;return p(a,w)});var m=V();a.$watchCollection(n,function(e){var g,n,p=d[0],s,w=V(),z,y,C,D,F,E,G;r&&(a[r]=e);if(la(e))F=e,n=x||A;else for(G in n=x||v,F=[],e)ua.call(e,G)&&"$"!==G.charAt(0)&&F.push(G);z=F.length;G=Array(z);for(g=0;g<z;g++)if(y=e===F?g:F[g],C=e[y],D=n(y,C,g),m[D])E=m[D],delete m[D],w[D]=E,G[g]=E;else{if(w[D])throw q(G,
function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,D,C);G[g]={id:D,scope:void 0,clone:void 0};w[D]=!0}for(s in m){E=m[s];D=vb(E.clone);b.leave(D);if(D[0].parentNode)for(g=0,n=D.length;g<n;g++)D[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<z;g++)if(y=e===F?g:F[g],C=e[y],E=G[g],E.scope){s=p;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);E.clone[0]!==s&&b.move(vb(E.clone),null,p);p=E.clone[E.clone.length-1];f(E.scope,g,t,C,u,y,z)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,
null,p);p=d;E.clone=a;w[E.id]=E;f(E.scope,g,t,C,u,y,z)});m=w})}}}}],Xe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Qe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ye=Va(function(a,b,d){a.$watch(d.ngStyle,function(a,
d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ze=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,f,e){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(f.ngSwitch||f.on,function(c){for(var d,f;k.length;)a.cancel(k.pop());d=0;for(f=l.length;d<f;++d){var t=vb(h[d].clone);l[d].$destroy();(k[d]=a.leave(t)).done(m(k,d))}h.length=0;l.length=0;(g=e.cases["!"+c]||e.cases["?"])&&
q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],$e=Va({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:f,element:b})})}}),af=Va({transclude:"element",
priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:f,element:b})}}),kh=G("ngTransclude"),cf=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,e,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw kh("orphan",ya(b));e.ngTransclude===e.$attr.ngTransclude&&(e.ngTransclude="");e=e.ngTransclude||e.ngTranscludeSlot;h(function(a,c){a.length?
b.append(a):(k(),c.$destroy())},null,e);e&&!h.isSlotFilled(e)&&k()}}}}],Ee=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],lh={$setViewValue:w,$render:w},mh=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=lh;d.unknownOption=F(y.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Aa(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",
function(){d.renderUnknownOption=w});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;
c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){x(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,f){c.$set("value",a);f!==a&&d.removeOption(f);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",
function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],Fe=function(){return{restrict:"E",require:["select","?ngModel"],controller:mh,priority:1,link:{pre:function(a,b,d,c){var f=c[1];if(f){var e=c[0];e.ngModelCtrl=f;b.on("change",function(){a.$apply(function(){f.$setViewValue(e.readValue())})});if(d.multiple){e.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};e.writeValue=function(a){var c=new Sa(a);q(b.find("option"),function(a){a.selected=
x(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==f.$viewValue||na(g,f.$viewValue)||(g=ka(f.$viewValue),f.$render());h=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var f=c[1];if(f){var e=c[0];f.$render=function(){e.writeValue(f.$viewValue)}}}}}},Ge=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,f;x(d.ngValue)?c=!0:x(d.value)?c=a(d.value,!0):(f=a(b.text(),!0))||d.$set("value",b.text());return function(a,b,d){var k=
b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,f)}}}}],Nc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Mc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f,e=d.ngPattern||d.pattern;d.$observe("pattern",function(a){D(a)&&0<a.length&&(a=
new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",e,a,ya(b));f=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||z(f)||f.test(b)}}}}},Pc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=-1;d.$observe("maxlength",function(a){a=Z(a);f=ia(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>f||c.$isEmpty(b)||b.length<=f}}}}},Oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,
d,c){if(c){var f=0;d.$observe("minlength",function(a){f=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=f}}}}};y.angular.bootstrap?y.console&&console.log("WARNING: Tried to load angular more than once."):(xe(),ze($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var f=a|0,e=c;void 0===e&&(e=Math.min(b(a),3));Math.pow(10,e);return 1==f&&0==
e?"one":"other"}})}]),F(y.document).ready(function(){se(y.document,Gc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

!function(t){"use strict";"object"==typeof exports?module.exports=t("undefined"!=typeof angular?angular:require("angular"),"undefined"!=typeof Chart?Chart:require("chart.js")):"function"==typeof define&&define.amd?define(["angular","chart"],t):t(angular,Chart)}(function(t,e){"use strict";function n(){var n={},r={Chart:e,getOptions:function(e){var r=e&&n[e]||{};return t.extend({},n,r)}};this.setOptions=function(e,r){return r?void(n[e]=t.extend(n[e]||{},r)):(r=e,void(n=t.extend(n,r)))},this.$get=function(){return r}}function r(n,r){function o(t,e){return t&&e&&t.length&&e.length?Array.isArray(t[0])?t.length===e.length&&t.every(function(t,n){return t.length===e[n].length}):e.reduce(i,0)>0?t.length===e.length:!1:!1}function i(t,e){return t+e}function c(e,n,r,a){var o=null;return function(i){var c=n.getPointsAtEvent||n.getBarsAtEvent||n.getSegmentsAtEvent;if(c){var l=c.call(n,i);a!==!1&&t.equals(o,l)!==!1||(o=l,e[r](l,i),e.$apply())}}}function l(r,a){for(var o=!1,i=t.copy(a.colours||n.getOptions(r).colours||e.defaults.global.colours);i.length<a.data.length;)i.push(a.getColour()),o=!0;return o&&(a.colours=i),i.map(u)}function u(t){return"object"==typeof t&&null!==t?t:"string"==typeof t&&"#"===t[0]?f(g(t.substr(1))):s()}function s(){var t=[h(0,255),h(0,255),h(0,255)];return f(t)}function f(t){return{fillColor:d(t,.2),strokeColor:d(t,1),pointColor:d(t,1),pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:d(t,.8)}}function h(t,e){return Math.floor(Math.random()*(e-t+1))+t}function d(t,e){return a?"rgb("+t.join(",")+")":"rgba("+t.concat(e).join(",")+")"}function g(t){var e=parseInt(t,16),n=e>>16&255,r=e>>8&255,a=255&e;return[n,r,a]}function p(e,n,r,a){return{labels:e,datasets:n.map(function(e,n){return t.extend({},a[n],{label:r[n],data:e})})}}function v(e,n,r){return e.map(function(e,a){return t.extend({},r[a],{label:e,value:n[a],color:r[a].strokeColor,highlight:r[a].pointHighlightStroke})})}function y(t,e){var n=t.parent(),r=n.find("chart-legend"),a="<chart-legend>"+e.generateLegend()+"</chart-legend>";r.length?r.replaceWith(a):n.append(a)}function C(t,e,n,r){Array.isArray(n.data[0])?t.datasets.forEach(function(t,n){(t.points||t.bars).forEach(function(t,r){t.value=e[n][r]})}):t.segments.forEach(function(t,n){t.value=e[n]}),t.update(),n.$emit("update",t),n.legend&&"false"!==n.legend&&y(r,t)}function b(t){return!t||Array.isArray(t)&&!t.length||"object"==typeof t&&!Object.keys(t).length}function m(r,a){var o=t.extend({},e.defaults.global,n.getOptions(r),a.options);return o.responsive}function w(t,e){t&&(t.destroy(),e.$emit("destroy",t))}return function(e){return{restrict:"CA",scope:{data:"=?",labels:"=?",options:"=?",series:"=?",colours:"=?",getColour:"=?",chartType:"=",legend:"@",click:"=?",hover:"=?",chartData:"=?",chartLabels:"=?",chartOptions:"=?",chartSeries:"=?",chartColours:"=?",chartLegend:"@",chartClick:"=?",chartHover:"=?"},link:function(i,u){function f(t,e){i.$watch(t,function(t){"undefined"!=typeof t&&(i[e]=t)})}function h(n,r){if(!b(n)&&!t.equals(n,r)){var a=e||i.chartType;a&&d(a)}}function d(e){if(m(e,i)&&0===u[0].clientHeight&&0===k.clientHeight)return r(function(){d(e)},50,!1);if(i.data&&i.data.length){i.getColour="function"==typeof i.getColour?i.getColour:s;var a=l(e,i),o=u[0],f=o.getContext("2d"),h=Array.isArray(i.data[0])?p(i.labels,i.data,i.series||[],a):v(i.labels,i.data,a),g=t.extend({},n.getOptions(e),i.options);w(A,i),A=new n.Chart(f)[e](h,g),i.$emit("create",A),o.onclick=i.click?c(i,A,"click",!1):t.noop,o.onmousemove=i.hover?c(i,A,"hover",!0):t.noop,i.legend&&"false"!==i.legend&&y(u,A)}}function g(t){if("undefined"!=typeof console&&"test"!==n.getOptions().env){var e="function"==typeof console.warn?console.warn:console.log;i[t]&&e.call(console,'"%s" is deprecated and will be removed in a future version. Please use "chart-%s" instead.',t,t)}}var A,k=document.createElement("div");k.className="chart-container",u.replaceWith(k),k.appendChild(u[0]),a&&window.G_vmlCanvasManager.initElement(u[0]),["data","labels","options","series","colours","legend","click","hover"].forEach(g),f("chartData","data"),f("chartLabels","labels"),f("chartOptions","options"),f("chartSeries","series"),f("chartColours","colours"),f("chartLegend","legend"),f("chartClick","click"),f("chartHover","hover"),i.$watch("data",function(t,n){if(!t||!t.length||Array.isArray(t[0])&&!t[0].length)return void w(A,i);var r=e||i.chartType;if(r)return A&&o(t,n)?C(A,t,i,u):void d(r)},!0),i.$watch("series",h,!0),i.$watch("labels",h,!0),i.$watch("options",h,!0),i.$watch("colours",h,!0),i.$watch("chartType",function(e,n){b(e)||t.equals(e,n)||d(e)}),i.$on("$destroy",function(){w(A,i)})}}}}e.defaults.global.responsive=!0,e.defaults.global.multiTooltipTemplate="<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>",e.defaults.global.colours=["#97BBCD","#DCDCDC","#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360"];var a="object"==typeof window.G_vmlCanvasManager&&null!==window.G_vmlCanvasManager&&"function"==typeof window.G_vmlCanvasManager.initElement;return a&&(e.defaults.global.animation=!1),t.module("chart.js",[]).provider("ChartJs",n).factory("ChartJsFactory",["ChartJs","$timeout",r]).directive("chartBase",["ChartJsFactory",function(t){return new t}]).directive("chartLine",["ChartJsFactory",function(t){return new t("Line")}]).directive("chartBar",["ChartJsFactory",function(t){return new t("Bar")}]).directive("chartRadar",["ChartJsFactory",function(t){return new t("Radar")}]).directive("chartDoughnut",["ChartJsFactory",function(t){return new t("Doughnut")}]).directive("chartPie",["ChartJsFactory",function(t){return new t("Pie")}]).directive("chartPolarArea",["ChartJsFactory",function(t){return new t("PolarArea")}])});
//# sourceMappingURL=angular-chart.min.js.map

/*! =======================================================
                      VERSION  6.1.8              
========================================================= */
"use strict";function _typeof(a){return a&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a}/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers:
 *		Kyle Kemp
 *			- Twitter: @seiyria
 *			- Github:  seiyria
 *		Rohit Kalkur
 *			- Twitter: @Rovolutionary
 *			- Github:  rovolution
 *
 * =========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(a){if("function"==typeof define&&define.amd)define(["jquery"],a);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var b;try{b=require("jquery")}catch(c){b=null}module.exports=a(b)}else window&&(window.Slider=a(window.jQuery))}(function(a){var b;return function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return!m||m.length>1?m:m[0]}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function c(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var f=Object.keys(this.defaultOptions),g=0;g<f.length;g++){var h=f[g],i=c[h];i="undefined"!=typeof i?i:d(this.element,h),i=null!==i?i:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=i}"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.tooltip_position="right";var j,k,l,m,n,o=this.element.style.width,p=!1,q=this.element.parentNode;if(this.sliderElem)p=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var r=document.createElement("div");r.className="slider-track",k=document.createElement("div"),k.className="slider-track-low",j=document.createElement("div"),j.className="slider-selection",l=document.createElement("div"),l.className="slider-track-high",m=document.createElement("div"),m.className="slider-handle min-slider-handle",m.setAttribute("role","slider"),m.setAttribute("aria-valuemin",this.options.min),m.setAttribute("aria-valuemax",this.options.max),n=document.createElement("div"),n.className="slider-handle max-slider-handle",n.setAttribute("role","slider"),n.setAttribute("aria-valuemin",this.options.min),n.setAttribute("aria-valuemax",this.options.max),r.appendChild(k),r.appendChild(j),r.appendChild(l);var s=Array.isArray(this.options.labelledby);if(s&&this.options.labelledby[0]&&m.setAttribute("aria-labelledby",this.options.labelledby[0]),s&&this.options.labelledby[1]&&n.setAttribute("aria-labelledby",this.options.labelledby[1]),!s&&this.options.labelledby&&(m.setAttribute("aria-labelledby",this.options.labelledby),n.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(g=0;g<this.options.ticks.length;g++){var t=document.createElement("div");t.className="slider-tick",this.ticks.push(t),r.appendChild(t)}j.className+=" tick-slider-selection"}if(r.appendChild(m),r.appendChild(n),this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",g=0;g<this.options.ticks_labels.length;g++){var u=document.createElement("div"),v=0===this.options.ticks_positions.length,w=this.options.reversed&&v?this.options.ticks_labels.length-(g+1):g;u.className="slider-tick-label",u.innerHTML=this.options.ticks_labels[w],this.tickLabels.push(u),this.tickLabelContainer.appendChild(u)}var x=function(a){var b=document.createElement("div");b.className="tooltip-arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},y=document.createElement("div");y.className="tooltip tooltip-main",y.setAttribute("role","presentation"),x(y);var z=document.createElement("div");z.className="tooltip tooltip-min",z.setAttribute("role","presentation"),x(z);var A=document.createElement("div");A.className="tooltip tooltip-max",A.setAttribute("role","presentation"),x(A),this.sliderElem.appendChild(r),this.sliderElem.appendChild(y),this.sliderElem.appendChild(z),this.sliderElem.appendChild(A),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),q.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),e[this.options.scale]&&(this.options.scale=e[this.options.scale]),p===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top"),this._removeProperty(a,"margin-left"),this._removeProperty(a,"margin-top"),this._removeClass(a,"right"),this._removeClass(a,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=o,this.options.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=k||this.trackLow,this.trackSelection=j||this.trackSelection,this.trackHigh=l||this.trackHigh,"none"===this.options.selection&&(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")),this.handle1=m||this.handle1,this.handle2=n||this.handle2,p===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),g=0;g<this.ticks.length;g++)this._removeClass(this.ticks[g],"round triangle hide");var B=["round","triangle","custom"],C=-1!==B.indexOf(this.options.handle);if(C)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),g=0;g<this.ticks.length;g++)this._addClass(this.ticks[g],this.options.handle);this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.touchstart,!1),this.sliderElem.addEventListener("touchmove",this.touchmove,!1)),this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip?(this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide")):"always"===this.options.tooltip?(this._showTooltip(),this._alwaysShowTooltip=!0):(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1),this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)),this.options.enabled?this.enable():this.disable()}var d={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},e={linear:{toValue:function(a){var b=a/100*(this.options.max-this.options.min),c=!0;if(this.options.ticks_positions.length>0){for(var d,e,f,g=0,h=1;h<this.options.ticks_positions.length;h++)if(a<=this.options.ticks_positions[h]){d=this.options.ticks[h-1],f=this.options.ticks_positions[h-1],e=this.options.ticks[h],g=this.options.ticks_positions[h];break}var i=(a-f)/(g-f);b=d+i*(e-d),c=!1}var j=c?this.options.min:0,k=j+Math.round(b/this.options.step)*this.options.step;return k<this.options.min?this.options.min:k>this.options.max?this.options.max:k},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=0===this.options.min?0:Math.log(this.options.min),c=Math.log(this.options.max),d=Math.exp(b+(c-b)*a/100);return d=this.options.min+Math.round((d-this.options.min)/this.options.step)*this.options.step,d<this.options.min?this.options.min:d>this.options.max?this.options.max:d},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=Math.log(this.options.max),c=0===this.options.min?0:Math.log(this.options.min),d=0===a?0:Math.log(a);return 100*(d-c)/(b-c)}}};if(b=function(a,b){return c.call(this,a,b),this},b.prototype={_init:function(){},constructor:b,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,scale:"linear",focus:!1,tooltip_position:null,labelledby:null},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(f),b===!0&&this._trigger("slide",f),d!==f&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(){return this._removeSliderEventHandlers(),c.call(this,this.element,this.options),a&&a.data(this.element,"slider",this),this},relayout:function(){return this._resize(),this._layout(),this},_removeSliderEventHandlers:function(){this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.showTooltip&&(this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle2.removeEventListener("focus",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("blur",this.hideTooltip,!1)),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];this.eventToCallbackMap[c]=null}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this.alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_layout:function(){var a;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),this.handle2.style[this.stylePos]=a[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var b="vertical"===this.options.orientation?"height":"width",c="vertical"===this.options.orientation?"marginTop":"marginLeft",d=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var e=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[c]=-d/2+"px"),e=this.tickLabelContainer.offsetHeight;else for(f=0;f<this.tickLabelContainer.childNodes.length;f++)this.tickLabelContainer.childNodes[f].offsetHeight>e&&(e=this.tickLabelContainer.childNodes[f].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=e+"px")}for(var f=0;f<this.options.ticks.length;f++){var g=this.options.ticks_positions[f]||this._toPercentage(this.options.ticks[f]);this.options.reversed&&(g=100-g),this.ticks[f].style[this.stylePos]=g+"%",this._removeClass(this.ticks[f],"in-selection"),this.options.range?g>=a[0]&&g<=a[1]&&this._addClass(this.ticks[f],"in-selection"):"after"===this.options.selection&&g>=a[0]?this._addClass(this.ticks[f],"in-selection"):"before"===this.options.selection&&g<=a[0]&&this._addClass(this.ticks[f],"in-selection"),this.tickLabels[f]&&(this.tickLabels[f].style[b]=d+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[f]?(this.tickLabels[f].style.position="absolute",this.tickLabels[f].style[this.stylePos]=g+"%",this.tickLabels[f].style[c]=-d/2+"px"):"vertical"===this.options.orientation&&(this.tickLabels[f].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style.marginTop=this.sliderElem.offsetWidth/2*-1+"px"))}}var h;if(this.options.range){h=this.options.formatter(this._state.value),this._setText(this.tooltipInner,h),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px"),"vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");var i=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,i);var j=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,j),this.tooltip_min.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip_min,"margin-top",-this.tooltip_min.offsetHeight/2+"px"):this._css(this.tooltip_min,"margin-left",-this.tooltip_min.offsetWidth/2+"px"),this.tooltip_max.style[this.stylePos]=a[1]+"%","vertical"===this.options.orientation?this._css(this.tooltip_max,"margin-top",-this.tooltip_max.offsetHeight/2+"px"):this._css(this.tooltip_max,"margin-left",-this.tooltip_max.offsetWidth/2+"px")}else h=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,h),this.tooltip.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%",this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var k=this.tooltip_min.getBoundingClientRect(),l=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?k.right>l.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):k.right>l.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_resize:function(a){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this._setDataVal(e),this.setValue(e,!1,!0),this._pauseEvent(a),this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(a){if(void 0===a.changedTouches)return void this._mousedown(a);var b=a.changedTouches[0];this.touchX=b.pageX,this.touchY=b.pageY},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="vertical"===this.options.orientation&&!this.options.reversed,e="horizontal"===this.options.orientation&&this.options.reversed;(d||e)&&(c=-c)}var f=this._state.value[a]+c*this.options.step;return this.options.range&&(f=[a?this._state.value[0]:f,a?f:this._state.value[1]]),this._trigger("slideStart",f),this._setDataVal(f),this.setValue(f,!0,!0),this._setDataVal(f),this._trigger("slideStop",f),this._layout(),this._pauseEvent(b),!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this._layout();var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_touchmove:function(a){if(void 0!==a.changedTouches){var b=a.changedTouches[0],c=b.pageX-this.touchX,d=b.pageY-this.touchY;this._state.inDrag||("vertical"===this.options.orientation&&5>=c&&c>=-5&&(d>=15||-15>=d)?this._mousedown(a):5>=d&&d>=-5&&(c>=15||-15>=c)&&this._mousedown(a))}},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c&&(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0)}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var a=this._calculateValue(!0);return this._layout(),this._setDataVal(a),this._trigger("slideStop",a),!1},_calculateValue:function(a){var b;if(this.options.range?(b=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(b[0]=this._toValue(this._state.percentage[0]),b[0]=this._applyPrecision(b[0])),100!==this._state.percentage[1]&&(b[1]=this._toValue(this._state.percentage[1]),b[1]=this._applyPrecision(b[1]))):(b=this._toValue(this._state.percentage[0]),b=parseFloat(b),b=this._applyPrecision(b)),a){for(var c=[b,1/0],d=0;d<this.options.ticks.length;d++){var e=Math.abs(this.options.ticks[d]-b);e<=c[1]&&(c=[this.options.ticks[d],e])}if(c[1]<=this.options.ticks_snap_bounds)return c[0]}return b},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type||(a=a.touches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c,e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if("number"==typeof a)return a;if(Array.isArray(a))return this._validateArray(a),a;throw new Error(d.formatInvalidInputErrorMsg(a))},_validateArray:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"!=typeof c)throw new Error(d.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.textContent?a.textContent=b:"undefined"!=typeof a.innerText&&(a.innerText=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop,"BODY"!==a.tagName&&(b-=a.scrollTop);return b},_offset:function(a){return{left:this._offsetLeft(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b=this.options.tooltip_position||"right",c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,b),a.style[c]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?a.forEach(function(a){this._addClass(a,"bottom"),a.style.top="22px"}.bind(this)):a.forEach(function(a){this._addClass(a,"top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},a){var f=a.fn.slider?"bootstrapSlider":"slider";a.bridget(f,b),a(function(){a("input[data-provide=slider]")[f]()})}}(a),b});
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular', 'bootstrap-slider'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('angular'), require('bootstrap-slider'));
    } else if (window) {
        factory(window.angular, window.Slider);
    }
})(function (angular, Slider) {

angular.module('ui.bootstrap-slider', [])
    .directive('slider', ['$parse', '$timeout', '$rootScope', function ($parse, $timeout, $rootScope) {
        return {
            restrict: 'AE',
            replace: true,
            template: '<div><input class="slider-input" type="text" style="width:100%" /></div>',
            require: 'ngModel',
            scope: {
                max: "=",
                min: "=",
                step: "=",
                value: "=",
                ngModel: '=',
                ngDisabled: '=',
                range: '=',
                sliderid: '=',
                ticks: '=',
                ticksLabels: '=',
                ticksSnapBounds: '=',
                ticksPositions: '=',
                scale: '=',
                focus: '=',
                formatter: '&',
                onStartSlide: '&',
                onStopSlide: '&',
                onSlide: '&'
            },
            link: function ($scope, element, attrs, ngModelCtrl, $compile) {
                var ngModelDeregisterFn, ngDisabledDeregisterFn;

                var slider = initSlider();

                function initSlider() {
                    var options = {};

                    function setOption(key, value, defaultValue) {
                        options[key] = value || defaultValue;
                    }

                    function setFloatOption(key, value, defaultValue) {
                        options[key] = value || value === 0 ? parseFloat(value) : defaultValue;
                    }

                    function setBooleanOption(key, value, defaultValue) {
                        options[key] = value ? value + '' === 'true' : defaultValue;
                    }

                    function getArrayOrValue(value) {
                        return (angular.isString(value) && value.indexOf("[") === 0) ? angular.fromJson(value) : value;
                    }

                    setOption('id', $scope.sliderid);
                    setOption('orientation', attrs.orientation, 'horizontal');
                    setOption('selection', attrs.selection, 'before');
                    setOption('handle', attrs.handle, 'round');
                    setOption('tooltip', attrs.sliderTooltip || attrs.tooltip, 'show');
                    setOption('tooltip_position', attrs.sliderTooltipPosition, 'top');
                    setOption('tooltipseparator', attrs.tooltipseparator, ':');
                    setOption('ticks', $scope.ticks);
                    setOption('ticks_labels', $scope.ticksLabels);
                    setOption('ticks_snap_bounds', $scope.ticksSnapBounds);
                    setOption('ticks_positions', $scope.ticksPositions);
                    setOption('scale', $scope.scale, 'linear');
                    setOption('focus', $scope.focus);

                    setFloatOption('min', $scope.min, 0);
                    setFloatOption('max', $scope.max, 10);
                    setFloatOption('step', $scope.step, 1);
                    var strNbr = options.step + '';
                    var dotPos = strNbr.search(/[^.,]*$/);
                    var decimals = strNbr.substring(dotPos);
                    setFloatOption('precision', attrs.precision, decimals.length);

                    setBooleanOption('tooltip_split', attrs.tooltipsplit, false);
                    setBooleanOption('enabled', attrs.enabled, true);
                    setBooleanOption('naturalarrowkeys', attrs.naturalarrowkeys, false);
                    setBooleanOption('reversed', attrs.reversed, false);

                    setBooleanOption('range', $scope.range, false);
                    if (options.range) {
                        if (angular.isArray($scope.value)) {
                            options.value = $scope.value;
                        }
                        else if (angular.isString($scope.value)) {
                            options.value = getArrayOrValue($scope.value);
                            if (!angular.isArray(options.value)) {
                                var value = parseFloat($scope.value);
                                if (isNaN(value)) value = 5;

                                if (value < $scope.min) {
                                    value = $scope.min;
                                    options.value = [value, options.max];
                                }
                                else if (value > $scope.max) {
                                    value = $scope.max;
                                    options.value = [options.min, value];
                                }
                                else {
                                    options.value = [options.min, options.max];
                                }
                            }
                        }
                        else {
                            options.value = [options.min, options.max]; // This is needed, because of value defined at $.fn.slider.defaults - default value 5 prevents creating range slider
                        }
                        $scope.ngModel = options.value; // needed, otherwise turns value into [null, ##]
                    }
                    else {
                        setFloatOption('value', $scope.value, 5);
                    }

                    if (attrs.formatter) {
                        options.formatter = function(value) {
                            return $scope.formatter({value: value});
                        }
                    }

                    // check if slider jQuery plugin exists
                    if ('$' in window && $.fn.slider) {
                        // adding methods to jQuery slider plugin prototype
                        $.fn.slider.constructor.prototype.disable = function () {
                            this.picker.off();
                        };
                        $.fn.slider.constructor.prototype.enable = function () {
                            this.picker.on();
                        };
                    }

                    // destroy previous slider to reset all options
                    if (element[0].__slider)
                        element[0].__slider.destroy();

                    var slider = new Slider(element[0].getElementsByClassName('slider-input')[0], options);
                    element[0].__slider = slider;

                    // everything that needs slider element
                    var updateEvent = getArrayOrValue(attrs.updateevent);
                    if (angular.isString(updateEvent)) {
                        // if only single event name in string
                        updateEvent = [updateEvent];
                    }
                    else {
                        // default to slide event
                        updateEvent = ['slide'];
                    }
                    angular.forEach(updateEvent, function (sliderEvent) {
                        slider.on(sliderEvent, function (ev) {
                            ngModelCtrl.$setViewValue(ev);
                        });
                    });
                    slider.on('change', function (ev) {
                        ngModelCtrl.$setViewValue(ev.newValue);
                    });


                    // Event listeners
                    var sliderEvents = {
                        slideStart: 'onStartSlide',
                        slide: 'onSlide',
                        slideStop: 'onStopSlide'
                    };
                    angular.forEach(sliderEvents, function (sliderEventAttr, sliderEvent) {
                        var fn = $parse(attrs[sliderEventAttr]);
                        slider.on(sliderEvent, function (ev) {
                            if ($scope[sliderEventAttr]) {
                                $scope.$apply(function () {
                                    fn($scope.$parent, { $event: ev, value: ev });
                                });
                            }
                        });
                    });

                    // deregister ngDisabled watcher to prevent memory leaks
                    if (angular.isFunction(ngDisabledDeregisterFn)) {
                        ngDisabledDeregisterFn();
                        ngDisabledDeregisterFn = null;
                    }

                    ngDisabledDeregisterFn = $scope.$watch('ngDisabled', function (value) {
                        if (value) {
                            slider.disable();
                        }
                        else {
                            slider.enable();
                        }
                    });

                    // deregister ngModel watcher to prevent memory leaks
                    if (angular.isFunction(ngModelDeregisterFn)) ngModelDeregisterFn();
                    ngModelDeregisterFn = $scope.$watch('ngModel', function (value) {
                        if($scope.range){
                            slider.setValue(value);
                        }else{
                            slider.setValue(parseFloat(value));
                        }
                        slider.relayout();
                    }, true);

                    return slider;
                }


                var watchers = ['min', 'max', 'step', 'range', 'scale', 'ticksLabels'];
                angular.forEach(watchers, function (prop) {
                    $scope.$watch(prop, function () {
                        slider = initSlider();
                    });
                });

                var globalEvents = ['relayout', 'refresh', 'resize'];
                angular.forEach(globalEvents, function(event) {
                    if(angular.isFunction(slider[event])) {
                        $scope.$on('slider:' + event, function () {
                            slider[event]();
                        });
                    }
                });
            }
        };
    }])
;
});

var SocialShare = SocialShare || {};

$(document).ready(function() {
  'use strict';

  (function(app) {

    //siteUrl set to the applications root directory; modify for paths to assets as needed;
    var siteUrl = window.location.href;

    var shareServices = {
      'twitter': {
        shareurl: 'http://twitter.com/intent/tweet?',
        paramproto: {
          'text': 'text=', //Optional; Pre-populated UTF-8 and URL-encoded Tweet text.;
          'url': 'url=', //Optional; A fully-qualified URL with a HTTP or HTTPS scheme, URL-encoded.
          'hashtags': 'hashtags=', //Optional; comma-separated list of hashtag values without the preceding # character.
          'via': 'via=', //Optional; A Twitter username to associate with the Tweet
          'related': 'related=' //Optional; Suggest additional Twitter usernames related to the Tweet as comma-separated values...a URL-encoded comma and text after the username;
        }
      },
      'facebook': {
        shareurl: 'http://www.facebook.com/sharer.php?',
        paramproto: {
          'u': 'u='
        }
      },
      'linkedin': {
        shareurl: 'http://www.linkedin.com/shareArticle?',
        paramproto: {
          'url': 'url=', //Required; The url-encoded URL of the page that you wish to share.
          'mini': 'mini=', //Required; A required argument who"s value must always be:  true
          'title': 'title=', //Optional; The url-encoded title value that you wish you use.
          'summary': 'summary=', //Optional; The url-encoded description that you wish you use.
          'source': 'source=' //The url-encoded source of the content (e.g. your website or application name).
        }
      },
      'googleplus': {
        shareurl: 'https://plus.google.com/share?',
        paramproto: {
          'url': 'url=',
          'hl': 'hl=' //https://developers.google.com/+/web/share/#available-languages
        }
      }
    };

    function share(serviceName, paramOptions) {
      if (!shareServices[serviceName]) {
        throw new Error('Share service not defined');
      }
      var shareUrl = getShareUrl(serviceName, paramOptions);
      showPopup(shareUrl);
      return this;
    }

    function getShareUrl(name, options) {
      var shareAddress = shareServices[name].shareurl;
      var paramProto = shareServices[name].paramproto;
      options = options || {};


      //console.log(shareAddress, options.url, siteUrl, paramProto);

      //check for url param for all share services;
      if (name === 'facebook') {
        options.u ? (options.u = siteUrl + options.u) : (options.u = siteUrl);
      }
      else if (name === 'twitter') {
        //options.url ? (options.url = siteUrl + options.url) : (options.url = siteUrl);
      } else {
        options.url ? (options.url = siteUrl + options.url) : (options.url = siteUrl);
      }

      //check for linkedin requirements
      if (name === 'linkedin') {
        if (!options.mini || options.mini !== 'true') {
          options.mini = 'true';
        }
      }

      //get array of query params;
      var queryParams = getQueryStringArray(options, paramProto);

      //get complete share url
      var shareUrl = concatShareUrl(shareAddress, queryParams);
      return shareUrl;
    }

    function getQueryStringArray(options, paramProto) {
      var params = [];
      options = options || {};

      for (var param in options) {
        if (paramProto.hasOwnProperty(param)) {
          var queryStr = paramProto[param] + encodeURIComponent(options[param]);
          params.push(queryStr);
        }
      }
      return params;
    }

    function concatShareUrl(shareAddress, queryParams) {
      queryParams = queryParams || [];
      var shareUrl = queryParams.length ? (shareAddress + queryParams.join('&')) : shareAddress;
      return shareUrl;
    }

    function showPopup(shareUrl) {
      var width = 600;
      var height = 600;
      var top = ($(window).height() - height) / 2;
      var left = ($(window).width() - width) / 2;
      var windowFeatures = 'status=1' +
        ',width=' + width +
        ',height=' + height +
        ',top=' + top +
        ',left=' + left;
      var url = shareUrl;
      var windowName = '_blank';

      window.open(url, windowName, windowFeatures);

      return false;
    }

    (function init() {
      var shareServiceNames = Object.keys(shareServices);
      var prefix = 'share';
      //multiple class selector string
      var mcs = shareClasses(prefix, shareServiceNames)(true);
      //share classnames array
      var scn = shareClasses(prefix, shareServiceNames)(false);

      function shareClasses(classPrefix, classNames) {
        classNames = $.map(classNames, function(item, index) {
          return (classPrefix + '-' + item);
        });

        return function(classSelector) {
          if (classSelector) {
            var cs = $.map(classNames, function(item, index) {
              return ('.' + item);
            });
            return cs.join(', ');
          } else {
            return classNames;
          }
        };
      }

      $(mcs).on('click', initShare);

      function initShare(e) {
        //set parameter options
        var attrs = Array.prototype.slice.call($(this)[0].attributes);
        var paramOptions = {};

        $.each(attrs, function(index, item) {
          var attrName = item.name;
          var attrValue = item.value;

          if ((attrName.indexOf(prefix + '-') === 0) || (attrName.indexOf('data-' + prefix + '-') === 0)) {
            var param = attrName.split(prefix + '-')[1];
            paramOptions[param] = attrValue;
          }
        });

        //set social service type
        function hasClass(className) {
          return $(this).hasClass(className);
        }

        var hasShareService = scn.filter(hasClass.bind(this));

        //should only have one share service
        if (hasShareService.length === 1) {
          var shareServiceName = hasShareService[0].split('-')[1];
          share(shareServiceName, paramOptions);
        }
      }
    })();

    var api = {
      share: share
    };

    //extend api methods
    app = $.extend(app, api);
    return app;

  })(SocialShare);
});

var DesmitificadorApp = angular.module('DesmitificadorApp', ['chart.js','ui.bootstrap-slider']);

DesmitificadorApp.config(function(ChartJsProvider){
//    ChartJsProvider.setOptions({ colours :  });
})

DesmitificadorApp.controller('MainCtrl', function ($scope,$templateCache, $http, $window,$anchorScroll) {

	$scope.loading = true;
    $scope.saving = false;

	$scope.question = null;
	$scope.index = null;
    $scope.answer = false;
    $scope.bet = 50;

    $scope.chart = {};

    $scope.state = null;
    $scope.bgImage = '';

    $scope.isMobile = function detectmob(){
        //console.log($window.innerWidth,$window.innerHeight);
        return ($window.innerWidth <= 800)?true:false;
    };

    $scope.init = function(category_id,limit,colors,forceKeepBg){
        //console.log(limit);
        //Chart.defaults.global.colours = colors;

        $scope.keep_background = forceKeepBg;
        $scope.category_id = category_id;
        $scope.limit = limit;
    	$scope.chart.colours = colors;
        $http.get('/api/questions?category_id='+category_id+'&limit='+limit+'&r='+Date.now(), {})
    		.then(function(response){
    			$scope.category = response.data.metadata.category;
    			$scope.questions = response.data.records;
    			$scope.start();
    			$scope.loading = false;
    		}, function(e){
    			console.error(e);
    		});
    };

    $scope.start = function(){
        $scope.sendEvent('Category', 'start', $scope.category.name , $scope.category.id);
    	$scope.index = 0;
    	$scope.renderQuestion();
    };

    $scope.renderQuestion = function(){
        $anchorScroll('app-layout');
        $scope.question = $scope.questions[$scope.index];
        $scope.bgImage = 'url(/imagecache/original/' + $scope.question.image_file + ')';
        if (!$scope.isMobile() && !$scope.keep_background){
            $('body').css('background-image',$scope.bgImage);
        }
        $scope.question.answer = false;
        $scope.state = 'options';
    };

    $scope.chooseOption = function(opt){
        $scope.question.answer = opt;
        $scope.sendEvent('Option', 'select', $scope.question.answer.text, $scope.question.answer.id);
        $scope.state = 'slider';
        $scope.renderSlider();
    };

    $scope.changeOption = function(){
        $scope.renderQuestion();
    };

    $scope.renderSlider = function(){
        $scope.question.bet = 50;
        $scope.state = 'slider';
    };

    $scope.chooseBet = function($event,value){
        $scope.sendEvent('Option', 'bet', $scope.question.bet, $scope.question.answer.id);
        $scope.renderAnswer();
    };

    $scope.skipBet = function(){
        $scope.sendEvent('Option', 'skip', null, $scope.question.answer.id);
        $scope.question.bet = null;
        $scope.renderAnswer();
    }

    $scope.renderAnswer = function(){
        $scope.saveVote($scope.question.id,$scope.question.answer.id,$scope.question.bet);
        $scope.state = 'answer';
        $scope.sendEvent('Question', 'result', $scope.question.title, $scope.question.id);
        if($scope.question.bet){
            $scope.question.diff = Math.abs($scope.question.bet - $scope.question.answer.value);
        }
        $scope.question.options = $scope.question.options.sort(function(a, b){return b.value-a.value});
        $scope.chart.data = _.map($scope.question.options,function(d){
            return d.value;
        });

        $scope.chart.labels = _.map($scope.question.options,function(d){
            return d.text;
        });
    };

    $scope.skip = function(){
        $scope.sendEvent('Question', 'skip', $scope.question.title, $scope.question.id);
        $scope.next();
    };

    $scope.moveNext = function(){
        $scope.sendEvent('Question', 'next', $scope.question.title, $scope.question.id);
        $scope.next();
    };

    $scope.next = function(){
        if($scope.index+1 == $scope.questions.length){
            $scope.finish();
        }else{
        	$scope.index++;
        	$scope.renderQuestion();
        }
    };

    $scope.finish = function(){
        if (!$scope.isMobile() && !$scope.keep_background){
            $('body').css('background-image','none');
        }
        $window.location = '/summary?key='+$('meta[name="_token"]').attr('content')+'&cat='+$scope.category_id;
    	//$scope.state = 'thanks';
    };

    $scope.sendEvent = function(cat,action,label,value){
        if($window.ga){
            $window.ga('send', 'event', cat,action,label,value);
        }
    };

    $scope.saveVote = function(question_id,option_id, bet){
        $scope.saving = true;
        $http.post('/api/vote',
            {
                'question_id':question_id,
                'option_id':option_id,
                'bet':bet,
                '_token':$('meta[name="_token"]').attr('content')
            })
            .then(function(response){
                $scope.votes = response.data.response;
                $scope.saving = false;
                //console.log(response);
            }, function(e){
                console.error(e);
            });
    };

});

DesmitificadorApp.controller('SummaryCtrl', function ($scope,$templateCache, $http, $window,$anchorScroll) {

    $scope.loading = true;

    $scope.votes = {};

    $scope.isMobile = function(){
        return ($window.innerWidth <= 800)?true:false;
    };

    $scope.init = function(category_id,votes){

        $scope.total = votes.length;
        $scope.correctas = 0;

        votes.map(function(v){
            if(v.bet){
                v.diff = Math.abs(v.bet - v.option.value);
                v.correcta = (v.diff<=10)?true:false;
                $scope.correctas += (v.diff<=10)?1:0;
            } else {
                v.correcta = false;
            }

            var cuantos = 'pocos';
            if(v.option.value>=50){
                cuantos = 'muchos';
            }else if(v.option.value<50 && v.option.value >20){
                cuantos = 'algunos';
            }
            v.col = cuantos;
            return v;
        });

        $scope.votes = _.groupBy(votes,'col');

        $scope.notas = _.sampleSize(votes.filter(function(v){
            return v.question.answer_link!='' && v.correcta;
        }), 3);

    };

});

DesmitificadorApp.controller('QuestionCtrl', function ($scope) {

    $scope.loading = true;

    $scope.votes = {};

    $scope.isMobile = function(){
        return ($window.innerWidth <= 800)?true:false;
    };

    $scope.init = function(question,colors){

        $scope.question = question;
        $scope.chart = {};

        $scope.chart.colours = colors;

        $scope.question.options = $scope.question.options.sort(function(a, b){return b.value-a.value});
        $scope.chart.data = _.map($scope.question.options,function(d){
            return d.value;
        });

        $scope.chart.labels = _.map($scope.question.options,function(d){
            return d.text;
        });

       /* votes.map(function(v){
            var cuantos = 'pocos';
            if(v.option.value>=50){
                cuantos = 'muchos';
            }else if(v.option.value<50 && v.option.value >20){
                cuantos = 'algunos';
            }
            v.col = cuantos;
            return v;
        });

        $scope.votes = _.groupBy(votes,'col');*/

        //Chart.defaults.global.colours = colors;
/*        $scope.category_id = category_id;
//        $scope.chart.colours = colors;
        $http.get('/api/questions?category_id='+category_id, {})
            .then(function(response){
                $scope.category = response.data.metadata.category;
                $scope.questions = response.data.records;
                $scope.start();
                $scope.loading = false;
            }, function(e){
                console.error(e);
            });*/
    };

});

DesmitificadorApp.controller('FeedbackCtrl', function ($scope,$http) {
    $scope.sugerencias = {};
    $scope.preguntas = {};
    $scope.loading = false;
    $scope.sent = false;

    $scope.sugerenciasValid = function(){
        return  ($scope.sugerencias.nombre && $scope.sugerencias.nombre != '') &&
                ($scope.sugerencias.email && $scope.sugerencias.email != '') &&
                ($scope.sugerencias.sugerencia && $scope.sugerencias.sugerencia != '');
    }

    $scope.preguntasValid = function(){
        return  ($scope.preguntas.nombre && $scope.preguntas.nombre != '') &&
                ($scope.preguntas.email && $scope.preguntas.email != '') &&
                ($scope.preguntas.pregunta && $scope.preguntas.pregunta != '') &&
                ($scope.preguntas.link && $scope.preguntas.link != '');
    }

    $scope.processSugerenciasForm = function() {
        if($scope.sugerenciasValid()){
            $scope.loading = true;
            $scope.sent = false;
            $scope.sendForm($scope.sugerencias,'sugerencias');
        }
    };

    $scope.processPreguntasForm = function() {
        if($scope.preguntasValid()){
            $scope.loading = true;
            $scope.sent = false;
            $scope.sendForm($scope.preguntas,'preguntas');
        }
    };

    $scope.sendForm = function(data,type) {
      data._token = $('meta[name="_token"]').attr('content');

      $http.post('/api/receive/'+type,
        data)
          .then(function(response) {
            $scope.loading = false;
            $scope.sent = true;
            $scope[type] = {};
            setTimeout(function(){
                jQuery('#'+type+'Modal').modal('hide');
                $scope.sent = false;
                $scope.$apply();
            },3000);
            console.log(response);
          });
    };
});


DesmitificadorApp.controller('OptionsCtrl', function ($scope) {

});
//# sourceMappingURL=frontend.js.map
