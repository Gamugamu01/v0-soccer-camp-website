"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">Have questions about our soccer camp? Get in touch with us!</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Reach out to us directly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:meistercamptx@gmail.com" className="hover:text-green-600">
                    meistercamptx@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-600">
                  Allen Academy
                  <br />
                  Bryan, TX, USA
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Camp Director</CardTitle>
            <CardDescription>FIFA Licensed Football Agent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">JY</span>
              </div>
              <div>
                <h3 className="font-medium text-lg">Jaehyeon Yoon</h3>
                <p className="text-gray-600">FIFA License No. 202411-8877</p>
                <p className="text-gray-600">
                  <a href="mailto:meistercamptx@gmail.com" className="hover:text-green-600">
                    meistercamptx@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              For inquiries about private training sessions or special accommodations, please contact our camp director
              directly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium">What is the registration deadline?</h3>
              <p className="text-gray-600">
                Registration closes one week before the camp starts or when all spots are filled.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Is there a refund policy?</h3>
              <p className="text-gray-600">
                Full refunds are available up to 14 days before the camp. 50% refunds up to 7 days before.
              </p>
            </div>
            <div>
              <h3 className="font-medium">How are players grouped?</h3>
              <p className="text-gray-600">
                Players are grouped by age and skill level to ensure appropriate training.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
