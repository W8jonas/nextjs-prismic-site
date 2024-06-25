

import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"
import { Logo } from "./Logo"
import Bounded from "./Bounded"

export default async function Footer() {
  const client = createClient()
  
  const settings = await client.getSingle('settings')

  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        
        <p className="text-xs">@{new Date().getFullYear()} W8 site</p>

        <nav>
          <ul className="flex">
            {settings.data.navigation.map(nav => (
              <li key={nav.link_label}>
                <PrismicNextLink field={nav.link} className="p-3">
                  {nav.link_label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  )
}
