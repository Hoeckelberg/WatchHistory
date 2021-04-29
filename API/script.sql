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
    create_studio varchar(255),
    name varchar(255),
    publisher varchar(255),
    description varchar(255),
    break boolean,
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
    watchtime int,
    PRIMARY KEY(episode_id, season_id),
    FOREIGN KEY(season_id) REFERENCES tbl_seasons(season_id)
);

create table tbl_seriesProgress (
    series_id int not null,
    user_id int not null,
    season int,
    episode int,
    PRIMARY KEY(series_id, user_id),
    FOREIGN KEY(series_id) REFERENCES tbl_series(id),
    FOREIGN KEY(user_id) REFERENCES tbl_user(id)
);