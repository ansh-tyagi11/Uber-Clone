import SessionWrapper from "@/components/SessionWrapper";
import UserNavbar from "@/components/UserNavbar";

export default async function UserProtectedLayout({ children }) {

    return (
        <SessionWrapper>
            <UserNavbar />
            {children}
        </SessionWrapper>
    );
}