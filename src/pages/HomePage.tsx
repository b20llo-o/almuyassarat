import { Link } from 'react-router-dom';
import { BookOpen, Feather, User } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-aref font-bold text-primary-900 mb-4 text-center">
          ديوان الميسرات
        </h1>
        <p className="text-xl md:text-2xl font-medium text-primary-700 mb-8 text-center">
          للشاعر المصري ميسرة سالم
        </p>

        <div className="w-24 h-1 bg-primary-500 rounded mb-8"></div>

        <p className="text-lg text-center max-w-2xl mb-12 leading-relaxed">
          مجموعة من القصائد والخواطر الشعرية التي تلامس القلب وتأسر الوجدان، تعبر عن تجارب إنسانية عميقة ورؤى شاعرية مميزة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          <Link 
            to="/poems" 
            className="card bg-white hover:bg-primary-50 hover:shadow-lg transition-all duration-300 flex flex-col items-center p-8"
          >
            <BookOpen size={48} className="text-primary-600 mb-4" />
            <h2 className="text-xl font-aref font-bold text-primary-800 mb-2">القصائد</h2>
            <p className="text-center text-primary-600">استمتع بمجموعة متنوعة من القصائد الشعرية الجميلة</p>
          </Link>

          <Link 
            to="/thoughts" 
            className="card bg-white hover:bg-primary-50 hover:shadow-lg transition-all duration-300 flex flex-col items-center p-8"
          >
            <Feather size={48} className="text-primary-600 mb-4" />
            <h2 className="text-xl font-aref font-bold text-primary-800 mb-2">خواطر الشاعر</h2>
            <p className="text-center text-primary-600">اقرأ تأملات الشاعر وخواطره الأدبية المميزة</p>
          </Link>

          <Link 
            to="/about" 
            className="card bg-white hover:bg-primary-50 hover:shadow-lg transition-all duration-300 flex flex-col items-center p-8"
          >
            <User size={48} className="text-primary-600 mb-4" />
            <h2 className="text-xl font-aref font-bold text-primary-800 mb-2">تعرف علينا</h2>
            <p className="text-center text-primary-600">اكتشف المزيد عن الشاعر ميسرة سالم ومشواره الأدبي</p>
          </Link>
        </div>

        <div className="bg-primary-50 p-8 rounded-xl shadow-md w-full max-w-3xl">
          <h2 className="text-2xl font-aref font-bold text-primary-800 mb-4 text-center">
            مقتطف شعري
          </h2>
          <blockquote className="poem-text text-lg italic text-primary-700 text-center"><br/>
            لَا تُوقِظِ النَّبْضَ فِي صَدْرِ الزَّمَانِ فَإنْ<br/>
            بَاتَ الزَّمَانُ عَلَى أطْلَالِهِ جَمَدا<br/><br/>

            لَا تُغْرِكَ النَارُ فِي العَيْنَينِ إنَّ لَهَا<br/>
            فِي اللَّيلِ حِيلَةَ مَجْنُونٍ إذَا ارْتَعَدَا<br/><br/>

            قَدْ قِيلَ: مَنْ عَشِقَ الْأَفْلَاكَ فِي أَمَلٍ<br/>
            يَبْقَى، وَإِنْ خَانَهُ التَّقْدِيرُ وَاتَّبَدَا<br/><br/>

            فَالْعَقْلُ إنْ لَمْ يُقِمْ فِي الْوَهْمِ مَمْلَكَةً<br/> 
            أمْسَى يُقَلِّبُ بَينَ الصَّمْتِ مَا وَجَدا
          </blockquote>
          <p className="text-left mt-4 text-primary-600">— ميسرة سالم</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;