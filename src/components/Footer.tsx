

import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"

export default async function Footer() {
  const client = createClient()
  
  const settings = await client.getSingle('settings')

  return (
    <footer>
      <Link href="/">
        {settings.data.site_title}
      </Link>
      
      <p>@{new Date().getFullYear()} W8 site</p>

      <nav>
        <ul>
          {settings.data.navigation.map(nav => (
            <li key={nav.link_label}>
              <PrismicNextLink field={nav.link}>{nav.link_label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
