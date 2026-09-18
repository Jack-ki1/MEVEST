import React from 'react';

export function LegalDisclaimer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950 text-white text-center py-3 px-6 text-xs z-[9999] border-t-2 border-amber-500 shadow-2xl">
      <p className="font-medium">
        ⚠️ <strong>Educational Project Disclaimer:</strong> This is a class project created for educational purposes only. 
        Not financial advice. All investment decisions are your responsibility. 
        Market data may be delayed or simulated. Always verify information from multiple sources before acting.
      </p>
    </div>
  );
}
