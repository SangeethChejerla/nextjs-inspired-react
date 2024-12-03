import { Link } from '@tanstack/react-router';

function Nav() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:underline">
            About
          </Link>
        </li>

        <li>
          <Link to="/getus" className="text-white hover:underline">
            Get Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
