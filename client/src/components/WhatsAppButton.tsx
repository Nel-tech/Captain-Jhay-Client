import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const phoneNumber = "2348084519267";
  const message = encodeURIComponent("Hello Captain Jhay Travels, I would like to make an enquiry.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-in fade-in zoom-in duration-300"
    >
      <Button 
        size="lg" 
        className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all p-0"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>
    </a>
  );
}
