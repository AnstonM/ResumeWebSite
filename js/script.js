$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  
  $("#navbarToggle").click(function (event) {
   $(event.target).focus();
  });
});

(function (global) {

    var dc = {};

    var PersonalHtml = "snippets/Personal-snippet.html";
    var EducationHtml = "snippets/Education-snippet.html";
    var CertificateHtml = "snippets/Certificate-snippet.html";
    var CertificateHtml2 = "snippets/Certificate-snippet2.html";
    var CertificateHtml3 = "snippets/Certificate-snippet-IBM-AI.html";
    var CertificateHtml4 = "snippets/Certificate-snippet-AWS.html";
    var WorkHtml = "snippets/Work-snippet.html";
    var ButtonHtml = "snippets/Button-snippet.html";
    var SkillHtml = "snippets/Skill-snippet.html";



    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html) {
      var targetElem = document.querySelector(selector);
      targetElem.innerHTML = html;
    };

    // Show loading icon inside element identified by 'selector'.
    var showLoading = function (selector) {
      var html = "<div class='text-center loading'>";
      html += "<img src='images/ajax-loader.gif'></div>";
      insertHtml(selector, html);
      };

    // Remove the class 'active' from any button and switch to selected button
    var switchButtonToActive = function () {
      var classes = document.querySelector("#navHomeButton").className;
      classes = classes.replace(new RegExp("active", "g"), "");
      document.querySelector("#navHomeButton").className = classes;

      var classes = document.querySelector("#Personalbutton").className;
      classes = classes.replace(new RegExp("active", "g"), "");
      document.querySelector("#Personalbutton").className = classes;

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
    // On first load, show personal details view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(ButtonHtml,
      function (responseText) {
        document.querySelector("#main-content")
          .innerHTML = responseText;
      },
      false);
    });



    //Personal Details snippet
    dc.loadPersPage = function () {
      switchButtonToActive();
       var classes1 = document.querySelector("#Personalbutton").className;
        classes1 += " active";
        document.querySelector("#Personalbutton").className = classes1;
      showLoading("#main-content");
      $ajaxUtils.sendGetRequest(
        PersonalHtml,function (responseText){
        document.querySelector("#main-content").innerHTML = responseText;  
        },
        false);

    }; 


    //Education snippet
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


    //Certificate snippet
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

    //Google IT Course detail snippet
    dc.loadCert2Page = function () {
      switchButtonToActive();
       classes = document.querySelector("#certbutton").className;
          classes += " active";
        document.querySelector("#certbutton").className = classes;
      showLoading("#main-content");
      $ajaxUtils.sendGetRequest(
        CertificateHtml2,function (responseText){
        document.querySelector("#main-content").innerHTML = responseText;  
        },
        false);
    };

    //IBM Applied AI
    dc.loadCert3Page = function () {
      switchButtonToActive();
       classes = document.querySelector("#certbutton").className;
          classes += " active";
        document.querySelector("#certbutton").className = classes;
      showLoading("#main-content");
      $ajaxUtils.sendGetRequest(
        CertificateHtml3,function (responseText){
        document.querySelector("#main-content").innerHTML = responseText;  
        },
        false);
    };


    //IBM Applied AI
    dc.loadCert4Page = function () {
      switchButtonToActive();
       classes = document.querySelector("#certbutton").className;
          classes += " active";
        document.querySelector("#certbutton").className = classes;
      showLoading("#main-content");
      $ajaxUtils.sendGetRequest(
        CertificateHtml4,function (responseText){
        document.querySelector("#main-content").innerHTML = responseText;  
        },
        false);
    };


    //Work Experience snippet
    dc.loadExpPage = function () {
      switchButtonToActive();
       classes = document.querySelector("#workbutton").className;
          classes += " active";
        document.querySelector("#workbutton").className = classes;
      showLoading("#main-content");
      $ajaxUtils.sendGetRequest(
        WorkHtml,function (responseText){
        document.querySelector("#main-content").innerHTML = responseText;  
        },
        false);
    };

    //Skill snippet
    dc.loadSkillsPage = function () {
      switchButtonToActive();
       classes = document.querySelector("#skillbutton").className;
          classes += " active";
        document.querySelector("#skillbutton").className = classes;
      showLoading("#main-content");
      $ajaxUtils.sendGetRequest(
        SkillHtml,function (responseText){
        document.querySelector("#main-content").innerHTML = responseText;  
        },
        false);
    };

    global.$dc = dc;

})(window);
