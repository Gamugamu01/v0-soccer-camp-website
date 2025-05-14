import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Camp Schedule</h1>
        <p className="text-lg text-gray-600">
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
                <strong>Note:</strong> Private Training sessions are available only to qualified players who have been
                approved by the coaching staff.
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
  )
}
