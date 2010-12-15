jQuery.webshims.ready("form-core",function(b,f,m){if(!b.support.validity){f.inputTypes=f.inputTypes||{};var i=f.inputTypes,n={radio:1,checkbox:1};f.addInputType=function(a,c){i[a]=c};var o={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},j={valueMissing:function(a,c,d){var e=a[0].getAttribute("aria-required");if(!a.attr("required")){e=="true"&&a[0].setAttribute("aria-required","false");
return false}e=="false"&&a[0].setAttribute("aria-required","true");e=false;if(!("type"in d))d.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();return e=d.nodeName=="select"?!c&&a[0].type=="select-one"&&a[0].size<2&&b("> option:first-child:not(:disabled)",a).attr("selected"):n[d.type]?!b(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!c},tooLong:function(a,c,d){if(c===""||d.nodeName=="select")return false;a=a.attr("maxlength");d=false;var e=c.length;if(e&&a>=0&&c.replace&&
(typeof a=="number"||a&&a==a*1))d=e>a;return d},typeMismatch:function(a,c,d){if(c===""||d.nodeName=="select")return false;var e=false;if(!("type"in d))d.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(i[d.type]&&i[d.type].mismatch)e=i[d.type].mismatch(c,a);return e},patternMismatch:function(a,c,d){if(c===""||d.nodeName=="select")return false;a=a.attr("pattern");if(!a)return false;return!RegExp("^(?:"+a+")$").test(c)}};f.addValidityRule=function(a,c){j[a]=c};f.defineNodeNamesProperty(["input",
"textarea","select","form","fieldset"],"checkValidity",{value:function(){var a,c=function(d){var e,g=b.attr(d,"validity");if(g)b.data(d,"cachedValidity",g);else return true;if(!g.valid){e=b.Event("invalid");var h=b(d).trigger(e);if(!a&&!e.isDefaultPrevented()){f.validityAlert.showFor(h);a=true}}b.data(d,"cachedValidity",false);return g.valid};return function(){a=false;if(b.nodeName(this,"form")||b.nodeName(this,"fieldset")){for(var d=true,e=this.elements||b("input, textarea, select",this),g=0,h=e.length;g<
h;g++)c(e[g])||(d=false);return d}else return this.form?c(this):true}}()});f.defineNodeNamesProperty(["input","textarea","select"],"setCustomValidity",{value:function(a){b.data(this,"customvalidationMessage",""+a)}});b.event.special.invalid={add:function(){b.data(this,"invalidEventShim")||b.event.special.invalid.setup.call(this)},setup:function(){b(this).bind("submit",b.event.special.invalid.handler).data("invalidEventShim",true);var a=b(this).data("events").submit;a&&a.length>1&&a.unshift(a.pop())},
teardown:function(){b(this).unbind("submit",b.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(a){if(!(a.type!="submit"||!b.nodeName(a.target,"form")||b.attr(a.target,"novalidate")!=null||b.data(a.target,"novalidate")))if(!b(a.target).checkValidity()){!a.originalEvent&&m.console&&console.log&&console.log("submit");a.stopImmediatePropagation();return false}}};f.defineNodeNamesProperty(["input","select","textarea"],"validity",{set:b.noop,get:function(a){var c=b.data(a,
"cachedValidity");if(c)return c;c=b.extend({},o);if(!b.attr(a,"willValidate")||a.type=="submit")return c;var d=b(a),e=d.val(),g={nodeName:a.nodeName.toLowerCase()};a.getAttribute("aria-invalid");c.customError=!!b.data(a,"customvalidationMessage");if(c.customError)c.valid=false;b.each(j,function(h,k){if(k(d,e,g)){c[h]=true;c.valid=false}});a.setAttribute("aria-invalid",c.valid?"false":"true");return c}},true,"form-htc-validity.htc");f.defineNodeNamesBooleanProperty(["input","textarea","select"],"required");
f.defineNodeNamesProperty(["input","select","textarea","fieldset","button","output"],"willValidate",{get:function(){var a={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1},c={fieldset:1,button:1,output:1};return function(d){return!!(d.form&&!d.disabled&&!d.readOnly&&!a[d.type]&&!c[(d.nodeName||"").toLowerCase()]&&b.attr(d.form,"novalidate")==null)}}()},true,"form-htc-validity.htc");f.addInputType("email",{mismatch:function(){var a=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(c){return!a.test(c)}}()});f.addInputType("url",{mismatch:function(){var a=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});var l=function(){var a=this;if(a.form){b.data(a.form,"novalidate",true);setTimeout(function(){b.data(a.form,"novalidate",false)},1)}},p={submit:1,button:1};b(document).bind("click",function(a){a.target&&a.target.form&&p[a.target.type]&&b.attr(a.target,"formnovalidate")!=null&&l.call(a.target)});f.addReady(function(a,c){var d=b("form",a).add(c.filter("form")).bind("invalid",b.noop).find("button[formnovalidate]").bind("click",l).end();setTimeout(function(){if(!document.activeElement||
!document.activeElement.form){var e=true;b("input, select, textarea",d).each(function(){if(!e)return false;if(this.getAttribute("autofocus")!=null){e=false;var g=f.getVisualInput(this),h=b("input, select, textarea, .ui-slider-handle",g).filter(":visible:first");h[0]||(h=g);try{h[0].focus()}catch(k){}}})}},9)});f.createReadyEvent("form-extend")}},true);
