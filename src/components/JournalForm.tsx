
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Sparkles, Moon, Target, CheckSquare } from 'lucide-react';
import AIResponseDisplay from './AIResponseDisplay';
import DatePicker from './DatePicker';
import { generateAIInsights } from '../utils/geminiApi';
import { saveJournalEntry, getJournalEntry } from '../utils/localStorage';
import { useToast } from '@/hooks/use-toast';

const JournalForm = () => {
  const [formData, setFormData] = useState({
    morningJournal: '',
    dream: '',
    intention: '',
    priorities: ''
  });
  const [aiResponse, setAiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.morningJournal.trim()) {
      toast({
        title: "Please fill in your morning journal",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await generateAIInsights(formData);
      setAiResponse(response);
      
      // Save entry to localStorage
      saveJournalEntry(selectedDate, {
        ...formData,
        aiResponse: response,
        timestamp: new Date().toISOString()
      });
      
      toast({
        title: "Insights generated successfully!",
        description: "Your reflection has been saved."
      });
    } catch (error) {
      toast({
        title: "Error generating insights",
        description: "Please check your API key or try again later.",
        variant: "destructive"
      });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const entry = getJournalEntry(date);
    if (entry) {
      setFormData({
        morningJournal: entry.morningJournal || '',
        dream: entry.dream || '',
        intention: entry.intention || '',
        priorities: entry.priorities || ''
      });
      setAiResponse(entry.aiResponse || null);
    } else {
      setFormData({
        morningJournal: '',
        dream: '',
        intention: '',
        priorities: ''
      });
      setAiResponse(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 ">
      <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 ">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl text-center text-gray-800 flex items-center justify-center gap-2">
            <Sparkles className="text-purple-500" />
            Morning Reflection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="morningJournal" className="text-lg font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Morning Journal *
              </Label>
              <Textarea
                id="morningJournal"
                placeholder="How are you feeling this morning? What's on your mind? Let your thoughts flow..."
                value={formData.morningJournal}
                onChange={(e) => handleInputChange('morningJournal', e.target.value)}
                className="min-h-32 text-base resize-none border-gray-200 focus:border-purple-400 focus:ring-purple-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dream" className="text-lg font-medium text-gray-700 flex items-center gap-2">
                <Moon className="w-5 h-5 text-indigo-500" />
                Dream
              </Label>
              <Textarea
                id="dream"
                placeholder="Describe any dreams you remember from last night..."
                value={formData.dream}
                onChange={(e) => handleInputChange('dream', e.target.value)}
                className="min-h-24 text-base resize-none border-gray-200 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="intention" className="text-lg font-medium text-gray-700 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                Intention of the Day
              </Label>
              <Input
                id="intention"
                placeholder="What's your main intention or focus for today?"
                value={formData.intention}
                onChange={(e) => handleInputChange('intention', e.target.value)}
                className="text-base border-gray-200 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priorities" className="text-lg font-medium text-gray-700 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-orange-500" />
                Top 3 Priorities
              </Label>
              <Input
                id="priorities"
                placeholder="List your top 3 priorities, separated by commas"
                value={formData.priorities}
                onChange={(e) => handleInputChange('priorities', e.target.value)}
                className="text-base border-gray-200 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg font-medium transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating Insights...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  
                  Generate AI Insights
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {aiResponse && <AIResponseDisplay response={aiResponse} />}
    </div>
  );
};

export default JournalForm;
