import * as path from 'path';
import * as glob from 'glob';

/* masiveImportUtils, import multiple file sent by the string format assigned for searching file
* from: string formatted for searching multiple files Ex: 'src\**\*.module.js'
* return: file imported array
*/
export default class MassiveImport {
  static getInstance(from: string) {
    // array for adding files
    const importedFiles: any = [];
    // do an array of directories an run it
    glob.sync(from).forEach((fileName: string) => {
      // import the file
      const file = require(path.resolve(fileName));
      if (file['default']) {
        const instance = file['default'];
        importedFiles.push(instance);
      }
    });
    return importedFiles;
  }

}

