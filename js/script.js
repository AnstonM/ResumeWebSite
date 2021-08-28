$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
   $(event.target).focus();
  });
});

(function (global) {

var dc = {};

var PersonalHtml = "snippets/Personal-snippet.html";
var EducationHtml = "snippets/Education-snippet.html";
var CertificateHtml = "snippets/Certificate-snippet.html";
/*var allCategoriesUrl = "snippets/Certificate-snippet1.html";
  "https://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";
var menuItemsUrl =
  "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
var menuItemsTitleHtml = "snippets/menu-items-title.html";
var menuItemHtml = "snippets/menu-item.html";*/

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}

// Remove the class 'active' from home and switch to Menu button
var switchButtonToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  var classes1 = document.querySelector("#edubutton").className;
  classes1 = classes1.replace(new RegExp("active", "g"), "");
  document.querySelector("#edubutton").className = classes1;

  var classes2 = document.querySelector("#workbutton").className;
  classes2 = classes2.replace(new RegExp("active", "g"), "");
  document.querySelector("#workbutton").className = classes2;

  var classes3 = document.querySelector("#certbutton").className;
  classes3 = classes3.replace(new RegExp("active", "g"), "");
  document.querySelector("#certbutton").className = classes3;

  var classes4 = document.querySelector("#skillbutton").className;
  classes4 = classes4.replace(new RegExp("active", "g"), "");
  document.querySelector("#skillbutton").className = classes4;
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(PersonalHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

// Load the menu categories view
dc.loadEducationPage = function () {
  switchButtonToActive();
   classes = document.querySelector("#edubutton").className;
      classes += " active";
    document.querySelector("#edubutton").className = classes;
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    EducationHtml,function (responseText){
    document.querySelector("#main-content").innerHTML = responseText;  
    },
    false);

};

// Load the menu categories view
dc.loadCertificatePage = function () {
  switchButtonToActive();
   classes = document.querySelector("#certbutton").className;
      classes += " active";
    document.querySelector("#certbutton").className = classes;
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    CertificateHtml,function (responseText){
    document.querySelector("#main-content").innerHTML = responseText;  
    },
    false);
};


global.$dc = dc;

})(window);
