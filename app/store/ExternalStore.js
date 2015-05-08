Ext.define('recruiting.store.ExternalStore', {
	extend: 'Ext.data.Store',
	requires: ['recruiting.model.Recruit'],
	id: 'external',
	xtype: 'external',
	config: {
		model: 'recruiting.model.Recruit',
		identifier: { type: 'uuid'},
		storeId: 'external',
		autoLoad: true,
		proxy: {
			type: 'localstorage',
			id: 'externalStoreProxy'
		}
	}
});