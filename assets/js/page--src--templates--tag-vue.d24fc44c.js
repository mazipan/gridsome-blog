(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1O1A":function(t,s,a){},"2qYH":function(t,s,a){"use strict";a.r(s);var e=a("A6W1"),i=a("BA+P"),o={components:{Author:e.a,PostCard:i.a},metaInfo:{title:"Hello, world!"}},n=a("rilS"),r=null,c=Object(n.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("\n    # "+this._s(this.$page.tag.title)+"\n  ")]),s("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof r&&r(c);s.default=c.exports},A6W1:function(t,s,a){"use strict";var e={props:["showTitle"]},i=(a("ArLL"),a("rilS")),o=a("Vro6"),n=o.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"Gridsome Blog by @mazipan"}},c=function(t){var s=t.options;s.__staticData?s.__staticData.data=r:(s.__staticData=o.a.observable({data:r}),s.computed=n({$static:function(){return s.__staticData.data}},s.computed))},l=Object(i.a)(e,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"author"},[e("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:a("aKgb"),width:"180",height:"180",blur:"5"}}),t.showTitle?e("h1",{staticClass:"author__site-title"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteName)+"\n\t")]):t._e(),e("p",{staticClass:"author__intro"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteDescription)+"\n\t")]),t._m(0)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"author__links"},[s("a",{attrs:{href:"https://mazipan.space/"}},[this._v("GitHub")])])}],!1,null,null,null);"function"==typeof c&&c(l);s.a=l.exports},ArLL:function(t,s,a){"use strict";var e=a("FYgN");a.n(e).a},"BA+P":function(t,s,a){"use strict";var e=a("n6yM"),i=a("PpWc"),o={components:{PostMeta:e.a,PostTags:i.a},props:["post"]},n=(a("YDir"),a("rilS")),r=Object(n.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__header"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=r.exports},FYgN:function(t,s,a){},GsXb:function(t,s,a){"use strict";var e=a("1O1A");a.n(e).a},PpWc:function(t,s,a){"use strict";var e={props:["post"]},i=(a("GsXb"),a("rilS")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=o.exports},V4bF:function(t,s,a){},YDir:function(t,s,a){"use strict";var e=a("V4bF");a.n(e).a},YIUa:function(t,s,a){"use strict";var e=a("o/Dn");a.n(e).a},aKgb:function(t,s){t.exports={type:"image",mimeType:"image/jpeg",src:"/gridsome-blog/assets/static/author2.e6b6009.ce124b7a9e4543c669dac0b2a30128a7.jpeg",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/gridsome-blog/assets/static/author2.e6b6009.ce124b7a9e4543c669dac0b2a30128a7.jpeg 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-68900414bc48a0451c7e980576f7e8c4'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-68900414bc48a0451c7e980576f7e8c4)' width='180' height='180' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABwgFBgECAwT/xAA0EAABAwIFAgUDAwIHAAAAAAABAgMEBREABhIhMQcTQVFhgZEUInEIFaEzQhcjJDKCscH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EACMRAAEEAgICAgMAAAAAAAAAAAEAAgMRBCESEzFBYaEFFDL/2gAMAwEAAhEDEQA/AGNScZO%2bNVhSVXAFsZSSMSVSuVOplNhwq/mWtwoS/wB1cBQtrurJdCeDpIsNWkEWviNzxmSlIyp2syMx3W5L%2bhUUlxBfaSq5cQLawNtr7XHOCGq9hpPGAd1BElqv1aUIrshyU8GwSd0obQAEjwAvc/8AK%2bFZE/U3lVlHBj9ruN0FZm5ETOGS6MaPAplVZZBCmSpRRFdQiyOSFCxsbK3IxMJp6oVcTKp9LYYVP0OTXkIAUVfcVaze99xa3jfA06JzFnOEl1SVQ478RxLiFkaVlKklBJ8CLqHvbBkdlRlPFtEthTgNtCXUlV7%2bV74bDJ2M5Ugli638bUYuBPqS6lGqzEKTTlJWYqXG0qssKOjUDe9hY3%2bfX2mjNvVOJNejxyQwUvgtoOpyydJ/23NvuHPlj1uTosUWkPttkkCylb73tt7H4OOj06K3HZeU8C28QlsoBXrNidgkG%2bwPxjjaDSiJdTmR6RU3X3VBKlumM7YAtkG4bPtwfHceV9naon94lASz2nHTBS1c2bUE/aseR1kpJ/Hli0S6fFfjPsPMIcYfJLqFC4UTzf4GORisiP8ATpZR2SSS2RsSTfj87/nDiBaAAn2oV6SpzJRfUpRW5CTqINiSpIB387k4E%2bd8wRqimfAiOl6XSlGIspdSe/p4WN9xbY%2boOK51w6hux50zLWV0tQoaFFE11hISqQrxSD4JG423P4wEqb9VLmtx4HcM9xwIYSg21E8i/h5/OF5GN2R0TXtMgyOqQOAv0mZ6XNwW6HElpkwVyxLcalfUo19gFq6EqG3NgQRsb%2bmL7U4v%2bsnvRmAr7YklJbb3XoWSq3mbDj8YViot1nJUtmrQqs4xVAtCVqZFknbhXgoXHBFsNRknMreZsmUqsPlpl%2bUwFuthWyV3INr%2bFwcBjlvWOGwtnDuw89Fcng/MrDMuna0oQtlPdWyq3DoJsbEgBYufXEo9Tnm4cFuK8vuNyw6t3Sm/3ays245VxjsmUzYq7wIFr2N/G2Bt1s6jTcqw4kOgKaTMkJU4qQtGvtpBtZIO1/U8YPZKXQCOHItiJfp6y/3EvLBCrpT/AOf9/OJQk32GNVb8i2KKQpB88d8V2eqS2W3u%2b5rQeUq1G49sSHS%2bkAyHK/MuiLCJDN9u47bn8Jv8kYLvV/p5Efz0uc7KKI01IkLYQLKuDZdj5E291YHeZq1CYdh0dlAYh60shpvbSgmxV/PziP8AIZXM9EXk%2bfgKvExgwfsS/wAjx8qp5nzNJqM10tqWw0h3SLHdXIufzthkehRY/wAKqKHIy3Vq7244/qKwDM7ZTh03LyHILZU%2b3IQlStRUVJP2gH3tiayN1HzbRaLEoFCpjS0JuGG3GFuOfconYXF977YHElifEDENKQyGZxe47TJJXpdWfolEKAuDx478WwG%2bqUrL%2bYczoZQpmS5DgklLTw7alFRugKB3Ukjfw3GK51uztmA0ahUafrgyZEJMqotoHbUpwkgII8E2F7eN8BuGXHW1MtuqQ42C40E7XP8AcB5EgX9sOfEXN0aWtnETgSLHtMZmv9RVQaqLjeXKNFMJKiEvTFKUpweelJGkfOJHJ36jYc2YxEzTSvoO4sI%2brjOa2kX2upJ3A9QThbJMl11pCHALpFr%2beI9RB5w8WhLt6TZfqXkvwWMsVOnulDqXX2daNwpC0JNvUGwwsFQS9LnuSFanHVAfcB/d6emGE6qoeX0UyOZ7oVJ7TYK7cjtA/NgMAOXL7rRjxhpavfc7qt4k4a7g1odWyhPIktvSsGYuoFQn0d2nOUuEylaEhTqdRXqTYhQPANxfDg0gw6rTaZWUx46pEiI24l7tjUApIJAVza5wgveJNr%2b2GG6BdT5LoYyrV0hxLTVoTwsCEpH9NXntwfbEzIWMHFgoLWGlVut%2bVswVfqHVZSGG1MEpSzd0D/LCQBt4Yp9NyHJRoXVKlFgEEFIQrWu/8AYOXW1xhFGXWWZDzEgLbZICdTagTa58Rt4%2bnG%2bFxnzo0yqR/rXJDkdKgHnAoKJF9yhOwG3A/nCnMyC4iwB9qknFa0Egk/S//9k=' /%3e%3c/svg%3e"}},n6yM:function(t,s,a){"use strict";var e={props:["post"]},i=(a("YIUa"),a("rilS")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=o.exports},"o/Dn":function(t,s,a){}}]);