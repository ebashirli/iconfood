import styles from "./AccordionList.module.scss";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function AccordionList() {
  const categories = [
    {
      id: 1,
      category: "Baguette",
      brands: [
        "Croissant",
        "Croissant",
        "Croissant",
        "Baguette",
        "Brioche",
        "Sourdough",
      ],
    },
    { id: 2, category: "Ciabatta", brands: ["Brioche", "Croissant"] },
    { id: 3, category: "Sourdough", brands: ["Croissant", "Brioche"] },
  ];

  return (
    <div className={styles.container}>
      {categories.map(({ id, category, brands }) => (
        <Accordion className={styles.accordion} key={id}>
          <AccordionSummary
            className={styles.summary}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ padding: 0, margin: 0 }}
          >
            <Typography style={{ padding: 0, margin: 0 }}>
              {category}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ padding: 0, margin: 0 }}
            className={styles.details}
          >
            {brands.map((brand, i) => (
              <Link key={brand + i} className={styles.detail}>
                <Typography>{brand}</Typography>
              </Link>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionList;
