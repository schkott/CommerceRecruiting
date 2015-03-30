Ext.define('recruiting.view.Main', {
			extend: 'Ext.form.Panel',
			xtype: 'maintabs',
			
			requires: [
				'Ext.TitleBar',
				'Ext.TabPanel',
				'Ext.field.Email',
				'Ext.field.DatePicker',
				'Ext.Button',
				'Ext.Img'
			],
			
			config : {
				layout : {
					type : 'fit'
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
							xtype: 'recruit-tab',
						},
						{
							xtype: 'container',
							title: 'Admin',
							iconCls: 'settings',
							html: 'adminview'
						},
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
