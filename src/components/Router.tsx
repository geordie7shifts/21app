import { useState } from "react";
import { View } from "react-native";
import { Col } from "../elements/Col";
import { Row } from "../elements/Row";
import { Text } from "../elements/Text";
import { Dashboard } from "../views/Dashboard";
import { MenuBar } from "./MenuBar";
import { SelectPlayers } from "./NewGameWizard/SelectPlayers";

export const Router = () => {
  const [screen, setScreen] = useState(0);

  const screens = [
    {
      icon: "",
      name: "Dashboard",
      component: <Dashboard />,
    },
    {
      icon: "",
      name: "Game",
      component: <SelectPlayers />,
    },
  ];

  return (
    <Col
      style={{
        paddingTop: 40,
      }}
    >
      {/* header */}
      <Row justifyContent="center">
        <Text>Header</Text>
      </Row>
      <View
        style={{
          flexGrow: 1,
        }}
      >
        {screens[screen].component}
      </View>
      <MenuBar
        buttons={screens}
        onClick={(i) => {
          console.log("switching to screen", screens[i].name);
          setScreen(i);
        }}
        selected={screen}
      />
    </Col>
  );
};
