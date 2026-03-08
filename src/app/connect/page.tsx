'use client';

import { useEffect } from 'react';

async function getUserIP(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip || 'Unknown';
  } catch (error) {
    console.error('Failed to fetch IP:', error);
    return 'Unknown';
  }
}

export default function ConnectPage() {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const timestamp = new Date().toISOString();
        const userAgent = navigator.userAgent;
        const referer = document.referrer || 'Direct';
        const ip = await getUserIP();
        
        await fetch('/api/telegram/notify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: '/connect',
            userAgent,
            referer,
            ip,
            timestamp,
          }),
        });
      } catch (error) {
        console.error('Failed to track visit:', error);
      }
    };

    trackVisit();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Connect Page</h1>
        <p className="text-gray-600">This page is being tracked</p>
      </div>
    </div>
  );
}

