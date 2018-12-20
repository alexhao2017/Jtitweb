import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import {Marker} from 'react-google-maps'
class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: -33.825339, lng:  151.199981

 } }
        defaultZoom = { 13 }
      >
      <Marker position={ { lat: -33.825339, lng:  151.199981

} }/>
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `27em`, width: '27em' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          isMarkerShown={true} />
      </div>
   );
}
};
export default Map;
