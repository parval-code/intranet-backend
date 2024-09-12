import { parseString } from 'xml2js';

const ConvertXMLToJson = (textXML: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    parseString(textXML, { explicitArray: false, trim: true }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.stringify(result, null, 2));
      }
    });
  });
};

export default ConvertXMLToJson;
