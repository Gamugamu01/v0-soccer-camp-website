import Link from "next/link"
import { MapPin, Users, Award, CheckCircle, Star, Calendar, Clock, CreditCard, QrCode, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Languages } from "lucide-react"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Hero Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/images/camp-image1.png"
              alt="Soccer players training"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full mb-4 font-medium">
              June 16-20, 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Meister Elite Soccer Summer Camp 2025
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Professional soccer training for youth players in Bryan, Texas
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white">
                <MapPin className="h-5 w-5" />
                <span>Allen Academy, Bryan, TX</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white">
                <Users className="h-5 w-5" />
                <span>Ages 8-18</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white">
                <Award className="h-5 w-5" />
                <span>Former La Liga Coach</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content with reduced opacity */}
      {/* Training Images Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image src="/images/camp-image2.png" alt="Soccer training session" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Professional Training Environment</h3>
                <p>Develop skills through structured drills and game scenarios</p>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/camp-image1.png"
                alt="Soccer skills development"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Technical Skills Focus</h3>
                <p>Master ball control, passing, and shooting techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coach */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 rounded-xl overflow-hidden border border-blue-100">
              <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden bg-blue-900">
                <Image
                  src="/images/pere-marti.png"
                  alt="Pere Marti"
                  width={400}
                  height={500}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    La Liga Experience
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    UEFA Cup Veteran
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Professional Coach
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Meet your coach - Pere Marti, Former La Liga Professional</h2>
                <ul className="text-gray-700 mb-4 space-y-2 list-disc pl-5">
                  <li>Former player at Villareal CF (2003-2004)</li>
                  <li>Former manager at Villareal CF C (2017-2022)</li>
                  <li>Former player at Málaga CF (2008-2010)</li>
                  <li>UEFA Pro-license</li>
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/coaches">Meet Our Coaching Staff</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Camp Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Elite Soccer Training Experience</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join us for a comprehensive soccer camp offering three distinct training programs led by professional
                coaches, including Pere Marti and experienced local coaches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-green-600 relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  SAVE $100!
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    Basic Training
                  </CardTitle>
                  <CardDescription>For beginners and intermediate players</CardDescription>
                  <div className="mt-2 flex flex-wrap gap-2 items-center">
                    <span className="bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full line-through">
                      $349
                    </span>
                    <span className="bg-green-100 text-green-800 text-lg font-bold px-3 py-1 rounded-full">$249</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Ages 8-10 & 11-13 (coed groups)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>9 AM - 12 PM daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Focus on fundamental skills: dribbling, passing, shooting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Fun games and drills in a supportive environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>13-15 players per coach</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    <Link href="/programs#basic">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-600 relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  SAVE $100!
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Basic + Elite Training
                  </CardTitle>
                  <CardDescription>For advanced players seeking a challenge</CardDescription>
                  <div className="mt-2 flex flex-wrap gap-2 items-center">
                    <span className="bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full line-through">
                      $399
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-lg font-bold px-3 py-1 rounded-full">$299</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Ages 8-10 & 11-13 (coed groups)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>9 AM - 12 PM & 2 PM - 4 PM daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Intensive technical & tactical training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Game-like scenarios and match conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>10-12 players per coach</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    <Link href="/programs#elite">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-purple-600 relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  SAVE $100!
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-purple-600" />
                    Private Training
                  </CardTitle>
                  <CardDescription>For qualified players only</CardDescription>
                  <div className="mt-2 flex flex-wrap gap-2 items-center">
                    <span className="bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full line-through">
                      $599
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-lg font-bold px-3 py-1 rounded-full">$499</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Ages under 18 (coed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      <span>6 PM - 8 PM (June 18 & 20 only)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Player Report Provided</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Personalized development & detailed feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Customized drills based on player skill level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Maximum 5 players per session</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                    <Link href="/programs#private">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Camp Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Training Experience</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our soccer camp offers a unique experience with professional coaching and personalized attention.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Coaching</h3>
                <p className="text-gray-600">
                  Train with Pere Marti and other qualified coaches with extensive experience in player development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Small Group Sizes</h3>
                <p className="text-gray-600">
                  Enjoy personalized attention with our small coach-to-player ratios for maximum development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Languages className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bilingual Instruction</h3>
                <p className="text-gray-600">
                  Spanish-English interpreter ensures clear communication for all participants.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premier Facilities</h3>
                <p className="text-gray-600">Train at the excellent facilities of Allen Academy in Bryan, Texas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Camp Schedule Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Camp Schedule</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive 5-day program runs from June 16-20, 2025 with multiple training sessions each day.
              </p>
            </div>

            <div className="grid gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Camp Details</CardTitle>
                  <CardDescription>Key information about the soccer camp</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Calendar className="h-8 w-8 text-green-600 mb-2" />
                      <h3 className="font-medium text-lg mb-1">Dates</h3>
                      <p className="text-center">June 16-20, 2025</p>
                    </div>

                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <MapPin className="h-8 w-8 text-green-600 mb-2" />
                      <h3 className="font-medium text-lg mb-1">Location</h3>
                      <p className="text-center">
                        Allen Academy
                        <br />
                        Bryan, TX
                      </p>
                    </div>

                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="h-8 w-8 text-green-600 mb-2" />
                      <h3 className="font-medium text-lg mb-1">Daily Sessions</h3>
                      <p className="text-center">
                        Multiple sessions
                        <br />
                        throughout the day
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Daily Schedule</CardTitle>
                  <CardDescription>Training sessions for each day of the camp</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[150px]">Time</TableHead>
                          <TableHead>June 16</TableHead>
                          <TableHead>June 17</TableHead>
                          <TableHead>June 18</TableHead>
                          <TableHead>June 19</TableHead>
                          <TableHead>June 20</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">9 AM - 12 PM</TableCell>
                          <TableCell className="bg-green-50">
                            <div className="font-medium text-green-700">Basic Training</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                          <TableCell className="bg-green-50">
                            <div className="font-medium text-green-700">Basic Training</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                          <TableCell className="bg-green-50">
                            <div className="font-medium text-green-700">Basic Training</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                          <TableCell className="bg-green-50">
                            <div className="font-medium text-green-700">Basic Training</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                          <TableCell className="bg-green-50">
                            <div className="font-medium text-green-700">Basic Training</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="font-medium">2 PM - 4 PM</TableCell>
                          <TableCell className="bg-blue-50">
                            <div className="font-medium text-blue-700">Basic + Elite Training (Part 2)</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                          <TableCell className="bg-blue-50">
                            <div className="font-medium text-blue-700">Basic + Elite Training (Part 2)</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                          <TableCell className="bg-blue-50">
                            <div className="font-medium text-blue-700">Basic + Elite Training (Part 2)</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                          <TableCell className="bg-blue-50">
                            <div className="font-medium text-blue-700">Basic + Elite Training (Part 2)</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                          <TableCell className="bg-blue-50">
                            <div className="font-medium text-blue-700">Basic + Elite Training (Part 2)</div>
                            <div className="text-sm">Ages 8-13</div>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="font-medium">6 PM - 8 PM</TableCell>
                          <TableCell className="bg-gray-100">
                            <div className="text-sm text-gray-500">No Session</div>
                          </TableCell>
                          <TableCell className="bg-gray-100">
                            <div className="text-sm text-gray-500">No Session</div>
                          </TableCell>
                          <TableCell className="bg-purple-50">
                            <div className="font-medium text-purple-700">Private Training</div>
                            <div className="text-sm">Qualified Players</div>
                          </TableCell>
                          <TableCell className="bg-gray-100">
                            <div className="text-sm text-gray-500">No Session</div>
                          </TableCell>
                          <TableCell className="bg-purple-50">
                            <div className="font-medium text-purple-700">Private Training</div>
                            <div className="text-sm">Qualified Players</div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="mt-6 text-sm text-gray-600">
                    <p>
                      <strong>Note:</strong> Private Training sessions are available only to qualified players who have
                      been approved by the coaching staff.
                    </p>
                    <p className="mt-2">
                      <strong>Basic + Elite Training:</strong> This program includes both the morning (9 AM - 12 PM) and
                      afternoon (2 PM - 4 PM) sessions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to Bring</CardTitle>
                  <CardDescription>Essential items for participants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-lg mb-3">Equipment</h3>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>Soccer cleats</li>
                        <li>Shin guards</li>
                        <li>Soccer ball (size appropriate for age)</li>
                        <li>Training clothes (multiple sets)</li>
                        <li>Soccer socks</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-3">Personal Items</h3>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>Water bottle (labeled with name)</li>
                        <li>Sunscreen</li>
                        <li>Hat or visor</li>
                        <li>Light snacks</li>
                        <li>Towel</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment Information</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Secure your spot at our elite soccer camp by completing your registration payment.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-green-600" />
                    Payment Options
                  </CardTitle>
                  <CardDescription>Scan the QR code for payment details</CardDescription>
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
                      <p className="text-sm text-gray-500 text-center">Scan this PayPal QR code to make payment</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Payment Instructions</h3>
                      <p className="text-gray-700">
                        After completing your registration form, please use one of the following payment methods to
                        secure your spot:
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
                      <div className="pt-4">
                        <Button asChild className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                          <Link href="/register">
                            Register Now
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our soccer camp.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="registration" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="registration">Registration</TabsTrigger>
                  <TabsTrigger value="programs">Programs</TabsTrigger>
                  <TabsTrigger value="logistics">Logistics</TabsTrigger>
                </TabsList>
                <TabsContent value="registration" className="mt-6 space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium text-lg">How do I register for the camp?</h3>
                    <p className="text-gray-600 mt-2">
                      You can register online through our website by completing the registration form. Payment can be
                      made via credit card or bank transfer.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium text-lg">What is the registration deadline?</h3>
                    <p className="text-gray-600 mt-2">We recommend registering early as spots fill quickly.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium text-lg">Is there a refund policy?</h3>
                    <p className="text-gray-600 mt-2">
                      Full refunds are available up to 14 days before the camp. 50% refunds are available up to 7 days
                      before. No refunds are available after that.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="programs" className="mt-6 space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium text-lg">What's the difference between Basic and Elite training?</h3>
                    <p className="text-gray-600 mt-2">
                      Basic Training focuses on fundamental skills in a fun environment, while Elite Training offers
                      more intensive sessions with tactical elements and game scenarios for advanced players.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium text-lg">How are players grouped during training?</h3>
                    <p className="text-gray-600 mt-2">
                      Players are grouped by age (8-10 and 11-13) and skill level to ensure appropriate training and
                      development.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium text-lg">How do I qualify for Private Training?</h3>
                    <p className="text-gray-600 mt-2">
                      Private Training is by application only. Our coaching staff will review applications based on
                      player experience, skill level, and development goals.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="logistics" className="mt-6 space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium text-lg">What should my child bring to camp?</h3>
                    <p className="text-gray-600 mt-2">
                      Players should bring soccer cleats, shin guards, a soccer ball, water bottle, sunscreen, and
                      appropriate training clothes. A full list will be provided upon registration.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium text-lg">Is lunch provided?</h3>
                    <p className="text-gray-600 mt-2">
                      Lunch is not provided. Players should bring their own snacks and lunch if attending multiple
                      sessions.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h3 className="font-medium text-lg">Is there medical staff on site?</h3>
                    <p className="text-gray-600 mt-2">
                      Yes, we have certified athletic trainers on site during all camp sessions to handle any medical
                      needs or emergencies.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link href="/faq">View All FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Game?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Spaces are limited for each training program. Secure your spot today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-green-800 hover:bg-white/90">
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </section>
    </div>
  )
}
