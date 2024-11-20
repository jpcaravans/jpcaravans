"use client";
import React, { useState} from 'react';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSONdata,
       };

       const response = await fetch(endpoint, options);
       const resData = await response.json();
      

       if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
       };
  return (
    <section className='grid md:grid-cols-2 mb-4 mt-6 md:my-12 py-4 gap-4 relative' id="kontakt">
      <div className="hidden xl:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute "></div>
      <div className='z-10 xl:pl-2'><h5 className='text-2xl font-bold text-white mb-2 mt-12 '>Kontakt</h5>
      <h4 className='text-xl font-bold text-white mb-2 mt-4 '>Telefonnummer & WhatsApp: <br/>0160 - 92433546</h4>
      <h4 className='text-xl font-bold text-white mb-2 mt-4 '>Mail: jpcaravans@web.de</h4>
      <p className='text-[#ADB7BE] text-lg mb-4 max-w-md'>
      Bereit, dein nächstes Camper-Projekt zum Erfolg zu führen? {" "} Wir sind dein zuverlässiger Partner für Nachrüstungen.</p>
      <p className='text-[#ADB7BE] text-lg mb-2 max-w-md'>
      Kontaktiere uns noch heute, um mehr darüber zu erfahren, wie wir dir helfen können, dein nächstes Camper-Projekt erfolgreich umzusetzen. Wir freuen uns drauf, mit dir zusammenzuarbeiten und deine Ideen in die Realität umzusetzen.</p>
      
      
      </div>
    </section>
  )
}

export default EmailSection
