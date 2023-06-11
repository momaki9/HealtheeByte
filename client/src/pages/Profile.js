import { useQuery } from "@apollo/client";
import { QUERY_PROFILE } from "../utils/queries";
import Bar from "../components/Bar";
import Auth from '../utils/auth';
import {
    Link,
    Typography
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
        <Typography variant="h3" sx={{p:1}}>Welcome {profile.username}</Typography>
        <Link href="/addrecipe" sx={{p: 2, fontSize: 24}}>Add A Recipe</Link>
        </>
    )
};

export default Profile;