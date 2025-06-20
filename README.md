
# ConsciousDay Agent 🧘‍♂️📝

**ConsciousDay Agent** is a journaling-based AI assistant built with React.js and powered by Google's Gemini LLM API. It helps users reflect on their day, interpret their dreams, and generate mindful, personalized strategies for daily success.

---

## ✨ Features

- 🗒 Morning Journal, Dream Log, and Daily Intentions input
- 🤖 AI-generated:
  - Inner Reflection Summary
  - Dream Interpretation
  - Energy/Mindset Insight
  - Suggested Day Strategy
- 🗓 Optional: Date picker to view past entries (stored in localStorage)
- 🎨 Clean and minimal UI with responsive design

---

## 🛠 Tech Stack

| Component    | Technology                |
|--------------|---------------------------|
| **Frontend** | React.js (JavaScript)     |
| **AI Model** | Gemini Pro (Google LLM)   |
| **Database** | localStorage              |
| **API SDK**  | [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/consciousday-agent.git
cd consciousday-agent
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root:

```
REACT_APP_GEMINI_API_KEY=your_google_generative_ai_api_key
```

> ⚠️ Never expose API keys in frontend apps. Consider routing through a secure backend in production.

---

## 🧠 How It Works

1. User submits:

   * Morning Journal
   * Dream
   * Daily Intention
   * Top 3 Priorities

2. A prompt is dynamically built and sent to Gemini API.

3. Gemini returns structured insights:

   * Reflection
   * Dream meaning
   * Energy insights
   * Strategy for the day



## 📦 Folder Structure

```
```
└── 📁src
    └── 📁components
        └── AIResponseDisplay.tsx
        └── DatePicker.tsx
        └── Header.tsx
        └── JournalForm.tsx
    └── 📁lib
        └── utils.ts
    └── 📁pages
        └── Index.tsx
        └── NotFound.tsx
    └── 📁utils
        └── geminiApi.js
        └── localStorage.js
    └── App.css
    └── App.tsx
    └── index.css
    └── main.tsx
    └── vite-env.d.ts
```

```
## ✅ To-Do / Upcoming Features

* 🔒 Add authentication (Google/Firebase)
* 🧪 Add unit tests for prompt builder and components
* 🧠 Save and query past entries via Firestore
* 📱 Improve mobile UI/UX
```


