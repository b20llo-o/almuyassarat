import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    
    // For demo purposes, just show success message
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form submitted state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="page-container">
      <h1 className="section-title">اتصل بنا</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="card flex flex-col items-center p-6">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <Mail size={32} className="text-primary-600" />
          </div>
          <h3 className="text-xl font-aref font-bold text-primary-800 mb-2">البريد الإلكتروني</h3>
          <a 
            href="mailto:meysarasalem@gmail.com" 
            className="text-primary-600 hover:text-primary-800 transition-colors"
          >
            meysarasalem@gmail.com
          </a>
        </div>
        
        <div className="card flex flex-col items-center p-6">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <Phone size={32} className="text-primary-600" />
          </div>
          <h3 className="text-xl font-aref font-bold text-primary-800 mb-2">الهاتف</h3>
          <p className="text-primary-600">متاح قريبًا</p>
        </div>
        
        <div className="card flex flex-col items-center p-6">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <MapPin size={32} className="text-primary-600" />
          </div>
          <h3 className="text-xl font-aref font-bold text-primary-800 mb-2">العنوان</h3>
          <p className="text-primary-600 text-center">تركيا-(حاليا)</p>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-2xl font-aref font-bold text-primary-800 mb-6">أرسل لنا رسالة</h2>
        
        {formSubmitted ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
            تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت ممكن.
          </div>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-primary-700 mb-2">الاسم</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-primary-700 mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block text-primary-700 mb-2">الموضوع</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-primary-700 mb-2">الرسالة</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary flex items-center gap-2"
            >
              <Send size={18} />
              إرسال الرسالة
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;