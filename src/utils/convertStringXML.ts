import { parseString } from 'xml2js';

export const convertStringXML = (textXML: string) => {
  parseString(textXML, (err, result) => {
    if (err) {
      console.error('Error al convertir la cadena de texto a XML:', err);
      return;
    }
    return result;
  });
};
