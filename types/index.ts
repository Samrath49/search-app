export interface SearchHistory {
  id: string;
  text: string;
  timestamp: number;
}

export interface SearchSuggestion {
  id: string;
  text: string;
  description?: string;
  icon?: string;
}
