(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/webgl/quad-buffer.js';
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
        var MeshBuffer = require('./mesh-buffer');
        var QuadBuffer = cc.Class({
            name: 'cc.QuadBuffer',
            extends: MeshBuffer,
            _fillQuadBuffer: function _fillQuadBuffer() {
                var count = this._initIDataCount / 6;
                var buffer = this._iData;
                for (var i = 0, idx = 0; i < count; i++) {
                    var vertextID = i * 4;
                    buffer[idx++] = vertextID;
                    buffer[idx++] = vertextID + 1;
                    buffer[idx++] = vertextID + 2;
                    buffer[idx++] = vertextID + 1;
                    buffer[idx++] = vertextID + 3;
                    buffer[idx++] = vertextID + 2;
                }
                var indicesData = new Uint16Array(this._iData.buffer, 0, count * 6);
                this._ib.update(0, indicesData);
            },
            uploadData: function uploadData() {
                if (this.byteOffset === 0 || !this._dirty) {
                    return;
                }
                var vertexsData = new Float32Array(this._vData.buffer, 0, this.byteOffset >> 2);
                this._vb.update(0, vertexsData);
                this._dirty = false;
            },
            switchBuffer: function switchBuffer() {
                this._super();
                if (this.indiceOffset > 0) {
                    var indicesData = new Uint16Array(this._iData.buffer, 0, this.indiceOffset);
                    this._ib.update(0, indicesData);
                }
            },
            _reallocBuffer: function _reallocBuffer() {
                this._reallocVData(true);
                this._reallocIData();
                this._fillQuadBuffer();
            }
        });
        cc.QuadBuffer = module.exports = QuadBuffer;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1YWQtYnVmZmVyLmpzIiwiL1VzZXJzL3p6ZjIwMTkvRGVza3RvcC9kZXZlbG9wbWVudC9zdXBwb3J0X2FzdGMvZW5naW5lL2NvY29zMmQvY29yZS9yZW5kZXJlci93ZWJnbC9xdWFkLWJ1ZmZlci5qcyJdLCJuYW1lcyI6WyJNZXNoQnVmZmVyIiwicmVxdWlyZSIsIlF1YWRCdWZmZXIiLCJjYyIsIkNsYXNzIiwibmFtZSIsImV4dGVuZHMiLCJfZmlsbFF1YWRCdWZmZXIiLCJjb3VudCIsIl9pbml0SURhdGFDb3VudCIsImJ1ZmZlciIsIl9pRGF0YSIsImkiLCJpZHgiLCJ2ZXJ0ZXh0SUQiLCJpbmRpY2VzRGF0YSIsIlVpbnQxNkFycmF5IiwiX2liIiwidXBkYXRlIiwidXBsb2FkRGF0YSIsImJ5dGVPZmZzZXQiLCJfZGlydHkiLCJ2ZXJ0ZXhzRGF0YSIsIkZsb2F0MzJBcnJheSIsIl92RGF0YSIsIl92YiIsInN3aXRjaEJ1ZmZlciIsIl9zdXBlciIsImluZGljZU9mZnNldCIsIl9yZWFsbG9jQnVmZmVyIiwiX3JlYWxsb2NWRGF0YSIsIl9yZWFsbG9jSURhdGEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUF5QkEsSUFBTUEsVUFBQUEsR0FBYUMsT0FBQUEsQ0FBUSxlQUFSQSxDQUFuQjtRQUVBLElBQUlDLFVBQUFBLEdBQWFDLEVBQUFBLENBQUdDLEtBQUhELENBQVM7QUFBQSxZQUN0QkUsSUFBQUEsRUFBTSxlQURnQjtBQUFBLFlBRXRCQyxPQUFBQSxFQUFTTixVQUZhO0FBQUEsWUFJdEJPLGVBQUFBLEVBSnNCLFNBQUEsZUFBQSxHQUlIO0FBQUEsZ0JBQ2YsSUFBSUMsS0FBQUEsR0FBUSxLQUFLQyxlQUFMLEdBQXVCLENBQW5DLENBRGU7QUFBQSxnQkFFZixJQUFJQyxNQUFBQSxHQUFTLEtBQUtDLE1BQWxCLENBRmU7QUFBQSxnQkFHZixLQUFLLElBQUlDLENBQUFBLEdBQUksQ0FBUixFQUFXQyxHQUFBQSxHQUFNLENBQWpCLENBQUwsQ0FBeUJELENBQUFBLEdBQUlKLEtBQTdCLEVBQW9DSSxDQUFBQSxFQUFwQyxFQUF5QztBQUFBLG9CQUNyQyxJQUFJRSxTQUFBQSxHQUFZRixDQUFBQSxHQUFJLENBQXBCLENBRHFDO0FBQUEsb0JBRXJDRixNQUFBQSxDQUFPRyxHQUFBQSxFQUFQSCxJQUFnQkksU0FBaEJKLENBRnFDO0FBQUEsb0JBR3JDQSxNQUFBQSxDQUFPRyxHQUFBQSxFQUFQSCxJQUFnQkksU0FBQUEsR0FBVSxDQUExQkosQ0FIcUM7QUFBQSxvQkFJckNBLE1BQUFBLENBQU9HLEdBQUFBLEVBQVBILElBQWdCSSxTQUFBQSxHQUFVLENBQTFCSixDQUpxQztBQUFBLG9CQUtyQ0EsTUFBQUEsQ0FBT0csR0FBQUEsRUFBUEgsSUFBZ0JJLFNBQUFBLEdBQVUsQ0FBMUJKLENBTHFDO0FBQUEsb0JBTXJDQSxNQUFBQSxDQUFPRyxHQUFBQSxFQUFQSCxJQUFnQkksU0FBQUEsR0FBVSxDQUExQkosQ0FOcUM7QUFBQSxvQkFPckNBLE1BQUFBLENBQU9HLEdBQUFBLEVBQVBILElBQWdCSSxTQUFBQSxHQUFVLENBQTFCSixDQVBxQztBQUFBLGlCQUgxQjtBQUFBLGdCQWFmLElBQUlLLFdBQUFBLEdBQWMsSUFBSUMsV0FBSixDQUFnQixLQUFLTCxNQUFMLENBQVlELE1BQTVCLEVBQW9DLENBQXBDLEVBQXVDRixLQUFBQSxHQUFRLENBQS9DLENBQWxCLENBYmU7QUFBQSxnQkFjZixLQUFLUyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUJILFdBQW5CLEVBZGU7QUFBQSxhQUpHO0FBQUEsWUFxQnRCSSxVQUFBQSxFQXJCc0IsU0FBQSxVQUFBLEdBcUJSO0FBQUEsZ0JBQ1YsSUFBSSxLQUFLQyxVQUFMLEtBQW9CLENBQXBCLElBQXlCLENBQUMsS0FBS0MsTUFBbkMsRUFBMkM7QUFBQSxvQkFDdkMsT0FEdUM7QUFBQSxpQkFEakM7QUFBQSxnQkFNVixJQUFJQyxXQUFBQSxHQUFjLElBQUlDLFlBQUosQ0FBaUIsS0FBS0MsTUFBTCxDQUFZZCxNQUE3QixFQUFxQyxDQUFyQyxFQUF3QyxLQUFLVSxVQUFMLElBQW1CLENBQTNELENBQWxCLENBTlU7QUFBQSxnQkFPVixLQUFLSyxHQUFMLENBQVNQLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUJJLFdBQW5CLEVBUFU7QUFBQSxnQkFTVixLQUFLRCxNQUFMLEdBQWMsS0FBZCxDQVRVO0FBQUEsYUFyQlE7QUFBQSxZQWlDdEJLLFlBQUFBLEVBakNzQixTQUFBLFlBQUEsR0FpQ047QUFBQSxnQkFDWixLQUFLQyxNQUFMLEdBRFk7QUFBQSxnQkFHWixJQUFJLEtBQUtDLFlBQUwsR0FBb0IsQ0FBeEIsRUFBMkI7QUFBQSxvQkFDdkIsSUFBSWIsV0FBQUEsR0FBYyxJQUFJQyxXQUFKLENBQWdCLEtBQUtMLE1BQUwsQ0FBWUQsTUFBNUIsRUFBb0MsQ0FBcEMsRUFBdUMsS0FBS2tCLFlBQTVDLENBQWxCLENBRHVCO0FBQUEsb0JBRXZCLEtBQUtYLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixDQUFoQixFQUFtQkgsV0FBbkIsRUFGdUI7QUFBQSxpQkFIZjtBQUFBLGFBakNNO0FBQUEsWUEwQ3RCYyxjQUFBQSxFQTFDc0IsU0FBQSxjQUFBLEdBMENKO0FBQUEsZ0JBQ2QsS0FBS0MsYUFBTCxDQUFtQixJQUFuQixFQURjO0FBQUEsZ0JBRWQsS0FBS0MsYUFBTCxHQUZjO0FBQUEsZ0JBR2QsS0FBS3hCLGVBQUwsR0FIYztBQUFBLGFBMUNJO0FBQUEsU0FBVEosQ0FBakI7UUFpREFBLEVBQUFBLENBQUdELFVBQUhDLEdBQWdCNkIsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUI5QixVQUFqQ0MiLCJmaWxlIjoicXVhZC1idWZmZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBNZXNoQnVmZmVyID0gcmVxdWlyZSgnLi9tZXNoLWJ1ZmZlcicpO1xuXG5sZXQgUXVhZEJ1ZmZlciA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnY2MuUXVhZEJ1ZmZlcicsXG4gICAgZXh0ZW5kczogTWVzaEJ1ZmZlcixcbiAgICBcbiAgICBfZmlsbFF1YWRCdWZmZXIgKCkge1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLl9pbml0SURhdGFDb3VudCAvIDY7XG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLl9pRGF0YTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlkeCA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmVydGV4dElEID0gaSAqIDQ7XG4gICAgICAgICAgICBidWZmZXJbaWR4KytdID0gdmVydGV4dElEO1xuICAgICAgICAgICAgYnVmZmVyW2lkeCsrXSA9IHZlcnRleHRJRCsxO1xuICAgICAgICAgICAgYnVmZmVyW2lkeCsrXSA9IHZlcnRleHRJRCsyO1xuICAgICAgICAgICAgYnVmZmVyW2lkeCsrXSA9IHZlcnRleHRJRCsxO1xuICAgICAgICAgICAgYnVmZmVyW2lkeCsrXSA9IHZlcnRleHRJRCszO1xuICAgICAgICAgICAgYnVmZmVyW2lkeCsrXSA9IHZlcnRleHRJRCsyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluZGljZXNEYXRhID0gbmV3IFVpbnQxNkFycmF5KHRoaXMuX2lEYXRhLmJ1ZmZlciwgMCwgY291bnQgKiA2KTtcbiAgICAgICAgdGhpcy5faWIudXBkYXRlKDAsIGluZGljZXNEYXRhKTtcbiAgICB9LFxuXG4gICAgdXBsb2FkRGF0YSAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ5dGVPZmZzZXQgPT09IDAgfHwgIXRoaXMuX2RpcnR5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgdmVydGV4dCBkYXRhXG4gICAgICAgIGxldCB2ZXJ0ZXhzRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fdkRhdGEuYnVmZmVyLCAwLCB0aGlzLmJ5dGVPZmZzZXQgPj4gMik7XG4gICAgICAgIHRoaXMuX3ZiLnVwZGF0ZSgwLCB2ZXJ0ZXhzRGF0YSk7XG5cbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc3dpdGNoQnVmZmVyICgpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgLy8gdXBsb2FkIGluZGV4IGJ1ZmZlciBkYXRhXG4gICAgICAgIGlmICh0aGlzLmluZGljZU9mZnNldCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpbmRpY2VzRGF0YSA9IG5ldyBVaW50MTZBcnJheSh0aGlzLl9pRGF0YS5idWZmZXIsIDAsIHRoaXMuaW5kaWNlT2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX2liLnVwZGF0ZSgwLCBpbmRpY2VzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3JlYWxsb2NCdWZmZXIgKCkge1xuICAgICAgICB0aGlzLl9yZWFsbG9jVkRhdGEodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3JlYWxsb2NJRGF0YSgpO1xuICAgICAgICB0aGlzLl9maWxsUXVhZEJ1ZmZlcigpO1xuICAgIH1cbn0pO1xuXG5jYy5RdWFkQnVmZmVyID0gbW9kdWxlLmV4cG9ydHMgPSBRdWFkQnVmZmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxuXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxuIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxuIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcbiB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXG4gc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXG5cbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgTWVzaEJ1ZmZlciA9IHJlcXVpcmUoJy4vbWVzaC1idWZmZXInKTtcblxudmFyIFF1YWRCdWZmZXIgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ2NjLlF1YWRCdWZmZXInLFxuICAgIGV4dGVuZHM6IE1lc2hCdWZmZXIsXG5cbiAgICBfZmlsbFF1YWRCdWZmZXI6IGZ1bmN0aW9uIF9maWxsUXVhZEJ1ZmZlcigpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5faW5pdElEYXRhQ291bnQgLyA2O1xuICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5faURhdGE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpZHggPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZlcnRleHRJRCA9IGkgKiA0O1xuICAgICAgICAgICAgYnVmZmVyW2lkeCsrXSA9IHZlcnRleHRJRDtcbiAgICAgICAgICAgIGJ1ZmZlcltpZHgrK10gPSB2ZXJ0ZXh0SUQgKyAxO1xuICAgICAgICAgICAgYnVmZmVyW2lkeCsrXSA9IHZlcnRleHRJRCArIDI7XG4gICAgICAgICAgICBidWZmZXJbaWR4KytdID0gdmVydGV4dElEICsgMTtcbiAgICAgICAgICAgIGJ1ZmZlcltpZHgrK10gPSB2ZXJ0ZXh0SUQgKyAzO1xuICAgICAgICAgICAgYnVmZmVyW2lkeCsrXSA9IHZlcnRleHRJRCArIDI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5kaWNlc0RhdGEgPSBuZXcgVWludDE2QXJyYXkodGhpcy5faURhdGEuYnVmZmVyLCAwLCBjb3VudCAqIDYpO1xuICAgICAgICB0aGlzLl9pYi51cGRhdGUoMCwgaW5kaWNlc0RhdGEpO1xuICAgIH0sXG4gICAgdXBsb2FkRGF0YTogZnVuY3Rpb24gdXBsb2FkRGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnl0ZU9mZnNldCA9PT0gMCB8fCAhdGhpcy5fZGlydHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB2ZXJ0ZXh0IGRhdGFcbiAgICAgICAgdmFyIHZlcnRleHNEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLl92RGF0YS5idWZmZXIsIDAsIHRoaXMuYnl0ZU9mZnNldCA+PiAyKTtcbiAgICAgICAgdGhpcy5fdmIudXBkYXRlKDAsIHZlcnRleHNEYXRhKTtcblxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc3dpdGNoQnVmZmVyOiBmdW5jdGlvbiBzd2l0Y2hCdWZmZXIoKSB7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIC8vIHVwbG9hZCBpbmRleCBidWZmZXIgZGF0YVxuICAgICAgICBpZiAodGhpcy5pbmRpY2VPZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgaW5kaWNlc0RhdGEgPSBuZXcgVWludDE2QXJyYXkodGhpcy5faURhdGEuYnVmZmVyLCAwLCB0aGlzLmluZGljZU9mZnNldCk7XG4gICAgICAgICAgICB0aGlzLl9pYi51cGRhdGUoMCwgaW5kaWNlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBfcmVhbGxvY0J1ZmZlcjogZnVuY3Rpb24gX3JlYWxsb2NCdWZmZXIoKSB7XG4gICAgICAgIHRoaXMuX3JlYWxsb2NWRGF0YSh0cnVlKTtcbiAgICAgICAgdGhpcy5fcmVhbGxvY0lEYXRhKCk7XG4gICAgICAgIHRoaXMuX2ZpbGxRdWFkQnVmZmVyKCk7XG4gICAgfVxufSk7XG5cbmNjLlF1YWRCdWZmZXIgPSBtb2R1bGUuZXhwb3J0cyA9IFF1YWRCdWZmZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkYxWVdRdFluVm1abVZ5TG1weklsMHNJbTVoYldWeklqcGJJazFsYzJoQ2RXWm1aWElpTENKeVpYRjFhWEpsSWl3aVVYVmhaRUoxWm1abGNpSXNJbU5qSWl3aVEyeGhjM01pTENKdVlXMWxJaXdpWlhoMFpXNWtjeUlzSWw5bWFXeHNVWFZoWkVKMVptWmxjaUlzSW1OdmRXNTBJaXdpWDJsdWFYUkpSR0YwWVVOdmRXNTBJaXdpWW5WbVptVnlJaXdpWDJsRVlYUmhJaXdpYVNJc0ltbGtlQ0lzSW5abGNuUmxlSFJKUkNJc0ltbHVaR2xqWlhORVlYUmhJaXdpVldsdWRERTJRWEp5WVhraUxDSmZhV0lpTENKMWNHUmhkR1VpTENKMWNHeHZZV1JFWVhSaElpd2lZbmwwWlU5bVpuTmxkQ0lzSWw5a2FYSjBlU0lzSW5abGNuUmxlSE5FWVhSaElpd2lSbXh2WVhRek1rRnljbUY1SWl3aVgzWkVZWFJoSWl3aVgzWmlJaXdpYzNkcGRHTm9RblZtWm1WeUlpd2lYM04xY0dWeUlpd2lhVzVrYVdObFQyWm1jMlYwSWl3aVgzSmxZV3hzYjJOQ2RXWm1aWElpTENKZmNtVmhiR3h2WTFaRVlYUmhJaXdpWDNKbFlXeHNiMk5KUkdGMFlTSXNJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUY1UWtFc1NVRkJUVUVzWVVGQllVTXNVVUZCVVN4bFFVRlNMRU5CUVc1Q096dEJRVVZCTEVsQlFVbERMR0ZCUVdGRExFZEJRVWRETEV0QlFVZ3NRMEZCVXp0QlFVTjBRa01zVlVGQlRTeGxRVVJuUWp0QlFVVjBRa01zWVVGQlUwNHNWVUZHWVRzN1FVRkpkRUpQTEcxQ1FVcHpRaXcyUWtGSlNEdEJRVU5tTEZsQlFVbERMRkZCUVZFc1MwRkJTME1zWlVGQlRDeEhRVUYxUWl4RFFVRnVRenRCUVVOQkxGbEJRVWxETEZOQlFWTXNTMEZCUzBNc1RVRkJiRUk3UVVGRFFTeGhRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJVaXhGUVVGWFF5eE5RVUZOTEVOQlFYUkNMRVZCUVhsQ1JDeEpRVUZKU2l4TFFVRTNRaXhGUVVGdlEwa3NSMEZCY0VNc1JVRkJlVU03UVVGRGNrTXNaMEpCUVVsRkxGbEJRVmxHTEVsQlFVa3NRMEZCY0VJN1FVRkRRVVlzYlVKQlFVOUhMRXRCUVZBc1NVRkJaMEpETEZOQlFXaENPMEZCUTBGS0xHMUNRVUZQUnl4TFFVRlFMRWxCUVdkQ1F5eFpRVUZWTEVOQlFURkNPMEZCUTBGS0xHMUNRVUZQUnl4TFFVRlFMRWxCUVdkQ1F5eFpRVUZWTEVOQlFURkNPMEZCUTBGS0xHMUNRVUZQUnl4TFFVRlFMRWxCUVdkQ1F5eFpRVUZWTEVOQlFURkNPMEZCUTBGS0xHMUNRVUZQUnl4TFFVRlFMRWxCUVdkQ1F5eFpRVUZWTEVOQlFURkNPMEZCUTBGS0xHMUNRVUZQUnl4TFFVRlFMRWxCUVdkQ1F5eFpRVUZWTEVOQlFURkNPMEZCUTBnN08wRkJSVVFzV1VGQlNVTXNZMEZCWXl4SlFVRkpReXhYUVVGS0xFTkJRV2RDTEV0QlFVdE1MRTFCUVV3c1EwRkJXVVFzVFVGQk5VSXNSVUZCYjBNc1EwRkJjRU1zUlVGQmRVTkdMRkZCUVZFc1EwRkJMME1zUTBGQmJFSTdRVUZEUVN4aFFVRkxVeXhIUVVGTUxFTkJRVk5ETEUxQlFWUXNRMEZCWjBJc1EwRkJhRUlzUlVGQmJVSklMRmRCUVc1Q08wRkJRMGdzUzBGdVFuRkNPMEZCY1VKMFFra3NZMEZ5UW5OQ0xIZENRWEZDVWp0QlFVTldMRmxCUVVrc1MwRkJTME1zVlVGQlRDeExRVUZ2UWl4RFFVRndRaXhKUVVGNVFpeERRVUZETEV0QlFVdERMRTFCUVc1RExFVkJRVEpETzBGQlEzWkRPMEZCUTBnN08wRkJSVVE3UVVGRFFTeFpRVUZKUXl4alFVRmpMRWxCUVVsRExGbEJRVW9zUTBGQmFVSXNTMEZCUzBNc1RVRkJUQ3hEUVVGWlpDeE5RVUUzUWl4RlFVRnhReXhEUVVGeVF5eEZRVUYzUXl4TFFVRkxWU3hWUVVGTUxFbEJRVzFDTEVOQlFUTkVMRU5CUVd4Q08wRkJRMEVzWVVGQlMwc3NSMEZCVEN4RFFVRlRVQ3hOUVVGVUxFTkJRV2RDTEVOQlFXaENMRVZCUVcxQ1NTeFhRVUZ1UWpzN1FVRkZRU3hoUVVGTFJDeE5RVUZNTEVkQlFXTXNTMEZCWkR0QlFVTklMRXRCTDBKeFFqdEJRV2xEZEVKTExHZENRV3BEYzBJc01FSkJhVU5PTzBGQlExb3NZVUZCUzBNc1RVRkJURHRCUVVOQk8wRkJRMEVzV1VGQlNTeExRVUZMUXl4WlFVRk1MRWRCUVc5Q0xFTkJRWGhDTEVWQlFUSkNPMEZCUTNaQ0xHZENRVUZKWWl4alFVRmpMRWxCUVVsRExGZEJRVW9zUTBGQlowSXNTMEZCUzB3c1RVRkJUQ3hEUVVGWlJDeE5RVUUxUWl4RlFVRnZReXhEUVVGd1F5eEZRVUYxUXl4TFFVRkxhMElzV1VGQk5VTXNRMEZCYkVJN1FVRkRRU3hwUWtGQlMxZ3NSMEZCVEN4RFFVRlRReXhOUVVGVUxFTkJRV2RDTEVOQlFXaENMRVZCUVcxQ1NDeFhRVUZ1UWp0QlFVTklPMEZCUTBvc1MwRjRRM0ZDTzBGQk1FTjBRbU1zYTBKQk1VTnpRaXcwUWtFd1EwbzdRVUZEWkN4aFFVRkxReXhoUVVGTUxFTkJRVzFDTEVsQlFXNUNPMEZCUTBFc1lVRkJTME1zWVVGQlREdEJRVU5CTEdGQlFVdDRRaXhsUVVGTU8wRkJRMGc3UVVFNVEzRkNMRU5CUVZRc1EwRkJha0k3TzBGQmFVUkJTaXhIUVVGSFJDeFZRVUZJTEVkQlFXZENPRUlzVDBGQlQwTXNUMEZCVUN4SFFVRnBRaTlDTEZWQlFXcERJaXdpWm1sc1pTSTZJbkYxWVdRdFluVm1abVZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQkRiM0I1Y21sbmFIUWdLR01wSURJd01UY3RNakF4T0NCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNWNibHh1SUdoMGRIQnpPaTh2ZDNkM0xtTnZZMjl6TG1OdmJTOWNibHh1SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoSUdOdmNIbGNiaUJ2WmlCMGFHbHpJSE52Wm5SM1lYSmxJR0Z1WkNCaGMzTnZZMmxoZEdWa0lHVnVaMmx1WlNCemIzVnlZMlVnWTI5a1pTQW9kR2hsSUZ3aVUyOW1kSGRoY21WY0lpa3NJR0VnYkdsdGFYUmxaQ3hjYmlCM2IzSnNaSGRwWkdVc0lISnZlV0ZzZEhrdFpuSmxaU3dnYm05dUxXRnpjMmxuYm1GaWJHVXNJSEpsZG05allXSnNaU0JoYm1RZ2JtOXVMV1Y0WTJ4MWMybDJaU0JzYVdObGJuTmxYRzRnZEc4Z2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOXNaV3g1SUhSdklHUmxkbVZzYjNBZ1oyRnRaWE1nYjI0Z2VXOTFjaUIwWVhKblpYUWdjR3hoZEdadmNtMXpMaUJaYjNVZ2MyaGhiR3hjYmlCdWIzUWdkWE5sSUVOdlkyOXpJRU55WldGMGIzSWdjMjltZEhkaGNtVWdabTl5SUdSbGRtVnNiM0JwYm1jZ2IzUm9aWElnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nZEdoaGRDZHpYRzRnZFhObFpDQm1iM0lnWkdWMlpXeHZjR2x1WnlCbllXMWxjeTRnV1c5MUlHRnlaU0J1YjNRZ1ozSmhiblJsWkNCMGJ5QndkV0pzYVhOb0xDQmthWE4wY21saWRYUmxMRnh1SUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNJR052Y0dsbGN5QnZaaUJEYjJOdmN5QkRjbVZoZEc5eUxseHVYRzRnVkdobElITnZablIzWVhKbElHOXlJSFJ2YjJ4eklHbHVJSFJvYVhNZ1RHbGpaVzV6WlNCQlozSmxaVzFsYm5RZ1lYSmxJR3hwWTJWdWMyVmtMQ0J1YjNRZ2MyOXNaQzVjYmlCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNGdjbVZ6WlhKMlpYTWdZV3hzSUhKcFoyaDBjeUJ1YjNRZ1pYaHdjbVZ6YzJ4NUlHZHlZVzUwWldRZ2RHOGdlVzkxTGx4dVhHNGdWRWhGSUZOUFJsUlhRVkpGSUVsVElGQlNUMVpKUkVWRUlGd2lRVk1nU1ZOY0lpd2dWMGxVU0U5VlZDQlhRVkpTUVU1VVdTQlBSaUJCVGxrZ1MwbE9SQ3dnUlZoUVVrVlRVeUJQVWx4dUlFbE5VRXhKUlVRc0lFbE9RMHhWUkVsT1J5QkNWVlFnVGs5VUlFeEpUVWxVUlVRZ1ZFOGdWRWhGSUZkQlVsSkJUbFJKUlZNZ1QwWWdUVVZTUTBoQlRsUkJRa2xNU1ZSWkxGeHVJRVpKVkU1RlUxTWdSazlTSUVFZ1VFRlNWRWxEVlV4QlVpQlFWVkpRVDFORklFRk9SQ0JPVDA1SlRrWlNTVTVIUlUxRlRsUXVJRWxPSUU1UElFVldSVTVVSUZOSVFVeE1JRlJJUlZ4dUlFRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc0lFUkJUVUZIUlZNZ1QxSWdUMVJJUlZKY2JpQk1TVUZDU1V4SlZGa3NJRmRJUlZSSVJWSWdTVTRnUVU0Z1FVTlVTVTlPSUU5R0lFTlBUbFJTUVVOVUxDQlVUMUpVSUU5U0lFOVVTRVZTVjBsVFJTd2dRVkpKVTBsT1J5QkdVazlOTEZ4dUlFOVZWQ0JQUmlCUFVpQkpUaUJEVDA1T1JVTlVTVTlPSUZkSlZFZ2dWRWhGSUZOUFJsUlhRVkpGSUU5U0lGUklSU0JWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNWNiaUJVU0VVZ1UwOUdWRmRCVWtVdVhHNGdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2k5Y2JseHVZMjl1YzNRZ1RXVnphRUoxWm1abGNpQTlJSEpsY1hWcGNtVW9KeTR2YldWemFDMWlkV1ptWlhJbktUdGNibHh1YkdWMElGRjFZV1JDZFdabVpYSWdQU0JqWXk1RGJHRnpjeWg3WEc0Z0lDQWdibUZ0WlRvZ0oyTmpMbEYxWVdSQ2RXWm1aWEluTEZ4dUlDQWdJR1Y0ZEdWdVpITTZJRTFsYzJoQ2RXWm1aWElzWEc0Z0lDQWdYRzRnSUNBZ1gyWnBiR3hSZFdGa1FuVm1abVZ5SUNncElIdGNiaUFnSUNBZ0lDQWdiR1YwSUdOdmRXNTBJRDBnZEdocGN5NWZhVzVwZEVsRVlYUmhRMjkxYm5RZ0x5QTJPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1luVm1abVZ5SUQwZ2RHaHBjeTVmYVVSaGRHRTdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd0xDQnBaSGdnUFNBd095QnBJRHdnWTI5MWJuUTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIWmxjblJsZUhSSlJDQTlJR2tnS2lBME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5WbVptVnlXMmxrZUNzclhTQTlJSFpsY25SbGVIUkpSRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFabVpsY2x0cFpIZ3JLMTBnUFNCMlpYSjBaWGgwU1VRck1UdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKMVptWmxjbHRwWkhncksxMGdQU0IyWlhKMFpYaDBTVVFyTWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0oxWm1abGNsdHBaSGdySzEwZ1BTQjJaWEowWlhoMFNVUXJNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFabVpsY2x0cFpIZ3JLMTBnUFNCMlpYSjBaWGgwU1VRck16dGNiaUFnSUNBZ0lDQWdJQ0FnSUdKMVptWmxjbHRwWkhncksxMGdQU0IyWlhKMFpYaDBTVVFyTWp0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR3hsZENCcGJtUnBZMlZ6UkdGMFlTQTlJRzVsZHlCVmFXNTBNVFpCY25KaGVTaDBhR2x6TGw5cFJHRjBZUzVpZFdabVpYSXNJREFzSUdOdmRXNTBJQ29nTmlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDJsaUxuVndaR0YwWlNnd0xDQnBibVJwWTJWelJHRjBZU2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSFZ3Ykc5aFpFUmhkR0VnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWllWFJsVDJabWMyVjBJRDA5UFNBd0lIeDhJQ0YwYUdsekxsOWthWEowZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdkWEJrWVhSbElIWmxjblJsZUhRZ1pHRjBZVnh1SUNBZ0lDQWdJQ0JzWlhRZ2RtVnlkR1Y0YzBSaGRHRWdQU0J1WlhjZ1JteHZZWFF6TWtGeWNtRjVLSFJvYVhNdVgzWkVZWFJoTG1KMVptWmxjaXdnTUN3Z2RHaHBjeTVpZVhSbFQyWm1jMlYwSUQ0K0lESXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOTJZaTUxY0dSaGRHVW9NQ3dnZG1WeWRHVjRjMFJoZEdFcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyUnBjblI1SUQwZ1ptRnNjMlU3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE4zYVhSamFFSjFabVpsY2lBb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzTjFjR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lDOHZJSFZ3Ykc5aFpDQnBibVJsZUNCaWRXWm1aWElnWkdGMFlWeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXBibVJwWTJWUFptWnpaWFFnUGlBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhVzVrYVdObGMwUmhkR0VnUFNCdVpYY2dWV2x1ZERFMlFYSnlZWGtvZEdocGN5NWZhVVJoZEdFdVluVm1abVZ5TENBd0xDQjBhR2x6TG1sdVpHbGpaVTltWm5ObGRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlwWWk1MWNHUmhkR1VvTUN3Z2FXNWthV05sYzBSaGRHRXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJRjl5WldGc2JHOWpRblZtWm1WeUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjbVZoYkd4dlkxWkVZWFJoS0hSeWRXVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOXlaV0ZzYkc5alNVUmhkR0VvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWm1sc2JGRjFZV1JDZFdabVpYSW9LVHRjYmlBZ0lDQjlYRzU5S1R0Y2JseHVZMk11VVhWaFpFSjFabVpsY2lBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1VYVmhaRUoxWm1abGNqdGNiaUpkZlE9PSJdfQ==