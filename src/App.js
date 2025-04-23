import React, { useState } from 'react';
// Using lucide-react icons for better visuals
// Added CheckSquare and Laptop icons
import { Leaf, Award, Factory, ScanLine, User, Link2, Wheat, Package, CheckSquare, Laptop, ArrowRight, ArrowDown } from 'lucide-react'; // Removed Phone, Send as they are in CTA component

// Import the separated CTA component
import CallToActionSection from './components/CallToActionSection'; // Assuming you place it in src/components/

// Placeholder for a generic icon if needed - COMMENTED OUT as not used
// const PlaceholderIcon = ({ className = "w-6 h-6" }) => (
//     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
// );

// Component for the "How It Works" section - UPDATED VISUAL FLOW + Farmer/Certifier Diagram
const HowItWorksSection = () => {
  // Simplified steps based on the draw.io diagram
  const processStages = [
    { title: "Farming & Data Input", description: "Farmers record inputs (fertilizers, pesticides) and field data.", icon: <Leaf size={48} className="text-green-600" /> },
    { title: "Certification", description: "Inputs and practices are verified. A digital certificate is created for the batch.", icon: <Award size={48} className="text-yellow-500" /> },
    { title: "Processing (Bundling/Sharding)", description: "Certified batches are processed (e.g., wheat to flour). Data is aggregated and linked to new product units.", icon: <Factory size={48} className="text-gray-600" /> },
    { title: "Consumer Access", description: "End product gets a unique ID (QR code). Consumers scan to view the full traceable history.", icon: <ScanLine size={48} className="text-blue-600" /> },
  ];

  // Blockchain-like visualization elements
  const blockchainElements = [
    { label: "Wheat Batch W1", data: "F1, P1", icon: <Wheat size={24} className="text-yellow-600" /> },
    { label: "Wheat Batch W2", data: "F2, P2", icon: <Wheat size={24} className="text-yellow-600" /> },
    { label: "Flour Batch C1", data: "W1+W2, F1, F2, P1, P2", icon: <Package size={24} className="text-orange-700" /> },
    { label: "Flour Pack C1.1", data: "Traceable to C1", icon: <Package size={24} className="text-orange-700" /> },
  ];

  return (
      // UPDATED section id to "how"
      <section id="how" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">How FieldFlow Works</h2>

          {/* Main Process Flow */}
          <div className="flex flex-col md:flex-row items-stretch justify-between space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 mb-16">
            {processStages.map((stage, index) => (
                <React.Fragment key={index}>
                  {/* Individual stage card */}
                  <div className="flex-1 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto md:mx-0">
                    <div className="mb-4">{stage.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">{stage.title}</h3>
                    <p className="text-gray-600">{stage.description}</p>
                  </div>
                  {/* Arrow separator for desktop */}
                  {index < processStages.length - 1 && (
                      <div className="hidden md:flex items-center text-gray-400 mx-2">
                        <ArrowRight size={32} />
                      </div>
                  )}
                  {/* Arrow separator for mobile */}
                  {index < processStages.length - 1 && (
                      <div className="md:hidden flex justify-center items-center text-gray-400 my-4">
                        <ArrowDown size={32} />
                      </div>
                  )}
                </React.Fragment>
            ))}
          </div>

          {/* Blockchain/Traceability Visualization */}
          <div className="mt-16 text-center mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">Ensuring Traceability</h3>
            {/* Grid for blockchain elements */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              {blockchainElements.map((element, index) => (
                  <React.Fragment key={element.label}>
                    {/* Individual blockchain element card */}
                    <div className="flex flex-col items-center p-4 border border-gray-300 bg-white rounded-lg shadow-sm min-w-[140px] md:min-w-[150px]">
                      <div className="mb-2">{element.icon}</div>
                      <span className="text-sm font-semibold text-gray-800">{element.label}</span>
                      <span className="text-xs text-gray-500 mt-1 text-center">Data: {element.data}</span>
                    </div>
                    {/* Link icon separator for desktop */}
                    {index < blockchainElements.length - 1 && (
                        <Link2 size={24} className="text-gray-400 mx-1 hidden md:inline-block" />
                        // Consider adding vertical separator for mobile if needed
                    )}
                  </React.Fragment>
              ))}
            </div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Each step generates a secure, linked record, creating a transparent and immutable history from field to final product.</p>
          </div>

          {/* NEW: Farmer/Certifier Platform Visualization */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-center mb-12 text-gray-700">The Certification Platform</h3>
            {/* Flex container for platform visualization */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">

              {/* Farmer Side */}
              <div className="flex flex-col items-center text-center px-4 max-w-xs">
                <User size={48} className="text-lime-700 mb-3" />
                <h4 className="text-lg font-semibold mb-1 text-gray-800">Farmers</h4>
                <p className="text-gray-600">Submit data, manage fields, request certification.</p>
              </div>

              {/* Arrow 1 (Mobile Down, Desktop Right) */}
              <div className="md:hidden text-gray-400"> <ArrowDown size={32} /> </div>
              <div className="hidden md:flex text-gray-400"> <ArrowRight size={32} /> </div>

              {/* Platform */}
              <div className="flex flex-col items-center text-center px-4 max-w-xs">
                <Laptop size={64} className="text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold mb-1 text-gray-800">FieldFlow Platform</h4>
                <p className="text-gray-600">Secure data storage, verification tools, certificate issuance.</p>
              </div>

              {/* Arrow 2 (Mobile Down, Desktop Right) */}
              <div className="md:hidden text-gray-400"> <ArrowDown size={32} /> </div>
              <div className="hidden md:flex text-gray-400"> <ArrowRight size={32} /> </div>

              {/* Certifier Side */}
              <div className="flex flex-col items-center text-center px-4 max-w-xs">
                <CheckSquare size={48} className="text-teal-600 mb-3" />
                <h4 className="text-lg font-semibold mb-1 text-gray-800">Certifiers</h4>
                <p className="text-gray-600">Access data, perform audits, approve certifications.</p>
              </div>

            </div>
            <p className="text-gray-600 mt-8 text-center max-w-3xl mx-auto">FieldFlow acts as the central hub, connecting farmers and certifiers for efficient, transparent, and reliable certification processes.</p>
          </div>

        </div>
      </section>
  );
};

// Component for the "Mission" section
const MissionSection = () => (
    <section id="mission" className="py-16 md:py-24 bg-green-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
          Improve the sustainability of <span className="font-bold text-yellow-300">1,000,000 hectares</span> of agriculture through complete product traceability.
        </p>
        {/* Consider adding an icon or image related to sustainability */}
      </div>
    </section>
);

// Component for the "Team" section
const TeamSection = () => {
  // Team member data
  const teamMembers = [
    { name: "Egor Emolaev", role: "Co-Founder (Tech)", description: "Doctoral Researcher in Blockchain. Member of the UNECE Task Force on Digitalization in Energy.", img: "https://placehold.co/150x150/e0e0e0/757575?text=Egor" },
    { name: "Howard MacLennan", role: "Co-Founder (Finance)", description: "Master in Finance and Economics specialising in Digital Transformations. ", img: "https://placehold.co/150x150/e0e0e0/757575?text=Howard" },
    { name: "Filippo Scalabrini", role: "Co-Founder (Legal)", description: "Bachelor in Law: transnational approach. Trainee in Embassy of the Grand-Duchy of Luxembourg in Dakar, Senegal.", img: "https://placehold.co/150x150/e0e0e0/757575?text=Filippo" },
  ];

  return (
      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Team</h2>
          {/* Grid layout for team members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  {/* Placeholder image for team member */}
                  {/* <img
                      src={member.img}
                      alt={`[Photo of ${member.name}]`}
                      className="w-32 h-32 rounded-full mb-4 object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/cccccc/969696?text=Photo+Unavailable'; }}
                  /> */}
                  <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                  {/* Display description if available */}
                  {member.description && <p className="text-sm text-gray-500 mt-1">{member.description}</p>}
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

// Component for the "Roadmap" section
const RoadmapSection = () => {
  // Roadmap milestones data
  const milestones = [
    { period: "Q4 2024", event: "Successful Ideation Camp" },
    { period: "Q1 2025", event: "Establish FieldFlow Foundation, Uni.lu VMS, Technoport Challenge" },
    { period: "Q2 2025", event: "Launch MVP FlowCert, First test clients (Senegal)" },
    { period: "Q3 2025", event: "Getting Fit4Start Ready, Incubate and sign paying clients" },
  ];

  return (
      <section id="roadmap" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Roadmap</h2>
          <div className="relative">
            {/* Timeline line (visible on medium screens and up) */}
            <div className="hidden md:block border-l-4 border-green-500 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>

            {/* Map through milestones to create timeline items */}
            {milestones.map((milestone, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Spacer div */}
                  <div className="order-1 md:w-5/12"></div>
                  {/* Timeline marker */}
                  <div className="z-20 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                  </div>
                  {/* Milestone card */}
                  <div className={`order-1 bg-white rounded-lg shadow-md md:w-5/12 px-6 py-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="text-green-600 font-semibold">{milestone.period}</p>
                    <h3 className="font-bold text-gray-800 text-lg">{milestone.event}</h3>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};


// Footer component
const Footer = () => {
  // Contact email data
  const contacts = [
    { name: "moien!", email: "moien@fieldflow.lu" },
  ];
  return (
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">FieldFlow | Sustainability through Traceability</p>
          {/* Display contact emails */}
          <div className="flex justify-center space-x-4 mb-4">
            {contacts.map(contact => (
                <a key={contact.name} href={`mailto:${contact.email}`} className="hover:text-white transition duration-300">{contact.email}</a>
            ))}
          </div>
          {/* Copyright and website link */}
          <p className="text-sm">&copy; {new Date().getFullYear()} FieldFlow. All rights reserved.</p>
          <p className="text-sm mt-1">
            <a href="https://fieldflow.lu" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
              fieldflow.lu
            </a>
          </p>
        </div>
      </footer>
  );
};


// Main application component
function App() {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links data - UPDATED href for "How It Works"
  const navLinks = [
    { href: "#how", label: "How It Works" }, // Changed href
    { href: "#mission", label: "Mission" },
    { href: "#team", label: "Team" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#contact", label: "Contact" },
  ];

  return (
      <div className="font-sans"> {/* Use sans-serif font */}
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo/Brand Name - UPDATED href */}
            <a href="/" className="text-2xl font-bold text-green-700">
              FieldFlow
            </a>
            {/* Mobile Menu Button (Burger) */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="text-gray-600 hover:text-green-600 transition duration-300">{link.label}</a>
              ))}
            </div>
          </div>
          {/* Mobile Menu (Dropdown) */}
          {isMenuOpen && (
              <div className="md:hidden bg-white py-2 px-4 border-t">
                {navLinks.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="block py-2 text-gray-600 hover:text-green-600"
                        onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    >
                      {link.label}
                    </a>
                ))}
              </div>
          )}
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20 md:py-32 text-center relative overflow-hidden">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          {/* Background image */}
          <img
              src="/background.jpeg" // Path relative to the public folder
              alt="Green agricultural field with glowing data lines at sunrise"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              // Fallback placeholder image
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1920x1080/cccccc/969696?text=Background+Image+Missing'; }}
          />
          {/* Hero content */}
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">FieldFlow</h1>
            <p className="text-xl md:text-2xl mb-8 font-light">Sustainability through Traceability</p>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Ensuring transparency in agricultural supply chains with modern technology.
            </p>
            {/* Call to action button - UPDATED href */}
            <a href="#how" // Changed href
                className="bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-lg shadow-md"
            >
              Learn More
            </a>
          </div>
        </header>

        {/* Main Content Area */}
        <main>
          {/* Problem/Solution Section */}
          <section id="problem-solution" className="py-16 md:py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              {/* Problem Description */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">The Problem of Transparency in Agribusiness</h2>
                <p className="text-lg text-gray-600 mb-4">Modern consumers increasingly care about the origin, sustainability, and safety of their food. However, complex supply chains often make this information inaccessible or unreliable.</p>
                <p className="text-lg text-gray-600">Lack of transparency prevents farmers from showcasing sustainable practices and consumers from making informed choices.</p>
              </div>
              {/* Solution Description */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">The FieldFlow Solution</h2>
                <p className="text-lg text-gray-600 mb-4">FieldFlow uses cutting-edge technology to create a digital product "passport," tracking its journey from field to shelf.</p>
                <p className="text-lg text-gray-600">We ensure the authenticity of data regarding origin, resources used, and farming methods, making the supply chain transparent for all participants.</p>
              </div>
            </div>
          </section>

          {/* Render other sections/components */}
          <HowItWorksSection />
          <MissionSection />
          <TeamSection />
          <RoadmapSection />
          {/* Use the imported CTA component */}
          <CallToActionSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
}

// Export the main App component
export default App;
