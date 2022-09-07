function tma__addLang() { var e = (navigator.language || navigator.userLanguage).substring(0, 2).toUpperCase();
    tildaMembers.userLang = "RU" === e ? "RU" : "EN" }

function tma__onFuncLoad(r, a, o) { var n, u; "function" == typeof window[r] ? a() : (n = Date.now(), u = new Error(r + " is undefined"), setTimeout(function e() { var t = Date.now(); "function" != typeof window[r] ? ("complete" === document.readyState && 5e3 < t - n && "function" != typeof window[r] && function() { throw u }(), setTimeout(e, o || 100)) : a() })) }

function tma__getProfileObjFromLS() { var e = "tilda_members_profile" + document.getElementById("allrecords").getAttribute("data-tilda-project-id"),
        t = JSON.parse(localStorage.getItem(e)),
        r = JSON.parse(localStorage.getItem(e + "_timestamp")),
        e = new Date,
        e = Math.floor(e.setDate(e.getDate() + 30) / 1e3); return t && (tilda_ma.profile || (tilda_ma.profile = {}), tilda_ma.profile.login = t.login, tilda_ma.profile.name = t.name), t && r < e ? t : (localStorage.clear(), !1) }

function tma__getPath() { var e = document.location.pathname.substring(1); return "/" == e.substring(e.length - 1) && (e = e.substring(0, e.length - 1)), e.split("/") }

function tma__checkContainerDiv(e) { var t = document.querySelector("." + e); if (t) return t.innerHTML = "", t; var r = document.getElementById("allrecords"),
        t = document.getElementById("app"); return t || (r.insertAdjacentHTML("beforeend", '<div id="app"></div>'), t = document.getElementById("app")), t.innerHTML = '<div class="' + e + '"></div>', document.querySelector("." + e) }

function tma__showNetworkError() { var e = "",
        e = "RU" === tildaMembers.userLang ? "Произошла ошибка при передаче запроса.\nПожалуйста, проверьте Ваше соединение с Интернетом." : "An error occurred while sending the request.\nPlease check your internet connection.";
    console.log(e) }

function tma__serializeArray(e) { for (var t = {}, r = e.elements, a = 0; a < r.length; a++) { var o = r[a]; if (!(!o.name || o.disabled || -1 < ["file", "reset", "submit", "button"].indexOf(o.type)))
            if ("select-multiple" !== o.type && "SELECT" !== o.tagName) - 1 < ["checkbox", "radio"].indexOf(o.type) && !o.checked || (t[o.name] = o.value);
            else
                for (var n = o.options, u = 0; u < n.length; u++) { var i = n[u];
                    i.selected && !i.disabled && (t[i.name || o.name] = i.value) } } return t }

function tma__request(t, r, a, o, n) { var u = new XMLHttpRequest;
    tma__disabledSubmit(a), u.open("POST", t, !0), n || (tildaMembers.isSafari ? u.setRequestHeader("Content-Type", "text/plain; charset=UTF-8") : u.setRequestHeader("Content-Type", "application/json; charset=UTF-8")), u.onload = function(e) { 200 <= u.status && u.status < 400 ? (o && o(u.response), tma__enabledSubmit(a)) : (500 <= u.status || 408 <= u.status || 410 <= u.status || 429 <= u.status || "timeout" == u.statusText || 0 === u.status && 4 === u.readyState && "" === u.statusText) && -1 !== t.indexOf("members.tildacdn.com") ? tma__request(t = t.replace("members.tildacdn.com", "members2.tildacdn.com"), r, a, o, n) : (tma__showNetworkError(), tma__enabledSubmit(a)) }, u.onabort = function(e) { console.log(e), tma__enabledSubmit(a) }, u.onerror = function(e) { console.log(e), (!e.timeStamp || 200 < e.timeStamp) && tma__showNetworkError(), tma__enabledSubmit(a) }, u.timeout = 3e4, u.ontimeout = function(e) { tma__showNetworkError(), tma__enabledSubmit(a) }, u.responseType = "json", u.send(r) }

function tma__showSuccessRequest(e, t) { e = e.querySelector(".tlk-input-error_all");
    e.innerHTML = t, e.classList.add("tlk-input-error_show"), e.classList.add("tlk-input-error_success") }

function tma__showErrorFields(e, t, r) { for (var a = 0; a < t.length; a++) { var o = t[a],
            n = e.querySelector('input[name="' + o.input + '"]'),
            u = n.parentNode.querySelector(".tlk-input-error");
        n.classList.add("tlk-input_error"), u.innerHTML = r("field_" + o.field + "_" + o.type), u.classList.add("tlk-input-error_show"), u.classList.add("tlk-input-error_error") } }

function tma__resetErrorFields(e) { for (var t = e.querySelectorAll('input[type]:not(input[type="file"])'), r = 0; r < t.length; r++) { var a = t[r],
            o = a.parentNode.querySelector(".tlk-input-error");
        a.classList.remove("tlk-input_error"), o.innerHTML = "", o.classList.remove("tlk-input-error_show"), o.classList.remove("tlk-input-error_error") } }

function tma__showErrorRequest(e, t, r, a, o) { e = e.querySelector(".tlk-input-error_all");
    e.innerHTML = o ? r(a + "_" + t, o) : r(a + "_" + t), e.classList.add("tlk-input-error_show"), e.classList.add("tlk-input-error_error") }

function tma__resetErrorRequest(e) { e = e.querySelector(".tlk-input-error_all");
    e.innerHTML = "", e.classList.remove("tlk-input-error_show"), e.classList.remove("tlk-input-error_error") }

function tma__validationFormFields(e) { for (var t = e.querySelectorAll('input[type]:not(input[type="file"])'), r = [], a = "", o = 0; o < t.length; o++) { var n = t[o],
            u = n.value.trim(),
            i = n.name,
            s = {},
            l = 150,
            n = 2; "name" === i ? (a = /^([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u00C0\u00C0-\u00C3\u00C8-\u00CA\u00CC\u00CD\u00D2-\u00D9\u00DA\u00DD\u00E0-\u00E3\u00E8\u00E9\u00EA\u00EC\u00ED\u00F2-\u00F5\u00F9\u00FA\u00FD\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0\u1EA1-\u1EF9\u0027\u2019\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\u0041-\u007A\u00C0-\u02B8\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD]{1,})([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u00C0\u00C0-\u00C3\u00C8-\u00CA\u00CC\u00CD\u00D2-\u00D9\u00DA\u00DD\u00E0-\u00E3\u00E8\u00E9\u00EA\u00EC\u00ED\u00F2-\u00F5\u00F9\u00FA\u00FD\u0102\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01A0\u01A1\u01AF\u01B0\u1EA0\u1EA1-\u1EF9\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\u0E00-\u0E7F\u10A0-\u10FF\u3040-\u309F\u30A0-\u30FF\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD\-\'\‘\s\.]{0,})$/gi, l = 100, s.field = "name", 0 !== u.length && u.match(a) || (s.input = i, s.type = "novalid")) : "login" === i ? (a = /^(?!\.)(?!.*\.\.)[a-zA-Zёа-яЁА-Я0-9\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD_\.\-\+]{0,63}[a-zA-Zёа-яЁА-Я0-9\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD_\-\+]@[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéû0-9\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,10}$/gi, n = 5, s.field = "login", 0 !== u.length && u.match(a) || (s.input = i, s.type = "novalid")) : "password" !== i && "newpassword" !== i || (l = 72, n = 5, s.field = "password"), !s.type && u.length < n && (s.input = i, s.type = "minlength"), !s.type && u.length > l && (s.input = i, s.type = "maxlength"), (s.input || s.type) && r.push(s) } return r }

function tma__drawPopup(e) { var t = e.main || document.getElementById("allrecords");
    t.insertAdjacentHTML("beforeend", tma__getPopupHtml(e)); var r = t.querySelector("#" + e.id),
        t = r.querySelector(".tlk-popup__close"); if (document.body.style.overflowY = "hidden", r.addEventListener("click", function(e) {
            (e.target.classList.contains("tlk-popup__wrap") || e.target.classList.contains("tlk-popup")) && tma__closePopup(r) }), t.addEventListener("click", function() { tma__closePopup(r) }), e.closeBtns)
        for (var a = 0; a < e.closeBtns.length; a++) { var o = r.querySelector(e.closeBtns[a]);
            o && o.addEventListener("click", function() { tma__closePopup(r) }) } }

function tma__getPopupHtml(e) { var t = ""; return t += "<div " + (e.id ? 'id="' + e.id + '" ' : "") + 'class="tlk-popup' + (e.className ? " " + e.className : "") + '">', t += '<div class="tlk-popup__container">', t += '<button type="button" class="tlk-popup__close"></button>', t += '<div class="tlk-popup__content">' + e.content + "</div>", t += "</div>", t += "</div>" }

function tma__closePopup(e) { document.querySelector(".tlk-popup") === e && document.body.removeAttribute("style"), e.remove() }

function tma__disabledSubmit(e) { var t;
    e && (t = e.querySelector(".tlk-loadicon"), e.disabled = !0, e.style.color = "transparent", t.classList.add("tlk-loadicon_show")) }

function tma__enabledSubmit(e) { var t;
    e && (t = e.querySelector(".tlk-loadicon"), e.disabled = !1, e.removeAttribute("style"), t.classList.remove("tlk-loadicon_show")) }

function tma__getformatDate(e) { if (!e) return ""; return (tildaMembers.isSafari ? new Date(e.replace(" ", "T")) : new Date(e)).toLocaleString().replace(",", " ").slice(0, -3) }

function tma__addDictInObj(e, t, r, a) { tildaMembers.userLang || tma__addLang(); var o = tildaMembers.userLang,
        n = ""; "object" == typeof tildaMembers[r] && "object" == typeof tildaMembers[r][o] || a(o); var u = (n = "object" == typeof tildaMembers[r][o] && void 0 !== tildaMembers[r][o][e] && "" !== tildaMembers[r][o][e] ? tildaMembers[r][o][e] : ("object" != typeof tildaMembers[r].EN && a("EN"), "object" == typeof tildaMembers[r].EN && void 0 !== tildaMembers[r].EN[e] && "" !== tildaMembers[r].EN[e] ? tildaMembers[r].EN[e] : e)).match(/\$\{(.[^}]*)\}/g); if (u)
        for (var i = 0; i < u.length; i++) var s = u[i],
            l = s.slice(2, s.length - 1),
            n = n.replace(s, t[l]); return n }

function tma__initMembers() {!!tma__getProfileObjFromLS() ? (tma__getObjProfile(), tma__routeAuthorized()) : tma__routeNotAuthorized() }

function tma__routeAuthorized() { var e = tma__getPath(); "members" === e[0] && e[1] && "login" === e[1] ? document.location.replace("/members/") : "members" === e[0] ? "login" === e[1] || "signup/group/a21ybgywdnpgzkv-licnyj-kabinet" === e[1] || "recover-password" === e[1] ? (tma__loadFiles(["sign"]), tma__onFuncLoad("tma__sign__init", function() { tma__sign__init(e[1]) })) : "courses" === e[1] ? (tma__loadFiles(["userbar", "courses"]), tma__onFuncLoad("tma__courses__init", function() { tma__courses__init(e) })) : (tma__loadFiles(["userbar", "resources_page_list"]), tma__onFuncLoad("tma__resources__initPagesList", function() { tma__resources__initPagesList() })) : (tma__loadFiles(["resources_page"]), tma__onFuncLoad("tma__resources__initPage", function() { tma__resources__initPage() })) }

function tma__routeNotAuthorized() { var e = tma__getPath(); if ("members" === e[0] && e[1] && ("login" === e[1] || "signup/group/a21ybgywdnpgzkv-licnyj-kabinet" === e[1] || "recover-password" === e[1])) return tma__loadFiles(["sign"]), void tma__onFuncLoad("tma__sign__init", function() { tma__sign__init(e[1]) });
    document.location.replace("/members/login") }

function tma__getScriptsPage(e) { return { sign: { scripts: ["tilda-members-sign-dict.min.js"], styles: ["tilda-members-sign.min.css"] }, userbar: { scripts: ["tilda-members-userbar-dict.min.js", "tilda-members-userbar.min.js", "tilda-members-profile.min.js"], styles: ["tilda-members-userbar.min.css", "tilda-members-popup.min.css"] }, resources_page_list: { scripts: ["tilda-members-resources-dict.min.js", "tilda-members-resources-pageslist.min.js"], styles: ["tilda-members-resources-pageslist.min.css"] }, resources_page: { scripts: ["tilda-members-resources-page.min.js"], styles: [] }, courses: { scripts: ["tilda-members-courses-dict.min.js", "tilda-members-courses-init.min.js", "tilda-members-courses-other.min.js"], styles: [] } } [e] }

function tma__getObjProfile() { var r = tma__getProfileObjFromLS();
    tma__request("https://members2.tildacdn.com/api/getprofile/", JSON.stringify({ projectid: r.projectid, token: r.token }), "", function(e) { var t; "ok" === e.status && "object" == typeof e.data ? (t = "tilda_members_profile" + r.projectid, localStorage.clear(), e.data.token = r.token, e.data.projectid = r.projectid, localStorage.setItem(t, JSON.stringify(e.data)), localStorage.setItem(t + "_timestamp", Math.floor(Date.now() / 1e3))) : (localStorage.clear(), document.location.replace("/members/login")) }) }

function tma__loadFiles(e) { for (var t = 0; t < e.length; t++) { var r = e[t],
            a = tma__getScriptsPage(r); if (!tildaMembers["is_init_" + r]) { for (var o = 0; o < a.scripts.length; o++) tma__loadJS(a.scripts[o]); for (o = 0; o < a.styles.length; o++) tma__loadCSS(a.styles[o]);
            tildaMembers["is_init_" + r] = !0 } } }

function tma__loadJS(e) { var t = document.createElement("script");
    t.src = "https://members2.tildacdn.com/frontend/js/" + e, document.head.appendChild(t) }

function tma__loadCSS(e) { var t = document.createElement("link");
    t.href = "https://members2.tildacdn.com/frontend/css/" + e, t.rel = "stylesheet", t.type = "text/css", document.head.appendChild(t) } window.tildaMembers = {}, window.tilda_ma = {}, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (tildaMembers.isSafari = !0), document.addEventListener("DOMContentLoaded", tma__initMembers);