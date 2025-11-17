import { Avatar, AvatarGroup } from '../components/Avatar';

const AvatarPage = () => {
  return (
    <div className="container mx-auto p-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Avatar Component</h1>
        <p className="text-lg text-gray-600">
          Display user profile pictures, initials, or fallback icons with customizable sizes, colors, and borders.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Basic Usage</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar src="https://i.pravatar.cc/150?img=1" name="John Doe" />
          <Avatar name="Jane Smith" />
          <Avatar />
        </div>
        <div className="text-sm text-gray-600">
          <p>From left to right: Avatar with image, Avatar with name (shows initials), Avatar with fallback icon</p>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Sizes</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=2" name="Small Avatar" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=3" name="Medium Avatar" />
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=4" name="Large Avatar" />
        </div>
        <div className="text-sm text-gray-600">
          <p>Available sizes: sm, md (default), lg</p>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Colors</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar color="default" name="Default" />
          <Avatar color="primary" name="Primary" />
          <Avatar color="secondary" name="Secondary" />
          <Avatar color="success" name="Success" />
          <Avatar color="warning" name="Warning" />
          <Avatar color="danger" name="Danger" />
        </div>
        <div className="text-sm text-gray-600">
          <p>Available colors: default, primary, secondary, success, warning, danger</p>
        </div>
      </section>

      {/* Radius */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Border Radius</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar radius="none" name="None" />
          <Avatar radius="sm" name="Small" />
          <Avatar radius="md" name="Medium" />
          <Avatar radius="lg" name="Large" />
          <Avatar radius="full" name="Full" />
        </div>
        <div className="text-sm text-gray-600">
          <p>Available radius: none, sm, md, lg, full (default)</p>
        </div>
      </section>

      {/* Bordered */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Bordered</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar src="https://i.pravatar.cc/150?img=5" isBordered name="Bordered Avatar" />
          <Avatar color="primary" isBordered name="Primary Bordered" />
          <Avatar color="danger" isBordered name="Danger Bordered" />
        </div>
        <div className="text-sm text-gray-600">
          <p>Add border with the isBordered prop</p>
        </div>
      </section>

      {/* Disabled */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Disabled State</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar src="https://i.pravatar.cc/150?img=6" isDisabled name="Disabled Avatar" />
          <Avatar color="primary" isDisabled name="Disabled Primary" />
          <Avatar isDisabled name="Disabled" />
        </div>
        <div className="text-sm text-gray-600">
          <p>Disabled avatars have reduced opacity</p>
        </div>
      </section>

      {/* Avatar Group - Basic */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Avatar Group</h2>
        <div className="p-4 bg-gray-50 rounded-lg">
          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/150?img=7" name="John Doe" />
            <Avatar src="https://i.pravatar.cc/150?img=8" name="Jane Smith" />
            <Avatar src="https://i.pravatar.cc/150?img=9" name="Bob Johnson" />
            <Avatar src="https://i.pravatar.cc/150?img=10" name="Alice Wilson" />
          </AvatarGroup>
        </div>
        <div className="text-sm text-gray-600">
          <p>Basic avatar group with overlapping avatars</p>
        </div>
      </section>

      {/* Avatar Group - Max Count */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Avatar Group with Max Count</h2>
        <div className="p-4 bg-gray-50 rounded-lg">
          <AvatarGroup max={3}>
            <Avatar src="https://i.pravatar.cc/150?img=11" name="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=12" name="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=13" name="User 3" />
            <Avatar src="https://i.pravatar.cc/150?img=14" name="User 4" />
            <Avatar src="https://i.pravatar.cc/150?img=15" name="User 5" />
            <Avatar src="https://i.pravatar.cc/150?img=16" name="User 6" />
          </AvatarGroup>
        </div>
        <div className="text-sm text-gray-600">
          <p>Shows maximum 3 avatars with +3 count indicator</p>
        </div>
      </section>

      {/* Avatar Group - Total Count */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Avatar Group with Total</h2>
        <div className="p-4 bg-gray-50 rounded-lg">
          <AvatarGroup max={4} total={10}>
            <Avatar src="https://i.pravatar.cc/150?img=17" name="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=18" name="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=19" name="User 3" />
            <Avatar src="https://i.pravatar.cc/150?img=20" name="User 4" />
          </AvatarGroup>
        </div>
        <div className="text-sm text-gray-600">
          <p>Shows 4 avatars with +6 count (total 10 - max 4)</p>
        </div>
      </section>

      {/* Avatar Group - Grid Layout */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Avatar Group - Grid Layout</h2>
        <div className="p-4 bg-gray-50 rounded-lg">
          <AvatarGroup isGrid max={6}>
            <Avatar src="https://i.pravatar.cc/150?img=21" name="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=22" name="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=23" name="User 3" />
            <Avatar src="https://i.pravatar.cc/150?img=24" name="User 4" />
            <Avatar src="https://i.pravatar.cc/150?img=25" name="User 5" />
            <Avatar src="https://i.pravatar.cc/150?img=26" name="User 6" />
            <Avatar src="https://i.pravatar.cc/150?img=27" name="User 7" />
            <Avatar src="https://i.pravatar.cc/150?img=28" name="User 8" />
          </AvatarGroup>
        </div>
        <div className="text-sm text-gray-600">
          <p>Grid layout with no overlap and +2 count indicator</p>
        </div>
      </section>

      {/* Avatar Group - Different Sizes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Avatar Group Sizes</h2>
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm font-medium mb-2">Small:</p>
            <AvatarGroup size="sm" max={4}>
              <Avatar src="https://i.pravatar.cc/150?img=29" name="User 1" />
              <Avatar src="https://i.pravatar.cc/150?img=30" name="User 2" />
              <Avatar src="https://i.pravatar.cc/150?img=31" name="User 3" />
              <Avatar src="https://i.pravatar.cc/150?img=32" name="User 4" />
              <Avatar src="https://i.pravatar.cc/150?img=33" name="User 5" />
            </AvatarGroup>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Medium:</p>
            <AvatarGroup size="md" max={4}>
              <Avatar src="https://i.pravatar.cc/150?img=34" name="User 1" />
              <Avatar src="https://i.pravatar.cc/150?img=35" name="User 2" />
              <Avatar src="https://i.pravatar.cc/150?img=36" name="User 3" />
              <Avatar src="https://i.pravatar.cc/150?img=37" name="User 4" />
              <Avatar src="https://i.pravatar.cc/150?img=38" name="User 5" />
            </AvatarGroup>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Large:</p>
            <AvatarGroup size="lg" max={4}>
              <Avatar src="https://i.pravatar.cc/150?img=39" name="User 1" />
              <Avatar src="https://i.pravatar.cc/150?img=40" name="User 2" />
              <Avatar src="https://i.pravatar.cc/150?img=41" name="User 3" />
              <Avatar src="https://i.pravatar.cc/150?img=42" name="User 4" />
              <Avatar src="https://i.pravatar.cc/150?img=43" name="User 5" />
            </AvatarGroup>
          </div>
        </div>
      </section>

      {/* Custom Initials */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Custom Initials & Fallback</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar 
            name="Alexander Hamilton" 
            getInitials={(name) => name.split(' ').map(n => n[0]).join('').substring(0, 3)}
          />
          <Avatar name="React Developer" />
          <Avatar 
            fallback={<span className="text-lg">🎨</span>}
            name="Designer"
          />
        </div>
        <div className="text-sm text-gray-600">
          <p>Custom initials function, default initials, and custom fallback content</p>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Interactive Features</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar 
            src="https://i.pravatar.cc/150?img=44" 
            name="Focusable Avatar"
            isFocusable
            onClick={() => alert('Avatar clicked!')}
            className="cursor-pointer"
          />
          <Avatar 
            name="Hoverable"
            className="cursor-pointer hover:scale-110 transition-transform"
            onClick={() => alert('Initials avatar clicked!')}
          />
        </div>
        <div className="text-sm text-gray-600">
          <p>Click the avatars to see interactions. The first one is focusable with keyboard navigation.</p>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Loading States</h2>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <Avatar src="broken-url" name="Fallback Example" showFallback />
          <Avatar src="https://slow-loading-image-url.com/image.jpg" name="Loading..." />
          <Avatar name="Always Initials" />
        </div>
        <div className="text-sm text-gray-600">
          <p>Broken image URL shows fallback, slow loading shows initials while loading, third shows initials always</p>
        </div>
      </section>

      {/* Props Reference */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Props Reference
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Complete reference of all available props for the Avatar and AvatarGroup components.
        </p>
        
        <div className="space-y-8">
          {/* Avatar Props */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Avatar Component</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Prop</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Default</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">src</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Image source URL for the avatar</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">name</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Name for generating initials and accessible background color</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">size</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'sm' | 'md' | 'lg'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'md'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Size of the avatar</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">color</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'default'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Color theme of the avatar</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">radius</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'none' | 'sm' | 'md' | 'lg' | 'full'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'full'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Border radius of the avatar</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isBordered</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the avatar should have a border</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isDisabled</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the avatar is disabled</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isFocusable</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the avatar can receive focus</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">showFallback</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">true</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether to show fallback when image fails to load</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">icon</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom icon to display as fallback</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">fallback</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom fallback component when image fails to load</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">getInitials</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(name: string) =&gt; string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom function to generate initials from name</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">ImgComponent</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ElementType</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'img'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom component to use for the image element</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">imgProps</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ComponentPropsWithoutRef&lt;'img'&gt;</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Props to pass to the image component</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">classNames</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Partial&lt;Record&lt;'base' | 'img' | 'fallback' | 'name' | 'icon', string&gt;&gt;</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom class names for avatar slots</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">as</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ElementType</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'div'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Component to render as</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">data-testid</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Data test id for testing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* AvatarGroup Props */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">AvatarGroup Component</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Prop</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Default</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-200">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">max</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">number</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Maximum number of avatars to display</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">total</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">number</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Total number of avatars (for count display)</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">size</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'sm' | 'md' | 'lg'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'md'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Size applied to all avatars in the group</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">color</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'default'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Color applied to all avatars in the group</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">radius</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'none' | 'sm' | 'md' | 'lg' | 'full'</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'full'</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Radius applied to all avatars in the group</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isGrid</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether to display avatars in a grid layout</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isDisabled</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether all avatars in the group are disabled</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isBordered</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether all avatars in the group should have borders</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">renderCount</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(count: number) =&gt; ReactNode</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom function to render the count indicator</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">classNames</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Partial&lt;Record&lt;'base' | 'count', string&gt;&gt;</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom class names for avatar group slots</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">data-testid</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Data test id for testing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarPage;