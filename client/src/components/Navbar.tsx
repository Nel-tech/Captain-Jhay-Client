import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Book a Flight", href: "/booking" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-border/50 py-3"
          : "bg-primary py-5 text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className={cn(
              "p-2 rounded-lg transition-colors",
              isScrolled ? "bg-primary text-white" : "bg-white text-primary"
            )}>
              <Plane className="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-300" />
            </div>
            <span className={cn(
              "text-xl font-bold font-heading tracking-tight",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Captain Jhay
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent cursor-pointer",
                  isActive(link.href) 
                    ? "text-accent font-semibold" 
                    : isScrolled ? "text-foreground" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/booking">
              <Button 
                size="sm" 
                className={cn(
                  "font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all",
                  isScrolled ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"
                )}
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-base font-medium p-2 rounded-md hover:bg-muted transition-colors cursor-pointer",
                  isActive(link.href) ? "text-primary bg-muted/50" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-2">Book Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
