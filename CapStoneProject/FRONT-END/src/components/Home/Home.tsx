import AutoCarousels from "../Carousel/AutoCarousels";
import HomeForm from "../HomeForm/HomeForm";
import MostWanted from "../MostWanted/MostWanted";
import Prices from "../pricing/Prices";
import Team from "../Team/Team";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <AutoCarousels />
            <HomeForm />
            <MostWanted />
            <Prices />
            <Team />
            <Testimonials />
        </>
    );
};

export default Home;
