import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import './PaginaListaTarefas.css'
import { FaTrash } from "react-icons/fa";


function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (descricaoTarefa.trim()){
      const novaTarefa = {
      id: Date.now(),
      descricao: descricaoTarefa
    }
    setTarefas([...tarefas, novaTarefa]);
    setDescricaoTarefa("")
    }else {
      alert("Tarefa obrigatória.")
    }
  };

  const removerTarefa = (id) => {
    if (confirm("Deseja mesmo remover a tarefa?")){
      const tarefasAtualizadas = tarefas.filter((item) => item.id !== id)
      setTarefas(tarefasAtualizadas)
    }
  }

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <CampoCustomizado
        label="Tarefa"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={descricaoTarefa}
        onChange={(e) => setDescricaoTarefa(e.target.value)}
      />

      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar Tarefa
      </BotaoCustomizado>

      {tarefas.map((item) => {
        return <div key={item.id} className="paginaListaTarefas_item">
          <span>
            <input type="checkbox"/>
              {item.descricao}
          </span>
          <FaTrash color="red" onClick={() => removerTarefa(item.id)}/> 
        </div>
      })}

      {!tarefas.length && <span className="paginaListaTarefas_item_vazia">Nenhuma tarefa cadastrada</span>}
    </Principal>
  );
}

export default PaginaListaTarefas;