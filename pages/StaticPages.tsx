
import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const PageLayout = ({ title, children, onBack }: any) => (
  <div className="min-h-screen bg-[#F9F9F7] pt-32 px-6 pb-24">
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#FF4F00] mb-12 transition-colors"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-5xl font-bold mb-12 text-[#111]">{title}</h1>
      <div className="prose prose-lg prose-gray">
        {children}
      </div>
    </div>
  </div>
);

export const LegalPage = ({ onBack }: any) => (
  <PageLayout title="Legal" onBack={onBack}>
    <p>Terms of Service - Effective Date: March 15, 2025</p>
    <p>By purchasing the RiseAlarm hardware, you agree to the following terms. The device is intended to be used as an alarm clock. We are not responsible for lost sleep, excessive productivity, or annoyance caused by the inability to snooze.</p>
    <h3 className="text-xl font-bold mt-8 mb-4">1. Warranty</h3>
    <p>The device comes with a 1-year limited warranty covering manufacturing defects.</p>
    <h3 className="text-xl font-bold mt-8 mb-4">2. Usage</h3>
    <p>Do not submerge the pod in water. Do not consume the pod.</p>
  </PageLayout>
);

export const PrivacyPage = ({ onBack }: any) => (
  <PageLayout title="Privacy Policy" onBack={onBack}>
    <p>Your sleep data is yours. Period.</p>
    <p>RiseAlarm collects minimal data necessary to function (alarm times, wake-up success rates). We do not sell your data to third parties. All biometric data (if applicable in future updates) remains on-device.</p>
  </PageLayout>
);

export const ContactPage = ({ onBack }: any) => (
  <PageLayout title="Contact" onBack={onBack}>
    <div className="grid gap-8">
      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <h3 className="font-bold text-xl mb-2">Support</h3>
        <p className="text-gray-500 mb-4">For technical issues with your pod.</p>
        <a href="mailto:support@risealarm.com" className="text-[#FF4F00] font-bold underline">support@risealarm.com</a>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <h3 className="font-bold text-xl mb-2">Press</h3>
        <p className="text-gray-500 mb-4">For media inquiries and interviews.</p>
        <a href="mailto:press@risealarm.com" className="text-[#FF4F00] font-bold underline">press@risealarm.com</a>
      </div>
    </div>
  </PageLayout>
);
