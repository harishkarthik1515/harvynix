import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { ArrowUp, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validate = (field: keyof FormData, value: string): string | undefined => {
    if (!value.trim()) {
      return 'This field is required';
    }
    
    if (field === 'email' && !validateEmail(value)) {
      return 'Please enter a valid email address';
    }
    
    if (field === 'message' && value.length < 20) {
      return 'Message must be at least 20 characters';
    }
    
    return undefined;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validate(name as keyof FormData, value)
      }));
    }
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    setErrors(prev => ({
      ...prev,
      [name]: validate(name as keyof FormData, value)
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    let hasErrors = false;
    
    (Object.keys(formData) as Array<keyof FormData>).forEach(field => {
      const error = validate(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        hasErrors = true;
      }
    });
    
    setErrors(newErrors);
    
    if (!hasErrors) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTouched({});
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className={`relative py-20 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-[#070720] to-black' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    } overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 left-0 w-full h-64 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-blue-900/5' 
            : 'bg-gradient-to-b from-blue-100/50'
        } to-transparent`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full ${
          isDarkMode ? 'bg-blue-900/5' : 'bg-blue-100/50'
        } filter blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`inline-block text-3xl md:text-4xl font-bold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } mb-3 font-[Poppins] relative`}>
            Get In <span className="text-blue-400">Touch</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></span>
          </h2>
          <p className={`max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } text-lg`}>
            Have a project in mind? We'd love to hear from you. Reach out to us and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className={`${
              isDarkMode 
                ? 'bg-gradient-to-br from-[#121330] to-[#0a0a1a]' 
                : 'bg-white'
            } rounded-xl shadow-lg p-8`}>
              <h3 className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              } mb-6 font-[Poppins]`}>Send a Message</h3>
              
              {submitSuccess && (
                <div className="mb-6 bg-blue-900/20 border border-blue-500/30 text-blue-200 px-4 py-3 rounded">
                  <p className="flex items-center">
                    <span className="inline-block mr-2">✓</span>
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className={`block ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } mb-2 text-sm`}>Your Name</label>
                    <div className={`relative ${errors.name && touched.name ? 'animate-shake' : ''}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full ${
                          isDarkMode ? 'bg-[#0c0c20] text-white' : 'bg-gray-50 text-gray-900'
                        } border ${
                          errors.name && touched.name 
                            ? 'border-red-500' 
                            : isDarkMode ? 'border-gray-700' : 'border-gray-300'
                        } px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && touched.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } mb-2 text-sm`}>Email Address</label>
                    <div className={`relative ${errors.email && touched.email ? 'animate-shake' : ''}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full ${
                          isDarkMode ? 'bg-[#0c0c20] text-white' : 'bg-gray-50 text-gray-900'
                        } border ${
                          errors.email && touched.email 
                            ? 'border-red-500' 
                            : isDarkMode ? 'border-gray-700' : 'border-gray-300'
                        } px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                        placeholder="your@email.com"
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className={`block ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  } mb-2 text-sm`}>Subject</label>
                  <div className={`relative ${errors.subject && touched.subject ? 'animate-shake' : ''}`}>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full ${
                        isDarkMode ? 'bg-[#0c0c20] text-white' : 'bg-gray-50 text-gray-900'
                      } border ${
                        errors.subject && touched.subject 
                          ? 'border-red-500' 
                          : isDarkMode ? 'border-gray-700' : 'border-gray-300'
                      } px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && touched.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className={`block ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  } mb-2 text-sm`}>Message</label>
                  <div className={`relative ${errors.message && touched.message ? 'animate-shake' : ''}`}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={`w-full ${
                        isDarkMode ? 'bg-[#0c0c20] text-white' : 'bg-gray-50 text-gray-900'
                      } border ${
                        errors.message && touched.message 
                          ? 'border-red-500' 
                          : isDarkMode ? 'border-gray-700' : 'border-gray-300'
                      } px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none`}
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && touched.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className={`${
              isDarkMode 
                ? 'bg-gradient-to-br from-[#121330] to-[#0a0a1a]' 
                : 'bg-white'
            } rounded-xl shadow-lg p-8 sticky top-20`}>
              <h3 className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              } mb-6 font-[Poppins]`}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full ${
                      isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                    } flex items-center justify-center`}>
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Email</h4>
                    <a href="mailto:info@harvynix.com" className={`${
                      isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    } transition-colors`}>info@harvynix.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full ${
                      isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                    } flex items-center justify-center`}>
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Phone</h4>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full ${
                      isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                    } flex items-center justify-center`}>
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Location</h4>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>123 Innovation Way<br />Tech District, CA 94103</p>
                  </div>
                </div>
                
                <div className={`pt-6 mt-6 border-t ${
                  isDarkMode ? 'border-gray-800' : 'border-gray-200'
                }`}>
                  <h4 className={`text-lg font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } mb-4`}>Connect With Us</h4>
                  <div className="mt-6 flex space-x-4">
              <a 
                href="#"
                className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-900/20 hover:bg-blue-800/30' : 'bg-blue-100 hover:bg-blue-200'} flex items-center justify-center transition-colors`}
              >
                <Twitter className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </a>
              <a 
                href="#"
                className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-900/20 hover:bg-blue-800/30' : 'bg-blue-100 hover:bg-blue-200'} flex items-center justify-center transition-colors`}
              >
                <Facebook className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </a>
              <a 
                href="#"
                className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-900/20 hover:bg-blue-800/30' : 'bg-blue-100 hover:bg-blue-200'} flex items-center justify-center transition-colors`}
              >
                <Linkedin className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </a>
              <a 
                href="#"
                className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-900/20 hover:bg-blue-800/30' : 'bg-blue-100 hover:bg-blue-200'} flex items-center justify-center transition-colors`}
              >
                <Instagram className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </a>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;