export const customerStore: Ext.data.IStore = {
    extend: 'Ext.data.Store',
    storeId: 'testStore',
    alias: ['store.teststore'],
    data: [
        { firstName: 'Peter', lastName: 'Venkman' },
        { firstName: 'Egon', lastName: 'Spengler' },
        { firstName: 'Ray', lastName: 'Stantz' },
        { firstName: 'Winston', lastName: 'Zeddemore' }
    ]
}
export default Ext.define('MyApp.store.testStore', customerStore);
