export default function Home() {
    return <div className={"flex justify-center items-center h-screen"}>
        <div>
        <div className={"text-center mb-4 text-xl font-semibold"}>
            Welcome to the Anon Chat App!
        <h2>Peer-to-Peer Chat</h2>
        </div>
        <div>
            <textarea id="log" cols="50" rows="10" readOnly className={"border"}></textarea><br/>
            <div className={"border p-2 flex"}>
            <input id="msg" type="text" placeholder="Type a message..." className={"border p-2 m-2 w-[80%]"}/>
            <button id="send" className={"border bg-slate-900 text-white px-4 py-2 text-xl rounded-xl"}>Send</button>
            </div>
        </div>
        </div>
    </div>;
}