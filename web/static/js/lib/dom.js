import {first, last, atIndex} from "bower_components/lodash/lodash";

function qsa(selector) {
  return document.querySelectorAll(selector);
}

function qs(selector) {
  return document.querySelector(selector);
}

function isId(selector) {
  return !!selector.match(/^#/);
}

var dom = function(s) {
  return isId(s) ? qs(s) : qsa(s);
}

dom.selector = qs;
dom.id = qs;
dom.first = (selector) => first(qsa(selector));
dom.nth = (i, selector) => atIndex(qsa(selector), i-1);
dom.last = (selector) => last(qsa(selector));
dom.class = (c) => qsa(`.${c}`);

export default dom;
