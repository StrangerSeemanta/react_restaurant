const singleInput = [
    {
        "question": "How to create an account",
        "answer": "Follow these steps"
    }
];

const rawInput = [
    {
        "input": "How are you ?",
        "output": (<>
            <span>I am fine. </span><br />
            <b>How can I help?</b>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, minus.</div>
        </>)
    }
];

async function ChatBot_model(message: string) {
    const words = message.toLowerCase().split(/\s+/);

    // Check if there are at least two words in the user input
    if (words.length < 2) {
        return "Please Make a clear and complete sentence";
    }

    // Check in singleInput
    const singleMatch = singleInput.find(faq =>
        words.every(word => faq.question.toLowerCase().includes(word))
    );

    if (singleMatch) {
        return singleMatch.answer;
    }

    // Check in rawInput
    const rawMatch = rawInput.find(input =>
        words.every(word => input.input.toLowerCase().includes(word))
    );

    if (rawMatch) {
        return rawMatch.output;
    }

    // If no match found
    return "Sorry! Invalid Input";
}

export default ChatBot_model;
