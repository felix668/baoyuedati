/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	Vue.component('app', __webpack_require__(2));
	var root = new Vue({
		el: '#root',
		template: '<app></app>'
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	(function (doc, win) {
	    var docEl = doc.documentElement,
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	    function recalc() {
	        var clientWidth = docEl.clientWidth;
	        if (!clientWidth) return;
	        // console.log(clientWidth)
	        clientWidth = clientWidth > 750 ? 750 : clientWidth;
	        docEl.style.fontSize = clientWidth / 7.5 + 'px';
	    };
	    if (!doc.addEventListener) return;
	    win.addEventListener(resizeEvt, recalc, false);
	    doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(3);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(24);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-36a5abe4/app.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _data = __webpack_require__(4);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			maskLoading: __webpack_require__(5),
			maskOver: __webpack_require__(12),
			maskAnswer: __webpack_require__(16),
			maskResult: __webpack_require__(21)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				answer: false,
				result: false,
				login: true,
				isvip: true,
				config: {
					name: '',
					bodybg: '',
					banner: '',
					card_bg: '',
					ft_color: '',
					red_ftcolor: '',
					answernum: 0,
					button: {
						btn_bg: '',
						btn_txt: [],
						font_color: '' },
					card: {
						selresulte: [],
						tonext: false
					},
					resultData: {},
					rule: {
						rule_tt: '',
						rule_suqfc: '',
						rule_suqbg: '',
						text: [],
						priv_tt: '',
						priv_img: '',
						priv_text: []
					}
				},
				btnstyle: {},
				rulestyle: {}
			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				self.loading = false;
				self.config = _data2.default;
				$("body").css({ "background": "url(" + self.config.bodybg + ") 100% repeat-y", "background-size": "100% auto" });
				self.btnstyle = {
					color: self.config.button.font_color,
					backgroundImage: "url(" + self.config.button.btn_bg + ")"
				};
				self.rulestyle = {
					backgroundImage: "url(" + self.config.card_bg + ")"
				};
			},
			touchStart: function touchStart(e) {
				var self = this;
				self.$refs.login.style.backgroundPosition = "0 -1.2rem";
			},
			touchEnd: function touchEnd(e) {
				var self = this;
				self.$refs.login.style.backgroundPosition = "0 0";
			},
			dochange: function dochange() {
				var self = this;
				if (!self.login) {
					console.log("请登陆");
				} else if (!self.isvip) {
					console.log("去开通包月");
				} else {
					console.log("开始答题");
					self.answer = true;
					self.result = true;

					self.config.answernum = 0;

					var num = self.config.answernum - 1;
					for (var i = 0; i < num; i++) {
						$(".card").eq(i).css("display", "none");
					}
				}
			}
		},
		created: function created() {
			this.initpage();
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		name: '包月活动', //标题
		bodybg: './images/bg.png', //背景图片
		banner: './images/banner.png', //banner图
		card_bg: './images/card_bg.png', //中间块背景图
		ft_color: '#8a5519',
		red_ftcolor: '#fd7258',
		button: { //登录按钮
			btn_bg: './images/btn_bg.png', //按钮背景图
			font_color: '#f9ebcd' },
		rule: {
			rule_tt: './images/rule_tt.png', //规则标题
			rule_suqfc: "#ffffff", //规则序列字体颜色
			rule_suqbg: "#6b4316", //规则序列背景色　
			text: [//规则
			'活动时间：2017年3月7日—3月13日；', '活动仅限包月VIP用户参与（体验卡开通、系统赠送的包月用户不算；', '用户做完题后，点击提交按钮，上传答案；每答对一题，获得5书券／阅券；', '活动期间，用户只能提交答案一次；', '安卓／iOS平台，奖励互通，不能重复领取。'],
			priv_img: './images/vipimg.jpg',
			priv_text: ['1.包月库内10万册书籍在线免费阅读', '2.非包月库存内书籍、看书听书8折优惠']
		},
		card: {
			card_tt: '每答对1道题，送5书券',
			quannum: 5,
			radio_bordcol: '#6b4316',
			radio_bgcol: '#fd7258',
			selresulte: [],
			tonext: false,
			btntobook: {
				btnbg: './images/gobook.png',
				ftcol: '#f9ebcd'
			},
			list: [{
				bid: '121',
				bookname: '书名1',
				answerName: '1. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: [{
					answer: '2016年7月7日15点—7月15日啊索朗'
				}, {
					answer: '多吉哈萨克和打瞌睡叠好地为'
				}, {
					answer: '阿拉山口参加啊深刻检查'
				}, {
					answer: '阿安莎社卡刷卡后说'
				}]
			}, {
				bid: '122',
				bookname: '书名2',
				answerName: '2. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: [{
					answer: '2016年7月7日15点—7月15日啊索朗'
				}, {
					answer: '多吉哈萨克和打瞌睡叠好地为'
				}, {
					answer: '阿拉山口参加啊深刻检查'
				}, {
					answer: '阿安莎社卡刷卡后说'
				}]
			}, {
				bid: '123',
				bookname: '书名3',
				answerName: '3. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: [{
					answer: '2016年7月7日15点—7月15日啊索朗'
				}, {
					answer: '多吉哈萨克和打瞌睡叠好地为'
				}, {
					answer: '阿拉山口参加啊深刻检查'
				}, {
					answer: '阿安莎社卡刷卡后说'
				}]
			}, {
				bid: '124',
				bookname: '书名4',
				answerName: '4. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: [{
					answer: '2016年7月7日15点—7月15日啊索朗'
				}, {
					answer: '多吉哈萨克和打瞌睡叠好地为'
				}, {
					answer: '阿拉山口参加啊深刻检查'
				}, {
					answer: '阿安莎社卡刷卡后说'
				}]
			}],
			nextbtn: {
				btnbg: './images/nextbg.png',
				ftcol: '#f9ebcd'
			}
		},
		resultData: {
			rewardimg: ['./images/quan.png', '{}'],
			resulenum: 3,
			qsbg: './images/resulttt.png',
			qsftcol: '#fcefd4',
			bnamecol: '#000000',
			bauthorcol: '#786e5d',
			resultbooks: [{
				bid: '223',
				author: '银子浩',
				bookname: '丈量世界',
				bookface: './images/bookface1.jpg'
			}, {
				bid: '221',
				author: '言七',
				bookname: '旅行摄影圣经',
				bookface: './images/bookface2.jpg'
			}]
		}
	};
	exports.default = data;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(6);
	__vue_script__ = __webpack_require__(10);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(11);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-2ce6f3fd/MaskLoading.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-2ce6f3fd=\"\">\n\t<p class=\"_text\" _v-2ce6f3fd=\"\"><img :src=\"'images/loading.png'\" _v-2ce6f3fd=\"\">正在加载...</p>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(13);
	__vue_template__ = __webpack_require__(15);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-08b9dfe3/MaskOver.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"over\" _v-08b9dfe3=\"\">\n\t<div class=\"over-c\" _v-08b9dfe3=\"\">\n        <img :src=\"'images/over.png'\" alt=\"本期活动已结束\" _v-08b9dfe3=\"\">\n        <p class=\"over-p1\" _v-08b9dfe3=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-08b9dfe3=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(19);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskAnswer.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(20);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-5028c7e6/MaskAnswer.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  props: ['show', 'cardlist', 'cardbg', 'ftcol', 'redcol', 'answernum', 'resultshow'],
	  data: function data() {
	    return {
	      tips: ''
	    };
	  },
	  computed: {
	    styleObj: function styleObj() {
	      return {
	        cardStyle: {
	          backgroundImage: "url(" + this.cardbg + ")"
	        },
	        btnstyle: {
	          color: this.cardlist.btntobook.ftcol,
	          backgroundImage: "url(" + this.cardlist.btntobook.btnbg + ")"
	        },
	        radioStyle: {
	          borderColor: this.cardlist.radio_bordcol
	        },
	        nextStyle: {
	          color: this.cardlist.nextbtn.ftcol,
	          backgroundImage: "url(" + this.cardlist.nextbtn.btnbg + ")",
	          backgroundPosition: '0 -2.2rem'
	        },
	        moveStyle: {}
	      };
	    },
	    tipnum: function tipnum() {
	      var self = this;
	      var len = self.cardlist.list.length;
	      var arr = [];
	      for (var i = 0; i < len; i++) {
	        arr.push(Math.floor(Math.random() * 11) + 87);
	      }
	      return arr;
	    }
	  },
	  methods: {
	    touchStart: function touchStart(e) {
	      var $cur = $(e.currentTarget);
	      var self = this;
	      $cur.css("background-position", "0 -1rem");
	    },
	    touchEnd: function touchEnd(bid, e) {
	      var $cur = $(e.currentTarget);
	      var self = this;
	      $cur.css("background-position", "0 0");
	      console.log(bid);
	    },
	    selected: function selected(e) {
	      var $cur = $(e.currentTarget);
	      var self = this;
	      var ind = $cur.index();
	      $(".ansewerlist li").children('div').css("background", "transparent");
	      $cur.children('div').css("background", this.cardlist.radio_bgcol);
	      $cur.addClass("onact").siblings().removeClass('onact');
	      $(".btn_next").css("background-position", '0 0');
	      $(".btn_next").on('touchstart', function () {
	        $(this).css("background-position", '0 -1.1rem');
	      });
	      self.cardlist.tonext = true;
	    },
	    tonextAns: function tonextAns(e) {
	      var $cur = $(e.currentTarget);
	      var self = this;
	      var num = $cur.parent().parent().parent().index();
	      $cur.css("background-position", '0 0');
	      if (self.cardlist.tonext) {
	        var ind = $(".onact").index();
	        self.cardlist.selresulte.push(ind);
	        console.log(self.cardlist.selresulte);
	        self.toNextQuestion(num);
	        self.cardlist.tonext = false;
	      }
	    },
	    toNextQuestion: function toNextQuestion(ind) {
	      var self = this;
	      var len = self.cardlist.list.length - 1;
	      $(".answerbox>li").eq(ind).addClass('flyout');
	      $(".ansewerlist li").removeClass('onact');

	      console.log(ind);
	      var timer = null;
	      if (ind == len) {
	        console.log("go resulte");
	        timer = setTimeout(function () {
	          self.$parent.answer = false;
	          timer = null;
	        }, 1000);
	      }
	    }
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"answerpage\" _v-5028c7e6=\"\">\n\t\t<ul class=\"answerbox\" :style=\"{color:ftcol}\" _v-5028c7e6=\"\">\n\t\t\t<li v-for=\"(list,index) in cardlist.list\" :style=\"{zIndex:cardlist.list.length-index,bottom:-0.08*index+'rem',backgroundImage:'url('+cardbg+')'}\" class=\"card\" _v-5028c7e6=\"\">\n\t\t\t\t<div class=\"padbox\" _v-5028c7e6=\"\">\n\t\t\t\t\t<h4 _v-5028c7e6=\"\"><span _v-5028c7e6=\"\"><em :style=\"{color:redcol}\" _v-5028c7e6=\"\">{{ index+1 }}</em>/{{ cardlist.list.length }}</span>{{ cardlist.card_tt }}</h4>\n\t\t\t\t\t<p class=\"answername\" _v-5028c7e6=\"\">{{ list.answerName }}</p>\n\t\t\t\t\t<div class=\"gobook\" _v-5028c7e6=\"\">\n\t\t\t\t\t\t<p :style=\"{color:redcol}\" _v-5028c7e6=\"\">{{ tipnum[index] }}%的人在《{{ list.bookname }}》1-5章找到答案</p>\n\t\t\t\t\t\t<div class=\"btn_gobook\" :style=\"styleObj.btnstyle\" @touchstart.stop=\"touchStart($event)\" @touchend.stop=\"touchEnd(list.bid,$event)\" _v-5028c7e6=\"\">书中找答案，再答题</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"title\" _v-5028c7e6=\"\">立即答题：</p>\n\t\t\t\t\t<ul class=\"ansewerlist\" _v-5028c7e6=\"\">\n\t\t\t\t\t\t<li v-for=\"list in list.answerResult\" @click=\"selected($event)\" _v-5028c7e6=\"\"><div :style=\"styleObj.radioStyle\" _v-5028c7e6=\"\"></div>{{ list.answer }}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"nextanser\" _v-5028c7e6=\"\">\n\t\t\t\t\t\t<p :style=\"{color:redcol}\" _v-5028c7e6=\"\">每道题只有1次答题机会，错过无奖励哦！</p>\n\t\t\t\t\t\t<div class=\"btn_next\" :style=\"styleObj.nextStyle\" @touchend.stop=\"tonextAns($event)\" _v-5028c7e6=\"\">{{ index!=(cardlist.list.length-1)?'下一题':'完成答题'}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</li>\n\t   </ul>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskResult.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(23);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-7ca5dcec/MaskResult.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['cardbg', 'resultdata', 'ftcol', 'redcol'],
		data: function data() {
			return {};
		},
		computed: {
			styleObj: function styleObj() {
				return {
					sourttbg: {
						backgroundImage: "url(" + this.resultdata.qsbg + ")",
						color: this.resultdata.qsftcol
					},
					cardStyle: {
						backgroundImage: "url(" + this.cardbg + ")"
					}
				};
			}
		},
		methods: {
			gobook: function gobook(bid) {
				console.log(bid);
			}
		}

	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"resultbox\" :style=\"styleObj.cardStyle\">\n\t<img :src=\"resultdata.rewardimg[0]\" alr=\"jptu\" />\n\t<div class=\"answerok\" v-show=\"resultdata.resulenum!=0\">\n\t\t<h4 :style=\"{ color:redcol }\">恭喜你，答对{{ resultdata.resulenum }}道题，获得{{ resultdata.resulenum*5 }}书券 </h4>\n\t    <p :style=\"{ color:ftcol }\">书券已到账，可以去账户中查看</p>\n\t</div>\n\t<div class=\"answerno\" v-show=\"resultdata.resulenum==0\" :style=\"{ color:redcol }\">\n\t\t你错过一大波书券／阅券，<br>期待下次活动吧\n\t</div>\n\t<div class=\"quersour\" :style=\"styleObj.sourttbg\">题目来自于这2本书，感兴趣就去阅读吧！</div>\n\t<ul class=\"Resbooklist\">\n\t\t<li v-for=\"booklist in resultdata.resultbooks\">\n\t\t\t<img :src=\"booklist.bookface\" @click=\"gobook(booklist.bid)\" />\n\t\t\t<p :style=\"{color:resultdata.bnamecol}\">{{ booklist.bookname }}</p>\n\t\t\t<p :style=\"{color:resultdata.bauthorcol}\">{{ booklist.author }}</p>\n\t\t</li>\n\t</ul>\n</div>\t\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\" v-show=\"!answer && !result\">\n\t\t<img :src=\"config.banner\" ale=\"banner\" class=\"banner\" />\n\t\t<div class=\"btnbox\">\n\t\t\t<div class=\"btn\" :style=\"btnstyle\" ref=\"login\" @click=\"dochange\" @touchstart.stop=\"touchStart($event)\" @touchend.stop=\"touchEnd($event)\">{{ !login ? '登录开始答题': !isvip ? '开通包月会员参与答题' : '开始答题'}}</div>\n\t\t\t<p class=\"notice\" :style=\"{color:config.red_ftcolor}\" v-show=\"!isvip && login\">体验卡开通的用户无法参与</p>\n\t\t</div>\n\t\t\n\t\t<div class=\"rulebox\"  :style=\"rulestyle\">\n\t\t\t<div class=\"rule\" v-show=\"!login || isvip\">\n\t\t\t\t<img class=\"rule_tt\" :src=\"config.rule.rule_tt\" alt=\"rules\" />\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"(item,index) in config.rule.text\" :style=\"{color:config.ft_color}\"><span :style=\"{color:config.rule.rule_suqfc,background:config.rule.rule_suqbg}\">{{ index+1 }}</span>{{ item }}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"vip_privilege\" v-show=\"!isvip && login\" :style=\"{color:config.ft_color}\">\n\t\t\t\t<h4>开通包月还可以：</h4>\n\t\t\t\t<img :src=\"config.rule.priv_img\" />\n\t\t\t\t<ul class=\"privilege\">\n\t\t\t\t\t<li v-for=\"item in config.rule.priv_text\">{{ item }}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<img class=\"logo\" :src=\"'images/logo.png'\" alt=\"logo\"/>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-answer v-show=\"answer\" \n\t\t\t\t:show.sync=\"answer\"\n\t\t\t\t:cardlist=\"config.card\"\n\t\t\t\t:cardbg=\"config.card_bg\"\n\t\t\t\t:ftcol=\"config.ft_color\"\n\t\t\t\t:redcol=\"config.red_ftcolor\"\n\t\t\t\t:answernum=\"config.answernum\"\n\t></mask-answer>\n\t<mask-result v-show=\"result\" \n\t\t\t\t:cardbg=\"config.card_bg\"\n\t\t\t\t:resultdata='config.resultData'\n\t\t\t\t:ftcol=\"config.ft_color\"\n\t\t\t\t:redcol=\"config.red_ftcolor\"\t\t\t\n\t></mask-result>\n</div>\n";

/***/ }
/******/ ]);