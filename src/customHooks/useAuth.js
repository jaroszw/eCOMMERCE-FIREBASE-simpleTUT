import { useEffect } from "react";
import { useSelector } from "react-redux";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const useAuth = (props) => {
  console.log("USE AUTH");
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    console.log("jesteśmy tutaj jak user jest NULL");
    if (!currentUser) {
      props.history.push("/login");
    }
  }, [currentUser]);
  console.log("jesteśmy tutaj jak user jest FULL");
  return currentUser;
};

export default useAuth;
