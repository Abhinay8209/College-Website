import React from 'react';
import { BookOpen, Users, Calendar, Mail, ChevronRight, GraduationCap, Building2, Trophy, ArrowRight, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap size={32} />
            <span className="text-2xl font-bold">Chandigarh University</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-200">Home</a>
            <a href="#programs" className="hover:text-blue-200">Programs</a>
            <a href="#campus" className="hover:text-blue-200">Campus Life</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Shape Your Future at Chandigarh University</h1>
            <p className="text-xl mb-8">Discover world-class education, innovative research, and endless opportunities for growth and success.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center">
              Apply Now <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <BookOpen className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-gray-600">Degree Programs</p>
          </div>
          <div>
            <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-4xl font-bold mb-2">15,000+</h3>
            <p className="text-gray-600">Students</p>
          </div>
          <div>
            <Trophy className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-4xl font-bold mb-2">92%</h3>
            <p className="text-gray-600">Graduate Employment</p>
          </div>
          <div>
            <Building2 className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-4xl font-bold mb-2">25</h3>
            <p className="text-gray-600">Research Centers</p>
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      <div id="programs" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Computer Science",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Learn cutting-edge technology and software development"
              },
              {
                title: "Business Administration",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Develop leadership skills and business acumen"
              },
              {
                title: "Environmental Science",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Study sustainability and environmental conservation"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <button className="text-blue-600 font-semibold flex items-center">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Life */}
      <div id="campus" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Campus Life</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Campus Life"
                className="rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Student Activities</h3>
              <p className="text-gray-600">Join clubs, sports teams, and cultural events to enrich your college experience.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Library"
                className="rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">Access state-of-the-art laboratories, libraries, and recreational facilities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-2" />
                <span>abhinaysingh8209@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-2" />
                <span>+918398821869</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-blue-600 mr-2" />
                <span>Schedule a Visit</span>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap size={24} />
            <span className="text-xl font-bold">Chandigarh University</span>
          </div>
          <p className="text-blue-200">© 2024 Chandigarh University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;