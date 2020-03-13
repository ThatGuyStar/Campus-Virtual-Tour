//adding new places:
//1. add the scenes to the scenes array
//2. add the intital scene title to onVRViewReady() (first scene you want to load)
//3. add the id of the html element that is selected from the menu to the links array

//Recommended size of images: 2048x1024, 72dpi
//Recommended size of previews: 512x256, 72dpi 
//(these keep the file size small and will load more quickly)


// globally declaring the VRView object
var VRView;

// declaring the executiveRoom scenes
//each scene can have hotspots connected to it> when the hotspot is selected it loads the scene of the same name
var scenes = {
    //hotspot cheatsheet
    //pitch: degrees, up is positive
    //yaw: degrees, left is positive
    //radius: radius of circle in meters
    // distance: distance from camera in meters

     //start sodexoBallroom
     sodexoBallroomA: {
        image: 'images/Panorama/awcc/ballroom/AWCC_01_BallroomA.jpg',
        hotspots: {
            sodexoBallroomB: {
                pitch: -10,
                yaw: -180,
                radius: 0.30,
                distance: 2
            }
        }
    },
    sodexoBallroomB: {
        image: 'images/Panorama/awcc/ballroom/AWCC_01_BallroomB.jpg',
        hotspots: {
            sodexoBallroomA: {
                pitch: -10,
                yaw: -305,
                radius: 0.30,
                distance: 3
            },
            sodexoBallroomC: {
                pitch: 0,
                yaw: -130,
                radius: 0.30,
                distance: 3
            }
        }
    },
    sodexoBallroomC: {
        image: 'images/Panorama/awcc/ballroom/AWCC_01_BallroomC.jpg',
        hotspots: {
            sodexoBallroomB: {
                pitch: 0,
                yaw: 5,
                radius: 0.30,
                distance: 3
            }
        }
    },
    //start executiveRoom
    executiveRoom: {
        image: 'images/Panorama/awcc/executive-board-room/executiveBoardRoom.jpg',
        hotspots: {

        }
    },
    //start busalacchi room
    busalacchiRoom: {
        image: 'images/Panorama/awcc/busalacchiRoom/busalacchi.jpg',
        hotspots: {

        }
    },
     //start breakroom1pt1
     breakroom1pt1: {
        image: 'images/Panorama/awcc/breakroom/room1pt1.jpg',
        hotspots: {
        }
    },
    
    //start breakroom2
    breakroom2: {
        image: 'images/Panorama/awcc/breakroom/room2.jpg',
        hotspots: {
           
        }
    },
    //start breakroom3
    breakroom3: {
        image: 'images/Panorama/awcc/breakroom/room3.jpg',
        hotspots: {
           
        }
    },
    //start breakroom4
    breakroom4: {
        image: 'images/Panorama/awcc/breakroom/room4.jpg',
        hotspots: {
           
        }
    },
    awccGreatHall:{
        image: 'images/Panorama/awcc/great_hall/AWCC_01_Great_Hall.jpg',
        hotspots: {
           
        }
    },
    //start ac
    annexGallery:{
        image: 'images/Panorama/ac/AC_02_ArtGallery.jpg',
        hotspots :{
            
        }
    },
    priebeGallery:{
        image: 'images/Panorama/ac/AC_01_AllenPriebeArtGallery.jpg',
        hotspots :{
            
        }
    },
    //start Lincoln
    lincolnEntrance:{
        image: 'images/Panorama/lincoln/Lincoln_01_LLCE_Entrance.jpg',
        hotspots :{
            lincolnReceptionist: {
                pitch: 0,
                yaw: -10,
                radius: 0.30,
                distance: 3
            }
        }
    },
    lincolnReceptionist:{
        image: 'images/Panorama/lincoln/Lincoln_02_Reception.jpg',
        hotspots :{
            lincolnEntrance: {
                pitch: 0,
                yaw: 80,
                radius: 0.30,
                distance: 3
            },
            lincoln_ten: {
                pitch: 0,
                yaw: 40,
                radius: 0.30,
                distance: 3
            }
        }
    },
    lincoln_ten:{
        image: 'images/Panorama/lincoln/Lincoln_02_10.jpg',
        hotspots :{
            lincolnReceptionist: {
                pitch: 0,
                yaw: 140,
                radius: 0.30,
                distance: 3
            },
            lincoln_nine: {
                pitch: 0,
                yaw: -25,
                radius: 0.30,
                distance: 3
            },
         }
    },
    lincoln_nine:{
        image: 'images/Panorama/lincoln/Lincoln_02_09.jpg',
        hotspots :{
            lincoln_ten: {
                pitch: 0,
                yaw: 110,
                radius: 0.30,
                distance: 3
            },
            lincoln_eight: {
                pitch: 0,
                yaw: -75,
                radius: 0.30,
                distance: 2.5
            }
         }
    },
    lincoln_eight:{
        image: 'images/Panorama/lincoln/Lincoln_02_08.jpg',
        hotspots :{
            lincoln_nine: {
                pitch: 0,
                yaw: 55,
                radius: 0.30,
                distance: 3
            },
            lincoln_seven: {
                pitch: 0,
                yaw: -105,
                radius: 0.30,
                distance: 3
            }
         }
    },
    lincoln_seven:{
        image: 'images/Panorama/lincoln/Lincoln_02_07.jpg',
        hotspots :{
            lincoln_eight: {
                pitch: 0,
                yaw: 30,
                radius: 0.30,
                distance: 3
            },
            lincoln_five: {
                pitch: 0,
                yaw: -180,
                radius: 0.30,
                distance: 2.5
            }
         }
    },
    lincoln_five:{
        image: 'images/Panorama/lincoln/Lincoln_02_05.jpg',
        hotspots :{
            lincoln_seven: {
                pitch: 0,
                yaw: 75,
                radius: 0.30,
                distance: 3
            },
            lincolnReceptionist: {
                pitch: 0,
                yaw: 60,
                radius: 0.30,
                distance: 3
            },
            lincoln_six: {
                pitch: 15,
                yaw: 153,
                radius: 0.30,
                distance: 3
            },
            lincoln_four: {
                pitch: 0,
                yaw: -90,
                radius: 0.30,
                distance: 2.5
            }
         }
    },
    lincoln_six:{
        image: 'images/Panorama/lincoln/Lincoln_02_06.jpg',
        hotspots :{
            lincoln_five: {
                pitch: 0,
                yaw: 60,
                radius: 0.30,
                distance: 3
            }
         }
    },
    lincoln_one:{
        image: 'images/Panorama/lincoln/Lincoln_02_01.jpg',
        hotspots :{
            lincoln_two: {
                pitch: 0,
                yaw: -175,
                radius: 0.30,
                distance: 3
            },
            lincoln_four: {
                pitch: 0,
                yaw: 30,
                radius: 0.30,
                distance: 2.5
            }
        }
    },
    lincoln_two:{
        image: 'images/Panorama/lincoln/Lincoln_02_02.jpg',
        hotspots :{
            lincoln_one: {
                pitch: 0,
                yaw: -85,
                radius: 0.30,
                distance: 2.5
            }
        }
    },
    lincoln_four:{
        image: 'images/Panorama/lincoln/Lincoln_02_04.jpg',
        hotspots :{
            lincoln_one: {
                pitch: 0,
                yaw: -15,
                radius: 0.30,
                distance: 3
            },
            lincolnConference: {
                pitch: 0,
                yaw: 0,
                radius: 0.30,
                distance: 3
            },
            lincoln_five: {
                pitch: 0,
                yaw: -110,
                radius: 0.30,
                distance: 2
            }

        }
    },
    lincolnConference:{
        image: 'images/Panorama/lincoln/Lincoln_02_03.jpg',
        hotspots :{
            lincoln_four:{
                pitch: 0,
                yaw: -145,
                radius: 0.30,
                distance: 3
            }
        }
    },
    //start Albee 
    albeeWeight:{
        image: 'images/Panorama/albee/Albee_00_WeightRoom.jpg',
        hotspots :{

        }
    },
    //start Kolf 
    careerFair:{
        image: 'images/Panorama/kolf/UWO360b_ - 1.jpg',
        hotspots :{

        }
    },
    athleticTraining:{
        image: 'images/Panorama/kolf/Kolf_AthleticTraining.jpg',
        hotspots :{

        }
    },
    kolfGymnastics:{
        image: 'images/Panorama/kolf/Kolf_Fieldhouse_Gymnastics1.jpg',
        hotspots :{
            kolfGymnastics2:{
                pitch: 10,
                yaw: 70,
                radius: 0.30,
                distance: 3
            }
        }
    },
    kolfGymnastics2:{
        image: 'images/Panorama/kolf/Kolf_Fieldhouse_Gymnastics2.jpg',
        hotspots :{
            kolfGymnastics:{
                pitch: 10,
                yaw: 70,
                radius: 0.30,
                distance: 3
            }
        }
    },
    //start Sage
    sageLounge:{
        image: 'images/Panorama/sage/study lounge/SageJournalismStudyLounge.jpg',
        hotspots :{

        }
    },
    sageOffice:{
        image: 'images/Panorama/sage/office/Sage_04_Office.jpg',
        hotspots :{

        }
    },
    //start clow
    clowStudy:{
        image: 'images/Panorama/clow/study/ClowStudy.jpg',
        hotspots :{

        }
    },
    //start titanField
    titanField: {
        image: 'images/Panorama/titan-field/titanFieldPano.jpg',
        hotspots: {

        }
    },
    titanAthletic: {
        image: 'images/Panorama/titan-field/TitanStadium_AthleticTrainingRoom.jpg',
        hotspots: {

        }
    },
    
    //start womensCenter
    womensCenterDoor: {
        image: 'images/Panorama/womens-center/WomensCenter_Outside_FrontDoor.jpg',
        hotspots: {
            womensCenterFront: {
                pitch: 20,
                yaw: -180,
                radius: 0.30,
                distance: 1.5
            }
        }
    },
    womensCenterFront: {
        image: 'images/Panorama/womens-center/womensCenterFront.jpg',
        hotspots: {
            womensCenterCouch: {
                pitch: 20,
                yaw: -125,
                radius: 0.30,
                distance: 1.5
            },
            womensCenterDoor: {
                pitch: 0,
                yaw: 120,
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
            },
            womensCenterLactationRoom: {
                pitch: 0,
                yaw: 95,
                radius: 0.30,
                distance: 3
            }
        }
    },
    womensCenterLactationRoom: {
        image: 'images/Panorama/womens-center/WomensCenter_01_LactationRoom.jpg',
        hotspots: {
            womensCenterCouch: {
                pitch: 15,
                yaw: -190,
                radius: 0.30,
                distance: 1.5
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
                distance: 2
            }
        }
    },
    //start sidewalk tour
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
    },
    //start appleton executive education center
    appletonConference:{
        image: 'images/Panorama/appleton_center/AppletonExecutiveEducationCenter_ConferenceRoom.jpg',
        hotspots :{
            appletonLobby: {
                pitch: 0,
                yaw: -100,
                radius: 0.30,
                distance: 3
            },
            appletonMain: {
                pitch: 0,
                yaw: 40,
                radius: 0.30,
                distance: 3
            }
        }
    },
    appletonEntrance:{
        image: 'images/Panorama/appleton_center/AppletonExecutiveEducationCenter_Entrance.jpg',
        hotspots :{
            appletonExterior: {
                pitch: 0,
                yaw: 115,
                radius: 0.30,
                distance: 3
            },
            appletonLobby: {
                pitch: 0,
                yaw: 0,
                radius: 0.30,
                distance: 3
            }
            
        }
    },
    appletonLobby:{
        image: 'images/Panorama/appleton_center/AppletonExecutiveEducationCenter_Lobby.jpg',
        hotspots :{
            appletonEntrance: {
                pitch: 0,
                yaw: 105,
                radius: 0.30,
                distance: 3
            },
            appletonHall: {
                pitch: 0,
                yaw: -153,
                radius: 0.30,
                distance: 3.5
            },
            appletonConference: {
                pitch: 0,
                yaw: -118,
                radius: 0.30,
                distance: 3
            }
        }
    },
    appletonHall:{
        image: 'images/Panorama/appleton_center/AppletonExecutiveEducationCenter_Hall.jpg',
        hotspots :{
            appletonLobby: {
                pitch: 0,
                yaw: 130,
                radius: 0.30,
                distance: 3
            },
            appletonTraining: {
                pitch: 0,
                yaw: -50,
                radius: 0.30,
                distance: 2
            },
            appletonMain: {
                pitch: 0,
                yaw: 40,
                radius: 0.30,
                distance: 3
            }
        }
    },
    appletonMain:{
        image: 'images/Panorama/appleton_center/AppletonExecutiveEducationCenter_Main.jpg',
        hotspots :{
            appletonHall: {
                pitch: 0,
                yaw: 100,
                radius: 0.30,
                distance: 3
            },
            appletonMeeting: {
                pitch: 0,
                yaw: -107,
                radius: 0.30,
                distance: 3
            }
        }
    },
    appletonExterior:{
        image: 'images/Panorama/appleton_center/AppletonExecutiveEducationCenter_Exterior.jpg',
        hotspots :{
            appletonEntrance: {
                pitch: 0,
                yaw: 150,
                radius: 0.30,
                distance: 3
            }
        }
    },
    appletonMeeting:{
        image: 'images/Panorama/appleton_center/AppletonExecutiveEducationCenter_MeetingRoom1.jpg',
        hotspots :{
            appletonMain: {
                pitch: 0,
                yaw: -168,
                radius: 0.30,
                distance: 2
            }
            }
    },
    appletonTraining:{
        image: 'images/Panorama/appleton_center/AppletonExecutiveEducationCenter_TrainingRoom122.jpg',
        hotspots :{
            appletonHall: {
                pitch: 0,
                yaw: -53,
                radius: 0.30,
                distance: 3
            }
            }
    },
    appletonWorkroom:{
        image: 'images/Panorama/appleton_center/AppletonExecutiveEducationCenter_Workroom.jpg',
        hotspots :{
            
            }
    }
    ,
    //start east 
    eastCenter:{
        image: 'images/Panorama/east_hall/EastHallFields_Center.jpg',
        hotspots :{
            
            }
    },
    eastSE:{
        image: 'images/Panorama/east_hall/EastHallFields_SE.jpg',
        hotspots :{
            
            }
    },
    eastSW:{
        image: 'images/Panorama/east_hall/EastHallFields_SW.jpg',
        hotspots :{
            
            }
    },
    eastNE:{
        image: 'images/Panorama/east_hall/EastHallFields_NE.jpg',
        hotspots :{
            
            }
    },
    eastNW:{
        image: 'images/Panorama/east_hall/EastHallFields_NW.jpg',
        hotspots :{
            
            }
    },
    //start student success center
    ccLobby:{
        image: 'images/Panorama/student_success/SSC_02_CC_Lobby.jpg',
        hotspots:{
            ccWaitingRoom: {
                pitch: 0,
                yaw: 120,
                radius: 0.30,
                distance: 3
            }
            }
    },
    ccWaitingRoom:{
        image: 'images/Panorama/student_success/SSC_02_CC_StaffWaitingArea.jpg',
        hotspots:{
            ccLobby: {
                pitch: 0,
                yaw: 100,
                radius: 0.30,
                distance: 3
            }
            }
    },
    ccBiofeedback:{
        image: 'images/Panorama/student_success/SSC_02_CC_BiofeedbackRoom.jpg',
        hotspots:{
            
            }
    },
    ccRelaxation:{
        image: 'images/Panorama/student_success/SSC_02_CC_RelaxationRoom.jpg',
        hotspots:{
            
            }
    }
};

//one vr view player to rule them all
VRView = new VRView.Player('#VR', {
    image: 'images/Panorama/blank.png',
    is_stereo: false,
    is_autopan_off: true
});
$("#VR > iframe").addClass("vr");

// fires when a user clicks on a 360 tour link
function loadVR(name){
    // assigning the functions to perform on ready and click
    onVRViewReady(name);
    VRView.on('click', onVRClick);

}

// fires when the VRView objects is ready to do stuff
function onVRViewReady(name){
    //console.log('onReady', name);
    switch(name){
        //put in parameter the name of the SCENE, not the name
        //case id is the id of the li from the menu that is clicked
        //(added to the Links array below)
        case "executiveRoom": loadScene( 'executiveRoom');
                              break;
        case "breakOne": loadScene( "breakroom1pt1");
                              break;
        case "breakTwo": loadScene( "breakroom2");
                              break;
        case "breakThree": loadScene( "breakroom3");
                              break;
        case "breakFour": loadScene( "breakroom4");
                              break;
        case "busalacchiRoom": loadScene( "busalacchiRoom");
                              break;
        case "sodexoBallroom": loadScene( "sodexoBallroomA");
                                  break;
        case "womensCenter": loadScene('womensCenterCouch');
                             break;
        case "titanField": loadScene('titanField');
                            break;
        case "dempseyStart": loadScene('dempseyFront');
                             break;
        case "clowStudy": loadScene( 'clowStudy');
                            break;
        case "sageLounge": loadScene( "sageLounge");
                            break;
        case "careerFair": loadScene("careerFair");
                            break;
        case "albeeWeight": loadScene("albeeWeight");
                            break;
        case "kolfAthletic": loadScene( "athleticTraining");
                            break;
        case "titanAthletic": loadScene( "titanAthletic");
                            break;
        case "lincolnFirst": loadScene( "lincolnConference");
                            break;
        case "lincolnSecond": loadScene("lincolnReceptionist");
                            break;
        case "annexGallery": loadScene( "annexGallery");
                            break;
        case "priebeGallery": loadScene( "priebeGallery");
                            break;
        case "appletonConference": loadScene( "appletonConference");
                            break;
        case "appletonEntrance": loadScene("appletonEntrance");
                            break;
        case "appletonMeeting": loadScene("appletonMeeting");
                            break;
        case "appletonTraining": loadScene("appletonTraining");
                            break;
        case "appletonWorkroom": loadScene("appletonWorkroom");
                            break;
        case "awccGreatHall": loadScene("awccGreatHall");
                            break;
        case "eastField": loadScene("eastCenter");
                            break;
        case "eastFieldSE": loadScene("eastSE");
                            break;
        case "eastFieldSW": loadScene("eastSW");
                            break;
        case "eastFieldNE": loadScene("eastNE");
                            break;
        case  "eastFieldNW": loadScene("eastSW");                         
                            break;
        case "gymnastics": loadScene("kolfGymnastics");
                             break;
        case "sageOffice": loadScene("sageOffice");
                             break;
        case "successLobby": loadScene("ccLobby");
                            break;
        case "biofeedback": loadScene("ccBiofeedback");
                            break;
        case "relaxationRoom": loadScene("ccRelaxation");
                             break;
    }
    
}

// fires when a hotspot gets clicked
function onVRClick(e) {
    //console.log('onVRClick', e.id);
    if (e.id) {
        loadScene( e.id);
    }
}

// loads the image and its hotspots (without array)
function loadScene(id) {
    //debugger;
    //console.log('loadScene', id);

     // Set the image
      VRView.setContent({
         image: scenes[id].image
    });

    // Add all the hotspots for the scene
    var newScene = scenes[id];
    var sceneHotspots = Object.keys(newScene.hotspots);
        for (var i = 0; i < sceneHotspots.length; i++) {
            var hotspotKey = sceneHotspots[i];
            var hotspot = newScene.hotspots[hotspotKey];

        VRView.addHotspot(hotspotKey, {
             pitch: hotspot.pitch,
             yaw: hotspot.yaw,
             radius: hotspot.radius,
             distance: hotspot.distance
        });
     }
}
// loads the image and its hotspots (with array and id)

//should be the id for the link in the menu that gets selected
var links = [
    "executiveRoom",
    "womensCenter",
    "titanField",
    "dempseyStart",
    "clowStudy",
    "sageLounge",
    "breakOne",
    "breakTwo",
    "breakThree",
    "breakFour",
    "busalacchiRoom",
    "careerFair",
    "sodexoBallroom",
    "albeeWeight",
    "kolfAthletic",
    "titanAthletic",
    "lincolnFirst",
    "lincolnSecond",
    "annexGallery",
    "priebeGallery",
    "appletonConference",
    "appletonEntrance",
    "appletonMeeting",
    "appletonTraining",
    "appletonWorkroom",
    "awccGreatHall",
    "eastField",
    "eastFieldSE",
    "eastFieldSW",
    "eastFieldNE",
    "eastFieldNW",
    "gymnastics",
    "sageOffice",
    "successLobby",
    "biofeedback",
    "relaxationRoom"
]
// fires on click of #executiveRoom
//for each possible tour to be selected> add an event listener to hide/show the vr player and set the appropriate scene 
//based on which one is clicked
links.forEach(function(thisOne){
    var index = links.indexOf(thisOne);
    document.getElementById(links[index]).addEventListener('click', function(){
        //if it is invisible, make it visible (and load right scene)
            loadVR(links[index]);
        //manages the visibility/invisibility of the iframe and the overlay
        $('#overlay').css('visibility', 'visible');
        $('#overlay').animate({"opacity": "0.3"}, "slow");
        $("#VR > iframe").css('visibility', 'visible');
        $("#VR").css("display", "initial");
        $("#vrCloseButton").css("visibility", "visible");

        $("#notif").trigger("click");
    })

});
// VRclose button hides the vr player, close button and overlay
$("#vrCloseButton").click(function(){
      $("#VR").css("display", "none");
      $('#overlay').css('visibility', 'hidden');
      $('#overlay').animate({"opacity": "0"}, "slow");
      $("#vrCloseButton").css("visibility", "hidden");
});