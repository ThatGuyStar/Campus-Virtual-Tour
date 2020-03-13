// globally declaring the VRView object
var womensCenterVRView;

// declaring the scenes for this VRView
var womensCenterScenes = {
    womensCenterFront: {
        image: 'images/Panorama/womens-center/womensCenterFront.jpg',
        hotspots: {
            womensCenterCouch: {
                pitch: 20,
                yaw: -125,
                radius: 0.30,
                distance: 1.5
            }
        }
    },
    womensCenterCouch: {
        image: 'images/Panorama/womens-center/womensCenter.jpg',
        hotspots: {
            womensCenterFront: {
                pitch: 5,
                yaw: 153,
                radius: 0.30,
                distance: 2
            },
            womensCenterBack: {
                pitch: 0,
                yaw: -5,
                radius: 0.30,
                distance: 2
            }
        }
    },
    womensCenterBack: {
        image: 'images/Panorama/womens-center/womensCenterBackroom.jpg',
        hotspots: {
            womensCenterCouch: {
                pitch: 0,
                yaw: 17,
                radius: 0.30,
                distance: 1
            }
        }
    }
};

// fires when a user clicks on a 360 tour link
function loadWomensCenterVR(){
    // initializing the VRView object
    womensCenterVRView = new VRView.Player('#womensCenterVR', {
        image: 'images/Panorama/blank.png',
        is_stereo: false,
    });

    // adding our styles to the VR window
    $("#womensCenterVR > iframe").addClass("vr");

    // assigning the functions to perform on ready and click
    womensCenterVRView.on('ready', onWomensCenterVRViewReady);
    womensCenterVRView.on('click', onWomensCenterVRClick);
}

// fires when the VRView objects is ready to do stuff
function onWomensCenterVRViewReady(e){
    console.log('onWomensCenterReady');
    loadWomensCenterScene('womensCenterFront');
}

// fires when a hotspot gets clicked
function onWomensCenterVRClick(e) {
    //e.id title of hotspot that is clicked
    //(load womens center id becomes the title of the scene (same as the hotspot selected))
    console.log('onWomensCenterVRClick e.id:', e.id);
    if (e.id) {
        loadWomensCenterScene(e.id);
    }
}

// loads the image and it's hotspots
function loadWomensCenterScene(id) {
    //id = title of scene
    console.log('loadWomensCenterScene', id);

    // Set the image
    womensCenterVRView.setContent({
        image: womensCenterScenes[id].image,
        is_stereo: false,
        is_autopan_off: false
    });

    // Add all the hotspots for the scene
    var newScene = womensCenterScenes[id];
    var sceneHotspots = Object.keys(newScene.hotspots);
    for (var i = 0; i < sceneHotspots.length; i++) {
        var hotspotKey = sceneHotspots[i];
        var hotspot = newScene.hotspots[hotspotKey];

        womensCenterVRView.addHotspot(hotspotKey, {
            pitch: hotspot.pitch,
            yaw: hotspot.yaw,
            radius: hotspot.radius,
            distance: hotspot.distance
        });
    }
}

// fires on click of Women's Center VR
document.getElementById("womensCenter").addEventListener('click', function(){
    //debugger;
    //if the iframe already exists do not make another
   // console.log($("#sidewalkTour > iframe").length);
    if($("#womensCenterVR > iframe").length){
        //if the iframe is not visible, make it visible
        if(!$("#womensCenterVR > iframe").hasClass("vr")){
            $("#womensCenterVR > iframe").addClass("vr");
        } else {
            //if it is visible, make it invisible
            $("#womensCenterVR > iframe").removeClass("vr");
        }
    }
    //if the iframe does not exist, make one
    else{
        loadWomensCenterVR();
    }  
});