import React, { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState(true);
  const [asset, setAsset] = useState([]);
  const [assets, setAssets] = useState([]);
  const [card, setCard] = useState(false);


  useEffect(() => {
    fetch("http://localhost:3001/list")
      .then((response) => response.json())
      .then((responseData) => {
        console.log("server", responseData)
        setAssets(responseData)
      });
  },[]);

  console.log(assets);
  return (
    <>
    <div className="container">
      {list ? (
        <div className="list-group">
          {assets.map((asset) => (
            <li
              className="list-group-item list-group-item-action"
            >
              {asset._id} - {asset.id} - {asset.assetTag}
            </li>
          ))}
        </div>
      ) : null}
    </div>

  </>
  )
}

export default App;
