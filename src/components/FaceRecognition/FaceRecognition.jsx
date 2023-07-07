import "./FaceRecognition.styles.css";

const FaceRecognition = ({imageUrl, box}) => {
  return(
    <div className="center">
      <div className="image-box">
        <img id="input-image" className="image" alt="" src={imageUrl} />
        <div 
          className="bounding-box" 
          style={{
            top: box.topRow, 
            right: box.rightCol, 
            bottom: box.bottomRow, 
            left: box.leftCol
          }}
        ></div>
      </div>
      
    </div>
  );
}

export default FaceRecognition;