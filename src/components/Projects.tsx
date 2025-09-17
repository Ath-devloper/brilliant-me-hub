import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tags: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance for showcasing creative work.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-primary">Featured Projects</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A selection of recent projects that showcase my technical skills and creative approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-accent hover:shadow-glow">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;