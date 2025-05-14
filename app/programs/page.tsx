import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Award, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Training Programs</h1>
        <p className="text-lg text-gray-600">
          Our camp offers three distinct training programs designed to cater to different skill levels and development
          needs.
        </p>
      </div>

      <Tabs defaultValue="basic" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Training</TabsTrigger>
          <TabsTrigger value="elite">Basic + Elite Training</TabsTrigger>
          <TabsTrigger value="private">Private Training</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" id="basic" className="mt-6">
          <Card>
            <CardHeader className="bg-green-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-700">Basic Training Session</CardTitle>
              </div>
              <CardDescription>For beginners and intermediate players</CardDescription>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
                  $349 for Allen Academy students
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
                  $399 for others
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Participants:</span> 20+ participants per session (coed)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Age Groups:</span>
                        <ul className="list-disc ml-5 mt-1">
                          <li>Group A: Ages 8-10</li>
                          <li>Group B: Ages 11-13</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Time:</span> 9 AM - 12 PM daily
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Dates:</span> June 16-20, 2025
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Coaching:</span> Pere Marti + Local Coach (2 coaches per session)
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Training Focus</h3>
                  <p className="mb-4">
                    Our Basic Training program focuses on developing fundamental soccer skills in a fun and engaging
                    environment. Perfect for players looking to build a strong foundation.
                  </p>
                  <h4 className="font-medium mb-2">Session Structure:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span>Dynamic warm-up exercises</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span>Fundamental skills development (dribbling, passing, shooting)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span>Fun games and drills to reinforce skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span>Small-sided games to apply skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span>Cool-down activities and skill review</span>
                    </li>
                  </ul>
                  <p>Each player will receive personalized attention with our 1:13-15 coach-to-player ratio.</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/register?program=basic">Register for Basic Training</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="elite" id="elite" className="mt-6">
          <Card>
            <CardHeader className="bg-blue-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-700">Basic + Elite Training Session</CardTitle>
              </div>
              <CardDescription>For advanced players seeking a challenge</CardDescription>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
                  $449 for Allen Academy students
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
                  $499 for others
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Participants:</span> 14+ participants per session (coed)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Age Groups:</span>
                        <ul className="list-disc ml-5 mt-1">
                          <li>Group A: Ages 8-10</li>
                          <li>Group B: Ages 11-13</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Time:</span> 9 AM - 12 PM & 2 PM - 4 PM daily
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Dates:</span> June 16-20, 2025
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Coaching:</span> Pere Marti + Local Coach (2 coaches per session)
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Training Focus</h3>
                  <p className="mb-4">
                    Our Elite Training program offers more intensive sessions designed to challenge advanced players and
                    develop high-level technical and tactical skills.
                  </p>
                  <h4 className="font-medium mb-2">Training Elements:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span>Advanced technical skills development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span>Tactical awareness and positional play</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span>Game-like scenarios and match conditions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span>Decision-making under pressure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span>Competitive small-sided games</span>
                    </li>
                  </ul>
                  <p>Each coach will train 10-12 players, ensuring personalized attention and feedback.</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/register?program=elite">Register for Elite Training</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="private" id="private" className="mt-6">
          <Card>
            <CardHeader className="bg-purple-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-700">Private Training Session</CardTitle>
              </div>
              <CardDescription>For qualified players only</CardDescription>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">
                  $699 for two sessions
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Program Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Participants:</span> 5 people per session (coed)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Age Group:</span> Under 18
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Time:</span> 6 PM - 8 PM (select days)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Dates:</span> June 18 & 20, 2025
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Coaching:</span> Direct training with Pere Marti
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Includes:</span> Player Report Provided
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Training Focus</h3>
                  <p className="mb-4">
                    Our Private Training sessions are exclusively for qualified players seeking personalized development
                    with detailed feedback and assessment.
                  </p>
                  <h4 className="font-medium mb-2">Program Highlights:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <span>Small-group training (5 players maximum)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <span>Technical, tactical, and physical development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <span>Customized drills based on player skill level</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <span>Detailed training reports with actionable insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                      <span>Video analysis and performance feedback</span>
                    </li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                    <p className="font-medium text-amber-800">
                      Note: Only qualified players may apply for private training sessions. Applications will be
                      reviewed by our coaching staff.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/register?program=private">Apply for Private Training</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Training Programs?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-lg mb-3">Professional Development</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span>Training methodology used by professional academies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span>Focus on both technical skills and tactical understanding</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span>Age-appropriate training progressions</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-3">Player Experience</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span>Small group sizes for personalized attention</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span>Bilingual instruction (English/Spanish)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span>Fun, engaging, and challenging environment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
