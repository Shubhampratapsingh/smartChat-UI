export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-900 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <header className="relative backdrop-blur-md bg-white/70 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
              AI
            </div>
            <h1 className="text-xl font-bold text-gray-900">SmartChat</h1>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <a
              className="text-gray-600 hover:text-blue-600 transition-colors"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-gray-600 hover:text-blue-600 transition-colors"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="text-gray-600 hover:text-blue-600 transition-colors"
              href="/login"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-100 border border-blue-200 rounded-full text-sm text-blue-700 font-medium">
            ✨ Powered by Advanced AI
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Your personal AI
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              assistant for daily work
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Ask anything and get instant, intelligent answers. Search the web,
            analyze files, plan your tasks, and unlock productivity like never
            before.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105 hover:-translate-y-0.5"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all hover:scale-105 hover:-translate-y-0.5"
            >
              Explore Features
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm text-gray-500">
            <div>
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div>Active Users</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1M+</div>
              <div>Conversations</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div>Uptime</div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative backdrop-blur-md bg-white/80 border border-gray-200 rounded-3xl p-8 shadow-2xl hover:border-blue-300 transition-all">
            <div className="h-80 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center rounded-2xl border border-gray-200 overflow-hidden">
              <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 animate-pulse">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  Interactive chat interface
                </div>
                <div className="flex gap-2 justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm mt-6 text-gray-500 font-medium">
              Live chat preview
            </p>
          </div>
        </div>
      </section>

      {/* features */}
      <section id="features" className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 bg-indigo-100 border border-indigo-200 rounded-full text-sm text-indigo-700 font-medium">
            Features
          </div>
          <h3 className="text-4xl font-bold text-gray-900">
            Built for the future
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience cutting-edge AI technology with intuitive design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group backdrop-blur-md bg-white/80 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-900">
              Smart Conversations
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Advanced context awareness with perfect memory retention
              throughout your session. Understands nuance and intent.
            </p>
          </div>

          <div className="group backdrop-blur-md bg-white/80 p-8 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-900">
              Powerful Tools
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Integrated web search, document analysis, and data processing.
              Access information from anywhere, instantly.
            </p>
          </div>

          <div className="group backdrop-blur-md bg-white/80 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-900">
              Lightning Fast
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Optimized performance with zero setup required. Beautiful,
              intuitive interface designed for modern workflows.
            </p>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 border border-blue-200 rounded-full text-sm text-blue-700 font-medium">
            Pricing
          </div>
          <h3 className="text-4xl font-bold text-gray-900">Start for free</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No credit card required. Upgrade anytime.
          </p>
        </div>

        <div className="max-w-md mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative backdrop-blur-md bg-white/90 border-2 border-gray-200 rounded-3xl p-10 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Starter Plan
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Perfect for getting started
                </p>
              </div>
              <div className="px-3 py-1 bg-green-100 border border-green-200 rounded-full text-xs text-green-700 font-medium">
                Popular
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  $0
                </span>
                <span className="text-gray-500 text-sm">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited conversations</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced context memory</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Essential AI tools</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>24/7 support access</span>
              </li>
            </ul>

            <a
              href="/signup"
              className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:scale-105"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-gray-200 backdrop-blur-md bg-white/70">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30">
                AI
              </div>
              <p className="text-sm text-gray-600">
                SmartChat © 2024. Designed for innovators.
              </p>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
