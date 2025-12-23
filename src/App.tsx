import { Eye, Zap, Shield, Cpu, Camera, Scan, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Eye className="w-8 h-8 text-cyan-600" />
              <span className="text-2xl font-bold text-gray-900">VisionAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <Link to="/objet" className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-100 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-medium text-cyan-900">Powered by Advanced AI</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Detect & Recognize<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Objects in Real-Time
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Transform your visual data into actionable insights with state-of-the-art object detection and recognition technology. Fast, accurate, and scalable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/objet" className="px-8 py-4 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <Camera className="w-5 h-5" />
                  <span className="font-semibold">Start Detecting</span>
                </Link>
                <Link to="/objet" className="px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-gray-300 flex items-center space-x-2">
                  <span className="font-semibold">Watch Demo</span>
                </Link>
              </div>
            </div>

            <div className="mt-20 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-50 to-transparent h-32 bottom-0"></div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-cyan-600 mb-2">99.5%</div>
                    <div className="text-gray-600">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-600 mb-2">&lt;50ms</div>
                    <div className="text-gray-600">Processing</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-600 mb-2">10K+</div>
                    <div className="text-gray-600">Objects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
                    <div className="text-gray-600">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to detect, recognize, and analyze objects in images and video streams
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 hover:shadow-xl transition-all border border-cyan-100">
                <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-Time Detection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Process images and video streams instantly with minimal latency. Perfect for live applications and monitoring systems.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 hover:shadow-xl transition-all border border-teal-100">
                <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <Scan className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Multi-Object Recognition</h3>
                <p className="text-gray-600 leading-relaxed">
                  Identify and classify multiple objects simultaneously with precise bounding boxes and confidence scores.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all border border-blue-100">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced AI Models</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leverage cutting-edge neural networks trained on millions of images for unmatched accuracy and reliability.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-xl transition-all border border-slate-100">
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure & Private</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data stays protected with enterprise-grade encryption and compliance with global privacy standards.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-xl transition-all border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Multiple Input Sources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upload images, connect cameras, or integrate with your existing video infrastructure seamlessly.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-all border border-amber-100">
                <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  Train models on your specific objects and use cases for specialized detection requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="py-24 bg-gradient-to-br from-gray-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get started in minutes with our simple three-step process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload Your Media</h3>
                <p className="text-gray-600 leading-relaxed">
                  Simply upload images or connect your video feed through our intuitive interface or API.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Processing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our advanced AI models analyze and detect objects with precision in milliseconds.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive detailed detection results with labels, coordinates, and confidence scores.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-cyan-100 mb-10 leading-relaxed">
              Join thousands of developers and businesses using VisionAI to power their applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/objet" className="px-8 py-4 bg-white text-cyan-600 rounded-xl hover:bg-gray-50 transition-all hover:scale-105 shadow-xl font-semibold">
                Start Free Trial
              </Link>
              <button className="px-8 py-4 bg-cyan-700 text-white rounded-xl hover:bg-cyan-800 transition-all border-2 border-cyan-500 font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Eye className="w-6 h-6 text-cyan-500" />
                <span className="text-xl font-bold text-white">VisionAI</span>
              </div>
              <p className="text-sm text-gray-400">
                Advanced object detection and recognition powered by AI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400">
            © 2024 VisionAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
