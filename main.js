'use strict';
const _0x5e6098 = _0x4fe8;
(function (_0x479777, _0x262c46) {
    const _0x1cfb11 = _0x4fe8,
        _0x2eacfb = _0x479777();
    while (!![]) {
        try {
            const _0x2c6c3f = -parseInt(_0x1cfb11(0x217)) / 0x1 + -parseInt(_0x1cfb11(0x1ef)) / 0x2 + parseInt(_0x1cfb11(0x1ea)) / 0x3 + -parseInt(_0x1cfb11(0x1e4)) / 0x4 + -parseInt(_0x1cfb11(0x1d4)) / 0x5 + parseInt(_0x1cfb11(0x232)) / 0x6 * (parseInt(_0x1cfb11(0x1fa)) / 0x7) + parseInt(_0x1cfb11(0x249)) / 0x8 * (parseInt(_0x1cfb11(0x260)) / 0x9);
            if (_0x2c6c3f === _0x262c46) break;
            else _0x2eacfb['push'](_0x2eacfb['shift']());
        } catch (_0x4b43dc) {
            _0x2eacfb['push'](_0x2eacfb['shift']());
        }
    }
}(_0x272e, 0x5f638));
const {
    default: makeWASocket,
    BufferJSON,
    initInMemo,
    DisconnectReason,
    AnyMessageContent,
    useSingleFileAuthState,
    makeInMemoryStore,
    delay,
    downloadContentFromMessage,
    jidDecode,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    proto,
    prepareWAMessageMedia
} = require(_0x5e6098(0x246)), figlet = require(_0x5e6098(0x233)), fs = require('fs'), moment = require(_0x5e6098(0x20b)), chalk = require(_0x5e6098(0x272)), logg = require('pino'), clui = require(_0x5e6098(0x216)), PhoneNumber = require(_0x5e6098(0x269)), {
    Spinner
} = clui, afk = require(_0x5e6098(0x20f)), {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid
} = require('./lib/exif2'), {
    serialize,
    getBuffer,
    makeid
} = require(_0x5e6098(0x1c4)), {
    color,
    FadlyLog
} = require(_0x5e6098(0x254)), _sewa = require(_0x5e6098(0x255)), {
    isSetWelcome,
    getTextSetWelcome
} = require('./lib/setwelcome'), {
    isSetLeft,
    getTextSetLeft
} = require('./lib/setleft');
let _afk = JSON[_0x5e6098(0x250)](fs[_0x5e6098(0x1d6)](_0x5e6098(0x1c5))),
    db_respon_list = JSON['parse'](fs[_0x5e6098(0x1d6)](_0x5e6098(0x239))),
    welcome = JSON[_0x5e6098(0x250)](fs['readFileSync'](_0x5e6098(0x1de))),
    left = JSON['parse'](fs[_0x5e6098(0x1d6)](_0x5e6098(0x22a))),
    set_welcome_db = JSON[_0x5e6098(0x250)](fs['readFileSync'](_0x5e6098(0x273))),
    set_left_db = JSON['parse'](fs['readFileSync'](_0x5e6098(0x1bd))),
    sewa = JSON[_0x5e6098(0x250)](fs['readFileSync'](_0x5e6098(0x228))),
    opengc = JSON[_0x5e6098(0x250)](fs[_0x5e6098(0x1d6)](_0x5e6098(0x247))),
    set_proses = JSON[_0x5e6098(0x250)](fs[_0x5e6098(0x1d6)]('./database/set_proses.json')),
    set_done = JSON['parse'](fs[_0x5e6098(0x1d6)]('./database/set_done.json')),
    set_open = JSON[_0x5e6098(0x250)](fs[_0x5e6098(0x1d6)]('./database/set_open.json')),
    set_close = JSON[_0x5e6098(0x250)](fs[_0x5e6098(0x1d6)](_0x5e6098(0x270)));
const time = moment(new Date(mat'](_0x5e6098(0x203));
let setting = JSON[_0x5e6098(0x250)](fs[_0x5e6098(0x1d6)](_0x5e6098(0x1ee))),
    session = './' + setting[_0x5e6098(0x23f)] + '.json';
const {
    state,
    saveState
} = useSingleFileAuthState(session);

function title() {
    const _0x414293 = _0x5e6098;
    console['log'](chalk[_0x414293(0x23a)]['green'](figlet['textSync']('MB STORE', {
        'font': 'Standar
        'horizontalLayout': _0x414293(0x21d),
        'verticalLayout': _0x414293(0x21d),
        'width': 0x50,
        'whitespaceBreak': ![]
    }))), console[_0x414293(0x1e9)](chalk[_0x414293(0x22e)]('\x0a' + chalk['yellow'](_0x414293(0x1e1)) + '\x0a'));
}

function nocache(_0x2e77c2, _0x2f3136 = () => {}) {
    const _0x2cef55 = _0x5e6098;
    console['log']('Module ' + _0x2e77c2 + ' Sedang di pantau @starxiue'), fs[_0x2cef55(0x24c)](require['resolve'](_0x2e77c2), async () => {
        await uncache(require['resolve'](_0x2e77c2)), _0x2f3136(_0x2e77c2);
    });
}

function uncache(_0x870972 = '.') {
    return new Promise((_0x559982, _0x285f97) => {
        const _0x261fa4 = _0x4fe8;
        try {
            delete require[_0x261fa4(0x1c7)][require[_0x261fa4(0x202)](_0x870972)], _0x559982();
        } catch (_0x486262) {
            _0x285f97(_0x486262);
        }
    });
}
const status = new Spinner(chalk['cyan'](_0x5e6098(0x244))),
    starting = new Spinner(chalk[_0x5e6098(0x21a)](' Preparing After Connect')),
    reconnect = new Spinner(chalk[_0x5e6098(0x1f9)](_0x5e6098(0x1f8))),
    store = makeInMemoryStore({
        'logger': logg()['child']({
            'level': _0x5e6098(0x1ce),
            'stream': 'store'
        })
    }),
    connectToWhatsApp = async () => {
        const _0x157688 = _0x5e6098,
            _0x4ed693 = makeWASocket({
                'printQRInTerminal': !![],
                'logger': logg({
                    'level': _0x157688(0x1ce)
                }),
                'auth': state
            });
        return title(), store[_0x157688(0x1f4)](_0x4ed693['ev']), _0x4ed693[_0x157688(0x1c8)] = [], _0x4ed693[_0x157688(0x258)] = _0x157688(0x21e), require(_0x157688(0x22c)), require(_0x157688(0x1c4)), require(_0x157688(0x1df)), nocache('./message/help', _0x57bd78 => console[_0x157688(0x1e9)](chalk[_0x157688(0x20d)](_0x157688(0x1fb)) + time + chalk['cyanBright'](' \"' + _0x57bd78 + _0x157688(0x1bf)))), nocache(_0x157688(0x1c4), _0x221c55 => console[_0x157688(0x1e9)](chalk[_0x157688(0x20d)](_0x157688(0x1fb)) + time + chalk[_0x157688(0x224)](' \"' + _0x221c55 + _0x157688(0x1bf)))), nocache(_0x157688(0x1df), _0x5d33a3 => console[_0x157688(0x1e9)](chalk[_0x157688(0x20d)](_0x157688(0x1fb)) + time + chalk[_0x157688(0x224)](' \"' + _0x5d33a3 + _0x157688(0x1bf)))), _0x4ed693[_0x157688(0x252)] = !![], _0x4ed693[_0x157688(0x1d3)] = ![], _0x4ed693['prefa'] = _0x157688(0x213), _0x4ed693['ev']['on'](_0x157688(0x222), async _0x4e4eb7 => {
            const _0x3ecbba = _0x157688;
            var _0x1fc215 = _0x4e4eb7[_0x3ecbba(0x253)][0x0];
            if (!_0x4e4eb7[_0x3ecbba(0x253)]) return;
            if (_0x1fc215['key'] && _0x1fc215[_0x3ecbba(0x1e3)][_0x3ecbba(0x229)] == 'status@broadcast') return;
            _0x1fc215 = serialize(_0x4ed693, _0x1fc215), _0x1fc215[_0x3ecbba(0x1db)] = _0x1fc215['key']['id'][_0x3ecbba(0x22d)](_0x3ecbba(0x1d2)) || _0x1fc215[_0x3ecbba(0x1e3)]['id'][_0x3ecbba(0x22d)](_0x3ecbba(0x20e)), require(_0x3ecbba(0x1df))(_0x4ed693, _0x1fc215, _0x4e4eb7, setting, store, welcome, left, set_welcome_db, set_left_db, db_respon_list, sewa, opengc, _afk, set_proses, set_done, set_open, set_close);
        }), _0x4ed693['ev']['on']('presence.update', async _0x14707a => {
            const _0x5601c0 = _0x157688;
            if (_0x14707a[_0x5601c0(0x264)])
                for (let _0x26c314 in _0x14707a[_0x5601c0(0x264)]) {
                    (_0x14707a[_0x5601c0(0x264)][_0x26c314][_0x5601c0(0x21f)] === 'composing' || _0x14707a['presences'][_0x26c314][_0x5601c0(0x21f)] === _0x5601c0(0x25a)) && (afk[_0x5601c0(0x22f)](_0x26c314, _afk) && (_afk['splice'](afk[_0x5601c0(0x1fc)](_0x26c314, _afk), 0x1), fs['writeFileSync']('./database/afk.json', JSON['stringify'](_afk, null, 0x2)), _0x4ed693[_0x5601c0(0x26e)](_0x14707a['id'], {
                        'text': '@' + _0x26c314['split']('@')[0x0] + ' berhenti afk, dia sedang ' + (_0x14707a['presences'][_0x26c314][_0x5601c0(0x21f)] === _0x5601c0(0x1c0) ? _0x5601c0(0x261) : _0x5601c0(0x1f7)),
                        'mentions': [_0x26c314]
                    })));
                }
        }), _0x4ed693['ev']['on'](_0x157688(0x25d), _0x11ebc8 => {
            const _0x26e47f = _0x157688,
                {
                    connection: _0x602755,
                    lastDisconnect: _0x223e13
                } = _0x11ebc8;
            _0x602755 === _0x26e47f(0x1da) && (status[_0x26e47f(0x1c9)](), reconnect[_0x26e47f(0x1c9)](), starting[_0x26e47f(0x1c9)](), console[_0x26e47f(0x1e9)](FadlyLog(_0x26e47f(0x1d9))), _0x223e13[_0x26e47f(0x274)]?. [_0x26e47f(0x23e)]?. ['statusCode'] !== DisconnectReason[_0x26e47f(0x1e7)] ? connectToWhatsApp() : console[_0x26e47f(0x1e9)](FadlyLog(_0x26e47f(0x204))));
        }), _0x4ed693['ev']['on'](_0x157688(0x1e5), async _0x30f5b3 => {
            const _0x239e63 = _0x157688,
                _0x411f69 = welcome['includes'](_0x30f5b3['id']) ? !![] : ![],
                _0x15e550 = left[_0x239e63(0x237)](_0x30f5b3['id']) ? !![] : ![],
                _0x563386 = await _0x4ed693['groupMetadata'](_0x30f5b3['id']),
                _0x4cd428 = _0x563386[_0x239e63(0x1c6)],
                _0x5ee2ac = _0x563386[_0x239e63(0x240)],
                _0x3ae035 = _0x563386[_0x239e63(0x205)][_0x239e63(0x1e2)];
            try {
                for (let _0x57b232 of _0x30f5b3[_0x239e63(0x205)]) {
                    if (_0x30f5b3[_0x239e63(0x1cb)] == _0x239e63(0x242) && _0x411f69) {
                        try {
                            var _0x1f864a = await _0x4ed693[_0x239e63(0x248)](_0x57b232, _0x239e63(0x275));
                        } catch {
                            var _0x1f864a = _0x239e63(0x23d);
                        }
                        if (isSetWelcome(_0x30f5b3['id'], set_welcome_db)) {
                            var _0x255a83 = getTextSetWelcome(_0x30f5b3['id'], set_welcome_db),
                                _0x33c6c5 = _0x255a83[_0x239e63(0x256)](/@user/gi, '@' + _0x57b232['split']('@')[0x0]),
                                _0x12f7cb = _0x33c6c5['replace'](/@group/gi, _0x4cd428)[_0x239e63(0x256)](/@desc/gi, _0x5ee2ac);
                            _0x4ed693[_0x239e63(0x26e)](_0x30f5b3['id'], {
                                'caption': '' + _0x12f7cb,
                                'image': await getBuffer(_0x1f864a),
                                'mentions': [_0x57b232]
                            });
                        } else _0x4ed693[_0x239e63(0x26e)](_0x30f5b3['id'], {
                            'caption': _0x239e63(0x235) + _0x57b232[_0x239e63(0x211)]('@')[0x0] + ' in the group ' + _0x4cd428,
                            'image': await getBuffer(_0x1f864a),
                            'mentions': [_0x57b232]
                        });
                    } else {
                        if (_0x30f5b3['action'] == 'remove' && _0x15e550) {
                            try {
                                var _0x1f864a = await _0x4ed693['profilePictureUrl'](_0x57b232, _0x239e63(0x275));
                            } catch {
                                var _0x1f864a = _0x239e63(0x23d);
                            }
                            if (isSetLeft(_0x30f5b3['id'], set_left_db)) {
                                var _0x50e827 = getTextSetLeft(_0x30f5b3['id'], set_left_db),
                                    _0x33c6c5 = _0x50e827[_0x239e63(0x256)](/@user/gi, '@' + _0x57b232['split']('@')[0x0]),
                                    _0x12f7cb = _0x33c6c5[_0x239e63(0x256)](/@group/gi, _0x4cd428)[_0x239e63(0x256)](/@desc/gi, _0x5ee2ac);
                                _0x4ed693[_0x239e63(0x26e)](_0x30f5b3['id'], {
                                    'caption': '' + _0x12f7cb,
                                    'image': await getBuffer(_0x1f864a),
                                    'mentions': [_0x57b232]
                                });
                            } else _0x4ed693[_0x239e63(0x26e)](_0x30f5b3['id'], {
                                'caption': _0x239e63(0x206) + _0x57b232[_0x239e63(0x211)]('@')[0x0],
                                'image': await getBuffer(_0x1f864a),
                                'mentions': [_0x57b232]
                            });
                        }
                    }
                }
            } catch (_0x2a2e83) {
                console[_0x239e63(0x1e9)](_0x2a2e83);
            }
        }), _0x4ed693['ev']['on'](_0x157688(0x1d1), _0x4bb4e3 => {
            const _0x5a4bf9 = _0x157688;
            if ('all' in _0x4bb4e3) {
                const _0x26669e = messages[_0x4bb4e3[_0x5a4bf9(0x1fe)]];
                _0x26669e === null || _0x26669e === void 0x0 ? void 0x0 : _0x26669e[_0x5a4bf9(0x24f)]();
            } else {
                const _0x51ecfa = _0x4bb4e3['keys'][0x0][_0x5a4bf9(0x229)],
                    _0x3a0633 = messages[_0x51ecfa];
                if (_0x3a0633) {
                    const _0x1e1a48 = new Set(_0x4bb4e3['keys'][_0x5a4bf9(0x1ed)](_0x119a92 => _0x119a92['id']));
                    _0x3a0633[_0x5a4bf9(0x207)](_0x20e82b => !_0x1e1a48[_0x5a4bf9(0x1f5)](_0x20e82b[_0x5a4bf9(0x1e3)]['id']));
                }
            }
        }), _0x4ed693['ev']['on'](_0x157688(0x212), _0x5147a9 => {
            for (const _0x22ba45 of _0x5147a9) {
                chats['deleteById'](_0x22ba45);
            }
        }), setInterval(async function () {
            const _0x5059f6 = _0x157688;
            var _0x14ae4c = new Date()[_0x5059f6(0x1c3)](_0x5059f6(0x210), {
                    'timeZone': 'Asia/Jakarta'
                }),
                _0xd6e664 = _0x14ae4c[_0x5059f6(0x211)](':')[0x0] < 0xa ? '0' + _0x14ae4c : _0x14ae4c;
            if (_0xd6e664 === '12:00:00 AM') {
                var _0xbe44bc = (await _0x4ed693['groupMetadata'](_0x5059f6(0x241)))['subject'],
                    _0x3bbf36 = _0xbe44bc[_0x5059f6(0x256)](/[^0-9]/gi, '');
                _0x4ed693[_0x5059f6(0x1be)](_0x5059f6(0x241), _0xbe44bc[_0x5059f6(0x256)](_0x3bbf36, _0x3bbf36 - 0x1));
            }
        }, 0x3e8), _sewa[_0x157688(0x220)](_0x4ed693, sewa), setInterval(() => {
            const _0x483720 = _0x157688;
            for (let _0x74bb42 of Object[_0x483720(0x26a)](opengc)) {
                Date[_0x483720(0x218)]() >= _0x74bb42[_0x483720(0x231)] && (_0x4ed693[_0x483720(0x1fd)](_0x74bb42['id'], _0x483720(0x26b))[_0x483720(0x1f6)](_0x42c1e2 => _0x4ed693[_0x483720(0x26e)](_0x74bb42['id'], {
                    'text': _0x483720(0x1f2)
                }))['catch'](_0x5bc633 => _0x4ed693[_0x483720(0x26e)](_0x74bb42['id'], {
                    'text': _0x483720(0x200)
                })), delete opengc[_0x74bb42['id']], fs['writeFileSync'](_0x483720(0x247), JSON[_0x483720(0x236)](opengc)));
            }
        }, 0x3e8), _0x4ed693['ev']['on']('creds.update', () => saveState), _0x4ed693[_0x157688(0x1d7)] = (_0x393bb5, _0x1d4bbd, _0x23fad4) => _0x4ed693['sendMessage'](_0x393bb5, {
            'text': _0x1d4bbd
        }, {
            'quoted': _0x23fad4
        }), _0x4ed693['ws']['on'](_0x157688(0x1c1), async _0x3b57d0 => {
            const _0x4af4c5 = _0x157688,
                _0x4cb047 = _0x3b57d0[_0x4af4c5(0x219)][0x0][_0x4af4c5(0x201)][_0x4af4c5(0x1e6)];
            _0x4ed693[_0x4af4c5(0x26e)](_0x4cb047, {
                'text': _0x4af4c5(0x21b)
            });
        }), _0x4ed693['decodeJid'] = _0x1248f9 => {
            const _0x1872cd = _0x157688;
            if (!_0x1248f9) return _0x1248f9;
            if (/:\d+@/gi ['test'](_0x1248f9)) {
                let _0x567b57 = jidDecode(_0x1248f9) || {};
                return _0x567b57[_0x1872cd(0x259)] && _0x567b57[_0x1872cd(0x26d)] && _0x567b57[_0x1872cd(0x259)] + '@' + _0x567b57[_0x1872cd(0x26d)] || _0x1248f9;
            } else return _0x1248f9;
        }, _0x4ed693['ev']['on'](_0x157688(0x24e), _0x5c9861 => {
            const _0x5988f8 = _0x157688;
            for (let _0x3cfa71 of _0x5c9861) {
                let _0x329253 = _0x4ed693[_0x5988f8(0x25c)](_0x3cfa71['id']);
                if (store && store[_0x5988f8(0x1cc)]) store[_0x5988f8(0x1cc)][_0x329253] = {
                    'id': _0x329253,
                    'name': _0x3cfa71['notify']
                };
            }
        }), _0x4ed693['getName'] = (_0x41b5f9, _0x4f9045 = ![]) => {
            const _0xde14a3 = _0x157688;
            var _0x3be756 = _0x4ed693[_0xde14a3(0x25c)](_0x41b5f9);
            _0x4f9045 = _0x4ed693[_0xde14a3(0x225)] || _0x4f9045;
            let _0x7da4cb;
            if (_0x3be756[_0xde14a3(0x1dc)]('@g.us')) return new Promise(async _0x57a345 => {
                const _0x9dbd69 = _0xde14a3;
                _0x7da4cb = store['contacts'][_0x3be756] || {};
                if (!(_0x7da4cb[_0x9dbd69(0x215)] || _0x7da4cb[_0x9dbd69(0x1c6)])) _0x7da4cb = _0x4ed693[_0x9dbd69(0x1cf)](_0x3be756) || {};
                _0x57a345(_0x7da4cb['name'] || _0x7da4cb['subject'] || PhoneNumber('+' + _0x3be756['replace'](_0x9dbd69(0x251), ''))['getNumber'](_0x9dbd69(0x262)));
            });
            else _0x7da4cb = _0x3be756 === _0xde14a3(0x257) ? {
                'id': _0x3be756,
                'name': _0xde14a3(0x24d)
            } : _0x3be756 === _0x4ed693['decodeJid'](_0x4ed693[_0xde14a3(0x259)]['id']) ? _0x4ed693[_0xde14a3(0x259)] : store[_0xde14a3(0x1cc)][_0x3be756] || {};
            return (_0x4f9045 ? '' : _0x7da4cb[_0xde14a3(0x215)]) || _0x7da4cb['subject'] || _0x7da4cb[_0xde14a3(0x1cd)] || PhoneNumber('+' + _0x41b5f9[_0xde14a3(0x256)]('@s.whatsapp.net', ''))[_0xde14a3(0x1ff)](_0xde14a3(0x262));
        }, _0x4ed693[_0x157688(0x268)] = _0x19739c => {
            const _0x30834d = _0x157688;
            return hisoka[_0x30834d(0x26f)]({
                'tag': 'iq',
                'attrs': {
                    'to': _0x30834d(0x251),
                    'type': _0x30834d(0x265),
                    'xmlns': 'status'
                },
                'content': [{
                    'tag': _0x30834d(0x1ca),
                    'attrs': {},
                    'content': Buffer[_0x30834d(0x1e8)](_0x19739c, _0x30834d(0x1c2))
                }]
            }), _0x19739c;
        }, _0x4ed693[_0x157688(0x1f3)] = async (_0xe34eb8, _0x3b25a4, _0x545cf4 = '', _0x3e87c5 = {}) => {
            const _0x26c8d0 = _0x157688;
            let _0x417a92 = [];
            for (let _0x5e0657 of _0x3b25a4) {
                _0x417a92[_0x26c8d0(0x1d8)]({
                    'lisplayName': await _0x4ed693['getName'](_0x5e0657 + '@s.whatsapp.net'),
                    'vcard': _0x26c8d0(0x271) + await _0x4ed693['getName'](_0x5e0657 + _0x26c8d0(0x251)) + _0x26c8d0(0x1d5) + await _0x4ed693[_0x26c8d0(0x208)](_0x5e0657 + '@s.whatsapp.net') + _0x26c8d0(0x24b) + _0x5e0657 + ':' + _0x5e0657 + _0x26c8d0(0x25e)
                });
            }
            return _0x4ed693[_0x26c8d0(0x26e)](_0xe34eb8, {
                'contacts': {
                    'displayName': _0x417a92['length'] + ' Contacts',
                    'contacts': _0x417a92
                },
                ..._0x3e87c5
            }, {
                'quoted': _0x545cf4
            });
        }, _0x4ed693[_0x157688(0x245)] = async (_0x5e3ee2, _0x4ae429, _0x29b073 = ![], _0x2e23bd = {}) => {
            const _0x18b7cb = _0x157688;
            let _0x138a35;
            _0x2e23bd[_0x18b7cb(0x227)] && (_0x4ae429[_0x18b7cb(0x221)] = _0x4ae429[_0x18b7cb(0x221)] && _0x4ae429['message'][_0x18b7cb(0x238)] && _0x4ae429[_0x18b7cb(0x221)][_0x18b7cb(0x238)][_0x18b7cb(0x221)] ? _0x4ae429[_0x18b7cb(0x221)][_0x18b7cb(0x238)][_0x18b7cb(0x221)] : _0x4ae429[_0x18b7cb(0x221)] || undefined, _0x138a35 = Object['keys'](_0x4ae429[_0x18b7cb(0x221)][_0x18b7cb(0x1f0)][_0x18b7cb(0x221)])[0x0], delete(_0x4ae429[_0x18b7cb(0x221)] && _0x4ae429[_0x18b7cb(0x221)][_0x18b7cb(0x22b)] ? _0x4ae429[_0x18b7cb(0x221)][_0x18b7cb(0x22b)] : _0x4ae429[_0x18b7cb(0x221)] || undefined), delete _0x4ae429['message'][_0x18b7cb(0x1f0)]['message'][_0x138a35][_0x18b7cb(0x267)], _0x4ae429['message'] = {
                ..._0x4ae429[_0x18b7cb(0x221)]['viewOnceMessage']['message']
            });
            let _0x56d3c5 = Object['keys'](_0x4ae429['message'])[0x0],
                _0xf3b62c = await generateForwardMessageContent(_0x4ae429, _0x29b073),
                _0x2cc701 = Object[_0x18b7cb(0x1d0)](_0xf3b62c)[0x0],
                _0x53c4c7 = {};
            if (_0x56d3c5 != _0x18b7cb(0x1ec)) _0x53c4c7 = _0x4ae429['message'][_0x56d3c5][_0x18b7cb(0x21c)];
            _0xf3b62c[_0x2cc701][_0x18b7cb(0x21c)] = {
                ..._0x53c4c7,
                ..._0xf3b62c[_0x2cc701][_0x18b7cb(0x21c)]
            };
            const _0xac4d1a = await generateWAMessageFromContent(_0x5e3ee2, _0xf3b62c, _0x2e23bd ? {
                ..._0xf3b62c[_0x2cc701],
                ..._0x2e23bd,
                ..._0x2e23bd[_0x18b7cb(0x21c)] ? {
                    'contextInfo': {
                        ..._0xf3b62c[_0x2cc701]['contextInfo'],
                        ..._0x2e23bd['contextInfo']
                    }
                } : {}
            } : {});
            return await _0x4ed693[_0x18b7cb(0x226)](_0x5e3ee2, _0xac4d1a[_0x18b7cb(0x221)], {
                'messageId': _0xac4d1a[_0x18b7cb(0x1e3)]['id']
            }), _0xac4d1a;
        }, _0x4ed693[_0x157688(0x26c)] = async (_0x1e098e, _0x3253dc, _0x1dbfa7 = {}) => {
            const _0x24717d = _0x157688;
            var _0x41aacd = {
                    'contextInfo': {},
                    ..._0x1dbfa7
                },
                _0x35cc89 = await generateWAMessageFromContent(_0x1e098e, _0x3253dc, _0x41aacd);
            return await _0x4ed693['relayMessage'](_0x1e098e, _0x35cc89[_0x24717d(0x221)], {
                'messageId': _0x35cc89['key']['id']
            }), _0x35cc89;
        }, _0x4ed693['downloadAndSaveMediaMessage'] = async (_0x455065, _0x32b465, _0x1eca11) => {
            const _0x2c58fe = _0x157688;
            if (_0x32b465 === _0x2c58fe(0x275)) {
                var _0x4c9b30 = await downloadContentFromMessage(_0x455065[_0x2c58fe(0x221)][_0x2c58fe(0x1dd)] || _0x455065[_0x2c58fe(0x221)][_0x2c58fe(0x214)]?. [_0x2c58fe(0x21c)]['quotedMessage'][_0x2c58fe(0x1dd)], _0x2c58fe(0x275));
                let _0x203904 = Buffer[_0x2c58fe(0x1e8)]([]);
                for await (const _0x2b6119 of _0x4c9b30) {
                    _0x203904 = Buffer[_0x2c58fe(0x24a)]([_0x203904, _0x2b6119]);
                }
                return fs[_0x2c58fe(0x266)](_0x1eca11, _0x203904), _0x1eca11;
            } else {
                if (_0x32b465 === 'video') {
                    var _0x4c9b30 = await downloadContentFromMessage(_0x455065[_0x2c58fe(0x221)][_0x2c58fe(0x20c)] || _0x455065['message'][_0x2c58fe(0x214)]?. [_0x2c58fe(0x21c)][_0x2c58fe(0x25f)]['videoMessage'], 'video');
                    let _0xa711b5 = Buffer[_0x2c58fe(0x1e8)]([]);
                    for await (const _0x3c44ca of _0x4c9b30) {
                        _0xa711b5 = Buffer['concat']([_0xa711b5, _0x3c44ca]);
                    }
                    return fs['writeFileSync'](_0x1eca11, _0xa711b5), _0x1eca11;
                } else {
                    if (_0x32b465 === _0x2c58fe(0x23c)) {
                        var _0x4c9b30 = await downloadContentFromMessage(_0x455065['message']['stickerMessage'] || _0x455065['message']['extendedTextMessage']?. [_0x2c58fe(0x21c)][_0x2c58fe(0x25f)][_0x2c58fe(0x234)], 'sticker');
                        let _0x54c579 = Buffer['from']([]);
                        for await (const _0x1444e3 of _0x4c9b30) {
                            _0x54c579 = Buffer[_0x2c58fe(0x24a)]([_0x54c579, _0x1444e3]);
                        }
                        return fs[_0x2c58fe(0x266)](_0x1eca11, _0x54c579), _0x1eca11;
                    } else {
                        if (_0x32b465 === _0x2c58fe(0x209)) {
                            var _0x4c9b30 = await downloadContentFromMessage(_0x455065[_0x2c58fe(0x221)][_0x2c58fe(0x223)] || _0x455065['message'][_0x2c58fe(0x214)]?. [_0x2c58fe(0x21c)]['quotedMessage'][_0x2c58fe(0x223)], 'audio');
                            let _0x5401a0 = Buffer[_0x2c58fe(0x1e8)]([]);
                            for await (const _0x1f3fb8 of _0x4c9b30) {
                                _0x5401a0 = Buffer[_0x2c58fe(0x24a)]([_0x5401a0, _0x1f3fb8]);
                            }
                            return fs['writeFileSync'](_0x1eca11, _0x5401a0), _0x1eca11;
                        }
                    }
                }
            }
        }, _0x4ed693[_0x157688(0x243)] = async (_0x3dd9f9, _0x51d81a, _0xd97c82, _0x4ca6bc = {}) => {
            const _0x17a09f = _0x157688;
            let _0x3005d9 = Buffer['isBuffer'](_0x51d81a) ? _0x51d81a : /^data:.*?\/.*?;base64,/i ['test'](_0x51d81a) ? Buffer['from'](_0x51d81a[_0x17a09f(0x211)]
                    `,` [0x1], 'base64') : /^https?:\/\// [_0x17a09f(0x263)](_0x51d81a) ? await await getBuffer(_0x51d81a) : fs[_0x17a09f(0x1eb)](_0x51d81a) ? fs['readFileSync'](_0x51d81a) : Buffer['alloc'](0x0),
                _0x4aa63a;
            return _0x4ca6bc && (_0x4ca6bc[_0x17a09f(0x1f1)] || _0x4ca6bc[_0x17a09f(0x1e0)]) ? _0x4aa63a = await writeExifImg(_0x3005d9, _0x4ca6bc) : _0x4aa63a = await imageToWebp(_0x3005d9), await _0x4ed693[_0x17a09f(0x26e)](_0x3dd9f9, {
                'sticker': {
                    'url': _0x4aa63a
                },
                ..._0x4ca6bc
            }, {
                'quoted': _0xd97c82
            }), _0x4aa63a;
        }, _0x4ed693[_0x157688(0x20a)] = async (_0x6964b2, _0x3ffa4c, _0x106d65, _0x10ab04 = {}) => {
            const _0x1f0660 = _0x157688;
            let _0x3a1d83 = Buffer[_0x1f0660(0x23b)](_0x3ffa4c) ? _0x3ffa4c : /^data:.*?\/.*?;base64,/i [_0x1f0660(0x263)](_0x3ffa4c) ? Buffer[_0x1f0660(0x1e8)](_0x3ffa4c[_0x1f0660(0x211)]
                    `,` [0x1], _0x1f0660(0x230)) : /^https?:\/\// [_0x1f0660(0x263)](_0x3ffa4c) ? await await getBuffer(_0x3ffa4c) : fs[_0x1f0660(0x1eb)](_0x3ffa4c) ? fs[_0x1f0660(0x1d6)](_0x3ffa4c) : Buffer[_0x1f0660(0x25b)](0x0),
                _0x4d9ab2;
            return _0x10ab04 && (_0x10ab04['packname'] || _0x10ab04['author']) ? _0x4d9ab2 = await writeExifVid(_0x3a1d83, _0x10ab04) : _0x4d9ab2 = await videoToWebp(_0x3a1d83), await _0x4ed693['sendMessage'](_0x6964b2, {
                'sticker': {
                    'url': _0x4d9ab2
                },
                ..._0x10ab04
            }, {
                'quoted': _0x106d65
            }), _0x4d9ab2;
        }, _0x4ed693;
    };
connectToWhatsApp()['catch'](_0x979584 => console[_0x5e6098(0x1e9)](_0x979584));

function _0x4fe8(_0xe221fc, _0x105e03) {
    const _0x272ebf = _0x272e();
    return _0x4fe8 = function (_0x4fe870, _0x3906f6) {
        _0x4fe870 = _0x4fe870 - 0x1bd;
        let _0x4be377 = _0x272ebf[_0x4fe870];
        return _0x4be377;
    }, _0x4fe8(_0xe221fc, _0x105e03);
}

function _0x272e() {
    const _0x3a2f6a = ['international', 'test', 'presences', 'set', 'writeFileSync', 'viewOnce', 'setStatus', 'awesome-phonenumber', 'values', 'not_announcement', 'sendMessageFromContent', 'server', 'sendMessage', 'query', './database/set_close.json', 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:', 'chalk', './database/set_welcome.json', 'error', 'image', './database/set_left.json', 'groupUpdateSubject', '\" Updated!', 'composing', 'CB:call', 'utf-8', 'toLocaleTimeString', './lib/myfunc', './database/afk.json', 'subject', 'cache', 'spam', 'stop', 'status', 'action', 'contacts', 'verifiedName', 'fatal', 'groupMetadata', 'keys', 'messages.delete', 'BAE5', 'nopref', '1018180VbuBDI', '\x0aFN:', 'readFileSync', 'reply', 'push', 'Connect, Welcome Owner', 'close', 'isBaileys', 'endsWith', 'imageMessage', './database/welcome.json', './message/kaysa', 'author', '[ Created By Starxiue ]', 'length', 'key', '837640dnUazC', 'group-participants.update', 'call-creator', 'loggedOut', 'from', 'log', '1026975eXIiZu', 'existsSync', 'conversation', 'map', './config.json', '1448872ZxTeWi', 'viewOnceMessage', 'packname', 'Sukses, group telah dibuka', 'sendContact', 'bind', 'has', 'then', 'merekam', ' Reconnecting WhatsApp Bot', 'redBright', '7IwrYLz', '[ Star Xiue ]  ', 'getAfkPosition', 'groupSettingUpdate', 'jid', 'getNumber', 'Error', 'attrs', 'resolve', 'HH:mm:ss DD/MM/YYYY', 'Connection Lost', 'participants', 'Sayonara @', 'filter', 'getName', 'audio', 'sendVideoAsSticker', 'moment', 'videoMessage', 'greenBright', '3EB0', './lib/afk', 'en-US', 'split', 'chats.delete', 'anjing', 'extendedTextMessage', 'name', 'clui', '151157thOQsZ', 'now', 'content', 'cyan', 'Jangan telepon bot!', 'contextInfo', 'default', 'public', 'lastKnownPresence', 'expiredCheck', 'message', 'messages.upsert', 'audioMessage', 'cyanBright', 'withoutContact', 'relayMessage', 'readViewOnce', './database/sewa.json', 'remoteJid', './database/left.json', 'ignore', './message/help', 'startsWith', 'yellow', 'checkAfkUser', 'base64', 'time', '2741730vVQmSx', 'figlet', 'stickerMessage', 'Welcome @', 'stringify', 'includes', 'ephemeralMessage', './database/list-message.json', 'bold', 'isBuffer', 'sticker', 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg', 'output', 'sessionName', 'desc', '17736660147-1622202642@g.us', 'add', 'sendImageAsSticker', ' Booting WhatsApp Bot', 'copyNForward', '@adiwajshing/baileys', './database/opengc.json', 'profilePictureUrl', '8MfIQgx', 'concat', '\x0aitem1.TEL;waid=', 'watchFile', 'WhatsApp', 'contacts.update', 'clear', 'parse', '@s.whatsapp.net', 'multi', 'messages', './lib/color', './lib/sewa', 'replace', '0@s.whatsapp.net', 'mode', 'user', 'recording', 'alloc', 'decodeJid', 'connection.update', '\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD', 'quotedMessage', '7920639cymUGm', 'mengetik'];
    _0x272e = function () {
        return _0x3a2f6a;
    };
    return _0x272e();
}
