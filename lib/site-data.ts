export const locales = ["en", "nl"] as const;
export type Locale = (typeof locales)[number];

export const company = {
  brandName: "Sodjo Tours",
  email: "", // TODO: add launch contact email
  whatsapp: "", // TODO: add WhatsApp number with country code
  instagram: "",
  pickupArea: "Accommodation in and around Paramaribo",
};

export type Tour = {
  id: string; slug: string; category: "fishing" | "jungle" | "wildlife" | "expedition";
  name: string; durationDays: number; durationNights: number; location: string;
  minGuests: number | null; maxGuests: number | null; difficulty: string; price: number | null;
  currency: "EUR"; featured: boolean; active: boolean; gallery: string[];
  highlights: string[]; included: string[]; excluded: string[];
  itinerary: { day: string; title: string; items: string[] }[];
};

export const tours: Tour[] = [{
  id: "brokopondo-fishing-expedition", slug: "brokopondo-fishing-expedition", category: "fishing",
  name: "Brokopondo Fishing Expedition", durationDays: 2, durationNights: 1,
  location: "Brokopondo Reservoir, Suriname", minGuests: null, maxGuests: null,
  difficulty: "Easy to moderate", price: null, currency: "EUR", featured: true, active: true,
  gallery: ["/images/brokopondo-hero.png"],
  highlights: ["Fish the Brokopondo Reservoir", "Overnight on a private island", "Local guide on the water", "Wake up on the reservoir", "Small-group experience"],
  included: ["Accommodation pickup & return", "Road and boat transport", "Local fishing guide", "Hammock camp setup", "Meals and drinking water"],
  excluded: ["Alcohol", "Personal travel insurance", "Personal expenses"],
  itinerary: [
    { day: "Day 01", title: "City to reservoir", items: ["Pickup from your accommodation", "Travel toward Brokopondo", "Boat transfer and fishing session", "Arrive at Sodjo Island", "Local meal, sunset and hammock setup"] },
    { day: "Day 02", title: "First light on the water", items: ["Early breakfast", "Sunrise fishing", "Explore additional fishing locations", "Lunch and return boat trip", "Transport back to your accommodation"] },
  ],
}];

export const species = [
  { name: "Toekanari", alt: "Peacock bass", note: "Species information remains editable and will be verified before detailed publication." },
  { name: "Piranha", alt: "", note: "Wildlife encounters and catches always depend on season, location and conditions." },
];

export const guides = [
  { id: "ben", name: "Ben", role: "Local guide", bio: "Profile details to be added.", languages: [], specialties: [] },
  { id: "jay", name: "Jay", role: "Local guide", bio: "Profile details to be added.", languages: [], specialties: [] },
];

const en = {
  nav: { tours: "Tours", experience: "The experience", island: "Sodjo Island", about: "About", faq: "FAQ", contact: "Contact", book: "Book your adventure", gallery: "Field notes" },
  hero: { eyebrow: "Suriname fishing expeditions", title: "Into Brokopondo.\nBeyond the ordinary.", copy: "Multi-day fishing adventures deep in Suriname's Brokopondo Reservoir. Local guides, island camping, meals and transport included.", explore: "Explore the fishing tour", plan: "Plan your trip" },
  home: {
    introEyebrow: "The long way in", introTitle: "This isn’t a day trip.", introCopy: "Leave Paramaribo behind, cross the reservoir by boat and spend the night where the water meets the forest. It is fishing, camping and local knowledge in one unhurried journey.",
    journeyEyebrow: "The route", journeyTitle: "From city streets to first light.",
    tourEyebrow: "Featured expedition", tourTitle: "Brokopondo Fishing Expedition", request: "Request this tour", details: "Tour details", islandEyebrow: "Sodjo Island", islandTitle: "Your base in the middle of Brokopondo.", islandCopy: "A private family island becomes your pause between casts: hammocks, local food, firelight and the sound of the reservoir at night.", islandLink: "Discover Sodjo Island",
  },
  tour: { location: "Location", duration: "Duration", group: "Group size", difficulty: "Difficulty", level: "Fishing level", request: "Request availability", whatsapp: "Ask on WhatsApp", summary: "A two-day fishing and island-camping expedition for curious first-timers and seasoned anglers alike.", itinerary: "A working itinerary", itineraryNote: "Timing and operational details are intentionally editable and confirmed before departure.", included: "What may be included", excluded: "Usually not included", species: "The water has its own plans.", speciesCopy: "You may encounter these species while fishing Brokopondo. A catch is never guaranteed.", prepare: "Prepare for the wild", prepareCopy: "Exact safety arrangements and recommendations are confirmed with every booking.", bring: "What to bring" },
  book: { eyebrow: "Request an expedition", title: "Start the conversation.", copy: "Tell us how you want to experience Brokopondo. We will confirm availability and final trip details before anything is booked.", submit: "Send adventure request", success: "Your adventure request has been received.", successCopy: "We’ll review your preferred date and contact you to confirm availability and final details.", note: "This V1 form records your request in this browser only until email or booking service is connected." },
  form: { date: "Preferred date", guests: "Guests", select: "Select", guest1: "1 guest", guest2: "2 guests", guest34: "3–4 guests", guest5: "5+ guests", level: "Fishing experience", selectLevel: "Select your level", never: "Never fished before", beginner: "Beginner", recreational: "Recreational", experienced: "Experienced", pickup: "Accommodation / pickup location", pickupPlaceholder: "Hotel, address or area", name: "Name", email: "Email", phone: "Phone / WhatsApp", country: "Country", notes: "Additional notes", notesPlaceholder: "Anything you'd like us to know?" },
  contact: { eyebrow: "Contact", title: "Talk to the people behind the trip.", copy: "For questions, private trips or a little help planning, send a message. Contact details will appear here once configured.", subject: "How can we help?" },
  faq: { eyebrow: "Before you go", title: "Questions, answered carefully." },
};

const nl: typeof en = {
  nav: { tours: "Tours", experience: "De ervaring", island: "Sodjo Island", about: "Over ons", faq: "FAQ", contact: "Contact", book: "Boek je avontuur", gallery: "Op pad" },
  hero: { eyebrow: "Visexpedities in Suriname", title: "Brokopondo in.\nVoorbij het gewone.", copy: "Meerdaagse visavonturen op het Brokopondo-stuwmeer. Met lokale gidsen, een overnachting op het eiland, maaltijden en vervoer.", explore: "Bekijk de visexpeditie", plan: "Plan je reis" },
  home: { introEyebrow: "De reis ernaartoe", introTitle: "Dit is geen dagtrip.", introCopy: "Je laat Paramaribo achter je, steekt het stuwmeer per boot over en slaapt waar het water overgaat in het bos. Vissen, kamperen en lokale kennis komen hier samen in één rustige reis.", journeyEyebrow: "De route", journeyTitle: "Van de stad naar het eerste licht.", tourEyebrow: "Uitgelichte expeditie", tourTitle: "Brokopondo Visexpeditie", request: "Vraag deze tour aan", details: "Bekijk de expeditie", islandEyebrow: "Sodjo Island", islandTitle: "Je uitvalsbasis midden in Brokopondo.", islandCopy: "Een privé-eiland van de familie wordt je rustpunt tussen het vissen door: hangmatten, lokaal eten, vuurlicht en het geluid van het stuwmeer in de nacht.", islandLink: "Ontdek Sodjo Island" },
  tour: { location: "Locatie", duration: "Duur", group: "Groepsgrootte", difficulty: "Moeilijkheid", level: "Visniveau", request: "Beschikbaarheid aanvragen", whatsapp: "Vraag via WhatsApp", summary: "Een tweedaagse vis- en eilandkampeerexpeditie voor nieuwsgierige beginners én ervaren vissers.", itinerary: "Een flexibele reisindeling", itineraryNote: "Tijden en operationele details zijn bewust bewerkbaar en worden vóór vertrek bevestigd.", included: "Mogelijk inbegrepen", excluded: "Meestal niet inbegrepen", species: "Het water heeft zijn eigen plan.", speciesCopy: "Tijdens het vissen op Brokopondo kun je deze soorten tegenkomen. Een vangst is nooit gegarandeerd.", prepare: "Klaar voor buiten", prepareCopy: "De exacte veiligheidsafspraken en adviezen worden bij elke boeking bevestigd.", bring: "Wat neem je mee" },
  book: { eyebrow: "Expeditie aanvragen", title: "Begin het gesprek.", copy: "Vertel ons hoe je Brokopondo wilt beleven. Wij bevestigen de beschikbaarheid en de definitieve details voordat je iets vastlegt.", submit: "Stuur aanvraag", success: "Je aanvraag is ontvangen.", successCopy: "We bekijken je voorkeursdatum en nemen contact op om de beschikbaarheid en details te bevestigen.", note: "Dit V1-formulier bewaart je aanvraag alleen in deze browser totdat er een e-mail- of boekingsdienst is gekoppeld." },
  form: { date: "Gewenste datum", guests: "Aantal gasten", select: "Kies", guest1: "1 gast", guest2: "2 gasten", guest34: "3–4 gasten", guest5: "5+ gasten", level: "Viservaring", selectLevel: "Kies je niveau", never: "Nog nooit gevist", beginner: "Beginner", recreational: "Hobbyvisser", experienced: "Ervaren visser", pickup: "Accommodatie / ophaallocatie", pickupPlaceholder: "Hotel, adres of buurt", name: "Naam", email: "E-mail", phone: "Telefoon / WhatsApp", country: "Land", notes: "Extra informatie", notesPlaceholder: "Is er iets dat we moeten weten?" },
  contact: { eyebrow: "Contact", title: "Praat met de mensen achter de reis.", copy: "Voor vragen, privéreizen of hulp bij het plannen kun je een bericht sturen. Contactgegevens verschijnen hier zodra ze zijn ingesteld.", subject: "Waarmee kunnen we helpen?" },
  faq: { eyebrow: "Voor vertrek", title: "Vragen, zorgvuldig beantwoord." },
};
export const dictionary = { en, nl };
export type Dictionary = typeof en;

export const journey = {
  en: [
  ["01", "We pick you up", "Pickup at your accommodation around Paramaribo."], ["02", "Into Brokopondo", "Travel toward the reservoir."], ["03", "Onto the water", "Meet the guide and continue by boat."], ["04", "Fish the reservoir", "Explore fishing spots around Brokopondo."], ["05", "Sodjo Island", "Arrive, eat and prepare camp."], ["06", "Sleep in the wild", "Rest in a hammock surrounded by nature."], ["07", "Sunrise fishing", "Return to the water at first light."], ["08", "Back to Paramaribo", "Return after the experience."],
  ],
  nl: [
    ["01", "We halen je op", "We halen je op bij je accommodatie in of rond Paramaribo."], ["02", "Op weg naar Brokopondo", "We rijden richting het stuwmeer."], ["03", "Het water op", "Je ontmoet de gids en vaart verder met de boot."], ["04", "Vissen op het stuwmeer", "We verkennen visplekken rond Brokopondo."], ["05", "Sodjo Island", "Aankomen, eten en het kamp klaarmaken."], ["06", "Slapen in de natuur", "Je rust uit in een hangmat, midden in de natuur."], ["07", "Vissen bij zonsopkomst", "Bij het eerste licht gaan we weer het water op."], ["08", "Terug naar Paramaribo", "Na de trip varen en rijden we terug."],
  ],
} as const;

export const faqs = {
  en: [
  ["Do I need fishing experience?", "No. The experience is designed to suit beginners as well as experienced anglers."],
  ["Do I need my own fishing equipment?", "Package details are confirmed with your request; equipment availability is kept editable until confirmed."],
  ["Where do you pick guests up?", "Accommodation pickup around Paramaribo can be arranged."],
  ["Where do we sleep?", "Guests spend the night in hammocks or a camp setup on the island."],
  ["Are meals included?", "Tours are intended to include breakfast, lunch and dinner. The final package details are confirmed before booking."],
  ["What happens if it rains?", "Conditions are part of being outdoors. Your team will discuss the trip plan with you; no cancellation policy is presented here until confirmed."],
  ["Is fishing guaranteed?", "No. We fish in a natural environment, so catches can never be guaranteed."],
  ["Can I book privately?", "Private arrangements are enquiry-based. Tell us what you have in mind."],
  ["Is this suitable for children?", "Contact us to discuss suitability for younger guests."],
  ],
  nl: [
    ["Heb ik viservaring nodig?", "Nee. Deze ervaring is geschikt voor zowel beginners als ervaren vissers."],
    ["Moet ik mijn eigen visuitrusting meenemen?", "De inhoud van het pakket stemmen we af bij je aanvraag. De beschikbaarheid van materiaal blijft aanpasbaar totdat dit is bevestigd."],
    ["Waar halen jullie gasten op?", "Ophalen bij accommodaties in en rond Paramaribo kan worden geregeld."],
    ["Waar slapen we?", "Je overnacht in een hangmat of een kampeeropstelling op het eiland."],
    ["Zijn maaltijden inbegrepen?", "Het is de bedoeling dat ontbijt, lunch en diner zijn inbegrepen. De definitieve inhoud van het pakket wordt vooraf bevestigd."],
    ["Wat als het regent?", "Buiten zijn hoort bij de ervaring. De invulling van de trip bespreken we vooraf met je; er wordt geen annuleringsregeling beloofd zolang die nog niet is vastgesteld."],
    ["Is vangen gegarandeerd?", "Nee. We vissen in een natuurlijke omgeving, dus een vangst kunnen we nooit garanderen."],
    ["Kan ik privé boeken?", "Een privétrip regelen we op aanvraag. Vertel ons wat je in gedachten hebt."],
    ["Is dit geschikt voor kinderen?", "Neem contact met ons op om te bespreken of de trip geschikt is voor jongere gasten."],
  ],
} as const;
