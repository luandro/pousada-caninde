import GoogleMapReact from 'google-map-react'
import Icon from 'react-icons/lib/md/place'

const Marker = () => <Icon size={85} color={'#005FB6'} />

const Map = ({ center, zoom }) => (
    <div className="wrapper">
        <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
        >
            <Marker lat={-14.1754559} lng={-47.8153361} />
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
    zoom: 15
}

export default Map;
