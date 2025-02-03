import { Card } from "@/components/ui/card"
import { MapIcon as Maple } from "lucide-react"
import PageLayout from "@/components/PageLayout"

export default function About() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Maple className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400">
            About Buy Canadian
          </h1>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-8" />
        </div>

        <div className="grid gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Buy Canadian is dedicated to helping consumers make informed choices about products manufactured in Canada
              and the United States. In response to recent trade developments and tariffs, we believe it's more
              important than ever to support local businesses and strengthen our domestic economy.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our platform uses the Open Food Facts database to provide accurate information about product origins.
                You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Search for products by name or barcode</li>
                <li>Scan barcodes directly using your device's camera</li>
                <li>View detailed product information including origin and ingredients</li>
                <li>Contribute missing product information to help others</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Supporting Local Economy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When you choose Canadian products, you're not just making a purchase – you're investing in our
              communities. Canadian manufacturing supports over 1.7 million jobs and contributes significantly to our
              GDP. Every purchase makes a difference in strengthening our local economy.
            </p>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}

