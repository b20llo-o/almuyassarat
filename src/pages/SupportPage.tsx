import { Heart, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const SupportPage = () => {
  const [copied, setCopied] = useState(false);
  const iban = "TR98 0001 0090 1057 6662 6050 01";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="page-container">
      <h1 className="section-title">الدعم</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="card mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <Heart size={40} className="text-accent-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-aref font-bold text-primary-800 mb-4 text-center">
            ادعم ديوان الميسرات
          </h2>
          
          <p className="text-primary-700 text-center mb-6">
            إن دعمكم لنا يساهم في استمرار هذا المشروع الأدبي والثقافي، ويساعدنا على تقديم المزيد من المحتوى الشعري الراقي. كل مساهمة، مهما كانت صغيرة، لها أثر كبير في دعم الشعر العربي الأصيل.
          </p>
          
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-aref font-bold text-primary-800 mb-2 text-center">
              رقم الحساب البنكي (IBAN)
            </h3>
            
            <div className="flex items-center justify-center gap-2 p-3 bg-white rounded-md shadow-sm">
              <span className="text-primary-900 font-mono text-lg ltr" dir="ltr">{iban}</span>
              <button 
                onClick={copyToClipboard}
                className="p-2 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors"
                title={copied ? "تم النسخ!" : "نسخ رقم الحساب"}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>
          
          <p className="text-primary-700 text-center">
            نشكركم على دعمكم المستمر وثقتكم الغالية، ونعدكم بالاستمرار في تقديم محتوى شعري وأدبي يليق بذائقتكم الأدبية الراقية.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;