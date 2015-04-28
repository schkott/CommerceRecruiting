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
			recruitList: '#recruitList',
			recruitEdit: '#recruitEdit',
			PIN: '#PIN',
			pinField: '#pinfield',
			unlock: 'button#pin-submit',
			lock: 'button#lock',
			updateRecruit: 'button#update-recruit',
			deleteRecruit: 'button#delete-recruit',
			submitRecruits: 'button#data-submit'
		},
		control: {
			'unlock': {
				tap: 'onUnlockTap'
			},
			'lock': {
				tap: 'onLockTap'
			},
			'recruitList': {
				itemtap: 'showRecruit',
			},
			'updateRecruit': {
				tap: 'updateRecruit'
			},
			'deleteRecruit': {
				tap: 'deleteRecruit'
			},
			'submitRecruits': {
				tap: 'submitRecruits'
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
	},
	
	onLockTap: function(button, e, options) {
		this.getAdminTabs().push({xtype:'PIN'});
	},
	
	showRecruit: function(index, target, record, e, eOpts){
		fields = this.getRecruitEdit();
		fields.setRecord(record.getRecord());
	},
	
	updateRecruit: function() {
		record = this.getRecruitEdit().getRecord();
		store = this.getRecruitList().getStore();
		Ext.Msg.confirm('Save', 'Overwrite this record\'s data?', function(btn){
   		if(btn === 'yes') {
   			fields.updateRecord(record);
			store.sync();
   		}});
	},
	
	deleteRecruit: function() {
  	 	store = this.getRecruitList().getStore();
		id = this.getRecruitList().getSelection()[0].internalId;
		record = this.getRecruitList().getStore().findRecord('id', id);
		Ext.Msg.confirm('Delete', 'Really delete this record?', function(btn){
   		if(btn === 'yes') {
			store.remove(record);
			store.sync();
   		}});
	},
	
	submitRecruits: function() {
		console.log('submitrecruits');
	}
});