import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <p>404 — Page not found</p>
      <NavLink to="/">Go home</NavLink>
    </main>
  );
}
