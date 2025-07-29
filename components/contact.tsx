'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from './contact-form'


export default function Contact() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Get In{' '}
            <span className="underline decoration-4 underline-offset-8 decoration-black dark:decoration-white">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Let's Connect</h3>

              <div className="space-y-6">
                <ContactDetail
                  icon={<Mail className="w-6 h-6 text-white dark:text-black" />}
                  label="Email"
                  value="gweshetawanda3@gmail.com"
                />
                <ContactDetail
                  icon={<Phone className="w-6 h-6 text-white dark:text-black" />}
                  label="Phone"
                  value="+263 77 989 0522"
                />
                <ContactDetail
                  icon={<MapPin className="w-6 h-6 text-white dark:text-black" />}
                  label="Location"
                  value="Available Worldwide"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactDetail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{label}</p>
        <p className="text-black dark:text-white font-medium">{value}</p>
      </div>
    </div>
  )
}
