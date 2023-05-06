
import { DirectionsService, DirectionsRenderer, LoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';

const Direction = ({ origin, destination }) => {
    const [response, setrespons] = useState(null)
    // const origin = ''
    // const destination = ''

    const directionsCallback = (res) => {
        console.log(res)

        if (res !== null) {
            if (res.status === 'OK') {
                setrespons(res)

            } else {
                console.log('response: ', res)
            }
        }
    }
    return (
        <div>
            <LoadScript
                googleMapsApiKey="YOUR_API_KEY"
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    // required
                    zoom={13}
                    // required
                    center={{
                        lat: 0,
                        lng: -180
                    }}

                >
                    {
                        (
                            destination !== '' &&
                            origin !== ''
                        ) && (
                            <DirectionsService
                                // required
                                options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                                    destination: destination,
                                    origin: origin,
                                    travelMode: "driving"
                                }}
                                // required
                                callback={directionsCallback}

                            />
                        )
                    }

                    {
                        this.state.response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                                    directions: response
                                }}

                            />
                        )
                    }
                </GoogleMap>

            </LoadScript>
        </div>
    );
};

export default Direction;