var _ = require('common/util');

_.extend(exports, {
	':load': function() {
		console.log('View was loaded');
        var self = this;
        self.selection = self.keySelectionWithItems(
            [
                self.get('textUsername'),
                self.get('textPassword'),
                self.get('ok')
            ],
            {}
        );
        self.get('textUsername').on('activate', function() {
            self.get('textUsername').emit('keypress', 'fire');
        });
        self.get('textUsername').on('focus', function() {
            self.get('textUsername').style({
                    'background-color': 'green'
            });
        });
        self.get('textUsername').on('blur', function() {
            self.get('textUsername').style({
                    'background-color': 'yellow'
            });
        });
        self.get('textPassword').on('activate', function() {
            self.get('textPassword').emit('keypress', 'fire');
        });
        self.get('textPassword').on('focus', function() {
            self.get('textPassword').style({
                    'background-color': 'green'
            });
        });
        self.get('textPassword').on('blur', function() {
            self.get('textPassword').style({
                    'background-color': 'yellow'
            });
        });
        
        self.get('ok').on('activate', function() {
            console.log(' halllooo tombol OK nya di KLIK lho!!!!');
            console.log('ini isi usernamenya ');
            console.log(self.get('textUsername').value());
            
            app.pushView('dua', {username: self.get('textUsername').value(),
                                 password: self.get('textPassword').value()}
                        );
        });
        self.get('ok').on('focus', function() {
            self.get('ok').style({
                    'background-color': 'blue'
            });
        });
        self.get('ok').on('blur', function() {
            self.get('ok').style({
                    'background-color': 'yellow'
            });
        });
	},

	':resized': function(width, height) {
		console.log('View was resized to ' + width + 'x' + height);
	},

	':keydown': function(key) {
		console.log('Key down: '+ key);
	},

	':keyup': function(key) {
		console.log('Key up: ' + key);
	},

	':keypress': function(key) {
		console.log('Key press: ' + key);
	},

	':active': function() {
		console.log('View is active');
	},

	':inactive': function() {
		console.log('View is inactive');
	}
});
