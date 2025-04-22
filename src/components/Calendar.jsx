import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Calendar = () => {
  const { translations } = useLanguage();

  return (
    <section className="py-20 bg-white" id="calendar">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-cormorant text-primary mb-12">
            {translations.june}
          </h2>
          <div className="flex justify-center gap-8 text-3xl">
            <div className="w-40 h-40 flex items-center justify-center border border-primary/20 font-cormorant hover:border-primary/40 transition-colors bg-white/80 backdrop-blur-sm shadow-lg">
              <span className="text-4xl text-primary">29</span>
            </div>
            <div className="w-40 h-40 flex items-center justify-center border-2 border-selected bg-selected/5 font-cormorant font-semibold text-selected hover:bg-selected/10 transition-colors shadow-lg">
              <span className="text-4xl">30</span>
            </div>
            <div className="w-40 h-40 flex items-center justify-center border border-primary/20 font-cormorant hover:border-primary/40 transition-colors bg-white/80 backdrop-blur-sm shadow-lg">
              <span className="text-4xl text-primary">1</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calendar;
