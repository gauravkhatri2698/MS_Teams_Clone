import SpinnerLoader from "react-spinkit";
import "../App.css";

const Spinner = () => {
  console.log("spinner");
  return (
    <>
      <div style={{ marginTop: "200px", marginLeft: "250px" }}>
        <SpinnerLoader
          name="circle"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <span style={{marginLeft: '210px'}}>Loading the Chat . . . . . .</span>
    </>
  );
};

export default Spinner;
