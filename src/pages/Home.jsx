import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { ProjectSection } from "../components/ProjectSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
<div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">    
        <div className = "content-wrap">
            <div className = "min-h-screen text-foreground overflow-x-hidden">
                { /* Navbar */ }
                    <NavBar />
                
                { /* Main Content */ }
                <main>
                    <HeroSection/>
                    <ProjectSection/>
                </main>
            </div> 

            <Footer/>
    </div>
    </div>
    );
};
