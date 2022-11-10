import {
  useState
} from "react";
import Child from "./Child";


const TextInput = (props) => {
  const { data } = props;

  const [ textInput, setTextInput ] = useState("");

  const handleChange = (event) => {
    const newString = event.target.value;

    setTextInput(() => {
      return newString;
    })
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => handleChange(event)}
        value={textInput}
      />

      <h2>{textInput}</h2>

      <Child data={data} />
    </div>
  )
};


export default TextInput;