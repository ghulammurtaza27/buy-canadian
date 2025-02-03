import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Mail className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400">
            Contact Us
          </h1>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-8" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about Canadian products? Want to suggest improvements? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <Mail className="h-8 w-8 text-red-600 mx-auto mb-4" />
            <h2 className="font-semibold mb-2">Email</h2>
            <a href="mailto:murtazash123@gmail.com" className="text-red-600 hover:text-red-700 dark:text-red-400">
              murtazash123@gmail.com
            </a>
          </Card>
          <Card className="p-6 text-center">
            <Phone className="h-8 w-8 text-red-600 mx-auto mb-4" />
            <h2 className="font-semibold mb-2">Phone</h2>
            <p className="text-gray-600 dark:text-gray-300">Mon-Fri, 9am-5pm EST</p>
          </Card>
          <Card className="p-6 text-center">
            <MapPin className="h-8 w-8 text-red-600 mx-auto mb-4" />
            <h2 className="font-semibold mb-2">Location</h2>
            <p className="text-gray-600 dark:text-gray-300">Canada</p>
          </Card>
        </div>

        <Card className="p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="Message subject" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

