USE backend_nest;

insert into location (street, city, postal_code, country) values ('Golf View', 'Pochayiv', 48, 'Ukraine');
insert into location (street, city, postal_code, country) values ('Delladonna', 'Garland', 100, 'United States');
insert into location (street, city, postal_code, country) values ('Mcbride', 'Karlstad', 35, 'Sweden');
insert into location (street, city, postal_code, country) values ('Emmet', 'Wu’an', 39, 'China');
insert into location (street, city, postal_code, country) values ('Leroy', 'Desē', 16, 'Ethiopia');
insert into location (street, city, postal_code, country) values ('Hoard', 'Pagsañgahan', 83, 'Philippines');
insert into location (street, city, postal_code, country) values ('Gina', 'Dongtundu', 59, 'China');
insert into location (street, city, postal_code, country) values ('Schurz', 'Strawczyn', 45, 'Poland');
insert into location (street, city, postal_code, country) values ('Debra', 'Tapon', 79, 'Philippines');
insert into location (street, city, postal_code, country) values ('Hermina', 'Örebro', 72, 'Sweden');

insert into author (name, email, bio, birthday, photo, id_location) values ('Lanita', 'lselburn0@google.pl', 'enim in tempor turpis nec', '2022-10-31', 'http://dummyimage.com/150x100.png/dddddd/000000', 1);
insert into author (name, email, bio, birthday, photo, id_location) values ('Sandor', 'sdonnelly1@weather.com', 'bibendum imperdiet nullam orci', '2021-12-04', 'http://dummyimage.com/162x100.png/dddddd/000000', 2);
insert into author (name, email, bio, birthday, photo, id_location) values ('Regan', 'rhestrop2@ft.com', 'nulla ac enim in tempor', '2023-04-25', 'http://dummyimage.com/104x100.png/cc0000/ffffff', 3);
insert into author (name, email, bio, birthday, photo, id_location) values ('Marlane', 'mwhiskerd3@baidu.com', 'arcu libero rutrum ac lobortis', '2023-01-28', 'http://dummyimage.com/223x100.png/ff4444/ffffff', 4);
insert into author (name, email, bio, birthday, photo, id_location) values ('Mateo', 'mniemetz4@abc.net.au', 'nunc vestibulum ante ipsum', '2023-02-13', 'http://dummyimage.com/194x100.png/5fa2dd/ffffff', 5);
insert into author (name, email, bio, birthday, photo, id_location) values ('Laughton', 'lriddock5@telegraph.co.uk', 'ultrices phasellus id sapien', '2022-06-25', 'http://dummyimage.com/230x100.png/dddddd/000000', 6);
insert into author (name, email, bio, birthday, photo, id_location) values ('Perry', 'pyurlov6@etsy.com', 'duis aliquam convallis nunc', '2022-12-30', 'http://dummyimage.com/116x100.png/cc0000/ffffff', 7);
insert into author (name, email, bio, birthday, photo, id_location) values ('Glen', 'gworsall7@hhs.gov', 'sapien cum sociis natoque', '2022-10-03', 'http://dummyimage.com/140x100.png/5fa2dd/ffffff', 8);
insert into author (name, email, bio, birthday, photo, id_location) values ('Marina', 'mmacneil8@weebly.com', 'felis sed interdum venenatis', '2023-05-16', 'http://dummyimage.com/213x100.png/dddddd/000000', 9);
insert into author (name, email, bio, birthday, photo, id_location) values ('Jilleen', 'jshorbrook9@mlb.com', 'eget vulputate ut ultrices vel', '2023-01-23', 'http://dummyimage.com/163x100.png/dddddd/000000', 10);

insert into category (name, color, description, photo, min_age) values ('Sitework & Site Utilities', 'red', 'duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a', 'http://dummyimage.com/156x100.png/dddddd/000000', 85);
insert into category (name, color, description, photo, min_age) values ('Plumbing & Medical Gas', 'red', 'donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies', 'http://dummyimage.com/130x100.png/cc0000/ffffff', 54);
insert into category (name, color, description, photo, min_age) values ('Roofing (Metal)', 'red', 'ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat', 'http://dummyimage.com/125x100.png/cc0000/ffffff', 53);
insert into category (name, color, description, photo, min_age) values ('Plumbing & Medical Electric', 'red', 'lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis', 'http://dummyimage.com/198x100.png/5fa2dd/ffffff', 50);
insert into category (name, color, description, photo, min_age) values ('Wall Protection', 'red', 'tortor sollicitudin mi sit amet lobortis sapien sapien non mi', 'http://dummyimage.com/112x100.png/dddddd/000000', 51);
insert into category (name, color, description, photo, min_age) values ('Ornamental Railings', 'red', 'in porttitor pede justo eu massa donec dapibus duis at velit eu est congue', 'http://dummyimage.com/153x100.png/dddddd/000000', 34);
insert into category (name, color, description, photo, min_age) values ('RF Shielding', 'red', 'eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis', 'http://dummyimage.com/186x100.png/cc0000/ffffff', 18);
insert into category (name, color, description, photo, min_age) values ('Construction Clean and Final Clean', 'red', 'quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum', 'http://dummyimage.com/183x100.png/ff4444/ffffff', 16);
insert into category (name, color, description, photo, min_age) values ('Curb & Gutter', 'red', 'nisi venenatis tristique fusce congue diam id ornare imperdiet sapien', 'http://dummyimage.com/244x100.png/5fa2dd/ffffff', 8);
insert into category (name, color, description, photo, min_age) values ('Framing (Steel)', 'red', 'vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus', 'http://dummyimage.com/239x100.png/dddddd/000000', 81);



insert into editorial (cif, name, foundationYear) values ('111111-2', 'Freida', 1983);
insert into editorial (cif, name, foundationYear) values ('222222-5', 'Hyman', 2008);
insert into editorial (cif, name, foundationYear) values ('8189408-4', 'Karalee', 2005);
insert into editorial (cif, name, foundationYear) values ('8189408-5', 'Caye', 1987);
insert into editorial (cif, name, foundationYear) values ('8182408-5', 'Rosemary', 2011);
insert into editorial (cif, name, foundationYear) values ('8189233-4', 'Cozmo', 2005);
insert into editorial (cif, name, foundationYear) values ('5487593-3', 'Avictor', 2008);
insert into editorial (cif, name, foundationYear) values ('3421035-3', 'Moyna', 2002);
insert into editorial (cif, name, foundationYear) values ('9935265-5', 'Barnebas', 2003);
insert into editorial (cif, name, foundationYear) values ('2338012-2', 'Easter', 2005);

INSERT INTO `backend_nest`.`book` (`title`, `isbn`, `price`, `quantity`, `published`, `sinopsis`, `release`, `num_pages`, `photo`, `id_author`, `id_editorial`) VALUES ('book1', '111111', '11', '1', '1', 'sinopsis', '2023-01-01', '12', 'https://localhost:3000/photo', '1', '1');
INSERT INTO `backend_nest`.`book` (`title`, `isbn`, `price`, `quantity`, `published`, `sinopsis`, `release`, `num_pages`, `photo`, `id_author`, `id_editorial`) VALUES ('book2', '222222', '11', '1', '1', 'sinopsis', '2023-01-01', '12', 'https://localhost:3000/photo', '1', '1');
INSERT INTO `backend_nest`.`book` (`title`, `isbn`, `price`, `quantity`, `published`, `sinopsis`, `release`, `num_pages`, `photo`, `id_author`, `id_editorial`) VALUES ('book3', '333333', '11', '1', '1', 'sinopsis', '2023-01-01', '12', 'https://localhost:3000/photo', '2', '1');
INSERT INTO `backend_nest`.`book` (`title`, `isbn`, `price`, `quantity`, `published`, `sinopsis`, `release`, `num_pages`, `photo`, `id_author`, `id_editorial`) VALUES ('book4', '444444', '11', '1', '1', 'sinopsis', '2023-01-01', '12', 'https://localhost:3000/photo', '2', '1');
INSERT INTO `backend_nest`.`book` (`title`, `isbn`, `price`, `quantity`, `published`, `sinopsis`, `release`, `num_pages`, `photo`, `id_author`, `id_editorial`) VALUES ('book5', '555555', '11', '1', '1', 'sinopsis', '2023-01-01', '12', 'https://localhost:3000/photo', '3', '1');
INSERT INTO `backend_nest`.`book` (`title`, `isbn`, `price`, `quantity`, `published`, `sinopsis`, `release`, `num_pages`, `photo`, `id_author`, `id_editorial`) VALUES ('book6', '666666', '11', '1', '1', 'sinopsis', '2023-01-01', '12', 'https://localhost:3000/photo', '4', '1');

INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('1', '1');
INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('1', '2');
INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('1', '3');
INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('2', '1');
INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('2', '2');
INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('3', '1');
INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('4', '3');
INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('5', '1');
INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('6', '1');
INSERT INTO `backend_nest`.`book_category` (`id_book`, `id_category`) VALUES ('6', '2');

INSERT INTO `backend_nest`.`user` (`username`, `email`, `password`, `role`) VALUES ('user1', 'user1@gmail.com', '1234', 'user');
INSERT INTO `backend_nest`.`user` (`username`, `email`, `password`, `role`) VALUES ('user2', 'user2@gmail.com', '1234', 'admin');

INSERT INTO `backend_nest`.`booking` (`price`, `startDate`, `finishDate`, `id_user`, `id_book`) VALUES ('12.3', '2023-01-01', '2023-02-01', '1', '1');
INSERT INTO `backend_nest`.`booking` (`price`, `startDate`, `finishDate`, `id_user`, `id_book`) VALUES ('12.3', '2023-01-01', '2023-02-01', '2', '1');



