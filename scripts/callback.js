function phoneCallBackWidget(env) {
  if (!env || typeof env !== 'object') {
    console.error('No callbackWidget env params!')
    return
  }
  const callBackEnv = Object.assign(
    {
      callbackEndpoint: 'https://ucp.kts.kz/api/public/pbx/rpc/callback',
      callbackRequestMethod: 'POST',
      callbackBlockingTime: 60, // second
    },
    env
  )
  const html =
    '<div id="cback-wrap" class="cback">\n' +
    '\t\t<div id="cback-btn">\n' +
    '\t\t\t<div class="cback-circle fn1"></div>\n' +
    '\t\t\t<div class="cback-circle fn2"></div>\n' +
    '\t\t\t<div class="cback-circle cback-circle--phone">\n' +
    "\t\t\t\t<i class='phone-icon'></i>\n" +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\t</div>\n' +
    '\t<div id="cback-field" class="cback-field">\n' +
    '\t<div class="cback-field-left-text sm-hidden">\n' +
    '\t\tПерезвоним через <br>15 секунд\n' +
    '\t</div>' +
    '\t\t<div class="cback-field-wrap">\n' +
    '\t\t\t<div class="cback-field-country-wrap">\n' +
    '\t\t\t\t<div id="cback-field-country" class="cback-field-country">\n' +
    '\t\t\t\t\t<div class="cback-field_select">\n' +
    '\t\t\t\t\t\t<ul id="cback-field-country-list" class="cback-field_select_list">\n' +
    '\t\t\t\t\t\t\t<li class="cback-field_select_item cback-field_select_kz" data-country="kz">Казахстан +77</li>\n' +
    '\t\t\t\t\t\t\t<li class="cback-field_select_item cback-field_select_ru" data-country="ru">Россия +7</li>\n' +
    '\t\t\t\t\t\t\t<li class="cback-field_select_item cback-field_select_ua" data-country="ua">Украина +380</li>\n' +
    '\t\t\t\t\t\t\t<li class="cback-field_select_item cback-field_select_by" data-country="by">Беларусь +375</li>\n' +
    '\t\t\t\t\t\t</ul>\n' +
    '\t\t\t\t\t</div>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="cback-field-input-wrap">\n' +
    '\t\t\t\t<input id="cback-input" class="cback-input" type="text">\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\t\t<div class="cback-field-button-wrap">\n' +
    '\t\t\t<div id="cback-field-button" class="cback-field-button"><span class="cback-field-button-text xs-hidden">Заказать</span></div>\n' +
    '\t\t</div>\n' +
    '\t\t<div id="cback-field-close" class="cback-field_close"></div>\n' +
    '\t\t<div class="cback-field-down-text">\n' +
    '\t\t\tСервис предоставлен <a href="https://kts.kz">Казтехносвязь</a>\n' +
    '\t\t</div>' +
    '\t</div>\n' +
    '\t<div id="cback-message" class="cback-message">\n' +
    '\t\t<span id="cback-message-text" class="cback-message_text"></span>\n' +
    '\t</div>'
  css =
    '<style>\n' +
    '        .cback {\n' +
    '            width: 120px;\n' +
    '            height: 120px;\n' +
    '            position: fixed;\n' +
    '            bottom: 0;\n' +
    '            right: 0;\n' +
    '            z-index: 999999;\n' +
    '            cursor: pointer;\n' +
    '            font-family: Tahoma, Geneva, sans-serif;\n' +
    '\t\t\ttransition: .5s;\n' +
    '        }\n' +
    '\n' +
    '        .cback-circle {\n' +
    '            width: 100%;\n' +
    '            height: 100%;\n' +
    '            border: 1px solid;\n' +
    '            border-radius: 50%;\n' +
    '            position: absolute;\n' +
    '            top: 0;\n' +
    '            left: 0;\n' +
    '            transform-origin: 50% 50%;\n' +
    '            background: #94d425;\n' +
    '            color: #94d425;\n' +
    '        }\n' +
    '\n' +
    '        .cback-circle--phone {\n' +
    '            width: 50%;\n' +
    '            height: 50%;\n' +
    '            top: 50%;\n' +
    '            left: 50%;\n' +
    '            transform: translate(-50%, -50%);\n' +
    '        }\n' +
    '\n' +
    '        .cback-circle.fn1 {\n' +
    '            -webkit-animation: pin 2.5s linear 0.4s infinite normal;\n' +
    '            animation: pin 2.5s linear 0.4s infinite normal;\n' +
    '        }\n' +
    '        .cback-circle.fn2 {\n' +
    '            -webkit-animation: pin 2s linear 0s infinite normal;\n' +
    '            animation: pin 2s linear 0s infinite normal;\n' +
    '            background: none;\n' +
    '        }\n' +
    '\n' +
    '        .cback:hover .cback-circle--phone {\n' +
    '            -webkit-animation: hvr-phone 1.5s linear infinite normal;\n' +
    '            animation: hvr-phone 1.5s linear infinite normal;\n' +
    '        }\n' +
    '        .cback .phone-icon {\n' +
    '            width: 30px;\n' +
    '            height: 30px;\n' +
    "            background: url('https://kts.kz/images/callback/phone.png') no-repeat;\n" +
    '\t\t\tbackground-size: contain;\n' +
    '            position: absolute;\n' +
    '            top: 50%;\n' +
    '            left: 50%;\n' +
    '            transform: translate(-50%, -50%);\n' +
    '            -webkit-animation: phone-fn 2s infinite ease-in-out;\n' +
    '            animation: phone-fn 2s infinite ease-in-out;\n' +
    '        }\n' +
    '\n' +
    '        @-webkit-keyframes phone-fn {\n' +
    '            0% {\n' +
    '                transform: translate(-50%, -50%) rotate(0deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            10% {\n' +
    '                transform: translate(-50%, -50%) rotate(-25deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            20% {\n' +
    '                transform: translate(-50%, -50%) rotate(25deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            30% {\n' +
    '                transform: translate(-50%, -50%) rotate(-25deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            40% {\n' +
    '                transform: translate(-50%, -50%) rotate(25deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            100%, 50% {\n' +
    '                transform: translate(-50%, -50%) rotate(0deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '        }\n' +
    '        @keyframes phone-fn {\n' +
    '            0% {\n' +
    '                transform: translate(-50%, -50%) rotate(0deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            10% {\n' +
    '                transform: translate(-50%, -50%) rotate(-25deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            20% {\n' +
    '                transform: translate(-50%, -50%) rotate(25deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            30% {\n' +
    '                transform: translate(-50%, -50%) rotate(-25deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            40% {\n' +
    '                transform: translate(-50%, -50%) rotate(25deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '            100%, 50% {\n' +
    '                transform: translate(-50%, -50%) rotate(0deg) scale(1) skew(1deg);\n' +
    '            }\n' +
    '        }\n' +
    '        @-webkit-keyframes pin {\n' +
    '            0% {\n' +
    '                opacity: 0.6;\n' +
    '                transform: scale(0.5);\n' +
    '            }\n' +
    '            100% {\n' +
    '                opacity: 0;\n' +
    '                transform: scale(1);\n' +
    '            }\n' +
    '        }\n' +
    '        @keyframes pin {\n' +
    '            0% {\n' +
    '                opacity: 0.6;\n' +
    '                transform: scale(0.5);\n' +
    '            }\n' +
    '            100% {\n' +
    '                opacity: 0;\n' +
    '                transform: scale(1);\n' +
    '            }\n' +
    '        }\n' +
    '        @-webkit-keyframes hvr-phone {\n' +
    '            0%, 100% {\n' +
    '                transform: translate(-50%, -50%) scale(1);\n' +
    '                box-shadow: inset 0 0 20px -14px rgba(148, 212, 37, 0.75);\n' +
    '            }\n' +
    '            80% {\n' +
    '                transform: translate(-50%, -50%) scale(1.1);\n' +
    '                box-shadow: inset 0 0 20px -4px rgba(148, 212, 37, 0.75);\n' +
    '            }\n' +
    '        }\n' +
    '        @keyframes hvr-phone {\n' +
    '            0%, 100% {\n' +
    '                transform: translate(-50%, -50%) scale(1);\n' +
    '                box-shadow: inset 0 0 20px -14px rgba(148, 212, 37, 0.75);\n' +
    '            }\n' +
    '            80% {\n' +
    '                transform: translate(-50%, -50%) scale(1.1);\n' +
    '                box-shadow: inset 0 0 20px -4px rgba(148, 212, 37, 0.75);\n' +
    '            }\n' +
    '        }\n' +
    '\t</style>\n' +
    '\t<!--  toggle classes  -->\n' +
    '\t<style>\n' +
    '        .cback-hidden {\n' +
    '            opacity: 0;\n' +
    '        }\n' +
    '        .cback-none {\n' +
    '            display: none;\n' +
    '        }\n' +
    '        .cback-field.active {\n' +
    '            opacity: 1;\n' +
    '            right: 20px;\n' +
    '            z-index: 9999;\n' +
    '        }\n' +
    '\t</style>\n' +
    '\t<!--  field\t-->\n' +
    '\t<style>\n' +
    '\t\t.cback-field {\n' +
    '            height: 53px;\n' +
    '\t\t\tborder: 3px solid white;\n' +
    '\t\t\tposition: fixed;\n' +
    '\t\t\tbottom: 35px;\n' +
    '\t\t\tright: -200px;\n' +
    '\t\t\topacity: 0;\n' +
    '\t\t\ttransition: .5s;\n' +
    '            background-color: #94d425;\n' +
    '\t\t\tdisplay: flex;\n' +
    '\t\t\talign-items: center;\n' +
    '            border-radius: 30px;\n' +
    '\t\t\tpadding: 5px 0px 5px 18px;\n' +
    '\t\t}\n' +
    '\t\t.cback-field-country-wrap {\n' +
    '\t\t\tmargin-right: 5px;\n' +
    '\t\t\tdisplay: flex;\n' +
    '\t\t\talign-items: center;\n' +
    '\t\t}\n' +
    '\t\t.cback-field-input-wrap {\n' +
    '\t\t\tdisplay: flex;\n' +
    '\t\t\talign-items: center;\n' +
    '\t\t}\n' +
    '\t\t.cback-field-wrap {\n' +
    '            display: flex;\n' +
    '            background-color: #f7f7f7;\n' +
    '            border-radius: 16px 0 0 16px;\n' +
    '\t\t\tpadding: 4px;\n' +
    '\t\t}\n' +
    '\t\t.cback-input {\n' +
    '            color: #212529;\n' +
    '\t\t\tborder: none;\n' +
    '            background-clip: padding-box;\n' +
    '            appearance: none;\n' +
    '            border-radius: .25rem;\n' +
    '            outline: none;\n' +
    '            background-color: #f7f7f7;\n' +
    '\t\t\theight: 100%;\n' +
    '\t\t\tmax-width: 150px;\n' +
    '\t\t\tfont-size: 15px;\n' +
    '\t\t\tfont-family: Tahoma, Geneva, sans-serif;\n' +
    '        }\n' +
    '\t\t.cback-input:focus {\n' +
    '\t\t\toutline: none;\n' +
    '            border: none;\n' +
    '\t\t}\n' +
    '\t\t.cback-field-button-wrap {\n' +
    '\t\t\tdisplay: flex;\n' +
    '\t\t\talign-items: center;\n' +
    '\t\t}\n' +
    '        .cback-field-button {\n' +
    '\t\t\twhite-space: nowrap;\n' +
    '\t\t\tbackground-color: #30d8b2;\n' +
    '\t\t\tfont-size: 14px;\n' +
    '\t\t\tfont-family: Tahoma, Geneva, sans-serif !important;\n' +
    '\t\t\tbox-shadow: rgb(0 0 0 / 50%) 0px 1px 0px 0px;\n' +
    '\t\t\tpadding: 9px 16px;\n' +
    '\t\t\tcolor: white;\n' +
    '\t\t\tfont-weight: bold;\n' +
    '\t\t\tborder-radius: 25px;\n' +
    '\t\t\tposition: relative;\n' +
    '\t\t\tright: 12px;\n' +
    '\t\t\tcursor: pointer;\n' +
    '\t\t}\n' +
    '        .cback-field-button:after {\n' +
    "\t\t\tcontent: '';\n" +
    '\t\t\tdisplay: inline-block;\n' +
    '            position: relative;\n' +
    '\t\t\ttop: 2px;\n' +
    '\t\t\twidth: 15px;\n' +
    '\t\t\theight: 15px;\n' +
    "\t\t\tbackground: url('https://kts.kz/images/callback/phone.png') no-repeat;\n" +
    '\t\t\tbackground-size: contain;\n' +
    '\t\t\ttransform: rotate(260deg);\n' +
    '\t\t}\n' +
    '\t\t.cback-field-button-text {\n' +
    '\t\t\tpadding-right: 5px;\n' +
    '\t\t}\n' +
    '\t</style>\n' +
    '\t<!-- close btn\t-->\n' +
    '\t<style>\n' +
    '        .cback-field_close {\n' +
    '            position: absolute;\n' +
    '            right: -10px;\n' +
    '            top: -15px;\n' +
    '            width: 20px;\n' +
    '            height: 20px;\n' +
    '            opacity: 0.8;\n' +
    '\t\t\tcursor: pointer;\n' +
    '        }\n' +
    '        .cback-field_close:hover {\n' +
    '            opacity: 1;\n' +
    '        }\n' +
    '        .cback-field_close:before, .cback-field_close:after {\n' +
    '            position: absolute;\n' +
    '            left: 9px;\n' +
    "            content: ' ';\n" +
    '            height: 20px;\n' +
    '            width: 2px;\n' +
    '            background-color: #30d8b2;\n' +
    '        }\n' +
    '        .cback-field_close:before {\n' +
    '            transform: rotate(45deg);\n' +
    '        }\n' +
    '        .cback-field_close:after {\n' +
    '            transform: rotate(-45deg);\n' +
    '        }\n' +
    '\t</style>\n' +
    '\t<!--  country select\t-->\n' +
    '\t<style>\n' +
    '\t\t.cback-field-country {\n' +
    '            width: 36px;\n' +
    '\t\t\tmax-width: 36px;\n' +
    '            height: 23px;\n' +
    '            border: solid 1px #5d5d5d;\n' +
    '            border-radius: 16px;\n' +
    '\t\t\tcursor: pointer;\n' +
    '\t\t\tdisplay: flex;\n' +
    '\t\t\tjustify-content: center;\n' +
    '\t\t\talign-items: center;\n' +
    '\t\t\tposition: relative;\n' +
    '\t\t}\n' +
    '\t\t.cback-field-country:before {\n' +
    "\t\t\tcontent: '';\n" +
    '            display: inline-block;\n' +
    '            width: 16px;\n' +
    '            height: 11px;\n' +
    "            background: url('https://ats.kts.kz/img/callback-country-flag.png') no-repeat;\n" +
    '\t\t\tmargin-right: 3px;\n' +
    '\t\t}\n' +
    '        .cback-field-country.cback-field-country_kz:before {\n' +
    '            background-position: -16px 0;\n' +
    '\t\t}\n' +
    '        .cback-field-country.cback-field-country_ru:before {\n' +
    '            background-position: 0 0;\n' +
    '\t\t}\n' +
    '        .cback-field-country.cback-field-country_ua:before {\n' +
    '            background-position: -32px 0;\n' +
    '\t\t}\n' +
    '        .cback-field-country.cback-field-country_by:before {\n' +
    '            background-position: -48px 0;\n' +
    '\t\t}\n' +
    '\t\t.cback-field-country:after {\n' +
    "\t\t\tcontent: '';\n" +
    '\t\t\tdisplay: inline-block;\n' +
    '            width: 0;\n' +
    '            height: 0;\n' +
    '            border-left: 4px solid transparent;\n' +
    '            border-right: 4px solid transparent;\n' +
    '            border-top: 7px solid black;\n' +
    '\t\t}\n' +
    '\t\t.cback-field_select {\n' +
    '\t\t\tposition: absolute;\n' +
    '\t\t\tleft: -30px;\n' +
    '\t\t\ttop: -30px;\n' +
    '\t\t}\n' +
    '\t\t.cback-field_select_list {\n' +
    '            display: none;\n' +
    '            margin: 0;\n' +
    '\t\t\tpadding: 0;\n' +
    '            border-radius: 12px;\n' +
    '            background: #f7f7f7;\n' +
    '\t\t\tlist-style: none;\n' +
    '            box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.7);\n' +
    '\t\t\toverflow: hidden;\n' +
    '\t\t}\n' +
    '        .cback-field_select_list.active {\n' +
    '            display: block;\n' +
    '        }\n' +
    '\t\t.cback-field_select_item {\n' +
    '\t\t\twhite-space: nowrap;\n' +
    '\t\t\tpadding: 3px 3px 3px 8px;\n' +
    '\t\t\tcursor: pointer;\n' +
    '            font-size: 12px;\n' +
    '\t\t}\n' +
    '\t\t.cback-field_select_item:hover {\n' +
    '            background-color: #e7e7e7;\n' +
    '\t\t}\n' +
    '\t\t.cback-field_select_item:before {\n' +
    "\t\t\tcontent: '';\n" +
    '\t\t\tmargin-right: 8px;\n' +
    '            display: inline-block;\n' +
    '            width: 16px;\n' +
    '            height: 11px;\n' +
    "            background: url('https://ats.kts.kz/img/callback-country-flag.png') no-repeat;\n" +
    '\t\t}\n' +
    '\t\t.cback-field_select_item.cback-field_select_kz:before {\n' +
    '            background-position: -16px 0;\n' +
    '\t\t}\n' +
    '\t\t.cback-field_select_item.cback-field_select_ru:before {\n' +
    '            background-position: 0 0;\n' +
    '\t\t}\n' +
    '\t\t.cback-field_select_item.cback-field_select_ua:before {\n' +
    '            background-position: -32px 0;\n' +
    '\t\t}\n' +
    '\t\t.cback-field_select_item.cback-field_select_by:before {\n' +
    '            background-position: -48px 0;\n' +
    '\t\t}\n' +
    '.cback-field-down-text {\n' +
    '      position: absolute;\n' +
    '      bottom: -18px;\n' +
    '      background: #f7f7f7;\n' +
    '      font-size: 10px;\n' +
    '      right: 15px;\n' +
    '      white-space: nowrap;\n' +
    '      border-radius: 0 0 10px 10px;\n' +
    '      font-family: Tahoma, Geneva, sans-serif;\n' +
    '    } \n' +
    '  .cback-field-left-text {\n' +
    '    color: white;\n' +
    '    font-size: 14px;\n' +
    '    font-family: Tahoma, Geneva, sans-serif;\n' +
    '    margin-right: 10px;\n' +
    '  }\n' +
    '\t</style>\n' +
    '\t<style>\n' +
    '        @media screen and (max-width: 650px) {\n' +
    '\t\t\t.sm-hidden {\n' +
    '\t\t\t\tdisplay: none;\n' +
    '\t\t\t}\n' +
    '\t\t}\n' +
    '        @media screen and (max-width: 480px) {\n' +
    '\t\t\t.cback-input {\n' +
    '\t\t\t\tmax-width: 165px;\n' +
    '\t\t\t}\n' +
    '\t\t\t.xs-hidden {\n' +
    '\t\t\t\tdisplay: none;\n' +
    '\t\t\t}\n' +
    '\t\t}\n' +
    '\t\t.cback-message {\n' +
    '\t\t\tpadding: 12px 15px;\n' +
    '\t\t\tposition: fixed;\n' +
    '\t\t\tright: 28px;\n' +
    '\t\t\tbottom: 40px;\n' +
    '\t\t\tz-index: 999999999999;\n' +
    '\t\t\tborder-radius: 10px;\n' +
    '\t\t\tfont-family: Tahoma, Geneva, sans-serif;\n' +
    '\t\t\tdisplay: none;\n' +
    '\t\t}\n' +
    '\t\t.cback-message_text {\n' +
    '\t\t\tcolor: white;\n' +
    '\t\t\tfont-size: 14px;\n' +
    '\t\t}\n' +
    '\t\t.cback-message.active {\n' +
    '\t\t\tdisplay: block;\n' +
    '\t\t}\n' +
    '\t\t.cback-message.error.active {\n' +
    '            background: coral;\n' +
    '            border: 1px solid white;\n' +
    '\t\t}\n' +
    '\t\t.cback-message.warning.active {\n' +
    '            background: #ffcc00;\n' +
    '            border: 1px solid white;\n' +
    '\t\t}\n' +
    '\t\t.cback-message.success.active {\n' +
    '            background: #94d425;\n' +
    '            border: 1px solid white;\n' +
    '\t\t}\n' +
    '\t</style>'

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const s = document.createElement('script')
      let r = false
      s.type = 'text/javascript'
      s.src = src
      s.async = true
      s.onerror = function (err) {
        reject(err)
      }
      // readyState == loaded or complete, in case of libraries use loaded
      s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState == 'loaded')) {
          r = true
          resolve()
        }
      }
      const t = document.getElementsByTagName('script')[0]
      t.parentElement.insertBefore(s, t)
    })
  }

  function localStorageParse(item, fallBack = null) {
    try {
      return JSON.parse(localStorage.getItem(item))
    } catch (e) {
      console.error('localStorageParse error:', e)
      return fallBack
    }
  }

  function start() {
    const callbackBtn = document.getElementById('cback-btn')
    const callbackWrap = document.getElementById('cback-wrap')
    const callbackField = document.getElementById('cback-field')
    const callbackCloseBtn = document.getElementById('cback-field-close')
    const callbackCountryBtn = document.getElementById('cback-field-country')
    const callbackCountryList = document.getElementById('cback-field-country-list')
    const callbackSubmitBtn = document.getElementById('cback-field-button')
    const callbackMessageField = document.getElementById('cback-message')
    const callbackMessageText = document.getElementById('cback-message-text')
    let sendingRequest = false
    let blockedUntil = Number(localStorageParse('cbBlockTime'))

    const cleave = new Cleave('#cback-input', {
      phone: true,
      phoneRegionCode: 'kz',
    })

    function isUserBlocked() {
      return blockedUntil > Math.floor(new Date().getTime() / 1000)
    }

    function showButton() {
      callbackWrap.classList.remove('cback-none')
      setTimeout(() => {
        callbackWrap.classList.remove('cback-hidden')
      }, 500)
    }

    function hideButton() {
      callbackWrap.classList.add('cback-hidden')
      setTimeout(() => {
        callbackWrap.classList.add('cback-none')
      }, 500)
    }

    function showField() {
      callbackField.classList.add('active')
    }

    function hideField() {
      callbackField.classList.remove('active')
    }

    function showCountryList() {
      callbackCountryList.classList.add('active')
    }

    function hideCountryList() {
      callbackCountryList.classList.remove('active')
    }

    function showError(msg) {
      callbackMessageField.classList.add('active', 'error')
      callbackMessageText.innerText = msg
      setTimeout(() => {
        callbackMessageField.classList.remove('active', 'error')
      }, 1800)
    }

    function showSuccess(msg) {
      callbackMessageField.classList.add('active', 'success')
      callbackMessageText.innerText = msg
      setTimeout(() => {
        callbackMessageField.classList.remove('active', 'success')
        hideField()
        showButton()
      }, 1500)
    }

    function showWarning(msg) {
      callbackMessageField.classList.add('active', 'warning')
      callbackMessageField.innerText = msg
      setTimeout(() => {
        callbackMessageField.classList.remove('active', 'warning')
        hideField()
        showButton()
      }, 1800)
    }

    function setCountry(country) {
      const className = 'cback-field-country_'
      const countries = ['kz', 'ru', 'ua', 'by']
      if (!countries.includes(country)) return
      countries.forEach((el) => callbackCountryBtn.classList.remove(className + el))
      callbackCountryBtn.classList.add(className + country)
      hideCountryList()
      // cleave.setPhoneRegionCode(country)
      cleave.phoneRegionCode = country
      switch (country) {
        case 'kz':
          cleave.setRawValue('+77')
          break
        case 'ru':
          cleave.setRawValue('+7')
          break
        case 'ua':
          cleave.setRawValue('+380')
          break
        case 'by':
          cleave.setRawValue('+375')
          break
      }
    }

    callbackBtn.addEventListener('click', function () {
      hideButton()
      showField()
    })
    callbackCloseBtn.addEventListener('click', function () {
      hideField()
      showButton()
    })
    callbackCountryBtn.addEventListener('click', function () {
      showCountryList()
    })
    callbackCountryList.addEventListener('click', function (e) {
      e.stopPropagation()
      setCountry(e.target.dataset.country)
    })
    callbackSubmitBtn.addEventListener('click', function () {
      if (sendingRequest || isUserBlocked()) return showWarning('Заявка уже отправлена')
      sendingRequest = true
      const xhr = new XMLHttpRequest()
      xhr.open(callBackEnv.callbackRequestMethod, callBackEnv.callbackEndpoint)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(
        JSON.stringify({
          phone: cleave.getRawValue().replace(/[^0-9]/g, ''),
          unique_id: callBackEnv.id,
        })
      )
      xhr.onload = function () {
        if (xhr.status !== 200) {
          console.log(`Ошибка ${xhr.status}: ${xhr.response}`)
          showError('Что-то пошло не так. Произошла ошибка. Пожалуйста обратитесь в службу поддержки')
        } else {
          showSuccess('Спасибо, ваша заявка принята!')
        }
        sendingRequest = false
        blockedUntil = Math.floor(new Date().getTime() / 1000) + callBackEnv.callbackBlockingTime
        localStorage.setItem('cbBlockTime', blockedUntil)
      }
      xhr.onerror = function () {
        sendingRequest = false
      }
      xhr.onabort = xhr.onerror
    })

    function init() {
      setCountry('kz')
    }

    init()
  }

  class Controller {
    constructor() {
      this.body.insertAdjacentHTML('beforeend', css)
    }

    get body() {
      return document.getElementsByTagName('body')[0]
    }

    init() {
      this.body.insertAdjacentHTML('beforeend', html)
      setTimeout(() => {
        start()
      }, 0)
    }

    remove() {
      document.getElementById('cback-wrap').remove()
      document.getElementById('cback-field').remove()
      document.getElementById('cback-message').remove()
    }
  }

  function createCallbackWidget() {
    const callbackWidget = new Controller()
    callbackWidget.init()
  }

  function loadLibraries() {
    loadScript('https://kts.kz/js/cleave.min.js')
      .then(() => {
        return loadScript('https://kts.kz/js/cleave-phone.i18n.js')
      })
      .then(() => {
        createCallbackWidget()
      })
  }

  if (document.readyState !== 'loading') {
    loadLibraries()
  } else {
    document.addEventListener('DOMContentLoaded', loadLibraries)
  }
}
