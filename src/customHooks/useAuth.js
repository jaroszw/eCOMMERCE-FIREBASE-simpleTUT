import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAuth = (props) => {
  const { currentUSer } = useSelector(mapState);

  useEffect(() => {
    if(!currentUSer){
      
    }
  }, [currentUSer]);

  return currentUSer;
};

export default useAuth;
