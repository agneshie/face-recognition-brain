import "./Rank.styles.css";

const Rank = ({ name, entries }) => {
  return(
    <div className="rank">
      <div className="font-small">
        {`${name}, your current entries count is...`}  
      </div>
      <div className="font-large">
        {entries}  
      </div>
    </div>
  );
}

export default Rank;