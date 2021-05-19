const removeProperty = (objectInfo: any, propertyName: string) => {
    const newObject = Object.keys(objectInfo).reduce((newObject: any, key: any) => {
        if (key !== propertyName) {
            newObject[key] = objectInfo[key];
        }
        return newObject;
    }, {});

    return newObject;
};

export { removeProperty };
