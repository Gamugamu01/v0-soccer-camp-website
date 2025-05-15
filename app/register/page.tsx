"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
// 서버 액션 임포트
import { saveToGoogleSheet } from "@/app/actions/register"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const programParam = searchParams.get("program")

  // 폼 상태 추가
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    program: programParam || "",
    varsityExperience: false,
    clubExperience: false,
    noExperience: false,
    parentName: "",
    email: "",
    phone: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalInfo: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      // Handle mutual exclusivity for experience checkboxes
      if (name === "noExperience" && checked) {
        setFormData((prev) => ({
          ...prev,
          noExperience: true,
          varsityExperience: false,
          clubExperience: false,
        }))
      } else if ((name === "varsityExperience" || name === "clubExperience") && checked) {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
          noExperience: false,
        }))
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }))
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // 폼 제출 핸들러 수정
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 서버 액션 호출
      const result = await saveToGoogleSheet(formData)

      setSubmitStatus({
        success: result.success,
        message: result.message,
      })

      // 저장 성공 시 결제 페이지로 리디렉션
      if (result.success) {
        const playerName = `${formData.firstName} ${formData.lastName}`
        window.location.href = `/register/payment?name=${encodeURIComponent(
          playerName,
        )}&program=${encodeURIComponent(formData.program)}`
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Registration error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Register for Soccer Camp</h1>
        <p className="text-lg text-gray-600">Complete the form below to secure your spot at our summer soccer camp.</p>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Registration Form</CardTitle>
          <CardDescription>June 16-20, 2025 at Allen Academy, Bryan, TX</CardDescription>
        </CardHeader>
        <CardContent>
          {/* 제출 상태 메시지 표시 */}
          {submitStatus.message && (
            <div
              className={`mb-6 p-4 rounded-md ${
                submitStatus.success
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Player Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <RadioGroup
                    defaultValue={formData.gender}
                    onValueChange={(value) => handleSelectChange("gender", value)}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">Program Selection</h3>
              <div className="space-y-2">
                <Label htmlFor="program">Select Program</Label>
                <Select defaultValue={formData.program} onValueChange={(value) => handleSelectChange("program", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Training (Ages 8-13)</SelectItem>
                    <SelectItem value="elite">Elite Training (Ages 8-13)</SelectItem>
                    <SelectItem value="private">Private Training (Qualified Players Only)</SelectItem>
                  </SelectContent>
                </Select>
                {formData.program === "private" && (
                  <p className="text-sm text-amber-600 mt-2">
                    Note: Private Training is by application only. Our staff will review your application and contact
                    you.
                  </p>
                )}
              </div>
            </div>

            <Separator />

            {formData.program === "private" && (
              <div>
                <h3 className="text-lg font-medium mb-4">Player Experience Evaluation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  This information helps our coaches prepare for your private training sessions. Please select all that
                  apply:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="varsityExperience"
                      checked={formData.varsityExperience}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          varsityExperience: checked as boolean,
                        }))
                      }
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="varsityExperience"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Varsity Experience
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Player has experience at the high school varsity level
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="clubExperience"
                      checked={formData.clubExperience}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          clubExperience: checked as boolean,
                        }))
                      }
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="clubExperience"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Club Experience
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Player has experience playing for a club or select team
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="noExperience"
                      checked={formData.noExperience}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData((prev) => ({
                            ...prev,
                            noExperience: true,
                            varsityExperience: false,
                            clubExperience: false,
                          }))
                        } else {
                          setFormData((prev) => ({
                            ...prev,
                            noExperience: false,
                          }))
                        }
                      }}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="noExperience"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Does Not Apply
                      </Label>
                      <p className="text-sm text-muted-foreground">Player does not have varsity or club experience</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {formData.program === "private" && <Separator className="my-6" />}

            <div>
              <h3 className="text-lg font-medium mb-4">Parent/Guardian Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name</Label>
                  <Input
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">Emergency Contact</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                  <Input
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                  <Input
                    id="emergencyPhone"
                    name="emergencyPhone"
                    type="tel"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">Medical Information</h3>
              <div className="space-y-2">
                <Label htmlFor="medicalInfo">Please list any medical conditions, allergies, or special needs</Label>
                <Input id="medicalInfo" name="medicalInfo" value={formData.medicalInfo} onChange={handleChange} />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
                <p className="text-amber-800 font-medium">
                  Upon successful registration, a waiver form will be sent out in the confirmation email. You MUST bring
                  a physical copy of the completed waiver form to the first day of the camp.
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      agreeTerms: checked as boolean,
                    }))
                  }
                  required
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="agreeTerms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    By checking this box, you agree to our terms of service and privacy policy.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!formData.agreeTerms || isSubmitting}
              >
                {isSubmitting ? "Processing Registration..." : "Complete Registration"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t pt-6">
          <h3 className="font-medium mb-2">Registration Notes:</h3>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
            <li>Registration is not complete until payment is received</li>
            <li>A confirmation email will be sent once your registration is processed</li>
            <li>Space is limited and registrations are processed on a first-come, first-served basis</li>
            <li>For questions about registration, please contact us at meistercamptx@gmail.com</li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  )
}
