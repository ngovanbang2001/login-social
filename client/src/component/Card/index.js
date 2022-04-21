import "./index.css";
const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="card ">
        <img src="img_avatar.png" alt="Avatar" />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect Engineer</p>
        </div>
      </div>
      <div className="card">
        <img src="img_avatar.png" alt="Avatar" />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect Engineer</p>
        </div>
      </div>
      <div className="card">
        <img src="img_avatar.png" alt="Avatar" />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect Engineer</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
