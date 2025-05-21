
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible",
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-semibold text-cas-white mb-4">
            Contact Us
          </h1>
          <p className="text-cas-silver max-w-2xl mx-auto">
            Have questions about literary recommendations or want to share your favorite books with us? We'd love to hear from you.
          </p>
        </header>

        
          <div className="space-y-6">
            <Card className="bg-cas-darkgray border-cas-gray/50 text-cas-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-cas-silver mr-3 mt-1" />
                  <div>
                    <h3 className="text-cas-white font-medium mb-1">Email</h3>
                    <p className="text-cas-silver">shubhamkukadiya49@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            
            <Card className="bg-cas-darkgray border-cas-gray/50 text-cas-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-cas-silver mr-3 mt-1" />
                  <div>
                    <h3 className="text-cas-white font-medium mb-1">Address</h3>
                    <p className="text-cas-silver">
                      123 Literary Lane<br />
                      Bookworm City, BC 12345<br />
                      Gatsby Land
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
};

export default Contact;
