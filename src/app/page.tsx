import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="mt-10">
      <h1>This is the home</h1>
    </div>
  )
}
