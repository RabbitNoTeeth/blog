(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{321:function(a,t,s){"use strict";s.r(t);var e=s(7),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("strong",[a._v("Conda")]),a._v(" 是一个跨平台的包管理和环境管理工具。它允许你安装、更新、删除和管理 Python 包以及其他依赖项，同时支持创建和管理多个虚拟环境。与 pip 等传统的包管理工具不同，Conda 既可以管理 Python 包，也可以管理其他语言的包，比如 R、Ruby 和 Lua，甚至是操作系统级别的包。")]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("Conda有两个发行版，可以根据需要进行安装。")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("Anaconda")]),a._v(" "),t("a",{attrs:{href:"https://www.anaconda.com/download/success",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("一个包含 Conda、Python、数百个常用包和工具的大型数据科学平台。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("Miniconda")]),a._v(" "),t("a",{attrs:{href:"https://docs.conda.io/projects/conda/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("一个轻量级的 Conda 发行版，只包含 Conda 和其依赖，用户可以根据需要安装其他包。")])])]),a._v(" "),t("br"),a._v("\n安装完成后，打开终端（Windows 需要打开 Anaconda Prompt）验证 Conda 是否正确安装：\n"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda --version\n")])])]),t("h2",{attrs:{id:"环境管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境管理"}},[a._v("#")]),a._v(" 环境管理")]),a._v(" "),t("p",[a._v("Conda安装成功后，会自动创建一个名称为 "),t("code",[a._v("base")]),a._v(" 的默认环境，如果不激活其他环境，那么将默认在该环境。")]),a._v(" "),t("h3",{attrs:{id:"_1-创建环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建环境"}},[a._v("#")]),a._v(" 1. 创建环境")]),a._v(" "),t("p",[a._v("创建一个名为 "),t("code",[a._v("myenv")]),a._v(" 的环境，并安装 Python 3.8 版本:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda create --name myenv python=3.8\n")])])]),t("br"),a._v("\n如果想在创建环境时安装其他包，可以在命令中直接列出:\n"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda create --name myenv python=3.8 numpy pandas\n")])])]),t("h3",{attrs:{id:"_2-激活环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-激活环境"}},[a._v("#")]),a._v(" 2. 激活环境")]),a._v(" "),t("p",[a._v("创建完环境后，你需要激活环境才能使用其中安装的包。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda activate myenv\n")])])]),t("p",[a._v("激活后，会看到命令提示符变成了环境名，表示已进入 "),t("code",[a._v("myenv")]),a._v(" 环境。")]),a._v(" "),t("h3",{attrs:{id:"_3-停用环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-停用环境"}},[a._v("#")]),a._v(" 3. 停用环境")]),a._v(" "),t("p",[a._v("停用当前环境。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda deactivate\n")])])]),t("p",[a._v("执行后，将退出当前环境并返回默认环境 "),t("code",[a._v("base")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"_4-查看环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看环境"}},[a._v("#")]),a._v(" 4. 查看环境")]),a._v(" "),t("p",[a._v("查看所有的环境，当前激活的环境（会在环境名前面显示 *）。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda env list\n")])])]),t("h3",{attrs:{id:"_5-删除环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-删除环境"}},[a._v("#")]),a._v(" 5. 删除环境")]),a._v(" "),t("p",[a._v("删除名为 "),t("code",[a._v("myenv")]),a._v(" 的环境及其所有内容。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda remove --name myenv --all\n")])])]),t("h2",{attrs:{id:"包管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包管理"}},[a._v("#")]),a._v(" 包管理")]),a._v(" "),t("p",[a._v("包管理的所有命令，只在当前激活的环境生效。")]),a._v(" "),t("h3",{attrs:{id:"_1-安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装包"}},[a._v("#")]),a._v(" 1. 安装包")]),a._v(" "),t("p",[a._v("安装多个包：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda install numpy pandas matplotlib\n")])])]),t("br"),a._v(" "),t("p",[t("strong",[a._v("注意")])]),a._v(" "),t("p",[a._v("针对python包，"),t("code",[a._v("conda install")]),a._v("  可能会由于源仓库中资源更新不及时，导致找不到指定的包，这时可以使用 "),t("code",[a._v("pip")]),a._v(" 命令进行安装，效果和 "),t("code",[a._v("conda install")]),a._v(" 是一样的。")]),a._v(" "),t("h3",{attrs:{id:"_2-更新包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-更新包"}},[a._v("#")]),a._v(" 2. 更新包")]),a._v(" "),t("p",[a._v("更新指定包：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda update numpy\n")])])]),t("br"),a._v("\n更新所有包：\n"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda update --all\n")])])]),t("h3",{attrs:{id:"_3-删除包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除包"}},[a._v("#")]),a._v(" 3. 删除包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda remove numpy\n")])])]),t("h3",{attrs:{id:"_4-查找包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-查找包"}},[a._v("#")]),a._v(" 4. 查找包")]),a._v(" "),t("p",[a._v("列出所有包：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda list\n")])])]),t("br"),a._v("\n查找指定包：\n"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("conda search numpy\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);