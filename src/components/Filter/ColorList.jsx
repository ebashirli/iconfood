import styles from "./ColorList.module.scss";

function ColorList() {
  const colors = [
    { label: "Croissant", code: "#E74040", id: 1 },
    { label: "Brioche", code: "#252B42", id: 2 },
    { label: "Ciabatta", code: "#B73225", id: 3 },
    { label: "Croissant", code: "#004E7C", id: 4 },
  ];

  return (
    <div className={styles.container}>
      <h5>Color</h5>
      <ul>
        {colors.map(({ id, label, code }) => (
          <li key={id}>
            <div
              className={styles.circle}
              style={{ backgroundColor: code }}
            ></div>
            <p>{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;
