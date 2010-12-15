jQuery.webshims.ready("form-message form-core",function(c,e,v,l,w){var g=c.support;if(g.validity){var j=e.inputTypes,p={};e.addInputType=function(a,d){j[a]=d};e.addValidityRule=function(a,d){p[a]=d};e.addValidityRule("typeMismatch",function(a,d,b,f){if(d==="")return false;f=f.typeMismatch;if(!("type"in b))b.type=(a[0].getAttribute("type")||"").toLowerCase();if(j[b.type]&&j[b.type].mismatch)f=j[b.type].mismatch(d,a);return f});var h=e.overrideValidationMessages,q=!g.requiredSelect||!g.numericDateProps||
h,x=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],y=c.attr,r=c.fn.val,n=h?{value:1,checked:1}:{value:1},m=h?["textarea"]:[],z={radio:1,checkbox:1},k=function(a,d){if(a.form){var b=(a.getAttribute&&a.getAttribute("type")||a.type||"").toLowerCase();if(!h)if(!(!g.requiredSelect&&b=="select-one")&&!j[b])return;h&&!d&&z[b]&&a.name?c(l.getElementsByName(a.name)).each(function(){c.attr(this,"validity")}):c.attr(a,"validity")}};
e.defineNodeNamesProperty(["input","textarea","select"],"setCustomValidity",{value:function(a){a+="";this.setCustomValidity(a);if(q){c.data(this,"hasCustomError",!!a);k(this)}}});if(!v.noHTMLExtFixes&&!g.requiredSelect||h){c.extend(n,{required:1,size:1,multiple:1,selectedIndex:1});m.push("select")}if(!g.numericDateProps||h){c.extend(n,{min:1,max:1,step:1});m.push("input")}if(!g.requiredSelect){e.defineNodeNamesBooleanProperty(["select"],"required");e.addValidityRule("valueMissing",function(a,d,b,
f){if(b.nodeName=="select"&&!d&&a.attr("required")&&a[0].size<2){if(!b.type)b.type=a[0].type;if(b.type=="select-one"&&c("> option:first-child:not(:disabled)",a).attr("selected"))return true}return f.valueMissing})}if(q){e.defineNodeNamesProperty(m,"validity",{get:function(a){var d=a.validity;if(!d)return d;var b={};x.forEach(function(i){b[i]=d[i]});if(!c.attr(a,"willValidate"))return b;var f=c(a),A={type:(a.getAttribute&&a.getAttribute("type")||"").toLowerCase(),nodeName:(a.nodeName||"").toLowerCase()},
B=r.call(f),C=!!c.data(a,"hasCustomError"),s;b.customError=C;if(b.valid&&b.customError)b.valid=false;else if(!b.valid){var t=true;c.each(b,function(i,o){if(o)return t=false});if(t)b.valid=true}c.each(p,function(i,o){b[i]=o(f,B,A,b);if(b[i]&&(b.valid||!s&&h)){a.setCustomValidity(e.createValidationMessage(a,i));b.valid=false;s=true}});b.valid&&a.setCustomValidity("");return b},set:c.noop});c.fn.val=function(){var a=r.apply(this,arguments);this.each(function(){k(this)});return a};c.attr=function(a,d,
b){var f=y.apply(this,arguments);n[d]&&b!==w&&a.form&&k(a);return f};if(l.addEventListener){l.addEventListener("change",function(a){k(a.target)},true);g.numericDateProps||l.addEventListener("input",function(a){k(a.target)},true)}var u=m.join(",");e.addReady(function(a,d){c(u,a).add(d.filter(u)).attr("validity")})}e.createReadyEvent("form-extend")}},true);
