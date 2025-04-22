import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const DressCode = () => {
  const { translations } = useLanguage();

  const forbiddenColors = [
    { name: translations.colorWhite, color: '#FFFFFF', border: true },
    { name: translations.colorBlack, color: '#000000' },
    { name: translations.colorRed, color: '#FF0000' },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-cormorant text-primary mb-8">
            {translations.dressCode}
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-cormorant text-accent mb-6">
              {translations.dressCodeTitle}
            </h3>
            
            <p className="text-lg text-accent/80 font-montserrat mb-8">
              {translations.dressCodeDescription}
            </p>

            <div className="text-left mb-12">
              {translations.dressCodeSuggestions.split('\\n').map((line, i) => (
                <p key={i} className="mb-2 text-accent/80 font-montserrat">
                  {line}
                </p>
              ))}
            </div>

            <div className="border-t border-primary/10 pt-8">
              <h4 className="text-xl font-cormorant text-accent mb-4">
                {translations.forbiddenColors}
              </h4>
              <div className="flex justify-center gap-4">
                {forbiddenColors.map((color, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className={`w-12 h-12 rounded-full mx-auto mb-2 ${color.border ? 'border border-gray-300' : ''}`}
                      style={{ backgroundColor: color.color }}
                    />
                    <span className="text-sm font-montserrat text-accent/70">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;
