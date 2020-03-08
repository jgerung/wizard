/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

//=========================================================
   //Edge symbol: 'animMain'
   (function(symbolName) {

   })("animMain");
   //Edge symbol end:'animMain'

//=========================================================
   //Edge symbol: 'intro1'
   (function(symbolName) {

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8286, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_more2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("play");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("play2");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "stop", function(sym, e) {
         // insert code to be run when the timline stops here
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("intro1");
   //Edge symbol end:'intro1'

//=========================================================
   //Edge symbol: 'more'
   (function(symbolName) {

      

      Symbol.bindElementAction(compId, symbolName, "${_more}", "mouseover", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("over");
         // insert code to be run when the mouse hovers over the object

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_more}", "mouseout", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("up");
         // insert code to be run when the mouse is moved off the object

      });
      //Edge binding end

   })("more");
   //Edge symbol end:'more'

//=========================================================
   //Edge symbol: 'intro1Text'
   (function(symbolName) {

   })("intro1Text");
   //Edge symbol end:'intro1Text'

//=========================================================
   (function(symbolName) {

   })("Down-level");
   //Edge symbol end:'Down-level'

   //=========================================================
   
   //Edge symbol: 'herm'
   (function(symbolName) {   
   
   })("herm");
   //Edge symbol end:'herm'

})(jQuery, AdobeEdge, "EDGE-151029592");