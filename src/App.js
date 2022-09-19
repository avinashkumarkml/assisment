import React, { useState } from "react";
import ReorderImages from "react-reorder-images";
// import "./styles.css";

export default function App() {
  const [image, setImage] = useState([
    
    {
      url:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      caption: "1"
    },
    {
      url:
        "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
      caption: "2"
    },
    {
      url:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      caption: "3"
    },
    {
      url:
        "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521__340.jpg",
      caption: "4"
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/a/ae/2020_Bugatti_Chiron_Super_Sport_300%2B_Prototype.jpg",
      caption: "5"
    },
   
  ]);
 
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}} >Extern Labs Test</h1>
      <h3 style={{textAlign: "center"}}>Change the images using drag and drop</h3>(
      <div style={{textAlign: "center", display: "grid"}}>
        <div   >
          <ReorderImages images={image}  />
        </div>
      </div>
    </div>
  );
}
