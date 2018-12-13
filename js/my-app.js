// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
		},
		{
		path: '/info-pastel/',
    	url: 'info-pastel.html',
    	name: 'info-pastel',
		},,
		{
		path: '/info-cookie/',
    	url: 'info-cookie.html',
    	name: 'info-cookie',
		},
]
});

// Export selectors engine
var $$ = Dom7;
