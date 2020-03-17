/**
 * @author Sara Tabitha
 * @version 06/2017
 *
 * @author  Gage Cahoon
 * @version 02/2020 re-write
 *
 * @description Google Map.
 * Marker objects use latitude and longitude to be placed on the map.
 * --When you click on a marker an InfoWindow(aka Hover cards, pop ups) object displays more in depth information.
 *
 * @function initmap initial map on first page load.
 **/
function initMap() {
    // center of map (UWO coordinates)
    const uwo = {lat: 44.025098, lng: -88.554610};
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uwo
    });

    /**
     * All map marker images.
     * Created by Reslife Artists Office.
     **/
    const pinkMarker = "images/markers/pink.png";
    const pinkLot23 = "images/markers/parking/pink_lot23.png";
    const pinkResidentMarker = "images/markers/parking/pink_resident.png";
    const pinkCommuteMarker = "images/markers/parking/pink_commute.png";
    const pinkRemoteMarker = "images/markers/parking/pink_remote.png";
    const pinkRestrictedMarker = "images/markers/parking/pink_restricted.png";
    const pinkStaffMarker = "images/markers/parking/pink_staff.png";
    const pinkVisitorMarker = "images/markers/parking/pink_visitor.png";
    const pinkCommuterMarker = "images/markers/parking/pink_commuter.png";
    const redMarker = "images/markers/red.png";
    const maroonMarker = "images/markers/maroon.png";
    const orangeMarker = "images/markers/orange.png";
    const yellowMarker = "images/markers/yellow.png";
    const greenMarker = "images/markers/green.png";
    const darkgreenMarker = "images/markers/darkgreen.png";
    const tealMarker = "images/markers/teal.png";
    const lightblueMarker = "images/markers/lightblue.png";
    const blueMarker = "images/markers/blue.png";
    const navyMarker = "images/markers/navy.png";
    const lightpurpleMarker = "images/markers/lightpurple.png";
    const darkpurpleMarker = "images/markers/darkpurple.png";
    const brownMarker = "images/markers/brown.png";


    /**
     * Array for all buildings, parking lots, and phones
     *
     * Position: is for placing the marker on the map.
     * Shorthand: is for the HTML element selector. E.g. $("#albee")
     *   --Accessed by allMarkersInfo.shortHand[0]
     * thumbnail: picture for infowindow popup
     *
     * awcc has been renamed to Culver Family Welcome center. It has only be renamed on user side and is still
     * refered to as awcc in these files until code is fully re written to be better maintainable.
     *
     * 0-44 = Buildings
     * 45-82 = Parking Lots
     * 83-110 = Emergency Phones
     * 111 - Fox Cities Campus
     **/
    const allMarkersInfo = [
        // [0] Albee Hall
        {
            position: {
                lat: 44.025729,
                lng: -88.550248
            },
            title: "Albee Hall",
            shortHand: "albee",
            thumbnail: "images/campuspictures/albeehall.jpeg",
            fullImage: "images/campuspictures/albeehallFull.jpeg",
            iFrame: "https://www.youtube.com/embed/AW5cpKVsXWA"
        },
        // [1] Alumni Baseball Stadium
        {
            position: {
                lat: 44.023042,
                lng: -88.561892
            },
            title: "Alumni Baseball Stadium",
            shortHand: "baseball",
            thumbnail: "images/campuspictures/baseball.jpg",
            fullImage: "images/campuspictures/baseballFull.jpg"
        },
        // [2] Alumni Welcome and Conference Center
        {
            position: {
                lat: 44.020528,
                lng: -88.550432
            },
            title: "Culver Family Welcome Center",
            shortHand: "alumni",
            thumbnail: "images/campuspictures/awcc-building.jpg",
            fullImage: "images/campuspictures/awcc-buildingFull.jpg"
        },
        // [3] Arts and Communications
        {
            position: {
                lat: 44.029640,
                lng: -88.552137
            },
            title: "Arts and Communications",
            shortHand: "ac",
            thumbnail: "images/campuspictures/artscommunications.jpeg",
            fullImage: "images/campuspictures/artscommunicationsFull.jpeg"
        },
        // [4] Athletic Service Building
        {
            position: {
                lat: 44.023077,
                lng: -88.561081
            },
            title: "Athletic Service Building",
            shortHand: "athletic",
            thumbnail: "images/campuspictures/athleticservice.jpeg",
            fullImage: "images/campuspictures/athleticserviceFull.jpeg"
        },
        // [5] Blackhawk Commons
        {
            position: {
                lat: 44.023591,
                lng: -88.549157
            },
            title: "Blackhawk Commons",
            shortHand: "blackhawk",
            thumbnail: "images/campuspictures/blackhawk.jpeg",
            fullImage: "images/campuspictures/blackhawkFull.jpeg",
            diningImage: "images/campuspictures/blackhawkGif.gif"
        },
        // [6] Biodigester
        {
            position: {
                lat: 44.018897,
                lng: -88.558015
            },
            title: "Biodigester",
            shortHand: "biodigester",
            thumbnail: "images/campuspictures/biodigester.jpg",
            fullImage: "images/campuspictures/biodigesterFull.jpg"
        },
        // [7] Buckstaff Planetarium
        {
            position: {
                lat: 44.028428,
                lng: -88.551581
            },
            title: "Buckstaff Planetarium",
            shortHand: "buckstaff",
            thumbnail: "images/campuspictures/buckstaff.jpeg",
            fullImage: "images/campuspictures/buckstaffFull.jpeg"
        },
        // [8] Campus Center for Equity and Diversity
        {
            position: {
                lat: 44.024655,
                lng: -88.547217
            },
            title: "Campus Center for Equity and Diversity",
            shortHand: "equity",
            thumbnail: "images/campuspictures/centerforequity.jpeg",
            fullImage: "images/campuspictures/centerforequityFull.jpeg"
        },
        // [9] Campus Services
        {
            position: {
                lat: 44.017782,
                lng: -88.556446
            },
            title: "Campus Services",
            shortHand: "campus",
            thumbnail: "images/campuspictures/campus-services.jpg",
            fullImage: "images/campuspictures/campus-servicesFull.jpg"
        },
        // [10] Ceramics Laboratory
        {
            position: {
                lat: 44.025559,
                lng: -88.555515
            },
            title: "Ceramics Laboratory",
            shortHand: "ceramics",
            thumbnail: "images/campuspictures/ceramicslab.jpeg",
            fullImage: "images/campuspictures/ceramicslabFull.jpeg"
        },
        // [11] Clow Social Sciences Center
        {
            position: {
                lat: 44.026306,
                lng: -88.552268
            },
            title: "Clow Social Sciences Center",
            shortHand: "clow",
            thumbnail: "images/campuspictures/clow.jpeg",
            fullImage: "images/campuspictures/clowFull.jpeg",
            diningImage: "images/campuspictures/clowGif.gif"
        },
        // [12] Community Gardens
        {
            position: {
                lat: 44.015573,
                lng: -88.555929
            },
            title: "Community Gardens",
            shortHand: "gardens",
            thumbnail: "images/campuspictures/community-gardens.jpg",
            fullImage: "images/campuspictures/community-gardensFull.jpg"
        },
        // [13] Dempsey Hall
        {
            position: {
                lat: 44.026603,
                lng: -88.550707
            },
            title: "Dempsey Hall",
            shortHand: "dempsey",
            thumbnail: "images/campuspictures/dempsey.jpeg",
            fullImage: "images/campuspictures/dempseyFull.jpeg"
        },
        // [14] Donner Hall
        {
            position: {
                lat: 44.025420,
                lng: -88.552287
            },
            title: "Donner Hall",
            shortHand: "donner",
            thumbnail: "images/campuspictures/donner.jpeg",
            fullImage: "images/campuspictures/donnerFull.jpeg"
        },
        // [15] East Hall
        {
            position: {
                lat: 44.031217,
                lng: -88.543806
            },
            title: "East Hall",
            shortHand: "east",
            thumbnail: "images/campuspictures/easthall.jpg",
            fullImage: "images/campuspictures/easthallFull.jpg"
        },
        // [16] Environmental Science and Research Center
        {
            position: {
                lat: 44.023518,
                lng: -88.553851
            },
            title: "Environmental Science and Research Center",
            shortHand: "environmental",
            thumbnail: "images/campuspictures/aquaticstudiescenter.jpeg",
            fullImage: "images/campuspictures/aquaticstudiescenterFull.jpeg"
        },
        // [17] Evans Hall
        {
            position: {
                lat: 44.026168,
                lng: -88.547397
            },
            title: "Evans Hall",
            shortHand: "evans",
            thumbnail: "images/campuspictures/evans.jpeg",
            fullImage: "images/campuspictures/evansFull.jpeg"
        },
        // [18] Fletcher Hall
        {
            position: {
                lat: 44.025332,
                lng: -88.547240
            },
            title: "Fletcher Hall",
            shortHand: "fletcher",
            thumbnail: "images/campuspictures/fletcher.jpeg",
            fullImage: "images/campuspictures/fletcherFull.jpeg"
        },
        // [19] Fredric March Theater
        {
            position: {
                lat: 44.029000,
                lng: -88.552919
            },
            title: "Fredric March Theater",
            shortHand: "fredric",
            thumbnail: "images/campuspictures/fredricmarch.jpeg",
            fullImage: "images/campuspictures/fredricmarchFull.jpeg"
        },
        // [20] Gruenhagen Conference Center
        {
            position: {
                lat: 44.022405,
                lng: -88.548824
            },
            title: "Gruenhagen Conference Center",
            shortHand: "gruenhagen",
            thumbnail: "images/campuspictures/gruenhagen.jpeg",
            fullImage: "images/campuspictures/gruenhagenFull.jpeg"
        },
        // [21] Halsey Science Center
        {
            position: {
                lat: 44.028497,
                lng: -88.551027
            },
            title: "Halsey Science Center",
            shortHand: "halsey",
            thumbnail: "images/campuspictures/halsey.jpeg",
            fullImage: "images/campuspictures/halseyFull.jpeg",
            diningImage: "images/campuspictures/halseyGif.gif"
        },
        // [22] Harrington Hall
        {
            position: {
                lat: 44.027736,
                lng: -88.550172
            },
            title: "Harrington Hall",
            shortHand: "harrington",
            thumbnail: "images/campuspictures/harrington.jpeg",
            fullImage: "images/campuspictures/harringtonFull.jpeg"
        },
        // [23] Heating Plant
        {
            position: {
                lat: 44.028235,
                lng: -88.554312
            },
            title: "Heating Plant",
            shortHand: "heating",
            thumbnail: "images/campuspictures/heatingplant.jpeg",
            fullImage: "images/campuspictures/heatingplantFull.jpeg"
        },
        // [23] High Avenue Parking Ramp
        {
            position: {
                lat: 44.022960,
                lng: -88.549791
            },
            title: "High Avenue Parking Ramp",
            shortHand: "parkingRamp",
            thumbnail: "images/campuspictures/parkingramp.jpeg",
            fullImage: "images/campuspictures/parkingrampFull.jpeg",
            parkingImage: "images/campuspictures/parkingRamp.png"
        },
        // [25] Horizon Village
        {
            position: {
                lat: 44.024363,
                lng: -88.547972
            },
            title: "Horizon Village",
            shortHand: "horizon",
            thumbnail: "images/campuspictures/horizon.jpeg",
            fullImage: "images/campuspictures/horizonFull.jpeg"
        },
        // [26] Kolf Sports Center
        {
            position: {
                lat: 44.024323,
                lng: -88.552214
            },
            title: "Kolf Sports Center",
            shortHand: "kolf",
            thumbnail: "images/campuspictures/kolf.jpeg",
            fullImage: "images/campuspictures/kolfFull.jpeg"
        },
        // [27] Lincoln Hall
        {
            position: {
                lat: 44.023204,
                lng: -88.546359
            },
            title: "Lincoln Hall",
            shortHand: "lincoln",
            thumbnail: "images/campuspictures/lincoln-hall.jpg",
            fullImage: "images/campuspictures/lincoln-hallFull.jpg"
        },
        // [28] Multicultural Education Center
        {
            position: {
                lat: 44.024842,
                lng: -88.550613
            },
            title: "Multicultural Education Center",
            shortHand: "multicultural",
            thumbnail: "images/campuspictures/multiculturaleducation.jpeg",
            fullImage: "images/campuspictures/multiculturaleducationFull.jpeg"
        },
        // [29] Nursing and Education Building
        {
            position: {
                lat: 44.027051,
                lng: -88.552813
            },
            title: "Nursing and Education Building",
            shortHand: "nursing",
            thumbnail: "images/campuspictures/nursingeducation.jpeg",
            fullImage: "images/campuspictures/nursingeducationFull.jpeg"
        },
        // [30] Oviatt House
        {
            position: {
                lat: 44.027156,
                lng: -88.551466
            },
            title: "Oviatt House",
            shortHand: "oviatt",
            thumbnail: "images/campuspictures/oviatt.jpeg",
            fullImage: "images/campuspictures/oviattFull.jpeg"
        },
        // [31] Pollock House
        {
            position: {
                lat: 44.025227,
                lng: -88.551292
            },
            title: "Pollock House",
            shortHand: "pollock",
            thumbnail: "images/campuspictures/pollock.jpeg",
            fullImage: "images/campuspictures/pollockFull.jpeg"
        },
        // [32] Polk Library
        {
            position: {
                lat: 44.026379,
                lng: -88.549602
            },
            title: "Polk Library",
            shortHand: "polk",
            thumbnail: "images/campuspictures/polk.jpeg",
            fullImage: "images/campuspictures/polkFull.jpeg",
            iFrame: "https://www.youtube.com/embed/iHPdc89AD_c"
        },
        // [33] Radford Hall and Student Health Center
        {
            position: {
                lat: 44.025671,
                lng: -88.551561
            },
            title: "Radford Hall and Student Health Center",
            shortHand: "radford",
            thumbnail: "images/campuspictures/radford.jpeg",
            fullImage: "images/campuspictures/radfordFull.jpeg"
        },
        // [34] Reeve Memorial Union
        {
            position: {
                lat: 44.024934,
                lng: -88.549448
            },
            title: "Reeve Memorial Union",
            shortHand: "reeve",
            thumbnail: "images/campuspictures/reeve.jpeg",
            fullImage: "images/campuspictures/reeveFull.jpeg",
            iFrame: "https://www.youtube.com/embed/QAtW972K3cQ",
            diningImage: "images/campuspictures/reeveGif.gif"
        },
        // [35] Sage Hall
        {
            position: {
                lat: 44.025720,
                lng: -88.553770
            },
            title: "Sage Hall",
            shortHand: "sage",
            thumbnail: "images/campuspictures/sage.jpeg",
            fullImage: "images/campuspictures/sageFull.jpeg",
            iFrame: "https://www.youtube.com/embed/DVRbh2fCCZ0",
            diningImage: "images/campuspictures/sageGif.gif"
        },
        // [36] Scott Hall
        {
            position: {
                lat: 44.022556,
                lng: -88.547344
            },
            title: "Scott Hall",
            shortHand: "scott",
            thumbnail: "images/campuspictures/scott.jpeg",
            fullImage: "images/campuspictures/scottFull.jpeg",
            diningImage: "images/campuspictures/scottGif.gif"
        },
        // [37] Stewart Hall
        {
            position: {
                lat: 44.026060,
                lng: -88.546952
            },
            title: "Stewart Hall",
            shortHand: "stewart",
            thumbnail: "images/campuspictures/stewart.jpeg",
            fullImage: "images/campuspictures/stewartFull.jpeg"
        },
        // [38] Student Recreation and Wellness Center
        {
            position: {
                lat: 44.021752,
                lng: -88.551694
            },
            title: "Student Recreation and Wellness Center",
            shortHand: "recreation",
            thumbnail: "images/campuspictures/srwc.jpeg",
            fullImage: "images/campuspictures/srwcFull.jpeg"
        },
        // [39] Student Success Center
        {
            position: {
                lat: 44.026205,
                lng: -88.548163
            },
            title: "Student Success Center",
            shortHand: "success",
            thumbnail: "images/campuspictures/studentsuccess.jpeg",
            fullImage: "images/campuspictures/studentsuccessFull.jpeg",
            iFrame: "https://www.youtube.com/embed/NjZjuqM7SBg"
        },
        // [40] Swart Hall
        {
            position: {
                lat: 44.027872,
                lng: -88.551962
            },
            title: "Swart Hall",
            shortHand: "swart",
            thumbnail: "images/campuspictures/swart.jpeg",
            fullImage: "images/campuspictures/swartFull.jpeg"
        },
        // [41] Taylor Hall
        {
            position: {
                lat: 44.024577,
                lng: -88.551215
            },
            title: "Taylor Hall",
            shortHand: "taylor",
            thumbnail: "images/campuspictures/taylor.jpeg",
            fullImage: "images/campuspictures/taylorFull.jpeg"
        },
        // [42] Titan Stadium
        {
            position: {
                lat: 44.023671,
                lng: -88.562917
            },
            title: "Titan Stadium",
            shortHand: "titan",
            thumbnail: "images/campuspictures/titanstadium.jpeg",
            fullImage: "images/campuspictures/titanstadiumFull.jpeg"
        },
        // [43] University Police
        {
            position: {
                lat: 44.023763,
                lng: -88.549972
            },
            title: "University Police",
            shortHand: "police",
            thumbnail: "images/campuspictures/universitypolice.jpeg",
            fullImage: "images/campuspictures/universitypoliceFull.jpeg"
        },
        // [44] Webster Hall
        {
            position: {
                lat: 44.025002,
                lng: -88.551681
            },
            title: "Webster Hall",
            shortHand: "webster",
            thumbnail: "images/campuspictures/webster.jpeg",
            fullImage: "images/campuspictures/websterFull.jpeg"
        },

        /**
         * Parking Lots
         **/
        // [45] Lot 11
        {
            position: {
                lat: 44.030449,
                lng: -88.552415
            },
            title: "Lot 11",
            shortHand: "eleven"
        },
        // [46] Lot 35
        {
            position: {
                lat: 44.029428,
                lng: -88.558183
            },
            title: "Lot 35",
            shortHand: "thirtyfive"
        },
        // [47] Lot 27
        {
            position: {
                lat: 44.029026,
                lng: -88.554960
            },
            title: "Lot 27",
            shortHand: "twentyseven"
        },
        // [48] Lot 21
        {
            position: {
                lat: 44.029123,
                lng: -88.553173
            },
            title: "Lot 21",
            shortHand: "twentyone"
        },
        // [49] Lot 26
        {
            position: {
                lat: 44.029838,
                lng: -88.551684
            },
            title: "Lot 26",
            shortHand: "twentysix"
        },
        // [50] Lot 4
        {
            position: {
                lat: 44.029100,
                lng: -88.551581
            },
            title: "Lot 4",
            shortHand: "four"
        },
        // [51] Lot 4a
        {
            position: {
                lat: 44.028586,
                lng: -88.552649
            },
            title: "Lot 4a",
            shortHand: "foura"
        },
        // [52] Lot 16
        {
            position: {
                lat: 44.028822,
                lng: -88.550956
            },
            title: "Lot 16",
            shortHand: "sixteen"
        },
        // [53] Lot 17
        {
            position: {
                lat: 44.028648,
                lng: -88.549711
            },
            title: "Lot 17",
            shortHand: "seventeen"
        },
        // [54] Lot 29
        {
            position: {
                lat: 44.027825,
                lng: -88.553434
            },
            title: "Lot 29",
            shortHand: "twentynine"
        },
        // [55] Lot 25
        {
            position: {
                lat: 44.027233,
                lng: -88.553602
            },
            title: "Lot 25",
            shortHand: "twentyfive"
        },
        // [56] Lot 8
        {
            position: {
                lat: 44.026371,
                lng: -88.554322
            },
            title: "Lot 8",
            shortHand: "eight"
        },
        // [57] Lot 33
        {
            position: {
                lat: 44.025668,
                lng: -88.555558
            },
            title: "Lot 33",
            shortHand: "thirtythree"
        },
        // [58] Lot 34
        {
            position: {
                lat: 44.027133,
                lng: -88.548009
            },
            title: "Lot 34",
            shortHand: "thirtyfour"
        },
        // [59] Lot 28
        {
            position: {
                lat: 44.025858,
                lng: -88.548893
            },
            title: "Lot 28",
            shortHand: "twentyeight"
        },
        // [60] Lot 23
        {
            position: {
                lat: 44.025511,
                lng: -88.546748
            },
            title: "Lot 23",
            shortHand: "twentythree"
        },
        // [61] Lot 14a
        {
            position: {
                lat: 44.025828,
                lng: -88.552416
            },
            title: "Lot 14a",
            shortHand: "fourteena"
        },
        // [62] Lot 14b
        {
            position: {
                lat: 44.025673,
                lng: -88.551929
            },
            title: "Lot 14b",
            shortHand: "fourteenb"
        },
        // [63] Lot 14c
        {
            position: {
                lat: 44.025302,
                lng: -88.551711
            },
            title: "Lot 14c",
            shortHand: "fourteenc"
        },
        // [64] Lot 7
        {
            position: {
                lat: 44.025023,
                lng: -88.553519
            },
            title: "Lot 7",
            shortHand: "seven"
        },
        // [65] Lot 5a
        {
            position: {
                lat: 44.024150,
                lng: -88.554291
            },
            title: "Lot 5a",
            shortHand: "fivea"
        },
        // [66] Lot 5
        {
            position: {
                lat: 44.023717,
                lng: -88.553693
            },
            title: "Lot 5",
            shortHand: "five"
        },
        // [67] Lot 7a
        {
            position: {
                lat: 44.023897,
                lng: -88.552670
            },
            title: "Lot 7a",
            shortHand: "sevena"
        },
        // [68] Lot 15
        {
            position: {
                lat: 44.024142,
                lng: -88.549694
            },
            title: "Lot 15",
            shortHand: "fifteen"
        },
        // [69] Lot 32
        {
            position: {
                lat: 44.023912,
                lng: -88.550031
            },
            title: "Lot 32",
            shortHand: "thirtytwo"
        },
        // [70] Lot 13
        {
            position: {
                lat: 44.023505,
                lng: -88.551579
            },
            title: "Lot 13",
            shortHand: "thirteen"
        },
        // [71] Lot 12
        {
            position: {
                lat: 44.022135,
                lng: -88.551702
            },
            title: "Lot 12",
            shortHand: "twelve"
        },
        // [72] Lot 6a
        {
            position: {
                lat: 44.021216,
                lng: -88.551093
            },
            title: "Lot 6a",
            shortHand: "sixa"
        },
        // [73] Lot 6
        {
            position: {
                lat: 44.020887,
                lng: -88.549848
            },
            title: "Lot 6",
            shortHand: "six"
        },
        // [74] Lot 10
        {
            position: {
                lat: 44.021857,
                lng: -88.548831
            },
            title: "Lot 10",
            shortHand: "ten"
        },
        // [75] Lot 9a
        {
            position: {
                lat: 44.022435,
                lng: -88.548564
            },
            title: "Lot 9a",
            shortHand: "ninea"
        },
        // [76] Lot 9
        {
            position: {
                lat: 44.021955,
                lng: -88.548167
            },
            title: "Lot 9",
            shortHand: "nine"
        },
        // [77] Lot 18
        {
            position: {
                lat: 44.022368,
                lng: -88.546827
            },
            title: "Lot 18",
            shortHand: "eighteen"
        },
        // [78] Lot 30
        {
            position: {
                lat: 44.021440,
                lng: -88.547947
            },
            title: "Lot 30",
            shortHand: "thirty"
        },
        // [79] Lot 39
        {
            position: {
                lat: 44.018367,
                lng: -88.556821
            },
            title: "Lot 39",
            shortHand: "thirtynine"
        },
        //[80] womens center lot
        {
            position: {
                lat: 44.024816,
                lng: -88.546638
            },
            title: "Women's Center",
            shortHand: "womensCenter"
        },
        //[81] titan one lot
        {
            position: {
                lat: 44.024401,
                lng: -88.564253
            },
            title: "Titan One",
            shortHand: "titanOne"
        },
        //[82] titan two lot
        {
            position: {
                lat: 44.023007,
                lng: -88.564339
            },
            title: "Titan Two",
            shortHand: "titanTwo"
        },

        /**
         * Emergency Phones
         **/
        //[83] phonezero
        {
            position: {
                lat: 44.029568,
                lng: -88.557150
            },
            title: "Emergency Phone"
        },
        //[84] phoneone
        {
            position: {
                lat: 44.029075,
                lng: -88.558184
            },
            title: "Emergency Phone"
        },
        //[85] phonetwo
        {
            position: {
                lat: 44.028831,
                lng: -88.555125
            },
            title: "Emergency Phone"
        },
        //[86] phonethree
        {
            position: {
                lat: 44.028514,
                lng: -88.554386
            },
            title: "Emergency Phone"
        },
        //[87] phonefour
        {
            position: {
                lat: 44.029626,
                lng: -88.552936
            },
            title: "Emergency Phone"
        },
        //[88] phonefive
        {
            position: {
                lat: 44.028456,
                lng: -88.551907
            },
            title: "Emergency Phone"
        },
        //[89] phonesix
        {
            position: {
                lat: 44.027457,
                lng: -88.553422
            },
            title: "Emergency Phone"
        },
        //[90] phoneseven
        {
            position: {
                lat: 44.028501,
                lng: -88.549911
            },
            title: "Emergency Phone"
        },
        //[91] phoneeight
        {
            position: {
                lat: 44.025255,
                lng: -88.555618
            },
            title: "Emergency Phone"
        },
        //[92] phonenine
        {
            position: {
                lat: 44.026028,
                lng: -88.552211
            },
            title: "Emergency Phone"
        },
        //[93] phoneten
        {
            position: {
                lat: 44.026556,
                lng: -88.550250
            },
            title: "Emergency Phone"
        },
        //[94] phoneeleven
        {
            position: {
                lat: 44.026670,
                lng: -88.547795
            },
            title: "Emergency Phone"
        },
        //[95] phonetwelve
        {
            position: {
                lat: 44.025771,
                lng: -88.547412
            },
            title: "Emergency Phone"
        },
        //[96] phonethirteen
        {
            position: {
                lat: 44.024777,
                lng: -88.546711
            },
            title: "Emergency Phone"
        },
        //[97] phonefourteen
        {
            position: {
                lat: 44.024921,
                lng: -88.548533
            },
            title: "Emergency Phone"
        },
        //[98] phonefifteen
        {
            position: {
                lat: 44.024921,
                lng: -88.548533
            },
            title: "Emergency Phone"
        },
        //[99] phonesixteen
        {
            position: {
                lat: 44.023941,
                lng: -88.554160
            },
            title: "Emergency Phone"
        },
        //[100] phoneseventeen
        {
            position: {
                lat: 44.023489,
                lng: -88.553277
            },
            title: "Emergency Phone"
        },
        //[101] phoneeighteen
        {
            position: {
                lat: 44.022102,
                lng: -88.552487
            },
            title: "Emergency Phone"
        },
        //[102] phonenineteen
        {
            position: {
                lat: 44.023313,
                lng: -88.551255
            },
            title: "Emergency Phone"
        },
        //[103] phonetwenty
        {
            position: {
                lat: 44.024791,
                lng: -88.551402
            },
            title: "Emergency Phone"
        },
        //[104] phonetwentyone
        {
            position: {
                lat: 44.024395,
                lng: -88.550325
            },
            title: "Emergency Phone"
        },
        //[105] phonetwentytwo
        {
            position: {
                lat: 44.023321,
                lng: -88.548516
            },
            title: "Emergency Phone"
        },
        //[106] phonetwentythree
        {
            position: {
                lat: 44.021428,
                lng: -88.550672
            },
            title: "Emergency Phone"
        },
        //[107] phonetwentyfour
        {
            position: {
                lat: 44.021057,
                lng: -88.551801
            },
            title: "Emergency Phone"
        },
        //[108] phonetwentyfive
        {
            position: {
                lat: 44.021727,
                lng: -88.548169
            },
            title: "Emergency Phone"
        },
        //[109] phonetwentysix
        {
            position: {
                lat: 44.022676,
                lng: -88.546843
            },
            title: "Emergency Phone"
        },
        //[110] phonetwentyseven
        {
            position: {
                lat: 44.018830,
                lng: -88.556802
            },
            title: "Emergency Phone"
        },
        // [111] Fox City Campus
        {
            position: {
                lat: 44.231352,
                lng: -88.415762
            },
            title: "UW-Oshkosh at Fox Cities",
            shortHand: "foxcity",
            thumbnail: "",
            fullImage: ""
        }
    ];

    /**
     * Array to store all building marker objects made with "new google.maps.Marker".
     * Uses the data from allMarkersInfo array.
     **/
    const allMarkers = [];
    for (let i = 0, len = allMarkersInfo.length; i < len; i++) {
        allMarkers[i] = new google.maps.Marker({
            position: allMarkersInfo[i].position,
            title: allMarkersInfo[i].title
        });
    }


    /**
     * Adds infowindows for the building markers with "new google.maps.InfoWindow".
     *
     * There are no infowindows for emergency phones numbered [83-110]
     **/
    const infowindows = 83;
    const infoWindowsAll = [];
    for (let i = 0; i < infowindows; i++) {
        infoWindowsAll[i] = new google.maps.InfoWindow({
            content: document.getElementById(allMarkersInfo[i].shortHand + "Hover"),
        });
    }
    // fox cities
    infoWindowsAll[111] = new google.maps.InfoWindow({
        content: document.getElementById(allMarkersInfo[111].shortHand + "Hover"), });

    //example of original code that might be useful for understanding what is happening throughout
    //sets marker on the map:
    // allMarkers[0].setMap(map);
    //sets the png image for the marker (if no icon is set it defaults to the google red marker):
    // allMarkers[0].setIcon(yellowMarker);
    //adds click event listener to the object (and will change icon color when clicked):
    // allMarkers[0].addListener('click', function(){
    //     allMarkers[0].setIcon(redMarker);
    // });

    const buildingNumbers = 45;
    /**
     * Sets all markers for the map
     * --Building markers are yellow
     * --Building markers are numbered in the array [0-45]
     *
     * @function
     **/
    function setBuilding() {
        for (let i = 0; i < buildingNumbers; i++) {
            allMarkers[i].setMap(map);
            allMarkers[i].setIcon(yellowMarker);
        }
        //Fox cities campus
        allMarkers[111].setMap(map);
        allMarkers[111].setIcon(yellowMarker);

    }


    /**
     * Remove all buildings from the map
     *
     * @function
     **/
    function removeBuilding() {
        for (let i = 0; i < buildingNumbers; i++) {
            allMarkers[i].setMap(null);
        }
        //fox cities campus
        allMarkers[111].setMap(null);
    }


    const plNumEnd = 83;
    /**
     * Set parking lot markers
     *
     * Parking lots numbers [45-83]
     * @function
     **/
    function setParkingLots() {
        //For the one parking ramp (High Avenue).
        allMarkers[24].setMap(map);
        allMarkers[24].setIcon(pinkMarker);
        for (let plNums = 45; plNums < plNumEnd; plNums++) {
            allMarkers[plNums].setMap(map);
        }
        /**
         * Add specific parking lot types.
         * Staff: [45, 55, 61-63]
         * Remote: [46, 79]
         * Commute: [47, 53-54, 56-58, 64, 67, 70, 72-73]
         * Resident: [65, 77-78]
         * Restricted: [48-49, 52, 59, 66, 69, 71, 74-76, 80]
         **/
        //11
        allMarkers[45].setIcon(pinkStaffMarker);
        //25
        allMarkers[55].setIcon(pinkStaffMarker);
        //14a
        allMarkers[61].setIcon(pinkStaffMarker);
        //14b
        allMarkers[62].setIcon(pinkStaffMarker);
        //14c
        allMarkers[63].setIcon(pinkStaffMarker);
        //35
        allMarkers[46].setIcon(pinkRemoteMarker);
        //39
        allMarkers[79].setIcon(pinkRemoteMarker);
        //27
        allMarkers[47].setIcon(pinkCommuteMarker);
        //17
        allMarkers[53].setIcon(pinkCommuteMarker);
        //29
        allMarkers[54].setIcon(pinkCommuterMarker);
        //8
        allMarkers[56].setIcon(pinkCommuteMarker);
        //33
        allMarkers[57].setIcon(pinkCommuteMarker);
        //34
        allMarkers[58].setIcon(pinkCommuteMarker);
        //7
        allMarkers[64].setIcon(pinkCommuteMarker);
        //7a
        allMarkers[67].setIcon(pinkCommuteMarker);
        //13
        allMarkers[70].setIcon(pinkCommuteMarker);
        //6a
        allMarkers[72].setIcon(pinkCommuteMarker);
        //6
        allMarkers[73].setIcon(pinkCommuteMarker);
        //23
        allMarkers[60].setIcon(pinkLot23);
        //5a
        allMarkers[65].setIcon(pinkResidentMarker);
        //18
        allMarkers[77].setIcon(pinkResidentMarker);
        //30
        allMarkers[78].setIcon(pinkResidentMarker);
        //21
        allMarkers[48].setIcon(pinkRestrictedMarker);
        //26
        allMarkers[49].setIcon(pinkRestrictedMarker);
        //16
        allMarkers[52].setIcon(pinkRestrictedMarker);
        //28
        allMarkers[59].setIcon(pinkRestrictedMarker);
        //5
        allMarkers[66].setIcon(pinkRestrictedMarker);
        //32
        allMarkers[69].setIcon(pinkRestrictedMarker);
        //12
        allMarkers[71].setIcon(pinkRestrictedMarker);
        //10
        allMarkers[74].setIcon(pinkRestrictedMarker);
        //9a
        allMarkers[75].setIcon(pinkRestrictedMarker);
        //9
        allMarkers[76].setIcon(pinkRestrictedMarker);
        //womensCenter
        allMarkers[80].setIcon(pinkRestrictedMarker);
        //15
        allMarkers[68].setIcon(pinkVisitorMarker);
        //titanone
        allMarkers[81].setIcon(pinkMarker);
        //titantwo
        allMarkers[82].setIcon(pinkMarker);
        //4
        allMarkers[50].setIcon(pinkMarker);
        //4a
        allMarkers[51].setIcon(pinkMarker);

    }


    /**
     * Remove the parking lot markers
     *
     * Parking lots numbers [45-83]
     * @function
     **/
    function removeParkingLots() {
        //For the one parking ramp (High Avenue).
        allMarkers[24].setMap(null);
        for (let plNums = 45; plNums < plNumEnd; plNums++) {
            allMarkers[plNums].setMap(null);
        }
    }


    /**
     * Set accessible entries (buildings) to map with a marker.
     **/
    function setAccEnt() {
        //accEnt buildings: albee, ac, blackhawk, equity, clow, dempsey, donner, kolf, nursing, scott, stewart, webster
        //fletcher, fredric, gruenhagen, halsey, harrington, polk, radford, reeve, success, swart, taylor
        allMarkers[0].setMap(map);
        allMarkers[3].setMap(map);
        allMarkers[5].setMap(map);
        allMarkers[8].setMap(map);
        allMarkers[11].setMap(map);
        allMarkers[13].setMap(map);
        allMarkers[14].setMap(map);
        allMarkers[26].setMap(map);
        allMarkers[29].setMap(map);
        allMarkers[36].setMap(map);
        allMarkers[37].setMap(map);
        allMarkers[44].setMap(map);
        allMarkers[0].setIcon(redMarker);
        allMarkers[3].setIcon(redMarker);
        allMarkers[5].setIcon(redMarker);
        allMarkers[8].setIcon(redMarker);
        allMarkers[11].setIcon(redMarker);
        allMarkers[13].setIcon(redMarker);
        allMarkers[14].setIcon(redMarker);
        allMarkers[26].setIcon(redMarker);
        allMarkers[29].setIcon(redMarker);
        allMarkers[36].setIcon(redMarker);
        allMarkers[37].setIcon(redMarker);
        allMarkers[44].setIcon(redMarker);
        //18-22
        for (var g = 18; g < 23; g++) {
            allMarkers[g].setMap(map);
            allMarkers[g].setIcon(redMarker);
        }
        //32-34
        for (var h = 32; h < 35; h++) {
            allMarkers[h].setMap(map);
            allMarkers[h].setIcon(redMarker);
        }
        //39-41
        for (var i = 39; i < 42; i++) {
            allMarkers[i].setMap(map);
            allMarkers[i].setIcon(redMarker);
        }
    }
    function removeAccEnt() {
        //accEnt buildings: albee, ac, blackhawk, equity, clow, dempsey, donner, kolf, nursing, scott, stewart, webster
        //fletcher, fredric, gruenhagen, halsey, harrington, polk, radford, reeve, success, swart, taylor
        allMarkers[0].setMap(null);
        allMarkers[3].setMap(null);
        allMarkers[5].setMap(null);
        allMarkers[8].setMap(null);
        allMarkers[11].setMap(null);
        allMarkers[13].setMap(null);
        allMarkers[14].setMap(null);
        allMarkers[26].setMap(null);
        allMarkers[29].setMap(null);
        allMarkers[36].setMap(null);
        allMarkers[37].setMap(null);
        allMarkers[44].setMap(null);
        //18-22
        for (var j = 18; j < 23; j++) {
            allMarkers[j].setMap(null);
        }
        //32-34
        for (var k = 32; k < 35; k++) {
            allMarkers[k].setMap(null);
        }
        //39-41
        for (var l = 39; l < 42; l++) {
            allMarkers[l].setMap(null);
        }
    }
    // accessible parking set markers
    function setAccPar() {
        //accPar Lots: 11, 4, 4a, 16, 17, 29, 25, 33, 14, 7a, 13, 34, 28, 23, womens center parking, 
        //15, 32, parking ramp, 10, 12, 6a, 6, 18, titanOne, titanTwo
        allMarkers[24].setMap(map);
        allMarkers[45].setMap(map);
        allMarkers[77].setMap(map);
        allMarkers[24].setIcon(tealMarker);
        allMarkers[45].setIcon(tealMarker);
        allMarkers[77].setIcon(tealMarker);
        //50-55
        for (var m = 50; m < 56; m++) {
            allMarkers[m].setMap(map);
            allMarkers[m].setIcon(tealMarker);
        }
        //57-61
        for (var n = 57; n < 62; n++) {
            allMarkers[n].setMap(map);
            allMarkers[n].setIcon(tealMarker);
        }
        //67-74
        for (var o = 67; o < 75; o++) {
            allMarkers[o].setMap(map);
            allMarkers[o].setIcon(tealMarker);
        }
        //80-82
        for (var p = 80; p < 83; p++) {
            allMarkers[p].setMap(map);
            allMarkers[p].setIcon(tealMarker);
        }
    }
    // remove accessible parking markers
    function removeAccPar() {
        //accPar Lots: 11, 4, 4a, 16, 17, 29, 25, 33, 14, 7a, 13, 34, 28, 23, womens center parking, 
        //15, 32, parking ramp, 10, 12, 6a, 6, 18, titanOne, titanTwo
        allMarkers[24].setMap(null);
        allMarkers[45].setMap(null);
        allMarkers[77].setMap(null);
        //50-55
        for (var q = 50; q < 56; q++) {
            allMarkers[q].setMap(null);
        }
        //57-61
        for (var r = 57; r < 62; r++) {
            allMarkers[r].setMap(null);
        }
        //67-74
        for (var s = 67; s < 75; s++) {
            allMarkers[s].setMap(null);
        }
        //80-82
        for (var t = 80; t < 83; t++) {
            allMarkers[t].setMap(null);
        }
    }



    // function for setting emergency phone markers
    function setEmergencyPhones() {
        //83-110 
        for (var u = 83; u < 111; u++) {
            allMarkers[u].setMap(map);
            allMarkers[u].setIcon(blueMarker);
        }
    }
    // function for removing emergency phone markers
    function removeEmergencyPhones() {
        //83-110 
        for (var v = 83; v < 111; v++) {
            allMarkers[v].setMap(null);
        }
    }
    // setting sustainability markers
    function setSust() {
        //sust buildings: albee, alumni, blackhawk, biodigester, heating, horizon, reeve, sage, recreation
        //success, taylor, titanStadium
        allMarkers[0].setMap(map);
        allMarkers[2].setMap(map);
        allMarkers[5].setMap(map);
        allMarkers[6].setMap(map);
        allMarkers[23].setMap(map);
        allMarkers[25].setMap(map);
        allMarkers[34].setMap(map);
        allMarkers[35].setMap(map);
        allMarkers[38].setMap(map);
        allMarkers[39].setMap(map);
        allMarkers[41].setMap(map);
        allMarkers[42].setMap(map);
        allMarkers[0].setIcon(greenMarker);
        allMarkers[2].setIcon(greenMarker);
        allMarkers[5].setIcon(greenMarker);
        allMarkers[6].setIcon(greenMarker);
        allMarkers[23].setIcon(greenMarker);
        allMarkers[25].setIcon(greenMarker);
        allMarkers[34].setIcon(greenMarker);
        allMarkers[35].setIcon(greenMarker);
        allMarkers[38].setIcon(greenMarker);
        allMarkers[39].setIcon(greenMarker);
        allMarkers[41].setIcon(greenMarker);
        allMarkers[42].setIcon(greenMarker);

    }
    // remove sustainability markers
    function removeSust() {
        //sust buildings: albee, alumni, blackhawk, biodigester, heating, horizon, reeve, sage, recreation
        //success, taylor, titanStadium
        allMarkers[0].setMap(null);
        allMarkers[2].setMap(null);
        allMarkers[5].setMap(null);
        allMarkers[6].setMap(null);
        allMarkers[23].setMap(null);
        allMarkers[25].setMap(null);
        allMarkers[34].setMap(null);
        allMarkers[35].setMap(null);
        allMarkers[38].setMap(null);
        allMarkers[39].setMap(null);
        allMarkers[41].setMap(null);
        allMarkers[42].setMap(null);
    }


    // setting gender markers
    function setGender() {
        //gender buildings: ac, blackhawk, campus, dempsey, halsey, harrington, nursing, reeve, sage
        //recreation, success, swart, police
        allMarkers[0].setMap(map);
        allMarkers[5].setMap(map);
        allMarkers[9].setMap(map);
        allMarkers[13].setMap(map);
        allMarkers[21].setMap(map);
        allMarkers[22].setMap(map);
        allMarkers[26].setMap(map);
        allMarkers[29].setMap(map);
        allMarkers[34].setMap(map);
        allMarkers[35].setMap(map);
        allMarkers[38].setMap(map);
        allMarkers[39].setMap(map);
        allMarkers[40].setMap(map);
        allMarkers[43].setMap(map);
        allMarkers[0].setIcon(lightpurpleMarker);
        allMarkers[5].setIcon(lightpurpleMarker);
        allMarkers[9].setIcon(lightpurpleMarker);
        allMarkers[13].setIcon(lightpurpleMarker);
        allMarkers[21].setIcon(lightpurpleMarker);
        allMarkers[22].setIcon(lightpurpleMarker);
        allMarkers[26].setIcon(lightpurpleMarker);
        allMarkers[29].setIcon(lightpurpleMarker);
        allMarkers[34].setIcon(lightpurpleMarker);
        allMarkers[35].setIcon(lightpurpleMarker);
        allMarkers[38].setIcon(lightpurpleMarker);
        allMarkers[39].setIcon(lightpurpleMarker);
        allMarkers[40].setIcon(lightpurpleMarker);
        allMarkers[43].setIcon(lightpurpleMarker);

    }
    // removing gender markers
    function removeGender() {
        //gender buildings: ac, blackhawk, campus, dempsey, halsey, harrington, nursing, reeve, sage
        //recreation, success, swart, police
        allMarkers[0].setMap(null);
        allMarkers[5].setMap(null);
        allMarkers[9].setMap(null);
        allMarkers[13].setMap(null);
        allMarkers[21].setMap(null);
        allMarkers[22].setMap(null);
        allMarkers[26].setMap(null);
        allMarkers[29].setMap(null);
        allMarkers[34].setMap(null);
        allMarkers[35].setMap(null);
        allMarkers[38].setMap(null);
        allMarkers[39].setMap(null);
        allMarkers[40].setMap(null);
        allMarkers[43].setMap(null);
    }
    // functions for categories select/remove markers
    function setAccaF() {
        //accaF buildings: ac, albee, ceramics, clow, environmental, fredric, halsey, harrington, swart, nursing, polk, radford, sage
        allMarkers[0].setMap(map);
        allMarkers[3].setMap(map);
        allMarkers[10].setMap(map);
        allMarkers[11].setMap(map);
        allMarkers[16].setMap(map);
        allMarkers[19].setMap(map);
        allMarkers[21].setMap(map);
        allMarkers[22].setMap(map);
        allMarkers[26].setMap(map);
        allMarkers[29].setMap(map);
        allMarkers[32].setMap(map);
        allMarkers[33].setMap(map);
        allMarkers[35].setMap(map);
        allMarkers[40].setMap(map);
        allMarkers[0].setIcon(maroonMarker);
        allMarkers[3].setIcon(maroonMarker);
        allMarkers[10].setIcon(maroonMarker);
        allMarkers[11].setIcon(maroonMarker);
        allMarkers[16].setIcon(maroonMarker);
        allMarkers[19].setIcon(maroonMarker);
        allMarkers[21].setIcon(maroonMarker);
        allMarkers[22].setIcon(maroonMarker);
        allMarkers[26].setIcon(maroonMarker);
        allMarkers[29].setIcon(maroonMarker);
        allMarkers[32].setIcon(maroonMarker);
        allMarkers[33].setIcon(maroonMarker);
        allMarkers[35].setIcon(maroonMarker);
        allMarkers[40].setIcon(maroonMarker);
        allMarkers[111].setIcon(maroonMarker);

    }
    function removeAccaF() {
        //accaF buildings: ac, albee, ceramics, clow, environmental, fredric, halsey, harrington, swart, nursing, polk, radford, sage
        allMarkers[0].setMap(null);
        allMarkers[3].setMap(null);
        allMarkers[10].setMap(null);
        allMarkers[11].setMap(null);
        allMarkers[16].setMap(null);
        allMarkers[19].setMap(null);
        allMarkers[21].setMap(null);
        allMarkers[22].setMap(null);
        allMarkers[26].setMap(null);
        allMarkers[29].setMap(null);
        allMarkers[32].setMap(null);
        allMarkers[33].setMap(null);
        allMarkers[35].setMap(null);
        allMarkers[40].setMap(null);
        allMarkers[111].setMap(null);
    }
    function setAth() {
        //ath buildings: albee, athletic, baseball, east, kolf, titanstadium
        allMarkers[0].setMap(map);
        allMarkers[1].setMap(map);
        allMarkers[4].setMap(map);
        allMarkers[15].setMap(map);
        allMarkers[26].setMap(map);
        allMarkers[42].setMap(map);
        allMarkers[0].setIcon(orangeMarker);
        allMarkers[1].setIcon(orangeMarker);
        allMarkers[4].setIcon(orangeMarker);
        allMarkers[15].setIcon(orangeMarker);
        allMarkers[26].setIcon(orangeMarker);
        allMarkers[42].setIcon(orangeMarker);
    }
    function removeAth() {
        //ath buildings: albee, athletic, baseball, east, kolf, titanstadium
        allMarkers[0].setMap(null);
        allMarkers[1].setMap(null);
        allMarkers[4].setMap(null);
        allMarkers[15].setMap(null);
        allMarkers[26].setMap(null);
        allMarkers[42].setMap(null);
    }
    // set/remove AccaS
    function setAccaS() {
        //accaS buildings: equity, nursing, success, swart
        allMarkers[8].setMap(map);
        allMarkers[29].setMap(map);
        allMarkers[39].setMap(map);
        allMarkers[40].setMap(map);
        allMarkers[8].setIcon(brownMarker);
        allMarkers[29].setIcon(brownMarker);
        allMarkers[39].setIcon(brownMarker);
        allMarkers[40].setIcon(brownMarker);

    }
    function removeAccaS() {
        //accaS buildings: equity, nursing, success, swart
        allMarkers[8].setMap(null);
        allMarkers[29].setMap(null);
        allMarkers[39].setMap(null);
        allMarkers[40].setMap(null);

    }
    function setCampS() {
        //campS buildings: equity, campus, dempsey, multicultural, pollock, recreation, radford, reeve, success
        allMarkers[8].setMap(map);
        allMarkers[9].setMap(map);
        allMarkers[13].setMap(map);
        allMarkers[28].setMap(map);
        allMarkers[31].setMap(map);
        allMarkers[38].setMap(map);
        allMarkers[33].setMap(map);
        allMarkers[34].setMap(map);
        allMarkers[39].setMap(map);
        allMarkers[8].setIcon(darkgreenMarker);
        allMarkers[9].setIcon(darkgreenMarker);
        allMarkers[13].setIcon(darkgreenMarker);
        allMarkers[28].setIcon(darkgreenMarker);
        allMarkers[31].setIcon(darkgreenMarker);
        allMarkers[38].setIcon(darkgreenMarker);
        allMarkers[33].setIcon(darkgreenMarker);
        allMarkers[34].setIcon(darkgreenMarker);
        allMarkers[39].setIcon(darkgreenMarker);

    }
    function removeCampS() {
        //campS buildings: equity, campus, dempsey, multicultural, pollock, recreation, radford, reeve, success
        allMarkers[8].setMap(null);
        allMarkers[9].setMap(null);
        allMarkers[13].setMap(null);
        allMarkers[28].setMap(null);
        allMarkers[31].setMap(null);
        allMarkers[38].setMap(null);
        allMarkers[33].setMap(null);
        allMarkers[34].setMap(null);
        allMarkers[39].setMap(null);
    }
    // ResH set/remove
    function setResH() {
        //resH buildings: donner, evans, fletcher, gruenhagen, horizon, stewart, scott, taylor, webster
        allMarkers[14].setMap(map);
        allMarkers[17].setMap(map);
        allMarkers[18].setMap(map);
        allMarkers[20].setMap(map);
        allMarkers[25].setMap(map);
        allMarkers[37].setMap(map);
        allMarkers[36].setMap(map);
        allMarkers[41].setMap(map);
        allMarkers[44].setMap(map);
        allMarkers[14].setIcon(lightblueMarker);
        allMarkers[17].setIcon(lightblueMarker);
        allMarkers[18].setIcon(lightblueMarker);
        allMarkers[20].setIcon(lightblueMarker);
        allMarkers[25].setIcon(lightblueMarker);
        allMarkers[37].setIcon(lightblueMarker);
        allMarkers[36].setIcon(lightblueMarker);
        allMarkers[41].setIcon(lightblueMarker);
        allMarkers[44].setIcon(lightblueMarker);

    }
    function removeResH() {
        //resH buildings: donner, evans, fletcher, gruenhagen, horizon, stewart, scott, taylor, webster
        allMarkers[14].setMap(null);
        allMarkers[17].setMap(null);
        allMarkers[18].setMap(null);
        allMarkers[20].setMap(null);
        allMarkers[25].setMap(null);
        allMarkers[37].setMap(null);
        allMarkers[36].setMap(null);
        allMarkers[41].setMap(null);
        allMarkers[44].setMap(null);
    }
    // set/remove dining
    function setDining() {
        //dining buildings: blackhawk, clow, halsey, reeve, sage, scott
        allMarkers[5].setMap(map);
        allMarkers[11].setMap(map);
        allMarkers[21].setMap(map);
        allMarkers[34].setMap(map);
        allMarkers[35].setMap(map);
        allMarkers[36].setMap(map);
        allMarkers[5].setIcon(navyMarker);
        allMarkers[11].setIcon(navyMarker);
        allMarkers[21].setIcon(navyMarker);
        allMarkers[34].setIcon(navyMarker);
        allMarkers[35].setIcon(navyMarker);
        allMarkers[36].setIcon(navyMarker);

    }
    function removeDining() {
        //dining buildings: blackhawk, clow, halsey, reeve, sage, scott
        allMarkers[5].setMap(null);
        allMarkers[11].setMap(null);
        allMarkers[21].setMap(null);
        allMarkers[34].setMap(null);
        allMarkers[35].setMap(null);
        allMarkers[36].setMap(null);
    }
    // StuR set/remove
    function setStuR() {
        //buildings stuR: reeve, recreation
        allMarkers[34].setMap(map);
        allMarkers[38].setMap(map);
        allMarkers[34].setIcon(darkpurpleMarker);
        allMarkers[38].setIcon(darkpurpleMarker);
    }
    function removeStuR() {
        //buildings stuR: reeve, recreation
        allMarkers[34].setMap(null);
        allMarkers[38].setMap(null);
    }

    // close all hover cards (infowindows)
    function closeAllHover() {
        //0 - 82 because only buildings and parking lots have infoWindows
        //goes through all of the infoWindows and closes them for all the markers they are attached to
        for (var w = 0; w < 83; w++) {
            infoWindowsAll[w].close(map, allMarkers[w]);
        }
    }
    //one function for all open/close
    //for the hover (infowindows) not the popups
    //set images to the thumbnails of the places
    function markerOpenClose(name, index) {
        //if it is a building (0-44) check if it is being opened:
        if (!$("#" + name + "Hover").hasClass("hoverOpen")) {
            //close all infowindows from previously opened 
            closeAllHover();
            //open the infoWindow attached to the marker
            infoWindowsAll[index].open(map, allMarkers[index]);
            if (index < 45) {
                //set the thumbnail image for the infoWindow
                $("#" + name + "Hover > img").attr("src", allMarkersInfo[index].thumbnail);
            }
            // add the open class
            $("#" + name + "Hover").addClass("hoverOpen");
        } else {
            //if marker is not clicked/clicked to close, then change src of image to empty, remove class and close all infowindows
            if (index < 45) {
                $("#" + name + "Hover > img").attr("src", "");
            }
            $("#" + name + "Hover").removeClass("hoverOpen");
            closeAllHover();
        }
    }

    allMarkers.forEach(function (thisOne) {
        //thisOne will return the object itself, so we need to get the index of that object in the array
        //using the index, add an event listener for allMarkers
        thisOne.addListener('click', function () {
            var index = allMarkers.indexOf(thisOne);
            // console.log("foreach index: " + index);
            var shortHand = allMarkersInfo[index].shortHand;
            //console.log(shortHand);
            //if it is not an emergency phone->open infowindow etc.
            if (index < 83) {
                markerOpenClose(shortHand, index);
            }
        })
    });


    // when "click for more info" is selected,
    // make corresponding overlay and pop up visible
    // +animate to fade in
    //set src values
    function popupOpen(name) {
        $('#overlay').css('visibility', 'visible');
        $('#overlay').animate({ "opacity": "0.3" }, "slow");

        $("#" + name + "Popup").css('visibility', 'visible');
        $("#" + name + "Popup").animate({ "opacity": "1" }, "slow");
        for (var dd = 0; dd < 45; dd++) {
            $("#" + allMarkersInfo[dd].shortHand + "AboutImage > img").attr("src", allMarkersInfo[dd].fullImage);

            switch (dd) {
                case 0: $('#albeeiframe').attr('src', allMarkersInfo[0].iFrame);
                    break;
                case 5: $("#blackhawkDiningImage > img").attr("src", allMarkersInfo[5].diningImage);
                    break;
                case 11: $("#clowDiningImage > img").attr("src", allMarkersInfo[11].diningImage);
                    break;
                case 21: $("#halseyDiningImage > img").attr("src", allMarkersInfo[21].diningImage);
                    break;
                case 24: $("#parkingRampParkingImage> img").attr("src", allMarkersInfo[24].parkingImage);
                    break;
                case 32: $('#polkiframe').attr('src', allMarkersInfo[32].iFrame);
                    break;
                case 34: $('#reeveiframe').attr('src', allMarkersInfo[34].iFrame);
                    $("#reeveDiningImage > img").attr("src", allMarkersInfo[34].diningImage);
                    break;
                case 35: $('#sageiframe').attr('src', allMarkersInfo[35].iFrame);
                    $("#sageDiningImage > img").attr("src", allMarkersInfo[35].diningImage);
                    break;
                case 36: $("#scottDiningImage > img").attr("src", allMarkersInfo[36].diningImage);
                    break;
                case 39: $('#successiframe').attr('src', allMarkersInfo[39].iFrame);

            }
        }

    }
    //function for all popupclosure
    //close all of the popups themselves and remove src values
    function popupClose(name) {
        $('#overlay').animate({ "opacity": "0" }, "slow");
        $('#overlay').css('visibility', 'hidden');

        $("#" + name + "Popup").animate({ "opacity": "0" }, "slow");
        $("#" + name + "Popup").css('visibility', 'hidden');
        //all of them have an AboutImage 
        $("#" + name + "AboutImage > img").attr('src', "");

        //some have iframe/dining tab/parking tab images wowwwee
        if (name === "albee" || name === "polk" || name === "reeve" || name === "sage" || name === "success") {
            //iframe
            $("#" + name + "iframe").attr('src', "");
        }
        else if (name === "blackhawk" || name === "clow" || name === "halsey" || name === "reeve" || name === "sage"
            || name === "dining") {
            //dining tab image
            $("#" + name + "DiningImage > img").attr("src", "");
        }
        else if (name === "parkingRamp") {
            //parking tab image
            $("#parkingRampParkingImage> img").attr("src", "");
        }
    }
    //for each marker that is a building, there is a link for "more info", when clicked it should open an information popup
    //about the building; also each popup has a close button that should close each time it is clicked
    allMarkers.forEach(function (thisOne) {
        var index = allMarkers.indexOf(thisOne);
        // console.log("Index: " + index);
        if (index < 45) {
            var shortHand = allMarkersInfo[index].shortHand;
            //console.log("shorthand before click: " + shortHand)
            //event listener for clicks of the More Info link on the InfoWindows
            $("#" + shortHand + "Link").click(function () {
                //debugger;
                //console.log("clicked: " + shortHand);
                popupOpen(shortHand);
            });
            //event listener for the x button on the popups (not the x on the infoWindows)
            $("#" + shortHand + "PopupClose").click(function () {
                popupClose(shortHand);
            });
        }
    });

    //array for each building with multiple tabs; true = it has that tab, false = it does not have that tab
    //(tabs for the popups)
    var buildingsTabs = [
        // 0 albee
        {
            name: "albee",
            aboutTab: true, tourTab: true, sustainabilityTab: true, bathroomsTab: false, diningTab: false, parkingTab: false
        },
        // 1 alumni
        {
            name: "alumni",
            aboutTab: true, tourTab: false, sustainabilityTab: true, bathroomsTab: false, diningTab: false, parkingTab: false
        },
        // 2 ac
        {
            name: "ac",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: false, parkingTab: false
        },
        //3 blackhawk
        {
            name: "blackhawk",
            aboutTab: true, tourTab: false, sustainabilityTab: true, bathroomsTab: true, diningTab: true, parkingTab: false
        },
        //4 equity
        {
            name: "equity",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: false, parkingTab: true
        },
        //5 clow
        {
            name: "clow",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: false, diningTab: true, parkingTab: false
        },
        //6 dempsey
        {
            name: "dempsey",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: false, parkingTab: false
        },
        //7 halsey
        {
            name: "halsey",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: true, parkingTab: false
        },
        //8 harrington
        {
            name: "harrington",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: false, parkingTab: false
        },
        //9 heating
        {
            name: "heating",
            aboutTab: true, tourTab: false, sustainabilityTab: true, bathroomsTab: false, diningTab: true, parkingTab: false
        },
        //10 parking
        {
            name: "parkingRamp",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: false, diningTab: false, parkingTab: true
        },
        //11 horizon
        {
            name: "horizon",
            aboutTab: true, tourTab: false, sustainabilityTab: true, bathroomsTab: false, diningTab: false, parkingTab: false
        },
        //12 kolf
        {
            name: "kolf",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: false, parkingTab: false
        },
        //multicultural center
        {
            name: "multicultural",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: false, parkingTab: false
        },
        //13 nursing
        {
            name: "nursing",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: false, parkingTab: false
        },
        //14 polk
        {
            name: "polk",
            aboutTab: true, tourTab: true, sustainabilityTab: false, bathroomsTab: false, diningTab: false, parkingTab: false
        },
        //15 reeve
        {
            name: "reeve",
            aboutTab: true, tourTab: true, sustainabilityTab: true, bathroomsTab: true, diningTab: true, parkingTab: false
        },
        //16 sage
        {
            name: "sage",
            aboutTab: true, tourTab: true, sustainabilityTab: true, bathroomsTab: true, diningTab: true, parkingTab: false
        },
        //17 scott
        {
            name: "scott",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: false, diningTab: true, parkingTab: false
        },
        //18 recreation
        {
            name: "recreation",
            aboutTab: true, tourTab: false, sustainabilityTab: true, bathroomsTab: true, diningTab: false, parkingTab: false
        },
        //19 success
        {
            name: "success",
            aboutTab: true, tourTab: true, sustainabilityTab: true, bathroomsTab: true, diningTab: false, parkingTab: false
        },
        //20 swart
        {
            name: "swart",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: false, parkingTab: false
        },
        //21 taylor
        {
            name: "taylor",
            aboutTab: true, tourTab: false, sustainabilityTab: true, bathroomsTab: false, diningTab: false, parkingTab: false
        },
        //22 titan
        {
            name: "titan",
            aboutTab: true, tourTab: false, sustainabilityTab: true, bathroomsTab: false, diningTab: false, parkingTab: false
        },
        //23 police
        {
            name: "police",
            aboutTab: true, tourTab: false, sustainabilityTab: false, bathroomsTab: true, diningTab: false, parkingTab: false
        }
    ]

    //checks if the building has each tab and closes/hides all of their content accordingly
    function closeTabs(index) {
        var name = buildingsTabs[index].name;
        if (buildingsTabs[index].aboutTab === true) {
            $("#" + name + "AboutImage").css('display', "none");
            $("#" + name + "AboutText").css('display', "none");
        }
        if (buildingsTabs[index].tourTab === true) {
            $("#" + name + "TourVideo").css('display', "none");
            $("#" + name + "TourText").css('display', "none");
        }
        if (buildingsTabs[index].sustainabilityTab === true) {
            $("#" + name + "Sustainability").css('display', "none");
        }
        if (buildingsTabs[index].bathroomsTab === true) {
            $("#" + name + "Bathrooms").css('display', "none");
        }
        if (buildingsTabs[index].diningTab === true) {
            $("#" + name + "DiningImage").css('display', "none");
            $("#" + name + "DiningText").css('display', "none");
        }
        if (buildingsTabs[index].parkingTab === true) {
            $("#" + name + "ParkingImage").css('display', "none");
            $("#" + name + "ParkingText").css('display', "none");
        }

    }
    //for each to set eventlisteners for all tab types; if a building has a tab it will create an event listener for when that tab is clicked
    //for each tab the content for that tab will be set to visible and all the other tabs for that building will be set to invisible
    buildingsTabs.forEach(function (thisOne) {
        var index = buildingsTabs.indexOf(thisOne);
        var name = buildingsTabs[index].name;
        //set to AboutLi IF the building has that tab to click on
        if (buildingsTabs[index].aboutTab === true) {
            $("#" + buildingsTabs[index].name + "AboutLi").click(function () {
                //debugger;
                //hide other tabs from object
                closeTabs(index);

                //content to set for this tab type
                $("#" + buildingsTabs[index].name + "AboutImage").css('display', "block");
                $("#" + buildingsTabs[index].name + "AboutText").css('display', "initial");
            });
        }
        if (buildingsTabs[index].tourTab === true) {
            $("#" + buildingsTabs[index].name + "TourLi").click(function () {
                //hide other tabs from object
                closeTabs(index);
                //content to set for this tab type
                $("#" + buildingsTabs[index].name + "TourVideo").css('display', "initial");
                $("#" + buildingsTabs[index].name + "TourText").css('display', "initial");
            });

        }
        if (buildingsTabs[index].sustainabilityTab === true) {
            $("#" + buildingsTabs[index].name + "SustainabilityLi").click(function () {
                //hide other tabs from object
                closeTabs(index);
                //content to set for this tab type
                $("#" + buildingsTabs[index].name + "Sustainability").css('display', "initial");
            });
        }
        if (buildingsTabs[index].bathroomsTab === true) {
            $("#" + buildingsTabs[index].name + "BathroomsLi").click(function () {
                //hide other tabs from object
                closeTabs(index);
                //content to set for this tab type
                $("#" + buildingsTabs[index].name + "Bathrooms").css('display', "initial");
            });
        }
        if (buildingsTabs[index].diningTab === true) {
            $("#" + buildingsTabs[index].name + "DiningLi").click(function () {
                //hide other tabs from object
                closeTabs(index);
                //content to set for this tab type
                $("#" + buildingsTabs[index].name + "DiningImage").css('display', "block");
                $("#" + buildingsTabs[index].name + "DiningText").css('display', "initial");
            });
        }
        if (buildingsTabs[index].parkingTab === true) {
            $("#" + buildingsTabs[index].name + "ParkingLi").click(function () {
                //hide other tabs from object
                closeTabs(index);
                //content to set for this tab type
                $("#" + buildingsTabs[index].name + "ParkingImage").css('display', "initial");
                $("#" + buildingsTabs[index].name + "ParkingText").css('display', "initial");
            });
        }
    });

    //functions for checkboxes
    // naming conventions for checkboxes: ex. "buildingsLabel" "name + Label" is the element that has the class "is-checked" is added to
    // ex. "buildings" without "Label" added onto the end is the input element with attribute " type= 'checkbox' "

    // triggerCheck and triggerUncheck check and uncheck the checkboxes
    //primarily should only be needed for the selectall functions
    function triggerCheck(name) {
        // fancy schmancy method Material Design already gives for checking le checkbox
        //(sets class on checkbox)
        document.getElementById(name + "Label").MaterialCheckbox.check();
        checkboxMarkersandCards(name);
    }

    function triggerUncheck(name) {
        // fancy schmancy method Material Design already gives for unchecking le checkbox
        //(removes class on checkbox)
        document.getElementById(name + "Label").MaterialCheckbox.uncheck();
        uncheckMarkersandCards(name);
    }
    var checkboxes = [
        //0
        "buildings",
        //1
        "parking",
        //2
        "accEnt",
        //3
        "accPar",
        //4
        "emergency",
        //5
        "sust",
        //6
        "gender",
        //7
        "accaF",
        //8
        "ath",
        //9
        "accS",
        //10
        "campS",
        //11
        "resH",
        //12
        "dining",
        //13
        "stuR"
    ]
    //the following functions handle setting/removing markers and hover cards when checkboxes are checked or unchecked

    //checks if name corresponds with specific ids and sets the buildings & their markers accordingly
    function checkboxMarkersandCards(name) {
        switch (name) {
            case "buildings": setBuilding();
                break;
            case "parking": setParkingLots();
                break;
            case "accEnt": setAccEnt();
                break;
            case "accPar": setAccPar();
                break;
            case "emergency": setEmergencyPhones();
                break;
            case "sust": setSust();
                break;
            case "gender": setGender();
                break;
            case "accaF": setAccaF();
                break;
            case "ath": setAth();
                break;
            case "accS": setAccaS();
                break;
            case "campS": setCampS();
                break;
            case "resH": setResH();
                break;
            case "dining": setDining();
                break;
            case "stuR": setStuR();
                break;
        }

    }
    function catchMarkers(name) {
        //when a marker is unchecked, go through and look at the checkboxes, if they are checked
        //reset their markers 
        //for ex. if buildings is unchecked it removes the markers for buildings but it may also remove
        //markers that overlap with that category and another checkbox's grouping of markers 
        for (var ff = 0; ff < 14; ff++) {
            //make sure that the one being checked is not the checkbox being unchecked (otherwise it will still see it as checked
            // and reset the markers i.e. never remove the markers for that checkbox)
            if ((checkboxes[ff] != name) && ($("#" + checkboxes[ff] + "Label").hasClass("is-checked"))) {
                checkboxMarkersandCards(checkboxes[ff]);
            }
        }
    }
    //checks if name corresponds with specific ids and sets the buildings & their markers accordingly
    function uncheckMarkersandCards(name) {

        switch (name) {
            case "buildings":
                // removes hoverpopups (not markers, the white popups after you click markers)
                // must come before markers are removed
                closeAllHover();
                // removes building markers
                removeBuilding();
                break;
            case "parking":
                closeAllHover();
                removeParkingLots();
                break;
            case "accEnt":
                closeAllHover();
                removeAccEnt();
                break;
            case "accPar":
                closeAllHover();
                removeAccPar();
                break;
            case "emergency":
                removeEmergencyPhones();
                // emergency phones do not have any hovercards attached to their markers atm
                break;
            case "sust":
                closeAllHover();
                removeSust();
                break;
            case "gender": closeAllHover();
                removeGender();
                break;
            case "accaF":
                closeAllHover();
                removeAccaF();
                break;
            case "ath":
                closeAllHover();
                removeAth();
                break;
            case "accS":
                closeAllHover();
                removeAccaS();
                break;
            case "campS":
                closeAllHover();
                removeCampS();
                break;
            case "resH":
                closeAllHover();
                removeResH();
                break;
            case "dining":
                closeAllHover();
                removeDining();
                break;
            case "stuR":
                closeAllHover();
                removeStuR();
                break;

        }
        catchMarkers(name);
    }


    // watches for change event on checkbox, checks if it has class is-checked and then sets the markers and hover cards accordingly
    function checkIfChecked(name) {
        // debugger;
        if (!$("#" + name + "Label").hasClass("is-checked")) {
            //  if checkbox is checked, set markers
            checkboxMarkersandCards(name);
        } else {
            //  if checkbox is unchecked, remove markers and hover cards
            uncheckMarkersandCards(name);

        }

    }

    //right away trigger buildings to be checked (easier for first time users to see how to use the site)
    function triggerBuildings() {
        $("#buildings").trigger("click");
        setBuilding();
    }
    triggerBuildings();

    // all onchange functions for the checkboxes

    // checks if the checkbox is checked or not and then sets markers/hover cards accordingly
    // to work: buildings needs to be added to functions: "checkboxMarkersandCards" and "uncheckMarkersandCards"
    // selector for .change function should use the id for the input element 
    checkboxes.forEach(function (thisOne) {
        var index = checkboxes.indexOf(thisOne);
        $("#" + checkboxes[index]).change(function () {
            // sets up parameter as string
            checkIfChecked(checkboxes[index]);
        })
    });

    $("#selectAllOne").change(function () {
        if (!$("#selectAllOne").hasClass("is-checked")) {
            //if select all is unchecked, all others should be unchecked
            //  uncheck: unchecks checkbox and removes markers and hover cards

            // HAS TO COME BEFORE UNCHECK IS TRIGGERED
            closeAllHover();
            catchMarkers(name);
            for (var gg = 0; gg < 7; gg++) {
                triggerUncheck(checkboxes[gg]);
            }

        } else {
            //if selectall is checked, all others should be checked
            //  check: checks checkbox and sets markers 
            for (var gg = 0; gg < 7; gg++) {
                triggerCheck(checkboxes[gg]);
            }

        }
    });

    $("#selectAllTwo").change(function () {

        if (!$("#selectAllTwo").hasClass("is-checked")) {
            // HAS TO COME BEFORE UNCHECK IS TRIGGERED
            closeAllHover();

            for (var gg = 7; gg < 14; gg++) {
                triggerUncheck(checkboxes[gg]);
            }

        } else {
            for (var gg = 7; gg < 14; gg++) {
                triggerCheck(checkboxes[gg]);
            }

        }

    });

    //start of code for search that needs to interact with the infoWindows and Popups here in map.js
    $("#searchInput").keyup(function () {
        //takes the length of the value of the string in
        // the search and returns a number
        // ex. "hello" = 5
        var characters = $(this).val().length;
        // console.log("# of characters in search:" + characters);

        //if someone types it opens the search but does not run a search until they've typed at least 3 characters
        if (characters < 3) {
            $("#searchResults").css("visibility", "hidden");
            // web adjustment only
            $(".drawerContentsAdjust").css("top", "0px ");
            //if there are is no input: clear the search result list 
            $("#searchResults").html("<ul><li id='noResults' class='text'></li></ul>");
        } else if (characters >= 3) {
            callAjax();

        }
    });



    //function for closing all of the popups (making them invisible)
    function closeAllPopup() {
        //debugger;
        for (var cc = 0; cc < 45; cc++) {
            $("#" + allMarkersInfo[cc].shortHand + "Popup").css('visibility', 'hidden');
        }
    }

    function callAjax() {
        $.ajax({
            type: "GET",
            url: "../php/search.php",
            data: ({ search: $("#searchInput").val() }),
            success: function (results) {

                // console.log("success!");
                // console.log(results);

                $("#searchResults").css("visibility", "visible");


                var emptyResult = "<ul><li class='firstResults text'><h6>Search Results:</h6></li></ul>";
                if (emptyResult == results) {
                    // note to self: if you want to add class/id to these make sure to use
                    // different quotations than you use to wrap the string~
                    // "" string, '' for classes and ids
                    $("#searchResults").html("<ul><li id='noResults' class='text'> No results</li></ul>");

                } else if (emptyResult !== results) {
                    $("#searchResults").html(results);
                    //do while loop that selects all present list items and creates + assigns a unique id based on their value
                    // which is converted into a lowercase string without spaces (and has "Result" added onto it)
                    var n = 1;
                    // counting number of list items
                    var listItems = $("#searchResults > ul").children().length;
                    do {
                        n++
                        // gets value of element
                        // / /g <- selects all spaces in the string
                        var customId = $("#searchResults > ul > li:nth-child(" + n + ")").text().toLowerCase().replace(/ /g, "");
                        // sets the id of the element ^ to the string returned above
                        $("#searchResults > ul > li:nth-child(" + n + ")").prop("id", customId + "Result");
                        clickResults(customId);
                        // increase n until it matches the number of listItems that are present
                    } while (n <= listItems);
                    //array of the ids that are generated above for the search result list items
                    var possibleIds = [
                        //0 albee
                        "albeehall",
                        //1 baseball
                        "alumnibaseballstadium",
                        //2 
                        "alumniwelcomeandconferencecenter",
                        //3 ac
                        "artsandcommunicationscenter",
                        //4 athletic
                        "athleticservicebuilding",
                        //5 blackhawk
                        "blackhawkcommons",
                        //6 biodigester
                        "biodigester",
                        //7 buckstaff
                        "buckstaffplanetarium",
                        //8 equity 
                        "campuscenterforequityanddiversity",
                        //9 campus services
                        "campusservices",
                        //10 ceramics
                        "ceramicslaboratory",
                        //11 clow
                        "clowsocialsciencecenter",
                        //12 gardens
                        "communitygardens",
                        //13 dempsey
                        "dempseyhall",
                        //14 donner
                        "donnerhall",
                        //15 east
                        "easthall",
                        //16 environmental
                        "environmentalscienceandresearchcenter",
                        //17 evans
                        "evanshall",
                        //18 fletcher
                        "fletcherhall",
                        //19 fredric
                        "fredricmarchtheater",
                        //20 gruenhagen
                        "gruenhagenconferencecenter",
                        //21 halsey
                        "halseysciencecenter",
                        //22 harrington
                        "harringtonhall",
                        //23 heating 
                        "heatingplant",
                        //24 parking ramp
                        "highavenueparkingramp",
                        //25 horizon
                        "horizonvillage",
                        //26 kolf
                        "kolfsportscenter",
                        //27 lincoln
                        "lincolnhall",
                        //28 multicultural
                        "multiculturaleducationcenter",
                        //29 nursing
                        "nursingeducationbuilding",
                        //30 oviatt
                        "oviatthouse",
                        //31 pollock
                        "pollockhouse",
                        //32 polk
                        "polklibrary",
                        //33 radford
                        "radfordhallandstudenthealthcenter",
                        //34 reeve
                        "reevememorialunion",
                        //35 sage
                        "sagehall",
                        //36 scott
                        "scotthall",
                        //37 stewart
                        "stewarthall",
                        //38 recreation
                        "studentrecreationandwellnesscenter",
                        //39 success
                        "studentsuccesscenter",
                        //40 swart
                        "swarthall",
                        //41 taylor
                        "taylorhall",
                        //42 titan
                        "titanstadium",
                        //43 police
                        "universitypolicestation",
                        //44 webster
                        "websterhall"
                    ]
                    // console.log(n);
                    // console.log("number of list elements:" + listItems);
                    // $("#albeehallResult").click(function(){
                    //   $("#albeeLink").trigger("click");
                    // });
                    function clickResults(id) {
                        // debugger;
                        // console.log(id);
                        $("#" + id + "Result").click(function () {
                            closeAllPopup();
                            //checks id of clicked result and triggers a click for the "more info" link on the corresponding infoWindow
                            //debugger;
                            for (var bb = 0; bb < 45; bb++) {
                                if (id == possibleIds[bb]) {
                                    popupOpen(allMarkersInfo[bb].shortHand);
                                }
                            }
                        });
                    }
                }

                var check = $("#drawerContents").hasClass("drawerContentsAdjust");
                if (check === true) {
                    // only for desktop
                    // adjust position of menu drawer based on height of search results
                    function getTotalHeight() {
                        var searchHeight = $("#searchResults").height();
                        // var mobileHeaderHeight = $("#mobileHeader").height();
                        // var webSearchHeight = $("#webSearch").height();
                        return (searchHeight - 3);
                    }
                    // console.log("Height of search div:" + getTotalHeight());

                    // get element, apply css to the element(not to the class)
                    // for mobile: top reset is forced with another .css
                    $(".drawerContentsAdjust").css("top", getTotalHeight());

                }


            }
        })
    }
    //end search code
    //

}
