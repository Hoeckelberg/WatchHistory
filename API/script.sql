drop database if exists db_progress;
create database if not exists db_progress;

create table tbl_user (
    id int not null auto_increment,
    username varchar(255),
    email varchar(255),
    passwd varchar(255),
    PRIMARY KEY(id)
);
create table tbl_series (
    id int not null auto_increment,
    creator_studio varchar(255),
    name varchar(255),
    publisher varchar(255),
    description varchar(255),
    break boolean default NULL,
    Img varchar(255),
    PRIMARY KEY (id)
);

create table tbl_seasons(
    season_id int not null auto_increment,
    series_id int not null,
    num_episodes int,
    release_ssn date,
    PRIMARY KEY(season_id, series_id),
    FOREIGN KEY(series_id) REFERENCES tbl_series(id)
);
create table tbl_episodes(
    episode_id int not null auto_increment,
    season_id int not null,
    title varchar(255),
    description varchar(255),
    watchtime int,
    PRIMARY KEY(episode_id, season_id),
    FOREIGN KEY(season_id) REFERENCES tbl_seasons(season_id)
);

create table tbl_seriesProgress (
    id int not null auto_increment,
    series_id int not null,
    user_id int not null,
    season int,
    episode int,
    PRIMARY KEY(id, series_id, user_id),
    FOREIGN KEY(series_id) REFERENCES tbl_series(id),
    FOREIGN KEY(user_id) REFERENCES tbl_user(id)
);


insert into tbl_user(username, email, passwd) VALUES ('N1CK_69', 'SixNine@69.com', '69'), ('TEST1', 'Test@Test.com', '123'), ('TEST2', 'Test@Test.com', '123');

insert into tbl_series(creator_studio, name, publisher, description, break) VALUES ('Test_Studio', 'TestSerie', 'Bs.to', 'Isekai', '0'), ('Test_Studio', 'TestSerie2', 'Bs.to', 'Isekai', '1');

insert into tbl_seasons(series_id, num_episodes, release_ssn) VALUES (1, 10, '2020-05-05'), (1, 15, '2021-01-01'), (2, 4, '2018-04-16');

insert into tbl_episodes(season_id, title, description, watchtime)  VALUES (1, 'Black Clover', 'abwadwadada', 24), (1, 'Black Clover', 'xxxx', 24), (1, 'Black Clover', '123', 24);

insert into tbl_seriesProgress(series_id, user_id, season, episode) VALUES (1, 1, 1, 1), (1, 1, 2, 1);
