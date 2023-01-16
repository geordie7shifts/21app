import { useState } from "react";
import { Col } from "../../elements/Col";
import { Player } from "../../types/players";
import { NextBackButton } from "../Buttons/NextBackButton";
import { SelectPlayers } from "./SelectPlayers";

export const NewGameWizard = () => {
  const [wizardStep, setStep] = useState(0);

  const [players, setPlayers] = useState<Player[]>([]);

  const handleNext = () => {};

  const handleBack = () => {};

  const WizardStepComponent = () => {
    switch (wizardStep) {
      case 0:
        return (
          <SelectPlayers
            selectedPlayers={players}
            setSelectedPlayers={setPlayers}
          />
        );
    }
  };

  return (
    <Col>
      <WizardStepComponent />
      <NextBackButton onNext={handleNext} onBack={handleBack} />
    </Col>
  );
};
