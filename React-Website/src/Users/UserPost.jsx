
import  { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUserById } from "./UserService";
import "./UserPost.css";
const UserPost = ({ id }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const userData = await getUserById(id);
                console.log("Fetched user data:", userData);
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        })();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="userpost-square">
            <h2>User Information</h2>
            <p>User ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p>Geo: Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <p>Motto: {user.company.catchPhrase}</p>
        </div>
    );
};

UserPost.propTypes = {
    id: PropTypes.number.isRequired,
};

export default UserPost;
