// globally declaring the VRView object
var sidewalkTourVRView;

// declaring the scenes for this VRView
var sidewalkTourScenes = {
    dempseyFront: {
        image: 'images/Panorama/sidewalk/UWO360b_-2.jpg',
        hotspots: {
            oviattDempseyOne: {
                pitch: -10,
                yaw: 55,
                radius: 0.10,
                distance: 1
            }
        }
    },
    oviattDempseyOne: {
        image: 'images/Panorama/sidewalk/UWO360_-17.jpg',
        hotspots: {
            dempseyFront: {
                pitch: 0,
                yaw: 163,
                radius: 0.10,
                distance: 2
            },
            acrossFromClow: {
                pitch: 0,
                yaw: 103.5,
                radius: 0.10,
                distance: 2
            },
            oviattDempseyTwo: {
                pitch: 0,
                yaw: -80,
                radius: 0.10,
                distance: 1
            }
        }
    },
    acrossFromClow: {
        image: 'images/Panorama/sidewalk/UWO360_-5.jpg',
        hotspots: {
            oviattDempseyOne: {
                pitch: 0,
                yaw: -100,
                radius: 0.10,
                distance: 1
            }
        }
    },
    oviattDempseyTwo: {
        image: 'images/Panorama/sidewalk/UWO360_-22.jpg',
        hotspots: {
            oviattDempseyOne: {
                pitch: 0,
                yaw: 88,
                radius: 0.10,
                distance: 1
            },
            oviattDempseyTrees: {
                pitch: 0,
                yaw: -92,
                radius: 0.10,
                distance: 1
            }
        }
    },
    oviattDempseyTrees: {
        image: 'images/Panorama/sidewalk/UWO360_-28.jpg',
        hotspots: {
            oviattDempseyTwo: {
                pitch: 0,
                yaw: 95,
                radius: 0.10,
                distance: .7
            },
            gardenOne: {
                pitch: 0,
                yaw: -80,
                radius: 0.10,
                distance: .5
            }
        }
    },
    gardenOne: {
        image: 'images/Panorama/sidewalk/UWO360_-32.jpg',
        hotspots: {
            oviattDempseyTrees: {
                pitch: -5,
                yaw: -95,
                radius: 0.10,
                distance: .7
            },
            gardenTwo: {
                pitch: -5,
                yaw: 85,
                radius: 0.10,
                distance: .7
            }
        }
    },
    gardenTwo: {
        image: 'images/Panorama/sidewalk/UWO360_-35.jpg',
        hotspots: {
            gardenOne: {
                pitch: -5,
                yaw: -92,
                radius: 0.10,
                distance: .7
            },
            gardenThree: {
                pitch: 5,
                yaw: 160,
                radius: 0.10,
                distance: .7
            }
        }
    },
    gardenThree: {
        image: 'images/Panorama/sidewalk/UWO360_-39.jpg',
        hotspots: {
            gardenTwo: {
                pitch: 5,
                yaw: -150,
                radius: 0.10,
                distance: .5
            },
            gardenFour: {
                pitch: 5,
                yaw: 65,
                radius: 0.10,
                distance: .5
            }
        }
    },
    gardenFour: {
        image: 'images/Panorama/sidewalk/UWO360_-42.jpg',
        hotspots: {
            gardenThree: {
                pitch: 5,
                yaw: -70,
                radius: 0.10,
                distance: .5
            },
            swartHalseyOne: {
                pitch: 5,
                yaw: 80,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartHalseyOne: {
        image: 'images/Panorama/sidewalk/UWO360_-46.jpg',
        hotspots: {
            gardenFour: {
                pitch: 5,
                yaw: -90,
                radius: 0.10,
                distance: .5
            },
            swartHalseyTwo: {
                pitch: 5,
                yaw: 85,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartHalseyTwo: {
        image: 'images/Panorama/sidewalk/UWO360_-53.jpg',
        hotspots: {
            swartHalseyOne: {
                pitch: 5,
                yaw: -94,
                radius: 0.10,
                distance: .5
            },
            swartCorner: {
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartCorner: {
        image: 'images/Panorama/sidewalk/UWO360_-58.jpg',
        hotspots: {
            swartHalseyTwo: {
                pitch: 5,
                yaw: -94,
                radius: 0.10,
                distance: .5
            },
            swartMiddle:{
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartMiddle: {
        image: 'images/Panorama/sidewalk/UWO360_-62.jpg',
        hotspots: {
            swartCorner: {
                pitch: 5,
                yaw: -92,
                radius: 0.10,
                distance: .5
            },
            swartRear: {
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartRear: {
        image: 'images/Panorama/sidewalk/UWO360_-66.jpg',
        hotspots: {
            swartMiddle: {
                pitch: 5,
                yaw: -92,
                radius: 0.10,
                distance: .5
            },
            swartBuckstaff: {
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartBuckstaff: {
        image: 'images/Panorama/sidewalk/UWO360_-69.jpg',
        hotspots: {
            swartRear: {
                pitch: 5,
                yaw: -86,
                radius: 0.10,
                distance: .5
            },
            swartBuckstaffHalsey: {
                pitch: 5,
                yaw: 95,
                radius: 0.10,
                distance: .5
            }
        }
    },
    swartBuckstaffHalsey: {
        image: 'images/Panorama/sidewalk/UWO360_-73.jpg',
        hotspots: {
            swartBuckstaff: {
                pitch: 5,
                yaw: -92,
                radius: 0.10,
                distance: .5
            },
            halseyCorner: {
                pitch: 5,
                yaw: 90,
                radius: 0.10,
                distance: .5
            }
        }
    },
    halseyCorner: {
        image: 'images/Panorama/sidewalk/UWO360_-75.jpg',
        hotspots: {
            swartBuckstaffHalsey: {
                pitch: 5,
                yaw: -88,
                radius: 0.10,
                distance: .5
            },
            halseyRear: {
                pitch: 5,
                yaw: 95,
                radius: 0.10,
                distance: .5
            }
        }
    },
    halseyRear: {
        image: 'images/Panorama/sidewalk/UWO360_-81.jpg',
        hotspots: {
            halseyCorner: {
                pitch: 5,
                yaw: -80,
                radius: 0.10,
                distance: .5
            },
            ACFront: {
                pitch: 5,
                yaw: 100,
                radius: 0.10,
                distance: .5
            }
        }
    },
    ACFront: {
        image: 'images/Panorama/sidewalk/UWO360_-84.jpg',
        hotspots: {
            halseyRear: {
                pitch: 5,
                yaw: -85,
                radius: 0.10,
                distance: .5
            }
        }
    }
};

// fires when a user clicks on a 360 tour link
function loadSidewalkTourVR(){
    // initializing the VRView object
    sidewalkTourVRView = new VRView.Player('#sidewalkTour', {
        image: 'images/Panorama/blank.png',
        is_stereo: false,
    });

    // adding our styles to the VR window
    $("#sidewalkTour > iframe").addClass("vr");

    // assigning the functions to perform on ready and click
    sidewalkTourVRView.on('ready', onsidewalkTourVRViewReady);
    sidewalkTourVRView.on('click', onsidewalkTourVRClick);
}

// fires when the VRView objects is ready to do stuff
function onsidewalkTourVRViewReady(e){
    console.log('onSidewalkTourReady');
    loadSidewalkTourScene('dempseyFront');
}

// fires when a hotspot gets clicked
function onsidewalkTourVRClick(e) {
    console.log('onsidewalkTourVRClick', e.id);
    if (e.id) {
        loadSidewalkTourScene(e.id);
    }
}

// loads the image and it's hotspots
function loadSidewalkTourScene(id) {
    console.log('loadSidewalkTourScene', id);

    // Set the image
    sidewalkTourVRView.setContent({
        image: sidewalkTourScenes[id].image,
        is_stereo: false,
        is_autopan_off: true
    });

    // Add all the hotspots for the scene
    var newScene = sidewalkTourScenes[id];
    var sceneHotspots = Object.keys(newScene.hotspots);
    for (var i = 0; i < sceneHotspots.length; i++) {
        var hotspotKey = sceneHotspots[i];
        var hotspot = newScene.hotspots[hotspotKey];

        sidewalkTourVRView.addHotspot(hotspotKey, {
            pitch: hotspot.pitch,
            yaw: hotspot.yaw,
            radius: hotspot.radius,
            distance: hotspot.distance
        });
    }
}

// fires on click of Dempsey Dev
document.getElementById("dempseyStart").addEventListener('click', function(){
    //debugger;
    //if the iframe already exists do not make another
   // console.log($("#sidewalkTour > iframe").length);
    if($("#sidewalkTour > iframe").length){
        //if the iframe is not visible, make it visible
        if(!$("#sidewalkTour > iframe").hasClass("vr")){
            $("#sidewalkTour > iframe").addClass("vr");
        } else {
            //if it is visible, make it invisible
            $("#sidewalkTour > iframe").removeClass("vr");
        }
    }
    //if the iframe does not exist, make one
    else{
        loadSidewalkTourVR();
    }  
});
