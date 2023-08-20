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
        data-testid="linkedin-link"
        href="https://www.linkedin.com/in/victorcurilao"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-linkedin href__linkedin"></i>
      </a>

      <a
        href="https://github.com/victoredu22"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-github href__github--icon"></i>
      </a>

      <a href="mailto:victor.edu22@gmail.com">
        <i className="bi bi-google href__google--icon"></i>
      </a>

      <div className="row"></div>
    </div>
  );
};
