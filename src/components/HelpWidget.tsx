import { useState } from "react";

export const HelpWidget = () => {
    const [isChatPanelDisplayed, setIsChatPanelDisplayed] = useState(false);
 return  isChatPanelDisplayed ? (
    <div className="fixed bottom-10 right-10 h-96 w-72 p-8 bg-white">
        <button 
        className="absolute right-4 top-4 hover:text-red-600"
        onClick={() => setIsChatPanelDisplayed(false)}>
            X
        </button>
    </div>
 ) : (
 <button 
 onClick={() => setIsChatPanelDisplayed(true)} 
 className="fixed bottom-10 right-10 bg-black text-white p-2 px-4 hover:bg-gray-500 cursor-pointer">
    Speak to our Support Team
 </button>
 );
};