import { useState } from "react";
import { useDispatch } from "react-redux";
import { Col } from "../../elements/Col";
import { actions as gameActions } from "../../store/actions/gameActions";
import { actions } from "../../store/actions/settingsActions";
import { Player } from "../../types/players";
import { Screens } from "../../types/screens";
import { getNewGame } from "../../utils/gameUtils";
import { NextBackButton } from "../Buttons/NextBackButton";
import { SelectOrder } from "./SelectOrder";
import { SelectPlayers } from "./SelectPlayers";

export const NewGameWizard = () => {
  const dispatch = useDispatch();

  const [wizardStep, setStep] = useState(0);
  const [players, setPlayers] = useState<Player[]>([]);
  const [order, setOrder] = useState<Player[]>([]);

  const handleNext = () => {
    if (wizardStep === 0) setStep(wizardStep + 1);
    else if (wizardStep === 1) {
      dispatch(actions.setHeaderText("Recording Game"));
      dispatch(gameActions.addGame(getNewGame(order)));
      dispatch(actions.setScreen(Screens.RecordGame));
    }
  };

  const handleBack = () => {
    if (wizardStep === 0) {
      dispatch(actions.previousScreen());
    } else setStep(wizardStep - 1);
  };

  const WizardStepComponent = () => {
    switch (wizardStep) {
      case 0:
        return (
          <SelectPlayers
            selectedPlayers={players}
            setSelectedPlayers={setPlayers}
          />
        );
      case 1:
        return <SelectOrder playersList={players} onChange={setOrder} />;
    }
  };

  return (
    <Col style={{ padding: 15 }}>
      <WizardStepComponent />
      <NextBackButton
        onNext={handleNext}
        onBack={handleBack}
        nextDisabled={wizardStep == 0 && players.length < 2}
      />
    </Col>
  );
};
