## 组件库文档  

如果是想看组件库的代码的话那么请[点击这里](https://github.com/zcued/zeus)

如果是想要了解这个组件库的文档的话，那么请继续往下看，本文会很耐心的告诉你这个组件库的相关

## 组件库代码构成
组件库内容包括两部分

1. home页面
2. docs页面

从网站的页面里也可以很直观的看到，代码和网站的页面构成是一样的，在pages下边有两个文件夹docs和home。

home 页面其实就是这个网站的主页  
docs 页面是这个网站的文档内容，其中`route.jsx`是在配置文档侧面导航的路由，`index.jsx` 是网站的layout，为了让每一个文档引入这个layout，文档中通过 `zeus-md-next-loader` 赋予了articles和docs下的每一个页面引入的能力
``` js
module.exports = source => {
    const Component = source.match(/export default class ([\w]+)/)[1]
    source = `
import Layout from '../index.jsx'
${source.replace(/export default /, '')}
export default Layout(${Component})
    `
    return source
}
```

## 文档
其中docs里存放的components就是组件文档，而articles里存放的是一些介绍的文章

这两个文件夹下边会有两种特殊的文件格式`mdsx`，这个文件本质上是一种markdown，但是经过特殊的编译之后，可以识别一些特殊的语法，比如  

```
+++ => content block  
```
```
--- => markdwon meta
```


如果想要为新添加的组件添加一篇文档的话
1. 在components里添加一个`component-name.mdsx`文件。
2. 那么这时你访问`/docs/components/component-name`就会看到这个页面
3. 在`/docs/routes`里为这个组件在siderbar里添加一个位置，然后他就会出现在侧边栏里

## 文档的构成
文档构成很简单，如果没有任何内容块的话，比如article里内容就是一个很直接的markdown，那么就忽略任何规则写markdown就好了

如果想要写一个组件的文档，需要注意以下
1. markdwon meta 写在markdown的最上边，比如
2. 用+++开头+++结尾可以表达一个内容块，内容块的类型可以用 --- typename --- 表示，目前会对demo和icon块做特殊处理，其他不处理









