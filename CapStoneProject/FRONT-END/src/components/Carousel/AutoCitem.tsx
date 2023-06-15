import Carousel from "react-bootstrap/Carousel";

export default function AutoCitem() {
    return (
        <>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </>
    );
}
