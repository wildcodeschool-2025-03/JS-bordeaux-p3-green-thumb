CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR (80) NOT NULL,
  lastname VARCHAR (80) NOT NULL,
  username VARCHAR(20) NOT NULL,
  city VARCHAR(60) NOT NULL,  
  email VARCHAR(255) UNIQUE NOT NULL,
  hashed_password VARCHAR(145) NOT NULL,
  avatar VARCHAR(255) NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO user (firstname, lastname, username, city, email, hashed_password, avatar ) VALUES
( 'Keanu', 'Leaves', 'Keanu_Leaves','Bordeaux','Keanu@ouimail.fr','TonMdp12345!','/images/avatar/avatar1.png'),
( 'Jean', 'Feuille','JeanDuj', 'Paris','JF@ouimail.fr', 'TonMdp12345!','/images/avatar/avatar2.png'),
( 'Louis', 'Plante', 'Loulou', 'Tours','Loulou@ouimail.fr','TonMdp12345!','/images/avatar/avatar2.png');

CREATE TABLE garden (
  id INT PRIMARY KEY,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  user_id INT UNIQUE,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO garden (id, user_id) VALUES
(1, 1),
(2, 2),
(3, 3);

CREATE TABLE garden_photo (
  id INT PRIMARY KEY AUTO_INCREMENT,
  path VARCHAR(255) NOT NULL,
  garden_id INT, 
  FOREIGN KEY (garden_id) REFERENCES garden(id)
);

CREATE TABLE plant (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  icon VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  plant_exposition VARCHAR(10) NOT NULL,
  watering INT NOT NULL,
  toxic BOOLEAN,
  edible BOOLEAN,
  main_cause_of_decay VARCHAR(100) NOT NULL,
  tip VARCHAR (100) NOT NULL
);

INSERT INTO plant (id, name, icon, description, plant_exposition, watering, toxic, edible, main_cause_of_decay, tip) VALUES
(1, 'Geranium', '/images/plant-icon/geranium.png', 'Colorful and hardy flower, ideal for balconies', 'south', 2, TRUE, FALSE, 'Overwatering', 'Let soil dry between waterings.'),
(2, 'Lavender', '/images/plant-icon/lavande.png', 'Aromatic and decorative, attracts pollinators', 'south', 1, TRUE, FALSE, 'Root rot from poor drainage', 'Plant in sandy soil with good drainage.'),
(3, 'Petunia', '/images/plant-icon/petunia.png', 'Bright flowers, grows well in pots or hanging baskets', 'south', 3, FALSE, FALSE, 'Fungal disease from excess moisture', 'Water at the base to avoid wet leaves.'),
(4, 'Fuchsia', '/images/plant-icon/fuchsia.png', 'Hanging colorful flowers for partial shade', 'east', 3, FALSE, FALSE, 'Lack of humidity or pests', 'Mist leaves regularly to raise humidity.'),
(5, 'Begonia', '/images/plant-icon/begonia.png', 'Decorative flower for shade or partial shade', 'north', 2, TRUE, FALSE, 'Overwatering or cold drafts', 'Keep soil slightly moist, never soggy.'),
(6, 'Nasturtium', '/images/plant-icon/capucine.png', 'Edible flower, climbing, easy to grow', 'south', 2, FALSE, TRUE, 'Aphid infestation', 'Plant near vegetables to deter pests.'),
(7, 'Hydrangea', '/images/plant-icon/hortensia.png', 'Ornamental flower for shady pots or gardens', 'east', 2, TRUE, FALSE, 'Improper soil pH or drought', 'Water deeply and regularly in dry weather.'),
(8, 'Bellflower', '/images/plant-icon/campanule.png', 'Delicate bell-shaped flowers', 'south', 2, FALSE, FALSE, 'Lack of sunlight', 'Place in full sun to boost blooming.'),
(9, 'Pansy', '/images/plant-icon/pensee.png', 'Cold-resistant flower with long blooming season', 'east', 2, FALSE, FALSE, 'Excessive heat', 'Plant in cooler months for best flowers.'),
(10, 'Marigold', '/images/plant-icon/souci.png', 'Edible medicinal flower, bright orange', 'south', 2, FALSE, TRUE, 'Fungal diseases in damp conditions', 'Space plants to improve air circulation.'),
(11, 'Basil', '/images/plant-icon/basilic.png', 'Essential aromatic herb for cooking', 'south', 3, FALSE, TRUE, 'Lack of warmth and overwatering', 'Harvest leaves often to encourage growth.'),
(12, 'Mint', '/images/plant-icon/menthe.png', 'Invasive aromatic plant, very fragrant', 'east', 3, FALSE, TRUE, 'Root rot due to poor drainage', 'Grow in pots to contain spreading roots.'),
(13, 'Rosemary', '/images/plant-icon/romarin.png', 'Mediterranean aromatic herb, very resilient', 'south', 1, FALSE, TRUE, 'Too much moisture', 'Let soil dry completely before watering.'),
(14, 'Thyme', '/images/plant-icon/thym.png', 'Hardy and aromatic herb', 'south', 1, FALSE, TRUE, 'Poor drainage', 'Grow in rocky or sandy soil for best results.'),
(15, 'Chives', '/images/plant-icon/ciboulette.png', 'Easy aromatic herb, grows in clumps', 'south', 2, TRUE, TRUE, 'Overwatering', 'Snip often to keep chives growing strong.'),
(16, 'Parsley', '/images/plant-icon/persil.png', 'Essential aromatic herb, rich in vitamins', 'east', 2, TRUE, TRUE, 'Fungal root rot', 'Water at base to avoid leaf disease.'),
(17, 'Ivy', '/images/plant-icon/lierre.png', 'Evergreen climbing decorative plant', 'north', 1, TRUE, FALSE, 'Overwatering or poor light', 'Give bright light to keep leaves healthy.'),
(18, 'Star Jasmine', '/images/plant-icon/jasmin.png', 'Highly fragrant climber with evergreen foliage', 'south', 2, TRUE, FALSE, 'Poor air circulation', 'Train on a trellis for better airflow.'),
(19, 'Clematis', '/images/plant-icon/clematite.png', 'Climbing plant with decorative flowers', 'east', 2, TRUE, FALSE, 'Wilt due to fungal attack', 'Mulch roots and keep base shaded.'),
(20, 'Cherry Tomatoes', '/images/plant-icon/tomates.png', 'Sweet small tomatoes, easy to grow in pots', 'south', 3, TRUE, TRUE, 'Fungal disease and overwatering', 'Stake early to support and ventilate.'),
(21, 'Rubber Plant (Ficus elastica)', '/images/plant-icon/ficus.png', 'Also called rubber tree, tough plant with large glossy leaves', 'east', 2, TRUE, FALSE, 'Overwatering', 'Let top soil dry out between waterings.'),
(22, 'Monstera deliciosa', '/images/plant-icon/monstera.png', 'Tropical plant with large split leaves, very decorative', 'east', 2, TRUE, FALSE, 'Low humidity and overwatering', 'Wipe leaves to remove dust and help photosynthesis.'),
(23, 'Pothos (Epipremnum)', '/images/plant-icon/pothos.png', 'Easy-care climber, ideal for hanging', 'north', 2, TRUE, FALSE, 'Root rot from standing water', 'Trim vines to promote bushier growth.'),
(24, 'Calathea', '/images/plant-icon/calathea.png', 'Decorative and moving foliage, likes humidity', 'east', 3, FALSE, FALSE, 'Low humidity or water quality', 'Use filtered water and mist often.'),
(25, 'Snake Plant (Sansevieria)', '/images/plant-icon/sansevieria.png', 'Very tough, tolerates low light', 'north', 1, TRUE, FALSE, 'Overwatering', 'Water monthly and keep in indirect light.'),
(26, 'Zamioculcas zamiifolia (ZZ Plant)', '/images/plant-icon/zamioculas.png', 'ZZ plant, very resilient, great for beginners', 'north', 1, TRUE, FALSE, 'Overwatering', 'Only water when soil is completely dry.'),
(27, 'Dracaena marginata', '/images/plant-icon/dracanea.png', 'Tree-like plant with thin, graphic leaves', 'east', 2, TRUE, FALSE, 'Fluoride in tap water', 'Use rainwater or filtered water if possible.'),
(28, 'Spider Plant (Chlorophytum)', '/images/plant-icon/chlorophytum.png', 'Easy to grow, air purifying and non-toxic', 'east', 2, FALSE, FALSE, 'Dry air or neglect', 'Cut dead tips and repot annually.'),
(29, 'Dieffenbachia', '/images/plant-icon/dieffenbachia.png', 'Highly decorative spotted foliage, but very toxic', 'east', 2, TRUE, FALSE, 'Overwatering and cold', 'Keep warm and out of cold drafts.'),
(30, 'Philodendron scandens', '/images/plant-icon/philodendron.png', 'Climbing or trailing, easy-care plant', 'north', 2, TRUE, FALSE, 'Too little light or soggy soil', 'Place in bright, indirect light.');



CREATE TABLE plant_garden (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  garden_id INT,
  plant_id INT,
  born_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  nickname VARCHAR(100) NULL,
  avatar VARCHAR(255) NULL
);

CREATE TABLE tag (
  id INT PRIMARY KEY,
  tagname VARCHAR(255) NOT NULL
);

INSERT INTO tag (id,tagname) VALUES
(1, 'aromatic plant'),
(2, 'decoration'),
(3, 'vegetable'),
(4, 'winter'),
(5, 'spring'),
(6, 'summer'),
(7, 'autumn'),
(8, 'red'),
(9, 'pink'),
(10, 'blue'),
(11, 'purple'),
(12, 'flower'),
(13, 'yellow'),
(14, 'maintenance'),
(15, 'repotting'),
(16, 'cutting propagation'),
(17, 'fertilization'),
(18, 'harvest'),
(19, 'seed'),
(20, 'watering');

CREATE TABLE plant_tag (
  plant_id INT,
  tag_id INT,
  PRIMARY KEY (plant_id, tag_id)
);

INSERT INTO plant_tag (plant_id, tag_id) VALUES
(1, 5), (1, 2), (1, 8),
(2, 5), (2, 2), (2, 11),
(3, 5), (3, 2), (3, 9), (3, 12),
(4, 5), (4, 2), (4, 9), (4, 12),
(5, 5), (5, 2), (5, 9), (5, 12),
(6, 5), (6, 12), (6, 13),
(7, 5), (7, 2), (7, 9), (7, 12),
(8, 5), (8, 12), (8, 10),
(9, 7), (9, 5), (9, 12), (9, 10),
(10, 5), (10, 12), (10, 13),
(11, 5), (11, 1),
(12, 5), (12, 1),
(13, 5), (13, 1),
(14, 5), (14, 1),
(15, 5), (15, 1),
(16, 5), (16, 1),
(17, 2),
(18, 2), (18, 5),
(19, 2), (19, 5),
(20, 3), (20, 5), (20, 6),
(21, 2),
(22, 2),
(23, 2),
(24, 2),
(25, 2),
(26, 2),
(27, 2),
(28, 2),
(29, 2),
(30, 2);

CREATE TABLE tutorial (
  id INT PRIMARY KEY,
  url VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  category VARCHAR(10)
);

INSERT INTO tutorial (id, url, title, description, author, duration, category) VALUES
(1, 'https://www.youtube.com/watch?v=vWyTYN7N9Wo&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&ab_channel=TRUFFAUT', 
    'Choosing your plants', 
    'Select plants that thrive indoors, such as pothos, monstera, or aromatic herbs (basil, mint). Consider the light exposure and humidity of your space.', 
    'Truffaut', 266, 'gardening'),

(2, 'https://www.youtube.com/watch?v=PmKX4GRluB0&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=2&ab_channel=MarionBotanical', 
    'Preparing your tools', 
    'Get the essential tools: pots with drainage, suitable potting soil, watering can, spray bottle, and possibly a humidifier to maintain proper humidity.', 
    'Marion Botanical', 685, 'gardening'),

(3, 'https://www.youtube.com/watch?v=mgIYmtqQRWI&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=3&ab_channel=TRUFFAUT', 
    'Placing your plants', 
    'Place your plants in areas with natural light, avoiding drafts and direct heat sources. Some prefer filtered light, others more direct sun.', 
    'Truffaut', 78, 'gardening'),

(4, 'https://www.youtube.com/watch?v=qN0suT-28S0&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=4&ab_channel=TRUFFAUT', 
    'Mastering watering', 
    'Water when the top few centimeters of soil feel dry. Check moisture by sticking your finger into the soil. Overwatering can lead to fungal diseases.', 
    'Truffaut', 132, 'gardening'),

(5, 'https://www.youtube.com/watch?v=d7BYBXGrpF8&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=5&ab_channel=TRUFFAUT', 
    'Fertilizing regularly', 
    'Use appropriate fertilizer during the active growing season (spring–summer). Reduce or stop fertilizing in fall and winter.', 
    'Truffaut', 209, 'gardening'),

(6, 'https://www.youtube.com/watch?v=8z44UVIqJVw&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=6&ab_channel=TRUFFAUT', 
    'Pruning and maintenance', 
    'Remove yellowed or damaged leaves to encourage new growth. Prune to maintain shape and stimulate development.', 
    'Truffaut', 233, 'gardening'),

(7, 'https://www.youtube.com/watch?v=lFPYt1XTTtA&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=7&ab_channel=TRUFFAUT', 
    'Repotting if needed', 
    'When roots become cramped, repot your plants in a slightly larger container with fresh soil. This supports healthy growth.', 
    'Truffaut', 194, 'gardening'),

(8, 'https://www.youtube.com/watch?v=rAw-_MsM5x8&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=8&ab_channel=TRUFFAUT', 
    'Propagating by cuttings', 
    'Multiply your plants by taking cuttings. Place them in water or soil until roots appear.', 
    'Truffaut', 335, 'gardening'),

(9, 'https://www.youtube.com/watch?v=oRfu6uUhmcY&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=9&ab_channel=TRUFFAUT', 
    'Monitoring pests', 
    'Regularly inspect your plants for mealybugs, aphids, or mites. If infested, wipe leaves with a damp cloth or use a natural treatment.', 
    'Truffaut', 113, 'gardening'),

(10, 'https://www.youtube.com/watch?v=iXs6R5YdM0E&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=10&ab_channel=TRUFFAUT', 
     'Harvest and enjoy', 
     'For herbs and lettuces, harvest leaves as they grow. This encourages the plant and lets you enjoy fresh harvests.', 
     'Truffaut', 153, 'gardening'),

(11, 'https://youtu.be/uctr040MJLE?si=TqjP2eqfyQuoGA1e', 
     'Geranium Cuttings', 
     'Follow step-by-step advice from our gardeners to easily take cuttings from your geraniums.', 
     'Truffaut', 148, 'plant'),

(12, 'https://www.youtube.com/watch?v=FvrnxZDWlEE&ab_channel=newsjardintv', 
     'Pruning lavender', 
     'A simple lavender pruning technique, performed after blooming.', 
     'NewsJardinTV', 150, 'plant'),

(13, 'https://www.youtube.com/watch?v=VK8qmgZqCGY&ab_channel=TRUFFAUT', 
     'Planting hydrangeas', 
     'Need tips for properly planting and caring for hydrangeas?', 
     'Truffaut', 93, 'plant'),

(14, 'https://www.youtube.com/watch?v=TcIH4VaBXcE&ab_channel=TRUFFAUT', 
     'Caring for your monstera', 
     'A favorite houseplant, the Monstera Deliciosa (also known as false philodendron) stands out with its striking leaves and impressive growth.', 
     'Truffaut', 66, 'plant'),

(15, 'https://www.youtube.com/watch?v=ZO7hXXMeXx0&ab_channel=TRUFFAUT', 
     'Chives', 
     'Chives are aromatic herbs that add great flavor to sour cream and salads.', 
     'Truffaut', 140, 'plant'),

(16, 'https://www.youtube.com/watch?v=msVCUfza9No&ab_channel=OrBrun', 
     'Growing mint', 
     'Today we learn how to plant and repot mint, and how to care for mint in a pot!', 
     'Or Brun', 150, 'plant'),

(17, 'https://www.youtube.com/watch?v=aV86MKUxilY&ab_channel=TRUFFAUT', 
     'Aromatic plants', 
     'Pierre-Adrien presents aromatic plants that prefer partial shade and regular watering, like basil, verbena, mint, parsley, or chives.', 
     'Truffaut', 198, 'plant'),

(18, 'https://www.youtube.com/watch?v=BkJI063QolQ&ab_channel=UneFleurParmilesFleurs', 
     'Cherry tomatoes from the garden', 
     'Repotting cherry tomatoes in pots is easy when you know a few tricks!', 
     'Une fleur parmi les fleurs', 321, 'plant'),

(19, 'https://www.youtube.com/watch?v=ivPRIdz8LMM&ab_channel=MonJardin%C3%A0Vivre', 
     'Zamioculcas zamiifolia', 
     'Love houseplants but not very green-thumbed? Go for Zamioculcas!', 
     'Les gens du jardin', 151, 'plant'),

(20, 'https://www.youtube.com/watch?v=RJ4GzrB1UDo&t=50s&ab_channel=FUCHSIADELHOMMEAU', 
     'Nasturtium in the kitchen', 
     'Nasturtium is edible—its leaves, petals, and seeds are great in your cooking.', 
     'Simon Guillo', 207, 'plant'),

(21, 'https://www.youtube.com/watch?v=6sAQ3LrcVKY&ab_channel=MarionBotanical', 
     'The philodendron!', 
     'A philodendron collection.', 
     'Marion', 824, 'plant');

CREATE TABLE tutorial_tag(
  tutorial_id INT,
  tag_id INT,
  PRIMARY KEY (tutorial_id, tag_id)
);

INSERT INTO tutorial_tag (tutorial_id, tag_id) VALUES
(1, 14),
(1, 1),
(1, 2),
(2, 14),
(2, 17),
(2, 20),
(2, 19),
(3, 14),
(3, 19),
(4, 20),
(5, 14),
(5, 15),
(6, 15),
(6, 14),
(7, 16),
(7, 14),
(8, 18),
(8, 14),
(9, 14),
(9, 19),
(10, 18);

CREATE TABLE user_tutorial (
  user_id INT,
  tutorial_id INT,
  PRIMARY KEY (user_id, tutorial_id)
);