import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUserById, patchUser } from "./UserService"; 
import "./UserUpdate.css";

import { useNavigate } from "react-router-dom";

const UserUpdate = ({ id, updatePage, updateId }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleBackClick = () => {
        updatePage('/admin');
        updateId(null);
        navigate(`/admin`);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedUser = await patchUser(user.id, user);
            console.log('User updated:', updatedUser);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const userData = await getUserById(id);
                console.log("Fetched user data:", userData);
                setUser(userData);
                updatePage('/admin/');
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        })();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <form className="userpost-square" >
                <div className="input-group">
                    <label htmlFor="userID">User ID:</label>
                    <input type="text" id="userID" name="id" value={user.id} readOnly />
                </div>

                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={user.name} onChange={handleInputChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={user.address.street} onChange={handleInputChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value={user.phone} onChange={handleInputChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="website">Website:</label>
                    <input type="text" id="website" name="website" value={user.website} onChange={handleInputChange} />
                </div>
               
            </form>
            <div className="button-container2">
                <button className="back-button" onClick={handleBackClick}>Back</button>
                <button className="save-button" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
};

UserUpdate.propTypes = {
    id: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired,
    updateId: PropTypes.func.isRequired,
};

export default UserUpdate;
