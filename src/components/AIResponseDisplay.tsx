import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const AIResponseDisplay = ({ response }) => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
        <CardHeader className="pb-4 bg-slate-700 text-center rounded-t-lg">
          <CardTitle className="text-xl text-white flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-slate-700">
          <div className="prose prose-sm max-w-none bg-slate-700 text-white rounded-b-lg">
            <div
              className="text-gray-200 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: response }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIResponseDisplay;
