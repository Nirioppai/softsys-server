const getRandomYearLevel = (enumeration: any) => {
    const keys = Object.keys(enumeration).filter((k) => !(Math.abs(Number.parseInt(k)) + 1));
    const enumKey = keys[Math.floor(Math.random() * keys.length)];
    return enumKey;
};

export const generateApplicantNumber = (): string => {
    const YearCodes: any = {
        ApplicantClass1: 'A',
        ApplicantClass2: 'B',
        ApplicantClass3: 'C',
        ApplicantClass4: 'D'
    };
    const data = new Date().getFullYear().toString().substr(2, 2) + YearCodes[getRandomYearLevel(YearCodes)].toString() + Math.floor(Math.random() * 9999).toString();
    return data;
};
