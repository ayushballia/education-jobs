'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul className=' flex gap-4 py-4 justify-center'>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/institute' ? 'active' : ''}`}
            href="/institute"
          >
            Institute
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/privacy' ? 'active' : ''}`}
            href="/privacy"
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/termsAndConditions' ? 'active' : ''}`}
            href="/termsAndConditions"
          >
            Terms And Conditions
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/disclaimer' ? 'active' : ''}`}
            href="/disclaimer"
          >
            Disclaimer
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/experienceForm' ? 'active' : ''}`}
            href="/experienceForm"
          >
            Experience Form
          </Link>
        </li>
      </ul>
    </nav>
  )
}