import type { LoadContext } from '@docusaurus/types'
import type { PluginOptions } from '@docusaurus/plugin-content-pages'

type CustomOptions = PluginOptions & {
    AD_ID: string
}

// Set up Twitter for Websites | Docs | Twitter Developer Platform
// cf. https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
const twttr = `
<script>
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
</script>
`
    .split('\n')
    .map((line) => line.trim())
    .join('')

const adsense = (id: string) => {
    return {
        tagName: 'script',
        attributes: {
            async: true,
            src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${id}`,
            crossorigin: 'anonymous',
        },
    }
}

// options は `docusaurus.config.js` にてオプション引数として指定する
// TODO: async じゃなくてもよさそう？あとで検討したい（閲覧：2022-11-07）
// eslint-disable-next-line @typescript-eslint/require-await
const plugin = async (context: LoadContext, options: CustomOptions) => {
    return {
        name: 'docusaurus-plugin-inject-html-tags',
        injectHtmlTags() {
            return {
                headTags: [
                    `<link rel='preconnect' href='//fonts.gstatic.com' crossOrigin='anonymous' />`,
                    adsense(options.AD_ID),
                    twttr,
                ],
            }
        },
    }
}

export default plugin
