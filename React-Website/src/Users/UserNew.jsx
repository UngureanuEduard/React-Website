import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "./UserService";

const UserNew = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(`/admin`);
    };

    const [user, setUser] = useState({
        id: 11,
        name: "",
        email: "",
        address: "",
        phone: "",
        website: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const addedUser = addUser(user);
            console.log("User added successfully:", addedUser);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    return (
        <div>
            <form className="userpost-square" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="userID">User ID:</label>
                    <input
                        type="text"
                        id="userID"
                        name="id"
                        value={user.id}
                        readOnly
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="website">Website:</label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        value={user.website}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="button-container2">
                    <button className="back-button" onClick={handleBackClick}>
                        Back
                    </button>
                    <button className="save-button" type="submit">
                        Save
                    </button>
                </div>
               
            </form>

        </div>
    );
};

export default UserNew;
