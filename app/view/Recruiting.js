Ext.define('recruiting.view.Recruiting', {
	extend: 'Ext.Container',
	xtype: 'recruit-tab',
	requires: [
		'Ext.form.FieldSet',
	],
	config: {
		title: 'Recruiting',
		iconCls: 'user',
		layout: {
			type: 'vbox',
			pack: 'start',
			align: 'center'
		},
		items: [
			//the fields
			{
				xtype: 'fieldset',
				width: '85%',
				title: 'About You',
				instructions: 'Tell us about you so we can keep in touch!',
				items: [
					{
						xtype: 'textfield',
						name: 'fullName',
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
						xtype: 'textfield',
						name: 'phone',
						label: 'Phone Number',
						required: true,
					},
					{
						xtype: 'emailfield',
						name: 'email',
						label: 'Email',
						required: true,
					},
					{
						//format the datepicker!
						//people have no idea exactly what day they're
						//going to graduate, and probably don't want to
						//scroll from 1980 to 2050 or whatever.
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
						label: 'Graduation Date',
						required: true,
					},
					{
						xtype: 'textfield',
						name: 'position',
						label: 'Position Interested In',
						required: true,
					}
				]
			},
			{
        		xtype: 'button',
        		itemId: 'recruit-submit',
        		ui: 'confirm',
        		padding: '30px',
        		width: '200px',
        		text: 'Submit',
        	}
		]
	}
});

