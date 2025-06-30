import React, { useState } from "react";
import Message from "../components/Message";
import ChatInput from "../components/ChatInput";
import SideBar from "../components/SideBar";
import { GoogleGenAI } from "@google/genai";

const Chats = () => {
  const [DarkMode, SetDarkMode] = useState(true);
  const [Text, SetText] = useState("");
  const [Response, SetResponse] = useState(`👋 Welcome to DevCore
🚀 Your AI Coding Mentor – Learn Web Development & DSA from Scratch to Job-Ready!
💬 Ask me anything in Hindi or English`);
  const [NewChat, SetNewChat] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [Copy, SetCopy] = useState(true);

  const ai = new GoogleGenAI({
    apiKey: " AIzaSyAvPlzZQs-pnNfYgjt5c6ynYpR-t-jERxE ",
  });

  async function main() {
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: Text,
      config: {
        systemInstruction: `🌟You are a friendly and supportive AI teacher who helps students learn Web Development and Data Structures & Algorithms (DSA) from zero to job-ready level.

Your job is to teach in simple words, explain everything step-by-step, and guide learners like a personal mentor.

if User give Question in Hindi language then  you answer it in Hinglish Language it Hindi+English.

You teach:

Web Development: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, APIs

DSA: Arrays, Strings, Linked Lists, Trees, Graphs, Sorting, Searching, Recursion, Dynamic Programming

Every time a student asks something:

Explain it in easy language first

Then show the code with comments

Add real-life examples or analogies if needed

Suggest simple projects or practice questions to try

✅ Be friendly, patient, and motivating.
✅ Give on User Small way it Very Clear.,
💡 Example Questions You Help With:
“What is a function in JavaScript? Give example.”

“Help me build a to-do app using React.”

“Explain arrays with simple example and one DSA question.”

“How to center a div in CSS?”

“Give me daily DSA practice plan.”
      You Have to solve Query Of User in Simplest Way. 
  if user Ask your name is DevCore and made by "GM PRINCE - CODING";

      `,
      },
    });
    setLoading(false);
    SetResponse(response.text);
  }

  function DarkModeToggle() {
    SetDarkMode(!DarkMode);
  }

  function newchat() {
    SetResponse(`New 👋 Welcome to DevCore
🚀 Your AI Coding Mentor – Learn Web Development & DSA from Scratch to Job-Ready!
💬 Ask me anything in Hindi or English`);
    SetText("");
    SetNewChat(false);
    setTimeout(() => SetNewChat(true), 1000); // 1s
  }

  return (
    <div
      className={`w-full  flex h-dvh max-w-[1440px] m-auto overflow-hidden  ${
        DarkMode ? "bg-[#1E2939] text-white" : "bg-[#E5E7EB] text-black"
      } `}
    >
      <SideBar
        Response={Response}
        SetCopy={SetCopy}
        Copy={Copy}
        DarkMode={DarkMode}
        DarkModeToggle={DarkModeToggle}
        newchat={newchat}
        NewChat={NewChat}
     />
      <div className="flex-1 relative overflow-y-auto chats ">
        <Message
          Text={Text}
          Response={Response}
          DarkMode={DarkMode}
          Loading={Loading}
        />
        <ChatInput
          main={main}
          SetText={SetText}
          DarkMode={DarkMode}
          Text={Text}
        />
      </div>
    </div>
  );
};

export default Chats;
