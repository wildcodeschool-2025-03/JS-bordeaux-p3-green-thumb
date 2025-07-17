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
  main_cause_of_decay VARCHAR(100) NULL
);

INSERT INTO plant (id, name, icon, description, plant_exposition, watering, toxic, edible, main_cause_of_decay) VALUES
(1, 'Geranium', '/images/plant-icon/geranium.png', 'Colorful and hardy flower, ideal for balconies', 'south',2, TRUE, FALSE, 'Overwatering'),
(2, 'Lavender', '/images/plant-icon/lavande.png', 'Aromatic and decorative, attracts pollinators', 'south', 1, TRUE, FALSE, 'Root rot from poor drainage'),
(3, 'Petunia', '/images/plant-icon/petunia.png', 'Bright flowers, grows well in pots or hanging baskets', 'south', 3, FALSE, FALSE, 'Fungal disease from excess moisture'),
(4, 'Fuchsia', '/images/plant-icon/fuchsia.png', 'Hanging colorful flowers for partial shade', 'east',  3,  FALSE, FALSE, 'Lack of humidity or pests'),
(5, 'Begonia', '/images/plant-icon/begonia.png', 'Decorative flower for shade or partial shade', 'north', 2,  TRUE, FALSE, 'Overwatering or cold drafts'),
(6, 'Nasturtium', '/images/plant-icon/capucine.png', 'Edible flower, climbing, easy to grow', 'south',  2, FALSE, TRUE, 'Aphid infestation'),
(7, 'Hydrangea', '/images/plant-icon/hortensia.png', 'Ornamental flower for shady pots or gardens', 'east',  2,  TRUE, FALSE, 'Improper soil pH or drought'),
(8, 'Bellflower', '/images/plant-icon/campanule.png', 'Delicate bell-shaped flowers', 'south', 2, FALSE, FALSE, 'Lack of sunlight'),
(9, 'Pansy', '/images/plant-icon/pensee.png', 'Cold-resistant flower with long blooming season', 'east', 2,  FALSE, FALSE, 'Excessive heat'),
(10, 'Marigold', '/images/plant-icon/souci.png', 'Edible medicinal flower, bright orange', 'south', 2, FALSE, TRUE, 'Fungal diseases in damp conditions'),
(11, 'Basil', '/images/plant-icon/basilic.png', 'Essential aromatic herb for cooking', 'south',  3,  FALSE, TRUE, 'Lack of warmth and overwatering'),
(12, 'Mint', '/images/plant-icon/menthe.png', 'Invasive aromatic plant, very fragrant', 'east',  3,  FALSE, TRUE, 'Root rot due to poor drainage'),
(13, 'Rosemary', '/images/plant-icon/romarin.png', 'Mediterranean aromatic herb, very resilient', 'south', 1, FALSE, TRUE, 'Too much moisture'),
(14, 'Thyme', '/images/plant-icon/thym.png', 'Hardy and aromatic herb', 'south',  1,  FALSE, TRUE, 'Poor drainage'),
(15, 'Chives', '/images/plant-icon/ciboulette.png', 'Easy aromatic herb, grows in clumps', 'south',  2, TRUE, TRUE, 'Overwatering'),
(16, 'Parsley', '/images/plant-icon/persil.png', 'Essential aromatic herb, rich in vitamins', 'east', 2, TRUE, TRUE, 'Fungal root rot'),
(17, 'Ivy', '/images/plant-icon/lierre.png', 'Evergreen climbing decorative plant', 'north', 1,  TRUE, FALSE, 'Overwatering or poor light'),
(18, 'Star Jasmine', '/images/plant-icon/jasmin.png', 'Highly fragrant climber with evergreen foliage', 'south',  2, TRUE, FALSE, 'Poor air circulation'),
(19, 'Clematis', '/images/plant-icon/clematite.png', 'Climbing plant with decorative flowers', 'east',  2, TRUE, FALSE, 'Wilt due to fungal attack'),
(20, 'Cherry Tomatoes', '/images/plant-icon/tomates.png', 'Sweet small tomatoes, easy to grow in pots', 'south', 3, TRUE, TRUE, 'Fungal disease and overwatering'),
(21, 'Rubber Plant (Ficus elastica)', '/images/plant-icon/ficus.png', 'Also called rubber tree, tough plant with large glossy leaves', 'east', 2, TRUE, FALSE, 'Overwatering'),
(22, 'Monstera deliciosa', '/images/plant-icon/monstera.png', 'Tropical plant with large split leaves, very decorative', 'east',  2, TRUE, FALSE, 'Low humidity and overwatering'),
(23, 'Pothos (Epipremnum)', '/images/plant-icon/pothos.png', 'Easy-care climber, ideal for hanging', 'north', 2,  TRUE, FALSE, 'Root rot from standing water'),
(24, 'Calathea', '/images/plant-icon/calathea.png', 'Decorative and moving foliage, likes humidity', 'east',  3,  FALSE, FALSE, 'Low humidity or water quality'),
(25, 'Snake Plant (Sansevieria)', '/images/plant-icon/sansevieria.png', 'Very tough, tolerates low light', 'north', 1,TRUE, FALSE, 'Overwatering'),
(26, 'Zamioculcas zamiifolia (ZZ Plant)', '/images/plant-icon/zamioculas.png', 'ZZ plant, very resilient, great for beginners', 'north', 1,TRUE, FALSE, 'Overwatering'),
(27, 'Dracaena marginata', '/images/plant-icon/dracanea.png', 'Tree-like plant with thin, graphic leaves', 'east', 2, TRUE, FALSE, 'Fluoride in tap water'),
(28, 'Spider Plant (Chlorophytum)', '/images/plant-icon/chlorophytum.png', 'Easy to grow, air purifying and non-toxic', 'east', 2, FALSE, FALSE, 'Dry air or neglect'),
(29, 'Dieffenbachia', '/images/plant-icon/dieffenbachia.png', 'Highly decorative spotted foliage, but very toxic', 'east', 2, TRUE, FALSE, 'Overwatering and cold'),
(30, 'Philodendron scandens', '/images/plant-icon/philodendron.png', 'Climbing or trailing, easy-care plant', 'north', 2, TRUE, FALSE, 'Too little light or soggy soil');


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
(1, 'plante aromatique'),
(2, 'decoration'),
(3, 'legume'),
(4, 'hiver'),
(5, 'printemps'),
(6, 'ete'),
(7, 'automne'),
(8, 'rouge'),
(9, 'rose'),
(10,'bleu'),
(11, 'violet'),
(12, 'fleur'),
(13, 'jaune'),
(14, 'entretien'),
(15, 'rempotage'),
(16, 'bouturage'),
(17, 'fertilisation'),
(18, 'recolte'),
(19, 'semence'),
(20, 'arrosage');

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
(1,'https://www.youtube.com/watch?v=vWyTYN7N9Wo&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&ab_channel=TRUFFAUT', 'Choisir ses plantes', 'Sélectionnez des plantes qui s’épanouissent en intérieur, comme le pothos, le monstera, ou les herbes aromatiques (basilic, menthe). Tenez compte de l’exposition lumineuse et de l’humidité de votre espace.', 'Truffaut', 266, 'gardening'),
(2,'https://www.youtube.com/watch?v=PmKX4GRluB0&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=2&ab_channel=MarionBotanical', 'Préparer le matériel', 'Munissez-vous des outils essentiels : pots avec drainage, terreau adapté, arrosoir, vaporisateur, et éventuellement un humidificateur pour maintenir une hygrométrie adéquate.', 'Marion Botanical', 685, 'gardening'),
(3,'https://www.youtube.com/watch?v=mgIYmtqQRWI&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=3&ab_channel=TRUFFAUT', 'Installer les plantes', 'Placez vos plantes dans des zones bénéficiant de lumière naturelle, en évitant les courants d’air et les sources de chaleur directe. Certaines plantes préfèrent une lumière tamisée, d’autres un ensoleillement plus direct.', 'Truffaut', 78, 'gardening'),
(4,'https://www.youtube.com/watch?v=qN0suT-28S0&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=4&ab_channel=TRUFFAUT', 'Maîtriser l’arrosage', 'Arrosez lorsque les premiers centimètres du sol sont secs au toucher. Enfoncez votre doigt dans le terreau pour vérifier l’humidité. Un arrosage excessif peut entraîner des maladies fongiques.', 'Truffaut', 132, 'gardening'),
(5,'https://www.youtube.com/watch?v=d7BYBXGrpF8&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=5&ab_channel=TRUFFAUT', 'Fertiliser régulièrement', 'Apportez de l’engrais adapté à vos plantes durant leur période de croissance active (printemps-été). Réduisez ou cessez la fertilisation en automne et en hiver.', 'Truffaut', 209, 'gardening'),
(6,'https://www.youtube.com/watch?v=8z44UVIqJVw&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=6&ab_channel=TRUFFAUT', 'Tailler et entretenir', 'Éliminez les feuilles jaunies ou abîmées pour favoriser la croissance de nouvelles pousses. Taillez les plantes pour maintenir leur forme et stimuler leur développement.', 'Truffaut', 233, 'gardening'),
(7,'https://www.youtube.com/watch?v=lFPYt1XTTtA&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=7&ab_channel=TRUFFAUT', 'Rempoter si nécessaire', 'Lorsque les racines deviennent à l’étroit, rempotez vos plantes dans un contenant légèrement plus grand avec du terreau frais. Cela favorise une croissance saine.', 'Truffaut', 194, 'gardening'),
(8,'https://www.youtube.com/watch?v=rAw-_MsM5x8&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=8&ab_channel=TRUFFAUT', 'Bouturer pour multiplier', 'Multipliez vos plantes en prélevant des boutures. Placez-les dans l’eau ou directement dans le terreau jusqu’à l’apparition de racines.', 'Truffaut', 335, 'gardening'),
(9,'https://www.youtube.com/watch?v=oRfu6uUhmcY&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=9&ab_channel=TRUFFAUT', 'Surveiller les parasites', 'Inspectez régulièrement vos plantes pour détecter la présence de cochenilles, pucerons ou acariens. En cas d’infestation, nettoyez les feuilles avec un chiffon humide ou utilisez un traitement biologique.', 'Truffaut', 113, 'gardening'),
(10,'https://www.youtube.com/watch?v=iXs6R5YdM0E&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=10&ab_channel=TRUFFAUT', 'Récolter et profiter', 'Pour les plantes aromatiques et les salades, récoltez les feuilles au fur et à mesure de leur croissance. Cela stimule la plante et vous permet de profiter de vos cultures.', 'Truffaut', 153, 'gardening'),
(11, 'https://youtu.be/uctr040MJLE?si=TqjP2eqfyQuoGA1e', 'Bouture & Géranium', 'Suivez pas à pas en vidéo les conseils de nos jardiniers pour réaliser facilement vos boutures de géraniums', 'Truffaut', 148, 'plant'),
(12, 'https://www.youtube.com/watch?v=FvrnxZDWlEE&ab_channel=newsjardintv', 'Tailler la lavande', 'Une technique simple de taille de la lavande, qui s effectue bien sûr après la floraison', 'NewsJardinTV', 150, 'plant'),
(13, 'https://www.youtube.com/watch?v=VK8qmgZqCGY&ab_channel=TRUFFAUT', 'Planter des hortensias', 'Besoin de conseils pour bien planter et entretenir des hortensias', 'Truffaut', 93, 'plant'),
(14, 'https://www.youtube.com/watch?v=TcIH4VaBXcE&ab_channel=TRUFFAUT', 'Entretenir sa monstera', 'Plante iconique des intérieurs végétalisés, le Monstera Deliciosa, aussi appelé faux philodendron, séduit par son feuillage graphique et sa croissance impressionnante', 'Truffaut', 66, 'plant'),
(15, 'https://www.youtube.com/watch?v=ZO7hXXMeXx0&ab_channel=TRUFFAUT', 'La ciboulette', 'La ciboulette est une plante aromatique qui parfume idéalement la crème fraîche et les salades.', 'Truffaut', 140, 'plant'),
(16, 'https://www.youtube.com/watch?v=msVCUfza9No&ab_channel=OrBrun', 'Cultiver la menthe', 'Aujourd hui on apprends comment planter et rempoter la menthe, mais aussi comment entretenir la menthe en pot ! ', 'Or Brun', 150, 'plant'),
(17, 'https://www.youtube.com/watch?v=aV86MKUxilY&ab_channel=TRUFFAUT', 'Les plantes aromathiques', 'Pierre-Adrien vous présente les plantes aromatiques qui apprécient plutôt une exposition à la mi-ombre et un arrosage régulier, comme le basilic, la verveine, la menthe, le persil ou la ciboulette.', 'Truffaut', 198, 'plant'),
(18, 'https://www.youtube.com/watch?v=BkJI063QolQ&ab_channel=UneFleurParmilesFleurs', 'Tomates Cerises du jardin', 'Rempoter des tomates cerises en pot, c’est facile si on connaît quelques astuces !', 'Une fleur parmi les fleurs', 321, 'plant'),
(19, 'https://www.youtube.com/watch?v=ivPRIdz8LMM&ab_channel=MonJardin%C3%A0Vivre', 'Zamioculcas zamiifolia', 'Vous adorez les plantes d’intérieur mais vous n’avez pas la main verte ?  Tournez-vous vers les zamioculcas !', 'Les gens du jardin', 151, 'plant'),
(20, 'https://www.youtube.com/watch?v=RJ4GzrB1UDo&t=50s&ab_channel=FUCHSIADELHOMMEAU', 'La capucine dans la cuisine', 'La capucine est comestible, ses feuilles, ses pétales et ses graines trouvent leur place dans votre alimentation.', 'Simon Guillo', 207, 'plant'),
(21, 'https://www.youtube.com/watch?v=6sAQ3LrcVKY&ab_channel=MarionBotanical', 'Le philodendron !', 'Une collection de philodendron', 'Marion', 824, 'plant');

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