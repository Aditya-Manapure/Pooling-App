import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
import React from 'react';
import MapView ,{ Marker } from 'react-native-maps';
//import MapViewDirections from 'react-native-maps-directions';
//import { GOOGLE_MAPS_APIKEY, OPEN_ROUTE_SERVICE_APIKEY } from "@env";
import {Dimensions} from 'react-native';
const { height, width } = Dimensions.get( 'window' ); 

const Map = () => {
  //const origin = {latitude: 37.3318456, longitude: -122.0296002};
  //const destination = {latitude: 37.771707, longitude: -122.4053769};
  const LATITUDE_DELTA = 0.12;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height)
    return (
    <View>
       <MapView
            style = {{
              height : '100%',
              width : '100%'
            }}
            initialRegion={{
            latitude: 21.173958805193774,
            longitude: 79.65262474342637,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        }}
      >
      {/*<MapViewDirections
        origin={origin}
        destination={destination}
        apikey={OPEN_ROUTE_SERVICE_APIKEY}
      />*/}

      </MapView>
    
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
