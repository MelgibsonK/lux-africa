import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Lux Africa exceeded every expectation. The safari was magical, and the attention to detail was impeccable. Truly a once-in-a-lifetime experience.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Chen",
    location: "London, UK",
    rating: 5,
    text: "From the luxury accommodations to the expert guides, everything was perfect. The wildlife photography opportunities were incredible.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "The cultural immersion and personalized service made this trip unforgettable. Lux Africa truly understands luxury travel.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">What Our Guests Say</h2>
          <p className="font-montserrat text-xl text-white/80 max-w-3xl mx-auto">
            Discover why travelers from around the world choose Lux Africa for their premium African adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-primary/20 luxury-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>

                <p className="font-inter text-card-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-montserrat font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="font-inter text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
