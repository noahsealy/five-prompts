import Image from "next/image";
import Link from "next/link";
import EmailInput from "@/components/EmailInput";
import SubscriptionForm from '@/components/SubscriptionForm';

export default function Home() {
  const categories = [
    {
      name: "Founder",
      description: "Strategic thinking and leadership prompts to guide your venture",
      icon: "💡"
    },
    {
      name: "Marketing",
      description: "Creative prompts to boost your brand and reach",
      icon: "📢"
    },
    {
      name: "Operations",
      description: "Streamline your processes and improve efficiency",
      icon: "⚙️"
    },
    {
      name: "Engineering",
      description: "Technical challenges and architecture considerations",
      icon: "👨‍💻"
    },
    {
      name: "Design",
      description: "User experience and visual creativity prompts",
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#191919]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section - Notion-style */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-6xl sm:text-7xl font-medium text-gray-900 dark:text-white mb-6 leading-tight">
            Five Prompts
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            Daily inspiration for builders, delivered to your inbox.
          </p>
          <div className="text-lg text-gray-500 dark:text-gray-400 mb-12 font-light">
            One prompt each for founder, marketing, operations, engineering, and design.
          </div>
          
          {/* Use SubscriptionForm instead of EmailInput directly */}
          <div className="flex justify-center">
            <SubscriptionForm />
          </div>
        </div>

        {/* Categories - Notion-card style */}
        <div className="mt-16 flex flex-col">
          {categories.map((category) => (
            <div key={category.name} className="rounded-lg transition-all w-full">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{category.icon}</div>
                <div>
                  <h3 className="font-serif text-xl text-gray-900 dark:text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof - Notion-style */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-[#212121] px-4 py-2 rounded-full">
              <span>⭐</span>
              <span>Used by 10,000+ professionals</span>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-sm font-light">
              <div className="text-center p-4">
                <div className="font-medium text-gray-900 dark:text-white mb-1">Daily</div>
                <div className="text-gray-600 dark:text-gray-400">Delivery</div>
              </div>
              <div className="text-center p-4">
                <div className="font-medium text-gray-900 dark:text-white mb-1">5 Categories</div>
                <div className="text-gray-600 dark:text-gray-400">Each day</div>
              </div>
              <div className="text-center p-4">
                <div className="font-medium text-gray-900 dark:text-white mb-1">AI-Powered</div>
                <div className="text-gray-600 dark:text-gray-400">Prompts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Notion-style */}
        <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Built with ♥️ for the builder community</p>
        </footer>
      </div>
    </div>
  );
}
