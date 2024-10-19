import { useContext, useEffect, useState } from "react"; 
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // Check if the user is logged in on page load
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // Handle login
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.employees.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee", data: employee }));
      }
    } else {
      alert("Invalid email or password");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
