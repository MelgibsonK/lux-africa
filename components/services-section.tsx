import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Camera, Car } from "lucide-react"

const services = [
  {
    icon: MapPin,
    title: "Luxury Tours",
    description: "Curated experiences across Africa's most iconic destinations with expert local guides.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Expert Local Guides", "Premium Accommodations", "Cultural Immersion", "Personalized Itineraries"],
  },
  {
    icon: Camera,
    title: "Wildlife Safaris",
    description: "Witness the Big Five and more in their natural habitat with our exclusive safari packages.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Big Five Encounters", "Professional Photography", "Luxury Safari Lodges", "Conservation Focus"],
  },
  {
    icon: Car,
    title: "Premium Car Hire",
    description: "Travel in comfort and style with our fleet of luxury vehicles and professional drivers.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Luxury Fleet", "Professional Drivers", "24/7 Support", "Custom Routes"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Our Premium Services</h2>
          <p className="font-montserrat text-xl text-muted-foreground max-w-3xl mx-auto">
            From breathtaking safaris to luxury accommodations, we craft unforgettable African experiences tailored to
            your desires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="luxury-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary/90 p-2 rounded-full">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="font-inter text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center font-inter text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full gold-shine bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-semibold">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
