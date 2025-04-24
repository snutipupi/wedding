import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Venue = () => {
  const { translations } = useLanguage();

  return (
    <section className="py-20 bg-secondary" >
      <div className="container px-4 mx-auto" id="locatie">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="mb-12 text-4xl text-center font-cormorant text-primary">
            {translations.location}
          </h2>
          <div className="mb-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="rounded-lg shadow-xl aspect-[2/3] max-w-lg mx-auto"
            >
              <SwiperSlide>
                <img
                  src="/wedding/venue1.jpg"
                  alt="Venue 1"
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/wedding/venue2.jpg"
                  alt="Venue 2"
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/wedding/venue3.jpg"
                  alt="Venue 3"
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mb-8 text-center">
            <p className="text-xl font-cormorant text-accent">
              {translations.venueDescription}
              <br />
              <span className="text-2xl font-semibold">
                {translations.venueName}
              </span>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.2017872716924!2d28.975887976122944!3d47.055891871144645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c96500067acae1%3A0xd9e21446346f8d6d!2sEco%20Cabana%20la%20Bude%C8%99ti!5e0!3m2!1sru!2s!4v1745322728953!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
