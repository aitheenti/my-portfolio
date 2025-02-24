import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('logoiut');
    navigate('/');
  };
  return (
    <>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>You are now an authenticated user!</div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
