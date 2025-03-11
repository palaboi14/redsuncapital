
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-heritage-500 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-flex"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
