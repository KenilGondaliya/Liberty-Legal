import React from 'react'
import { Link } from 'react-router-dom';

function Success() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          {/* Success Message Container */}
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Appointment Submitted Successfully!</h2>
            <p className="text-gray-700 mb-6">
              Thank you for your request! Your consultation appointment has been successfully submitted. 
              Our team will contact you to vai Email shortly to confirm the details.
            </p>
            <div className="flex justify-center">
              <Link
                to="/" 
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      );
}

export default Success
