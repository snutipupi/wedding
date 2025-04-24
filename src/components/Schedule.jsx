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
    <section className="py-20 bg-white" >
      <div className="container px-4 mx-auto" id="program">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-12 text-4xl text-center font-cormorant text-primary">
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
                className="flex items-start gap-6 p-6 transition-colors border rounded-lg bg-secondary border-primary/10 hover:border-primary/20"
              >
                <div className="flex items-center gap-3 min-w-[100px]">
                  <ClockIcon className="flex-shrink-0 w-5 h-5 text-primary" />
                  <span className="text-xl font-medium font-cormorant text-primary">
                    {event.time}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-cormorant text-accent">
                    {event.title}
                  </h3>
                  <p className="text-sm text-accent/70 font-montserrat">
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
