import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: 50,
    description: "Simple website design",
    features: ["1 page", "2 revisions", "3 days delivery"],
  },
  {
    name: "Standard",
    price: 100,
    description: "Complete website design",
    features: [
      "3 pages",
      "5 revisions",
      "5 days delivery",
      "Responsive design",
    ],
  },
  {
    name: "Premium",
    price: 200,
    description: "Advanced website design",
    features: [
      "5 pages",
      "Unlimited revisions",
      "7 days delivery",
      "Responsive design",
      "Source code",
    ],
  },
];

export default function PricingPlans() {
  return (
    <div
      className="space-y-4 relative  top-[20%]
    "
    >
      {plans.map((plan) => (
        <Card key={plan.name} className="bg-slate-950 text-white">
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>${plan.price}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">{plan.description}</p>
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full bg-white text-black">
              <Link
                href={"/Project_details/webDevelopment"}
                className="text-black"
              >
                Select
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
