export interface EntryCRUD {

    // createEntry: () => boolean;

    populateLocalStorageArray: () => Array<Object>;

    updateEntry: (index:number) => object;

    deleteEntry: (index:number) => boolean;
}
