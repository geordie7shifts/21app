import { Button } from "../../elements/Button";
import { Row } from "../../elements/Row";

interface Props {
  onNext: Function;
  onBack: Function;
  nextText?: string;
  nextDisabled?: boolean;
}

export const NextBackButton = (props: Props) => {
  return (
    <Row style={{ marginTop: 10 }}>
      <Button text="Back" color="black" onClick={props.onBack} />
      <Button
        text={props.nextText ?? "Next"}
        onClick={props.onNext}
        style={{ marginLeft: 25, flex: 1 }}
        disabled={props.nextDisabled}
      />
    </Row>
  );
};
