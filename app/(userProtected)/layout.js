import SessionWrapper from "@/components/SessionWrapper";

export default async function UserProtectedLayout({ children }) {
   
    return (
        <SessionWrapper>
            {children}
        </SessionWrapper>
    );
}
