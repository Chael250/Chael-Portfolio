
import { useState, useEffect } from 'react';
import { Github, Twitter, Mail, User, Code, Zap } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';
import GlitchText from '../components/GlitchText';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    "Cybersecurity Research", 
    "Capture The Flag (CTF)",
    "Penetration Testing",
    "Networking Expert"
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-hidden relative">
      <CustomCursor />
      <MatrixRain />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-block p-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mb-6">
              {/* <div className="bg-black rounded-full p-4">
                <User size={48} className="text-green-400" />
                <img src="../../public/hacker.jpeg" alt="gamer" className='w-14 h-14'/>
              </div> */}
            </div>
            
            <GlitchText 
              text="CH43L.exe" 
              className="text-5xl md:text-7xl font-mono font-bold mb-4"
            />
            
            <div className="text-xl md:text-2xl text-gray-300 mb-6 font-mono">
              <span className="text-green-400">&gt;</span> HACKER
            </div>
          </div>

          {/* Bio Section */}
          <div className="backdrop-blur-sm bg-black/30 border border-green-400/30 rounded-lg p-8 mb-12 shadow-lg shadow-green-400/20">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
              Passionate about <span className="text-cyan-400">cybersecurity</span> and 
              <span className="text-green-400"> ethical hacking</span>. 
              I break things for a living, ethically of course. I specialize in penetration testing, vulnerability assessments, and building systems that are harder to hack than your grandma's Wi-Fi password.
              I've got also into CTFs, especially when it comes to pwntools and binary exploitation basically, if it runs on bits and breaks with bytes, I'm in.
              When I'm not popping shells or reverse engineering binaries, you'll probably find me writing up modern CTF challenges on my GitHub because what's the point of breaking stuff if you don't share the fun?
              My mission? To find the flaws in so-called “unbreakable” systems—and politely prove otherwise.

              If you're into cyber puzzles, weird bugs, or just want to nerd out over exploits, hit me up. Let's connect, hack, and learn together.
            </p>
            
            <div className="mt-6 flex items-center justify-center space-x-4">
              <Code className="text-green-400" size={24} />
              <span className="text-gray-400 font-mono">Security Through Code</span>
              <Zap className="text-cyan-400" size={24} />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-mono font-bold mb-8 text-center">
              <span className="text-green-400">[</span>
              SKILLS
              <span className="text-green-400">]</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="group backdrop-blur-sm bg-black/40 border border-green-400/40 rounded-lg p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-none"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="font-mono text-green-400 group-hover:text-cyan-400 transition-colors">
                    &gt; {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="backdrop-blur-sm bg-black/30 border border-green-400/30 rounded-lg p-8 shadow-lg shadow-green-400/20">
            <h2 className="text-3xl font-mono font-bold mb-8">
              <span className="text-green-400">[</span>
              CONNECT
              <span className="text-green-400">]</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href="https://github.com/Chael250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-6 py-3 bg-black/50 border border-green-400/50 rounded-lg hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-none"
              >
                <Github size={24} className="text-green-400 group-hover:text-cyan-400 transition-colors" />
                <span className="font-mono text-green-400 group-hover:text-cyan-400 transition-colors">
                  GitHub
                </span>
              </a>
              
              {/* <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-6 py-3 bg-black/50 border border-green-400/50 rounded-lg hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-none"
              >
                <Twitter size={24} className="text-green-400 group-hover:text-cyan-400 transition-colors" />
                <span className="font-mono text-green-400 group-hover:text-cyan-400 transition-colors">
                  Twitter
                </span>
              </a> */}
              
              <a 
                href="mailto:ganzac784@gmail.com"
                className="group flex items-center space-x-3 px-6 py-3 bg-black/50 border border-green-400/50 rounded-lg hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-none"
              >
                <Mail size={24} className="text-green-400 group-hover:text-cyan-400 transition-colors" />
                <span className="font-mono text-green-400 group-hover:text-cyan-400 transition-colors">
                  Email
                </span>
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 font-mono text-sm">
                <span className="text-red-400">[CLASSIFIED]</span> Hack smart, stay in the shadows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
