'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'home',
    path: '/',
  },
]

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, i) => {
        return (
          <Link href={link.path} key={i}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
