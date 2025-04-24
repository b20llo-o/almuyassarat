import { Link } from 'react-router-dom';
import { thoughts } from '../data/thoughts';
import { ChevronLeft } from 'lucide-react';

const ThoughtsPage = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">خواطر الشاعر</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {thoughts.map(thought => (
          <Link 
            to={`/thoughts/${thought.id}`} 
            key={thought.id}
            className="poem-card group"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-aref font-bold text-primary-800 group-hover:text-primary-600 transition-colors">
                {thought.title}
              </h2>
              <span className="text-sm text-primary-500">{thought.date}</span>
            </div>
            
            <p className="text-primary-600 mb-4 line-clamp-3">
              {thought.excerpt}
            </p>
            
            <div className="flex justify-end">
              <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                اقرأ المزيد 
                <ChevronLeft size={16} className="mr-1 transition-transform group-hover:transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ThoughtsPage;