!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r,i,a,u=t("h6c0i");function l(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=n.delay,t=n.step,c=n.amount;r=Number(o.value),i=Number(t.value),a=Number(c.value);for(var f=1;f<=a;f+=1)console.log(r),l(f,r).then((function(e){var n=e.position,o=e.delay;u.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;u.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),r+=i;e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.76e3574e.js.map
