import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removerContato } from "../store/contatosSlice";

const ListaContatos = () => {
  const contatos = useSelector((state: RootState) => state.contatos.lista);
  const dispatch = useDispatch();

  return (
    <ul>
      {contatos.map((contato) => (
        <li key={contato.id}>
          {contato.nome} - {contato.email} - {contato.telefone}
          <button onClick={() => dispatch(removerContato(contato.id))}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaContatos;
