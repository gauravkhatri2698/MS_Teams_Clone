import { Dimmer, Loader } from "semantic-ui-react";
import '../App.css';

const Spinner = () => {
    console.log("spinner");
  return (
    <div className="Loader">
      <Dimmer active inverted size="massive">
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </div>
  );
};

export default Spinner;
