
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalHubProps {
    onBack: () => void;
    section?: 'terms' | 'privacy' | 'all';
}

export const LegalHub = ({ onBack, section = 'all' }: LegalHubProps) => {
  // Scroll Logic
  useEffect(() => {
    if (section === 'terms') {
        const element = document.getElementById('terms');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'privacy') {
        const element = document.getElementById('privacy');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo(0, 0);
    }
  }, [section]);

  return (
    <div className="min-h-screen bg-[#F9F9F7] pt-32 px-6 pb-24">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] mb-12 transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </button>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-[#111]">Legal Information</h1>
        
        <div className="space-y-20">
          
          {/* TERMS OF SERVICE - UPDATED WITH FULL TEXT */}
          <section id="terms" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-6 text-[#FF6B00] uppercase tracking-wider text-sm border-b border-gray-200 pb-2">Terms of Service</h2>
            <div className="prose prose-sm text-gray-600 leading-relaxed">
               <p className="mb-4 text-xs text-gray-400 uppercase tracking-widest font-bold">Last updated: 11/21/2025</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">1. Acceptance of Terms</h3>
               <p>By accessing or using the Rise Alarm website, the Rise Alarm mobile application, or the Rise Alarm Pod device (collectively, "Services"), you agree to these Terms of Service. If you do not agree, do not use the Services.</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">2. Description of the Service</h3>
               <p>Rise Alarm provides a mobile alarm application paired with a physical device designed to help users wake up on time by requiring physical interaction to dismiss alarms. We may update, improve, or modify the Services at any time.</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">3. Eligibility</h3>
               <p>You must be at least 13 years old (or the minimum required age in your country) to use Rise Alarm. By using the Services, you confirm that you meet this requirement.</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">4. User Accounts</h3>
               <p>To use certain features, you may need to create an account. You agree to:</p>
               <ul className="list-disc pl-5 mt-2 space-y-1">
                 <li>Provide accurate information</li>
                 <li>Keep your login credentials secure</li>
                 <li>Notify us if you believe your account has been compromised</li>
               </ul>
               <p className="mt-2">We reserve the right to suspend or delete accounts that violate these Terms.</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">5. Acceptable Use</h3>
               <p>You agree not to:</p>
               <ul className="list-disc pl-5 mt-2 space-y-1">
                 <li>Use Rise Alarm for unlawful or harmful activities</li>
                 <li>Attempt to reverse engineer, copy, or resell any part of the Services</li>
                 <li>Interfere with or disrupt the platform</li>
                 <li>Use the Services to harm or harass others</li>
               </ul>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">6. Hardware Use (Rise Alarm Pod)</h3>
               <p>If you purchase or receive a Rise Alarm Pod:</p>
               <ul className="list-disc pl-5 mt-2 space-y-1">
                 <li>You agree to use it safely and responsibly</li>
                 <li>Rise Alarm is not responsible for injuries or damage resulting from improper use</li>
                 <li>Unauthorized modification or misuse voids any warranties</li>
               </ul>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">7. Payments & Purchases</h3>
               <p>If you purchase a Rise Alarm Pod or any subscription:</p>
               <ul className="list-disc pl-5 mt-2 space-y-1">
                 <li>All prices are listed at checkout</li>
                 <li>You agree to provide accurate billing information</li>
                 <li>Refunds, if offered, follow our posted refund policy</li>
               </ul>
               <p className="mt-2">Subscriptions may automatically renew unless canceled in your account settings.</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">8. Intellectual Property</h3>
               <p>All content, branding, design, software, and related materials are owned by Rise Alarm and protected by law. You may not reuse, copy, or distribute our materials without permission.</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">9. Disclaimer of Warranties</h3>
               <p>Rise Alarm provides its Services "as is". We make no guarantees about:</p>
               <ul className="list-disc pl-5 mt-2 space-y-1">
                 <li>Wake-up results</li>
                 <li>Accuracy or availability of the app</li>
                 <li>Compatibility with all devices</li>
               </ul>
               <p className="mt-2">Use at your own risk.</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">10. Limitation of Liability</h3>
               <p>To the fullest extent permitted by law, Rise Alarm is not liable for:</p>
               <ul className="list-disc pl-5 mt-2 space-y-1">
                 <li>Losses caused by inability to wake up</li>
                 <li>Missed alarms or missed obligations</li>
                 <li>Damages from misuse of the device or app</li>
                 <li>Indirect, incidental, or consequential damages</li>
               </ul>
               <p className="mt-2">Your maximum remedy is the amount you paid us in the last 12 months.</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">11. Changes to These Terms</h3>
               <p>We may update these Terms at any time. Updates take effect when posted on our website. Continued use of the Services means you accept the new Terms.</p>

               <h3 className="text-black font-bold text-lg mt-6 mb-2">12. Contact</h3>
               <p>For questions or support: <a href="mailto:max@risealarm.app" className="text-[#FF6B00] hover:underline">max@risealarm.app</a></p>
            </div>
          </section>

          {/* PRIVACY POLICY */}
          <section id="privacy" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-6 text-[#FF6B00] uppercase tracking-wider text-sm border-b border-gray-200 pb-2">Privacy Policy</h2>
            <div className="prose prose-stone text-[#111] max-w-none leading-relaxed">
               
               <p className="text-sm text-gray-500 mb-6">Last updated: December 17, 2025</p>
               
               <p className="mb-4">
                 Rise is built with privacy by design. We do not collect, store, or sell personal data. This Privacy Policy explains how Rise handles information when you use the Rise mobile application and related website (collectively, the “Service”).
               </p>
               <p className="mb-8">
                 By using Rise, you agree to the practices described in this Privacy Policy.
               </p>

               <h3 className="text-xl font-bold mt-8 mb-4">Information We Collect</h3>
               <p className="font-bold mb-2">None.</p>
               <p className="mb-4">Rise does not collect personal information or user data.</p>
               <p className="mb-2">Specifically, Rise:</p>
               <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                 <li>Does not require accounts, sign-ups, or authentication</li>
                 <li>Does not collect names, email addresses, phone numbers, or identifiers</li>
                 <li>Does not track users across apps or websites</li>
                 <li>Does not store personal data on external servers</li>
               </ul>
               <p>All core app functionality operates entirely on your device.</p>

               <h3 className="text-xl font-bold mt-8 mb-4">Automatically Generated System Data</h3>
               <p className="mb-4">Rise may rely on limited, anonymous system-level information provided by your device’s operating system, such as crash reports or performance diagnostics. This information:</p>
               <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                 <li>Is generated by the operating system, not by Rise</li>
                 <li>Is not linked to you personally</li>
                 <li>Cannot be used to identify you</li>
                 <li>Is used solely to improve app stability and reliability</li>
               </ul>
               <p>Rise does not use third-party analytics or tracking SDKs.</p>

               <h3 className="text-xl font-bold mt-8 mb-4">Audio, Alarms, and User-Recorded Sounds</h3>
               <p className="mb-4">Rise allows users to optionally record their own alarm sounds.</p>
               <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                 <li>Any audio recordings are created only at the user’s request</li>
                 <li>Recordings are stored locally on the user’s device</li>
                 <li>Rise does not upload, transmit, access, or analyze these recordings</li>
                 <li>Recordings are never shared with Rise or third parties</li>
               </ul>
               <p>Rise does not record audio in the background or without user action.</p>

               <h3 className="text-xl font-bold mt-8 mb-4">NFC and Device Permissions</h3>
               <p className="mb-4">Rise uses device permissions (such as NFC and notifications) solely to enable core alarm functionality.</p>
               <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                 <li>NFC interactions occur entirely on-device</li>
                 <li>NFC data is not logged, stored, or transmitted</li>
                 <li>Rise does not access personal content beyond what is required for core features</li>
               </ul>

               <h3 className="text-xl font-bold mt-8 mb-4">Data Sharing and Disclosure</h3>
               <p className="mb-4">Because Rise does not collect personal data, we do not sell, share, rent, or disclose personal information to third parties.</p>
               <p>Information may be disclosed only if required by law or to comply with legal obligations.</p>

               <h3 className="text-xl font-bold mt-8 mb-4">Data Security</h3>
               <p className="mb-4">Rise does not maintain user accounts or store personal data on external servers. Any app-related data, including optional user-recorded alarm sounds, remains on your device and is protected by your device’s operating system security features.</p>
               <p>While no system can be guaranteed 100% secure, Rise minimizes risk by avoiding data collection altogether.</p>

               <h3 className="text-xl font-bold mt-8 mb-4">Third-Party Services</h3>
               <p>Rise does not integrate third-party services that collect personal data, perform behavioral tracking, or serve advertising.</p>

               <h3 className="text-xl font-bold mt-8 mb-4">Your Choices and Control</h3>
               <p className="mb-2">Because Rise does not collect personal data:</p>
               <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                 <li>There is no personal data to access, export, or correct</li>
                 <li>You can delete all app data at any time by deleting the app</li>
                 <li>You control all recorded alarm sounds stored on your device</li>
               </ul>

               <h3 className="text-xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h3>
               <p>We may update this Privacy Policy if Rise’s functionality changes. Any updates will be posted on this page with a revised “Last updated” date.</p>

               <h3 className="text-xl font-bold mt-8 mb-4">Contact Us</h3>
               <p className="mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
               <p className="font-bold">Email: <a href="mailto:max@risealarm.app" className="text-[#FF6B00] hover:underline">max@risealarm.app</a></p>
               <p className="font-bold">App Name: Rise</p>
               <p className="font-bold">Website: <a href="https://risealarm.app" target="_blank" rel="noreferrer" className="text-[#FF6B00] hover:underline">risealarm.app</a></p>

            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#FF6B00] uppercase tracking-wider text-sm border-b border-gray-200 pb-2">Warranty</h2>
            <div className="prose prose-sm text-gray-600">
               <p>Rise Alarm Pods come with a 1-year limited warranty against manufacturing defects. This does not cover water damage, accidental breakage, or loss.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
