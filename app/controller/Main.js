Ext.define('recruiting.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView: "mainView"
        },
        control: {
            'button[itemId=recruitBtn]': {
            	tap: "onRecruitTap"
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    onRecruitTap: function () {
    	console.log("shit got tapped bruh");
    	Ext.viewport.setActiveItem('recruitingView')
    	//this.fireEvent("recruitMode", this);
    },
    
    launch: function () {
        this.callParent();
        console.log("launch");
    },
    
    init: function () {
        this.callParent();
        console.log("init");
    }

});
