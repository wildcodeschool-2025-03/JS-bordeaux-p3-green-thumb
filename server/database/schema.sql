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

CREATE TABLE plant (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  icon VARCHAR(20) NOT NULL,
  description TEXT NOT NULL,
  plant_exposition VARCHAR(10) NOT NULL,
  sowing VARCHAR(100) NOT NULL,
  watering INT NOT NULL,
  harvesting VARCHAR(100) NOT NULL,
  toxic BOOLEAN,
  edible BOOLEAN
);

CREATE TABLE garden (
  id INT PRIMARY KEY AUTO_INCREMENT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

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

CREATE TABLE tutorial (
  id INT PRIMARY KEY AUTO_INCREMENT,
  url VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  duration TIME
);

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

CREATE TABLE tag_tutorial (
  tutorial_id INT,
  tag_id INT,
  PRIMARY KEY (tutorial_id, tag_id)
);

CREATE TABLE user_tutorial (
  user_id INT,
  tutorial_id INT,
  PRIMARY KEY (user_id, tutorial_id)
);





