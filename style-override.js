const generateOverride = (params = {}) => {
    let result = ''
    // 背景色 - contentBgColor
    if (params.contentBgColor && params.contentBgColor !== '#00bcd4') {
        result += `
        body.background-blue {
            background: ${params.contentBgColor};
        }

        body.background-blue .pcoded-navbar.theme-horizontal~.pcoded-header[class*=header-] {
            background: ${params.contentBgColor};
        }
    `
    }
    return result
}

module.exports = generateOverride
