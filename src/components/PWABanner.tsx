import { useEffect, useState } from 'react';

const PWABanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Check if the browser supports PWA installation
      if ('serviceWorker' in navigator && 'beforeinstallprompt' in window) {
        const handleBeforeInstallPrompt = (e: Event) => {
          e.preventDefault();
          setShowBanner(true);
          
          // Show banner after a short delay
          setTimeout(() => {
            setShowBanner(true);
          }, 1000);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
          window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
      }
    }
  }, []);

  const handleInstall = () => {
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Install Platchem App</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Add Platchem to your home screen for quick access
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowBanner(false)}
              className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleInstall}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Install
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PWABanner;
