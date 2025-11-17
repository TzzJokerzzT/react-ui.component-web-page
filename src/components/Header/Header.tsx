import { Link } from "react-router";
import { Button } from "../Button";
import type { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screenbg-gray-900 text-slate-800duration-200 ease-in-out">
      <nav className="bg-gray-800 shadow-md duration-200 ease-in-out">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/articles" className="text-xl font-bold text-blue-600">
                Article Manager
              </Link>

              <div className="hidden md:flex space-x-4">
                <Button>
                  <Link to="/articles">Articles</Link>
                </Button>

                <Button color="danger">
                  <Link
                    to="/favorites"
                    className={`px-3 py-2 rounded-md ${
                      location.pathname === "/favorites"
                    }`}
                  >
                    Favorites
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Header;
