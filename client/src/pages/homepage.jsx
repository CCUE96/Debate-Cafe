import WelcomeCard from "../components/homepage/welcomeCard";
import GetStarted from "../components/homepage/getStarted";
import Auth from '../utils/auth'

// import FakeWelcomeCard from "../components/fakeWelcomeCard";



export default function Homepage() {
        Auth.ensureAuthenticatedAccess();
    return (
        <>
            <WelcomeCard />
            <GetStarted />
        </>
    )
}