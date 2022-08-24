var showed_box = 0;

      function fNext() {
        showed_box += -20;

        if (showed_box < -80) showed_box = 0;

        document.getElementById("sld").style.transform =
          "translateX(" + showed_box + "%)";
      }

      function fPrevious() {
        showed_box += 20;

        if (showed_box > 0) showed_box = -80;

        document.getElementById("sld").style.transform =
          "translateX(" + showed_box + "%)";
      }