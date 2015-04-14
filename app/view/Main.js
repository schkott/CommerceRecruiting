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
				'Ext.field.PatternPassword'
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
							xtype: 'recruit-tab'
						},
						{
							xtype: 'admin-tabs'
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
