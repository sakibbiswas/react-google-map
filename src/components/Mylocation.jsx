import React from 'react'
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 23.92837371420862,
  lng: 90.39518804695744
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker
          onLoad={onLoad}
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)