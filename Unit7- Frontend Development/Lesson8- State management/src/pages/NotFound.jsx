import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <NavLink to="/">Go back home</NavLink>
    </div>
  );
};

export default NotFound;