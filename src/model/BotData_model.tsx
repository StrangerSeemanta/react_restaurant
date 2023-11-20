import { Link } from "react-router-dom";
import MainPanel from "./templates/MainPanel";

// Need to match a part of it
export const commonInputData = [

    {
        "question": "Thanks",
        "answer": "You are welcome. Feel free to ask me any kind of problems related on this website."
    },

    {
        "question": "Our Current New Offers",
        "answer": (
            <>
                <b>Our Current Offers</b>
                <ul className="chat_reply_list">
                    <li>25% Discount On Indian Thali</li>
                    <li><span style={{ color: "orangered", fontWeight: 600 }}>Free Delivary</span> for new accounts</li>
                    <li><b>Virgin Mojito Free</b> on American Flavour Items</li>
                    <li>15% Discount On 5 star dishes</li>
                    <li><span style={{ color: "green", fontWeight: 600 }}>10$ cashback </span>for member accounts on all dishes</li>
                </ul>

            </>
        )
    },

    {
        "question": "Sign In Problems",
        "answer": (
            <>
                <b>Facing Problem in </b><b>Sign in:</b><br></br>
                <p>Actually we use firebase authentication.So, you can sign in from your google or outlook account.</p>
                <p> Now if you have already created account on this site but facing problem on signing in. Then I suggest you tos go to our contact page and in the email form field place your that mail or hotbite username.</p>
                <p>Our custome service will review it and release your account. Don't worry!</p>
                <b>Keep Patience. We are promised to serve you</b><br></br>
                <Link to={"/contact"}>  Contact Page</Link>
            </>
        )
    }, {
        "question": "create an account",
        "answer": (<>
            <p><strong>Follow these steps</strong></p>
            <p>
                <ol className="chat_reply_list">
                    <li> Go to the Account Tab</li>
                    <li> Select Sign Up</li>
                    <li>Select your Google Account or Outlook</li>
                    <li>Give Authorizations</li>
                    <li>Sign in with your mail</li>
                </ol>


                If you get stuck then take a screen shot and send us through contact us form
            </p>
        </>)
    },
    {
        "question": "Show informations about Developer",
        "answer": (
            <>
                <b>This Website is Developed and Designed By:</b> <b>Shuvo Sarker</b>
                <br />
                <p>A professional Full-Stack Developer with over 4 years of experiences on Front-End Developing and working from 2 years on Backend. Addionally, He has quite good and sharp eyes for UI/ UX design , Parallax website and so on. Reach out to build your next website </p>
                <br />
                <b>HotBite Technologies: </b><b>React, TypeScript, React-Router, Redux, Material UI</b>
                <br />
                <b>This ChatBot Model Trained on: </b><b>19/11/2023</b>
                <br />
                <b>First Website Deployed On: </b><b>2/10/2023</b>
                <br />
                <b>mail: </b><b>ssworkmail22@gmail.com</b><br />
                <b>personal website: </b><b>shuvosarker.vercel.app</b>
            </>
        )
    }
];

// Need to match exactly
export const fixedInputData = [
    {
        "input": "How are you?",
        "output": (<>
            <span>I am fine. </span><br />
            <b>How can I help?</b>

        </>)
    },
    {
        "input": "What Can You Do?",
        "output": (
            <MainPanel start={"Here is my details"} />
        )
    }, {
        "input": "hi",
        "output": "Hello!! How can I assist you?"
    },
    {
        "input": "hello",
        "output": "Hi !! How can I assist you?"
    },
];

