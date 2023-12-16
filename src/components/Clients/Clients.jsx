import styles from "./Clients.module.scss";

function Clients() {
  return (
    <div className={styles.clients}>
      {["aws", "hooli", "lyft", "pied-piper-hat", "reddit-alien", "stripe"].map(
        (client) => (
          <img
            className={styles.client}
            key={client}
            src={`imgs/clients/fa-brands_${client}.svg`}
            alt={`${client} logo`}
          />
        )
      )}
    </div>
  );
}

export default Clients;
