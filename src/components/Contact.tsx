import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'john@example.com',
      href: 'mailto:john@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-primary">Get In Touch</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="font-display text-2xl font-bold mb-8 text-primary">
              Let's Start a Conversation
            </h3>
            <p className="body-large text-muted-foreground mb-8">
              I'm always excited to discuss new opportunities, creative projects, 
              or just chat about technology and design.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-elegant bg-card/80 backdrop-blur-sm animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-primary">Name</Label>
                  <Input 
                    id="name" 
                    required 
                    className="mt-2 border-accent/20 focus:border-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-primary">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="mt-2 border-accent/20 focus:border-accent"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-primary">Subject</Label>
                <Input 
                  id="subject" 
                  required 
                  className="mt-2 border-accent/20 focus:border-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-primary">Message</Label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  required 
                  className="mt-2 border-accent/20 focus:border-accent resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-accent hover:shadow-glow transition-all duration-300"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;