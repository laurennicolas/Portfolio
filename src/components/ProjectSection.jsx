import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1, 
        title: "Disaster Sentiment Dashboard",
        description: "A disaster monitoring dashboard that identifies current disasters and tracks public sentiment. This enhances situational awareness for first responders, researchers, and the general public.",
        image: "/projects/Disaster Dashboard.png",
        tags: ["Vite.js" , "Tailwind CSS", "RadixUI", "Python", "Flask", "Render"],
        demoURL: "https://disaster-sentiment-tracker.vercel.app",
        githubURL: "https://github.com/syl15/CSProject"
    },
    {
        id: 2, 
        title: "Concrete Progress Visualization",
        description: "A PowerBI dashboard that automates Liquified Natural Gas: Train 1 concrete progress with SQL-powered data pipeline and map visual.",
        image: "/projects/Disaster Dashboard.png",
        tags: ["Power BI" , "mySQL", "Mircosoft Excel", "Primerva 6"],
        demoURL: "#",
        githubURL: "#"
    }
]


export const ProjectSection = () => {
    return (
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary"> Projects </span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was 
            crafted with attention to detail, performance, and user experience. 
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
  
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
  
                  <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3"> {project.description}  </p>
                  
                  <div className="flex justify-between items-center mt-auto pb-4">
                    <div className="flex space-x-3 md-8 pb-3 gap-4 py-3 font-s text-s">
                      <a
                        className="cosmic-button text-s w-fit flex items-center mx-auto mr-1"
                          target="_blank"
                        href= {project.githubURL}
                       >
                         <div className = "mr-1"> Live Link </div> <ExternalLink size={20} />
                       </a>
                     
                       <a
                        className="cosmic-button text-s w-fit flex items-center mx-auto"
                        target="_blank"
                        href= {project.githubURL}
                       >
                         <div className = "mr-1"> GitHub </div> <Github size={20} />
                    
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              href="https://www.linkedin.com/in/laurennicolas"
            >
              Check My Linkedin <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    );
  };