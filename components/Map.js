import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => (
    <div className="wrapper">
        <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
        >
        </GoogleMapReact>
        <style jsx>{`
            .wrapper {
                height: 500px;
                width: 100%;
            }
        `}</style>
    </div>
)

Map.defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
}

export default Map;
