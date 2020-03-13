
// between these script tags: AJAX call and everything for the search results
// including some display things for the results
// and the open/close popup schtuff + turning the results into "links" :D


$( "#searchInput" ).keyup(function() {
    //takes the length of the value of the string in
    // the search and returns a number
    // ex. "hello" = 5
    var characters = $(this).val().length;
    // console.log("# of characters in search:" + characters);

    if(characters < 3){
      $("#searchResults").css("visibility", "hidden");
        // web adjustment only
        $(".drawerContentsAdjust").css("top", "0px ");

    } else if (characters >= 3){
          callAjax();

    }
    });
    function closeAllPopup(){
      $("#albeePopup").css('visibility', 'hidden');
      $("#acPopup").css('visibility', 'hidden');
      $("#baseballPopup").css('visibility', 'hidden');
      $("#alumniPopup").css('visibility', 'hidden');
      $("#athleticPopup").css('visibility', 'hidden');
      $("#biodigesterPopup").css('visibility', 'hidden');
      $("#blackhawkPopup").css('visibility', 'hidden');
      $("#buckstaffPopup").css('visibility', 'hidden');
      $("#equityPopup").css('visibility', 'hidden');
      $("#campusPopup").css('visibility', 'hidden');
      $("#ceramicsPopup").css('visibility', 'hidden');
      $("#clowPopup").css('visibility', 'hidden');
      $("#gardensPopup").css('visibility', 'hidden');
      $("#dempseyPopup").css('visibility', 'hidden');
      $("#donnerPopup").css('visibility', 'hidden');
      $("#eastPopup").css('visibility', 'hidden');
      $("#environmentalPopup").css('visibility', 'hidden');
      $("#evansPopup").css('visibility', 'hidden');
      $("#fletcherPopup").css('visibility', 'hidden');
      $("#fredericPopup").css('visibility', 'hidden');
      $("#gruenhagenPopup").css('visibility', 'hidden');
      $("#halseyPopup").css('visibility', 'hidden');
      $("#harringtonPopup").css('visibility', 'hidden');
      $("#heatingPopup").css('visibility', 'hidden');
      $("#parkingRampPopup").css('visibility', 'hidden');
      $("#horizonPopup").css('visibility', 'hidden');
      $("#kolfPopup").css('visibility', 'hidden');
      $("#lincolnPopup").css('visibility', 'hidden');
      $("#multiculturalPopup").css('visibility', 'hidden');
      $("#nursingPopup").css('visibility', 'hidden');
      $("#oviattPopup").css('visibility', 'hidden');
      $("#polkPopup").css('visibility', 'hidden');
      $("#pollockPopup").css('visibility', 'hidden');
      $("#radfordPopup").css('visibility', 'hidden');
      $("#reevePopup").css('visibility', 'hidden');
      $("#sagePopup").css('visibility', 'hidden');
      $("#scottPopup").css('visibility', 'hidden');
      $("#stewartPopup").css('visibility', 'hidden');
      $("#recreationPopup").css('visibility', 'hidden');
      $("#successPopup").css('visibility', 'hidden');
      $("#swartPopup").css('visibility', 'hidden');
      $("#taylorPopup").css('visibility', 'hidden');
      $("#titanPopup").css('visibility', 'hidden');
      $("#policePopup").css('visibility', 'hidden');
      $("#websterPopup").css('visibility', 'hidden');
    }

  function callAjax(){
  $.ajax({
    type: "GET",
    url: "../php/search.php",
    data: ({search: $("#searchInput").val()}),
    success: function(results){

      // console.log("success!");
      // console.log(results);

      $("#searchResults").css("visibility","visible");


      var emptyResult = "<ul><li class='firstResults text'><h6>Search Results:</h6></li></ul>";
      if( emptyResult == results){
        // note to self: if you want to add class/id to these make sure to use
        // different quotations than you use to wrap the string~
        // "" string, '' for classes and ids
        $("#searchResults").html("<ul><li id='noResults' class='text'> No results</li></ul>");

      } else if (emptyResult !== results){
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
          var hello = $("#searchResults > ul > li:nth-child(" + n + ")").text().toLowerCase().replace(/ /g, "");
          // sets the id of the element ^ to the string returned above
          $("#searchResults > ul > li:nth-child(" + n + ")").prop("id", hello + "Result");
          clickResults(hello);
        // increase n until it matches the number of listItems that are present
        } while (n <= listItems);

        // console.log(n);
        // console.log("number of list elements:" + listItems);
        // $("#albeehallResult").click(function(){
        //   $("#albeeLink").trigger("click");
        // });
        function clickResults(id){
          // debugger;
          // console.log(id);
            $("#"+ id + "Result").click(function(){
              closeAllPopup();
              if(id ==  "albeehall"){
                $("#albeeLink").trigger("click");
              } else if ( id == "artsandcommunicationscenter"){
                $("#acLink").trigger("click");
              } else if (id == "alumnibaseballstadium"){
                $("#baseballLink").trigger("click");
              } else if (id == "alumniwelcomeandconferencecenter"){
                $("#alumniLink").trigger("click");
              } else if (id == "athleticservicebuilding"){
                $("#athleticLink").trigger("click");
              } else if (id == "biodigester"){
                $("#biodigesterLink").trigger("click");
              } else if (id == "blackhawkcommons"){
                $("#blackhawkLink").trigger("click");
              } else if (id == "buckstaffplanetarium"){
                $("#buckstaffLink").trigger("click");
              } else if (id == "campuscenterforequityanddiversity"){
                $("#equityLink").trigger("click");
              } else if (id == "campusservices"){
                $("#campusLink").trigger("click");
              } else if (id == "ceramicslaboratory"){
                $("#ceramicsLink").trigger("click");
              } else if (id == "clowsocialsciencecenter"){
                $("#clowLink").trigger("click");
              } else if (id == "communitygardens"){
                $("#gardensLink").trigger("click");
              } else if (id == "dempseyhall"){
                $("#dempseyLink").trigger("click");
              } else if (id == "donnerhall"){
                $("#donnerLink").trigger("click");
              } else if (id == "easthall"){
                $("#eastLink").trigger("click");
              } else if (id == "environmentalscienceandresearchcenter"){
                $("#environmentalLink").trigger("click");
              } else if (id == "evanshall"){
                $("#evansLink").trigger("click");
              } else if (id == "fletcherhall"){
                $("#fletcherLink").trigger("click");
              } else if (id == "fredricmarchtheater"){
                $("#fredricLink").trigger("click");
              } else if (id == "gruenhagenconferencecenter"){
                $("#gruenhagenLink").trigger("click");
              } else if (id == "halseysciencecenter"){
                $("#halseyLink").trigger("click");
              } else if (id == "harringtonhall"){
                $("#harringtonLink").trigger("click");
              } else if (id == "heatingplant"){
                $("#heatingLink").trigger("click");
              } else if (id == "highavenueparkingramp"){
                $("#parkingRampLink").trigger("click");
              } else if (id == "horizonvillage"){
                $("#horizonLink").trigger("click");
              } else if (id == "kolfsportscenter"){
                $("#kolfLink").trigger("click");
              } else if (id == "lincolnhall"){
                $("#lincolnLink").trigger("click");
              } else if (id == "multiculturaleducationcenter"){
                $("#multiculturalLink").trigger("click");
              } else if (id == "nursingeducationbuilding"){
                $("#nursingLink").trigger("click");
              } else if (id == "oviatthouse"){
                $("#oviattLink").trigger("click");
              } else if (id == "polklibrary"){
                $("#polkLink").trigger("click");
              } else if (id == "pollockhouse"){
                $("#pollockLink").trigger("click");
              } else if (id == "radfordhallandstudenthealthcenter"){
                $("#radfordLink").trigger("click");
              } else if (id == "reevememorialunion"){
                $("#reeveLink").trigger("click");
              } else if (id == "sagehall"){
                $("#sageLink").trigger("click");
              } else if (id == "scotthall"){
                $("#scottLink").trigger("click");
              } else if (id == "stewarthall"){
                $("#stewartLink").trigger("click");
              } else if (id == "studentrecreationandwellnesscenter"){
                $("#recreationLink").trigger("click");
              } else if (id == "studentsuccesscenter"){
                $("#successLink").trigger("click");
              } else if (id == "swarthall"){
                $("#swartLink").trigger("click");
              } else if (id == "taylorhall"){
                $("#taylorLink").trigger("click");
              } else if (id == "titanstadium"){
                $("#titanLink").trigger("click");
              } else if (id == "universitypolicestation"){
                $("#policeLink").trigger("click");
              } else if (id == "websterhall"){
                $("#websterLink").trigger("click");
              }
            });
        }
      }

      var check = $("#drawerContents").hasClass("drawerContentsAdjust");
      if(check === true){
        // only for desktop
        // adjust position of menu drawer based on height of search results
        function getTotalHeight(){
          var searchHeight = $("#searchResults").height();
          // var mobileHeaderHeight = $("#mobileHeader").height();
          // var webSearchHeight = $("#webSearch").height();
          return(searchHeight - 3);
        }
        // console.log("Height of search div:" + getTotalHeight());

        // get element, apply css to the element(not to the class)
        // for mobile: top reset is forced with another .css
        $(".drawerContentsAdjust").css("top", getTotalHeight());

      }


    }
  })
};