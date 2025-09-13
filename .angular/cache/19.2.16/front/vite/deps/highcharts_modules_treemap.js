import {
  __commonJS,
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/highcharts/modules/treemap.js
var require_treemap = __commonJS({
  "node_modules/highcharts/modules/treemap.js"(exports, module) {
    !/**
    * Highcharts JS v12.4.0 (2025-09-04)
    * @module highcharts/modules/treemap
    * @requires highcharts
    *
    * (c) 2014-2025 Highsoft AS
    * Authors: Jon Arild Nygard / Oystein Moseng
    *
    * License: www.highcharts.com/license
    */
    function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(t._Highcharts, t._Highcharts.Templating, t._Highcharts.Color, t._Highcharts.SeriesRegistry, t._Highcharts.SVGElement, t._Highcharts.Series) : "function" == typeof define && define.amd ? define("highcharts/modules/treemap", ["highcharts/highcharts"], function(t2) {
        return e(t2, t2.Templating, t2.Color, t2.SeriesRegistry, t2.SVGElement, t2.Series);
      }) : "object" == typeof exports ? exports["highcharts/modules/treemap"] = e(t._Highcharts, t._Highcharts.Templating, t._Highcharts.Color, t._Highcharts.SeriesRegistry, t._Highcharts.SVGElement, t._Highcharts.Series) : t.Highcharts = e(t.Highcharts, t.Highcharts.Templating, t.Highcharts.Color, t.Highcharts.SeriesRegistry, t.Highcharts.SVGElement, t.Highcharts.Series);
    }("undefined" == typeof window ? exports : window, (t, e, i, s, o, r) => (() => {
      "use strict";
      var l, a, n = {
        28: (t2) => {
          t2.exports = o;
        },
        512: (t2) => {
          t2.exports = s;
        },
        620: (t2) => {
          t2.exports = i;
        },
        820: (t2) => {
          t2.exports = r;
        },
        944: (e2) => {
          e2.exports = t;
        },
        984: (t2) => {
          t2.exports = e;
        }
      }, h = {};
      function d(t2) {
        var e2 = h[t2];
        if (void 0 !== e2) return e2.exports;
        var i2 = h[t2] = {
          exports: {}
        };
        return n[t2](i2, i2.exports, d), i2.exports;
      }
      d.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return d.d(e2, {
          a: e2
        }), e2;
      }, d.d = (t2, e2) => {
        for (var i2 in e2) d.o(e2, i2) && !d.o(t2, i2) && Object.defineProperty(t2, i2, {
          enumerable: true,
          get: e2[i2]
        });
      }, d.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
      var p = {};
      d.d(p, {
        default: () => tk
      });
      var u = d(944), c = d.n(u);
      let g = {
        lang: {
          mainBreadcrumb: "Main"
        },
        options: {
          buttonTheme: {
            fill: "none",
            height: 18,
            padding: 2,
            "stroke-width": 0,
            zIndex: 7,
            states: {
              select: {
                fill: "none"
              }
            },
            style: {
              color: "#334eff"
            }
          },
          buttonSpacing: 5,
          floating: false,
          format: void 0,
          relativeTo: "plotBox",
          rtl: false,
          position: {
            align: "left",
            verticalAlign: "top",
            x: 0,
            y: void 0
          },
          separator: {
            text: "/",
            style: {
              color: "#666666",
              fontSize: "0.8em"
            }
          },
          showFullPath: true,
          style: {},
          useHTML: false,
          zIndex: 7
        }
      };
      var v = d(984);
      let {
        format: m
      } = d.n(v)(), {
        composed: b
      } = c(), {
        addEvent: f,
        defined: y,
        extend: x,
        fireEvent: w,
        isString: T,
        merge: L,
        objectEach: B,
        pick: A,
        pushUnique: P
      } = c();
      function S() {
        if (this.breadcrumbs) {
          let t2 = this.resetZoomButton && this.resetZoomButton.getBBox(), e2 = this.breadcrumbs.options;
          t2 && "right" === e2.position.align && "plotBox" === e2.relativeTo && this.breadcrumbs.alignBreadcrumbsGroup(-t2.width - e2.buttonSpacing);
        }
      }
      function C() {
        this.breadcrumbs && (this.breadcrumbs.destroy(), this.breadcrumbs = void 0);
      }
      function O() {
        let t2 = this.breadcrumbs;
        if (t2 && !t2.options.floating && t2.level) {
          let e2 = t2.options, i2 = e2.buttonTheme, s2 = (i2.height || 0) + 2 * (i2.padding || 0) + e2.buttonSpacing, o2 = e2.position.verticalAlign;
          "bottom" === o2 ? (this.marginBottom = (this.marginBottom || 0) + s2, t2.yOffset = s2) : "middle" !== o2 ? (this.plotTop += s2, t2.yOffset = -s2) : t2.yOffset = void 0;
        }
      }
      function N() {
        this.breadcrumbs && this.breadcrumbs.redraw();
      }
      function M(t2) {
        true === t2.resetSelection && this.breadcrumbs && this.breadcrumbs.alignBreadcrumbsGroup();
      }
      class R {
        static compose(t2, e2) {
          P(b, "Breadcrumbs") && (f(t2, "destroy", C), f(t2, "afterShowResetZoom", S), f(t2, "getMargins", O), f(t2, "redraw", N), f(t2, "selection", M), x(e2.lang, g.lang));
        }
        constructor(t2, e2) {
          this.elementList = {}, this.isDirty = true, this.level = 0, this.list = [];
          let i2 = L(t2.options.drilldown && t2.options.drilldown.drillUpButton, R.defaultOptions, t2.options.navigation && t2.options.navigation.breadcrumbs, e2);
          this.chart = t2, this.options = i2 || {};
        }
        updateProperties(t2) {
          this.setList(t2), this.setLevel(), this.isDirty = true;
        }
        setList(t2) {
          this.list = t2;
        }
        setLevel() {
          this.level = this.list.length && this.list.length - 1;
        }
        getLevel() {
          return this.level;
        }
        getButtonText(t2) {
          let e2 = this.chart, i2 = this.options, s2 = e2.options.lang, o2 = A(i2.format, i2.showFullPath ? "{level.name}" : "← {level.name}"), r2 = s2 && A(s2.drillUpText, s2.mainBreadcrumb), l2 = i2.formatter && i2.formatter(t2) || m(o2, {
            level: t2.levelOptions
          }, e2) || "";
          return (T(l2) && !l2.length || "← " === l2) && y(r2) && (l2 = i2.showFullPath ? r2 : "← " + r2), l2;
        }
        redraw() {
          this.isDirty && this.render(), this.group && this.group.align(), this.isDirty = false;
        }
        render() {
          let t2 = this.chart, e2 = this.options;
          !this.group && e2 && (this.group = t2.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({
            zIndex: e2.zIndex
          }).add()), e2.showFullPath ? this.renderFullPathButtons() : this.renderSingleButton(), this.alignBreadcrumbsGroup();
        }
        renderFullPathButtons() {
          this.destroySingleButton(), this.resetElementListState(), this.updateListElements(), this.destroyListElements();
        }
        renderSingleButton() {
          let t2 = this.chart, e2 = this.list, i2 = this.options.buttonSpacing;
          this.destroyListElements();
          let s2 = this.group ? this.group.getBBox().width : i2, o2 = e2[e2.length - 2];
          !t2.drillUpButton && this.level > 0 ? t2.drillUpButton = this.renderButton(o2, s2, i2) : t2.drillUpButton && (this.level > 0 ? this.updateSingleButton() : this.destroySingleButton());
        }
        alignBreadcrumbsGroup(t2) {
          if (this.group) {
            let e2 = this.options, i2 = e2.buttonTheme, s2 = e2.position, o2 = "chart" === e2.relativeTo || "spacingBox" === e2.relativeTo ? void 0 : "plotBox", r2 = this.group.getBBox(), l2 = 2 * (i2.padding || 0) + e2.buttonSpacing;
            s2.width = r2.width + l2, s2.height = r2.height + l2;
            let a2 = L(s2);
            t2 && (a2.x += t2), this.options.rtl && (a2.x += s2.width), a2.y = A(a2.y, this.yOffset, 0), this.group.align(a2, true, o2);
          }
        }
        renderButton(t2, e2, i2) {
          let s2 = this, o2 = this.chart, r2 = s2.options, l2 = L(r2.buttonTheme), a2 = o2.renderer.button(s2.getButtonText(t2), e2, i2, function(e3) {
            let i3, o3 = r2.events && r2.events.click;
            o3 && (i3 = o3.call(s2, e3, t2)), false !== i3 && (r2.showFullPath ? e3.newLevel = t2.level : e3.newLevel = s2.level - 1, w(s2, "up", e3));
          }, l2).addClass("highcharts-breadcrumbs-button").add(s2.group);
          return o2.styledMode || a2.attr(r2.style), a2;
        }
        renderSeparator(t2, e2) {
          let i2 = this.chart, s2 = this.options.separator, o2 = i2.renderer.label(s2.text, t2, e2, void 0, void 0, void 0, false).addClass("highcharts-breadcrumbs-separator").add(this.group);
          return i2.styledMode || o2.css(s2.style), o2;
        }
        update(t2) {
          L(true, this.options, t2), this.destroy(), this.isDirty = true;
        }
        updateSingleButton() {
          let t2 = this.chart, e2 = this.list[this.level - 1];
          t2.drillUpButton && t2.drillUpButton.attr({
            text: this.getButtonText(e2)
          });
        }
        destroy() {
          this.destroySingleButton(), this.destroyListElements(true), this.group && this.group.destroy(), this.group = void 0;
        }
        destroyListElements(t2) {
          let e2 = this.elementList;
          B(e2, (i2, s2) => {
            (t2 || !e2[s2].updated) && ((i2 = e2[s2]).button && i2.button.destroy(), i2.separator && i2.separator.destroy(), delete i2.button, delete i2.separator, delete e2[s2]);
          }), t2 && (this.elementList = {});
        }
        destroySingleButton() {
          this.chart.drillUpButton && (this.chart.drillUpButton.destroy(), this.chart.drillUpButton = void 0);
        }
        resetElementListState() {
          B(this.elementList, (t2) => {
            t2.updated = false;
          });
        }
        updateListElements() {
          let t2 = this.elementList, e2 = this.options.buttonSpacing, i2 = this.list, s2 = this.options.rtl, o2 = s2 ? -1 : 1, r2 = function(t3, e3) {
            return o2 * t3.getBBox().width + o2 * e3;
          }, l2 = function(t3, e3, i3) {
            t3.translate(e3 - t3.getBBox().width, i3);
          }, a2 = this.group ? r2(this.group, e2) : e2, n2, h2;
          for (let d2 = 0, p2 = i2.length; d2 < p2; ++d2) {
            let u2, c2, g2 = d2 === p2 - 1;
            t2[(h2 = i2[d2]).level] ? (u2 = (n2 = t2[h2.level]).button, n2.separator || g2 ? n2.separator && g2 && (n2.separator.destroy(), delete n2.separator) : (a2 += o2 * e2, n2.separator = this.renderSeparator(a2, e2), s2 && l2(n2.separator, a2, e2), a2 += r2(n2.separator, e2)), t2[h2.level].updated = true) : (u2 = this.renderButton(h2, a2, e2), s2 && l2(u2, a2, e2), a2 += r2(u2, e2), g2 || (c2 = this.renderSeparator(a2, e2), s2 && l2(c2, a2, e2), a2 += r2(c2, e2)), t2[h2.level] = {
              button: u2,
              separator: c2,
              updated: true
            }), u2 && u2.setState(2 * !!g2);
          }
        }
      }
      R.defaultOptions = g.options;
      var D = d(620), I = d.n(D), H = d(512), G = d.n(H), E = d(28), V = d.n(E);
      let {
        column: {
          prototype: k
        }
      } = G().seriesTypes, {
        addEvent: U,
        defined: W
      } = c();
      !function(t2) {
        function e2(t3) {
          let e3 = this.series, i2 = e3.chart.renderer;
          this.moveToTopOnHover && this.graphic && (e3.stateMarkerGraphic || (e3.stateMarkerGraphic = new (V())(i2, "use").css({
            pointerEvents: "none"
          }).add(this.graphic.parentGroup)), t3?.state === "hover" ? (this.graphic.attr({
            id: this.id
          }), e3.stateMarkerGraphic.attr({
            href: `${i2.url}#${this.id}`,
            visibility: "visible"
          })) : e3.stateMarkerGraphic.attr({
            href: ""
          }));
        }
        t2.pointMembers = {
          dataLabelOnNull: true,
          moveToTopOnHover: true,
          isValid: function() {
            return null !== this.value && this.value !== 1 / 0 && this.value !== -1 / 0 && (void 0 === this.value || !isNaN(this.value));
          }
        }, t2.seriesMembers = {
          colorKey: "value",
          axisTypes: ["xAxis", "yAxis", "colorAxis"],
          parallelArrays: ["x", "y", "value"],
          pointArrayMap: ["value"],
          trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
          colorAttribs: function(t3) {
            let e3 = {};
            return W(t3.color) && (!t3.state || "normal" === t3.state) && (e3[this.colorProp || "fill"] = t3.color), e3;
          },
          pointAttribs: k.pointAttribs
        }, t2.compose = function(t3) {
          return U(t3.prototype.pointClass, "afterSetState", e2), t3;
        };
      }(l || (l = {}));
      let F = l;
      var _ = d(820), z = d.n(_);
      let j = class {
        constructor(t2, e2, i2, s2) {
          this.height = t2, this.width = e2, this.plot = s2, this.direction = i2, this.startDirection = i2, this.total = 0, this.nW = 0, this.lW = 0, this.nH = 0, this.lH = 0, this.elArr = [], this.lP = {
            total: 0,
            lH: 0,
            nH: 0,
            lW: 0,
            nW: 0,
            nR: 0,
            lR: 0,
            aspectRatio: function(t3, e3) {
              return Math.max(t3 / e3, e3 / t3);
            }
          };
        }
        addElement(t2) {
          this.lP.total = this.elArr[this.elArr.length - 1], this.total = this.total + t2, 0 === this.direction ? (this.lW = this.nW, this.lP.lH = this.lP.total / this.lW, this.lP.lR = this.lP.aspectRatio(this.lW, this.lP.lH), this.nW = this.total / this.height, this.lP.nH = this.lP.total / this.nW, this.lP.nR = this.lP.aspectRatio(this.nW, this.lP.nH)) : (this.lH = this.nH, this.lP.lW = this.lP.total / this.lH, this.lP.lR = this.lP.aspectRatio(this.lP.lW, this.lH), this.nH = this.total / this.width, this.lP.nW = this.lP.total / this.nH, this.lP.nR = this.lP.aspectRatio(this.lP.nW, this.nH)), this.elArr.push(t2);
        }
        reset() {
          this.nW = 0, this.lW = 0, this.elArr = [], this.total = 0;
        }
      }, $ = {
        draw: function(t2, e2) {
          let {
            animatableAttribs: i2,
            onComplete: s2,
            css: o2,
            renderer: r2
          } = e2, l2 = t2.series && t2.series.chart.hasRendered ? void 0 : t2.series && t2.series.options.animation, a2 = t2.graphic;
          if (e2.attribs = __spreadProps(__spreadValues({}, e2.attribs), {
            class: t2.getClassName()
          }), t2.shouldDraw()) a2 || (t2.graphic = a2 = "text" === e2.shapeType ? r2.text() : "image" === e2.shapeType ? r2.image(e2.imageUrl || "").attr(e2.shapeArgs || {}) : r2[e2.shapeType](e2.shapeArgs || {}), a2.add(e2.group)), o2 && a2.css(o2), a2.attr(e2.attribs).animate(i2, !e2.isNew && l2, s2);
          else if (a2) {
            let e3 = () => {
              t2.graphic = a2 = a2 && a2.destroy(), "function" == typeof s2 && s2();
            };
            Object.keys(i2).length ? a2.animate(i2, void 0, () => e3()) : e3();
          }
        }
      }, {
        pie: {
          prototype: {
            pointClass: K
          }
        },
        scatter: {
          prototype: {
            pointClass: Y
          }
        }
      } = G().seriesTypes, {
        extend: Z,
        isNumber: q,
        pick: X
      } = c();
      class J extends Y {
        constructor() {
          super(...arguments), this.groupedPointsAmount = 0, this.shapeType = "rect";
        }
        draw(t2) {
          $.draw(this, t2);
        }
        getClassName() {
          let t2 = this.series, e2 = t2.options, i2 = super.getClassName();
          return this.node.level <= t2.nodeMap[t2.rootNode].level && this.node.children.length ? i2 += " highcharts-above-level" : this.node.isGroup || this.node.isLeaf || t2.nodeMap[t2.rootNode].isGroup || X(e2.interactByLeaf, !e2.allowTraversingTree) ? this.node.isGroup || this.node.isLeaf || t2.nodeMap[t2.rootNode].isGroup || (i2 += " highcharts-internal-node") : i2 += " highcharts-internal-node-interactive", i2;
        }
        isValid() {
          return !!(this.id || q(this.value));
        }
        setState(t2) {
          super.setState.apply(this, arguments), this.graphic && this.graphic.attr({
            zIndex: +("hover" === t2)
          });
        }
        shouldDraw() {
          return q(this.plotY) && null !== this.y;
        }
      }
      Z(J.prototype, {
        setVisible: K.prototype.setVisible
      });
      let {
        isString: Q
      } = c(), tt = {
        allowTraversingTree: false,
        animationLimit: 250,
        borderRadius: 0,
        showInLegend: false,
        marker: void 0,
        colorByPoint: false,
        dataLabels: {
          enabled: true,
          formatter: function() {
            let t2 = this && this.point ? this.point : {};
            return Q(t2.name) ? t2.name : "";
          },
          headers: false,
          inside: true,
          padding: 2,
          verticalAlign: "middle",
          style: {
            textOverflow: "ellipsis"
          }
        },
        tooltip: {
          headerFormat: "",
          pointFormat: "<b>{point.name}</b>: {point.value}<br/>",
          clusterFormat: "+ {point.groupedPointsAmount} more...<br/>"
        },
        ignoreHiddenPoint: true,
        layoutAlgorithm: "sliceAndDice",
        layoutStartingDirection: "vertical",
        alternateStartingDirection: false,
        levelIsConstant: true,
        traverseUpButton: {
          position: {
            align: "right",
            x: -10,
            y: 10
          }
        },
        borderColor: "#e6e6e6",
        borderWidth: 1,
        colorKey: "colorValue",
        opacity: 0.15,
        states: {
          hover: {
            borderColor: "#999999",
            brightness: 0.1 * !G().seriesTypes.heatmap,
            halo: false,
            opacity: 0.75,
            shadow: false
          }
        },
        legendSymbol: "rectangle",
        traverseToLeaf: false,
        cluster: {
          className: void 0,
          color: void 0,
          enabled: false,
          pixelWidth: void 0,
          pixelHeight: void 0,
          name: void 0,
          reductionFactor: void 0,
          minimumClusterSize: 5,
          layoutAlgorithm: {
            distance: 0,
            gridSize: 0,
            kmeansThreshold: 0
          },
          marker: {
            lineWidth: 0,
            radius: 0
          }
        }
      };
      (a || (a = {})).recursive = function t2(e2, i2, s2) {
        let o2 = i2.call(s2 || this, e2);
        false !== o2 && t2(o2, i2, s2);
      };
      let te = a, {
        extend: ti,
        isArray: ts,
        isNumber: to,
        isObject: tr,
        merge: tl,
        pick: ta,
        relativeLength: tn
      } = c(), {
        parse: th
      } = I(), {
        composed: td,
        noop: tp
      } = c(), {
        column: tu,
        scatter: tc
      } = G().seriesTypes, {
        getColor: tg,
        getLevelOptions: tv,
        updateRootId: tm
      } = {
        getColor: function(t2, e2) {
          let i2, s2, o2, r2, l2, a2, n2 = e2.index, h2 = e2.mapOptionsToLevel, d2 = e2.parentColor, p2 = e2.parentColorIndex, u2 = e2.series, c2 = e2.colors, g2 = e2.siblings, v2 = u2.points, m2 = u2.chart.options.chart;
          return t2 && (i2 = v2[t2.i], s2 = h2[t2.level] || {}, i2 && s2.colorByPoint && (r2 = i2.index % (c2 ? c2.length : m2.colorCount), o2 = c2 && c2[r2]), u2.chart.styledMode || (l2 = ta(i2 && i2.options.color, s2 && s2.color, o2, d2 && ((t3) => {
            let e3 = s2 && s2.colorVariation;
            return e3 && "brightness" === e3.key && n2 && g2 ? I().parse(t3).brighten(e3.to * (n2 / g2)).get() : t3;
          })(d2), u2.color)), a2 = ta(i2 && i2.options.colorIndex, s2 && s2.colorIndex, r2, p2, e2.colorIndex)), {
            color: l2,
            colorIndex: a2
          };
        },
        getLevelOptions: function(t2) {
          let e2, i2, s2, o2, r2, l2, a2 = {};
          if (tr(t2)) for (o2 = to(t2.from) ? t2.from : 1, l2 = t2.levels, i2 = {}, e2 = tr(t2.defaults) ? t2.defaults : {}, ts(l2) && (i2 = l2.reduce((t3, i3) => {
            let s3, r3, l3;
            return tr(i3) && to(i3.level) && (r3 = ta((l3 = tl({}, i3)).levelIsConstant, e2.levelIsConstant), delete l3.levelIsConstant, delete l3.level, tr(t3[s3 = i3.level + (r3 ? 0 : o2 - 1)]) ? tl(true, t3[s3], l3) : t3[s3] = l3), t3;
          }, {})), r2 = to(t2.to) ? t2.to : 1, s2 = 0; s2 <= r2; s2++) a2[s2] = tl({}, e2, tr(i2[s2]) ? i2[s2] : {});
          return a2;
        },
        getNodeWidth: function(t2, e2) {
          let {
            chart: i2,
            options: s2
          } = t2, {
            nodeDistance: o2 = 0,
            nodeWidth: r2 = 0
          } = s2, {
            plotSizeX: l2 = 1
          } = i2;
          if ("auto" === r2) {
            if ("string" == typeof o2 && /%$/.test(o2)) return l2 / (e2 + parseFloat(o2) / 100 * (e2 - 1));
            let t3 = Number(o2);
            return (l2 + t3) / (e2 || 1) - t3;
          }
          return tn(r2, l2);
        },
        setTreeValues: function t2(e2, i2) {
          let s2 = i2.before, o2 = i2.idRoot, r2 = i2.mapIdToNode[o2], l2 = false !== i2.levelIsConstant, a2 = i2.points[e2.i], n2 = a2 && a2.options || {}, h2 = [], d2 = 0;
          e2.levelDynamic = e2.level - (l2 ? 0 : r2.level), e2.name = ta(a2 && a2.name, ""), e2.visible = o2 === e2.id || true === i2.visible, "function" == typeof s2 && (e2 = s2(e2, i2)), e2.children.forEach((s3, o3) => {
            let r3 = ti({}, i2);
            ti(r3, {
              index: o3,
              siblings: e2.children.length,
              visible: e2.visible
            }), s3 = t2(s3, r3), h2.push(s3), s3.visible && (d2 += s3.val);
          });
          let p2 = ta(n2.value, d2);
          return e2.visible = p2 >= 0 && (d2 > 0 || e2.visible), e2.children = h2, e2.childrenTotal = d2, e2.isLeaf = e2.visible && !d2, e2.val = p2, e2;
        },
        updateRootId: function(t2) {
          let e2, i2;
          return tr(t2) && (i2 = tr(t2.options) ? t2.options : {}, e2 = ta(t2.rootNode, i2.rootId, ""), tr(t2.userOptions) && (t2.userOptions.rootId = e2), t2.rootNode = e2), e2;
        }
      }, {
        addEvent: tb,
        arrayMax: tf,
        clamp: ty,
        correctFloat: tx,
        crisp: tw,
        defined: tT,
        error: tL,
        extend: tB,
        fireEvent: tA,
        isArray: tP,
        isNumber: tS,
        isObject: tC,
        isString: tO,
        merge: tN,
        pick: tM,
        pushUnique: tR,
        splat: tD,
        stableSort: tI
      } = c();
      z().keepProps.push("simulation", "hadOutsideDataLabels");
      let tH = false;
      function tG() {
        let t2, e2 = this.xAxis, i2 = this.yAxis;
        e2 && i2 && (this.is("treemap") ? (t2 = {
          endOnTick: false,
          gridLineWidth: 0,
          lineWidth: 0,
          min: 0,
          minPadding: 0,
          max: 100,
          maxPadding: 0,
          startOnTick: false,
          title: void 0,
          tickPositions: []
        }, tB(i2.options, t2), tB(e2.options, t2), tH = true) : tH && (i2.setOptions(i2.userOptions), e2.setOptions(e2.userOptions), tH = false));
      }
      class tE extends tc {
        constructor() {
          super(...arguments), this.simulation = 0;
        }
        static compose(t2) {
          tR(td, "TreemapSeries") && tb(t2, "afterBindAxes", tG);
        }
        algorithmCalcPoints(t2, e2, i2, s2) {
          let o2 = i2.plot, r2 = i2.elArr.length - 1, l2, a2, n2, h2, d2 = i2.lW, p2 = i2.lH, u2, c2 = 0;
          for (let t3 of (e2 ? (d2 = i2.nW, p2 = i2.nH) : u2 = i2.elArr[r2], i2.elArr)) (e2 || c2 < r2) && (0 === i2.direction ? (l2 = o2.x, a2 = o2.y, h2 = t3 / (n2 = d2)) : (l2 = o2.x, a2 = o2.y, n2 = t3 / (h2 = p2)), s2.push({
            x: l2,
            y: a2,
            width: n2,
            height: tx(h2)
          }), 0 === i2.direction ? o2.y = o2.y + h2 : o2.x = o2.x + n2), c2 += 1;
          i2.reset(), 0 === i2.direction ? i2.width = i2.width - d2 : i2.height = i2.height - p2, o2.y = o2.parent.y + (o2.parent.height - i2.height), o2.x = o2.parent.x + (o2.parent.width - i2.width), t2 && (i2.direction = 1 - i2.direction), e2 || i2.addElement(u2);
        }
        algorithmFill(t2, e2, i2) {
          let s2 = [], o2, r2 = e2.direction, l2 = e2.x, a2 = e2.y, n2 = e2.width, h2 = e2.height, d2, p2, u2, c2;
          for (let g2 of i2) o2 = e2.width * e2.height * (g2.val / e2.val), d2 = l2, p2 = a2, 0 === r2 ? (n2 -= u2 = o2 / (c2 = h2), l2 += u2) : (h2 -= c2 = o2 / (u2 = n2), a2 += c2), s2.push({
            x: d2,
            y: p2,
            width: u2,
            height: c2,
            direction: 0,
            val: 0
          }), t2 && (r2 = 1 - r2);
          return s2;
        }
        algorithmLowAspectRatio(t2, e2, i2) {
          let s2 = [], o2 = {
            x: e2.x,
            y: e2.y,
            parent: e2
          }, r2 = e2.direction, l2 = i2.length - 1, a2 = new j(e2.height, e2.width, r2, o2), n2, h2 = 0;
          for (let r3 of i2) n2 = e2.width * e2.height * (r3.val / e2.val), a2.addElement(n2), a2.lP.nR > a2.lP.lR && this.algorithmCalcPoints(t2, false, a2, s2, o2), h2 === l2 && this.algorithmCalcPoints(t2, true, a2, s2, o2), ++h2;
          return s2;
        }
        alignDataLabel(t2, e2, i2) {
          tu.prototype.alignDataLabel.apply(this, arguments), t2.dataLabel && t2.dataLabel.attr({
            zIndex: (t2.node.zIndex || 0) + 1
          });
        }
        applyTreeGrouping() {
          let t2 = this, e2 = t2.parentList || {}, {
            cluster: i2
          } = t2.options, s2 = i2?.minimumClusterSize || 5;
          if (i2?.enabled) {
            let o2 = {}, r2 = (t3) => {
              if (t3?.point?.shapeArgs) {
                let {
                  width: e3 = 0,
                  height: s3 = 0
                } = t3.point.shapeArgs, {
                  pixelWidth: r3 = 0,
                  pixelHeight: l3 = 0
                } = i2, a2 = tT(l3), n2 = l3 ? r3 * l3 : r3 * r3;
                (e3 < r3 || s3 < (a2 ? l3 : r3) || e3 * s3 < n2) && !t3.isGroup && tT(t3.parent) && (o2[t3.parent] || (o2[t3.parent] = []), o2[t3.parent].push(t3));
              }
              t3?.children.forEach((t4) => {
                r2(t4);
              });
            };
            for (let l3 in r2(t2.tree), o2) o2[l3] && o2[l3].length > s2 && o2[l3].forEach((s3) => {
              let o3 = e2[l3].indexOf(s3.i);
              if (-1 !== o3) {
                e2[l3].splice(o3, 1);
                let r3 = `highcharts-grouped-treemap-points-${s3.parent || "root"}`, a2 = t2.points.find((t3) => t3.id === r3);
                if (!a2) {
                  let s4 = t2.pointClass, o4 = t2.points.length;
                  tB(a2 = new s4(t2, {
                    className: i2.className,
                    color: i2.color,
                    id: r3,
                    index: o4,
                    isGroup: true,
                    value: 0
                  }), {
                    formatPrefix: "cluster"
                  }), t2.points.push(a2), e2[l3].push(o4), e2[r3] = [];
                }
                let n2 = a2.groupedPointsAmount + 1, h2 = t2.points[a2.index].options.value || 0, d2 = i2.name || `+ ${n2}`;
                t2.points[a2.index].groupedPointsAmount = n2, t2.points[a2.index].options.value = h2 + (s3.point.value || 0), t2.points[a2.index].name = d2, e2[r3].push(s3.point.index);
              }
            });
            t2.nodeMap = {}, t2.nodeList = [], t2.parentList = e2;
            let l2 = t2.buildTree("", -1, 0, t2.parentList);
            t2.translate(l2);
          }
        }
        calculateChildrenAreas(t2, e2) {
          let i2 = this.options, s2 = this.mapOptionsToLevel[t2.level + 1], o2 = tM(s2?.layoutAlgorithm && this[s2?.layoutAlgorithm] && s2.layoutAlgorithm, i2.layoutAlgorithm), r2 = i2.alternateStartingDirection, l2 = t2.children.filter((e3) => t2.isGroup || !e3.ignore), a2 = s2?.groupPadding ?? i2.groupPadding ?? 0, n2 = this.nodeMap[this.rootNode];
          if (!o2) return;
          let h2 = [], d2 = n2.pointValues?.width || 0, p2 = n2.pointValues?.height || 0;
          s2?.layoutStartingDirection && (e2.direction = +("vertical" !== s2.layoutStartingDirection)), h2 = this[o2](e2, l2);
          let u2 = -1;
          for (let t3 of l2) {
            let i3 = h2[++u2];
            t3 === n2 && (d2 = d2 || i3.width, p2 = i3.height);
            let s3 = a2 / (this.xAxis.len / p2), o3 = a2 / (this.yAxis.len / p2);
            if (t3.values = tN(i3, {
              val: t3.childrenTotal,
              direction: r2 ? 1 - e2.direction : e2.direction
            }), t3.children.length && t3.point.dataLabels?.length) {
              let e3 = tf(t3.point.dataLabels.map((t4) => t4.options?.headers && t4.height || 0)) / (this.yAxis.len / p2);
              e3 < t3.values.height / 2 && (t3.values.y += e3, t3.values.height -= e3);
            }
            if (a2) {
              let e3 = Math.min(s3, t3.values.width / 4), i4 = Math.min(o3, t3.values.height / 4);
              t3.values.x += e3, t3.values.width -= 2 * e3, t3.values.y += i4, t3.values.height -= 2 * i4;
            }
            t3.pointValues = tN(i3, {
              x: i3.x / this.axisRatio,
              y: 100 - i3.y - i3.height,
              width: i3.width / this.axisRatio
            }), t3.children.length && this.calculateChildrenAreas(t3, t3.values);
          }
          let c2 = (t3, e3 = [], i3 = true) => (t3.children.forEach((t4) => {
            i3 && t4.isLeaf ? e3.push(t4.point) : i3 || t4.isLeaf || e3.push(t4.point), t4.children.length && c2(t4, e3, i3);
          }), e3);
          if ("leaf" === i2.nodeSizeBy && t2 === n2 && this.hasOutsideDataLabels && !c2(n2, void 0, false).some((t3) => tS(t3.options.value)) && !tS(n2.point?.options.value)) {
            let i3 = c2(n2), s3 = i3.map((t3) => t3.options.value || 0), o3 = i3.map(({
              node: {
                pointValues: t3
              }
            }) => t3 ? t3.width * t3.height : 0), r3 = s3.reduce((t3, e3) => t3 + e3, 0), l3 = o3.reduce((t3, e3) => t3 + e3, 0) / r3, a3 = 0, h3 = 0;
            i3.forEach((t3, e3) => {
              let i4 = ty((s3[e3] ? o3[e3] / s3[e3] : 1) / l3, 0.8, 1.4), r4 = 1 - i4;
              t3.value && (o3[e3] < 20 && (r4 *= o3[e3] / 20), r4 > h3 && (h3 = r4), r4 < a3 && (a3 = r4), t3.simulatedValue = (t3.simulatedValue || t3.value) / i4);
            }), (a3 < -0.05 || h3 > 0.05) && this.simulation < 10 ? (this.simulation++, this.setTreeValues(t2), e2.val = t2.val, this.calculateChildrenAreas(t2, e2)) : (i3.forEach((t3) => {
              delete t3.simulatedValue;
            }), this.setTreeValues(t2), this.simulation = 0);
          }
        }
        createList(t2) {
          let e2 = this.chart, i2 = e2.breadcrumbs, s2 = [];
          if (i2) {
            let i3 = 0;
            s2.push({
              level: i3,
              levelOptions: e2.series[0]
            });
            let o2 = t2.target.nodeMap[t2.newRootId], r2 = [];
            for (; o2.parent || "" === o2.parent; ) r2.push(o2), o2 = t2.target.nodeMap[o2.parent];
            for (let t3 of r2.reverse()) s2.push({
              level: ++i3,
              levelOptions: t3
            });
            s2.length <= 1 && (s2.length = 0);
          }
          return s2;
        }
        drawDataLabels() {
          let t2 = this.mapOptionsToLevel, e2 = this.points.filter(function(t3) {
            return t3.node.visible || tT(t3.dataLabel);
          }), i2 = tD(this.options.dataLabels || {})[0]?.padding, s2 = e2.some((t3) => tS(t3.plotY));
          for (let o2 of e2) {
            let e3 = {}, r2 = {
              style: e3
            }, l2 = t2[o2.node.level];
            if ((!o2.node.isLeaf && !o2.node.isGroup || o2.node.isGroup && o2.node.level <= this.nodeMap[this.rootNode].level) && (r2.enabled = false), l2?.dataLabels && (tN(true, r2, tD(l2.dataLabels)[0]), this.hasDataLabels = () => true), o2.node.isLeaf ? r2.inside = true : r2.headers && (r2.verticalAlign = "top"), o2.shapeArgs && s2) {
              let {
                height: t3 = 0,
                width: s3 = 0
              } = o2.shapeArgs;
              if (s3 > 32 && t3 > 16 && o2.shouldDraw()) {
                let l3 = s3 - 2 * (r2.padding || i2 || 0);
                e3.width = `${l3}px`, e3.lineClamp ?? (e3.lineClamp = Math.floor(t3 / 16)), e3.visibility = "inherit", r2.headers && o2.dataLabel?.attr({
                  width: l3
                });
              } else e3.width = `${s3}px`, e3.visibility = "hidden";
            }
            o2.dlOptions = tN(r2, o2.options.dataLabels);
          }
          super.drawDataLabels(e2);
        }
        drawPoints(t2 = this.points) {
          let e2 = this.chart, i2 = e2.renderer, s2 = e2.styledMode, o2 = this.options, r2 = s2 ? {} : o2.shadow, l2 = o2.borderRadius, a2 = e2.pointCount < o2.animationLimit, n2 = o2.allowTraversingTree;
          for (let e3 of t2) {
            let t3 = {}, h2 = {}, d2 = {}, p2 = "level-group-" + e3.node.level, u2 = !!e3.graphic, c2 = a2 && u2, g2 = e3.shapeArgs;
            e3.shouldDraw() && (e3.isInside = true, l2 && (h2.r = l2), tN(true, c2 ? t3 : h2, u2 ? g2 : {}, s2 ? {} : this.pointAttribs(e3, e3.selected ? "select" : void 0)), this.colorAttribs && s2 && tB(d2, this.colorAttribs(e3)), this[p2] || (this[p2] = i2.g(p2).attr({
              zIndex: -(e3.node.level || 0)
            }).add(this.group), this[p2].survive = true)), e3.draw({
              animatableAttribs: t3,
              attribs: h2,
              css: d2,
              group: this[p2],
              imageUrl: e3.imageUrl,
              renderer: i2,
              shadow: r2,
              shapeArgs: g2,
              shapeType: e3.shapeType
            }), n2 && e3.graphic && (e3.drillId = o2.interactByLeaf ? this.drillToByLeaf(e3) : this.drillToByGroup(e3));
          }
        }
        drillToByGroup(t2) {
          return (!t2.node.isLeaf || !!t2.node.isGroup) && t2.id;
        }
        drillToByLeaf(t2) {
          let {
            traverseToLeaf: e2
          } = t2.series.options, i2 = false, s2;
          if (t2.node.parent !== this.rootNode && t2.node.isLeaf) if (e2) i2 = t2.id;
          else for (s2 = t2.node; !i2; ) void 0 !== s2.parent && (s2 = this.nodeMap[s2.parent]), s2.parent === this.rootNode && (i2 = s2.id);
          return i2;
        }
        drillToNode(t2, e2) {
          tL(32, false, void 0, {
            "treemap.drillToNode": "use treemap.setRootNode"
          }), this.setRootNode(t2, e2);
        }
        drillUp() {
          let t2 = this.nodeMap[this.rootNode];
          t2 && tO(t2.parent) && this.setRootNode(t2.parent, true, {
            trigger: "traverseUpButton"
          });
        }
        getExtremes() {
          let {
            dataMin: t2,
            dataMax: e2
          } = super.getExtremes(this.colorValueData);
          return this.valueMin = t2, this.valueMax = e2, super.getExtremes();
        }
        getListOfParents(t2, e2) {
          let i2 = tP(t2) ? t2 : [], s2 = tP(e2) ? e2 : [], o2 = i2.reduce(function(t3, e3, i3) {
            let s3 = tM(e3.parent, "");
            return void 0 === t3[s3] && (t3[s3] = []), t3[s3].push(i3), t3;
          }, {
            "": []
          });
          for (let t3 of Object.keys(o2)) {
            let e3 = o2[t3];
            if ("" !== t3 && -1 === s2.indexOf(t3)) {
              for (let t4 of e3) o2[""].push(t4);
              delete o2[t3];
            }
          }
          return o2;
        }
        getTree() {
          let t2 = this.data.map(function(t3) {
            return t3.id;
          });
          return this.parentList = this.getListOfParents(this.data, t2), this.nodeMap = {}, this.nodeList = [], this.buildTree("", -1, 0, this.parentList || {});
        }
        buildTree(t2, e2, i2, s2, o2) {
          let r2 = [], l2 = this.points[e2], a2 = 0, n2;
          for (let e3 of s2[t2] || []) a2 = Math.max((n2 = this.buildTree(this.points[e3].id, e3, i2 + 1, s2, t2)).height + 1, a2), r2.push(n2);
          let h2 = new this.NodeClass().init(t2, e2, r2, a2, i2, this, o2);
          for (let t3 of r2) t3.parentNode = h2;
          return this.nodeMap[h2.id] = h2, this.nodeList.push(h2), l2 && (l2.node = h2, h2.point = l2), h2;
        }
        hasData() {
          return !!this.dataTable.rowCount;
        }
        init(t2, e2) {
          let i2 = this, s2 = tN(e2.drillUpButton, e2.breadcrumbs), o2 = tb(i2, "setOptions", (t3) => {
            let e3 = t3.userOptions;
            tT(e3.allowDrillToNode) && !tT(e3.allowTraversingTree) && (e3.allowTraversingTree = e3.allowDrillToNode, delete e3.allowDrillToNode), tT(e3.drillUpButton) && !tT(e3.traverseUpButton) && (e3.traverseUpButton = e3.drillUpButton, delete e3.drillUpButton);
            let i3 = tD(e3.dataLabels || {});
            e3.levels?.forEach((t4) => {
              i3.push.apply(i3, tD(t4.dataLabels || {}));
            }), this.hasOutsideDataLabels = i3.some((t4) => t4.headers);
          });
          super.init(t2, e2), delete i2.opacity, i2.eventsToUnbind.push(o2), i2.options.allowTraversingTree && (i2.eventsToUnbind.push(tb(i2, "click", i2.onClickDrillToNode)), i2.eventsToUnbind.push(tb(i2, "setRootNode", function(t3) {
            let e3 = i2.chart;
            e3.breadcrumbs && e3.breadcrumbs.updateProperties(i2.createList(t3));
          })), i2.eventsToUnbind.push(tb(i2, "update", function(t3, e3) {
            let i3 = this.chart.breadcrumbs;
            i3 && t3.options.breadcrumbs && i3.update(t3.options.breadcrumbs), this.hadOutsideDataLabels = this.hasOutsideDataLabels;
          })), i2.eventsToUnbind.push(tb(i2, "destroy", function(t3) {
            let e3 = this.chart;
            e3.breadcrumbs && !t3.keepEventsForUpdate && (e3.breadcrumbs.destroy(), e3.breadcrumbs = void 0);
          }))), t2.breadcrumbs || (t2.breadcrumbs = new R(t2, s2)), i2.eventsToUnbind.push(tb(t2.breadcrumbs, "up", function(t3) {
            let e3 = this.level - t3.newLevel;
            for (let t4 = 0; t4 < e3; t4++) i2.drillUp();
          }));
        }
        onClickDrillToNode(t2) {
          let e2 = t2.point, i2 = e2?.drillId;
          tO(i2) && (e2.setState(""), this.setRootNode(i2, true, {
            trigger: "click"
          }));
        }
        pointAttribs(t2, e2) {
          let i2 = tC(this.mapOptionsToLevel) ? this.mapOptionsToLevel : {}, s2 = t2 && i2[t2.node.level] || {}, o2 = this.options, r2 = e2 && o2.states && o2.states[e2] || {}, l2 = t2?.getClassName() || "", a2 = {
            stroke: t2 && t2.borderColor || s2.borderColor || r2.borderColor || o2.borderColor,
            "stroke-width": tM(t2 && t2.borderWidth, s2.borderWidth, r2.borderWidth, o2.borderWidth),
            dashstyle: t2?.borderDashStyle || s2.borderDashStyle || r2.borderDashStyle || o2.borderDashStyle,
            fill: t2?.color || this.color
          };
          return -1 !== l2.indexOf("highcharts-above-level") ? (a2.fill = "none", a2["stroke-width"] = 0) : -1 !== l2.indexOf("highcharts-internal-node-interactive") ? (a2["fill-opacity"] = r2.opacity ?? o2.opacity ?? 1, a2.cursor = "pointer") : -1 !== l2.indexOf("highcharts-internal-node") ? a2.fill = "none" : e2 && r2.brightness && (a2.fill = th(a2.fill).brighten(r2.brightness).get()), a2;
        }
        setColorRecursive(t2, e2, i2, s2, o2) {
          let r2 = this?.chart, l2 = r2?.options?.colors;
          if (t2) {
            let r3 = tg(t2, {
              colors: l2,
              index: s2,
              mapOptionsToLevel: this.mapOptionsToLevel,
              parentColor: e2,
              parentColorIndex: i2,
              series: this,
              siblings: o2
            }), a2 = this.points[t2.i];
            a2 && (a2.color = r3.color, a2.colorIndex = r3.colorIndex);
            let n2 = -1;
            for (let e3 of t2.children || []) this.setColorRecursive(e3, r3.color, r3.colorIndex, ++n2, t2.children.length);
          }
        }
        setPointValues() {
          let t2 = this, {
            points: e2,
            xAxis: i2,
            yAxis: s2
          } = t2, o2 = t2.chart.styledMode, r2 = (e3) => o2 ? 0 : t2.pointAttribs(e3)["stroke-width"] || 0;
          for (let t3 of e2) {
            let {
              pointValues: e3,
              visible: o3
            } = t3.node;
            if (e3 && o3) {
              let {
                height: o4,
                width: l2,
                x: a2,
                y: n2
              } = e3, h2 = r2(t3), d2 = i2.toPixels(a2, true), p2 = i2.toPixels(a2 + l2, true), u2 = s2.toPixels(n2, true), c2 = s2.toPixels(n2 + o4, true), g2 = 0 === d2 ? h2 / 2 : tw(i2.toPixels(a2, true), h2, true), v2 = p2 === i2.len ? i2.len - h2 / 2 : tw(i2.toPixels(a2 + l2, true), h2, true), m2 = u2 === s2.len ? s2.len - h2 / 2 : tw(s2.toPixels(n2, true), h2, true), b2 = 0 === c2 ? h2 / 2 : tw(s2.toPixels(n2 + o4, true), h2, true), f2 = {
                x: Math.min(g2, v2),
                y: Math.min(m2, b2),
                width: Math.abs(v2 - g2),
                height: Math.abs(b2 - m2)
              };
              t3.plotX = f2.x + f2.width / 2, t3.plotY = f2.y + f2.height / 2, t3.shapeArgs = f2;
            } else delete t3.plotX, delete t3.plotY;
          }
        }
        setRootNode(t2, e2, i2) {
          tA(this, "setRootNode", tB({
            newRootId: t2,
            previousRootId: this.rootNode,
            redraw: tM(e2, true),
            series: this
          }, i2), function(t3) {
            let e3 = t3.series;
            e3.idPreviousRoot = t3.previousRootId, e3.rootNode = t3.newRootId, e3.isDirty = true, t3.redraw && e3.chart.redraw();
          });
        }
        setState(t2) {
          this.options.inactiveOtherPoints = true, super.setState(t2, false), this.options.inactiveOtherPoints = false;
        }
        setTreeValues(t2) {
          let e2 = this.options, i2 = this.rootNode, s2 = this.nodeMap[i2], o2 = "boolean" != typeof e2.levelIsConstant || e2.levelIsConstant, r2 = [], l2 = this.points[t2.i], a2 = 0;
          for (let e3 of t2.children) e3 = this.setTreeValues(e3), r2.push(e3), e3.ignore || (a2 += e3.val);
          tI(r2, (t3, e3) => (t3.sortIndex || 0) - (e3.sortIndex || 0));
          let n2 = tM(l2?.simulatedValue, l2?.options.value, a2);
          return l2 && (l2.value = n2), l2?.isGroup && e2.cluster?.reductionFactor && (n2 /= e2.cluster.reductionFactor), t2.parentNode?.point?.isGroup && this.rootNode !== t2.parent && (t2.visible = false), tB(t2, {
            children: r2,
            childrenTotal: a2,
            ignore: !(tM(l2?.visible, true) && n2 > 0),
            isLeaf: t2.visible && !a2,
            isGroup: l2?.isGroup,
            levelDynamic: t2.level - (o2 ? 0 : s2.level),
            name: tM(l2?.name, ""),
            sortIndex: tM(l2?.sortIndex, -n2),
            val: n2
          }), t2;
        }
        sliceAndDice(t2, e2) {
          return this.algorithmFill(true, t2, e2);
        }
        squarified(t2, e2) {
          return this.algorithmLowAspectRatio(true, t2, e2);
        }
        strip(t2, e2) {
          return this.algorithmLowAspectRatio(false, t2, e2);
        }
        stripes(t2, e2) {
          return this.algorithmFill(false, t2, e2);
        }
        translate(t2) {
          let e2 = this, i2 = e2.options, s2 = !t2, o2 = tm(e2), r2, l2, a2, n2;
          t2 || o2.startsWith("highcharts-grouped-treemap-points-") || ((this.points || []).forEach((t3) => {
            t3.isGroup && t3.destroy();
          }), super.translate(), t2 = e2.getTree()), e2.tree = t2 = t2 || e2.tree, r2 = e2.nodeMap[o2], "" === o2 || r2 || (e2.setRootNode("", false), o2 = e2.rootNode, r2 = e2.nodeMap[o2]), r2.point?.isGroup || (e2.mapOptionsToLevel = tv({
            from: r2.level + 1,
            levels: i2.levels,
            to: t2.height,
            defaults: {
              levelIsConstant: e2.options.levelIsConstant,
              colorByPoint: i2.colorByPoint
            }
          })), te.recursive(e2.nodeMap[e2.rootNode], (t3) => {
            let i3 = t3.parent, s3 = false;
            return t3.visible = true, (i3 || "" === i3) && (s3 = e2.nodeMap[i3]), s3;
          }), te.recursive(e2.nodeMap[e2.rootNode].children, (t3) => {
            let e3 = false;
            for (let i3 of t3) i3.visible = true, i3.children.length && (e3 = (e3 || []).concat(i3.children));
            return e3;
          }), e2.setTreeValues(t2), e2.axisRatio = e2.xAxis.len / e2.yAxis.len, e2.nodeMap[""].pointValues = l2 = {
            x: 0,
            y: 0,
            width: 100,
            height: 100
          }, e2.nodeMap[""].values = a2 = tN(l2, {
            width: l2.width * e2.axisRatio,
            direction: +("vertical" !== i2.layoutStartingDirection),
            val: t2.val
          }), (this.hasOutsideDataLabels || this.hadOutsideDataLabels) && this.drawDataLabels(), e2.calculateChildrenAreas(t2, a2), e2.colorAxis || i2.colorByPoint || e2.setColorRecursive(e2.tree), i2.allowTraversingTree && r2.pointValues && (n2 = r2.pointValues, e2.xAxis.setExtremes(n2.x, n2.x + n2.width, false), e2.yAxis.setExtremes(n2.y, n2.y + n2.height, false), e2.xAxis.setScale(), e2.yAxis.setScale()), e2.setPointValues(), s2 && e2.applyTreeGrouping();
        }
      }
      tE.defaultOptions = tN(tc.defaultOptions, tt), tB(tE.prototype, {
        buildKDTree: tp,
        colorAttribs: F.seriesMembers.colorAttribs,
        colorKey: "colorValue",
        directTouch: true,
        getExtremesFromAll: true,
        getSymbol: tp,
        optionalAxis: "colorAxis",
        parallelArrays: ["x", "y", "value", "colorValue"],
        pointArrayMap: ["value", "colorValue"],
        pointClass: J,
        NodeClass: class {
          constructor() {
            this.childrenTotal = 0, this.visible = false;
          }
          init(t2, e2, i2, s2, o2, r2, l2) {
            return this.id = t2, this.i = e2, this.children = i2, this.height = s2, this.level = o2, this.series = r2, this.parent = l2, this;
          }
        },
        trackerGroups: ["group", "dataLabelsGroup"],
        utils: te
      }), F.compose(tE), G().registerSeriesType("treemap", tE);
      let tV = c();
      tV.Breadcrumbs = tV.Breadcrumbs || R, tV.Breadcrumbs.compose(tV.Chart, tV.defaultOptions), tE.compose(tV.Series);
      let tk = c();
      return p.default;
    })());
  }
});
export default require_treemap();
//# sourceMappingURL=highcharts_modules_treemap.js.map
