import { SearchHistory } from "@/types";
import { useState, useEffect } from "react";

export function useSearchHistory() {
  const [history, setHistory] = useState<SearchHistory[]>([]);

  useEffect(() => {
    // Load history from localStorage on mount
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const addToHistory = (text: string) => {
    const newHistory = [
      { id: crypto.randomUUID(), text, timestamp: Date.now() },
      ...history.filter((item) => item.text !== text).slice(0, 9), // Keep last 10 unique items
    ];
    setHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
  };

  const removeFromHistory = (id: string) => {
    const newHistory = history.filter((item) => item.id !== id);
    setHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("searchHistory");
  };

  return { history, addToHistory, removeFromHistory, clearHistory };
}
