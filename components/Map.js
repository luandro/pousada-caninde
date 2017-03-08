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
    center: {lat: -14.1769177, lng: -47.8143979},
    zoom: 17.5
}

export default Map;
