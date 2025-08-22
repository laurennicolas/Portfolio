import { Mail, MapPin, Phone} from "lucide-react";


export const Footer = () => {
    return (
      <section className="relative bottom-0 left-0 z-20 w-full p-4 bg-background/95 border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-500 text-sm text-center">
          <div className="space-y-8">

            <div className="space-y-3 justify-center">
              <div className="flex items-start space-x-4">
                <div> <Mail className="h-4 w-4 text-primary" />{" "} </div>
                <div>
                  <a
                    href="mailto:laurennicolas73@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    laurennicolas73@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
              <div>  <Phone className="h-4 w-4  text-primary text-center" />{" "} </div>
                <div>
                  <a
                    href="tel:+19403375171"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (940) 337-5171
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div>  <MapPin className="h-4 w-4 text-primary" />{" "}</div>
                <div>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Dallas, Texas
                  </a>
                </div>
              </div>
            </div>
        </div>
        </div>
  
      </section>
    );
  };
  
  {/*
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>


          </li>
        </ul>    
    
    */}