Ext.define('recruiting.model.Recruit', {
	extend : 'Ext.data.Model',
	alias : 'model.Recruit',
	config : {
		fields : [{
					name : 'id',
					type : 'int'
				}, {
					name : 'name',
					type : 'auto'
				}, {
					name : 'address',
					type : 'auto'
				}, {
					name : 'phone',
					type : 'auto'
				}, {
					name : 'email',
					type : 'auto'
				}, {
					name : 'gradDate',
					type : 'auto'
				}, {
					name : 'position',
					type : 'auto'
				}],
		validations : [{
					type : 'presence',
					field : 'name',
					message : 'Your name is required.'
				}, {
					type : 'format',
					field : 'name',
					matcher : /[A-Za-z,\s,\.]{3,60}/,
					message : 'Name: Only letters, periods and 3-60 characters.'
				}, {
					type : 'presence',
					field : 'address',
					message : 'Your address is required.'
				}, {
					type : 'format',
					field : 'address',
					matcher : /[\d,\w,\s,\-,\#]/,
					message : 'Address: Must be alphanumeric; -#. are allowed.'
				}, {
					type : 'presence',
					field : 'phone',
					message : 'Your phone number is required.'
				}, {
					type : 'format',
					field : 'phone',
					matcher : /[\d]{10}/,
					message : 'Phone Number: Must be 10 digits; no separators.'
				}, {
					type : 'presence',
					field : 'email',
					message : 'Your email address is required.'
				}, {
					type : 'email',
					field : 'email',
					message : 'Email: Format is invalid.'
				},{
					type : 'presence',
					field : 'gradDate',
					message : 'Your estimated graduation date is required.'
				},{
					type : 'presence',
					field: 'position',
					message: 'Position: Tell us which position you\'re interested in!'
				}]
	}
	,
});
