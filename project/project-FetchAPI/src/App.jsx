// Cập nhật App.jsx để dùng UserProvider
import { UserProvider } from "./context/UserContext";
import UserList from "./component/UserList";
import './App.css'
function App() {
  return (
    <UserProvider>
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center mb-4">
          Danh sách người dùng
        </h1>
        <UserList />
      </div>
    </UserProvider>
  );
}
export default App;