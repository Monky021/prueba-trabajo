
CREATE TABLE preguntas(
    idPregunta SERIAL NOT NULL ,
    pregunta VARCHAR(100),
    idRespuestas INT NOT NULL,
    idTematica INT NOT NULL,
	PRIMARY KEY(idPregunta),
	FOREIGN KEY(idRespuestas) REFERENCES respuestas(idRespuesta),
	FOREIGN KEY (idTematica)  REFERENCES tematica(idTematica)
	
)
CREATE TABLE respuestas(
    idRespuesta SERIAL NOT NULL UNIQUE,
    Respuesta VARCHAR(500),
	PRIMARY KEY(idRespuesta)
    
    
)
CREATE TABLE tematica(
    idTematica SERIAL NOT NULL ,
    tematica VARCHAR(20) ,
	PRIMARY KEY(idTematica),
	UNIQUE(tematica)
	
)

CREATE TABLE usuarios(
    idUsuarios SERIAL NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    idPregunta INT NOT NULL,
    PRIMARY KEY (idUsuarios),
    FOREIGN KEY (idPregunta) REFERENCES preguntas(idPregunta)
)



INSERT INTO tematica (tematica) VALUES
    ()


