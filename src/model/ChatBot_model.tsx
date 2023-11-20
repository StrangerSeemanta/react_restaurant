import MainPanel from "./templates/MainPanel";
import { commonInputData, fixedInputData } from "./BotData_model";

async function ChatBot_model(message: string, handleSuggestBtn?: (suggestion: string) => void) {
    const words = message.toLowerCase().split(/\s+/);

    // Check if there are at least two words in the user input
    if ((!message.toLowerCase().includes("hi") && !message.toLowerCase().includes("hello"))) {
        if (!message.toLowerCase().includes("thank") && (words.length < 3)) {

            return <MainPanel
                onSuggestBtnClick={handleSuggestBtn}
                start={
                    <span style={{ color: "red", }}>Please Make a clear and complete sentence, and write at least 3 words</span>
                }
                suggestButtons />;

        }
    }


    // Check in singleInput
    const singleMatch = commonInputData.find(faq =>
        words.some(word => faq.question.toLowerCase().includes(word))
    );

    if (singleMatch) {
        return singleMatch.answer;
    }

    // Check in rawInput
    const rawMatch = fixedInputData.find(fixData =>
        words.every(word => fixData.input.toLowerCase().includes(word))
    );

    if (rawMatch) {
        return rawMatch.output;
    }

    // If no match found
    return <MainPanel start={"I can't recognize your message."} suggestButtons onSuggestBtnClick={handleSuggestBtn} />;
}

export default ChatBot_model;
