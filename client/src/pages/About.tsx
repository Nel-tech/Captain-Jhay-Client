import { motion } from "framer-motion";
import { Award, Heart, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1660080909225-5cbbe8fa3bb4?q=100&w=1920&auto=format&fit=crop"
            alt="Travel background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            About Captain Jhay Travels
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Navigating the world, one journey at a time.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold font-heading text-primary">Our Story</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a passion for exploration and a commitment to service excellence, 
              Captain Jhay Travels has grown from a small ticketing agency into a comprehensive 
              travel partner for thousands of satisfied clients. We understand that travel is not 
              just about moving from point A to point B—it's about the experience, the memories, 
              and the peace of mind.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We pride ourselves on our attention to detail, personalized service, and our ability 
              to secure the best rates for our clients. Whether you're traveling for business, 
              leisure, or visiting family, we treat every itinerary as if it were our own.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border/50 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To simplify travel for everyone by providing reliable, affordable, and personalized 
                travel solutions with exceptional customer service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border/50 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Core Values</h3>
              <p className="text-muted-foreground">
                Integrity, Transparency, and Customer-Centricity. We believe in building lasting 
                relationships with our clients based on trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border/50 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading travel agency in Nigeria and beyond, known for creating seamless 
                and memorable travel experiences for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
