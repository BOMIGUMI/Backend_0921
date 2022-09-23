
/* 데이터 조작 언어 (DML : Data Mulipulation Language) */
use world;
show tables;
DESC city;  #주석 => city가 어떤 구조로 만들어 졌는지 확인

/*  <기억해야함 !!!>
select 필드명 from 테이블명

join 테이블명

on 조인 조건

where 조건

order by 필드명 순서

group by 필드명

having 그룹조건

limit 숫자 offset 숫자;

select * from city where countrycode='kor'
	
 */

 SELCET * FROM city;
 SELCET * FROM city WHERE countrycode='KOR';    #필드명에 대소문자 구별은 안함
 SELCET * FROM city WHERE District='Kwangju';
 SELCET `name`, Population FROM city WHERE CountryCode='KOR';
 SELECT COUNT(*) FROM city;

#호남지역 도시
SELECT * FROM city WHERE district='Kwangju' 
	OR district='Chollabuk' OR district='Chollanam';

#한국의 100만보다 큰 도시중에서 인구수가 짝수인 도시
SELECT * FROM city WHERE countrycode='KOR' 
	AND population>1000000 AND population%2=0;

#한국의 100만보다 크고 200만보다 작은 도시
SELECT * FROM city WHERE countrycode='KOR' 
	AND population>1000000 AND population<2000000;

#한국의 100만보다 크고 200만보다 작은 도시
SELECT * FROM city WHERE countrycode='KOR' 
	AND population>1000000 AND population<2000000;
SELECT * FROM city WHERE countrycode='KOR' 
	AND population BETWEEN 100000 AND 2000000;

# 전라남북도의 도시
SELECT * FROM city WHERE countrycode='KOR' AND district LIKE 'cholla%';

# 인구수가 800만 이상의 도시를 인구수의 내림차순으로 조회
SELECT * FROM city WHERE population>8000000 ORDER BY population DESC;

# 전라남도 도시중 이름으로 나타내기
SELECT * FROM city WHERE district='chollanam' ORDER BY NAME;

# 한국의 도시를 district는 오름차순, Name도 오름차순
SELECT * FROM city WHERE countrycode='KOR'
	ORDER BY district, NAME;

# 광역시도별로 도시 인구수가 많은 것부터 보여줘라.
# 한국의 도시를 district는 오름차순, 인구수는 내림차순
SELECT * FROM city WHERE countrycode='KOR'
	ORDER BY district, population DESC;

# 함수
# count(*) - 건수
SELECT COUNT(*) FROM city WHERE countrycode='KOR';

SELECT SUM(population) FROM city WHERE countrycode='KOR';
SELECT AVG(population) FROM city WHERE countrycode='KOR';

SELECT AVG(population) AS average FROM city WHERE countrycode='KOR';	# Aliasing 평균
SELECT max(population) AS average FROM city WHERE countrycode='KOR';	# 제일 많은 인구 도시
SELECT min(population) AS average FROM city WHERE countrycode='KOR';	# 제일 적은 인구 도시

SELECT avg(population) ,max(population), min(population)
	AS average FROM city WHERE countrycode='KOR';

# 광역시도별 인구수
SELECT district, SUM(population) FROM city WHERE countrycode='KOR'
	GROUP BY district;	

# 광역시도별 인구수를 내림차순으로
SELECT district, SUM(population) FROM city WHERE countrycode='KOR'
	GROUP BY district ORDER BY SUM(population) DESC;

# 전라남도의 도시
SELECT GROUP_CONCAT(NAME) FROM city WHERE district='chollanam';

# 한국의 광역시도
SELECT GROUP_CONCAT(DISTINCT district) FROM city WHERE countrycode='kor';

# 광역시도별 도시의 갯수
SELECT district, COUNT(*) FROM city WHERE countrycode='KOR'
	GROUP BY district;

# 광역시도별 도시의 갯수 (많은순)
SELECT district, COUNT(*) FROM city WHERE countrycode='KOR'
	GROUP BY district ORDER BY COUNT(*) DESC, district;

# 광역시도별 도시의 갯수가 5개이상
SELECT district, COUNT(*) FROM city WHERE countrycode='KOR'
	GROUP BY district HAVING COUNT(*)>=5;

# 광역시도별 도시의 갯수가 5개이상을 내림차순으로 정렬
SELECT district, COUNT(*) FROM city WHERE countrycode='KOR'
	GROUP BY district HAVING COUNT(*)>=5 ORDER BY COUNT(*) DESC;

# 도시의 갯수가 100개 이상인 국가를 도시갯수 내림차순으로 정렬
SELECT countrycode, COUNT(*) FROM city 
	 GROUP BY countrycode HAVING COUNT(*)>=100 ORDER BY COUNT(*) DESC;

# 도시의 갯수가 많은 5개 국가코드
SELECT COUNTRYCODE, COUNT(*) FROM city
	GROUP BY COUNTRYCODE ORDER BY COUNT(*) DESC
	LIMIT 5;

# 인구가 많은 10개 국가코드
SELECT countrycode, sum(population) FROM city
	GROUP BY population ORDER BY sum(population) DESC
	LIMIT 10; 

# 인구가 많은 10개 국가코드
SELECT countrycode, sum(population) FROM city
	GROUP BY population ORDER BY sum(population) DESC
	LIMIT 5 OFFSET 5; # 5개를 건너뛴 다음 5개를 추출  

# 도시의 인구가 많은 국가 (6위 ~ 10위 까지), 관계형 데이터는 무조건 join을 쓴다 
SELECT country.NAME, SUM(CITY.population) FROM city
	INNER JOIN country ON city.CountryCode=country.CODE	
	GROUP BY CITY.COUNTRYCODE ORDER BY SUM(CITY.population) DESC
	LIMIT 5 OFFSET 5;

# 인구가 많은전세계 도시 top10의 국가명, 도시명, 인구수
SELECT country.NAME, city.Population FROM city
	JOIN country ON city.CountryCode=country.Code
	ORDER BY city.Population DESC LIMIT 10;

# 대륙별로 국가숫자, GNP합, 평균 국가별 GNP 구하기
SELECT continent, round(SUM(gnp),-3), round(AVG(gnp),-3) FROM country
	GROUP BY continent;

SELECT continent, round(SUM(gnp),-3) AS GNP_SUM, round(AVG(gnp),-3) AS GNP_AVG FROM country
	GROUP BY continent;

#아시아 대륙에서 인구가 가장 많은 도시 10갸를 내림차순으로 (대륙, 국가명, 인구수,  도시명)
SELECT country.Continent, country.Name, city.Name, city.Population FROM city
	JOIN country ON city.CountryCode=country.Code
	WHERE country.Continent='Asia'
	ORDER by city.Population desc
	LIMIT 10;

# 전 세계에서 인구가 가장 많은 도시에서 사용하는 공식 언어 (국가명, 인구수, 언어)
SELECT c.name, c.Population, l.`Language` FROM city AS c
	JOIN countrylanguage AS l ON c.CountryCode=l.CountryCode
	WHERE l.IsOfficial='T'
	ORDER BY c.Population DESC 

# 국가별로 gnp가 가장 높은 top10만 뽑기
SELECT continent, gnp FROM country
	ORDER by gnp desc LIMIT 10;


UPDATE city
	SET NAME='Gwangju', district='Gwangju'
	WHERE id=2336;
	
SELECT * FROM city WHERE NAME='Gwangju';

# 전라남도 도시의 인구를 20만으로 변경
UPDATE city 
	SET population=200000 where district='chollanam';

# 전라- 로시작하는 지역의 도시
SELECT * FROM city WHERE district LIKE 'cholla%';

#해남이 전라-로 시작하는 지역의 도시에 추가
INSERT INTO city
	(NAME, countrycode, district, population)
	VALUES ('Haenam', 'KOR', 'Chollanam', 100000);
SELECT * FROM city WHERE district LIKE 'cholla%';

# 장성이 전라남도의 도시에 추가
INSERT INTO city
	VALUES (DEFAULT, 'Jangsung', 'KOR', 'Chollanam', 100000);
SELECT * FROM city WHERE district LIKE 'chollanam';

SELECT * FROM city ORDER BY id DESC LIMIT 5;

#() => 가상의 테이블
UPDATE city, (SELECT * FROM city WHERE district='Chollanam') b
	SET city.Population=b.Population+50000
	WHERE city.id=b.id;
SELECT * FROM city WHERE district LIKE 'chollanam' # => 50000이 추가됨