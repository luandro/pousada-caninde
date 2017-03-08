import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => (
    <div>
        <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
        >
        </GoogleMapReact>
    </div>
)

Map.defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
}

export default Map;
