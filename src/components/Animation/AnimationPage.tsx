import React from 'react';
import AnimationExamples from './AnimationExamples';

const AnimationPage: React.FC = () => {
  return (
    <div className="animation-page">
      <h1 className="text-3xl font-bold text-center mb-8">
        Animation Components with Framer Motion
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Interactive examples showcasing our animation component library built with Framer Motion. 
        These components provide smooth, performant animations with accessibility and TypeScript support.
      </p>
      <AnimationExamples />
    </div>
  );
};

export default AnimationPage;