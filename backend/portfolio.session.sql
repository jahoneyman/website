-- @block
CREATE TABLE Projects(id INT PRIMARY KEY AUTO_INCREMENT, projectName VARCHAR(255) NOT NULL, photos TEXT[], technologiesUsed TEXT[]);

--@block
CREATE TABLE Projects (project_id INT PRIMARY KEY AUTO_INCREMENT, projectName VARCHAR(255) NOT NULL, photos TEXT);

--@block
ALTER TABLE Projects ADD technologiesUsed VARCHAR(255);


-- @block
DROP  TABLE Projects;

-- @block
DESCRIBE Projects;

-- @block
INSERT INTO Projects(projectName, photos, technologiesUsed) VALUES ('Job Tracker', '{"photo1", "photo2", "photo3", "photo4"}', '{"HTML", "CSS", "PHP", "SQL"}');

-- @block
SELECT * FROM Projects;