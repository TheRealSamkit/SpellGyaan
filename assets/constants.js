export { spellCheckerData, hardSpellCheckerData, audioList };

const audioList = {
  click: new Audio("assets/click.mp3"),
  wrong: new Audio("assets/wrong.mp3"),
  correct: new Audio("assets/correct.mp3"),
};

const spellCheckerData = [
  {
    word: "chutney",
    hint: "A traditional Indian sauce made with spices, fruits, or vegetables.",
  },
  { word: "saree", hint: "A traditional Indian garment worn by women." },
  {
    word: "spices",
    hint: "Essential ingredients in Indian cuisine, like turmeric and cumin.",
  },
  { word: "bollywood", hint: "India's Hindi-language film industry." },
  { word: "tajmahal", hint: "A famous white marble mausoleum in Agra." },
  { word: "rangoli", hint: "Art made with colored powders during festivals." },
  { word: "diwali", hint: "The festival of lights celebrated in India." },
  { word: "holi", hint: "The festival of colors celebrated in India." },
  { word: "idli", hint: "A South Indian steamed rice cake." },
  { word: "guru", hint: "A spiritual teacher or mentor in Indian tradition." },
  { word: "biryani", hint: "A popular spiced rice and meat dish." },
  {
    word: "yoga",
    hint: "An ancient practice combining physical and mental exercises.",
  },
  { word: "masala", hint: "A mix of spices used in Indian cooking." },
  { word: "mango", hint: "The national fruit of India." },
  { word: "lotus", hint: "The national flower of India." },
  { word: "peacock", hint: "The national bird of India." },
  { word: "dhoti", hint: "Traditional men's attire in India." },
  { word: "ghagra", hint: "A traditional Indian skirt worn by women." },
  { word: "kolam", hint: "Decorative patterns drawn in Tamil Nadu." },
  { word: "qutubminar", hint: "A UNESCO heritage site in Delhi." },
  { word: "jalebi", hint: "A sweet deep-fried dessert soaked in sugar syrup." },
  { word: "vada", hint: "A fried snack made from lentils or potatoes." },
  { word: "cricket", hint: "The most popular sport in India." },
  { word: "ganges", hint: "A sacred river in India." },
  { word: "himalayas", hint: "The mountain range that houses Mount Everest." },
  { word: "tricolor", hint: "The name of the Indian national flag." },
  { word: "ashoka", hint: "A great emperor of ancient India." },
  { word: "paan", hint: "A traditional Indian after-meal preparation." },
  {
    word: "kumbh",
    hint: "A major Hindu pilgrimage festival held every 12 years.",
  },
  { word: "kathak", hint: "A classical dance form of North India." },
  { word: "bharatanatyam", hint: "A classical dance form of Tamil Nadu." },
  { word: "veena", hint: "A traditional Indian string instrument." },
  { word: "kashmir", hint: "A region in northern India known for its beauty." },
  { word: "mughal", hint: "A dynasty that ruled much of India." },
  { word: "samosa", hint: "A popular fried snack with a spicy filling." },
  { word: "chaat", hint: "A savory street food loved across India." },
  { word: "kurta", hint: "Traditional Indian attire for men and women." },
  { word: "monsoon", hint: "The rainy season in India." },
  { word: "amritsar", hint: "City known for the Golden Temple." },
  { word: "naan", hint: "A type of flatbread commonly eaten with curries." },
  { word: "garba", hint: "A traditional dance of Gujarat." },
  { word: "dhol", hint: "A traditional Indian drum." },
  {
    word: "spirituality",
    hint: "A key aspect of Indian philosophy and culture.",
  },
  { word: "namaste", hint: "A traditional Indian greeting." },
  { word: "mumbai", hint: "India's financial capital and home to Bollywood." },
  { word: "kesar", hint: "Saffron, used in Indian sweets and dishes." },
  { word: "uttapam", hint: "A thick dosa topped with vegetables." },
  { word: "rudraksha", hint: "A sacred seed used for prayer beads." },
  { word: "rajma", hint: "A North Indian kidney bean curry." },
  { word: "tandoor", hint: "A clay oven used in Indian cooking." },
];

const hardSpellCheckerData = [
  { word: "bureaucracy", hint: "India's administrative system." },
  { word: "entrepreneur", hint: "Many Indians excel in this business role." },
  {
    word: "reservoir",
    hint: "A large water storage area, like those in Indian dams.",
  },
  {
    word: "phenomenon",
    hint: "India’s cultural diversity is often described as this.",
  },
  { word: "archaeology", hint: "The study of ancient Indian civilizations." },
  { word: "sovereignty", hint: "India's status as an independent nation." },
  { word: "camaraderie", hint: "A sense of friendship in Indian communities." },
  {
    word: "hierarchical",
    hint: "Often used to describe India's social structure.",
  },
  {
    word: "connoisseur",
    hint: "Someone knowledgeable about Indian arts or cuisine.",
  },
  {
    word: "renaissance",
    hint: "A term describing cultural revival, relevant to India’s history.",
  },
  {
    word: "plagiarism",
    hint: "Strictly avoided in academic work, even in Indian institutions.",
  },
  { word: "itinerary", hint: "Planning trips across India involves this." },
  { word: "colonialism", hint: "India's history was shaped by this era." },
  { word: "synonymous", hint: "India is often synonymous with diversity." },
  {
    word: "autonomous",
    hint: "Several regions in India have autonomous governance.",
  },
  {
    word: "sacrilegious",
    hint: "Actions disrespecting India's religious traditions are seen this way.",
  },
  { word: "parliamentary", hint: "India’s system of government." },
  {
    word: "philanthropy",
    hint: "Common among India's wealthy to support social causes.",
  },
  {
    word: "vocabulary",
    hint: "Expanding English vocabulary is common among Indian students.",
  },
  {
    word: "exaggeration",
    hint: "Often seen in descriptions of India’s vastness.",
  },
  {
    word: "unprecedented",
    hint: "India's technological growth has been described as this.",
  },
  { word: "idiosyncrasy", hint: "Reflecting unique traits in Indian culture." },
  {
    word: "schizophrenia",
    hint: "A mental health condition studied in Indian psychiatry.",
  },
  { word: "paraphernalia", hint: "Decorative items in Indian weddings." },
  {
    word: "antiquated",
    hint: "Referring to India’s ancient yet preserved practices.",
  },
  {
    word: "gubernatorial",
    hint: "Related to governance, like Indian governors.",
  },
  { word: "conglomerate", hint: "Large business groups in India, like Tata." },
  { word: "vulnerability", hint: "Natural disasters in India highlight this." },
  {
    word: "maneuverable",
    hint: "Essential for navigating India’s crowded roads.",
  },
  { word: "caricature", hint: "Popular in Indian political cartoons." },
  { word: "ubiquitous", hint: "Chai is ubiquitous across India." },
  { word: "perseverance", hint: "A trait of India's freedom struggle." },
  {
    word: "reconciliation",
    hint: "Often needed in India's diverse communities.",
  },
  {
    word: "miscellaneous",
    hint: "A category for India’s varied cultural elements.",
  },
  {
    word: "nonchalant",
    hint: "An attitude sometimes adopted in India’s relaxed lifestyle.",
  },
  { word: "pronunciation", hint: "Tricky for English learners in India." },
  {
    word: "disproportionate",
    hint: "Wealth distribution in India is often seen as this.",
  },
  {
    word: "ambidextrous",
    hint: "A rare skill, but some Indian craftsmen have it.",
  },
  { word: "metamorphosis", hint: "India’s rapid urban growth is like this." },
  {
    word: "juxtaposition",
    hint: "India’s modern cities beside ancient temples.",
  },
  { word: "subterranean", hint: "Underground rivers or structures in India." },
  { word: "pseudonym", hint: "Common among Indian authors and artists." },
  { word: "soliloquy", hint: "Often found in Indian theatrical performances." },
  {
    word: "onomatopoeia",
    hint: "Used in Indian storytelling to mimic sounds.",
  },
  {
    word: "phenomenology",
    hint: "A philosophical study often explored in India.",
  },
  {
    word: "iridescent",
    hint: "Seen in peacock feathers, India’s national bird.",
  },
  {
    word: "superfluous",
    hint: "An extra effort often made in Indian hospitality.",
  },
  {
    word: "serendipity",
    hint: "Discovering unique places while traveling in India.",
  },
];
