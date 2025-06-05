CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,  
  mail VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(145) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  city VARCHAR(60) NOT NULL,
  has_pet BOOLEAN NOT NULL,
  exposition ENUM("North","South","East","West") DEFAULT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO user (username, mail, password, avatar, city,has_pet, exposition) VALUES
('Keanu Leaves','Keanu@ouimail.fr','1234','../public/assets/images/avatar/avatar1.png','Bordeaux', True, 'North'),
('Jean Feuille','JF@ouimail.fr','9875','../public/assets/images/avatar/avatar2.png','Paris', False, 'South'),
('Louis Plante','Loulou@ouimail.fr','4566','../public/assets/images/avatar/avatar2.png','Tours', False, 'East');

CREATE TABLE plant (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  icon VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  plant_exposition VARCHAR(10) NOT NULL,
  sowing VARCHAR(100) NULL,
  watering INT NOT NULL,
  harvesting VARCHAR(100) NULL,
  toxic BOOLEAN,
  edible BOOLEAN
);

INSERT INTO plant (name, icon, description, plant_exposition, sowing, watering, harvesting, toxic, edible) VALUES
('Géranium', '../public/assets/images/plant-icon/geranium.png', 'Fleur colorée résistante, idéale pour balcon', 'south', 'Printemps', 2, NULL, TRUE, FALSE),
('Lavande', '../public/assets/images/plant-icon/lavande.png', 'Aromatique et décorative, attire les pollinisateurs', 'south', 'Printemps', 1, 'Été', TRUE, FALSE),
('Pétunia', '../public/assets/images/plant-icon/petunia.png', 'Fleurs éclatantes, pousse bien en pot ou suspension', 'south', 'Printemps', 3, 'Été', FALSE, FALSE),
('Fuchsia', '../public/assets/images/plant-icon/fuchsia.png', 'Fleurs pendantes colorées pour la mi-ombre', 'east', 'Printemps', 3, 'Été', FALSE, FALSE),
('Bégonia', '../public/assets/images/plant-icon/begonia.png', 'Fleur décorative pour ombre ou mi-ombre', 'north', 'Printemps', 2, NULL, TRUE, FALSE),
('Capucine', '../public/assets/images/plant-icon/capucine.png', 'Fleur comestible, grimpante, facile à cultiver', 'south', 'Printemps', 2, 'Été', FALSE, TRUE),
('Hortensia', '../public/assets/images/plant-icon/hortensia.png', 'Fleur ornementale pour pot ou jardin ombragé', 'east', 'Printemps', 2, NULL, TRUE, FALSE),
('Campanule', '../public/assets/images/plant-icon/campanule.png', 'Fleurs délicates en forme de clochettes', 'south', 'Printemps', 2, NULL, FALSE, FALSE),
('Pensée', '../public/assets/images/plant-icon/pensee.png', 'Fleur résistante au froid, floraison longue', 'east', 'Automne ou Printemps', 2, NULL, FALSE, FALSE),
('Souci', '../public/assets/images/plant-icon/souci.png', 'Fleur médicinale comestible, orange vif', 'south', 'Printemps', 2, 'Été', FALSE, TRUE),
('Basilic', '../public/assets/images/plant-icon/basilic.png', 'Aromatique indispensable en cuisine', 'south', 'Printemps', 3, 'Été', FALSE, TRUE),
('Menthe', '../public/assets/images/plant-icon/menthe.png', 'Plante aromatique envahissante, très parfumée', 'east', 'Printemps', 3, 'Été', FALSE, TRUE),
('Romarin', '../public/assets/images/plant-icon/romarin.png', 'Aromatique méditerranéenne, très résistante', 'south', 'Printemps', 1, 'Toute l’année', FALSE, TRUE),
('Thym', '../public/assets/images/plant-icon/thym.png', 'Plante rustique et aromatique', 'south', 'Printemps', 1, 'Toute l’année', FALSE, TRUE),
('Ciboulette', '../public/assets/images/plant-icon/ciboulette.png', 'Aromatique facile, pousse en touffe', 'south', 'Printemps', 2, 'Été', TRUE, TRUE),
('Persil', '../public/assets/images/plant-icon/persil.png', 'Aromatique indispensable, riche en vitamines', 'east', 'Printemps', 2, 'Été', TRUE, TRUE),
('Lierre', '../public/assets/images/plant-icon/lierre.png', 'Grimpante persistante, décorative', 'north', 'Printemps', 1, NULL, TRUE, FALSE),
('Jasmin étoilé', '../public/assets/images/plant-icon/jasmin.png', 'Grimpante très parfumée, feuillage persistant', 'south', 'Printemps', 2, NULL, TRUE, FALSE),
('Clématite', '../public/assets/images/plant-icon/clematite.png', 'Grimpante à fleurs décoratives', 'east', 'Printemps', 2, NULL, TRUE, FALSE),
('Tomates cerises', '../public/assets/images/plant-icon/tomate.png', 'Petites tomates sucrées faciles en pot', 'south', 'Avril-Mai', 3, 'Été', TRUE, TRUE),
('Ficus elastica', '../public/assets/images/plant-icon/ficus.png', 'Aussi appelé caoutchouc, plante robuste à larges feuilles brillantes', 'east', NULL, 2, NULL, TRUE, FALSE),
('Monstera deliciosa', '../public/assets/images/plant-icon/monstera.png', 'Plante tropicale à grandes feuilles fendues, très décorative', 'east', NULL, 2, NULL, TRUE, FALSE),
('Pothos (Epipremnum)', '../public/assets/images/plant-icon/pothos.png', 'Grimpante facile à vivre, idéale en suspension', 'north', NULL, 2, NULL, TRUE, FALSE),
('Calathea', '../public/assets/images/plant-icon/calathea.png', 'Feuillage décoratif et mouvant, aime l’humidité', 'east', NULL, 3, NULL, FALSE, FALSE),
('Sansevieria (Langue de belle-mère)', '../public/assets/images/plant-icon/sansevieria.png', 'Très résistante, supporte peu de lumière', 'north', NULL, 1, NULL, TRUE, FALSE),
('Zamioculcas zamiifolia', '../public/assets/images/plant-icon/zamioculas.png', 'ZZ plant, très résistante, parfaite pour débutants', 'north', NULL, 1, NULL, TRUE, FALSE),
('Dracaena marginata', '../public/assets/images/plant-icon/dracanea.png', 'Plante arborescente fine et graphique', 'east', NULL, 2, NULL, TRUE, FALSE),
('Chlorophytum (plante araignée)', '../public/assets/images/plant-icon/chlorophytum.png', 'Facile à cultiver, dépolluante et non toxique', 'east', NULL, 2, NULL, FALSE, FALSE),
('Dieffenbachia', '../public/assets/images/plant-icon/dieffenbachia.png', 'Feuillage tacheté très décoratif mais très toxique', 'east', NULL, 2, NULL, TRUE, FALSE),
('Philodendron scandens', '../public/assets/images/plant-icon/philodendron.png', 'Grimpante ou tombante, facile d’entretien', 'north', NULL, 2, NULL, TRUE, FALSE);

CREATE TABLE garden (
  id INT PRIMARY KEY AUTO_INCREMENT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO garden (user_id) VALUES
(1),
(2);

CREATE TABLE user_plant_photo (
  id INT PRIMARY KEY AUTO_INCREMENT,
  picture VARCHAR(255) NOT NULL,
  garden_id INT, 
  FOREIGN KEY (garden_id) REFERENCES garden(id)
);

CREATE TABLE tag (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tagname VARCHAR(255) NOT NULL
);

INSERT INTO tag (tagname) VALUES
('choix'),
('outils'),
('emplacement'),
('arrosage'),
('fertilisation'),
('entretien'),
('rempotage'),
('bouturage'),
('parasites'),
('recolte'),
('geranium'),
('lavande'),
('petunia'),
('fuchsia'),
('begonia'),
('capucine'),
('pensee'),
('souci'),
('basilic'),
('menthe'),
('romarin'),
('thym'),
('ciboulette'),
('persil'),
('lierre'),
('jasmin'),
('clematite'),
('tomates'),
('ficus'),
('monstera'),
('pothos'),
('calateha'),
('sansevieria'),
('zamiocula'),
('dracanea'),
('chlorophythum'),
('dieffenbachia'),
('philodendron');

CREATE TABLE tutorial (
  id INT PRIMARY KEY AUTO_INCREMENT,
  url VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  duration INT NOT NULL
);

INSERT INTO tutorial (url, title, description, author, duration) VALUES
('https://www.youtube.com/watch?v=vWyTYN7N9Wo&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&ab_channel=TRUFFAUT', 'Choisir ses plantes', 'Sélectionnez des plantes qui s’épanouissent en intérieur, comme le pothos, le monstera, ou les herbes aromatiques (basilic, menthe). Tenez compte de l’exposition lumineuse et de l’humidité de votre espace.', 'Truffaut', 266),
('https://www.youtube.com/watch?v=PmKX4GRluB0&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=2&ab_channel=MarionBotanical', 'Préparer le matériel', 'Munissez-vous des outils essentiels : pots avec drainage, terreau adapté, arrosoir, vaporisateur, et éventuellement un humidificateur pour maintenir une hygrométrie adéquate.', 'Marion Botanical', 685),
('https://www.youtube.com/watch?v=mgIYmtqQRWI&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=3&ab_channel=TRUFFAUT', 'Installer les plantes', 'Placez vos plantes dans des zones bénéficiant de lumière naturelle, en évitant les courants d’air et les sources de chaleur directe. Certaines plantes préfèrent une lumière tamisée, d’autres un ensoleillement plus direct.', 'Truffaut', 78),
('https://www.youtube.com/watch?v=qN0suT-28S0&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=4&ab_channel=TRUFFAUT', 'Maîtriser l’arrosage', 'Arrosez lorsque les premiers centimètres du sol sont secs au toucher. Enfoncez votre doigt dans le terreau pour vérifier l’humidité. Un arrosage excessif peut entraîner des maladies fongiques.', 'Truffaut', 132 ),
('https://www.youtube.com/watch?v=d7BYBXGrpF8&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=5&ab_channel=TRUFFAUT', 'Fertiliser régulièrement', 'Apportez de l’engrais adapté à vos plantes durant leur période de croissance active (printemps-été). Réduisez ou cessez la fertilisation en automne et en hiver.', 'Truffaut', 209),
('https://www.youtube.com/watch?v=8z44UVIqJVw&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=6&ab_channel=TRUFFAUT', 'Tailler et entretenir', 'Éliminez les feuilles jaunies ou abîmées pour favoriser la croissance de nouvelles pousses. Taillez les plantes pour maintenir leur forme et stimuler leur développement.', 'Truffaut', 233 ),
('https://www.youtube.com/watch?v=lFPYt1XTTtA&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=7&ab_channel=TRUFFAUT', 'Rempoter si nécessaire', 'Lorsque les racines deviennent à l’étroit, rempotez vos plantes dans un contenant légèrement plus grand avec du terreau frais. Cela favorise une croissance saine.', 'Truffaut', 194 ),
('https://www.youtube.com/watch?v=rAw-_MsM5x8&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=8&ab_channel=TRUFFAUT', 'Bouturer pour multiplier', 'Multipliez vos plantes en prélevant des boutures. Placez-les dans l’eau ou directement dans le terreau jusqu’à l’apparition de racines.', 'Truffaut', 335),
('https://www.youtube.com/watch?v=oRfu6uUhmcY&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=9&ab_channel=TRUFFAUT', 'Surveiller les parasites', 'Inspectez régulièrement vos plantes pour détecter la présence de cochenilles, pucerons ou acariens. En cas d’infestation, nettoyez les feuilles avec un chiffon humide ou utilisez un traitement biologique.', 'Truffaut', 113),
('https://www.youtube.com/watch?v=iXs6R5YdM0E&list=PLh5ydXBmoUgQwvj2aUlNzzZYth2XXQkIW&index=10&ab_channel=TRUFFAUT', 'Récolter et profiter', 'Pour les plantes aromatiques et les salades, récoltez les feuilles au fur et à mesure de leur croissance. Cela stimule la plante et vous permet de profiter de vos cultures.', 'Truffaut', 153);

CREATE TABLE plant_garden (
  garden_id INT,
  plant_id INT,
  PRIMARY KEY (garden_id, plant_id)
);

CREATE TABLE plant_tag (
  plant_id INT,
  tag_id INT,
  PRIMARY KEY (plant_id, tag_id)
);

CREATE TABLE tutorial_tag(
  tutorial_id INT,
  tag_id INT,
  PRIMARY KEY (tutorial_id, tag_id)
);

CREATE TABLE user_tutorial (
  user_id INT,
  tutorial_id INT,
  PRIMARY KEY (user_id, tutorial_id)
);





