import { User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 md:order-1 animate-scale-in">
            <Card className="overflow-hidden shadow-elegant bg-card/80 backdrop-blur-sm">
              <div className="aspect-square bg-gradient-primary flex items-center justify-center">
                <User size={120} className="text-primary-foreground/50" />
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 animate-slide-up">
            <h2 className="section-title text-primary">About Me</h2>
            <div className="space-y-6">
              <p className="body-large text-muted-foreground">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital experiences that make a difference. I specialize in React, Node.js, 
                and modern web technologies.
              </p>
              <p className="body-large text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                writing and speaking.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-card/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="font-display text-2xl font-bold text-accent mb-2">50+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="bg-card/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="font-display text-2xl font-bold text-accent mb-2">5+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;