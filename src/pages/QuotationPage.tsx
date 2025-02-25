
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

interface Feature {
  id: string;
  name: string;
  price: number;
  description: string;
}

const features: Feature[] = [
  {
    id: "responsive",
    name: "Responsive Design",
    price: 500,
    description: "Website adapts perfectly to all screen sizes",
  },
  {
    id: "cms",
    name: "Content Management System",
    price: 800,
    description: "Easy-to-use system to update your website content",
  },
  {
    id: "ecommerce",
    name: "E-commerce Integration",
    price: 1200,
    description: "Full online store functionality",
  },
  {
    id: "seo",
    name: "SEO Optimization",
    price: 400,
    description: "Optimize your website for search engines",
  },
  {
    id: "analytics",
    name: "Analytics Integration",
    price: 300,
    description: "Track website traffic and user behavior",
  },
];

const QuotationPage = () => {
  const { toast } = useToast();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const calculateTotal = () => {
    return features
      .filter((feature) => selectedFeatures.includes(feature.id))
      .reduce((total, feature) => total + feature.price, 0);
  };

  const handleSubmit = () => {
    if (selectedFeatures.length === 0) {
      toast({
        title: "No features selected",
        description: "Please select at least one feature to get a quote",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Generated!",
      description: `Your estimated total is $${calculateTotal()}. We'll contact you soon!`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">
          Get a Website Quote
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Select the features you need for your website. Prices are estimates and may vary based on specific requirements.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.id} className="p-6 glass">
              <div className="flex items-start space-x-4">
                <Checkbox
                  id={feature.id}
                  checked={selectedFeatures.includes(feature.id)}
                  onCheckedChange={(checked) => {
                    setSelectedFeatures(
                      checked
                        ? [...selectedFeatures, feature.id]
                        : selectedFeatures.filter((id) => id !== feature.id)
                    );
                  }}
                />
                <div className="flex-1">
                  <label
                    htmlFor={feature.id}
                    className="text-lg font-medium cursor-pointer"
                  >
                    {feature.name}
                  </label>
                  <p className="text-sm text-gray-400 mt-1">
                    {feature.description}
                  </p>
                  <p className="text-white mt-2">${feature.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold mb-6">
            Total Estimate: ${calculateTotal()}
          </p>
          <Button
            onClick={handleSubmit}
            size="lg"
            className="hover-glass"
          >
            Get Detailed Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuotationPage;
