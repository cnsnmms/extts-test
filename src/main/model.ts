export const mainViewModel: Ext.app.IViewModel = {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
        title: 'AppStub',
        buttonText: 'Alert',
        boundText: ''
    },
    formulas: {

    }
}

export default Ext.define('MyApp.view.MainViewModel', mainViewModel);