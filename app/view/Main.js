Ext.define('recruiting.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.Img'
    ],
    
    config: {
        title: 'Login',
        layout: {
        	type: 'vbox',
        	pack: 'center',
        	align: 'center',
        },
        
        items: [
        	{
        		xtype: 'titlebar',
        		docked: 'top',
        		title: 'Commerce Bank College Recruiting',
        	},
        	{
        		xtype: 'button',
        		itemId: 'adminBtn',
        		ui: 'action',
        		padding: '50px',
        		width: '300px',
        		text: 'Administrator',
        	},
        	{
        		xtype: 'component',
        		height: 30
        	},
        	{
        		xtype: 'button',
        		itemId: 'recruitBtn',
        		ui: 'action',
        		padding: '50px',
        		width: '300px',
        		text: 'Recruitment',
        	}
        ]
    },
    
    listeners: [
    	{
    		delegate: '#recruitBtn',
    		event: 'tap',
    		fn: 'onRecruitTap'
    	}
    ]
});
