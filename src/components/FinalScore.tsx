interface ContainerProps {
  close: () => void;
}
export const FinalScore: React.FC<ContainerProps> = ({ close }) => {
  return (
    <div className="form-container">
      <h3>
        <i className="bi bi-lightning text-warning"></i>Felicidades
        <i className="bi bi-lightning text-warning"></i>
      </h3>

      <p className="text-left">
        ¡has completado el juego! Si tienes más preguntas o necesitas ayuda en
        el futuro, no dudes en consultarme por privado.
      </p>

      <a
        href="https://www.linkedin.com/in/victorcurilao"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="bi bi-linkedin"
          style={{ fontSize: "1.6rem", color: "#0A66C2" }}
        ></i>
      </a>

      <a
        href="https://github.com/victoredu22"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="bi bi-github"
          style={{ fontSize: "1.6rem", color: "black", marginLeft: "10px" }}
        ></i>
      </a>

      <a href="mailto:victor.edu22@gmail.com">
        <i
          className="bi bi-google"
          style={{ fontSize: "1.6rem", color: "#eb493b", marginLeft: "10px" }}
        ></i>
      </a>

      <div className="row"></div>
    </div>
  );
};
