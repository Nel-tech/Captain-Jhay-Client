import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateBooking } from "@/hooks/use-bookings"
import { insertBookingSchema, type InsertBooking } from "@shared/schema"
import {
  Plane, Calendar, Mail, Phone, Luggage, User,
  ArrowLeftRight, Minus, Plus, Loader2, Users
} from "lucide-react"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Booking() {
  const { mutate, isPending } = useCreateBooking();

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      tripType: "round-trip",
      adults: 1,
      children: 0,
      cabinClass: "economy",
      fullName: "",
      email: "",
      phoneNumber: "",
      specialRequests: "",
      departureCity: "",
      destinationCity: "",
      departureDate: "",
      returnDate: "",
    },
  });

  const today = new Date().toISOString().split("T")[0];
  const departureDate = form.watch("departureDate");
  const adults = form.watch("adults");
  const children = form.watch("children");
  const cabinClass = form.watch("cabinClass");
  const tripType = form.watch("tripType");

  function handleSwap() {
    const from = form.getValues("departureCity");
    const to = form.getValues("destinationCity");
    form.setValue("departureCity", to);
    form.setValue("destinationCity", from);
  }

  function onSubmit(data: InsertBooking) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen bg-secondary/30 pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <h1 className="text-4xl font-bold font-heading text-primary">Book Your Flight</h1>
            <p className="text-muted-foreground text-lg">
              Fill in the details below and we'll find the best flight options for you.
            </p>
          </div>

          <Card className="border-none shadow-xl overflow-hidden">
            <div className="bg-primary p-2 h-2 w-full" />
            <CardHeader className="p-8 border-b">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Plane className="w-6 h-6 text-accent" />
                Flight Details
              </CardTitle>
              <CardDescription>Tell us where and when you want to fly.</CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                  {/* Trip Type */}
                  <FormField
                    control={form.control}
                    name="tripType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Trip Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col sm:flex-row gap-4"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="round-trip" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Round Trip</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="one-way" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">One Way</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Cities with Swap */}
                  <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="departureCity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>From (City or Airport)</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Plane className="absolute left-3 top-3 w-4 h-4 text-muted-foreground transform rotate-45" />
                                <Input placeholder="e.g. Lagos (LOS)" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="destinationCity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>To (City or Airport)</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Plane className="absolute left-3 top-3 w-4 h-4 text-muted-foreground transform -rotate-45" />
                                <Input placeholder="e.g. London (LHR)" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Swap button */}
                    <button
                      type="button"
                      onClick={handleSwap}
                      className="absolute left-1/2 top-8 -translate-x-1/2 z-10 bg-white border-2 border-primary rounded-full p-2 hover:bg-primary hover:text-white transition-all shadow-md hidden md:flex items-center justify-center"
                      title="Swap cities"
                    >
                      <ArrowLeftRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="departureDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Departure Date</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                              <Input
                                type="date"
                                min={today}
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {tripType === "round-trip" && (
                      <FormField
                        control={form.control}
                        name="returnDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Return Date</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                <Input
                                  type="date"
                                  min={departureDate || today}
                                  className="pl-10"
                                  {...field}
                                  value={field.value || ""}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  {/* Passengers & Class */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Adults counter */}
                    <FormField
                      control={form.control}
                      name="adults"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adults (12+)</FormLabel>
                          <div className="flex items-center gap-3 border rounded-md px-3 py-2">
                            <button
                              type="button"
                              onClick={() => { if (field.value > 1) field.onChange(field.value - 1) }}
                              className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="flex-1 text-center font-medium">{field.value}</span>
                            <button
                              type="button"
                              onClick={() => { if (field.value < 9) field.onChange(field.value + 1) }}
                              className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Children counter */}
                    <FormField
                      control={form.control}
                      name="children"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Children (2-11)</FormLabel>
                          <div className="flex items-center gap-3 border rounded-md px-3 py-2">
                            <button
                              type="button"
                              onClick={() => { if (field.value > 0) field.onChange(field.value - 1) }}
                              className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="flex-1 text-center font-medium">{field.value}</span>
                            <button
                              type="button"
                              onClick={() => { if (field.value < 9) field.onChange(field.value + 1) }}
                              className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Cabin Class */}
                    <FormField
                      control={form.control}
                      name="cabinClass"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cabin Class</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select cabin class" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="economy">Economy</SelectItem>
                              <SelectItem value="premium-economy">Premium Economy</SelectItem>
                              <SelectItem value="business">Business Class</SelectItem>
                              <SelectItem value="first">First Class</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Passenger Summary Badge */}
                  <div className="bg-muted rounded-lg p-4 flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-accent shrink-0" />
                    <span>
                      <strong>{adults}</strong> Adult{adults > 1 ? "s" : ""}
                      {children > 0 && <>, <strong>{children}</strong> Child{children > 1 ? "ren" : ""}</>}
                      {" · "}
                      <strong className="capitalize">{cabinClass.replace("-", " ")}</strong>
                      {" · "}
                      <strong className="capitalize">{tripType.replace("-", " ")}</strong>
                    </span>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <User className="w-5 h-5 text-accent" />
                      Contact Information
                    </h3>

                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="As shown on ID/Passport" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                <Input type="email" placeholder="john@example.com" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                <Input type="tel" placeholder="+234..." className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requests (Optional)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Luggage className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                              <Textarea
                                placeholder="Dietary requirements, wheelchair assistance, etc."
                                className="pl-10 min-h-[100px]"
                                {...field}
                                value={field.value || ""}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-semibold rounded-lg shadow-lg"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing your request...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Plane className="w-5 h-5" />
                        Submit Booking Request
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    We will contact you to confirm pricing and availability.
                  </p>

                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}