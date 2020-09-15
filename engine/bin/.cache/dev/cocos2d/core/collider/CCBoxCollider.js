(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/collider/CCBoxCollider.js';
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
        cc.Collider.Box = cc.Class({
            properties: {
                _offset: cc.v2(0, 0),
                _size: cc.size(100, 100),
                offset: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.physics.physics_collider.offset',
                    get: function get() {
                        return this._offset;
                    },
                    set: function set(value) {
                        this._offset = value;
                    },
                    type: cc.Vec2
                },
                size: {
                    tooltip: CC_DEV && 'i18n:COMPONENT.physics.physics_collider.size',
                    get: function get() {
                        return this._size;
                    },
                    set: function set(value) {
                        this._size.width = value.width < 0 ? 0 : value.width;
                        this._size.height = value.height < 0 ? 0 : value.height;
                    },
                    type: cc.Size
                }
            },
            resetInEditor: CC_EDITOR && function () {
                var size = this.node.getContentSize();
                if (size.width !== 0 && size.height !== 0) {
                    this.size = cc.size(size);
                    this.offset.x = (0.5 - this.node.anchorX) * size.width;
                    this.offset.y = (0.5 - this.node.anchorY) * size.height;
                }
            }
        });
        var BoxCollider = cc.Class({
            name: 'cc.BoxCollider',
            extends: cc.Collider,
            mixins: [cc.Collider.Box],
            editor: CC_EDITOR && { menu: 'i18n:MAIN_MENU.component.collider/Box Collider' }
        });
        cc.BoxCollider = module.exports = BoxCollider;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDQm94Q29sbGlkZXIuanMiLCIvVXNlcnMvenpmMjAxOS9EZXNrdG9wL2RldmVsb3BtZW50L3N1cHBvcnRfYXN0Yy9lbmdpbmUvY29jb3MyZC9jb3JlL2NvbGxpZGVyL0NDQm94Q29sbGlkZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDb2xsaWRlciIsIkJveCIsIkNsYXNzIiwicHJvcGVydGllcyIsIl9vZmZzZXQiLCJ2MiIsIl9zaXplIiwic2l6ZSIsIm9mZnNldCIsInRvb2x0aXAiLCJDQ19ERVYiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsInR5cGUiLCJWZWMyIiwid2lkdGgiLCJoZWlnaHQiLCJTaXplIiwicmVzZXRJbkVkaXRvciIsIkNDX0VESVRPUiIsIm5vZGUiLCJnZXRDb250ZW50U2l6ZSIsIngiLCJhbmNob3JYIiwieSIsImFuY2hvclkiLCJCb3hDb2xsaWRlciIsIm5hbWUiLCJleHRlbmRzIiwibWl4aW5zIiwiZWRpdG9yIiwibWVudSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7Ozs7Ozs7OztRQWdDQUEsRUFBQUEsQ0FBR0MsUUFBSEQsQ0FBWUUsR0FBWkYsR0FBa0JBLEVBQUFBLENBQUdHLEtBQUhILENBQVM7QUFBQSxZQUN2QkksVUFBQUEsRUFBWTtBQUFBLGdCQUNSQyxPQUFBQSxFQUFTTCxFQUFBQSxDQUFHTSxFQUFITixDQUFNLENBQU5BLEVBQVMsQ0FBVEEsQ0FERDtBQUFBLGdCQUVSTyxLQUFBQSxFQUFPUCxFQUFBQSxDQUFHUSxJQUFIUixDQUFRLEdBQVJBLEVBQWEsR0FBYkEsQ0FGQztBQUFBLGdCQVVSUyxNQUFBQSxFQUFRO0FBQUEsb0JBQ0pDLE9BQUFBLEVBQVNDLE1BQUFBLElBQVUsZ0RBRGY7QUFBQSxvQkFFSkMsR0FBQUEsRUFBSyxTQUFBLEdBQUEsR0FBWTtBQUFBLHdCQUNiLE9BQU8sS0FBS1AsT0FBWixDQURhO0FBQUEscUJBRmI7QUFBQSxvQkFLSlEsR0FBQUEsRUFBSyxTQUFBLEdBQUEsQ0FBVUMsS0FBVixFQUFpQjtBQUFBLHdCQUNsQixLQUFLVCxPQUFMLEdBQWVTLEtBQWYsQ0FEa0I7QUFBQSxxQkFMbEI7QUFBQSxvQkFRSkMsSUFBQUEsRUFBTWYsRUFBQUEsQ0FBR2dCLElBUkw7QUFBQSxpQkFWQTtBQUFBLGdCQTJCUlIsSUFBQUEsRUFBTTtBQUFBLG9CQUNGRSxPQUFBQSxFQUFTQyxNQUFBQSxJQUFVLDhDQURqQjtBQUFBLG9CQUVGQyxHQUFBQSxFQUFLLFNBQUEsR0FBQSxHQUFZO0FBQUEsd0JBQ2IsT0FBTyxLQUFLTCxLQUFaLENBRGE7QUFBQSxxQkFGZjtBQUFBLG9CQUtGTSxHQUFBQSxFQUFLLFNBQUEsR0FBQSxDQUFVQyxLQUFWLEVBQWlCO0FBQUEsd0JBQ2xCLEtBQUtQLEtBQUwsQ0FBV1UsS0FBWCxHQUFtQkgsS0FBQUEsQ0FBTUcsS0FBTkgsR0FBYyxDQUFkQSxHQUFrQixDQUFsQkEsR0FBc0JBLEtBQUFBLENBQU1HLEtBQS9DLENBRGtCO0FBQUEsd0JBRWxCLEtBQUtWLEtBQUwsQ0FBV1csTUFBWCxHQUFvQkosS0FBQUEsQ0FBTUksTUFBTkosR0FBZSxDQUFmQSxHQUFtQixDQUFuQkEsR0FBdUJBLEtBQUFBLENBQU1JLE1BQWpELENBRmtCO0FBQUEscUJBTHBCO0FBQUEsb0JBU0ZILElBQUFBLEVBQU1mLEVBQUFBLENBQUdtQixJQVRQO0FBQUEsaUJBM0JFO0FBQUEsYUFEVztBQUFBLFlBeUN2QkMsYUFBQUEsRUFBZUMsU0FBQUEsSUFBYSxZQUFZO0FBQUEsZ0JBQ3BDLElBQUliLElBQUFBLEdBQU8sS0FBS2MsSUFBTCxDQUFVQyxjQUFWLEVBQVgsQ0FEb0M7QUFBQSxnQkFFcEMsSUFBSWYsSUFBQUEsQ0FBS1MsS0FBTFQsS0FBZSxDQUFmQSxJQUFvQkEsSUFBQUEsQ0FBS1UsTUFBTFYsS0FBZ0IsQ0FBeEMsRUFBMkM7QUFBQSxvQkFDdkMsS0FBS0EsSUFBTCxHQUFZUixFQUFBQSxDQUFHUSxJQUFIUixDQUFTUSxJQUFUUixDQUFaLENBRHVDO0FBQUEsb0JBRXZDLEtBQUtTLE1BQUwsQ0FBWWUsQ0FBWixHQUFpQixPQUFNLEtBQUtGLElBQUwsQ0FBVUcsT0FBaEIsQ0FBRCxHQUE0QmpCLElBQUFBLENBQUtTLEtBQWpELENBRnVDO0FBQUEsb0JBR3ZDLEtBQUtSLE1BQUwsQ0FBWWlCLENBQVosR0FBaUIsT0FBTSxLQUFLSixJQUFMLENBQVVLLE9BQWhCLENBQUQsR0FBNEJuQixJQUFBQSxDQUFLVSxNQUFqRCxDQUh1QztBQUFBLGlCQUZQO0FBQUEsYUF6Q2pCO0FBQUEsU0FBVGxCLENBQWxCQTtRQTBEQSxJQUFJNEIsV0FBQUEsR0FBYzVCLEVBQUFBLENBQUdHLEtBQUhILENBQVM7QUFBQSxZQUN2QjZCLElBQUFBLEVBQU0sZ0JBRGlCO0FBQUEsWUFFdkJDLE9BQUFBLEVBQVM5QixFQUFBQSxDQUFHQyxRQUZXO0FBQUEsWUFHdkI4QixNQUFBQSxFQUFRLENBQUMvQixFQUFBQSxDQUFHQyxRQUFIRCxDQUFZRSxHQUFiLENBSGU7QUFBQSxZQUt2QjhCLE1BQUFBLEVBQVFYLFNBQUFBLElBQWEsRUFDakJZLElBQUFBLEVBQU0sZ0RBRFcsRUFMRTtBQUFBLFNBQVRqQyxDQUFsQjtRQVVBQSxFQUFBQSxDQUFHNEIsV0FBSDVCLEdBQWlCa0MsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJOLFdBQWxDNUIiLCJmaWxlIjoiQ0NCb3hDb2xsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4vKipcbiAqICEjZW4gRGVmaW5lcyBhIEJveCBDb2xsaWRlciAuXG4gKiAhI3poIOeUqOadpeWumuS5ieWMheWbtOebkueisOaSnuS9k1xuICogQGNsYXNzIENvbGxpZGVyLkJveFxuICovXG5jYy5Db2xsaWRlci5Cb3ggPSBjYy5DbGFzcyh7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfb2Zmc2V0OiBjYy52MigwLCAwKSxcbiAgICAgICAgX3NpemU6IGNjLnNpemUoMTAwLCAxMDApLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhI2VuIFBvc2l0aW9uIG9mZnNldFxuICAgICAgICAgKiAhI3poIOS9jee9ruWBj+enu+mHj1xuICAgICAgICAgKiBAcHJvcGVydHkgb2Zmc2V0XG4gICAgICAgICAqIEB0eXBlIHtWZWMyfVxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ2kxOG46Q09NUE9ORU5ULnBoeXNpY3MucGh5c2ljc19jb2xsaWRlci5vZmZzZXQnLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IGNjLlZlYzJcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogISNlbiBCb3ggc2l6ZVxuICAgICAgICAgKiAhI3poIOWMheWbtOebkuWkp+Wwj1xuICAgICAgICAgKiBAcHJvcGVydHkgc2l6ZVxuICAgICAgICAgKiBAdHlwZSB7U2l6ZX1cbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnaTE4bjpDT01QT05FTlQucGh5c2ljcy5waHlzaWNzX2NvbGxpZGVyLnNpemUnLCAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaXplLndpZHRoID0gdmFsdWUud2lkdGggPCAwID8gMCA6IHZhbHVlLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUuaGVpZ2h0ID0gdmFsdWUuaGVpZ2h0IDwgMCA/IDAgOiB2YWx1ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogY2MuU2l6ZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlc2V0SW5FZGl0b3I6IENDX0VESVRPUiAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaXplID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIGlmIChzaXplLndpZHRoICE9PSAwICYmIHNpemUuaGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBjYy5zaXplKCBzaXplICk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldC54ID0gKDAuNSAtIHRoaXMubm9kZS5hbmNob3JYKSAqIHNpemUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLm9mZnNldC55ID0gKDAuNSAtIHRoaXMubm9kZS5hbmNob3JZKSAqIHNpemUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICogISNlbiBCb3ggQ29sbGlkZXIuXG4gKiAhI3poIOWMheWbtOebkueisOaSnue7hOS7tlxuICogQGNsYXNzIEJveENvbGxpZGVyXG4gKiBAZXh0ZW5kcyBDb2xsaWRlclxuICogQHVzZXMgQ29sbGlkZXIuQm94XG4gKi9cbnZhciBCb3hDb2xsaWRlciA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuQm94Q29sbGlkZXInLFxuICAgIGV4dGVuZHM6IGNjLkNvbGxpZGVyLFxuICAgIG1peGluczogW2NjLkNvbGxpZGVyLkJveF0sXG5cbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQuY29sbGlkZXIvQm94IENvbGxpZGVyJyxcbiAgICB9XG59KTtcblxuY2MuQm94Q29sbGlkZXIgPSBtb2R1bGUuZXhwb3J0cyA9IEJveENvbGxpZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICogISNlbiBEZWZpbmVzIGEgQm94IENvbGxpZGVyIC5cbiAqICEjemgg55So5p2l5a6a5LmJ5YyF5Zu055uS56Kw5pKe5L2TXG4gKiBAY2xhc3MgQ29sbGlkZXIuQm94XG4gKi9cbmNjLkNvbGxpZGVyLkJveCA9IGNjLkNsYXNzKHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9vZmZzZXQ6IGNjLnYyKDAsIDApLFxuICAgICAgICBfc2l6ZTogY2Muc2l6ZSgxMDAsIDEwMCksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICEjZW4gUG9zaXRpb24gb2Zmc2V0XG4gICAgICAgICAqICEjemgg5L2N572u5YGP56e76YePXG4gICAgICAgICAqIEBwcm9wZXJ0eSBvZmZzZXRcbiAgICAgICAgICogQHR5cGUge1ZlYzJ9XG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnaTE4bjpDT01QT05FTlQucGh5c2ljcy5waHlzaWNzX2NvbGxpZGVyLm9mZnNldCcsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogY2MuVmVjMlxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhI2VuIEJveCBzaXplXG4gICAgICAgICAqICEjemgg5YyF5Zu055uS5aSn5bCPXG4gICAgICAgICAqIEBwcm9wZXJ0eSBzaXplXG4gICAgICAgICAqIEB0eXBlIHtTaXplfVxuICAgICAgICAgKi9cbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdpMThuOkNPTVBPTkVOVC5waHlzaWNzLnBoeXNpY3NfY29sbGlkZXIuc2l6ZScsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUud2lkdGggPSB2YWx1ZS53aWR0aCA8IDAgPyAwIDogdmFsdWUud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZS5oZWlnaHQgPSB2YWx1ZS5oZWlnaHQgPCAwID8gMCA6IHZhbHVlLmhlaWdodDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBjYy5TaXplXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzZXRJbkVkaXRvcjogQ0NfRURJVE9SICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgaWYgKHNpemUud2lkdGggIT09IDAgJiYgc2l6ZS5oZWlnaHQgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IGNjLnNpemUoc2l6ZSk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldC54ID0gKDAuNSAtIHRoaXMubm9kZS5hbmNob3JYKSAqIHNpemUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLm9mZnNldC55ID0gKDAuNSAtIHRoaXMubm9kZS5hbmNob3JZKSAqIHNpemUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8qKlxuICogISNlbiBCb3ggQ29sbGlkZXIuXG4gKiAhI3poIOWMheWbtOebkueisOaSnue7hOS7tlxuICogQGNsYXNzIEJveENvbGxpZGVyXG4gKiBAZXh0ZW5kcyBDb2xsaWRlclxuICogQHVzZXMgQ29sbGlkZXIuQm94XG4gKi9cbnZhciBCb3hDb2xsaWRlciA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuQm94Q29sbGlkZXInLFxuICAgIGV4dGVuZHM6IGNjLkNvbGxpZGVyLFxuICAgIG1peGluczogW2NjLkNvbGxpZGVyLkJveF0sXG5cbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQuY29sbGlkZXIvQm94IENvbGxpZGVyJ1xuICAgIH1cbn0pO1xuXG5jYy5Cb3hDb2xsaWRlciA9IG1vZHVsZS5leHBvcnRzID0gQm94Q29sbGlkZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa05EUW05NFEyOXNiR2xrWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWTJNaUxDSkRiMnhzYVdSbGNpSXNJa0p2ZUNJc0lrTnNZWE56SWl3aWNISnZjR1Z5ZEdsbGN5SXNJbDl2Wm1aelpYUWlMQ0oyTWlJc0lsOXphWHBsSWl3aWMybDZaU0lzSW05bVpuTmxkQ0lzSW5SdmIyeDBhWEFpTENKRFExOUVSVllpTENKblpYUWlMQ0p6WlhRaUxDSjJZV3gxWlNJc0luUjVjR1VpTENKV1pXTXlJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0pUYVhwbElpd2ljbVZ6WlhSSmJrVmthWFJ2Y2lJc0lrTkRYMFZFU1ZSUFVpSXNJbTV2WkdVaUxDSm5aWFJEYjI1MFpXNTBVMmw2WlNJc0luZ2lMQ0poYm1Ob2IzSllJaXdpZVNJc0ltRnVZMmh2Y2xraUxDSkNiM2hEYjJ4c2FXUmxjaUlzSW01aGJXVWlMQ0psZUhSbGJtUnpJaXdpYldsNGFXNXpJaXdpWldScGRHOXlJaXdpYldWdWRTSXNJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCTWtKQk96czdPenRCUVV0QlFTeEhRVUZIUXl4UlFVRklMRU5CUVZsRExFZEJRVm9zUjBGQmEwSkdMRWRCUVVkSExFdEJRVWdzUTBGQlV6dEJRVU4yUWtNc1owSkJRVms3UVVGRFVrTXNhVUpCUVZOTUxFZEJRVWROTEVWQlFVZ3NRMEZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVSRU8wRkJSVkpETEdWQlFVOVFMRWRCUVVkUkxFbEJRVWdzUTBGQlVTeEhRVUZTTEVWQlFXRXNSMEZCWWl4RFFVWkRPenRCUVVsU096czdPenM3UVVGTlFVTXNaMEpCUVZFN1FVRkRTa01zY1VKQlFWTkRMRlZCUVZVc1owUkJSR1k3UVVGRlNrTXNhVUpCUVVzc1pVRkJXVHRCUVVOaUxIVkNRVUZQTEV0QlFVdFFMRTlCUVZvN1FVRkRTQ3hoUVVwSE8wRkJTMHBSTEdsQ1FVRkxMR0ZCUVZWRExFdEJRVllzUlVGQmFVSTdRVUZEYkVJc2NVSkJRVXRVTEU5QlFVd3NSMEZCWlZNc1MwRkJaanRCUVVOSUxHRkJVRWM3UVVGUlNrTXNhMEpCUVUxbUxFZEJRVWRuUWp0QlFWSk1MRk5CVmtFN08wRkJjVUpTT3pzN096czdRVUZOUVZJc1kwRkJUVHRCUVVOR1JTeHhRa0ZCVTBNc1ZVRkJWU3c0UTBGRWFrSTdRVUZGUmtNc2FVSkJRVXNzWlVGQldUdEJRVU5pTEhWQ1FVRlBMRXRCUVV0TUxFdEJRVm83UVVGRFNDeGhRVXBETzBGQlMwWk5MR2xDUVVGTExHRkJRVlZETEV0QlFWWXNSVUZCYVVJN1FVRkRiRUlzY1VKQlFVdFFMRXRCUVV3c1EwRkJWMVVzUzBGQldDeEhRVUZ0UWtnc1RVRkJUVWNzUzBGQlRpeEhRVUZqTEVOQlFXUXNSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSklMRTFCUVUxSExFdEJRUzlETzBGQlEwRXNjVUpCUVV0V0xFdEJRVXdzUTBGQlYxY3NUVUZCV0N4SFFVRnZRa29zVFVGQlRVa3NUVUZCVGl4SFFVRmxMRU5CUVdZc1IwRkJiVUlzUTBGQmJrSXNSMEZCZFVKS0xFMUJRVTFKTEUxQlFXcEVPMEZCUTBnc1lVRlNRenRCUVZOR1NDeHJRa0ZCVFdZc1IwRkJSMjFDTzBGQlZGQTdRVUV6UWtVc1MwRkVWenM3UVVGNVEzWkNReXh0UWtGQlpVTXNZVUZCWVN4WlFVRlpPMEZCUTNCRExGbEJRVWxpTEU5QlFVOHNTMEZCUzJNc1NVRkJUQ3hEUVVGVlF5eGpRVUZXTEVWQlFWZzdRVUZEUVN4WlFVRkpaaXhMUVVGTFV5eExRVUZNTEV0QlFXVXNRMEZCWml4SlFVRnZRbFFzUzBGQlMxVXNUVUZCVEN4TFFVRm5RaXhEUVVGNFF5eEZRVUV5UXp0QlFVTjJReXhwUWtGQlMxWXNTVUZCVEN4SFFVRlpVaXhIUVVGSFVTeEpRVUZJTEVOQlFWTkJMRWxCUVZRc1EwRkJXanRCUVVOQkxHbENRVUZMUXl4TlFVRk1MRU5CUVZsbExFTkJRVm9zUjBGQlowSXNRMEZCUXl4TlFVRk5MRXRCUVV0R0xFbEJRVXdzUTBGQlZVY3NUMEZCYWtJc1NVRkJORUpxUWl4TFFVRkxVeXhMUVVGcVJEdEJRVU5CTEdsQ1FVRkxVaXhOUVVGTUxFTkJRVmxwUWl4RFFVRmFMRWRCUVdkQ0xFTkJRVU1zVFVGQlRTeExRVUZMU2l4SlFVRk1MRU5CUVZWTExFOUJRV3BDTEVsQlFUUkNia0lzUzBGQlMxVXNUVUZCYWtRN1FVRkRTRHRCUVVOS08wRkJhRVJ6UWl4RFFVRlVMRU5CUVd4Q096dEJRVzFFUVRzN096czdPenRCUVU5QkxFbEJRVWxWTEdOQlFXTTFRaXhIUVVGSFJ5eExRVUZJTEVOQlFWTTdRVUZEZGtJd1FpeFZRVUZOTEdkQ1FVUnBRanRCUVVWMlFrTXNZVUZCVXpsQ0xFZEJRVWRETEZGQlJsYzdRVUZIZGtJNFFpeFpRVUZSTEVOQlFVTXZRaXhIUVVGSFF5eFJRVUZJTEVOQlFWbERMRWRCUVdJc1EwRklaVHM3UVVGTGRrSTRRaXhaUVVGUldDeGhRVUZoTzBGQlEycENXU3hqUVVGTk8wRkJSRmM3UVVGTVJTeERRVUZVTEVOQlFXeENPenRCUVZWQmFrTXNSMEZCUnpSQ0xGZEJRVWdzUjBGQmFVSk5MRTlCUVU5RExFOUJRVkFzUjBGQmFVSlFMRmRCUVd4RElpd2labWxzWlNJNklrTkRRbTk0UTI5c2JHbGtaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE15MHlNREUySUVOb2RXdHZibWNnVkdWamFHNXZiRzluYVdWeklFbHVZeTVjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRjdE1qQXhPQ0JZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM1Y2JseHVJR2gwZEhCek9pOHZkM2QzTG1OdlkyOXpMbU52YlM5Y2JseHVJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhJR052Y0hsY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNiaUFnZDI5eWJHUjNhV1JsTENCeWIzbGhiSFI1TFdaeVpXVXNJRzV2YmkxaGMzTnBaMjVoWW14bExDQnlaWFp2WTJGaWJHVWdZVzVrSUc1dmJpMWxlR05zZFhOcGRtVWdiR2xqWlc1elpWeHVJSFJ2SUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdmJHVnNlU0IwYnlCa1pYWmxiRzl3SUdkaGJXVnpJRzl1SUhsdmRYSWdkR0Z5WjJWMElIQnNZWFJtYjNKdGN5NGdXVzkxSUhOb1lXeHNYRzRnSUc1dmRDQjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMlowZDJGeVpTQm1iM0lnWkdWMlpXeHZjR2x1WnlCdmRHaGxjaUJ6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUIwYUdGMEozTmNiaUFnZFhObFpDQm1iM0lnWkdWMlpXeHZjR2x1WnlCbllXMWxjeTRnV1c5MUlHRnlaU0J1YjNRZ1ozSmhiblJsWkNCMGJ5QndkV0pzYVhOb0xDQmthWE4wY21saWRYUmxMRnh1SUNCemRXSnNhV05sYm5ObExDQmhibVF2YjNJZ2MyVnNiQ0JqYjNCcFpYTWdiMllnUTI5amIzTWdRM0psWVhSdmNpNWNibHh1SUZSb1pTQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QnBiaUIwYUdseklFeHBZMlZ1YzJVZ1FXZHlaV1Z0Wlc1MElHRnlaU0JzYVdObGJuTmxaQ3dnYm05MElITnZiR1F1WEc0Z1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVJSEpsYzJWeWRtVnpJR0ZzYkNCeWFXZG9kSE1nYm05MElHVjRjSEpsYzNOc2VTQm5jbUZ1ZEdWa0lIUnZJSGx2ZFM1Y2JseHVJRlJJUlNCVFQwWlVWMEZTUlNCSlV5QlFVazlXU1VSRlJDQmNJa0ZUSUVsVFhDSXNJRmRKVkVoUFZWUWdWMEZTVWtGT1ZGa2dUMFlnUVU1WklFdEpUa1FzSUVWWVVGSkZVMU1nVDFKY2JpQkpUVkJNU1VWRUxDQkpUa05NVlVSSlRrY2dRbFZVSUU1UFZDQk1TVTFKVkVWRUlGUlBJRlJJUlNCWFFWSlNRVTVVU1VWVElFOUdJRTFGVWtOSVFVNVVRVUpKVEVsVVdTeGNiaUJHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGlCT1R5QkZWa1ZPVkNCVFNFRk1UQ0JVU0VWY2JpQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxDQkVRVTFCUjBWVElFOVNJRTlVU0VWU1hHNGdURWxCUWtsTVNWUlpMQ0JYU0VWVVNFVlNJRWxPSUVGT0lFRkRWRWxQVGlCUFJpQkRUMDVVVWtGRFZDd2dWRTlTVkNCUFVpQlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN4Y2JpQlBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVVnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9YRzRnVkVoRklGTlBSbFJYUVZKRkxseHVJQ29xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvdlhHNWNibHh1THlvcVhHNGdLaUFoSTJWdUlFUmxabWx1WlhNZ1lTQkNiM2dnUTI5c2JHbGtaWElnTGx4dUlDb2dJU042YUNEbmxLam1uYVhscnBya3VZbmxqSVhsbTdUbm01TG5vckRta3A3a3ZaTmNiaUFxSUVCamJHRnpjeUJEYjJ4c2FXUmxjaTVDYjNoY2JpQXFMMXh1WTJNdVEyOXNiR2xrWlhJdVFtOTRJRDBnWTJNdVEyeGhjM01vZTF4dUlDQWdJSEJ5YjNCbGNuUnBaWE02SUh0Y2JpQWdJQ0FnSUNBZ1gyOW1abk5sZERvZ1kyTXVkaklvTUN3Z01Da3NYRzRnSUNBZ0lDQWdJRjl6YVhwbE9pQmpZeTV6YVhwbEtERXdNQ3dnTVRBd0tTeGNibHh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dJU05sYmlCUWIzTnBkR2x2YmlCdlptWnpaWFJjYmlBZ0lDQWdJQ0FnSUNvZ0lTTjZhQ0RrdlkzbnZhN2xnWS9ucDd2cGg0OWNiaUFnSUNBZ0lDQWdJQ29nUUhCeWIzQmxjblI1SUc5bVpuTmxkRnh1SUNBZ0lDQWdJQ0FnS2lCQWRIbHdaU0I3Vm1Wak1uMWNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUc5bVpuTmxkRG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkRzl2YkhScGNEb2dRME5mUkVWV0lDWW1JQ2RwTVRodU9rTlBUVkJQVGtWT1ZDNXdhSGx6YVdOekxuQm9lWE5wWTNOZlkyOXNiR2xrWlhJdWIyWm1jMlYwSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5dlptWnpaWFE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MyVjBPaUJtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOXZabVp6WlhRZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBlWEJsT2lCall5NVdaV015WEc0Z0lDQWdJQ0FnSUgwc1hHNWNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlDRWpaVzRnUW05NElITnBlbVZjYmlBZ0lDQWdJQ0FnSUNvZ0lTTjZhQ0RsaklYbG03VG5tNUxscEtmbHNJOWNiaUFnSUNBZ0lDQWdJQ29nUUhCeWIzQmxjblI1SUhOcGVtVmNiaUFnSUNBZ0lDQWdJQ29nUUhSNWNHVWdlMU5wZW1WOVhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0J6YVhwbE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGIyOXNkR2x3T2lCRFExOUVSVllnSmlZZ0oya3hPRzQ2UTA5TlVFOU9SVTVVTG5Cb2VYTnBZM011Y0doNWMybGpjMTlqYjJ4c2FXUmxjaTV6YVhwbEp5d2dJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDl6YVhwbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmYzJsNlpTNTNhV1IwYUNBOUlIWmhiSFZsTG5kcFpIUm9JRHdnTUNBL0lEQWdPaUIyWVd4MVpTNTNhV1IwYUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDl6YVhwbExtaGxhV2RvZENBOUlIWmhiSFZsTG1obGFXZG9kQ0E4SURBZ1B5QXdJRG9nZG1Gc2RXVXVhR1ZwWjJoME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dVNklHTmpMbE5wZW1WY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCeVpYTmxkRWx1UldScGRHOXlPaUJEUTE5RlJFbFVUMUlnSmlZZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2MybDZaU0E5SUhSb2FYTXVibTlrWlM1blpYUkRiMjUwWlc1MFUybDZaU2dwTzF4dUlDQWdJQ0FnSUNCcFppQW9jMmw2WlM1M2FXUjBhQ0FoUFQwZ01DQW1KaUJ6YVhwbExtaGxhV2RvZENBaFBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emFYcGxJRDBnWTJNdWMybDZaU2dnYzJsNlpTQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2Wm1aelpYUXVlQ0E5SUNnd0xqVWdMU0IwYUdsekxtNXZaR1V1WVc1amFHOXlXQ2tnS2lCemFYcGxMbmRwWkhSb08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZabVp6WlhRdWVTQTlJQ2d3TGpVZ0xTQjBhR2x6TG01dlpHVXVZVzVqYUc5eVdTa2dLaUJ6YVhwbExtaGxhV2RvZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMHBPMXh1WEc0dktpcGNiaUFxSUNFalpXNGdRbTk0SUVOdmJHeHBaR1Z5TGx4dUlDb2dJU042YUNEbGpJWGxtN1RubTVMbm9yRG1rcDdudTRUa3U3WmNiaUFxSUVCamJHRnpjeUJDYjNoRGIyeHNhV1JsY2x4dUlDb2dRR1Y0ZEdWdVpITWdRMjlzYkdsa1pYSmNiaUFxSUVCMWMyVnpJRU52Ykd4cFpHVnlMa0p2ZUZ4dUlDb3ZYRzUyWVhJZ1FtOTRRMjlzYkdsa1pYSWdQU0JqWXk1RGJHRnpjeWg3WEc0Z0lDQWdibUZ0WlRvZ0oyTmpMa0p2ZUVOdmJHeHBaR1Z5Snl4Y2JpQWdJQ0JsZUhSbGJtUnpPaUJqWXk1RGIyeHNhV1JsY2l4Y2JpQWdJQ0J0YVhocGJuTTZJRnRqWXk1RGIyeHNhV1JsY2k1Q2IzaGRMRnh1WEc0Z0lDQWdaV1JwZEc5eU9pQkRRMTlGUkVsVVQxSWdKaVlnZTF4dUlDQWdJQ0FnSUNCdFpXNTFPaUFuYVRFNGJqcE5RVWxPWDAxRlRsVXVZMjl0Y0c5dVpXNTBMbU52Ykd4cFpHVnlMMEp2ZUNCRGIyeHNhV1JsY2ljc1hHNGdJQ0FnZlZ4dWZTazdYRzVjYm1OakxrSnZlRU52Ykd4cFpHVnlJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JDYjNoRGIyeHNhV1JsY2p0Y2JpSmRmUT09Il19