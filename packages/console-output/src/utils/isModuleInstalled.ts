
export const isModuleInstalled = (name: string) => {
    try {
        let path = require.resolve(name);
        return !!path;
    } catch (e) {
        return false;
    }
};
