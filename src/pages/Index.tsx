
import React from 'react';
import JournalForm from '../components/JournalForm';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <JournalForm />
      </main>
    </div>
  );
};

export default Index;
