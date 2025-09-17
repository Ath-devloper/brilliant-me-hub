import { Code, Database, Palette, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'text-blue-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      color: 'text-green-500'
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX Design', 'Prototyping'],
      color: 'text-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
      color: 'text-accent'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-primary">Skills & Expertise</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            I bring ideas to life through code, combining technical expertise with creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={48} />
                </div>
                <h3 className="font-display text-xl font-bold mb-4 text-primary">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground hover:text-accent transition-smooth cursor-default">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;