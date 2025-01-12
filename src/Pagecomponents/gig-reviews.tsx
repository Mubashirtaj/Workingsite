import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder-avatar.jpg",
    rating: 5,
    date: "2 weeks ago",
    content:
      "Excellent work! The designer understood my requirements perfectly and delivered a stunning website. Highly recommended!",
    helpful: 12,
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/placeholder-avatar.jpg",
    rating: 4,
    date: "1 month ago",
    content:
      "Great experience overall. The design is modern and responsive. Would use this service again.",
    helpful: 8,
  },
  // Add more reviews as needed
];

export default function Reviews() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center mb-2">
              <Avatar className="h-10 w-10 mr-2">
                <AvatarImage src={review.avatar} alt={review.name} />
                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm mb-2">{review.content}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>Helpful ({review.helpful})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
