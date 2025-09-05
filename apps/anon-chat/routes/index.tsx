import Chat from "../islands/Chat.tsx";

export default function Home() {
    return <div className={"flex justify-center items-center h-screen"}>
        <div>
        <div className={"text-center mb-4 text-xl font-semibold"}>
            Welcome to the Anon Chat App!
        <h2>Peer-to-Peer Chat</h2>
        </div>
            <Chat />
        </div>
    </div>;
}