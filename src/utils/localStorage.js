
const STORAGE_KEY = 'consciousday_entries';

export const saveJournalEntry = (date, entry) => {
  try {
    const dateKey = formatDateKey(date);
    const existingEntries = getStoredEntries();
    existingEntries[dateKey] = entry;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingEntries));
  } catch (error) {
    console.error('Error saving journal entry:', error);
  }
};

export const getJournalEntry = (date) => {
  try {
    const dateKey = formatDateKey(date);
    const existingEntries = getStoredEntries();
    return existingEntries[dateKey] || null;
  } catch (error) {
    console.error('Error getting journal entry:', error);
    return null;
  }
};

export const getAllJournalEntries = () => {
  try {
    return getStoredEntries();
  } catch (error) {
    console.error('Error getting all journal entries:', error);
    return {};
  }
};

export const getStoredEntries = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error parsing stored entries:', error);
    return {};
  }
};

const formatDateKey = (date) => {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
};
