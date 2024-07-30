import Link from 'next/link'

//components
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <h1>Placeholder Site Name</h1>
        </Link>

        <div>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header
