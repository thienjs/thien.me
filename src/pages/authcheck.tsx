import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  // Let's use state to track if a user is currently authenticated
  // As a default we'll set this value to false so that the navigation defaults to thelogged-out view
  const [isAuthed, setAuthStatus] = useState(false);

 // We'll set up the nav, on mount to call the getUser endpoint we just 
 // created to determine if a user is currently logged-in or not
  useEffect(() => {
    fetch("./api/get-user")
      .then((response) => response.json())
      .then((result) => {
        setAuthStatus(result.user && result.user.role === "authenticated");
      });
  }, []);

  return (
 
      <nav>
        <div>
        // If user is authenticated then we will show the Sign Out text
          {isAuthed ? (
            <span>
              <h3>Sign Out &rarr;</h3>
            </span>
          ) : (
              // If there is no authenticated user then we will link to the Sign-in and Sign Up pages
            <>
              <Link href="/signup">
                <h3>Sign Up &rarr;</h3>
              </Link>
              <Link href="/login">
                <h3>Login &rarr;</h3>
              </Link>
            </>
          )}
        </div>
      </nav>
  );
}