import React from "react";
import { Accordion, AccordionPanel, Box, Text } from "grommet";
import i18n from "../i18n";

const LanguageSelector = () => {
  return (
    <Accordion alignSelf="end">
      <AccordionPanel label="Language">
        <Box pad="medium" background="light-2">
          <Text onClick={() => i18n.changeLanguage("en")} style={{cursor:"pointer"}}>English</Text>
        </Box>
        <Box pad="medium" background="light-1">
          <Text onClick={() => i18n.changeLanguage("sv")} style={{cursor:"pointer"}}>Svenska</Text>
        </Box>
        <Box pad="medium" background="light-2">
          <Text onClick={() => i18n.changeLanguage("es")} style={{cursor:"pointer"}}>Español</Text>
        </Box>
      </AccordionPanel>
    </Accordion>
  );
};

export default LanguageSelector;
