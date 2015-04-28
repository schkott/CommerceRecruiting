Ext.define('recruiting.view.Admin', {
 extend: 'Ext.Panel',
 xtype: 'Admin',
requires: [
		'recruiting.store.RecruitStore',
		'Ext.List'
	],
config: {
//        fullscreen: true,
       	layout: 'hbox',
        items: [ {
	            xtype: 'container',
	            layout: 'fit',
	            flex: 2,
	            items: [ {
		                xtype: 'list',
		                id: 'recruitList',
		                store: 'recruits',
		                title: 'Recruits',
		                height: '100%',
		                styleHtmlContent: true,
		                singleSelect: true,
		                itemTpl: ['<strong>{name}</strong><br>{position}'],
		                listeners: {
					        painted: function() {
					        		this.getStore().load();
					        }
					    }
	            	}
	            ]
	        },
	        {
	        	xtype: 'container',
	        	layout: {
	        		type: 'vbox',
	        		pack: 'center'
	        	},
	        	flex: 5,
	        	items: [ {
			        xtype: 'formpanel',
			        scrollable: false,
					style: {
						'margin-top': '0.5%',
						'margin-left': '0.5%',
						'margin-right': '0.5%',
//						'margin-bottom': '0.5%'
					},
					id: 'recruitEdit',
					title: 'Recruit',
					flex: 2,
					items: [
						{
							xtype: 'textfield',
							name: 'name',
							label: 'Name',
							required: true,
						},
						{
							xtype: 'textfield',
							name: 'address',
							label: 'Address',
							required: true,
						},
						{
							xtype: 'numberfield',
							name: 'phone',
							label: 'Phone',
							component: {
								xtype: 'input',
								type: 'tel'
							},
							required: true,
						},
						{
							xtype: 'emailfield',
							name: 'email',
							label: 'Email',
							required: true,
						},
						{
							xtype: 'datepickerfield',
							dateFormat: "m/Y",
							picker: 
								{
									xtype:'datepicker',
									slotOrder:["month", "year"],
									yearFrom: new Date().getFullYear(),
									yearTo: new Date().getFullYear()+5,
									height: '45%'
								},
							name: 'gradDate',
							label: 'Graduation',
							required: true,
						},
						{
							xtype: 'textfield',
							name: 'position',
							label: 'Position',
							required: true,
						}
					]
		        },
		        {
		        	xtype: 'container',
		        	layout: {
		        		type: 'hbox',
		        		pack: 'center',
		        		align: 'center'
		        	},
		        	flex: 1,
		        	style: {
						'margin-top': '-5%',
						'margin-left': '15%',
						'margin-right': '15%',
		        	},
		        	items: [ 
		        		{
		        			xtype: 'button',
			        		itemId: 'update-recruit',
			        		ui: 'confirm',
			        		padding: '30px',
			        		width: '200px',
			        		text: 'Update Recruit',
		        		},
		        		{
		        			xtype: 'spacer',
		        		},
		        		{
		        			xtype: 'button',
			        		itemId: 'delete-recruit',
			        		ui: 'decline',
			        		padding: '30px',
			        		width: '200px',
			        		text: 'Delete Recruit',
		        		}
		        	]
		         },
		         {
		        	xtype: 'container',
		        	layout: {
		        		type: 'hbox',
		        		pack: 'center',
		        		align: 'center'
		        	},
		        	flex: 1,
		        	style: {
						'margin-left': '15%',
						'margin-right': '15%',
		        	},
		        	items: [ 
		        		{
		        			xtype: 'button',
			        		itemId: 'lock',
			        		ui: 'confirm',
			        		padding: '30px',
			        		width: '200px',
			        		text: 'Lock',
		        		},
		        		{
		        			xtype: 'spacer',
		        		},
		        		{
		        			xtype: 'button',
			        		itemId: 'data-submit',
			        		ui: 'action',
			        		padding: '30px',
			        		width: '200px',
			        		text: 'Submit Data',
		        		}
		        	]
		         }
		      ]
		   }
	   ]
    }
});