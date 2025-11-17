import * as React from 'react';
import { useState } from 'react';
import { TypeWriter } from './TypeWriter';
import { RevealText } from './RevealText';
import { CounterText } from './CounterText';
import { GradientText } from './GradientText';
import { MorphingText } from './MorphingText';
import { GlitchText } from './GlitchText';

/**
 * TextAnimationExamples Component
 * 
 * Comprehensive showcase of all text animation components with
 * interactive controls and multiple configuration examples.
 */
export const TextAnimationExamples: React.FC = () => {
  const [triggerStates, setTriggerStates] = useState<Record<string, boolean>>({});

  const toggleManualTrigger = (key: string) => {
    setTriggerStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="text-animation-examples">
      <div className="max-w-6xl mx-auto p-8 space-y-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Text Animation Components</h1>
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive collection of text animation components built with Framer Motion
          </p>
        </header>

        {/* TypeWriter Examples */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold mb-6">TypeWriter</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Basic Typing Effect</h3>
              <div className="text-xl">
                <TypeWriter 
                  text="Hello, World! This is a typing animation."
                  speed={50}
                  showCursor={true}
                  trigger="inView"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Fast Typing with Block Cursor</h3>
              <div className="text-xl">
                <TypeWriter 
                  text="Rapid typing with block cursor!"
                  speed={20}
                  showCursor={true}
                  cursor="block"
                  trigger="inView"
                  delay={1}
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Hover Triggered</h3>
              <div className="text-xl cursor-pointer hover:bg-gray-100 p-2 rounded">
                <TypeWriter 
                  text="Hover me to start typing!"
                  speed={40}
                  showCursor={true}
                  trigger="hover"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Manual Trigger</h3>
              <button 
                onClick={() => toggleManualTrigger('typewriter')}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-3 hover:bg-blue-600"
              >
                Toggle Typing
              </button>
              <div className="text-xl">
                <TypeWriter 
                  text="Click the button to control me!"
                  speed={30}
                  showCursor={true}
                  trigger="manual"
                  isActive={triggerStates.typewriter}
                />
              </div>
            </div>
          </div>
        </section>

        {/* RevealText Examples */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold mb-6">RevealText</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Letter by Letter</h3>
              <div className="text-xl">
                <RevealText 
                  text="Each letter appears individually"
                  mode="letter"
                  direction="up"
                  staggerDelay={0.03}
                  trigger="inView"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Word by Word</h3>
              <div className="text-xl">
                <RevealText 
                  text="Every word slides in with style"
                  mode="word"
                  direction="left"
                  staggerDelay={0.1}
                  trigger="inView"
                  delay={0.5}
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">With Effects</h3>
              <div className="text-xl">
                <RevealText 
                  text="Blur, scale, and rotation effects combined"
                  mode="letter"
                  direction="up"
                  withBlur={true}
                  withScale={true}
                  withRotation={true}
                  staggerDelay={0.05}
                  trigger="inView"
                  delay={1}
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Focus Triggered</h3>
              <div className="text-xl">
                <RevealText 
                  text="Focus me with Tab key to reveal!"
                  mode="word"
                  direction="right"
                  trigger="focus"
                  className="focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 p-2 rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CounterText Examples */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold mb-6">CounterText</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Basic Counter</h3>
              <div className="text-3xl font-bold">
                <CounterText 
                  from={0}
                  to={1000}
                  duration={2}
                  trigger="inView"
                />
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Currency Format</h3>
              <div className="text-3xl font-bold">
                <CounterText 
                  from={0}
                  to={2549.99}
                  duration={3}
                  format="currency"
                  currency="USD"
                  locale="en-US"
                  decimals={2}
                  trigger="inView"
                  delay={0.5}
                />
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Percentage</h3>
              <div className="text-3xl font-bold">
                <CounterText 
                  from={0}
                  to={0.85}
                  duration={2.5}
                  format="percentage"
                  decimals={1}
                  trigger="inView"
                  delay={1}
                />
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">With Prefix/Suffix</h3>
              <div className="text-3xl font-bold">
                <CounterText 
                  from={0}
                  to={150}
                  duration={2}
                  prefix="Level "
                  suffix="/200"
                  trigger="inView"
                  delay={1.5}
                />
              </div>
            </div>
          </div>
        </section>

        {/* GradientText Examples */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold mb-6">GradientText</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Horizontal Gradient</h3>
              <div className="text-3xl font-bold">
                <GradientText 
                  text="Beautiful Gradient"
                  colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
                  direction="horizontal"
                  animate={true}
                  duration={3}
                />
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Diagonal Animation</h3>
              <div className="text-3xl font-bold">
                <GradientText 
                  text="Diagonal Flow"
                  colors={['#667eea', '#764ba2', '#f093fb']}
                  direction="diagonal"
                  animate={true}
                  duration={4}
                />
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Radial Gradient</h3>
              <div className="text-3xl font-bold">
                <GradientText 
                  text="Radial Effect"
                  colors={['#ff9a9e', '#fecfef', '#fecfef']}
                  direction="radial"
                  animate={true}
                  duration={5}
                />
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Static Gradient</h3>
              <div className="text-3xl font-bold">
                <GradientText 
                  text="No Animation"
                  colors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']}
                  direction="horizontal"
                  animate={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* MorphingText Examples */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold mb-6">MorphingText</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Scramble Effect</h3>
              <div className="text-2xl font-bold">
                <MorphingText 
                  texts={['HELLO', 'WORLD', 'MAGIC', 'TEXT']}
                  displayDuration={2000}
                  morphDuration={600}
                  morphStyle="scramble"
                  loop={true}
                />
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Fade Transition</h3>
              <div className="text-2xl font-bold">
                <MorphingText 
                  texts={['Innovation', 'Creativity', 'Excellence', 'Design']}
                  displayDuration={1500}
                  morphDuration={400}
                  morphStyle="fade"
                  loop={true}
                />
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Slide Animation</h3>
              <div className="text-2xl font-bold">
                <MorphingText 
                  texts={['React', 'TypeScript', 'Framer Motion', 'Tailwind']}
                  displayDuration={1800}
                  morphDuration={500}
                  morphStyle="slide"
                  loop={true}
                />
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Manual Control</h3>
              <button 
                onClick={() => toggleManualTrigger('morphing')}
                className="bg-orange-500 text-white px-4 py-2 rounded mb-3 hover:bg-orange-600"
              >
                Toggle Morphing
              </button>
              <div className="text-2xl font-bold">
                <MorphingText 
                  texts={['Click', 'To', 'Control', 'Me!']}
                  displayDuration={1200}
                  morphDuration={300}
                  morphStyle="scramble"
                  trigger="manual"
                  isActive={triggerStates.morphing}
                  loop={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* GlitchText Examples */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold mb-6">GlitchText</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Low Intensity</h3>
              <div className="text-2xl font-bold">
                <GlitchText 
                  text="SUBTLE GLITCH"
                  intensity="low"
                  continuous={true}
                  colors={['#ff0000', '#00ff00', '#0000ff']}
                />
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">High Intensity</h3>
              <div className="text-2xl font-bold">
                <GlitchText 
                  text="INTENSE EFFECT"
                  intensity="high"
                  continuous={true}
                  colors={['#ff00ff', '#00ffff', '#ffff00']}
                />
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Data Corruption</h3>
              <div className="text-2xl font-bold font-mono">
                <GlitchText 
                  text="SYSTEM ERROR"
                  intensity="extreme"
                  continuous={true}
                  corruptData={true}
                  colors={['#ff0000', '#ff6600', '#ff0066']}
                />
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Hover to Activate</h3>
              <div className="text-2xl font-bold cursor-pointer hover:bg-red-100 p-2 rounded">
                <GlitchText 
                  text="HOVER GLITCH"
                  intensity="medium"
                  continuous={false}
                  trigger="hover"
                  colors={['#00ff00', '#ff0000']}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Combined Example */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold mb-6">Combined Effects</h2>
          
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg text-center">
            <div className="text-4xl font-bold mb-4">
              <GradientText 
                text="Amazing Text Animations"
                colors={['#667eea', '#764ba2', '#f093fb', '#4facfe']}
                direction="horizontal"
                animate={true}
                duration={4}
              />
            </div>
            
            <div className="text-xl mb-6">
              <RevealText 
                text="Discover the power of animated typography"
                mode="word"
                direction="up"
                staggerDelay={0.1}
                trigger="inView"
                delay={1}
              />
            </div>
            
            <div className="text-lg">
              <TypeWriter 
                text="Built with React, TypeScript, and Framer Motion for maximum performance and flexibility."
                speed={30}
                showCursor={false}
                trigger="inView"
                delay={3}
              />
            </div>
            
            <div className="mt-8 text-3xl font-bold">
              <CounterText 
                from={0}
                to={6}
                duration={2}
                prefix="Total: "
                suffix=" Components"
                trigger="inView"
                delay={5}
              />
            </div>
          </div>
        </section>

        <footer className="text-center py-8 border-t mt-12">
          <p className="text-gray-600">
            All components support accessibility features, reduced motion preferences, and multiple trigger modes.
          </p>
        </footer>
      </div>
    </div>
  );
};