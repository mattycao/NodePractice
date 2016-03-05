/**
 * Created by caoyangkaka on 2/29/16.
 */
module.exports = {};
module.exports.add = function() {
    return eval([].slice.call(arguments).join('+'));
}