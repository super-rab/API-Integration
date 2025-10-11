import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-3">404 - Page Not Found</h2>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
