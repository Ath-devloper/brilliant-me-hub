import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="hero-text mb-6 bg-gradient-primary bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-2xl md:text-3xl font-display mb-4 text-accent">
            Creative Developer
          </p>
          <p className="body-large max-w-2xl mx-auto mb-12 text-muted-foreground">
            I craft beautiful digital experiences that bridge the gap between design and technology. 
            Passionate about creating intuitive, accessible, and impactful solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:shadow-glow transition-all duration-300"
            onClick={scrollToAbout}
          >
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-scale-in">
          <Button variant="ghost" size="icon" className="hover:text-accent transition-smooth">
            <Github size={24} />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-accent transition-smooth">
            <Linkedin size={24} />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-accent transition-smooth">
            <Mail size={24} />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-float hover:text-accent transition-smooth"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;