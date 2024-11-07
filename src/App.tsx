import React, { useState } from 'react';
import { Search, TrendingUp, Calendar, BrainCircuit } from 'lucide-react';
import TrendChart from './components/TrendChart';
import RecommendationCard from './components/RecommendationCard';
import SearchBar from './components/SearchBar';
import TrendAnalysis from './components/TrendAnalysis';

function App() {
  const [keyword, setKeyword] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSearch = (searchTerm: string) => {
    setKeyword(searchTerm);
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => setIsAnalyzing(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Keyword Trends Analyzer</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Analyze keyword popularity trends, get seasonal insights, and optimize your marketing strategy
          </p>
        </div>

        {/* Search Section */}
        <SearchBar onSearch={handleSearch} isAnalyzing={isAnalyzing} />

        {keyword && !isAnalyzing && (
          <div className="mt-12 space-y-8">
            {/* Main Analysis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Trend Chart */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-xl font-semibold">Five-Year Trend</h2>
                </div>
                <TrendChart keyword={keyword} />
              </div>

              {/* Trend Analysis */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-xl font-semibold">Trend Analysis</h2>
                </div>
                <TrendAnalysis keyword={keyword} />
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-indigo-600" />
                <h2 className="text-xl font-semibold">Advertising Recommendations</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <RecommendationCard
                  month="January"
                  trend="↗️ High Interest"
                  recommendation="Increase ad spend by 20%"
                />
                <RecommendationCard
                  month="June"
                  trend="↗️ Peak Season"
                  recommendation="Launch major campaigns"
                />
                <RecommendationCard
                  month="November"
                  trend="➡️ Steady Growth"
                  recommendation="Maintain current strategy"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;