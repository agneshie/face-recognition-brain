import "./ImageLinkForm.styles.css";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return(
    <div>
      <p>This Magic Brain will detect faces in your photos. Give it a try.</p>
      <div className="center">
        <div className="form center">
          <input 
            className="form-input" 
            type="text"
            name="input-url" 
            placeholder="Input URL" 
            onChange={onInputChange}
          />
          <button 
            className="form-btn" 
            
            onClick={onButtonSubmit}
          >
            Detect
          </button>
          
        </div>
        
      </div>
    </div>
  );
}

export default ImageLinkForm;