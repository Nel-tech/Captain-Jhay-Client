import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash image of an airplane wing over clouds during sunset */}
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
            alt="Airplane wing in sky"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container relative z-10 px-10 md:px-6 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight"
            >
              Airline Ticket <br />
              <span className="text-blue-300">Booking Made Easy</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 font-light max-w-xl"
            >
              Experience seamless travel planning with Captain Jhay Travels. Fast service, competitive rates, and 24/7 support for your journey.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-accent/25 hover:-translate-y-1 transition-all">
                  Book a Flight
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/2348084519267"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg rounded-full w-full sm:w-auto">
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">We don't just sell tickets; we create travel experiences tailored to your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="w-12 h-12 text-accent" />,
                title: "Global Coverage",
                desc: "Access to flights worldwide with competitive rates across all major airlines."
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-accent" />,
                title: "Secure Booking",
                desc: "Your data and payments are protected with top-tier security measures."
              },
              {
                icon: <Clock className="w-12 h-12 text-accent" />,
                title: "24/7 Support",
                desc: "Our dedicated team is always ready to assist you, anytime, anywhere."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-accent/10 mb-2">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Unsplash image of a passport and travel accessories */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop"
                  alt="Travel planning"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-secondary max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Certified Agent</p>
                    <p className="text-xs text-muted-foreground">IATA Accredited</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">
                Comprehensive Travel Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                Captain Jhay Travels offers more than just flight tickets. We provide a full suite of travel services to ensure your journey is smooth from start to finish.
              </p>

              <ul className="space-y-4 pt-4">
                {[
                  "Flight Reservations & Ticketing",
                  "Hotel Accommodation Booking",
                  "Visa Application Assistance",
                  "Travel Insurance",
                  "Airport Transfers",
                  "Custom Holiday Packages"
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link href="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 py-6 h-auto text-lg rounded-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What Our Clients Say</h2>
            <p className="text-blue-200">Trusted by travelers around the world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Captain Jhay Travels made my trip to Dubai seamless. The visa process was smooth and the flight price was unbeatable.",
                author: "Sarah O.",
                role: "Business Traveler"
              },
              {
                text: "Excellent customer service! They handled a last-minute flight change for me with zero stress. Highly recommended.",
                author: "Michael A.",
                role: "Frequent Flyer"
              },
              {
                text: "Planned our family vacation perfectly. The hotel recommendations were spot on and within our budget.",
                author: "The Adebayos",
                role: "Vacationers"
              }
            ].map((review, i) => (
              <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="italic mb-6 text-white/90">"{review.text}"</p>
                  <div>
                    <p className="font-bold">{review.author}</p>
                    <p className="text-sm text-blue-200">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">
              Ready for your next adventure?
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't wait! The world is calling. Let Captain Jhay Travels help you answer that call with the best deals on flights and hotels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/booking">
                <Button size="lg" className="px-8 py-6 h-auto text-lg rounded-full shadow-lg hover:-translate-y-1 transition-transform">
                  Book Your Flight
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-8 py-6 h-auto text-lg rounded-full border-2 hover:bg-secondary transition-colors">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
