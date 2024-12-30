import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

export const Homepage = () => {
  const {user} = useAuthStore();

  return (
    <div>
      {user ? <HomeScreen/> : <AuthScreen/>}
    </div>
  )
}
