"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Brain, Gamepad2, Users, Sparkles, Cpu, Target, ChevronRight } from "lucide-react"

export default function AIGameLabBlog() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">AI Game Lab</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("playing")}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Playing Games
              </button>
              <button
                onClick={() => scrollToSection("creating")}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Creating Games
              </button>
              <button
                onClick={() => scrollToSection("personalizing")}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Personalizing
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, purple 0%, transparent 50%), radial-gradient(circle at 75% 75%, blue 0%, transparent 50%)`,
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 animate-pulse">
            The Future of Gaming
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            AI Game
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Laboratory
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Exploring the revolutionary impact of Artificial Intelligence on video games—from intelligent NPCs to
            procedural content generation and personalized player experiences.
          </p>
          <Button
            onClick={() => scrollToSection("playing")}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
          >
            Explore the Research
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </section>

      {/* AI for Playing Games Section */}
      <section id="playing" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                <Gamepad2 className="h-12 w-12 text-purple-400 mr-4 animate-bounce" />
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Section 01</Badge>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">AI for Playing Games</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The evolution of AI in gaming has transformed how we interact with virtual worlds. From simple
                rule-based systems to sophisticated machine learning algorithms, AI opponents now provide unprecedented
                challenges and realistic behaviors.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Intelligent NPCs</h3>
                    <p className="text-gray-400">
                      Advanced behavioral trees and neural networks create NPCs that adapt to player strategies and
                      exhibit human-like decision making.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Dynamic Difficulty</h3>
                    <p className="text-gray-400">
                      Machine learning algorithms analyze player performance in real-time to adjust game difficulty and
                      maintain optimal engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Competitive AI</h3>
                    <p className="text-gray-400">
                      From chess engines to StarCraft II bots, AI systems now compete at professional levels, pushing
                      the boundaries of strategic thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Cpu
                    className="h-16 w-16 text-purple-400 mx-auto mb-4 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">Case Study</h3>
                  <p className="text-gray-300">OpenAI Five vs Professional Dota 2 Players</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Training Hours</span>
                    <span className="text-purple-400 font-bold">45,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Games Played</span>
                    <span className="text-purple-400 font-bold">10,000/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Win Rate vs Pros</span>
                    <span className="text-purple-400 font-bold">99.4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI for Creating Games Section */}
      <section id="creating" className="py-24 bg-black/20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30 backdrop-blur-sm order-2 lg:order-1 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Sparkles className="h-12 w-12 text-blue-400 mx-auto mb-3 animate-pulse" />
                    <h4 className="text-lg font-semibold text-white mb-2">Procedural Generation</h4>
                    <p className="text-sm text-gray-400">Infinite worlds created through algorithmic design</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-purple-400 mx-auto mb-3 animate-pulse" />
                    <h4 className="text-lg font-semibold text-white mb-2">Asset Creation</h4>
                    <p className="text-sm text-gray-400">AI-generated textures, models, and animations</p>
                  </div>
                  <div className="text-center">
                    <Brain className="h-12 w-12 text-pink-400 mx-auto mb-3 animate-pulse" />
                    <h4 className="text-lg font-semibold text-white mb-2">Narrative Design</h4>
                    <p className="text-sm text-gray-400">Dynamic storytelling and dialogue generation</p>
                  </div>
                  <div className="text-center">
                    <Cpu className="h-12 w-12 text-green-400 mx-auto mb-3 animate-pulse" />
                    <h4 className="text-lg font-semibold text-white mb-2">Level Design</h4>
                    <p className="text-sm text-gray-400">Automated level creation and optimization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Sparkles className="h-12 w-12 text-blue-400 mr-4 animate-spin" style={{ animationDuration: "4s" }} />
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Section 02</Badge>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">AI for Creating Games</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Artificial Intelligence is revolutionizing game development by automating creative processes and
                enabling developers to create more content with fewer resources. From procedural world generation to
                AI-assisted asset creation, the development pipeline is being transformed.
              </p>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/20 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">Procedural Content Generation</h3>
                  <p className="text-gray-400 mb-4">
                    Games like No Man's Sky and Minecraft demonstrate how AI can create vast, explorable worlds with
                    minimal human intervention, using algorithms to generate terrain, structures, and ecosystems.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-500/20 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Assisted Development</h3>
                  <p className="text-gray-400 mb-4">
                    Modern tools use machine learning to generate textures, optimize performance, and even write code,
                    allowing developers to focus on creative vision rather than technical implementation.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    Explore Tools <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI for Personalizing Player Experience Section */}
      <section id="personalizing" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-pink-400 mr-4 animate-bounce" />
              <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">Section 03</Badge>
            </div>
            <h2 className="text-5xl font-bold text-white mb-8 leading-tight">AI for Personalizing Player Experience</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The future of gaming lies in personalization. AI systems analyze player behavior, preferences, and skill
              levels to create unique, tailored experiences that adapt in real-time to individual players.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-pink-500/30 backdrop-blur-sm hover:scale-105 hover:rotate-1 transition-all duration-300">
              <CardContent className="p-8 text-center min-h-[380px] flex flex-col justify-between">
                <Target className="h-16 w-16 text-pink-400 mx-auto mb-8 animate-pulse hover:scale-110 transition-all duration-500" />
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">Adaptive Gameplay</h3>
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                  AI monitors player performance and adjusts game mechanics, enemy behavior, and challenge levels to
                  maintain optimal engagement and flow state.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm hover:scale-105 hover:rotate-1 transition-all duration-300">
              <CardContent className="p-8 text-center min-h-[380px] flex flex-col justify-between">
                <Brain className="h-16 w-16 text-purple-400 mx-auto mb-8 animate-pulse hover:scale-110 transition-all duration-500" />
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">Content Recommendation</h3>
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                  Machine learning algorithms analyze player preferences to suggest new games, in-game content, and
                  experiences tailored to individual tastes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-green-900/50 border-blue-500/30 backdrop-blur-sm hover:scale-105 hover:rotate-1 transition-all duration-300">
              <CardContent className="p-8 text-center min-h-[380px] flex flex-col justify-between">
                <Users className="h-16 w-16 text-blue-400 mx-auto mb-8 animate-pulse hover:scale-110 transition-all duration-500" />
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">Social Matching</h3>
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                  AI-powered matchmaking systems create balanced teams and meaningful social connections based on player
                  behavior and compatibility.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 p-12 rounded-2xl border border-pink-500/20 hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">The Personalization Revolution</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                As AI becomes more sophisticated, we're moving toward a future where every player's journey is unique.
                Games will adapt not just to how you play, but to who you are—your emotions, your learning style, and
                your personal goals.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Current Applications</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-pink-400 mr-2 animate-pulse" />
                      Dynamic difficulty adjustment
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-pink-400 mr-2 animate-pulse" />
                      Personalized content feeds
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-pink-400 mr-2 animate-pulse" />
                      Behavioral analytics
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-pink-400 mr-2 animate-pulse" />
                      Skill-based matchmaking
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Future Possibilities</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-purple-400 mr-2 animate-pulse" />
                      Emotion-responsive gameplay
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-purple-400 mr-2 animate-pulse" />
                      Personalized narrative paths
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-purple-400 mr-2 animate-pulse" />
                      Adaptive learning systems
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-purple-400 mr-2 animate-pulse" />
                      Biometric integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-10 w-10 text-purple-400 mr-3 animate-pulse" />
              <h3 className="text-3xl font-bold text-white">AI Game Lab</h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Exploring the intersection of artificial intelligence and interactive entertainment. The future of gaming
              is intelligent, adaptive, and personalized.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button
                variant="outline"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 bg-transparent hover:scale-105 transition-all duration-300"
              >
                Research Papers
              </Button>
              <Button
                variant="outline"
                className="border-pink-500/30 text-pink-300 hover:bg-pink-500/10 bg-transparent hover:scale-105 transition-all duration-300"
              >
                Case Studies
              </Button>
              <Button
                variant="outline"
                className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent hover:scale-105 transition-all duration-300"
              >
                Industry Reports
              </Button>
            </div>
            <p className="text-gray-500">
              © 2024 AI Game Lab. Advancing the science of intelligent gaming experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
