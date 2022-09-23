/* 데이터 조작언어 */
/* 2. 수정(UPDATE)
UPDATE 테이블명
	SET 필드명=값[, 필드명=값, 필드명=값, ...]
	WHERE 조건;
*/
# Kwangju를 Gwangju로 수정
UPDATE city
	SET NAME='Gwangju', district='Gwangju'
	WHERE id=2336;
# 전라남도 도시의 인구를 20만으로 변경
UPDATE city
	SET population=200000
	WHERE district='Chollanam';
# 전라남도 도시의 인구를 5만명 증가시킴
UPDATE city, (SELECT * FROM city WHERE district='Chollanam') b
	SET city.Population=b.Population+50000
	WHERE city.id=b.id;

/* 3. 생성(INSERT) 
INSERT INTO city
	(필드명)
	VALUES (필드값);
*/
INSERT INTO city
	(NAME, countrycode, district, population)
	VALUES ('Haenam', 'KOR', 'Chollanam', 100000);
INSERT INTO city
	VALUES (DEFAULT, 'Jangsung', 'KOR', 'Chollanam', 100000);
# 기존 테이블의 데이터로 데이터를 추가하는 방법
create table citycopy like city;
show tables;
select * from citycopy;
insert into citycopy select * from city;
select * from citycopy;

/* 4. 삭제(DELETE) 
DELETE FROM 테이블명
	WHERE 조건
*/
DELETE FROM citycopy
	WHERE countrycode='AFG';
DELETE FROM citycopy
	WHERE population>9000000;


## 테이블의 모든 데이터 삭제
TRUNCATE TABLE 

#테이블 이름 다시설정
RENAME TABLE [테이블명적기]

#테이블 구조 변경1
ALTER TABLE tigers
	ADD isdeleted INT DEFAULT 0;
SELECT * FROM tigers;


#테이블 구조 변경2
ALTER TABLE tigers
	CHANGE `POSITION` `position` VARCHAR(10);
SELECT * FROM tigers;

#테이블 생성
CREATE TABLE tigers if NOT EXISTS tigers(
); # => tigers 테이블이 없으면 생성해줘라

# 뷰 생성
CREATE VIEW largecity
	AS SELECT * FROM city
		WHERE population>=7000 WITH CHECK OPTION;
SHOW TABLES;                                            # => largecity라는것이 생성됨
UPDATE largecity SET countrycode='GBR' WHERE id=206;
SELECT * FROM largecity;                                 # => 값을 바꿀수 도 있음



# 데이터 테이블 만들기 (기아타이거즈 => id, 선수명, 백넘버, 포지션)
CREATE TABLE tigers (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	palyer VARCHAR(10) NOT  NULL,
	backNo INT,
	POSITION VARCHAR(10)
); # => 테이블 생성됨
DESC tigers; #=> 생성확인
# tigers 안에 선수, 백넘버, 포지션 값 넣기
INSERT INTO tigers
	VALUES (DEFAULT, '양현종', 54, '투수');
INSERT INTO tigers (player, backno, POSITION)
	VALUES ('이의리', '48', '투수');
INSERT INTO tigers (player, backno, POSITION)
	VALUES ('박동원', '10', '포수'),('김선빈', '3', '내야수'),
		    ('박찬호', '1', '내야수'),('나성범', 47', '외야수'),
		    ('소크라테스', '30', '외야수');