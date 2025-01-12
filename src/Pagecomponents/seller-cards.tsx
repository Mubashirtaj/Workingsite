import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, MapPin, Briefcase, Clock, School } from "lucide-react";

export default function SellerCard() {
  return (
    <Card className="bg-slate-950 text-white">
      <CardHeader>
        <div className="flex items-center ">
          <Avatar className="h-16 w-16 mr-4">
            <AvatarImage src="/test.png" alt="Seller" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Professional Web Designer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-medium">4.9</span>
          <span className="ml-1 text-muted-foreground">(1.2k reviews)</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>New York, USA</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-2" />
            <span>5 Years of Experience</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>Average Response Time: 1 hour</span>
          </div>
          <div className="flex items-center">
            <School className="h-4 w-4 mr-2" />
            <span>Bachelors Degree in Computer Science</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full text-black">
          Contact Me
        </Button>
      </CardFooter>
    </Card>
  );
}
