import {customerStore} from '../main/store';
const grid: Ext.grid.IGridPanel = {
    xtype: 'grid',
    title: 'Sample Grid',
    store: customerStore,
    layout: 'fit',
    columns: [
        { text: "First Name", flex: .3, dataIndex: "firstName", editor: 'textfield' },
        {
            text: "Last Name",
            flex: .7,
            dataIndex: "lastName",
            editable: true,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            },
            renderer: function (value, metaData) {
                metaData.style = "border: 1px gray solid;";
                return value;
            }
        }]
}

const textInput: Ext.form.ITextField = {
    xtype: 'textfield',
    fieldLabel: 'Bound Text',
    bind: {
        value: '{boundText}'
    }
}


const fieldset: Ext.form.IFieldSet = {
    xtype: 'fieldset',
    title: 'Fieldset',
    bind: { title: '{boundText}' },
    defaults: {
        labelWidth: 150
    },
    items: [
        textInput
    ]
};

const button: Ext.IButton = {
    xtype: 'button',
    bind: {text: '{boundText}' },
    handler: () => {
        console.log('First Button Clicked.')
    }
}

const viewOptions: Ext.IContainer = {
    xtype: 'panel',
    extend: 'Ext.panel.Panel',
    items: [
        fieldset,
        button,
        grid
    ],
    viewModel: {type:'main'}
};

const view = Ext.define('MyApp.view.MainView', viewOptions);

export default view;