import React, { useState } from "react";
import "../app.css";
import { createUser } from "../utils/localstorage";

interface ContainerProps {
  close: () => void;
}

const NewUser: React.FC<ContainerProps> = ({ close }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createUser(name);
    close();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className="form-container">
      <h3>
        ¡Bienvenido! <i className="bi bi-lightning text-warning"></i>
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group mt-4">
          <label className="text-center" htmlFor="nickname">
            Ingresa tu nombre
          </label>
          <input
            type="text"
            id="nickname"
            className="nickname"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="ingresa tu nombre"
          />
        </div>
        <button type="submit" className="submit-button w-100">
          Comenzar
        </button>
      </form>
    </div>
  );
};

export default NewUser;
