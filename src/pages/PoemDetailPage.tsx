import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { poems } from '../data/poems';
import { useFontSize } from '../hooks/useFontSize';
import { useNaturalSound } from '../hooks/useSound';
import { ArrowLeft, Type, Volume2, Wind, Cloud, Music, Waves } from 'lucide-react';

const PoemDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();
  const { activeSound, toggleSound } = useNaturalSound();
  
  const poem = poems.find(p => p.id === Number(id));
  
  useEffect(() => {
    return () => {
      if (activeSound !== 'none') {
        toggleSound('none');
      }
    };
  }, []);
  
  if (!poem) {
    return (
      <div className="page-container">
        <div className="text-center py-12">
          <h2 className="text-2xl text-primary-800 mb-4">لم يتم العثور على القصيدة</h2>
          <button
            onClick={() => navigate('/poems')}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            العودة إلى القصائد
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page-container">
      <button
        onClick={() => navigate('/poems')}
        className="mb-6 flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors"
      >
        <ArrowLeft size={18} />
        العودة إلى القصائد
      </button>
      
      <div className="card">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
          <h1 className="text-2xl sm:text-3xl font-aref font-bold text-primary-800">{poem.title}</h1>
          <span className="text-primary-500">{poem.date}</span>
        </div>
        
        <div className="controls-container mb-6">
          {/* Font size controls */}
          <div className="font-controls">
            <Type size={18} className="text-primary-700" />
            <button
              onClick={decreaseFontSize}
              className="font-control-btn"
              title="تصغير الخط"
            >
              <span className="text-lg">-</span>
            </button>
            <button
              onClick={increaseFontSize}
              className="font-control-btn"
              title="تكبير الخط"
            >
              <span className="text-lg">+</span>
            </button>
          </div>
          
          {/* Sound controls */}
          <div className="sound-controls">
            <Volume2 size={18} className="text-secondary-700 shrink-0" />
            <button
              onClick={() => toggleSound('rain')}
              className={`sound-btn ${activeSound === 'rain' ? 'active' : ''}`}
              title="صوت المطر"
            >
              <Cloud size={16} />
              <span>مطر</span>
            </button>
            <button
              onClick={() => toggleSound('wind')}
              className={`sound-btn ${activeSound === 'wind' ? 'active' : ''}`}
              title="صوت الرياح"
            >
              <Wind size={16} />
              <span>رياح</span>
            </button>
            <button
              onClick={() => toggleSound('birds')}
              className={`sound-btn ${activeSound === 'birds' ? 'active' : ''}`}
              title="صوت العصافير"
            >
              <Music size={16} />
              <span>عصافير</span>
            </button>
            <button
              onClick={() => toggleSound('waves')}
              className={`sound-btn ${activeSound === 'waves' ? 'active' : ''}`}
              title="صوت الأمواج"
            >
              <Waves size={16} />
              <span>أمواج</span>
            </button>
          </div>
        </div>
        
        <div className={`poem-container ${fontSize} poem-text whitespace-pre-line leading-relaxed`}>
          {poem.content}
        </div>
      </div>
    </div>
  );
};

export default PoemDetailPage;