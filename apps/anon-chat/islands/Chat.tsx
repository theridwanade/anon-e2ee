export default function Chat() {

    return  <div>
        <textarea id="log" cols="50" rows="10" readOnly className={"border"}></textarea><br/>
        <div className={"border p-2 flex"}>
            <input id="msg" type="text" placeholder="Type a message..." className={"border p-2 m-2 w-[80%]"}/>
            <button id="send" className={"border bg-slate-900 text-white px-4 py-2 text-xl rounded-xl"}>Send</button>
        </div>
    </div>
};

