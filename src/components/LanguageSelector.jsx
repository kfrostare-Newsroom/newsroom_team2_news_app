import React from "react";
import { Accordion, AccordionPanel, Box, Text, Anchor } from "grommet";
import i18n from "../i18n";

const LanguageSelector = () => {
  return (
    <Accordion>
      <AccordionPanel label="Language">
        <Box pad="medium" background="light-2">
          <Anchor onclick={() => i18n.changeLanguage("en")} primary label="English"  />
        </Box>
        <Box pad="medium" background="light-2">
          <Text onclick={() => i18n.changeLanguage("sv")}>Svenska</Text>
        </Box>
        <Box pad="medium" background="light-2">
          <Text onclick={() => i18n.changeLanguage("es")}>Español</Text>
        </Box>
      </AccordionPanel>
    </Accordion>
  );
};

export default LanguageSelector;
