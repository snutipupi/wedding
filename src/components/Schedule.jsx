import { motion } from 'framer-motion';
import { ClockIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const Schedule = () => {
  const { translations } = useLanguage();

  const events = [
    {
      time: '16:00',
      title: translations.guestsArrival,
      description: translations.arrivalDesc,
    },
    {
      time: '17:00',
      title: translations.ceremony,
      description: translations.ceremonyDesc,
    },
    {
      time: '18:00',
      title: translations.cocktailPhotos,
      description: translations.cocktailDesc,
    },
    {
      time: '19:00',
      title: translations.dinner,
      description: translations.dinnerDesc,
    },
    {
      time: '20:00',
      title: translations.firstDance,
      description: translations.firstDanceDesc,
    },
    {
      time: '20:30',
      title: translations.party,
      description: translations.partyDesc,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-cormorant text-primary text-center mb-12">
            {translations.schedule}
          </h2>
          <div className="grid gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-6 rounded-lg bg-secondary border border-primary/10 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-[100px]">
                  <ClockIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-cormorant text-xl text-primary font-medium">
                    {event.time}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-cormorant text-xl text-accent mb-1">
                    {event.title}
                  </h3>
                  <p className="text-accent/70 font-montserrat text-sm">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
