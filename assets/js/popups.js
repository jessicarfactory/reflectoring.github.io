$( document ).ready(function() {

    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function showAdPopup(){
      let cookie = getCookie("launchdarkly");
      if(cookie == null){
         $.fn.cornerpopup({
            delay: 30000,
            variant: 10,
            slide: 1,
            iconColor: "#000000",
            header: "",
            width: "324px",
            content: "<a href=\"https://trajectoryconf.com/trajectory-2021/?utm_source=reflectoring&utm_medium=display&utm_campaign=22q3-reflectoring.io&utm_term=smart_display&utm_content=trajectory_conf_2021\"><img width=\"300\" alt=\"Trajectory Conference\" src=\"/assets/img/launchdarkly/2021_Trajectory_Ad_300x250.png\"/></a>",
            afterPopup: function() {
              setCookie("launchdarkly", "true", 7);
            }
         });
      }
    }

    function showCookieConsentPopup(){
      let cookie = getCookie("cookieconsent");
      if(cookie == null){
        $.fn.cornerpopup({
            variant: 10,
            slide: 1,
            iconColor: "#000000",
            header: "",
            width: "300px",
            content: "By browsing this site you agree to our and our partners' use of cookies to process your data. For more information please check out the <a href=\"/privacy\">Privacy Policy</a>.",
            afterPopup: function() {
              setCookie("cookieconsent", "true", 9999);
              showAdPopup();
            }
        });
        $.fn.cornerpopup.showPopup();
      } else {
        showAdPopup();
      }
    }

    showCookieConsentPopup();

});
