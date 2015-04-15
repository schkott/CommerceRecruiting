Ext.define('recruiting.view.PIN', {
	extend: 'Ext.form.Panel',
	xtype: 'PIN',
	
	requires: ['Ext.field.PatternPassword'],
	
	config: {
		scrollable: false,
		layout: {
			type: 'vbox',
			align: 'center',
		},
		items: [
			{
				xtype: 'fieldset',
				title: '6-Digit PIN',
				style: { 
						'margin-top': '15%',
					},
				items: [
					{
						xtype: 'patternpasswordfield',
						id: 'pinfield',
						labelAlign: 'top',
						fieldStyle: 'text-align: center',
						inputCls: 'pin-field'
					}
				]
			},
			{
				xtype: 'button',
        		itemId: 'pin-submit',
        		ui: 'confirm',
        		padding: '30px',
        		width: '200px',
        		text: 'Unlock',
        		style: { 
					'margin-top': '10%',
				},
			}
		]
		
	}
});