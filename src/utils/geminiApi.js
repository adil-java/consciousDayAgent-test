
const API_KEY =`${import.meta.env.VITE_GEMINI_API}`; // gemini APi KEY
export const generateAIInsights = async (formData) => {
  const prompt = `
  Based on the following morning reflection, provide insights:
  
  Morning Journal: ${formData.morningJournal}
  Dream: ${formData.dream || 'No dream recorded'}
  Daily Intention: ${formData.intention || 'No intention set'}
  Top 3 Priorities: ${formData.priorities || 'No priorities listed'}
  
  Please provide thoughtful insights about their inner state, dream interpretation, energy analysis, and practical day strategy suggestions. Keep it warm and encouraging.
  use html tags for bolding the text and headings
  `;
  
  try {
    console.log(import.meta.env.VITE_GEMINI_API);
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate insights');
    }

    const text = data.candidates[0].content.parts[0].text;
    return text;
    
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};
