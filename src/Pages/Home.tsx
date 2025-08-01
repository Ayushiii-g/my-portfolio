import HeroSection from "../Components/HomeComponents/HeroSection";
import AboutMe from "../Components/HomeComponents/AboutMe";
import DeepDive from "../Components/HomeComponents/DeepDive";
import ExpComponent from "../Components/HomeComponents/ExpComponent";
import Skills from "../Components/HomeComponents/Skills";
import Education from "../Components/HomeComponents/Education";
import CTA from "../Components/HomeComponents/cta";
import ScrollVelocity from "../Animations/ScrollVelocity";

export default function Home() {
    return (
        <div className="w-full h-full bg-black">
            <HeroSection />
            <div className="pt-0 pb-20">
                <ScrollVelocity
                    texts={['Hope you have a great day!']} 
                    velocity={100} 
                    className="text-white text-4xl font-bold text-center"
                />
            </div>
            <AboutMe />
            <DeepDive />
            <ExpComponent />
            <Skills />
            <Education />
            <CTA />
        </div>
    );
}