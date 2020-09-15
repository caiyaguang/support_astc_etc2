(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/utils/dynamic-atlas/atlas.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                'use strict';
        var RenderTexture = require('../../../assets/CCRenderTexture');
        var space = 2;
        function Atlas(width, height) {
            var texture = new RenderTexture();
            texture.initWithSize(width, height);
            texture.update();
            this._texture = texture;
            this._x = space;
            this._y = space;
            this._nexty = space;
            this._width = width;
            this._height = height;
            this._innerTextureInfos = {};
            this._innerSpriteFrames = [];
        }
        Atlas.DEFAULT_HASH = new RenderTexture()._getHash();
        cc.js.mixin(Atlas.prototype, {
            insertSpriteFrame: function insertSpriteFrame(spriteFrame) {
                var rect = spriteFrame._rect, texture = spriteFrame._texture, info = this._innerTextureInfos[texture._id];
                var sx = rect.x, sy = rect.y;
                if (info) {
                    sx += info.x;
                    sy += info.y;
                } else {
                    var width = texture.width, height = texture.height;
                    if (this._x + width + space > this._width) {
                        this._x = space;
                        this._y = this._nexty;
                    }
                    if (this._y + height + space > this._nexty) {
                        this._nexty = this._y + height + space;
                    }
                    if (this._nexty > this._height) {
                        return null;
                    }
                    this._texture.drawTextureAt(texture, this._x - 1, this._y);
                    this._texture.drawTextureAt(texture, this._x + 1, this._y);
                    this._texture.drawTextureAt(texture, this._x, this._y - 1);
                    this._texture.drawTextureAt(texture, this._x, this._y + 1);
                    this._texture.drawTextureAt(texture, this._x, this._y);
                    this._innerTextureInfos[texture._id] = {
                        x: this._x,
                        y: this._y,
                        texture: texture
                    };
                    sx += this._x;
                    sy += this._y;
                    this._x += width + space;
                    this._dirty = true;
                }
                var frame = {
                    x: sx,
                    y: sy,
                    texture: this._texture
                };
                this._innerSpriteFrames.push(spriteFrame);
                return frame;
            },
            update: function update() {
                if (!this._dirty)
                    return;
                this._texture.update();
                this._dirty = false;
            },
            deleteInnerTexture: function deleteInnerTexture(texture) {
                if (texture) {
                    delete this._innerTextureInfos[texture._id];
                }
            },
            reset: function reset() {
                this._x = space;
                this._y = space;
                this._nexty = space;
                var frames = this._innerSpriteFrames;
                for (var i = 0, l = frames.length; i < l; i++) {
                    var frame = frames[i];
                    if (!frame.isValid) {
                        continue;
                    }
                    frame._resetDynamicAtlasFrame();
                }
                this._innerSpriteFrames.length = 0;
                this._innerTextureInfos = {};
            },
            destroy: function destroy() {
                this.reset();
                this._texture.destroy();
            }
        });
        module.exports = Atlas;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0bGFzLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci91dGlscy9keW5hbWljLWF0bGFzL2F0bGFzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJoZWlnaHQiLCJSZW5kZXJUZXh0dXJlIiwidGV4dHVyZSIsInNwYWNlIiwiQXRsYXMiLCJ3aWR0aCIsImluaXRXaXRoU2l6ZSIsInVwZGF0ZSIsIl90ZXh0dXJlIiwiX3giLCJfeSIsIl9uZXh0eSIsIl93aWR0aCIsIl9oZWlnaHQiLCJfaW5uZXJUZXh0dXJlSW5mb3MiLCJfaW5uZXJTcHJpdGVGcmFtZXMiLCJERUZBVUxUX0hBU0giLCJfZ2V0SGFzaCIsImNjIiwianMiLCJtaXhpbiIsInByb3RvdHlwZSIsImluc2VydFNwcml0ZUZyYW1lIiwic3ByaXRlRnJhbWUiLCJyZWN0IiwiX3JlY3QiLCJpbmZvIiwiX2lkIiwic3giLCJ4Iiwic3kiLCJ5IiwiZHJhd1RleHR1cmVBdCIsIl9kaXJ0eSIsImZyYW1lIiwicHVzaCIsImRlbGV0ZUlubmVyVGV4dHVyZSIsInJlc2V0IiwiZnJhbWVzIiwiaSIsImwiLCJsZW5ndGgiLCJpc1ZhbGlkIiwiX3Jlc2V0RHluYW1pY0F0bGFzRnJhbWUiLCJkZXN0cm95IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFzQkEsSUFBQUEsT0FBQUEsR0FBUSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQTlCLE9BQUEsT0FBQSxLQUFBLFdBQXNCQTs7SUFFdEIsSUFBQSxVQUFBLEdBQUEsK0RBQUE7O1FBRXVCQyxPQUFRLE9BQUEsQ0FBQSxPQUFBLENBQVJBO1FBQ0RDLFVBQUFBLE9BQUFBLEVBQWxCO0FBQUEsUUFDQSxPQUFBLGlCQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsRUFBQSxVQUFBLENBQUEsQ0FEQTtBQUFBOztRQUlnQkMsSUFBaEIsQ0FBQSxPQUFnQkEsRUFB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SUFBSSxDQUFDSixLQUFBQSxDQUFNUSxPQUFYLEVBQW9CO0FBQUEsd0JBQ2hCLFNBRGdCO0FBQUEscUJBRnVCO0FBQUEsb0JBSzNDUixLQUFBQSxDQUFNUyx1QkFBTlQsR0FMMkM7QUFBQSxpQkFOMUM7QUFBQSxnQkFhTCxLQUFLbkIsa0JBQUwsQ0FBd0IwQixNQUF4QixHQUFpQyxDQUFqQyxDQWJLO0FBQUEsZ0JBY0wsS0FBSzNCLGtCQUFMLEdBQTBCLEVBQTFCLENBZEs7QUFBQSxhQXhFZ0I7QUFBQSxZQXlGekI4QixPQUFBQSxFQXpGeUIsU0FBQSxPQUFBLEdBeUZkO0FBQUEsZ0JBQ1AsS0FBS1AsS0FBTCxHQURPO0FBQUEsZ0JBRVAsS0FBSzdCLFFBQUwsQ0FBY29DLE9BQWQsR0FGTztBQUFBLGFBekZjO0FBQUEsU0FBN0IxQjtRQStGQTJCLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCekMsS0FBakJ5Qzs7SUE1R0ksSUFBQSxPQUFBLEVBQUE7QUFBQSxRQUNBLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLFNBQUEsRUFBQSxRQUFBLEVBREE7QUFBQSxLQUFBO1FBSUEsaUJBQUEsQ0FBQSxrQkFBQSxDQUFBLFVBQUEsRUFBQSxZQUFBO0FBQUEsWUFDQSxRQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQURBO0FBQUEsU0FBQSIsImZpbGUiOiJhdGxhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlbmRlclRleHR1cmUgPSByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvQ0NSZW5kZXJUZXh0dXJlJyk7XG5cbmNvbnN0IHNwYWNlID0gMjtcblxuZnVuY3Rpb24gQXRsYXMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBsZXQgdGV4dHVyZSA9IG5ldyBSZW5kZXJUZXh0dXJlKCk7XG4gICAgdGV4dHVyZS5pbml0V2l0aFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGV4dHVyZS51cGRhdGUoKTtcbiAgICBcbiAgICB0aGlzLl90ZXh0dXJlID0gdGV4dHVyZTtcblxuICAgIHRoaXMuX3ggPSBzcGFjZTtcbiAgICB0aGlzLl95ID0gc3BhY2U7XG4gICAgdGhpcy5fbmV4dHkgPSBzcGFjZTtcblxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgdGhpcy5faW5uZXJUZXh0dXJlSW5mb3MgPSB7fTtcbiAgICB0aGlzLl9pbm5lclNwcml0ZUZyYW1lcyA9IFtdO1xufVxuXG5BdGxhcy5ERUZBVUxUX0hBU0ggPSAobmV3IFJlbmRlclRleHR1cmUoKSkuX2dldEhhc2goKTtcblxuY2MuanMubWl4aW4oQXRsYXMucHJvdG90eXBlLCB7XG4gICAgaW5zZXJ0U3ByaXRlRnJhbWUgKHNwcml0ZUZyYW1lKSB7XG4gICAgICAgIGxldCByZWN0ID0gc3ByaXRlRnJhbWUuX3JlY3QsXG4gICAgICAgICAgICB0ZXh0dXJlID0gc3ByaXRlRnJhbWUuX3RleHR1cmUsXG4gICAgICAgICAgICBpbmZvID0gdGhpcy5faW5uZXJUZXh0dXJlSW5mb3NbdGV4dHVyZS5faWRdO1xuXG4gICAgICAgIGxldCBzeCA9IHJlY3QueCwgc3kgPSByZWN0Lnk7XG5cbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgIHN4ICs9IGluZm8ueDtcbiAgICAgICAgICAgIHN5ICs9IGluZm8ueTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IHRleHR1cmUud2lkdGgsIGhlaWdodCA9IHRleHR1cmUuaGVpZ2h0OyAgICAgICAgXG5cbiAgICAgICAgICAgIGlmICgodGhpcy5feCArIHdpZHRoICsgc3BhY2UpID4gdGhpcy5fd2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl94ID0gc3BhY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5feSA9IHRoaXMuX25leHR5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKHRoaXMuX3kgKyBoZWlnaHQgKyBzcGFjZSkgPiB0aGlzLl9uZXh0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25leHR5ID0gdGhpcy5feSArIGhlaWdodCArIHNwYWNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fbmV4dHkgPiB0aGlzLl9oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGV4dHVyZSBibGVlZGluZ1xuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZS5kcmF3VGV4dHVyZUF0KHRleHR1cmUsIHRoaXMuX3gtMSwgdGhpcy5feSk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlLmRyYXdUZXh0dXJlQXQodGV4dHVyZSwgdGhpcy5feCsxLCB0aGlzLl95KTtcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmUuZHJhd1RleHR1cmVBdCh0ZXh0dXJlLCB0aGlzLl94LCB0aGlzLl95LTEpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZS5kcmF3VGV4dHVyZUF0KHRleHR1cmUsIHRoaXMuX3gsIHRoaXMuX3krMSk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlLmRyYXdUZXh0dXJlQXQodGV4dHVyZSwgdGhpcy5feCwgdGhpcy5feSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2lubmVyVGV4dHVyZUluZm9zW3RleHR1cmUuX2lkXSA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl94LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX3ksXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogdGV4dHVyZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3ggKz0gdGhpcy5feDtcbiAgICAgICAgICAgIHN5ICs9IHRoaXMuX3k7XG5cbiAgICAgICAgICAgIHRoaXMuX3ggKz0gd2lkdGggKyBzcGFjZTtcblxuICAgICAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZyYW1lID0ge1xuICAgICAgICAgICAgeDogc3gsXG4gICAgICAgICAgICB5OiBzeSxcbiAgICAgICAgICAgIHRleHR1cmU6IHRoaXMuX3RleHR1cmVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5faW5uZXJTcHJpdGVGcmFtZXMucHVzaChzcHJpdGVGcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0sXG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RpcnR5KSByZXR1cm47XG4gICAgICAgIHRoaXMuX3RleHR1cmUudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGRlbGV0ZUlubmVyVGV4dHVyZSAodGV4dHVyZSkge1xuICAgICAgICBpZiAodGV4dHVyZSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2lubmVyVGV4dHVyZUluZm9zW3RleHR1cmUuX2lkXTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHRoaXMuX3ggPSBzcGFjZTtcbiAgICAgICAgdGhpcy5feSA9IHNwYWNlO1xuICAgICAgICB0aGlzLl9uZXh0eSA9IHNwYWNlO1xuXG4gICAgICAgIGxldCBmcmFtZXMgPSB0aGlzLl9pbm5lclNwcml0ZUZyYW1lcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBmcmFtZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBmcmFtZXNbaV07XG4gICAgICAgICAgICBpZiAoIWZyYW1lLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyYW1lLl9yZXNldER5bmFtaWNBdGxhc0ZyYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5uZXJTcHJpdGVGcmFtZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5faW5uZXJUZXh0dXJlSW5mb3MgPSB7fTtcbiAgICB9LFxuXG4gICAgZGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fdGV4dHVyZS5kZXN0cm95KCk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXRsYXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZW5kZXJUZXh0dXJlID0gcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL0NDUmVuZGVyVGV4dHVyZScpO1xuXG52YXIgc3BhY2UgPSAyO1xuXG5mdW5jdGlvbiBBdGxhcyh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIHRleHR1cmUgPSBuZXcgUmVuZGVyVGV4dHVyZSgpO1xuICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRleHR1cmUudXBkYXRlKCk7XG5cbiAgICB0aGlzLl90ZXh0dXJlID0gdGV4dHVyZTtcblxuICAgIHRoaXMuX3ggPSBzcGFjZTtcbiAgICB0aGlzLl95ID0gc3BhY2U7XG4gICAgdGhpcy5fbmV4dHkgPSBzcGFjZTtcblxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgdGhpcy5faW5uZXJUZXh0dXJlSW5mb3MgPSB7fTtcbiAgICB0aGlzLl9pbm5lclNwcml0ZUZyYW1lcyA9IFtdO1xufVxuXG5BdGxhcy5ERUZBVUxUX0hBU0ggPSBuZXcgUmVuZGVyVGV4dHVyZSgpLl9nZXRIYXNoKCk7XG5cbmNjLmpzLm1peGluKEF0bGFzLnByb3RvdHlwZSwge1xuICAgIGluc2VydFNwcml0ZUZyYW1lOiBmdW5jdGlvbiBpbnNlcnRTcHJpdGVGcmFtZShzcHJpdGVGcmFtZSkge1xuICAgICAgICB2YXIgcmVjdCA9IHNwcml0ZUZyYW1lLl9yZWN0LFxuICAgICAgICAgICAgdGV4dHVyZSA9IHNwcml0ZUZyYW1lLl90ZXh0dXJlLFxuICAgICAgICAgICAgaW5mbyA9IHRoaXMuX2lubmVyVGV4dHVyZUluZm9zW3RleHR1cmUuX2lkXTtcblxuICAgICAgICB2YXIgc3ggPSByZWN0LngsXG4gICAgICAgICAgICBzeSA9IHJlY3QueTtcblxuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgc3ggKz0gaW5mby54O1xuICAgICAgICAgICAgc3kgKz0gaW5mby55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGV4dHVyZS53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSB0ZXh0dXJlLmhlaWdodDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3ggKyB3aWR0aCArIHNwYWNlID4gdGhpcy5fd2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl94ID0gc3BhY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5feSA9IHRoaXMuX25leHR5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5feSArIGhlaWdodCArIHNwYWNlID4gdGhpcy5fbmV4dHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXh0eSA9IHRoaXMuX3kgKyBoZWlnaHQgKyBzcGFjZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX25leHR5ID4gdGhpcy5faGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRleHR1cmUgYmxlZWRpbmdcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmUuZHJhd1RleHR1cmVBdCh0ZXh0dXJlLCB0aGlzLl94IC0gMSwgdGhpcy5feSk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlLmRyYXdUZXh0dXJlQXQodGV4dHVyZSwgdGhpcy5feCArIDEsIHRoaXMuX3kpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZS5kcmF3VGV4dHVyZUF0KHRleHR1cmUsIHRoaXMuX3gsIHRoaXMuX3kgLSAxKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmUuZHJhd1RleHR1cmVBdCh0ZXh0dXJlLCB0aGlzLl94LCB0aGlzLl95ICsgMSk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlLmRyYXdUZXh0dXJlQXQodGV4dHVyZSwgdGhpcy5feCwgdGhpcy5feSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2lubmVyVGV4dHVyZUluZm9zW3RleHR1cmUuX2lkXSA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl94LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX3ksXG4gICAgICAgICAgICAgICAgdGV4dHVyZTogdGV4dHVyZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3ggKz0gdGhpcy5feDtcbiAgICAgICAgICAgIHN5ICs9IHRoaXMuX3k7XG5cbiAgICAgICAgICAgIHRoaXMuX3ggKz0gd2lkdGggKyBzcGFjZTtcblxuICAgICAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZyYW1lID0ge1xuICAgICAgICAgICAgeDogc3gsXG4gICAgICAgICAgICB5OiBzeSxcbiAgICAgICAgICAgIHRleHR1cmU6IHRoaXMuX3RleHR1cmVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9pbm5lclNwcml0ZUZyYW1lcy5wdXNoKHNwcml0ZUZyYW1lKTtcblxuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kaXJ0eSkgcmV0dXJuO1xuICAgICAgICB0aGlzLl90ZXh0dXJlLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgIH0sXG4gICAgZGVsZXRlSW5uZXJUZXh0dXJlOiBmdW5jdGlvbiBkZWxldGVJbm5lclRleHR1cmUodGV4dHVyZSkge1xuICAgICAgICBpZiAodGV4dHVyZSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2lubmVyVGV4dHVyZUluZm9zW3RleHR1cmUuX2lkXTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl94ID0gc3BhY2U7XG4gICAgICAgIHRoaXMuX3kgPSBzcGFjZTtcbiAgICAgICAgdGhpcy5fbmV4dHkgPSBzcGFjZTtcblxuICAgICAgICB2YXIgZnJhbWVzID0gdGhpcy5faW5uZXJTcHJpdGVGcmFtZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZnJhbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZyYW1lID0gZnJhbWVzW2ldO1xuICAgICAgICAgICAgaWYgKCFmcmFtZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcmFtZS5fcmVzZXREeW5hbWljQXRsYXNGcmFtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lubmVyU3ByaXRlRnJhbWVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX2lubmVyVGV4dHVyZUluZm9zID0ge307XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3RleHR1cmUuZGVzdHJveSgpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF0bGFzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1GMGJHRnpMbXB6SWwwc0ltNWhiV1Z6SWpwYklsSmxibVJsY2xSbGVIUjFjbVVpTENKeVpYRjFhWEpsSWl3aWMzQmhZMlVpTENKQmRHeGhjeUlzSW5kcFpIUm9JaXdpYUdWcFoyaDBJaXdpZEdWNGRIVnlaU0lzSW1sdWFYUlhhWFJvVTJsNlpTSXNJblZ3WkdGMFpTSXNJbDkwWlhoMGRYSmxJaXdpWDNnaUxDSmZlU0lzSWw5dVpYaDBlU0lzSWw5M2FXUjBhQ0lzSWw5b1pXbG5hSFFpTENKZmFXNXVaWEpVWlhoMGRYSmxTVzVtYjNNaUxDSmZhVzV1WlhKVGNISnBkR1ZHY21GdFpYTWlMQ0pFUlVaQlZVeFVYMGhCVTBnaUxDSmZaMlYwU0dGemFDSXNJbU5qSWl3aWFuTWlMQ0p0YVhocGJpSXNJbkJ5YjNSdmRIbHdaU0lzSW1sdWMyVnlkRk53Y21sMFpVWnlZVzFsSWl3aWMzQnlhWFJsUm5KaGJXVWlMQ0p5WldOMElpd2lYM0psWTNRaUxDSnBibVp2SWl3aVgybGtJaXdpYzNnaUxDSjRJaXdpYzNraUxDSjVJaXdpWkhKaGQxUmxlSFIxY21WQmRDSXNJbDlrYVhKMGVTSXNJbVp5WVcxbElpd2ljSFZ6YUNJc0ltUmxiR1YwWlVsdWJtVnlWR1Y0ZEhWeVpTSXNJbkpsYzJWMElpd2labkpoYldWeklpd2lhU0lzSW13aUxDSnNaVzVuZEdnaUxDSnBjMVpoYkdsa0lpd2lYM0psYzJWMFJIbHVZVzFwWTBGMGJHRnpSbkpoYldVaUxDSmtaWE4wY205NUlpd2liVzlrZFd4bElpd2laWGh3YjNKMGN5SmRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hKUVVGTlFTeG5Ra0ZCWjBKRExGRkJRVkVzYVVOQlFWSXNRMEZCZEVJN08wRkJSVUVzU1VGQlRVTXNVVUZCVVN4RFFVRmtPenRCUVVWQkxGTkJRVk5ETEV0QlFWUXNRMEZCWjBKRExFdEJRV2hDTEVWQlFYVkNReXhOUVVGMlFpeEZRVUVyUWp0QlFVTXpRaXhSUVVGSlF5eFZRVUZWTEVsQlFVbE9MR0ZCUVVvc1JVRkJaRHRCUVVOQlRTeFpRVUZSUXl4WlFVRlNMRU5CUVhGQ1NDeExRVUZ5UWl4RlFVRTBRa01zVFVGQk5VSTdRVUZEUVVNc1dVRkJVVVVzVFVGQlVqczdRVUZGUVN4VFFVRkxReXhSUVVGTUxFZEJRV2RDU0N4UFFVRm9RanM3UVVGRlFTeFRRVUZMU1N4RlFVRk1MRWRCUVZWU0xFdEJRVlk3UVVGRFFTeFRRVUZMVXl4RlFVRk1MRWRCUVZWVUxFdEJRVlk3UVVGRFFTeFRRVUZMVlN4TlFVRk1MRWRCUVdOV0xFdEJRV1E3TzBGQlJVRXNVMEZCUzFjc1RVRkJUQ3hIUVVGalZDeExRVUZrTzBGQlEwRXNVMEZCUzFVc1QwRkJUQ3hIUVVGbFZDeE5RVUZtT3p0QlFVVkJMRk5CUVV0VkxHdENRVUZNTEVkQlFUQkNMRVZCUVRGQ08wRkJRMEVzVTBGQlMwTXNhMEpCUVV3c1IwRkJNRUlzUlVGQk1VSTdRVUZEU0RzN1FVRkZSR0lzVFVGQlRXTXNXVUZCVGl4SFFVRnpRaXhKUVVGSmFrSXNZVUZCU2l4RlFVRkVMRU5CUVhOQ2EwSXNVVUZCZEVJc1JVRkJja0k3TzBGQlJVRkRMRWRCUVVkRExFVkJRVWdzUTBGQlRVTXNTMEZCVGl4RFFVRlpiRUlzVFVGQlRXMUNMRk5CUVd4Q0xFVkJRVFpDTzBGQlEzcENReXh4UWtGRWVVSXNOa0pCUTA1RExGZEJSRTBzUlVGRFR6dEJRVU0xUWl4WlFVRkpReXhQUVVGUFJDeFpRVUZaUlN4TFFVRjJRanRCUVVGQkxGbEJRMGx3UWl4VlFVRlZhMElzV1VGQldXWXNVVUZFTVVJN1FVRkJRU3haUVVWSmEwSXNUMEZCVHl4TFFVRkxXaXhyUWtGQlRDeERRVUYzUWxRc1VVRkJVWE5DTEVkQlFXaERMRU5CUmxnN08wRkJTVUVzV1VGQlNVTXNTMEZCUzBvc1MwRkJTMHNzUTBGQlpEdEJRVUZCTEZsQlFXbENReXhMUVVGTFRpeExRVUZMVHl4RFFVRXpRanM3UVVGRlFTeFpRVUZKVEN4SlFVRktMRVZCUVZVN1FVRkRUa1VzYTBKQlFVMUdMRXRCUVV0SExFTkJRVmc3UVVGRFFVTXNhMEpCUVUxS0xFdEJRVXRMTEVOQlFWZzdRVUZEU0N4VFFVaEVMRTFCU1VzN1FVRkRSQ3huUWtGQlNUVkNMRkZCUVZGRkxGRkJRVkZHTEV0QlFYQkNPMEZCUVVFc1owSkJRVEpDUXl4VFFVRlRReXhSUVVGUlJDeE5RVUUxUXpzN1FVRkZRU3huUWtGQlN5eExRVUZMU3l4RlFVRk1MRWRCUVZWT0xFdEJRVllzUjBGQmEwSkdMRXRCUVc1Q0xFZEJRVFJDTEV0QlFVdFhMRTFCUVhKRExFVkJRVFpETzBGQlEzcERMSEZDUVVGTFNDeEZRVUZNTEVkQlFWVlNMRXRCUVZZN1FVRkRRU3h4UWtGQlMxTXNSVUZCVEN4SFFVRlZMRXRCUVV0RExFMUJRV1k3UVVGRFNEczdRVUZGUkN4blFrRkJTeXhMUVVGTFJDeEZRVUZNTEVkQlFWVk9MRTFCUVZZc1IwRkJiVUpJTEV0QlFYQkNMRWRCUVRaQ0xFdEJRVXRWTEUxQlFYUkRMRVZCUVRoRE8wRkJRekZETEhGQ1FVRkxRU3hOUVVGTUxFZEJRV01zUzBGQlMwUXNSVUZCVEN4SFFVRlZUaXhOUVVGV0xFZEJRVzFDU0N4TFFVRnFRenRCUVVOSU96dEJRVVZFTEdkQ1FVRkpMRXRCUVV0VkxFMUJRVXdzUjBGQll5eExRVUZMUlN4UFFVRjJRaXhGUVVGblF6dEJRVU0xUWl4MVFrRkJUeXhKUVVGUU8wRkJRMGc3TzBGQlJVUTdRVUZEUVN4cFFrRkJTMHdzVVVGQlRDeERRVUZqZDBJc1lVRkJaQ3hEUVVFMFFqTkNMRTlCUVRWQ0xFVkJRWEZETEV0QlFVdEpMRVZCUVV3c1IwRkJVU3hEUVVFM1F5eEZRVUZuUkN4TFFVRkxReXhGUVVGeVJEdEJRVU5CTEdsQ1FVRkxSaXhSUVVGTUxFTkJRV04zUWl4aFFVRmtMRU5CUVRSQ00wSXNUMEZCTlVJc1JVRkJjVU1zUzBGQlMwa3NSVUZCVEN4SFFVRlJMRU5CUVRkRExFVkJRV2RFTEV0QlFVdERMRVZCUVhKRU8wRkJRMEVzYVVKQlFVdEdMRkZCUVV3c1EwRkJZM2RDTEdGQlFXUXNRMEZCTkVJelFpeFBRVUUxUWl4RlFVRnhReXhMUVVGTFNTeEZRVUV4UXl4RlFVRTRReXhMUVVGTFF5eEZRVUZNTEVkQlFWRXNRMEZCZEVRN1FVRkRRU3hwUWtGQlMwWXNVVUZCVEN4RFFVRmpkMElzWVVGQlpDeERRVUUwUWpOQ0xFOUJRVFZDTEVWQlFYRkRMRXRCUVV0SkxFVkJRVEZETEVWQlFUaERMRXRCUVV0RExFVkJRVXdzUjBGQlVTeERRVUYwUkR0QlFVTkJMR2xDUVVGTFJpeFJRVUZNTEVOQlFXTjNRaXhoUVVGa0xFTkJRVFJDTTBJc1QwRkJOVUlzUlVGQmNVTXNTMEZCUzBrc1JVRkJNVU1zUlVGQk9FTXNTMEZCUzBNc1JVRkJia1E3TzBGQlJVRXNhVUpCUVV0SkxHdENRVUZNTEVOQlFYZENWQ3hSUVVGUmMwSXNSMEZCYUVNc1NVRkJkVU03UVVGRGJrTkZMRzFDUVVGSExFdEJRVXR3UWl4RlFVUXlRanRCUVVWdVEzTkNMRzFDUVVGSExFdEJRVXR5UWl4RlFVWXlRanRCUVVkdVEwd3NlVUpCUVZOQk8wRkJTREJDTEdGQlFYWkRPenRCUVUxQmRVSXNhMEpCUVUwc1MwRkJTMjVDTEVWQlFWZzdRVUZEUVhGQ0xHdENRVUZOTEV0QlFVdHdRaXhGUVVGWU96dEJRVVZCTEdsQ1FVRkxSQ3hGUVVGTUxFbEJRVmRPTEZGQlFWRkdMRXRCUVc1Q096dEJRVVZCTEdsQ1FVRkxaME1zVFVGQlRDeEhRVUZqTEVsQlFXUTdRVUZEU0RzN1FVRkZSQ3haUVVGSlF5eFJRVUZSTzBGQlExSk1MR1ZCUVVkRUxFVkJSRXM3UVVGRlVrY3NaVUZCUjBRc1JVRkdTenRCUVVkU2VrSXNjVUpCUVZNc1MwRkJTMGM3UVVGSVRpeFRRVUZhT3p0QlFVMUJMR0ZCUVV0UExHdENRVUZNTEVOQlFYZENiMElzU1VGQmVFSXNRMEZCTmtKYUxGZEJRVGRDT3p0QlFVVkJMR1ZCUVU5WExFdEJRVkE3UVVGRFNDeExRVEZFZDBJN1FVRTBSSHBDTTBJc1ZVRTFSSGxDTEc5Q1FUUkVaanRCUVVOT0xGbEJRVWtzUTBGQlF5eExRVUZMTUVJc1RVRkJWaXhGUVVGclFqdEJRVU5zUWl4aFFVRkxla0lzVVVGQlRDeERRVUZqUkN4TlFVRmtPMEZCUTBFc1lVRkJTekJDTEUxQlFVd3NSMEZCWXl4TFFVRmtPMEZCUTBnc1MwRm9SWGRDTzBGQmEwVjZRa2NzYzBKQmJFVjVRaXc0UWtGclJVd3ZRaXhQUVd4RlN5eEZRV3RGU1R0QlFVTjZRaXhaUVVGSlFTeFBRVUZLTEVWQlFXRTdRVUZEVkN4dFFrRkJUeXhMUVVGTFV5eHJRa0ZCVEN4RFFVRjNRbFFzVVVGQlVYTkNMRWRCUVdoRExFTkJRVkE3UVVGRFNEdEJRVU5LTEV0QmRFVjNRanRCUVhkRmVrSlZMRk5CZUVWNVFpeHRRa0YzUldoQ08wRkJRMHdzWVVGQlN6VkNMRVZCUVV3c1IwRkJWVklzUzBGQlZqdEJRVU5CTEdGQlFVdFRMRVZCUVV3c1IwRkJWVlFzUzBGQlZqdEJRVU5CTEdGQlFVdFZMRTFCUVV3c1IwRkJZMVlzUzBGQlpEczdRVUZGUVN4WlFVRkpjVU1zVTBGQlV5eExRVUZMZGtJc2EwSkJRV3hDTzBGQlEwRXNZVUZCU3l4SlFVRkpkMElzU1VGQlNTeERRVUZTTEVWQlFWZERMRWxCUVVsR0xFOUJRVTlITEUxQlFUTkNMRVZCUVcxRFJpeEpRVUZKUXl4RFFVRjJReXhGUVVFd1EwUXNSMEZCTVVNc1JVRkJLME03UVVGRE0wTXNaMEpCUVVsTUxGRkJRVkZKTEU5QlFVOURMRU5CUVZBc1EwRkJXanRCUVVOQkxHZENRVUZKTEVOQlFVTk1MRTFCUVUxUkxFOUJRVmdzUlVGQmIwSTdRVUZEYUVJN1FVRkRTRHRCUVVORVVpeHJRa0ZCVFZNc2RVSkJRVTQ3UVVGRFNEdEJRVU5FTEdGQlFVczFRaXhyUWtGQlRDeERRVUYzUWpCQ0xFMUJRWGhDTEVkQlFXbERMRU5CUVdwRE8wRkJRMEVzWVVGQlN6TkNMR3RDUVVGTUxFZEJRVEJDTEVWQlFURkNPMEZCUTBnc1MwRjJSbmRDTzBGQmVVWjZRamhDTEZkQmVrWjVRaXh4UWtGNVJtUTdRVUZEVUN4aFFVRkxVQ3hMUVVGTU8wRkJRMEVzWVVGQlN6ZENMRkZCUVV3c1EwRkJZMjlETEU5QlFXUTdRVUZEU0R0QlFUVkdkMElzUTBGQk4wSTdPMEZCSzBaQlF5eFBRVUZQUXl4UFFVRlFMRWRCUVdsQ05VTXNTMEZCYWtJaUxDSm1hV3hsSWpvaVlYUnNZWE11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCU1pXNWtaWEpVWlhoMGRYSmxJRDBnY21WeGRXbHlaU2duTGk0dkxpNHZMaTR2WVhOelpYUnpMME5EVW1WdVpHVnlWR1Y0ZEhWeVpTY3BPMXh1WEc1amIyNXpkQ0J6Y0dGalpTQTlJREk3WEc1Y2JtWjFibU4wYVc5dUlFRjBiR0Z6SUNoM2FXUjBhQ3dnYUdWcFoyaDBLU0I3WEc0Z0lDQWdiR1YwSUhSbGVIUjFjbVVnUFNCdVpYY2dVbVZ1WkdWeVZHVjRkSFZ5WlNncE8xeHVJQ0FnSUhSbGVIUjFjbVV1YVc1cGRGZHBkR2hUYVhwbEtIZHBaSFJvTENCb1pXbG5hSFFwTzF4dUlDQWdJSFJsZUhSMWNtVXVkWEJrWVhSbEtDazdYRzRnSUNBZ1hHNGdJQ0FnZEdocGN5NWZkR1Y0ZEhWeVpTQTlJSFJsZUhSMWNtVTdYRzVjYmlBZ0lDQjBhR2x6TGw5NElEMGdjM0JoWTJVN1hHNGdJQ0FnZEdocGN5NWZlU0E5SUhOd1lXTmxPMXh1SUNBZ0lIUm9hWE11WDI1bGVIUjVJRDBnYzNCaFkyVTdYRzVjYmlBZ0lDQjBhR2x6TGw5M2FXUjBhQ0E5SUhkcFpIUm9PMXh1SUNBZ0lIUm9hWE11WDJobGFXZG9kQ0E5SUdobGFXZG9kRHRjYmx4dUlDQWdJSFJvYVhNdVgybHVibVZ5VkdWNGRIVnlaVWx1Wm05eklEMGdlMzA3WEc0Z0lDQWdkR2hwY3k1ZmFXNXVaWEpUY0hKcGRHVkdjbUZ0WlhNZ1BTQmJYVHRjYm4xY2JseHVRWFJzWVhNdVJFVkdRVlZNVkY5SVFWTklJRDBnS0c1bGR5QlNaVzVrWlhKVVpYaDBkWEpsS0NrcExsOW5aWFJJWVhOb0tDazdYRzVjYm1OakxtcHpMbTFwZUdsdUtFRjBiR0Z6TG5CeWIzUnZkSGx3WlN3Z2UxeHVJQ0FnSUdsdWMyVnlkRk53Y21sMFpVWnlZVzFsSUNoemNISnBkR1ZHY21GdFpTa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NtVmpkQ0E5SUhOd2NtbDBaVVp5WVcxbExsOXlaV04wTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkR1Y0ZEhWeVpTQTlJSE53Y21sMFpVWnlZVzFsTGw5MFpYaDBkWEpsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdhVzVtYnlBOUlIUm9hWE11WDJsdWJtVnlWR1Y0ZEhWeVpVbHVabTl6VzNSbGVIUjFjbVV1WDJsa1hUdGNibHh1SUNBZ0lDQWdJQ0JzWlhRZ2MzZ2dQU0J5WldOMExuZ3NJSE41SUQwZ2NtVmpkQzU1TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYm1adktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCemVDQXJQU0JwYm1adkxuZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCemVTQXJQU0JwYm1adkxuazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdkMmxrZEdnZ1BTQjBaWGgwZFhKbExuZHBaSFJvTENCb1pXbG5hSFFnUFNCMFpYaDBkWEpsTG1obGFXZG9kRHNnSUNBZ0lDQWdJRnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvS0hSb2FYTXVYM2dnS3lCM2FXUjBhQ0FySUhOd1lXTmxLU0ErSUhSb2FYTXVYM2RwWkhSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmVDQTlJSE53WVdObE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNrZ1BTQjBhR2x6TGw5dVpYaDBlVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ2gwYUdsekxsOTVJQ3NnYUdWcFoyaDBJQ3NnYzNCaFkyVXBJRDRnZEdocGN5NWZibVY0ZEhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5dVpYaDBlU0E5SUhSb2FYTXVYM2tnS3lCb1pXbG5hSFFnS3lCemNHRmpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVgyNWxlSFI1SUQ0Z2RHaHBjeTVmYUdWcFoyaDBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzUxYkd3N1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUhSbGVIUjFjbVVnWW14bFpXUnBibWRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNSbGVIUjFjbVV1WkhKaGQxUmxlSFIxY21WQmRDaDBaWGgwZFhKbExDQjBhR2x6TGw5NExURXNJSFJvYVhNdVgza3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmZEdWNGRIVnlaUzVrY21GM1ZHVjRkSFZ5WlVGMEtIUmxlSFIxY21Vc0lIUm9hWE11WDNnck1Td2dkR2hwY3k1ZmVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDkwWlhoMGRYSmxMbVJ5WVhkVVpYaDBkWEpsUVhRb2RHVjRkSFZ5WlN3Z2RHaHBjeTVmZUN3Z2RHaHBjeTVmZVMweEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM1JsZUhSMWNtVXVaSEpoZDFSbGVIUjFjbVZCZENoMFpYaDBkWEpsTENCMGFHbHpMbDk0TENCMGFHbHpMbDk1S3pFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZkR1Y0ZEhWeVpTNWtjbUYzVkdWNGRIVnlaVUYwS0hSbGVIUjFjbVVzSUhSb2FYTXVYM2dzSUhSb2FYTXVYM2twTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOXBibTVsY2xSbGVIUjFjbVZKYm1admMxdDBaWGgwZFhKbExsOXBaRjBnUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1ZmVDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUIwYUdsekxsOTVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJsZUhSMWNtVTZJSFJsZUhSMWNtVmNiaUFnSUNBZ0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhONElDczlJSFJvYVhNdVgzZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCemVTQXJQU0IwYUdsekxsOTVPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5NElDczlJSGRwWkhSb0lDc2djM0JoWTJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMlJwY25SNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR3hsZENCbWNtRnRaU0E5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhONExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2Mza3NYRzRnSUNBZ0lDQWdJQ0FnSUNCMFpYaDBkWEpsT2lCMGFHbHpMbDkwWlhoMGRYSmxYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMmx1Ym1WeVUzQnlhWFJsUm5KaGJXVnpMbkIxYzJnb2MzQnlhWFJsUm5KaGJXVXBPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtY21GdFpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2RYQmtZWFJsSUNncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbDlrYVhKMGVTa2djbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5MFpYaDBkWEpsTG5Wd1pHRjBaU2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbDlrYVhKMGVTQTlJR1poYkhObE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCa1pXeGxkR1ZKYm01bGNsUmxlSFIxY21VZ0tIUmxlSFIxY21VcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSbGVIUjFjbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TGw5cGJtNWxjbFJsZUhSMWNtVkpibVp2YzF0MFpYaDBkWEpsTGw5cFpGMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdjbVZ6WlhRZ0tDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOTRJRDBnYzNCaFkyVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgza2dQU0J6Y0dGalpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmJtVjRkSGtnUFNCemNHRmpaVHRjYmx4dUlDQWdJQ0FnSUNCc1pYUWdabkpoYldWeklEMGdkR2hwY3k1ZmFXNXVaWEpUY0hKcGRHVkdjbUZ0WlhNN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCc0lEMGdabkpoYldWekxteGxibWQwYURzZ2FTQThJR3c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR1p5WVcxbElEMGdabkpoYldWelcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZtY21GdFpTNXBjMVpoYkdsa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtY21GdFpTNWZjbVZ6WlhSRWVXNWhiV2xqUVhSc1lYTkdjbUZ0WlNncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgybHVibVZ5VTNCeWFYUmxSbkpoYldWekxteGxibWQwYUNBOUlEQTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgybHVibVZ5VkdWNGRIVnlaVWx1Wm05eklEMGdlMzA3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR1JsYzNSeWIza2dLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkpsYzJWMEtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzUmxlSFIxY21VdVpHVnpkSEp2ZVNncE8xeHVJQ0FnSUgxY2JuMHBPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVGMGJHRnpPMXh1SWwxOSJdfQ==