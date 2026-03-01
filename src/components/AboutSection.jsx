import { Code } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about"
     className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-centre">
                <div className="space-y-6">
                    <h3 className="yexy-2xl font-semibold"> Passionate Web Developer & Tech Creator</h3>

                    <p className="text-muted-foregroind">
                    I’m a second-year Computer Science student at Dublin City University with experience in both frontend and backend development using React and Django.
                    I enjoy building modern web applications and continuously improving my problem-solving and programming skills.
                    Currently, I’m seeking internship opportunities where I can contribute to real-world projects and grow as a software developer
                    </p>

                    <p className="text-muted-foregroind">
                    I’m a second-year Computer Science student at Dublin City University with experience in both frontend and backend development using React and Django.
                    I enjoy building modern web applications and continuously improving my problem-solving and programming skills.
                    Currently, I’m seeking internship opportunities where I can contribute to real-world projects and grow as a software developer
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>

                        <a href="#myCV"
                         className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Downloand CV
                        </a>
                        
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                    </div>

                  
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                        </div>
                
                   
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                        </div>
                 
                </div>    

                <div>

                </div>
            </div>

        </div>

    </section>);
};