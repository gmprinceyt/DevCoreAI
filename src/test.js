function formatAnyText(input) {
  let output = input;

  // Fix broken bold markdown (****text**)
  output = output.replace(/\*\*\*\*(.*?)\*\*/g, '**$1**');

  // Convert H1-H3 style headings
  output = output.replace(/^[ \t]*###+[ \t]*(.*)/gm, '\n## 🔹 **$1**\n');
  output = output.replace(/^[ \t]*##[ \t]*(.*)/gm, '\n## 🔹 **$1**\n');

  // Convert numbered points (1. 2. etc)
  output = output.replace(/^(\d+)\.\s+(.*)/gm, (match, number, text) => `- 🔢 **${number}. ${text.trim()}**`);

  // Highlight real-life example section
  output = output.replace(/\*?\*?Real[- ]?Life Example:?\*?\*?/gi, '\n🛒 **Real-Life Example:**\n');

  // Emoji-enhance dash list points
  output = output.replace(/^[-–]\s+(.*)/gm, (match, text) => {
    if (/in simple words/i.test(text)) return `- ✅ **${text.trim()}**`;
    if (/why it.?s? important/i.test(text)) return `- ✅ **${text.trim()}**`;
    if (/example:/i.test(text)) return `- 📌 **${text.trim()}**`;
    if (/tip:|note:/i.test(text)) return `- 💡 **${text.trim()}**`;
    return `- 📌 **${text.trim()}**`;
  });

  // Asterisk bullets to emojis
  output = output.replace(/^\*\s+(.*)/gm, '- 📌 **$1**');

  // Add spacing before headings
  output = output.replace(/(## 🔹)/g, '\n$1');

  // Clean multiple blank lines
  output = output.replace(/\n{3,}/g, '\n\n');

  return output;
}

// Example usage
const rawInput = `Hello there! I'm Prince Shah, your friendly AI teacher, made by GM PRINCE - CODING. It's awesome you're diving into the world of DSA! Let's break it down in the simplest way possible. --- ## 🔹 **What is DSA? 🤔** DSA stands for **Data Structures and Algorithms**. Think of it as the super important "brain training" for anyone who wants to build great software or solve complex problems with computers. Let's look at each part: ## 🔹 **# 1. Data Structures (DS) - Organizing Your Stuff 📦** Imagine you have a messy room. If you just throw everything everywhere, it's hard to find anything, right? But if you organize your clothes in a wardrobe, books on a shelf, and shoes in a rack, it becomes super easy to find what you need. - ✅ ****In simple words:** Data Structures are just **different ways to organize and store data** in a computer's memory so that we can use it efficiently.** - ✅ ****Why it's important:** Choosing the right data structure helps you store, access, and modify data quickly. It's like picking the best type of container for your specific items.** **🛒 **Real-Life Example:**** - 📌 **Think of your **phone's contact list**. It's probably organized alphabetically, allowing you to quickly find a friend's number. This is similar to a "list" or "array" data structure.** * Or a **stack of plates** – you always take the top one and add new ones to the top. This is like a "stack" data structure (Last In, First Out). * A **family tree** is organized in a hierarchy, which is similar to a "tree" data structure. ## 🔹 **# 2. Algorithms (A) - Step-by-Step Instructions 📋** Now that your room is organized (thanks to data structures!), how do you make a delicious dinner? You follow a recipe, right? A recipe tells you exactly what to do, step-by-step, to achieve your goal (a tasty meal!). * **In simple words:** An Algorithm is a **set of step-by-step instructions or rules** to solve a specific problem or complete a task. * **Why it's important:** Algorithms tell the computer exactly *how* to perform operations on the data that's organized in your data structures. A good algorithm solves a problem correctly and as fast and efficiently as possible. **🛒 **Real-Life Example:**** * **A cooking recipe:** "First, chop the onions. Then, sauté them until golden. Add tomatoes..." – This is an algorithm for cooking! * **Giving directions:** "Go straight for two blocks, then turn left at the traffic light, and the building is on your right." – This is an algorithm for reaching a destination. * **Searching for a word in a dictionary:** You don't read every single word. You probably open it near the letter your word starts with, then narrow it down. That's an algorithm! --- ## 🔹 **Putting it Together: The Power Couple! 🤝** Data Structures and Algorithms always go hand-in-hand. * You **organize your data** using a suitable **Data Structure**. * Then, you **process that data** using an **Algorithm** to solve a problem or achieve a goal efficiently. **Example:** Let's say you have a list of 1000 names (Data Structure: an Array or List). * **Problem:** Find if the name "Alice" is in the list. * **Algorithm:** You could start from the first name and check each one until you find "Alice" or reach the end. This is a "Linear Search" algorithm. --- ## 🔹 **Why is DSA so important for you? 🚀** 1. **Build Efficient Software:** Knowing DSA helps you write code that runs faster and uses less memory, making your applications smooth and powerful. 2. **Problem-Solving Skills:** Learning DSA trains your brain to think logically and break down complex problems into smaller, manageable steps. This skill is invaluable in any field, not just coding! 3. **Cracking Interviews:** Almost every tech company (especially the big ones!) asks DSA questions in their interviews to test your problem-solving abilities. Mastering DSA significantly boosts your chances of landing your dream job. --- So, in short, DSA is all about **smartly organizing your data** and **efficiently solving problems with that data**. It's the core skill that separates good developers from great ones! --- Does that make sense? We can dive into a specific data structure like Arrays, or an algorithm like Searching, whenever you're ready! What would you like to explore next?

`;

console.log(formatAnyText(rawInput));