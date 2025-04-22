import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { translations, toggleLanguage } = useLanguage();

  const menuItems = [
    { title: translations.schedule, href: '#program' },
    { title: translations.location, href: '#locatie' },
    { title: translations.dressCode, href: '#dresscode' },
  ];

  return (
    <section className="h-screen w-full relative">
      {/* Navigation Menu */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent">
        <nav className="flex items-center py-4 px-6">
          <div className="w-20">
            {/* Logo or empty space */}
          </div>
          
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center gap-5">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white/90 hover:text-white font-cormorant text-sm uppercase tracking-wider transition-colors whitespace-nowrap drop-shadow-md"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-20 flex justify-end">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-white/90 hover:text-white font-cormorant text-sm uppercase tracking-wide border border-white/20 hover:border-white/40 rounded transition-colors drop-shadow-md"
            >
              RO / RU
            </button>
          </div>
        </nav>
      </div>

      {/* Background Image with enhanced overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="/couple-placeholder.jpg"
          alt="Couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-cormorant text-white mb-4 drop-shadow-lg [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)]">
                {translations.dearGuests}
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 font-montserrat mb-12 drop-shadow-lg [text-shadow:_1px_1px_8px_rgb(0_0_0_/_40%)]">
                {translations.invitation}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
