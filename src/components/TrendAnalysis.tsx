import React from 'react';
import { ArrowUpRight, ArrowDownRight, ArrowRight } from 'lucide-react';

interface TrendAnalysisProps {
  keyword: string;
}

function TrendAnalysis({ keyword }: TrendAnalysisProps) {
  // Sample analysis - in a real app, this would be calculated from actual data
  const trendPercentage = 28;
  const sentiment = 'positive';

  const getTrendIcon = () => {
    if (trendPercentage > 0) return <ArrowUpRight className="w-5 h-5 text-green-500" />;
    if (trendPercentage < 0) return <ArrowDownRight className="w-5 h-5 text-red-500" />;
    return <ArrowRight className="w-5 h-5 text-yellow-500" />;
  };

  const getTrendColor = () => {
    if (trendPercentage > 0) return 'text-green-600';
    if (trendPercentage < 0) return 'text-red-600';
    return 'text-yellow-600';
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          {getTrendIcon()}
          <span className={`text-2xl font-bold ${getTrendColor()}`}>
            {trendPercentage > 0 ? '+' : ''}{trendPercentage}%
          </span>
        </div>
        <p className="text-gray-600">5-year growth trend</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Key Insights</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 rounded-full bg-indigo-600"></span>
            <p className="text-gray-600">
              Consistent {sentiment} growth pattern over the past 5 years
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 rounded-full bg-indigo-600"></span>
            <p className="text-gray-600">
              Peak interest occurs during Q4 each year
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 rounded-full bg-indigo-600"></span>
            <p className="text-gray-600">
              Seasonal fluctuations suggest optimal timing for campaigns
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TrendAnalysis;