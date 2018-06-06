const { resolve } = require('path')

module.exports = {
    /* assets/ */
    "assets": resolve(__dirname, 'assets'),

    /* src/common/html */
    "html-grid": resolve(__dirname, 'src/common/html/grid'),
    "html-table": resolve(__dirname, 'src/common/html/table'),
    "html-loading-bar": resolve(__dirname, 'src/common/loading-bar/'),

    /* src/utils/ */
    "form-utils": resolve(__dirname, 'src/utils/forms'),
    "transformers": resolve(__dirname, 'src/utils/transformers'),

    /* src/ */
    "constants": resolve(__dirname, 'src/consts'),

    /* app modules */
    "auth": resolve(__dirname, 'src/app/'),
}
