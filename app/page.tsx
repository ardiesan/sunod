import {
    LoginButton,
    LogoutButton,
    ProfileButton,
    RegisterButton,
} from "@/components/buttons.component";

export default function Home() {
    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
            }}
        >
            <div>
                <LoginButton /><br />
                <RegisterButton /><br />
                <LogoutButton /><br />
                <ProfileButton />
            </div>
        </main>
    );
}

