var showed_box = 0;
nextPartner = () => {
    showed_box += -33.3;

    if (showed_box < -66.6) showed_box = 0;

    document.getElementById("sld-partner").style.transform =
        "translateX(" + showed_box + "%)";
};

previousPartner = () => {
    showed_box += 33.3;

    if (showed_box > 0) showed_box = -66.6;

    document.getElementById("sld-partner").style.transform =
        "translateX(" + showed_box + "%)";
};

nextFeedback = () => {
    showed_box += -50;
    if (showed_box < -50) showed_box = 0;

    document.getElementById("sld-feedback").style.transform =
        "translateX(" + showed_box + "%)";
};
previousFeedBack = () => {
    showed_box += 50;

    if (showed_box > 0) showed_box = -50;

    document.getElementById("sld-feedback").style.transform =
        "translateX(" + showed_box + "%)";
};