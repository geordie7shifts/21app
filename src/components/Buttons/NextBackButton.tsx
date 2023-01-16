import { Button } from "../../elements/Button";
import { Row } from "../../elements/Row";

interface Props {
  onNext: Function;
  onBack: Function;
}

export const NextBackButton = (props: Props) => {
  return (
    <Row>
      <Button text="Back" color="black" onClick={props.onBack} />
      <Button
        text="Next"
        onClick={props.onNext}
        style={{ marginLeft: 25, flex: 1 }}
      />
    </Row>
  );
};
