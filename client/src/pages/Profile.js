import { useQuery } from "@apollo/client";
import { QUERY_PROFILE } from "../utils/queries";
import Auth from '../utils/auth';

const Profile = () => {
    const { loading, data } = useQuery(QUERY_PROFILE, {
        variables: { userId: Auth.getProfile().data._id }
    });
    const profile = data?.user || {};
    console.log(profile)

    return (
        <>
        <h1>Profile Page</h1>
        <h2>Welcome {profile.username}</h2>
        </>
    )
};

export default Profile;