import React, { useState } from 'react';
import { Phone } from 'lucide-react'; // Import necessary icons

// Component for the "Call to Action" (CTA) section with Web3Forms integration
const CallToActionSection = () => {
    // State for phone number input
    const [phoneNumber, setPhoneNumber] = useState('');
    // State for submission status: 'idle', 'submitting', 'success', 'error'
    const [status, setStatus] = useState('idle');
    // State for feedback message
    const [message, setMessage] = useState('');

    // Use the environment variable for the Web3Forms Access Key
    // Make sure REACT_APP_WEB3FORMS_ACCESS_KEY is set in your .env file or Cloudflare settings
    const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

    // Handle form submission using Web3Forms
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        setMessage(''); // Clear previous messages
        setStatus('submitting');

        // Basic validation
        if (!phoneNumber.trim()) {
            setStatus('error');
            setMessage('Please enter your phone number.');
            return;
        }
        // Check if the access key is still the placeholder or undefined/empty
        if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
            setStatus('error');
            setMessage('Web3Forms access key is not configured. Please set REACT_APP_WEB3FORMS_ACCESS_KEY.');
            console.error('Web3Forms access key is not configured.'); // Log for developer
            return;
        }


        // Prepare form data for Web3Forms
        const formData = new FormData();
        formData.append("phone_number", phoneNumber);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        formData.append("subject", "New Callback Request from FieldFlow Landing"); // Optional subject
        formData.append("from_name", "FieldFlow Landing Page"); // Optional sender name

        // Convert FormData to JSON object for fetch API
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        const json = JSON.stringify(object);

        try {
            // Send data to Web3Forms endpoint
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setMessage('Thank you! We will contact you shortly.');
                setPhoneNumber(''); // Clear the input field on success
            } else {
                console.error("Error from Web3Forms:", result);
                setStatus('error');
                setMessage(result.message || 'Submission failed. Please try again.');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-green-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to enhance your product transparency?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Leave your phone number, and we'll register you.
                </p>

                {/* Phone Number Submission Form */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                        {/* Phone Input Field */}
                        <div className="relative flex-grow w-full sm:w-auto">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="tel" // Use type="tel" for phone numbers
                                name="phone_number" // Add name attribute for form data
                                placeholder="Your Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                disabled={status === 'submitting'} // Disable input while submitting
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm disabled:opacity-50" // Adjusted padding and focus ring
                                required // Basic HTML5 validation
                            />
                        </div>
                        {/* Submit Button - UPDATED STYLING */}
                        <button
                            type="submit"
                            disabled={status === 'submitting' || !WEB3FORMS_ACCESS_KEY} // Also disable if key is not set
                            className="bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-green-800 transition duration-300 text-lg shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto border border-white hover:border-gray-200" // Changed background, added border, hover effect
                        >
                            {status === 'submitting' ? (
                                <>
                                    {/* Loading Spinner */}
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Register
                                </>
                            )}
                        </button>
                    </div>

                    {/* Status Messages */}
                    {message && (
                        <p className={`mt-4 text-sm font-medium ${status === 'error' ? 'text-red-300 bg-red-800 bg-opacity-50 px-4 py-2 rounded-md' : 'text-green-200 bg-green-800 bg-opacity-50 px-4 py-2 rounded-md'}`}>
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default CallToActionSection; // Export the component
