
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-amiri text-center mb-8 text-coptic-burgundy">تواصل معنا</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-4">أرسل لنا رسالة</h3>
                    {isSubmitted ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">شكراً لك!</strong>
                            <span className="block sm:inline"> تم استلام رسالتك بنجاح.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coptic-gold focus:border-coptic-gold"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coptic-gold focus:border-coptic-gold"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">رسالتك</label>
                                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coptic-gold focus:border-coptic-gold"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-coptic-blue hover:bg-coptic-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coptic-gold">
                                    إرسال
                                </button>
                            </div>
                        </form>
                    )}
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-coptic-blue mb-2">تابعنا على الشبكات الاجتماعية</h3>
                        <div className="flex space-x-reverse space-x-4">
                           {/* Social media icons here */}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-coptic-blue mb-2">موقعنا</h3>
                         <p className="text-gray-700 mb-4">المركز الثقافي القبطي، القاهرة، مصر.</p>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                           <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.867959954934!2d31.2404053151152!3d30.0406540818836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b90a67a3d1%3A0x5a869382b687332e!2sCoptic%20Orthodox%20Cultural%20Center!5e0!3m2!1sen!2sus!4v1618956745123!5m2!1sen!2sus"
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen={true} 
                                loading="lazy"
                                title="Map Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
