import { useEffect, useState } from "react";
const Home = () => {
    const [text,setText] = useState("")
    useEffect(() => {
        chrome.tabs.executeScript( {
          target: {tabId: id, allFrames: true},
            function: "window.getSelection().toString();"
          }, (selection) => {
            setText(selection[0])
          });
      }, [])
    return (
        <div id="output">{text}</div>
    );
};

export default Home;