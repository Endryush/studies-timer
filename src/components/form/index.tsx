import React from "react";
import Button from "../button";

function Form() {
  return (
    <form action="">
      <div>
        <label htmlFor="tarefa">Adicione uma matéria</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Button />
    </form>
  );
}

export default Form;
