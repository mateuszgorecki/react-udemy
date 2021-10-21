import React from "react";

const Word = (props) => (
  <li>
    <p>
      Słowo po angielsku: <strong>{props.eng}</strong>
    </p>{" "}
    <p>
      Tłumaczenie: <strong>{props.pl}</strong>
    </p>
  </li>
);

export default Word;
