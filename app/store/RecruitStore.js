Ext.define('recruiting.store.RecruitStore', {
	extend: 'Ext.data.Store',
	requires: ['recruiting.model.Recruit'],
	id: 'recruits',
	xtype: 'recruits',
	config: {
		model: 'recruiting.model.Recruit',
		identifier: { type: 'uuid'},
		storeId: 'recruits',
		autoLoad: true,
		proxy: {
			type: 'localstorage',
			id: 'recruitStoreProxy'
		}
	}
});