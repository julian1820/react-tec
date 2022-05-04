import * as React from 'react';

const ItemListContainer = () => {
  const greeting = 'Bienvenidos';

  const [isShow, setShow] = React.useState(true);

  const handleToggle = () => {
    setShow(!isShow);
  };

  return (
    <div>
      <button onClick={handleToggle} type="button">
        Toggle
      </button>

      {isShow ? <Welcome text={greeting} /> : null}
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};


    export default ItemListContainer;