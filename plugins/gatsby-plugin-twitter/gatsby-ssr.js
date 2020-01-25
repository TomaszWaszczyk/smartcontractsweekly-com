const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) =>
  setHeadComponents([
    <script
      key="twitter"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `window.twttr=function(t,e,r){var n,i=t.getElementsByTagName(e)[0],w=window.twttr||{};return t.getElementById(r)?w:((n=t.createElement(e)).id=r,n.src="https://platform.twitter.com/widgets.js",i.parentNode.insertBefore(n,i),w._e=[],w.ready=function(t){w._e.push(t)},w)}(document,"script","twitter-wjs");`,
      }}
    />,
  ])
