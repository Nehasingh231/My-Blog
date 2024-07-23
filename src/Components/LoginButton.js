import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/authcontext";

export default function LoginButton() {
     const {
        user,
        isLoading,
        error,
        handleSignIn,
        handleSignOut,
      } = useAuth();

    if(user) {
        return <div className="flex gap-4 items-center">
            <button onClick={handleSignOut}>
                  Logout
            </button>
            <div className="flex">
              <img className="object-cover h-12 w-12 rounded-full" 
              src={user?.photoURL}
               alt="user-image" />
            </div>
            <div>
              <h1>{user?.displayName}</h1>
            </div>

        </div>
    }

    return (
        <div className="flex items-center space-x-2 link mr-10">
        <FontAwesomeIcon icon={faUser} />
        <Link to="" 
        onClick={handleSignIn}
        className="link text-gray-600 ">
          Log In
        </Link>
      </div>
    )
}