import { View } from "react-native";
import { useSelector } from "react-redux";
import { Col } from "../elements/Col";
import { Row } from "../elements/Row";
import { Text } from "../elements/Text";
import { Screens } from "../types/screens";
import { RootState } from "../types/store";
import { Dashboard } from "../views/Dashboard";
import { NewGameWizard } from "./NewGameWizard/NewGameWizard";
import { RecordGame } from "./RecordGame";

export const Router = () => {
  const { screenHistory, headerText } = useSelector(
    (state: RootState) => state.settings
  );

  const screen = screenHistory[screenHistory.length - 1];

  const screens = {
    [Screens.Dashboard]: {
      component: <Dashboard />,
    },
    [Screens.NewGame]: {
      component: <NewGameWizard />,
    },
    [Screens.RecordGame]: {
      component: <RecordGame />,
    },
  };

  return (
    <Col
      style={{
        paddingTop: 40,
      }}
    >
      {/* header */}
      <Row justifyContent="center">
        <Text>{headerText}</Text>
      </Row>
      <View
        style={{
          flexGrow: 1,
        }}
      >
        {screens[screen].component}
      </View>
    </Col>
  );
};
