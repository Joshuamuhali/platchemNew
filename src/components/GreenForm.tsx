import React, { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';
import './GreenForm.css'; // We'll create this CSS file

interface FormData {
  fullname: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface GreenFormProps {
  onClose: () => void;
}

const GreenForm: React.FC<GreenFormProps> = ({ onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState({});

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Validate on change if the field has been touched
    if (touched[name]) {
      validateField(name, value);
    }
  };

  // Handle blur events
  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, value);
  };

  // Field validation
  const validateField = (name: string, value: string): boolean => {
    let error = '';
    
    if (!value && (name === 'fullname' || name === 'email' || name === 'service' || name === 'message')) {
      error = 'This field is required';
    } else if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email';
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    return !error;
  };

  // Validate current step
  const validateStep = (currentStep: number): boolean => {
    const stepFields = currentStep === 1 
      ? ['fullname', 'email'] 
      : ['service', 'message'];
    
    let isValid = true;
    
    stepFields.forEach(field => {
      const valid = validateField(field, formData[field as keyof FormData]);
      if (!valid) isValid = false;
    });
    
    return isValid;
  };

  // Handle next step
  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  // Handle previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Let's Work Together</h2>
        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`} data-step="1"></div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`} data-step="2"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Step 1 */}
        <div className={`form-step ${step === 1 ? 'active' : ''}`}>
          <div className={`input-group ${errors.fullname ? 'error' : ''}`}>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="fullname">Full Name</label>
            <div className="input-underline"></div>
            {errors.fullname && <div className="error-message">{errors.fullname}</div>}
          </div>
          
          <div className="input-group">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="company">Company Name</label>
            <div className="input-underline"></div>
          </div>
          
          <div className={`input-group ${errors.email ? 'error' : ''}`}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="email">Email</label>
            <div className="input-underline"></div>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="input-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="phone">Phone Number</label>
            <div className="input-underline"></div>
          </div>
          
          <div className="form-navigation">
            <button type="button" className="next-btn" onClick={nextStep}>
              Continue <span>→</span>
            </button>
          </div>
        </div>

        {/* Step 2 */}
        <div className={`form-step ${step === 2 ? 'active' : ''}`}>
          <div className={`input-group ${errors.service ? 'error' : ''}`}>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value=""></option>
              <option value="engineering">Engineering</option>
              <option value="engineering_supply">Engineering Supply</option>
              <option value="mining">Mining & Mining Supply</option>
            </select>
            <label htmlFor="service">Service Needed</label>
            <div className="input-underline"></div>
            {errors.service && <div className="error-message">{errors.service}</div>}
          </div>
          
          <div className={`input-group ${errors.message ? 'error' : ''}`}>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></textarea>
            <label htmlFor="message">Your Message</label>
            <div className="input-underline"></div>
            {errors.message && <div className="error-message">{errors.message}</div>}
          </div>
          
          <div className="form-navigation">
            <button type="button" className="prev-btn" onClick={prevStep}>
              <span>←</span> Back
            </button>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GreenForm;