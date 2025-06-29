function formatAnyText(input) {
  let output = input;

  // Bold text (**text**)
  output = output.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Fix broken bold markdown (****text**)
  output = output.replace(/\*\*\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Headings (### Heading or ## Heading)
  output = output.replace(/^###\s+(.*)/gm, '<h2>🔹 <strong>$1</strong></h2>');
  output = output.replace(/^##\s+(.*)/gm, '<h2>🔹 <strong>$1</strong></h2>');

  // Numbered list (1. Text)
  output = output.replace(/^(\d+)\.\s+(.*)/gm, '<li><strong>🔢 $1.</strong> $2</li>');

  // Highlight "Real-Life Example"
  output = output.replace(/\*?\*?Real[- ]?Life Example:?\*?\*?/gi, '<h3>🛒 <strong>Real-Life Example:</strong></h3>');

  // Emoji-enhanced bullet points
  output = output.replace(/^[-–]\s+(.*)/gm, (match, text) => {
    text = text.trim();
    if (/in simple words/i.test(text) || /why it.?s? important/i.test(text)) {
      return `<li><strong>✅</strong> ${text}</li>`;
    }
    if (/example:/i.test(text)) {
      return `<li><strong>📌</strong> ${text}</li>`;
    }
    if (/tip:|note:/i.test(text)) {
      return `<li><strong>💡</strong> ${text}</li>`;
    }
    return `<li><strong>📌</strong> ${text}</li>`;
  });

  // Asterisk bullets (* Text)
  output = output.replace(/^\*\s+(.*)/gm, '<li><strong>📌</strong> $1</li>');

  // Code block (```js ... ```)
  output = output.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${code.trim()}</code></pre>`;
  });

  // Paragraph for plain text lines (that are not already formatted)
  output = output.replace(/^(?!<h\d|<li|<pre|<ul)(.*\S.*)$/gm, '<p>$1</p>');

  // Split into lines and wrap each with animation div
  const lines = output.split('\n').filter(line => line.trim() !== '');
  const animatedOutput = lines.map((line, index) => {
    return `<div class="fade-line" style="animation-delay: ${index * 0.2}s">${line}</div>`;
  }).join('\n');
  
  // Final wrapped output
  return `<div class="lesson-output">\n${animatedOutput}\n</div>`;
}  




export default formatAnyText;
