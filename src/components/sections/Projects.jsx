import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">
                        Quiz App
                    </h3>
                    <p className="text-gray-400 mb-4">
                       Designed and developed a dynamic JavaScript-based quiz application with real-time answer validation and automated navigation, delivering 50+ MCQs for an engaging and seamless user experience.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "Javascript"].map((tech, key) => (
                            <span 
                                    key={key}
                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://github.com/SunidhiPria/quiz" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">
                       Password Manager
                    </h3>
                    <p className="text-gray-400 mb-4">
                        Built a user-friendly JavaScript web app for secure local password storage, allowing users to save, copy, and manage 100+ passwords seamlessly—eliminating risks of mismanagement or insecure handling.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "Javascript"].map((tech, key) => (
                            <span 
                                    key={key}
                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/SunidhiPria/PasswordManager" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">
                        Amazon Clone
                    </h3>
                    <p className="text-gray-400 mb-4">
                         Built and enhanced a JavaScript based web application for a User-responsive interface replicating the
 layout and design of the home page of the popular Amazon.com website. 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "Javascript"].map((tech, key) => (
                            <span 
                                    key={key}
                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/SunidhiPria/amazon-clone" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">
                         Comprehensive Matrix Solver
                    </h3>
                    <p className="text-gray-400 mb-4">
                        Developed a class-based C++ matrix solver to perform advanced operations—like inverse, determinant, and eigenvalue computations—optimized for modularity and memory efficiency, and built/tested on a Linux terminal using g++.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["C++", "Linux", "OOP", "Linear Algebra"].map((tech, key) => (
                            <span 
                                    key={key}
                                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/SunidhiPria/cppProjHTS" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}