import React, { useState } from "react";

const MyAccountChouseImg = ({results, resultsWidth, resultsHeight, }) => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    let imgUrl = 'assets/images/products/accordion/2-800x900.jpg'

    return (
        <div>
            <style jsx>{`
              .inputFile {
                width: 0.1px !important;
                height: 0.1px !important;
                opacity: 0 !important;
                overflow: hidden !important;
                position: absolute !important;
                z-index: -1 !important;
              }

              .inputFile + label {
                background-color: #989494;
                display: inline-block;
              }

            `}
            </style>
            <div className="App">
                <form>
                    <input type="file"
                           accept=".jpg, .jpeg, .png"
                           name="file" id="file"
                           className="inputFile"
                           onChange={(event) => setSelectedFile(URL.createObjectURL(event.target.files[0]))}/>
                    <label htmlFor="file" style={{width:resultsWidth, height:resultsHeight}}>
                        <img src={selectedFile}  data-zoom-image={selectedFile}/>
                    </label>
                </form>
            </div>
        </div>

    );
};

export default MyAccountChouseImg;