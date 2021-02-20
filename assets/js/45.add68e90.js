(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{553:function(t,v,o){"use strict";o.r(v);var e=o(4),_=Object(e.a)({},(function(){var t=this,v=t.$createElement,o=t._self._c||v;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"spi-扩展"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#spi-扩展"}},[t._v("#")]),t._v(" SPI 扩展")]),t._v(" "),o("h2",{attrs:{id:"目录"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),o("ul",[o("li",[t._v("描述")]),t._v(" "),o("li",[t._v("Jboot SPI 模块")])]),t._v(" "),o("h2",{attrs:{id:"描述"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),o("p",[t._v("SPI 的全名为 : Service Provider Interface。")]),t._v(" "),o("p",[o("strong",[t._v("SPI 具体约定")])]),t._v(" "),o("p",[t._v("当服务的提供者，提供了服务接口的一种实现之后，在 jar 包的"),o("code",[t._v("META-INF/services/")]),t._v(" 目录里同时创建一个以 "),o("strong",[t._v("服务接口")]),t._v(" 命名的文件。该文件里就是实现该服务接口的具体实现类。而 Jboot 装配这个模块的时候，就能通过该 jar 包 "),o("code",[t._v("META-INF/services/")]),t._v(" 里的配置文件找到具体的实现类名，并装载实例化，完成模块的注入。")]),t._v(" "),o("h2",{attrs:{id:"jboot-spi-模块"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jboot-spi-模块"}},[t._v("#")]),t._v(" Jboot SPI 模块")]),t._v(" "),o("p",[t._v("在jboot中，以下模块已经实现了SPI机制。")]),t._v(" "),o("ul",[o("li",[t._v("Jbootrpc")]),t._v(" "),o("li",[t._v("JbootHttp")]),t._v(" "),o("li",[t._v("JbootCache")]),t._v(" "),o("li",[t._v("Jbootmq")]),t._v(" "),o("li",[t._v("JbootSerializer")])]),t._v(" "),o("p",[t._v("例如，在 "),o("code",[t._v("JbootCache")]),t._v(" 中，内置了三种实现方案："),o("code",[t._v("ehcache")]),t._v("、"),o("code",[t._v("redis")]),t._v("、"),o("code",[t._v("ehredis")]),t._v("。在配置文件中，我看可以通过 "),o("code",[t._v("jboot.cache.type = ehcache")]),t._v(" 的方式来指定在 Jboot 应用中使用了什么样的缓存方案。")]),t._v(" "),o("p",[t._v("但是，在 Jboot 中，通过SPI机制，我们一样可以扩展出第4、第5甚至更多的缓存方案出来。")]),t._v(" "),o("p",[t._v("扩展步骤如下：")]),t._v(" "),o("ul",[o("li",[t._v("1：编写JbootCache的子类")]),t._v(" "),o("li",[t._v("2：通过 "),o("code",[t._v("@JbootSpi")]),t._v(" 注解给刚刚编写的类设置上一个名字，例如："),o("code",[t._v('@JbootSpi("mycache")')])]),t._v(" "),o("li",[t._v("3：通过在jboot.properties文件中配置上类型为 mycache，配置代码如下："),o("code",[t._v("jboot.cache.type = mycache")])])]),t._v(" "),o("p",[t._v("通过以上三步，我们就可以完成了对 JbootCache 模块的扩展，其他模块类似。")])])}),[],!1,null,null,null);v.default=_.exports}}]);