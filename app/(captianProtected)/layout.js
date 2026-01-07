import SessionWrapper from "@/components/SessionWrapper";

export default async function CaptainProtectedLayout({ children }) {

    return (
        <SessionWrapper>
            {children}
        </SessionWrapper>
    );
}
