var und;
var book = {
	currentPage: 0,
	pageCount: 0,
	width: 0,
	mouse: {
		position: {
			x:0,
			y:0,
		}
	},
	init: function () {
		this.holdingTrigger = und;
		var pages = document.getElementsByClassName( "page" );
	//	console.log( "Pagecount = " + pages.length );
		this.pageCount = pages.length
		this.resize();
	},
	update: function () {
		if( this.holdingTrigger != und ) {
			//this.holdingTrigger.style.left = 
		}
	},
	resize: function () {
//^		console.log( "resize the book?" );
	
		this.width = document.getElementById( "book" ).offsetWidth;
		console.log( "book width: " + this.width  );
		
		// position the offsets for all of the pages so we can create a nice scroll animation
		this.shufflePages();
	},
	changePage: function ( val ) {
		var newPage = this.currentPage + val;
		if( newPage >= 0 && newPage < this.pageCount ) {
			this.currentPage += val;
		//	console.log( "change page to: " + this.currentPage + " of " + this.pageCount );
		}
		this.shufflePages();
	},
	shufflePages: function () {
		var pages = document.getElementsByClassName( "page" );
		var pageCount = pages.length;
		for( x = 0; x < pageCount; x++ ) {
			pages[ x ].classList.remove( "active" );
			if( x == this.currentPage ) {
				pages[ x ].classList.add( "active" );
				pages[ x ].style.left = 0 + "px";
			} else if( x < this.currentPage ) {
				pages[ x ].style.left = ( -this.width ) + "px";
			} else if( x > this.currentPage ) {
				pages[ x ].style.left = this.width + "px";
			}
		}
	},
	pickup: function ( obj ) {
		this.holdingTrigger = obj;
		obj.classList.add( "pickup" );
	},
	releaseTrigger: function () {
		this.holdingTrigger.classList.remove( "pickup" );
		this.holdingTrigger = und;
		console.log( "Released anything held." ); // bind the release event
		console.log( this.holdingTrigger );
	},
};