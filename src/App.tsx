import { useState } from "react";
import svgPaths from "./imports/svg-y2wat2vlpu";
import imgTransparent1 from "figma:asset/5ef74198ad67c718c91b9a78597a8cedd15a1624.png";
import imgCircle1 from "figma:asset/550f01c01b948715ed86fa120eec8e3fa0a24635.png";
import imgProject11 from "figma:asset/c9815fbb26995539afc0f3dffe0d2bc422b2ed75.png";
import imgProject21 from "figma:asset/c20a2f2025a53659d40441aebdada181f84c7899.png";
import imgProject31 from "figma:asset/68bc0dd25e4b9857b037d33b4c2f6f10587c0938.png";
import { Menu, X } from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formResult, setFormResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormResult("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "8c5c51b8-c5ed-4046-8c61-604f75ef6e66");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setFormResult(data.success ? "Message sent successfully!" : "Error sending message. Please try again.");
    if (data.success) {
      (event.target as HTMLFormElement).reset();
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0b0b0b] z-50" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div className="flex items-center gap-8 lg:gap-12 h-16" style={{ marginRight: '120px' }}>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-gray-300 transition-colors hidden md:block"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '17px' }}
          >
            About me
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white hover:text-gray-300 transition-colors hidden md:block"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '17px' }}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-white hover:text-gray-300 transition-colors hidden md:block"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '17px' }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors hidden md:block"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '15px' }}
          >
            CONTACT ME
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0b0b0b] pb-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-white hover:bg-gray-800 px-4 py-3"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-white hover:bg-gray-800 px-4 py-3"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-white hover:bg-gray-800 px-4 py-3"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-white hover:bg-gray-800 px-4 py-3"
            >
              CONTACT ME
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#d7d7d7] min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Tilted Orange Rectangle - Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute origin-center"
            style={{
              width: '70%',
              height: '200%',
              right: '-10%',
              top: '-50%',
              transform: 'rotate(9.667deg)',
              backgroundColor: '#FBAD86'
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-[-10%] top-[-5%] w-[120%] md:w-[100%] lg:w-[80%] h-full">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-full aspect-square max-w-[600px] lg:max-w-[856px]" style={{ transform: 'translateY(250px)' }}>
                <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856 856">
                  <circle cx="428" cy="428" fill="#FFBB9A" r="428" />
                </svg>
              </div>
              <div className="absolute w-full max-w-[600px] lg:max-w-[857px]" style={{ top: '50px' }}>
                <img alt="" className="w-full h-auto" src={imgTransparent1} />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <div className="max-w-2xl" style={{ fontFamily: "'Raleway', sans-serif", marginTop: '100px' }}>
            <p className="text-black mb-1" style={{ fontWeight: 700, fontSize: '40px' }}>Hi, I am</p>
            <h1 className="text-black mb-0" style={{ fontWeight: 700, fontSize: '80px', lineHeight: '1', marginLeft: '20px' }}>
              Matheesha
            </h1>
            <h1 className="text-black mb-2" style={{ fontWeight: 700, fontSize: '80px', lineHeight: '1', marginLeft: '20px' }}>
              Pathirana
            </h1>
            <p className="text-[#909090]" style={{ fontWeight: 800, fontSize: '25px', marginLeft: '20px', marginBottom: '200px' }}>Back-end Developer</p>

            {/* Social Buttons */}
            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=100071367609736" target="_blank" rel="noopener noreferrer" className="bg-black rounded hover:bg-gray-800 transition-colors flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_3_1630)">
                    <path d={svgPaths.p24dd3180} fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_1630">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/matheesha-pathirana" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded hover:bg-black hover:text-white transition-colors group flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                <svg className="w-6 h-6" viewBox="0 0 640 640">
                  <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" fill="black" className="group-hover:fill-white" />
                </svg>
              </a>
              <a href="https://x.com/matheesha_pathi" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded hover:bg-black hover:text-white transition-colors group flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_1_804)">
                    <path d={svgPaths.p208c440} fill="black" className="group-hover:fill-white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_804">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://discord.com/users/975373598778875924" className="border-2 border-black rounded hover:bg-black hover:text-white transition-colors group flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                <svg className="w-6 h-5" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26 20">
                  <path d={svgPaths.p1dc26480} fill="black" className="group-hover:fill-white" />
                </svg>
              </a>
              <a href="https://www.reddit.com/user/matheesha-pathirana" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded hover:bg-black hover:text-white transition-colors group flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                <svg className="w-6 h-6" viewBox="0 0 640 640">
                  <path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576L101.1 576C87.4 576 80.6 559.5 90.2 549.8L139 501C92.7 454.7 64 390.7 64 320zM413.6 217.6C437.2 217.6 456.3 198.5 456.3 174.9C456.3 151.3 437.2 132.2 413.6 132.2C393 132.2 375.8 146.8 371.8 166.2C337.3 169.9 310.4 199.2 310.4 234.6L310.4 234.8C272.9 236.4 238.6 247.1 211.4 263.9C201.3 256.1 188.6 251.4 174.9 251.4C141.9 251.4 115.1 278.2 115.1 311.2C115.1 335.2 129.2 355.8 149.5 365.3C151.5 434.7 227.1 490.5 320.1 490.5C413.1 490.5 488.8 434.6 490.7 365.2C510.9 355.6 524.8 335 524.8 311.2C524.8 278.2 498 251.4 465 251.4C451.3 251.4 438.7 256 428.6 263.8C401.2 246.8 366.5 236.1 328.6 234.7L328.6 234.5C328.6 209.1 347.5 188 372 184.6C376.4 203.4 393.3 217.4 413.5 217.4L413.6 217.6zM241.1 310.9C257.8 310.9 270.6 328.5 269.6 350.2C268.6 371.9 256.1 379.8 239.3 379.8C222.5 379.8 207.9 371 208.9 349.3C209.9 327.6 224.3 311 241 311L241.1 310.9zM431.2 349.2C432.2 370.9 417.5 379.7 400.8 379.7C384.1 379.7 371.5 371.8 370.5 350.1C369.5 328.4 382.3 310.8 399 310.8C415.7 310.8 430.2 327.4 431.1 349.1L431.2 349.2zM383.1 405.9C372.8 430.5 348.5 447.8 320.1 447.8C291.7 447.8 267.4 430.5 257.1 405.9C255.9 403 257.9 399.7 261 399.4C279.4 397.5 299.3 396.5 320.1 396.5C340.9 396.5 360.8 397.5 379.2 399.4C382.3 399.7 384.3 403 383.1 405.9z" fill="black" className="group-hover:fill-white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black py-12 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-white text-center mb-8 md:mb-12">
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '48px' }}>My </span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px' }}>Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Git */}
            <div className="bg-white border-2 border-black rounded flex flex-col items-center justify-center gap-4 flex-none" style={{ width: '186px', height: '186px' }}>
              <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                <path d={svgPaths.p22f18480} fill="black" />
              </svg>
              <p className="text-center text-black" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '20px' }}>Git</p>
            </div>

            {/* JavaScript */}
            <div className="bg-white border-2 border-black rounded flex flex-col items-center justify-center gap-4 flex-none" style={{ width: '186px', height: '186px' }}>
              <svg className="w-14 h-14 md:w-16 md:h-16" fill="none" preserveAspectRatio="none" viewBox="0 0 56  56">
                <path d={svgPaths.p1e87680} fill="black" />
              </svg>
              <p className="text-center text-black" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '20px' }}>JavaScript</p>
            </div>

            {/* Python */}
            <div className="bg-white border-2 border-black rounded flex flex-col items-center justify-center gap-4 flex-none" style={{ width: '186px', height: '186px' }}>
              <svg className="w-14 h-14 md:w-16 md:h-16" fill="none" preserveAspectRatio="none" viewBox="0 0 59 58">
                <path d={svgPaths.p3be0de00} fill="black" />
              </svg>
              <p className="text-center text-black" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '20px' }}>Python</p>
            </div>

            {/* Java */}
            <div className="bg-white border-2 border-black rounded flex flex-col items-center justify-center gap-4 flex-none" style={{ width: '186px', height: '186px' }}>
              <svg className="w-12 h-16 md:w-14 md:h-18" fill="none" preserveAspectRatio="none" viewBox="0 0 51 69">
                <path d={svgPaths.p25e5ddc0} fill="black" />
              </svg>
              <p className="text-center text-black" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '20px' }}>Java</p>
            </div>

            {/* HTML */}
            <div className="bg-white border-2 border-black rounded flex flex-col items-center justify-center gap-4 flex-none" style={{ width: '186px', height: '186px' }}>
              <svg className="w-11 h-13 md:w-12 md:h-14" fill="none" preserveAspectRatio="none" viewBox="0 0 46 54">
                <path d={svgPaths.p1566cd80} fill="black" />
              </svg>
              <p className="text-center text-black" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '20px' }}>HTML</p>
            </div>

            {/* CSS */}
            <div className="bg-white border-2 border-black rounded flex flex-col items-center justify-center gap-4 flex-none" style={{ width: '186px', height: '186px' }}>
              <svg className="w-12 h-12 md:w-14 md:h-14" fill="none" preserveAspectRatio="none" viewBox="0 0 50 51">
                <path d={svgPaths.p17b57b00} fill="black" />
              </svg>
              <p className="text-center text-black" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '20px' }}>CSS</p>
            </div>

            {/* MySQL */}
            <div className="bg-white border-2 border-black rounded flex flex-col items-center justify-center gap-4 flex-none" style={{ width: '186px', height: '186px' }}>
              <svg className="w-14 h-16 md:w-16 md:h-18" fill="none" preserveAspectRatio="none" viewBox="0 0 57 64">
                <path d={svgPaths.p29b29580} fill="black" />
              </svg>
              <p className="text-center text-black" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '20px' }}>MySQL</p>
            </div>

            {/* C */}
            <div className="bg-white border-2 border-black rounded flex flex-col items-center justify-center gap-4 flex-none" style={{ width: '186px', height: '186px' }}>
              <svg className="w-13 h-15 md:w-14 md:h-16" fill="none" preserveAspectRatio="none" viewBox="0 0 52 60">
                <path d={svgPaths.p1cd680} fill="black" />
              </svg>
              <p className="text-center text-black" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '20px' }}>C</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#d7d7d7] py-8 md:py-12 lg:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-auto flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[482px] lg:h-[482px] rounded-full overflow-hidden flex-shrink-0">
                <img alt="Profile" className="w-full h-full object-cover" src={imgCircle1} />
              </div>
            </div>

            <div className="w-full lg:flex-1">
              <h2 className="text-black mb-6 text-center lg:text-left">
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '48px' }}>About </span>
                <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px' }}>Me</span>
              </h2>

              <div className="text-zinc-500 space-y-4 mb-8">
                <p>
                  I'm an undergraduate with a strong interest in backend development, AI, and cloud technologies. I work with Python, Java, JavaScript, HTML, CSS, and MySQL, and I have a solid foundation in data structures and Java OOP.
                </p>
                <p>
                  I'm currently building my skills in backend engineering while learning Python-based AI development and exploring how cloud platforms can support scalable applications.
                </p>
                <p>
                  I aim to become a capable software engineer who can build efficient, well-structured systems. I'm also looking for an internship where I can apply what I've learned, gain real-world experience, and continue growing as a developer.
                </p>
              </div>

              <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors mx-auto lg:mx-0">
                <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
                  <path d="M10.0002 12.791L10.0002 0.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p31fcc480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p21aeb580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="bg-black py-8 md:py-12 lg:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-white text-center mb-8 md:mb-16">
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '48px' }}>My </span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px' }}>Projects</span>
          </h2>

          {/* Project 1 */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12 lg:mb-20">
            <div className="w-full lg:w-1/2">
              <img alt="Track n Go" className="w-full h-auto rounded-lg" src={imgProject11} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <p className="text-white mb-4 md:mb-6" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px' }}>01</p>
              <h3 className="text-white mb-4" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '32px' }}>Track n Go (Logistics Management System)</h3>
              <p className="text-zinc-500 mb-6" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '18px' }}>
                A Java Swing application developed to automate logistics operations, including shipment management, delivery scheduling, personnel tracking, real-time updates, and generating performance reports.
              </p>
              <a href="https://github.com/matheeshapathirana/track-n-go" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors self-start">
                <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p2cc25780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p5027180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pac8ca00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-10 mb-12 lg:mb-20">
            <div className="w-full lg:w-1/2">
              <img alt="Flixer" className="w-full h-auto rounded-lg" src={imgProject21} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <p className="text-white mb-4 md:mb-6" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px' }}>02</p>
              <h3 className="text-white mb-4" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '32px' }}>Flixer (Java Android App)</h3>
              <p className="text-zinc-500 mb-6" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '18px' }}>
                Flixer is a Java-based Android application that lets users add movies and series to a personalized watchlist. It allows users to track what they're watching, manage their list, and quickly access details in a clean and simple interface.
              </p>
              <a href="https://github.com/matheeshapathirana/Flixer" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors self-start">
                <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p2cc25780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p5027180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pac8ca00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            <div className="w-full lg:w-1/2">
              <img alt="Deskshop" className="w-full h-auto rounded-lg" src={imgProject31} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <p className="text-white mb-4 md:mb-6" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px' }}>03</p>
              <h3 className="text-white mb-4" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '32px' }}>Deskshop (E-Commerce Website)</h3>
              <p className="text-zinc-500 mb-6" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '18px' }}>
                Deskshop is an e-commerce website built with web technologies. It includes product listings, cart functionality, user-friendly navigation, and basic backend logic to simulate real online shopping workflows.
              </p>
              <a href="https://github.com/matheeshapathirana/DeskShop-WAD-Assignment" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors self-start">
                <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p2cc25780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p5027180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pac8ca00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-12 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <form onSubmit={onSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full border-[1.4px] border-black rounded px-6 py-4 text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '16px' }}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-[1.4px] border-black rounded px-6 py-4 text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '16px' }}
                  required
                />
                <textarea
                  name="message"
                  placeholder="How can I help?*"
                  rows={5}
                  className="w-full border-[1.4px] border-black rounded px-6 py-4 text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '16px' }}
                  required
                />

                {formResult && (
                  <p className={formResult.includes("success") ? "text-green-600 font-medium" : formResult === "Sending..." ? "text-gray-600" : "text-red-600 font-medium"}>
                    {formResult}
                  </p>
                )}

                <div className="flex flex-wrap gap-6 items-center">
                  <button 
                    type="submit"
                    className="bg-black text-white px-8 rounded hover:bg-gray-800 transition-colors"
                    style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '20px', height: '56px' }}
                  >
                    Get In Touch
                  </button>

                  <div className="flex gap-6">
                    <a href="https://www.facebook.com/profile.php?id=100071367609736" target="_blank" rel="noopener noreferrer" className="bg-black rounded hover:bg-gray-800 transition-colors flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                      <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g clipPath="url(#clip0_contact_fb)">
                          <path d={svgPaths.p24dd3180} fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_contact_fb">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/matheesha-pathirana" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded hover:bg-black hover:text-white transition-colors group flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                      <svg className="w-6 h-6" viewBox="0 0 640 640">
                        <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" fill="black" className="group-hover:fill-white" />
                      </svg>
                    </a>
                    <a href="https://x.com/matheesha_pathi" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded hover:bg-black hover:text-white transition-colors group flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                      <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g clipPath="url(#clip0_contact_x)">
                          <path d={svgPaths.p208c440} fill="black" className="group-hover:fill-white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_contact_x">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href="https://discord.com/users/975373598778875924" className="border-2 border-black rounded hover:bg-black hover:text-white transition-colors group flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                      <svg className="w-6 h-5" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26 20">
                        <path d={svgPaths.p1dc26480} fill="black" className="group-hover:fill-white" />
                      </svg>
                    </a>
                    <a href="https://www.reddit.com/user/matheesha-pathirana" target="_blank" rel="noopener noreferrer" className="border-2 border-black rounded hover:bg-black hover:text-white transition-colors group flex items-center justify-center" style={{ width: '56px', height: '56px' }}>
                      <svg className="w-6 h-6" viewBox="0 0 640 640">
                        <path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576L101.1 576C87.4 576 80.6 559.5 90.2 549.8L139 501C92.7 454.7 64 390.7 64 320zM413.6 217.6C437.2 217.6 456.3 198.5 456.3 174.9C456.3 151.3 437.2 132.2 413.6 132.2C393 132.2 375.8 146.8 371.8 166.2C337.3 169.9 310.4 199.2 310.4 234.6L310.4 234.8C272.9 236.4 238.6 247.1 211.4 263.9C201.3 256.1 188.6 251.4 174.9 251.4C141.9 251.4 115.1 278.2 115.1 311.2C115.1 335.2 129.2 355.8 149.5 365.3C151.5 434.7 227.1 490.5 320.1 490.5C413.1 490.5 488.8 434.6 490.7 365.2C510.9 355.6 524.8 335 524.8 311.2C524.8 278.2 498 251.4 465 251.4C451.3 251.4 438.7 256 428.6 263.8C401.2 246.8 366.5 236.1 328.6 234.7L328.6 234.5C328.6 209.1 347.5 188 372 184.6C376.4 203.4 393.3 217.4 413.5 217.4L413.6 217.6zM241.1 310.9C257.8 310.9 270.6 328.5 269.6 350.2C268.6 371.9 256.1 379.8 239.3 379.8C222.5 379.8 207.9 371 208.9 349.3C209.9 327.6 224.3 311 241 311L241.1 310.9zM431.2 349.2C432.2 370.9 417.5 379.7 400.8 379.7C384.1 379.7 371.5 371.8 370.5 350.1C369.5 328.4 382.3 310.8 399 310.8C415.7 310.8 430.2 327.4 431.1 349.1L431.2 349.2zM383.1 405.9C372.8 430.5 348.5 447.8 320.1 447.8C291.7 447.8 267.4 430.5 257.1 405.9C255.9 403 257.9 399.7 261 399.4C279.4 397.5 299.3 396.5 320.1 396.5C340.9 396.5 360.8 397.5 379.2 399.4C382.3 399.7 384.3 403 383.1 405.9z" fill="black" className="group-hover:fill-white" />
                      </svg>
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="space-y-6 md:space-y-10">
                <div>
                  <h2 className="text-black mb-6 leading-tight">
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px' }}>Let’s </span>
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px', WebkitTextStroke: '1px black', WebkitTextFillColor: 'transparent', letterSpacing: '0.04em' }}>talk</span>
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px' }}> for</span>
                    <br />
                    <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '48px' }}>Something special</span>
                  </h2>
                </div>

                <p className="text-zinc-500" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400, fontSize: '16px' }}>
                  I'm focused on developing strong backend solutions and exploring AI and cloud technologies, always challenging myself to think beyond the basics and deliver meaningful results.
                </p>

                <a href="mailto:pathiranamatheesha@gmail.com" className="text-black break-all hover:underline" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '28px' }}>pathiranamatheesha@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 md:py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-center gap-2 mx-auto mb-6 hover:opacity-80 transition-opacity"
          >
            <svg className="w-4 h-4" style={{ transform: 'rotate(-90deg)' }} fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p56cf9b0} fill="white" />
              <path d={svgPaths.p206fc480} fill="white" />
            </svg>
            <span className="text-white tracking-widest">BACK TO TOP</span>
          </button>

          <p className="text-white text-center">
            © 2025 Matheesha Pathirana. <span className="font-normal">All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
