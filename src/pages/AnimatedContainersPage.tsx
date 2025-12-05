import React, { useState } from "react";
import { FadeContainer } from "../components/AnimatedContainer/FadeContainer";
import { SlideContainer } from "../components/AnimatedContainer/SlideContainer";
import { ScaleContainer } from "../components/AnimatedContainer/ScaleContainer";
import { BounceContainer } from "../components/AnimatedContainer/BounceContainer";
import { FlipContainer } from "../components/AnimatedContainer/FlipContainer";
import { StaggerContainer } from "../components/AnimatedContainer/StaggerContainer";
import { MorphingContainer } from "../components/AnimatedContainer/MorphingContainer";
import { ParallaxContainer } from "../components/AnimatedContainer/ParallaxContainer";

const AnimatedContainersPage: React.FC = () => {
  const [manualTrigger, setManualTrigger] = useState(false);

  const exampleCards = [
    { id: 1, title: "Card 1", content: "This is the first card" },
    { id: 2, title: "Card 2", content: "This is the second card" },
    { id: 3, title: "Card 3", content: "This is the third card" },
    { id: 4, title: "Card 4", content: "This is the fourth card" },
  ];

  const morphStates = [
    {
      width: "200px",
      height: "200px",
      borderRadius: "0px",
      backgroundColor: "#3b82f6",
    },
    {
      width: "300px",
      height: "150px",
      borderRadius: "20px",
      backgroundColor: "#ef4444",
    },
    {
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      backgroundColor: "#10b981",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Animated Container Components
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of container components that wrap other
            elements to provide entrance animations, hover effects, and
            interactive transitions.
          </p>
        </div>

        {/* FadeContainer Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            FadeContainer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Fade In</h3>
              <FadeContainer trigger="inView" duration={0.8}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Fade In Effect</h4>
                  <p className="text-gray-600">
                    This container fades in when it comes into view.
                  </p>
                </div>
              </FadeContainer>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">With Blur</h3>
              <FadeContainer
                trigger="inView"
                duration={0.8}
                blur
                blurAmount={5}
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold mb-2">Blur + Fade</h4>
                  <p className="text-gray-600">
                    Combines fade with blur effect for smooth entrance.
                  </p>
                </div>
              </FadeContainer>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Hover Trigger</h3>
              <FadeContainer trigger="hover" duration={0.4}>
                <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
                  <h4 className="font-semibold mb-2">Hover Me</h4>
                  <p className="text-gray-600">Hover to see the fade effect.</p>
                </div>
              </FadeContainer>
            </div>
          </div>
        </section>

        {/* SlideContainer Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            SlideContainer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {["up", "down", "left", "right"].map((direction) => (
              <div key={direction}>
                <h3 className="text-lg font-medium mb-4 capitalize">
                  Slide {direction}
                </h3>
                <SlideContainer
                  trigger="inView"
                  direction={direction as any}
                  duration={0.6}
                  distance={50}
                >
                  <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
                    <h4 className="font-semibold">Slide {direction}</h4>
                    <p className="text-sm opacity-90">From {direction}</p>
                  </div>
                </SlideContainer>
              </div>
            ))}
          </div>
        </section>

        {/* ScaleContainer Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            ScaleContainer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Scale Up</h3>
              <ScaleContainer
                trigger="inView"
                startScale={0.5}
                endScale={1}
                duration={0.8}
              >
                <div className="bg-green-500 text-white p-6 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Scale Effect</h4>
                  <p className="text-sm">Starts small, grows to full size</p>
                </div>
              </ScaleContainer>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">With Bounce</h3>
              <ScaleContainer
                trigger="inView"
                startScale={0.8}
                endScale={1}
                duration={0.8}
                bounce
              >
                <div className="bg-purple-500 text-white p-6 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Bounce Scale</h4>
                  <p className="text-sm">Scales with bouncy animation</p>
                </div>
              </ScaleContainer>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Hover Scale</h3>
              <ScaleContainer
                trigger="hover"
                startScale={1}
                endScale={1.1}
                duration={0.3}
              >
                <div className="bg-orange-500 text-white p-6 rounded-lg text-center cursor-pointer">
                  <h4 className="font-semibold mb-2">Hover Scale</h4>
                  <p className="text-sm">Hover to scale up</p>
                </div>
              </ScaleContainer>
            </div>
          </div>
        </section>

        {/* BounceContainer Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            BounceContainer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {(["low", "medium", "high"] as const).map((intensity) => (
              <div key={intensity}>
                <h3 className="text-lg font-medium mb-4 capitalize">
                  {intensity} Intensity
                </h3>
                <BounceContainer
                  trigger="inView"
                  intensity={intensity}
                  duration={1}
                >
                  <div className="bg-pink-500 text-white p-6 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Bounce {intensity}</h4>
                    <p className="text-sm">
                      Bounces with {intensity} intensity
                    </p>
                  </div>
                </BounceContainer>
              </div>
            ))}
          </div>
        </section>

        {/* FlipContainer Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            FlipContainer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Horizontal Flip</h3>
              <FlipContainer
                trigger="inView"
                direction="horizontal"
                duration={1}
                perspective={1000}
              >
                <div className="bg-indigo-500 text-white p-6 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">3D Flip</h4>
                  <p className="text-sm">
                    Flips horizontally with 3D perspective
                  </p>
                </div>
              </FlipContainer>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Vertical Flip</h3>
              <FlipContainer
                trigger="inView"
                direction="vertical"
                duration={1}
                perspective={1000}
              >
                <div className="bg-teal-500 text-white p-6 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Vertical 3D</h4>
                  <p className="text-sm">Flips vertically with depth</p>
                </div>
              </FlipContainer>
            </div>
          </div>
        </section>

        {/* StaggerContainer Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            StaggerContainer
          </h2>
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">
              Staggered Children Animation
            </h3>
            <StaggerContainer
              trigger="inView"
              staggerDelay={0.1}
              staggerDirection="normal"
              duration={0.6}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {exampleCards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h4 className="font-semibold mb-2">{card.title}</h4>
                    <p className="text-sm text-gray-600">{card.content}</p>
                  </div>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* MorphingContainer Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            MorphingContainer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Auto Morphing</h3>
              <div className="flex justify-center">
                <MorphingContainer
                  trigger="inView"
                  morphStates={morphStates}
                  morphInterval={2000}
                  autoMorph
                  duration={0.8}
                >
                  <div className="flex items-center justify-center text-white font-semibold">
                    Auto Morph
                  </div>
                </MorphingContainer>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Hover Morphing</h3>
              <div className="flex justify-center">
                <MorphingContainer
                  trigger="hover"
                  morphStates={morphStates}
                  autoMorph={false}
                  duration={0.5}
                >
                  <div className="flex items-center justify-center text-white font-semibold">
                    Hover Me
                  </div>
                </MorphingContainer>
              </div>
            </div>
          </div>
        </section>

        {/* ParallaxContainer Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            ParallaxContainer
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">
                Vertical Parallax (Scroll to see effect)
              </h3>
              <div className="space-y-8">
                {[0.2, 0.5, 0.8].map((speed, index) => (
                  <ParallaxContainer
                    key={speed}
                    trigger="inView"
                    speed={speed}
                    direction="vertical"
                    enableOnMobile
                  >
                    <div
                      className={`p-8 rounded-lg text-white text-center ${
                        index === 0
                          ? "bg-red-500"
                          : index === 1
                            ? "bg-green-500"
                            : "bg-blue-500"
                      }`}
                    >
                      <h4 className="font-semibold mb-2">
                        Parallax Speed: {speed}
                      </h4>
                      <p>This element moves at {speed}x scroll speed</p>
                    </div>
                  </ParallaxContainer>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Manual Control Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Manual Control
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <button
                onClick={() => setManualTrigger(!manualTrigger)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Toggle Manual Animation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SlideContainer
                trigger="manual"
                direction="up"
                duration={0.6}
                // Manual control would be implemented with useImperativeHandle
              >
                <div className="bg-gray-200 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Manual Slide</h4>
                  <p className="text-sm text-gray-600">Controlled by button</p>
                </div>
              </SlideContainer>

              <ScaleContainer
                trigger="manual"
                startScale={0.8}
                endScale={1}
                duration={0.6}
              >
                <div className="bg-gray-200 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Manual Scale</h4>
                  <p className="text-sm text-gray-600">Controlled by button</p>
                </div>
              </ScaleContainer>

              <FadeContainer trigger="manual" duration={0.6}>
                <div className="bg-gray-200 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Manual Fade</h4>
                  <p className="text-sm text-gray-600">Controlled by button</p>
                </div>
              </FadeContainer>
            </div>
          </div>
        </section>

        {/* Props Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Props Reference
          </h2>

          {/* Base Props */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Base Props (Common to All Containers)
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      children
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ReactNode
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Content to be animated
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      trigger
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'inView' | 'hover' | 'focus' | 'manual' | 'immediate'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'inView'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Animation trigger type
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      delay
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Delay before animation starts (seconds)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      duration
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0.6
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Animation duration (seconds)
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      easing
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      EasingType
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'easeOut'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Animation easing function
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      disabled
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Disable all animations
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      variants
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Variants
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      undefined
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Custom Framer Motion variants
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      transition
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Transition
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      undefined
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Custom Framer Motion transition
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      className
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      undefined
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Additional CSS classes
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      style
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      React.CSSProperties
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      undefined
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Inline styles
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      onAnimationStart
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      () =&gt; void
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      undefined
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Callback when animation starts
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      onAnimationComplete
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      () =&gt; void
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      undefined
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Callback when animation completes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FadeContainer Props */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              FadeContainer
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      startOpacity
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Initial opacity value
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      endOpacity
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Final opacity value
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      blur
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Enable blur effect during fade
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      blurAmount
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      5
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Blur amount in pixels when blur is enabled
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SlideContainer Props */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              SlideContainer
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      direction
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      SlideDirection
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'up'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Direction to slide from (up, down, left, right, upLeft,
                      upRight, downLeft, downRight)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      distance
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      50
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Distance in pixels to slide from starting position
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      overshoot
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Add spring overshoot effect for bouncy entrance
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ScaleContainer Props */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              ScaleContainer
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      startScale
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0.8
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Initial scale value (1 = normal size)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      endScale
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Final scale value
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      scaleOrigin
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'center'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Transform origin point for scaling
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      bounce
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Add bounce effect to scaling animation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BounceContainer Props */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              BounceContainer
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      intensity
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'low' | 'medium' | 'high'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'medium'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Bounce intensity level
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      bounceCount
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Number of bounces in the animation
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      startScale
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0.3
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Initial scale value for bounce start
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FlipContainer Props */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              FlipContainer
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      direction
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'horizontal' | 'vertical' | 'both'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'horizontal'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Flip direction axis
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      perspective
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      3D perspective value for depth effect
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      backfaceVisible
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Show backface during flip animation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* StaggerContainer Props */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              StaggerContainer
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      staggerDelay
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0.1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Delay between child animations (seconds)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      staggerDirection
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'normal' | 'reverse' | 'alternate'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'normal'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Order of staggered animations
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      childSelector
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      '&gt; *'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      CSS selector for targeting child elements
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MorphingContainer Props */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              MorphingContainer
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      morphStates
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Array&lt;MorphState&gt;
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      []
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Array of container states to morph between
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      morphInterval
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Auto-morph interval in milliseconds
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      autoMorph
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      true
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Enable automatic morphing between states
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ParallaxContainer Props */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              ParallaxContainer
            </h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      speed
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0.5
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Parallax speed multiplier (0-1)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      direction
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'vertical' | 'horizontal' | 'both'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      'vertical'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Parallax movement direction
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      offset
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      0
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Starting offset value for parallax
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      enableOnMobile
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Enable parallax on mobile devices
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Performance Info */}
        <section className="mb-16">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Performance Features
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li>
                • <strong>Reduced Motion Support:</strong> Automatically detects
                and respects user's motion preferences
              </li>
              <li>
                • <strong>Performance Optimization:</strong> Uses will-change
                CSS property and cleanup for smooth animations
              </li>
              <li>
                • <strong>Mobile Friendly:</strong> Parallax can be disabled on
                mobile devices for better performance
              </li>
              <li>
                • <strong>Viewport Detection:</strong> Only animates when
                elements are in view to save resources
              </li>
              <li>
                • <strong>TypeScript Support:</strong> Full type safety with
                IntelliSense support
              </li>
              <li>
                • <strong>Flexible Triggers:</strong> Support for inView, hover,
                focus, manual, and immediate triggers
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnimatedContainersPage;

