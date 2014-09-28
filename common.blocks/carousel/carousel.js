/**@module carousel*/
modules.define('carousel', ['i-bem__dom'], function (provide, BEMDOM) {
    "use strict";

    /**
     * @class Carousel
     * @extends BEM.DOM
     * @exports
     */
    provide(BEMDOM.decl(this.name, /**@lends Carousel.prototype*/{

        onSetMod: {
            js: {
                /**
                 * @constructs
                 * @this Carousel
                 */
                inited: function () {
                    this.findBlocksInside('button').forEach(function (button) {
                        button.on('click', this._onButtonAction, this)
                    }, this);

                    var $items = this.elem('item');

                    /**
                     * @type {Number}
                     */
                    this._itemWidth = $items.eq(0).outerWidth(true);

                    /**
                     * @type {Number}
                     */
                    this._itemsCount = $items.length;

                    /**
                     * @type {Number}
                     */
                    this._visibleItemsCount = Math.ceil(this.elem('viewport').width() / this._itemWidth);

                    /**
                     * @type {Number}
                     */
                    this._leftItemIndex = 0;

                    /**
                     * @type {Number}
                     */
                    this._animationTime = 200;
                }
            }
        },

        /**
         * @param {Event} e
         * @private
         */
        _onButtonAction: function (e) {
            var isDirectionLeft = !!this.findElem(e.target.domElem, 'left').length,
                $list = this.elem('list').stop(true, true),
                right = {
                    left: '+=' + this._itemWidth
                },
                left = {
                    left: '-=' + this._itemWidth
                };
            if (isDirectionLeft) {
                if (this._leftItemIndex + this._visibleItemsCount >= this._itemsCount) {
                    $list.append(this.findElem('item').first()).css(right);
                } else {
                    this._leftItemIndex++;
                }
                $list.animate(left, this._animationTime);
            } else {
                if (this._leftItemIndex === 0) {
                    $list.prepend(this.findElem('item').last()).css(left);
                } else {
                    this._leftItemIndex--;
                }
                $list.animate(right, this._animationTime);
            }
        }
    }, {

        live: function () {
            this.liveInitOnBlockInsideEvent({modName: 'js', modVal: 'inited'}, 'button');
        }

    }));
});

