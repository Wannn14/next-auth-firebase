import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../../context/AuthContext";
import Write from "../cloudFirestore/Write";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="navbar1">
      <Write />
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/About">About</Link>
        </li>

        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/Profile">Profile</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <button onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </button>
          <button onClick={handleSignIn} className="p-2 cursor-pointer">
            Sign up
          </button>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
