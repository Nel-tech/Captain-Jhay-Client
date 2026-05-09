import { Link } from "wouter";
import { Plane, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-white text-primary rounded-lg">
                <Plane className="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-300" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight">
                Captain Jhay
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for seamless travel experiences. From booking flights to planning your dream vacation, we handle it all with care and precision.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">About Us</Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Book a Flight</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-sm text-primary-foreground/80">Flight Reservations</li>
              <li className="text-sm text-primary-foreground/80">Hotel Bookings</li>
              <li className="text-sm text-primary-foreground/80">Visa Assistance</li>
              <li className="text-sm text-primary-foreground/80">Holiday Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">+234 808 451 9267</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/80">captainjhaytravels@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Captain Jhay Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
