(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{394:function(e,a,s){"use strict";s.r(a);var t=s(7),n=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("strong",[e._v("以下内容引自 acme.sh "),a("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1),e._v("，仅作参考，操作过程中如有问题，请以官方文档为准。")])]),e._v(" "),a("p",[a("strong",[e._v("acme.sh")]),e._v(" 实现了 "),a("code",[e._v("acme")]),e._v(" 协议, 可以从 letsencrypt 生成免费的证书.")]),e._v(" "),a("h2",{attrs:{id:"_1-安装-acme-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-acme-sh"}},[e._v("#")]),e._v(" 1. 安装 "),a("strong",[e._v("acme.sh")])]),e._v(" "),a("p",[e._v("安装很简单, 一个命令:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl https://get.acme.sh | sh -s email=my@example.com\n")])])]),a("p",[e._v("普通用户和 root 用户都可以安装使用.\n安装过程进行了以下几步:")]),e._v(" "),a("ol",[a("li",[e._v("把 acme.sh 安装到你的 "),a("strong",[e._v("home")]),e._v(" 目录下:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("~/.acme.sh/\n")])])]),a("p",[e._v("并创建 一个 shell 的 alias, 例如 .bashrc，方便你的使用:  "),a("code",[e._v("alias acme.sh=~/.acme.sh/acme.sh")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("自动为你创建 cronjob,  每天 0:00 点自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书.")])]),e._v(" "),a("p",[e._v("更高级的安装选项请参考: https://github.com/Neilpang/acme.sh/wiki/How-to-install")]),e._v(" "),a("p",[a("strong",[e._v("安装过程不会污染已有的系统任何功能和文件")]),e._v(", 所有的修改都限制在安装目录中: "),a("code",[e._v("~/.acme.sh/")])]),e._v(" "),a("h2",{attrs:{id:"_2-生成证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成证书"}},[e._v("#")]),e._v(" 2. 生成证书")]),e._v(" "),a("p",[a("strong",[e._v("acme.sh")]),e._v(" 实现了 "),a("strong",[e._v("acme")]),e._v(" 协议支持的所有验证协议.\n一般有两种方式验证: http 和 dns 验证.")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("http 验证")])])]),e._v(" "),a("p",[e._v("http 方式需要在你的网站根目录下放置一个文件, 来验证你的域名所有权,完成验证. 然后就可以生成证书了.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --issue -d mydomain.com -d www.mydomain.com --webroot /home/wwwroot/mydomain.com/\n")])])]),a("p",[e._v("只需要指定域名, 并指定域名所在的网站根目录. "),a("strong",[e._v("acme.sh")]),e._v(" 会全自动的生成验证文件, 并放到网站的根目录, 然后自动完成验证. 最后会聪明的删除验证文件. 整个过程没有任何副作用.")]),e._v(" "),a("p",[e._v("如果你用的 "),a("strong",[e._v("apache")]),e._v("服务器, "),a("strong",[e._v("acme.sh")]),e._v(" 还可以智能的从 "),a("strong",[e._v("apache")]),e._v("的配置中自动完成验证, 你不需要指定网站根目录:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --issue -d mydomain.com --apache\n")])])]),a("p",[e._v("如果你用的 "),a("strong",[e._v("nginx")]),e._v("服务器, 或者反代, "),a("strong",[e._v("acme.sh")]),e._v(" 还可以智能的从 "),a("strong",[e._v("nginx")]),e._v("的配置中自动完成验证, 你不需要指定网站根目录:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --issue -d mydomain.com --nginx\n")])])]),a("p",[a("strong",[e._v("注意, 无论是 apache 还是 nginx 模式, acme.sh在完成验证之后, 会恢复到之前的状态, 都不会私自更改你本身的配置. 好处是你不用担心配置被搞坏, 也有一个缺点, 你需要自己配置 ssl 的配置, 否则只能成功生成证书, 你的网站还是无法访问https. 但是为了安全, 你还是自己手动改配置吧.")])]),e._v(" "),a("p",[e._v("如果你还没有运行任何 web 服务, "),a("strong",[e._v("80")]),e._v(" 端口是空闲的, 那么 "),a("strong",[e._v("acme.sh")]),e._v(" 还能假装自己是一个webserver, 临时听在"),a("strong",[e._v("80")]),e._v(" 端口, 完成验证:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --issue -d mydomain.com --standalone\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh/wiki/How-to-issue-a-cert",target:"_blank",rel:"noopener noreferrer"}},[e._v("更高级的用法请参考"),a("OutboundLink")],1)]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[e._v("dns 验证")])])]),e._v(" "),a("p",[e._v("手动 dns 方式, 手动在域名上添加一条 txt 解析记录, 验证域名所有权.")]),e._v(" "),a("p",[e._v("这种方式的好处是, 你不需要任何服务器, 不需要任何公网 ip, 只需要 dns 的解析记录即可完成验证.\n坏处是，如果不同时配置 Automatic DNS API，使用这种方式 acme.sh 将无法自动更新证书，每次都需要手动再次重新解析验证域名所有权。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --issue --dns -d mydomain.com \\\n --yes-I-know-dns-manual-mode-enough-go-ahead-please\n\n")])])]),a("p",[e._v("然后, "),a("strong",[e._v("acme.sh")]),e._v(" 会生成相应的解析记录显示出来, 你只需要在你的域名管理面板中添加这条 txt 记录即可.")]),e._v(" "),a("p",[e._v("等待解析完成之后, 重新生成证书:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --renew -d mydomain.com \\\n  --yes-I-know-dns-manual-mode-enough-go-ahead-please\n\n")])])]),a("p",[e._v("注意第二次这里用的是 "),a("code",[e._v("--renew")])]),e._v(" "),a("p",[e._v("dns 方式的真正强大之处在于可以使用域名解析商提供的 api 自动添加 txt 记录完成验证.")]),e._v(" "),a("p",[a("strong",[e._v("acme.sh")]),e._v(" 目前支持 cloudflare, dnspod, cloudxns, godaddy 以及 ovh 等数十种解析商的自动集成.")]),e._v(" "),a("p",[e._v("以 dnspod 为例, 你需要先登录到 dnspod 账号, 生成你的 api id 和 api key, 都是免费的.\n然后:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('export DP_Id="1234"\n\nexport DP_Key="sADDsdasdgdsf"\n\nacme.sh --issue --dns dns_dp -d aa.com -d www.aa.com\n\n')])])]),a("p",[e._v("证书就会自动生成了. 这里给出的 api id 和 api key 会被自动记录下来, 将来你在使用 dnspod api 的时候, 就不需要再次指定了.\n直接生成就好了:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --issue -d mydomain2.com --dns  dns_dp\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh/blob/master/dnsapi/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("更详细的 api 用法"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"_3-安装证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装证书"}},[e._v("#")]),e._v(" 3. 安装证书")]),e._v(" "),a("p",[e._v("前面证书生成以后, 接下来需要把证书 copy 到真正需要用它的地方.")]),e._v(" "),a("p",[e._v("注意, 默认生成的证书都放在安装目录下: "),a("code",[e._v("~/.acme.sh/")]),e._v(",  请不要直接使用此目录下的文件, 例如: 不要直接让 nginx/apache 的配置文件使用这下面的文件. 这里面的文件都是内部使用, 而且目录结构可能会变化.")]),e._v(" "),a("p",[e._v("正确的使用方法是使用 "),a("code",[e._v("--install-cert")]),e._v(" 命令,并指定目标位置, 然后证书文件会被copy到相应的位置,\n例如:")]),e._v(" "),a("ul",[a("li",[e._v("Apache example:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('acme.sh --install-cert -d example.com \\\n--cert-file      /path/to/certfile/in/apache/cert.pem  \\\n--key-file       /path/to/keyfile/in/apache/key.pem  \\\n--fullchain-file /path/to/fullchain/certfile/apache/fullchain.pem \\\n--reloadcmd     "service apache2 force-reload"\n')])])]),a("ul",[a("li",[e._v("Nginx example:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('acme.sh --install-cert -d example.com \\\n--key-file       /path/to/keyfile/in/nginx/key.pem  \\\n--fullchain-file /path/to/fullchain/nginx/cert.pem \\\n--reloadcmd     "service nginx force-reload"\n')])])]),a("p",[e._v("(一个小提醒, 这里用的是 "),a("code",[e._v("service nginx force-reload")]),e._v(", 不是 "),a("code",[e._v("service nginx reload")]),e._v(", 据测试, "),a("code",[e._v("reload")]),e._v(" 并不会重新加载证书, 所以用的 "),a("code",[e._v("force-reload")]),e._v(")")]),e._v(" "),a("p",[e._v("Nginx 的配置 "),a("code",[e._v("ssl_certificate")]),e._v(" 使用 "),a("code",[e._v("/etc/nginx/ssl/fullchain.cer")]),e._v(" ，而非 "),a("code",[e._v("/etc/nginx/ssl/<domain>.cer")]),e._v(" ，否则 "),a("a",{attrs:{href:"https://www.ssllabs.com/ssltest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSL Labs"),a("OutboundLink")],1),e._v(" 的测试会报 "),a("code",[e._v("Chain issues Incomplete")]),e._v(" 错误。")]),e._v(" "),a("p",[a("code",[e._v("--install-cert")]),e._v("命令可以携带很多参数, 来指定目标文件.  并且可以指定 reloadcmd, 当证书更新以后, reloadcmd会被自动调用,让服务器生效.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh#3-install-the-issued-cert-to-apachenginx-etc",target:"_blank",rel:"noopener noreferrer"}},[e._v("详细参数请参考"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("值得注意的是, 这里指定的所有参数都会被自动记录下来, 并在将来证书自动更新以后, 被再次自动调用.")]),e._v(" "),a("h2",{attrs:{id:"_4-查看证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看证书"}},[e._v("#")]),e._v(" 4. 查看证书")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --info -d example.com\n# 会输出如下内容：\nDOMAIN_CONF=/root/.acme.sh/example.com/example.com.conf\nLe_Domain=example.com\nLe_Alt=no\nLe_Webroot=dns_ali\nLe_PreHook=\nLe_PostHook=\nLe_RenewHook=\nLe_API=https://acme-v02.api.letsencrypt.org/directory\nLe_Keylength=\nLe_OrderFinalize=https://acme-v02.api.letsencrypt.org/acme/finalize/23xxxx150/781xxxx4310\nLe_LinkOrder=https://acme-v02.api.letsencrypt.org/acme/order/233xxx150/781xxxx4310\nLe_LinkCert=https://acme-v02.api.letsencrypt.org/acme/cert/04cbd28xxxxxx349ecaea8d07\nLe_CertCreateTime=1649358725\nLe_CertCreateTimeStr=Thu Apr  7 19:12:05 UTC 2022\nLe_NextRenewTimeStr=Mon Jun  6 19:12:05 UTC 2022\nLe_NextRenewTime=1654456325\nLe_RealCertPath=\nLe_RealCACertPath=\nLe_RealKeyPath=/etc/acme/example.com/privkey.pem\nLe_ReloadCmd=service nginx force-reload\nLe_RealFullChainPath=/etc/acme/example.com/chain.pem\n")])])]),a("h2",{attrs:{id:"_5-更新证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-更新证书"}},[e._v("#")]),e._v(" 5. 更新证书")]),e._v(" "),a("p",[e._v("目前证书在 60 天以后会自动更新, 你无需任何操作. 今后有可能会缩短这个时间, 不过都是自动的, 你不用关心.")]),e._v(" "),a("p",[e._v("请确保 cronjob 正确安装, 看起来是类似这样的:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('crontab  -l\n\n56 * * * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null\n')])])]),a("h2",{attrs:{id:"_6-关于修改reloadcmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-关于修改reloadcmd"}},[e._v("#")]),e._v(" 6. 关于修改ReloadCmd")]),e._v(" "),a("p",[e._v("目前修改"),a("code",[e._v("ReloadCmd")]),e._v("没有专门的命令，可以通过重新安装证书来实现修改"),a("code",[e._v("reloadCmd")]),e._v("的目的。\n此外，安装证书后，相关信息是保存在"),a("code",[e._v("~/.acme.sh/example.com/example.conf")]),e._v("文件下的，内容就是"),a("code",[e._v("acme.sh --info -d example.com")]),e._v("输出的信息，不过"),a("code",[e._v("ReloadCmd")]),e._v("在文件中使用了Base64编码。理论上可以通过直接修改该文件来修改"),a("code",[e._v("ReloadCmd")]),e._v("，且修改时，无需Base64编码，直接写命令原文"),a("code",[e._v("acme.sh")]),e._v("也可以识别。\n不过，"),a("code",[e._v("example.conf")]),e._v("文件的位置和内容格式以后可能会改变！"),a("code",[e._v("example.conf")]),e._v("一直都是内部使用, 后面有可能会改为用 sqlite 或者mysql 格式存储. 所以一般不建议自己修改。")]),e._v(" "),a("h2",{attrs:{id:"_7-更新-acme-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-更新-acme-sh"}},[e._v("#")]),e._v(" 7. 更新 acme.sh")]),e._v(" "),a("p",[e._v("目前由于 acme 协议和 letsencrypt CA 都在频繁的更新, 因此 acme.sh 也经常更新以保持同步.")]),e._v(" "),a("p",[e._v("升级 acme.sh 到最新版 :")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --upgrade\n")])])]),a("p",[e._v("如果你不想手动升级, 可以开启自动升级:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --upgrade --auto-upgrade\n")])])]),a("p",[e._v("之后, acme.sh 就会自动保持更新了.")]),e._v(" "),a("p",[e._v("你也可以随时关闭自动更新:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --upgrade --auto-upgrade  0\n")])])]),a("h2",{attrs:{id:"_8-出错怎么办"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-出错怎么办"}},[e._v("#")]),e._v(" 8. 出错怎么办")]),e._v(" "),a("p",[e._v("如果出错, 请添加 debug log：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --issue  .....  --debug \n")])])]),a("p",[e._v("或者：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("acme.sh --issue  .....  --debug  2\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh/wiki/How-to-debug-acme.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("请参考"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v('在DNS验证模式下如果debug中出现诸如"timed out"等字样可能是因为GFW拦截了相应请求，需要添加http(s) proxy环境变量。（请按照自己实际设定修改）')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('export http_proxy="socks5h://localhost:1081" && export https_proxy="socks5h://localhost:1081" \n')])])]),a("p",[e._v("如果是使用docker则完整示例配置如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker run --rm  -it  \\\n  -v "/etc/acme":/acme.sh  \\\n  -e "CF_Token=[填入自己的信息]" \\\n  -e "CF_Account_ID=[填入自己的信息]" \\\n  -e "CF_Zone_ID=[填入自己的信息]" \\\n  -e http_proxy="socks5h://[代理A]:1234" \\\n  -e https_proxy="socks5h://[代理A]:1234" \\\n  --network container:[代理A]\\\n  neilpang/acme.sh \\\n  --issue -d example.com --dns dns_cf --debug\n')])])]),a("p",[e._v("上述例子中使用cloudflare的DNS来签发证书，并通过把acme.sh链接到容器[代理A]，来转发curl请求（请按照自己实际设定修改）")]),e._v(" "),a("p",[e._v("最后, 本文并非完全的使用说明, 还有很多高级的功能, 更高级的用法请"),a("a",{attrs:{href:"https://github.com/Neilpang/acme.sh/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("参看其他 wiki 页面"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);