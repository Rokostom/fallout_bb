import background from '../../items/video/FondFallout.mp4';
import './style.css';

const Home = () => {
  return (
    <div className="home_container">
      <video className="video_background" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
