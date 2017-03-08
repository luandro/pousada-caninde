import Slider from 'react-slick'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const list = [
    {
        image: 'https://unsplash.it/1200/800/?random',
        message: 'No coração da Chapada seu refúgio está de portas abertas',
    }
]

export default () => (
    <div className="wrapper">
        <Slider {...settings} className="container">
            {list.map((item, key) => (
                <div key={key} className="item" style={{ backgroundImage: `url(${item.image})`, display: 'flex' }}>
                    <h2>{item.message}</h2>
                </div>
            ))}
        </Slider>
        <style jsx>{`
            .wrapper {
                height: 95vh;
            }
            .container {
                height: 95vh;
            }
            .item {
                background-size: cover;
                height: 95vh;
                align-items: center;
                flex-flow: column;
                justify-content: center;
            }
            .item h2 {
                font-size: 2em;
                text-transform: uppercase;
                color: #fff;
                max-width: 95%;
                text-align: center;
                margin: 0 auto;
            }
        `}</style>
    </div>
)