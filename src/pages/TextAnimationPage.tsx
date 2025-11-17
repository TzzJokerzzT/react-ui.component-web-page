import { TextAnimationExamples } from "../components/TextAnimation";

const TextAnimationPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Text Animation Components
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A comprehensive collection of text animation components built with React, TypeScript, and Framer Motion.
          Features typewriter effects, text reveals, counters, gradients, morphing text, and glitch effects.
        </p>
      </div>
      
      <TextAnimationExamples />
      
      {/* Props Reference Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Props Reference
        </h2>
        
        {/* TypeWriter Component */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">TypeWriter</h3>
          <p className="text-gray-600 mb-4">
            Creates a typewriter effect where text appears character by character, with optional cursor, deletion, and multiple text cycling.
          </p>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">text</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Text content to type (required)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">texts</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string[]</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Multiple texts to cycle through</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">speed</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">2</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Typing speed in characters per second</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">cursor</td>
                  <td className="px-6 py-4 text-sm text-gray-500">CursorStyle</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"line"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Cursor style: block, line, underscore, none</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">cursorColor</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"currentColor"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Cursor color</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">showCursor</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">true</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to show blinking cursor</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">deleteAfter</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to delete text after typing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">deleteSpeed</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">3</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Deletion speed in characters per second</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">pauseBeforeDelete</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">1</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Pause duration before deletion (seconds)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">loop</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Loop through texts infinitely</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">trigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextTrigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"inView"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation trigger: inView, hover, focus, manual, immediate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">repeat</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to repeat the animation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">delay</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Delay before animation starts (seconds)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether animation is disabled</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">isActive</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Manual trigger control</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onComplete</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation completes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onStart</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation starts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RevealText Component */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">RevealText</h3>
          <p className="text-gray-600 mb-4">
            Reveals text character by character, word by word, or line by line with customizable animation effects and directions.
          </p>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">text</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Text content to reveal (required)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">mode</td>
                  <td className="px-6 py-4 text-sm text-gray-500">RevealMode</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"letter"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Reveal mode: letter, word, line</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">duration</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0.6</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation duration per unit</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">staggerDelay</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0.05</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Stagger delay between units</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">direction</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextDirection</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"up"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Direction: left, right, up, down, center</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">initialOpacity</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Initial opacity of hidden text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">easing</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextEasing</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"easeOut"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation easing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">withBlur</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Reveal with blur effect</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">withScale</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Reveal with scale effect</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">withRotation</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Reveal with rotation effect</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">trigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextTrigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"inView"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation trigger</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">repeat</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to repeat the animation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">delay</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Delay before animation starts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether animation is disabled</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">isActive</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Manual trigger control</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onComplete</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation completes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onStart</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation starts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CounterText Component */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">CounterText</h3>
          <p className="text-gray-600 mb-4">
            Animates a number from one value to another with formatting options and customizable animation effects.
          </p>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">from</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Starting number (required)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">to</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Ending number (required)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">duration</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">2</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation duration in seconds</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">decimals</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Number of decimal places</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">format</td>
                  <td className="px-6 py-4 text-sm text-gray-500">'number' | 'currency' | 'percentage'</td>
                  <td className="px-6 py-4 text-sm text-gray-500">'number'</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Number format</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">currency</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">'EUR'</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Currency symbol for currency format</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">locale</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">'es-ES'</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Locale for number formatting</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">formatter</td>
                  <td className="px-6 py-4 text-sm text-gray-500">(value: number) =&gt; string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Custom formatter function</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">easing</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextEasing</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"easeOut"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation easing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">prefix</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">''</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Prefix text</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">suffix</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">''</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Suffix text</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">trigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextTrigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"inView"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation trigger</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">repeat</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to repeat the animation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">delay</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Delay before animation starts</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether animation is disabled</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">isActive</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Manual trigger control</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onComplete</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation completes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onStart</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation starts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* GradientText Component */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">GradientText</h3>
          <p className="text-gray-600 mb-4">
            Displays text with animated color gradients that can move in different directions. Supports continuous animation and various gradient styles.
          </p>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">text</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Text content to display (required)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">colors</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string[]</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Gradient colors array (required)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">direction</td>
                  <td className="px-6 py-4 text-sm text-gray-500">GradientDirection</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"horizontal"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Gradient direction: horizontal, vertical, diagonal, radial</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">duration</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">3</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation duration in seconds</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">speed</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">1</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation speed multiplier</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">animate</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">true</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to animate continuously</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">backgroundSize</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Background size for gradient animation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">stops</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number[]</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Custom gradient stops</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">trigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextTrigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"immediate"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation trigger</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">repeat</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">true</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to repeat the animation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">delay</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Delay before animation starts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether animation is disabled</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">isActive</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Manual trigger control</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onComplete</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation completes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onStart</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation starts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* MorphingText Component */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">MorphingText</h3>
          <p className="text-gray-600 mb-4">
            Text morphing between multiple states with different transition styles.
          </p>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">texts</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string[]</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Array of texts to morph between (required)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">displayDuration</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">2000</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Duration to show each text (ms)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">morphDuration</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">600</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Morphing animation duration (ms)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">loop</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to loop through texts</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">easing</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextEasing</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"easeOut"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Morphing animation easing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">morphStyle</td>
                  <td className="px-6 py-4 text-sm text-gray-500">'fade' | 'slide' | 'scramble'</td>
                  <td className="px-6 py-4 text-sm text-gray-500">'fade'</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Character morphing style</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">trigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextTrigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"inView"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation trigger</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">repeat</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to repeat the animation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">delay</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Delay before animation starts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether animation is disabled</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">isActive</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Manual trigger control</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onComplete</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation completes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onStart</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation starts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* GlitchText Component */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">GlitchText</h3>
          <p className="text-gray-600 mb-4">
            Digital glitch and corruption effects with customizable intensity and colors.
          </p>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">text</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Text content to glitch (required)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">intensity</td>
                  <td className="px-6 py-4 text-sm text-gray-500">GlitchIntensity</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"medium"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Glitch intensity: low, medium, high, extreme</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">duration</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0.3</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation duration in seconds</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">continuous</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to animate continuously</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">colors</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string[]</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Glitch colors array</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">corruptData</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to include data corruption effect</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">glitchChars</td>
                  <td className="px-6 py-4 text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Custom glitch characters</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">layers</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">3</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Number of glitch layers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">trigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TextTrigger</td>
                  <td className="px-6 py-4 text-sm text-gray-500">"inView"</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Animation trigger</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">repeat</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether to repeat the animation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">delay</td>
                  <td className="px-6 py-4 text-sm text-gray-500">number</td>
                  <td className="px-6 py-4 text-sm text-gray-500">0</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Delay before animation starts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Whether animation is disabled</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">isActive</td>
                  <td className="px-6 py-4 text-sm text-gray-500">boolean</td>
                  <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Manual trigger control</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onComplete</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation completes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onStart</td>
                  <td className="px-6 py-4 text-sm text-gray-500">() =&gt; void</td>
                  <td className="px-6 py-4 text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Callback when animation starts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnimationPage;