Ext.define('recruiting.view.AdminTabs', {
	extend: 'Ext.form.Panel',
	xtype: 'admin-tabs',
	
	config: {
		id: 'cards',
		title: 'Admin',
		iconCls: 'settings',
		layout: 'card',
		
		items: [
	        {
	            xtype: 'PIN'
	        },
	        {
	            html : 'Admin Stuff',
	            id: 'adminpanel'
	        }
    	]
	},
});