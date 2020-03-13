// globally declaring the VRView object
var executiveRoomVRView;

// declaring the scenes for this VRView
var executiveRoomScenes = {
    executiveRoom: {
        image: 'images/Panorama/executive-board-room/executiveBoardRoom.jpg',
        hotspots: {

        }
    }
};

// fires when a user clicks on a 360 tour link
function loadExecutiveRoomVR(){
    // initializing the VRView object
    executiveRoomVRView = new VRView.Player('#executiveRoomVR', {
        image: 'images/Panorama/blank.png',
        is_stereo: false,
    });
    $("#executiveRoomVR > iframe").addClass("vr");
    

    // assigning the functions to perform on ready and click
    executiveRoomVRView.on('ready', onExecutiveRoomVRViewReady);
    executiveRoomVRView.on('click', onExecutiveRoomVRClick);
}

// fires when the VRView objects is ready to do stuff
function onExecutiveRoomVRViewReady(e){
    console.log('onExecutiveRoomReady');
    loadExecutiveRoomScene('executiveRoom');
}

// fires when a hotspot gets clicked
function onExecutiveRoomVRClick(e) {
    console.log('onExecutiveRoomVRClick', e.id);
    if (e.id) {
        loadScene(e.id);
    }
}

// loads the image and it's hotspots
function loadExecutiveRoomScene(id) {
    console.log('loadScene', id);

    // Set the image
    executiveRoomVRView.setContent({
        image: executiveRoomScenes[id].image,
        is_stereo: false,
        is_autopan_off: false
    });

    // Add all the hotspots for the scene
    var newScene = executiveRoomScenes[id];
    var sceneHotspots = Object.keys(newScene.hotspots);
    for (var i = 0; i < sceneHotspots.length; i++) {
        var hotspotKey = sceneHotspots[i];
        var hotspot = newScene.hotspots[hotspotKey];

        executiveRoomVRView.addHotspot(hotspotKey, {
            pitch: hotspot.pitch,
            yaw: hotspot.yaw,
            radius: hotspot.radius,
            distance: hotspot.distance
        });
    }
}

// fires on click of #executiveRoom
document.getElementById("executiveRoom").addEventListener('click', function(){
    //debugger;
    //if the iframe already exists do not make another
   // console.log($("#executiveRoomVR > iframe").length);
    if($("#executiveRoomVR > iframe").length){
        //if the iframe is not visible, make it visible
        if(!$("#executiveRoomVR  > iframe").hasClass("vr")){
            $("#executiveRoomVR > iframe").addClass("vr");
        } else {
            //if it is visible, make it invisible
            $("#executiveRoomVR > iframe").removeClass("vr");
        }
    }
    //if the iframe does not exist, make one
    else{
        loadExecutiveRoomVR();
    }  
});