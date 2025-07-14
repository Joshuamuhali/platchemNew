import React, { Component } from 'react';

class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-platchem-navy text-white">
          <div className="text-center p-8">
            <h2 className="text-4xl font-bold mb-4">Something went wrong</h2>
            <p className="text-lg mb-6">We apologize for the inconvenience.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-platchem-lime hover:bg-platchem-lime/90 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
