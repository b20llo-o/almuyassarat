import { BookOpen } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">تعرف علينا</h1>
      
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            {/* Using a placeholder image - replace with actual poet image if available */}
            <div className="w-64 h-64 bg-primary-100 rounded-full flex items-center justify-center">
              <BookOpen size={64} className="text-primary-400" />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-aref font-bold text-primary-800 mb-4">الشاعر ميسرة سالم</h2>
            
            <p className="text-primary-700 mb-4">
              ولد الشاعر ميسرة سالم في التاسع من فبراير عام 2005 في جمهورية مصر العربية. منذ نعومة أظفاره، أظهر شغفًا بالأدب والشعر، وبدأ بكتابة أولى قصائده في سن مبكرة.
            </p>
            
            <p className="text-primary-700 mb-4">
              تميز شعر ميسرة سالم بالعمق والرقي، وقدرته على التعبير عن المشاعر الإنسانية بأسلوب سلس وجميل. استطاع أن يجمع بين الأصالة والمعاصرة في قصائده، مما جعله يحظى بإعجاب الكثيرين من محبي الشعر والأدب.
            </p>
            
            <p className="text-primary-700">
              يهدف ديوان "الميسرات" إلى جمع أعمال الشاعر الشعرية والنثرية في مكان واحد، ليسهل على القراء والمهتمين الاطلاع عليها والاستمتاع بها.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-aref font-bold text-primary-800 mb-4">الرؤية</h3>
          <p className="text-primary-700">
            نسعى لأن نكون منصة أدبية رائدة، تقدم الشعر العربي الأصيل بأسلوب عصري، وتساهم في إثراء المشهد الثقافي العربي.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-aref font-bold text-primary-800 mb-4">الرسالة</h3>
          <p className="text-primary-700">
            نشر وإحياء روح الشعر العربي، وإيصاله إلى أكبر شريحة من القراء والمهتمين، مع الحفاظ على أصالته وعراقته.
          </p>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-aref font-bold text-primary-800 mb-4">القيم</h3>
          <p className="text-primary-700">
            الأصالة، الإبداع، الجودة، الاحترام، التجديد المستمر، والتواصل الفعال مع القراء والمهتمين.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;