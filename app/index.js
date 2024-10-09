import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

const Index = () => {
  
  const isLogged = useSelector((state) => state.user.isLoggedIn);

  console.log(isLogged);

  // Redirect the user based on their login status
  if (isLogged) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/auth/login" />;
  }
};

export default Index;
