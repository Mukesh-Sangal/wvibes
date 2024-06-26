import '../globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  // Generate a random cache-busting query parameter
  const cacheBuster = Math.random()
  // Build the URL with the cache-busting parameter
  const apiUrl = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/node_title/about?cache=${cacheBuster}`
  try {
    // Fetch data with the cache-busting parameter
    const response = await fetch(apiUrl)
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`)
    }
    const product = await response.json()
    // Check if the product data is available and has the expected structure
    if (
      Array.isArray(product) &&
      product.length > 0 &&
      product[0]?.field_meta_tags
    ) {
      const meta = JSON.parse(product[0].field_meta_tags)
      return {
        title: meta.title,
        description: meta.description,
      }
    } else {
      console.warn('Product data or field_meta_tags is missing or empty.')
      return null
    }
  } catch (error) {
    console.error('An error occurred:', error)
    return null
  }
}
export default function AboutLayout({ children }) {
  return (
    <>
      <main className={inter.className}>{children}</main>
    </>
  )
}
