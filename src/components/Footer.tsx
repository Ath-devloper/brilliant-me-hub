import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-display text-2xl font-bold mb-2">John Doe</h3>
            <p className="flex items-center justify-center md:justify-start text-primary-foreground/80">
              Made with <Heart size={16} className="mx-1 text-accent fill-current" /> © {currentYear}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-accent hover:bg-primary-foreground/10 transition-smooth"
            >
              <Github size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-accent hover:bg-primary-foreground/10 transition-smooth"
            >
              <Linkedin size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-accent hover:bg-primary-foreground/10 transition-smooth"
            >
              <Mail size={24} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;