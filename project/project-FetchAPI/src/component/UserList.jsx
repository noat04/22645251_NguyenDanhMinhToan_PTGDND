import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { motion } from "framer-motion";
import UserDetails from "./UserDetails";
const UserList = () => {
    const { users, loading } = useContext(UserContext);
    const [selectedUser, setSelectedUser] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser,
        indexOfLastUser);
    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Tìm kiếm..."
                className="border p-2 w-full mb-4 text-black-600 bg-white"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading ? (
                <p className="text-center text-gray-500">Đang tải dữ
                    liệu...</p>
            ) : (
                <>
                    <ul className="space-y-2 text-start">
                        {currentUsers.map((user) => (
                            <motion.li
                                key={user.id}
                                className="p-3 border rounded shadow cursor-pointer hover:bg-gray-100"
                                onClick={() => setSelectedUser(user)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h2 className="font-bold">{user.name}</h2>
                                <p>Email: {user.email}</p>
                                <p>City: {user.address.city}</p>
                            </motion.li>
                        ))}
                    </ul>
                    {/* Phân trang */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {[...Array(Math.ceil(filteredUsers.length /
                            usersPerPage))].map(
                                (_, index) => (
                                    <button
                                        key={index}
                                        className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "text-white"
                                            }`}
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                )
                            )}
                    </div>
                </>
            )}
            {selectedUser && <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />}
        </div>
    );
};
export default UserList;