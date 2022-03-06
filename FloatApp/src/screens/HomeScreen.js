import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//var openrouteservice = require("openrouteservice-js");
//import { GOOGLE_MAPS_APIKEY } from "@env";
//import Geolocation from 'react-native-geolocation-service';

//navigator.geolocation = require('@react-native-community/geolocation');

const HomeScreen = () => {

  /*var Geocode = new openrouteservice.Geocode({ api_key: "5b3ce3597851110001cf62482663b0bbdc844998bea788272def8559"});

  Geocode.geocode({
    text: "Heidelberg",
    //boundary_circle: { lat_lng: [49.412388, 8.681247], radius: 50 },
    //boundary_bbox: [[49.260929, 8.40063], [49.504102, 8.941707]],
    //boundary_country: ["DE"]
  })
  .then(function(response) {
    // Add your own result handling here
    console.log("response", JSON.stringify(response));
  })
  .catch(function(err) {
    var str = "An error occurred: " + err;
    console.log(str);
  });**/

  /*Geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (error) => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );*/

  return (

    <SafeAreaView style={tw`bg-white h-full`}>
    <View style = {tw`p-5`}>
        <Image 
            style = {{
                width : 100,
                height : 100,
                resizeMode :"contain",
            }}
            source = {
              require('../assets/Logo.png')
              /*{
                //uri : "",
            }*/}
        />

        {/*<GooglePlacesAutocomplete
            styles={{
                container :{
                    flex : 0
                },
                textInput : {
                   fontSize : 18,  
                }
            }}
            query = {{
                key : GOOGLE_MAPS_APIKEY,
                language : 'en',
            }} 
            placeholder='Starting Position'
            nearbyPlacesAPI = 'GooglePlacesSearch'
            debounce={400}
        />*/}


        <NavOptions />
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text :{
        color : 'red',
    }
});
