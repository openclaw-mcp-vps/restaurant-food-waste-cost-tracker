import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WasteLens — Restaurant Food Waste Cost Tracker',
  description: 'Track restaurant food waste costs daily. Photo-based AI analysis, cost estimation, and actionable portion recommendations for restaurant owners and managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5cd7da1d-795a-4cff-af58-aaa865858a54"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
