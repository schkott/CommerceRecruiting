Ext.define('recruiting.view.Main', {
			extend: 'Ext.form.Panel',
			xtype: 'maintabs',
			
			requires: [
				'Ext.TitleBar',
				'Ext.TabPanel',
				'Ext.field.Email',
				'Ext.field.DatePicker',
				'Ext.Button',
				'Ext.Img',
				'Ext.field.PatternPassword',
				'Ext.data.proxy.LocalStorage'
			],
			
			config : {
				scrollable: false,
				layout : {
					type : 'fit',
					
				},
				items : [
				{
					xtype : 'titlebar',
					docked : 'top',
					title : 'Commerce Bank College Recruiting'
				},{
					xtype: 'tabpanel',
					layout: {
						animation: 'slide',
						type: 'card'
					},
					items: [
						{
							xtype: 'RecruitTab'
						},
						{
							xtype: 'AdminTabs'
						}
					],
					tabBar: {
						docked: 'bottom',
						layout: {
							pack: 'center',
							type: 'hbox'
						}
					}
				}]
			}
		});
