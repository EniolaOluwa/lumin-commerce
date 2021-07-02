import { Box, Select } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

export const languages = [
  "AR",
  "FR",
  "EN",
  "ES",
  "DE",
  "HE",
  "ID",
  "ZH-TW",
  "PT",
  "PH",
  "DA",
  "JA",
  "KO",
];

const Languages = () => {
  return (
    <Box>
      {
        <Select
          size="sm"
          rounded="none"
          borderColor="lightgrey"
          alignItems="center"
          height="12"
          fontSize="md"
          icon={<FiChevronDown />}
          _focus={{ outline: "lightgrey" }}
        >
          {languages.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      }
    </Box>
  );
};

export default Languages;
