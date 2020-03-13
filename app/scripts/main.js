/**
 * @author Sara Tabitha
 * @version 06/2017
 * 
 * @author  Gage Cahoon
 * @version 02/2020
 * 
 * @description This file handles all click functions for the menu, as well as changing classes for
 * the site menu to change between desktop and mobile view, and a fix for the opening of drawers for the
 * 360 tour options.
 * 
 * All JS that is not changed depending on the width of the screen.
 **/


/**
 * All of the drawers for the virtual tour section.
 * Each contain the virtual tour ids.
 **/
var virtualTourDropdowns = [
    "alumniTour",
    "equityTour",
    "sportsTour",
    "sidewalkTour",
    "clowTour",
    "sageTour",
    "kolfTour",
    "albeeTour",
    "lincolnTour",
    "acTour",
    "appletonTour",
    "eastTour",
    "studentSuccessTour"
]


/**
 * Add or Remove id's for the "+" button on the drawer.
 * The element is then toggled on/off.
 * 
 * Caps is important because it is the 2nd word in the id.
 **/
var virtualTourDropdownButtons = [
    "Alumni",
    "Equity",
    "Sports",
    "Sidewalk",
    "Clow",
    "Sage",
    "Kolf",
    "Albee",
    "Lincoln",
    "Ac",
    "Appleton",
    "East",
    "StudentSuccess"
]


/**
 * For every virtual tour drawer, 
 * When clicked:
 * Adds shadow, the options, and  
 * removes the "+" button then changes to a "-" button (vice versa).
 * 
 * @function
 **/
virtualTourDropdowns.forEach(function (thisOne) {
    var index = virtualTourDropdowns.indexOf(thisOne);

    $("#" + virtualTourDropdowns[index]).click(function () {
        $(this).toggleClass("mdl-shadow--3dp");
        $("#" + virtualTourDropdowns[index] + "Options").toggle("slow");
        $("#add" + virtualTourDropdownButtons[index]).toggle();
        $("#remove" + virtualTourDropdownButtons[index]).toggleClass("remove");
    })
});


/**
 * Within catergories.
 * Hides all of the cards beneath the menu.
 * 
 * @function 
 **/
function hideAll() {
    $("#athCard").hide();
    $("#accSCard").hide();
    $("#campSCard").hide();
    $("#accFCard").hide();
    $("#resHCard").hide();
    $("#diningCard").hide();
    $("#stuRCard").hide();
}


/**
 * For mobile,
 * Must click menu button to open the navigation.
 * 
 * Uses class instead of toggle otherwise it gets
 * stuck on active going between web and mobile 
 * if the menu is left open.
 * 
 * ex.
 * $("#drawerContents").toggleClass("active");
 * 
 * ==========LOOK INTO THIS======================
 * @function
 **/
$("#notif").click(function () {
    var check = $("#drawerContents").hasClass("active");

    if (check === false)
        $("#drawerContents").addClass("active");
    else
        $("#drawerContents").removeClass("active");
});


/**
 * Within Categories, 
 * Closes all open cards.
 * 
 * @function
 **/
function closeAllCards() {
    $("#accFCard").removeClass("cardOpen");
    $("#athCard").removeClass("cardOpen");
    $("#accSCard").removeClass("cardOpen");
    $("#campSCard").removeClass("cardOpen");
    $("#resHCard").removeClass("cardOpen");
    $("#diningCard").removeClass("cardOpen");
    $("#stuRCard").removeClass("cardOpen");
}


/**
 * Within Categories - Academic Facilities
 * When blue text is clicked,
 * will close other open cards then
 * building card will slide in (left to right).
 * 
 * Will slide back in if clicked again (BROKEN)
 * =================FIX ME==============================
 * @function
 **/
$("#accFText").click(function () {
    closeAllCards();
    $("#accFiframe").attr("src", "https://www.youtube.com/embed/V4404T_b5No");
    $("#accFCard").toggleClass("cardOpen");
    $("#drawerContents").toggleClass("active");
});


/**
* Within Categories - Academic Facilities
* While card is open click "X" to close card.
* 
* @function
**/
$("#accFClose").click(function () {
    $("#accFCard").toggleClass("cardOpen");
});


/**
 * Within Categories - Athletics
 * When blue text is clicked,
 * will close other open cards then
 * building card will slide in (left to right).
 * 
 * @function
 **/
$("#athText").click(function () {
    closeAllCards();
    $("#athiframe").attr("src", "https://www.youtube.com/embed/EFlUSVWCA-k");
    $("#athCard").toggleClass("cardOpen");
    $("#drawerContents").toggleClass("active");
});


/**
* Within Categories - Athletics
* While card is open click "X" to close card.
* 
* @function
**/
$("#athClose").click(function () {
    $("#athCard").toggleClass("cardOpen");
});


/**
 * Within Categories - Academic Services
 * When blue text is clicked,
 * will close other open cards then
 * building card will slide in (left to right).
 * 
 * @function
 **/
$("#accSText").click(function () {
    closeAllCards();
    $("#accSiframe").attr("src", "https://www.youtube.com/embed/f-KdeyV-_dA");
    $("#accSCard").toggleClass("cardOpen");
    $("#drawerContents").toggleClass("active");
});


/**
* Within Categories - Academic Services
* While card is open click "X" to close card.
**/
$("#accSClose").click(function () {
    $("#accSCard").toggleClass(" cardOpen");
});


/**
 * Within Categories - Campus Services
 * When blue text is clicked,
 * will close other open cards then
 * building card will slide in (left to right).
 * 
 * @function
 **/
$("#campSText").click(function () {
    closeAllCards();
    $("#campSiframe").attr("src", "https://www.youtube.com/embed/6e59ycgCTi4");
    $("#campSCard").toggleClass("cardOpen");
    $("#drawerContents").toggleClass("active");
});


/**
* Within Categories - Campus Services
* While card is open click "X" to close card.
* 
* @function
**/
$("#campSClose").click(function () {
    $("#campSCard").toggleClass("cardOpen");
});


/**
 * Within Categories - Residence Halls
 * When blue text is clicked,
 * will close other open cards then
 * building card will slide in (left to right).
 * 
 * @function
 **/
$("#resHText").click(function () {
    closeAllCards();
    $("#resHiframe").attr("src", "https://www.youtube.com/embed/R5RVenezdgM");
    $("#resHCard").toggleClass("cardOpen");
    $("#drawerContents").toggleClass("active");
});


/**
* Within Categories - Residence Halls
* While card is open click "X" to close card.
* 
* @function
**/
$("#resHClose").click(function () {
    $("#resHCard").toggleClass("cardOpen");
});


/**
 * Within Categories - Dining
 * When blue text is clicked,
 * will close other open cards then
 * building card will slide in (left to right).
 * 
 * @function
 **/
$("#diningText").click(function () {
    closeAllCards();
    $("#diningiframe").attr("src", "https://www.youtube.com/embed/QBXee6U14FQ");
    $("#diningCard").toggleClass("cardOpen");
    $("#drawerContents").toggleClass("active");
});


/**
* Within Categories - Dining
* While card is open click "X" to close card.
* 
* @function
**/
$("#diningClose").click(function () {
    $("#diningCard").toggleClass("cardOpen");
});


/**
 * Within Categories - Student Recreation
 * When blue text is clicked,
 * will close other open cards then
 * building card will slide in (left to right).
 * 
 * @function
 **/
$("#stuRText").click(function () {
    closeAllCards();
    $("#stuRiframe").attr("src", "https://www.youtube.com/embed/Fi7OiNe2TnU");
    $("#stuRCard").toggleClass("cardOpen");
    $("#drawerContents").toggleClass("active");
});


/**
* Within Categories - Student Recreation
* While card is open click "X" to close card.
* 
* @function
**/
$("#stuRClose").click(function () {
    $("#stuRCard").toggleClass("cardOpen");
});


var mobileWidth = 1024;
/**
 * Determine the size of the screen
 * and display either the desktop view
 * or the mobile view.
 * Less than 1025 is considered mobile,
 * else desktop.
 * 
 * @function
 **/
$(window).resize(function () {
    if ($(this).width() > mobileWidth)
        desktop();
    else
        mobile();
});


/**
 * Displays the desktop view. The menu is at a
 * fixed size on the left of the screen. View is 
 * 1025px wide or greater. 
 * 
 * @function
 **/
var desktop = function () {
    $("#menu").addClass("mdl-layout--fixed-drawer");
    $("#menuDrawer").addClass("mdl-layout__drawer");
    $("#mobileSpacer").removeClass("mdl-layout-spacer");
    $("#drawerContents").addClass("mdl-layout--fixed-drawer");
    $("#drawerContents").removeClass("mdl-layout__drawer-right");

    // issue with dynamically changing the css top of
    // drawer contents when the search results come down
    // on web differently than on mobile
    // have to add class and manually reset the "top" otherwise
    // it keeps whatever it was previously when going between mobile and desktop
    $("#drawerContents").addClass("drawerContentsAdjust");
    $("#drawerContents").css("top", "0px");

    // height issue with the tour drop downs
    $("#drawerContents").css("height", "900px");
};


/**
 * Displays the mobile view. The menu is hidden
 * inside the menu bar on the top right of the screen.
 * Menu slides down on right side. View is less than 
 * 1025px.
 * 
 * @function
 **/
var mobile = function () {
    $("#menu").removeClass("mdl-layout--fixed-drawer");
    $("#menuDrawer").removeClass("mdl-layout__drawer");
    $("#mobileSpacer").addClass("mdl-layout-spacer");
    $("#drawerContents").removeClass("mdl-layout");
    $("#drawerContents").removeClass("mdl-layout--fixed-drawer");
    $("#drawerContents").addClass("mdl-layout__drawer-right");
    $("#drawerDivTwo").removeClass("mdl-layout__drawer");

    // search results changing height of menu only needed for desktop
    $("#drawerContents").removeClass("drawerContentsAdjust");
    // need this because otherwise dynamic changes on desktop screw up the menu
    // on mobile and needs to be manually reset this way
    $("#drawerContents").css("top", "70px");
    // height issue with the tour drop downs
    $("#drawerContents").css("height", "auto");

    //on mobile: if the search is being interacted with and there are more than 3 characters typed: only have the 
    // search results visible when the search is being interacted with
    // (people wanted the search to close when they selected something to look at, but then open back up to the search they were doing when they 
    // clicked back on the search line)
    $("#mobileSearch").click(function () {
        var characters = $("#searchInput").val().length;

        if (characters >= 3) {
            if ($("#mobileSearch").hasClass("is-focused") === true)
                $("#searchResults").css("visibility", "visible");
            else
                $("#searchResults").css("visibility", "hidden");
        }
    });
};

/**
 * For mobile,
 * When the mapped is click the menu will auto close.
 * 
 * @function
 **/
$("#map").click(function () {
    $("#drawerContents").removeClass("active");
});


if (window.matchMedia("(min-width: 1025px)").matches)
    desktop();
else
    mobile();