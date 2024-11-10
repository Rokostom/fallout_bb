import mysteryStranger from '../../items/images/mstr.svg';
import mysterySound from '../../items/audio/fallout_new_vegas_mystery_stranger.mp3';
import './style.css';

const Home = () => {
  const audio = new Audio(mysterySound);
  const onClick = () => {
    audio.volume = 0.2;
    audio.play();
  };
  return (
    <div className="mstr_container">
      <button className="mstr-button" onClick={onClick}>
        <img className="mstr" src={mysteryStranger} alt="" />
      </button>
    </div>
  );
};

export default Home;
