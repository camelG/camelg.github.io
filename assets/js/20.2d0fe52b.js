(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{399:function(a,e,r){"use strict";r.r(e);var s=r(4),t=Object(s.a)({},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"error-cannot-connect-docker-daemon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-cannot-connect-docker-daemon","aria-hidden":"true"}},[a._v("#")]),a._v(" Error: cannot connect docker daemon?")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?\n")])])]),r("h3",{attrs:{id:"対応"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#対応","aria-hidden":"true"}},[a._v("#")]),a._v(" 対応")]),a._v(" "),r("p",[a._v("centos6")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" start docker\n")])])]),r("p",[a._v("centos7")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("systemctl start docker\n")])])]),r("h2",{attrs:{id:"start-認識されていないサービスです。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#start-認識されていないサービスです。","aria-hidden":"true"}},[a._v("#")]),a._v(" start: 認識されていないサービスです。")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" start docker\nstart: 認識されていないサービスです。\n")])])]),r("h2",{attrs:{id:"パッケージ-docker-io-は利用できません。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#パッケージ-docker-io-は利用できません。","aria-hidden":"true"}},[a._v("#")]),a._v(" パッケージ docker-io は利用できません。")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("$ yum --enablerepo"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("epel -y "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-io\n読み込んだプラグイン:fastestmirror, security\nインストール処理の設定をしています\nLoading mirror speeds from cached hostfile\n * base: ty1.mirror.newmediaexpress.com\n * centos-sclo-rh: ty1.mirror.newmediaexpress.com\n * epel: mirrors.aliyun.com\n * extras: ty1.mirror.newmediaexpress.com\n * remi-safe: ftp.riken.jp\n * updates: ty1.mirror.newmediaexpress.com\nパッケージ docker-io は利用できません。\nエラー: 何もしません\n")])])])])},[],!1,null,null,null);e.default=t.exports}}]);