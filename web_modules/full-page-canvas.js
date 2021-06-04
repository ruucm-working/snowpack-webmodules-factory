import { c as createCommonjsModule } from './common/_commonjsHelpers-668e6127.js';

var fullPageCanvas = createCommonjsModule(function (module, exports) {
(function(definition){
	{
		module.exports = definition();// CommonJS
	}
}(function(){
	var smashSpacing = function(elm){
		elm.style.display = "block";
		elm.style.border = "none";
		elm.style.margin = 0;
		elm.style.padding = 0;
		elm.style.width = "100%";
		elm.style.height = "100%";
	};
	return {
		mount: function(){
			if(typeof document === 'undefined') {
				return null;//not in the browser
			}
			var canvas = document.createElement('canvas');
			var syncSize = function(){
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			};
			syncSize();
			window.addEventListener('resize', syncSize, false);

			document.body.appendChild(canvas);
			smashSpacing(document.documentElement);
			smashSpacing(document.body);
			smashSpacing(canvas);

			return canvas;
		}
	};
}));
});

export default fullPageCanvas;
