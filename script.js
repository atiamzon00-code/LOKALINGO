/// LokaLingo App JavaScript

// App Data
const appData = {
    // Translation Data
    translations: {
        // English to Kapampangan translations
        englishToKapampangan: {
            "hello": "Kamusta",
            "good morning": "Mayap a abak",
            "good afternoon": "Mayap a ugtu",
            "good evening": "Mayap a bengi",
            "thank you": "Salamat / Dakal a Salamat",
            "you're welcome": "Alang nanu man / Alang Anuman",
            "yes": "Wa",
            "no": "Ali",
            "excuse me": "Makisabi ku / Paumanhin",
            "sorry": "Pasensya na / Pakilub",
            "goodbye": "Pamagsabi",
            "please": "Pakisuyo",
            "how are you?": "Komusta ka?",
            "I'm fine": "Mayap ku",
            "what is your name?": "Nanu ya ing lagyu mu?",
            "my name is": "Ing lagyu ku",
            "where is": "Nokarin ya ing",
            "how much is this?": "Magkanu ini?",
            "too expensive": "Masyadu yang makamal",
            "can you help me?": "Pwedi mu ku bang sopan?",
            "I don't understand": "Eku antindyan",
            "I'm lost": "Mewala ku",
            "bathroom": "Paliguan",
            "water": "Danum",
            "food": "Pamangan",
            "restaurant": "Kainan",
            "hospital": "Ospital",
            "police": "Polis",
            "taxi": "Taxi",
            "bus": "Bus",
            "train": "Tren",
            "airport": "Paliparan",
        
            // Added phrases
            "i'm here": "Atchu ku keni",
            "where is the store?": "Nokarin ya itang tindahan?",
            "what happens to you?": "Nanung milyari keka?",
            "it's sweet": "Mayumu ya",
            "a little": "Ditak",
            "many": "Dakal i",
            "soup": "Sabo",
            "ugly": "Matsura",
            "greedy": "Matako",
            "see you again": "Mikit tamu pasibayu",
            "i'm from another country": "Ibat ku king aliwang bansa",
            "i love this food": "Buri ku ing pamangan",
            "this place is beautiful": "Masanting ya ing lugar",
            "where can i eat this?": "Nokarin ku apangan ini?",
            "do you speak english?": "Magsalita ko pung ingles?",
            "where can i exchange money?": "Nokarin ku pweding mamalit kwarta?",
            "where is the comfort room?": "Nokarin ya ing banyu?",
            "where is the bus terminal?": "Nokarin ya ing bus terminal?",
            "where can i get a taxi?": "Nokarin ku makasake taxi?",
            "stop here please": "Mintu ka keni.",
            "how far is it?": "Ganu ya ka laut ini?",
            "i'm full": "Mabsi naku.",
            "i have a reservation": "Atin kung booking.",
            "what's the best place to visit here in angeles city?": "Nanu ing masanting a pasyalan kening Angeles City?",
            "i like this one": "Buri ke ini",
            "where is the fitting room?": "Nokarin ya ing fitting room?",
            "this is too small": "Masyadu yang malati ini",
            "this is too big": "Masyadu yang madagul ini",
            "where can i buy this?": "Nokarin makasaling makanini?",
            "you're so kind": "Kabait mo naman.",
            "how can i get there?": "Makananung makapunta keni?",
            "thank you so much": "Dakal a salamat",
            "welcome": "Malaus ko pu",
            "can you give me a discount?": "Malyari mu kung dinan makasadyang presyu?",
        
            // New transport and travel questions
            "where is the route of this jeep?": "Nokarin ya ing ruta ning jeep ayni?",
            "what vehicle/jeep should i take to get there?": "Nanung jeep ing saken ku para mipunta ku keta?",
            "how far is it from here?": "Makananu ya kalawut nung mibatan ku keni?",
            "where is the nearest bus station?": "Nokarin ya ing pinakamalapit a bus station?",
            "how can i get there?": "Makananung makapunta keni?",
        
            // New shopping and menu requests
            "can i try this on?": "Pwedi king isukat ini?",
            "can i have the menu please?": "Nokarin ya pu ing menu yu?",
            "do you have coins?": "Atin ka bang coins?",
            "i don't have coins": "Ala kung coins.",
            "i don't have coins.": "Ala kung coins.",
            "do you accept cash?": "Tatanggap kayung cash?",
            "do you sell this?": "Titinda yu ba ini?",
            "do you accept card?": "Tatanggap kayu card?",
            "where is the cashier?": "Nukarin ya ing cashier?",
            "can you wrap it?": "Malyari bang pabalut?",
            "that's cheap!": "Mura yang masyadu!",
            "i'll take this.": "Kunan ke ini.",
            "i want/like this one": "Buri ke ini.",
            "can i see the menu?": "Malyari keng akit ing menu?",
            "what is your specialty?": "Nanu ya ing espesyal yu?",
            "i would like to order.": "Malyari kung umorder.",
            "the food is delicious!": "Manyaman ya ing pamangan!",
            "water, please.": "Danum pu.",
            "bill, please.": "Bill pu.",
            "is it okay to take a picture here?": "Malyari bang magpicture keni?",
            "i would like to book this": "I book ku ne ini.",
            "i’m fine, thank you.": "Okay ku mu, salamat",
            "what’s your name?": "Nang lagyu mu?",
            "what's your name?": "Nang lagyu mu?",
            "is this your first time here?": "Ini ba ing first time mu keni?",
            "it’s a beautiful place!": "Masanting ya ing lugar a ini!",
            "how long are you staying?": "Hanggang kapilan ka magstay keni?",
            "where is the check-in counter?": "Nokarin ya ing check in counter?",
            "where is the luggage claim?": "Nokarin ya ing luggage claim?",
            "my baggage is missing.": "Mawawala ya ing baggage ku.",
            "is there free wi-fi?": "Atin bang free WiFi?",
            "where am i?": "Nokarin ku?",
            "what’s the best restaurant around?": "Nanung pinaka the best a pipanganan keni?",
            "where can i buy a sim card?": "Nokarin ku malayaring makasaling Sim Card?",
            "can you speak slowly, please?": "Malyari bang bagalan mu ing pamagsalita mu?",
            "can you write it down?": "Malyari me bang isulat?",
            "can you teach me kapampangan words?": "Malyari mu ko bang turwanan kapampangan words?",
            "that’s okay.": "Okay mu ita.",
            "no problem.": "Alang problema.",
            "where is the bathroom?": "Nokarin ya ing banyu yu?",
            "i'm lost, can you help me?": "Melili ku, maluari mu kung sopan?",
            "house": "Bale",
            "road": "Dalan",
            "school": "Eskwela",
            "market": "Palengki",
            "church": "Pisamban",
            "chair": "Luklukan",
            "table": "Mesa / Dulang",
            "window": "Durungawan / Awang",
            "door": "Pasbul",

            // Household items
            "bed": "Pagkeran",
            "pillow": "Ulunan",
            "blanket": "Ulas",
            "wall": "Pader / Dingding",
            "floor": "Salig",
            "roof": "Atup",
            "ceiling": "Kisami",
            "kitchen": "Kusina",
            "bathroom": "Banyo / Paliguan",
            "toilet": "Palikuran",
            "light": "Silab / Lawen",
            "lamp": "Sulu",
            "smoke": "Asuk",
            "ash": "Abo",
            "shadow": "Aninu",
            "mirror": "Salamin",

            "friend": "Kaluguran",
            "family": "Pamilya",

            // People and relations
            "grandfather": "Apu a lalaki",
            "grandmother": "Apu a babai",
            "uncle": "Titu",
            "aunt": "Tita",
            "cousin (same age)": "Kapisan",
            "child/kid": "Anak / Anak a bisan",
            "baby": "Bingut",
            "best friend": "Masikal a kaluguran",
            "enemy": "Kapate",
            "visitor": "Bisita",
            "stranger": "Alang kakilala",
            "happy": "Masaya / Metuwa",
            "angry": "Mimwa",
            "scared": "Tatakut",
            "surprised": "Megulat",
            "shy": "Mailap",
            "nervous": "Kakarug",
            "excited": "Manyigla",
            "jealous": "Magselos",
            "worried": "Migaganaka",
            "calm": "Kalmadu",
            "bored": "Marok keng oras",
            "proud": "Mayabang / Maragul king sarili",
            "in love": "Malsinta / Lugud",
            "mother": "Ima",
            "brother": "Koya",
            "sister": "Atchi",
            "people": "Tawu",
            "man": "Lalake",
            "husband": "Asawa a Lalake",
            "wife": "Asawa a Babai",
            "teacher": "Mestra",
            "student": "Memyalis / Estudyanti",
            "farmer": "Mangapos",
            "fisherman": "Mangasán",
            "vendor": "Magtinda",
            "carpenter": "Magkarpinteru",
            "driver": "Magmanehu",

            // Added vocabulary
            "clothes": "Malan",
            "shirt": "Kamiseta",
            "pants": "Pantalon",
            "shoes": "Sapatus",
            "slippers": "Chinelas",
            "hat": "Sumbreru",
            "bag": "Bag",
            "umbrella": "Payung",
            "watch": "Orasan",
            "ring": "Singsing",
            "earring": "Hikaw",
            "necklace": "Kwintas",
            "bracelet": "Pulseras",
            "money": "Kwartá",
            "phone": "Selpun",
            "work": "Obra",
            "love": "Kaluguran",
            "life": "Bié / Bye",
            "excuse me": "Makisabi ku / Paumanhin",
            "take care": "Mimingat ka",
            "play": "Mamyalung / Maglaro ka",
            "i": "Aku",
            "me": "Aku",

            // Demonstratives, possessives, and pronouns
            "this": "Ini",
            "that": "Yan",
            "there": "Ken",
            "here": "Keni",
            "mine": "Kakung",
            "yours": "Kekang",
            "his/hers": "Kayang",
            "ours": "Kekatamu",
            "theirs": "Karela",
            "you": "Ika",
            "he": "Ya",
            "she": "Ya",
            "we": "Ikami",
            "they": "Ila",

            // Questions and temporal markers
            "because": "Uling",
            "if": "Nung",
            "when": "Kapilan",
            "where": "Nukarin / Nokarin",
            "what": "Nanu",
            "who": "Ninu",
            "how": "Makananu",
            "why": "Ot",
            "maybe": "Siguru",
            "always": "Alang Patna",
            "never": "Kapilan Man",
            "sometimes": "Misan",
            "now": "Ngeni",
            "already": "Na",
            "not yet": "Ali Pa",
 
             // Food and kitchen staples
             "salt": "Asin",
             "sugar": "Asukal",
             "pepper": "Paminta",
             "garlic": "Bawang",
             "onion": "Sibuyas",
             "corn": "Mais",
             "bread": "Tinape",
             "rice (uncooked)": "Bigas",
             "vegetables": "Gule",
             "fruit": "Prutas / Bunga",
 
             // States and adjectives
            "to vomit": "Manyuka",
            "tired": "Mapagal",
            "bitter": "Mapait",
            "hot": "Mapali",
            "spicy": "Maparas",
            "smooth": "Mapinu / Malinatnat",
            "white": "Maputi",
            "big": "Maragul",
            "large": "Maragul",
            "early": "Maranun",
            "hungry": "Maranup",
            "far": "Marayu",
            "cold": "Marimla",
            "dirty": "Marinat",
            "bad": "Marok",
            "sick": "Masakit",
            "orderly": "Masalese",
            "bright": "Masala",
            "sour": "Maslam",
            "eye": "Mata",
            "fat": "Mataba",
            "coward": "Mataloti",
            "slippery": "Mataluras",
            "lazy": "Matamad",
            "brave": "Matapang",
            "sharp": "Mataram",
            "confused": "Mataranta",
            "tall": "Matas",
            "to die": "Mate",
            "monkey": "Matsin",
            "to sleep": "Matudtud",
            "black": "Maitim",
            "old": "Matwa",
            "light (not heavy)": "Mayan",
            "nice": "Mayap",
            "weak": "Mayna",
            "sweet": "Mayumu",
            "manila": "Menila",
            "to be caught": "Merakap",
            "died": "Mete",
            "one": "Metung",
            "to awaken": "Migising",
            "to drink": "Minum",
            "to think": "Misip",

            // Actions and verbs
            "to see": "Lawen",
            "to hear": "Damdaman",
            "to touch": "Talan",
            "to smell": "Simut",
            "to taste": "Tikman",
            "to hold": "Dakapan",
            "to break": "Laku",
            "to fix": "Isalese",
            "to clean": "Linisan",
            "to build": "Manalakad",
            "to destroy": "Lakwan",
            "to help": "Saup / Magsaup",
            "to wait": "Manaya",
            "to call": "Tumuking",
            "to answer": "Sumagot",
            "to open": "Buklat",
            "to close": "Takpan",
            "to show": "Ipakit",
            "to hide": "Sinup",
            "to begin": "Mamibandi",
            "to end": "Kapupusan",
            "to use": "Gamitan",
            "to find": "Mayakit",
            "to lose": "Makawala",
            "to win": "Manalo",
            "to draw": "Maglarawan",
            "to dance": "Terak / Tumerak",
            "to laugh": "Tumula",
            "to cry": "Mangaga",
            "to shout": "Gulisak",
            "to run": "Mamulayi",
            "to swim": "Languy",
            "to hug": "Yakap",
            "to smile": "Ngisi",
            "to lie down": "Magkera",
            "to dream": "Maninap",
            "to serve": "Suyuan",

            "sleepy": "Mitutundu",
            "to climb": "Mukyat",
            "stupid": "Mulala",
            "to kiss": "Muma",
            "crazy": "Murit",
            "what": "Nanu",
            "yesterday": "Napun",
            "cooked rice": "Nasi",
            "now": "Ngeni",
            "coconut": "Ngungut",
            "who": "Ninu",
            "where": "Nukarin",
            "if": "Nung",
            "why": "Ot",

            "west": "Albugan",
            "day": "Aldo",

            // Time expressions
            "morning": "Abak",
            "noon": "Katanghalian",
            "afternoon": "Gatpanapun",
            "evening": "Bengi",
            "midnight": "Kapitangan ning bengi",
            "today": "Ngeni",
            "yesterday": "Napun",
            "tomorrow": "Bukas",
            "week": "Dumingu",
            "hour": "Oras",
            "minute": "Minutu",
            "second": "Segundo",
            "time": "Oras",

            // Places and geography
            "store": "Tindahan",
            "park": "Parke",
            "plaza": "Plasa",
            "city": "Lakanbalen",
            "town": "Balen",
            "country": "Bangsa",
            "island": "Isla / Pulu",
            "province": "Probinsya",
            "bridge": "Tete",
            "road": "Dalan",
            "port/harbor": "Pantalan",
            "farm": "Tamnanan",
            "field": "Bukiran",
            "forest": "Kakewan",
            "mountain": "Bunduk",
            "valley": "Lambak / Gilid-bunduk",
            "river": "Ilug",
            "sea": "Dayat",
            "lake": "Danum-bale / Laug",
            "cave": "Kweba",
            "market stall": "Bale palengki",

            // Colors
            "light blue": "Asul a Banwa",
            "dark blue": "Sulu Asul",
            "light green": "Berdeng Marimla",
            "dark green": "Sulu Berde",
            "beige": "Kaputlan",
            "maroon": "Partina",
            "violet": "Vialte",
            "turquoise": "Turkesa",

            // More colors
            "gold": "Gintu",
            "silver": "Pilak",
            "purple": "Lila",
            "orange": "Kahel",
            "pink": "Rosas",

            "dust": "Alikabuk",
            "firefly": "Alipatpat",
            "and": "Ampo",
            "wind": "Angin",
            "air": "Angin",

            // Weather and natural phenomena
            "sun": "Aldo",
            "thunder": "Duldul",
            "lightning": "Kildap",
            "storm": "Unos",

            "fire": "Api",
            "nose": "Arung",

            // Body parts
            "shoulder": "Pagó",
            "elbow": "Siku",
            "chest": "Salu",
            "finger": "Taliri",
            "knee": "Tud / Intud",
            "nape": "Tundun",
            "thigh": "Pwad",

            "fish": "Asán",
            "mouth": "Asbuk",
            "east": "Aslagan",
            "vinegar": "Aslam",
            "dog": "Asu",
            "remember": "Atandanan",
            "liver": "Ate",
            "waist": "Baywang",
            "thin": "Maimpis",
            "earthquake": "Ayun",
            "bird": "Ayup",
            "girl": "Babai",
            "woman": "Babai",
            "pig": "Babi",
            "storm": "Bagyu",
            "typhoon": "Bagyu",
            "ear": "Balugbug",
            "heaven": "Banwa",
            "sky": "Banwa",
            "neck": "Batal",
            "stone": "Batu",
            "rock": "Batu",
            "star": "Talak",
            "night": "Bengi",
            "evening": "Bengi",
            "cloud": "Biga / Lulam",
            "put": "Bili",
            "place": "Bili",
            "want": "Bisa",
            "foot": "Bitis",
            "leg": "Pata",
            "month": "Bulan",
            "butt": "Buldit",
            "ass": "Buldit",
            "flood": "Bulus",
            "mountain": "Bunduk",
            "skull": "Bungu",
            "head": "Buntuk",
            "mud": "Burak",
            "gecko": "Butaki",
            "penis": "Butu",
            "seed": "Butul",
            "hair": "Bwak",
            "bee": "Bwang",

            // Animals
            "butterfly": "Mariposa",
            "cow": "Baka",
            "goat": "Kambing",
            "horse": "Kabayu",
            "duck": "Itik / Bibi",
            "snake": "Bulati / Sawa",
            "frog": "Tugak",
            "spider": "Babagwa",
            "rat": "Dagis",
            "bat": "Paniki",
            "sheep": "Karnero",
            "crab": "Alimangu",

            "many": "Dakal",
            "bring": "Dalan",
            "carabao": "Damulag",
            "however": "Dapot",
            "but": "Dapot",
            "crocodile": "Dapu",
            "blood": "Daya",
            "give": "Dinan",
            "some": "Ditak",
            "few": "Ditak",
            "thunder": "Duldul",
            "abdomen": "Dungus",
            "egg": "Ebun",
            "expert": "Ekspertu",
            "staircase": "Eran",
            "steps": "Eran",
            "soil": "Gabun",

            // Plants and nature
            "tree": "Puno",
            "leaf": "Bulung",
            "flower": "Sampaga",
            "fruit": "Prutas",
            "grass": "Dikut",
            "root": "Uyat",
            "seedling": "Punla / Tututlu",
            "garden": "Tanamanan",
            "sand": "Gabun",
            "shell": "Kabatiti",

            "itch": "Galus",
            "hand": "Gamat",
            "yell": "Gulasyo",
            "back": "Gulut",
            "crawl": "Gumulung",
            "carry": "Ibwat",
            "to give": "Ibye",
            "you": "Ika",
            "them": "Ila",
            "river": "Ilug",
            "urinate": "Imi",
            "pee": "Imi",
            "the": "Ing",
            "this": "Ini",
            "tooth": "Ipan",
            "cockroach": "Ipas",
            "eyelash": "Irap",
            "groin": "Ita",
            "meaning": "Kabaldugan",
            "while": "Kabang",
            "immediately": "Kabud",
            "pull": "Kabiran",
            "forest": "Kakewan",
            "jungle": "Kakewan",
            "stove": "Kalang",
            "mine": "Kakung",
            "my": "Kakung",
            "alike": "Kalupa",
            "to me": "Kanaku",
            "forehead": "Kanwan",
            "sibling": "Kapatad",
            "when": "Kapilan",
            "to them": "Karela",
            "their": "Karelang",
            "swim": "Kawe",
            "to her": "Kaya",
            "to him": "Kaya",
            "his": "Kayang",
            "hers": "Kayang",
            "on top of": "King babo",
            "inside": "King kilub",
            "to you": "Keka",
            "there": "Ken",
            "in front": "King arap",
            "here": "Keni",
            "lightning": "Kildap",
            "eyebrow": "Kile",
            "armpit": "Kilikili",
            "at the back": "King gulut",
            "fingernail": "Kuku",
            "toenail": "Kuku",
            "to hug": "Kumaul",
            "to cry": "Kumyak",
            "clay pot": "Kuran",
            "skin complexion": "Kutis",
            "to get": "Kwanan",
            "bamboo": "Kwayan",
            "remove": "Lako",
            "housefly": "Lango",
            "fruit fly": "Lango dap",

            // Misc nouns and actions
            "sweep": "Palisan",
            "firewood": "Panangab",
            "ants": "Panas",
            "eldest": "Pangane",
            "even": "Patag / Pante",
            "to kill": "Paten",
            "turtle": "Pau",
            "how many": "Pilan",
            "lame (alt)": "Pile",
            "select": "Pilinán",
            "choose": "Pilinán",
            "rainbow": "Pinan-ari",
            "mute": "Pipi",
            "cousin": "Pisan",
            "anus": "Pitaklan",
            "vagina": "Puki",
            "cat": "Pusa",
            "heart": "Pusu",
            "to choke": "Sakalan",
            "beetle": "Salibubang",
            "to catch": "Salwan",
            "to snatch": "Samsaman",
            "to put away": "Sinup",
            "to sip": "Sipsipan",
            "to say": "Sumabi",
            "breast": "Susu",
            "to step": "Takbang",
            "feces": "Takla",
            "lye water": "Tasik",
            "person": "Tau",
            "to stop": "Tuknang",
            "to push": "Tulak",
            "dragonfly": "Tulang",
            "to point at": "Tuldu",
            "rain": "Uran",
            "yes, indeed": "Wapin",
            "to wave at": "Wagwagan",
            "she / he": "Ya",
            "iha": "Yatsa",

            "congee": "Lëlut",
            "porridge": "Lëlut",
            "grasshopper": "Lipaktung",
            "to sit": "Lukluk",
            "to fight": "Lumaban",
            "to walk": "Lumakad",
            "to look": "Lumawe",
            "lame": "Lumpu",
            "jump": "Lundag",
            "enter": "Lungub",
            "face": "Lupa",
            "to spit": "Lura",
            "emerge": "Lwal",
            "go out": "Lwal",
            "shallow": "Mababo",
            "slow": "Mabagal",
            "fragrant": "Mabanglu",
            "heavy": "Mabayat",
            "round": "Mabilug",
            "rotten": "Mabuluk",
            "dark": "Madalumdum",
            "merciful": "Maganaka",
            "kind": "Maganaka",
            "coarse": "Magaspang",
            "rough": "Magaspang",
            "return": "Magbalik",
            "to sing": "Magkanta",
            "to lie down": "Magkera",
            "pretend": "Magkunwari",
            "to lie": "Maglaram",
            "to cook": "Maglutu",
            "to work": "Mag-obra",
            "long": "Makaba",
            "full": "Mabsi",
            "like that": "Makanyan",
            "thus": "Makanyan",
            "how": "Makananu",
            "deaf": "Maklak",
            "short": "Makuyad",
            "imitate": "Makyapus",
            "mimic": "Makyapus",
            "pretty": "Malagu",
            "strong": "Masikan",
            "deep": "Malalam",
            "dry": "Malangi",
            "near": "Malapit",
            "salty": "Malat",
            "small": "Malati",
            "ticklish": "Malingapngap",
            "clean": "Malinis",
            "to love": "Malsinta / Lugud",
            "to drown": "Malumud",
            "sad": "Malungkut",
            "to hurry": "Mamaliksi",
            "to do laundry": "Mamipi",
            "to joke": "Mamiru",
            "to play": "Mamyalung",
            "to fall": "Manabu",
            "to steal": "Manako",
            "to borrow": "Manandam",
            "to sneeze": "Manatsing",
            "to bathe": "Mandilu",
            "shower": "Mandilu",
            "to pray": "Mangadi",
            "to eat": "Mangan",
            "to breathe": "Mangisnawa",
            "to cough": "Manguku",
            "to go up stairs": "Manik",
            "to dream": "Maninap",
            "embarrassing": "Makarine",
            "to leave": "Mako",
            "chicken": "Manuk",
            "to yawn": "Manuyab",
            "delicious": "Manyaman",
        
            // New general expressions
            "where are you?": "Nukarin ka?",
            "beautiful": "Malagu",
            "you're so beautiful": "Kalagu na",
            "delicious": "Manyaman",
            "how much?": "Tiya magkanu pu?",
            "what happened?": "Menanu",
            "can i buy?": "Salwana pu",
            "no people": "Alang tawu",
            "go ahead and eat": "Mangan na ka",
            "what are you doing?": "Gagawan mu?",
            "i don't know": "E ku balu",
            "let's eat": "Mangan tamu",
            "how did you know": "Makanano mu abalu?",
            "i remembered you": "Aganaka daka",
            "how to do this": "Makanano gawan ini?",
            "i will wait": "Manaya ku",
            "i won't leave you": "E daka lakwan",
            "i won't abandon you": "E daka paburen",
            "you're only mine": "Kaku kamu",
            "i'm only yours": "Keka kumu",
            "i will only love you": "Ika mu ing luguran ku",
            "you're important to me": "Pakamalan daka",
            "you are my rest": "Ika ing painawa ku",
            "i will comeback to you": "Magbalik ku keka",
            "where are you going?": "Nokarin ka munta?",
            "this is delicious": "Manyaman ya ini",
            "i don't eat this": "Eku mamangan makanini",
            "what's the wifi password?": "Nanu ya ing WiFi password?",
            "someone is stalking me": "Ating liligid ligid kanaku.",
            "someone stole my bag, please help me!": "Penakawan de ing bag ku, sopan mu ku!",
            "where are you from?": "Taga nokarin ka?",
            "it's too expensive.": "Masyadu yang makamal",
        
            // Numbers
            "one": "Metung",
            "two": "Adwa",
            "three": "Atlu",
            "four": "Apat",
            "five": "Lima",
            "six": "Anam",
            "seven": "Pitu",
            "eight": "Walu",
            "nine": "Siyam",
            "ten": "Apulu",
            "eleven": "Labing Metung",
            "twelve": "Labing Adwa",
            "thirteen": "Labing Atlu",
            "fourteen": "Labing Apat",
            "fifteen": "Labing Lima",
            "sixteen": "Labing Anam",
            "seventeen": "Labing Pitu",
            "eighteen": "Labing Walu",
            "nineteen": "Labing Siyam",
            "twenty": "Adwang Pulu",
            "twenty-one": "Adwang Pulu ampong Metung",
            "twenty-two": "Adwang Pulu ampong Adwa",
            "twenty-three": "Adwang Pulu ampong Atlu",
            "twenty-four": "Adwang Pulu ampong Apat",
            "twenty-five": "Adwang Pulu ampong Lima",
            "twenty-six": "Adwang Pulu ampong Anam",
            "twenty-seven": "Adwang Pulu ampong Pitu",
            "twenty-eight": "Adwang Pulu ampong Walu",
            "twenty-nine": "Adwang Pulu ampong Siyam",
            "thirty": "Atlung Pulu",
            "thirty-one": "Atlung Pulu ampong Metung",
            "thirty-two": "Atlung Pulu ampong Adwa",
            "thirty-three": "Atlung Pulu ampong Atlu",
            "thirty-four": "Atlung Pulu ampong Apat",
            "thirty-five": "Atlung Pulu ampong Lima",
            "thirty-six": "Atlung Pulu ampong Anam",
            "thirty-seven": "Atlung Pulu ampong Pitu",
            "thirty-eight": "Atlung Pulu ampong Walu",
            "thirty-nine": "Atlung Pulu ampong Siyam",
            "forty": "Apat a Pulu",
            "forty-one": "Apat a Pulu ampong Metung",
            "forty-two": "Apat a Pulu ampong Adwa",
            "forty-three": "Apat a Pulu ampong Atlu",
            "forty-four": "Apat a Pulu ampong Apat",
            "forty-five": "Apat a Pulu ampong Lima",
            "forty-six": "Apat a Pulu ampong Anam",
            "forty-seven": "Apat a Pulu ampong Pitu",
            "forty-eight": "Apat a Pulu ampong Walu",
            "forty-nine": "Apat a Pulu ampong Siyam",
            "fifty": "Limang Pulu",
            "fifty-one": "Limang Pulu ampong Metung",
            "fifty-two": "Limang Pulu ampong Adwa",
            "fifty-three": "Limang Pulu ampong Atlu",
            "fifty-four": "Limang Pulu ampong Apat",
            "fifty-five": "Limang Pulu ampong Lima",
            "fifty-six": "Limang Pulu ampong Anam",
            "fifty-seven": "Limang Pulu ampong Pitu",
            "fifty-eight": "Limang Pulu ampong Walu",
            "fifty-nine": "Limang Pulu ampong Siyam",
            "sixty": "Anam a Pulu",
            "sixty-one": "Anam a Pulu ampong Metung",
            "sixty-two": "Anam a Pulu ampong Adwa",
            "sixty-three": "Anam a Pulu ampong Atlu",
            "sixty-four": "Anam a Pulu ampong Apat",
            "sixty-five": "Anam a Pulu ampong Lima",
            "sixty-six": "Anam a Pulu ampong Anam",
            "sixty-seven": "Anam a Pulu ampong Pitu",
            "sixty-eight": "Anam a Pulu ampong Walu",
            "sixty-nine": "Anam a Pulu ampong Siyam",
            "seventy": "Pitung Pulu",
            "seventy-one": "Pitung Pulu ampong Metung",
            "seventy-two": "Pitung Pulu ampong Adwa",
            "seventy-three": "Pitung Pulu ampong Atlu",
            "seventy-four": "Pitung Pulu ampong Apat",
            "seventy-five": "Pitung Pulu ampong Lima",
            "seventy-six": "Pitung Pulu ampong Anam",
            "seventy-seven": "Pitung Pulu ampong Pitu",
            "seventy-eight": "Pitung Pulu ampong Walu",
            "seventy-nine": "Pitung Pulu ampong Siyam",
            "eighty": "Walung Pulu",
            "eighty-one": "Walung Pulu ampong Metung",
            "eighty-two": "Walung Pulu ampong Adwa",
            "eighty-three": "Walung Pulu ampong Atlu",
            "eighty-four": "Walung Pulu ampong Apat",
            "eighty-five": "Walung Pulu ampong Lima",
            "eighty-six": "Walung Pulu ampong Anam",
            "eighty-seven": "Walung Pulu ampong Pitu",
            "eighty-eight": "Walung Pulu ampong Walu",
            "eighty-nine": "Walung Pulu ampong Siyam",
            "ninety": "Siyam a Pulu",
            "ninety-one": "Siyam a Pulu ampong Metung",
            "ninety-two": "Siyam a Pulu ampong Adwa",
            "ninety-three": "Siyam a Pulu ampong Atlu",
            "ninety-four": "Siyam a Pulu ampong Apat",
            "ninety-five": "Siyam a Pulu ampong Lima",
            "ninety-six": "Siyam a Pulu ampong Anam",
            "ninety-seven": "Siyam a Pulu ampong Pitu",
            "ninety-eight": "Siyam a Pulu ampong Walu",
            "ninety-nine": "Siyam a Pulu ampong Siyam",
            "one hundred": "Sang Daan"
        },
        englishToTagalog: {
            "hello": "Kamusta",
            "good morning": "Magandang umaga",
            "good afternoon": "Magandang hapon",
            "good evening": "Magandang gabi",
            "thank you": "Salamat",
            "you're welcome": "Walang anuman",
            "yes": "Oo",
            "no": "Hindi",
            "other": "Iba",
            "excuse me": "Makisabi ku / Paumanhin",
            "sorry": "Pasensya na",
            "how are you?": "Kumusta ka?",
            "I'm fine": "Mabuti naman",
            "what is your name?": "Ano ang pangalan mo?",
            "my name is": "Ang pangalan ko ay",
            "where is": "Nasaan ang",
            "how much is this?": "Magkano ito?",
            "too expensive": "Masyadong mahal",
            "can you help me?": "Pwede mo ba akong tulungan?",
            "I don't understand": "Hindi ko naiintindihan",
            "I'm lost": "Nawawala ako",
            "bathroom": "Banyo",
            "water": "Tubig",
            "food": "Pagkain",
            "restaurant": "Restawran",
            "hospital": "Ospital",
            "police": "Pulis",
            "taxi": "Taxi",
            "bus": "Bus",
            "train": "Tren",
            "airport": "Paliparan",
            
            // Household and places
            "house": "Bahay",
            "road": "Daan",
            "school": "Paaralan",
            "market": "Palengke",
            "church": "Simbahan",
            "chair": "Upuan",
            "table": "Mesa",
            "window": "Bintana",
            "door": "Pinto",
            "bed": "Kama",
            "pillow": "Unan",
            "blanket": "Kumot",
            "wall": "Pader",
            "floor": "Sahig",
            "roof": "Bubong",
            "ceiling": "Kisame",
            "kitchen": "Kusina",
            "bathroom": "Banyo",
            "toilet": "Palikuran",
            "light": "Ilaw",
            "lamp": "Lampara",

            // Natural and household-related
            "smoke": "Usok",
            "ash": "Abo",
            "shadow": "Anino",
            "mirror": "Salamin",

            // Food staples and kitchen terms
            "salt": "Asin",
            "sugar": "Asukal",
            "pepper": "Paminta",
            "garlic": "Bawang",
            "onion": "Sibuyas",
            "corn": "Mais",
            "bread": "Tinapay",
            "rice (uncooked)": "Bigas",
            "vegetables": "Gulay",
            "fruit": "Prutas",

            // Colors
            "white": "Puti",
            "black": "Itim",
            "red": "Pula",
            "blue": "Asul",
            "green": "Berde",
            "yellow": "Dilaw",
            "brown": "Kayumanggi",
            "gray": "Abuhin",
            "light blue": "Mapusyaw na asul",
            "dark blue": "Madilim na asul",
            "gold": "Ginto",
            "silver": "Pilak",
            "purple": "Lila",
            "orange": "Kahel",
            "pink": "Rosas",

            // User-provided phrases (English → Tagalog)
            "i'm here": "Andito ako",
            "where is the store?": "Asan ung tindahan?",
            "what happens to you?": "Anong nangyare sayo?",
            "it's sweet": "Matamis sya",
            "a little": "Konte",
            "many": "Madami",
            "soup": "Sabaw",
            "ugly": "Panget si Aljon",
            "greedy": "Matakaw",
            "see you again": "Magkikita tayo ulit",
            "i'm from another country": "Taga-ibang bansa ako",
            "i love this food": "Gusto ko yung pagkain",
            "this place is beautiful": "Ang ganda ng lugar na ito",
            "where can i eat this?": "Saan ko to pwedeng makain?",
            "do you speak english?": "Nagsasalita kabang English?",
            "where can i exchange money?": "Saan ako pwedeng magpalit ng pera?",
            "where is the comfort room?": "Nasaan ang banyo?",
            "where is the bus terminal?": "Nasaan ang terminal ng Bus?",
            "where can i get a taxi?": "Saan ako makakasakay ng taxi?",
            "stop here please.": "Para po dito.",
            "how far is it?": "Gaano kalayo ito?",
            "i'm full": "Busog ako.",
            "i have a reservation.": "May reserbasyon ako.",
            "what's the best place to visit here in angeles city?": "Ano ang magandang pasyalan dito sa Angeles City?",
            "can you give me a discount?": "Pwede mo ba akong bigyan ng discount?",

            // Numbers: English → Tagalog (normalized)
            "one": "Isa",
            "two": "Dalawa",
            "three": "Tatlo",
            "four": "Apat",
            "five": "Lima",
            "six": "Anim",
            "seven": "Pito",
            "eight": "Walo",
            "nine": "Siyam",
            "ten": "Sampu",
            "eleven": "Labing-isa",
            "twelve": "Labindalawa",
            "thirteen": "Labintatlo",
            "fourteen": "Labing-apat",
            "fifteen": "Labinlima",
            "sixteen": "Labing-anim",
            "seventeen": "Labimpito",
            "eighteen": "Labing-walo",
            "nineteen": "Labinsiyam",
            "twenty": "Dalawampu",
            "twenty-one": "Dalawampu't isa",
            "twenty-two": "Dalawampu't dalawa",
            "twenty-three": "Dalawampu't tatlo",
            "twenty-four": "Dalawampu't apat",
            "twenty-five": "Dalawampu't lima",
            "twenty-six": "Dalawampu't anim",
            "twenty-seven": "Dalawampu't pito",
            "twenty-eight": "Dalawampu't walo",
            "twenty-nine": "Dalawampu't siyam",
            "thirty": "Tatlumpu",
            "thirty-one": "Tatlumpu't isa",
            "thirty-two": "Tatlumpu't dalawa",
            "thirty-three": "Tatlumpu't tatlo",
            "thirty-four": "Tatlumpu't apat",
            "thirty-five": "Tatlumpu't lima",
            "thirty-six": "Tatlumpu't anim",
            "thirty-seven": "Tatlumpu't pito",
            "thirty-eight": "Tatlumpu't walo",
            "thirty-nine": "Tatlumpu't siyam",
            "forty": "Apatnapu",
            "forty-one": "Apatnapu't isa",
            "forty-two": "Apatnapu't dalawa",
            "forty-three": "Apatnapu't tatlo",
            "forty-four": "Apatnapu't apat",
            "forty-five": "Apatnapu't lima",
            "forty-six": "Apatnapu't anim",
            "forty-seven": "Apatnapu't pito",
            "forty-eight": "Apatnapu't walo",
            "forty-nine": "Apatnapu't siyam",
            "fifty": "Limampu",
            "fifty-one": "Limampu't isa",
            "fifty-two": "Limampu't dalawa",
            "fifty-three": "Limampu't tatlo",
            "fifty-four": "Limampu't apat",
            "fifty-five": "Limampu't lima",
            "fifty-six": "Limampu't anim",
            "fifty-seven": "Limampu't pito",
            "fifty-eight": "Limampu't walo",
            "fifty-nine": "Limampu't siyam",
            "sixty": "Animnapu",
            "sixty-one": "Animnapu't isa",
            "sixty-two": "Animnapu't dalawa",
            "sixty-three": "Animnapu't tatlo",
            "sixty-four": "Animnapu't apat",
            "sixty-five": "Animnapu't lima",
            "sixty-six": "Animnapu't anim",
            "sixty-seven": "Animnapu't pito",
            "sixty-eight": "Animnapu't walo",
            "sixty-nine": "Animnapu't siyam",
            "seventy": "Pitumpu",
            "seventy-one": "Pitumpu't isa",
            "seventy-two": "Pitumpu't dalawa",
            "seventy-three": "Pitumpu't tatlo",
            "seventy-four": "Pitumpu't apat",
            "seventy-five": "Pitumpu't lima",
            "seventy-six": "Pitumpu't anim",
            "seventy-seven": "Pitumpu't pito",
            "seventy-eight": "Pitumpu't walo",
            "seventy-nine": "Pitumpu't siyam",
            "eighty": "Walumpu",
            "eighty-one": "Walumpu't isa",
            "eighty-two": "Walumpu't dalawa",
            "eighty-three": "Walumpu't tatlo",
            "eighty-four": "Walumpu't apat",
            "eighty-five": "Walumpu't lima",
            "eighty-six": "Walumpu't anim",
            "eighty-seven": "Walumpu't pito",
            "eighty-eight": "Walumpu't walo",
            "eighty-nine": "Walumpu't siyam",
            "ninety": "Siyamnapu",
            "ninety-one": "Siyamnapu't isa",
            "ninety-two": "Siyamnapu't dalawa",
            "ninety-three": "Siyamnapu't tatlo",
            "ninety-four": "Siyamnapu't apat",
            "ninety-five": "Siyamnapu't lima",
            "ninety-six": "Siyamnapu't anim",
            "ninety-seven": "Siyamnapu't pito",
            "ninety-eight": "Siyamnapu't walo",
            "ninety-nine": "Siyamnapu't siyam",
            "one hundred": "Isang daan",

            // English → Tagalog additions (user-provided)
            "yes": "Oo",
            "where are you?": "Nasaan ka?",
            "beautiful": "Maganda",
            "you're so beautiful": "Ang ganda mo",
            "delicious": "Masarap",
            "how much?": "Magkano po",
            "what happened?": "Napano?",
            "can i buy?": "Pabili po",
            "no people": "Walang tao",
            "go ahead and eat": "Tara, kain ka na!",
            "what are you doing?": "Anong ginagawa mo?",
            "i don't know": "Hindi ko alam",
            "let's eat": "Kain tayo",
            "how did you know": "Paano mo nalaman",
            "i remembered you": "Naalala kita",
            "how to do this": "Paano gawin ito?",
            "i will wait": "Maghihintay ako",
            "i won't leave you": "Hindi kita iiwan",
            "i won't abandon you": "Hindi kita papabayaan",
            "you're only mine": "Sa akin ka lang",
            "i'm only yours": "Sa iyo lang ako",
            "i will only love you": "Ikaw lang ang mamahalin ko",
            "you're important to me": "Mahalaga ka sa akin",
            "you are my rest": "Ikaw ang pahinga ko",
            "i will comeback to you": "Babalikan kita",

            "where are you going?": "Saan ka pupunta?",
            "this is delicious.": "Masarap ito.",
            "how do i get there?": "Paano makapunta doon?",
            "i don't eat this": "Hindi ako kumakain nito",

            "how much is this?": "Magkano ito?",
            "it's too expensive.": "Ang mahal naman.",
            "can you give me a discount?": "Pwede bang tumawad?",
            "i'll take this.": "Kukunin ko ito.",
            "do you have other sizes?": "May iba po kayong sukat?",
            "i am just looking.": "Tumitingin lang ako.",
            "do you accept card?": "Tumatanggap po ba kayo ng card?",
            "where is the cashier?": "Nasaan ang cashier?",
            "can you wrap it?": "Pwede bang ipabalot?",
            "that's cheap!": "Ang mura naman!",
            "i want this one": "Gusto ko ito.",
            "where is the fitting room?": "Nasaan ang fitting room?",
            "this is too small": "Masyadong maliit ito.",
            "this is too big": "Masyadong malaki ito.",
            "where can i buy this?": "Saan nakakabili nito?",
            "you're so kind": "Ang bait mo naman.",
            "how can i get there?": "Paano makapunta rito?",
            "thank you so much": "Maraming salamat",
            "welcome": "Maligayang pagdating",
            "where are you from?": "Taga saan ka?",
            "someone is stalking me": "May sumusunod sa akin",
            "can i try this on?": "Pwede ko ba itong isukat?",
            "can i have the menu please?": "Pwede po bang kunin ang menu?",
            "someone stole my bag, please help me!": "May kumuha ng bag ko, tulungan mo ako!",
            "what's the wifi password?": "Ano ang WiFi password?",
            "excuse me": "Makikiraan po.",
            "where is the bus terminal?": "Nasaan ang bus terminal?",
            "where is the route of this jeep?": "Saan ang ruta ng jeep na ito?",
            "what vehicle/jeep should i take to get there?": "Anong jeep ang dapat kong sakyan para makapunta doon?",
            "how far is it from here?": "Gaano ito kalayo simula dito?",
            "where is the nearest bus station?": "Saan ang pinakamalapit na bus station?",
            "i would like to book this": "Gusto kong i-book ito.",
            "do you have coins?": "Mayroon ka bang barya?",
            "i don't have coins": "Wala akong barya.",
            "do you accept cash?": "Tumatanggap ba kayong cash?",
            "do you sell this?": "Tinitinda niyo ba ito?",
            "what time does your store open?": "Anong oras kayo nagbubukas?",
            "what time does your store close?": "Anong oras kayo nagsasara?",
            "i'm lost.": "Nawawala ako.",
            "i'm lost, can you help me?": "Nawawala ako, pwede mo ba akong tulungan?",
            "is it okay to take a picture here?": "Pwede ba kaming magpicture dito?",
            "i'm fine, thank you": "Okay lang ako, salamat!",
            "is this your first time here?": "First time mo ba dito?",
            "it's a beautiful place!": "Maganda ang lugar na ito.",
            "how long are you staying?": "Hanggang kailan ka mag-stay dito?",
            "where is the check-in counter?": "Nasaan ang check in counter?",
            "where is the luggage claim?": "Saan ang luggage claim?",
            "my baggage is missing": "Nawawala ang baggage ko.",
            "can i have a window seat, please?": "Pwede po bang sa may bintana ang upuan ko?",
            "is there free wi-fi?": "Mayroon bang free WiFi?",
            "do you speak english?": "Nagsasalita ka ba ng English?",
            "where am i?": "Nasaan ako?",
            "is it safe here?": "Ligtas ba dito?",
            "what's the best restaurant around?": "Anong pinaka the best na kainan dito?",
            "where can i buy a sim card?": "Saan ako pwedeng bumili ng Sim card?",
            "i don't understand": "Hindi ko naiintindihan.",
            "can you speak slowly, please?": "Pwede bang bagalan mo ang pagsasalita mo?",
            "can you write it down?": "Pwede mo bang isulat?",
            "can you teach me kapampangan words?": "Pwede mo ba akong turuan mag Kapampangan words?",
            "that's okay": "Ayos lang yun",
            "no problem": "Walang problema",

            // Restaurant phrases
            "can i see the menu?": "Pwede ko bang makita ang menu?",
            "what is your specialty?": "Ano ang specialty ninyo?",
            "i would like to order.": "Pwede po bang um-order po",
            "the food is delicious!": "Ang sarap ng pagkain!",
            "water, please.": "Tubig po",
            "bill, please": "Bill po.",
            "i'm full": "Busog na ako.",
            "where is the cr?": "Nasaan ang banyo rito?",

            // Common words
            "house": "Bahay",
            "road": "Daan",
            "school": "Paaralan",
            "market": "Palengke",
            "church": "Simbahan",
            "chair": "Silya",
            "table": "Lamesa",
            "window": "Bintana",
            "door": "Pinto",
            "friend": "Kaibigan",
            "family": "Pamilya",
            "food": "Pagkain",
            "water": "Tubig",
            "clothes": "Damit",
            "money": "Pera",
            "phone": "Telepono",
            "work": "Trabaho",
            "love": "Pag-ibig",
            "life": "Buhay",

            // Common phrases
            "how are you?": "Kamusta ka na?",
            "i'm fine.": "Mabuti ako.",
            "thank you very much.": "Maraming salamat.",
            "you're welcome.": "Walang anuman.",
            "excuse me": "Makikiraan po",
            "sorry.": "Pasensya na.",
            "where are you going?": "Saan ka pupunta?",
            "let's eat.": "Kumain tayo.",
            "i don't know": "Hindi ko alam.",
            "take care.": "Mag-ingat ka.",
            "i love you.": "Mahal kita.",
            "what's your name?": "Ano ang pangalan mo?",
            "how much is this?": "Magkano ito?",
            "where is the comfort room?": "Saan ang banyo?",
            "no": "Hindi",
            "what is this?": "Ano ito?",
            "what is that?": "Ano iyon?",
            "eat": "Kumain",
            "drink": "Uminom",
            "sleep": "Matulog",
            "sit": "Upo",
            "work": "Trabaho",
            "play": "Laro",

            // Rendel's vocabulary
            "rice": "Bigas",
            "forget": "Limutin",
            "i": "Ako",
            "me": "Ako",
            "west": "Kanluran",
            "day": "Araw",
            "dust": "Alikabok",
            "firefly": "Alitaptap",
            "and": "At",
            "wind": "Hangin",
            "air": "Hangin",
            "fire": "Apoy",
            "nose": "Ilong",
            "fish": "Isda",
            "mouth": "Bibig",
            "east": "Silangan",
            "vinegar": "Suka",
            "dog": "Aso",
            "remember": "Alalahanin",
            "liver": "Atay",
            "waist": "Baywang",
            "window": "Durungawan",
            "thin": "Payat",
            "earthquake": "Lindol",
            "bird": "Ibon",
            "girl": "Babae",
            "woman": "Babae",
            "pig": "Baboy",
            "storm": "Bagyo",
            "typhoon": "Bagyo",
            "house": "Bahay",
            "ear": "Tainga",
            "heaven": "Langit",
            "sky": "Langit",
            "neck": "Leeg",
            "stone": "Bato",
            "rock": "Bato",
            "star": "Bituin",
            "night": "Gabi",
            "evening": "Gabi",
            "cloud": "Ulap",
            "put": "Ilagay",
            "place": "Ilagay",
            "want": "Gusto",
            "foot": "Paa",
            "leg": "Binti",
            "month": "Buwan",
            "butt": "Puwit",
            "ass": "Puwit",
            "flood": "Baha",
            "mountain": "Bundok",
            "skull": "Bungo",
            "head": "Ulo",
            "mud": "Putik",
            "gecko": "Butiki",
            "penis": "Titi",
            "seed": "Buto",
            "hair": "Buhok",
            "bee": "Bubuyog",
            "life": "Buhay",
            "many": "Marami",
            "bring": "Dalhin",
            "carabao": "Kalabaw",
            "water": "Tubig",
            "however": "Ngunit",
            "but": "Ngunit",
            "crocodile": "Buwaya",
            "blood": "Dugo",
            "give": "Bigay",
            "some": "Kaunti",
            "few": "Kaunti",
            "thunder": "Kulog",
            "abdomen": "Puson",
            "egg": "Itlog",
            "expert": "Eksperto",
            "staircase": "Hagdan",
            "steps": "Hagdan",
            "soil": "Lupa",
            "itch": "Kamot",
            "hand": "Kamay",
            "yell": "Sumigaw",
            "back": "Likod",
            "crawl": "Gapang",
            "carry": "Buhatin",
            "to give": "Ibigay",
            "you": "Ikaw",
            "them": "Sila",
            "river": "Ilog",
            "urinate": "Umihi",
            "pee": "Umihi",
            "the": "Ang",
            "this": "Ito",
            "tooth": "Ngipin",
            "cockroach": "Ipis",
            "eyelash": "Pilikmata",
            "groin": "Singit",
            "meaning": "Kahulugan",
            "while": "Habang",
            "immediately": "Agad",
            "pull": "Hilahin",
            "forest": "Gubat",
            "jungle": "Gubat",
            "stove": "Kalan",
            "mine": "Akin",
            "my": "Akin",
            "alike": "Kamukha",
            "to me": "Sa akin",
            "forehead": "Noo",
            "sibling": "Kapatid",
            "when": "Kailan",
            "to them": "Sa kanila",
            "their": "Kanilang",
            "swim": "Langoy",
            "to her": "Sa kanya",
            "to him": "Sa kanya",
            "his": "Kanyang",
            "hers": "Kanyang",
            "on top of": "Sa ibabaw ng",
            "inside": "Sa loob",
            "to you": "Sa iyo",
            "there": "Diyan",
            "in front": "Sa harap",
            "here": "Dito",
            "lightning": "Kidlat",
            "eyebrow": "Kilay",
            "armpit": "Kilikili",
            "at the back": "Sa likod",
            "fingernail": "Kuko",
            "toenail": "Kuko",
            "to hug": "Yumakap",
            "to cry": "Umiyak",
            "clay pot": "Palayok"
        ,

            // Batch 209 — verbs, motions, senses, and common nouns
            "to get": "Kuhanin",
            "bamboo": "Kawayan",
            "remove": "Alisin",
            "beneath": "Sa ilalim ng",
            "under": "Sa ilalim ng",
            "housefly": "Langaw",
            "fruit fly": "Bangaw",
            "congee": "Lugaw",
            "porridge": "Lugaw",
            "grasshopper": "Tipaklong",
            "to sit": "Umupo",
            "cloud": "Ulap",
            "to fight": "Lumaban",
            "to walk": "Lumakad",
            "to look": "Tumingin",
            "lame": "Lumpo",
            "jump": "Tumalon",
            "enter": "Pumasok",
            "face": "Mukha",
            "to spit": "Dumura",
            "emerge": "Lumabas",
            "go out": "Lumabas",
            "shallow": "Mababaw",
            "slow": "Mabagal",
            "fragrant": "Mabango",
            "heavy": "Mabigat",
            "round": "Bilog",
            "rotten": "Bulok",
            "dark": "Madilim",
            "merciful": "Mahabagin",
            "kind": "Mahabagin",
            "coarse": "Magaspang",
            "rough": "Magaspang",
            "return": "Bumalik",

            // Actions — daily and motion
            "to sing": "Umawit",
            "to lie down": "Humiga",
            "pretend": "Magkunwari",
            "to lie (tell a lie)": "Magsinungaling",
            "to cook": "Magluto",
            "to work": "Magtrabaho",
            "to plant": "Magtanim",
            "to study": "Mag-aral",
            "to buy": "Bumili",
            "to wash": "Maghugas",
            "to clean": "Maglinis",
            "to read": "Magbasa",
            "to write": "Magsulat",
            "to open": "Magbukas",
            "to close": "Magsara",
            "to sleep": "Matulog",
            "to wake up": "Magising",
            "to eat": "Kumain",
            "to drink": "Uminom",
            "to stand": "Tumayo",
            "to run": "Tumakbo",
            "to crawl": "Gumapang",
            "to swim": "Lumangoy",
            "to fly": "Lumipad",
            "to dance": "Sumayaw",
            "to laugh": "Tumawa",
            "to cry": "Umiyak",
            "to smile": "Ngumiti",
            "to hug": "Yumakap",
            "to kiss": "Humalik",
            "to touch": "Humipo",
            "to hold": "Humawak",
            "to pull": "Hilahin",
            "to push": "Itulak",
            "to cut": "Gupitin",
            "to break": "Basagin",
            "to fix": "Ayusin",
            "to repair": "Kumpunihin",
            "to build": "Magtayo",
            "to destroy": "Sirain",
            "to burn": "Sunugin",
            "to blow": "Hipan",

            // Senses and cognition
            "to hear": "Makinig",
            "to see": "Makita",
            "to smell": "Amuyin",
            "to taste": "Tikman",
            "to feel": "Damhin",
            "to think": "Mag-isip",
            "to know": "Malaman",
            "to remember": "Alalahanin",
            "to forget": "Kalimutan",
            "to understand": "Maintindihan",
            "to believe": "Maniwala",
            "to wait": "Maghintay",
            "to love": "Mahalin",
            "to hate": "Kamuhian",
            "to like": "Gusto",
            "to need": "Kailangan",
            "to want": "Nais",
            "to hope": "Umasa",
            "to trust": "Magtiwala",
            "to help": "Tumulong",
            "to play": "Maglaro",
            "to rest": "Magpahinga",
            "to teach": "Magturo",
            "to learn": "Matuto",
            "to practice": "Magpraktis",
            "to train": "Magsanay",
            "to try": "Subukan",
            "to fail": "Bumagsak",
            "to succeed": "Magtagumpay",
            "to win": "Manalo",
            "to lose": "Matalo",

            // Process and control
            "to begin": "Magsimula",
            "to end": "Matapos",
            "to finish": "Tapusin",
            "to continue": "Ipagpatuloy",
            "to stop": "Tumigil",
            "to stay": "Manatili",
            "to go": "Pumunta",
            "to come": "Dumating",
            "to leave": "Umalis",
            "to arrive": "Dumating",
            "to travel": "Maglakbay",
            "to drive": "Magmaneho",
            "to ride": "Sumakay",
            "to sail": "Layag",
            "to cross": "Tumawid",
            "to follow": "Sumunod",
            "to lead": "Manguna",
            "to show": "Ipakita",
            "to hide": "Itago",
            "to find": "Hanapin",
            "to lose": "Mawalan",
            "to lock": "Ikandado",
            "to unlock": "Buksan",
            "to turn on": "Buksan",
            "to turn off": "Patayin",
            "to light": "Sindihan",
            "to cool": "Palamigin",
            "to heat": "Painitin",

            // Cooking and mixing
            "to boil": "Pakuluan",
            "to fry": "Iprito",
            "to bake": "Maghurno",
            "to steam": "I-steam",
            "to mix": "Haluin",
            "to stir": "Haluin",
            "to add": "Idagdag",
            "to subtract": "Ibawas",
            "to multiply": "Paramihin",
            "to divide": "Hatiin",
            "to count": "Magbilang",
            "to measure": "Sukatin",
            "to compare": "Ihambing",
            "to choose": "Pumili",
            "to decide": "Magdesisyon",
            "to plan": "Magplano",
            "to draw": "Gumuhit",
            "to paint": "Magpinta",
            "to speak": "Magsalita",
            "to listen": "Makinig",
            "to shout": "Sumigaw",
            "to whisper": "Bumulong",
            "to ask": "Magtanong"
        ,

            // Batch 210 — actions, communication, movement, household, food, nature
            "to answer": "Sumagot",
            "to tell": "Magsabi",
            "to say": "Sabihin",
            "to call": "Tumawag",
            "to invite": "Mag-imbita",
            "to visit": "Bumisit",
            "to wait": "Maghintay",
            "to promise": "Mangako",
            "to apologize": "Humingi ng tawad",
            "to forgive": "Magpatawad",
            "to thank": "Magpasalamat",
            "to welcome": "Tanggapin",
            "to respect": "Igalang",
            "to honor": "Parangalan",
            "to celebrate": "Magdiwang",
            "to pray": "Manalangin",
            "to worship": "Sumamba",
            "to curse": "Magmura",
            "to bless": "Magbasbas",
            "to save": "Magligtas",
            "to protect": "Protektahan",
            "to guard": "Magbantay",
            "to watch": "Manood",
            "to observe": "Magmasid",
            "to notice": "Mapansin",
            "to search": "Maghanap",
            "to discover": "Tuklasin",
            "to explore": "Mag-explore",

            // Movement and travel
            "to travel": "Maglakbay",
            "to stand up": "Tumayo",
            "to sit down": "Umupo",
            "to walk": "Lumakad",
            "to run": "Tumakbo",
            "to jump": "Tumalon",
            "to fall": "Mahulog",
            "to slip": "Madulas",
            "to crawl": "Gumapang",
            "to climb": "Umakyat",
            "to go down": "Bumaba",
            "to enter": "Pumasok",
            "to exit": "Lumabas",
            "to return": "Bumalik",
            "to go home": "Umuwi",
            "to leave": "Umalis",
            "to arrive": "Dumating",
            "to cross": "Tumawid",
            "to follow": "Sumunod",
            "to lead": "Manguna",
            "to guide": "Gumabay",
            "to chase": "Humabol",
            "to escape": "Tumakas",
            "to hide": "Magtago",
            "to appear": "Lumitaw",
            "to disappear": "Mawawala",

            // State and control
            "to start": "Magsimula",
            "to finish": "Matapos",
            "to continue": "Ipagpatuloy",
            "to stop": "Tumigil",
            "to begin": "Simulan",
            "to end": "Tapusin",
            "to change": "Palitan",
            "to move": "Gumalaw",
            "to stay": "Manatili",
            "to live": "Mabuhay",
            "to die": "Mamatay",
            "to kill": "Pumatay",
            "to revive": "Buhayin",

            // Body and sensing
            "to breathe": "Huminga",
            "to cough": "Umubo",
            "to sneeze": "Bumahing",
            "to yawn": "Humikab",
            "to sleep": "Matulog",
            "to rest": "Magpahinga",
            "to dream": "Managinip",
            "to wake up": "Magising",
            "to talk": "Makipag-usap",
            "to listen": "Makinig",
            "to hear": "Madinig",
            "to smell": "Amuyin",
            "to taste": "Tikman",
            "to feel": "Damhin",
            "to touch": "Hipuin",
            "to hold": "Hawakan",
            "to grab": "Dakmain",
            "to pull": "Hilahin",
            "to push": "Itulak",
            "to lift": "Buhatin",
            "to carry": "Dalhin",
            "to throw": "Itapon",
            "to catch": "Sunggaban",
            "to hit": "Pumalo",
            "to kick": "Sipa",

            // Create and work
            "to cut": "Gupitin",
            "to tear": "Punitin",
            "to break": "Basagin",
            "to fix": "Ayusin",
            "to build": "Magtayo",
            "to repair": "Kumpunihin",
            "to create": "Likhain",
            "to make": "Gawin",
            "to do": "Gawin",
            "to draw": "Gumuhit",
            "to paint": "Magpinta",
            "to design": "Magdisenyo",
            "to write": "Magsulat",
            "to read": "Magbasa",
            "to count": "Magbilang",
            "to measure": "Sukatin",
            "to compare": "Ihambing",
            "to choose": "Pumili",
            "to decide": "Magdesisyon",
            "to plan": "Magplano",
            "to try": "Subukan",
            "to fail": "Bumagsak",
            "to win": "Manalo",
            "to lose": "Matalo",

            // Household chores
            "to iron": "Plantsahin",
            "to sweep": "Walisin",
            "to mop": "Magmapa",
            "to wipe": "Punasan",
            "to polish": "Kintabin",
            "to organize": "Ayusin",
            "to decorate": "Magdekorasyon",
            "to arrange": "Ayusin",
            "to fold": "Tiklupin",
            "to unfold": "Ibuka",
            "to cover": "Takpan",

            // Adjectives and simple nouns
            "full": "Buo",
            "clean": "Malinis",
            "dust": "Alikabok",
            "smoke": "Usok",
            "wind": "Hangin",
            "bread": "Tinapay",
            "food": "Pagkain",
            "breakfast": "Almusal",
            "lunch": "Tanghalian",
            "dinner": "Hapunan",
            "plate": "Plato",
            "spoon": "Kutsara",
            "fork": "Tenedor",
            "knife": "Kutsilyo",
            "cup": "Tasa",
            "glass": "Baso",
            "rice": "Kanin",
            "water": "Tubig",
            "coffee": "Kape",
            "milk": "Gatas",
            "juice": "Katas",
            "salt": "Asin",
            "sugar": "Asukal",
            "vinegar": "Suka",
            "oil": "Langis",
            "soup": "Sabaw",
            "meat": "Karne",
            "fish": "Isda",
            "chicken": "Manok",
            "pig": "Baboy",
            "cow": "Baka",
            "goat": "Kambing",
            "egg": "Itlog",
            "vegetable": "Gulay",
            "fruit": "Prutas",
            "banana": "Saging",
            "mango": "Mangga",
            "apple": "Mansanas",
            "orange": "Kahel",
            "pineapple": "Pinya",
            "coconut": "Niyog",
            "guava": "Bayabas",
            "watermelon": "Pakwan",
            "corn": "Mais",
            "breadfruit": "Rimas",
            "sweet potato": "Kamote",
            "potato": "Patatas",
            "onion": "Sibuyas",
            "garlic": "Bawang",
            "tomato": "Kamatis",
            "ginger": "Luya",
            "pepper": "Paminta",
            "chili": "Sili",
            "leaf": "Dahon",
            "tree": "Puno",
            "branch": "Sanga",
            "root": "Ugat",
            "trunk": "Tangkay",
            "flower": "Bulaklak",
            "grass": "Damo",
            "seed": "Buto",
            "soil": "Lupa",
            "rock": "Bato",
            "sand": "Buhangin",
            "sea": "Dagat",
            "ocean": "Karagatan",
            "river": "Ilog",
            "lake": "Lawa",
            "pond": "Sapa",
            "rain": "Ulan",
            "cloud": "Ulap",
            "sky": "Langit",
            "sun": "Araw",
            "moon": "Buwan",
            "star": "Bituin",
            "lightning": "Kidlat",
            "thunder": "Kulog",
            "storm": "Bagyo",
            "hot": "Mainit",
            "cold": "Malamig",
            "dry": "Tuyo",
            "wet": "Basa",
            "dirty": "Marumi",
            "sweet": "Matamis"
        ,

            // Batch 211 — time, questions, greetings, basics
            "night": "Gabi",
            "day": "Araw",
            "week": "Linggo",
            "month": "Buwan",
            "year": "Taon",
            "time": "Oras",
            "hour": "Oras",
            "minute": "Minuto",
            "second": "Segundo",
            "today": "Ngayon",
            "noon": "Tanghali",
            "dawn": "Madaling araw",
            "dusk": "Takipsilim",
            "weather": "Panahon",

            // Location and speed
            "here": "Dito",
            "there": "Doon",
            "everywhere": "Saanman",
            "fast": "Mabilis",
            "slow": "Mabagal",

            // Question words
            "who": "Sino",
            "what": "Ano",
            "when": "Kailan",
            "where": "Saan",
            "why": "Bakit",
            "how": "Paano",

            // Connectives and polarity
            "because": "Dahil",
            "if": "Kung",
            "yes": "Oo",
            "no": "Hindi",
            "maybe": "Siguro",

            // Politeness and common phrases
            "please": "Pakiusap",
            "thank you": "Salamat",
            "you're welcome": "Walang anuman",
            "sorry": "Pasensya",
            "excuse me": "Paumanhin",
            "goodbye": "Paalam",
            "hello": "Kamusta",

            // Greetings
            "good morning": "Magandang umaga",
            "good afternoon": "Magandang hapon",
            "good evening": "Magandang gabi",
            "good night": "Magandang gabi",

            // Simple conversational exchanges
            "how are you?": "Kamusta ka?",
            "i'm fine": "Mabuti ako",
            "what's your name?": "Anong pangalan mo?",
            "my name is...": "Ang pangalan ko ay...",
            "where are you from?": "Taga saan ka?",
            "i'm from...": "Taga... ako",
            "how old are you?": "Ilang taon ka na?",
            "i'm ... years old": "Ako ay ... taong gulang",
            "what do you do?": "Ano ang trabaho mo?",
            "i work as...": "Nagtatrabaho ako bilang...",
            "where do you live?": "Saan ka nakatira?",
            "i live in...": "Nakatira ako sa...",
            "i like...": "Gusto ko...",
            "i don't like...": "Ayaw ko...",
            "let's go!": "Tara na!",
            "be careful!": "Mag-ingat ka!",
            "i love you": "Mahal kita"
        },
        // Tagalog to Kapampangan translations
        tagalogToKapampangan: {
            "kamusta": "Komusta",
            "magandang umaga": "Mayap a abak",
            "magandang hapon": "Mayap a gatpanapun",
            "magandang gabi": "Mayap a bengi",
            "salamat": "Salamat",
            "walang anuman": "Alang nanu man",
            "oo": "Wa",
            "hindi": "Ali",
            "excuse me": "Makisabi ku / Paumanhin",
            "pasensya na": "Pasensya na",
            "kumusta ka?": "Komusta ka?",
            "mabuti naman": "Mayap ku",
            "ano ang pangalan mo?": "Nanu ing lagyu mu?",
            "ang pangalan ko ay": "Ing lagyu ku",
            "nasaan ang": "Nokarin ya ing",
            "magkano ito?": "Magkanu ini?",
            "masyadong mahal": "Masyadung mal",
            "pwede mo ba akong tulungan?": "Malyari mu kung saupan?",
            "hindi ko naiintindihan": "E ku aintindihan",
            "nawawala ako": "Mewala ku",
            "banyo": "Paliguan",
            "tubig": "Danum",
            "pagkain": "Pamangan",
            "restawran": "Kainan",
            "ospital": "Ospital",
            "pulis": "Polis",
            "taxi": "Taxi",
            "bus": "Bus",
            "tren": "Tren",
            "paliparan": "Paliparan",

            // Added Tagalog → Kapampangan pairs (user-provided)
            "andito ako": "Atsu ku keni",
            "asan ung tindahan?": "Nokarin ya ing tindahan?",
            "anong nangyari sa iyo?": "Nanung milyari keka?",
            "matamis siya": "Mayumu siya",
            "konti": "Ditak",
            "madami": "Marakal",
            "madami masyado": "Masyadong marakal",
            "sabaw": "Sabo",
            "matakaw": "Matako",
            "magkikita tayo ulit": "Mikit tamu ulit",
            "taga-ibang bansa ako": "Ibat ku king aliwang bansa",
            "ano ang pangalan mo?": "Nanu ya ing lagyu mu?",
            "gusto ko yung pagkain": "Buri ke itang pamangan",
            "ang ganda ng lugar na ito": "Kasanting keng lugar ayni",
            "hindi ko maintindihan": "E ku aintindiyan",
            "saan ko to pwedeng makain?": "Nokarin ku ini pwedeng apangan?",
            "pwede mo ba akong tulungan?": "Malyari mu ku bang supan?",
            "nagsasalita ka ba ng english?": "Magsalita ko pung ingles?",
            "saan ako pwedeng magpalit ng pera?": "Nokarin ku pwedeng mamalit kwarta?",
            "nasaan ang banyo?": "Nokarin ya ing banyu?",
            "nasaan ang terminal ng bus?": "Nokarin ya ing terminal na ning bus?",
            "saan ako makakasakay ng jeep?": "Nokarin ku makasakeng jeep?",
            "para po dito.": "Para pu keni",
            "gaano kalayo ito?": "Makananu ya kalawut ini",
            "busog ako.": "Mabsi ku",
            "ano ang magandang pasyalan dito sa angeles city?": "Nanung masanting pasyalan kening Angeles City",
            "pwede mo ba akong bigyan ng discount?": "Malyari mu ku bang dinan discount?",

            // Numbers 1–10
            "isa": "Metung",
            "dalawa": "Adwa",
            "tatlo": "Atlu",
            "apat": "Apat",
            "lima": "Lima",
            "anim": "Anam",
            "pito": "Pitu",
            "walo": "Walu",
            "siyam": "Siyam",
            "sampu": "Apulu",

            // 11–20 (labing- forms)
            "labing-isa": "Labing metung",
            "labingdalawa": "Labing adwa",
            "labintatlo": "Labing atlu",
            "labing-apat": "Labing apat",
            "labinlima": "Labing lima",
            "labing-anim": "Labing anum",
            "labinpito": "Labing pitu",
            "labing-walo": "Labing walu",
            "labinsiyam": "Labing siyam",
            "dalawampu": "Adwang pulu",

            // 21–29
            "dalawampu’t isa": "Adwang pulu at metung",
            "dalawampu’t dalawa": "Adwang pulu at adwa",
            "dalawampu’t tatlo": "Adwang pulu at atlu",
            "dalawampu’t apat": "Adwang pulu at apat",
            "dalawampu’t lima": "Adwang pulu at lima",
            "dalawampu’t anim": "Adwang pulu at anum",
            "dalawampu’t pito": "Adwang pulu at pitu",
            "dalawampu’t walo": "Adwang pulu at walu",
            "dalawampu’t siyam": "Adwang pulu at siyam",

            // 30 and 31–39
            "tatlumpu": "Atlung pulu",
            "tatlumpu’t isa": "Atlung pulu at metung",
            "tatlumpu’t dalawa": "Atlung pulu at adwa",
            "tatlumpu’t tatlo": "Atlung pulu at atlu",
            "tatlumpu’t apat": "Atlung pulu at apat",
            "tatlumpu’t lima": "Atlung pulu at lima",
            "tatlumpu’t anim": "Atlung pulu at anum",
            "tatlumpu’t pito": "Atlung pulu at pitu",
            "tatlumpu’t walo": "Atlung pulu at walu",
            "tatlumpu’t siyam": "Atlung pulu at siyam",

            // 40 and 41–49
            "apatnapu": "Apat a pulu",
            "apatnapu’t isa": "Apat a pulu at metung",
            "apatnapu’t dalawa": "Apat a pulu at adwa",
            "apatnapu’t tatlo": "Apat a pulu at atlu",
            "apatnapu’t apat": "Apat a pulu at apat",
            "apatnapu’t lima": "Apat a pulu at lima",
            "apatnapu’t anim": "Apat a pulu at anum",
            "apatnapu’t pito": "Apat a pulu at pitu",
            "apatnapu’t walo": "Apat a pulu at walu",
            "apatnapu’t siyam": "Apat a pulu at siyam",

            // 50 and 51–59
            "limampu": "Limang pulu",
            "limampu’t isa": "Limang pulu ampong metung",
            "limampu’t dalawa": "Limang pulu ampong adwa",
            "limampu’t tatlo": "Limang pulu ampong atlu",
            "limampu’t apat": "Limang pulu ampong apat",
            "limampu’t lima": "Limang pulu ampong lima",
            "limampu’t anim": "Limang pulu ampong anum",
            "limampu’t pito": "Limang pulu ampong pitu",
            "limampu’t walo": "Limang pulu ampong walu",
            "limampu’t siyam": "Limang pulu ampong siyam",

            // 60 and 61–69
            "animnapu": "Anam a pulu",
            "animnapu’t isa": "Anam a pulu ampong metung",
            "animnapu’t dalawa": "Anam a pulu ampong adwa",
            "animnapu’t tatlo": "Anam a pulu ampong atlu",
            "animnapu’t apat": "Anam a pulu ampong apat",
            "animnapu’t lima": "Anam a pulu ampong lima",
            "animnapu’t anim": "Anam a pulu ampong anum",
            "animnapu’t pito": "Anam a pulu ampong pitu",
            "animnapu’t walo": "Anam a pulu ampong walu",
            "animnapu’t siyam": "Anam a pulu ampong siyam",

            // 70 and 71–79
            "pitumpu": "Pitung pulu",
            "pitumpu’t isa": "Pitung pulu ampong metung",
            "pitumpu’t dalawa": "Pitung pulu ampong adwa",
            "pitumpu’t tatlo": "Pitung pulu ampong atlu",
            "pitumpu’t apat": "Pitung pulu ampong apat",
            "pitumpu’t lima": "Pitung pulu ampong lima",
            "pitumpu’t anim": "Pitung pulu ampong anum",
            "pitumpu’t pito": "Pitung pulu ampong pitu",
            "pitumpu’t walo": "Pitung pulu ampong walu",
            "pitumpu’t siyam": "Pitung pulu ampong siyam",

            // 80 and 81–89
            "walumpu": "Walung pulu",
            "walumpu’t isa": "Walung pulu ampong metung",
            "walumpu’t dalawa": "Walung pulu ampong adwa",
            "walumpu’t tatlo": "Walung pulu ampong atlu",
            "walumpu’t apat": "Walung pulu ampong apat",
            "walumpu’t lima": "Walung pulu ampong lima",
            "walumpu’t anim": "Walung pulu ampong anum",
            "walumpu’t pito": "Walung pulu ampong pitu",
            "walumpu’t walo": "Walung pulu ampong walu",
            "walumpu’t siyam": "Walung pulu ampong siyam",

            // 90 and 91–99
            "siyamnapu": "Siam a pulu",
            "siyamnapu’t isa": "Siam a pulu ampong metung",
            "siyamnapu’t dalawa": "Siam a pulu ampong adwa",
            "siyamnapu’t tatlo": "Siam a pulu ampong atlu",
            "siyamnapu’t apat": "Siam a pulu ampong apat",
            "siyamnapu’t lima": "Siam a pulu ampong lima",
            "siyamnapu’t anim": "Siam a pulu ampong anum",
            "siyamnapu’t pito": "Siam a pulu ampong pitu",
            "siyamnapu’t walo": "Siam a pulu ampong walu",
            "siyamnapu’t siyam": "Siam a pulu ampong siyam",

            // 100
            "isang daan": "Metung dalan",

            // User-provided extended phrases and adjectives
            "nasaan ka?": "Nokarin ka",
            "maganda": "Malagu",
            "ang ganda mo": "Kalagu mu",
            "masarap": "Manyaman",
            "magkano po": "Magkanu ya pu",
            "napano?": "Ninanu",
            "pabili po": "Salwana pu",
            "walang tao": "Alang tawu",
            "kain kana": "Mangan na ka",
            "anong ginagawa mo?": "Nang gagawan mu?",
            "hindi ko alam": "Eku balu",
            "kain tayo": "Mangan tamu",
            "paano mo nalaman?": "Makananu mung abalu?",
            "naalala kita": "Aganaka daka",
            "paano gawin ito?": "Makananu ya gawan ini?",
            "maghihintay ako": "Manaya ku",
            "hindi kita iiwan": "E daka lakwan",
            "hindi kita papabayaan": "E daka paburen",
            "sa akin ka lang": "Kaku kamu",
            "sa iyo lang ako": "Keka kumu",
            "ikaw lang ang mamahalin ko": "Ika mu ing luguran ku",
            "mahalaga ka sa akin": "Importanti ka kanaku",
            "ikaw ang pahinga ko": "Ika ing paynawa ku",
            "babalikan kita": "Magbalik ku keka",

            // Travel and directions
            "saan ka pupunta?": "Nokarin ka munta?",
            "masarap ito": "Manyaman ya ini.",
            "paano maka punta doon?": "Makananu maka punta karin?",
            "hindi ako kumakain nito": "Eku mamangan makanini",

            // Shopping
            "ang mahal naman": "Masyadu yang makamal.",
            "pwede bang tumawad?": "Malyari mu kung dinan makasadyang presyu?",
            "kukunin ko ito": "Kunan ke ini.",
            "may iba po kayong sukat?": "Atin kayung aliwang sukat?",
            "tumitingin lang ako": "Maglawe ku mu.",
            "tumatanggap po ba kayo ng card?": "Tatanggap kayu card?",
            "nasaan ang cashier?": "Nukarin ya ing cashier?",
            "pwede bang ipabalot?": "Malyari bang pabalut?",
            "ang mura naman!": "Mura yang masyadu!",
            "gusto ko ito.": "Buri ke ini.",
            "nasaan ang fitting room?": "Nokarin ya ing fitting room?",
            "masyadong itong maliit.": "Masyadu yang malati ini.",
            "masyadong malaki ito": "Masyadu yang madagul ini.",
            "saan nakakabili nito?": "Nokarin makasaling makanini?",
            "ang bait mo naman.": "Kabait mo naman.",
            "paano makapunta rito?": "Makananung makapunta keni?",
            "maraming salamat": "Dakal a salamat",
            "walang anu man": "Ala mu ita.",
            "taga saan ka": "Taga nokarin ka?",
            "may umaaligid sa akin": "Ating liligid ligid kanaku.",
            "pwede ko ba itong isukat?": "Pwedi keng isukat ini?",
            "nasaan po ang menu niyo": "Nokarin ya pu ing menu yu?",
            "may kumuha ng bag ko, tulungan mo ako!": "Penakawan de ing bag ku, sopan mu ku!",
            "ano ang wifi password?": "Nanu ya ing WiFi password?",
            "makikiraan po.": "Makilabas ku pu.",
            "saan ang ruta ng jeep na ito?": "Nokarin ya ing ruta ning jeep ayni?",
            "anong jeep ang dapat kong sakyan para makapunta doon?": "Nanung jeep ing saken ku para mipunta ku keta?",
            "gaano ito kalayo simula dito?": "Makananu ya kalawut nung mibatan ku keni?",
            "saan ang pinakamalapit na bus station?": "Nokarin ya ing pinakamalapit a bus station?",
            "gusto kong ibook ito.": "I book ku ne ini.",
            "mayroon kabang barya?": "Atin ka bang coins?",
            "wala akong barya": "Ala kung coins.",
            "tumatanggap ba kayong gcash?": "Tatanggap kayung cash?",
            "tinitinda niyo ba ito?": "Titinda yu ba ini?",
            "anong oras kayo nagbubukas?": "Nang oras kayu mamuklat?",
            "anong oras kayo nagsasara?": "Nang oras kayu manyara?",
            "nawawala ako.": "Melili ku.",
            "nawawala ako, pwede mo ba kong tulungan?": "Melili ku, maluari mu kung sopan?",
            "pwede ba kaming magpicture dito?": "Malyari bang magpicture keni?",
            "okay lang ako, salamat!": "Okay ku mu, salamat!",
            "anong pangalan mo?": "Nang lagyu mu?",
            "ang aking pangalan.": "Ing lagyu ku pu…",
            "first time mo ba dito?": "Ini ba ing first time mu keni?",
            "maganda ang lugar na ito!": "Masanting ya ing lugar a ini!",
            "hanggang kailan ka magstay dito?": "Hanggang kapilan ka magstay keni?",
            "nasan ang check in counter?": "Nokarin ya ing check in counter?",
            "saan ang luggage claim?": "Nokarin ya ing luggage claim?",
            "nawawala ang baggage ko.": "Mawawala ya ing baggage ku.",
            "mayroon bang free wifi?": "Atin bang free WiFi?",
            "nagsasalita po ba kayong english?": "Magsalita ko pung ingles?",
            "nasaan ako?": "Nokarin ku?",
            "anong pinaka the best na kainan dito?": "Nanung pinaka the best a pipanganan keni?",
            "saan ako pwedeng bumili ng sim card?": "Nokarin ku malayaring makasaling Sim Card?",
            "hindi ko maintindihan.": "Eku antindiyan.",
            "pwede bang paki bagalan ang pagsasalita mo?": "Malyari bang bagalan mu ing pamagsalita mu?",
            "pwede mo bang isulat?": "Malyari me bang isulat?",
            "pwede mo ba akong turuan ng kapampangan words?": "Malyari mu ko bang turwanan kapampangan words?",
            "ayos lang yun.": "Okay mu ita.",
            "walang problema.": "Alang problema.",

            // Restaurant basics
            "pwede ko bang makita ang menu?": "Malyari keng akit ing menu?",
            "ano ang specialty ninyo?": "Nanu ya ing espesyal yu?",
            "oorder po ako.": "Malyari kung umorder.",
            "ang sarap ng pagkain!": "Manyaman ya ing pamangan!",
            "tubig po, pakiusap": "Danum pu.",
            "bill po": "Bill pu.",
            "busog na ako": "Mabsi naku.",
            "nasaan ang banyo rito?": "Nokarin ya ing banyu yu?",

            // Nouns and adjectives
            "bahay": "Bale",
            "daan": "Dalan",
            "kalsada": "Dalan",
            "paaralan": "Eskwela",
            "palengke": "Palengki",
            "simbahan": "Pisamban",
            "silya": "Luklukan",
            "lamesa": "Mesa",
            "bintana": "Awang",
            "pinto": "Pasbul",
            "kaibigan": "Kaluguran",
            "pamilya": "Pamilya",
            "pagkain": "Pamangan",
            "tubig": "Danum",
            "damit": "Malan",
            "pera": "Kwartá",
            "telepono": "Selpun",
            "trabaho": "Obra",
            "pag-ibig": "Kaluguran",
            "buhay": "Bié",
            "maasim": "Maslam",
            "panget": "Matsura",
            "malamig": "Marimla",
            "mainit": "Mapali",
            "maiinit": "Mapali",
            "maliit": "Malati",
            "malagkit": "Marayuput",
            "malabnaw": "Malanyo",
            "malaki": "Madagul",
            "maiksi": "Makuyad",
            "maiiksi": "Makuyad",
            "marami": "Dakal",
            "konti": "Ditak",
            "mahaba": "Makaba",
            "mataas": "Matas",
            "mababa": "Mababa",
            "matalim": "Mataram",
            "malabo": "Malabug",
            "madaya": "Maraya",
            "tuyo": "Malangi",
            "maalinsangan": "Malisangan",
            "mabango": "Mabanglu",
            "mabaho": "Mabuluk",
            "malayo": "Malawut",
            "malayp": "Malawut",
            "malapit": "Malapit",
            "malalim": "Malalam",
            "puno": "Katmu / sapak",
            "pogi ka": "Masanting ka",
            "maganda ka": "Malagu ka",
            "bihira": "Malagad",
            "madalas": "Maralas",

            // Conversational phrases with punctuation variants
            "kamusta ka na?": "Komusta na ka",
            "mabuti ako": "Mayap ku",
            "mabuti ako.": "Mayap ku",
            "maraming salamat": "Dakal a salamat",
            "maraming salamat.": "Dakal a salamat",
            "walang anuman": "Alang nanu man",
            "walang anuman.": "Ala na itamu",
            "paumanhin": "Makisabi ku",
            "pasensya na": "Pasensya na",
            "pasensya na.": "Pasensya na",
            "saan ka pupunta?": "Nokarin ka munta?",
            "hindi ko alam": "E ku balu",
            "hindi ko alam.": "E ku balu",
            "mag-ingat ka": "Mimingat ka",
            "mag-ingat ka.": "Mimingat ka",
            "mahal kita": "Kaluguran daka",
            "ano ang pangalan mo?": "Nanu ing lagyu mu?",
            "magkano ito?": "Magkanu ini?",
            "saan ang banyo?": "Nukarin ing banyo?",
            "oo": "Wa",
            "hindi": "Ali",
            "ano ito?": "Nanu ini?",
            "ano iyon?": "Nanu ita?",
            "kumain": "Mangan",
            "uminom": "Minum",
            "matulog": "Matudtud",
            "umupo ka": "Lukluk",
            "magtrabaho ka": "Magobra ka",
            "maglaro ka": "Mamyalung",

            // Tagalog → Kapampangan vocabulary list
            "bigas": "Abyas",
            "limutin": "Akalingwan",
            "ako": "Aku",
            "kanluran": "Albugan",
            "araw": "Aldo",
            "alikabok": "Alikabuk",
            "alitaptap": "Alipatpat",
            "at": "Ampo",
            "hangin": "Angin",
            "apoy": "Api",
            "ilong": "Arung",
            "isda": "Asán",
            "bibig": "Asbuk",
            "silangan": "Aslagan",
            "suka": "Aslam",
            "aso": "Asu",
            "alalahanin": "Atandanan",
            "atay": "Ate",
            "baywang": "Bewang",
            "durungawan": "Awang",
            "payat": "Maimpis",
            "lindol": "Ayun",
            "ibon": "Ayup",
            "babae": "Babai",
            "baboy": "Babi",
            "bagyo": "Bagyu",
            "bahay": "Bale",
            "tainga": "Balugbug",
            "langit": "Banwa",
            "leeg": "Batal",
            "bato": "Batu",
            "bituin": "Talak",
            "gabi": "Bengi",
            "ulap": "Biga",
            "ilagay": "Kabit",
            "gusto": "Bisa",
            "paa": "Bitis",
            "binti": "Pata",
            "buwan": "Bulan",
            "puwit": "Buldit",
            "baha": "Bulus",
            "bundok": "Bunduk",
            "bungo": "Bungu",
            "ulo": "Buntuk",
            "putik": "Burak",
            "butiki": "Butaki",
            "titi": "Butu",
            "buto": "Butul",
            "buhok": "Bwak",
            "bubuyog": "Bwang",
            "buhay": "Bié",
            "dalhin": "Dalan",
            "kalabaw": "Damulag",
            "tubig": "Danum",
            "ngunit": "Oneng",
            "buwaya": "Dapu",
            "dugo": "Daya",
            "bigay": "Dinan",
            "kaunti": "Ditak",
            "kulog": "Duldul",
            "puson": "Dungus",
            "itlog": "Ebun",
            "eksperto": "Ekspertu",
            "hagdan": "Eran",
            "lupa": "Gabun",
            "kamot": "Galus",
            "kamay": "Gamat",
            "sumigaw": "Gulasyo",
            "likod": "Gulut",
            "gapang": "Gumulung",
            "buhatin": "Ibwat",
            "ibigay": "Ibye",
            "ikaw": "Ika",
            "sila": "Ila",
            "ilog": "Ilug",
            "umihi": "Imi",
            "ang": "Ing",
            "ito": "Ini",
            "ngipin": "Ipan",
            "ipis": "Ipas",
            "pilikmata": "Irap",
            "singit": "Ita",
            "kahulugan": "Kabaldugan",
            "habang": "Kabang",
            "agad": "Kabud",
            "hilahin": "Kabiran",
            "gubat": "Kakewan",
            "kalan": "Kalang",
            "akin": "Kaku",
            "kamukha": "Kalupa",
            "sa akin": "Kanaku",
            "noo": "Kanwan",
            "kapatid": "Kapatad",
            "kailan": "Kapilan",
            "sa kanila": "Karela",
            "kanilang": "Karelang",
            "langoy": "Kawe",
            "sa kanya": "Kaya",
            "kanyang": "Kayang",
            "sa ibabaw ng": "King babo",
            "sa loob": "King kilub",
            "sa iyo": "Keka",
            "diyan": "Ken",
            "sa harap": "King arap",
            "dito": "Keni",
            "kidlat": "Kildap",
            "kilay": "Kile",
            "kilikili": "Kilikili",
            "sa likod": "King gulut",
            "kuko": "Kuku",
            "yumakap": "Kumaul",
            "umiyak": "Kumyak",
            "palayok": "Kuran",
            "kutis": "Kutis",
            "kuhanin": "Kwanan",
            "kawayan": "Kwayan",
            "alisin": "Lako",
            "sa ilalim ng": "Lalam",
            "langaw": "Lango",
            "bangaw": "Lango dapu",
            "lugaw": "Lëlut",
            "tipaklong": "Lipaktung",
            "umupo": "Lukluk",
            "lumaban": "Lumaban",
            "lumakad": "Lumakad",
            "tumingin": "Lumawe",
            "lumpo": "Lumpu",
            "tumalón": "Lundag",
            "pumasok": "Lungub",
            "mukha": "Lupa",
            "dumura": "Lura",
            "lumabas": "Lwal",
            "mababaw": "Mababo",
            "mabagal": "Mabagal",
            "mabango": "Mabanglu",
            "mabigat": "Mabayat",
            "bilog": "Mabilug",
            "bulok": "Mabuluk",
            "madilim": "Madalumdum",
            "mahabagin": "Maganaka",
            "magaspang": "Magaspang",
            "bumalik": "Magbalik",
            "umaawit": "Magkanta",
            "humiga": "Magkera",
            "magkunwari": "Magkunwari",
            "magsinungaling": "Maglaram",
            "magluto": "Maglutu",
            "magtrabaho": "Mag-obra",
            "mahaba": "Makaba",
            "busog": "Mabsi",
            "ganyan": "Makanyan",
            "paano": "Makananu",
            "bingi": "Maklak",
            "maigsi": "Makuyad",
            "maikli": "Makuyad",
            "gayahin": "Makyapus",
            "maganda": "Malagu",
            "malakas": "Masikan",
            "malalim": "Malalam",
            "tuyo": "Malangi",
            "malapit": "Malapit",
            "maalat": "Malat",
            "maliit": "Malati",
            "makilitiin": "Malingapngap",
            "malinis": "Malinis",
            "umibig": "Malsinta",
            "mahal": "Lugud",
            "malunod": "Malumud",
            "malungkot": "Malungkut",
            "magmadali": "Mamaliksi",
            "maglaba": "Mamipi",
            "magbiro": "Mamiru",
            "maglaro": "Mamyalung",
            "mahulog": "Manabu",
            "bumagsak": "Manabu",
            "magnakaw": "Manako",
            "humiram": "Manandam",
            "bumahin": "Manatsing",
            "maligo": "Mandilu",
            "manalangin": "Mangadi",
            "kumain": "Mangan",
            "huminga": "Mangisnawa",
            "umubo": "Manguku",
            "pumanhik": "Manik",
            "managinip": "Maninap",
            "nakakahiya": "Makarine",
            "umalis": "Mako",
            "manok": "Manuk",
            "maghigab": "Manuyab",
            "masarap": "Manyaman",
            "sumuka": "Manyuka",
            "pagod": "Mapagal",
            "mapait": "Mapait",
            "mainit": "Mapali",
            "maanghang": "Maparas",
            "makinis": "Mapinu",
            "puti": "Maputi",
            "malaki": "Maragul",
            "maaga": "Maranun",
            "gutom": "Maranup",
            "malayo": "Marayu",
            "malamig": "Marimla",

            // Additional Tagalog → Kapampangan entries (batch 203+)
            "marumi": "Marinat",
            "paruparo": "Mariposa",
            "masama": "Marok",
            "maysakit": "Masakit",
            "maayos": "Masalese",
            "maliwanag": "Masala",
            "maasim": "Maslam",
            "mata": "Mata",
            "mataba": "Mataba",
            "duwag": "Mataloti",
            "madulas": "Mataluras",
            "tamad": "Matamad",
            "batugan": "Matamad",
            "matapang": "Matapang",
            "matulis": "Mataram",
            "malito": "Mataranta",
            "matangkad": "Matas",
            "mamatay": "Mate",
            "tulis": "Matilus",
            "unggoy": "Matsin",
            "itim": "Matuling",
            "matanda": "Matwa",
            "magulang": "Matwa",
            "magaan": "Mayan",
            "mabait": "Mayap",
            "nipis": "Maympis",
            "mahina": "Mayna",
            "matamis": "Mayumu",
            "maynila": "Menila",
            "nahuli": "Merakap",
            "patay": "Mete",
            "isa": "Metung",
            "gumising": "Migising",
            "uminom": "Minum",
            "mag-isip": "Misip",
            "inaantok": "Mitutundu",
            "umakyat": "Mukyat",
            "tanga": "Mulala",
            "humalik": "Muma",
            "baliw": "Murit",
            "ano": "Nanu",
            "kahapon": "Napun",
            "kanin": "Nasi",
            "ngayon": "Ngeni",
            "niyog": "Ngungut",
            "sino": "Ninu",
            "saan": "Nukarin",
            "kung": "Nung",
            "bakit": "Ot",
            "balikat": "Pagó",
            "magwalis": "Palisan",
            "panggatong": "Panangab",
            "langgam": "Panas",
            "panganay": "Pangane",
            "hipon": "Paro",
            "sugpo": "Paro",
            "pinto": "Pasbul",
            "pantay": "Patag / Pante",
            "patayin": "Paten",
            "pagong": "Pau",
            "ilan": "Pilan",
            "pilay": "Pile",
            "piliin": "Pilinan",
            "bahaghari": "Pinan-ari",
            "pipi": "Pipi",
            "pinsan": "Pisan",
            "butas ng puwit": "Pitaklan",
            "kiki": "Puki",
            "pusa": "Pusa",
            "puso": "Pusu",
            "hita": "Pwad",
            "sakalin": "Sakalan",
            "salagubang": "Salibubang",
            "dibdib": "Salu",
            "saluhin": "Salwan",
            "agawin": "Samsaman",
            "siko": "Siku",
            "itago": "Sinup",
            "ingatan": "Sinup",
            "humigop": "Sipsipan",
            "lumipad": "Sulapo",
            "magsalita": "Sumabi",
            "suso": "Susu",
            "paglingkuran": "Suyuan",
            "takip": "Takap",
            "humakbang": "Takbang",
            "tae": "Takla",
            "daliri": "Taliri",
            "lehiya": "Tasik",
            "ama": "Tatang",
            "tatay": "Tatang",
            "tao": "Tau",
            "magsayaw": "Terak",
            "tumayo": "Tikdo",
            "tuhod": "Tud / Intud",
            "huminto": "Tuknang",
            "itulak": "Tulak",
            "tutubi": "Tulang",
            "tumuro": "Tuldu",
            "batok": "Tundun",
            "ulan": "Uran",
            "oo nga": "Wapin",
            "kumaway": "Wagwagan",
            "siya": "Iya",
            "lamok": "Lamuk / Yamuk",
            "iha": "Yatsa / Yatse",
            "itapon": "Yugse",
            "apong lalaki": "Apu a lalaki",
            "apong babae": "Apu a babai",
            "tiyo": "Titu",
            "tiya": "Tita",
            "bata": "Anak / Anak a bisan",
            "sanggol": "Bingut",
            "kaibigan": "Kaluguran",
            "matalik na kaibigan": "Masikal a kaluguran",
            "kaaway": "Kapate",
            "kapitbahay": "Siping-bale",
            "bisita": "Bisita",
            "estranghero": "Alang kakilala",
            "masaya": "Metuwa",
            "malungkot": "Malungkut",
            "galit": "Mimwa",
            "natatakot": "Tatakut",
            "nagulat": "Megulat",
            "mahiyain": "Marirya",
            "kinakabahan": "Kakarug",
            "nasasabik": "Manyigla",
            "seloso": "Magselos",
            "nag-aalala": "Migaganaka",
            "kalmado": "Kalmadu",
            "nababato": "Marok keng oras",
            "mayabang": "Mayabang / Maragul king sarili",
            "umiibig": "Malsinta / Lugud",
            "paaralan": "Eskwela",
            "hospital": "Ospital",
            "simbahan": "Pisamban",
            "palengke": "Tiangge",
            "tindahan": "Tindahan",
            "parke": "Parke",
            "plasa": "Plasa",
            "lungsod": "Lakanbalen",
            "bayan": "Balen",
            "bansa": "Bangsa",
            "isla": "Pulu",
            "lalawigan": "Probinsya",
            "kalsada": "Dalan",
            "tulay": "Tete",
            "pantalan": "Pantalan",
            "bukid": "Tamnanan",
            "bukirin": "Bukiran",
            "gubat": "Gubat",
            "bundok": "Bunduk",
            "dagat": "Dayat",
            "awa": "Laug",
            "yungib": "Kweba",
            "pwesto": "Bale palengki",
            "umaga": "Abak",
            "tanghali": "Katanghalian",
            "hapon": "Gatpanapun",
            "gabi": "Bengi",
            "hatinggabi": "Kapitangan ning bengi",
            "gayon": "Ngeni",
            "bukas": "Bukas",
            "linggo": "Dumingu",
            "buwan": "Bulan",
            "taon": "Banwa",
            "oras": "Oras",
            "minuto": "Minutu",
            "segundo": "Segundo",
            "panahon": "Oras",
            "makita": "Lawen",
            "makarinig": "Damdaman",
            "hawakan": "Talan / Dakapan",
            "amuyin": "Simut",
            "tikman": "Tikman",
            "sirain": "Laku / Lakwan",
            "ayusin": "Isalese",
            "linisin": "Linisan",
            "magtayo": "Manalakad",
            "tumulong": "Saup / Magsaup",
            "maghintay": "Manaya",
            "tumawag": "Tumuking",
            "sumagot": "Sumagot",
            "buksan": "Buklat",
            "isara": "Takpan",
            "ipakita": "Ipakit",
            "magsimula": "Mamibandi",
            "matapos": "Kapupusan",
            "gamitin": "Gamitan",
            "hanapin": "Mayakit",
            "mawala": "Makawala",
            "manalo": "Manalo",
            "gumuhit": "Maglarawan",
            "sumayaw": "Terak",
            "langit asul": "Asul a banwa",
            "madilim na asul": "Sulu asul",
            "murang berde": "Berdeng marimla",
            "madilim na berde": "Sulu berde",
            "kulay balat": "Kaputlan",
            "kulay ubeng pula": "Partina",
            "lila": "Vialte",
            "bughaw-berde": "Turkesa",
            "baka": "Baka",
            "kambing": "Kambing",
            "kabayo": "Kabayu",
            "pato": "Itik / Bibi",
            "ahas": "Bulati / Sawa",
            "palaka": "Tugak",
            "paruparo": "Mariposa",
            "bubuyog": "Bwang",
            "gagamba": "Babagwa",
            "daga": "Dagis",
            "paniki": "Paniki",
            "butiki": "Butaki",
            "tuko": "Tukaw",
            "baboy": "Babi",
            "tupa": "Karnero",
            "ibon": "Ayup",
            "manok": "Manuk",
            "langaw": "Lango",
            "lamok": "Lamuk / Yamuk",
            "isda": "Asán",
            "alimango": "Alimangu",

             // Batch 204 additions
             "hipon": "Paro",
             "ihagis": "Gis",
             "ama": "Tatang",
             "tatay": "Tatang",
             "umupo": "Lukluk",
             "matulog": "Matudtud",
             "kumain": "Mangan",
             "magsayaw": "Tumerak",
             "umawit": "Magkanta",
             "manalangin": "Mangadi",
             "tumawa": "Tumula",
             "umiyak": "Mangaga",
             "sumigaw": "Gulisak",
             "tumakbo": "Mamulayi",
             "tumalon": "Lundag",
             "lumangoy": "Languy",
             "humiga": "Magkera",
             "managinip": "Maninap",
             "yumakap": "Yakap",
             "ngumiti": "Ngisi",
             "ina": "Ima",
             "nanay": "Ima",
             "inay": "Ima",
             "kapatid na lalaki": "Koya",
             "kapatid na babae": "Atchi",
             "kaaway": "Kalaban",
             "kapitbahay": "Sipingbale",
             "mga tao": "Tawu",
             "lalaki": "Lalake",
             "asawa lalaki": "Asawa a lalake",
             "asawababae": "Asawa a babai",
             "guro": "Mestra",
             "estudyante": "Memyalis / Estudyanti",
             "magsasaka": "Mangapos",
             "mangingisda": "Mangasan",
             "tindero": "Magtinda",
             "karpintero": "Magkarpinteru",
             "drayber": "Magmanehu",
             "dahon": "Bulung",
             "bulaklak": "Sampaga",
             "damo": "Dikut",
             "ugat": "Uyat",
             "punla": "Punla / Tututlu",
             "hardin": "Tanamanan",
             "langit": "Banwa",
             "bituin": "Talak",
             "kulog": "Duldul",
             "kidlat": "Kildap",
             "hangin": "Angin",
             "bagyo": "Unos",
             "buhangin": "Gabun",
             "kabibe": "Kabatiti",
             "gubat": "Kakewan",
             "lambak": "Lambak / Gilidbunduk",
             "lawa": "Danumbale / Laug",
             "asukal": "Mayumu",
             "bigas": "Abyas",
             "tinapay": "Tinape",
             "karne": "Karni",
             "itlog": "Ebun",
             "gulay": "Gule",
             "sabaw": "Sabo",
             "plato": "Pinggan",
             "kutsara": "Kutsara",
             "tinidor": "Tinidur",
             "tasa": "Tasa",
             "baso": "Basu",
             "mesa": "Dulang",
             "unan": "Ulunan",
             "kumot": "Ulas",
             "pader": "Pader / Dingding",
             "sahig": "Salig",
             "bubong": "Atup",
             "kisame": "Kisami",
             "bintana": "Awang",
             "kubeta": "Palikuran",
             "ilaw": "Silab / Lawen",
             "lampara": "Sulu",
             "usok": "Asuk",
             "anino": "Aninu",
             "kulay": "Kule",
             "pula": "Malutu",
             "puti": "Maputi",
             "kayumanggi": "Kapeng",
             "kahel": "Kahel",
             "lila": "Lila",
             "rosas": "Rosas",
             "ginto": "Gintu",
             "pilak": "Pilak",
             "damit": "Malan",
             "kamiseta": "Kamiseta",
             "pantalon": "Pantalon",
             "sapatos": "Sapatus",
             "tsinelas": "Chinelas",
             "sumbrero": "Sumbreru",
             "bag": "Bag",
             "payong": "Payung",
             "relo": "Orasan",
             "singsing": "Singsing",
             "hikaw": "Hikaw",
             "kwintas": "Kwintas",
             "pulseras": "Pulseras",
             "mamaya": "Pota",
             "palagi": "Alang patna",
             "kailanman": "Kapilan man",
             "minsan": "Misan",
             "na": "Na",
             "hindi pa": "Ali pa",
             "siguro": "Siguru",
             "dahil": "Uling",
             "akin": "Kakung",
             "iyo": "Kekang",
             "kanya": "Kayang",
             "atin": "Kekatamu",
             "kanila": "Karela",
             "kamitayo": "Ikami",
             "ano pangalan mo": "Nanu lagyu mu",
             "walang anuman": "Alang anuman",
             "paumanhin": "Pakilub",
             "paalam": "Pamagsabi",

             // Batch 205 additions
             "oo naman": "Wapin mu naman",
             "mag-ingat": "Mi-mingat ka / Maningat ka",
             "halika dito": "Memunta keni",
             "pumunta doon": "Lumakad keti / Lumakad ken",
             "maghintay": "Magantabe",
             "huminto": "Tuknang",
             "maglakad": "Lumakad",
             "tumakbo": "Mulayi",
             "kumain": "Mangan",
             "uminom": "Minum",
             "matulog": "Matudtud",
             "gumising": "Migising",
             "umupo": "Lukluk",
             "tumayo": "Tikdo",
             "tumalon": "Lundag",
             "umiyak": "Kumyak",
             "tumawa": "Milaku",
             "kumanta": "Magkanta",
             "sumayaw": "Terak",
             "magbasa": "Magbasa",
             "magsulat": "Magsulat",
             "gumuhit": "Gumuhit",
             "magluto": "Maglutu",
             "linisin": "Linisan",
             "maghugas": "Mamagugas",
             "lumangoy": "Kawe",
             "maglaro": "Mamyalung",
             "manalangin": "Mangadi",
             "mag-aral": "Mamasa",
             "magtrabaho": "Mag-obra",
             "bumili": "Sali",
             "magbenta": "Magtinda",
             "magbayad": "Magbayad",
             "buksan": "Buklat",
             "pauwi na ako": "Pauli na ku",
             "sasali ka?": "Makyabe ka?",
             "sasali ka": "Makyabe ka",
             "ilan yung kulang?": "Pilan ing kulang?",
             "ilan yung kulang": "Pilan ing kulang",
             "magkano yung pamasahe?": "Magkanu ing pamasahe",
             "magkano yung pamasahe": "Magkanu ing pamasahe",
             "ibaba mo ko sa simbahan": "Baba mu ku pisamban",
             "anong oras ka pumupunta?": "Nang oras ka mumunta?",
             "meron kang tag piso?": "Ating kang tya-pesos?",
             "meron kang tag piso": "Ating kang tya-pesos?",
             "may alam ka bang pasyalan?": "Atin kang balung lugal a malyaring puntalan?",
             "may alam ka bang pasyalan": "Atin kang balung lugal a malyaring puntalan?",
             "saan mo ko dadalhin?": "Nukarin mu ku dadalan?",
             "saan mo ko dadalhin": "Nukarin mu ku dadalan?",
             "anong oras may jeep dito?": "Nanu oras ing jeep keni?",
             "anong oras may jeep dito": "Nanu oras ing jeep keni?",
             "sabay mo ako": "Ika kayabe ku",
             "magkano pamasahe papunta ospital?": "Magkanu ing byahe papunta Ospital?",
             "magkano pamasahe papunta ospital": "Magkanu ing byahe papunta Ospital?",
             "ang mahal ng singil mo": "Mahal ya ing bill mu.",
             "malayo ba yung sm clark?": "Marayu ya ing SM Clark?",
             "anong oras ka aalis?": "Nanung oras ka maku?",
             "pupuntahan mo ba ako dito?": "Puntalan muku keni?",
             "hindi mo ba alam yung sinasabi mo?": "Emu balu ing pigaganakan?",
             "antayin mo ako dito": "Panayan muku keni.",
             "saan ka nakatira?": "Nokarin ka makatuknang?",
             "kahit anong oras": "Gang nanung oras",
             "may sasakyan ka ba papunta angeles?": "Atin kang saken papunta Angeles?",
             "bilisan mo mag bihis": "Gilasan mu mamiblas",
             "bilisan mo magbihis": "Gilasan mu mamiblas",
             "gusto ko ng magpahinga": "Bisa nakung paynawa",
             "matagal ka pa?": "Malambat ka pa?"
          }
      },
    
    // Common phrases
    commonPhrases: {
        english: [
            { phrase: "Hello", translation: "Kumusta" },
            { phrase: "Thank you very much", translation: "Dakal a salamat" },
            { phrase: "How are you?", translation: "Komusta ka?" },
            { phrase: "Where is the bathroom?", translation: "Nokarin ya ing banyu?" },
            { phrase: "How much is this?", translation: "Magkanu  ya ini?" },
            { phrase: "I don't understand", translation: "E ku Antindiyan" }
        ],
        tagalog: [
            { phrase: "Kumusta", translation: "Komusta" },
            { phrase: "maraming salamat", translation: " dakal a Salamat" },
            { phrase: "Kumusta ka?", translation: "Komusta ka?" },
            { phrase: "Nasaan ang banyo?", translation: "Nokarin ya ing banyu?" },
            { phrase: "Magkano ito?", translation: "Magkanu  ya ini?" },
            { phrase: "Hindi ko naiintindihan", translation: "E ku Antindiyan" }
        ]
    },
    
    // Food places in Angeles City
    foodPlaces: [
        {
            id: 1,
            name: "Aling Lucing Sisig",
            description: "Home of the original Kapampangan sisig, a sizzling dish made from parts of a pig's head and liver, seasoned with calamansi and chili peppers.",
            address: "L-463 Glaciano Valdez St, Angeles City",
            image: "https://images.squarespace-cdn.com/content/v1/5d7f2d797a64971f017f10ff/1578929893577-QW5D1ADDMDK8QAG1LYZC/Sisig+at+Angeles+1.png",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.6990318670473!2d120.58956931484453!3d15.13376898947092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAling%20Lucing%20Sisig!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
 {
        id: 1,
        name: "Cabalen",
        description: "Famous Filipino buffet offering authentic Kapampangan dishes with a cozy family-style dining experience.",
        address: "SM City Clark, Angeles City",
        image: "https://cabalengroup.ph/wp-content/uploads/2024/09/cabalenstore_3.png",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Cabalen+Clark&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },  
 {
        id: 3,
        name: "Matam-ih Authentic Kapampangan Cuisine",
        description: "A cultural dining experience featuring traditional Kapampangan dishes served in native-style huts.",
        address: "MWG6+3Q7, Clark Freeport, Angeles City",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b2/a0/69/looking-for-authentic.jpg?w=900&h=500&s=1",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Matam-ih+Restaurant+Clark&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 4,
        name: "Cusina de Parilla",
        description: "Grilled Filipino favorites and seafood dishes with a relaxing open-air ambiance.",
        address: "Sto. Rosario St, Angeles City",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRpGp0S1Vlukqoc0ktYdILQo2CIBNJK2hY8e43Q6YgBr9MAlSHUMPZ2fpvH7mMe1oiWjkiC7kOnVoXkl_Jz9NP_bE3IN55kC2Fu73R0U55FLVXhD5a4MCX0_g7yo8wjNUIpDmEzBejpE1n6IxDSx_UXErLIuXxdrqqoAnacdKM4VpetNR8MIIFgeSbaj-k/s4000/20230929_201224.jpg",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Cusina+de+Parilla+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 5,
        name: "19 Copung-Copung Grill",
        description: "A lively grill and restaurant known for its barbecue and native Filipino dishes.",
        address: "Friendship Highway, Angeles City",
        image: "https://lh3.googleusercontent.com/p/AF1QipMIyesEzZ7h5SNDNJJHud1lHwBfJFsHrFTP1K7g=w1024-k",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=19+Copung+Copung+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 7,
        name: "Islas",
        description: "Modern Filipino dining offering a fusion of island flavors and traditional recipes.",
        address: "Clark Freeport Zone, Angeles City",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmL9fNX0ZiVy3ltOYyZqtBoCTqol1vlra0iA&s",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Islas+Clark&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 8,
        name: "15 Seeds",
        description: "Farm-to-table restaurant serving fresh and locally sourced ingredients with a modern twist.",
        address: "Sto. Rosario St, Angeles City",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/68/16/69/photo1jpg.jpg?w=500&h=-1&s=1",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=15+Seeds+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 9,
        name: "Ningnangan Angeles",
        description: "Popular Kapampangan grill and seafood restaurant famous for its large servings and fresh taste.",
        address: "Friendship Highway, Angeles City",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/18/c9/b0/funnside-ningnangan.jpg?w=900&h=500&s=1",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Ningnangan+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 10,
        name: "Bariotico",
        description: "Rustic-style restaurant serving traditional Kapampangan comfort food.",
        address: "Angeles City, Pampanga",
        image: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL1o1UmhSSDZJVHNXa25iYlhTQlhneEEiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Bariotico+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 11,
        name: "Binulo Restaurant",
        description: "Authentic Kapampangan dishes cooked in bamboo, inspired by indigenous Aeta cooking methods.",
        address: "Clark Freeport, Angeles City",
        image: "https://images.squarespace-cdn.com/content/v1/658156be66fdb20ad2bc8bfb/ff3f2b2b-7dad-46ec-b990-299f9659fbe3/DSCF3926.png",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Binulo+Restaurant+Clark&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 12,
        name: "Everybody’s Cafe",
        description: "Historic dining spot offering traditional Kapampangan dishes like morcon, tidtad, and bringhe.",
        address: "Sto. Rosario St, Angeles City",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/3gl-15Nu0WUpEbY8pvVJnQ/348s.jpg",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Everybody%27s+Cafe+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 13,
        name: "Camalig Restaurant",
        description: "A restored heritage building serving Kapampangan-style pizza and local favorites.",
        address: "Camalig St, Angeles City",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/5e/14/1f/front.jpg",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Camalig+Restaurant+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 14,
        name: "Angeles Fried Chicken",
        description: "Classic local fried chicken chain known for its nostalgic flavor and family-friendly dining.",
        address: "Sto. Rosario St, Angeles City",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/KFHF7sU_vZKUvDHKUspDzg/348s.jpg",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Angeles+Fried+Chicken&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 15,
        name: "Mila’s Tokwa’t Baboy",
        description: "Famous for its tokwa’t baboy and crispy sisig, a must-visit for authentic local eats.",
        address: "Santo Domingo, Angeles City",
        image: "https://cdn.tasteatlas.com/images/restaurants/8d280646384b4157849d37642015e56f.jpg?m=facebook",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Mila%27s+Tokwa+t+Baboy+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 16,
        name: "Wooden Table Lutong Bahay - Clark",
        description: "Homestyle Filipino dishes served in a cozy wooden-themed setting.",
        address: "Clark Freeport Zone, Angeles City",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/40/0c/8b/caption.jpg?w=1200&h=1200&s=1",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Wooden+Table+Clark&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 17,
        name: "Amado’s Native Cuisine",
        description: "Casual dining spot offering native Kapampangan and Filipino specialties.",
        address: "Friendship Highway, Angeles City",
        image: "https://img.restaurantguru.com/re53-exterior-Amados-Native-Cuisine.jpg",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Amado%27s+Native+Cuisine+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 18,
        name: "Wishing Well",
        description: "A relaxing spot for dining and drinks, known for live music and Filipino comfort food.",
        address: "Friendship Highway, Angeles City",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACc5krAE58MOA0F1DJjwuLbJgZl9_Xj3jzw&s",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=Wishing+Well+Angeles&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
    {
        id: 19,
        name: "IKABUD",
        description: "Filipino restaurant serving Kapampangan dishes in a family-friendly environment.",
        address: "SM City Clark, Angeles City",
        image: "https://cdn1.i-scmp.com/sites/default/files/styles/700x400/public/2015/05/07/e34678d641cc3f3b1180e1e5d7e88af8.jpg?itok=GwoCVd83",
        mapEmbed: '<iframe src="https://www.google.com/maps?q=IKABUD+Clark&output=embed" width="100%" height="200" style="border:0;" allowfullscreen></iframe>'
    },
 {
    id: 20,
    name: "Susie’s Cuisine",
    description: "Well-loved Kapampangan delicacy shop famous for tibok-tibok, pancit, and kakanin.",
    address: "Sto. Rosario St, Angeles City",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/68/19/47/photo2jpg.jpg?w=1200&h=-1&s=1",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.6787469865117!2d120.5895!3d15.1345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31f91b9c61d%3A0x3a2a69088c9a5f1b!2sSusie%E2%80%99s%20Cuisine!5e0!3m2!1sen!2sph!4v1650000000001!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
   {
            id: 4,
            name: "Bale Dutung",
            description: "Chef Claude Tayag's private dining restaurant offering Kapampangan specialties like kare-kare, sisig, and lechon.",
            address: "Villa Gloria Subdivision, Angeles City",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/47/86/aa/20180812-122509-largejpg.jpg?w=800&h=500&s=1",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.9!1d120.58!3d15.135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sBale%20Dutung!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        }
    ],
    
    // Attractions in Angeles City
    attractions: [
        {
            id: 1,
            name: "Clark Museum and 4D Theater",
            description: "Museum showcasing the rich history of Clark from the American period to the present day, with a 4D theater experience.",
            address: "Clark Freeport Zone, Angeles City",
            image: "https://southluzon.politiko.com.ph/wp-content/uploads/2015/08/politiko_clarkFreePort.jpg",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.5!1d120.52!3d15.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sClark%20Museum!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
{
    id: 151,
    name: "Dinosaurs Island",
    description: "A dinosaur-themed park featuring life-sized animatronic dinosaurs, fossil displays, and a fun educational experience for all ages.",
    address: "Clark Freeport Zone, Pampanga",
    image: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1632482977/blog/oxh1zcr2lhotpxvxta5q.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 152,
    name: "Clark Parade Grounds",
    description: "Open field and jogging area perfect for sports events, festivals, and family picnics in Clark Freeport Zone.",
    address: "Clark Freeport Zone, Pampanga",
    image: "https://www.hannresorts.com/wp-content/uploads/2024/01/PARADE-GOUNDS-1600x900.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 153,
    name: "Astro Park",
    description: "Also known as Bayanihan Park, this public park features a large field, playgrounds, and cultural landmarks.",
    address: "MacArthur Highway, Balibago, Angeles City, Pampanga",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/54/c1/9c/photo1jpg.jpg?w=900&h=500&s=1",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 154,
    name: "Insectlandia",
    description: "An interactive park showcasing giant insect replicas, ideal for kids and nature lovers.",
    address: "Clark Freeport Zone, Pampanga",
    image: "https://clarklandph.com/wp-content/uploads/2024/05/inner-bugs-kingdom-scaled.webp",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 155,
    name: "Clark Safari and Adventure Park",
    description: "Wildlife and adventure park featuring exotic animals, safari rides, and family attractions.",
    address: "Clark Freeport Zone, Pampanga",
    image: "https://metroclarkguide.com/wp-content/uploads/2021/12/image-5-e1639366435488.jpeg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 156,
    name: "Museu ning Ángeles",
    description: "Cultural museum preserving the history and heritage of Angeles City, located in a restored Spanish-era building.",
    address: "Sto. Rosario St, Angeles City, Pampanga",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7a/10/cd/20170209-130229-largejpg.jpg?w=1200&h=-1&s=1",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 157,
    name: "Center for Kapampangan Studies",
    description: "Research and cultural center showcasing Kapampangan heritage, arts, and literature inside Holy Angel University.",
    address: "Holy Angel University, Sto. Rosario St, Angeles City, Pampanga",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/99/3a/cd/retablo.jpg?w=1200&h=-1&s=1",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 158,
    name: "Clark Air Base Bicentennial Park and Recreation Area",
    description: "Scenic park in Clark featuring open spaces, bike paths, and relaxing picnic spots under tall trees.",
    address: "Clark Freeport Zone, Pampanga",
    image: "https://gttp.images.tshiftcdn.com/378723/x/0/bicentennial-park",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 160,
    name: "Zoocobia Fun Zoo",
    description: "Family-friendly zoo featuring animal encounters, fun rides, and educational tours.",
    address: "Clark Freeport Zone, Pampanga",
    image: "https://www.zoomanity.com.ph/wp-content/uploads/2017/07/Zoocobia-1-768x431.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 161,
    name: "Air Force City Park",
    description: "Public park showcasing real aircraft displays, picnic areas, and wide open fields.",
    address: "Andres Bonifacio Ave, Clark Freeport Zone, Pampanga",
    image: "https://static.where-e.com/Philippines/Central_Luzon_Region/Pampanga/Air-Force-City-Park_4cda214d9f2ad184eeb1351539cfd51f.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 162,
    name: "Clark Nature Park, Incorporated",
    description: "Nature reserve area promoting eco-tourism, with lush greenery, trails, and local wildlife.",
    address: "Clark Freeport Zone, Pampanga",
    image: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzc1VjQ5Qmg3UktlMUljTm83c2dCWUEiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 163,
    name: "Koreatown, City of Angeles",
    description: "Vibrant Korean district filled with authentic restaurants, cafés, and nightlife options.",
    address: "Friendship Highway, Angeles City, Pampanga",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Korea_Town_of_Angeles_City%2C_Pampanga.jpg/1200px-Korea_Town_of_Angeles_City%2C_Pampanga.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 164,
    name: "Red Street",
    description: "Popular nightlife and entertainment street in Angeles City, known for bars and music venues.",
    address: "Fields Avenue, Balibago, Angeles City, Pampanga",
    image: "https://blueforestonwetboots.com/app/uploads/2018/09/Walking-Street.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 165,
    name: "MarQuee Park",
    description: "Urban park near Marquee Mall, featuring landscaped walkways, play areas, and outdoor events.",
    address: "Ayala Marquee Mall, Angeles City, Pampanga",
    image: "https://api.ayalamalls.com/api/cms-content/resources/image/wc-cms-00a22740-5dad-4dcc-b9ad-94b57c1e8a89.png",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 134,
    name: "The Infinity Active Park",
    description: "A modern recreational park inside The Infinity, Angeles City, featuring open spaces, jogging paths, sports facilities, and event areas for the community.",
    address: "The Infinity, Fil-Am Friendship Highway, Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTc_iE30nzrRripnJrdKmq5MsRJ-23eSvig&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.014995953714!2d120.56294527479983!3d15.169758385554314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2eb31d6b0b3%3A0xf1428b8a0a7c99f2!2sThe%20Infinity%20Angeles!5e0!3m2!1sen!2sph!4v1697000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
},
{
    id: 168,
    name: "Bale Matua ni Don Angel",
    description: "Historical house of Don Angel Pantaleon de Miranda, founder of Angeles City.",
    address: "Sto. Rosario, Angeles City, Pampanga",
    image: "https://s3.ap-southeast-1.amazonaws.com/gounesco.com/wp-content/uploads/2018/02/10110012/2018-02-10_5a7e833d5dadd_5balematua-min.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 169,
    name: "PAGCOR Angeles",
    description: "Casino and entertainment complex offering gaming, dining, and nightlife experiences.",
    address: "MacArthur Highway, Balibago, Angeles City, Pampanga",
    image: "https://iorbitnews.com/wp-content/uploads/2020/07/CF-Angeles-Facade-2.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 170,
    name: "Angeles Plaza",
    description: "Public plaza located in the heritage district, surrounded by historic structures and local shops.",
    address: "Sto. Rosario, Angeles City, Pampanga",
    image: "https://citiesinvestmentfacility.org/wp-content/uploads/2021/06/4-scaled-1.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
{
    id: 171,
    name: "Archdiocesan Shrine of Christ Our Lord of the Holy Sepulcher (Apu Mamacalulu Shrine)",
    description: "Famous Catholic shrine in Angeles City, home to the revered image of Apu Mamacalulu, a central figure in Kapampangan faith.",
    address: "Santo Entierro St, Angeles City, Pampanga",
    image: "https://static.where-e.com/Philippines/Central_Luzon_Region/Archdiocesan-Shrine-Of-Christ-Our-Lord-Of-The-Holy-Sepulcher-Apu-Mamacalulu-Shrine_500ad8510034223f08899d2d6bad8bc4.jpg",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
},
       {
            id: 2,
            name: "Nayong Pilipino Clark",
            description: "Cultural theme park featuring replicas of famous Philippine landmarks and showcasing Filipino culture and heritage.",
            address: "Clark Freeport Zone, Angeles City",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/4f/da/9c/nayong-pilipino.jpg?w=1200&h=-1&s=1",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.4!1d120.53!3d15.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sNayong%20Pilipino!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 3,
            name: "Holy Rosary Parish Church",
            description: "Historic church built in 1877, also known as Santo Rosario Church, featuring Spanish colonial architecture.",
            address: "Santo Rosario St, Angeles City",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/37/79/4a/photo5jpg.jpg?w=1200&h=-1&s=1",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.7!1d120.59!3d15.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sHoly%20Rosary%20Parish%20Church!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 4,
            name: "Aqua Planet",
            description: "One of the largest water theme parks in Southeast Asia with various water slides and attractions.",
            address: "Clark Freeport Zone, Mabalacat, Pampanga",
            image: "https://i0.wp.com/awesome.blog/wp-content/uploads/2018/04/Aqua-Park-1.jpg?fit=2000%2C1500",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.3!1d120.54!3d15.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAqua%20Planet!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        }
    ],
    
    // shopping places in Angeles City
    shoppingPlaces: [       
 {
    id: 157,
    name: "Jhona’s Pasalubong Center",
    description: "Local pasalubong center offering classic Pampanga sweets, souvenirs, and gift items — perfect for visitors looking for local delicacies.",
    address: "Angeles City, Pampanga (check exact branch/address)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80yXLzsHZLZTG3ldMOQyPPS-IBIsw_f3l-A&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_JHONAS" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 158,
    name: "Personalized Souvenirs PH",
    description: "Custom and personalized souvenir shop — name-engraved items, shirts, mugs and locally themed keepsakes.",
    address: "Angeles City / Clark area (confirm exact address)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVTCoPwy0VQyjVpyVhI20wcALkWlYX7uv5Q&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_PERSONALIZED_SOUS" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 159,
    name: "Sang Shop",
    description: "Small boutique selling souvenir items, snacks, and regional gift items favored by locals and tourists.",
    address: "Angeles City / Clark (confirm address)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8GavMA822P9EiXB4uwWzMn0GEDaPW0Xllw&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_SANGSHOP" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 160,
    name: "Kuya David's Bibingka And Pasalubong",
    description: "Traditional bibingka maker and pasalubong shop — local rice cakes, sweets, and packaged treats ideal for bringing home.",
    address: "Angeles City / Pampanga (confirm exact location)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69OJi7AiHyLfJpvl9n1gWsJkB_kNrtolX2Q&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_KUYA_DAVID" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 161,
    name: "Tlm Pasalubong Shop & Chocolate store",
    description: "A combined pasalubong and specialty chocolate store offering local confections and giftable chocolate boxes.",
    address: "Angeles City / Clark (confirm address)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaovfr08yYL5ZIpbdnKMFUaoL2Ftx5Cp07GA&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_TLM" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 162,
    name: "Canicaras Pasalubong",
    description: "Pasalubong shop focusing on regional specialties and homemade snacks; good for traditional sweet treats and delicacies.",
    address: "Angeles City / Pampanga (confirm exact location)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8PFRd7BvI1ZnSTIHs3Z8MaKKoquYalHPVg&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_CANICARAS" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 163,
    name: "Carreon Sweets and Pastries",
    description: "Local bakery known for sweets and pastries — a go-to for freshly made kakanin and gift boxes for pasalubong.",
    address: "Angeles City / Pampanga (confirm exact location)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZbhkZUD55KVoZ09AjfF3gc965FSVdqti8Rw&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_CARREON" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 166,
    name: "Kultura Filipino - Clark, The SM Store",
    description: "Kultura Filipino boutique inside SM Store in Clark selling locally made crafts, apparel, and Filipino-themed souvenirs.",
    address: "SM Clark / The SM Store - Clark Freeport Zone (confirm floor/section)",
    image: "https://cdn.shopify.com/s/files/1/0286/9438/0653/files/Kultura_landscape.jpg?v=1751627689?height=628&pad_color=fff&v=1614369365&width=1200",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_KULTURA_CLARK" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 167,
    name: "Mariel’s Pasalubong",
    description: "Family-owned pasalubong business offering assorted local snacks, preserved products, and sweets packaged for gifting.",
    address: "Angeles City / Pampanga (confirm address)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNokr1-YP8byFWzpDLCI8iIQJf9Pwd9psOkg&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_MARIELS" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 168,
    name: "BK Souvenir Shop",
    description: "Souvenir store selling shirts, keychains, fridge magnets and local handicrafts — a convenient stop for quick pasalubong.",
    address: "Angeles City / Clark area (confirm exact location)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtw1YAl9Ohxprb4EmAWzEcU7gx33ekhoCQgA&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_BK_SOUP" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
  {
    id: 169,
    name: "Traditional General Merchandise",
    description: "General merchandise store carrying affordable gift items, local snacks, and everyday pasalubong products.",
    address: "Angeles City, Pampanga (confirm exact address)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8203R0LfVpc_iMw_a397VffY6UfolDbfSyA&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_TRAD_GENERAL" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
  },
 
  {
    id: 171,
    name: "Three E's Toys and Candy Store",
    description: "Toys and candy shop that also sells small pasalubong items — candies, chocolate, and kid-friendly souvenirs.",
    address: "Angeles City / Clark (confirm exact location)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7BnJ-wVIbBNWpn0xkR03ZG9OioAVCsEEhA&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=PLACEHOLDER_THREEES" width="100%" height="200" style="border:0;" allowfullscreen loading="lazy"></iframe>'
 }
    ],

       
    
    // Emergency information
    emergencyInfo: [
        {
            id: 1,
            name: "Angeles City Police Station",
            description: "Main police station serving Angeles City for emergency assistance and security concerns.",
            contact: "045-322-2560",
            address: "Jesus St, Angeles City",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVB1p94DX3vKvjJzEGTkAdeHOgaM_wQ7DbQ&s",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.7!1d120.59!3d15.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAngeles%20City%20Police%20Station!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
{
    id: 153,
    name: "Angeles City Disaster Risk Reduction and Management Office (Pulung Maragul)",
  contact: "(045) 322 7796",
    description: "The official office responsible for coordinating disaster preparedness, emergency response, and recovery operations across Angeles City.",
    address: "Pulung Maragul, Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpMbZVFFVCKFqXltRJBCvdY69a7DHGeegJg&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 154,
    name: "PDRF Emergency Operations Center - Clark",
    description: "A state-of-the-art emergency operations center by the Philippine Disaster Resilience Foundation, providing 24/7 monitoring and coordination for disaster response in Clark and nearby areas.",
  contact:"(02) 8844 2700",
    address: "Clark Freeport Zone, Pampanga",
    image: "https://www.arcgis.com/sharing/rest/content/items/43dd9fb5f8ee4d2489995bc934e9de0c/resources/images/widget_14/1720143862184.png",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 155,
    name: "CDC Fire Department (Sergio Osmeña Street, Clark)",
    description: "Clark Development Corporation’s Fire Department ensures safety and emergency fire response within the Clark Freeport Zone.",
   contact:"(045) 599 2070",
    address: "Sergio Osmeña Street, Clark Freeport Zone, Angeles City, Pampanga",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Bureau_of_Fire_Protection.png",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 156,
    name: "Angeles City Central Fire Station (Pulung Maragul)",
    description: "The main fire station serving the Angeles City area, providing emergency fire and rescue services 24/7.",
    address: "Pulung Maragul, Angeles City, Pampanga",
    contact:"(02) 8844 2700",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jya_aHAVS1W8ip-QmY2yRVLuUp0ePISXNA&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 158,
    name: "Angeles Police Station 3",
    description: "Local police station ensuring safety, law enforcement, and peacekeeping operations in its assigned barangays.",
  contact:"(045) 322 3877",
    address: "Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVJ937JYm51zoxlGvcd--YGqAaLgsgpA_jA&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 159,
    name: "Police Station 2",
  contact:"+63 998-9673-316",
    description: "Responsible for maintaining order and safety in the northern districts of Angeles City.",
    address: "Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLTBi4vkw6ngsdVg1Da1pnroPmTNev2K_gA&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 160,
    name: "Angeles City Police Station 6",
  contact: "(045) 625 2660",
    description: "A local police branch serving the outer barangays of Angeles City with dedicated patrol and community safety programs.",
    address: "Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgf1Zwn5LLvosvb136yr_MAeYpY-uJpnRPw&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 161,
    name: "Police Station 4",
    description: "Ensures peace and security in key residential and commercial zones of Angeles City.",
  contact:"(045) 322 2146",
    address: "Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vGv7XKWZnzYSJvcDcxdD6aPVwNP70DYBA&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 162,
    name: "Maxicare Primary Care Clinic - Clark Pampanga",
    description: "A modern healthcare facility providing primary and preventive care services for Maxicare members and the public.",
  contact:"(045) 599 8392",
    address: "SM City Clark, Angeles City, Pampanga",
    image: "https://www.maxicare.com.ph/wp-content/uploads/2022/05/Maxicare-PCC-Logo-with-tagline-1.png",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 163,
    name: "Our Lady of Mt. Carmel Medical Center - Clark",
    description: "A full-service hospital offering emergency, surgical, and specialty medical services located within the Clark area.",
  contact:"0918 936 8624",
    address: "Clark Freeport Zone, Pampanga",
    image: "https://olmcmc.com/assets/img/logo-secondary.png",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 164,
    name: "PRI Medical Center",
    description: "A private healthcare center providing general and specialized medical services to residents of Angeles City and nearby towns.",
  contact: "+63 917 180 8886",
    address: "Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYPKkWEVbywzgFDoOtFOTCaU_Vkqqj-rQ4Q&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 165,
    name: "St. Catherine of Alexandria Foundation and Medical Center, Inc.",
    description: "A trusted healthcare institution in Angeles City, known for its compassionate care and accessible medical services.",
  contact: "0998 972 0204",
    address: "Sto. Domingo, Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyIYfWzkebQwVZ2icQxsitAkRaZ5nzUtyYw&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 166,
    name: "Rafael L. Lazatin Memorial Medical Center",
    description: "The primary public hospital of Angeles City providing affordable healthcare and emergency services for residents.",
   contact: "045-625-2999",  
  address: "Pampang, Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAS8b6XjVGhfxVGcVbOYLnThqxRGmeweDXg&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 167,
    name: "Dr. Armando L. Garcia Medical Center",
    description: "A multi-specialty hospital offering quality healthcare services and modern facilities in Angeles City.",
    contact: "045-625-2999",
  address: "Angeles City, Pampanga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7B1HMKsAYeXqLfNHFJLdk3YH34GV24JNUtw&s",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 168,
    name: "Angeles Medical Center Inc.",
    description: "One of Angeles City's long-standing hospitals providing comprehensive diagnostic and inpatient services.",
    address: "MacArthur Highway, Angeles City, Pampanga",
    contact: "045-625-2999", 
  image: "https://d2q79iu7y748jz.cloudfront.net/s/_logo/31f8d161252a331a6311758668dffbb0",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 169,
    name: "The Medical City Clark",
    description: "A world-class healthcare facility offering advanced diagnostic, surgical, and emergency care in Clark Global City.",
 contact: "045-625-2999",
   address: "Clark Global City, Mabalacat, Pampanga",
    image: "https://www.themedicalcityclark.com/wp-content/uploads/2021/01/tmclgo1.png",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},  
      {
            id: 2,
            name: "Angeles University Foundation Medical Center",
            description: "Full-service hospital providing emergency medical care and other healthcare services.",
            contact: "045-625-2999",
            address: "MacArthur Highway, Angeles City",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZkq3_Rh16wmvSFpByW5S9dozwRxC7L-VbQ&s",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.8!1d120.58!3d15.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAngeles%20University%20Foundation%20Medical%20Center!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },        
        {
            id: 4,
            name: "Tourist Police Unit",
            description: "Specialized police unit assisting tourists with safety concerns and emergency situations.",
            contact: "045-892-2222",
            address: "Clark Freeport Zone, Angeles City",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2PJHQu2rh-pos0SHRpcRi4ff5OG49YcaBQ&s",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.5!1d120.52!3d15.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sTourist%20Police%20Unit!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        }
    ],
    // Transportation options
    transportation: [      
        {
        id: 1,
        name: "C’POINT - BALIBAGO - H’WAY (GREY)",
        description: "Runs from Checkpoint to Balibago and Highway, providing access through major Angeles City roads.",
        fare: "₱11-12 (PWD/Student/Senior) | ₱13 Regular",
        image: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/584376938_1130516655906573_3350673000795791760_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqdTx5hjkYhyu7w0oTjik5GH4k623UploYfiTrbdSmWrhGHl5hhEciIA_txXbcGxOwT2KDBbYNqqI3u9gbWpPU&_nc_ohc=VfaVJC3NX8UQ7kNvwHD-Bwm&_nc_oc=AdmTOvJhB9tXAxM7hXZJ56yUzxB8_I1rpd3-UXi2wrCqH2xNdsHv1UsD5uRhXK1UZy4&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=4vEkQ3Dac6Me3qbcbn17uw&oh=00_AfhiircOe3u8HW4JECq7mgPYIDfI6GaWVVL_lwPdka9dKg&oe=6923B846",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAngeles%20City!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
  {
        id: 2,
        name: "CHECKPOINT - HOLY - HIGHWAY (LAVENDER)",
        description: "Connects Checkpoint to Holy and Highway area. Ideal for students and workers heading to Holy Angel University and Balibago.",
        fare: "₱11-12 (PWD/Student/Senior) | ₱13 Regular",
        image: "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/585509813_1130516825906556_4166962718506556125_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGp-D3TB8AhM63INbdlQLil28E44y541kvbwTjjLnjWS5BurUETojPByMTEoIKA4sCdgSS_nPhA2JdTyEQRiq5M&_nc_ohc=Upvyj2ywpegQ7kNvwE41bKS&_nc_oc=AdllU_CLhw7gxSjHVSesPhktj_2aaZigdaHy087AMVwrGaWuJYCekQYFl7zTIAVTPig&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=FvoeEiy1xBop4_0ZLP3nig&oh=00_AfgNSQwOgADCY2ki2-bT9Yx9bGsXv50jdZwdI1T--d1_xQ&oe=6923A205",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sHoly%20Angel%20University!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 3,
        name: "SAPANG BATO - ANGELES (MAROON)",
        description: "Connects Sapang Bato to central Angeles City. Commonly used by locals and students.",
        fare: "₱11 (PWD/Student/Senior) | ₱13 Regular",
        image: "https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/585298301_1130516682573237_6634679567633315830_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUVvo1Z5DUN0xmzGiXew82hjEcuuXlLQmGMRy65eUtCYYli1HLTDqsfcUmPfgNq7aCbVAlYijjO6y5Y97HLQYs&_nc_ohc=UErN7_-j4v4Q7kNvwGq0EmP&_nc_oc=AdlEyBC27cZUrt-Z_RA08eSCm9MeF09yHzaXuEe7ZzwXjLEgA_aIqNpgmHMIkIDbRQg&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=WUJ8SPmpjutjIS7hVsodWg&oh=00_AfiaMoI4L8qTzuHjS2hEww-962zVIka01OMzHir3UNlt3g&oe=69239C09",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sSapang%20Bato%2C%20Angeles!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 4,
        name: "MAIN GATE - FRIENDSHIP (SAND)",
        description: "Covers the route from Main Gate to Friendship, passing major establishments and schools. (Until Jollibee only)",
        fare: "₱11 Student | ₱12 Regular",
        image: "https://c8.alamy.com/comp/2BP7JCA/classic-jeepneys-sat-at-the-main-bus-stop-in-angeles-city-luzon-philippines-2BP7JCA.jpg",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sFriendship%20Highway%2C%20Angeles!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 5,
        name: "CHECKPOINT - HENSONVILLE - HOLY (WHITE)",
        description: "Provides access from Checkpoint to Hensonville and Holy area. Convenient for commuters along Friendship road.",
        fare: "₱11 (PWD/Student/Senior) | ₱13 Regular",
        image: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/585314817_1130516635906575_7041209087187505068_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFRWLDWlNTbUo4bk8XQRVcAd9NK_dmPB9F300r92Y8H0Yo5C_V2S1YeIxSWnMLUqodNYDDA7amFBiY8hJDtA2aB&_nc_ohc=LjY_kluN-gEQ7kNvwHBKT1T&_nc_oc=Admjn48-breibyc31ZMBQ5CEBuCZlVBBhJhvM7vhOeSZPdKGjdmalg1MLW-H5j6ayIE&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=oQSzQoSi2Fq-y4aP8Gc2Xg&oh=00_AfiSfPmoU1n3ZvlsZCOUgZxvajLYO4NJBG1Vq7xRhCZa2A&oe=6923C002",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sHensonville%20Plaza!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 6,
        name: "SM CITY - MAIN GATE - DAU (VARIOUS)",
        description: "Jeepneys connecting SM City Clark to Dau Terminal via Main Gate. Ideal for shoppers and commuters.",
        fare: "₱12 Student | ₱13 Regular",
        image: "https://c8.alamy.com/comp/2BP7B86/classic-jeepneys-sat-at-the-main-gate-bus-terminal-in-angeles-city-luzon-philippines-2BP7B86.jpg",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sDau%20Terminal!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 7,
        name: "MARISOL - PAMPANGA (GREEN)",
        description: "Connects Marisol Subdivision to Pampanga area. Common for students and employees commuting to the city.",
        fare: "₱11 (PWD/Student/Senior) | ₱13 Regular",
        image: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/584624430_1130516355906603_358163554670594799_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdPoqV_Al3OoOIGr3avEBJWLkD_dn13F9YuQP92fXcX42hhnL-aI7CxLpcBqFw1LdmL1pU5pRekx1nEjW-7PSG&_nc_ohc=pv4u77U8_oMQ7kNvwFE6_wH&_nc_oc=Adm2vKXgWLROqVWNEFZfbWMu6guZeylMU6UMMKSMx5WxOJbL59YrI0syUKjQoDeJd0A&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=m8fThKG1Eo6QGW5QowM75A&oh=00_AfjLSM0hxsoR7xbFk7ype26WWiV7A5mfkguZA63xoIvCwA&oe=6923ABBA",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sMarisol%20Subdivision!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 8,
        name: "PANDAN - PAMPANGA (BLUE)",
        description: "Covers the Pandan to Pampanga route, connecting communities and major stops around Angeles City.",
        fare: "₱11 (PWD/Student/Senior) | ₱13 Regular",
        image: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/587115184_1130516789239893_5654805562045861710_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9__yeEeONzB6YHOx4zWU1wio_xAVLnzbCKj_EBUufNiSvXpTwTF1XiLR1BHvhMXJqPDeAhtF4eYCAKUIVFCua&_nc_ohc=ahCfLHiZIBsQ7kNvwGPW_t2&_nc_oc=Adl1qMFdpPqJSbs8BtH1STsgUBuNpj-LBTSAxr2x0X8tkaQmKihYRaR2eZCnG_wVyL0&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=kMXjmTGopOXWR8tYhQYLAQ&oh=00_Afg87L5KAXeGOCjTPGN6BKs-i67S4JeOyF5JTQbHwbUgcA&oe=69239DBA",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sPandan%2C%20Angeles!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 9,
        name: "SUNSET - NEPO (ORANGE)",
        description: "Jeepney line covering Sunset Subdivision to Nepo area. Serves residents and shoppers.",
        fare: "₱11 (PWD/Student/Senior) | ₱13 Regular",
        image: "https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.6435-9/82443182_173261807352883_7579927600181542912_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF74XcnygjYWm3tiJv0UL14mg5adgjcT5OaDlp2CNxPkxgogwgR0dreXrxaUh8jy2QKk28RpNqPQiQ0z_pWyzDm&_nc_ohc=PEr2DkMhVEQQ7kNvwEFXEQt&_nc_oc=AdngorEiWvOG6Xnf-9HAL2LcmX8aiRkahTPMDWeLv0rvYcvdPK2LA7CDx3kOYXwgRVQ&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=h3eWqgBjbaXkvUjeUiWkUw&oh=00_Afi6ns4EDVwr3WbX-r-OPZ9wVnPFNZIFaUjpvJWiYMnR8g&oe=692EE966",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sNepo%20Mart%2C%20Angeles!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 10,
        name: "VILLA - PAMPANG SM TELABASTAGAN (YELLOW)",
        description: "Links Villa to SM Pampanga and Telabastagan, passing major establishments and residential areas.",
        fare: "₱11 (PWD/Student/Senior) | ₱13 Regular",
        image: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/584525985_1130516695906569_8435471437796271265_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyuKEFFwJzX0Z4eZ1Q_-LWibJldNE9JneJsmV00T0md9onVoJQ0lsl6Iuwo7AwH15dXMWyB0efQAWDWW5bQ2za&_nc_ohc=1qOa48xs3gEQ7kNvwEX5L79&_nc_oc=AdmvGNpGy1FnDHZcRwYjrjnQ07K48HnOrA24doORWc2051hY5NjjzrNFG3LyaDr5DME&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=c1YSfxJ0tyIQn9OCzyOt9w&oh=00_Afh3lo5aZsUnCM1he0_b_Vw6lxZHNcUM10a-SlbgrTriNg&oe=69239E3A",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sTelabastagan%2C%20San%20Fernando!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 11,
        name: "CAPAYA - ANGELES (PINK)",
        description: "Connects Capaya area to central Angeles City. Frequently used by daily commuters.",
        fare: "₱11 (PWD/Student/Senior) | ₱13 Regular",
        image: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/584670641_1130516729239899_22408189973545606_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF39VgmlbM5dobyC2zGdIP7HImp3c58BfUciandznwF9TTZdNsRsvZl2f2ZoZPH3TMxeUZ3Ynd-shQY8xVfRS_1&_nc_ohc=FjbsHdAbiqQQ7kNvwFBAwMZ&_nc_oc=AdkJJEcrQj5NOxiD1hUNNq9jWaLlFRmitrV5Bmn9C1uXvYVVLKXjOOtfaMP3hLKGCyI&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=kgzSfwSMriI7c8URqpUhTg&oh=00_AfgAvC3lYmb0UXU2m4beB5KEqwjvdLi2dnl8pyPL4kAksQ&oe=69252363",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sCapaya%2C%20Angeles!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 12,
        name: "SAN FERNANDO - DAU - EXPRESSWAY (SAN FERNANDO - ANGELES)",
        description: "Long-distance route connecting San Fernando, Angeles, and Dau through the expressway.",
        fare: "₱40 Student | ₱45 Regular",
        image: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/585392397_1130516745906564_3182418920052646092_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEHuP4bpekdhgXFkkBpNbyDLZ8iX_k4xxYtnyJf-TjHFrTiKavD7_X2_CDKH10KNUejZG0nf01ijaQaSLyBZ8oI&_nc_ohc=I0I_GQHbTqsQ7kNvwFAFAqq&_nc_oc=AdkaD7ejcS7F9bNCDVR-a4Fd81JxsQQQdHbA5l14FRisBuN2mZ-wv3YwoJkGmMBg2Xo&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=eNjzyYn_COHkIpv6BORIfA&oh=00_AfgUdvIOxr3eYd-4I0-3yfhYDwSHeZgHXf7dtLJ43lSl-Q&oe=6923C5A3",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sSan%20Fernando%20City!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    {
        id: 13,
        name: "TELEBASTAGAN - SAN FERNANDO",
        description: "Provides connection between Telabastagan and San Fernando, a busy route for students and workers.",
        fare: "₱11-12 Student | ₱13-45 Regular",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/0673jfSanto_Domingo%2C_Angeles_City%2C_Pampanga_Jeep_Transport_Terminalfvf_27.jpg/1280px-0673jfSanto_Domingo%2C_Angeles_City%2C_Pampanga_Jeep_Transport_Terminalfvf_27.jpg",
        mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sTelabastagan%2C%20San%20Fernando!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
{
    id: 14,
    name: "MARQUEE - SAN FERNANDO",
    description: "Connects Marquee Mall to San Fernando. Comfortable route for mall-goers and city workers traveling between the two cities.",
    fare: "₱56 Minimum Fare",
    image: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/585887109_1130516715906567_4403622167692105030_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG28xNXFGIxfxM9b1KOga5acOq-4ezmLMZw6r7h7OYsxmfl9k4nbWeZREKJyVh9TbZ5ma-ilrZDwD3Px5GHbWiu&_nc_ohc=6OFbkPBAnZ8Q7kNvwFCBL-w&_nc_oc=AdkVRuHtiHMwKpeNktuMWg6IpozoCmZ77A6h9qhMXp-KerShHUo7RjtgCt4lypvAk8w&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=FIuc_ya8xxsLfHnal1jZLw&oh=00_AfifT7iCdxdfT3loODZgEJl0GQjVReQfC8vKKnM0yRVSKA&oe=6923962B",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61630.92!2d120.674!3d15.073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31970a82f4f%3A0xcea4d1f4e29ec0b1!2sMarquee%20Mall%2C%20Angeles%20City!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
},
{
    id: 15,
    name: "XEVERA MABALACAT - ASTRO (VARIOUS)",
    description: "Covers the Mabalacat City route connecting Xevera and Astro, serving students, workers, and commuters within the city.",
    fare: "₱11-23 (PWD/Student/Senior) | ₱13-25 Regular",
    image: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/585577291_1130516615906577_7594016312775111557_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGIIQ7Fh6-RK6i581haOXhos9uKIHCwNXWz24ogcLA1dZMcHvNOS-Ph2NVdc_6-a0nhjirZLm9V_8hUdiDiYvr_&_nc_ohc=bE0yhUouexsQ7kNvwFfoEes&_nc_oc=AdneW8incPDwbCE41Ci9J2s5QdifHjk80lL6JvSRlHiMJNajYYkmMjBfR6CAjfR2f1E&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=mIheL98FzmY8gYjwKHUM4g&oh=00_Afh2IggVtFBulMRZoQ7R4m3ScXtGMcx4CHqgwcB7SSmPrQ&oe=6923A5BE",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61631.17!2d120.589!3d15.223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3b3c4d4c9a1%3A0x3dbadf!2sXevera%20Mabalacat!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
        {
            id: 3,
            name: "Grab",
            description: "Ride-hailing service available in Angeles City. Convenient for direct travel to specific destinations.",
            fare: "Varies by distance (₱100-300 for most city trips)",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/92/1a/47/921a4768-28b4-597c-7b12-b9c4cfc47b3b/GrabIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/1200x630wa.png",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAngeles%20City%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        },
        {
            id: 4,
            name: "P2P Buses",
            description: "Point-to-Point buses connecting Angeles City to Metro Manila and Clark International Airport.",
            fare: "₱150-250 per trip",
            image: "https://bustickets.ph/wp-content/uploads/2020/07/genesis-bus.jpg",
            mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61628.77!1d120.59!3d15.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f31e7c0eda7b%3A0x1c0f7a8c4c7de2a0!2sAngeles%20City%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        }
    ]
};

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Translator elements
    const fromLanguage = document.getElementById('from-language');
    const toLanguage = document.getElementById('to-language');
    const inputText = document.getElementById('input-text');
    const translateBtn = document.getElementById('translate-btn');
    const outputText = document.getElementById('output-text');
   
    const copyBtn = document.getElementById('copy-btn');
    const swapBtn = document.querySelector('.swap-btn');
    const phraseList = document.querySelector('.phrase-list');
    
    // Modal elements
    const modal = document.getElementById('detail-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Initialize the app
    initApp();
    
    function initApp() {
        // Set up navigation
        setupNavigation();
        
        // Set up translator
        setupTranslator();
        
        // Populate content sections
        populateFoodSection();
        populateAttractionsSection();
        populateShoppingSection();
        populateEmergencySection();
        populateTransportationSection();
        
        // Set up modal
        setupModal();
    }
    
    function setupNavigation() {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all nav items
                navItems.forEach(nav => nav.classList.remove('active'));
                
                // Add active class to clicked nav item
                item.classList.add('active');
                
                // Show corresponding content section
                const tabId = item.getAttribute('data-tab');
                contentSections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === tabId) {
                        section.classList.add('active');
                    }
                });
            });
        });
    }
   
    function setupTranslator() {
        // Populate common phrases
        updatePhraseList();
        
        // Handle language change
        fromLanguage.addEventListener('change', () => {
            updatePhraseList();
            // Ensure a supported target when Tagalog is the source
            if (fromLanguage.value === 'tagalog' && toLanguage.value === 'tagalog') {
                toLanguage.value = 'kapampangan';
            }
        });
        
        // Handle translate button click
        translateBtn.addEventListener('click', translateText);
        
        // Handle swap button click
        swapBtn.addEventListener('click', swapLanguages);
        
        // Handle speak button click
       
        
        // Handle copy button click
        copyBtn.addEventListener('click', copyTranslation);
    }
    
    function updatePhraseList() {
        // Clear existing phrases
        phraseList.innerHTML = '';
        
        // Get phrases based on selected language
        const selectedLanguage = fromLanguage.value;
        const phrases = selectedLanguage === 'english' ? 
                        appData.commonPhrases.english : 
                        appData.commonPhrases.tagalog;
        
        // Add phrases to the list
        phrases.forEach(item => {
            const phraseItem = document.createElement('div');
            phraseItem.className = 'phrase-item';
            
            const phraseText = document.createElement('div');
            phraseText.className = 'phrase-text';
            
            const originalPhrase = document.createElement('p');
            originalPhrase.textContent = item.phrase;
            
            const translatedPhrase = document.createElement('p');
            translatedPhrase.textContent = item.translation;
            
            phraseText.appendChild(originalPhrase);
            phraseText.appendChild(translatedPhrase);
            
           
            
            phraseItem.appendChild(phraseText);
            
            
            // Add click event to use this phrase
            phraseItem.addEventListener('click', () => {
                inputText.value = item.phrase;
                translateText();
            });
            
            phraseList.appendChild(phraseItem);
        });
    }

    // More forgiving matching: case-insensitive, punctuation-insensitive
    function normalizeKey(str) {
        return (str || '')
            .toLowerCase()
            .replace(/[\u2018\u2019\u201C\u201D]/g, '') // curly quotes
            .replace(/[.,!?;:()"'`]/g, '') // punctuation
            .replace(/\s+/g, ' ')
            .trim();
    }

    const normalizedCache = {
        englishToKapampangan: null,
        englishToTagalog: null,
        tagalogToKapampangan: null
    };

    function buildNormalizedMap(dict) {
        const map = {};
        Object.keys(dict).forEach(k => {
            const nk = normalizeKey(k);
            if (!map[nk]) {
                map[nk] = dict[k];
            }
        });
        return map;
    }

    function getNormalizedTranslation(dictName, rawKey) {
        const dict = appData.translations[dictName];
        // Try direct match first (exact key)
        const direct = dict[rawKey];
        if (direct) return direct;

        // Fallback to normalized match
        const nk = normalizeKey(rawKey);
        if (!normalizedCache[dictName]) {
            normalizedCache[dictName] = buildNormalizedMap(dict);
        }
        return normalizedCache[dictName][nk] || 'Translation not available';
    }
    
    function translateText() {
        const raw = inputText.value;
        const fromLang = fromLanguage.value;
        const toLang = toLanguage.value;
        
        const text = (raw || '').trim();
        if (!text) {
            outputText.textContent = 'Please enter text to translate';
            return;
        }
        
        // Guard unsupported language pairs
        const supported = (fromLang === 'english' && (toLang === 'kapampangan' || toLang === 'tagalog')) ||
                          (fromLang === 'tagalog' && toLang === 'kapampangan');
        if (!supported) {
            outputText.textContent = 'Language pair not supported. Choose a different target.';
            return;
        }
        
        let translation = 'Translation not available';
        
        // Determine which translation dictionary to use
        if (fromLang === 'english' && toLang === 'kapampangan') {
            translation = getNormalizedTranslation('englishToKapampangan', text);
        } else if (fromLang === 'english' && toLang === 'tagalog') {
            translation = getNormalizedTranslation('englishToTagalog', text);
        } else if (fromLang === 'tagalog' && toLang === 'kapampangan') {
            translation = getNormalizedTranslation('tagalogToKapampangan', text);
        }
        
        outputText.textContent = translation;
    }
    
    function swapLanguages() {
        // Toggle destination language only; keep source unchanged
        toLanguage.value = (toLanguage.value === 'kapampangan') ? 'tagalog' : 'kapampangan';
        updatePhraseList();
        translateText();
    }
    
 
    
    function copyTranslation() {
        const text = outputText.textContent;
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Translation copied to clipboard');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }
    
    function populateFoodSection() {
        const foodList = document.querySelector('.food-list');
        
        appData.foodPlaces.forEach(place => {
            const itemCard = createItemCard(place, 'food');
            foodList.appendChild(itemCard);
        });
    }
    
    function populateAttractionsSection() {
        const attractionsList = document.querySelector('.attractions-list');
        
        appData.attractions.forEach(attraction => {
            const itemCard = createItemCard(attraction, 'attractions');
            attractionsList.appendChild(itemCard);
        });
    }
    
    function populateShoppingSection() {
        const shoppingList = document.querySelector('.shopping-list');
        
        appData.shoppingPlaces.forEach(shop => {
            const itemCard = createItemCard(shop, 'shopping');
            shoppingList.appendChild(itemCard);
        });
    }
    
    function populateEmergencySection() {
        const emergencyList = document.querySelector('.emergency-list');
        
        appData.emergencyInfo.forEach(info => {
            const itemCard = createItemCard(info, 'emergency');
            emergencyList.appendChild(itemCard);
        });
    }
    
    function populateTransportationSection() {
        const transportationList = document.querySelector('.transportation-list');
        
        appData.transportation.forEach(transport => {
            const itemCard = createItemCard(transport, 'transportation');
            transportationList.appendChild(itemCard);
        });
    }
    
    function createItemCard(item, type) {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        
        const itemImage = document.createElement('div');
        itemImage.className = 'item-image';
        itemImage.style.backgroundImage = `url(${item.image})`;
        
        const itemDetails = document.createElement('div');
        itemDetails.className = 'item-details';
        
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        
        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        
        const itemAddress = document.createElement('div');
        itemAddress.className = 'address';
        
        const addressIcon = document.createElement('i');
        addressIcon.className = 'fas fa-map-marker-alt';
        
        const addressText = document.createElement('span');
        addressText.textContent = item.address;
        
        itemAddress.appendChild(addressIcon);
        itemAddress.appendChild(addressText);

        // --- START OF UPDATED CODE ---

        // 1. Append basic info first
        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemDescription);
        itemDetails.appendChild(itemAddress);

        // 2. Create a container for buttons (Call + View Map)
        const actionContainer = document.createElement('div');
        actionContainer.className = 'card-actions';

        // 3. Create Call Button (Only if type is emergency)
        if (type === 'emergency' && item.contact) {
            const callBtn = document.createElement('a');
            callBtn.href = `tel:${item.contact}`;
            callBtn.className = 'btn-call'; 
            callBtn.innerHTML = '<i class="fas fa-phone"></i> Call';
            
            // Prevent card click event when clicking the button
            callBtn.addEventListener('click', (e) => e.stopPropagation());
            
            actionContainer.appendChild(callBtn);
        }

        // 4. Create View Map Button
        const quickMapBtn = document.createElement('button');
        quickMapBtn.className = 'btn-view-map';
        quickMapBtn.textContent = 'View Map';
        const quickQuery = [item.name, item.address || 'Angeles City, Pampanga'].filter(Boolean).join(', ');
        quickMapBtn.setAttribute('data-map-title', item.name);
        quickMapBtn.setAttribute('data-embed-url', buildGoogleEmbedUrl(quickQuery));
        
        actionContainer.appendChild(quickMapBtn);

        // 5. Append the button container to details
        itemDetails.appendChild(actionContainer);

        // 6. Add "View Details" text link
        const viewDetails = document.createElement('div');
        viewDetails.className = 'view-details';
        viewDetails.textContent = 'View Details';
        itemDetails.appendChild(viewDetails);
        
        // --- END OF UPDATED CODE ---
        
        itemCard.appendChild(itemImage);
        itemCard.appendChild(itemDetails);
        
        // Add click event to show details
        itemCard.addEventListener('click', () => {
            showItemDetails(item, type);
        });
        
        return itemCard;
    }
  
    
    function showItemDetails(item, type) {
        // Create modal content
        let content = `
            <div class="modal-image" style="background-image: url(${item.image})"></div>
            <div class="modal-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
        `;
        
        // Add type-specific details
        if (type === 'food') {
            content += `<p><strong>Address:</strong> ${item.address}</p>`;
        } else if (type === 'emergency') {
            content += `
                <p><strong>Contact:</strong> ${item.contact}</p>
                <p><strong>Address:</strong> ${item.address}</p>
            `;
        } else if (type === 'transportation') {
            content += `<p><strong>Fare:</strong> ${item.fare}</p>`;
        } else {
            content += `<p><strong>Address:</strong> ${item.address}</p>`;
        }
        
        // Add map using accurate address-based embed
        const mapQuery = [item.name, item.address || 'Angeles City, Pampanga'].filter(Boolean).join(', ');
        const embedUrlForBtn = buildGoogleEmbedUrl(mapQuery);
        content += `
            <div class="modal-map">
                <iframe src="${embedUrlForBtn}" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="map-actions">
              <button class="btn-view-map" data-map-title="${item.name}" data-embed-url="${embedUrlForBtn}">View Map</button>
            </div>
        `;
        
        content += `</div>`;
        
        // Set modal content
        modalContent.innerHTML = content;
        
        // Show modal
        modal.style.display = 'block';
    }
    
    function setupModal() {
        // Close modal when clicking the close button
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside the modal content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// Utility: extract embed src URL from iframe HTML
function extractEmbedUrl(html) {
  try {
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    const iframe = div.querySelector('iframe');
    return iframe ? iframe.src : '';
  } catch (_) {
    return '';
  }
}

// Build a reliable Google Maps embed URL from a text query (name + address)
function buildGoogleEmbedUrl(query) {
  const q = encodeURIComponent(query || '');
  if (!q) return '';
  return `https://www.google.com/maps?q=${q}&output=embed`;
}

// Opening animation on app load
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('app-enter');
  setTimeout(() => document.body.classList.remove('app-enter'), 900);
});

// In-app Map Modal logic
const mapModal = document.getElementById('map-modal');
const mapFrame = document.getElementById('map-frame');
const closeMapBtn = document.getElementById('close-map');

function openMapInModal({ title = 'Map', embedUrl, embedHtml }) {
  let url = embedUrl;
  if (!url && embedHtml) url = extractEmbedUrl(embedHtml);
  if (!url) return;
  document.getElementById('map-title').textContent = title;
  mapFrame.src = url;
  mapModal.style.display = 'block';
}

function closeMapModal() {
  mapModal.style.display = 'none';
  mapFrame.src = '';
}

closeMapBtn?.addEventListener('click', closeMapModal);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMapModal();
});

mapModal?.addEventListener('click', (e) => {
  if (e.target === mapModal) closeMapModal();
});

// Global handler for elements carrying data-embed-url

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-embed-url], [data-embed-html]');
  if (!trigger) return;
  e.preventDefault();
  const title = trigger.getAttribute('data-map-title') || 'Map';
  const embedUrl = trigger.getAttribute('data-embed-url');
  const embedHtml = trigger.getAttribute('data-embed-html');
  openMapInModal({ title, embedUrl, embedHtml });
});