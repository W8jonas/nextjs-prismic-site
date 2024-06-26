

import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"
import Link from "next/link"
import Bounded from "./Bounded"
import { Logo } from "./Logo"

export default async function Header() {
  const client = createClient()
  
  const settings = await client.getSingle('settings')

  return (
    <Bounded as='header' className="py-4 md:py-6 lg:py-8">
      <div className="flex gap-4 items-center justify-between sm:flex-row">
        <Link href="/">
          <Logo/>
        </Link>
        
        <nav>
          <ul className="flex ">
            {settings.data.navigation.map(nav => (
              <li key={nav.link_label}>
                <PrismicNextLink
                  field={nav.link}
                  className="p-3"
                >
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
