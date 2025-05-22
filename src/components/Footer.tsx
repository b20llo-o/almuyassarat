import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-aref text-xl mb-4">ديوان الميسرات</h3>
            <p className="text-primary-100">
              ديوان شعري للشاعر المصري ميسرة سالم، يضم مجموعة من القصائد والخواطر الشعرية.
            </p>
          </div>
          
          <div>
            <h3 className="font-aref text-xl mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#/poems" className="text-primary-100 hover:text-white transition-colors">القصائد</a></li>
              <li><a href="#/thoughts" className="text-primary-100 hover:text-white transition-colors">خواطر الشاعر</a></li>
              <li><a href="#/about" className="text-primary-100 hover:text-white transition-colors">تعرف علينا</a></li>
              <li><a href="#/support" className="text-primary-100 hover:text-white transition-colors">الدعم</a></li>
              <li><a href="#/contact" className="text-primary-100 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-aref text-xl mb-4">تواصل معنا</h3>
            <p className="text-primary-100">البريد الإلكتروني: meysarasalem@gmail.com</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200">
            &copy; {currentYear} ديوان الميسرات | جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
