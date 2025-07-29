// // app/actions/contact.ts

// 'use server'

// import { createClient } from '@supabase/supabase-js'
// import nodemailer from 'nodemailer'

// export async function submitContactForm(prevState: any, formData: FormData) {
//   const name = formData.get('name')?.toString()
//   const email = formData.get('email')?.toString()
//   const message = formData.get('message')?.toString()

//   if (!name || !email || !message) {
//     return { success: false, message: 'All fields are required.' }
//   }

//   try {
//     // Supabase setup
//     const supabase = createClient(
//       process.env.NEXT_PUBLIC_SUPABASE_URL!,
//       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//     )

//     const { error } = await supabase
//       .from('contacts')
//       .insert([{ name, email, message }])

//     if (error) {
//       console.error('Supabase Error:', error.message)
//       return { success: false, message: 'Could not save to Supabase.' }
//     }

//     // Send email using nodemailer
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.CONTACT_EMAIL_USER,
//         pass: process.env.CONTACT_EMAIL_PASS,
//       },
//     })

//     await transporter.sendMail({
//       from: email,
//       to: process.env.CONTACT_EMAIL_TO,
//       subject: `New message from ${name}`,
//       text: message,
//     })

//     return { success: true, message: 'Message sent successfully!' }
//   } catch (err) {
//     console.error('Error:', err)
//     return { success: false, message: 'Something went wrong. Try again later.' }
//   }
// }
