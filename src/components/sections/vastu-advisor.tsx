"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { getVastuTips } from "@/app/actions";

const VastuFormSchema = z.object({
  floorPlanDescription: z
    .string()
    .min(50, {
      message: "Please provide a detailed description of at least 50 characters.",
    })
    .max(2000, {
      message: "Description must not be longer than 2000 characters.",
    }),
});

export function VastuAdvisor() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const form = useForm<z.infer<typeof VastuFormSchema>>({
    resolver: zodResolver(VastuFormSchema),
    defaultValues: {
      floorPlanDescription: "",
    },
  });

  async function onSubmit(data: z.infer<typeof VastuFormSchema>) {
    setLoading(true);
    setResult("");
    const response = await getVastuTips(data);
    if (response.success && response.data) {
      setResult(response.data.vastuTips);
    } else {
      setResult("Sorry, we couldn't generate Vastu tips at this moment. Please try again later.");
    }
    setLoading(false);
  }

  return (
    <section id="vastu" className="py-20 sm:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            AI-Powered Vastu Advisor
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized Vastu tips for your property. Describe your floor
            plan, including dimensions and cardinal directions, and our AI will
            provide suggestions for harmony and positive energy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="text-primary" />
                <span>Describe Your Floor Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="floorPlanDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Floor Plan Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'My main entrance faces North. The kitchen is in the Southeast corner. The master bedroom is in the Southwest. The total area is 1200 sq. ft...'"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Tips...
                      </>
                    ) : (
                      "Get Vastu Tips"
                    )}
                  </Button>
                </form>
              </Form>

              {result && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Your Personalized Vastu Analysis
                  </h3>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <div className="prose prose-sm max-w-none text-foreground">
                        {result.split('\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
