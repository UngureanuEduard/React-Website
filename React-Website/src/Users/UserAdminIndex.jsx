import React from "react";
import PropTypes from "prop-types";
import { listUsers, deleteUserById } from "./UserService";
import "./UserAdminIndex.css";
import { Link } from "react-router-dom";

const UsersAdminIndex = ({ updateId}) => {
    const [users, setUsers] = React.useState([]);
    
    React.useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await listUsers();
            console.log("Fetched data:", data);
            setUsers(data.slice(0, 6));
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleUserClick = (id) => {
        updateId(id);
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUserById(id);
            await fetchUsers(); 
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    if (users.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-list">
            {users.map((user) => (
                <div className="user-square" key={user.id}>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <div className="button-container">
                        <Link
                            key={user.id}
                            to={`/admin/${user.id}`}
                            onClick={() => handleUserClick(user.id)}
                        >
                            <button className="update-button">Update</button>
                        </Link>
                        <button
                            className="delete-button"
                            onClick={() => handleDeleteUser(user.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

UsersAdminIndex.propTypes = {
    updateId: PropTypes.func.isRequired,
};

export default UsersAdminIndex;
