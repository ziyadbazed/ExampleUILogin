var _ = require('common/util');
var TextView = require('ui').TextView;
var InputBox = require('ui').InputBox;

_.extend(exports, {
    ':load': function() {
        var hello = new TextView({
            label: 'Hello World',
            style: {
                width: 'fill-parent',
                height: 'wrap-content'
            }});
        
        this.add('helloVariable', hello);
	},
    ':state': function(parameterKiriman) {
        console.log(parameterKiriman.username);
        console.log(parameterKiriman.password);
        
        this.get('helloVariable').label('Hello ' + 
                parameterKiriman.username + ' \n apa kabar? ');
                
        var lanjutan = new TextView({
        });
    }
});

