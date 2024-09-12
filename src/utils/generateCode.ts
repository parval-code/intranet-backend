


export const GenerateCode = (): number  => {
    const min: number = 100000;
    const max: number = 999999;
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
  