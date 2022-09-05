var showed_box = 0;

nextPartner = () => {
    showed_box += -20;

    if (showed_box < -80) showed_box = 0;

    document.getElementById("sld-partner").style.transform =
        "translateX(" + showed_box + "%)";
};

previousPartner = () => {
    showed_box += 20;

    if (showed_box > 0) showed_box = -80;

    document.getElementById("sld-partner").style.transform =
        "translateX(" + showed_box + "%)";
};
nextFeedback = () => {
    showed_box += -33.333;
    if (showed_box < -66.666) showed_box = 0;

    document.getElementById("sld-feedback").style.transform =
        "translateX(" + showed_box + "%)";
};
previousFeedBack = () => {
    showed_box += 33.333;

    if (showed_box > 0) showed_box = -66.666;

    document.getElementById("sld-feedback").style.transform =
        "translateX(" + showed_box + "%)";
};