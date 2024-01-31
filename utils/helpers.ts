import { Audio } from "expo-av";

import Names from "@/assets/data/names.json";

interface Name {
  sound: string[];
  arabic: string;
  arabic_msa: string;
  english_roman: string;
  english: string[];
  reference: string[];
  grammar: string[];
  english_info: string;
  urdu: string;
}

export function getNames(): Array<Name> {
  return Object.values(Names).sort((a: any, b: any) => {
    return a.key - b.key;
  });
}
