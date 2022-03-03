import React, { useState } from "react";
import style from "./App.module.css";

function App() {
  const [message, setMessage] = useState("");
  const [tagsArr, setTagsArr] = useState([]);
  const [empty, setEmpty] = useState(true);

  const handleClick = () => {
    setTagsArr([...tagsArr, message]);
    setMessage("");
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setEmpty(true);
    }

    setMessage(e.target.value);
  };

  const handleDeleteClick = (index) => {
    setTagsArr(tagsArr.filter((item, id) => index !== id));
    // setTagsArr([...tagsArr.slice(0, index), ...tagsArr.slice(index + 1)]);
  };

  const handleBlur = (e) => {
    setEmpty(e.target.value);
  };

  return (
    <div className={style.general}>
      <div className={style.main}>
        <input
          className={style.input}
          value={message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button
          className={style.button}
          onClick={handleClick}
          disabled={message ? false : true}
        >
          Add
        </button>
        <p className={style.error}>
          {!empty ? "Поле ввода не должно быть пустым!" : ""}
        </p>
      </div>
      <div className={style.tags}>
        {tagsArr.map((item, index) => (
          <button className={style.tagsButton}>
            {item}
            <span className={style.x} onClick={() => handleDeleteClick(index)}>
              X
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
