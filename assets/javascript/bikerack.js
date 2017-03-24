 <script>
    // $(document).on("ready",function(){
      // Note: This app requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
       var LatLong; //Declaring variable to capture, every time, the users location in coordinates, and use values for search closest coordinates in bike-racks inventory in SFMTA api.
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {: 13
        });
        var infoWindow = new google.maps.InfoWindow({map: map});
        // This is HTML5 geolocation from  Google API documentation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            LatLong = position.coords.latitude+","+position.coords.longitude;
            $.ajax({
              url: "https://data.sfgov.org/resource/dd7x-3h4a.json?$where=within_circle(geom,"+LatLong+",50000)",// Within_circle came from API Documnetation. LatLong is the variable we created with users location. Right now, radius for search in SFMTA API is 50,000 meters from users location.
             
          center: {lat: 37.820667, lng: -122.478526}, //Golden Gate Bridge
          //center: {lat: -34.397, lng: 150.644},
          zoom method: "GET",
            }).done(function(response) { // response is the entire output (all the bike racks in San Francisco -and any city with rack inventory shared via API we can get)
              console.log("Retrieved " + response.length + " records from the dataset!");
              //console.log(response);
              // console.log(response[0].address);
              // console.log(response[0].geom.coordinates);
              // console.log(response[0].location);
              // console.log(response[0].street);
              // console.log(response[0].number_of_racks);
              // console.log(response[0].number_of_spaces);
              // console.log(response[0].object_id);
              // console.log(response[0].year_installed);
                // $.each(response, function(key,value){
              // });
            });
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
            console.log(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }// End of Google geolocation code (#map)
    </script>
    <script async defer

    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUz56bbBWqGP_KM-0ktGpJ5HU04uEV3O8&callback=initMap"
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnpVjWRbNcAZdfqpfVCrF00dvUEeJOxw4&callback=initMap"
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhjjBOwcMEN71iDD4rtHjlnWl01nlJ178&callback=initMap"
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBL5wZeXGynN-Jvm4FIDyncTwypJuZv8gc&callback=initMap"
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBB0g8LPBex8QMHt1b3NuYDMv0dt_h-R_g&callback=initMap"
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAGze9W3kLzZHXkfpkQBLMxyXmIhgwPGg&callback=intmap">
    // Google maps API in HTML5 (3/24/2017) for Geolocation code (#map)
    </script>

	<div id="main"><!-- div 1 -->
		<div id="work-space01">
			</div>		
	</div> <!-- end of div 1 -->
		<button>START</button>
    <input type="text">
	<div id="work-space03"><!-- div 3 -->
		<button>FINISH</button>
    <input type="text>"
	</div><br>
  <button onclick="clickyfunction">GO</button>
  <script type="text/javascript">
    var clickyfunction = function(e) {
      
  </script>