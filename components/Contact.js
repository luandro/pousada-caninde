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
    'Excelente hospedagem para quem quer relaxar e estar próximo à natureza, contando ainda com o gentil atendimento de seus proprietários.',
    'Excelente hospedagem para quem quer relaxar e estar próximo à natureza, contando ainda com o gentil atendimento de seus proprietários.',
    'Excelente hospedagem para quem quer relaxar e estar próximo à natureza, contando ainda com o gentil atendimento de seus proprietários.',
]

export default ({ handleChange, handleSubmit, name, email, comment }) => (
    <div className="wrapper" id="contact">
        <div className="container">
            <div className="box">
                <h3>O que dizem sobre nós</h3>
                <Slider {...settings} className="slider">
                    {list.map((item, key) => (
                        <p key={key}>{item}</p>
                    ))}
                </Slider>
                <div className="list">
                    <div className="item">
                        <PhoneIcon size={20} color={'#000'} />
                        <span>(61) 3892 8293</span>
                    </div>
                    <div className="item">
                        <FbIcon size={20} color={'#000'} />
                        <a href="facebook.com">facebook.com/pousadacaninde</a>
                    </div>
                    <div className="item">
                        <InstaIcon size={20} color={'#000'} />
                        <a href="instagram.com">instagram.com/pousadacaninde</a>
                    </div>
                    <div className="item">
                        <MarkerIcon size={20} color={'#000'} />
                        <span>Rua Canindé, 1119, São Jorge / PA</span>
                    </div>
                </div>
            </div>
            <div className="box contact">
                <h3>Contato</h3>
                <Input onChange={handleChange} placeholder={name}/>
                <Input onChange={handleChange} placeholder={email} />
                <Input type='textarea' onChange={handleChange} placeholder={comment} />
                <Button onClick={handleSubmit}>
                    Enviar
                </Button>
            </div>
        </div>
        <div className="footer">
            <hr />
            <span>© 2017 Desenvolvido por <b>Mtx Web Art</b></span>
        </div>
        <style jsx>{`
            .wrapper {
                padding: 50px 0 80px;
                text-align: center;
                box-shadow: 0 4px 4px rgba(0,0,0,0.8);
                z-index: 1;
            }
            .wrapper h3 {
                text-transform: uppercase;
                width: 100%;
            }
            .container {
                padding-bottom: 50px;
            }
            .box {
            }
            .slider p {
                text-align: center;
                max-width: 80%;
            }
            .list {
                height: 160px;
                margin-top: 140px;
                display: flex;
                flex-flow: column;
                align-items: flex-start;
                justify-content: space-between;
            }
            .item > * {
                margin-left: 15px;
                font-weight: 300;
            }
            .contact {
                display: flex;
                flex-flow: column;
                align-items: flex-start;
                justify-content: space-between;
            }
            .footer {
                padding-top: 30px;
                margin: 0 auto;
                width: 80%;
            }

            .container {
                display: flex;
                align-items: center;
                flex-flow: row nowrap;
                justify-content: space-between;
            }
            .box {
                width: 45%;  
                height: 500px; 
                margin: auto;                 
            }
            @media(max-width: 1024px) {
                .container {
                    display: block;
                }
                .box {
                    width: 98%;  
                }
                .list {
                    margin-left: 30px;
                }
            }
        `}</style>
    </div>
)