import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

interface Panel {
  id: string;
  title: string;
  Component: React.ComponentType<any>;
}

interface SlidingFormProps {
  panels: Panel[];
  defaultPanelId: string;
  isOpen: boolean;
  onClose: () => void;
}

const SlidingForm: React.FC<SlidingFormProps> = ({ panels, defaultPanelId, isOpen, onClose }) => {
  const [currentPanelId, setCurrentPanelId] = useState(defaultPanelId);
  const currentPanel = panels.find(panel => panel.id === currentPanelId);

  if (!currentPanel) {
    return null;
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed right-0 top-0 h-full w-full bg-white shadow-lg z-50"
        >
          <div className="p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            {/* Panel Navigation */}
            <div className="mb-4">
              {panels.map(panel => (
                <button
                  key={panel.id}
                  onClick={() => setCurrentPanelId(panel.id)}
                  className={`px-4 py-2 rounded ${
                    currentPanelId === panel.id 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {panel.title}
                </button>
              ))}
            </div>

            {/* Current Panel Content */}
            <div className="p-4 bg-white rounded shadow">
              <currentPanel.Component onClose={onClose} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlidingForm;
