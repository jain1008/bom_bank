Bootstrapper.bindImmediate(function(){var ddConditions={"not":[null],"caseInsensitive":["ignore case"],"compareTo":["group"],"requiredData":["17010"],"comparators":["contains"]};Bootstrapper.data.resolve(ddConditions.requiredData,function(){ddConditions.values=Array.prototype.slice.call(arguments,0);var Bootstrapper=window["Bootstrapper"];if(Bootstrapper.data.checkConditions(ddConditions))Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=
Bootstrapper.ensightenOptions;window.pdptracked=0;window.grouptracked=0;function trackReviewPDP(){if($("a.pr-snippet-review-count")&&window.pdptracked===0){$("a.pr-snippet-review-count").click(function(){var prodName=citiData.prodName;var s=window.s;s.linkTrackVars="eVar38,eVar20";s.eVar38=s.pageName;s.eVar20="Clicked to Read Rating Review "+prodName;s.tl(this,"o",s.eVar20)});window.pdptracked=1}}function trackReviewGroup(){if($("a.pr-snippet-review-count")&&window.grouptracked===0){$("a.pr-snippet-review-count").click(function(){var cardName=
$(this).closest("div.cA-DD-principal-information").find("h3.cA-DD-cardTitle").text();var s=window.s;s.linkTrackVars="eVar38,eVar20";s.eVar38=s.pageName;s.eVar20="Clicked to Read Rating Review "+cardName;s.tl(this,"o",s.eVar20)});window.grouptracked=1}}var siteSection3=citiData.siteSection3||"";if(siteSection3.indexOf("group")>=0)$(function(){setInterval(trackReviewGroup,1800)});else if(siteSection3.indexOf("detail")>=0)$(function(){setInterval(trackReviewPDP,1800)})},1898723,[3818965,3154250],450272,
[359218,369351])})},-1,-1);