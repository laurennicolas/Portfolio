import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { ProjectSection } from "../components/ProjectSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className = "page-container">
        <div className = "content-wrap">
            <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">

                { /* Theme Toggle */ }
                    <ThemeToggle />

                { /* Background Effects */ }
                
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
