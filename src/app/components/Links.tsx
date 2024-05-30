'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Links() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul className='flex gap-4 py-4'>
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
      </ul>
    </nav>
  )
}