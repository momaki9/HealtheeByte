import { useQuery } from "@apollo/client";
import { QUERY_PROFILE } from "../utils/queries";
import Bar from "../components/Bar";
import Auth from '../utils/auth';
import {
    Link
} from '@mui/material';

const Profile = () => {
    const { loading, data } = useQuery(QUERY_PROFILE, {
        variables: { userId: Auth.getProfile().data._id }
    });
    const profile = data?.user || {};
    console.log(profile)

    return (
        <>
        <Bar />
        <h1>Profile Page</h1>
        <h2>Welcome {profile.username}</h2>
        <Link href="/addrecipe">Add A Recipe</Link>
        </>
    )
};

export default Profile;