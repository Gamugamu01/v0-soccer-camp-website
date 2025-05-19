"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, QrCode, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const playerName = searchParams.get("name")
  const program = searchParams.get("program")

  // If no player name is provided, redirect back to registration
  useEffect(() => {
    if (!playerName) {
      router.push("/register")
    }
  }, [playerName, router])

  // Format program name for display
  const getProgramName = (programCode: string | null) => {
    switch (programCode) {
      case "basic":
        return "Basic Training"
      case "elite":
        return "Basic + Elite Training"
      case "private":
        return "Private Training"
      default:
        return "Selected Program"
    }
  }

  // Get program price
  const getProgramPrice = (programCode: string | null) => {
    switch (programCode) {
      case "basic":
        return "$349"
      case "elite":
        return "$399"
      case "private":
        return "$599"
      default:
        return "See program details"
    }
  }

  if (!playerName) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Registration Complete!</h1>
        <p className="text-lg text-gray-600">
          Thank you for registering {playerName} for our soccer camp. Please complete your payment to secure your spot.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-green-600" />
              Complete Your Payment
            </CardTitle>
            <CardDescription>
              {getProgramName(program)} - {getProgramPrice(program)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center">
                <div className="border-4 border-green-100 p-2 rounded-xl mb-4 bg-white">
                  <Image
                    src="/images/paypal-qr-code.png"
                    alt="PayPal QR Code"
                    width={250}
                    height={250}
                    className="mx-auto"
                  />
                </div>
                <div className="bg-green-50 border border-green-200 p-3 rounded-md text-center w-full">
                  <p className="font-bold text-green-700">IMPORTANT</p>
                  <p className="text-green-700">
                    Please include player name <span className="font-bold">"{playerName}"</span> in the memo/notes
                    section when making payment
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Payment Instructions</h3>
                <p className="text-gray-700">
                  Please complete your payment using one of the following methods to secure your spot at the camp:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <QrCode className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">PayPal QR Code</h4>
                      <p className="text-sm text-gray-600">
                        Scan the PayPal QR code with your phone to make a secure payment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CreditCard className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Zelle / PayPal</h4>
                      <p className="text-sm text-gray-600">
                        You can also send payment directly through Zelle or PayPal to:{" "}
                        <span className="font-medium">piggyhousetx@gmail.com</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-4">
                  <p className="text-sm text-amber-800">
                    <strong>Important:</strong> Your registration is not complete until payment is received. Spots are
                    reserved on a first-come, first-served basis.
                  </p>
                </div>
                <div className="pt-4">
                  <Button asChild className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <Link href="/">
                      Return to Home
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">What Happens Next?</h2>
          <ol className="space-y-3 list-decimal ml-5">
            <li>
              <span className="font-medium">Complete your payment</span> using the PayPal QR code above.{" "}
              <span className="text-green-700 font-medium">
                Please include the player name under the memo or notes section when making the payment.
              </span>
            </li>
            <li>
              <span className="font-medium">Receive confirmation email</span> within 24-48 hours after payment is
              processed
            </li>
            <li>
              <span className="font-medium">Check your email</span> for additional information about the camp, including
              what to bring and arrival instructions
            </li>
            <li>
              <span className="font-medium">Arrive at camp</span> on June 16, 2025 ready to elevate your game!
            </li>
          </ol>
          <div className="mt-4 bg-red-50 border border-red-200 p-3 rounded-md">
            <p className="text-red-700 font-bold">
              Physical copy of the completed waiver form is REQUIRED in order to participate in the camp.
            </p>
          </div>
          <p className="mt-4 text-gray-600">
            If you have any questions, please contact us at{" "}
            <a href="mailto:meistercamptx@gmail.com" className="text-green-600 hover:underline">
              meistercamptx@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
