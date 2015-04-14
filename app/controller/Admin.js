Ext.define('recruiting.controller.Admin', {
	extend: 'Ext.app.Controller',
	
	config: {
		views: [
			'recruiting.view.PIN',
			'recruiting.view.Admin'
		],
		refs: {
			cards: '#cards',
			PIN: '#PIN',
			submit: 'button#pin-submit'
		},
		control: {
			'submit': {
				tap: 'onUnlockTap'
			}
		},
	},
	
	onUnlockTap: function(button, e, options) {
		console.log('onUnlockTap from controller');
//		Ext.Viewport.setActiveItem();
	}
});