Ext.define ('recruiting.store.RecruitStore', {
	extend: 'Ext.data.Store',
	alias: 'store.RecruitStore',
	
	requires: ['recruiting.model.Recruit'],
	
	config: {
		model: 'recruiting.model.Recruit',
		identifier: { type: 'uuid'},
		storeId: 'recruitStore',
		proxy: {
			type: 'localstorage',
			id: 'recruitStoreProxy'
		}
	}
});