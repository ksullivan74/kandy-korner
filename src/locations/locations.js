import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LocationsList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then (response => response.json())
            .then ((locationArray) => {
                setLocations(locationArray)
            }

            )
        },[]
    )

    return<>
    
        <h2>List of Locations</h2>

        <ul>
            {
                locations.map(
                    (location) => {
                        return<>
                            <h4>Location:</h4>
                            <li>{location.address}</li>
                            <li>Square Feet: {location.squareFeet}</li>
                        </>
                    }
                )
            }
        </ul>
    
    </>
}