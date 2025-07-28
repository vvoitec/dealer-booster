import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, Car, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for your interest!",
        description: "We'll notify you when the app is ready for early access.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Automate Your Car Dealership
            <span className="text-primary block">Sales & Marketing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Import cars from OLX automatically, manage Facebook & Google ads, and track leads with our all-in-one platform designed for small to medium car dealerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://forms.google.com/your-survey-link" target="_blank" rel="noopener noreferrer">
                Help Us Build This <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
              Join Waiting List
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need to Scale Your Dealership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stop managing multiple platforms. Our integrated solution handles your entire sales funnel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Car className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Automatic OLX Import</CardTitle>
              <CardDescription>
                Never manually post cars again. Our system automatically imports and syncs your inventory from OLX.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Ad Management</CardTitle>
              <CardDescription>
                Create and manage Facebook & Google ads for your cars with automated optimization and performance tracking.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Lead CRM</CardTitle>
              <CardDescription>
                Track and nurture potential buyers with our built-in CRM designed specifically for car dealerships.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Built for Small & Medium Dealerships</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Save Hours Every Week</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>No more manually posting cars to multiple platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Automated ad creation and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Centralized lead management and follow-up reminders</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Real-time performance analytics and insights</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Current Pain Points:</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>• Spending hours posting cars manually</p>
              <p>• Lost leads due to poor follow-up</p>
              <p>• Ineffective ad campaigns</p>
              <p>• No centralized system for inventory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waiting List Section */}
      <section id="waitlist" className="px-4 py-16 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Join the Waiting List</CardTitle>
            <CardDescription>
              Be among the first to access our platform when it launches. Get early access pricing and priority support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Join Waiting List
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 DealershipPro. Built for car dealers, by car industry experts.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
