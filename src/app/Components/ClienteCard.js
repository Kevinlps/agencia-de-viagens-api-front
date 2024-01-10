import styles from '../page.module.css'
const ClienteCard = ({ cliente }) => {
    return (
      <div className={styles.clienteCard}>
        <h2>{cliente.nome}</h2>
        <p><strong>ID:</strong> {cliente.id}</p>
        <p><strong>Endereço:</strong> {cliente.endereco}</p>
        <p><strong>CPF:</strong> {cliente.cpf}</p>
        <p><strong>Idade:</strong> {cliente.idade}</p>
        <p><strong>Email:</strong> {cliente.email}</p>
       <p><strong>Senha:</strong> {cliente.senha}</p> 
      </div>
    );
  };
  
  export default ClienteCard;
  