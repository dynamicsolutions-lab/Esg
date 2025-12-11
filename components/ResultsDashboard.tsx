import React from 'react';
import { ExamState, Question } from '../types';
import { QUESTIONS } from '../constants';
import { calculateScore, getRecommendation } from '../services/scoringService';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { CheckCircle, XCircle, RefreshCcw, Award, BookOpen } from 'lucide-react';

interface ResultsDashboardProps {
  examState: ExamState;
  onRestart: () => void;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ examState, onRestart }) => {
  const { correctCount, totalQuestions, percentage, categoryScores } = calculateScore(examState.answers, QUESTIONS);
  
  const chartData = Object.entries(categoryScores).map(([category, scores]) => ({
    name: category,
    score: Math.round((scores.correct / scores.total) * 100),
    total: scores.total
  }));

  const pieData = [
    { name: 'Correct', value: correctCount, color: '#10b981' },
    { name: 'Incorrect', value: totalQuestions - correctCount, color: '#ef4444' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Performance Report</h1>
            <p className="text-slate-500">ESG Pro Analyst Assessment Results</p>
          </div>
          <button 
            onClick={onRestart}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 font-medium"
          >
            <RefreshCcw size={18} />
            Retake Assessment
          </button>
        </div>

        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Main Score Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Total Score</span>
            <div className="flex items-end gap-2">
               <span className="text-6xl font-bold text-slate-900">{percentage}%</span>
               <span className="text-xl text-slate-400 mb-2">/ 100</span>
            </div>
             <p className="mt-4 text-center text-sm text-slate-600 px-4 bg-slate-50 py-2 rounded-lg">
               {getRecommendation(percentage)}
             </p>
          </div>

          {/* Category Performance Chart */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm col-span-1 md:col-span-2">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Domain Proficiency</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 40 }}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" dataKey="name" width={120} tick={{fontSize: 12, fill: '#64748b'}} />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={24}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.score >= 70 ? '#10b981' : entry.score >= 40 ? '#f59e0b' : '#ef4444'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Detailed Answer Key */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <BookOpen className="text-slate-400" size={24}/>
            Detailed Analysis
          </h3>

          <div className="grid gap-4">
            {QUESTIONS.map((q) => {
              const userAnswerId = examState.answers[q.id];
              const isCorrect = userAnswerId === q.correctOptionId;
              const isSkipped = !userAnswerId;

              return (
                <div key={q.id} className={`bg-white rounded-lg border-l-4 p-6 shadow-sm transition-all
                  ${isCorrect ? 'border-l-emerald-500' : 'border-l-red-500'}
                `}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase">{q.category}</span>
                        {isCorrect ? (
                          <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                            <CheckCircle size={14} /> Correct
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-bold text-red-600">
                            <XCircle size={14} /> {isSkipped ? 'Skipped' : 'Incorrect'}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-medium text-slate-900">{q.text}</h4>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4 bg-slate-50 p-4 rounded-md border border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase">Your Answer</span>
                      <p className={`mt-1 font-medium ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                        {isSkipped ? 'No Answer Selected' : q.options.find(o => o.id === userAnswerId)?.text}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase">Correct Answer</span>
                      <p className="mt-1 font-medium text-slate-700">
                        {q.options.find(o => o.id === q.correctOptionId)?.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <span className="font-bold text-slate-700 mr-2">Analyst Note:</span>
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;