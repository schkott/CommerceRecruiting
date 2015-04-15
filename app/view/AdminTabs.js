Ext.define('recruiting.view.AdminTabs', {
	extend: 'Ext.NavigationView',
	xtype: 'AdminTabs',
	
	require: ['Ext.List'],
	
	config: {
		id: 'AdminTabs',
		title: 'Admin',
		iconCls: 'settings',
		navigationBar: false,
		layout: {
			animation: 'slide',
			type:'card',
		},
		
		items: [
	        {
	            xtype: 'Admin'
	        },
	        {
	            xtype: 'PIN'
	        }
    	]
	},
});