import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import "./CaroselStyle.css";

import { useNavigate } from "react-router";

export default function AutoCarousels() {

    const navigate = useNavigate();


    return (
        <>
            <Carousel className="cr">
                <Carousel.Item interval={3500}>
                    <img className="d-block w-100" src="images/porsche_hero.png" alt="First slide" />
                    <Carousel.Caption>
                        <h1 id="modern">
                            RENT THE <span id="section">BEST CARS</span>
                        </h1>

                        <Button className="btn1" variant="dark" onClick={()=>navigate('/vehicles')}>

                            RENT NOW
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src="images/mustang_hero.png" alt="Second slide" />
                    <Carousel.Caption>
                        <h1 id="modern">
                            AT THE <span id="section">BEST PRICE</span>
                        </h1>

                        <Button className="btn1" variant="dark" onClick={()=>navigate('/vehicles')}>

                            RENT NOW
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src="images/audi_hero.png" alt="Third slide" />
                    <Carousel.Caption>
                        <h1 id="modern">
                            FROM THE <span id="section">BEST</span>
                        </h1>

                        <Button className="btn1" variant="dark" onClick={()=>navigate('/vehicles')}>

                            RENT NOW
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
