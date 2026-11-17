// Base dati completa per la Guida Esclusiva Lago di Como
// Tutte le coordinate, descrizioni, orari, prezzi e viste 360°

const comoData = [
  // ==========================================
  // A. ENOGASTRONOMICO (6 posizioni - Start & Finish: Stazione Como San Giovanni)
  // ==========================================
  {
    id: "eno-1",
    category: "enogastronomico",
    routeCategory: "enogastronomico",
    image: "assets/images/riso-persico.jpg",
    coordinates: { lat: 45.9880, lng: 9.2628 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.9880,9.2628&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.9880,9.2628",
    priceRange: "€€€",
    title: {
      it: "Riso e filetto di pesce persico",
      en: "Rice with Lake Perch Fillets",
      fr: "Riz aux filets de perche du lac",
      es: "Arroz con filetes de perca del lago",
      de: "Reis mit Flussbarschfilets",
      ru: "Рис с филе озерного окуня"
    },
    tag: {
      it: "Piatto Principe del Lago",
      en: "Crown Dish of the Lake",
      fr: "Plat Emblématique",
      es: "Plato Estrella del Lago",
      de: "Klassiker des Comer Sees",
      ru: "Главное блюдо озера"
    },
    restaurant: "Trattoria San Giacomo",
    shortDesc: {
      it: "Filetti dorati di pesce persico del lago al burro chiarificato e salvia, serviti su letto di riso all'onda.",
      en: "Golden lake perch fillets sautéed in clarified butter and sage, served over delicate buttered rice.",
      fr: "Filets dorés de perche au beurre clarifié et sauge, servis sur un lit de riz blanc parfumé.",
      es: "Filetes dorados de perca al mantequilla clarificada y salvia sobre un suave lecho de arroz.",
      de: "Goldgelbe Barschfilets in geklärter Butter und Salbei auf duftendem Butterreis.",
      ru: "Золотистое филе свежего озерного окуня в топленом масле с шалфеем на подушке из нежного риса."
    },
    ingredients: {
      it: "Riso Carnaroli con filetti di pesce persico fresco del Lago di Como, burro d'alpeggio, salvia e vino bianco secco. Servito come riso in bianco mantecato, non come risotto cremoso, per esaltare la delicatezza del pesce dorato.",
      en: "Carnaroli rice with fresh Lake Como perch fillets, alpine butter, fresh sage, and crisp dry white wine. Served as traditionally buttered rice rather than heavy creamy risotto to honor the delicate fish.",
      fr: "Riz Carnaroli avec filets de perche fraîche du lac de Côme, beurre d'alpage, sauge et vin blanc sec. Servi comme un riz au beurre pour magnifier la saveur subtile du poisson.",
      es: "Arroz Carnaroli con filetes de perca fresca del Lago de Como, mantequilla de montaña, salvia y vino blanco seco. Servido como arroz blanco al dente.",
      de: "Carnaroli-Reis mit frischen Barschfilets aus dem Comer See, Almbutter, Salbei und trockenem Weißwein. Leicht serviert, um die Zartheit des Fisches zu bewahren.",
      ru: "Рис Карнароли со свежайшим филе окуня из озера Комо, альпийское сливочное масло, шалфей и сухое белое вино. Подается как рассыпчатый рис со сливочным ароматом, а не густое ризотто, сохраняя текстуру рыбы."
    },
    curiosity: {
      it: "È il piatto simbolo della cucina lariana: a differenza del classico risotto lombardo, il riso viene cotto in bianco e mantecato con burro d'alpeggio e salvia, mentre i filetti di persico vengono dorati separatamente per preservarne la fragranza e la consistenza croccante.",
      en: "The iconic dish of Lake Como: unlike rich Milanese risotto, the rice is simply butter-braised with mountain sage, while the perch fillets are pan-fried golden separately to keep their crisp, delicate texture.",
      fr: "Le plat emblématique du lac de Côme : le riz au beurre parfumé à la sauge met en valeur le filet de perche poêlé minute.",
      es: "El plato icónico del lago: el arroz a la mantequilla y salvia acompaña perfectamente los filetes dorados de perca.",
      de: "Der kulinarische Star des Comer Sees: Feiner Butterreis mit Salbei, serviert mit zart gebratenen Flussbarschfilets.",
      ru: "Главная визитная карточка озерной кухни: рис отваривают отдельно и сдабривают альпийским маслом с шалфеем, а филе окуня обжаривают до хрустящей золотистой корочки, сохраняя нежную текстуру рыбы."
    },
    hours: {
      it: "12:00–14:00 e 19:00–21:30 (Aperto tutti i giorni; Martedì chiuso)",
      en: "12:00–14:00 & 19:00–21:30 (Daily; Closed on Tuesdays)",
      fr: "12:00–14:00 et 19:00–21:30 (Tous les jours ; fermé le mardi)",
      es: "12:00–14:00 y 19:00–21:30 (Todos los días; cerrado los martes)",
      de: "12:00–14:00 & 19:00–21:30 (Täglich geöffnet; Dienstag Ruhetag)",
      ru: "12:00–14:00 и 19:00–21:30 (Ежедневно; вторник — выходной)"
    },
    price: {
      it: "~22–28 € per piatto (Conto medio: 45–55 € bevande escluse)",
      en: "~€22–28 per plate (Average check: €45–55 excl. drinks)",
      fr: "~22–28 € par plat (Addition moyenne : 45–55 € hors boissons)",
      es: "~22–28 € por plato (Ticket medio: 45–55 € bebidas no incl.)",
      de: "~22–28 € pro Gericht (Durchschnittspreis: 45–55 € ohne Getränke)",
      ru: "~22–28 € за блюдо (Средний чек: 45–55 € без напитков)"
    },
    address: "Salita Serbelloni 45, Bellagio (CO)",
    phone: "+39 031 950329",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 10 minuti a piedi fino al Pontile Navigazione (Piazza Cavour) + battello rapido o aliscafo per Bellagio (45-60 min). Rientro panoramico a Como San Giovanni in battello serale.",
      en: "From Como San Giovanni Station: 10 min walk to Ferry Pier (Piazza Cavour) + fast ferry to Bellagio (45-60 min). Panoramic evening boat back to Como San Giovanni.",
      fr: "De la gare Como San Giovanni : 10 min à pied jusqu'à l'embarcadère + bateau rapide pour Bellagio (45-60 min). Retour panoramique à Como San Giovanni en bateau.",
      es: "Desde la estación Como San Giovanni: 10 min a pie hasta el embarcadero + barco rápido a Bellagio (45-60 min). Regreso a Como San Giovanni en barco nocturno.",
      de: "Vom Bahnhof Como San Giovanni: 10 Min. Fußweg zum Schiffsanleger + Schnellboot nach Bellagio (45-60 Min.). Panoramarückfahrt zum Bahnhof am Abend.",
      ru: "От станции Como San Giovanni: 10 минут пешком до причала на Piazza Cavour + скоростной катер до Белладжо (45-60 мин). Вечерний катер обратно на станцию."
    }
  },
  {
    id: "eno-2",
    category: "enogastronomico",
    routeCategory: "enogastronomico",
    image: "assets/images/missoltini.jpg",
    coordinates: { lat: 45.9818, lng: 9.2527 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.9818,9.2527&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.9818,9.2527",
    priceRange: "€€",
    title: {
      it: "Missoltini con polenta",
      en: "Missoltini with Polenta",
      fr: "Missoltini à la polenta",
      es: "Missoltini con polenta",
      de: "Missoltini mit Polenta",
      ru: "Миссольтини с полентой"
    },
    tag: {
      it: "Antico Presidio Tradizionale",
      en: "Traditional Heritage Recipe",
      fr: "Patrimoine Gastronomique",
      es: "Patrimonio Gastronómico",
      de: "Traditionelles Kulturgut",
      ru: "Древняя традиция озера"
    },
    restaurant: "Ristorante Mella",
    shortDesc: {
      it: "Agoni essiccati al sole delle rive lariane, grigliati sui carboni e serviti con fette di polenta calda tostata.",
      en: "Sun-dried lake shad grilled over glowing coals, dressed with extra virgin olive oil and vinegar, with warm polenta.",
      fr: "Aloses séchées au soleil du lac, grillées à la braise et servies avec de la polenta dorée et un filet de vinaigre.",
      es: "Alosas secadas al sol, asadas al carbón con aceite y vinagre, acompañadas de polenta caliente.",
      de: "An der Seeluft sonnengetrocknete Maifische, über Holzkohle gegrillt, mit warmer goldener Polenta serviert.",
      ru: "Озерная сельдь (агони), высушенная на солнце и морской соли, обжаренная на углях с теплой полентой и каплей винного уксуса."
    },
    ingredients: {
      it: "Agoni del lago pescati in estate, puliti, salati e lasciati essiccare all'aria aperta sui bastoni 'missolte', pressati in barili di legno. Vengono scottati alla griglia con olio extravergine d'oliva dei colli lariani, gocce di aceto di vino e serviti con fumante polenta di farina di mais nostrana.",
      en: "Lake shad caught in high summer, salted and sun-dried on traditional wooden racks, pressed in barrels. Quickly scorched over a charcoal grill, drizzled with local olive oil and vinegar, paired with rustic steaming corn polenta.",
      fr: "Aloses du lac séchées selon la tradition séculaire, grillées au feu de bois et relevées d'huile d'olive larienne et de vinaigre de vin, accompagnées de polenta de maïs rustique.",
      es: "Alosas del lago curadas con sal y sol en bastidores de madera tradicionales, pasadas brevemente por las brasas con aceite de oliva del lago y polenta casera.",
      de: "Traditionell sonnengetrocknete Maifische, auf Holzkohle kurz gegrillt, verfeinert mit Olivenöl und Weinessig, serviert zu dampfender Maispolenta.",
      ru: "Озерные агони летнего вылова, засоленные и бережно высушенные на солнце на деревянных стойках, прижаренные на углях с оливковым маслом и винным уксусом. Подаются с золотистой кукурузной полентой."
    },
    curiosity: {
      it: "I missoltini (missultén in dialetto comasco) sono agoni pescati a maggio, salati e lasciati essiccare al sole sui 'tirlindana'. Venivano poi pressati nelle 'missolte' di legno con foglie di alloro: una tecnica di conservazione antichissima risalente ai Romani.",
      en: "Missoltini are sun-dried, salt-cured lake shads pressed in wooden barrels with bay leaves, a preservation heritage dating back to the Roman Empire.",
      fr: "Spécialité millénaire remontant à l'époque romaine : ces aloses séchées au soleil sont grillées et servies avec une polenta bien chaude.",
      es: "Una tradición gastronómica que data de los romanos: pescado secado al sol y prensado con laurel, servido con polenta.",
      de: "Jahrhundertealte Tradition aus der Römerzeit: An der Sonne getrocknete Agoni, serviert mit goldener heißer Polenta.",
      ru: "Древнейший деликатес времен Римской империи: озерную сельдь сушат на открытом солнце и прессуют в деревянных бочонках с лавровым листом, затем обжаривают на углях и подают с горячей полентой."
    },
    hours: {
      it: "12:30–14:00 e 19:30–21:00 (Martedì e Mercoledì chiuso)",
      en: "12:30–14:00 & 19:30–21:00 (Closed on Tuesdays & Wednesdays)",
      fr: "12:30–14:00 et 19:30–21:00 (Fermé mardi et mercredi)",
      es: "12:30–14:00 y 19:30–21:00 (Cerrado martes y miércoles)",
      de: "12:30–14:00 & 19:30–21:00 (Dienstag und Mittwoch Ruhetag)",
      ru: "12:30–14:00 и 19:30–21:00 (Вторник и среда — выходные)"
    },
    price: {
      it: "~18–24 € per porzione (Conto medio: 40–50 €)",
      en: "~€18–24 per portion (Average check: €40–50)",
      fr: "~18–24 € par portion (Addition moyenne : 40–50 €)",
      es: "~18–24 € por ración (Ticket medio: 40–50 €)",
      de: "~18–24 € pro Portion (Durchschnittspreis: 40–50 €)",
      ru: "~18–24 € за порцию (Средний чек: 40–50 €)"
    },
    address: "Frazione San Giovanni (a 1 km dal centro di Bellagio), Bellagio (CO)",
    phone: "+39 031 950205",
    transitFromStation: {
      it: "Partenza dalla Stazione Como San Giovanni: battello diretto per Bellagio San Giovanni. Il ristorante offre un ampio parco panoramico sul lago.",
      en: "Departure from Como San Giovanni Station: direct ferry to Bellagio San Giovanni pier. Beautiful waterfront garden setting.",
      fr: "Départ de la gare Como San Giovanni : ferry direct pour Bellagio San Giovanni.",
      es: "Salida desde la estación Como San Giovanni: barco directo a Bellagio San Giovanni.",
      de: "Abfahrt Bahnhof Como San Giovanni: Direktes Fährschiff nach Bellagio San Giovanni.",
      ru: "Старт от станции Como San Giovanni: катер до причала Bellagio San Giovanni с живописной террасой на берегу."
    }
  },
  {
    id: "eno-3",
    category: "enogastronomico",
    routeCategory: "enogastronomico",
    image: "assets/images/carpione.jpg",
    coordinates: { lat: 45.7958, lng: 9.1128 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.7958,9.1128&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.7958,9.1128",
    priceRange: "€€",
    title: {
      it: "Carpione di agone al timo selvatico",
      en: "Marinated Lake Shad in Wild Thyme Carpione",
      fr: "Agone mariné au thym sauvage en carpione",
      es: "Escabeche de alosa al tomillo silvestre",
      de: "Eingelegter Maifisch mit wildem Thymian (Carpione)",
      ru: "Карпионе из агоне с диким тимьяном"
    },
    tag: {
      it: "Autentico Crotto Comasco",
      en: "Authentic Como Rock Cellar",
      fr: "Crotto Traditionnel",
      es: "Auténtico Crotto Comasco",
      de: "Traditioneller Felsenkeller",
      ru: "Аутентичный кротто Комо"
    },
    restaurant: "Crotto del Sergente",
    shortDesc: {
      it: "Agone fresco del lago marinato in carpione tradizionale con cipolle bionde in agrodolce e timo profumato.",
      en: "Fresh lake shad marinated in a delicate sweet-and-sour wine vinegar reduction, sweet onions, and wild thyme.",
      fr: "Aloses fraîches marinées au vinaigre de vin aigre-doux, oignons fondants et thym sauvage des falaises.",
      es: "Alosa fresca marinada en escabeche agridulce tradicional con cebollas pochadas y tomillo silvestre.",
      de: "Frischer Seefisch in traditioneller süß-saurer Essigmarinade mit gedünsteten Zwiebeln und wildem Thymian.",
      ru: "Свежая рыба озера в классическом маринаде карпионе с томленым луком, винным уксусом и горным диким тимьяном."
    },
    ingredients: {
      it: "Agone pescato al mattino, infarinato, fritto in olio limpido e fatto riposare 24 ore nella marinatura calda di aceto bianco di vino, vino bianco lariano, cipolle dorate brasate, alloro e timo serpillo raccolto sulle balze del Triangolo Lariano.",
      en: "Morning-caught lake shad lightly dusted in flour, crisply fried, and cured for 24 hours in a warm marinade of white wine vinegar, local dry white wine, softened golden onions, bay leaves, and wild mountain thyme.",
      fr: "Aloses farinées et frites délicatement, puis marinées 24 heures dans une réduction de vin blanc larien, vinaigre, oignons dorés et thym sauvage des versants.",
      es: "Pescado fresco enharinado y frito, marinado durante 24 horas en reducción de vino blanco local, vinagre suave, cebollas caramelizadas y tomillo de montaña.",
      de: "Frisch gefangener Maifisch, mehliert, knusprig frittiert und 24 Stunden in milder Essig-Weißwein-Marinade mit Zwiebeln und wildem Thymian gereift.",
      ru: "Утренний улов агоне в тонкой мучной панировке, обжаренный и настоянный сутки в ароматном маринаде из белого вина, винного уксуса, томленого лука, лаврового листа и дикого горного тимьяна."
    },
    curiosity: {
      it: "Il carpione è il metodo tradizionale di marinatura con aceto di vino bianco, cipolle stufate e timo spontaneo raccolto sulle scogliere del lago. Serviva ai pescatori lariani per conservare il pescato nei 'crotti' naturali scavati nella roccia.",
      en: "Carpione is an ancient marinating method with white vinegar, onions, and wild mountain thyme, invented by local fishermen to preserve catches in natural glacial rock cellars ('crotti').",
      fr: "Méthode ancestrale de marinade au vinaigre et thym sauvage, conservée dans les grottes rocheuses naturelles du lac ('crotti').",
      es: "Tradición milenaria de marinado con vinagre y tomillo silvestre, originaria de las bodegas naturales ('crotti').",
      de: "Historische Mariniertechnik mit Essig, Zwiebeln und wildem Berthymian, gelagert in den Felsenkellern ('Crotti').",
      ru: "Старинный способ маринования рыбы в белом винном уксусе с луком и диким тимьяном, собиравшимся на скалах озера. Блюдо созревало в природных ледниковых погребах-пещерах ('crotti')."
    },
    hours: {
      it: "12:00–14:00 e 19:00–22:00 (Mercoledì chiuso)",
      en: "12:00–14:00 & 19:00–22:00 (Closed on Wednesdays)",
      fr: "12:00–14:00 et 19:00–22:00 (Fermé le mercredi)",
      es: "12:00–14:00 y 19:00–22:00 (Cerrado los miércoles)",
      de: "12:00–14:00 & 19:00–22:00 (Mittwoch Ruhetag)",
      ru: "12:00–14:00 и 19:00–22:00 (Среда — выходной)"
    },
    price: {
      it: "~16–20 € per l'antipasto (Conto medio: 45–55 €)",
      en: "~€16–20 for appetizer (Average check: €45–55)",
      fr: "~16–20 € pour l'entrée (Addition moyenne : 45–55 €)",
      es: "~16–20 € entrante (Ticket medio: 45–55 €)",
      de: "~16–20 € als Vorspeise (Durchschnittspreis: 45–55 €)",
      ru: "~16–20 € за закуску (Средний чек: 45–55 €)"
    },
    address: "Via Crotto del Sergente 13, 22100 Como",
    phone: "+39 031 283911",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 10 minuti di taxi o autobus urbano linea C40/C46 fino a Camnago Volta. Uno dei pochissimi crotti storici con ventilazione naturale 'Sorèl' scavata nella roccia viva.",
      en: "From Como San Giovanni Station: 10 min taxi or local bus C40/C46 to Camnago Volta. Historic rock cave cellar cooled by subterranean breeze.",
      fr: "De la gare Como San Giovanni : 10 min en taxi ou bus urbain. Authentique cave naturelle creusée dans la roche larienne.",
      es: "Desde la estación Como San Giovanni: 10 min en taxi o autobús urbano C40. Auténtica cueva histórica excavada en roca viva.",
      de: "Vom Bahnhof Como San Giovanni: 10 Min. Taxi oder Bus C40. Echter historischer Felsenkeller mit natürlicher Höhlenkühlung.",
      ru: "От станции Como San Giovanni: 10 минут на такси или автобусе C40/C46 до Камньяго Вольта. Исторический каменный погреб-кротто с природным подземным бризом 'Sorèl'."
    }
  },
  {
    id: "eno-4",
    category: "enogastronomico",
    routeCategory: "enogastronomico",
    image: "assets/images/tagliolino.jpg",
    coordinates: { lat: 45.9880, lng: 9.2628 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.9880,9.2628&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.9880,9.2628",
    priceRange: "€€",
    title: {
      it: "Tagliolino al missoltino",
      en: "Handmade Tagliolini with Missoltino",
      fr: "Tagliolini maison au missoltino",
      es: "Tagliolini caseros con missoltino",
      de: "Hausgemachte Tagliolini mit Missoltino",
      ru: "Домашние тальолини с миссольтино"
    },
    tag: {
      it: "Pasta Fresca Fatta a Mano",
      en: "Fresh Handmade Pasta",
      fr: "Pâtes Fraîches Artisanales",
      es: "Pasta Fresca Artesanal",
      de: "Hausgemachte Frische Pasta",
      ru: "Свежая паста ручной работы"
    },
    restaurant: "Trattoria San Giacomo",
    shortDesc: {
      it: "Pasta fresca trafilata sottile, mantecata con missoltino del lago sbriciolato, olio EVO dop ed erbe fresche.",
      en: "Delicate thin ribbons of fresh egg pasta tossed with crumbled cured lake shad, exquisite extra virgin olive oil, and herbs.",
      fr: "Pâtes fraîches aux œufs battues finement, relevées d'éclats d'alose séchée, huile d'olive vierge extra et herbes fraîches.",
      es: "Pasta fresca al huevo con migas crujientes de alosa curada del lago, aceite de oliva virgen extra y hierbas aromáticas.",
      de: "Hauchdünne frische Eiernudeln, geschwenkt mit zerkleinertem getrocknetem Maifisch, feinstem Olivenöl und Gartenkräutern.",
      ru: "Тончайшая домашняя яичная паста, припущенная с крошкой вяленого озерного миссольтино, оливковым маслом первого отжима и свежими травами."
    },
    ingredients: {
      it: "Tagliolino fresco all'uovo tirato a mano, arricchito da missoltino sminuzzato al coltello e leggermente tostato in padella, olio extravergine d'oliva DOP dei terrazzamenti lariani, timo, maggiorana e scorzetta di limone grattugiata al momento.",
      en: "Hand-rolled fresh egg tagliolini pasta paired with knife-minced missoltino fish gently toasted in a copper pan, PDO local olive oil, fresh thyme, marjoram, and a touch of zested lemon.",
      fr: "Tagliolini frais façonnés à la main, missoltino finement émietté et poêlé, huile d'olive AOP des rives de Côme, marjolaine et zeste de citron frais.",
      es: "Tagliolini frescos artesanales con missoltino picado a cuchillo y tostado suavemente, aceite de oliva virgen extra de terrazas larianas y hierbas aromáticas.",
      de: "Handgerollte frische Eiernudeln, serviert mit messergehacktem, in Olivenöl leicht angeröstetem Missoltino-Fisch, Thymian, Majoran und feinem Zitronenabrieb.",
      ru: "Свежие яичные тальолини ручной раскатки, рубленый вяленый миссольтино, слегка подрумяненный на сковороде с оливковым маслом озерных террас, тимьяном, майораном и цедрой свежего лимона."
    },
    curiosity: {
      it: "La pasta all'uovo viene tirata a mano sottilissima per sposarsi con la sapidità intensa del missoltino sminuzzato al coltello, ammorbidito con olio extravergine d'oliva delle colline lariane (DOP Laghi Lombardi).",
      en: "Fresh artisan egg pasta rolled ultra-thin to catch the intense savory notes of hand-diced missoltino, enriched by extra-virgin olive oil from Lake Como hills.",
      fr: "Pâtes fraîches maison très fines associées à la puissance aromatique du missoltino et à l'huile d'olive d'appellation locale.",
      es: "Pasta fresca artesanal combinada con el sabor intenso del pescado secado al sol y aceite de oliva del lago.",
      de: "Hauchdünne hausgemachte Eiernudeln, verfeinert mit würzigem Missoltino und Olivenöl aus den Hügeln des Sees.",
      ru: "Свежая домашняя яичная паста раскатывается тончайшим слоем, чтобы гармонично впитать концентрированный вкус рубленого миссольтино и местного оливкового масла первого отжима DOP."
    },
    hours: {
      it: "12:00–14:00 e 19:00–21:30 (Martedì chiuso)",
      en: "12:00–14:00 & 19:00–21:30 (Closed on Tuesdays)",
      fr: "12:00–14:00 et 19:00–21:30 (Fermé le mardi)",
      es: "12:00–14:00 y 19:00–21:30 (Cerrado los martes)",
      de: "12:00–14:00 & 19:00–21:30 (Dienstag Ruhetag)",
      ru: "12:00–14:00 и 19:00–21:30 (Вторник — выходной)"
    },
    price: {
      it: "~18–22 € per primo piatto",
      en: "~€18–22 per pasta dish",
      fr: "~18–22 € par plat de pâtes",
      es: "~18–22 € por plato de pasta",
      de: "~18–22 € pro Pastagericht",
      ru: "~18–22 € за порцию пасты"
    },
    address: "Salita Serbelloni 45, Bellagio (CO)",
    phone: "+39 031 950329",
    transitFromStation: {
      it: "Partenza dalla Stazione Como San Giovanni: a piedi fino all'imbarcadero di Piazza Cavour e traghetto per Bellagio. La scalinata Serbelloni è la più iconica e fotografata d'Italia.",
      en: "From Como San Giovanni Station: stroll to Piazza Cavour dock + ferry to Bellagio. Iconic Salita Serbelloni stairway.",
      fr: "De la gare Como San Giovanni : promenade vers l'embarcadère et ferry pour Bellagio.",
      es: "Desde Como San Giovanni: paseo al puerto y ferry a Bellagio.",
      de: "Vom Bahnhof Como San Giovanni: Fußweg zum Hafen und Fähre nach Bellagio.",
      ru: "От станции Como San Giovanni: спуск к набережной Piazza Cavour и паром до Белладжо на знаменитую лестницу Salita Serbelloni."
    }
  },
  {
    id: "eno-5",
    category: "enogastronomico",
    routeCategory: "enogastronomico",
    image: "assets/images/lavarello.jpg",
    coordinates: { lat: 45.9880, lng: 9.2628 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.9880,9.2628&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.9880,9.2628",
    priceRange: "€€",
    title: {
      it: "Insalata di lavarello essiccato",
      en: "Dried Whitefish (Lavarello) Salad",
      fr: "Salade de lavaret séché du lac",
      es: "Ensalada de lavareto seco del lago",
      de: "Salat mit getrocknetem Felchen (Lavarello)",
      ru: "Салат с сушеным лаварелло (сигом)"
    },
    tag: {
      it: "Pescato Nobile del Lago",
      en: "Noble Lake Catch",
      fr: "Poisson Noble du Lac",
      es: "Pescado Noble de Agua Dulce",
      de: "Edler Comer See Fisch",
      ru: "Благородная рыба озера"
    },
    restaurant: "Trattoria San Giacomo",
    shortDesc: {
      it: "Filetti di pregiato lavarello (coregone), carne bianca e delicata, serviti con misticanza di campo e note agrumate.",
      en: "Tender cured fillets of prized lake whitefish served over crisp seasonal wild greens with citrus dressing.",
      fr: "Filets raffinés de lavaret séché du lac de Côme, chair blanche et tendre, sur lit de jeunes pousses aux agrumes.",
      es: "Filetes de lavareto curado, carne blanca y aromática sobre brotes tiernos y vinagreta cítrica.",
      de: "Zarte Filets vom getrockneten Edelfelchen auf buntem Wildkräutersalat mit feinem Zitrusdressing.",
      ru: "Филе благородного лаварелло (озерного сига) с нежнейшим белым мясом, молодая зелень, кедровые орехи и легкая цитрусовая заправка."
    },
    ingredients: {
      it: "Filetti di lavarello fresco (coregone) del Lago di Como, essiccati delicatamente per mantenere la morbidezza delle carni, serviti con misticanza di foglie novelle, pinoli tostati, olio extravergine lariano e una goccia di limone del Garda.",
      en: "Delicately cured fillets of wild Lake Como whitefish (Coregonus), keeping the meat supple and moist, paired with fresh baby greens, toasted pine nuts, local olive oil, and gentle lemon infusion.",
      fr: "Filets de lavaret frais du lac délicatement affinés, jeunes pousses du terroir, pignons dorés et huile d'olive du lac parfumée au citron.",
      es: "Filetes de lavareto fresco curados con suavidad, ensalada mixta de brotes tiernos, piñones tostados y vinagreta de aceite de oliva del lago.",
      de: "Schonend gereifte Filets vom Wildfang-Felchen, frische Wiesensalate, geröstete Pinienkerne und feinstes Olivenöl mit Zitrone.",
      ru: "Филе свежевыловленного озерного сига, деликатно подсушенное для сохранения сочности мяса, хрустящий микс салатных листьев, кедровые орешки и оливковое масло с каплей лимона."
    },
    curiosity: {
      it: "Il lavarello (coregone) è il pesce più pregiato e nobile delle acque profonde del lago. La sua polpa bianca e magra, delicatamente essiccata e servita con pinoli e agrumi, è considerata una prelibatezza da intenditori.",
      en: "Lavarello (whitefish) is the most prized catch from Lake Como's deep waters. Delicately cured and served with toasted pine nuts and citrus dressing, it is the peak of refined lake cuisine.",
      fr: "Le lavaret est le poisson le plus noble des profondeurs du lac de Côme, servi avec des pignons et une vinaigrette aux agrumes.",
      es: "El lavareto es el pez más codiciado del lago, célebre por su carne blanca, delicada y saludable.",
      de: "Der Lavarello gilt als edelster Speisefisch des Comer Sees, geschätzt für sein feines, zartes weißes Fleisch.",
      ru: "Лаварелло (сиг) — самая благородная и ценимая рыба глубин озера Комо с нежнейшим белым мясом без мелких костей. В сочетании с кедровыми орешками и легкой цитрусовой заправкой это шедевр озерной гастрономии."
    },
    hours: {
      it: "12:00–14:00 e 19:00–21:30 (Martedì chiuso)",
      en: "12:00–14:00 & 19:00–21:30 (Closed on Tuesdays)",
      fr: "12:00–14:00 et 19:00–21:30 (Fermé le mardi)",
      es: "12:00–14:00 y 19:00–21:30 (Cerrado los martes)",
      de: "12:00–14:00 & 19:00–21:30 (Dienstag Ruhetag)",
      ru: "12:00–14:00 и 19:00–21:30 (Вторник — выходной)"
    },
    price: {
      it: "~18–22 € per porzione",
      en: "~€18–22 per dish",
      fr: "~18–22 € par plat",
      es: "~18–22 € por ración",
      de: "~18–22 € pro Portion",
      ru: "~18–22 € за порцию"
    },
    address: "Salita Serbelloni 45, Bellagio (CO)",
    phone: "+39 031 950329",
    transitFromStation: {
      it: "Partenza & Rientro: Stazione Como San Giovanni. Trasferimento via battello rapido.",
      en: "Start & Finish: Como San Giovanni Station. Scenic fast catamaran transfer.",
      fr: "Départ et retour : gare Como San Giovanni. Bateau rapide panoramique.",
      es: "Salida y llegada: Estación Como San Giovanni. Catamarán rápido.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Schnelles Panoramaboot.",
      ru: "Старт и финиш: Станция Como San Giovanni. Живописный скоростной катер."
    }
  },
  {
    id: "eno-6",
    category: "enogastronomico",
    routeCategory: "enogastronomico",
    image: "assets/images/fritto-misto.jpg",
    coordinates: { lat: 45.9818, lng: 9.2527 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.9818,9.2527&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.9818,9.2527",
    priceRange: "€€",
    title: {
      it: "Fritto misto di lago",
      en: "Crispy Mixed Lake Fish Fry",
      fr: "Friture mixte de poissons du lac",
      es: "Fritura mixta de pescados del lago",
      de: "Gemischter Frittierter Seefisch",
      ru: "Ассорти жареной озерной рыбы (Фритто мисто)"
    },
    tag: {
      it: "Da Condividere Vista Acqua",
      en: "Waterfront Sharing Platter",
      fr: "Plat Convivial au Bord de l'Eau",
      es: "Para Compartir Frente al Lago",
      de: "Geselliger Genuss am Seeufer",
      ru: "Для компании на берегу озера"
    },
    restaurant: "Ristorante Mella",
    shortDesc: {
      it: "Frittura croccante e asciutta di alborelle, agoni e bocconcini di persico, servita bollente con spicchi di limone fresco.",
      en: "Light and crispy golden fry of lake bleak, shad, and perch morsels, served piping hot with fresh lemon wedges.",
      fr: "Friture aérienne et croustillante d'ablettes, d'aloses et de morceaux de perche, servie fumante avec du citron frais.",
      es: "Fritura crujiente y ligera de alburnos, alosas y bocaditos de perca, servida muy caliente con limón fresco.",
      de: "Knusprig-leichte Frittüre aus Ukeleien, Maifischen und Barschstücken, heiß serviert mit Zitronenspalten.",
      ru: "Хрустящее и легкое ассорти из уклейки, агоне и кусочков окуня, подается обжигающе горячим с дольками свежего лимона."
    },
    ingredients: {
      it: "Selezione di piccoli pesci del lago (alborelle, agoni, bocconcini di filetto di persico) passati in farina di semola rimacinata e fritti in olio ad alta temperatura fino a perfetta doratura. Serviti rigorosamente caldi, asciutti e croccanti.",
      en: "Carefully chosen small fresh lake fish (bleak, shad, and perch nuggets) dusted in fine durum wheat semolina and flash-fried to golden perfection. Crisp, greaseless, and served immediately.",
      fr: "Assortiment de petits poissons du lac enrobés de semoule de blé dur et frits à haute température pour un croquant parfait sans gras.",
      es: "Selección de pescados pequeños del lago rebozados en sémola de trigo duro y fritos al momento, crujientes y sin exceso de aceite.",
      de: "Feine Auslese kleiner Seefische in Hartweizengrieß gewendet und goldbraun knusprig ausgebacken. Trocken und heiß serviert.",
      ru: "Отборная мелкая озерная рыба (уклейка, агоне, кусочки филе окуня) в тонкой панировке из твердой пшеничной манки, обжаренная до янтарной корочки. Подается без лишнего масла с лимоном."
    },
    curiosity: {
      it: "Il vero fritto misto di lago si compone esclusivamente di piccoli pesci freschi pescati all'alba (alborelle, agoni e bocconcini di persico). Viene fritto ad altissima temperatura in olio chiarificato e servito asciutto e croccante con spicchi di limone fresco.",
      en: "Authentic lake fritto misto uses only dawn catches of small bleak and perch nuggets, fried ultra-crisp at high heat and served dry with fresh lemon slices.",
      fr: "Véritable friture légère de poissons frais du lac pêchés à l'aube, dorée à point et sans excès d'huile.",
      es: "Fritura crujiente y ligera de pescados frescos del lago capturados al amanecer, servida bien caliente.",
      de: "Knusprig gebackene kleine Seefische aus dem morgendlichen Fang, serviert mit frischen Zitronenspalten.",
      ru: "Настоящее озерное ассорти включает только свежую утреннюю рыбу (уклейка, агоне и кусочки окуня). Обжаривается при высокой температуре до звонкого хруста и подается совершенно сухим с дольками лимона."
    },
    hours: {
      it: "12:30–14:00 e 19:30–21:00 (Martedì e Mercoledì chiuso)",
      en: "12:30–14:00 & 19:30–21:00 (Closed on Tuesdays & Wednesdays)",
      fr: "12:30–14:00 et 19:30–21:00 (Fermé mardi et mercredi)",
      es: "12:30–14:00 y 19:30–21:00 (Cerrado martes y miércoles)",
      de: "12:30–14:00 & 19:30–21:00 (Dienstag und Mittwoch Ruhetag)",
      ru: "12:30–14:00 и 19:30–21:00 (Вторник и среда — выходные)"
    },
    price: {
      it: "~20–25 € per piatto da condividere",
      en: "~€20–25 sharing dish",
      fr: "~20–25 € à partager",
      es: "~20–25 € para compartir",
      de: "~20–25 € zum Teilen",
      ru: "~20–25 € за порцию для компании"
    },
    address: "Frazione San Giovanni, Bellagio (CO) — ampio parco dietro il locale",
    phone: "+39 031 950205",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. Battello fino al molo di San Giovanni di Bellagio. Parcheggio privato e pontile di sbarco.",
      en: "Departure & Return: Como San Giovanni Station. Ferry to San Giovanni pier. Beautiful private garden on the lake.",
      fr: "Départ et retour : gare Como San Giovanni. Embarquement en bateau pour San Giovanni.",
      es: "Salida y llegada: Estación Como San Giovanni. Barco hasta el muelle de San Giovanni.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Schiff nach Bellagio San Giovanni.",
      ru: "Старт и финиш: Станция Como San Giovanni. Катер до причала San Giovanni в Белладжо с живописным садом у кромки воды."
    }
  },

  // ==========================================
  // B. CULTURALE - PARTE 1: MONUMENTI DI COMO (5 monumenti)
  // ==========================================
  {
    id: "mon-1",
    category: "monumenti",
    routeCategory: "culturale",
    image: "assets/images/duomo.jpg",
    coordinates: { lat: 45.8119, lng: 9.0834 },
    streetViewEmbed: "https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCAoSLEFGMVFpcE5lMUVNblVvSmJzTzRjVG4wcDdrNmp0cW42aWkxcWl3bDFhN21W!2m2!1d45.8116035!2d9.0836423!3f120.4!4f10.2!5f0.7820865974627469",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8119,9.0834",
    priceRange: "Gratuito",
    title: {
      it: "Cattedrale di Santa Maria Assunta (Duomo di Como)",
      en: "Cathedral of Santa Maria Assunta (Duomo of Como)",
      fr: "Cathédrale Santa Maria Assunta (Dôme de Côme)",
      es: "Catedral de Santa María Asunta (Duomo de Como)",
      de: "Dom zu Como (Cattedrale di Santa Maria Assunta)",
      ru: "Кафедральный собор Санта-Мария-Ассунта (Дуомо Комо)"
    },
    tag: {
      it: "Capolavoro Gotico e Rinascimentale",
      en: "Gothic & Renaissance Masterpiece",
      fr: "Chef-d'œuvre Gothique et Renaissance",
      es: "Obra Maestra Gótica y Renacentista",
      de: "Meisterwerk der Gotik und Renaissance",
      ru: "Шедевр готики и ренессанса"
    },
    shortDesc: {
      it: "Una delle cattedrali più suggestive del Nord Italia: facciata marmorea ricamata e maestosa cupola di Juvarra.",
      en: "One of Northern Italy's grandest cathedrals, featuring a sculpted marble facade and Juvarra's majestic rococo dome.",
      fr: "Une des plus éblouissantes cathédrales d'Italie du Nord, fusion parfaite de gothique et de coupole rococo.",
      es: "Una de las catedrales más deslumbrantes del norte de Italia con imponente fachada de mármol y cúpula de Juvarra.",
      de: "Einer der bedeutendsten Sakralbauten Norditaliens mit reich verzierter Marmorfassade und Rokokokuppel.",
      ru: "Главная святыня Комо: резной мраморный фасад, 400 лет строительства и грандиозный купол Филиппо Юварры."
    },
    history: {
      it: "Iniziato nel 1396 su progetto di Lorenzo degli Spazzi e completato nel 1740 con la cupola rococò di Filippo Juvarra. È una sintesi straordinaria di gotico lombardo, eleganza rinascimentale e grandiosità barocca. All'interno si ammirano arazzi fiamminghi e tele di Bernardino Luini e Gaudenzio Ferrari.",
      en: "Begun in 1396 by Lorenzo degli Spazzi and crowned in 1740 by Filippo Juvarra's soaring rococo cupola. A seamless blend of late Lombard Gothic, High Renaissance, and Baroque grandeur, housing Flemish tapestries and paintings by Luini and Ferrari.",
      fr: "Commencée en 1396 par Lorenzo degli Spazzi et achevée en 1740 avec la coupole rococo de Filippo Juvarra. Elle abrite de précieux tableaux de Luini et de somptueuses tapisseries flamandes des XVIe et XVIIe siècles.",
      es: "Iniciada en 1396 y culminada en 1740 con la magnífica cúpula rococó de Filippo Juvarra. Destacan sus tapices flamencos y retablos renacentistas de Luini.",
      de: "Begonnen 1396 nach Plänen von Lorenzo degli Spazzi und vollendet 1740 mit der Kuppel von Filippo Juvarra. Ein Juwel der Architekturgeschichte mit flämischen Wandteppichen.",
      ru: "Строительство началось в 1396 году архитектором Лоренцо дельи Спацци и завершилось в 1740 году возведением купола Филиппо Юварры. Внутри хранятся фламандские гобелены XVI–XVII веков и шедевры Бернардино Луини."
    },
    curiosity: {
      it: "Sui lati del portale maggiore si trovano le statue di Plinio il Vecchio e Plinio il Giovane: caso quasi unico di due illustri autori pagani romani celebrati sulla facciata di una chiesa cattolica, in quanto illustri cittadini nati a Como.",
      en: "Flanking the main portal are statues of Pliny the Elder and Pliny the Younger: a rare tribute to two pagan Roman scholars on the facade of a Catholic cathedral, honoring them as Como's most illustrious native sons.",
      fr: "Encadrant le portail principal trônent Pline l'Ancien et Pline le Jeune : cas rarissime d'auteurs païens romains honorés sur la façade d'une cathédrale chrétienne car nés à Côme.",
      es: "A los lados de la puerta principal figuran las estatuas de Plinio el Viejo y Plinio el Joven, ilustres sabios romanos nacidos en Como.",
      de: "Am Hauptportal stehen Statuen von Plinius dem Älteren und Plinius dem Jüngeren – ein außergewöhnliches Denkmal für zwei antike Gelehrte an einer christlichen Kirche.",
      ru: "По обе стороны от главного портала установлены статуи Плиния Старшего и Плиния Младшего — редчайший случай, когда античные языческие мыслители увековечены на фасаде христианского собора в честь их рождения в Комо."
    },
    hours: {
      it: "10:30–17:30 (Tutti i giorni; Domenica visite limitate durante le celebrazioni)",
      en: "10:30–17:30 (Daily; restricted visits during Sunday mass)",
      fr: "10:30–17:30 (Tous les jours ; accès restreint le dimanche pendant les messes)",
      es: "10:30–17:30 (Todos los días; visitas limitadas durante misas dominicales)",
      de: "10:30–17:30 (Täglich; sonntags eingeschränkte Besichtigung während der Messe)",
      ru: "10:30–17:30 (Ежедневно; в воскресенье во время служб вход ограничен)"
    },
    price: {
      it: "Ingresso cattedrale gratuito (Salita alla Cupola con vista mozzafiato: ~5–10 €)",
      en: "Cathedral entry free (Cupola climb panoramic tour: ~€5–10)",
      fr: "Entrée cathédrale gratuite (Montée à la coupole panoramique : ~5–10 €)",
      es: "Entrada a la catedral gratuita (Subida a la cúpula panorámica: ~5–10 €)",
      de: "Eintritt frei (Aufstieg zur Kuppel mit Traumpanorama: ~5–10 €)",
      ru: "Вход в собор бесплатный (Подъем на купол с панорамой: ~5–10 €)"
    },
    address: "Piazza del Duomo, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 10 minuti a piedi (800 metri). Si scende la scalinata panoramica di Via Gallio, si attraversa Viale Varese e si imbocca Via Cinque Giornate fino a Piazza Duomo.",
      en: "From Como San Giovanni Station: 10 min walk (800 m). Down Via Gallio steps, cross Viale Varese into pedestrian Via Cinque Giornate to Piazza Duomo.",
      fr: "De la gare Como San Giovanni : 10 min à pied par Via Gallio et Via Cinque Giornate.",
      es: "Desde Como San Giovanni: 10 min a pie cruzando el centro histórico peatonal.",
      de: "Vom Bahnhof Como San Giovanni: 10 Min. Fußweg durch die Fußgängerzone zur Piazza Duomo.",
      ru: "От станции Como San Giovanni: 10 минут пешком (800 м). Спуск по лестнице Виа Галлио, далее через пешеходную улицу Виа Чинкве Джорнате прямо к площади Дуомо."
    }
  },
  {
    id: "mon-2",
    category: "monumenti",
    routeCategory: "culturale",
    image: "assets/images/voltiano.jpg",
    coordinates: { lat: 45.8139, lng: 9.0766 },
    streetViewEmbed: "https://www.google.com/maps/embed?pb=!4v1700000000001!6m8!1m7!1sCAoSLEFGMVFpcE5QZnhfR0JjYm9mR2lxb3BfZVJrbldUeXhJVkQ1S2R1VldLTVJN!2m2!1d45.815546!2d9.074523!3f240.2!4f5.1!5f0.7820865974627469",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8139,9.0766",
    priceRange: "€5",
    title: {
      it: "Tempio Voltiano",
      en: "Voltian Temple (Tempio Voltiano)",
      fr: "Temple Voltien (Tempio Voltiano)",
      es: "Templo Voltiano (Tempio Voltiano)",
      de: "Volta-Tempel (Tempio Voltiano)",
      ru: "Храм Вольты (Tempio Voltiano)"
    },
    tag: {
      it: "Monumento Neoclassico sul Lago",
      en: "Neoclassical Lakeside Shrine",
      fr: "Sanctuaire Néoclassique au Bord de l'Eau",
      es: "Monumento Neoclásico Frente al Lago",
      de: "Klassizistischer Tempel am See",
      ru: "Неоклассический храм на берегу"
    },
    shortDesc: {
      it: "Elegante tempio corinzio sulle rive del lago dedicato ad Alessandro Volta, inventore della pila elettrica.",
      en: "Stately Corinthian rotunda set in lakeside gardens celebrating Alessandro Volta, inventor of the electric battery.",
      fr: "Élégante rotonde corinthienne sur les berges du lac dédiée à Alessandro Volta, inventeur de la pile électrique.",
      es: "Elegante templo corintio a orillas del lago en homenaje a Alessandro Volta, inventor de la pila eléctrica.",
      de: "Stilvoller korinthischer Rundbau am Seeufer zu Ehren von Alessandro Volta, dem Erfinder der Batterie.",
      ru: "Изящная неоклассическая ротонда на набережной, посвященная Алессандро Вольте — изобретателю электрической батареи."
    },
    history: {
      it: "Inaugurato nel 1928 per celebrare il centenario della morte di Alessandro Volta (1745-1827), illustre fisico comasco. Progettato dall'architetto Federico Frigerio in stile neoclassico ispirato al Pantheon di Roma, fu donato alla città dall'industriale della seta Francesco Somaini.",
      en: "Inaugurated in 1928 for the centenary of Alessandro Volta's death, designed by architect Federico Frigerio in neoclassical style reminiscent of the Roman Pantheon, funded by silk magnate Francesco Somaini.",
      fr: "Inauguré en 1928 par l'architecte Federico Frigerio dans un style néoclassique inspiré du Panthéon de Rome, en hommage au centenaire de la mort d'Alessandro Volta.",
      es: "Inaugurado en 1928 en estilo neoclásico inspirado en el Panteón romano, erigido en honor a Alessandro Volta con el mecenazgo del industrial de la seda Francesco Somaini.",
      de: "1928 im Stil des römischen Pantheons von Federico Frigerio erbaut, gestiftet vom Seidenfabrikanten Francesco Somaini zum Gedenken an Alessandro Volta.",
      ru: "Открыт в 1928 году к столетию со дня смерти Алессандро Вольты. Архитектор Федерико Фриджерио вдохновлялся римским Пантеоном, а финансировал строительство шелковый магнат Франческо Сомаини."
    },
    curiosity: {
      it: "Custodisce strumenti scientifici originali, elettrofori, condensatori e la celeberrima pila voltaica originale, miracolosamente scampata all'incendio dell'Esposizione Voltiana del 1899.",
      en: "Houses Volta's genuine laboratory instruments, electrophori, capacitors, and the legendary original electric battery that survived the catastrophic fire of 1899.",
      fr: "Conserve les instruments originaux de Volta, ses carnets scientifiques et la véritable pile électrique sauvée de l'incendie de l'Exposition de 1899.",
      es: "Alberga los aparatos originales del laboratorio de Volta, incluidos condensadores y la célebre pila original salvada del incendio de 1899.",
      de: "Beherbergt Originalinstrumente Voltas, persönliche Schriften und die erste echte elektrische Säule, die den Brand von 1899 überstand.",
      ru: "Здесь хранятся оригинальные приборы Вольты, рукописи и подлинная вольтова батарея, чудом уцелевшая во время пожара на выставке 1899 года."
    },
    hours: {
      it: "10:00–18:00 (Martedì–Domenica; Lunedì chiuso)",
      en: "10:00–18:00 (Tuesday–Sunday; Closed Mondays)",
      fr: "10:00–18:00 (Mardi–dimanche ; fermé le lundi)",
      es: "10:00–18:00 (Martes–domingo; lunes cerrado)",
      de: "10:00–18:00 (Dienstag–Sonntag; Montag geschlossen)",
      ru: "10:00–18:00 (Вторник–воскресенье; понедельник — выходной)"
    },
    price: {
      it: "Intero: ~5,00 € | Ridotto (studenti/over 65): ~3,00 €",
      en: "Regular: ~€5.00 | Reduced (students/seniors): ~€3.00",
      fr: "Plein tarif : ~5,00 € | Réduit : ~3,00 €",
      es: "General: ~5,00 € | Reducida: ~3,00 €",
      de: "Erwachsene: ~5,00 € | Ermäßigt: ~3,00 €",
      ru: "Полный: ~5,00 € | Льготный: ~3,00 €"
    },
    address: "Viale Guglielmo Marconi, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: appena 7 minuti a piedi (550 m). Si scende da Via Tolomeo Gallio verso Viale Rosselli e i Giardini a Lago.",
      en: "From Como San Giovanni Station: only 7 min walk (550 m). Down Via Gallio straight to Lake Gardens (Giardini a Lago).",
      fr: "De la gare Como San Giovanni : 7 min à pied à travers les Giardini a Lago.",
      es: "Desde Como San Giovanni: apenas 7 min a pie por los Giardini a Lago.",
      de: "Vom Bahnhof Como San Giovanni: Nur 7 Gehminuten durch die Giardini a Lago.",
      ru: "От станции Como San Giovanni: всего 7 минут пешком (550 м) через набережную парка Джардини а Лаго."
    }
  },
  {
    id: "mon-3",
    category: "monumenti",
    routeCategory: "culturale",
    image: "assets/images/broletto.jpg",
    coordinates: { lat: 45.8118, lng: 9.0837 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8118,9.0837&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8118,9.0837",
    priceRange: "Gratuito",
    title: {
      it: "Palazzo del Broletto",
      en: "Broletto Palace (Palazzo del Broletto)",
      fr: "Palais du Broletto (Palazzo del Broletto)",
      es: "Palacio del Broletto (Palazzo del Broletto)",
      de: "Palazzo del Broletto (Mittelalterliches Rathaus)",
      ru: "Дворец Бролетто (Palazzo del Broletto)"
    },
    tag: {
      it: "Simbolo Civico Medievale del 1215",
      en: "Medieval Civic Symbol from 1215",
      fr: "Symbole Médiéval de 1215",
      es: "Símbolo Cívico Medieval de 1215",
      de: "Mittelalterliches Rathaus von 1215",
      ru: "Средневековая ратуша 1215 года"
    },
    shortDesc: {
      it: "Antico palazzo comunale medievale con caratteristica facciata a fasce marmoree policrome bianche, grigie e rosa.",
      en: "Historic 13th-century town hall directly beside the Duomo, featuring striking tricolor striped marble arcades.",
      fr: "Ancien hôtel de ville médiéval mitoyen du Dôme, paré d'arcades en marbre polychrome blanc, gris et rose.",
      es: "Histórico palacio municipal medieval junto a la catedral, con arquerías de mármol policromado tricolor.",
      de: "Mittelalterliches Rathaus direkt neben dem Dom mit markanten dreifarbigen Marmorstreifen und offener Laube.",
      ru: "Средневековая ратуша XIII века с открытой галереей и фасадом из трехцветного мрамора (белого, серого и розового)."
    },
    history: {
      it: "Costruito nel 1215 per volere del podestà Bonardo da Codazzo come sede dell'autogoverno cittadino. Sorge a diretto contatto con la Cattedrale, a rappresentare il dualismo e l'equilibrio tra potere temporale del Comune e potere spirituale del Vescovo.",
      en: "Erected in 1215 under Mayor Bonardo da Codazzo as the civic seat of the free medieval commune, positioned right next to the cathedral to symbolize the balance between secular town governance and ecclesiastical authority.",
      fr: "Édifié en 1215 comme siège des magistrats de la commune médiévale, symbolisant la coexistence du pouvoir civique et spirituel.",
      es: "Construido en 1215 por el podestá Bonardo da Codazzo como sede del gobierno ciudadano medieval, adosado a la catedral.",
      de: "1215 als Sitz der städtischen Selbstverwaltung erbaut, unmittelbar an den Dom grenzend als Sinnbild weltlicher und geistlicher Macht.",
      ru: "Построен в 1215 году как резиденция городского самоуправления. Расположение вплотную к Дуомо символизировало баланс между властью епископа и светской коммуной."
    },
    curiosity: {
      it: "Nel Rinascimento una parte dell'edificio venne demolita per consentire l'allargamento della navata del Duomo, e nel Settecento il salone superiore fu convertito in teatro cittadino prima di diventare spazio espositivo d'arte.",
      en: "During the Renaissance, part of the palace was dismantled to allow the Duomo's expansion; in the 18th century its grand upper hall served as Como's public theater.",
      fr: "Au XVe siècle, une aile du palais fut amputée pour élargir le Dôme ; plus tard, la grande salle servit de théâtre municipal.",
      es: "En el Renacimiento parte del edificio se demolió para ampliar la catedral, y en el siglo XVIII su salón superior fue el teatro de la ciudad.",
      de: "In der Renaissance musste ein Teil des Baus dem Domneubau weichen; im 18. Jahrhundert beherbergte er das städtische Theater.",
      ru: "В эпоху Возрождения часть дворца снесли ради расширения собора, а в XVIII веке верхний зал превратили в городской театр."
    },
    hours: {
      it: "10:00–18:00 (Durante le esposizioni d'arte e mostre temporanee)",
      en: "10:00–18:00 (During art exhibitions and cultural events)",
      fr: "10:00–18:00 (Pendant les expositions culturelles)",
      es: "10:00–18:00 (Durante exposiciones y muestras culturales)",
      de: "10:00–18:00 (Während Ausstellungen geöffnet)",
      ru: "10:00–18:00 (Во время выставок и культурных мероприятий)"
    },
    price: {
      it: "Accesso al porticato gratuito (Mostre temporanee nel salone: 0–5 €)",
      en: "Portico area free access (Temporary exhibitions: €0–5)",
      fr: "Accès libre sous les arcades (Expositions : 0–5 €)",
      es: "Acceso libre a la logia (Exposiciones: 0–5 €)",
      de: "Offene Laube frei zugänglich (Ausstellungen: 0–5 €)",
      ru: "Вход в галерею свободный (Выставки на втором этаже: 0–5 €)"
    },
    address: "Piazza del Duomo 1, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 10 minuti a piedi attraverso Via Garibaldi e Piazza Duomo.",
      en: "From Como San Giovanni Station: 10 min walk via Via Garibaldi to Piazza Duomo.",
      fr: "De la gare Como San Giovanni : 10 min à pied.",
      es: "Desde la estación Como San Giovanni: 10 min a pie.",
      de: "Vom Bahnhof Como San Giovanni: 10 Min. Fußweg.",
      ru: "От станции Como San Giovanni: 10 минут пешком через Виа Гарибальди на площадь Дуомо."
    }
  },
  {
    id: "mon-4",
    category: "monumenti",
    routeCategory: "culturale",
    image: "assets/images/san-fedele.jpg",
    coordinates: { lat: 45.8094, lng: 9.0835 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8094,9.0835&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8094,9.0835",
    priceRange: "Gratuito",
    title: {
      it: "Basilica di San Fedele",
      en: "Basilica of San Fedele",
      fr: "Basilique San Fedele",
      es: "Basílica de San Fedele",
      de: "Basilika San Fedele",
      ru: "Базилика Сан-Феделе (Basilica di San Fedele)"
    },
    tag: {
      it: "Gioiello del Romanico Comasco",
      en: "Lombard Romanesque Jewel",
      fr: "Joyau de l'Art Roman Lombard",
      es: "Joya del Románico Lombardo",
      de: "Juwel der lombardischen Romanik",
      ru: "Жемчужина ломбардской романики"
    },
    shortDesc: {
      it: "Capolavoro del XII secolo con abside poligonale, loggette cieche e il celebre Portale del Drago.",
      en: "12th-century Romanesque masterpiece set in a charming market square, known for its carved Portal of the Dragon.",
      fr: "Chef-d'œuvre de l'art roman comasque du XIIe siècle avec son mystérieux Portail du Dragon sculpté.",
      es: "Obra maestra románica del siglo XII en una encantadora plaza medieval con su enigmático Portal del Dragón.",
      de: "Romanisches Meisterwerk des 12. Jahrhunderts mit polygonaler Apsis und dem berühmten Drachenportal.",
      ru: "Памятник романской архитектуры XII века на старинной рыночной площади со знаменитым «Порталом Дракона»."
    },
    history: {
      it: "Edificata nel 1120 sui resti di una precedente chiesa paleocristiana del VII secolo intitolata a Santa Eufemia. La pianta triconca con deambulatorio è un unicum dell'architettura sacra lombarda, realizzata dai celebri Magistri Comacini.",
      en: "Built around 1120 atop a 7th-century paleo-Christian chapel. Its trefoil cloverleaf plan with ambulatory was conceived by the famed guild of Master Builders of Como (Magistri Comacini).",
      fr: "Érigée vers 1120 par les maîtres maçons comasques (Magistri Comacini) sur un sanctuaire paléochrétien du VIIe siècle.",
      es: "Construida hacia 1120 por los Magistri Comacini sobre un templo paleocristiano anterior del siglo VII.",
      de: "Erbaut um 1120 von den berühmten Comer Steinmetzen (Magistri Comacini) auf frühchristlichen Fundamenten.",
      ru: "Возведена в 1120 году легендарными ломбардскими зодчими (Magistri Comacini) на фундаменте раннехристианской церкви VII века."
    },
    curiosity: {
      it: "Il 'Portale del Drago' sull'abside reca bassorilievi medievali enigmatici raffiguranti il profeta Abacuc con un angelo, mostri marini e un drago alato, simboli medievali della lotta tra Bene e Male.",
      en: "The exterior 'Portal of the Dragon' features intricate medieval bas-reliefs of the prophet Habakkuk, winged monsters, and a dragon, depicting the eternal struggle of good versus evil.",
      fr: "Le Portail du Dragon à l'extérieur présente des bas-reliefs médiévaux énigmatiques représentant des créatures ailées et des monstres.",
      es: "El exterior 'Portal del Dragón' conserva misteriosos bajorrelieves medievales del profeta Habacuc y un dragón alado.",
      de: "Das Drachenportal an der Außenseite zeigt bemerkenswerte mittelalterliche Flachreliefs von Fabelwesen und Drachen.",
      ru: "На портале апсиды сохранился средневековый барельеф «Врата Дракона» с изображением пророка Аввакума и крылатого дракона."
    },
    hours: {
      it: "08:00–12:00 e 15:00–18:30 (Tutti i giorni)",
      en: "08:00–12:00 & 15:00–18:30 (Daily)",
      fr: "08:00–12:00 et 15:00–18:30 (Tous les jours)",
      es: "08:00–12:00 y 15:00–18:30 (Todos los días)",
      de: "08:00–12:00 & 15:00–18:30 (Täglich)",
      ru: "08:00–12:00 и 15:00–18:30 (Ежедневно)"
    },
    price: {
      it: "Ingresso gratuito",
      en: "Free admission",
      fr: "Entrée gratuite",
      es: "Entrada gratuita",
      de: "Eintritt frei",
      ru: "Вход свободный"
    },
    address: "Piazza San Fedele, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 11 minuti a piedi nel cuore dell'antica città murata a scacchiera romana.",
      en: "From Como San Giovanni Station: 11 min walk through the Roman street grid of the walled town.",
      fr: "De la gare Como San Giovanni : 11 min à pied au cœur de la cité fortifiée.",
      es: "Desde Como San Giovanni: 11 min a pie por el casco antiguo amurallado.",
      de: "Vom Bahnhof Como San Giovanni: 11 Min. Fußweg ins historische Zentrum.",
      ru: "От станции Como San Giovanni: 11 минут пешком в сердце исторического центра римской планировки."
    }
  },
  {
    id: "mon-5",
    category: "monumenti",
    routeCategory: "culturale",
    image: "assets/images/life-electric.jpg",
    coordinates: { lat: 45.8155, lng: 9.0805 },
    streetViewEmbed: "https://www.google.com/maps/embed?pb=!4v1700000000001!6m8!1m7!1sCAoSLEFGMVFpcE5QZnhfR0JjYm9mR2lxb3BfZVJrbldUeXhJVkQ1S2R1VldLTVJN!2m2!1d45.815546!2d9.074523!3f240.2!4f5.1!5f0.7820865974627469",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8155,9.0805",
    priceRange: "Gratuito",
    title: {
      it: "Life Electric & Diga Foranea Piero Caldirola",
      en: "Life Electric & Piero Caldirola Breakwater",
      fr: "Life Electric & Digue Foraine Piero Caldirola",
      es: "Life Electric y Dique Piero Caldirola",
      de: "Life Electric & Piero Caldirola Wellenbrecher",
      ru: "Монумент Life Electric и мол Пьеро Кальдирола"
    },
    tag: {
      it: "Scultura Monumentale sul Lago di Daniel Libeskind",
      en: "Monumental Lake Sculpture by Daniel Libeskind",
      fr: "Sculpture Contemporaine de Daniel Libeskind",
      es: "Escultura Contemporánea de Daniel Libeskind",
      de: "Monumentale Skulptur von Daniel Libeskind",
      ru: "Монумент Даниэля Либескинда на воде"
    },
    shortDesc: {
      it: "Scultura alta oltre 16 metri in acciaio specchiante situata in mezzo alle acque al termine della passeggiata sulla diga.",
      en: "A 16-meter mirrored stainless steel monument floating in the bay at the end of the panoramic breakwater.",
      fr: "Sculpture en acier poli de 16 mètres de haut s'élevant des flots au bout de la digue piétonne.",
      es: "Escultura de acero inoxidable pulido de 16 metros sobre las aguas al final del dique panorámico.",
      de: "16 Meter hohe Skulptur aus spiegelndem Edelstahl am Ende des Wellenbrechers mitten im See.",
      ru: "16-метровая стальная зеркальная скульптура посреди глади озера в конце мола с обзором 360 градусов."
    },
    history: {
      it: "Inaugurata nel 2015 al termine della diga foranea nel primo bacino del lago, donata dall'associazione Amici di Como e ideata dal celebre architetto Daniel Libeskind. L'opera è un omaggio alla genialità scientifica di Alessandro Volta e al dialogo tra terra, acqua e cielo.",
      en: "Inaugurated in 2015 at the tip of the breakwater in Lake Como's first basin, designed by world-renowned architect Daniel Libeskind to honor Alessandro Volta and create an architectural dialogue between the water and alpine skyline.",
      fr: "Inaugurée en 2015 au bout de la jetée, conçue par l'architecte Daniel Libeskind en hommage au physicien Alessandro Volta.",
      es: "Inaugurada en 2015 por el arquitecto Daniel Libeskind, simboliza la energía eléctrica y refleja el agua y las montañas.",
      de: "2015 vom Stararchitekten Daniel Libeskind entworfen, als Hommage an Volta und spektakulärer Aussichtspunkt.",
      ru: "Открыта в 2015 году на молу Пьеро Кальдирола. Автор проекта — архитектор Даниэль Либескинд. Посвящена гению Алессандро Вольты."
    },
    curiosity: {
      it: "Le forme geometriche in torsione riproducono la tensione elettrica invisibile tra i due poli della pila voltaica. Dalla piattaforma circolare alla sua base si gode la più spettacolare vista panoramica a 360° sulla città di Como, Brunate e le prime ville nobiliari.",
      en: "The twisted geometric forms evoke the unseen electrical tension between battery poles. The platform offers Como's finest 360° panorama of the amphitheater of mountains, Brunate funicular, and waterfront villas.",
      fr: "La silhouette en acier reflète le ciel et les montagnes. La plateforme offre un panorama à 360 degrés spectaculaire sur Côme et Brunate.",
      es: "La forma helicoidal de acero refleja el lago y regala una perspectiva inigualable de 360° sobre la ciudad y Brunate.",
      de: "Die gewundene Stahlskulptur reflektiert Himmel und See und bietet einen uneingeschränkten 360°-Rundumblick auf Como und Brunate.",
      ru: "Спиральная конструкция из полированной стали символизирует электрическое напряжение между полюсами батареи Вольты. От подножия открывается лучший круговой обзор 360° на город, горы и озеро."
    },
    hours: {
      it: "Sempre aperto (Accesso libero 24 ore su 24, suggestivo al tramonto e illuminato di notte)",
      en: "Always open (24/7 free access; stunning at sunset and night lit)",
      fr: "Toujours ouvert (Accès libre 24h/24, féerique au coucher du soleil)",
      es: "Siempre abierto (Acceso libre 24/7; mágico al atardecer)",
      de: "Rund um die Uhr frei zugänglich (Besonders reizvoll bei Sonnenuntergang)",
      ru: "Открыто круглосуточно (Свободный доступ 24/7; потрясающий вид на закате и с ночной подсветкой)"
    },
    price: {
      it: "Accesso completamente gratuito",
      en: "Completely free",
      fr: "Entièrement gratuit",
      es: "Totalmente gratuito",
      de: "Kostenlos",
      ru: "Бесплатно"
    },
    address: "Diga Foranea Piero Caldirola, Lungo Lario Trento, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 12 minuti a piedi. Si attraversa Piazzale San Gottardo, si scende ai Giardini a Lago e si percorre l'intera passerella pedonale sull'acqua della diga.",
      en: "From Como San Giovanni Station: 12 min walk. Cross Piazzale San Gottardo, descend to lakefront gardens and stroll along the water walkway.",
      fr: "De la gare Como San Giovanni : 12 min à pied le long de la digue sur l'eau.",
      es: "Desde Como San Giovanni: 12 min a pie recorriendo la pasarela peatonal sobre el lago.",
      de: "Vom Bahnhof Como San Giovanni: 12 Min. Fußweg über den Seesteg.",
      ru: "От станции Como San Giovanni: 12 минут пешком через набережную и пешеходный мол прямо посреди залива."
    }
  },
  {
    id: "mon-6",
    category: "monumenti",
    routeCategory: "culturale",
    image: "assets/images/porta-torre.jpg",
    coordinates: { lat: 45.8062, lng: 9.0848 },
    streetViewEmbed: "https://www.google.com/maps/embed?pb=!4v1700000000002!6m8!1m7!1sCAoSLEFGMVFpcE1hS1YyYm9XTVhOek93eVRqZlRhYkdYQnBvdnlzcl8yZ0VnNjh3!2m2!1d45.806214!2d9.084812!3f330.1!4f8.5!5f0.7820865974627469",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8062,9.0848",
    priceRange: "Gratuito",
    title: {
      it: "Porta Torre & Le Mura Medievali",
      en: "Porta Torre & Medieval City Walls",
      fr: "Porta Torre & Remparts Médiévaux",
      es: "Porta Torre y Murallas Medievales",
      de: "Porta Torre & Mittelalterliche Stadtmauer",
      ru: "Башня Порта Торре и крепостные стены"
    },
    tag: {
      it: "Fortezza Medievale del 1192",
      en: "Medieval Fortress from 1192",
      fr: "Forteresse Médiévale de 1192",
      es: "Fortaleza Medieval de 1192",
      de: "Mittelalterliche Wehranlage von 1192",
      ru: "Средневековая крепость 1192 года"
    },
    shortDesc: {
      it: "Imponente bastione in pietra alto 40 metri eretto nel 1192 per difendere l'ingresso principale alla città dai milanesi.",
      en: "Imposing 40-meter-tall stone watchtower built in 1192 to protect the city's main entrance from Milanese forces.",
      fr: "Forte tour de 40 mètres de haut érigée en 1192 pour défendre l'entrée principale de la ville.",
      es: "Fuerte torre de 40 metros de altura erigida en 1192 para defender la entrada principal a la ciudad.",
      de: "Imposanter 40 Meter hoher steinerner Wehrturm aus dem Jahr 1192 zur Verteidigung des Haupteingangs.",
      ru: "Мощная 40-метровая каменная оборонительная башня 1192 года, защищавшая главный въезд в город со стороны Милана."
    },
    history: {
      it: "Eretta nel 1192 dopo le guerre decennali con Milano per fortificare l'ingresso meridionale della città. Alta 40 metri, conserva all'interno una struttura ad archi a tutto sesto su quattro piani e rappresentava la principale via d'accesso alla Como murata.",
      en: "Built in 1192 following decades-long warfare against Milan to heavily fortify Como's southern threshold. Rising 40 meters, its inner face features four tiers of Romanesque rounded arches framing what was the guarded entrance to walled Como.",
      fr: "Érigée en 1192 à la suite des guerres contre Milan pour fortifier l'accès sud. Haute de 40 mètres, elle présente à l'intérieur quatre niveaux d'arches en plein cintre.",
      es: "Construida en 1192 tras las guerras con Milán para fortificar el acceso meridional. Con 40 metros de altura, alberga cuatro plantas con arquerías de medio punto.",
      de: "Erbaut 1192 nach den Kriegen mit Mailand zur Sicherung des Südtors. Der 40 Meter hohe Turm besitzt im Inneren Rundbogenarkaden auf vier Ebenen.",
      ru: "Возведена в 1192 году после десятилетней войны с Миланом для укрепления южных рубежей Комо. 40-метровая башня сохранила открытую внутреннюю аркаду на четырех ярусах и служила главными парадными воротами укрепленного города."
    },
    curiosity: {
      it: "In epoca medievale la torre era circondata da un profondo fossato difensivo con ponte levatoio. È uno degli esempi di architettura militare romanica meglio conservati dell'intera Lombardia.",
      en: "In medieval times, the tower was surrounded by a deep defensive moat and accessed via a heavy wooden drawbridge. It stands as one of the best-preserved specimens of Romanesque military architecture in Lombardy.",
      fr: "Au Moyen Âge, la tour était ceinturée d'un fossé profond franchissable uniquement par pont-levis. C'est l'un des rares vestiges militaires romans intacts de Lombardie.",
      es: "En época medieval contaba con un foso defensivo y puente levadizo. Representa uno de los ejemplos de arquitectura militar románica mejor conservados del norte italiano.",
      de: "Im Mittelalter umgab den Turm ein tiefer Burggraben mit Zugbrücke. Er zählt zu den besterhaltenen romanischen Wehrbauten der Lombardei.",
      ru: "В средневековье башню окружал глубокий оборонительный ров с подъемным мостом. Это один из наиболее сохранившихся образцов романской военной фортификации во всей Ломбардии."
    },
    hours: {
      it: "Visibile esternamente tutti i giorni 24h (Piazza Vittoria)",
      en: "Exterior visible 24/7 (Piazza Vittoria)",
      fr: "Visible de l'extérieur 24h/24 (Piazza Vittoria)",
      es: "Visible desde el exterior las 24 horas (Piazza Vittoria)",
      de: "Außenbesichtigung rund um die Uhr (Piazza Vittoria)",
      ru: "Осмотр снаружи круглосуточно (Piazza Vittoria)"
    },
    price: {
      it: "Accesso esterno gratuito",
      en: "Free exterior access",
      fr: "Accès extérieur gratuit",
      es: "Acceso exterior libre y gratuito",
      de: "Außenbereich kostenlos",
      ru: "Бесплатно (пешеходная площадь)"
    },
    address: "Piazza Vittoria, 22100 Como",
    phone: "",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 8 minuti a piedi (700 metri). Si scende Via Gallio, si gira a destra su Viale Varese costeggiando il parco fino a Piazza Vittoria.",
      en: "From Como San Giovanni Station: 8 min walk (700 m). Down Via Gallio, right along Viale Varese park to Piazza Vittoria.",
      fr: "De la gare Como San Giovanni : 8 min à pied par Via Gallio et Viale Varese.",
      es: "Desde la estación Como San Giovanni: 8 min a pie siguiendo Viale Varese.",
      de: "Vom Bahnhof Como San Giovanni: 8 Min. zu Fuß über Via Gallio und Viale Varese.",
      ru: "От вокзала Como San Giovanni: 8 минут пешком (700 м). Спуститься по лестнице Виа Галлио и повернуть направо вдоль парка Виале Варезе прямо к башне на Пьяцца Виттория."
    }
  },

  // ==========================================
  // B. CULTURALE - PARTE 2: VILLE STORICHE DEL LAGO (5 ville con viste 360°)
  // ==========================================
  {
    id: "vil-1",
    category: "ville",
    routeCategory: "culturale",
    image: "assets/images/villa-olmo.jpg",
    coordinates: { lat: 45.8193, lng: 9.0660 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8193,9.0660&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8193,9.0660",
    priceRange: "Parco Gratuito",
    title: {
      it: "Villa Olmo",
      en: "Villa Olmo",
      fr: "Villa Olmo",
      es: "Villa Olmo",
      de: "Villa Olmo",
      ru: "Вилла Ольмо (Villa Olmo)"
    },
    tag: {
      it: "Reggia Neoclassica e Giardino all'Inglese",
      en: "Neoclassical Palace & English Gardens",
      fr: "Palais Néoclassique et Jardin Romantique",
      es: "Palacio Neoclásico y Parque Romántico",
      de: "Klassizistischer Prachtpalast & Seepark",
      ru: "Неоклассический дворец и парк у воды"
    },
    shortDesc: {
      it: "Maestosa dimora aristocratica neoclassica con scenografico parco monumentale affacciato sulle acque del lago.",
      en: "Como's grandest neoclassical lakeside mansion, framed by statues, fountains, and a romantic botanical park.",
      fr: "Majestueuse résidence néoclassique ceinte d'un parc paysager monumental au bord du lac.",
      es: "Majestuosa villa neoclásica con un espectacular parque botánico junto a las aguas del lago.",
      de: "Prächtiges neoklassizistisches Herrenhaus mit weitläufigem Skulpturenpark direkt am Wasser.",
      ru: "Величественная неоклассическая резиденция маркизов Одескальки с грандиозным парком у кромки озера."
    },
    history: {
      it: "Costruita tra la fine del Settecento e l'inizio dell'Ottocento su commissione del marchese Innocenzo Odescalchi dall'architetto Simone Cantoni. Ha ospitato sovrani e statisti illustri, tra cui Napoleone Bonaparte nel 1797, l'imperatore d'Austria Francesco II e Giuseppe Garibaldi.",
      en: "Commissioned in the late 18th century by Marquis Innocenzo Odescalchi and designed by Swiss-Italian architect Simone Cantoni. Famed for hosting historical figures including Napoleon Bonaparte in 1797, Austrian Emperor Franz II, and Garibaldi.",
      fr: "Construite à la fin du XVIIIe siècle pour le marquis Innocenzo Odescalchi. Elle accueillit Napoléon Bonaparte, l'empereur François II et Garibaldi.",
      es: "Diseñada por Simone Cantoni para el marqués Innocenzo Odescalchi a finales del siglo XVIII. Acogió a Napoleón y a Garibaldi.",
      de: "Ende des 18. Jahrhunderts von Simone Cantoni erbaut. Historischer Zufluchtsort von Napoleon Bonaparte und Garibaldi.",
      ru: "Построена в конце XVIII века архитектором Симоне Кантони для маркиза Одескальки. Здесь останавливались Наполеон Бонапарт в 1797 году и Джузеппе Гарибальди."
    },
    curiosity: {
      it: "Prende il nome da un olmo secolare leggendario (oggi scomparso) che adornava il giardino originario. Il parco è attraversato dal 'Chilometro della Conoscenza', sentiero che collega Villa Olmo a Villa del Grumello e Villa Sucota.",
      en: "Named after a legendary ancient elm tree that once graced its grounds. The park is the starting point for the 'Kilometre of Knowledge' scenic cultural trail connecting three historic villas.",
      fr: "Tire son nom d'un orme centenaire aujourd'hui disparu. Le parc abrite le départ du 'Kilomètre de la Connaissance'.",
      es: "Debe su nombre a un olmo centenario legendario. Inicia la famosa ruta peatonal del 'Kilómetro del Conocimiento'.",
      de: "Benannt nach einer uralten Ulme (Olmo). Startpunkt des malerischen Wanderwegs 'Kilometer des Wissens'.",
      ru: "Названа в честь векового вяза (olmo), росшего в саду. Отсюда начинается «Километр знаний» — тропа, объединяющая парки трех старинных вилл."
    },
    hours: {
      it: "Parco: 07:00–19:00 (Inverno) / 07:00–23:00 (Estate). Interno villa aperto durante mostre.",
      en: "Park: 07:00–19:00 (Winter) / 07:00–23:00 (Summer). Interior open during exhibitions.",
      fr: "Parc : 07:00–19:00 (Hiver) / 07:00–23:00 (Été). Intérieur ouvert lors d'expositions.",
      es: "Parque: 07:00–19:00 (Invierno) / 07:00–23:00 (Verano).",
      de: "Park: 07:00–19:00 (Winter) / 07:00–23:00 (Sommer). Villa bei Ausstellungen.",
      ru: "Парк: 07:00–19:00 (зима) / 07:00–23:00 (лето). Залы виллы открыты во время выставок."
    },
    price: {
      it: "Parco monumentale gratuito (Mostre temporanee: ~10–15 €)",
      en: "Park admission free (Temporary exhibitions: ~€10–15)",
      fr: "Parc gratuit (Expositions temporaires : ~10–15 €)",
      es: "Parque gratuito (Exposiciones temporales: ~10–15 €)",
      de: "Parkeintritt frei (Sonderausstellungen: ~10–15 €)",
      ru: "Парк — бесплатно (Выставки во дворце: ~10–15 €)"
    },
    address: "Via Simone Cantoni 1, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 18 minuti a piedi (1,4 km) lungo la suggestiva passeggiata litoranea pedonale Lino Gelpi che costeggia l'hangar degli idrovolanti e il lago.",
      en: "From Como San Giovanni Station: 18 min scenic walk (1.4 km) along the pedestrian lakeside promenade Passeggiata Lino Gelpi.",
      fr: "De la gare Como San Giovanni : 18 min à pied le long de la promenade du lac.",
      es: "Desde Como San Giovanni: 18 min a pie por el paseo marítimo peatonal.",
      de: "Vom Bahnhof Como San Giovanni: 18 Min. idyllischer Seespaziergang über die Passeggiata Lino Gelpi.",
      ru: "От станции Como San Giovanni: 18 минут пешком (1,4 км) по живописной набережной Пасседжата Лино Джельпи вдоль воды."
    }
  },
  {
    id: "vil-2",
    category: "ville",
    routeCategory: "culturale",
    image: "assets/images/balbianello.jpg",
    coordinates: { lat: 45.9654, lng: 9.2025 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.9654,9.2025&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.9654,9.2025&entry=ttu",
    priceRange: "€13–24",
    title: {
      it: "Villa del Balbianello (Lenno - Tremezzina)",
      en: "Villa del Balbianello (Lenno - Tremezzina)",
      fr: "Villa del Balbianello (Lenno - Tremezzina)",
      es: "Villa del Balbianello (Lenno - Tremezzina)",
      de: "Villa del Balbianello (Lenno - Tremezzina)",
      ru: "Вилла дель Бальбьянелло (Ленно - Тремеццина)"
    },
    tag: {
      it: "Patrimonio FAI & Set Cinematografico Mondiale",
      en: "FAI Heritage Site & Iconic Film Location",
      fr: "Trésor du FAI & Décor de Cinéma Mythique",
      es: "Patrimonio FAI y Escenario de Cine Mundial",
      de: "FAI-Kulturerbe & Berühmte Filmkulisse",
      ru: "Шедевр фонда FAI и легендарная кинолокация"
    },
    shortDesc: {
      it: "Sorge sulla punta boscosa della penisola di Lavedo: celebre per la loggia a tre arcate ricoperta di ficus pumila e i giardini a terrazza.",
      en: "Perched dramatically on the wooded tip of the Lavedo peninsula, renowned for its ivy-clad triple-arched loggia and terraced lakeside gardens.",
      fr: "Bâtie sur la péninsule boisée de Lavedo, célèbre pour sa loggia tapissée de lierre et ses panoramas cinématographiques.",
      es: "Ubicada en la boscosa península de Lavedo, famosa por su logia de tres arcos y terrazas ajardinadas sobre el agua.",
      de: "Auf der bewaldeten Landzunge von Lavedo gelegen, weltberühmt für ihre mit Kletterfeigen bewachsene Loggia.",
      ru: "Расположена на лесистом мысе Лаведо: знаменитая лоджия с тремя арками, увитая плющом, и террасные сады над озерной гладью."
    },
    history: {
      it: "Eretta nel 1787 dal cardinale Angelo Maria Durini sulle rovine di un antico convento francescano. Nel Novecento venne acquistata dall'esploratore e collezionista Guido Monzino (capo della prima spedizione italiana sull'Everest nel 1973), che la arredò con mappe rare e cimeli di viaggio e la lasciò in eredità al FAI nel 1988.",
      en: "Built in 1787 by Cardinal Angelo Maria Durini on the remains of a Franciscan monastery. Later acquired by explorer Guido Monzino, who led Italy's first Everest ascent in 1973; upon his death, he bequeathed the estate to the Italian National Trust (FAI).",
      fr: "Érigée en 1787 par le cardinal Durini, puis restaurée par l'explorateur Guido Monzino qui en fit don au FAI en 1988.",
      es: "Construida en 1787 por el cardenal Durini y posteriormente propiedad del explorador Guido Monzino, legada al FAI en 1988.",
      de: "1787 von Kardinal Durini erbaut und später vom Bergsteiger Guido Monzino bewohnt, der sie dem FAI vermachte.",
      ru: "Построена в 1787 году кардиналом Анджело Дурини. В XX веке виллу приобрел путешественник Гвидо Мондзино (покоритель Эвереста 1973 года), завещавший ее итальянскому фонду защиты наследия (FAI)."
    },
    curiosity: {
      it: "Ha fatto da scenografia a celebri capolavori del cinema internazionale: la villa di James Bond in 007 Casino Royale (con Daniel Craig ed Eva Green) e il matrimonio segreto di Anakin Skywalker e Padmé Amidala in Star Wars: Episodio II - L'attacco dei cloni.",
      en: "Iconic cinematic backdrop: featured as James Bond's recovery retreat in 'Casino Royale' (007) and the secret wedding sanctuary of Anakin and Padmé in 'Star Wars: Episode II - Attack of the Clones'.",
      fr: "Décor inoubliable de James Bond dans 'Casino Royale' et du mariage d'Anakin et Padmé dans 'Star Wars : Épisode II'.",
      es: "Escenario de '007 Casino Royale' y de la boda secreta en 'Star Wars: Episodio II - El ataque de los clones'.",
      de: "Berühmter Drehort für James Bond 'Casino Royale' und die Hochzeitsszene in 'Star Wars: Episode II'.",
      ru: "Здесь снимали культовые сцены мирового кино: виллу Джеймса Бонда в «Казино Рояль» (2006) и тайную свадьбу Энакина Скайуокера и Падме в «Звёздных войнах: Эпизод II»."
    },
    hours: {
      it: "10:00–18:00 (Da metà marzo a inizio novembre; Lunedì e Mercoledì chiuso)",
      en: "10:00–18:00 (Mid-March to early Nov; Closed Mondays & Wednesdays)",
      fr: "10:00–18:00 (Mi-mars à début nov ; fermé lundi et mercredi)",
      es: "10:00–18:00 (Mediados de marzo a nov; cerrado lunes y miércoles)",
      de: "10:00–18:00 (Mitte März bis Nov; Montag und Mittwoch Ruhetag)",
      ru: "10:00–18:00 (С середины марта по ноябрь; понедельник и среда — выходные)"
    },
    price: {
      it: "Solo Giardino: ~13 € intero (~9 € ridotto) | Villa + Giardino (visita guidata): ~24 €",
      en: "Garden only: ~€13 regular (~€9 reduced) | Villa + Garden (guided tour): ~€24",
      fr: "Jardin seul : ~13 € (~9 € réduit) | Villa + Jardin : ~24 €",
      es: "Solo Jardín: ~13 € (~9 € reducida) | Villa + Jardín: ~24 €",
      de: "Nur Garten: ~13 € | Villa + Garten (Führung): ~24 €",
      ru: "Только парк: ~13 € (~9 € льготный) | Дворец + Парк (экскурсия): ~24 €"
    },
    address: "Via Guido Monzino 1, Tremezzina - Frazione Lenno (CO)",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. Battello da Como a Lenno (70 min) oppure autobus linea C10 (45 min) + taxi-boat panoramico o passeggiata a piedi di 20 min dal Lido di Lenno.",
      en: "Start & Finish: Como San Giovanni Station. Ferry from Como to Lenno (70 min) or bus C10 (45 min) + scenic taxi-boat from Lenno dock.",
      fr: "Départ et retour : gare Como San Giovanni. Bateau de Côme à Lenno + taxi-boat.",
      es: "Salida y llegada: Estación Como San Giovanni. Barco hasta Lenno + taxi-boat panorámico.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Schiff von Como nach Lenno + Taxiboot.",
      ru: "Старт и финиш: Станция Como San Giovanni. Катер из Комо до Ленно (70 мин) или автобус C10 + живописный катер-такси от набережной Ленно прямо к вилле."
    }
  },
  {
    id: "vil-3",
    category: "ville",
    routeCategory: "culturale",
    image: "assets/images/villa-monastero.jpg",
    coordinates: { lat: 46.0076, lng: 9.2858 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=46.0076,9.2858&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=46.0076,9.2858",
    priceRange: "€10–13",
    title: {
      it: "Villa Monastero (Varenna)",
      en: "Villa Monastero (Varenna)",
      fr: "Villa Monastero (Varenna)",
      es: "Villa Monastero (Varenna)",
      de: "Villa Monastero (Varenna)",
      ru: "Вилла Монастеро (Варенна)"
    },
    tag: {
      it: "Giardino Botanico di 2 km & Casa Museo",
      en: "2 km Botanical Waterfront & House Museum",
      fr: "Jardin Botanique de 2 km & Maison-Musée",
      es: "Jardín Botánico de 2 km y Casa Museo",
      de: "2 km Seepromenaden-Botanischer Garten & Museum",
      ru: "2-километровый ботанический сад и музей"
    },
    shortDesc: {
      it: "Antico monastero cistercense trasformato in sontuosa dimora con uno spettacolare giardino che si estende per 2 km lungo la riva.",
      en: "Former Cistercian nunnery transformed into an eclectic patrician villa with a 2-kilometer botanical shoreline garden.",
      fr: "Ancien monastère cistercien devenu demeure patricienne, célèbre pour son parc de 2 km longeant le lac.",
      es: "Antiguo monasterio cisterciense convertido en lujosa villa con 2 kilómetros de jardín botánico sobre la orilla.",
      de: "Ehemaliges Zisterzienserkloster mit prächtigem 2 Kilometer langem botanischen Ufergarten.",
      ru: "Бывший цистерцианский монастырь, ставший патрицианской виллой с уникальным двухкилометровым ботаническим садом."
    },
    history: {
      it: "Nacque alla fine del XII secolo come monastero femminile cistercense dedicato a Santa Maria. Soppresso da Papa Pio V nel 1567, divenne residenza nobiliare della famiglia Mornico e poi del naturalista tedesco Walter Kees. È celebre a livello scientifico: nel 1954 Enrico Fermi vi tenne le sue celebri lezioni magistrali di fisica nucleare.",
      en: "Founded in the late 12th century as a Cistercian convent. Deconsecrated in 1567 and later transformed into a sumptuous mansion. In 1954, Nobel laureate Enrico Fermi delivered his historic lectures on nuclear physics here.",
      fr: "Fondé au XIIe siècle comme couvent cistercien. En 1954, le prix Nobel Enrico Fermi y dispensa ses célèbres cours de physique nucléaire.",
      es: "Fundado en el siglo XII como monasterio. En 1954, el físico y premio Nobel Enrico Fermi impartió aquí sus históricas lecciones.",
      de: "Im 12. Jahrhundert als Kloster gegründet. 1954 hielt Nobelpreisträger Enrico Fermi hier seine berühmten Vorlesungen.",
      ru: "Основана в конце XII века как цистерцианский монастырь. В 1954 году лауреат Нобелевской премии Энрико Ферми читал здесь свои знаменитые лекции по ядерной физике."
    },
    curiosity: {
      it: "Il microclima eccezionale del lago permette la crescita di specie esotiche rare: agavi, palme dell'Atlante, cipressi monumentali, cedri e glicini secolari che scendono a cascata sulle balaustre in pietra direttamente sopra l'acqua.",
      en: "Its gentle microclimate supports rare exotic flora: agaves, African palms, monumental cypresses, and century-old wisterias cascading over marble balustrades straight into the blue water.",
      fr: "Le microclimat permet la floraison de plantes exotiques rares et de glycines centenaires plongeant dans le lac.",
      es: "Su microclima permite el desarrollo de plantas exóticas, palmeras y glicinas centenarias que acarician el agua.",
      de: "Das milde Mikroklima lässt Agaven, Palmen und uralte Glyzinien über den Seeufer-Balustraden üppig gedeihen.",
      ru: "Уникальный микроклимат позволяет расти субтропическим пальмам, агавам и глициниям, ниспадающим с резных балюстрад прямо в прозрачную воду озера."
    },
    hours: {
      it: "09:30–19:30 (Da marzo a novembre; orari ridotti in inverno)",
      en: "09:30–19:30 (March to November; reduced hours in winter)",
      fr: "09:30–19:30 (Mars à novembre)",
      es: "09:30–19:30 (Marzo a noviembre)",
      de: "09:30–19:30 (März bis November)",
      ru: "09:30–19:30 (С марта по ноябрь; зимой по специальному графику)"
    },
    price: {
      it: "Solo Giardino Botanico: ~10 € | Giardino + Casa Museo: ~13 € (Ridotti per studenti e over 65)",
      en: "Botanical Garden only: ~€10 | Garden + House Museum: ~€13 (Discounts available)",
      fr: "Jardin seul : ~10 € | Jardin + Musée : ~13 €",
      es: "Solo Jardín Botánico: ~10 € | Jardín + Casa Museo: ~13 €",
      de: "Nur Botanischer Garten: ~10 € | Garten + Museum: ~13 €",
      ru: "Только сад: ~10 € | Сад + Дом-музей: ~13 €"
    },
    address: "Viale Giovanni Polvani 4, Varenna (LC)",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. Treno o battello panoramico centro lago da Como a Bellagio e traghetto per Varenna (oppure treno diretto da Monza a Varenna-Esino per chi arriva da sud).",
      en: "Start & Finish: Como San Giovanni Station. Fast boat from Como to Bellagio, then 15 min ferry to picturesque Varenna.",
      fr: "Départ et retour : gare Como San Giovanni. Bateau de Côme à Bellagio puis ferry pour Varenna.",
      es: "Salida y llegada: Estación Como San Giovanni. Barco hasta Bellagio y transbordo a Varenna.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Schiff nach Bellagio, Weiterfahrt mit Fähre nach Varenna.",
      ru: "Старт и финиш: Станция Como San Giovanni. Скоростной катер из Комо до Белладжо, затем 15 минут на пароме до открыточной Варенны."
    }
  },
  {
    id: "vil-4",
    category: "ville",
    routeCategory: "culturale",
    image: "assets/images/villa-oleandra.jpg",
    coordinates: { lat: 45.8825, lng: 9.1386 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8825,9.1386&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8825,9.1386",
    priceRange: "Esterno Gratuito",
    title: {
      it: "Villa Oleandra (Laglio)",
      en: "Villa Oleandra (Laglio)",
      fr: "Villa Oleandra (Laglio)",
      es: "Villa Oleandra (Laglio)",
      de: "Villa Oleandra (Laglio)",
      ru: "Вилла Олеандра (Лальо)"
    },
    tag: {
      it: "Icona di Riservatezza & Residenza di George Clooney",
      en: "Icon of Elegance & George Clooney's Retreat",
      fr: "Icône de Prestige & Demeure de George Clooney",
      es: "Icono de Privacidad y Residencia de George Clooney",
      de: "Diskretes Refugium & George Clooneys Anwesen",
      ru: "Символ уединения и резиденция Джорджа Клуни"
    },
    shortDesc: {
      it: "Celebre dimora nobiliare a picco sul lago a Laglio, rifugio estivo internazionale della star di Hollywood.",
      en: "Historic patrician lakefront estate in Laglio, worldwide famous as the Italian sanctuary of actor George Clooney.",
      fr: "Résidence patricienne sur la rive occidentale du lac à Laglio, célèbre havre de paix de George Clooney.",
      es: "Residencia histórica en Laglio frente al lago, famosa en todo el mundo por ser la propiedad de George Clooney.",
      de: "Geschichtsträchtiges Seegrundstück in Laglio, weltweit bekannt als italienische Wahlheimat von George Clooney.",
      ru: "Аристократическая вилла у воды в тихом городке Лальо, ставшая всемирно известной благодаря Джорджу Клуни."
    },
    history: {
      it: "Risalente al 1720, fu proprietà della famiglia Stoppani e poi dell'imprenditore milanese Vitali e della famiglia Heinz. Nel 2002 fu acquistata dall'attore e regista George Clooney, che si innamorò del Lago di Como dopo aver avuto un guasto alla sua motocicletta proprio davanti ai cancelli della villa.",
      en: "Dating back to 1720, formerly owned by the Stoppani and Heinz families. In 2002, actor George Clooney bought the estate after breaking down on his motorbike right outside its gates, instantly falling in love with Lake Como.",
      fr: "Construite vers 1720, elle fut acquise en 2002 par George Clooney, tombé sous le charme du lac suite à une panne de moto devant ses grilles.",
      es: "Originaria de 1720. En 2002 fue adquirida por George Clooney tras averiársele su motocicleta justo delante de sus puertas.",
      de: "Erbaut um 1720. 2002 von George Clooney erworben, der sich bei einer Panne mit dem Motorrad in den Ort verliebte.",
      ru: "Построена в 1720 году. В 2002 году ее приобрел актер Джордж Клуни, влюбившись в озеро Комо после случайной поломки мотоцикла возле ворот виллы."
    },
    curiosity: {
      it: "A differenza delle ville museo, Villa Oleandra è una residenza privata protetta e non aperta alle visite interne. Il modo più elegante, rispettoso e spettacolare per ammirarla è dall'acqua a bordo di un battello o motoscafo Riva in legno, o percorrendo la suggestiva passeggiata litoranea di Laglio.",
      en: "Unlike museum villas, Villa Oleandra is an exclusive private estate not open to the public. The most respectful and breathtaking way to view it is from the water aboard a classic wooden Riva boat or public ferry.",
      fr: "Contrairement aux musées, c'est une propriété strictement privée. On l'admire avec émotion depuis les flots en bateau ou le long de la promenade de Laglio.",
      es: "Es una finca privada protegida. La mejor forma de contemplarla es desde el agua a bordo de una lancha o ferry público.",
      de: "Privates Anwesen, nicht öffentlich zugänglich. Die schönste und respektvollste Sicht genießt man vom Wasser aus per Boot.",
      ru: "Вилла является частным владением и закрыта для экскурсий. Самый красивый и деликатный способ полюбоваться ее фасадом и парком — с воды на борту катера или парома."
    },
    hours: {
      it: "Vista esterna sempre accessibile dalla passeggiata pubblica e dal lago (Proprietà privata interna non visitabile)",
      en: "External view 24/7 from waterfront promenade and lake (Private interior)",
      fr: "Vue extérieure permanente depuis le lac et la promenade",
      es: "Vista exterior accesible permanentemente desde el paseo público y el barco",
      de: "Von der Seepromenade und vom Wasser aus jederzeit sichtbar",
      ru: "Внешний осмотр доступен круглосуточно с прогулочной набережной Лальо и с борта катера"
    },
    price: {
      it: "Vista esterna gratuita (Costo del battello di linea: ~4–8 €)",
      en: "External view free (Public ferry fare: ~€4–8)",
      fr: "Vue extérieure gratuite (Billet de bateau : ~4–8 €)",
      es: "Vista exterior gratuita (Billete de barco de línea: ~4–8 €)",
      de: "Außenansicht kostenlos (Fährbillett: ~4–8 €)",
      ru: "Осмотр снаружи — бесплатно (Билет на рейсовый катер: ~4–8 €)"
    },
    address: "Via Vecchia Regina 20, 22010 Laglio (CO)",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. Autobus linea C10 o C20 (20 min) oppure battello del primo bacino fino allo scalo di Laglio.",
      en: "Departure & Return: Como San Giovanni Station. Bus C10/C20 (20 min) or scenic boat up the western branch.",
      fr: "Départ et retour : gare Como San Giovanni. Bus C10 (20 min) ou bateau.",
      es: "Salida y llegada: Estación Como San Giovanni. Autobús C10 o barco.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Bus C10 (20 Min.) oder Linienschiff.",
      ru: "Старт и финиш: Станция Como San Giovanni. Автобус C10 (20 минут) или рейсовый катер вдоль западного рукава озера."
    }
  },
  {
    id: "vil-5",
    category: "ville",
    routeCategory: "culturale",
    image: "assets/images/villa-carlotta.jpg",
    coordinates: { lat: 45.9868, lng: 9.2291 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.9868,9.2291&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.9868,9.2291",
    priceRange: "€15",
    title: {
      it: "Villa Carlotta (Tremezzo)",
      en: "Villa Carlotta (Tremezzo)",
      fr: "Villa Carlotta (Tremezzo)",
      es: "Villa Carlotta (Tremezzo)",
      de: "Villa Carlotta (Tremezzo)",
      ru: "Вилла Карлотта (Тремеццо)"
    },
    tag: {
      it: "Capolavori di Canova & Fioritura Botanica di 70.000 mq",
      en: "Canova Sculptures & 70,000 sqm Botanical Garden",
      fr: "Sculptures de Canova & Parc Botanique de 7 Hectares",
      es: "Obras Maestras de Canova y Jardín de 70.000 m²",
      de: "Canova-Meisterwerke & 70.000 qm Rhododendrenpark",
      ru: "Скульптуры Кановы и ботанический сад 70 000 кв.м"
    },
    shortDesc: {
      it: "Celebre in tutto il mondo per il suo immenso parco botanico, le fioriture primaverili di azalee e le sculture neoclassiche.",
      en: "Celebrated worldwide for its vast botanical gardens, spring explosions of azaleas and rhododendrons, and original Antonio Canova marbles.",
      fr: "Mondialement réputée pour ses azalées centenaires en fleurs et sa collection d'art abritant des chefs-d'œuvre de Canova.",
      es: "Célebre en todo el mundo por su inmenso jardín botánico, sus floraciones primaverales y esculturas de Canova.",
      de: "Weltberühmt für das Blütenmeer von Azaleen und Rhododendren sowie Canovas klassizistische Meisterwerke.",
      ru: "Всемирно известная усадьба с роскошным весенним цветением рододендронов и азалий и подлинными скульптурами Антонио Кановы."
    },
    history: {
      it: "Iniziata alla fine del Seicento dal marchese Giorgio Clerici e portata al massimo splendore nell'Ottocento dal politico e collezionista Giovanni Battista Sommariva, che la riempì di capolavori di Canova, Thorvaldsen e Hayez. Nel 1843 fu donata dalla principessa Marianna dei Paesi Bassi alla figlia Carlotta per le sue nozze.",
      en: "Begun in 1690 by Marquis Giorgio Clerici and elevated to aristocratic zenith by Gian Battista Sommariva, who filled its salons with masterworks by Canova and Thorvaldsen. Later gifted to Princess Charlotte of Prussia on her wedding day.",
      fr: "Construite en 1690 par le marquis Clerici, puis enrichie d'œuvres d'art par Sommariva. Offerte en 1843 à la princesse Charlotte de Prusse pour son mariage.",
      es: "Iniciada a finales del siglo XVII por el marqués Clerici y embellecida por Sommariva con obras de Canova. En 1843 fue regalo de bodas a la princesa Carlota de Prusia.",
      de: "1690 begonnen und von Sommariva mit Skulpturen von Antonio Canova und Thorvaldsen ausgestattet. 1843 Hochzeitsgeschenk für Prinzessin Charlotte.",
      ru: "Заложена в конце XVII века маркизом Клеричи. Позже меценат Джан Баттиста Соммарива собрал здесь уникальную коллекцию скульптур Кановы и Торвальдсена. В 1843 году виллу подарили принцессе Карлотте Прусской на свадьбу."
    },
    curiosity: {
      it: "Nelle sale museali si può ammirare il celebre gruppo scultoreo in marmo 'Amore e Psiche' (replica autografa di Adamo Tadolini dallo studio di Antonio Canova) e il capolavoro 'L'ultimo bacio di Romeo e Giulietta' di Francesco Hayez.",
      en: "Its galleries host the breathtaking 'Cupid and Psyche' marble composition and Francesco Hayez's romantic painting 'The Last Kiss of Romeo and Juliet'.",
      fr: "Le musée abrite le saisissant groupe de 'L'Amour et Psyché' ainsi que la célèbre toile de Francesco Hayez 'Le Dernier Baiser de Roméo et Juliette'.",
      es: "En sus salones se exhibe el célebre grupo escultórico 'Amor y Psique' y 'El último beso de Romeo y Julieta' de Hayez.",
      de: "Zu bewundern sind das Marmor-Meisterwerk 'Amor und Psyche' sowie das berühmte Gemälde von Francesco Hayez.",
      ru: "В залах музея выставлена прославленная скульптурная группа «Амур и Психея» школы Кановы и знаменитое полотно Франческо Айеца «Последний поцелуй Ромео и Джульетты»."
    },
    hours: {
      it: "10:00–19:00 (Tutti i giorni da marzo a inizio novembre)",
      en: "10:00–19:00 (Daily from March through early November)",
      fr: "10:00–19:00 (Tous les jours de mars à novembre)",
      es: "10:00–19:00 (Todos los días de marzo a noviembre)",
      de: "10:00–19:00 (Täglich von März bis November)",
      ru: "10:00–19:00 (Ежедневно с марта по начало ноября)"
    },
    price: {
      it: "Intero: ~15,00 € | Studenti/Senior: ~10,00 € | Famiglia: ~35,00 €",
      en: "Adults: ~€15.00 | Students/Seniors: ~€10.00 | Family pass: ~€35.00",
      fr: "Adulte : ~15,00 € | Étudiant/Senior : ~10,00 €",
      es: "Adulto: ~15,00 € | Estudiante/Senior: ~10,00 €",
      de: "Erwachsene: ~15,00 € | Studenten/Senioren: ~10,00 €",
      ru: "Взрослый: ~15,00 € | Студенты/Пенсионеры: ~10,00 €"
    },
    address: "Via Regina 2, 22016 Tremezzina - Frazione Tremezzo (CO)",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. Battello rapido da Como a Tremezzo (pontile a 200 m dalla villa) o autobus linea C10 lungo la Strada Statale Regina.",
      en: "Start & Return: Como San Giovanni Station. Fast boat from Como to Tremezzo pier (200 m from villa entrance) or bus C10.",
      fr: "Départ et retour : gare Como San Giovanni. Bateau rapide jusqu'à l'embarcadère de Tremezzo.",
      es: "Salida y llegada: Estación Como San Giovanni. Barco rápido hasta el muelle de Tremezzo.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Schnellschiff zur Anlegestelle Tremezzo.",
      ru: "Старт и финиш: Станция Como San Giovanni. Скоростной катер из Комо прямо до причала Тремеццо (200 метров до входа в парк) или автобус C10."
    }
  },

  // ==========================================
  // C. NATURALISTICO (5 tappe - Start & Finish: Stazione Como San Giovanni)
  // ==========================================
  {
    id: "nat-1",
    category: "naturalistico",
    routeCategory: "naturalistico",
    image: "assets/images/brunate.jpg",
    coordinates: { lat: 45.8172, lng: 9.0863 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8172,9.0863&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8172,9.0863",
    priceRange: "€6.60 A/R",
    title: {
      it: "Funicolare Como–Brunate",
      en: "Como–Brunate Funicular Railway",
      fr: "Funiculaire Côme–Brunate",
      es: "Funicular Como–Brunate",
      de: "Standseilbahn Como–Brunate",
      ru: "Фуникулер Комо–Брунате"
    },
    tag: {
      it: "Ingegneria Storica del 1894 & Panorama",
      en: "Historic 1894 Alpine Railway & Vista",
      fr: "Génie Ferroviaire de 1894 & Panorama",
      es: "Ingeniería Histórica de 1894 y Mirador",
      de: "Historische Bergbahn von 1894",
      ru: "Исторический фуникулер 1894 года"
    },
    shortDesc: {
      it: "Storico trenino su cremagliera che sale 500 metri di dislivello in soli 7 minuti, regalando una vista aerea sul primo bacino.",
      en: "Charming historic cable railway climbing 500 vertical meters in 7 minutes to the panoramic 'Balcony of the Alps'.",
      fr: "Chemin de fer à crémaillère mythique grimpant 500 mètres de dénivelé en 7 minutes vers le balcon des Alpes.",
      es: "Histórico funicular que salva 500 metros de desnivel en 7 minutos ofreciendo vistas aéreas sublimes.",
      de: "Historische Seilbahn, die in nur 7 Minuten 500 Höhenmeter überwindet und Traumblicke schenkt.",
      ru: "Знаменитый исторический фуникулер, преодолевающий подъем в 500 метров за 7 минут к лучшей смотровой площадке Альп."
    },
    history: {
      it: "Inaugurata nel 1894 in piena Belle Époque per collegare Como alla prestigiosa stazione climatica montana di Brunate, costellata di ville in stile Liberty ed eclettico. Con una pendenza massima del 55%, è ancora oggi il mezzo più affascinante ed ecologico per raggiungere la vetta.",
      en: "Opened in 1894 during the Belle Époque to connect Como with the alpine retreat of Brunate, famed for its Art Nouveau villas. With a maximum gradient of 55%, it remains the ultimate panoramic journey.",
      fr: "Inauguré en 1894 pendant la Belle Époque pour relier la ville aux villas Art nouveau de Brunate. Pente maximale de 55 %.",
      es: "Inaugurado en 1894 para conectar Como con las villas modernistas de Brunate. Posee una pendiente máxima del 55%.",
      de: "1894 eröffnet, verbindet die Bahn Como mit den Jugendstilvillen in Brunate bei einer Steigung von bis zu 55%.",
      ru: "Открыт в 1894 году в эпоху Прекрасной эпохи для связи Комо с горным курортом Брунате. Максимальный уклон составляет 55%."
    },
    curiosity: {
      it: "A metà salita, le due carrozze si incrociano su un binario sdoppiato millimetrico. Dalla stazione d'arrivo lo sguardo spazia dall'intero ramo occidentale del lago fino alla skyline dei grattacieli di Milano nelle giornate limpide.",
      en: "Midway through the ascent, the two carriages pass each other on a precision bypass track. From the summit, vistas stretch all the way to Milan's skyscrapers on clear days.",
      fr: "À mi-parcours, les deux rames se croisent. Du sommet, la vue porte jusqu'aux gratte-ciel de Milan.",
      es: "A mitad de trayecto los dos coches se cruzan. En días despejados se divisan los rascacielos de Milán.",
      de: "Auf halber Strecke kreuzen sich die beiden Wagen. Bei klarer Sicht reicht der Blick bis nach Mailand.",
      ru: "На середине пути вагончики разъезжаются на разъезде. С верхней площадки в ясную погоду виден весь бассейн озера и небоскребы Милана."
    },
    hours: {
      it: "06:00–22:30 (Tutti i giorni; corse ogni 15-30 minuti, fino alle 24:00 in estate)",
      en: "06:00–22:30 (Daily; every 15-30 mins, until midnight in summer)",
      fr: "06:00–22:30 (Départs toutes les 15-30 minutes)",
      es: "06:00–22:30 (Frecuencia cada 15-30 minutos)",
      de: "06:00–22:30 (Alle 15-30 Minuten)",
      ru: "06:00–22:30 (Ежедневно; рейсы каждые 15–30 минут, летом до полуночи)"
    },
    price: {
      it: "Andata e ritorno: ~6,60 € | Corsa singola: ~3,60 €",
      en: "Round-trip: ~€6.60 | One-way: ~€3.60",
      fr: "Aller-retour : ~6,60 € | Aller simple : ~3,60 €",
      es: "Ida y vuelta: ~6,60 € | Solo ida: ~3,60 €",
      de: "Hin- und Rückfahrt: ~6,60 € | Einzelfahrt: ~3,60 €",
      ru: "Билет туда-обратно: ~6,60 € | В одну сторону: ~3,60 €"
    },
    address: "Piazza Alcide de Gasperi 4, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 15 minuti a piedi (1,1 km) costeggiando la riva nord del lago lungo Piazza Cavour e Lungo Lario Trieste.",
      en: "From Como San Giovanni Station: 15 min walk (1.1 km) along waterfront through Piazza Cavour to the lower funicular station.",
      fr: "De la gare Como San Giovanni : 15 min à pied le long du quai.",
      es: "Desde Como San Giovanni: 15 min a pie por el paseo marítimo.",
      de: "Vom Bahnhof Como San Giovanni: 15 Gehminuten am Seeufer entlang.",
      ru: "От станции Como San Giovanni: 15 минут пешком (1,1 км) вдоль набережной через площадь Кавур к нижней станции фуникулера."
    }
  },
  {
    id: "nat-2",
    category: "naturalistico",
    routeCategory: "naturalistico",
    image: "assets/images/faro-brunate.jpg",
    coordinates: { lat: 45.8239, lng: 9.1022 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8239,9.1022&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8239,9.1022",
    priceRange: "€2",
    title: {
      it: "Faro Voltiano (Brunate - San Maurizio)",
      en: "Voltian Lighthouse (Brunate)",
      fr: "Phare Voltien (Brunate - San Maurizio)",
      es: "Faro Voltiano (Brunate)",
      de: "Volta-Leuchtturm (Faro Voltiano, Brunate)",
      ru: "Маяк Вольты (Faro Voltiano, Брунате)"
    },
    tag: {
      it: "Torre Ottagonale & Vista a 360° sull'Arco Alpino",
      en: "Octagonal Tower & 360° Alpine Viewpoint",
      fr: "Tour Octogonale & Vue Panoramique à 360°",
      es: "Torre Octogonal y Panorámica 360° de los Alpes",
      de: "Achteckiger Leuchtturm mit 360°-Alpenpanorama",
      ru: "Восьмигранный маяк с панорамой 360° на Альпы"
    },
    shortDesc: {
      it: "Faro montano alto 29 metri eretto sulla cima del Monte Tre Croci che di notte illumina il lago con il tricolore italiano.",
      en: "A 29-meter high mountain lighthouse atop Monte Tre Croci, sweeping its tricolor beam across the Alps and lake each night.",
      fr: "Phare de montagne de 29 mètres qui illumine le lac des couleurs du drapeau italien chaque nuit.",
      es: "Faro de montaña de 29 metros que ilumina el lago cada noche con los colores de la bandera italiana.",
      de: "Ein 29 Meter hoher Leuchtturm auf dem Gipfel des Monte Tre Croci mit italienischem Dreifarben-Lichtkegel.",
      ru: "29-метровый горный маяк на вершине Монте Тре Крочи, озаряющий ночное озеро лучами цветов итальянского триколора."
    },
    history: {
      it: "Eretto nel 1927 in occasione del centenario voltiano su progetto dell'ingegnere Gabriele Giussani a 900 metri d'altitudine. Una scala a chiocciola interna di 143 gradini conduce alla balconata sommitale che domina l'intero arco alpino occidentale fino al Monte Rosa.",
      en: "Built in 1927 at 900 meters above sea level to honor Alessandro Volta. An internal spiral staircase of 143 steps leads to the lantern gallery offering unobstructed views of the Monte Rosa massif and Western Alps.",
      fr: "Érigé en 1927 à 900 m d'altitude. 143 marches mènent au sommet offrant un panorama saisissant sur le Mont Rose.",
      es: "Construido en 1927 a 900 metros de altitud con una escalera de caracol de 143 peldaños hasta su mirador.",
      de: "1927 auf 900 Metern Seehöhe erbaut; 143 Stufen führen zur Aussichtsplattform mit Blick bis zum Monte Rosa.",
      ru: "Построен в 1927 году на высоте 900 метров над уровнем моря. Винтовая лестница из 143 ступеней ведет на открытую галерею с видом на массив Монте-Роза."
    },
    curiosity: {
      it: "È uno dei pochissimi fari monumentali al mondo situati in alta montagna anziché sul mare. Di notte la sua lanterna proietta fasci di luce verde, bianca e rossa visibili a oltre 50 chilometri di distanza.",
      en: "One of the world's few high-altitude mountain lighthouses. At night its powerful optic casts vibrant green, white, and red beams visible up to 50 km away.",
      fr: "L'un des rares phares au monde perché en haute montagne et non sur le littoral.",
      es: "Uno de los escasos faros en el mundo situado en plena montaña y no en la costa marítima.",
      de: "Einer der seltenen Bergleuchttürme weltweit; sein Signal ist über 50 km weit sichtbar.",
      ru: "Один из редчайших в мире маяков, возведенных не на морском побережье, а высоко в горах. Свет его прожектора виден на расстоянии более 50 км."
    },
    hours: {
      it: "10:00–19:00 (Tutti i giorni in primavera/estate; nei weekend in autunno)",
      en: "10:00–19:00 (Daily in spring/summer; weekends in autumn)",
      fr: "10:00–19:00 (Tous les jours en été ; week-ends en automne)",
      es: "10:00–19:00 (Primavera y verano; fines de semana en otoño)",
      de: "10:00–19:00 (Frühjahr/Sommer täglich; Herbst an Wochenenden)",
      ru: "10:00–19:00 (Ежедневно весной и летом; осенью по выходным)"
    },
    price: {
      it: "Ingresso salita al faro: ~2,00 €",
      en: "Lighthouse climb: ~€2.00",
      fr: "Montée au phare : ~2,00 €",
      es: "Subida al faro: ~2,00 €",
      de: "Aufstieg zum Leuchtturm: ~2,00 €",
      ru: "Подъем на маяк: ~2,00 €"
    },
    address: "Località San Maurizio, 22034 Brunate (CO)",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. A piedi fino alla Funicolare di Como, salita a Brunate + passeggiata panoramica di 25 min o navetta comunale per San Maurizio.",
      en: "Start & Return: Como San Giovanni Station. Walk to Funicular, ascend to Brunate + 25 min scenic uphill stroll or local shuttle bus.",
      fr: "Départ et retour : gare Como San Giovanni. Funiculaire puis navette ou sentier pédestre.",
      es: "Salida y llegada: Estación Como San Giovanni. Funicular y 25 min a pie.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Funicolare nach Brunate, 25 Min. Panorama-Spaziergang.",
      ru: "Старт и финиш: Станция Como San Giovanni. Фуникулер до Брунате + живописная пешая прогулка 25 минут по тропе вилл или микроавтобус до Сан-Маурицио."
    }
  },
  {
    id: "nat-3",
    category: "naturalistico",
    routeCategory: "naturalistico",
    image: "assets/images/baradello.jpg",
    coordinates: { lat: 45.7963, lng: 9.0792 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.7963,9.0792&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.7963,9.0792",
    priceRange: "€5",
    title: {
      it: "Parco Regionale Spina Verde & Castello Baradello",
      en: "Spina Verde Regional Park & Baradello Castle",
      fr: "Parc Régional Spina Verde & Château Baradello",
      es: "Parque Regional Spina Verde y Castillo Baradello",
      de: "Regionalpark Spina Verde & Burg Baradello",
      ru: "Региональный парк Спина Верде и замок Бараделло"
    },
    tag: {
      it: "Foreste Protette, Archeologia & Fortezza del 1158",
      en: "Protected Forests, Archaeology & 1158 Fortress",
      fr: "Forêt Préservée & Forteresse Médiévale de 1158",
      es: "Bosques Protegidos y Fortaleza Medieval de 1158",
      de: "Naturschutzgebiet & Kaiserburg von Barbarossa (1158)",
      ru: "Заповедный лес и крепость Барбароссы 1158 года"
    },
    shortDesc: {
      it: "Oasi naturalistica collinare con sentieri tra i boschi, scavi protostorici e la formidabile torre dell'imperatore Barbarossa.",
      en: "Pristine wooded regional park featuring prehistoric trails and the iconic medieval tower built by Emperor Frederick Barbarossa.",
      fr: "Parc naturel de collines verdoyantes abritant des vestiges celtes et le fier donjon de l'empereur Frédéric Barberousse.",
      es: "Parque natural colinar con senderos boscosos y la emblemática torre medieval del emperador Barbarroja.",
      de: "Waldreiches Naturschutzgebiet mit prähistorischen Pfaden und dem Bergfried von Kaiser Friedrich Barbarossa.",
      ru: "Живописный лесной парк на холмах с древними кельтскими тропами и мощной каменной башней императора Фридриха Барбароссы."
    },
    history: {
      it: "Il Castello Baradello fu riedificato nel 1158 dall'imperatore Federico Barbarossa sulle rovine di fortificazioni romane e bizantine per dominare tutte le vie d'accesso a Como e alla Pianura Padana. È il simbolo supremo della storia medievale comasca.",
      en: "Rebuilt in 1158 by Holy Roman Emperor Frederick Barbarossa atop Roman and Byzantine foundations to control the strategic alpine passes leading into the Po Valley.",
      fr: "Reconstruit en 1158 par l'empereur Frédéric Barberousse pour contrôler les routes alpines vers la plaine du Pô.",
      es: "Reconstruido en 1158 por Federico Barbarroja sobre ruinas romanas para dominar los accesos alpinos a la llanura padana.",
      de: "1158 von Kaiser Barbarossa auf römischen Grundmauern als strategische Bastion neu errichtet.",
      ru: "Замок возведен в 1158 году императором Фридрихом Барбароссой на римских фундаментах для контроля над стратегическими альпийскими путями в долину реки По."
    },
    curiosity: {
      it: "Nel 1277 nelle carceri della torre fu rinchiuso in una gabbia di ferro sospesa Napo Torriani, signore di Milano, sconfitto nella celebre battaglia di Desio dai Visconti, dove morì di stenti.",
      en: "In 1277, Napo Torriani, Lord of Milan, was defeated by the Visconti dynasty and imprisoned inside a hanging iron cage within the tower until his demise.",
      fr: "En 1277, le seigneur de Milan Napo Torriani y fut enfermé dans une cage de fer suspendue par les Visconti.",
      es: "En 1277 el señor de Milán Napo Torriani murió prisionero en una jaula de hierro colgada en la torre.",
      de: "1277 hielten die Visconti hier ihren Widersacher Napo Torriani in einem eisernen Hängekäfig gefangen.",
      ru: "В 1277 году правитель Милана Напо Торриани после поражения от клана Висконти был заточен в железную клетку, подвешенную в башне, где и погиб."
    },
    hours: {
      it: "Parco aperto 24/7. Torre del Baradello visitabile sabato e domenica 10:00–18:00.",
      en: "Park open 24/7. Baradello Tower open weekends 10:00–18:00.",
      fr: "Parc ouvert 24h/24. Tour ouverte les samedis et dimanches 10:00–18:00.",
      es: "Parque 24/7. Torre abierta sábados y domingos 10:00–18:00.",
      de: "Park 24/7 frei zugänglich. Turm Sa & So 10:00–18:00 geöffnet.",
      ru: "Парк открыт круглосуточно. Башня Бараделло открыта по субботам и воскресеньям с 10:00 до 18:00."
    },
    price: {
      it: "Sentieri del Parco gratuiti | Salita alla terrazza della Torre: ~5,00 €",
      en: "Park trails free | Tower rooftop access: ~€5.00",
      fr: "Sentiers gratuits | Montée au donjon : ~5,00 €",
      es: "Senderos gratuitos | Entrada a la torre: ~5,00 €",
      de: "Waldwege kostenlos | Turmbesteigung: ~5,00 €",
      ru: "Тропы парка бесплатны | Подъем на смотровую башню: ~5,00 €"
    },
    address: "Via Castel Baradello, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 25 minuti di suggestivo trekking a piedi salendo dal sentiero di San Carpoforo o 8 minuti di bus urbano linea 1/6.",
      en: "From Como San Giovanni Station: 25 min scenic woodland hike via San Carpoforo trail or 8 min local bus.",
      fr: "De la gare Como San Giovanni : 25 min de marche en sous-bois ou bus urbain 1.",
      es: "Desde Como San Giovanni: 25 min de senderismo o autobús urbano línea 1.",
      de: "Vom Bahnhof Como San Giovanni: 25 Min. schöner Waldaufstieg oder Bus 1.",
      ru: "От станции Como San Giovanni: 25 минут пешего подъема по лесной эко-тропе Сан-Карпофоро или 8 минут на автобусе №1."
    }
  },
  {
    id: "nat-4",
    category: "naturalistico",
    routeCategory: "naturalistico",
    image: "assets/images/nesso.jpg",
    coordinates: { lat: 45.9142, lng: 9.1578 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.9142,9.1578&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.9142,9.1578",
    priceRange: "Gratuito",
    title: {
      it: "Orrido di Nesso & Ponte della Civera",
      en: "Nesso Gorge (Orrido) & Civera Roman Bridge",
      fr: "Gorge de Nesso (Orrido) & Pont Romain de la Civera",
      es: "Desfiladero de Nesso y Puente de la Civera",
      de: "Schlucht von Nesso (Orrido) & Civera-Brücke",
      ru: "Ущелье Нессо (Orrido di Nesso) и мост Чивера"
    },
    tag: {
      it: "Cascata Naturale, Canyon & Ponte Medievale",
      en: "Dramatic Waterfall, Canyon & Roman Arch",
      fr: "Cascade Spectaculaire & Pont Médiéval",
      es: "Cascada Espectacular y Puente Histórico",
      de: "Wildromantische Schlucht & Römische Bogenbrücke",
      ru: "Природный каньон, водопад и римский арочный мост"
    },
    shortDesc: {
      it: "Spettacolare forra naturale in cui due torrenti si fondono in una roboante cascata che si getta nel lago sotto un antico ponte ad arco.",
      en: "A jaw-dropping rocky chasm where two mountain torrents crash in a roaring waterfall beneath an ancient stone Romanesque bridge.",
      fr: "Canyon spectaculaire creusé par les torrents avec une cascade tumultueuse se jetant dans le lac sous un pont de pierre.",
      es: "Profundo desfiladero natural donde una impresionante cascada desemboca en el lago bajo un arco de piedra medieval.",
      de: "Spektakuläre Felsenschlucht mit tosendem Wasserfall, der unter einer uralten Steinbogenbrücke in den See stürzt.",
      ru: "Захватывающий природный каньон, где горные потоки образуют мощный водопад, впадающий в озеро под сводами древнего каменного моста."
    },
    history: {
      it: "Citato con meraviglia da Leonardo da Vinci nel suo Codice Atlantico ('Nesso, terra dove cade uno fiume con grande empito...'), l'Orrido nasce dall'unione dei torrenti Tuf e Nosé, le cui acque hanno scavato per millenni la roccia calcarea lariana.",
      en: "Admired by Leonardo da Vinci, who noted in his Codex Atlanticus: 'Nesso, a land where a river falls with great fury...'. Carved over millennia by the turbulent confluence of the Tuf and Nosé rivers.",
      fr: "Mentionné par Léonard de Vinci dans son Codex Atlanticus. Façonné au fil des millénaires par la force des eaux de montagne.",
      es: "Descrito por Leonardo da Vinci en el Códice Atlántico como un espectáculo de la naturaleza donde el río ruge al precipitarse.",
      de: "Bereits von Leonardo da Vinci im Codex Atlanticus voller Bewunderung beschrieben.",
      ru: "Воспет Леонардо да Винчи в Атлантическом кодексе («Нессо — земля, где река падает с великой яростью...»). Водопад тысячелетиями пробивал русло в известняковых скалах."
    },
    curiosity: {
      it: "Il Ponte della Civera, di origine romana e rimaneggiato nel Medioevo, è uno dei soggetti fotografici più romantici d'Europa. Dalla scalinata di oltre 340 gradini che scende dal borgo fino al molo si respira un'aria vaporizzata fresca anche in piena estate.",
      en: "The ancient arched Civera Bridge is one of Europe's most photographed romantic gems. 340 stone steps lead down from the hamlet to the secluded cove.",
      fr: "Le pont de la Civera et ses 340 marches descendant du village composent un tableau romantique d'une beauté absolue.",
      es: "El puente de arco de piedra y los 340 escalones que bajan desde el pueblo crean una de las estampas más bellas de Italia.",
      de: "Die Steinbrücke Ponte della Civera und die 340 Stufen hinab zum See zählen zu den schönsten Fotomotiven Italiens.",
      ru: "Арочный мост Чивера и каменная лестница из 340 ступеней образуют один из самых романтичных уголков Европы. В летнюю жару ущелье дарит бодрящую прохладу."
    },
    hours: {
      it: "Sempre aperto e liberamente accessibile tutto l'anno",
      en: "Always open and freely accessible year-round",
      fr: "Accessible gratuitement toute l'année",
      es: "Acceso libre durante todo el año",
      de: "Ganzjährig frei zugänglich",
      ru: "Открыто круглосуточно, свободный доступ круглый год"
    },
    price: {
      it: "Accesso completamente gratuito",
      en: "Completely free",
      fr: "Entièrement gratuit",
      es: "Totalmente gratuito",
      de: "Kostenlos",
      ru: "Бесплатно"
    },
    address: "Borgo di Nesso e Ponte della Civera, 22025 Nesso (CO)",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. Battello dal pontile di Piazza Cavour fino allo scalo di Nesso (fermata direttamente sotto il ponte) o autobus linea C30.",
      en: "Start & Return: Como San Giovanni Station. Public boat to Nesso pier right by the bridge or bus C30 along the coast.",
      fr: "Départ et retour : gare Como San Giovanni. Bateau de ligne jusqu'à Nesso ou bus C30.",
      es: "Salida y llegada: Estación Como San Giovanni. Barco hasta Nesso o autobús C30.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Schiff nach Nesso oder Bus C30.",
      ru: "Старт и финиш: Станция Como San Giovanni. Катер от набережной до причала Нессо прямо под мостом или живописный пригородный автобус C30."
    }
  },
  {
    id: "nat-5",
    category: "naturalistico",
    routeCategory: "naturalistico",
    image: "assets/images/bellano.jpg",
    coordinates: { lat: 46.0441, lng: 9.3038 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=46.0441,9.3038&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=46.0441,9.3038",
    priceRange: "€6",
    title: {
      it: "Orrido di Bellano",
      en: "Bellano Gorge (Orrido di Bellano)",
      fr: "Gorge de Bellano (Orrido di Bellano)",
      es: "Desfiladero de Bellano (Orrido di Bellano)",
      de: "Schlucht von Bellano (Orrido di Bellano)",
      ru: "Ущелье Беллано (Orrido di Bellano)"
    },
    tag: {
      it: "Canyon Naturale di 15 Milioni di Anni & Passerelle Sospese",
      en: "15-Million-Year-Old Canyon & Suspended Walkways",
      fr: "Gorge Préhistorique & Passerelles Suspendues",
      es: "Cañón Prehistórico y Pasarelas Colgantes",
      de: "15 Millionen Jahre alte Felsenschlucht mit Hängestegen",
      ru: "Каньон возрастом 15 млн лет с подвесными мостками"
    },
    shortDesc: {
      it: "Suggestiva gola naturale con passerelle ancorate alle pareti rocciose a strapiombo sulle cascate spumeggianti del torrente Pioverna.",
      en: "Dramatic natural gorge featuring suspended boardwalks bolted into sheer canyon walls directly above raging waterfalls.",
      fr: "Spectaculaire faille rocheuse équipée de passerelles suspendues à flanc de falaise au-dessus des remous du Pioverna.",
      es: "Impresionante cañón natural con pasarelas voladas ancladas en la roca viva sobre cascadas atronadoras.",
      de: "Beeindruckende Felsenschlucht mit kühnen Stegen über den tosenden Kaskaden des Flusses Pioverna.",
      ru: "Грандиозный каньон с деревянными и металлическими мостками, закрепленными на отвесных скалах прямо над бурлящими водопадами."
    },
    history: {
      it: "Formatosi 15 milioni di anni fa per erosione glaciale e fluviale. Nel Settecento la forza idraulica dell'Orrido venne impiegata per muovere i mantici delle ferriere e poi i telai dei celebri setifici comaschi.",
      en: "Formed 15 million years ago by the relentless erosion of the Pioverna river and ancient glaciers. In the 18th century, its ferocious waters powered local ironworks and silk mills.",
      fr: "Façonné il y a 15 millions d'années. Au XVIIIe siècle, la force de ses eaux actionnait forges et filatures de soie.",
      es: "Formado hace 15 millones de años por la erosión fluvial y los glaciares alpinos.",
      de: "Vor 15 Millionen Jahren entstanden; im 18. Jahrhundert trieb die Wasserkraft traditionsreiche Seidenspinnereien an.",
      ru: "Образовалось 15 миллионов лет назад в результате таяния ледников. В XVIII веке энергия водопадов приводила в движение шелкоткацкие фабрики."
    },
    curiosity: {
      it: "All'ingresso dell'Orrido sorge la 'Ca' del Diavol' (Casa del Diavolo), misteriosa torretta a pianta pentagonale decorata con figure demoniache e simboli esoterici che ha alimentato per secoli leggende e racconti popolari.",
      en: "Guarded by the eerie 'Devil's House' (Ca' del Diavol), a pentagonal medieval tower adorned with mythological and demonic frescoes that sparked centuries of local ghost folklore.",
      fr: "À l'entrée trône la 'Maison du Diable' (Ca' del Diavol), tour pentagonale ornée de fresques ésotériques mystérieuses.",
      es: "A la entrada se alza la 'Casa del Diablo', enigmática torre pentagonal con pinturas esotéricas y leyendas populares.",
      de: "Am Eingang steht das 'Haus des Teufels' (Ca' del Diavol), ein sagenumwobener Turm mit Fresken.",
      ru: "У входа в каньон стоит загадочная пятигранная башня «Дом Дьявола» (Ca' del Diavol), украшенная старинными эзотерическими фресками."
    },
    hours: {
      it: "09:00–19:00 (Aperto tutti i giorni in primavera ed estate, fino alle 20:00 nei weekend)",
      en: "09:00–19:00 (Daily in spring/summer, till 20:00 on weekends)",
      fr: "09:00–19:00 (Tous les jours en saison estivale)",
      es: "09:00–19:00 (Todos los días en temporada alta)",
      de: "09:00–19:00 (Täglich in Frühjahr und Sommer)",
      ru: "09:00–19:00 (Ежедневно весной и летом, по выходным до 20:00)"
    },
    price: {
      it: "Biglietto intero: ~6,00 € | Ridotto (ragazzi 6-12 anni): ~4,00 €",
      en: "Adult ticket: ~€6.00 | Reduced (children 6-12): ~€4.00",
      fr: "Plein tarif : ~6,00 € | Réduit : ~4,00 €",
      es: "Entrada general: ~6,00 € | Reducida: ~4,00 €",
      de: "Erwachsene: ~6,00 € | Kinder (6-12 J.): ~4,00 €",
      ru: "Взрослый билет: ~6,00 € | Детский: ~4,00 €"
    },
    address: "Piazza San Giorgio, 23822 Bellano (LC)",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. Battello panoramico centro lago per Bellano oppure treno Trenord dalla linea di Varenna-Bellano.",
      en: "Start & Finish: Como San Giovanni Station. Scenic ferry cruise to Bellano dock, just 5 min walk from the gorge entrance.",
      fr: "Départ et retour : gare Como San Giovanni. Ferry jusqu'à Bellano.",
      es: "Salida y llegada: Estación Como San Giovanni. Barco panorámico a Bellano.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Panoramaschiff nach Bellano.",
      ru: "Старт и финиш: Станция Como San Giovanni. Паром до причала Беллано (5 минут пешком от пристани до каньона)."
    }
  },

  // ==========================================
  // D. SPORTIVO (4 posizioni - Start & Finish: Stazione Como San Giovanni)
  // ==========================================
  {
    id: "spo-1",
    category: "sportivo",
    routeCategory: "sportivo",
    image: "assets/images/sinigaglia.jpg",
    coordinates: { lat: 45.8145, lng: 9.0736 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8145,9.0736&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8145,9.0736",
    priceRange: "€15–40",
    title: {
      it: "Stadio Giuseppe Sinigaglia (Como 1907)",
      en: "Giuseppe Sinigaglia Stadium (Como 1907)",
      fr: "Stade Giuseppe Sinigaglia (Como 1907)",
      es: "Estadio Giuseppe Sinigaglia (Como 1907)",
      de: "Giuseppe-Sinigaglia-Stadion (Como 1907)",
      ru: "Стадион Джузеппе Синигалья (Como 1907)"
    },
    tag: {
      it: "Calcio di Serie A & Architettura Razionalista",
      en: "Serie A Football & Rationalist Architecture",
      fr: "Football de Serie A & Architecture Rationaliste",
      es: "Fútbol de Serie A y Arquitectura Racionalista",
      de: "Serie-A-Fußballstadion am Seeufer",
      ru: "Футбол Серии А и итальянский рационализм"
    },
    shortDesc: {
      it: "Uno degli stadi più iconici del mondo, affacciato direttamente sulle acque del lago a soli 5 minuti a piedi dalla stazione.",
      en: "One of the globe's most scenic football arenas, positioned right on the lake shoreline a mere 5-minute stroll from Como San Giovanni.",
      fr: "L'un des stades les plus spectaculaires au monde, situé au bord immédiat de l'eau à 5 minutes de la gare.",
      es: "Uno de los estadios más singulares del planeta, situado al borde del lago a solo 5 minutos de la estación.",
      de: "Eines der spektakulärsten Fußballstadien weltweit, direkt am Seeufer nur 5 Gehminuten vom Bahnhof entfernt.",
      ru: "Один из самых живописных стадионов мира, расположенный прямо у кромки воды всего в 5 минутах ходьбы от вокзала."
    },
    history: {
      it: "Inaugurato nel 1927 su progetto dell'architetto Giovanni Greppi e intitolato a Giuseppe Sinigaglia, eroe di guerra e campione mondiale di canottaggio nativo di Como. Casa del glorioso club Como 1907, milita nella massima serie italiana (Serie A) attirando tifosi e celebrità da tutto il mondo.",
      en: "Opened in 1927 in prime Rationalist design, named after local war hero and world rowing champion Giuseppe Sinigaglia. Home of Como 1907, competing in Italy's top-tier Serie A.",
      fr: "Inauguré en 1927, hommage au champion d'aviron comasque Giuseppe Sinigaglia. Antre du club centenaire Como 1907 en Serie A.",
      es: "Inaugurado en 1927 en estilo racionalista. Hogar del histórico club Como 1907 en la Serie A italiana.",
      de: "1927 im Bauhaus-inspirierten italienischen Rationalismus erbaut. Heimstätte von Como 1907 in der Serie A.",
      ru: "Открыт в 1927 году в стиле итальянского рационализма и назван в честь героя и чемпиона мира по гребле Джузеппе Синигальи. Домашняя арена клуба Серии А «Como 1907»."
    },
    curiosity: {
      it: "Dagli spalti della tribuna si gode una vista unica: la partita di calcio incorniciata dalle acque scintillanti del lago, dalle ville neoclassiche e dalle montagne circostanti. Nei giorni di gara l'atmosfera è vibrante ed esclusiva.",
      en: "Spectators can gaze at world-class football against a backdrop of alpine mountains and luxury yachts drifting on the lake just meters behind the goalposts.",
      fr: "Les tribunes offrent une vue irréelle : le match de football avec le lac et les sommets alpins en arrière-plan.",
      es: "Las gradas ofrecen la postal única de un partido de fútbol con los yates y las montañas de fondo.",
      de: "Zuschauer blicken während des Spiels direkt auf das glitzernde Wasser und die vorbeigleitenden Boote.",
      ru: "С трибун открывается сюрреалистичный вид: футбольный матч на фоне глади озера, белоснежных яхт и альпийских склонов."
    },
    hours: {
      it: "Aperto in occasione delle partite di Serie A e Coppa Italia (Calendario stagionale weekend e turni infrasettimanali)",
      en: "Open on matchdays (Serie A and Italian Cup calendar, weekends and evenings)",
      fr: "Ouvert les jours de match de Serie A",
      es: "Abierto en días de partido de Serie A",
      de: "An Spieltagen der Serie A geöffnet",
      ru: "Открыт в дни календарных матчей Серии А и Кубка Италии"
    },
    price: {
      it: "Biglietti partita: da ~20 € (Curve) a ~120 € (Tribuna d'Onore Lago)",
      en: "Match tickets: from ~€20 (Curva) to ~€120 (VIP Waterfront Grandstand)",
      fr: "Billets de match : de ~20 € à ~120 €",
      es: "Entradas: desde ~20 € hasta ~120 €",
      de: "Tickets: ab ~20 € bis ~120 € (Ehrentribüne)",
      ru: "Билеты на матч: от ~20 € (фан-сектор) до ~120 € (VIP-трибуна с видом на озеро)"
    },
    address: "Via Giuseppe Sinigaglia 2, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: appena 5 minuti a piedi (400 metri)! Si scende da Via Gallio e si costeggia lo stadio all'imbocco dei Giardini a Lago.",
      en: "From Como San Giovanni Station: only 5 minutes walk (400 meters)! Downhill via Via Gallio directly to the lakeside gates.",
      fr: "De la gare Como San Giovanni : seulement 5 min à pied (400 m).",
      es: "Desde Como San Giovanni: ¡a solo 5 min a pie (400 m)!",
      de: "Vom Bahnhof Como San Giovanni: Nur 5 Gehminuten (400 Meter)!",
      ru: "От станции Como San Giovanni: всего 5 минут пешком (400 м)! Спуск от привокзальной площади прямо к стадиону у парка."
    }
  },
  {
    id: "spo-2",
    category: "sportivo",
    routeCategory: "sportivo",
    image: "assets/images/aeroclub.jpg",
    coordinates: { lat: 45.8138, lng: 9.0725 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8138,9.0725&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8138,9.0725",
    priceRange: "Da €110",
    title: {
      it: "Aero Club Como (Idrovolanti Storici)",
      en: "Aero Club Como (Historic Seaplanes)",
      fr: "Aero Club Como (Hydravions Historiques)",
      es: "Aero Club Como (Hidroaviones Históricos)",
      de: "Aero Club Como (Historische Wasserflugzeuge)",
      ru: "Аэроклуб Комо (Aero Club Como - Гидропланы)"
    },
    tag: {
      it: "La Più Antica Scuola di Volo Idro al Mondo (1913)",
      en: "World's Oldest Seaplane Flight School (1913)",
      fr: "Plus Ancienne École d'Hydraviation au Monde (1913)",
      es: "La Escuela de Hidroaviones Más Antigua del Mundo (1913)",
      de: "Älteste Wasserflugschule der Welt (gegr. 1913)",
      ru: "Старейшая в мире школа гидроавиации (1913)"
    },
    shortDesc: {
      it: "Voli turistici esclusivi ed emozionanti decolli dall'acqua per ammirare dall'alto ville, borghi e vette alpine.",
      en: "Exclusive scenic flights and thrilling water takeoffs over Lake Como's palaces, cliffs, and snow-dusted alpine crests.",
      fr: "Vols panoramiques d'exception et amerrissages spectaculaires au-dessus des plus belles villas et sommets.",
      es: "Vuelos panorámicos exclusivos despegando desde el agua para admirar las villas y los picos alpinos a vista de pájaro.",
      de: "Exklusive Rundflüge mit spektakulärem Wasserstart über die Traumvillen und die Alpenkette.",
      ru: "Эксклюзивные обзорные полеты и захватывающие взлеты с водной глади над роскошными виллами и альпийскими пиками."
    },
    history: {
      it: "Fondato nel 1913, è l'unico idroscalo e scuola di volo per piloti d'idrovolante rimasto operativo in Europa continentale. Dispone di una flotta prestigiosa di Cessna moderni e splendidi idrovolanti d'epoca, tra cui un leggendario Caproni del 1935.",
      en: "Established in 1913, it is the sole surviving operational seaplane base and flight academy in mainland Europe. Boasts a fleet of modern Cessnas and historic vintage amphibious aircraft.",
      fr: "Fondé en 1913, c'est l'unique base d'hydravions d'Europe continentale encore en activité régulière.",
      es: "Fundado en 1913, es el único hidroaeródromo civil en funcionamiento activo de Europa continental.",
      de: "Gegründet 1913; die einzige noch aktive Wasserflugbasis auf dem europäischen Festland.",
      ru: "Основан в 1913 году. Это единственный действующий гидроаэродром и школа пилотов гидропланов в континентальной Европе."
    },
    curiosity: {
      it: "Decollare e ammarare sulle acque calme del bacino di Como è un'esperienza da jet-set internazionale. I piloti dell'Aero Club Como hanno addestrato generazioni di aviatori, astronauti e appassionati di tutto il mondo.",
      en: "Gliding across the mirror surface of the lake and lifting above Bellagio and Balbianello offers a truly unforgettable jet-set adventure.",
      fr: "Toucher l'eau puis s'élever au-dessus de Bellagio et des villas patriciennes constitue une expérience inoubliable.",
      es: "Aterrizar sobre el espejo del agua frente a las montañas es una experiencia reservada al auténtico lujo.",
      de: "Das sanfte Gleiten über das Wasser und der Aufstieg über Bellagio gehören zu den elitärsten Erlebnissen Italiens.",
      ru: "Взлет с зеркальной глади озера и полет над виллами Белладжо и Бальбьянелло — незабываемый опыт в стиле золотого века авиации."
    },
    hours: {
      it: "09:00–18:00 (Tutti i giorni, voli soggetti a condizioni meteo favorevoli e prenotazione)",
      en: "09:00–18:00 (Daily, flights weather dependent with advance booking)",
      fr: "09:00–18:00 (Tous les jours sur réservation)",
      es: "09:00–18:00 (Todos los días con reserva previa)",
      de: "09:00–18:00 (Täglich nach Buchung und Wetterlage)",
      ru: "09:00–18:00 (Ежедневно; полеты по предварительному бронированию при хорошей погоде)"
    },
    price: {
      it: "Voli introduttivi panoramici: da ~110–180 € a persona (durata 30 min)",
      en: "Scenic introductory flights: from ~€110–180 per person (30 min flight)",
      fr: "Vols panoramiques d'initiation : dès ~110–180 € par personne",
      es: "Vuelos panorámicos: desde ~110–180 € por persona",
      de: "Rundflüge: ab ~110–180 € pro Person (30 Min.)",
      ru: "Обзорные ознакомительные полеты: от ~110–180 € с человека (30 минут полета)"
    },
    address: "Viale Giancarlo Puecher 1, 22100 Como",
    phone: "+39 031 574495",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 6 minuti a piedi (500 metri). Si scende verso la riva e l'hangar sul lago adiacente allo stadio.",
      en: "From Como San Giovanni Station: 6 min walk (500 meters). Downhill to the waterfront hangar next to the stadium.",
      fr: "De la gare Como San Giovanni : 6 min à pied (500 m) vers l'hangar au bord de l'eau.",
      es: "Desde Como San Giovanni: 6 min a pie hasta el hangar junto al lago.",
      de: "Vom Bahnhof Como San Giovanni: 6 Gehminuten zum Hangar am Seeufer.",
      ru: "От станции Como San Giovanni: 6 минут пешком (500 м). Спуск к ангару гидропланов на берегу рядом со стадионом."
    }
  },
  {
    id: "spo-3",
    category: "sportivo",
    routeCategory: "sportivo",
    image: "assets/images/canottieri.jpg",
    coordinates: { lat: 45.8141, lng: 9.0745 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8141,9.0745&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8141,9.0745",
    priceRange: "€25–60",
    title: {
      it: "Canottieri Lario & Yacht Club Como",
      en: "Canottieri Lario & Yacht Club Como",
      fr: "Canottieri Lario & Yacht Club Como",
      es: "Canottieri Lario y Yacht Club Como",
      de: "Canottieri Lario & Yacht Club Como (Wassersport)",
      ru: "Canottieri Lario и Яхт-клуб Комо"
    },
    tag: {
      it: "Canottaggio Olimpico, Kayak, Vela & SUP",
      en: "Olympic Rowing, Kayak, Sailing & SUP",
      fr: "Aviron Olympique, Kayak, Voile & Paddle",
      es: "Remo Olímpico, Kayak, Vela y Paddle Surf",
      de: "Olympisches Rudern, Segeln, Kajak & Stand-Up-Paddling",
      ru: "Олимпийская гребля, каяки, парусный спорт и SUP"
    },
    shortDesc: {
      it: "Storico sodalizio sportivo fondato nel 1891: noleggio kayak di lusso, corsi di vela, canottaggio e stand up paddle sul lago.",
      en: "Legendary watersports club dating to 1891: high-end kayak rental, sailing lessons, Olympic rowing, and sunrise SUP tours.",
      fr: "Club nautique historique fondé en 1891 : location de kayaks, régates de voile, aviron et paddle au fil de l'eau.",
      es: "Club náutico histórico fundado en 1891: alquiler de kayaks, cursos de vela y paddle surf en aguas cristalinas.",
      de: "Traditionsreicher Wassersportclub seit 1891: Verleih von Seekajaks, Segelkurse und Stand-Up-Paddle auf dem See.",
      ru: "Легендарный водный клуб, основанный в 1891 году: аренда каяков, парусный спорт, академическая гребля и сапбординг на рассвете."
    },
    history: {
      it: "Fondata il 15 febbraio 1891, la Canottieri Lario 'Giuseppe Sinigaglia' è una delle società sportive più titolate d'Italia, con oltre 130 anni di allori olimpici e mondiali nel canottaggio. La sua sede affacciata sull'acqua vanta una magnifica terrazza e pontili d'imbarco privati.",
      en: "Founded in 1891, Canottieri Lario has earned dozens of Olympic medals and world championship titles in rowing, anchoring Como's nautical prestige.",
      fr: "Fondée en 1891, la Canottieri Lario est l'un des clubs d'aviron les plus titrés de l'histoire olympique italienne.",
      es: "Fundado en 1891, es uno de los clubes de remo más laureados de Italia con múltiples medallas olímpicas.",
      de: "1891 gegründet, zählt der Club zu den erfolgreichsten Ruder- und Segelvereinen mit olympischer Tradition.",
      ru: "Основанный в 1891 году, клуб воспитал десятки олимпийских чемпионов по академической гребле. Имеет собственные причалы и базу у кромки озера."
    },
    curiosity: {
      it: "Pagaiare in kayak o su un SUP al mattino presto quando l'acqua è calma come olio consente di ammirare le grandi ville patrizie da una prospettiva intima e silenziosa, inaccessibile da terra.",
      en: "Gliding across glassy water at sunrise on a paddleboard provides an intimate perspective of noble villas inaccessible by foot or road.",
      fr: "Glisser en kayak au lever du soleil sur un lac d'huile offre une communion intime avec la beauté des villas.",
      es: "Remar al amanecer en kayak permite descubrir rincones y fachadas de ensueño invisibles desde tierra firme.",
      de: "Frühmorgens im Kajak über den spiegelglatten See zu gleiten, eröffnet unvergleichliche Perspektiven auf die Prachtvillen.",
      ru: "Утренняя прогулка на каяке или SUP-борде по зеркальной глади озера открывает приватные ракурсы исторических вилл, недоступные с суши."
    },
    hours: {
      it: "08:00–20:00 (Tutti i giorni da aprile a ottobre)",
      en: "08:00–20:00 (Daily from April through October)",
      fr: "08:00–20:00 (Tous les jours d'avril à octobre)",
      es: "08:00–20:00 (Todos los días de abril a octubre)",
      de: "08:00–20:00 (Täglich von April bis Oktober)",
      ru: "08:00–20:00 (Ежедневно с апреля по октябрь)"
    },
    price: {
      it: "Noleggio Kayak / SUP: ~20–35 € all'ora | Uscite guidate in barca a vela: ~60–90 €",
      en: "Kayak / SUP rental: ~€20–35 per hour | Guided sailing experience: ~€60–90",
      fr: "Location Kayak / Paddle : ~20–35 € / heure",
      es: "Alquiler Kayak / SUP: ~20–35 € por hora",
      de: "Kajak / SUP Verleih: ~20–35 € pro Stunde",
      ru: "Аренда каяка / SUP: ~20–35 € в час | Парусные прогулки с инструктором: ~60–90 €"
    },
    address: "Viale Giancarlo Puecher 6, 22100 Como",
    phone: "+39 031 574720",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 7 minuti a piedi. Si attraversa Piazzale San Gottardo e si scende verso la passeggiata del lungolago.",
      en: "From Como San Giovanni Station: 7 min walk straight down to the lake shore.",
      fr: "De la gare Como San Giovanni : 7 min à pied.",
      es: "Desde Como San Giovanni: 7 min a pie.",
      de: "Vom Bahnhof Como San Giovanni: 7 Gehminuten zum Ufer.",
      ru: "От станции Como San Giovanni: 7 минут пешком прямо к набережной и лодочным причалам."
    }
  },
  {
    id: "spo-4",
    category: "sportivo",
    routeCategory: "sportivo",
    image: "assets/images/boletto.jpg",
    coordinates: { lat: 45.8291, lng: 9.1415 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8291,9.1415&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8291,9.1415",
    priceRange: "Gratuito",
    title: {
      it: "Trekking & MTB verso Monte Boletto (Dorsale Lariana)",
      en: "Trekking & MTB to Monte Boletto (Larian Ridge)",
      fr: "Trekking & VTT vers le Mont Boletto (Dorsale Larienne)",
      es: "Trekking y BTT al Monte Boletto (Dorsal Lariana)",
      de: "Trekking & MTB zum Monte Boletto (Lariana-Kammweg)",
      ru: "Треккинг и горный велосипед на Монте Болетто"
    },
    tag: {
      it: "Cresta Panoramica a 1.238 m & Vista sui Due Rami",
      en: "Scenic Alpine Ridge at 1,238 m & Double Lake View",
      fr: "Crête Panoramique à 1 238 m & Vue sur les Deux Bras",
      es: "Cresta Panorámica a 1.238 m y Vista a Ambos Brazos",
      de: "Aussichtsreicher Höhenkamm auf 1.238 m mit Seeblick",
      ru: "Панорамный хребет 1 238 м с видом на оба рукава озера"
    },
    shortDesc: {
      it: "Emozionante escursione panoramica lungo la cresta del Triangolo Lariano tra faggete secolari e rifugi d'alpeggio.",
      en: "Invigorating ridge hike or mountain bike expedition across the alpine spine between Como and Bellagio with 360° views.",
      fr: "Randonnée ou sortie VTT grandiose sur la crête du Triangle Larien entre forêts de hêtres et refuges d'alpage.",
      es: "Emocionante ruta de senderismo o bicicleta de montaña por la cresta entre bosques de hayas y refugios alpinos.",
      de: "Herrliche Wanderung oder Mountainbiketour über den Kamm des Larianischen Dreiecks mit traumhaften Einkehrmöglichkeiten.",
      ru: "Захватывающий маршрут для хайкинга или маунтинбайка по хребту Ларианского треугольника среди вековых буков и альпийских хижин."
    },
    history: {
      it: "La Dorsale del Triangolo Lariano è l'antico sentiero di transumanza e comunicazione che collega Brunate a Bellagio lungo 30 km di cresta spartiacque a quote comprese tra 1.000 e 1.680 metri. Il Monte Boletto (1.238 m) ne costituisce la prima grande vetta panoramica.",
      en: "The historic watershed trail connecting Brunate to Bellagio stretches for over 30 kilometers along high alpine meadows and beech woods.",
      fr: "Sentier historique de crête reliant Brunate à Bellagio sur 30 kilomètres d'alpages et de panoramas.",
      es: "Ruta histórica de trashumancia que recorre la cresta divisoria entre Brunate y Bellagio a más de 1.200 m de altitud.",
      de: "Historischer Weitwanderweg von Brunate nach Bellagio über den Höhenrücken mit Blick auf beide Seearme.",
      ru: "Исторический хребтовый маршрут протяженностью 30 км, соединяющий Брунате и Белладжо на высоте более 1200 метров с круговым обзором."
    },
    curiosity: {
      it: "Lungo il cammino si incontrano le storiche 'baite' comasche (Baita Carla, Baita Bondella, Rifugio Boletto Fabrizio) dove gustare fumante polenta uncia con formaggi d'alpeggio e brasato dopo l'attività sportiva.",
      en: "En route, cozy mountain refuges ('baite') serve steaming polenta uncia baked with local melted alpine cheeses and slow-cooked braised beef.",
      fr: "Les chalets d'alpage le long du chemin servent la légendaire 'polenta uncia' enrichie de fromage d'alpage et de beurre fondu.",
      es: "Los refugios de montaña a lo largo del sendero sirven la exquisita 'polenta uncia' tradicional con quesos artesanos.",
      de: "Gemütliche Berghütten locken mit traditioneller 'Polenta uncia' (mit Almkäse und Salbeibutter überbacken).",
      ru: "На пути расположены уютные горные хижины («baite»), где подают легендарную поленту унча с расплавленным альпийским сыром и томленым мясом."
    },
    hours: {
      it: "Accessibile tutto l'anno durante le ore diurne (Consigliata la partenza al mattino)",
      en: "Accessible all year during daylight (Morning start recommended)",
      fr: "Accessible toute l'année en journée",
      es: "Accesible todo el año en horario diurno",
      de: "Ganzjährig tagsüber begehbar (Vormittagsstart empfohlen)",
      ru: "Доступно круглый год в светлое время суток (рекомендуется старт утром)"
    },
    price: {
      it: "Sentiero gratuito | Eventuale noleggio E-MTB a Como: ~40–60 € al giorno",
      en: "Trail access free | E-MTB rental in Como: ~€40–60/day",
      fr: "Sentier gratuit | Location VTT électrique : ~40–60 €",
      es: "Ruta gratuita | Alquiler E-MTB: ~40–60 €",
      de: "Wanderweg frei | E-Bike Verleih in Como: ~40–60 €",
      ru: "Маршрут бесплатный | Аренда электро-маунтинбайка в Комо: ~40–60 € в день"
    },
    address: "Partenza da Brunate / San Maurizio verso Monte Boletto, 22034 Brunate (CO)",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. A piedi fino alla Funicolare di Como, salita a Brunate (7 min) e imbocco del Sentiero delle Baite / Dorsale Lariana.",
      en: "Start & Finish: Como San Giovanni Station. Walk to funicular, ascend to Brunate (7 min), follow marked trail 'Dorsale Lariana'.",
      fr: "Départ et retour : gare Como San Giovanni. Funiculaire jusqu'à Brunate puis départ du sentier.",
      es: "Salida y llegada: Estación Como San Giovanni. Funicular hasta Brunate e inicio del sendero.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Mit der Funicolare nach Brunate, dann Einstieg in den Höhenweg.",
      ru: "Старт и финиш: Станция Como San Giovanni. Пешком до фуникулера, подъем в Брунате (7 мин) и выход на живописную тропу хребта."
    }
  },

  // ==========================================
  // E. SHOPPING (4 posizioni - Start & Finish: Stazione Como San Giovanni)
  // ==========================================
  {
    id: "sho-1",
    category: "shopping",
    routeCategory: "shopping",
    image: "assets/images/shopping-cavour.jpg",
    coordinates: { lat: 45.8115, lng: 9.0817 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8115,9.0817&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8115,9.0817",
    priceRange: "€€€€",
    title: {
      it: "Via Vittorio Emanuele II & Piazza Cavour",
      en: "Via Vittorio Emanuele II & Piazza Cavour",
      fr: "Via Vittorio Emanuele II & Piazza Cavour",
      es: "Via Vittorio Emanuele II y Piazza Cavour",
      de: "Via Vittorio Emanuele II & Piazza Cavour",
      ru: "Виа Витторио Эмануэле II и Пьяцца Кавур"
    },
    tag: {
      it: "Boutique di Lusso, Alta Moda & Grandi Firme",
      en: "Luxury Boutiques, Haute Couture & Flagships",
      fr: "Boutiques de Luxe, Haute Couture & Grandes Marques",
      es: "Boutiques de Lujo y Alta Moda Italiana",
      de: "Luxus-Boutiquen, Haute Couture & Flaniermeile",
      ru: "Бутики роскоши, высокая мода и флагманские бренды"
    },
    shortDesc: {
      it: "Il salotto elegante dello shopping comasco: boutique di alta moda italiana, gioiellerie e caffè storici.",
      en: "The glamorous drawing room of Como shopping: Italian high-fashion ateliers, jewelers, and historic cafes.",
      fr: "Le salon à ciel ouvert du chic comasque : enseignes prestigieuses, joailliers et terrasses de cafés historiques.",
      es: "El salón aristocrático de las compras en Como con las firmas italianas más codiciadas y joyerías selectas.",
      de: "Der elegante Open-Air-Salon des Luxus-Shoppings mit italienischen Modemarken und Traditionsjuwelieren.",
      ru: "Главная фешенебельная пешеходная артерия города: бутики ведущих итальянских домов моды, ювелирные ателье и исторические кафе."
    },
    history: {
      it: "Tracciata sul cardo massimo della 'Novum Comum' fondata da Giulio Cesare nel 59 a.C., questa direttrice pedonale unisce le antiche mura medievali di Porta Torre al bacino del lago in Piazza Cavour. Nei suoi palazzi nobiliari si trovano le boutique più esclusive del Nord Italia.",
      en: "Tracing the ancient Roman cardo maximus designed under Julius Caesar in 59 BC, linking the medieval Porta Torre battlements to the harbor of Piazza Cavour.",
      fr: "Bâtie sur le tracé romain antique, reliant les remparts médiévaux au lac en traversant les plus beaux palais nobles.",
      es: "Sigue el antiguo trazado romano que une las murallas medievales con el paseo del lago en Piazza Cavour.",
      de: "Folgt der antiken römischen Hauptachse von Julius Cäsar und verbindet das mittelalterliche Stadttor mit dem See.",
      ru: "Пролегает по главной оси древнеримского города, заложенного Юлием Цезарем в 59 г. до н.э., соединяя средневековые ворота Порта Торре с набережной площади Кавур."
    },
    curiosity: {
      it: "Oltre ai grandi marchi internazionali del lusso, ospita storiche profumerie di nicchia ed esclusive calzature fatte su misura dai mastri artigiani lombardi.",
      en: "Alongside international luxury brands, you'll discover bespoke Italian cobblers and niche artisan perfumeries crafting scents inspired by lake flora.",
      fr: "Abrite des parfumeries artisanales rares aux fragrances inspirées par la flore du lac et des bottiers sur mesure.",
      es: "Alberga perfumerías nicho con esencias inspiradas en el lago y zapaterías de confección artesanal a medida.",
      de: "Heimat erlesener Nischenparfümerien mit Seendüften und maßgefertigter italienischer Schuhmacherkunst.",
      ru: "Здесь находятся не только бутики модных домов, но и нишевые парфюмерные лавки с ароматами на основе озерных трав и ателье обуви ручной работы."
    },
    hours: {
      it: "10:00–19:30 (Lunedì–Sabato; molte boutique aperte anche la Domenica pomeriggio)",
      en: "10:00–19:30 (Monday–Saturday; many boutiques open Sunday afternoons)",
      fr: "10:00–19:30 (Du lundi au samedi ; ouvert le dimanche après-midi)",
      es: "10:00–19:30 (Lunes a sábado; domingos por la tarde)",
      de: "10:00–19:30 (Montag bis Samstag; sonntags nachmittags geöffnet)",
      ru: "10:00–19:30 (Понедельник–суббота; многие бутики открыты и в воскресенье днем)"
    },
    price: {
      it: "Fascia alta e lusso (Accesso libero alla passeggiata pedonale)",
      en: "High-end & luxury shopping (Free pedestrian access)",
      fr: "Luxe et haut de gamme",
      es: "Gama alta y lujo",
      de: "Gehobenes Preissegment & Luxus",
      ru: "Премиальный сегмент и люкс (Прогулка по пешеходной зоне свободная)"
    },
    address: "Via Vittorio Emanuele II & Piazza Cavour, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 8 minuti a piedi (650 metri). Si scende verso Via Cinque Giornate entrando nella zona pedonale protetta.",
      en: "From Como San Giovanni Station: 8 min stroll (650 meters) straight into the pedestrian city core.",
      fr: "De la gare Como San Giovanni : 8 min à pied.",
      es: "Desde Como San Giovanni: 8 min a pie.",
      de: "Vom Bahnhof Como San Giovanni: 8 Gehminuten in die Fußgängerzone.",
      ru: "От станции Como San Giovanni: 8 минут пешком (650 м) прямо в пешеходную торговую зону старого города."
    }
  },
  {
    id: "sho-2",
    category: "shopping",
    routeCategory: "shopping",
    image: "assets/images/seta-como.jpg",
    coordinates: { lat: 45.8105, lng: 9.0825 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8105,9.0825&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8105,9.0825",
    priceRange: "€€–€€€€",
    title: {
      it: "Setifici & Outlet della Seta di Como (Mantero, Achalander)",
      en: "Silk Boutiques & Historic Mills (Mantero, Achalander)",
      fr: "Soieries & Boutiques de Soie de Côme (Mantero, Achalander)",
      es: "Tiendas de Seda y Casas Históricas (Mantero, Achalander)",
      de: "Seiden-Boutiquen & Manufakturen (Mantero, Achalander)",
      ru: "Шелковые бутики и мануфактуры Комо (Mantero, Achalander)"
    },
    tag: {
      it: "Capitale Mondiale della Seta & Haute Couture",
      en: "World Capital of Silk & Haute Couture Heritage",
      fr: "Capitale Mondiale de la Soie & Haute Couture",
      es: "Capital Mundial de la Seda y Alta Costura",
      de: "Welthauptstadt der Seide & Haute-Couture-Tradition",
      ru: "Мировая столица шелка и кутюрного мастерства"
    },
    shortDesc: {
      it: "La raffinata arte serica che veste le più grandi maison parigine e milanesi: foulard, cravatte e accessori in pura seta.",
      en: "Como's legendary silk heritage supplying Parisian and Milanese haute couture: scarves, pocket squares, and ties.",
      fr: "Le savoir-faire soyeux qui habille les plus prestigieuses maisons de haute couture : foulards et cravates en soie pure.",
      es: "El arte de la seda que abastece a las grandes casas de París y Milán: pañuelos y corbatas de pura seda.",
      de: "Das weltberühmte Seidenkunsthandwerk, das die Pariser und Mailänder Modehäuser beliefert.",
      ru: "Легендарный шелк Комо, поставляемый для парижских и миланских домов высокой моды: платки, каре, галстуки и шарфы из чистейшего шелка."
    },
    history: {
      it: "Intodotta nel XV secolo da Ludovico il Moro che impose la coltivazione dei gelsi per i bachi da seta, l'industria serica comasca è diventata leader mondiale per qualità, stampe a quadro e finiture artistiche. Marchi storici come Mantero (fondata nel 1902) continuano a produrre sete per Chanel, Hermès e Gucci.",
      en: "Introduced in the 15th century under Duke Ludovico Sforza, Como became the undisputed global capital of luxury silk weaving and artistic hand-printing.",
      fr: "Initiée au XVe siècle par Ludovico Sforza, Côme est devenue la référence mondiale de la soie d'exception pour Chanel et Hermès.",
      es: "Iniciada en el siglo XV por Ludovico el Moro, convirtió a Como en el mayor referente mundial de estampados de seda de lujo.",
      de: "Im 15. Jahrhundert durch Ludovico Sforza begründet, beliefern die Comer Seidenmanufakturen bis heute die Luxuswelt.",
      ru: "Производство шелка началось в XV веке по указу герцога Лодовико Моро. Комо стал мировым лидером шелкоткачества, поставляя ткани для Chanel, Hermès и других домов высокой моды."
    },
    curiosity: {
      it: "Nelle boutique storiche e negli atelier del centro è possibile acquistare foulard d'archivio esclusivi, orlati rigorosamente a mano con punto 'roulotté', a prezzi di manifattura unici.",
      en: "Look for the iconic hand-rolled edges ('roulotté') on pure silk twill scarves, proving true artisan craftsmanship.",
      fr: "Recherchez la finition artisanale à la main 'roulotté' sur les carrés de soie pure.",
      es: "Los pañuelos de seda auténticos de Como se distinguen por su dobladillo cosido a mano 'roulotté'.",
      de: "Echte Comer Seidentücher erkennt man an der aufwendig von Hand rollierten Kante ('roulotté').",
      ru: "Подлинные платки из Комо отличаются краями, подшитыми вручную тончайшим швом 'roulotté'. В фирменных бутиках можно приобрести редкие архивные узоры."
    },
    hours: {
      it: "09:30–19:30 (Lunedì–Sabato)",
      en: "09:30–19:30 (Monday–Saturday)",
      fr: "09:30–19:30 (Du lundi au samedi)",
      es: "09:30–19:30 (Lunes a sábado)",
      de: "09:30–19:30 (Montag bis Samstag)",
      ru: "09:30–19:30 (Понедельник–суббота)"
    },
    price: {
      it: "Foulard e accessori: da ~45 € a oltre 350 € per pezzi esclusivi di alta collezione",
      en: "Scarves and accessories: from ~€45 to €350+ for collector's pieces",
      fr: "Foulards et soieries : de ~45 € à plus de 350 €",
      es: "Pañuelos y accesorios: desde ~45 € hasta más de 350 €",
      de: "Seidentücher: von ~45 € bis über 350 € für Meisterstücke",
      ru: "Шелковые платки и аксессуары: от ~45 € до 350 €+ за эксклюзивные коллекционные изделия"
    },
    address: "Boutique Mantero (Via Volta 30) & A. Picci (Via Armando Diaz 58), 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 9 minuti a piedi nel cuore dei vicoli medievali del centro storico.",
      en: "From Como San Giovanni Station: 9 min walk through historic streets.",
      fr: "De la gare Como San Giovanni : 9 min à pied.",
      es: "Desde Como San Giovanni: 9 min a pie.",
      de: "Vom Bahnhof Como San Giovanni: 9 Gehminuten.",
      ru: "От станции Como San Giovanni: 9 минут пешком по историческим улочкам центра."
    }
  },
  {
    id: "sho-3",
    category: "shopping",
    routeCategory: "shopping",
    image: "assets/images/narrow_street.jpg",
    coordinates: { lat: 45.8099, lng: 9.0841 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8099,9.0841&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8099,9.0841",
    priceRange: "€€–€€€",
    title: {
      it: "Corso Milano & Via Bernardino Luini",
      en: "Corso Milano & Via Bernardino Luini",
      fr: "Corso Milano & Via Bernardino Luini",
      es: "Corso Milano y Via Bernardino Luini",
      de: "Corso Milano & Via Bernardino Luini",
      ru: "Корсо Милано и Виа Бернардино Луини"
    },
    tag: {
      it: "Pelletteria Artigianale, Design & Gioiellerie d'Autore",
      en: "Artisan Leather, Design & Bespoke Jewelry",
      fr: "Maroquinerie Artisanale, Design & Joaillerie",
      es: "Piel Artesanal, Diseño y Joyería Exclusiva",
      de: "Italienische Lederkunst, Design & Goldschmiede",
      ru: "Авторская кожа, дизайн и ювелирные мастерские"
    },
    shortDesc: {
      it: "Passeggiata tra botteghe d'artigianato locale, borse in cuoio cucite a mano, oreficeria e ricercate boutique indipendenti.",
      en: "A vibrant district of independent makers: handcrafted Tuscan and Lombard leather goods, bespoke jewelers, and design shops.",
      fr: "Flânerie au milieu des échoppes de maroquiniers d'art, sacs en cuir faits main et créateurs indépendants.",
      es: "Callejeo entre talleres artesanos de bolsos de cuero cosidos a mano, joyería de diseño y moda de autor.",
      de: "Stilvolles Stöbern in inhabergeführten Werkstätten mit handgenähten Ledertaschen und individueller Goldschmiedekunst.",
      ru: "Атмосферный квартал независимых ремесленных ателье: кожаные сумки ручной работы, авторские украшения и концептуальные бутики."
    },
    history: {
      it: "Via Bernardino Luini attraversa l'antico quartiere dei mercanti medievali di Como. Conserva cortili segreti con loggiati cinquecenteschi e botteghe storiche tramandate di padre in figlio da oltre quattro generazioni.",
      en: "Named after Renaissance master painter Bernardino Luini, this street has been the bustling commercial soul of Como since medieval times.",
      fr: "Nommée d'après le peintre de la Renaissance Bernardino Luini, cette artère abrite des cours secrètes et de vieilles enseignes.",
      es: "Dedicada al pintor renacentista Bernardino Luini, conserva patios porticados y comercios tradicionales familiares.",
      de: "Benannt nach dem Renaissancemaler Bernardino Luini, pulsiert hier seit Jahrhunderten das Herz des städtischen Kunsthandwerks.",
      ru: "Улица названа в честь мастера эпохи Возрождения Бернардино Луини. Здесь сохранились секретные внутренние дворики с ренессансными аркадами и фамильные мастерские."
    },
    curiosity: {
      it: "È il luogo perfetto per scovare accessori in pelle toscana e lariana conciata al vegetale, profumi d'ambiente alle essenze alpine e pezzi unici d'oreficeria con pietre naturali.",
      en: "Ideal spot for finding vegetable-tanned Italian leather briefcases, alpine herbal diffusers, and unique handcrafted rings.",
      fr: "L'endroit idéal pour dénicher maroquinerie végétale, senteurs d'intérieur alpines et bijoux originaux.",
      es: "El lugar perfecto para adquirir carteras de cuero vegetal, perfumes alpinos y joyas exclusivas.",
      de: "Perfekt für pflanzlich gegerbtes Leder, feine Raumparfums mit Bergkräutern und handgeschmiedeten Schmuck.",
      ru: "Идеальное место для покупки сумок из натуральной кожи растительного дубления, интерьерных альпийских ароматов и авторских ювелирных изделий."
    },
    hours: {
      it: "09:30–12:30 e 15:30–19:30 (Lunedì–Sabato)",
      en: "09:30–12:30 & 15:30–19:30 (Monday–Saturday)",
      fr: "09:30–12:30 et 15:30–19:30 (Du lundi au samedi)",
      es: "09:30–12:30 y 15:30–19:30 (Lunes a sábado)",
      de: "09:30–12:30 & 15:30–19:30 (Montag bis Samstag)",
      ru: "09:30–12:30 и 15:30–19:30 (Понедельник–суббота)"
    },
    price: {
      it: "Fascia media-alta (Ottimo rapporto qualità artigianale/prezzo)",
      en: "Mid-to-high (Exceptional artisan quality-to-price ratio)",
      fr: "Prix moyen à élevé pour une qualité artisanale d'exception",
      es: "Gama media-alta con excelente artesanía",
      de: "Mittel bis gehoben für erstklassige Handarbeit",
      ru: "Средне-высокий сегмент (Великолепное ремесленное качество напрямую от мастеров)"
    },
    address: "Via Bernardino Luini & Corso Milano, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 10 minuti a piedi lungo Via Gallio e Via Garibaldi.",
      en: "From Como San Giovanni Station: 10 min walk via Via Garibaldi.",
      fr: "De la gare Como San Giovanni : 10 min à pied.",
      es: "Desde Como San Giovanni: 10 min a pie.",
      de: "Vom Bahnhof Como San Giovanni: 10 Gehminuten.",
      ru: "От станции Como San Giovanni: 10 минут пешком через Виа Гарибальди."
    }
  },
  {
    id: "sho-4",
    category: "shopping",
    routeCategory: "shopping",
    image: "assets/images/mercato-coperto.jpg",
    coordinates: { lat: 45.8058, lng: 9.0872 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8058,9.0872&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8058,9.0872",
    priceRange: "€€",
    title: {
      it: "Mercato Coperto di Como",
      en: "Como Covered Market (Mercato Coperto)",
      fr: "Marché Couvert de Côme (Mercato Coperto)",
      es: "Mercado Cubierto de Como (Mercato Coperto)",
      de: "Markthalle Como (Mercato Coperto)",
      ru: "Крытый рынок Комо (Mercato Coperto)"
    },
    tag: {
      it: "Tempio delle Eccellenze Gastronomiche Locali",
      en: "Temple of Local Gourmet Delicacies",
      fr: "Temple des Saveurs & Produits du Terroir",
      es: "Templo Gourmet de Productos Típicos Locales",
      de: "Gourmet-Paradies für regionale Spezialitäten",
      ru: "Гастрономический рай фермерских деликатесов"
    },
    shortDesc: {
      it: "Storica struttura liberty con oltre 50 banchi dedicati a formaggi di malga, salumi artigianali, olio del lago e vini lombardi.",
      en: "Historic Art Nouveau hall hosting 50+ family stalls: aged mountain cheeses, artisan bresaola, lake olive oils, and fine wines.",
      fr: "Halle historique animée abritant plus de 50 étals de fromages d'alpage, charcuteries artisanales et huiles du lac.",
      es: "Histórico mercado de abastos con más de 50 puestos de quesos de montaña, embutidos artesanales y vinos locales.",
      de: "Lebendige historische Markthalle mit Almkäsen, handwerklicher Bresaola, Olivenöl vom See und feinen Weinen.",
      ru: "Исторический крытый рынок с более чем 50 лавками: выдержанные горные сыры, крафтовая брезаола, оливковое масло и ломбардские вина."
    },
    history: {
      it: "Inaugurato nei primi decenni del Novecento lungo l'antico tracciato delle mura meridionali, rappresenta il cuore pulsante della gastronomia comasca dove i residenti e gli chef dei ristoranti stellati acquistano quotidianamente le materie prime a chilometro zero.",
      en: "Built in the early 20th century along the southern medieval walls, it serves as the culinary heartbeat of Como where locals and Michelin-starred chefs select farm-to-table ingredients.",
      fr: "Érigé au début du XXe siècle, ce marché est le rendez-vous incontournable des gourmets et des chefs de la région.",
      es: "Construido a principios del siglo XX junto a las murallas, es el punto de encuentro de cocineros y amantes de la gastronomía.",
      de: "Anfang des 20. Jahrhunderts erbaut, ist die Halle bis heute die kulinarische Schatzkammer für Einheimische und Spitzenköche.",
      ru: "Построен в начале XX века у южной линии средневековых стен. Главное место закупки свежайших фермерских продуктов как для местных жителей, так и для шеф-поваров мишленовских ресторанов."
    },
    curiosity: {
      it: "Da non perdere i banchi dei casari per degustare il raro 'Zincarlin' (formaggio a pasta cruda lavorato con pepe ed erbe alpine), il Valtellina Casera DOP, il Taleggio nostrano e la celebre Bresaola di manzo e cervo.",
      en: "Don't miss the dairy stands offering tastings of rare 'Zincarlin' pepper-cured cheese, Valtellina Casera DOP, and artisanal venison bresaola.",
      fr: "À goûter absolument : le 'Zincarlin' (fromage crémeux relevé de poivre), le Casera de la Valteline et la bresaola de bœuf.",
      es: "Imprescindible probar el queso 'Zincarlin' sazonado con pimienta y hierbas, el Casera DOP y la bresaola artesanal.",
      de: "Unbedingt probieren: Den pfeffrigen Frischkäse 'Zincarlin', echten Taleggio und luftgetrocknete Hirsch-Bresaola.",
      ru: "Обязательно попробуйте редкий сыр Зинкарлин с черным перцем и белым вином, сыр Казера DOP из Вальтеллины, настоящий Таледжо и брезаолу ручной вялки."
    },
    hours: {
      it: "08:00–13:00 e 15:30–19:00 (Martedì, Giovedì e Sabato orario continuato; Domenica chiuso)",
      en: "08:00–13:00 & 15:30–19:00 (Full day Tue, Thu, Sat; Closed Sundays)",
      fr: "08:00–13:00 et 15:30–19:00 (Fermé le dimanche)",
      es: "08:00–13:00 y 15:30–19:00 (Cerrado domingos)",
      de: "08:00–13:00 & 15:30–19:00 (Sonntag Ruhetag)",
      ru: "08:00–13:00 и 15:30–19:00 (Вт, чт, сб — полный день; воскресенье — выходной)"
    },
    price: {
      it: "Prezzi da produttore a consumatore con assaggi gratuiti",
      en: "Direct producer prices with complimentary tastings",
      fr: "Prix producteurs directs avec dégustations généreuses",
      es: "Precios directos de productor con degustaciones",
      de: "Erzeugerpreise mit kostenlosen Kostproben",
      ru: "Прямые фермерские цены с щедрыми бесплатными дегустациями"
    },
    address: "Via Mentana 7, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 14 minuti a piedi (1,1 km). Si scende lungo Viale Varese costeggiando le maestose mura e Porta Torre.",
      en: "From Como San Giovanni Station: 14 min walk (1.1 km) down Viale Varese alongside the medieval walls.",
      fr: "De la gare Como San Giovanni : 14 min à pied le long des remparts.",
      es: "Desde Como San Giovanni: 14 min a pie recorriendo las murallas medievales.",
      de: "Vom Bahnhof Como San Giovanni: 14 Gehminuten an der mittelalterlichen Stadtmauer entlang.",
      ru: "От станции Como San Giovanni: 14 минут пешком (1,1 км) вдоль бульвара Виале Варезе и средневековых стен."
    }
  },

  // ==========================================
  // F. SLOW (4 posizioni - Start & Finish: Stazione Como San Giovanni)
  // ==========================================
  {
    id: "slo-1",
    category: "slow",
    routeCategory: "slow",
    image: "assets/images/como-bacino.jpg",
    coordinates: { lat: 45.8131, lng: 9.0783 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8131,9.0783&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8131,9.0783",
    priceRange: "Gratuito",
    title: {
      it: "Passeggiata Lungo Lario Trento e Trieste + Giardini a Lago",
      en: "Lakeside Promenade Trento & Trieste + Lake Gardens",
      fr: "Promenade Lungo Lario Trento e Trieste + Giardini a Lago",
      es: "Paseo Lungo Lario Trento y Trieste y Giardini a Lago",
      de: "Uferpromenade Lungo Lario Trento & Trieste + Seegärten",
      ru: "Променад Лунго Ларио Тренто и Триесте + Джардини а Лаго"
    },
    tag: {
      it: "Passeggiata Panoramica tra Platani Secolari e Cigni Reali",
      en: "Waterfront Stroll under Ancient Plane Trees with Swans",
      fr: "Balade Romantique sous les Platanes Séculaires",
      es: "Paseo Romántico entre Plátanos Centenarios y Cisnes",
      de: "Panoramaschlendern unter Platanen mit Traumblick",
      ru: "Романтический променад под сенью вековых платанов с лебедями"
    },
    shortDesc: {
      it: "L'iconica passeggiata a pelo d'acqua ombreggiata da maestosi platani, con panchine panoramiche affacciate sulle montagne.",
      en: "Como's signature lakeside promenade shaded by monumental plane trees, offering benches facing snow-capped peaks.",
      fr: "L'incontournable promenade ombragée de platanes géants offrant des bancs tournés vers les sommets et les cygnes.",
      es: "El emblemático paseo costero a la sombra de plátanos centenarios con bancos frente a las aguas del lago.",
      de: "Die klassische Flanierpromenade im Schatten alter Platanen mit herrlichen Ruhebänken am Wasser.",
      ru: "Знаменитая пешеходная набережная в тени исполинских платанов с видовыми скамейками у самой кромки воды."
    },
    history: {
      it: "Realizzata tra la fine dell'Ottocento e i primi del Novecento colmando parte dell'antico specchio d'acqua per regalare alla città una grandiosa passeggiata pubblica. È il palcoscenico naturale dove residenti e viaggiatori assaporano il ritmo lento della vita lacustre.",
      en: "Constructed at the turn of the 20th century, reclaimed from the lake to create a grand Belle Époque public garden.",
      fr: "Aménagée au tournant du XXe siècle pour offrir à Côme une vitrine publique d'une élégance intemporelle.",
      es: "Diseñada a principios del siglo XX ganando terreno al agua para crear un majestuoso jardín frente al lago.",
      de: "Um 1900 angelegt, um Como eine weltmännische Flanierpromenade mit Parkanlagen zu schenken.",
      ru: "Обустроена на рубеже XIX–XX веков как парадный прибрежный парк Прекрасной эпохи для неспешных прогулок горожан."
    },
    curiosity: {
      it: "I cigni reali del lago di Como nuotano abitualmente a pochi centimetri dal parapetto di pietra. Nelle prime ore del mattino e al calar del sole la luce dorata trasforma la superficie dell'acqua in una lastra d'argento lucido.",
      en: "Graceful mute swans glide just inches from the marble parapet. The evening golden hour turns the water into liquid gold.",
      fr: "Les cygnes s'approchent paisiblement du parapet tandis que la lumière du couchant embrase les flots.",
      es: "Los cisnes nadan a escasos centímetros del borde mientras el sol tiñe el agua de tonalidades doradas y púrpuras.",
      de: "Majestätische Schwäne gleiten am Ufer entlang, während das Abendlicht das Wasser in flüssiges Gold taucht.",
      ru: "Белоснежные лебеди подплывают прямо к каменным парапетам. В предзакатные часы вода приобретает драгоценный перламутровый оттенок."
    },
    hours: {
      it: "Sempre aperto (Accessibile 24/7 in qualsiasi stagione)",
      en: "Always open (24/7 access in every season)",
      fr: "Toujours ouvert 24h/24",
      es: "Abierto 24/7 en cualquier estación",
      de: "Rund um die Uhr frei zugänglich",
      ru: "Открыто круглосуточно в любое время года"
    },
    price: {
      it: "Accesso libero e gratuito",
      en: "Free and open to the public",
      fr: "Accès libre et gratuit",
      es: "Acceso libre y gratuito",
      de: "Freier Eintritt",
      ru: "Свободный бесплатный вход"
    },
    address: "Lungo Lario Trento e Lungo Lario Trieste, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: appena 6 minuti a piedi (500 metri) scendendo per Via Gallio.",
      en: "From Como San Giovanni Station: just 6 min walk (500 m) straight downhill.",
      fr: "De la gare Como San Giovanni : 6 min à pied (500 m).",
      es: "Desde Como San Giovanni: apenas 6 min a pie (500 m).",
      de: "Vom Bahnhof Como San Giovanni: Nur 6 Gehminuten (500 m).",
      ru: "От станции Como San Giovanni: всего 6 минут пешком (500 м) вниз по улице Виа Галлио."
    }
  },
  {
    id: "slo-2",
    category: "slow",
    routeCategory: "slow",
    image: "assets/images/battello.jpg",
    coordinates: { lat: 45.8126, lng: 9.0811 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8126,9.0811&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8126,9.0811",
    priceRange: "€9–12",
    title: {
      it: "Giro in battello storico sul primo bacino (Navigazione Laghi)",
      en: "Historic Steamboat Cruise on First Basin (Navigazione Laghi)",
      fr: "Croisière en bateau historique sur le premier bassin",
      es: "Crucero en barco histórico por el primer bacino",
      de: "Historische Schiffsrundfahrt auf dem ersten Seebecken",
      ru: "Круиз на историческом пароходе по первому бассейну озера"
    },
    tag: {
      it: "Navigazione Dolce & Vista Esclusiva dal Lago",
      en: "Gentle Sailing & Waterfront Architectural Views",
      fr: "Navigation Douce & Vues Exclusives depuis l'Eau",
      es: "Navegación Lenta y Vistas Exclusivas desde el Agua",
      de: "Gemächliche Schifffahrt mit Traumblick auf die Villen",
      ru: "Неспешный круиз и эксклюзивные виды на виллы с воды"
    },
    shortDesc: {
      it: "Rilassante itinerario sull'acqua toccando Como, Cernobbio, Moltrasio e Torno, ammirando le più belle ville storiche.",
      en: "Soothing boat journey weaving past Cernobbio, Moltrasio, and Torno to view private patrician estates from the water.",
      fr: "Croisière paisible longeant Côme, Cernobbio, Moltrasio et Torno pour contempler les somptueuses demeures depuis le lac.",
      es: "Relajante recorrido acuático tocando Cernobbio, Moltrasio y Torno para contemplar las villas más bellas desde el lago.",
      de: "Entschleunigte Rundfahrt zu den malerischen Orten Cernobbio, Moltrasio und Torno mit Villenblick.",
      ru: "Умиротворяющий водный маршрут с остановками в Черноббио, Мольтразио и Торно с панорамами роскошных вилл с борта катера."
    },
    history: {
      it: "La navigazione a vapore sul Lago di Como fu inaugurata nel 1826 con il piroscafo 'Lario'. Ancora oggi solcano le acque battelli storici a pale, come il celebre 'Patria' del 1926 e il 'Milano', capolavori galleggianti di archeologia industriale perfettamente restaurati.",
      en: "Commercial steam navigation on Lake Como dates to 1826. Historic paddle steamers like the 1926 'Patria' and 'Milano' still cruise the serene waters.",
      fr: "Inaugurée en 1826, la navigation lacustre fait encore naviguer d'authentiques bateaux à roues à aubes comme le 'Patria' de 1926.",
      es: "Iniciada en 1826, todavía navegan barcos históricos de palas como el legendario 'Patria' de 1926.",
      de: "1826 mit dem ersten Dampfschiff begründet; heute verkehren liebevoll restaurierte Raddampfer wie die 'Patria' (1926).",
      ru: "Пароходство на озере Комо зародилось в 1826 году. По сей день по озеру курсируют отреставрированные исторические колесные пароходы «Патрия» (1926 г.) и «Милано»."
    },
    curiosity: {
      it: "Dal ponte scoperto del battello si scorge Villa d'Este a Cernobbio, Villa Pizzo e la misteriosa Villa Pliniana a Torno, costruita nel 1573 su una fonte intermittente descritta da Plinio il Giovane e amata da Lord Byron.",
      en: "From the open deck, admire legendary Villa d'Este, Villa Pizzo, and secluded Villa Pliniana where Lord Byron and Percy Shelley once stayed.",
      fr: "Du pont supérieur, on aperçoit la légendaire Villa d'Este et la mystérieuse Villa Pliniana où séjourna Lord Byron.",
      es: "Desde cubierta se divisan la mítica Villa d'Este y la enigmática Villa Pliniana, amada por Lord Byron.",
      de: "Vom Sonnendeck aus blickt man auf die weltberühmte Villa d'Este und die geheimnisvolle Villa Pliniana.",
      ru: "С открытой палубы открывается вид на легендарную виллу Д'Эсте, виллу Пиццо и уединенную виллу Плиниана в Торно, где гостили лорд Байрон и Шелли."
    },
    hours: {
      it: "Partenze continuative dalle 08:30 alle 19:30 (Pontili Navigazione Laghi Piazza Cavour)",
      en: "Frequent departures 08:30–19:30 from Piazza Cavour piers",
      fr: "Départs réguliers de 08:30 à 19:30",
      es: "Salidas continuas de 08:30 a 19:30",
      de: "Regelmäßige Abfahrten 08:30–19:30 ab Piazza Cavour",
      ru: "Регулярные отправления с 08:30 до 19:30 от причалов на площади Кавур"
    },
    price: {
      it: "Biglietto circuito primo bacino: ~8,90–12,00 € a persona",
      en: "First basin loop ticket: ~€8.90–12.00 per person",
      fr: "Billet boucle premier bassin : ~8,90–12,00 €",
      es: "Billete circuito primer bacino: ~8,90–12,00 €",
      de: "Rundfahrtticket erstes Seebecken: ~8,90–12,00 €",
      ru: "Круговой билет по первому бассейну: ~8,90–12,00 € с человека"
    },
    address: "Imbarcadero Centrale, Piazza Cavour, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 9 minuti a piedi (750 metri) scendendo direttamente verso il pontile di Piazza Cavour.",
      en: "From Como San Giovanni Station: 9 min walk (750 m) straight to Piazza Cavour passenger terminal.",
      fr: "De la gare Como San Giovanni : 9 min à pied jusqu'à l'embarcadère.",
      es: "Desde Como San Giovanni: 9 min a pie hasta el embarcadero.",
      de: "Vom Bahnhof Como San Giovanni: 9 Gehminuten zum Hauptanleger.",
      ru: "От станции Como San Giovanni: 9 минут пешком (750 м) прямо к центральному причалу на площади Кавур."
    }
  },
  {
    id: "slo-3",
    category: "slow",
    routeCategory: "slow",
    image: "assets/images/villa-geno.jpg",
    coordinates: { lat: 45.8202, lng: 9.0869 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8202,9.0869&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8202,9.0869",
    priceRange: "Gratuito",
    title: {
      it: "Passeggiata a Villa Geno & Fontana Monumentale",
      en: "Villa Geno Romance Walk & Monumental Fountain",
      fr: "Promenade vers la Villa Geno & Fontaine Monumentale",
      es: "Paseo a Villa Geno y Fuente Monumental",
      de: "Spaziergang zur Villa Geno & Monumentalbrunnen",
      ru: "Прогулка к вилле Джено и монументальному фонтану"
    },
    tag: {
      it: "Viale dei Tigli, Geyser d'Acqua di 30 m & Relax",
      en: "Linden Tree Alley, 30 m Water Geyser & Pure Serenity",
      fr: "Allée de Tilleuls & Geyser d'Eau de 30 Mètres",
      es: "Avenida de Tilos y Géiser de Agua de 30 Metros",
      de: "Lindenallee & 30-Meter-Wassergeysir mit Seeruhm",
      ru: "Липовая аллея, 30-метровый гейзер и безмятежность"
    },
    shortDesc: {
      it: "Tranquilla passeggiata alberata sulla sponda orientale che conduce al promontorio di Geno, con il suo iconico getto d'acqua alto 30 metri.",
      en: "A peaceful tree-lined avenue along the eastern shore leading to Geno promontory, punctuated by a dramatic 30-meter water geyser.",
      fr: "Avenue ombragée paisible menant au promontoire de Geno et à son impressionnant jet d'eau jaillissant à 30 mètres de haut.",
      es: "Tranquila avenida arbolada en la orilla oriental que conduce al promontorio de Geno con su espectacular chorro de 30 metros.",
      de: "Idyllischer Uferspaziergang entlang der Ostküste zur Landzunge von Geno mit spektakulärer 30 Meter hoher Wasserfontäne.",
      ru: "Умиротворенная тенистая аллея вдоль восточного берега к мысу Джено с гигантским 30-метровым водным гейзером."
    },
    history: {
      it: "Costruita alla fine del Settecento su commissione dei marchesi Calderara e poi passata alla contessa Maria Beauharnais, nipote dell'imperatrice Giuseppina di Francia. Il viale lungolago fu inaugurato a metà Ottocento per collegare il centro cittadino a questo angolo di quiete assoluta.",
      en: "Commissioned in the late 18th century by the Calderara family and later owned by Countess Maria Beauharnais, niece of French Empress Joséphine.",
      fr: "Érigée à la fin du XVIIIe siècle pour la comtesse Maria Beauharnais, nièce de l'impératrice Joséphine.",
      es: "Construida a finales del siglo XVIII y habitada por la condesa Maria Beauharnais, sobrina de la emperatriz Josefina.",
      de: "Ende des 18. Jahrhunderts erbaut, später im Besitz von Gräfin Maria Beauharnais, Nichte von Kaiserin Joséphine.",
      ru: "Построена в конце XVIII века для маркизов Кальдерара, позже принадлежала графине Марии Богарне, племяннице императрицы Жозефины."
    },
    curiosity: {
      it: "La monumentale fontana con getto a zampillo, attiva da metà Novecento, spara l'acqua del lago a oltre 30 metri d'altezza creando nelle giornate di sole iridescenti arcobaleni visibili dall'intero golfo di Como.",
      en: "The towering water jet shoots lake water over 30 meters high, creating radiant rainbows visible across the entire bay in sunlight.",
      fr: "Le jet d'eau s'élève à 30 mètres de haut, créant de scintillants arcs-en-ciel visibles de toute la baie.",
      es: "El gran géiser lanza agua a más de 30 metros de altura, formando arcoíris multicolores en los días soleados.",
      de: "Die gewaltige Fontäne schießt 30 Meter in die Höhe und erzeugt an sonnigen Tagen leuchtende Regenbögen.",
      ru: "Монументальный фонтан-гейзер взмывает в небо более чем на 30 метров, создавая в солнечные дни яркую радугу над заливом."
    },
    hours: {
      it: "Passeggiata sempre aperta (Fontana attiva durante il giorno nei mesi primaverili ed estivi)",
      en: "Walkway always open (Fountain operates daytime in spring/summer)",
      fr: "Promenade ouverte 24h/24",
      es: "Paseo accesible permanentemente",
      de: "Spazierweg rund um die Uhr geöffnet",
      ru: "Прогулочная аллея открыта круглосуточно (фонтан работает днем в теплое время года)"
    },
    price: {
      it: "Accesso completamente gratuito",
      en: "Completely free",
      fr: "Entièrement gratuit",
      es: "Totalmente gratuito",
      de: "Kostenlos",
      ru: "Бесплатно"
    },
    address: "Viale Geno 12, 22100 Como",
    transitFromStation: {
      it: "Dalla Stazione Como San Giovanni: 20 minuti di passeggiata rilassante (1,6 km) costeggiando Piazza Cavour, la stazione della funicolare e proseguendo verso nord lungo il viale dei tigli.",
      en: "From Como San Giovanni Station: 20 min relaxing lakeside stroll (1.6 km) past the funicular station along the linden alley.",
      fr: "De la gare Como San Giovanni : 20 min de marche agréable le long du lac.",
      es: "Desde Como San Giovanni: 20 min de agradable paseo junto al agua.",
      de: "Vom Bahnhof Como San Giovanni: 20 Min. herrlicher Seespaziergang über die Lindenallee.",
      ru: "От станции Como San Giovanni: 20 минут неспешной приятной прогулки (1,6 км) мимо нижней станции фуникулера по тенистой липовой аллее у воды."
    }
  },
  {
    id: "slo-4",
    category: "slow",
    routeCategory: "slow",
    image: "assets/images/aperitivo.jpg",
    coordinates: { lat: 45.8120, lng: 9.0815 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8120,9.0815&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8120,9.0815",
    priceRange: "€12–22",
    title: {
      it: "Aperitivo vista lago in Piazza Cavour / Terrazza a Brunate",
      en: "Lakeside Sunset Aperitivo in Piazza Cavour / Brunate",
      fr: "Apéritif au coucher du soleil à Piazza Cavour / Brunate",
      es: "Aperitivo frente al lago en Piazza Cavour / Brunate",
      de: "Sunset-Aperitivo mit Seeblick auf der Piazza Cavour / Brunate",
      ru: "Аперитив на закате с видом на озеро: Пьяцца Кавур / Брунате"
    },
    tag: {
      it: "Rito Italiano dell'Aperitivo & Tramonto Dorato",
      en: "Classic Italian Golden Hour Ritual & Spritz",
      fr: "Rituel Italien de l'Apéritif au Crépuscule",
      es: "Ritual del Aperitivo Italiano y Atardecer Dorado",
      de: "Klassisches Aperitivo-Erlebnis zur goldenen Stunde",
      ru: "Классический итальянский аперитив на золотом закате"
    },
    shortDesc: {
      it: "Il rito sacro dell'aperitivo all'italiana: calice di Franciacorta o Negroni Sbagliato accompagnato da stuzzichini mentre il cielo si tinge d'oro.",
      en: "The quintessentially Italian golden hour: sipping chilled Franciacorta or a Negroni Sbagliato with gourmet bites as twilight descends.",
      fr: "Le rituel emblématique de l'art de vivre italien : un verre de Franciacorta ou de Negroni avec mises en bouche raffinées face au lac.",
      es: "El ritual por excelencia de la tarde italiana: una copa de Franciacorta o Negroni Sbagliato con aperitivos gourmet.",
      de: "Die italienische Lebenskunst par excellence: Ein Glas Franciacorta oder Negroni Sbagliato bei Sonnenuntergang.",
      ru: "Священный итальянский ритуал аперитива: бокал охлажденного Franciacorta или коктейль Negroni Sbagliato с изысканными закусками под лучами заката."
    },
    history: {
      it: "Nato a fine Ottocento nel Nord Italia e consacrato nei caffè d'epoca di Como, l'aperitivo rappresenta il ponte ideale tra la giornata di esplorazione e la cena. Sia nei salotti storici di Piazza Cavour sia sulle terrazze sospese di Brunate a 700 metri, è un'esperienza sensoriale irrinunciabile.",
      en: "Born in 19th-century Northern Italy and perfected in Como's grand historic cafes, the aperitivo seamlessly bridges daytime wandering and evening dining.",
      fr: "Né au XIXe siècle dans le nord de l'Italie, l'apéritif est une parenthèse enchantée face au scintillement des eaux.",
      es: "Nacido en el siglo XIX en el norte de Italia, es la mejor manera de concluir una jornada inolvidable frente al lago.",
      de: "Im 19. Jahrhundert in Norditalien kultiviert, verbindet das Ritual Tagesausflug und elegantes Abendessen.",
      ru: "Родившийся в конце XIX века на севере Италии и возведенный в ранг искусства, аперитив — лучший способ завершить день у озера Комо."
    },
    curiosity: {
      it: "Gli stuzzichini non sono semplici patatine, ma vere eccellenze in miniatura: olive di Perledo, scaglie di Parmigiano Reggiano 24 mesi, focaccia ligure all'olio d'oliva e crostini con paté di lago.",
      en: "Accompanied by complimentary gourmet treats: local Perledo lake olives, aged 24-month Parmigiano bites, warm focaccia, and lake fish crostini.",
      fr: "Servi avec des bouchées raffinées : olives lariennes, parmesan 24 mois et focaccia dorée.",
      es: "Acompañado de aperitivos de cortesía: aceitunas del lago, parmesano curado y focaccia caliente.",
      de: "Begleitet von erlesenen Köstlichkeiten wie Perledo-Oliven, gereiftem Parmesan und warmer Focaccia.",
      ru: "К напиткам бесплатно подают миниатюрные деликатесы: озерные оливки Перледо, ломтики пармезана 24-месячной выдержки, теплую фокаччу и кростини с паштетом."
    },
    hours: {
      it: "17:30–21:00 (Momento d'oro al tramonto, aperto tutti i giorni)",
      en: "17:30–21:00 (Sunset golden hours daily)",
      fr: "17:30–21:00 (Tous les jours au crépuscule)",
      es: "17:30–21:00 (Todos los días al atardecer)",
      de: "17:30–21:00 (Täglich zur Abenddämmerung)",
      ru: "17:30–21:00 (Ежедневно в золотые предзакатные часы)"
    },
    price: {
      it: "Aperitivo completo con cocktail/vino e stuzzichini: ~12–18 € a persona (Terrazze d'alta quota: ~16–22 €)",
      en: "Full aperitivo with wine/cocktail & bites: ~€12–18 pp (Panoramic cliff terrace: ~€16–22)",
      fr: "Apéritif complet avec boisson et bouchées : ~12–18 €",
      es: "Aperitivo completo con bebida y tapas: ~12–18 €",
      de: "Kompletter Aperitivo mit Drink & Häppchen: ~12–18 €",
      ru: "Полный аперитив с напитком и закусками: ~12–18 € с человека (на видовых террасах в Брунате: ~16–22 €)"
    },
    address: "Piazza Cavour & Lungo Lario, 22100 Como (oppure Terrazza Panoramica Brunate)",
    transitFromStation: {
      it: "Partenza & Ritorno: Stazione Como San Giovanni. Piazza Cavour dista appena 8 minuti a piedi dalla stazione; per Brunate prendere la comoda Funicolare (7 min). Rientro comodissimo al binario di partenza.",
      en: "Start & Finish: Como San Giovanni Station. Piazza Cavour is 8 min walk; or take the funicular up to Brunate. Quick evening return to your train.",
      fr: "Départ et retour : gare Como San Giovanni. 8 min à pied de Piazza Cavour.",
      es: "Salida y llegada: Estación Como San Giovanni. A 8 min a pie de Piazza Cavour.",
      de: "Start & Ziel: Bahnhof Como San Giovanni. Piazza Cavour liegt 8 Gehminuten entfernt.",
      ru: "Старт и финиш: Станция Como San Giovanni. Площадь Кавур находится всего в 8 минутах пешком от вокзала; для террасы в Брунате — 7 минут на фуникулере. Удобный вечерний возврат к поезду."
    }
  }
,
  // ==========================================
  // G. HUB STRATEGICI (Stazione Ferroviaria & Imbarcadero Centrale)
  // ==========================================
  {
    id: "hub-stazione",
    category: "monumenti",
    routeCategory: "culturale",
    image: "assets/images/monza-station.jpg",
    coordinates: { lat: 45.8087, lng: 9.0725 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8087,9.0725&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8087,9.0725",
    priceRange: "~4,80 €",
    title: {
      it: "Stazione Como San Giovanni & Hub di Partenza",
      en: "Como San Giovanni Station & Central Hub",
      fr: "Gare de Como San Giovanni & Hub Central",
      es: "Estación Como San Giovanni y Hub de Salida",
      de: "Bahnhof Como San Giovanni & Zentraler Hub",
      ru: "Вокзал Como San Giovanni и главный хаб"
    },
    tag: {
      it: "Hub di Partenza e Rientro di Tutti gli Itinerari",
      en: "Start & Finish Hub for All Itineraries",
      fr: "Point de Départ et d'Arrivée de Tous les Circuits",
      es: "Punto de Salida y Llegada de Todos los Recorridos",
      de: "Start- und Endpunkt aller Tagesrouten",
      ru: "Главный хаб старта и финиша всех маршрутов"
    },
    shortDesc: {
      it: "La porta ferroviaria monumentale di Como: accoglie i viaggiatori in arrivo da Monza e Milano con la celebre scalinata panoramica verso il centro storico.",
      en: "The historic railway gateway to Lake Como: connects directly with Monza FS (32 min) and leads straight down to the lake basin.",
      fr: "La porte d'entrée ferroviaire de Côme, reliée directement à Monza (32 min).",
      es: "La histórica estación que conecta Monza con Como en solo 32 minutos.",
      de: "Der Hauptbahnhof von Como: Direkte 32-Minuten-Verbindung nach Monza.",
      ru: "Главные железнодорожные ворота города: скоростная прямая связь с Монцей (32 мин) и живописный спуск к набережной озера."
    },
    history: {
      it: "Inaugurata nel 1875 lungo la prestigiosa direttrice del Gottardo che unisce l'Italia alla Svizzera, la Stazione di Como San Giovanni è stata il punto d'accesso privilegiato per viaggiatori, scienziati e poeti del Grand Tour europeo.",
      en: "Opened in 1875 along the historic Gotthard railway connecting Milan to Switzerland, Como San Giovanni was the grand gateway for European Grand Tour travelers, writers, and royalty.",
      fr: "Inaugurée en 1875 sur la ligne historique du Saint-Gothard reliant l'Italie à la Suisse.",
      es: "Inaugurada en 1875 en la emblemática línea del San Gotardo que une Italia con Suiza.",
      de: "1875 an der berühmten Gotthard-Linie eröffnet, verbindet der Bahnhof Como mit der Schweiz.",
      ru: "Открытый в 1875 году на знаменитой Сен-Готардской железной дороге между Миланом и Швейцарией, вокзал Сан-Джованни встречал путешественников Гранд-тура со всей Европы."
    },
    curiosity: {
      it: "Uscendo dalla stazione, la scalinata di Via Gallio offre subito un primo suggestivo scorcio dall'alto sui campanili e sulle montagne che abbracciano il bacino lariano. In soli 8 minuti a piedi si raggiunge Piazza Cavour e il pontile dei battelli.",
      en: "Stepping out onto Piazzale San Gottardo, the grand Via Gallio staircase provides an elevated panorama of medieval towers and Alpine peaks framing the lake, just an 8-minute walk from the waterfront.",
      fr: "Les marches de la Via Gallio offrent une vue plongeante sur le centre historique et le lac.",
      es: "La escalinata de Via Gallio ofrece una vista panorámica inmediata hacia el lago.",
      de: "Über die Treppe der Via Gallio erreicht man in nur 8 Minuten zu Fuß den See.",
      ru: "Сразу на выходе с вокзала с лестницы Виа Галлио открывается панорамный вид на шпили соборов и горы вокруг озера. Всего 8 минут неспешной прогулки — и вы на набережной Пьяцца Кавур."
    },
    hours: {
      it: "Aperto tutti i giorni 05:00–00:30 (Treni cadenzati ogni 15–30 min)",
      en: "Open daily 05:00–00:30 (Trains every 15–30 min)",
      fr: "Ouvert tous les jours 05h00–00h30 (Trains toutes les 15–30 min)",
      es: "Abierto todos los días 05:00–00:30 (Trenes cada 15–30 min)",
      de: "Täglich geöffnet 05:00–00:30 (Züge alle 15–30 Min.)",
      ru: "Открыт ежедневно 05:00–00:30 (Поезда каждые 15–30 минут)"
    },
    price: {
      it: "Biglietto corsa singola Monza–Como: ~4,80 € (RE80 / S11)",
      en: "Single ticket Monza–Como: ~€4.80 (RE80 / S11)",
      fr: "Billet aller simple Monza–Côme : ~4,80 €",
      es: "Billete sencillo Monza–Como: ~4,80 €",
      de: "Einzelticket Monza–Como: ~4,80 €",
      ru: "Разовый билет Монца–Комо: ~4,80 € (RE80 / S11)"
    },
    address: "Piazzale San Gottardo, 22100 Como (CO)",
    transitFromStation: {
      it: "Punto di partenza e arrivo di tutti i 6 itinerari della guida. Rientro agevole da qualsiasi punto della città in 5–10 minuti.",
      en: "Central hub: start and return station for all 6 curated itineraries.",
      fr: "Point de départ et de retour pour tous les 6 itinéraires.",
      es: "Punto de salida y regreso para los 6 itinerarios.",
      de: "Zentraler Ausgangs- und Endpunkt für alle 6 Routen.",
      ru: "Центральный хаб: точка старта и возвращения для всех 6 авторских маршрутов."
    }
  },
  {
    id: "hub-battello",
    category: "monumenti",
    routeCategory: "culturale",
    image: "assets/images/battello.jpg",
    coordinates: { lat: 45.8130, lng: 9.0800 },
    streetViewEmbed: "https://maps.google.com/maps?q=&layer=c&cbll=45.8130,9.0800&cbp=11,0,0,0,0&output=svembed",
    streetViewLink: "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=45.8130,9.0800",
    priceRange: "~8,90–25,00 €",
    title: {
      it: "Pontile di Como & Navigazione Laghi (Aliscafi e Battelli)",
      en: "Como Pier & Lake Como Ferry Network",
      fr: "Ponton de Côme & Navigation sur le Lac",
      es: "Muelle de Como y Barcos del Lago",
      de: "Schiffsanleger Como & Comer See Schifffahrt",
      ru: "Пристань Комо и флот озера (Navigazione Laghi)"
    },
    tag: {
      it: "Imbarcadero Centrale • Crociere, Aliscafi e Motonavi",
      en: "Central Pier • Cruises, Hydrofoils & Ferries",
      fr: "Ponton Central • Croisières et Navettes Rapides",
      es: "Muelle Principal • Cruceros y Catamaranes",
      de: "Hauptanleger • Rundfahrten und Schnellboote",
      ru: "Центральный причал • Круизы, скоростные катера и паромы"
    },
    shortDesc: {
      it: "Il cuore navigabile del Lago di Como: partenze continue per Bellagio, Varenna, Menaggio e il primo bacino delle ville storiche.",
      en: "The maritime heart of Lake Como: frequent ferries and hydrofoils to Bellagio, Varenna, and lakeside villas.",
      fr: "Le cœur lacustre de Côme avec départs continus pour Bellagio et les villas.",
      es: "El muelle principal con salidas continuas hacia Bellagio y los pueblos del lago.",
      de: "Das Herz der Schifffahrt auf dem See: Schiffe nach Bellagio und Varenna.",
      ru: "Морское сердце озера Комо: регулярные рейсы скоростных катеров и теплоходов до Белладжо, Варенны и вилл первого бассейна."
    },
    history: {
      it: "La navigazione a vapore sul Lago di Como ha una tradizione illustre che risale al 1826 con il varo del leggendario piroscafo 'Lario'. Oggi la flotta conta oltre 30 imbarcazioni tra aliscafi moderni e lo storico piroscafo 'Concordia' con ruote a pale del 1926.",
      en: "Steam navigation on Lake Como began in 1826 with the historic steamboat 'Lario'. Today's fleet includes cutting-edge hydrofoils and the vintage 1926 paddle steamer 'Concordia'.",
      fr: "La navigation sur le lac a débuté en 1826 avec le vapeur 'Lario'.",
      es: "La navegación en el lago comenzó en 1826 con el barco de vapor 'Lario'.",
      de: "Die Dampfschifffahrt auf dem Comer See begann 1826 mit der 'Lario'.",
      ru: "Регулярное пароходство на озере Комо действует с 1826 года, когда был спущен на воду первый пароход 'Lario'. Сегодня флот включает современные быстроходные катера и исторический колесный пароход 'Concordia' 1926 года."
    },
    curiosity: {
      it: "Dall'acqua la prospettiva sulle ville patrizie è totalmente diversa e inaccessibile da terra: si ammirano le darsene private in marmo, i giardini botanici a gradoni e i riflessi d'oro dei monti sulle acque.",
      en: "From the water, you get exclusive angles on lakeside villas impossible to see from land: private marble boathouses, terraced sub-tropical gardens, and soaring Alpine cliffs.",
      fr: "Depuis l'eau, les villas privées et leurs jardins en terrasses dévoilent toute leur splendeur.",
      es: "Desde el barco se contemplan las villas y jardines botánicos que no se pueden ver desde tierra.",
      de: "Vom Wasser aus erlebt man die Prachtvillen aus einer völlig neuen, exklusiven Perspektive.",
      ru: "С борта катера открывается уникальный вид на виллы, недоступный с суши: старинные мраморные лодочные ангары, каскадные сады и скалы, круто уходящие в зеркальную воду."
    },
    hours: {
      it: "Corse continue tutti i giorni dalle 07:30 alle 21:30 (Orari stagionali Navigazione Laghi)",
      en: "Continuous departures daily 07:30–21:30",
      fr: "Départs continus tous les jours de 07h30 à 21h30",
      es: "Salidas continuas diarias de 07:30 a 21:30",
      de: "Täglich regelmäßige Abfahrten 07:30–21:30",
      ru: "Регулярные рейсы ежедневно с 07:30 до 21:30"
    },
    price: {
      it: "Corsa singola primo bacino: ~8,90 € | Libera circolazione centro lago: ~15,00–25,00 €",
      en: "Single ticket first basin: ~€8.90 | Day pass central lake: ~€15.00–25.00",
      fr: "Aller simple : ~8,90 € | Pass journée : ~15,00–25,00 €",
      es: "Billete sencillo: ~8,90 € | Pase ilimitado centro lago: ~15,00–25,00 €",
      de: "Einzelfahrt: ~8,90 € | Tagesticket Seemitte: ~15,00–25,00 €",
      ru: "Билет в первый бассейн: ~8,90 € | Проездной на весь день по центру озера: ~15,00–25,00 €"
    },
    address: "Piazza Cavour (Imbarcadero), 22100 Como (CO)",
    transitFromStation: {
      it: "A soli 8 minuti a piedi dalla Stazione Como San Giovanni percorrendo Via Gallio e Via Garibaldi fino alla riva.",
      en: "Just an 8-minute walk from Como San Giovanni station through Via Gallio.",
      fr: "À 8 minutes à pied de la gare Como San Giovanni.",
      es: "A 8 minutos a pie de la estación Como San Giovanni.",
      de: "Nur 8 Gehminuten vom Bahnhof Como San Giovanni entfernt.",
      ru: "Всего 8 минут пешком от станции Como San Giovanni по Виа Галлио и Виа Гарибальди прямо к причалу."
    }
  }
];

// ============================================================================
// CHRONOLOGICAL TIMELINES & GOOGLE MAPS MULTI-POINT ROUTES
// ============================================================================
const comoTimelines = {
  enogastronomico: {
    googleMapsUrl: "https://www.google.com/maps/dir/Stazione+Como+San+Giovanni,+Como/Imbarcadero+Como,+Piazza+Cavour,+Como/Salita+Serbelloni,+Bellagio/Ristorante+Mella,+San+Giovanni,+Bellagio/Crotto+del+Sergente,+Via+Crotto+del+Sergente,+Como/Stazione+Como+San+Giovanni,+Como",
    steps: [
      {
        time: "09:30",
        badge: { it: "Treno RE80", en: "RE80 Train", fr: "Train RE80", es: "Tren RE80", de: "RE80 Zug", ru: "Поезд RE80" },
        title: {
          it: "Arrivo a Stazione Como San Giovanni",
          en: "Arrival at Como San Giovanni Station",
          fr: "Arrivée à la gare Como San Giovanni",
          es: "Llegada a la estación Como San Giovanni",
          de: "Ankunft am Bahnhof Como San Giovanni",
          ru: "Прибытие на вокзал Como San Giovanni"
        },
        desc: {
          it: "Discesa dal treno diretto da Monza FS. Uscita su Piazzale San Gottardo e discesa panoramica a piedi (10 min) attraverso le antiche mura verso Piazza Cavour.",
          en: "Disembark from the direct train from Monza FS. Exit to Piazzale San Gottardo and take the scenic 10-minute walk through medieval walls to Piazza Cavour.",
          fr: "Descente du train direct de Monza FS. Promenade panoramique de 10 min jusqu'à Piazza Cavour.",
          es: "Bajada del tren directo desde Monza FS. Paseo panorámico de 10 min hacia Piazza Cavour.",
          de: "Ankunft mit dem Direktzug aus Monza. 10-minütiger Fußweg zur Piazza Cavour.",
          ru: "Выход с поезда из Монцы. 10-минутный спуск через старинные стены к набережной Piazza Cavour."
        },
        itemId: "hub-stazione"
      },
      {
        time: "10:30",
        badge: { it: "Aliscafo / Battello Rapido", en: "Fast Hydrofoil / Ferry", fr: "Bateau rapide", es: "Barco rápido", de: "Schnellboot", ru: "Скоростной катер (aliscafo)" },
        title: {
          it: "Navigazione rapida per Bellagio",
          en: "Scenic Fast Ferry to Bellagio",
          fr: "Traversée rapide vers Bellagio",
          es: "Navegación rápida a Bellagio",
          de: "Schnellboot-Überfahrt nach Bellagio",
          ru: "Скоростной катер до Белладжо"
        },
        desc: {
          it: "Dal pontile di Como Lungolago imbarco sull'aliscafo Navigazione Laghi. Spettacolare crociera ammirando dal centro del lago le ville di Cernobbio, Moltrasio e Tremezzo.",
          en: "Board the fast ferry at Como pier. A breathtaking voyage past the historic palaces of Cernobbio, Moltrasio, and Tremezzo to the pearl of Bellagio.",
          fr: "Embarquement sur l'hydroglisseur au ponton de Côme vers Bellagio le long des villas historiques.",
          es: "Embarque en el catamarán rápido en el muelle de Como hacia Bellagio pasando frente a las grandes villas.",
          de: "Einschiffung am Anleger Como. Wunderschöne Fahrt vorbei an den Palästen bis nach Bellagio.",
          ru: "Посадка на скоростной катер Navigazione Laghi на причале Комо. Захватывающий переход по воде мимо вилл Черноббьо и Тремеццо."
        },
        itemId: "hub-battello"
      },
      {
        time: "11:45",
        badge: { it: "Antipasto Nobile", en: "Heritage Tasting", fr: "Dégustation", es: "Degustación", de: "Verkostung", ru: "Дегустация закусок" },
        title: {
          it: "Salita Serbelloni & Lavarello Essiccato",
          en: "Salita Serbelloni & Cured Lavarello",
          fr: "Salita Serbelloni & Lavaret Séché",
          es: "Salita Serbelloni y Lavareto Curado",
          de: "Salita Serbelloni & Lavarello-Salat",
          ru: "Лестница Сербеллони и вяленый лаварелло"
        },
        desc: {
          it: "Passeggiata sulla celebre scalinata fiorita Serbelloni e sosta gourmet presso Trattoria San Giacomo per l'insalata di lavarello (coregone) nobile del lago con pinoli e misticanza.",
          en: "Stroll the postcard-perfect cobbled stairs of Salita Serbelloni; indulge in fresh lake whitefish salad with pine nuts and virgin olive oil at Trattoria San Giacomo.",
          fr: "Balade sur les marches de Salita Serbelloni et dégustation de lavaret séché aux pignons de pin à la Trattoria San Giacomo.",
          es: "Paseo por la icónica escalinata Serbelloni y degustación de lavareto del lago en Trattoria San Giacomo.",
          de: "Spaziergang über die berühmte Freitreppe Serbelloni und Genuss feiner Seefisch-Spezialitäten in der Trattoria San Giacomo.",
          ru: "Прогулка по открыточной каменной лестнице Сербеллони и дегустация нежнейшего озерного сига (лаварелло) с кедровыми орешками в Trattoria San Giacomo."
        },
        itemId: "eno-5"
      },
      {
        time: "13:15",
        badge: { it: "Pranzo d'Autore", en: "Signature Lunch", fr: "Déjeuner Gourmet", es: "Almuerzo Estrella", de: "Mittagsmenü", ru: "Обед: главное блюдо" },
        title: {
          it: "Riso con Filetti di Pesce Persico Dorato",
          en: "Carnaroli Rice with Golden Perch Fillets",
          fr: "Riz aux filets de perche dorés",
          es: "Arroz con filetes de perca dorada",
          de: "Reis mit goldbraunen Flussbarschfilets",
          ru: "Рис с золотистым озерным окунем"
        },
        desc: {
          it: "Il piatto principe della gastronomia lariana: filetti di pesce persico appena pescato, passati nel burro d'alpeggio chiarificato e salvia fresca su letto di riso Carnaroli.",
          en: "The crowning glory of Lake Como cuisine: wild perch fillets sautéed in browned alpine sage butter over fragrant buttered Carnaroli rice.",
          fr: "Le plat roi du Lario : filets de perche dorés au beurre d'alpage mousseux et sauge fraîche sur riz Carnaroli.",
          es: "El plato más célebre del lago: filetes de perca a la mantequilla de montaña con salvia fresca.",
          de: "Das Königsgericht des Sees: Frische Barschfilets in schäumender Salbeibutter auf feinem Carnaroli-Reis.",
          ru: "Главный гастрономический символ озера: филе свежего окуня в топленом альпийском масле с шалфеем на подушке из рассыпчатого риса Карнароли."
        },
        itemId: "eno-1"
      },
      {
        time: "14:45",
        badge: { it: "Antica Tradizione", en: "Ancient Tradition", fr: "Tradition Séculaire", es: "Tradición Antigua", de: "Uralte Tradition", ru: "Традиция предков" },
        title: {
          it: "Missoltini con Polenta Calda al Ristorante Mella",
          en: "Grilled Missoltini & Warm Polenta at Ristorante Mella",
          fr: "Missoltini grillés et polenta au Ristorante Mella",
          es: "Missoltini a la brasa con polenta en Ristorante Mella",
          de: "Gegrillte Missoltini mit Polenta im Ristorante Mella",
          ru: "Миссольтини с горячей полентой в Ristorante Mella"
        },
        desc: {
          it: "Spostamento a San Giovanni di Bellagio: assaggio degli storici missoltini (agoni essiccati al sole e grigliati sui carboni) accompagnati da polenta fumante sul parco a lago.",
          en: "Short transfer to scenic San Giovanni di Bellagio: savor traditional sun-dried shad grilled over glowing coals with rustic yellow polenta overlooking the water.",
          fr: "Halte à San Giovanni di Bellagio pour déguster les aloses séchées au soleil et grillées à la braise.",
          es: "Visita a San Giovanni di Bellagio para probar los missoltini asados al carbón con polenta casera.",
          de: "Besuch in San Giovanni di Bellagio: Sonnengetrockneter Seefisch vom Holzkohlegrill mit feiner Polenta.",
          ru: "Переход в Сан-Джованни-ди-Белладжо: дегустация вяленых на солнце агоне, обжаренных на углях с кукурузной полентой на берегу озера."
        },
        itemId: "eno-2"
      },
      {
        time: "16:30",
        badge: { it: "Battello di Rientro", en: "Return Ferry", fr: "Bateau Retour", es: "Barco de Vuelta", de: "Rückfahrt Schiff", ru: "Обратный катер" },
        title: {
          it: "Navigazione panoramica del Centro Lago verso Como",
          en: "Leisurely Cruise back towards Como",
          fr: "Croisière retour vers Côme",
          es: "Crucero de regreso hacia Como",
          de: "Panoramaschifffahrt zurück nach Como",
          ru: "Панорамный круиз обратно в Комо"
        },
        desc: {
          it: "Salita sul battello pomeridiano per Como. Relax sul ponte superiore ammirando i riflessi dorati del tardo pomeriggio su Villa Balbianello, Villa Carlotta e Laglio.",
          en: "Board the afternoon ferry back to Como. Relax on the open top deck taking in golden afternoon light on Villa Balbianello, Villa Carlotta, and George Clooney's Laglio.",
          fr: "Bateau de retour l'après-midi, vue imprenable sur Villa Balbianello et les rives verdoyantes.",
          es: "Paseo de vuelta en barco, disfrutando de la luz dorada sobre las villas y palacios ribereños.",
          de: "Entspannte Schifffahrt im goldenen Nachmittagslicht vorbei an Villa Balbianello und Laglio.",
          ru: "Возвращение на катере в Комо. Отдых на открытой палубе в лучах предзакатного солнца с видом на виллу Бальбьянелло и Лальо."
        },
        itemId: "hub-battello"
      },
      {
        time: "18:15",
        badge: { it: "Crotto Tipico", en: "Typical Crotto", fr: "Crotto Typique", es: "Crotto Típico", de: "Uriges Crotto", ru: "Традиционный кротто" },
        title: {
          it: "Degustazione Finale al Crotto del Sergente",
          en: "Evening Tasting at Crotto del Sergente",
          fr: "Dégustation du soir au Crotto del Sergente",
          es: "Degustación nocturna en Crotto del Sergente",
          de: "Abendlicher Ausklang im Crotto del Sergente",
          ru: "Финальная дегустация в Crotto del Sergente"
        },
        desc: {
          it: "Conclusione d'eccellenza con carpione di lago marinato al timo selvatico e calice di bianco lariano nella cantina naturale 'Sorèl' scavata nella roccia.",
          en: "Cap off the day with marinated carpione fish and crisp local white wine in an ancient natural rock cave cellar cooled by mountain breezes.",
          fr: "Fin de parcours avec carpione mariné au thym sauvage dans une cave taillée dans la roche vive.",
          es: "Broche de oro con carpione marinado y vino blanco lariano en una bodega natural en la roca.",
          de: "Abschluss mit mariniertem Fisch und kühlem Weißwein im natürlichen Felsenkeller.",
          ru: "Завершение гастрономического дня: маринованный карпионе с горным тимьяном и бокал местного белого вина в скальном погребе с природной прохладой."
        },
        itemId: "eno-3"
      },
      {
        time: "19:30",
        badge: { it: "Treno Rientro", en: "Return Train", fr: "Train Retour", es: "Tren de Vuelta", de: "Rückzug", ru: "Поезд на Монцу" },
        title: {
          it: "Rientro alla Stazione Como San Giovanni",
          en: "Return to Como San Giovanni Railway Station",
          fr: "Retour à la gare Como San Giovanni",
          es: "Regreso a la estación Como San Giovanni",
          de: "Rückkehr zum Bahnhof Como San Giovanni",
          ru: "Возвращение на вокзал Como San Giovanni"
        },
        desc: {
          it: "Rientro comodo al piazzale della stazione ferroviaria Como San Giovanni e salita a bordo del treno RE80/S11 diretto per Monza FS.",
          en: "Return smoothly to Como San Giovanni rail station platform; take the direct RE80 or S11 train back to Monza FS.",
          fr: "Retour tranquille à la gare pour prendre le train direct RE80/S11 vers Monza FS.",
          es: "Regreso al andén de Como San Giovanni para abordar el tren directo a Monza FS.",
          de: "Bequeme Rückkehr zum Bahnsteig für die Direktverbindung nach Monza.",
          ru: "Возвращение на платформу вокзала Como San Giovanni и посадка на прямой поезд RE80/S11 до Монцы."
        },
        itemId: "hub-stazione"
      }
    ]
  },

  culturale: {
    googleMapsUrl: "https://www.google.com/maps/dir/Stazione+Como+San+Giovanni,+Como/Porta+Torre,+Como/Basilica+di+San+Fedele,+Como/Duomo+di+Como/Tempio+Voltiano,+Como/Villa+del+Balbianello,+Lenno/Villa+Carlotta,+Tremezzo/Stazione+Como+San+Giovanni,+Como",
    steps: [
      {
        time: "09:00",
        badge: { it: "Punto di Partenza", en: "Starting Hub", fr: "Point de Départ", es: "Punto de Partida", de: "Startpunkt", ru: "Старт маршрута" },
        title: {
          it: "Partenza da Como San Giovanni",
          en: "Departure from Como San Giovanni",
          fr: "Départ de Como San Giovanni",
          es: "Salida de Como San Giovanni",
          de: "Start am Bahnhof Como San Giovanni",
          ru: "Старт от Como San Giovanni"
        },
        desc: {
          it: "Uscita dalla stazione ferroviaria e ingresso a piedi nelle mura medievali della Città Murata di Como.",
          en: "Exit the station and take a short morning stroll into Como's medieval fortified historic center.",
          fr: "Sortie de la gare et entrée à pied dans la cité fortifiée de Côme.",
          es: "Salida de la estación y paseo a pie por el centro amurallado de Como.",
          de: "Start am Bahnhof und Spaziergang in die historische Stadtmauer von Como.",
          ru: "Выход с вокзала и 5-минутная прогулка к средневековым крепостным стенам исторического центра Комо."
        },
        itemId: "hub-stazione"
      },
      {
        time: "09:20",
        badge: { it: "Fortificazioni 1192", en: "Fortress 1192", fr: "Forteresse 1192", es: "Fortaleza 1192", de: "Festung 1192", ru: "Крепость 1192 г." },
        title: {
          it: "Porta Torre & Le Mura Medievali",
          en: "Porta Torre & Medieval City Walls",
          fr: "Porta Torre & Remparts Médiévaux",
          es: "Porta Torre y Murallas Medievales",
          de: "Porta Torre & Mittelalterliche Stadtmauer",
          ru: "Башня Порта Торре и крепостные стены"
        },
        desc: {
          it: "L'imponente bastione difensivo in pietra alto 40 metri eretto nel 1192 da Federico Barbarossa per proteggere l'accesso a Como.",
          en: "The imposing 40-meter-tall defensive stone tower built in 1192 by Emperor Frederick Barbarossa guarding the city entrance.",
          fr: "L'imposante tour de défense haute de 40 mètres érigée en 1192 par Frédéric Barberousse.",
          es: "La imponente torre defensiva de piedra de 40 metros de altura erigida en 1192 por Barbarroja.",
          de: "Der imposante 40 Meter hohe steinerne Wehrturm aus dem Jahr 1192 von Friedrich Barbarossa.",
          ru: "Мощная 40-метровая каменная оборонительная башня 1192 года, возведенная Барбароссой для защиты Комо."
        },
        itemId: "mon-6"
      },
      {
        time: "09:50",
        badge: { it: "Romanico 1120", en: "Romanesque 1120", fr: "Roman 1120", es: "Románico 1120", de: "Romanik 1120", ru: "Романика 1120 г." },
        title: {
          it: "Basilica di San Fedele & Antico Mercato",
          en: "San Fedele Basilica & Ancient Grain Market",
          fr: "Basilique San Fedele & Ancien Marché",
          es: "Basílica de San Fedele y Plaza Antigua",
          de: "Basilika San Fedele & Alter Marktplatz",
          ru: "Базилика Сан-Феделе и старинная площадь"
        },
        desc: {
          it: "Capolavoro del romanico lombardo fondato sul foro romano del grano, celebre per il suo coro trilobato e il portale scolpito dei Maestri Comacini.",
          en: "Lombard Romanesque gem standing on the Roman grain forum, admired for its trilobate apse and sculpted portal by Comacine masters.",
          fr: "Chef-d'œuvre roman lombard érigé sur l'ancien forum romain avec son chœur trilobé remarquable.",
          es: "Joya del románico lombardo sobre el antiguo foro romano, famosa por su ábside trilobulado y portal tallado.",
          de: "Meisterwerk der lombardischen Romanik mit Kleeblattchor auf dem antiken römischen Forum.",
          ru: "Шедевр ломбардской романики на месте римского зернового рынка, знаменитый трилистным хором и каменной резьбой мастеров Комачини."
        },
        itemId: "mon-4"
      },
      {
        time: "10:30",
        badge: { it: "Duomo & Broletto", en: "Duomo & Broletto", fr: "Cathédrale & Broletto", es: "Catedral y Broletto", de: "Dom & Broletto", ru: "Собор и Бролетто" },
        title: {
          it: "Duomo di Como & Broletto Medievale",
          en: "Como Cathedral (Duomo) & Historic Broletto",
          fr: "Cathédrale de Côme & Broletto Médiéval",
          es: "Catedral de Como y Broletto Histórico",
          de: "Dom zu Como & Historischer Broletto",
          ru: "Кафедральный собор Комо и ратуша Бролетто"
        },
        desc: {
          it: "Visita alla monumentale Cattedrale gotico-rinascimentale con cupola alta 75m di Filippo Juvarra e all'adiacente palazzo municipale del 1215 in marmo policromo.",
          en: "Admire the Gothic-Renaissance cathedral with Juvarra's soaring 75m dome, tapestries, and the adjacent 1215 medieval town hall in striped marble.",
          fr: "Visite de la monumentale cathédrale gothique-renaissance au dôme de 75m et de l'hôtel de ville médiéval en marbre polychrome.",
          es: "Visita a la catedral gótico-renacentista con cúpula de 75m de Juvarra y el ayuntamiento medieval de 1215 en mármol rayado.",
          de: "Besichtigung des Doms mit der 75m hohen Juvarra-Kuppel und des mittelalterlichen Rathauses von 1215.",
          ru: "Осмотр грандиозного готическо-ренессансного собора с 75-метровым куполом Юварры и примыкающей ратуши 1215 года из полосатого мрамора."
        },
        itemId: "mon-1"
      },
      {
        time: "11:30",
        badge: { it: "Scienza & Volta", en: "Volta & Science", fr: "Science & Volta", es: "Ciencia y Volta", de: "Wissenschaft", ru: "Алессандро Вольта" },
        title: {
          it: "Tempio Voltiano sul Lungolago",
          en: "Tempio Voltiano (Alessandro Volta Museum)",
          fr: "Temple Voltiano sur la Promenade",
          es: "Templo Voltiano frente al Lago",
          de: "Tempio Voltiano am Seeufer",
          ru: "Храм Вольты на набережной озера"
        },
        desc: {
          it: "Elegante tempio neoclassico affacciato sulle acque del lago, custode degli apparati scientifici originali e della prima pila elettrica ideata da Volta nel 1799.",
          en: "Neoclassical lakeside pantheon preserving Alessandro Volta's original laboratory instruments and the world's first electric battery.",
          fr: "Panthéon néoclassique au bord du lac abritant les instruments originaux et la première pile électrique inventée par Volta.",
          es: "Templo neoclásico frente al agua que custodia los instrumentos científicos originales y la primera pila eléctrica inventada en 1799.",
          de: "Neoklassizistischer Tempel am Seeufer mit den Originalapparaten und der ersten Batterie von Alessandro Volta.",
          ru: "Изящный неоклассический храм на берегу озера, хранящий подлинные приборы и первую в мире электрическую батарею, созданную Вольтой."
        },
        itemId: "mon-3"
      },
      {
        time: "12:15",
        badge: { it: "Navigazione Laghi", en: "Fast Ferry Pier", fr: "Bateau Navigazione", es: "Embarque Rápido", de: "Schiffstransfer", ru: "Катер на виллы" },
        title: {
          it: "Imbarco per Lenno & Villa del Balbianello",
          en: "Board Fast Ferry to Lenno & Balbianello",
          fr: "Embarquement pour Lenno & Balbianello",
          es: "Embarque hacia Lenno y Balbianello",
          de: "Schnellboot nach Lenno & Balbianello",
          ru: "Катер до Ленно и виллы Бальбьянелло"
        },
        desc: {
          it: "Dal pontile di Piazza Cavour salita sul battello rapido per Lenno. Spettacolare avvicinamento dal lago alla penisola di Lavedo.",
          en: "Board the fast ferry from Piazza Cavour pier directly to Lenno. Spectacular arrival by water to the forested Lavedo peninsula.",
          fr: "Départ en bateau rapide depuis Piazza Cavour jusqu'à Lenno pour rejoindre la péninsule de Lavedo.",
          es: "Salida en barco rápido desde Piazza Cavour hacia Lenno con llegada panorámica por agua.",
          de: "Fahrt mit dem Schnellboot von der Piazza Cavour nach Lenno zur Halbinsel Lavedo.",
          ru: "Посадка на скоростной катер от Piazza Cavour до Ленно. Подход по воде к лесистому мысу Лаведо."
        },
        itemId: "hub-battello"
      },
      {
        time: "13:30",
        badge: { it: "Icona Mondiale", en: "World Icon", fr: "Icône Mondiale", es: "Icono Mundial", de: "Weltberühmt", ru: "Мировой шедевр" },
        title: {
          it: "Villa del Balbianello (Lenno)",
          en: "Villa del Balbianello & Panoramic Terraces",
          fr: "Villa del Balbianello & Terrasses",
          es: "Villa del Balbianello y Terrazas",
          de: "Villa del Balbianello & Panoramagarten",
          ru: "Вилла дель Бальбьянелло (Ленно)"
        },
        desc: {
          it: "La dimora patrizia più celebre d'Italia: giardini a terrazze a picco sul blu, lecci potati a candelabro, museo delle spedizioni polari di Monzino e set di 007 e Star Wars.",
          en: "Italy's most breathtaking lakeside estate: cascading terraces, holm oaks pruned into umbrella candelabras, polar explorer museum, and set of James Bond 007 and Star Wars.",
          fr: "La villa la plus photographiée du lac : terrasses plongeant dans l'eau, chênes taillés en candélabre et décor de Casino Royale.",
          es: "La finca más famosa de Italia: jardines aterrazados sobre el lago, museo de exploraciones y escenario de Casino Royale y Star Wars.",
          de: "Das berühmteste Anwesen Italiens: Kaskadenartige Terrassengärten, Expeditionssammlungen und Filmkulisse von James Bond und Star Wars.",
          ru: "Легендарное поместье на скалистом мысе: террасные сады над лазурной водой, фигурные дубы-канделябры, музей полярных экспедиций графа Мондзино и декорации «Казино Рояль»."
        },
        itemId: "vil-1"
      },
      {
        time: "15:45",
        badge: { it: "Capolavori & Fiori", en: "Canova & Botanicals", fr: "Canova & Fleurs", es: "Canova y Jardines", de: "Kunst & Blüten", ru: "Скульптуры и ботсад" },
        title: {
          it: "Villa Carlotta (Tremezzo)",
          en: "Villa Carlotta & Botanical Haven",
          fr: "Villa Carlotta & Parc Botanique",
          es: "Villa Carlotta y Jardín Botánico",
          de: "Villa Carlotta & Botanischer Garten",
          ru: "Вилла Карлотта (Тремеццо)"
        },
        desc: {
          it: "Breve traghetto per Tremezzo: 70.000 m² di terrazze fiorite di azalee e rododendri secolari e capolavori scultorei neoclassici di Antonio Canova e Hayez.",
          en: "Quick ferry hop to Tremezzo: 70,000 sq m of terraced botanical gardens with giant azaleas and museum housing marble statues by Antonio Canova.",
          fr: "Court trajet vers Tremezzo : 70 000 m² de jardins botaniques et sculptures de Canova.",
          es: "Ferry corto a Tremezzo: 70.000 m² de parque botánico con azaleas gigantes y esculturas de Canova.",
          de: "Kurzer Schiffswechsel nach Tremezzo: 70.000 m² botanischer Garten und Meisterwerke von Antonio Canova.",
          ru: "Короткий переезд на катере в Тремеццо: 70 000 кв.м террасных садов вековых азалий и рододендронов, шедевры Антонио Кановы и Франческо Айеца."
        },
        itemId: "vil-2"
      },
      {
        time: "17:30",
        badge: { it: "Centro Lago", en: "Central Lake Pearl", fr: "Perle du Lac", es: "Joya del Lago", de: "Zentralsee-Juwel", ru: "Жемчужины озера" },
        title: {
          it: "Villa Melzi (Bellagio) o Villa Monastero (Varenna)",
          en: "Villa Melzi (Bellagio) or Villa Monastero (Varenna)",
          fr: "Villa Melzi (Bellagio) ou Villa Monastero (Varenna)",
          es: "Villa Melzi (Bellagio) o Villa Monastero (Varenna)",
          de: "Villa Melzi (Bellagio) oder Villa Monastero (Varenna)",
          ru: "Вилла Мельци (Белладжо) или Вилла Монастеро (Варенна)"
        },
        desc: {
          it: "Tappa finale del centro lago: i giardini neoclassici di Villa Melzi o la passeggiata a lago di Villa Monastero a Varenna prima dell'imbarco serale.",
          en: "Crown of the central lake: neoclassical shores of Villa Melzi d'Eril or the 2km botanical waterfront of Villa Monastero before sunset.",
          fr: "Dernière étape au cœur du lac : jardins de Villa Melzi ou promenade de Villa Monastero.",
          es: "Etapa final: los jardines neoclásicos de Villa Melzi o el paseo ribereño de Villa Monastero.",
          de: "Glanzvoller Abschluss: Die Gärten der Villa Melzi oder die 2km lange Uferpromenade der Villa Monastero.",
          ru: "Финальный аккорд в сердце озера: неоклассический парк виллы Мельци в Белладжо или 2-километровый ботанический променад виллы Монастеро в Варенне."
        },
        itemId: "vil-3"
      },
      {
        time: "19:15",
        badge: { it: "Rientro Trenord", en: "Direct Train Home", fr: "Train Retour", es: "Tren Directo", de: "Heimfahrt", ru: "Возвращение" },
        title: {
          it: "Rientro alla Stazione Como San Giovanni",
          en: "Return to Como San Giovanni & Train to Monza",
          fr: "Retour à la gare Como San Giovanni & train",
          es: "Regreso a Como San Giovanni y tren a Monza",
          de: "Rückkehr nach Como San Giovanni & Zug",
          ru: "Возвращение на вокзал Como San Giovanni и поезд в Монцу"
        },
        desc: {
          it: "Arrivo al pontile di Como, passeggiata alla Stazione Como San Giovanni e treno RE80/S11 di ritorno per Monza FS.",
          en: "Scenic ferry return to Como pier, 10 min stroll up to San Giovanni rail station, and direct train back to Monza FS.",
          fr: "Retour en bateau, montée à la gare Como San Giovanni et train direct pour Monza FS.",
          es: "Paseo final hasta la estación Como San Giovanni y tren directo de vuelta a Monza.",
          de: "Schifffahrt zurück nach Como, Gang zum Bahnhof und Direktzug nach Monza.",
          ru: "Возвращение на катере к набережной, подъем к вокзалу Como San Giovanni и посадка на прямой вечерний поезд до Монцы."
        },
        itemId: "hub-stazione"
      }
    ]
  },

  naturalistico: {
    googleMapsUrl: "https://www.google.com/maps/dir/Stazione+Como+San+Giovanni,+Como/Funicolare+Como-Brunate/Faro+Voltiano,+Brunate/Monte+Boletto/Orrido+di+Nesso/Orrido+di+Bellano/Stazione+Como+San+Giovanni,+Como",
    steps: [
      {
        time: "09:15",
        badge: { it: "Partenza", en: "Morning Start", fr: "Départ", es: "Salida", de: "Morgenstart", ru: "Утренний старт" },
        title: {
          it: "Arrivo a Como San Giovanni & Passeggiata al Lungolago Est",
          en: "Arrival at Como S.G. & Stroll to Funicular",
          fr: "Arrivée à Côme et marche vers le funiculaire",
          es: "Llegada a Como y paseo al funicular",
          de: "Ankunft in Como & Spaziergang zur Bahn",
          ru: "Прибытие в Комо и прогулка к фуникулеру"
        },
        desc: {
          it: "Treno RE80 da Monza FS. Passeggiata panoramica lungo la riva est fino a Piazza De Gasperi per la storica funicolare.",
          en: "Direct RE80 train from Monza FS. Walk along the lakeside promenade to Piazza De Gasperi funicular station.",
          fr: "Arrivée en train et marche le long des quais jusqu'au funiculaire.",
          es: "Llegada en tren y paseo junto al lago hasta la estación del funicular.",
          de: "Ankunft mit dem Zug und Uferweg zur Talstation der Standseilbahn.",
          ru: "Прямой поезд из Монцы. 15-минутная прогулка вдоль набережной к станции исторического фуникулера на Piazza De Gasperi."
        },
        itemId: "hub-stazione"
      },
      {
        time: "09:45",
        badge: { it: "Funicolare 1894", en: "Funicular 1894", fr: "Funiculaire 1894", es: "Funicular 1894", de: "Seilbahn 1894", ru: "Фуникулер 1894 г." },
        title: {
          it: "Funicolare Storica Como–Brunate",
          en: "Historic Como–Brunate Funicular Climb",
          fr: "Montée en Funiculaire Historique",
          es: "Funicular Histórico Como–Brunate",
          de: "Auffahrt mit der historischen Standseilbahn",
          ru: "Подъем на историческом фуникулере Комо–Брунате"
        },
        desc: {
          it: "Inaugurata nel 1894: ascesa mozzafiato su binario singolo con pendenza fino al 55%. Si sale a 720m in soli 7 minuti con vista aerea sul primo bacino.",
          en: "Inaugurated in 1894: soar 500 vertical meters up a 55% gradient in 7 minutes into the 'Balcony of the Alps'.",
          fr: "Inauguré en 1894 : ascension vertigineuse à 55% de pente en 7 minutes jusqu'au balcon des Alpes.",
          es: "Inaugurado en 1894: ascenso vertiginoso al 55% de desnivel en 7 minutos con vistas panorámicas.",
          de: "Seit 1894 in Betrieb: Atemberaubende 7-minütige Steilfahrt auf 720 Meter Höhe.",
          ru: "Открыт в 1894 году: захватывающий подъем на высоту 720 м с уклоном до 55% всего за 7 минут в «Балкон Альп»."
        },
        itemId: "nat-1"
      },
      {
        time: "10:30",
        badge: { it: "Faro 860m", en: "Lighthouse 860m", fr: "Phare 860m", es: "Faro 860m", de: "Leuchtturm 860m", ru: "Маяк 860 м" },
        title: {
          it: "Faro Voltiano di San Maurizio (Brunate)",
          en: "Faro Voltiano (Panoramic Alpine Lighthouse)",
          fr: "Phare Voltiano de San Maurizio",
          es: "Faro Voltiano de San Maurizio",
          de: "Voltiano-Leuchtturm auf dem Monte Tre Croci",
          ru: "Маяк Вольты в Сан-Маурицио (Брунате)"
        },
        desc: {
          it: "Salita alla lanterna del faro ottagonale del 1927 in cima al Monte Tre Croci (860 m). Vista a 360° sull'arco alpino, il massiccio del Monte Rosa e la Svizzera.",
          en: "Climb the spiral staircase of the 1927 octagonal lighthouse atop Monte Tre Croci. Unrivalled 360° panoramas stretching to Switzerland and Monte Rosa.",
          fr: "Ascension au sommet du phare de 1927 à 860m d'altitude avec vue à 360° sur le mont Rose et les Alpes.",
          es: "Subida al faro octogonal de 1927 a 860 m de altitud con vistas de 360° a los Alpes y el Monte Rosa.",
          de: "Besteigung des Leuchtturmturms von 1927 auf 860 m mit 360°-Rundumblick bis zum Monte-Rosa-Massiv.",
          ru: "Подъем на смотровую площадку восьмигранного маяка 1927 года на горе Тре Крочи (860 м). Круговая панорама на Монте-Роза и швейцарские Альпы."
        },
        itemId: "nat-2"
      },
      {
        time: "11:45",
        badge: { it: "Trekking Panoramico", en: "Alpine Ridge Trek", fr: "Randonnée Crête", es: "Trekking de Cresta", de: "Höhenwanderung", ru: "Горный треккинг" },
        title: {
          it: "Sentiero delle Baite verso Monte Boletto",
          en: "Sentiero delle Baite Trail to Monte Boletto",
          fr: "Sentiero delle Baite vers Monte Boletto",
          es: "Ruta de las Cabañas al Monte Boletto",
          de: "Kammweg Sentiero delle Baite zum Monte Boletto",
          ru: "Тропа Сентьеро-делле-Байте на гору Болетто"
        },
        desc: {
          it: "Camminata rigenerante tra boschi di faggio e pascoli d'alta quota fino a 1.236m. Belvedere aperto sui due rami del lago e la pianura lombarda.",
          en: "Invigorating ridge hike through beech groves up to 1,236m. Incredible double vantage point over both branches of Lake Como.",
          fr: "Randonnée vivifiante en crête jusqu'à 1236m avec vue plongeante sur les deux bras du lac.",
          es: "Senderismo entre hayedos y prados de altura hasta 1.236m con vistas a ambos brazos del lago.",
          de: "Erfrischende Kammwanderung auf 1.236m Höhe mit Blick auf beide Seearme.",
          ru: "Освежающий треккинг по хребту среди буковых рощ к вершине Монте-Болетто (1236 м) с обзором обоих рукавов озера Комо."
        },
        itemId: "nat-4"
      },
      {
        time: "14:15",
        badge: { it: "Cascata & Borgo", en: "Waterfall & Bridge", fr: "Cascade & Pont", es: "Cascada y Puente", de: "Wasserfall & Brücke", ru: "Водопад и мост" },
        title: {
          it: "Orrido di Nesso & Ponte della Civera",
          en: "Orrido di Nesso Gorge & Roman Bridge",
          fr: "Gorge de Nesso & Pont Médiéval",
          es: "Garganta de Nesso y Puente de la Civera",
          de: "Schlucht Orrido di Nesso & Civera-Brücke",
          ru: "Ущелье Нессо и романский мост Чивера"
        },
        desc: {
          it: "Discesa in funicolare a Como e battello per Nesso: salto d'acqua di 20 metri che precipita tra pareti rocciose scavate dal torrente, scavalcato dal ponte romano.",
          en: "Take the funicular down and board the ferry to Nesso: a thunderous 20m twin waterfall carving through cliffs, framed by an ancient Romanesque stone arch bridge.",
          fr: "Descente en funiculaire et bateau pour Nesso : cascade rugissante de 20m franchie par un pont en pierre médiéval.",
          es: "Descenso y barco a Nesso: cascada de 20 metros entre rocas bajo el arco románico del puente de la Civera.",
          de: "Talfahrt und Schiff nach Nesso: 20-Meter-Wasserfall unter der uralten romanischen Steinbrücke.",
          ru: "Спуск на фуникулере и катер в Нессо: 20-метровый водопад в узком скальном каньоне под арочным романским каменным мостом."
        },
        itemId: "nat-5"
      },
      {
        time: "16:30",
        badge: { it: "Canyon Profondo", en: "Ancient Canyon", fr: "Canyon Millénaire", es: "Cañón Profundo", de: "Urzeit-Schlucht", ru: "Древний каньон" },
        title: {
          it: "Orrido di Bellano (Passerelle Sospese)",
          en: "Orrido di Bellano (Suspended Gorge Walkways)",
          fr: "Orrido di Bellano (Passerelles Suspendues)",
          es: "Orrido di Bellano (Pasarelas Suspendidas)",
          de: "Orrido di Bellano (Hängestege in der Felsklamm)",
          ru: "Каньон Орридо ди Беллано (подвесные мостки)"
        },
        desc: {
          it: "Navigazione verso Bellano: canyon naturale di 15 milioni di anni solcato dal fiume Pioverna, visitabile su passerelle fissate alle pareti a strapiombo.",
          en: "Ferry north to Bellano: 15-million-year-old roaring canyon explored via footbridges anchored into dark vertical canyon walls above swirling pools.",
          fr: "Navigation vers Bellano : canyon naturel vieux de 15 millions d'années arpenté sur des passerelles suspendues au-dessus du torrent.",
          es: "Barco a Bellano: cañón de 15 millones de años recorrido por pasarelas suspendidas en las paredes verticales.",
          de: "Fahrt nach Bellano: 15 Millionen Jahre alte Felsenschlucht mit gesicherten Holzstegen über tosenden Wasserfällen.",
          ru: "Катер в Беллано: грандиозный каньон возрастом 15 млн лет с подвесными мостками над ревущей рекой Пиоверна в каменной теснине."
        },
        itemId: "nat-3"
      },
      {
        time: "18:45",
        badge: { it: "Rientro a Como", en: "Sunset Return", fr: "Retour Crépuscule", es: "Regreso Atardecer", de: "Rückkehr See", ru: "Возвращение" },
        title: {
          it: "Rientro in Battello al Tramonto & Stazione Como S.G.",
          en: "Sunset Cruise & Return to Como San Giovanni",
          fr: "Croisière au coucher du soleil & retour gare",
          es: "Paseo al atardecer y regreso a la estación",
          de: "Abendliche Rückfahrt zum Bahnhof Como S.G.",
          ru: "Круиз на закате и поезд от Como San Giovanni"
        },
        desc: {
          it: "Rientro serale in battello a Como ammirando le cime alpine infuocate dal tramonto. Treno di ritorno per Monza FS.",
          en: "Golden hour boat cruise back to Como harbor, quick walk up to Como San Giovanni platform for the train to Monza FS.",
          fr: "Bateau retour dans la lumière dorée du soir et train pour Monza.",
          es: "Crucero de vuelta al atardecer y tren de regreso a Monza FS.",
          de: "Schifffahrt in den Sonnenuntergang und bequeme Zugfahrt nach Monza.",
          ru: "Возвращение на катере в золотых лучах заката к вокзалу Como San Giovanni и вечерний поезд в Монцу."
        },
        itemId: "hub-stazione"
      }
    ]
  },

  sportivo: {
    googleMapsUrl: "https://www.google.com/maps/dir/Stazione+Como+San+Giovanni,+Como/Stadio+Comunale+Giuseppe+Sinigaglia,+Como/Aero+Club+Como/Canottieri+Lario+Como/Sentiero+del+Viandante,+Varenna/Stazione+Como+San+Giovanni,+Como",
    steps: [
      {
        time: "09:00",
        badge: { it: "Partenza", en: "Start", fr: "Départ", es: "Salida", de: "Start", ru: "Старт" },
        title: {
          it: "Arrivo a Stazione Como San Giovanni",
          en: "Arrival at Como San Giovanni Station",
          fr: "Arrivée à Como San Giovanni",
          es: "Llegada a Como San Giovanni",
          de: "Ankunft am Bahnhof Como San Giovanni",
          ru: "Прибытие на вокзал Como San Giovanni"
        },
        desc: {
          it: "Discesa in soli 5 minuti a piedi verso il distretto sportivo del lungolago ovest.",
          en: "Step off the train from Monza; walk 5 min down to Como's historic waterfront sporting district.",
          fr: "Marche de 5 minutes vers le quartier nautique et sportif.",
          es: "Bajada de 5 minutos a pie al distrito deportivo frente al lago.",
          de: "Kurzer 5-Minuten-Spaziergang zum Sportviertel am Seeufer.",
          ru: "Короткий 5-минутный спуск пешком к спортивному кварталу у озера."
        },
        itemId: "hub-stazione"
      },
      {
        time: "09:20",
        badge: { it: "Serie A a Lago", en: "Lakeside Stadium", fr: "Stade sur l'Eau", es: "Estadio al Lago", de: "Seestadion", ru: "Стадион Серии А" },
        title: {
          it: "Stadio Comunale Giuseppe Sinigaglia",
          en: "Giuseppe Sinigaglia Waterfront Stadium",
          fr: "Stade Giuseppe Sinigaglia sur l'Eau",
          es: "Estadio Giuseppe Sinigaglia frente al Lago",
          de: "Giuseppe-Sinigaglia-Stadion am Seeufer",
          ru: "Стадион Джузеппе Синигалья у кромки воды"
        },
        desc: {
          it: "Inaugurato nel 1927 in riva all'acqua: uno degli stadi di calcio più panoramici e suggestivi d'Europa, casa del Como 1907 in Serie A.",
          en: "Opened in 1927 right on the water's edge: one of Europe's most scenic football arenas, home of Como 1907 in Serie A.",
          fr: "Inauguré en 1927 au bord de l'eau : un stade de Serie A unique au monde surplombant le lac.",
          es: "Inaugurado en 1927 junto al agua: uno de los estadios más pintorescos de Europa, sede del Como 1907.",
          de: "1927 direkt am Ufer erbaut: Eines der spektakulärsten Fußballstadien Europas.",
          ru: "Легендарный стадион 1927 года прямо у кромки воды: домашняя арена клуба Como 1907 в Серии А с видом на Альпы с трибун."
        },
        itemId: "spo-1"
      },
      {
        time: "10:15",
        badge: { it: "Idrovolanti 1930", en: "Seaplanes 1930", fr: "Hydravions 1930", es: "Hidroaviones 1930", de: "Wasserflugzeuge", ru: "Гидросамолеты 1930 г." },
        title: {
          it: "Aero Club Como (Idroscalo Internazionale)",
          en: "Aero Club Como (Historic Seaplane Base)",
          fr: "Aero Club Como (Base d'Hydravions)",
          es: "Aero Club Como (Base de Hidroaviones)",
          de: "Aero Club Como (Wasserflughafen seit 1930)",
          ru: "Аэроклуб Комо (старейший гидроаэродром)"
        },
        desc: {
          it: "La più antica scuola di volo idrovolanti e organizzazione di volo sull'acqua al mondo: hangar storici, decolli e ammaraggi scenografici nel primo bacino.",
          en: "Founded in 1930, the oldest operating seaplane flight school in the world: vintage hangars and floatplanes skimming the lake surface.",
          fr: "La plus ancienne école d'hydravions au monde : hangars d'époque et décollages spectaculaires sur le lac.",
          es: "La escuela de hidroaviones más antigua del mundo: hangares históricos y despegues sobre el agua.",
          de: "Die älteste Wasserflugschule der Welt: Historische Hangars und faszinierende Starts auf dem See.",
          ru: "Основан в 1930 году — старейшая в мире действующая школа пилотов гидроавиации с историческими ангарами и взлетами с водной глади."
        },
        itemId: "spo-2"
      },
      {
        time: "11:30",
        badge: { it: "Canottaggio Olimpico", en: "Olympic Rowing", fr: "Aviron Olympique", es: "Remo Olímpico", de: "Olympisches Rudern", ru: "Олимпийская гребля" },
        title: {
          it: "Canottieri Lario 'G. Sinigaglia' 1891",
          en: "Canottieri Lario 1891 Olympic Rowing Club",
          fr: "Club Nautique Canottieri Lario 1891",
          es: "Club de Remo Canottieri Lario 1891",
          de: "Ruderclub Canottieri Lario 1891",
          ru: "Гребной клуб Canottieri Lario 1891"
        },
        desc: {
          it: "La culla del canottaggio lariano che ha sfornato campioni olimpici e mondiali: pontili storici, barche a remi in mogano e tradizione marinara comasca.",
          en: "Historic Olympic rowing institution founded in 1891: classic mahogany racing sculls, trophy rooms, and regattas on the calm morning water.",
          fr: "Institution d'aviron olympique fondée en 1891 : yoles de course en acajou et tradition nautique séculaire.",
          es: "Cuna del remo olímpico desde 1891: yolas de caoba y campeones mundiales.",
          de: "Traditionsreicher Ruderclub von 1891: Mahagoni-Rennboote und Wiege von Olympiasiegern.",
          ru: "Основан в 1891 году: легендарный клуб академической гребли, воспитавший чемпионов мира и Олимпийских игр, деревянные гоночные лодки из красного дерева."
        },
        itemId: "spo-3"
      },
      {
        time: "13:00",
        badge: { it: "Aliscafo per Varenna", en: "Ferry to Varenna", fr: "Ferry vers Varenna", es: "Barco a Varenna", de: "Schiff nach Varenna", ru: "Катер в Варенну" },
        title: {
          it: "Navigazione verso Varenna per il Trekking",
          en: "Ferry Transfer to Varenna for Coastal Trek",
          fr: "Transfert en bateau à Varenna pour la randonnée",
          es: "Barco a Varenna para el senderismo",
          de: "Überfahrt nach Varenna zur Küstenwanderung",
          ru: "Переход на катере в Варенну для треккинга"
        },
        desc: {
          it: "Imbarco al pontile di Como sull'aliscafo per Varenna. Pranzo leggero a bordo prima di affrontare la celebre camminata costiera.",
          en: "Board the fast hydrofoil to picturesque Varenna. Enjoy panoramic lake breezes before beginning the cliffside trail.",
          fr: "Traversée rapide en bateau vers Varenna pour rejoindre le sentier des falaises.",
          es: "Travesía en barco rápido a Varenna para iniciar la ruta costera.",
          de: "Schnellboot nach Varenna zur legendären Felswanderung.",
          ru: "Скоростной катер в Варенну с видом на горные берега перед выходом на древнюю римскую тропу."
        },
        itemId: "hub-battello"
      },
      {
        time: "14:30",
        badge: { it: "Antica Via Romana", en: "Ancient Roman Trail", fr: "Voie Romaine", es: "Calzada Romana", de: "Römerpfad", ru: "Римская тропа" },
        title: {
          it: "Sentiero del Viandante (Tratta Varenna → Bellano)",
          en: "Sentiero del Viandante Coastal Trail",
          fr: "Sentiero del Viandante (Sentier Côtier)",
          es: "Sentiero del Viandante (Camino Costero)",
          de: "Sentiero del Viandante (Panoramaweg über den Klippen)",
          ru: "Тропа путешественника (Sentiero del Viandante)"
        },
        desc: {
          it: "Antica mulattiera romana scavata sulle scogliere della costa orientale: 8 km tra terrazzamenti di ulivi, muretti a secco e viste a strapiombo sul lago.",
          en: "Historic Roman coastal trade trail traversing olive terraces, stone walls, and sheer dramatic cliff panoramas between Varenna and Bellano.",
          fr: "Ancienne voie romaine taillée dans la falaise au milieu des oliveraies et des panoramas vertigineux sur le lac.",
          es: "Antigua calzada romana tallada en los acantilados entre olivares y vistas espectaculares sobre el agua.",
          de: "Historischer Römerpfad über den Klippen der Ostküste zwischen Olivenhainen und Steinmauern.",
          ru: "Древняя римская тропа вдоль восточного берега: переход среди вековых оливковых рощ и скал над лазурной гладью озера."
        },
        itemId: "spo-4"
      },
      {
        time: "18:15",
        badge: { it: "Rientro Trenord", en: "Train to Station", fr: "Train Retour", es: "Tren de Vuelta", de: "Rückzug", ru: "Возвращение" },
        title: {
          it: "Rientro a Stazione Como San Giovanni",
          en: "Return to Como San Giovanni & Train to Monza",
          fr: "Retour à Como San Giovanni et train pour Monza",
          es: "Regreso a Como San Giovanni y tren a Monza",
          de: "Rückkehr nach Como San Giovanni & Zug nach Monza",
          ru: "Возвращение на вокзал Como San Giovanni и поезд в Монцу"
        },
        desc: {
          it: "Rientro in battello o ferrovia alla Stazione Como San Giovanni per prendere il treno di ritorno a Monza FS.",
          en: "Return to Como San Giovanni rail station platform to catch the direct evening train to Monza FS.",
          fr: "Retour à la gare Como San Giovanni pour le train direct vers Monza.",
          es: "Llegada a la estación Como San Giovanni para el tren de vuelta a Monza.",
          de: "Rückfahrt zum Bahnhof Como San Giovanni und Anschlusszug nach Monza.",
          ru: "Возвращение на вокзал Como San Giovanni и посадка на вечерний поезд в Монцу."
        },
        itemId: "hub-stazione"
      }
    ]
  },

  shopping: {
    googleMapsUrl: "https://www.google.com/maps/dir/Stazione+Como+San+Giovanni,+Como/Corso+Milano,+Como/Via+Bernardino+Luini,+Como/Piazza+San+Fedele,+Como/Mercato+Coperto+Como/Museo+Didattico+della+Seta+Como/Stazione+Como+San+Giovanni,+Como",
    steps: [
      {
        time: "10:00",
        badge: { it: "Partenza", en: "Start", fr: "Départ", es: "Salida", de: "Start", ru: "Старт" },
        title: {
          it: "Arrivo a Stazione Como San Giovanni",
          en: "Arrival at Como San Giovanni Station",
          fr: "Arrivée à la gare Como San Giovanni",
          es: "Llegada a la estación Como San Giovanni",
          de: "Ankunft am Bahnhof Como San Giovanni",
          ru: "Прибытие на вокзал Como San Giovanni"
        },
        desc: {
          it: "Inizio della passeggiata d'alta manifattura entrando nei vicoli lastricati pedonali del centro storico di Como.",
          en: "Step out into the pedestrian-only cobbled alleys of Como's historic walled center.",
          fr: "Arrivée et entrée à pied dans les ruelles commerçantes piétonnes du centre historique.",
          es: "Llegada e inicio del paseo por las calles peatonales de boutiques y talleres.",
          de: "Start in den gepflasterten Fußgängerzonen der historischen Innenstadt von Como.",
          ru: "Выход в пешеходные мощеные улочки исторического центра Комо."
        },
        itemId: "hub-stazione"
      },
      {
        time: "10:15",
        badge: { it: "Artigianato & Pelletteria", en: "Artisan Leather", fr: "Maroquinerie d'Art", es: "Piel y Diseño", de: "Leder & Kunsthandwerk", ru: "Кожа и ювелирное дело" },
        title: {
          it: "Corso Milano & Via Bernardino Luini",
          en: "Corso Milano & Via Bernardino Luini",
          fr: "Corso Milano & Via Bernardino Luini",
          es: "Corso Milano y Via Bernardino Luini",
          de: "Corso Milano & Via Bernardino Luini",
          ru: "Корсо Милано и Виа Бернардино Луини"
        },
        desc: {
          it: "I vicoli più intimi della Città Murata: boutique di pelletteria artigianale italiana, maestri orafi, calzature su misura e showroom di design lariano.",
          en: "The historic city's most charming artisan lanes: bespoke Italian leather goods, handmade jewelry, and curated independent design showrooms.",
          fr: "Les ruelles artisanales les plus séduisantes : maroquinerie italienne faite main, orfèvrerie et créateurs indépendants.",
          es: "Las calles comerciales más auténticas: marroquinería artesanal italiana, joyeros locales y diseño independiente.",
          de: "Die stimmungsvollsten Handwerksgassen: Italienische Ledermanufakturen, Goldschmiede und Design-Showrooms.",
          ru: "Колоритные ремесленные улочки старого города: ателье итальянской кожи, ювелирные мастерские и дизайнерские шоурумы."
        },
        itemId: "sho-3"
      },
      {
        time: "11:15",
        badge: { it: "Haute Couture", en: "Luxury Fashion", fr: "Haute Mode", es: "Moda de Lujo", de: "Luxusmode", ru: "Высокая мода" },
        title: {
          it: "Via Vittorio Emanuele & Piazza Cavour",
          en: "Via Vittorio Emanuele & Piazza Cavour",
          fr: "Via Vittorio Emanuele & Piazza Cavour",
          es: "Via Vittorio Emanuele y Piazza Cavour",
          de: "Via Vittorio Emanuele & Piazza Cavour",
          ru: "Виа Витторио Эмануэле и Пьяцца Кавур"
        },
        desc: {
          it: "Il quadrilatero della moda comasca: boutique delle più prestigiose case di moda italiane, storiche sartorie e profumerie d'élite.",
          en: "The grand shopping promenade of Como: flagship boutiques of Italian fashion houses, historic tailoring salons, and niche perfume apothecaries.",
          fr: "La grande artère de la mode : boutiques des grandes maisons italiennes et parfumeries de luxe.",
          es: "La principal avenida comercial: grandes firmas de moda italiana, sastrerías y perfumerías exclusivas.",
          de: "Die mondäne Einkaufsmeile: Boutiquen italienischer Top-Modemarken und alteingesessene Maßschneidereien.",
          ru: "Главный променад люксового шопинга: бутики итальянских домов моды, исторические ателье и селективная парфюмерия."
        },
        itemId: "sho-4"
      },
      {
        time: "12:30",
        badge: { it: "Mercato Tipico 1930", en: "Covered Market", fr: "Marché Couvert", es: "Mercado Tradicional", de: "Markthalle 1930", ru: "Крытый рынок 1930 г." },
        title: {
          it: "Mercato Coperto di Como (Gusto & Tipicità)",
          en: "Mercato Coperto di Como (Artisan Food Hall)",
          fr: "Mercato Coperto (Halles Gourmandes de Côme)",
          es: "Mercato Coperto (Mercado Gourmet de Como)",
          de: "Mercato Coperto di Como (Feinkost-Markthalle)",
          ru: "Крытый рынок Mercato Coperto (гастрономия)"
        },
        desc: {
          it: "L'autentico mercato coperto storico degli anni '30: banchi di formaggi d'alpeggio (Bitto e Casera), bresaola della Valtellina, olio dei colli lariani e mieli di montagna.",
          en: "The historic 1930s covered market: artisan counters offering aged Bitto and Casera alpine cheeses, Valtellina bresaola, and Lake Como cold-pressed olive oil.",
          fr: "Les authentiques halles historiques de 1930 : fromages d'alpage d'exception, bresaola de la Valteline et huile d'olive du lac.",
          es: "El auténtico mercado cubierto de los años 30: quesos alpinos Bitto y Casera, bresaola artesanal y aceite del lago.",
          de: "Die traditionsreiche Markthalle der 1930er: Gereifte Alm-Käse (Bitto & Casera), Bresaola und kaltgepresstes Olivenöl.",
          ru: "Исторический крытый рынок 1930-х годов: прилавки с выдержанными альпийскими сырами Битто и Казера, вяленой брезаолой и озерным оливковым маслом."
        },
        itemId: "sho-2"
      },
      {
        time: "15:00",
        badge: { it: "Capitale della Seta", en: "World Silk Capital", fr: "Capitale de la Soie", es: "Capital de la Seda", de: "Seiden-Hauptstadt", ru: "Мировая столица шелка" },
        title: {
          it: "Museo della Seta & Atelier di Tessitura",
          en: "Como Silk Museum & Textile Ateliers",
          fr: "Musée de la Soie & Ateliers de Tissage",
          es: "Museo de la Seda y Talleres Textiles",
          de: "Seidenmuseum & Traditionelle Webereien",
          ru: "Музей шелка и ткацкие ателье Комо"
        },
        desc: {
          it: "Viaggio nella storia dell'eccellenza che veste l'alta moda mondiale da Parigi a Milano: antichi telai jacquard, stampe su seta e boutique per l'acquisto di cravatte e foulard originali.",
          en: "Explore the silk heritage that dresses Parisian and Milanese haute couture (Hermès, Chanel): vintage Jacquard looms, hand-printing tables, and exclusive silk scarves.",
          fr: "Plongée dans l'histoire de la soie qui habille la haute couture mondiale : métiers Jacquard historiques et foulards raffinés.",
          es: "Viaje a la historia de la seda que viste a la alta costura mundial: telares Jacquard antiguos y pañuelos de seda pura.",
          de: "Faszinierende Seidenkultur, die Pariser und Mailänder Modehäuser beliefert: Historische Jacquard-Webstühle und edle Seidenschals.",
          ru: "Погружение в историю комаскского шелка, одевающего дома высокой моды Парижа и Милана: старинные станки Жаккарда, ручная печать и покупка шелковых платков и галстуков."
        },
        itemId: "sho-1"
      },
      {
        time: "18:00",
        badge: { it: "Rientro Trenord", en: "Train to Monza", fr: "Train Retour", es: "Tren a Monza", de: "Rückfahrt", ru: "Поезд на Монцу" },
        title: {
          it: "Rientro a Stazione Como San Giovanni",
          en: "Return to Como San Giovanni Station",
          fr: "Retour à la gare Como San Giovanni",
          es: "Regreso a la estación Como San Giovanni",
          de: "Rückkehr zum Bahnhof Como San Giovanni",
          ru: "Возвращение на вокзал Como San Giovanni"
        },
        desc: {
          it: "Passeggiata pomeridiana con i propri acquisti fino alla Stazione Como San Giovanni per il treno di ritorno a Monza FS.",
          en: "Stroll back with your artisan shopping bags up to Como San Giovanni platform for the direct train to Monza FS.",
          fr: "Retour à la gare avec vos achats pour prendre le train direct pour Monza.",
          es: "Paseo de vuelta con las compras hasta la estación para tomar el tren a Monza.",
          de: "Bequemer Rückweg mit den Einkäufen zum Bahnhof Como San Giovanni für die Heimreise.",
          ru: "Прогулка с покупками к вокзалу Como San Giovanni и посадка на поезд до Монцы."
        },
        itemId: "hub-stazione"
      }
    ]
  },

  slow: {
    googleMapsUrl: "https://www.google.com/maps/dir/Stazione+Como+San+Giovanni,+Como/Passeggiata+Lino+Gelpi,+Como/The+Life+Electric,+Como/Imbarcadero+Como,+Piazza+Cavour,+Como/Giardini+Villa+Geno,+Como/Piazza+Alessandro+Volta,+Como/Stazione+Como+San+Giovanni,+Como",
    steps: [
      {
        time: "10:00",
        badge: { it: "Partenza", en: "Start", fr: "Départ", es: "Salida", de: "Start", ru: "Старт" },
        title: {
          it: "Arrivo a Stazione Como San Giovanni",
          en: "Arrival at Como San Giovanni Station",
          fr: "Arrivée à la gare Como San Giovanni",
          es: "Llegada a la estación Como San Giovanni",
          de: "Ankunft am Bahnhof Como San Giovanni",
          ru: "Прибытие на вокзал Como San Giovanni"
        },
        desc: {
          it: "Discesa senza fretta verso il lago godendosi l'aria fresca del mattino e l'architettura liberty dei viali.",
          en: "A slow, unhurried morning descent towards the sparkling water through leafy Art Nouveau avenues.",
          fr: "Descente paisible vers les rives du lac à travers les avenues bordées d'arbres.",
          es: "Descenso tranquilo hacia el lago disfrutando de la brisa matutina y las avenidas modernistas.",
          de: "Gemächlicher Morgenspaziergang hinunter zum glitzernden See.",
          ru: "Неспешная утренняя прогулка к озеру по тенистым аллеям в стиле либерти."
        },
        itemId: "hub-stazione"
      },
      {
        time: "10:30",
        badge: { it: "Scultura & Acqua", en: "Art on Water", fr: "Art sur l'Eau", es: "Arte en el Agua", de: "Kunst auf dem See", ru: "Скульптура на молу" },
        title: {
          it: "Passeggiata Lino Gelpi & The Life Electric",
          en: "Passeggiata Lino Gelpi & 'The Life Electric'",
          fr: "Promenade Lino Gelpi & The Life Electric",
          es: "Paseo Lino Gelpi y 'The Life Electric'",
          de: "Passeggiata Lino Gelpi & Libeskind-Skulptur",
          ru: "Променад Лино Джельпи и монумент Life Electric"
        },
        desc: {
          it: "Camminata sul molo foraneo che si inoltra nelle acque del primo bacino fino all'opera monumentale di Daniel Libeskind dedicata all'energia di Volta.",
          en: "Walk out along the breakwater dike into the center of Como's bay to Daniel Libeskind's iconic sculpture 'The Life Electric' reflecting the sky.",
          fr: "Promenade sur la jetée s'avançant dans les eaux jusqu'à l'œuvre monumentale de Daniel Libeskind.",
          es: "Paseo por el espigón que se adentra en el lago hasta la escultura vanguardista de Daniel Libeskind.",
          de: "Weg auf die Mole hinaus bis zur spektakulären Daniel-Libeskind-Skulptur 'The Life Electric' mitten im Wasser.",
          ru: "Прогулка по волнорезу далеко вглубь залива к футуристической стальной скульптуре Даниэля Либескинда, отражающей горы и небо."
        },
        itemId: "slo-2"
      },
      {
        time: "11:45",
        badge: { it: "Vapore Storico 1904", en: "Steamship 1904", fr: "Bateau à Vapeur", es: "Barco de Época", de: "Raddampfer 1904", ru: "Пароход 1904 г." },
        title: {
          it: "Battelli Storici a Vapore (Navigazione Laghi)",
          en: "Historic Paddle Steamer Cruise (1904)",
          fr: "Croisière en Bateau à Vapeur Historique",
          es: "Paseo en Barco de Vapor Histórico",
          de: "Fahrt auf dem historischen Raddampfer 'Concordia'",
          ru: "Круиз на историческом колесном пароходе 1904 г."
        },
        desc: {
          it: "Salita sul leggendario piroscafo a ruote 'Concordia' (1904): navigazione lenta e silenziosa ammirando i saloni in stile liberty, il legno lucido e le ville storiche.",
          en: "Board the legendary 1904 paddle steamer 'Concordia': slow, rhythmic sailing past grand aristocratic villas with Liberty-style brass and polished teak salons.",
          fr: "Embarquement sur le bateau à roues à aubes 'Concordia' de 1904 : navigation douce au fil des villas somptueuses.",
          es: "Embarque en el legendario vapor de ruedas 'Concordia' (1904): navegación tranquila frente a los palacios patriarcales.",
          de: "Einschiffung auf den legendären Raddampfer 'Concordia' (1904): Gemütliches Gleiten vorbei an den Prachtvillen mit Salons im Jugendstil.",
          ru: "Посадка на легендарный колесный пароход 'Concordia' (1904 г.): медленный медитативный ход мимо вилл, интерьеры в стиле модерн, полированный тик и медь."
        },
        itemId: "slo-1"
      },
      {
        time: "14:15",
        badge: { it: "Platani & Fontana", en: "Gardens & Jet", fr: "Jardins & Fontaine", es: "Jardines y Fuente", de: "Park & Fontäne", ru: "Парк и фонтан 40м" },
        title: {
          it: "Giardini Pubblici & Passeggiata di Villa Geno",
          en: "Villa Geno Waterfront Gardens & Great Jet",
          fr: "Jardins de Villa Geno & Grande Fontaine",
          es: "Jardines de Villa Geno y Gran Fuente",
          de: "Ufergärten der Villa Geno & Seefontäne",
          ru: "Сады и набережная Виллы Джено (фонтан 40 м)"
        },
        desc: {
          it: "Ombra dei platani monumentali sulla riva orientale fino al getto d'acqua di Villa Geno che svetta per 40 metri dalle acque del lago. Momento perfetto per lettura e relax.",
          en: "Lounge under century-old plane trees on the eastern shore gazing at the dramatic 40-meter-high lake geyser fountain of Villa Geno.",
          fr: "Détente sous les platanes centenaires face au jet d'eau spectaculaire de 40 mètres de Villa Geno.",
          es: "Descanso bajo los plátanos centenarios frente al chorro de agua de 40 metros de altura de Villa Geno.",
          de: "Entspannung unter uralten Platanen mit Blick auf die 40 Meter hohe Wasserfontäne der Villa Geno.",
          ru: "Отдых в тени вековых платанов на восточном берегу с видом на 40-метровый фонтан виллы Джено, бьющий прямо из озерной глади."
        },
        itemId: "slo-4"
      },
      {
        time: "17:30",
        badge: { it: "Dolce Vita", en: "Golden Hour Ritual", fr: "Apéritif Doré", es: "Aperitivo Lariano", de: "Aperitivo-Kultur", ru: "Аперитив на закате" },
        title: {
          it: "Aperitivo al Tramonto in Piazza Alessandro Volta",
          en: "Sunset Aperitivo in Piazza Alessandro Volta",
          fr: "Apéritif au Coucher du Soleil Piazza Volta",
          es: "Aperitivo al Atardecer en Piazza Volta",
          de: "Sunset-Aperitivo auf der Piazza Volta",
          ru: "Аперитив на закате на площади Вольты"
        },
        desc: {
          it: "Il rito sacro dell'aperitivo italiano: cocktail Negroni Sbagliato, bollicine di Franciacorta e finger food gourmet nei tavolini all'aperto della piazza più viva di Como.",
          en: "The cherished Italian evening ritual: classic Negroni Sbagliato, Franciacorta sparkling wine, and complimentary gourmet tapas in vibrant Piazza Volta.",
          fr: "Le rituel sacré de l'apéritif : Negroni Sbagliato et bulles de Franciacorta en terrasse sur la plus belle place de Côme.",
          es: "El sagrado ritual del aperitivo: Negroni Sbagliato, copa de Franciacorta y tapas gourmet al aire libre.",
          de: "Das heilige italienische Abendritual: Negroni Sbagliato, feiner Franciacorta und Gourmet-Häppchen auf der Piazza Volta.",
          ru: "Культовый итальянский вечерний ритуал: Negroni Sbagliato, игристое Франчакорта и изысканные закуски за столиками под открытым небом на площади Вольты."
        },
        itemId: "slo-3"
      },
      {
        time: "19:15",
        badge: { it: "Rientro Trenord", en: "Evening Train", fr: "Train Retour", es: "Tren a Monza", de: "Abendzug", ru: "Поезд на Монцу" },
        title: {
          it: "Rientro serale alla Stazione Como San Giovanni",
          en: "Evening Return to Como San Giovanni & Train to Monza",
          fr: "Retour tranquille à la gare Como San Giovanni",
          es: "Regreso nocturno a la estación Como San Giovanni",
          de: "Gemütlicher Abendweg zum Bahnhof Como San Giovanni",
          ru: "Вечернее возвращение на вокзал Como San Giovanni"
        },
        desc: {
          it: "Breve passeggiata digestiva di 8 minuti da Piazza Volta alla Stazione Como San Giovanni per il treno di ritorno a Monza FS.",
          en: "A gentle 8-minute twilight stroll back to Como San Giovanni rail station platform for your direct train to Monza FS.",
          fr: "Marche tranquille de 8 minutes jusqu'à la gare pour le train direct vers Monza.",
          es: "Paseo de 8 minutos hasta la estación para tomar el tren de regreso a Monza.",
          de: "8-minütiger Spaziergang zum Bahnhof Como San Giovanni für die Rückfahrt nach Monza.",
          ru: "Приятная 8-минутная прогулка от площади Вольты к вокзалу Como San Giovanni и посадка на прямой вечерний поезд в Монцу."
        },
        itemId: "hub-stazione"
      }
    ]
  }
};

