
const fs = require('fs');

const talks = [
  {
    title: "The Future of JavaScript Frameworks",
    speakers: ["Jane Doe"],
    category: ["JavaScript", "Web Development"],
    description: "A deep dive into the trends and future of popular JavaScript frameworks."
  },
  {
    title: "AI-Powered Development",
    speakers: ["John Smith"],
    category: ["AI", "Developer Tools"],
    description: "Discover how AI is changing the landscape of software development."
  },
  {
    title: "Advanced CSS Techniques",
    speakers: ["Emily White"],
    category: ["CSS", "Frontend"],
    description: "Learn about modern CSS features that can transform your web designs."
  },
  {
    title: "Building Scalable APIs with Node.js",
    speakers: ["David Green", "Sarah Brown"],
    category: ["Node.js", "Backend"],
    description: "A comprehensive guide to designing and building scalable RESTful APIs."
  },
  {
    title: "The Rise of WebAssembly",
    speakers: ["Michael Black"],
    category: ["WebAssembly", "Performance"],
    description: "An introduction to WebAssembly and its potential to revolutionize web performance."
  },
  {
    title: "Cybersecurity in the Modern Web",
    speakers: ["Chris Blue"],
    category: ["Security", "Web Development"],
    description: "A look at the most common security threats and how to protect your web applications."
  }
];

const schedule = [];
let currentTime = new Date();
currentTime.setHours(10, 0, 0, 0); 

const talkDuration = 60 * 60 * 1000; // 1 hour in milliseconds
const breakDuration = 10 * 60 * 1000; // 10 minutes in milliseconds
const lunchBreakDuration = 60 * 60 * 1000; // 1 hour in milliseconds

talks.forEach((talk, index) => {
  const startTime = new Date(currentTime);
  const endTime = new Date(startTime.getTime() + talkDuration);

  schedule.push({
    ...talk,
    startTime: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });

  currentTime = new Date(endTime.getTime() + breakDuration);

  if (index === 2) { // Lunch break after the 3rd talk
    currentTime = new Date(currentTime.getTime() + lunchBreakDuration);
  }
});

fs.writeFileSync('schedule.json', JSON.stringify(schedule, null, 2));
console.log('schedule.json generated successfully.');
