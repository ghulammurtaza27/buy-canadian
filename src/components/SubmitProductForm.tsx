"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

interface SubmitProductFormProps {
  initialQuery?: string
}

export default function SubmitProductForm({ initialQuery = "" }: SubmitProductFormProps) {
  const [formData, setFormData] = useState({
    productName: initialQuery,
    barcode: "",
    brand: "",
    manufacturingCountry: "",
    ingredients: "",
  })

  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch("/api/submit-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    if (response.ok) {
      toast({
        title: "Success",
        description: "Product information submitted successfully",
      })
      setFormData({
        productName: "",
        barcode: "",
        brand: "",
        manufacturingCountry: "",
        ingredients: "",
      })
    } else {
      toast({
        title: "Error",
        description: "Failed to submit product information",
        variant: "destructive",
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Product Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <Input id="productName" name="productName" value={formData.productName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="barcode" className="block text-sm font-medium text-gray-700">
              Barcode
            </label>
            <Input id="barcode" name="barcode" value={formData.barcode} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <Input id="brand" name="brand" value={formData.brand} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="manufacturingCountry" className="block text-sm font-medium text-gray-700">
              Manufacturing Country
            </label>
            <Input
              id="manufacturingCountry"
              name="manufacturingCountry"
              value={formData.manufacturingCountry}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
              Ingredients
            </label>
            <Textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <Button type="submit">Submit Product Information</Button>
        </form>
      </CardContent>
    </Card>
  )
}

