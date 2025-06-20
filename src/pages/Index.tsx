import React, { useEffect, useState } from 'react';
import JournalForm from '../components/JournalForm';
import History from '../components/History';
import { getStoredEntries } from "../utils/localStorage";
import Header from '../components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const entries = getStoredEntries();
    setData(entries);
  }, []);

  const refreshData = () => {
    const updated = getStoredEntries();
    setData(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <Header />
      <Tabs defaultValue="Ai Chat" onValueChange={(value) => {
        if (value === "history") refreshData();
      }} className="w-auto bg-gradient-to-l ">
        <main className="container mx-auto px-4 py-8">
          <TabsList>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="Ai Chat">AI Chat</TabsTrigger>
          </TabsList>
          <TabsContent value="Ai Chat">
            <JournalForm />
          </TabsContent>
          <TabsContent value="history">
            <History data={data} />
          </TabsContent>
        </main>
      </Tabs>
    </div>
  );
};

export default Index;
