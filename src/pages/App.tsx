import React, { useState } from "react";
import Cronometro from '../components/Cronometro';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: " 02:00:00",
    },
    {
      tarefa: "JS",
      tempo: " 01:00:00",
    },
    {
      tarefa: "TS",
      tempo: " 01:30:00",
    }
  ])
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
