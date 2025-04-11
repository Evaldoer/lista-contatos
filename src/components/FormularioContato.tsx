import { useState } from "react";
import { useDispatch } from "react-redux";
import { adicionarContato } from "../store/contatosSlice";

const FormularioContato = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      adicionarContato({ id: Date.now(), nome, email, telefone })
    );
    setNome("");
    setEmail("");
    setTelefone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormularioContato;
