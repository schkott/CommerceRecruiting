Ext.define('recruiting.view.Admin', {
 extend: 'Ext.Panel',
 xtype: 'Admin',
requires: [
		'recruiting.store.RecruitStore',
		'Ext.List'
	],
config: {
        fullscreen: true,
       	layout: 'hbox',
        items: [
	        {
	            xtype: 'container',
	            layout: 'fit',
	            flex: 1,
	            items: [
	            	{
		                xtype: 'list',
		                store: 'recruits',
		                title: 'Recruits',
		                height: '100%',
		                styleHtmlContent: true,
		                itemTpl: ['<strong>{name}</strong><br>{position}']
	            	}
	            ]
	        },
	        {
	        	xtype: 'container',
	        	layout: 'fit',
	        	flex: 2,
	        }
        ]
    }
});