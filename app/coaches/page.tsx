import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Flag, Languages, Star, Trophy, GraduationCap, Users, Medal, Flame } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function CoachesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Meet Our Coaching Staff</h1>
        <p className="text-lg text-gray-600">
          Our camp features experienced coaches dedicated to developing young soccer players through professional
          training methods.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="pere" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pere">Pere Marti</TabsTrigger>
            <TabsTrigger value="support">Support Staff</TabsTrigger>
          </TabsList>

          <TabsContent value="pere" className="mt-6">
            <Card className="overflow-hidden">
              <div className="relative h-80 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/30 z-10"></div>
                <Image
                  src="/images/pere-marti.png"
                  alt="Pere Marti"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent h-32 z-20"></div>
                <div className="absolute bottom-4 left-4 z-30">
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white mb-2">La Liga Experience</Badge>
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white ml-2 mb-2">UEFA Cup Veteran</Badge>
                  <Badge className="bg-green-600 hover:bg-green-700 text-white ml-2">Team Captain</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl">Pere Marti</CardTitle>
                    <CardDescription className="text-base">
                      Lead Technical Coach & Former La Liga Professional
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                      <Trophy className="h-3 w-3 mr-1" />
                      UEFA Licensed
                    </div>
                    <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Professional Experience
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Professional Playing Career</h3>
                    <p className="text-blue-800 font-medium mb-3">
                      Pere Marti made his La Liga debut in the 2003-2004 season with Villareal CF, competing at the
                      highest level of Spanish football.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Flame className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">La Liga Debut:</span> 2003-2004 season with Villareal CF
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Trophy className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">UEFA Cup:</span> Competed in 9 matches at the European level
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Medal className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Málaga CF:</span> Former Player
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Career:</span> Over 200 professional matches in Spanish football
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Professional Background</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Coaching Experience:</span> Over 15 years of coaching experience
                          at youth and professional levels
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Specialization:</span> Technical skills development, tactical
                          awareness, and player mentoring
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Flag className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Background:</span> Transitioned from professional playing to
                          coaching with extensive certifications
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Certifications:</span> UEFA A License
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Coaching Philosophy</h3>
                    <p className="text-gray-700">
                      Coach Pere brings a wealth of knowledge and passion to our camp. His training methods focus on
                      developing well-rounded players who understand both the technical and tactical aspects of the
                      game. He believes in creating a positive learning environment where players are encouraged to be
                      creative, take risks, and learn from their mistakes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Career Highlights</h3>
                    <ul className="list-disc ml-5 space-y-1 text-gray-700">
                      <li>La Liga debut with Villareal CF in the 2003-2004 season</li>
                      <li>Competed in 9 UEFA Cup matches at the European level</li>
                      <li>Captain of Elche CF in Spain's Segunda División</li>
                      <li>Developed youth players who have gone on to play at collegiate and professional levels</li>
                      <li>Served as technical director for multiple youth academies</li>
                      <li>Conducted coaching clinics across Europe and North America</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Support Staff</CardTitle>
                <CardDescription>Additional team members ensuring a great camp experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <Languages className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Bilingual Interpreter</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      A Spanish-English bilingual interpreter will be present at each session to ensure clear
                      communication between coaches and players. This allows Coach Pere to communicate effectively with
                      all participants and ensures that no instruction is lost in translation.
                    </p>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Role:</span> Facilitate communication between Spanish-speaking
                        coaches and English-speaking players
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Camp Director: Jaehyeon Yoon</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      As a FIFA Licensed Football Agent (License No. 202411-8877), Jaehyeon oversees all aspects of the
                      camp operations, ensuring a professional and well-organized experience for all participants.
                    </p>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Role:</span> Overall camp management, player evaluations, and
                        professional development opportunities
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Additional Staff</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2">Athletic Trainer</h4>
                      <p className="text-gray-700 text-sm">
                        Certified athletic trainer on-site during all sessions to handle any medical needs or
                        emergencies.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2">Camp Counselors</h4>
                      <p className="text-gray-700 text-sm">
                        Experienced youth mentors who assist with organization, supervision, and creating a positive
                        environment.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2">Administrative Staff</h4>
                      <p className="text-gray-700 text-sm">
                        Handles registration, parent communication, and daily operations to ensure a smooth experience.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Our Coaching Standards</h2>
          <p className="text-gray-700 mb-6">
            All coaches at Apex Soccer Camp are carefully selected based on their experience, qualifications, and
            ability to work with youth players. We maintain the highest standards for our coaching staff:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <GraduationCap className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Certified & Licensed</h3>
                <p className="text-sm text-gray-600">
                  All coaches hold appropriate coaching licenses and certifications
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Background Checked</h3>
                <p className="text-sm text-gray-600">Comprehensive background checks for all staff members</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <Award className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Experienced</h3>
                <p className="text-sm text-gray-600">Proven track record of developing youth players</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
