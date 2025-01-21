(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{390:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("strong",[a._v("NVM (Node Version Manager)")]),a._v(" 是一个命令行工具，用于在同一台机器上管理多个版本的 Node.js。它允许开发者轻松安装、切换和卸载不同版本的 Node.js，极大地方便了需要在不同项目间切换 Node.js 版本的开发者。")]),a._v(" "),s("h2",{attrs:{id:"_1-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[a._v("#")]),a._v(" 1. 安装")]),a._v(" "),s("h3",{attrs:{id:"_1-1-通过安装脚本安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-通过安装脚本安装"}},[a._v("#")]),a._v(" 1.1 通过安装脚本安装")]),a._v(" "),s("p",[a._v("打开终端，执行以下命令以使用 cURL 安装 NVM（脚本地址中的版本号，可查看nvm github仓库来使用最新版本号）：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n")])])]),s("p",[a._v("或者，使用 Wget 安装：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n")])])]),s("br"),a._v("\n安装脚本将自动完成 NVM 的下载和配置。安装完成后，你需要将以下内容添加到 shell 配置文件（例如 .bash_profile, .bashrc, .zshrc 等）中：\n"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('export NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n')])])]),s("br"),a._v("\n重新加载 shell 配置文件：\n"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source ~/.zshrc\n")])])]),s("p",[a._v("如果使用 bash，执行：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source ~/.bash_profile\n")])])]),s("br"),a._v("\n确认 NVM 是否成功安装：\n"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm --version\n")])])]),s("h3",{attrs:{id:"_1-2-通过homebrew安装-仅限-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-通过homebrew安装-仅限-macos"}},[a._v("#")]),a._v(" 1.2 通过Homebrew安装（仅限 macOS）")]),a._v(" "),s("p",[a._v("如果你使用 Homebrew 来管理软件包，可以通过以下命令安装 NVM：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("brew install nvm\n")])])]),s("p",[a._v("安装完成后，按照提示将以下内容添加到 .bash_profile 或 .zshrc 中：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('export NVM_DIR="$HOME/.nvm"\n[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \\. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm\n')])])]),s("p",[a._v("然后，重新加载配置文件并验证安装。")]),a._v(" "),s("h2",{attrs:{id:"_2-常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用命令"}},[a._v("#")]),a._v(" 2. 常用命令")]),a._v(" "),s("h3",{attrs:{id:"_2-1-安装指定版本node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装指定版本node"}},[a._v("#")]),a._v(" 2.1 安装指定版本Node")]),a._v(" "),s("p",[a._v("可以安装任何指定版本的 Node.js。例如，安装 Node.js 16：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm install 16\n")])])]),s("br"),a._v("\n如果想安装最新的稳定版本，执行：\n"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm install node\n")])])]),s("br"),a._v("\n你还可以安装最新的 LTS（长期支持）版本：\n"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm install --lts\n")])])]),s("h3",{attrs:{id:"_2-2-切换node版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-切换node版本"}},[a._v("#")]),a._v(" 2.2 切换Node版本")]),a._v(" "),s("p",[a._v("安装多个版本后，可以轻松切换到任何版本。例如，切换到 Node.js 16：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm use 16\n")])])]),s("br"),a._v("\n也可以切换到最新安装的版本：\n"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm use node\n")])])]),s("h3",{attrs:{id:"_2-3-查看已安装node版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-查看已安装node版本"}},[a._v("#")]),a._v(" 2.3 查看已安装Node版本")]),a._v(" "),s("p",[a._v("列出所有已安装的 Node.js 版本：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm ls\n")])])]),s("h3",{attrs:{id:"_2-4-设置默认版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-设置默认版本"}},[a._v("#")]),a._v(" 2.4 设置默认版本")]),a._v(" "),s("p",[a._v("可以将某个版本设置为默认版本，这样每次打开终端时，都会自动使用该版本。例如，设置 Node.js 16 为默认版本：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm alias default 16\n")])])]),s("h3",{attrs:{id:"_2-5-卸载node版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-卸载node版本"}},[a._v("#")]),a._v(" 2.5 卸载Node版本")]),a._v(" "),s("p",[a._v("如果某个版本的 Node.js 不再需要，可以卸载它：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm uninstall 16\n")])])]),s("h3",{attrs:{id:"_2-6-列出所有可用的node版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-列出所有可用的node版本"}},[a._v("#")]),a._v(" 2.6 列出所有可用的Node版本")]),a._v(" "),s("p",[a._v("列出所有可用的 Node.js 版本（包括 LTS 和当前版本），你可以选择需要的版本进行安装。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm ls-remote\n")])])]),s("h3",{attrs:{id:"_2-7-查看当前node-js版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-查看当前node-js版本"}},[a._v("#")]),a._v(" 2.7 查看当前Node.js版本")]),a._v(" "),s("p",[a._v("查看当前正在使用的 Node.js 版本：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nvm current\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);