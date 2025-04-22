import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  ro: {
    weAreGettingMarried: "Ne căsătorim!",
    dearGuests: "DRAGI OASPEȚI!",
    invitation: "Vă invităm să împărtășiți cu noi bucuria unei zile de neuitat - ziua nunții noastre!",
    june: "IUNIE",
    location: "LOCAȚIA",
    schedule: "PROGRAM",
    dressCode: "DRESS CODE",
    // Venue translations
    venueDescription: "Vă așteptăm la",
    venueName: "Eco Cabana Budești",
    // Schedule translations
    guestsArrival: "Primirea oaspeților",
    ceremony: "Ceremonia",
    cocktailPhotos: "Cocktail & Fotografii",
    dinner: "Cina",
    firstDance: "Primul dans",
    party: "Petrecerea",
    arrivalDesc: "Începem să primim oaspeții",
    ceremonyDesc: "Ceremonia civilă",
    cocktailDesc: "Timp pentru fotografii și socializare",
    dinnerDesc: "Servirea cinei festive",
    firstDanceDesc: "Primul dans al mirilor",
    partyDesc: "Muzică, dans și distracție",
    // Dress code translations
    dressCodeTitle: "Cocktail Party Lejer de Plajă",
    dressCodeDescription: "Vă invităm să purtați ținute lejere și elegante, potrivite pentru o atmosferă relaxată de vară la malul lacului. Optați pentru materiale ușoare și culori pastelate sau aprinse care reflectă spiritul sărbătoresc al evenimentului.",
    dressCodeSuggestions: "Sugestii de ținute:\n• Rochii sau costume în culori pastelate sau aprinse\n• Materiale lejere precum in sau bumbac\n• Încălțăminte comodă, potrivită pentru iarbă\n• Accesorii simple și elegante",
    forbiddenColors: "Culori de evitat:",
    colorWhite: "Alb",
    colorBlack: "Negru",
    colorRed: "Roșu"
  },
  ru: {
    weAreGettingMarried: "Мы женимся!",
    dearGuests: "ДОРОГИЕ ГОСТИ!",
    invitation: "Мы будем рады разделить с вами радость незабываемого для нас дня - дня нашей свадьбы!",
    june: "ИЮНЬ",
    location: "ЛОКАЦИЯ",
    schedule: "ПРОГРАММА",
    dressCode: "ДРЕСС-КОД",
    // Venue translations
    venueDescription: "Ждём вас в",
    venueName: "Эко Кабана Будешть",
    // Schedule translations
    guestsArrival: "Встреча гостей",
    ceremony: "Церемония",
    cocktailPhotos: "Коктейль и фотосессия",
    dinner: "Ужин",
    firstDance: "Первый танец",
    party: "Праздник",
    arrivalDesc: "Начинаем встречать гостей",
    ceremonyDesc: "Церемония бракосочетания",
    cocktailDesc: "Время для фотографий и общения",
    dinnerDesc: "Праздничный ужин",
    firstDanceDesc: "Первый танец молодоженов",
    partyDesc: "Музыка, танцы и веселье",
    // Dress code translations
    dressCodeTitle: "Легкий Пляжный Коктейль",
    dressCodeDescription: "Приглашаем вас надеть легкие и элегантные наряды, подходящие для расслабленной летней атмосферы у озера. Выбирайте легкие ткани и пастельные или яркие цвета, отражающие праздничный дух мероприятия.",
    dressCodeSuggestions: "Рекомендации по одежде:\n• Платья или костюмы пастельных или ярких цветов\n• Легкие ткани, такие как лен или хлопок\n• Удобная обувь, подходящая для травы\n• Простые и элегантные аксессуары",
    forbiddenColors: "Цвета, которых следует избегать:",
    colorWhite: "Белый",
    colorBlack: "Черный",
    colorRed: "Красный"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ro');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ro' ? 'ru' : 'ro');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
