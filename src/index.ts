export {customerStore} from './main/store';
export {default} from './main/model';
import MainView from './main/view';

const appOptions: Ext.app.IApplication = {
    name: 'Fiddle',
    views: ['MyApp.view.MainView'],
    stores: [

    ],
    launch: function () {
        Ext.Msg.alert('Fiddle', 'Welcome to Sencha Fiddle!');
        Ext.create('Ext.panel.Panel', {
            layout: 'fit',
            renderTo: Ext.get('root'),
            items: [
                MainView
            ]
        });
        return true;
    }
}
Ext.application(appOptions);