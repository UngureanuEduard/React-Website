import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { listUsers } from "./UserService";
import "./UsersIndex.css";

const UsersIndex = ({ updateId }) => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            try {
                const data = await listUsers();
                console.log("Fetched data:", data);
                setUsers(data.slice(0, 6));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        })();
    }, []);

    const handleUserClick = (id) => {
        updateId(id);
    };

    if (users.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-list">
            {users.map((user) => (
                <Link
                    key={user.id}
                    to={`/${user.id}`}
                    onClick={() => handleUserClick(user.id)}
                >
                    <div className="user-square">
                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

UsersIndex.propTypes = {
    updateId: PropTypes.func.isRequired,
};

export default UsersIndex;
