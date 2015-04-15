Ext.define('recruiting.controller.Admin', {
	extend: 'Ext.app.Controller',
	
	config: {
		views: [
			'recruiting.view.PIN',
			'recruiting.view.Admin',
			'recruiting.view.AdminTabs'
		],
		refs: {
			adminTabs: '#AdminTabs',
			admin: '#Admin',
			PIN: '#PIN',
			pinField: '#pinfield',
			submit: 'button#pin-submit'
		},
		control: {
			'submit': {
				tap: 'onUnlockTap'
			}
		},
	},
	
	onUnlockTap: function(button, e, options) {
//		var pin = this.getPinField();
//		if(pin.getValue() == '666666') {
//			this.getAdminTabs().pop();
//		} else {
//			pin.setValue('');
//			Ext.Msg.alert('Invalid PIN.');
//		}
		this.getAdminTabs().pop();
	}
});