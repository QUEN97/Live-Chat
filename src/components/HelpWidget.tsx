import { useState } from "react";

type TMessage = {
    message:string;
    id:string;
    sender: string;
}

export const HelpWidget = () => {
    const [isChatPanelDisplayed, setIsChatPanelDisplayed] = useState(false);
    const [senderId, setSenderId] = useState("0");
    const [messages, setMessages] = useState<TMessage[]>([
       {message: "Hello, how can we help you today?", id: "bui887", sender: "1"},
       {message: "I need fix my computer", id: "kioi986", sender: "0"},
    ]);
 return  isChatPanelDisplayed ? (
    <div className="flex flex-col justify-between fixed bottom-10 right-10 h-96 w-72 p-6 bg-white">
        <button 
        className="absolute right-2 top-2 hover:text-red-600"
        onClick={() => setIsChatPanelDisplayed(false)}>
            X
        </button>
        <ul>
            {messages.map(({message, id, sender}) => (
            <div className={`rounded p-1 mb-2 ${sender === senderId ? 'bg-gray-500 text-white' : 'bg-black text-white'} `}key={id}>{message}</div>
            ))}
        </ul>
        <div className="flex">
        <input className="w-full border border-gray-800 p-1 px-2" />
        <button className=" bottom-10 right-10 bg-black text-white p-2 px-4 hover:bg-gray-500 cursor-pointer">
            Send
        </button>
        </div>
    </div>
 ) : (
 <button 
 onClick={() => setIsChatPanelDisplayed(true)} 
 className="fixed bottom-10 right-10 bg-black text-white p-2 px-4 hover:bg-gray-500 cursor-pointer">
    Speak to our Support Team
 </button>
 );
};