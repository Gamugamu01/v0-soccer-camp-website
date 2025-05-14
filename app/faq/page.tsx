import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our soccer camp. If you don't see your question here, please{" "}
          <Link href="/contact" className="text-green-600 hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="registration" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="registration">Registration</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="logistics">Logistics</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          <TabsContent value="registration" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Registration & Payment</CardTitle>
                <CardDescription>Information about signing up and payment options</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I register for the camp?</AccordionTrigger>
                    <AccordionContent>
                      You can register online through our website by completing the registration form. Payment can be
                      made via credit card or bank transfer.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is the registration deadline?</AccordionTrigger>
                    <AccordionContent>We recommend registering early as spots fill quickly.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is there a refund policy?</AccordionTrigger>
                    <AccordionContent>
                      Full refunds are available up to 14 days before the camp. 50% refunds are available up to 7 days
                      before. No refunds are available after that.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Program Details</CardTitle>
                <CardDescription>Information about our training programs</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What's the difference between Basic and Elite training?</AccordionTrigger>
                    <AccordionContent>
                      Basic Training focuses on fundamental skills in a fun environment, while Elite Training offers
                      more intensive sessions with tactical elements and game scenarios for advanced players.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How are players grouped during training?</AccordionTrigger>
                    <AccordionContent>
                      Players are grouped by age (8-10 and 11-13) and skill level to ensure appropriate training and
                      development.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I qualify for Private Training?</AccordionTrigger>
                    <AccordionContent>
                      Private Training is by application only. Our coaching staff will review applications based on
                      player experience, skill level, and development goals.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logistics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Camp Logistics</CardTitle>
                <CardDescription>Practical information about the camp</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What should my child bring to camp?</AccordionTrigger>
                    <AccordionContent>
                      Players should bring soccer cleats, shin guards, a soccer ball, water bottle, sunscreen, and
                      appropriate training clothes. A full list will be provided upon registration.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is lunch provided?</AccordionTrigger>
                    <AccordionContent>
                      Lunch is not provided. Players should bring their own snacks and lunch if attending multiple
                      sessions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is there medical staff on site?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we have certified athletic trainers on site during all camp sessions to handle any medical
                      needs or emergencies.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="other" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>Other common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Can parents watch the training sessions?</AccordionTrigger>
                    <AccordionContent>
                      Yes, parents are welcome to observe training sessions from designated viewing areas. We ask that
                      parents respect the coaching process and allow coaches to work with players without interruption.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Will players receive any evaluation or feedback?</AccordionTrigger>
                    <AccordionContent>
                      All players will receive verbal feedback throughout the camp. Players in the Private Training
                      program will receive a detailed written evaluation and development plan.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is there a language barrier with the international coaches?</AccordionTrigger>
                    <AccordionContent>
                      No, we have a Spanish-English bilingual interpreter present at all sessions to ensure clear
                      communication between coaches and players. This allows our international coaches to communicate
                      effectively with all participants and ensures that no instruction is lost in translation.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">
            If you couldn't find the answer to your question, please don't hesitate to contact us. Our team is ready to
            help!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:apexsportsagencykorea@gmail.com">Email Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
