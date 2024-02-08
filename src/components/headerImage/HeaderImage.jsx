import omelette from "./image-omelette.jpeg";
import './headerImage.css'

const HeaderImage = () => {
  return (
    <div className="imageDiv">
      <img src={omelette} alt="omelette" />
    </div>
  );
};

export default HeaderImage;
