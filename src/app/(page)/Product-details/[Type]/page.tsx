import { Star, Clock, BarChart2, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GigGallery from "@/Pagecomponents/gig-gallery";
import SellerCard from "@/Pagecomponents/seller-cards";
import PricingPlans from "@/Pagecomponents/pricing-plans";
import Reviews from "@/Pagecomponents/gig-reviews";
import Mostpopular from "@/components/Mostpopular";
import NavbarDemo from "@/components/Navbar";

export default function GigDetail() {
  return (
    <>
      <NavbarDemo />
      <div className="bg-black w-full overflow-hidden min-h-full pt-9 md:pt-28">
        <div className="max-w-7xl mx-auto min-h-full bg-black text-white px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">
                I will create a professional website design
              </h1>
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-2">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Seller" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">John Doe</h2>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">4.9</span>
                    <span className="mx-1">(1.2k)</span>
                    <span>| 100 Orders in Queue</span>
                  </div>
                </div>
              </div>
              <GigGallery />
              <Tabs defaultValue="description" className="mt-8">
                <TabsList>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="about-seller">About the Team</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="description"
                  className="mt-4 bg-slate-950 p-6 rounded-lg border border-white"
                >
                  <h3 className="text-xl font-semibold mb-2">About This Gig</h3>
                  <p className="mb-4">
                    I will design a professional, modern, and responsive website
                    for your business or personal project. With over 5 years of
                    experience in web design, I ensure high-quality work that
                    meets your specific needs and exceeds your expectations.
                  </p>
                  <h4 className="text-lg font-semibold mb-2">
                    Whats Included:
                  </h4>
                  <ul className="list-disc list-inside mb-4">
                    <li>Custom design tailored to your brand</li>
                    <li>Responsive layout for all devices</li>
                    <li>Up to 5 pages (additional pages available)</li>
                    <li>SEO optimization</li>
                    <li>Source files included</li>
                  </ul>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">3 Days Delivery</span>
                    <BarChart2 className="h-4 w-4 mr-1" />
                    <span className="mr-4">Unlimited Revisions</span>
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span>24/7 Customer Support</span>
                  </div>
                </TabsContent>
                <TabsContent value="about-seller" className="mt-4">
                  <SellerCard />
                </TabsContent>
                <TabsContent value="reviews" className="mt-4">
                  <Reviews />
                </TabsContent>
              </Tabs>
            </div>
            <div>
              <PricingPlans />
              <Button variant="outline" className="text-black w-full mt-4">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <div>
            <h1 className=" text-2xl md:text-4xl ml-6 md:ml-14 my-9 text-white justify-start  ">
              Popular Product
            </h1>
          </div>
          <div className="flex w-full justify-center items-center">
            <Mostpopular />
          </div>
        </div>
      </div>
    </>
  );
}
