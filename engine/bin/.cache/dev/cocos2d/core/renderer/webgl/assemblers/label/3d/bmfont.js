(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/renderer/webgl/assemblers/label/3d/bmfont.js';
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
        var js = require('../../../../../platform/js');
        var assembler = require('../2d/bmfont');
        var fillMeshVertices3D = require('../../utils').fillMeshVertices3D;
        module.exports = js.addon({
            fillBuffers: function fillBuffers(comp, renderer) {
                var node = comp.node;
                fillMeshVertices3D(node, renderer._meshBuffer3D, comp._renderData, node._color._val);
            }
        }, assembler);
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJtZm9udC5qcyIsIi9Vc2Vycy96emYyMDE5L0Rlc2t0b3AvZGV2ZWxvcG1lbnQvc3VwcG9ydF9hc3RjL2VuZ2luZS9jb2NvczJkL2NvcmUvcmVuZGVyZXIvd2ViZ2wvYXNzZW1ibGVycy9sYWJlbC8zZC9ibWZvbnQuanMiXSwibmFtZXMiOlsianMiLCJyZXF1aXJlIiwiYXNzZW1ibGVyIiwiZmlsbE1lc2hWZXJ0aWNlczNEIiwibW9kdWxlIiwiZXhwb3J0cyIsImFkZG9uIiwiZmlsbEJ1ZmZlcnMiLCJjb21wIiwicmVuZGVyZXIiLCJub2RlIiwiX21lc2hCdWZmZXIzRCIsIl9yZW5kZXJEYXRhIiwiX2NvbG9yIiwiX3ZhbCJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBeUJBLElBQU1BLEVBQUFBLEdBQUtDLE9BQUFBLENBQVEsNEJBQVJBLENBQVg7UUFDQSxJQUFNQyxTQUFBQSxHQUFZRCxPQUFBQSxDQUFRLGNBQVJBLENBQWxCO1FBQ0EsSUFBTUUsa0JBQUFBLEdBQXFCRixPQUFBQSxDQUFRLGFBQVJBLEVBQXVCRSxrQkFBbEQ7UUFFQUMsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJKLEVBQUFBLENBQUdNLEtBQUhOLENBQVM7QUFBQSxZQUN0Qk8sV0FBQUEsRUFEc0IsU0FBQSxXQUFBLENBQ1RDLElBRFMsRUFDSEMsUUFERyxFQUNPO0FBQUEsZ0JBQ3pCLElBQUlDLElBQUFBLEdBQU9GLElBQUFBLENBQUtFLElBQWhCLENBRHlCO0FBQUEsZ0JBRXpCUCxrQkFBQUEsQ0FBbUJPLElBQW5CUCxFQUF5Qk0sUUFBQUEsQ0FBU0UsYUFBbENSLEVBQWlESyxJQUFBQSxDQUFLSSxXQUF0RFQsRUFBbUVPLElBQUFBLENBQUtHLE1BQUxILENBQVlJLElBQS9FWCxFQUZ5QjtBQUFBLGFBRFA7QUFBQSxTQUFUSCxFQUtkRSxTQUxjRixDQUFqQkkiLCJmaWxlIjoiYm1mb250LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcbiB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcbiBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXG4gdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxuIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxuXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QganMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybS9qcycpO1xuY29uc3QgYXNzZW1ibGVyID0gcmVxdWlyZSgnLi4vMmQvYm1mb250Jyk7XG5jb25zdCBmaWxsTWVzaFZlcnRpY2VzM0QgPSByZXF1aXJlKCcuLi8uLi91dGlscycpLmZpbGxNZXNoVmVydGljZXMzRDtcblxubW9kdWxlLmV4cG9ydHMgPSBqcy5hZGRvbih7XG4gICAgZmlsbEJ1ZmZlcnMgKGNvbXAsIHJlbmRlcmVyKSB7XG4gICAgICAgIGxldCBub2RlID0gY29tcC5ub2RlO1xuICAgICAgICBmaWxsTWVzaFZlcnRpY2VzM0Qobm9kZSwgcmVuZGVyZXIuX21lc2hCdWZmZXIzRCwgY29tcC5fcmVuZGVyRGF0YSwgbm9kZS5fY29sb3IuX3ZhbCk7XG4gICAgfSxcbn0sIGFzc2VtYmxlcik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXG5cbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXG4gd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXG4gbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xuIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcbiBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cblxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBqcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3BsYXRmb3JtL2pzJyk7XG52YXIgYXNzZW1ibGVyID0gcmVxdWlyZSgnLi4vMmQvYm1mb250Jyk7XG52YXIgZmlsbE1lc2hWZXJ0aWNlczNEID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMnKS5maWxsTWVzaFZlcnRpY2VzM0Q7XG5cbm1vZHVsZS5leHBvcnRzID0ganMuYWRkb24oe1xuICAgIGZpbGxCdWZmZXJzOiBmdW5jdGlvbiBmaWxsQnVmZmVycyhjb21wLCByZW5kZXJlcikge1xuICAgICAgICB2YXIgbm9kZSA9IGNvbXAubm9kZTtcbiAgICAgICAgZmlsbE1lc2hWZXJ0aWNlczNEKG5vZGUsIHJlbmRlcmVyLl9tZXNoQnVmZmVyM0QsIGNvbXAuX3JlbmRlckRhdGEsIG5vZGUuX2NvbG9yLl92YWwpO1xuICAgIH1cbn0sIGFzc2VtYmxlcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUp0Wm05dWRDNXFjeUpkTENKdVlXMWxjeUk2V3lKcWN5SXNJbkpsY1hWcGNtVWlMQ0poYzNObGJXSnNaWElpTENKbWFXeHNUV1Z6YUZabGNuUnBZMlZ6TTBRaUxDSnRiMlIxYkdVaUxDSmxlSEJ2Y25Seklpd2lZV1JrYjI0aUxDSm1hV3hzUW5WbVptVnljeUlzSW1OdmJYQWlMQ0p5Wlc1a1pYSmxjaUlzSW01dlpHVWlMQ0pmYldWemFFSjFabVpsY2pORUlpd2lYM0psYm1SbGNrUmhkR0VpTENKZlkyOXNiM0lpTENKZmRtRnNJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCZVVKQkxFbEJRVTFCTEV0QlFVdERMRkZCUVZFc05FSkJRVklzUTBGQldEdEJRVU5CTEVsQlFVMURMRmxCUVZsRUxGRkJRVkVzWTBGQlVpeERRVUZzUWp0QlFVTkJMRWxCUVUxRkxIRkNRVUZ4UWtZc1VVRkJVU3hoUVVGU0xFVkJRWFZDUlN4clFrRkJiRVE3TzBGQlJVRkRMRTlCUVU5RExFOUJRVkFzUjBGQmFVSk1MRWRCUVVkTkxFdEJRVWdzUTBGQlV6dEJRVU4wUWtNc1pVRkVjMElzZFVKQlExUkRMRWxCUkZNc1JVRkRTRU1zVVVGRVJ5eEZRVU5QTzBGQlEzcENMRmxCUVVsRExFOUJRVTlHTEV0QlFVdEZMRWxCUVdoQ08wRkJRMEZRTERKQ1FVRnRRazhzU1VGQmJrSXNSVUZCZVVKRUxGTkJRVk5GTEdGQlFXeERMRVZCUVdsRVNDeExRVUZMU1N4WFFVRjBSQ3hGUVVGdFJVWXNTMEZCUzBjc1RVRkJUQ3hEUVVGWlF5eEpRVUV2UlR0QlFVTklPMEZCU25GQ0xFTkJRVlFzUlVGTFpGb3NVMEZNWXl4RFFVRnFRaUlzSW1acGJHVWlPaUppYldadmJuUXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4dVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4dVhHNGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRWdZMjl3ZVZ4dUlHOW1JSFJvYVhNZ2MyOW1kSGRoY21VZ1lXNWtJR0Z6YzI5amFXRjBaV1FnWlc1bmFXNWxJSE52ZFhKalpTQmpiMlJsSUNoMGFHVWdYQ0pUYjJaMGQyRnlaVndpS1N3Z1lTQnNhVzFwZEdWa0xGeHVJSGR2Y214a2QybGtaU3dnY205NVlXeDBlUzFtY21WbExDQnViMjR0WVhOemFXZHVZV0pzWlN3Z2NtVjJiMk5oWW14bElHRnVaQ0J1YjI0dFpYaGpiSFZ6YVhabElHeHBZMlZ1YzJWY2JpQjBieUIxYzJVZ1EyOWpiM01nUTNKbFlYUnZjaUJ6YjJ4bGJIa2dkRzhnWkdWMlpXeHZjQ0JuWVcxbGN5QnZiaUI1YjNWeUlIUmhjbWRsZENCd2JHRjBabTl5YlhNdUlGbHZkU0J6YUdGc2JGeHVJRzV2ZENCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyWjBkMkZ5WlNCbWIzSWdaR1YyWld4dmNHbHVaeUJ2ZEdobGNpQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QjBhR0YwSjNOY2JpQjFjMlZrSUdadmNpQmtaWFpsYkc5d2FXNW5JR2RoYldWekxpQlpiM1VnWVhKbElHNXZkQ0JuY21GdWRHVmtJSFJ2SUhCMVlteHBjMmdzSUdScGMzUnlhV0oxZEdVc1hHNGdjM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlFTnZZMjl6SUVOeVpXRjBiM0l1WEc1Y2JpQlVhR1VnYzI5bWRIZGhjbVVnYjNJZ2RHOXZiSE1nYVc0Z2RHaHBjeUJNYVdObGJuTmxJRUZuY21WbGJXVnVkQ0JoY21VZ2JHbGpaVzV6WldRc0lHNXZkQ0J6YjJ4a0xseHVJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGlCeVpYTmxjblpsY3lCaGJHd2djbWxuYUhSeklHNXZkQ0JsZUhCeVpYTnpiSGtnWjNKaGJuUmxaQ0IwYnlCNWIzVXVYRzVjYmlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVElFOVNYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh1SUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4dUlGUklSU0JUVDBaVVYwRlNSUzVjYmlBcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FMMXh1WEc1amIyNXpkQ0JxY3lBOUlISmxjWFZwY21Vb0p5NHVMeTR1THk0dUx5NHVMeTR1TDNCc1lYUm1iM0p0TDJwekp5azdYRzVqYjI1emRDQmhjM05sYldKc1pYSWdQU0J5WlhGMWFYSmxLQ2N1TGk4eVpDOWliV1p2Ym5RbktUdGNibU52Ym5OMElHWnBiR3hOWlhOb1ZtVnlkR2xqWlhNelJDQTlJSEpsY1hWcGNtVW9KeTR1THk0dUwzVjBhV3h6SnlrdVptbHNiRTFsYzJoV1pYSjBhV05sY3pORU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR3B6TG1Ga1pHOXVLSHRjYmlBZ0lDQm1hV3hzUW5WbVptVnljeUFvWTI5dGNDd2djbVZ1WkdWeVpYSXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHNXZaR1VnUFNCamIyMXdMbTV2WkdVN1hHNGdJQ0FnSUNBZ0lHWnBiR3hOWlhOb1ZtVnlkR2xqWlhNelJDaHViMlJsTENCeVpXNWtaWEpsY2k1ZmJXVnphRUoxWm1abGNqTkVMQ0JqYjIxd0xsOXlaVzVrWlhKRVlYUmhMQ0J1YjJSbExsOWpiMnh2Y2k1ZmRtRnNLVHRjYmlBZ0lDQjlMRnh1ZlN3Z1lYTnpaVzFpYkdWeUtUdGNiaUpkZlE9PSJdfQ==