Ext.define('recruiting.view.Recruiting', {
	extend: 'Ext.form.Panel',
	requires: [
		'Ext.form.FieldSet',
	],
	
	items: [
		{
			xtype: 'fieldset',
			title: 'About You',
			instructions: 'We just need a bit of info:',
			items: [
				{
					xtype: 'textfield',
					name: 'fullName',
					label: 'Name:',
					required: true,
				},
				{
					xtype: 'textfield',
					name: 'address',
					label: 'Address:',
					required: true,
				},
				{
					xtype: 'textfield',
					name: 'phone',
					label: 'Phone Number:',
					required: true,
				},
				{
					xtype: 'textfield',
					name: 'email',
					label: 'Email',
					required: true,
				},
				{
					xtype: 'textfield',
					name: 'gradDate',
					label: 'Graduation Date',
					required: true,
				},
				{
					xtype: 'textfield',
					name: 'position',
					label: 'Position Interested In',
					required: true,
				},
			]
		}
	]
});

