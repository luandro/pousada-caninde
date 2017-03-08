import Slider from 'react-slick'
import PhoneIcon from 'react-icons/lib/md/phone-iphone'
import FbIcon from 'react-icons/lib/fa/facebook'
import InstaIcon from 'react-icons/lib/fa/instagram'
import MarkerIcon from 'react-icons/lib/fa/map-marker'
import Input from './Input'
import Button from './Button'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const list = [
    'lorem bla bla blablba bla bla bla bblablablabl alb alb al balbalba lba lba lba lba lab lab la',
    'lorem bla bla blablba bla bla bla bblablablabl alb alb al balbalba lba lba lba lba lab lab la',
    'lorem bla bla blablba bla bla bla bblablablabl alb alb al balbalba lba lba lba lba lab lab la',
]

export default ({ handleChange, handleSubmit }) => (
    <div className="wrapper">
        <div className="container">
            <div className="box">
                <h3>O que dizem sobre nós</h3>
                <Slider {...settings} className="slider">
                    {list.map((item, key) => (
                        <p key={key}>{item}</p>
                    ))}
                </Slider>
                <div className="list">
                    <div>
                        <PhoneIcon size={20} color={'#000'} />
                        <span>(61) 3892 8293</span>
                    </div>
                    <div>
                        <FbIcon size={20} color={'#000'} />
                        <span>(61) 3892 8293</span>
                    </div>
                    <div>
                        <InstaIcon size={20} color={'#000'} />
                        <span>(61) 3892 8293</span>
                    </div>
                    <div>
                        <MarkerIcon size={20} color={'#000'} />
                        <span>(61) 3892 8293</span>
                    </div>
                </div>
            </div>
            <div className="box contact">
                <h3>Contato</h3>
                <Input onChange={handleChange} />
                <Input onChange={handleChange} />
                <Input onChange={handleChange} />
                <Button onClick={handleSubmit}>
                    Enviar
                </Button>
            </div>
        </div>
        <div className="footer">
            <hr />
            <span>Desenvolvido por Mtx Web Art 2017</span>
        </div>
        <style jsx>{`
            .wrapper {
                padding: 50px 0;
                text-align: center;
            }
            .container {
                
            }
            .box {
            }
            .slider p {
                text-align: center;
                max-width: 80%;
            }
            .list {
                margin-top: 30px;
                display: flex;
                flex-flow: column;
                align-items: flex-start;
                justify-content: space-between;
            }
            .contact {
                display: flex;
                flex-flow: column;
                align-items: flex-start;
                justify-content: space-between;
            }
            .footer {
                margin: 0 auto;
                width: 80%;
            }
            @media(min-width: 768px) {
                .container {
                    display: flex;
                    align-items: center;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                }
                .box {
                    width: 45%;  
                    height: 250px;                  
                }
            }
        `}</style>
    </div>
)