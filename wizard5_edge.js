/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'wizard',
            type:'image',
            rect:['0','0','800','600','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wizard.jpg"]
         },
         {
            id:'animMain',
            type:'rect',
            rect:['94','0','0','0','auto','auto'],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'animMain',
            symbolName:'animMain'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px']
         ],
         "${_animMain}": [
            ["style", "left", '94px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"animMain": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0','0','612','600','auto','auto'],
      transform: [],
      id: 'wizard01',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/wizard01.jpg']
   },
   {
      id: 'wizard02',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard02.jpg']
   },
   {
      id: 'wizard03',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard03.jpg']
   },
   {
      id: 'wizard04',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard04.jpg']
   },
   {
      id: 'wizard05',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard05.jpg']
   },
   {
      id: 'wizard06',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard06.jpg']
   },
   {
      id: 'wizard07',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard07.jpg']
   },
   {
      id: 'wizard08',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard08.jpg']
   },
   {
      id: 'wizard09',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard09.jpg']
   },
   {
      id: 'wizard10',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard10.jpg']
   },
   {
      id: 'wizard11',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard11.jpg']
   },
   {
      id: 'wizard12',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard12.jpg']
   },
   {
      id: 'wizard13',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard13.jpg']
   },
   {
      id: 'wizard14',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard14.jpg']
   },
   {
      id: 'wizard15',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard15.jpg']
   },
   {
      id: 'wizard16',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard16.jpg']
   },
   {
      id: 'wizard17',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard17.jpg']
   },
   {
      id: 'wizard18',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard18.jpg']
   },
   {
      id: 'wizard19',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard19.jpg']
   },
   {
      id: 'wizard20',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard20.jpg']
   },
   {
      id: 'wizard21',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard21.jpg']
   },
   {
      id: 'wizard22',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard22.jpg']
   },
   {
      id: 'wizard23',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard23.jpg']
   },
   {
      id: 'wizard24',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard24.jpg']
   },
   {
      id: 'wizard25',
      type: 'image',
      rect: ['0','0','612','600','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/wizard25.jpg']
   },
   {
      id: 'intro12',
      type: 'rect',
      rect: ['127','105','0','0','auto','auto']
   },
   {
      id: 'feather',
      type: 'image',
      rect: ['452','123','277','222','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feather.png']
   }],
   symbolInstances: [
   {
      id: 'intro12',
      symbolName: 'intro1'
   }   ]
   },
   states: {
      "Base State": {
         "${_wizard18}": [
            ["style", "opacity", '0']
         ],
         "${_wizard22}": [
            ["style", "opacity", '0']
         ],
         "${_wizard05}": [
            ["style", "opacity", '0']
         ],
         "${_wizard24}": [
            ["style", "opacity", '0']
         ],
         "${_wizard02}": [
            ["style", "opacity", '0']
         ],
         "${_wizard11}": [
            ["style", "opacity", '0']
         ],
         "${_wizard04}": [
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '612px']
         ],
         "${_wizard15}": [
            ["style", "opacity", '0']
         ],
         "${_wizard08}": [
            ["style", "opacity", '0']
         ],
         "${_intro12}": [
            ["style", "top", '106px'],
            ["style", "opacity", '0'],
            ["style", "clip", [0,354,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '130px']
         ],
         "${_wizard06}": [
            ["style", "opacity", '0']
         ],
         "${_wizard21}": [
            ["style", "opacity", '0']
         ],
         "${_wizard17}": [
            ["style", "opacity", '0']
         ],
         "${_wizard09}": [
            ["style", "opacity", '0']
         ],
         "${_feather}": [
            ["style", "-webkit-transform-origin", [0.94,6.6], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0.94,6.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0.94,6.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0.94,6.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0.94,6.6],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '15deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '441px'],
            ["style", "width", '277px'],
            ["style", "top", '117px'],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '222px'],
            ["transform", "skewY", '0deg']
         ],
         "${_wizard25}": [
            ["style", "opacity", '0']
         ],
         "${_wizard16}": [
            ["style", "opacity", '0']
         ],
         "${_wizard12}": [
            ["style", "opacity", '0']
         ],
         "${_wizard23}": [
            ["style", "opacity", '0']
         ],
         "${_wizard01}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_wizard10}": [
            ["style", "opacity", '0']
         ],
         "${_wizard19}": [
            ["style", "opacity", '0']
         ],
         "${_wizard20}": [
            ["style", "opacity", '0']
         ],
         "${_wizard03}": [
            ["style", "opacity", '0']
         ],
         "${_wizard13}": [
            ["style", "opacity", '0']
         ],
         "${_wizard07}": [
            ["style", "opacity", '0']
         ],
         "${_wizard14}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6250,
         autoPlay: true,
         timeline: [
            { id: "eid56", tween: [ "style", "${_intro12}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 1500 },
            { id: "eid24", tween: [ "style", "${_wizard12}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_wizard12}", "opacity", '1', { fromValue: '0'}], position: 1375, duration: 0 },
            { id: "eid34", tween: [ "style", "${_wizard17}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "style", "${_wizard17}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid66", tween: [ "style", "${_feather}", "top", '96px', { fromValue: '117px'}], position: 3000, duration: 250, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_feather}", "top", '154px', { fromValue: '96px'}], position: 3250, duration: 250, easing: "easeInQuad" },
            { id: "eid74", tween: [ "style", "${_feather}", "top", '192px', { fromValue: '154px'}], position: 3500, duration: 250, easing: "easeInQuad" },
            { id: "eid77", tween: [ "style", "${_feather}", "top", '211px', { fromValue: '192px'}], position: 3750, duration: 250, easing: "easeInQuad" },
            { id: "eid80", tween: [ "style", "${_feather}", "top", '254px', { fromValue: '211px'}], position: 4000, duration: 250, easing: "easeInQuad" },
            { id: "eid83", tween: [ "style", "${_feather}", "top", '287px', { fromValue: '254px'}], position: 4250, duration: 250, easing: "easeInQuad" },
            { id: "eid86", tween: [ "style", "${_feather}", "top", '332px', { fromValue: '287px'}], position: 4500, duration: 250, easing: "easeInQuad" },
            { id: "eid89", tween: [ "style", "${_feather}", "top", '354px', { fromValue: '332px'}], position: 4750, duration: 250, easing: "easeInQuad" },
            { id: "eid92", tween: [ "style", "${_feather}", "top", '391px', { fromValue: '354px'}], position: 5000, duration: 250, easing: "easeInQuad" },
            { id: "eid95", tween: [ "style", "${_feather}", "top", '415px', { fromValue: '391px'}], position: 5250, duration: 250, easing: "easeInQuad" },
            { id: "eid98", tween: [ "style", "${_feather}", "top", '431px', { fromValue: '415px'}], position: 5500, duration: 250, easing: "easeInQuad" },
            { id: "eid102", tween: [ "style", "${_feather}", "top", '480px', { fromValue: '431px'}], position: 5750, duration: 250, easing: "easeInQuad" },
            { id: "eid262", tween: [ "style", "${_feather}", "top", '105px', { fromValue: '480px'}], position: 6000, duration: 250, easing: "easeInQuad" },
            { id: "eid64", tween: [ "style", "${_feather}", "left", '124px', { fromValue: '441px'}], position: 3000, duration: 250, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_feather}", "left", '476px', { fromValue: '124px'}], position: 3250, duration: 250, easing: "easeInQuad" },
            { id: "eid73", tween: [ "style", "${_feather}", "left", '126px', { fromValue: '476px'}], position: 3500, duration: 250, easing: "easeInQuad" },
            { id: "eid76", tween: [ "style", "${_feather}", "left", '468px', { fromValue: '126px'}], position: 3750, duration: 250, easing: "easeInQuad" },
            { id: "eid79", tween: [ "style", "${_feather}", "left", '125px', { fromValue: '468px'}], position: 4000, duration: 250, easing: "easeInQuad" },
            { id: "eid82", tween: [ "style", "${_feather}", "left", '477px', { fromValue: '125px'}], position: 4250, duration: 250, easing: "easeInQuad" },
            { id: "eid85", tween: [ "style", "${_feather}", "left", '124px', { fromValue: '477px'}], position: 4500, duration: 250, easing: "easeInQuad" },
            { id: "eid88", tween: [ "style", "${_feather}", "left", '477px', { fromValue: '124px'}], position: 4750, duration: 250, easing: "easeInQuad" },
            { id: "eid91", tween: [ "style", "${_feather}", "left", '130px', { fromValue: '477px'}], position: 5000, duration: 250, easing: "easeInQuad" },
            { id: "eid94", tween: [ "style", "${_feather}", "left", '477px', { fromValue: '130px'}], position: 5250, duration: 250, easing: "easeInQuad" },
            { id: "eid97", tween: [ "style", "${_feather}", "left", '129px', { fromValue: '477px'}], position: 5500, duration: 250, easing: "easeInQuad" },
            { id: "eid101", tween: [ "style", "${_feather}", "left", '479px', { fromValue: '129px'}], position: 5750, duration: 250, easing: "easeInQuad" },
            { id: "eid261", tween: [ "style", "${_feather}", "left", '490px', { fromValue: '479px'}], position: 6000, duration: 250, easing: "easeInQuad" },
            { id: "eid295", tween: [ "style", "${_intro12}", "left", '130px', { fromValue: '130px'}], position: 6250, duration: 0, easing: "easeInQuad" },
            { id: "eid38", tween: [ "style", "${_wizard19}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_wizard19}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 0 },
            { id: "eid58", tween: [ "style", "${_intro12}", "clip", [0,354,393,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,354,0,0]}], position: 3000, duration: 3000 },
            { id: "eid263", tween: [ "style", "${_intro12}", "clip", [0,354,426,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,354,393,0]}], position: 6000, duration: 250, easing: "easeInQuad" },
            { id: "eid3", tween: [ "style", "${_wizard02}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_wizard02}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 0 },
            { id: "eid29", tween: [ "style", "${_wizard15}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "style", "${_wizard15}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 0 },
            { id: "eid202", tween: [ "transform", "${_feather}", "scaleX", '0.77827', { fromValue: '1'}], position: 3000, duration: 121, easing: "easeInQuad" },
            { id: "eid203", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.77827'}], position: 3121, duration: 128, easing: "easeInQuad" },
            { id: "eid206", tween: [ "transform", "${_feather}", "scaleX", '0.8555', { fromValue: '1'}], position: 3250, duration: 125, easing: "easeInQuad" },
            { id: "eid207", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.8555'}], position: 3375, duration: 125, easing: "easeInQuad" },
            { id: "eid210", tween: [ "transform", "${_feather}", "scaleX", '0.89313', { fromValue: '1'}], position: 3500, duration: 125, easing: "easeInQuad" },
            { id: "eid211", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.89313'}], position: 3625, duration: 125, easing: "easeInQuad" },
            { id: "eid214", tween: [ "transform", "${_feather}", "scaleX", '0.86839', { fromValue: '1'}], position: 3750, duration: 125, easing: "easeInQuad" },
            { id: "eid215", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.86839'}], position: 3875, duration: 125, easing: "easeInQuad" },
            { id: "eid218", tween: [ "transform", "${_feather}", "scaleX", '0.92348', { fromValue: '1'}], position: 4000, duration: 125, easing: "easeInQuad" },
            { id: "eid219", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.92348'}], position: 4125, duration: 125, easing: "easeInQuad" },
            { id: "eid222", tween: [ "transform", "${_feather}", "scaleX", '0.91054', { fromValue: '1'}], position: 4250, duration: 125, easing: "easeInQuad" },
            { id: "eid223", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.91054'}], position: 4375, duration: 125, easing: "easeInQuad" },
            { id: "eid226", tween: [ "transform", "${_feather}", "scaleX", '0.93254', { fromValue: '1'}], position: 4500, duration: 125, easing: "easeInQuad" },
            { id: "eid227", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.93254'}], position: 4625, duration: 125, easing: "easeInQuad" },
            { id: "eid230", tween: [ "transform", "${_feather}", "scaleX", '0.92131', { fromValue: '1'}], position: 4750, duration: 125, easing: "easeInQuad" },
            { id: "eid231", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.92131'}], position: 4875, duration: 125, easing: "easeInQuad" },
            { id: "eid234", tween: [ "transform", "${_feather}", "scaleX", '0.91038', { fromValue: '1'}], position: 5000, duration: 125, easing: "easeInQuad" },
            { id: "eid235", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.91038'}], position: 5125, duration: 125, easing: "easeInQuad" },
            { id: "eid238", tween: [ "transform", "${_feather}", "scaleX", '0.92211', { fromValue: '1'}], position: 5250, duration: 151, easing: "easeInQuad" },
            { id: "eid239", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.92211'}], position: 5401, duration: 98, easing: "easeInQuad" },
            { id: "eid242", tween: [ "transform", "${_feather}", "scaleX", '0.91048', { fromValue: '1'}], position: 5500, duration: 125, easing: "easeInQuad" },
            { id: "eid243", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.91048'}], position: 5625, duration: 125, easing: "easeInQuad" },
            { id: "eid246", tween: [ "transform", "${_feather}", "scaleX", '0.85436', { fromValue: '1'}], position: 5750, duration: 125, easing: "easeInQuad" },
            { id: "eid247", tween: [ "transform", "${_feather}", "scaleX", '1', { fromValue: '0.85436'}], position: 5875, duration: 125, easing: "easeInQuad" },
            { id: "eid49", tween: [ "style", "${_wizard25}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_wizard25}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 0 },
            { id: "eid44", tween: [ "style", "${_wizard22}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_wizard22}", "opacity", '1', { fromValue: '0'}], position: 2625, duration: 0 },
            { id: "eid69", tween: [ "transform", "${_feather}", "rotateZ", '-49deg', { fromValue: '15deg'}], position: 3000, duration: 121, easing: "easeInQuad" },
            { id: "eid103", tween: [ "transform", "${_feather}", "rotateZ", '-17deg', { fromValue: '-49deg'}], position: 3121, duration: 128, easing: "easeInQuad" },
            { id: "eid72", tween: [ "transform", "${_feather}", "rotateZ", '-52deg', { fromValue: '-17deg'}], position: 3250, duration: 125, easing: "easeInQuad" },
            { id: "eid104", tween: [ "transform", "${_feather}", "rotateZ", '13deg', { fromValue: '-52deg'}], position: 3375, duration: 125, easing: "easeInQuad" },
            { id: "eid75", tween: [ "transform", "${_feather}", "rotateZ", '-62deg', { fromValue: '13deg'}], position: 3500, duration: 125, easing: "easeInQuad" },
            { id: "eid105", tween: [ "transform", "${_feather}", "rotateZ", '-15deg', { fromValue: '-62deg'}], position: 3625, duration: 125, easing: "easeInQuad" },
            { id: "eid78", tween: [ "transform", "${_feather}", "rotateZ", '-59deg', { fromValue: '-15deg'}], position: 3750, duration: 125, easing: "easeInQuad" },
            { id: "eid106", tween: [ "transform", "${_feather}", "rotateZ", '13deg', { fromValue: '-59deg'}], position: 3875, duration: 125, easing: "easeInQuad" },
            { id: "eid81", tween: [ "transform", "${_feather}", "rotateZ", '-67deg', { fromValue: '13deg'}], position: 4000, duration: 125, easing: "easeInQuad" },
            { id: "eid107", tween: [ "transform", "${_feather}", "rotateZ", '-29deg', { fromValue: '-67deg'}], position: 4125, duration: 125, easing: "easeInQuad" },
            { id: "eid84", tween: [ "transform", "${_feather}", "rotateZ", '-66deg', { fromValue: '-29deg'}], position: 4250, duration: 125, easing: "easeInQuad" },
            { id: "eid108", tween: [ "transform", "${_feather}", "rotateZ", '18deg', { fromValue: '-66deg'}], position: 4375, duration: 125, easing: "easeInQuad" },
            { id: "eid87", tween: [ "transform", "${_feather}", "rotateZ", '-62deg', { fromValue: '18deg'}], position: 4500, duration: 125, easing: "easeInQuad" },
            { id: "eid109", tween: [ "transform", "${_feather}", "rotateZ", '-31deg', { fromValue: '-62deg'}], position: 4625, duration: 125, easing: "easeInQuad" },
            { id: "eid90", tween: [ "transform", "${_feather}", "rotateZ", '-62deg', { fromValue: '-31deg'}], position: 4750, duration: 125, easing: "easeInQuad" },
            { id: "eid110", tween: [ "transform", "${_feather}", "rotateZ", '15deg', { fromValue: '-62deg'}], position: 4875, duration: 125, easing: "easeInQuad" },
            { id: "eid93", tween: [ "transform", "${_feather}", "rotateZ", '-58deg', { fromValue: '15deg'}], position: 5000, duration: 125, easing: "easeInQuad" },
            { id: "eid111", tween: [ "transform", "${_feather}", "rotateZ", '-41deg', { fromValue: '-58deg'}], position: 5125, duration: 125, easing: "easeInQuad" },
            { id: "eid96", tween: [ "transform", "${_feather}", "rotateZ", '-63deg', { fromValue: '-41deg'}], position: 5250, duration: 151, easing: "easeInQuad" },
            { id: "eid113", tween: [ "transform", "${_feather}", "rotateZ", '24deg', { fromValue: '-63deg'}], position: 5401, duration: 98, easing: "easeInQuad" },
            { id: "eid99", tween: [ "transform", "${_feather}", "rotateZ", '-54deg', { fromValue: '24deg'}], position: 5500, duration: 125, easing: "easeInQuad" },
            { id: "eid114", tween: [ "transform", "${_feather}", "rotateZ", '-27deg', { fromValue: '-54deg'}], position: 5625, duration: 125, easing: "easeInQuad" },
            { id: "eid100", tween: [ "transform", "${_feather}", "rotateZ", '-58deg', { fromValue: '-27deg'}], position: 5750, duration: 125, easing: "easeInQuad" },
            { id: "eid115", tween: [ "transform", "${_feather}", "rotateZ", '25deg', { fromValue: '-58deg'}], position: 5875, duration: 125, easing: "easeInQuad" },
            { id: "eid14", tween: [ "style", "${_wizard08}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_wizard08}", "opacity", '1', { fromValue: '0'}], position: 875, duration: 0 },
            { id: "eid35", tween: [ "style", "${_wizard18}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid36", tween: [ "style", "${_wizard18}", "opacity", '1', { fromValue: '0'}], position: 2125, duration: 0 },
            { id: "eid6", tween: [ "style", "${_wizard04}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_wizard04}", "opacity", '1', { fromValue: '0'}], position: 375, duration: 0 },
            { id: "eid48", tween: [ "style", "${_wizard24}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_wizard24}", "opacity", '1', { fromValue: '0'}], position: 2875, duration: 0 },
            { id: "eid4", tween: [ "style", "${_wizard03}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_wizard03}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 0 },
            { id: "eid8", tween: [ "style", "${_wizard05}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_wizard05}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_feather}", "opacity", '0', { fromValue: '0'}], position: 2875, duration: 0 },
            { id: "eid52", tween: [ "style", "${_feather}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 0 },
            { id: "eid158", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
            { id: "eid156", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 3250, duration: 0 },
            { id: "eid160", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 3500, duration: 0 },
            { id: "eid164", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 3750, duration: 0 },
            { id: "eid168", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid172", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 4250, duration: 0 },
            { id: "eid176", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 4500, duration: 0 },
            { id: "eid180", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 4750, duration: 0 },
            { id: "eid184", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 5000, duration: 0 },
            { id: "eid190", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 5500, duration: 0 },
            { id: "eid194", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 5750, duration: 0 },
            { id: "eid198", tween: [ "transform", "${_feather}", "skewX", '0deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
            { id: "eid117", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 3000, duration: 0 },
            { id: "eid119", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 3250, duration: 0 },
            { id: "eid121", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 3500, duration: 0 },
            { id: "eid123", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 3750, duration: 0 },
            { id: "eid125", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 4000, duration: 0 },
            { id: "eid127", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 4250, duration: 0 },
            { id: "eid129", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 4500, duration: 0 },
            { id: "eid131", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 4750, duration: 0 },
            { id: "eid133", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 5000, duration: 0 },
            { id: "eid135", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 5250, duration: 0 },
            { id: "eid137", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 5500, duration: 0 },
            { id: "eid139", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 5750, duration: 0 },
            { id: "eid141", tween: [ "style", "${_feather}", "width", '277px', { fromValue: '277px'}], position: 6000, duration: 0 },
            { id: "eid296", tween: [ "style", "${_intro12}", "top", '106px', { fromValue: '106px'}], position: 6250, duration: 0, easing: "easeInQuad" },
            { id: "eid32", tween: [ "style", "${_wizard16}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_wizard16}", "opacity", '1', { fromValue: '0'}], position: 1875, duration: 0 },
            { id: "eid10", tween: [ "style", "${_wizard06}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_wizard06}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 0 },
            { id: "eid19", tween: [ "style", "${_wizard10}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_wizard10}", "opacity", '1', { fromValue: '0'}], position: 1125, duration: 0 },
            { id: "eid28", tween: [ "style", "${_wizard14}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_wizard14}", "opacity", '1', { fromValue: '0'}], position: 1625, duration: 0 },
            { id: "eid17", tween: [ "style", "${_wizard09}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "style", "${_wizard09}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0 },
            { id: "eid40", tween: [ "style", "${_wizard20}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_wizard20}", "opacity", '1', { fromValue: '0'}], position: 2375, duration: 0 },
            { id: "eid118", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 3000, duration: 0 },
            { id: "eid120", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 3250, duration: 0 },
            { id: "eid122", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 3500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 3750, duration: 0 },
            { id: "eid126", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 4000, duration: 0 },
            { id: "eid128", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 4250, duration: 0 },
            { id: "eid130", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 4500, duration: 0 },
            { id: "eid132", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 4750, duration: 0 },
            { id: "eid134", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 5000, duration: 0 },
            { id: "eid136", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 5250, duration: 0 },
            { id: "eid138", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 5500, duration: 0 },
            { id: "eid140", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 5750, duration: 0 },
            { id: "eid142", tween: [ "style", "${_feather}", "height", '222px', { fromValue: '222px'}], position: 6000, duration: 0 },
            { id: "eid21", tween: [ "style", "${_wizard11}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_wizard11}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 0 },
            { id: "eid204", tween: [ "transform", "${_feather}", "scaleY", '0.99355', { fromValue: '1'}], position: 3000, duration: 121, easing: "easeInQuad" },
            { id: "eid205", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.99355'}], position: 3121, duration: 128, easing: "easeInQuad" },
            { id: "eid208", tween: [ "transform", "${_feather}", "scaleY", '1.00758', { fromValue: '1'}], position: 3250, duration: 125, easing: "easeInQuad" },
            { id: "eid209", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '1.00758'}], position: 3375, duration: 125, easing: "easeInQuad" },
            { id: "eid212", tween: [ "transform", "${_feather}", "scaleY", '1.05606', { fromValue: '1'}], position: 3500, duration: 125, easing: "easeInQuad" },
            { id: "eid213", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '1.05606'}], position: 3625, duration: 125, easing: "easeInQuad" },
            { id: "eid216", tween: [ "transform", "${_feather}", "scaleY", '0.9065', { fromValue: '1'}], position: 3750, duration: 125, easing: "easeInQuad" },
            { id: "eid217", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.9065'}], position: 3875, duration: 125, easing: "easeInQuad" },
            { id: "eid220", tween: [ "transform", "${_feather}", "scaleY", '0.97315', { fromValue: '1'}], position: 4000, duration: 125, easing: "easeInQuad" },
            { id: "eid221", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.97315'}], position: 4125, duration: 125, easing: "easeInQuad" },
            { id: "eid224", tween: [ "transform", "${_feather}", "scaleY", '0.95438', { fromValue: '1'}], position: 4250, duration: 125, easing: "easeInQuad" },
            { id: "eid225", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.95438'}], position: 4375, duration: 125, easing: "easeInQuad" },
            { id: "eid228", tween: [ "transform", "${_feather}", "scaleY", '0.95493', { fromValue: '1'}], position: 4500, duration: 125, easing: "easeInQuad" },
            { id: "eid229", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.95493'}], position: 4625, duration: 125, easing: "easeInQuad" },
            { id: "eid232", tween: [ "transform", "${_feather}", "scaleY", '0.98743', { fromValue: '1'}], position: 4750, duration: 125, easing: "easeInQuad" },
            { id: "eid233", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.98743'}], position: 4875, duration: 125, easing: "easeInQuad" },
            { id: "eid236", tween: [ "transform", "${_feather}", "scaleY", '0.98451', { fromValue: '1'}], position: 5000, duration: 125, easing: "easeInQuad" },
            { id: "eid237", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.98451'}], position: 5125, duration: 125, easing: "easeInQuad" },
            { id: "eid240", tween: [ "transform", "${_feather}", "scaleY", '0.96176', { fromValue: '1'}], position: 5250, duration: 151, easing: "easeInQuad" },
            { id: "eid241", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.96176'}], position: 5401, duration: 98, easing: "easeInQuad" },
            { id: "eid244", tween: [ "transform", "${_feather}", "scaleY", '0.94947', { fromValue: '1'}], position: 5500, duration: 125, easing: "easeInQuad" },
            { id: "eid245", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.94947'}], position: 5625, duration: 125, easing: "easeInQuad" },
            { id: "eid248", tween: [ "transform", "${_feather}", "scaleY", '0.97296', { fromValue: '1'}], position: 5750, duration: 125, easing: "easeInQuad" },
            { id: "eid249", tween: [ "transform", "${_feather}", "scaleY", '1', { fromValue: '0.97296'}], position: 5875, duration: 125, easing: "easeInQuad" },
            { id: "eid26", tween: [ "style", "${_wizard13}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_wizard13}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 0 },
            { id: "eid159", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 3000, duration: 0 },
            { id: "eid157", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 3250, duration: 0 },
            { id: "eid161", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 3500, duration: 0 },
            { id: "eid165", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 3750, duration: 0 },
            { id: "eid169", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 4000, duration: 0 },
            { id: "eid173", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 4250, duration: 0 },
            { id: "eid177", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 4500, duration: 0 },
            { id: "eid181", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 4750, duration: 0 },
            { id: "eid185", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 5000, duration: 0 },
            { id: "eid191", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 5500, duration: 0 },
            { id: "eid195", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 5750, duration: 0 },
            { id: "eid199", tween: [ "transform", "${_feather}", "skewY", '0deg', { fromValue: '0deg'}], position: 6000, duration: 0 },
            { id: "eid42", tween: [ "style", "${_wizard21}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_wizard21}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_wizard23}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid45", tween: [ "style", "${_wizard23}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 0 },
            { id: "eid12", tween: [ "style", "${_wizard07}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_wizard07}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 0 }         ]
      }
   }
},
"intro1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'intro1Text',
      type: 'rect',
      rect: ['0','-1','0','0','auto','auto']
   },
   {
      rect: ['-24','377','391','57','auto','auto'],
      id: 'scrollFade',
      transform: [],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/scrollFade.png']
   },
   {
      id: 'more2',
      type: 'rect',
      rect: ['137','399','0','0','auto','auto']
   },
   {
      rect: ['137','399','58','29','auto','auto'],
      id: 'back',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/back.png']
   }],
   symbolInstances: [
   {
      id: 'intro1Text',
      symbolName: 'intro1Text'
   },
   {
      id: 'more2',
      symbolName: 'more'
   }   ]
   },
   states: {
      "Base State": {
         "${_back}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '296px']
         ],
         "${_intro1Text}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_more2}": [
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '393px'],
            ["style", "width", '355px']
         ],
         "${_scrollFade}": [
            ["style", "top", '377px'],
            ["style", "left", '-24px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10250,
         autoPlay: true,
         labels: {
            "upMore": 6250,
            "overmore": 6500,
            "play": 7000,
            "play 1": 7000,
            "stop": 8250,
            "play2 1": 9000,
            "stop2": 10250
         },
         timeline: [
            { id: "eid310", tween: [ "style", "${_back}", "left", '296px', { fromValue: '296px'}], position: 6250, duration: 0 },
            { id: "eid338", tween: [ "style", "${_back}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
            { id: "eid339", tween: [ "style", "${_back}", "display", 'block', { fromValue: 'none'}], position: 8286, duration: 0 },
            { id: "eid337", tween: [ "style", "${_back}", "display", 'none', { fromValue: 'block'}], position: 10250, duration: 0 },
            { id: "eid318", tween: [ "style", "${_intro1Text}", "top", '-1px', { fromValue: '0px'}], position: 6250, duration: 750 },
            { id: "eid294", tween: [ "style", "${_intro1Text}", "top", '-437px', { fromValue: '-1px'}], position: 7000, duration: 1286, easing: "easeInQuad" },
            { id: "eid317", tween: [ "style", "${_intro1Text}", "top", '0px', { fromValue: '-437px'}], position: 9000, duration: 1250 },
            { id: "eid293", tween: [ "style", "${_intro1Text}", "left", '-1px', { fromValue: '0px'}], position: 7000, duration: 1286, easing: "easeInQuad" },
            { id: "eid319", tween: [ "style", "${_intro1Text}", "left", '0px', { fromValue: '-1px'}], position: 9000, duration: 1250 },
            { id: "eid311", tween: [ "style", "${_more2}", "left", '0px', { fromValue: '0px'}], position: 7000, duration: 0 },
            { id: "eid286", tween: [ "style", "${_more2}", "opacity", '1', { fromValue: '1'}], position: 6250, duration: 0, easing: "easeInQuad" },
            { id: "eid323", tween: [ "style", "${_more2}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 1786 },
            { id: "eid325", tween: [ "style", "${_more2}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 1250 },
            { id: "eid335", tween: [ "style", "${_more2}", "display", 'none', { fromValue: 'block'}], position: 8286, duration: 0 },
            { id: "eid336", tween: [ "style", "${_more2}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid326", tween: [ "style", "${_back}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 1286 },
            { id: "eid328", tween: [ "style", "${_back}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 1250 }         ]
      }
   }
},
"more": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      rect: [0,0,64,29],
      id: 'more',
      transform: [[0,0]],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/more.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_more}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '29px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6250,
         autoPlay: true,
         timeline: [
            { id: "eid300", tween: [ "style", "${_more}", "opacity", '1', { fromValue: '1'}], position: 6250, duration: 0 }         ]
      }
   }
},
"intro1Text": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [],
      type: 'text',
      id: 'Text',
      text: 'Emma Watson, who’ll be seen as bossy Hermione Granger for the fifth time in “Harry Potter and the Order of the Phoenix,” says that she’ll be attending Hogwarts through graduation.',
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','normal','none',''],
      rect: ['1','321','353','104','auto','auto']
   },
   {
      transform: [],
      type: 'text',
      align: 'auto',
      id: 'Text4',
      text: ' “They just decided, on absolutely nothing to go on, that they were just going to make up one way or another what I was doing,” the English actress says of reports that she wanted to pull out of the popular kid wizard series before its sixth and final seventh episodes are filmed. “I guess they got the idea that I wasn’t going to complete the series because I actually took some time to think about it. The press are a bit funny like that.”',
      rect: ['1','464','352','128','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      type: 'text',
      align: 'auto',
      id: 'Text2',
      text: '“Daniel and Rupert are the only other people in the world who will ever understand what it is like to have been through what I have been through,” Watson notes. “I think we have quite a special bond. Even if we hated each other and didn’t get on at all, we would always have that. That’s important to me, being able to talk to them about it and going through it all with them.”',
      rect: ['2','592','352','115','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy',
      text: 'Watson says that the magical friends do more growing up than ever in “Phoenix.”   “It’s about realizing that what you are told is not always the best, and that thinking for yourself is sometimes more important,” she observes. “And it’s important to trust yourself and make decisions for yourself.”       Lesson, apparently, learned. ',
      rect: ['2','707','352','122','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      id: 'herm',
      type: 'rect',
      rect: ['2','53','auto','auto','auto','auto']
   },
   {
      id: 'hermione',
      type: 'image',
      rect: ['1','0','199','43','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hermione.png']
   }],
   symbolInstances: [
   {
      id: 'herm',
      symbolName: 'herm'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '321px'],
            ["style", "height", '104px'],
            ["style", "font-size", '13px'],
            ["style", "left", '1px'],
            ["style", "width", '353px']
         ],
         "${symbolSelector}": [
            ["style", "height", '809px'],
            ["style", "width", '356px']
         ],
         "${_Text2Copy}": [
            ["style", "height", '122px'],
            ["style", "top", '708px']
         ],
         "${_Text2}": [
            ["style", "height", '115px'],
            ["style", "top", '593px']
         ],
         "${_Text4}": [
            ["style", "height", '128px'],
            ["style", "top", '465px'],
            ["style", "left", '2px'],
            ["style", "width", '352px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"herm": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'granger',
      type: 'image',
      rect: ['0px','0px','329','306','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/granger.jpg']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '260px'],
            ["style", "width", '329px'],
            ["style", "overflow", 'hidden']
         ],
         "${_granger}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-151029592");
