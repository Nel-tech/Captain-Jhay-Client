// import { useMutation } from "@tanstack/react-query";
// import { apiRequest } from "@/lib/queryClient";
// import { type  } from "@shared/schema";
// import { useToast } from "@/hooks/use-toast";

// export function useCreateBooking() {
//   const { toast } = useToast();
  
//   return useMutation({
//     mutationFn: async (data: InsertBooking) => {
//       const res = await apiRequest("POST", "/api/bookings", data);
//       return res.json();
//     },
//     onSuccess: (data) => {
//       toast({
//         title: "Booking Request Received!",
//         description: `Booking ref: ${data.bookingRef}. We'll contact you shortly.`,
//       });
//     },
//     onError: (error: Error) => {
//       toast({
//         title: "Booking Failed",
//         description: error.message,
//         variant: "destructive",
//       });
//     },
//   });
// }