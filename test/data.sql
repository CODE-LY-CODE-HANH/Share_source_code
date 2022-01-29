CREATE TABLE TimeDay (
    id int NOT NULL AUTO_INCREMENT,
	time TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE "TimeDay" (
	"id"	INTEGER,
	"time"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
)

INSERT INTO `TimeDay`(`id`, `time`) VALUES (null , 'dfsdfdsfdfsd')

UPDATE `TimeDay` SET `time`='sfsdfdfd' WHERE id = 0

CREATE TABLE "LinkAnh" (
	"id"	INTEGER,
	"link"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);

DELETE FROM LinkAnh