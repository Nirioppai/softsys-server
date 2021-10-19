/**
 *
 * @param data // main data set to be inspected
 * @param property // property that will be the reference for checking
 * @returns boolean
 */
export const DuplicateChecker = async (data: any, property: string): Promise<boolean> => {
    const valueArr = data.map((item: any) => {
        return item[property];
    });

    const isDuplicate = valueArr.some((item: any, idx: string) => {
        return valueArr.indexOf(item) != idx;
    });

    return isDuplicate;
};
