import { useState } from "react";
import { User } from "./index";

/**
 * User Examples Component
 * Demonstrates various User component configurations and usage patterns
 */
export const UserExamples = () => {
  const [clickedUser, setClickedUser] = useState<string | null>(null);

  const handleUserClick = (userName: string) => {
    setClickedUser(userName);
    setTimeout(() => setClickedUser(null), 2000); // Clear after 2 seconds
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        User Component Examples
      </h1>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Basic Usage</h2>
        <div className="flex flex-wrap gap-4">
          <User 
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=jane"
            }}
            data-testid="basic-user"
          />
          <User 
            name="John Smith"
            description="Frontend Developer"
            avatarProps={{
              name: "John Smith"
            }}
            data-testid="initials-user"
          />
        </div>
      </section>

      {/* Avatar Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Avatar Sizes</h2>
        <div className="flex flex-wrap items-center gap-6">
          <User 
            name="Small Avatar"
            description="Size: sm"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=small",
              size: "sm"
            }}
            data-testid="small-user"
          />
          <User 
            name="Medium Avatar"
            description="Size: md (default)"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=medium",
              size: "md"
            }}
            data-testid="medium-user"
          />
          <User 
            name="Large Avatar"
            description="Size: lg"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=large",
              size: "lg"
            }}
            data-testid="large-user"
          />
        </div>
      </section>

      {/* Avatar Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Avatar Colors</h2>
        <div className="flex flex-wrap gap-4">
          <User 
            name="Default Color"
            description="Color: default"
            avatarProps={{
              name: "Default Color",
              color: "default"
            }}
            data-testid="default-color-user"
          />
          <User 
            name="Primary Color"
            description="Color: primary"
            avatarProps={{
              name: "Primary Color",
              color: "primary"
            }}
            data-testid="primary-color-user"
          />
          <User 
            name="Success Color"
            description="Color: success"
            avatarProps={{
              name: "Success Color",
              color: "success"
            }}
            data-testid="success-color-user"
          />
          <User 
            name="Warning Color"
            description="Color: warning"
            avatarProps={{
              name: "Warning Color",
              color: "warning"
            }}
            data-testid="warning-color-user"
          />
          <User 
            name="Danger Color"
            description="Color: danger"
            avatarProps={{
              name: "Danger Color",
              color: "danger"
            }}
            data-testid="danger-color-user"
          />
        </div>
      </section>

      {/* Avatar Shapes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Avatar Shapes</h2>
        <div className="flex flex-wrap items-center gap-6">
          <User 
            name="Rounded Avatar"
            description="Default circular shape"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=rounded",
              isSquared: false
            }}
            data-testid="rounded-user"
          />
          <User 
            name="Squared Avatar"
            description="Squared shape"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=squared",
              isSquared: true
            }}
            data-testid="squared-user"
          />
        </div>
      </section>

      {/* Focusable Users */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Interactive Users</h2>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            These users are focusable and clickable. Try clicking or using keyboard navigation.
            {clickedUser && <span className="ml-2 text-green-600 font-medium">Clicked: {clickedUser}</span>}
          </p>
          <div className="flex flex-wrap gap-4">
            <User 
              name="Sarah Wilson"
              description="UX Designer • Click me!"
              isFocusable
              onClick={() => handleUserClick("Sarah Wilson")}
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=sarah",
                color: "primary"
              }}
              data-testid="focusable-user-1"
            />
            <User 
              name="Mike Johnson"
              description="Backend Engineer • Clickable"
              isFocusable
              onClick={() => handleUserClick("Mike Johnson")}
              avatarProps={{
                name: "Mike Johnson",
                color: "success"
              }}
              data-testid="focusable-user-2"
            />
            <User 
              name="Emily Chen"
              description="Product Manager • Interactive"
              isFocusable
              onClick={() => handleUserClick("Emily Chen")}
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=emily",
                color: "warning"
              }}
              data-testid="focusable-user-3"
            />
          </div>
        </div>
      </section>

      {/* Complex Descriptions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Complex Descriptions</h2>
        <div className="flex flex-wrap gap-4">
          <User 
            name="Alex Rodriguez"
            description={
              <span className="flex items-center gap-1">
                <span>Tech Lead</span>
                <span className="text-green-500">•</span>
                <span className="text-xs bg-green-100 text-green-800 px-1 rounded">Online</span>
              </span>
            }
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=alex"
            }}
            data-testid="complex-description-user"
          />
          <User 
            name="Maria Garcia"
            description={
              <div className="space-y-1">
                <div>Senior Developer</div>
                <div className="text-blue-600 text-xs">@maria_codes</div>
              </div>
            }
            avatarProps={{
              name: "Maria Garcia",
              color: "secondary"
            }}
            data-testid="multi-line-description-user"
          />
        </div>
      </section>

      {/* Custom Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Custom Styling</h2>
        <div className="flex flex-wrap gap-4">
          <User 
            name="Custom Styled User"
            description="With custom classes"
            classNames={{
              base: "bg-gradient-to-r from-purple-50 to-blue-50 p-3 rounded-lg border border-purple-200",
              name: "text-purple-900 font-bold",
              description: "text-purple-600"
            }}
            avatarProps={{
              name: "Custom Styled User",
              color: "secondary",
              className: "border-2 border-purple-300"
            }}
            data-testid="custom-styled-user"
          />
        </div>
      </section>

      {/* Fallback Scenarios */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Fallback Scenarios</h2>
        <div className="flex flex-wrap gap-4">
          <User 
            name="Broken Image"
            description="Image will fail to load"
            avatarProps={{
              src: "https://broken-image-url.jpg",
              alt: "Broken image will show initials"
            }}
            data-testid="broken-image-user"
          />
          <User 
            name="No Avatar Props"
            description="Fallback to default icon"
            avatarProps={{}}
            data-testid="no-avatar-user"
          />
          <User 
            description="Only description, no name"
            avatarProps={{
              name: "Only Description"
            }}
            data-testid="no-name-user"
          />
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Real-world Use Cases</h2>
        <div className="space-y-6">
          
          {/* Team Member List */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Team Members</h3>
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
              <div className="p-4">
                <User 
                  name="David Kim"
                  description="Engineering Manager • 5 years experience"
                  isFocusable
                  onClick={() => handleUserClick("David Kim")}
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=david",
                    size: "md"
                  }}
                  data-testid="team-member-1"
                />
              </div>
              <div className="p-4">
                <User 
                  name="Lisa Thompson"
                  description="Senior Frontend Developer • React Specialist"
                  isFocusable
                  onClick={() => handleUserClick("Lisa Thompson")}
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=lisa",
                    size: "md"
                  }}
                  data-testid="team-member-2"
                />
              </div>
              <div className="p-4">
                <User 
                  name="Carlos Mendez"
                  description="DevOps Engineer • AWS Certified"
                  isFocusable
                  onClick={() => handleUserClick("Carlos Mendez")}
                  avatarProps={{
                    name: "Carlos Mendez",
                    color: "success",
                    size: "md"
                  }}
                  data-testid="team-member-3"
                />
              </div>
            </div>
          </div>

          {/* Comment System */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Comment System</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <User 
                  name="Jennifer Lee"
                  description="2 hours ago"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=jennifer",
                    size: "sm"
                  }}
                  classNames={{
                    base: "mb-2"
                  }}
                  data-testid="comment-user-1"
                />
                <p className="text-sm text-gray-700 ml-11">
                  This looks great! I love the new design approach. Can we discuss the accessibility implications in our next meeting?
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <User 
                  name="Robert Chang"
                  description="1 hour ago"
                  avatarProps={{
                    name: "Robert Chang",
                    color: "primary",
                    size: "sm"
                  }}
                  classNames={{
                    base: "mb-2"
                  }}
                  data-testid="comment-user-2"
                />
                <p className="text-sm text-gray-700 ml-11">
                  Absolutely! I've added some notes about keyboard navigation and screen reader support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Indicator */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">With Status Indicators</h2>
        <div className="flex flex-wrap gap-4">
          <User 
            name="Alice Cooper"
            description={
              <span className="flex items-center gap-2">
                <span>Designer</span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600">Online</span>
                </span>
              </span>
            }
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=alice"
            }}
            data-testid="online-status-user"
          />
          <User 
            name="Bob Wilson"
            description={
              <span className="flex items-center gap-2">
                <span>Developer</span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-yellow-600">Away</span>
                </span>
              </span>
            }
            avatarProps={{
              name: "Bob Wilson",
              color: "warning"
            }}
            data-testid="away-status-user"
          />
          <User 
            name="Carol Davis"
            description={
              <span className="flex items-center gap-2">
                <span>Manager</span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-xs text-gray-500">Offline</span>
                </span>
              </span>
            }
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=carol"
            }}
            data-testid="offline-status-user"
          />
        </div>
      </section>
    </div>
  );
};