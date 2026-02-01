import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Shield,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              Trusted by 256,712+ people worldwide
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Take Control of Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}
                Drinking
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get your personalized sobriety plan in just 2 minutes. Join
              thousands who've transformed their relationship with alcohol.
            </p>

            {/* CTA Button */}
            <Link
              href="/quiz"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-sm text-gray-500 mt-4">
              ✓ 100% Free • ✓ 2-minute quiz • ✓ Instant results
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                256,712+
              </h3>
              <p className="text-gray-600">People helped worldwide</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2 Min</h3>
              <p className="text-gray-600">Quick assessment</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Private & secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SoberPath?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our science-backed approach has helped thousands break free from
              alcohol dependency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Plans",
                description:
                  "Custom strategies based on your unique situation and goals",
                icon: "🎯",
              },
              {
                title: "Expert Guidance",
                description:
                  "Evidence-based methods developed by addiction specialists",
                icon: "👨‍⚕️",
              },
              {
                title: "24/7 Support",
                description:
                  "Access resources and community support whenever you need it",
                icon: "🤝",
              },
              {
                title: "Progress Tracking",
                description:
                  "Monitor your journey with detailed analytics and milestones",
                icon: "📊",
              },
              {
                title: "Privacy First",
                description: "Your data is completely confidential and secure",
                icon: "🔒",
              },
              {
                title: "Proven Results",
                description: "87% success rate in reducing alcohol consumption",
                icon: "✅",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 mb-8">As featured in:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Yahoo!",
              "CBS",
              "FOX",
              "Entrepreneur",
              "The New York Times",
              "WIRED",
              "Forbes",
              "Healthline",
              "WSJ",
            ].map((media) => (
              <span key={media} className="text-gray-400 font-medium text-lg">
                {media}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier relationship with alcohol.
            Your personalized plan is just 2 minutes away.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
