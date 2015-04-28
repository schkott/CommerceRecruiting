Ext.define('recruiting.controller.Recruiting', {
    extend: 'Ext.app.Controller',
    
    config: {
    	views: ['recruiting.view.Recruiting'],
    	models: ['recruiting.model.Recruit'],
    	refs: {
            submit: 'button#recruit-submit',
            panel: '#recruit-tab',
            form: '#form'
        },
        control: {
        	'submit': {
            	tap: 'onSubmitTap'
        	}
    	},
    },
    
    onSubmitTap: function(button, e, options) {
//    	console.log('onSubmitTap from controller');
		var formData = this.getForm().getValues();
//		console.log(formData); //for debugging
		
		var recruit = Ext.create('recruiting.model.Recruit', {
			name: formData.name,
			address: formData.address,
			phone: formData.phone,
			email: formData.email,
			gradDate: formData.gradDate,
			position: formData.position
		});
		
		var errors = recruit.validate();
		var msg = '';
		
		if(!errors.isValid()) {
			errors.each(function (err) {
				msg += err.getMessage() + '<br />';
			});
			Ext.Msg.alert('Something\'s wrong...', msg);
		} else {
			var recruitStore = Ext.getStore('recruits');
			recruitStore.add(recruit);
			recruitStore.sync();
			Ext.Msg.alert('Success!', 'Your data has been saved.');
			this.getForm().reset();
		}
    }
});