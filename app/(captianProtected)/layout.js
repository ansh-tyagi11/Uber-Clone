import SessionWrapper from "@/components/SessionWrapper";
import CaptainNavbar from "@/components/CaptainNavbar";

export default async function CaptainProtectedLayout({ children }) {

    return (
        <SessionWrapper>
            <CaptainNavbar />
            {children}
        </SessionWrapper>
    );
}
