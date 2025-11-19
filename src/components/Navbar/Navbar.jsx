import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <header className="relative backdrop-blur-md bg-white/70 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
            AI
          </div>
          <h1 className="text-xl font-bold text-gray-900">SmartChat</h1>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <SignedOut>
            <Link
              className="text-gray-600 hover:text-blue-600 transition-colors"
              to="/login"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              className="text-gray-600 hover:text-blue-600 transition-colors"
              to="/integrations"
            >
              Integrations
            </Link>
            <Link
              to="/chat"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105"
            >
              Chat
            </Link>
          </SignedIn>
          <SignedIn>
            <li className="nav-item">
              <div className="nav-link ms-1">
                <UserButton />
              </div>
            </li>
          </SignedIn>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
