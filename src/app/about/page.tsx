import { Card } from "@/components/ui/card"
import { MapIcon as Maple } from "lucide-react"
import PageLayout from "@/components/PageLayout"

export default function About() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Maple className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400">
            Our Story
          </h1>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Building a stronger Canada, one purchase at a time.
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="p-8 transform hover:scale-[1.02] transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-500">The Challenge We Face</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              In today's global marketplace, it's becoming increasingly difficult to identify and support Canadian businesses. 
              With recent trade tensions and economic shifts, our local manufacturers and businesses face unprecedented challenges. 
              Many Canadians want to support local businesses but lack the tools to make informed decisions.
            </p>
          </Card>

          <Card className="p-8 transform hover:scale-[1.02] transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-500">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Buy Canadian was born from a simple yet powerful idea: make it easy for Canadians to support Canadian businesses. 
              We believe that every purchase decision is an opportunity to invest in our communities and strengthen our economy. 
              By providing clear, accurate information about product origins, we empower consumers to make choices that align with their values.
            </p>
          </Card>

          <Card className="p-8 transform hover:scale-[1.02] transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-500">The Impact</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed">
                When you choose Canadian products, you're not just making a purchase – you're:
              </p>
              <ul className="list-none space-y-4 ml-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">1</span>
                  <span>Supporting over 1.7 million Canadian manufacturing jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">2</span>
                  <span>Contributing to local economic growth and community development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">3</span>
                  <span>Reducing environmental impact through shorter supply chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">4</span>
                  <span>Ensuring higher quality standards and ethical manufacturing practices</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 transform hover:scale-[1.02] transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-500">Looking Forward</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Our vision extends beyond just product information. We're building a movement that celebrates Canadian 
              innovation, craftsmanship, and entrepreneurship. Through technology and community engagement, we're 
              making it easier than ever to discover and support Canadian businesses.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Together, we can build a more resilient Canadian economy, create more local jobs, and ensure a 
              prosperous future for generations to come. Every purchase matters. Every choice counts.
            </p>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}

