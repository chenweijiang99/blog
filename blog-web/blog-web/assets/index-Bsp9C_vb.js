import{s as T,n as J,d as se,c as re,l as ae,e as oe,h as ce,m as he}from"./index-05qZtuZM.js";import{g as G}from"./dict-Dpqj6rjX.js";import{u as le}from"./file-Dx1FRdn-.js";function pe(){return T({url:"/sys/user/profile",method:"get"})}function K(h){return T({url:"/protal/user/updateProfile",method:"put",data:h})}function ue(h){return T({url:"/sys/user/updatePwd",method:"put",data:h})}function de(h){return T({url:"/protal/user/comment",method:"get",params:h})}function Z(h){return T({url:`/protal/user/delMyComment/${h}`,method:"delete"})}function ge(h){return T({url:"/protal/user/myReply",method:"get",params:h})}function me(h){return T({url:"/protal/user/myLike",method:"get",params:h})}function fe(h){return T({url:"/protal/user/myFeedback",method:"get",params:h})}function Ae(h){return T({url:"/protal/user/addFeedback",method:"post",data:h})}function ve(){return T({url:"/sign/",method:"get"})}function we(){return T({url:"/sign/isSignedToday",method:"get"})}function xe(){return T({url:"/sign/getSignDays",method:"get"})}var ee={exports:{}};(function(h,n){(function(i,o){h.exports=o()})(self,()=>(()=>{var i={750:(x,g,m)=>{m.d(g,{A:()=>E});var y=m(354),O=m.n(y),H=m(314),C=m.n(H),W=m(417),M=m.n(W),I=new URL(m(107),m.b),_=C()(O()),B=M()(I);_.push([x.id,`
.vue-cropper[data-v-01ee97ad] {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  direction: ltr;
  touch-action: none;
  text-align: left;
  background-image: url(${B});
}
.cropper-box[data-v-01ee97ad],
.cropper-box-canvas[data-v-01ee97ad],
.cropper-drag-box[data-v-01ee97ad],
.cropper-crop-box[data-v-01ee97ad],
.cropper-face[data-v-01ee97ad] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
}
.cropper-box-canvas img[data-v-01ee97ad] {
  position: relative;
  text-align: left;
  user-select: none;
  transform: none;
  max-width: none;
  max-height: none;
}
.cropper-box[data-v-01ee97ad] {
  overflow: hidden;
}
.cropper-move[data-v-01ee97ad] {
  cursor: move;
}
.cropper-crop[data-v-01ee97ad] {
  cursor: crosshair;
}
.cropper-modal[data-v-01ee97ad] {
  background: rgba(0, 0, 0, 0.5);
}
.cropper-crop-box[data-v-01ee97ad] {
  /*border: 2px solid #39f;*/
}
.cropper-view-box[data-v-01ee97ad] {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  user-select: none;
}
.cropper-view-box img[data-v-01ee97ad] {
  user-select: none;
  text-align: left;
  max-width: none;
  max-height: none;
}
.cropper-face[data-v-01ee97ad] {
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.1;
}
.crop-info[data-v-01ee97ad] {
  position: absolute;
  left: 0px;
  min-width: 65px;
  text-align: center;
  color: white;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
}
.crop-line[data-v-01ee97ad] {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}
.line-w[data-v-01ee97ad] {
  top: -3px;
  left: 0;
  height: 5px;
  cursor: n-resize;
}
.line-a[data-v-01ee97ad] {
  top: 0;
  left: -3px;
  width: 5px;
  cursor: w-resize;
}
.line-s[data-v-01ee97ad] {
  bottom: -3px;
  left: 0;
  height: 5px;
  cursor: s-resize;
}
.line-d[data-v-01ee97ad] {
  top: 0;
  right: -3px;
  width: 5px;
  cursor: e-resize;
}
.crop-point[data-v-01ee97ad] {
  position: absolute;
  width: 8px;
  height: 8px;
  opacity: 0.75;
  background-color: #39f;
  border-radius: 100%;
}
.point1[data-v-01ee97ad] {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}
.point2[data-v-01ee97ad] {
  top: -5px;
  left: 50%;
  margin-left: -3px;
  cursor: n-resize;
}
.point3[data-v-01ee97ad] {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}
.point4[data-v-01ee97ad] {
  top: 50%;
  left: -4px;
  margin-top: -3px;
  cursor: w-resize;
}
.point5[data-v-01ee97ad] {
  top: 50%;
  right: -4px;
  margin-top: -3px;
  cursor: e-resize;
}
.point6[data-v-01ee97ad] {
  bottom: -5px;
  left: -4px;
  cursor: sw-resize;
}
.point7[data-v-01ee97ad] {
  bottom: -5px;
  left: 50%;
  margin-left: -3px;
  cursor: s-resize;
}
.point8[data-v-01ee97ad] {
  bottom: -5px;
  right: -4px;
  cursor: se-resize;
}
@media screen and (max-width: 500px) {
.crop-point[data-v-01ee97ad] {
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0.45;
    background-color: #39f;
    border-radius: 100%;
}
.point1[data-v-01ee97ad] {
    top: -10px;
    left: -10px;
}
.point2[data-v-01ee97ad],
  .point4[data-v-01ee97ad],
  .point5[data-v-01ee97ad],
  .point7[data-v-01ee97ad] {
    display: none;
}
.point3[data-v-01ee97ad] {
    top: -10px;
    right: -10px;
}
.point4[data-v-01ee97ad] {
    top: 0;
    left: 0;
}
.point6[data-v-01ee97ad] {
    bottom: -10px;
    left: -10px;
}
.point8[data-v-01ee97ad] {
    bottom: -10px;
    right: -10px;
}
}
`,"",{version:3,sources:["webpack://./src/vue-cropper.vue"],names:[],mappings:";AA6+DA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,iBAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,yDAAA;AACA;AAEA;;;;;EAKA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,iBAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,8BAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,uCAAA;EACA,iBAAA;AACA;AAEA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AACA;AAEA;EACA,MAAA;EACA,OAAA;EACA,sBAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,SAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,oCAAA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AACA;AAEA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,gBAAA;AACA;AAEA;EACA,MAAA;EACA,UAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,OAAA;EACA,WAAA;EACA,gBAAA;AACA;AAEA;EACA,MAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACA;AAEA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;AACA;AAEA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;AACA;AAEA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;AACA;AAEA;EACA,QAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;AACA;AAEA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;AACA;AAEA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;AACA;AAEA;AACA;IACA,kBAAA;IACA,WAAA;IACA,YAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;AACA;AAEA;IACA,UAAA;IACA,WAAA;AACA;AAEA;;;;IAIA,aAAA;AACA;AAEA;IACA,UAAA;IACA,YAAA;AACA;AAEA;IACA,MAAA;IACA,OAAA;AACA;AAEA;IACA,aAAA;IACA,WAAA;AACA;AAEA;IACA,aAAA;IACA,YAAA;AACA;AACA",sourcesContent:[`<template>
  <div class="vue-cropper" ref="cropper" @mouseover="scaleImg" @mouseout="cancelScale">
    <div class="cropper-box" v-if="imgs">
      <div
        class="cropper-box-canvas"
        v-show="!loading"
        :style="{
					'width': trueWidth + 'px',
					'height': trueHeight + 'px',
					'transform': 'scale(' + scale + ',' + scale + ') ' + 'translate3d('+ x / scale + 'px,' + y / scale + 'px,' + '0)'
					+ 'rotateZ('+ rotate * 90 +'deg)'
					}"
      >
        <img :src="imgs" alt="cropper-img" ref="cropperImg">
      </div>
    </div>
    <div
      class="cropper-drag-box"
      :class="{'cropper-move': move && !crop, 'cropper-crop': crop, 'cropper-modal': cropping}"
      @mousedown="startMove"
      @touchstart="startMove"
    ></div>
    <div
      v-show="cropping"
      class="cropper-crop-box"
      :style="{
					'width': cropW + 'px',
					'height': cropH + 'px',
					'transform': 'translate3d('+ cropOffsertX + 'px,' + cropOffsertY + 'px,' + '0)'
				}"
    >
      <span class="cropper-view-box">
        <img
          :style="{
						'width': trueWidth + 'px',
						'height': trueHeight + 'px',
						'transform': 'scale(' + scale + ',' + scale + ') ' + 'translate3d('+ (x - cropOffsertX) / scale  + 'px,' + (y - cropOffsertY) / scale + 'px,' + '0)'
						+ 'rotateZ('+ rotate * 90 +'deg)'
						}"
          :src="imgs"
          alt="cropper-img"
        >
      </span>
      <span class="cropper-face cropper-move" @mousedown="cropMove" @touchstart="cropMove"></span>
      <span
        class="crop-info"
        v-if="info"
        :style="{'top': cropInfo.top}"
      >{{ cropInfo.width }} × {{ cropInfo.height }}</span>
      <span v-if="!fixedBox">
        <span
          class="crop-line line-w"
          @mousedown="changeCropSize($event, false, true, 0, 1)"
          @touchstart="changeCropSize($event, false, true, 0, 1)"
        ></span>
        <span
          class="crop-line line-a"
          @mousedown="changeCropSize($event, true, false, 1, 0)"
          @touchstart="changeCropSize($event, true, false, 1, 0)"
        ></span>
        <span
          class="crop-line line-s"
          @mousedown="changeCropSize($event, false, true, 0, 2)"
          @touchstart="changeCropSize($event, false, true, 0, 2)"
        ></span>
        <span
          class="crop-line line-d"
          @mousedown="changeCropSize($event, true, false, 2, 0)"
          @touchstart="changeCropSize($event, true, false, 2, 0)"
        ></span>
        <span
          class="crop-point point1"
          @mousedown="changeCropSize($event, true, true, 1, 1)"
          @touchstart="changeCropSize($event, true, true, 1, 1)"
        ></span>
        <span
          class="crop-point point2"
          @mousedown="changeCropSize($event, false, true, 0, 1)"
          @touchstart="changeCropSize($event, false, true, 0, 1)"
        ></span>
        <span
          class="crop-point point3"
          @mousedown="changeCropSize($event, true, true, 2, 1)"
          @touchstart="changeCropSize($event, true, true, 2, 1)"
        ></span>
        <span
          class="crop-point point4"
          @mousedown="changeCropSize($event, true, false, 1, 0)"
          @touchstart="changeCropSize($event, true, false, 1, 0)"
        ></span>
        <span
          class="crop-point point5"
          @mousedown="changeCropSize($event, true, false, 2, 0)"
          @touchstart="changeCropSize($event, true, false, 2, 0)"
        ></span>
        <span
          class="crop-point point6"
          @mousedown="changeCropSize($event, true, true, 1, 2)"
          @touchstart="changeCropSize($event, true, true, 1, 2)"
        ></span>
        <span
          class="crop-point point7"
          @mousedown="changeCropSize($event, false, true, 0, 2)"
          @touchstart="changeCropSize($event, false, true, 0, 2)"
        ></span>
        <span
          class="crop-point point8"
          @mousedown="changeCropSize($event, true, true, 2, 2)"
          @touchstart="changeCropSize($event, true, true, 2, 2)"
        ></span>
      </span>
    </div>
  </div>
</template>

<script>
import exifmin from "./exif-js-min";

export default {
  data: function() {
    return {
      // 容器高宽
      w: 0,
      h: 0,
      // 图片缩放比例
      scale: 1,
      // 图片偏移x轴
      x: 0,
      // 图片偏移y轴
      y: 0,
      // 图片加载
      loading: true,
      // 图片真实宽度
      trueWidth: 0,
      // 图片真实高度
      trueHeight: 0,
      move: true,
      // 移动的x
      moveX: 0,
      // 移动的y
      moveY: 0,
      // 开启截图
      crop: false,
      // 正在截图
      cropping: false,
      // 裁剪框大小
      cropW: 0,
      cropH: 0,
      cropOldW: 0,
      cropOldH: 0,
      // 判断是否能够改变
      canChangeX: false,
      canChangeY: false,
      // 改变的基准点
      changeCropTypeX: 1,
      changeCropTypeY: 1,
      // 裁剪框的坐标轴
      cropX: 0,
      cropY: 0,
      cropChangeX: 0,
      cropChangeY: 0,
      cropOffsertX: 0,
      cropOffsertY: 0,
      // 支持的滚动事件
      support: "",
      // 移动端手指缩放
      touches: [],
      touchNow: false,
      // 图片旋转
      rotate: 0,
      isIos: false,
      orientation: 0,
      imgs: "",
      // 图片缩放系数
      coe: 0.2,
      // 是否正在多次缩放
      scaling: false,
      scalingSet: "",
      coeStatus: "",
      // 控制emit触发频率
      isCanShow: true,
      // 图片是否等于截图大小
      imgIsQqualCrop: false
    };
  },
  props: {
    img: {
      type: [String, Blob, null, File],
      default: ""
    },
    // 输出图片压缩比
    outputSize: {
      type: Number,
      default: 1
    },
    outputType: {
      type: String,
      default: "jpeg"
    },
    info: {
      type: Boolean,
      default: true
    },
    // 是否开启滚轮放大缩小
    canScale: {
      type: Boolean,
      default: true
    },
    // 是否自成截图框
    autoCrop: {
      type: Boolean,
      default: false
    },
    autoCropWidth: {
      type: [Number, String],
      default: 0
    },
    autoCropHeight: {
      type: [Number, String],
      default: 0
    },
    // 是否开启固定宽高比
    fixed: {
      type: Boolean,
      default: false
    },
    // 宽高比 w/h
    fixedNumber: {
      type: Array,
      default: () => {
        return [1, 1];
      }
    },
    // 固定大小 禁止改变截图框大小
    fixedBox: {
      type: Boolean,
      default: false
    },
    // 输出截图是否缩放
    full: {
      type: Boolean,
      default: false
    },
    // 是否可以拖动图片
    canMove: {
      type: Boolean,
      default: true
    },
    // 是否可以拖动截图框
    canMoveBox: {
      type: Boolean,
      default: true
    },
    // 上传图片按照原始比例显示
    original: {
      type: Boolean,
      default: false
    },
    // 截图框能否超过图片
    centerBox: {
      type: Boolean,
      default: false
    },
    // 是否根据dpr输出高清图片
    high: {
      type: Boolean,
      default: true
    },
    // 截图框展示宽高类型
    infoTrue: {
      type: Boolean,
      default: false
    },
    // 可以压缩图片宽高  默认不超过200
    maxImgSize: {
      type: [Number, String],
      default: 2000
    },
    // 倍数  可渲染当前截图框的n倍 0 - 1000;
    enlarge: {
      type: [Number, String],
      default: 1
    },

    // 自动预览的固定宽度
    preW: {
      type: [Number, String],
      default: 0
    },
    /*
      图片布局方式 mode 实现和css背景一样的效果
      contain  居中布局 默认不会缩放 保证图片在容器里面 mode: 'contain'
      cover    拉伸布局 填充整个容器  mode: 'cover'
      如果仅有一个数值被给定，这个数值将作为宽度值大小，高度值将被设定为auto。 mode: '50px'
      如果有两个数值被给定，第一个将作为宽度值大小，第二个作为高度值大小。 mode: '50px 60px'
    */
    mode: {
      type: String,
      default: "contain"
    },
    //限制最小区域,可传1以上的数字和字符串，限制长宽都是这么大
    // 也可以传数组[90,90] 
    limitMinSize: {
      type: [Number, Array, String],
      default: () => {
        return 10;
      },
      validator: function (value) {
        if (Array.isArray(value)) {
          return Number(value[0]) >= 0 && Number(value[1]) >= 0;
        } else {
          return Number(value) >= 0;
        }
      },
    },
    // 导出时,填充背景颜色
    fillColor: {
      type: String,
      default: "",
    },
  },
  computed: {
    cropInfo() {
      let obj = {};
      obj.top = this.cropOffsertY > 21 ? "-21px" : "0px";
      obj.width = this.cropW > 0 ? this.cropW : 0;
      obj.height = this.cropH > 0 ? this.cropH : 0;
      if (this.infoTrue) {
        let dpr = 1;
        if (this.high && !this.full) {
          dpr = window.devicePixelRatio;
        }
        if ((this.enlarge !== 1) & !this.full) {
          dpr = Math.abs(Number(this.enlarge));
        }
        obj.width = obj.width * dpr;
        obj.height = obj.height * dpr;
        if (this.full) {
          obj.width = obj.width / this.scale;
          obj.height = obj.height / this.scale;
        }
      }
      obj.width = obj.width.toFixed(0);
      obj.height = obj.height.toFixed(0);
      return obj;
    },

    isIE() {
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      const isIE = !!window.ActiveXObject || 'ActiveXObject' in window; //判断是否IE浏览器
      return isIE;
    },

    passive () {
      return this.isIE ? null : {
        passive: false
      }
    }
  },
  watch: {
    // 如果图片改变， 重新布局
    img() {
      // 当传入图片时, 读取图片信息同时展示
      this.checkedImg();
    },
    imgs(val) {
      if (val === "") {
        return;
      }
      this.reload();
    },
    cropW() {
      this.showPreview();
    },
    cropH() {
      this.showPreview();
    },
    cropOffsertX() {
      this.showPreview();
    },
    cropOffsertY() {
      this.showPreview();
    },
    scale(val, oldVal) {
      this.showPreview();
    },
    x() {
      this.showPreview();
    },
    y() {
      this.showPreview();
    },
    autoCrop(val) {
      if (val) {
        this.goAutoCrop();
      }
    },
    // 修改了自动截图框
    autoCropWidth() {
      if (this.autoCrop) {
        this.goAutoCrop();
      }
    },
    autoCropHeight() {
      if (this.autoCrop) {
        this.goAutoCrop();
      }
    },
    mode() {
      this.checkedImg();
    },
    rotate() {
      this.showPreview();
      if (this.autoCrop) {
        this.goAutoCrop(this.cropW, this.cropH);
      } else {
        if (this.cropW > 0 || this.cropH > 0) {
          this.goAutoCrop(this.cropW, this.cropH);
        }
      }
    }
  },
  methods: {
    getVersion (name) {
      var arr = navigator.userAgent.split(' '); 
      var chromeVersion = '';
      let result = 0;
      const reg = new RegExp(name, 'i')
      for(var i=0;i < arr.length;i++){
          if(reg.test(arr[i]))
          chromeVersion = arr[i]
      }
      if(chromeVersion){
          result = chromeVersion.split('/')[1].split('.');
      } else {
          result = ['0', '0', '0'];
      }
      return result
    },
    checkOrientationImage(img, orientation, width, height) {
      // 如果是 chrome内核版本在81 safari 在 605 以上不处理图片旋转
      // alert(navigator.userAgent)
      if (this.getVersion('chrome')[0] >= 81) {
        orientation = -1
      } else {
        if (this.getVersion('safari')[0] >= 605 ) {
          const safariVersion = this.getVersion('version')
          if (safariVersion[0] > 13 && safariVersion[1] > 1) {
              orientation = -1
          }
        } else {
          //  判断 ios 版本进行处理
         // 针对 ios 版本大于 13.4的系统不做图片旋转
         const isIos  = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
         if (isIos) {
           let version = isIos[1]
           version = version.split('_')
           if (version[0] > 13 ||  (version[0] >= 13 && version[1] >= 4)) {
             orientation = -1
           }
         }
        }
      }
      
      // alert(\`当前处理的orientation\${orientation}\`)
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      ctx.save();
      
      switch (orientation) {
        case 2:
          canvas.width = width;
          canvas.height = height;
          // horizontal flip
          ctx.translate(width, 0);
          ctx.scale(-1, 1);
          break;
        case 3:
          canvas.width = width;
          canvas.height = height;
          //180 graus
          ctx.translate(width / 2, height / 2);
          ctx.rotate((180 * Math.PI) / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        case 4:
          canvas.width = width;
          canvas.height = height;
          // vertical flip
          ctx.translate(0, height);
          ctx.scale(1, -1);
          break;
        case 5:
          // vertical flip + 90 rotate right
          canvas.height = width;
          canvas.width = height;
          ctx.rotate(0.5 * Math.PI);
          ctx.scale(1, -1);
          break;
        case 6:
          canvas.width = height;
          canvas.height = width;
          //90 graus
          ctx.translate(height / 2, width / 2);
          ctx.rotate((90 * Math.PI) / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        case 7:
          // horizontal flip + 90 rotate right
          canvas.height = width;
          canvas.width = height;
          ctx.rotate(0.5 * Math.PI);
          ctx.translate(width, -height);
          ctx.scale(-1, 1);
          break;
        case 8:
          canvas.height = width;
          canvas.width = height;
          //-90 graus
          ctx.translate(height / 2, width / 2);
          ctx.rotate((-90 * Math.PI) / 180);
          ctx.translate(-width / 2, -height / 2);
          break;
        default:
          canvas.width = width;
          canvas.height = height;
      }

      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();
      canvas.toBlob(
        blob => {
          let data = URL.createObjectURL(blob);
          URL.revokeObjectURL(this.imgs)
          this.imgs = data;
        },
        "image/" + this.outputType,
        1
      );
    },

    // checkout img
    checkedImg() {
      if (this.img === null || this.img === '') {
        this.imgs = ''
        this.clearCrop()
        return
      }
      this.loading = true;
      this.scale = 1;
      this.rotate = 0;
      this.clearCrop();
      let img = new Image();
      img.onload = () => {
        if (this.img === "") {
          this.$emit("imgLoad", "error");
          this.$emit("img-load", "error");
          this.$emit("img-load", new Error('图片不能为空'));
          return false;
        }

        let width = img.width;
        let height = img.height;
        exifmin.getData(img).then(data => {
          this.orientation = data.orientation || 1;
          let max = Number(this.maxImgSize);
          if (!this.orientation && (width < max) & (height < max)) {
            this.imgs = this.img;
            return;
          }

          if (width > max) {
            height = (height / width) * max;
            width = max;
          }

          if (height > max) {
            width = (width / height) * max;
            height = max;
          }
          this.checkOrientationImage(img, this.orientation, width, height);
        }).catch(error => {
          this.$emit("img-load", "error");
          this.$emit("img-load-error", error);
        });
      };

      img.onerror = () => {
        this.$emit("imgLoad", "error");
        this.$emit("img-load", "error");
        this.$emit("img-load-error", error);
      };

      // 判断如果不是base64图片 再添加crossOrigin属性，否则会导致iOS低版本(10.2)无法显示图片
      if (this.img.substr(0, 4) !== "data") {
        img.crossOrigin = "";
      }

      if (this.isIE) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
          var url = URL.createObjectURL(this.response);
          img.src = url;
        };
        xhr.open("GET", this.img, true);
        xhr.responseType = "blob";
        xhr.send();
      } else {
        img.src = this.img;
      }
    },
    // 当按下鼠标键
    startMove(e) {
      e.preventDefault();
      // 如果move 为true 表示当前可以拖动
      if (this.move && !this.crop) {
        if (!this.canMove) {
          return false;
        }
        // 开始移动
        this.moveX = ('clientX' in e ? e.clientX : e.touches[0].clientX) - this.x;
        this.moveY = ('clientY' in e ? e.clientY : e.touches[0].clientY) - this.y;
        if (e.touches) {
          window.addEventListener("touchmove", this.moveImg);
          window.addEventListener("touchend", this.leaveImg);
          if (e.touches.length == 2) {
            // 记录手指刚刚放上去
            this.touches = e.touches;
            window.addEventListener("touchmove", this.touchScale);
            window.addEventListener("touchend", this.cancelTouchScale);
          }
        } else {
          window.addEventListener("mousemove", this.moveImg);
          window.addEventListener("mouseup", this.leaveImg);
        }
        // 触发图片移动事件
        this.$emit("imgMoving", {
          moving: true,
          axis: this.getImgAxis()
        });
        this.$emit("img-moving", {
          moving: true,
          axis: this.getImgAxis()
        });
      } else {
        // 截图ing
        this.cropping = true;
        // 绑定截图事件
        window.addEventListener("mousemove", this.createCrop);
        window.addEventListener("mouseup", this.endCrop);
        window.addEventListener("touchmove", this.createCrop);
        window.addEventListener("touchend", this.endCrop);
        this.cropOffsertX = e.offsetX
          ? e.offsetX
          : e.touches[0].pageX - this.$refs.cropper.offsetLeft;
        this.cropOffsertY = e.offsetY
          ? e.offsetY
          : e.touches[0].pageY - this.$refs.cropper.offsetTop;
        this.cropX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
        this.cropY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
        this.cropChangeX = this.cropOffsertX;
        this.cropChangeY = this.cropOffsertY;
        this.cropW = 0;
        this.cropH = 0;
      }
    },

    // 移动端缩放
    touchScale(e) {
      e.preventDefault();
      let scale = this.scale;
      // 记录变化量
      // 第一根手指
      var oldTouch1 = {
        x: this.touches[0].clientX,
        y: this.touches[0].clientY
      };
      var newTouch1 = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
      // 第二根手指
      var oldTouch2 = {
        x: this.touches[1].clientX,
        y: this.touches[1].clientY
      };
      var newTouch2 = {
        x: e.touches[1].clientX,
        y: e.touches[1].clientY
      };
      var oldL = Math.sqrt(
        Math.pow(oldTouch1.x - oldTouch2.x, 2) +
          Math.pow(oldTouch1.y - oldTouch2.y, 2)
      );
      var newL = Math.sqrt(
        Math.pow(newTouch1.x - newTouch2.x, 2) +
          Math.pow(newTouch1.y - newTouch2.y, 2)
      );
      var cha = newL - oldL;
      // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
      // 1px - 0.2
      var coe = 1;
      coe =
        coe / this.trueWidth > coe / this.trueHeight
          ? coe / this.trueHeight
          : coe / this.trueWidth;
      coe = coe > 0.1 ? 0.1 : coe;
      var num = coe * cha;
      if (!this.touchNow) {
        this.touchNow = true;
        if (cha > 0) {
          scale += Math.abs(num);
        } else if (cha < 0) {
          scale > Math.abs(num) ? (scale -= Math.abs(num)) : scale;
        }
        this.touches = e.touches;
        setTimeout(() => {
          this.touchNow = false;
        }, 8);
        if (!this.checkoutImgAxis(this.x, this.y, scale)) {
          return false;
        }
        this.scale = scale;
      }
    },

    cancelTouchScale(e) {
      window.removeEventListener("touchmove", this.touchScale);
    },

    // 移动图片
    moveImg(e) {
      e.preventDefault();
      if (e.touches && e.touches.length === 2) {
        this.touches = e.touches;
        window.addEventListener("touchmove", this.touchScale);
        window.addEventListener("touchend", this.cancelTouchScale);
        window.removeEventListener("touchmove", this.moveImg);
        return false;
      }
      let nowX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      let nowY = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      let changeX, changeY;
      changeX = nowX - this.moveX;
      changeY = nowY - this.moveY;

      this.$nextTick(() => {
        if (this.centerBox) {
          let axis = this.getImgAxis(changeX, changeY, this.scale);
          let cropAxis = this.getCropAxis();
          let imgW = this.trueHeight * this.scale;
          let imgH = this.trueWidth * this.scale;
          let maxLeft, maxTop, maxRight, maxBottom;
          switch (this.rotate) {
            case 1:
            case -1:
            case 3:
            case -3:
              maxLeft =
                this.cropOffsertX -
                (this.trueWidth * (1 - this.scale)) / 2 +
                (imgW - imgH) / 2;
              maxTop =
                this.cropOffsertY -
                (this.trueHeight * (1 - this.scale)) / 2 +
                (imgH - imgW) / 2;
              maxRight = maxLeft - imgW + this.cropW;
              maxBottom = maxTop - imgH + this.cropH;
              break;
            default:
              maxLeft =
                this.cropOffsertX - (this.trueWidth * (1 - this.scale)) / 2;
              maxTop =
                this.cropOffsertY - (this.trueHeight * (1 - this.scale)) / 2;
              maxRight = maxLeft - imgH + this.cropW;
              maxBottom = maxTop - imgW + this.cropH;
              break;
          }

          // 图片左边 图片不能超过截图框
          if (axis.x1 >= cropAxis.x1) {
            changeX = maxLeft;
          }

          // 图片上边 图片不能超过截图框
          if (axis.y1 >= cropAxis.y1) {
            changeY = maxTop;
          }

          // 图片右边
          if (axis.x2 <= cropAxis.x2) {
            changeX = maxRight;
          }

          // 图片下边
          if (axis.y2 <= cropAxis.y2) {
            changeY = maxBottom;
          }
        }
        this.x = changeX;
        this.y = changeY;
        // 触发图片移动事件
        this.$emit("imgMoving", {
          moving: true,
          axis: this.getImgAxis()
        });
        this.$emit("img-moving", {
          moving: true,
          axis: this.getImgAxis()
        });
      });
    },
    // 移动图片结束
    leaveImg(e) {
      window.removeEventListener("mousemove", this.moveImg);
      window.removeEventListener("touchmove", this.moveImg);
      window.removeEventListener("mouseup", this.leaveImg);
      window.removeEventListener("touchend", this.leaveImg);
      // 触发图片移动事件
      this.$emit("imgMoving", {
        moving: false,
        axis: this.getImgAxis()
      });
      this.$emit("img-moving", {
        moving: false,
        axis: this.getImgAxis()
      });
    },
    // 缩放图片
    scaleImg() {
      if (this.canScale) {
        window.addEventListener(this.support, this.changeSize, this.passive);
      }
    },
    // 移出框
    cancelScale() {
      if (this.canScale) {
        window.removeEventListener(this.support, this.changeSize);
      }
    },
    // 改变大小函数
    changeSize(e) {
      e.preventDefault();
      let scale = this.scale;
      var change = e.deltaY || e.wheelDelta;
      // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
      var isFirefox = navigator.userAgent.indexOf("Firefox");
      change = isFirefox > 0 ? change * 30 : change;
      // 修复ie的滚动缩放
      if (this.isIE) {
        change = -change;
      }
      // 1px - 0.2
      var coe = this.coe;
      coe =
        coe / this.trueWidth > coe / this.trueHeight
          ? coe / this.trueHeight
          : coe / this.trueWidth;
      var num = coe * change;
      num < 0
        ? (scale += Math.abs(num))
        : scale > Math.abs(num)
        ? (scale -= Math.abs(num))
        : scale;
      // 延迟0.1s 每次放大大或者缩小的范围
      let status = num < 0 ? "add" : "reduce";
      if (status !== this.coeStatus) {
        this.coeStatus = status;
        this.coe = 0.2;
      }
      if (!this.scaling) {
        this.scalingSet = setTimeout(() => {
          this.scaling = false;
          this.coe = this.coe += 0.01;
        }, 50);
      }
      this.scaling = true;
      if (!this.checkoutImgAxis(this.x, this.y, scale)) {
        return false;
      }
      this.scale = scale;
    },

    // 修改图片大小函数
    changeScale(num) {
      let scale = this.scale;
      num = num || 1;
      var coe = 20;
      coe =
        coe / this.trueWidth > coe / this.trueHeight
          ? coe / this.trueHeight
          : coe / this.trueWidth;
      num = num * coe;
      num > 0
        ? (scale += Math.abs(num))
        : scale > Math.abs(num)
        ? (scale -= Math.abs(num))
        : scale;
      if (!this.checkoutImgAxis(this.x, this.y, scale)) {
        return false;
      }
      this.scale = scale;
    },
    // 创建截图框
    createCrop(e) {
      e.preventDefault();
      // 移动生成大小
      var nowX = 'clientX' in e ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      var nowY = 'clientY' in e ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      this.$nextTick(() => {
        var fw = nowX - this.cropX;
        var fh = nowY - this.cropY;
        if (fw > 0) {
          this.cropW =
            fw + this.cropChangeX > this.w ? this.w - this.cropChangeX : fw;
          this.cropOffsertX = this.cropChangeX;
        } else {
          this.cropW =
            this.w - this.cropChangeX + Math.abs(fw) > this.w
              ? this.cropChangeX
              : Math.abs(fw);
          this.cropOffsertX =
            this.cropChangeX + fw > 0 ? this.cropChangeX + fw : 0;
        }

        if (!this.fixed) {
          if (fh > 0) {
            this.cropH =
              fh + this.cropChangeY > this.h ? this.h - this.cropChangeY : fh;
            this.cropOffsertY = this.cropChangeY;
          } else {
            this.cropH =
              this.h - this.cropChangeY + Math.abs(fh) > this.h
                ? this.cropChangeY
                : Math.abs(fh);
            this.cropOffsertY =
              this.cropChangeY + fh > 0 ? this.cropChangeY + fh : 0;
          }
        } else {
          var fixedHeight =
            (this.cropW / this.fixedNumber[0]) * this.fixedNumber[1];
          if (fixedHeight + this.cropOffsertY > this.h) {
            this.cropH = this.h - this.cropOffsertY;
            this.cropW =
              (this.cropH / this.fixedNumber[1]) * this.fixedNumber[0];
            if (fw > 0) {
              this.cropOffsertX = this.cropChangeX;
            } else {
              this.cropOffsertX = this.cropChangeX - this.cropW;
            }
          } else {
            this.cropH = fixedHeight;
          }
          this.cropOffsertY = this.cropOffsertY;
        }
      });
    },

    // 改变截图框大小
    changeCropSize(e, w, h, typeW, typeH) {
      e.preventDefault();
      window.addEventListener("mousemove", this.changeCropNow);
      window.addEventListener("mouseup", this.changeCropEnd);
      window.addEventListener("touchmove", this.changeCropNow);
      window.addEventListener("touchend", this.changeCropEnd);
      this.canChangeX = w;
      this.canChangeY = h;
      this.changeCropTypeX = typeW;
      this.changeCropTypeY = typeH;
      this.cropX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      this.cropY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      this.cropOldW = this.cropW;
      this.cropOldH = this.cropH;
      this.cropChangeX = this.cropOffsertX;
      this.cropChangeY = this.cropOffsertY;
      if (this.fixed) {
        if (this.canChangeX && this.canChangeY) {
          this.canChangeY = 0;
        }
      }
      this.$emit('changeCropSize', {
        width: this.cropW,
        height: this.cropH
      })
      this.$emit('change-crop-size', {
        width: this.cropW,
        height: this.cropH
      })
    },

    // 正在改变
    changeCropNow(e) {
      e.preventDefault();
      var nowX = 'clientX' in e ? e.clientX : e.touches ? e.touches[0].clientX : 0;
      var nowY = 'clientY' in e ? e.clientY : e.touches ? e.touches[0].clientY : 0;
      // 容器的宽高
      let wrapperW = this.w;
      let wrapperH = this.h;

      // 不能超过的坐标轴
      let minX = 0;
      let minY = 0;

      if (this.centerBox) {
        let axis = this.getImgAxis();
        let imgW = axis.x2;
        let imgH = axis.y2;
        minX = axis.x1 > 0 ? axis.x1 : 0;
        minY = axis.y1 > 0 ? axis.y1 : 0;
        if (wrapperW > imgW) {
          wrapperW = imgW;
        }

        if (wrapperH > imgH) {
          wrapperH = imgH;
        }
      }
      const [minCropW,minCropH] = this.checkCropLimitSize()
      this.$nextTick(() => {
        var fw = nowX - this.cropX;
        var fh = nowY - this.cropY;
        if (this.canChangeX) {
          if (this.changeCropTypeX === 1) {
            if (this.cropOldW - fw < minCropW) {
              this.cropW = minCropW
              this.cropOffsertX = this.cropOldW + this.cropChangeX - minX - minCropW
            } else if (this.cropOldW - fw > 0) {
              this.cropW =
                wrapperW - this.cropChangeX - fw <= wrapperW - minX
                  ? this.cropOldW - fw
                  : this.cropOldW + this.cropChangeX - minX;
              this.cropOffsertX =
                wrapperW - this.cropChangeX - fw <= wrapperW - minX
                  ? this.cropChangeX + fw
                  : minX;
            } else {
              this.cropW =
                Math.abs(fw) + this.cropChangeX <= wrapperW
                  ? Math.abs(fw) - this.cropOldW
                  : wrapperW - this.cropOldW - this.cropChangeX;
              this.cropOffsertX = this.cropChangeX + this.cropOldW;
            }
          } else if (this.changeCropTypeX === 2) {
            if (this.cropOldW + fw < minCropW) {
              this.cropW = minCropW
            } else if (this.cropOldW + fw > 0) {
              this.cropW =
                this.cropOldW + fw + this.cropOffsertX <= wrapperW
                  ? this.cropOldW + fw
                  : wrapperW - this.cropOffsertX;
              this.cropOffsertX = this.cropChangeX;
            } else {
              // 右侧坐标抽 超过左侧
              this.cropW =
                wrapperW - this.cropChangeX + Math.abs(fw + this.cropOldW) <=
                wrapperW - minX
                  ? Math.abs(fw + this.cropOldW)
                  : this.cropChangeX - minX;
              this.cropOffsertX =
                wrapperW - this.cropChangeX + Math.abs(fw + this.cropOldW) <=
                wrapperW - minX
                  ? this.cropChangeX - Math.abs(fw + this.cropOldW)
                  : minX;
            }
          }
        }

        if (this.canChangeY) {
          if (this.changeCropTypeY === 1) {
            if (this.cropOldH - fh < minCropH) {
              this.cropH = minCropH
              this.cropOffsertY = this.cropOldH + this.cropChangeY - minY - minCropH
            } else if (this.cropOldH - fh > 0) {
              this.cropH =
                wrapperH - this.cropChangeY - fh <= wrapperH - minY
                  ? this.cropOldH - fh
                  : this.cropOldH + this.cropChangeY - minY;
              this.cropOffsertY =
                wrapperH - this.cropChangeY - fh <= wrapperH - minY
                  ? this.cropChangeY + fh
                  : minY;
            } else {
              this.cropH =
                Math.abs(fh) + this.cropChangeY <= wrapperH
                  ? Math.abs(fh) - this.cropOldH
                  : wrapperH - this.cropOldH - this.cropChangeY;
              this.cropOffsertY = this.cropChangeY + this.cropOldH;
            }
          } else if (this.changeCropTypeY === 2) {
            if (this.cropOldH + fh < minCropH) {
              this.cropH = minCropH
            } else if (this.cropOldH + fh > 0) {
              this.cropH =
                this.cropOldH + fh + this.cropOffsertY <= wrapperH
                  ? this.cropOldH + fh
                  : wrapperH - this.cropOffsertY;
              this.cropOffsertY = this.cropChangeY;
            } else {
              this.cropH =
                wrapperH - this.cropChangeY + Math.abs(fh + this.cropOldH) <=
                wrapperH - minY
                  ? Math.abs(fh + this.cropOldH)
                  : this.cropChangeY - minY;
              this.cropOffsertY =
                wrapperH - this.cropChangeY + Math.abs(fh + this.cropOldH) <=
                wrapperH - minY
                  ? this.cropChangeY - Math.abs(fh + this.cropOldH)
                  : minY;
            }
          }
        }

        if (this.canChangeX && this.fixed) {
          var fixedHeight =
            (this.cropW / this.fixedNumber[0]) * this.fixedNumber[1];
          if (fixedHeight < minCropH) {
            this.cropH = minCropH
            this.cropW = this.fixedNumber[0] * minCropH / this.fixedNumber[1]
            // 这里需要去修改 offsetX的值，去调整因为高度变化而导致的宽度变化
            if (this.changeCropTypeX === 1) {
              this.cropOffsertX = this.cropChangeX + (this.cropOldW - this.cropW)
            }
          } else if (fixedHeight + this.cropOffsertY > wrapperH) {
            this.cropH = wrapperH - this.cropOffsertY;
            this.cropW =
              (this.cropH / this.fixedNumber[1]) * this.fixedNumber[0];
            if (this.changeCropTypeX === 1) {
              this.cropOffsertX = this.cropChangeX + (this.cropOldW - this.cropW)
            }
          } else {
            this.cropH = fixedHeight;
          }
        }

        if (this.canChangeY && this.fixed) {
          var fixedWidth =
            (this.cropH / this.fixedNumber[1]) * this.fixedNumber[0];
          if (fixedWidth < minCropW) {
            this.cropW = minCropW
            this.cropH = this.fixedNumber[1] * minCropW / this.fixedNumber[0];
          } else if (fixedWidth + this.cropOffsertX > wrapperW) {
            this.cropW = wrapperW - this.cropOffsertX;
            this.cropH =
              (this.cropW / this.fixedNumber[0]) * this.fixedNumber[1];
          } else {
            this.cropW = fixedWidth;
          }
        }
	// 触发截图框改变大小事件
	this.$emit('cropSizing', {cropW: this.cropW, cropH: this.cropH})
	this.$emit('crop-sizing', {cropW: this.cropW, cropH: this.cropH})
      });
    },

    checkCropLimitSize () {
      let { cropW, cropH, limitMinSize } = this;

      let limitMinNum = new Array;
      if (!Array.isArray(limitMinSize)) {
        limitMinNum = [limitMinSize, limitMinSize]
      } else {
        limitMinNum = limitMinSize
      }
      
      //限制最小宽度和高度
      cropW = parseFloat(limitMinNum[0])
      cropH = parseFloat(limitMinNum[1])
      return [cropW, cropH]
    },
    // 结束改变
    changeCropEnd(e) {
      window.removeEventListener("mousemove", this.changeCropNow);
      window.removeEventListener("mouseup", this.changeCropEnd);
      window.removeEventListener("touchmove", this.changeCropNow);
      window.removeEventListener("touchend", this.changeCropEnd);
    },
    // 根据比例x/y，最小宽度，最小高度，现有宽度，现有高度，得到应该有的宽度和高度
    calculateSize(x, y, minX, minY, w, h) {
      const ratio = x / y;
      let width = w;
      let height = h;
      // 先根据最小宽度来计算高度
      if (width < minX) {
        width = minX;
        height = Math.ceil(width / ratio);
      }
      // 如果计算出来的高度小于最小高度，则根据最小高度来重新计算宽度和高度
      if (height < minY) {
        height = minY;
        width = Math.ceil(height * ratio);
        // 如果重新计算的宽度仍然小于最小宽度，则使用最小宽度，并重新计算高度
        if (width < minX) {
          width = minX;
          height = Math.ceil(width / ratio);
        }
      }
      // 如果计算出来的宽度或高度小于输入的宽度或高度，则分别使用输入的宽度或高度
      if (width < w) {
        width = w;
        height = Math.ceil(width / ratio);
      }
      if (height < h) {
        height = h;
        width = Math.ceil(height * ratio);
      }
      return { width, height };
    },
    // 创建完成
    endCrop() {
      if (this.cropW === 0 && this.cropH === 0) {
        this.cropping = false;
      }
      let [minCropW, minCropH] = this.checkCropLimitSize();
      const { width, height } = this.fixed ? this.calculateSize(
        this.fixedNumber[0],
        this.fixedNumber[1],
        minCropW,
        minCropH,
        this.cropW,
        this.cropH
      ) : { width: minCropW, height: minCropH }
      if (width > this.cropW) {
        this.cropW = width;
        if (this.cropOffsertX + width > this.w) {
          this.cropOffsertX = this.w - width;
        }
      }
      if (height > this.cropH) {
        this.cropH = height;
        if (this.cropOffsertY + height > this.h) {
          this.cropOffsertY = this.h - height;
        }
      }
      window.removeEventListener("mousemove", this.createCrop);
      window.removeEventListener("mouseup", this.endCrop);
      window.removeEventListener("touchmove", this.createCrop);
      window.removeEventListener("touchend", this.endCrop);
    },
    // 开始截图
    startCrop() {
      this.crop = true;
    },
    // 停止截图
    stopCrop() {
      this.crop = false;
    },
    // 清除截图
    clearCrop() {
      this.cropping = false;
      this.cropW = 0;
      this.cropH = 0;
    },
    // 截图移动
    cropMove(e) {
      e.preventDefault();
      if (!this.canMoveBox) {
        this.crop = false;
        this.startMove(e);
        return false;
      }

      if (e.touches && e.touches.length === 2) {
        this.crop = false;
        this.startMove(e);
        this.leaveCrop();
        return false;
      }
      window.addEventListener("mousemove", this.moveCrop);
      window.addEventListener("mouseup", this.leaveCrop);
      window.addEventListener("touchmove", this.moveCrop);
      window.addEventListener("touchend", this.leaveCrop);
      let x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      let y = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      let newX, newY;
      newX = x - this.cropOffsertX;
      newY = y - this.cropOffsertY;
      this.cropX = newX;
      this.cropY = newY;
      // 触发截图框移动事件
      this.$emit("cropMoving", {
        moving: true,
        axis: this.getCropAxis()
      });
      this.$emit("crop-moving", {
        moving: true,
        axis: this.getCropAxis()
      });
    },

    moveCrop(e, isMove) {
      let nowX = 0;
      let nowY = 0;
      if (e) {
        e.preventDefault();
        nowX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
        nowY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      }
      this.$nextTick(() => {
        let cx, cy;
        let fw = nowX - this.cropX;
        let fh = nowY - this.cropY;
        if (isMove) {
          fw = this.cropOffsertX;
          fh = this.cropOffsertY;
        }
        // 不能超过外层容器
        if (fw <= 0) {
          cx = 0;
        } else if (fw + this.cropW > this.w) {
          cx = this.w - this.cropW;
        } else {
          cx = fw;
        }

        if (fh <= 0) {
          cy = 0;
        } else if (fh + this.cropH > this.h) {
          cy = this.h - this.cropH;
        } else {
          cy = fh;
        }

        // 不能超过图片
        if (this.centerBox) {
          let axis = this.getImgAxis();
          // 横坐标判断
          if (cx <= axis.x1) {
            cx = axis.x1;
          }

          if (cx + this.cropW > axis.x2) {
            cx = axis.x2 - this.cropW;
          }

          // 纵坐标纵轴
          if (cy <= axis.y1) {
            cy = axis.y1;
          }

          if (cy + this.cropH > axis.y2) {
            cy = axis.y2 - this.cropH;
          }
        }

        this.cropOffsertX = cx;
        this.cropOffsertY = cy;

        // 触发截图框移动事件
        this.$emit("cropMoving", {
          moving: true,
          axis: this.getCropAxis()
        });
        this.$emit("crop-moving", {
          moving: true,
          axis: this.getCropAxis()
        });
      });
    },

    // 算出不同场景下面 图片相对于外层容器的坐标轴
    getImgAxis(x, y, scale) {
      x = x || this.x;
      y = y || this.y;
      scale = scale || this.scale;
      // 如果设置了截图框在图片内， 那么限制截图框不能超过图片的坐标
      // 图片的坐标
      let obj = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      let imgW = this.trueWidth * scale;
      let imgH = this.trueHeight * scale;
      switch (this.rotate) {
        case 0:
          obj.x1 = x + (this.trueWidth * (1 - scale)) / 2;
          obj.x2 = obj.x1 + this.trueWidth * scale;
          obj.y1 = y + (this.trueHeight * (1 - scale)) / 2;
          obj.y2 = obj.y1 + this.trueHeight * scale;
          break;
        case 1:
        case -1:
        case 3:
        case -3:
          obj.x1 = x + (this.trueWidth * (1 - scale)) / 2 + (imgW - imgH) / 2;
          obj.x2 = obj.x1 + this.trueHeight * scale;
          obj.y1 = y + (this.trueHeight * (1 - scale)) / 2 + (imgH - imgW) / 2;
          obj.y2 = obj.y1 + this.trueWidth * scale;
          break;
        default:
          obj.x1 = x + (this.trueWidth * (1 - scale)) / 2;
          obj.x2 = obj.x1 + this.trueWidth * scale;
          obj.y1 = y + (this.trueHeight * (1 - scale)) / 2;
          obj.y2 = obj.y1 + this.trueHeight * scale;
          break;
      }
      return obj;
    },

    // 获取截图框的坐标轴
    getCropAxis() {
      let obj = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      };
      obj.x1 = this.cropOffsertX;
      obj.x2 = obj.x1 + this.cropW;
      obj.y1 = this.cropOffsertY;
      obj.y2 = obj.y1 + this.cropH;
      return obj;
    },

    leaveCrop(e) {
      window.removeEventListener("mousemove", this.moveCrop);
      window.removeEventListener("mouseup", this.leaveCrop);
      window.removeEventListener("touchmove", this.moveCrop);
      window.removeEventListener("touchend", this.leaveCrop);
      // 触发截图框移动事件
      this.$emit("cropMoving", {
        moving: false,
        axis: this.getCropAxis()
      });
      this.$emit("crop-moving", {
        moving: false,
        axis: this.getCropAxis()
      });
    },

    getCropChecked(cb) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      let img = new Image();
      let rotate = this.rotate;
      let trueWidth = this.trueWidth;
      let trueHeight = this.trueHeight;
      let cropOffsertX = this.cropOffsertX;
      let cropOffsertY = this.cropOffsertY;
      img.onload = () => {
        if (this.cropW !== 0) {
          let dpr = 1;
          if (this.high & !this.full) {
            dpr = window.devicePixelRatio;
          }
          if ((this.enlarge !== 1) & !this.full) {
            dpr = Math.abs(Number(this.enlarge));
          }
          let width = this.cropW * dpr;
          let height = this.cropH * dpr;
          let imgW = trueWidth * this.scale * dpr;
          let imgH = trueHeight * this.scale * dpr;
          // 图片x轴偏移
          let dx =
            (this.x - cropOffsertX + (this.trueWidth * (1 - this.scale)) / 2) *
            dpr;
          // 图片y轴偏移
          let dy =
            (this.y - cropOffsertY + (this.trueHeight * (1 - this.scale)) / 2) *
            dpr;
          //保存状态
          setCanvasSize(width, height);
          ctx.save();
          switch (rotate) {
            case 0:
              if (!this.full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                setCanvasSize(width / this.scale, height / this.scale);
                ctx.drawImage(
                  img,
                  dx / this.scale,
                  dy / this.scale,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
              break;
            case 1:
            case -3:
              if (!this.full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(img, dy, -dx - imgH, imgW, imgH);
              } else {
                setCanvasSize(width / this.scale, height / this.scale);
                // 换算图片旋转后的坐标弥补
                dx =
                  dx / this.scale + (imgW / this.scale - imgH / this.scale) / 2;
                dy =
                  dy / this.scale + (imgH / this.scale - imgW / this.scale) / 2;
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(
                  img,
                  dy,
                  -dx - imgH / this.scale,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
              break;
            case 2:
            case -2:
              if (!this.full) {
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(img, -dx - imgW, -dy - imgH, imgW, imgH);
              } else {
                setCanvasSize(width / this.scale, height / this.scale);
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                dx = dx / this.scale;
                dy = dy / this.scale;
                ctx.drawImage(
                  img,
                  -dx - imgW / this.scale,
                  -dy - imgH / this.scale,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
              break;
            case 3:
            case -1:
              if (!this.full) {
                // 换算图片旋转后的坐标弥补
                dx = dx + (imgW - imgH) / 2;
                dy = dy + (imgH - imgW) / 2;
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(img, -dy - imgW, dx, imgW, imgH);
              } else {
                setCanvasSize(width / this.scale, height / this.scale);
                // 换算图片旋转后的坐标弥补
                dx =
                  dx / this.scale + (imgW / this.scale - imgH / this.scale) / 2;
                dy =
                  dy / this.scale + (imgH / this.scale - imgW / this.scale) / 2;
                ctx.rotate((rotate * 90 * Math.PI) / 180);
                ctx.drawImage(
                  img,
                  -dy - imgW / this.scale,
                  dx,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
              break;
            default:
              if (!this.full) {
                ctx.drawImage(img, dx, dy, imgW, imgH);
              } else {
                // 输出原图比例截图
                setCanvasSize(width / this.scale, height / this.scale);
                ctx.drawImage(
                  img,
                  dx / this.scale,
                  dy / this.scale,
                  imgW / this.scale,
                  imgH / this.scale
                );
              }
          }
          ctx.restore();
        } else {
          let width = trueWidth * this.scale;
          let height = trueHeight * this.scale;
          ctx.save();
          switch (rotate) {
            case 0:
              setCanvasSize(width, height);
              ctx.drawImage(img, 0, 0, width, height);
              break;
            case 1:
            case -3:
              // 旋转90度 或者-270度 宽度和高度对调
              setCanvasSize(height, width);
              ctx.rotate((rotate * 90 * Math.PI) / 180);
              ctx.drawImage(img, 0, -height, width, height);
              break;
            case 2:
            case -2:
              setCanvasSize(width, height);
              ctx.rotate((rotate * 90 * Math.PI) / 180);
              ctx.drawImage(img, -width, -height, width, height);
              break;
            case 3:
            case -1:
              setCanvasSize(height, width);
              ctx.rotate((rotate * 90 * Math.PI) / 180);
              ctx.drawImage(img, -width, 0, width, height);
              break;
            default:
              setCanvasSize(width, height);
              ctx.drawImage(img, 0, 0, width, height);
          }
          ctx.restore();
        }
        cb(canvas);
      };
      // 判断图片是否是base64
      var s = this.img.substr(0, 4);
      if (s !== "data") {
        img.crossOrigin = "Anonymous";
      }
      img.src = this.imgs;
      const fillColor = this.fillColor;
      function setCanvasSize(width, height) {
        canvas.width = Math.round(width);
        canvas.height = Math.round(height);
        // 填充背景颜色
        if (fillColor) {
          ctx.fillStyle = fillColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    },

    // 获取转换成base64 的图片信息
    getCropData(cb) {
      this.getCropChecked(data => {
        cb(data.toDataURL("image/" + this.outputType, this.outputSize));
      });
    },

    //canvas获取为blob对象
    getCropBlob(cb) {
      this.getCropChecked(data => {
        data.toBlob(
          blob => cb(blob),
          "image/" + this.outputType,
          this.outputSize
        );
      });
    },

    // 自动预览函数
    showPreview() {
      // 优化不要多次触发
      if (this.isCanShow) {
        this.isCanShow = false;
        setTimeout(() => {
          this.isCanShow = true;
        }, 16);
      } else {
        return false;
      }
      let w = this.cropW;
      let h = this.cropH;
      let scale = this.scale;
      var obj = {};
      obj.div = {
        width: \`\${w}px\`,
        height: \`\${h}px\`
      };
      let transformX = (this.x - this.cropOffsertX) / scale;
      let transformY = (this.y - this.cropOffsertY) / scale;
      let transformZ = 0;
      obj.w = w;
      obj.h = h;
      obj.url = this.imgs;
      obj.img = {
        width: \`\${this.trueWidth}px\`,
        height: \`\${this.trueHeight}px\`,
        transform: \`scale(\${scale})translate3d(\${transformX}px, \${transformY}px, \${transformZ}px)rotateZ(\${this
          .rotate * 90}deg)\`
      };
      obj.html = \`
      <div class="show-preview" style="width: \${obj.w}px; height: \${
        obj.h
      }px; overflow: hidden">
        <div style="width: \${w}px; height: \${h}px">
          <img src=\${obj.url} style="width: \${this.trueWidth}px; height: \${
        this.trueHeight
      }px; transform:
          scale(\${scale})translate3d(\${transformX}px, \${transformY}px, \${transformZ}px)rotateZ(\${this
        .rotate * 90}deg)">
        </div>
      </div>\`;
      this.$emit("realTime", obj);
      this.$emit("real-time", obj);
    },
    // reload 图片布局函数
    reload() {
      let img = new Image();
      img.onload = () => {
        // 读取图片的信息原始信息， 解析是否需要旋转
        // 读取图片的旋转信息
        // 得到外层容器的宽度高度
        this.w = parseFloat(window.getComputedStyle(this.$refs.cropper).width);
        this.h = parseFloat(window.getComputedStyle(this.$refs.cropper).height);

        // 存入图片真实高度
        this.trueWidth = img.width;
        this.trueHeight = img.height;

        // 判断是否需要压缩大图
        if (!this.original) {
          // 判断布局方式 mode
          this.scale = this.checkedMode();
        } else {
          this.scale = 1;
        }

        this.$nextTick(() => {
          this.x =
            -(this.trueWidth - this.trueWidth * this.scale) / 2 +
            (this.w - this.trueWidth * this.scale) / 2;
          this.y =
            -(this.trueHeight - this.trueHeight * this.scale) / 2 +
            (this.h - this.trueHeight * this.scale) / 2;
          this.loading = false;
          // // 获取是否开启了自动截图
          if (this.autoCrop) {
            this.goAutoCrop();
          }
          // 图片加载成功的回调
          this.$emit("img-load", "success");
          this.$emit("imgLoad", "success");        
          setTimeout(() => {
            this.showPreview();
          }, 20);
        });
      };
      img.onerror = () => {
        this.$emit("imgLoad", "error");
        this.$emit("img-load", "error");
      };
      img.src = this.imgs;
    },
    // 背景布局的函数
    checkedMode() {
      let scale = 1;
      // 通过字符串分割
      let imgW = this.trueWidth;
      let imgH = this.trueHeight;
      const arr = this.mode.split(" ");
      switch (arr[0]) {
        case "contain":
          if (this.trueWidth > this.w) {
            // 如果图片宽度大于容器宽度
            scale = this.w / this.trueWidth;
          }

          if (this.trueHeight * scale > this.h) {
            scale = this.h / this.trueHeight;
          }
          break;
        case "cover":
          // 扩展布局 默认填充满整个容器
          // 图片宽度大于容器
          imgW = this.w;
          scale = imgW / this.trueWidth;
          imgH = imgH * scale;
          // 如果扩展之后高度小于容器的外层高度 继续扩展高度
          if (imgH < this.h) {
            imgH = this.h;
            scale = imgH / this.trueHeight;
          }
          break;
        default:
          try {
            let str = arr[0];
            if (str.search("px") !== -1) {
              str = str.replace("px", "");
              imgW = parseFloat(str);
              const scaleX = imgW / this.trueWidth;
              let scaleY = 1;
              let strH = arr[1];
              if (strH.search("px") !== -1) {
                strH = strH.replace("px", "");
                imgH = parseFloat(strH);
                scaleY = imgH / this.trueHeight;
              }
              scale = Math.min(scaleX,scaleY)

            }
            if (str.search("%") !== -1) {
              str = str.replace("%", "");
              imgW = (parseFloat(str) / 100) * this.w;
              scale = imgW / this.trueWidth;
            }

            if (arr.length === 2 && str === "auto") {
              let str2 = arr[1];
              if (str2.search("px") !== -1) {
                str2 = str2.replace("px", "");
                imgH = parseFloat(str2);
                scale = imgH / this.trueHeight;
              }
              if (str2.search("%") !== -1) {
                str2 = str2.replace("%", "");
                imgH = (parseFloat(str2) / 100) * this.h;
                scale = imgH / this.trueHeight;
              }
            }
          } catch (error) {
            scale = 1;
          }
      }
      return scale;
    },
    // 自动截图函数
    goAutoCrop(cw, ch) {
      if (this.imgs === '' || this.imgs === null) return
      this.clearCrop();
      this.cropping = true;
      let maxWidth = this.w;
      let maxHeight = this.h;
      if (this.centerBox) {
        const switchWH = Math.abs(this.rotate) % 2 > 0
        let imgW = (switchWH ? this.trueHeight : this.trueWidth) * this.scale;
        let imgH = (switchWH ? this.trueWidth : this.trueHeight) * this.scale;
        maxWidth = imgW < maxWidth ? imgW : maxWidth;
        maxHeight = imgH < maxHeight ? imgH : maxHeight;
      }
      // 截图框默认大小
      // 如果为0 那么计算容器大小 默认为80%
      var w = cw ? cw : parseFloat(this.autoCropWidth);
      var h = ch ? ch : parseFloat(this.autoCropHeight);
      if (w === 0 || h === 0) {
        w = maxWidth * 0.8;
        h = maxHeight * 0.8;
      }
      w = w > maxWidth ? maxWidth : w;
      h = h > maxHeight ? maxHeight : h;
      if (this.fixed) {
        h = (w / this.fixedNumber[0]) * this.fixedNumber[1];
      }
      // 如果比例之后 高度大于h
      if (h > this.h) {
        h = this.h;
        w = (h / this.fixedNumber[1]) * this.fixedNumber[0];
      }
      this.changeCrop(w, h);
    },
    // 手动改变截图框大小函数
    changeCrop(w, h) {
      if (this.centerBox) {
        // 修复初始化时候在centerBox=true情况下
        let axis = this.getImgAxis();
        if (w > axis.x2 - axis.x1) {
          // 宽度超标
          w = axis.x2 - axis.x1;
          h = (w / this.fixedNumber[0]) * this.fixedNumber[1];
        }
        if (h > axis.y2 - axis.y1) {
          // 高度超标
          h = axis.y2 - axis.y1;
          w = (h / this.fixedNumber[1]) * this.fixedNumber[0];
        }
      }
      // 判断是否大于容器
      this.cropW = w;
      this.cropH = h;
      this.checkCropLimitSize()
      this.$nextTick(() => {
        // 居中走一走
        this.cropOffsertX = (this.w - this.cropW) / 2;
        this.cropOffsertY = (this.h - this.cropH) / 2;
        if (this.centerBox) {
          this.moveCrop(null, true);
        }
      });
    },
    // 重置函数， 恢复组件置初始状态
    refresh() {
      let img = this.img;
      this.imgs = "";
      this.scale = 1;
      this.crop = false;
      this.rotate = 0;
      this.w = 0;
      this.h = 0;
      this.trueWidth = 0;
      this.trueHeight = 0;
      this.clearCrop();
      this.$nextTick(() => {
        this.checkedImg();
      });
    },

    // 向左边旋转
    rotateLeft() {
      this.rotate = this.rotate <= -3 ? 0 : this.rotate - 1;
    },

    // 向右边旋转
    rotateRight() {
      this.rotate = this.rotate >= 3 ? 0 : this.rotate + 1;
    },

    // 清除旋转
    rotateClear() {
      this.rotate = 0;
    },

    // 图片坐标点校验
    checkoutImgAxis(x, y, scale) {
      x = x || this.x;
      y = y || this.y;
      scale = scale || this.scale;
      let canGo = true;
      // 开始校验 如果说缩放之后的坐标在截图框外 则阻止缩放
      if (this.centerBox) {
        let axis = this.getImgAxis(x, y, scale);
        let cropAxis = this.getCropAxis();
        // 左边的横坐标 图片不能超过截图框
        if (axis.x1 >= cropAxis.x1) {
          canGo = false;
        }

        // 右边横坐标
        if (axis.x2 <= cropAxis.x2) {
          canGo = false;
        }

        // 纵坐标上面
        if (axis.y1 >= cropAxis.y1) {
          canGo = false;
        }

        // 纵坐标下面
        if (axis.y2 <= cropAxis.y2) {
          canGo = false;
        }
        if (!canGo) {
          this.changeImgScale(axis, cropAxis, scale);
        }
      }
      return canGo;
    },
    // 缩放图片，将图片坐标适配截图框坐标
    changeImgScale(axis, cropAxis, scale) {
      // 左右旋转90度时，长宽互换位置, 也就是 1 和 -1的时候
      let trueWidth = this.trueWidth;
      let trueHeight = this.trueHeight;
      let imgW = trueWidth * scale;
      let imgH = trueHeight * scale;
      if (imgW >= this.cropW && imgH >= this.cropH) {
        this.scale = scale;
      } else {
        const cropWScale = this.cropW / trueWidth;
        const cropHScale = this.cropH / trueHeight;
        const cropScale = this.cropH <= trueHeight * cropWScale ? cropWScale : cropHScale;
        this.scale = cropScale;
        imgW = trueWidth * cropScale;
        imgH = trueHeight * cropScale;
      }
      // 用来做移动坐标判断
      if (!this.imgIsQqualCrop) {
        // 左边的横坐标 图片不能超过截图框
        if (axis.x1 >= cropAxis.x1) {
          if (this.isRotateRightOrLeft) {
            this.x = cropAxis.x1 - (trueWidth - imgW) / 2 - (imgW - imgH) / 2;
          } else {
            this.x = cropAxis.x1 - (trueWidth - imgW) / 2;
          }
        }
        // 右边横坐标
        if (axis.x2 <= cropAxis.x2) {
          if (this.isRotateRightOrLeft) {
            this.x = cropAxis.x1 - (trueWidth - imgW) / 2 - (imgW - imgH) / 2 - imgH + this.cropW;
          } else {
            this.x = cropAxis.x2 - (trueWidth - imgW) / 2 - imgW;
          }
        }
        // 纵坐标上面
        if (axis.y1 >= cropAxis.y1) {
          if (this.isRotateRightOrLeft) {
            this.y = cropAxis.y1 - (trueHeight - imgH) / 2 - (imgH - imgW) / 2;
          } else {
            this.y = cropAxis.y1 - (trueHeight - imgH) / 2;
          }
        }
        // 纵坐标下面
        if (axis.y2 <= cropAxis.y2) {
          if (this.isRotateRightOrLeft) {
            this.y = cropAxis.y2 - (trueHeight - imgH)/2 - (imgH - imgW) / 2 - imgW;
          } else {
            this.y = cropAxis.y2 - (trueHeight - imgH)/2 - imgH;
          }
        }
      }
      if (imgW < this.cropW || imgH < this.cropH) {
        this.imgIsQqualCrop = true;
      }
    }
  },
  mounted() {
    this.support =
      "onwheel" in document.createElement("div")
        ? "wheel"
        : document.onmousewheel !== undefined
        ? "mousewheel"
        : "DOMMouseScroll";
    let that = this;
    var u = navigator.userAgent;
    this.isIOS = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);
    // 兼容blob
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        value: function(callback, type, quality) {
          var binStr = atob(this.toDataURL(type, quality).split(",")[1]),
            len = binStr.length,
            arr = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }
          callback(new Blob([arr], { type: that.type || "image/png" }));
        }
      });
    }
    this.showPreview();
    this.checkedImg();
  },
  destroyed() {
    window.removeEventListener("mousemove", this.moveCrop);
    window.removeEventListener("mouseup", this.leaveCrop);
    window.removeEventListener("touchmove", this.moveCrop);
    window.removeEventListener("touchend", this.leaveCrop);
    this.cancelScale()
  }
};
<\/script>

<style scoped lang="css">
.vue-cropper {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  direction: ltr;
  touch-action: none;
  text-align: left;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");
}

.cropper-box,
.cropper-box-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-face {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
}

.cropper-box-canvas img {
  position: relative;
  text-align: left;
  user-select: none;
  transform: none;
  max-width: none;
  max-height: none;
}

.cropper-box {
  overflow: hidden;
}

.cropper-move {
  cursor: move;
}

.cropper-crop {
  cursor: crosshair;
}

.cropper-modal {
  background: rgba(0, 0, 0, 0.5);
}

.cropper-crop-box {
  /*border: 2px solid #39f;*/
}

.cropper-view-box {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  user-select: none;
}

.cropper-view-box img {
  user-select: none;
  text-align: left;
  max-width: none;
  max-height: none;
}

.cropper-face {
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.1;
}

.crop-info {
  position: absolute;
  left: 0px;
  min-width: 65px;
  text-align: center;
  color: white;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
}

.crop-line {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}

.line-w {
  top: -3px;
  left: 0;
  height: 5px;
  cursor: n-resize;
}

.line-a {
  top: 0;
  left: -3px;
  width: 5px;
  cursor: w-resize;
}

.line-s {
  bottom: -3px;
  left: 0;
  height: 5px;
  cursor: s-resize;
}

.line-d {
  top: 0;
  right: -3px;
  width: 5px;
  cursor: e-resize;
}

.crop-point {
  position: absolute;
  width: 8px;
  height: 8px;
  opacity: 0.75;
  background-color: #39f;
  border-radius: 100%;
}

.point1 {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.point2 {
  top: -5px;
  left: 50%;
  margin-left: -3px;
  cursor: n-resize;
}

.point3 {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.point4 {
  top: 50%;
  left: -4px;
  margin-top: -3px;
  cursor: w-resize;
}

.point5 {
  top: 50%;
  right: -4px;
  margin-top: -3px;
  cursor: e-resize;
}

.point6 {
  bottom: -5px;
  left: -4px;
  cursor: sw-resize;
}

.point7 {
  bottom: -5px;
  left: 50%;
  margin-left: -3px;
  cursor: s-resize;
}

.point8 {
  bottom: -5px;
  right: -4px;
  cursor: se-resize;
}

@media screen and (max-width: 500px) {
  .crop-point {
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0.45;
    background-color: #39f;
    border-radius: 100%;
  }

  .point1 {
    top: -10px;
    left: -10px;
  }

  .point2,
  .point4,
  .point5,
  .point7 {
    display: none;
  }

  .point3 {
    top: -10px;
    right: -10px;
  }

  .point4 {
    top: 0;
    left: 0;
  }

  .point6 {
    bottom: -10px;
    left: -10px;
  }

  .point8 {
    bottom: -10px;
    right: -10px;
  }
}
</style>
`],sourceRoot:""}]);const E=_},314:x=>{x.exports=function(g){var m=[];return m.toString=function(){return this.map(function(y){var O="",H=y[5]!==void 0;return y[4]&&(O+="@supports (".concat(y[4],") {")),y[2]&&(O+="@media ".concat(y[2]," {")),H&&(O+="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {")),O+=g(y),H&&(O+="}"),y[2]&&(O+="}"),y[4]&&(O+="}"),O}).join("")},m.i=function(y,O,H,C,W){typeof y=="string"&&(y=[[null,y,void 0]]);var M={};if(H)for(var I=0;I<this.length;I++){var _=this[I][0];_!=null&&(M[_]=!0)}for(var B=0;B<y.length;B++){var E=[].concat(y[B]);H&&M[E[0]]||(W!==void 0&&(E[5]===void 0||(E[1]="@layer".concat(E[5].length>0?" ".concat(E[5]):""," {").concat(E[1],"}")),E[5]=W),O&&(E[2]&&(E[1]="@media ".concat(E[2]," {").concat(E[1],"}")),E[2]=O),C&&(E[4]?(E[1]="@supports (".concat(E[4],") {").concat(E[1],"}"),E[4]=C):E[4]="".concat(C)),m.push(E))}},m}},417:x=>{x.exports=function(g,m){return m||(m={}),g&&(g=String(g.__esModule?g.default:g),/^['"].*['"]$/.test(g)&&(g=g.slice(1,-1)),m.hash&&(g+=m.hash),/["'() \t\n]|(%20)/.test(g)||m.needQuotes?'"'.concat(g.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):g)}},354:x=>{x.exports=function(g){var m=g[1],y=g[3];if(!y)return m;if(typeof btoa=="function"){var O=btoa(unescape(encodeURIComponent(JSON.stringify(y)))),H="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(O),C="/*# ".concat(H," */");return[m].concat([C]).join(`
`)}return[m].join(`
`)}},72:x=>{var g=[];function m(H){for(var C=-1,W=0;W<g.length;W++)if(g[W].identifier===H){C=W;break}return C}function y(H,C){for(var W={},M=[],I=0;I<H.length;I++){var _=H[I],B=C.base?_[0]+C.base:_[0],E=W[B]||0,N="".concat(B," ").concat(E);W[B]=E+1;var j=m(N),R={css:_[1],media:_[2],sourceMap:_[3],supports:_[4],layer:_[5]};if(j!==-1)g[j].references++,g[j].updater(R);else{var V=O(R,C);C.byIndex=I,g.splice(I,0,{identifier:N,updater:V,references:1})}M.push(N)}return M}function O(H,C){var W=C.domAPI(C);return W.update(H),function(M){if(M){if(M.css===H.css&&M.media===H.media&&M.sourceMap===H.sourceMap&&M.supports===H.supports&&M.layer===H.layer)return;W.update(H=M)}else W.remove()}}x.exports=function(H,C){var W=y(H=H||[],C=C||{});return function(M){M=M||[];for(var I=0;I<W.length;I++){var _=m(W[I]);g[_].references--}for(var B=y(M,C),E=0;E<W.length;E++){var N=m(W[E]);g[N].references===0&&(g[N].updater(),g.splice(N,1))}W=B}}},659:x=>{var g={};x.exports=function(m,y){var O=function(H){if(g[H]===void 0){var C=document.querySelector(H);if(window.HTMLIFrameElement&&C instanceof window.HTMLIFrameElement)try{C=C.contentDocument.head}catch{C=null}g[H]=C}return g[H]}(m);if(!O)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");O.appendChild(y)}},540:x=>{x.exports=function(g){var m=document.createElement("style");return g.setAttributes(m,g.attributes),g.insert(m,g.options),m}},56:(x,g,m)=>{x.exports=function(y){var O=m.nc;O&&y.setAttribute("nonce",O)}},825:x=>{x.exports=function(g){if(typeof document>"u")return{update:function(){},remove:function(){}};var m=g.insertStyleElement(g);return{update:function(y){(function(O,H,C){var W="";C.supports&&(W+="@supports (".concat(C.supports,") {")),C.media&&(W+="@media ".concat(C.media," {"));var M=C.layer!==void 0;M&&(W+="@layer".concat(C.layer.length>0?" ".concat(C.layer):""," {")),W+=C.css,M&&(W+="}"),C.media&&(W+="}"),C.supports&&(W+="}");var I=C.sourceMap;I&&typeof btoa<"u"&&(W+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(I))))," */")),H.styleTagTransform(W,O,H.options)})(m,g,y)},remove:function(){(function(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)})(m)}}}},113:x=>{x.exports=function(g,m){if(m.styleSheet)m.styleSheet.cssText=g;else{for(;m.firstChild;)m.removeChild(m.firstChild);m.appendChild(document.createTextNode(g))}}},107:x=>{x.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC"}},o={};function A(x){var g=o[x];if(g!==void 0)return g.exports;var m=o[x]={id:x,exports:{}};return i[x](m,m.exports,A),m.exports}A.m=i,A.n=x=>{var g=x&&x.__esModule?()=>x.default:()=>x;return A.d(g,{a:g}),g},A.d=(x,g)=>{for(var m in g)A.o(g,m)&&!A.o(x,m)&&Object.defineProperty(x,m,{enumerable:!0,get:g[m]})},A.o=(x,g)=>Object.prototype.hasOwnProperty.call(x,g),A.r=x=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(x,"__esModule",{value:!0})},A.b=document.baseURI||self.location.href,A.nc=void 0;var F={};return(()=>{A.r(F),A.d(F,{VueCropper:()=>D,default:()=>ie});var x=function(){var t=this,e=t._self._c;return e("div",{ref:"cropper",staticClass:"vue-cropper",on:{mouseover:t.scaleImg,mouseout:t.cancelScale}},[t.imgs?e("div",{staticClass:"cropper-box"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"cropper-box-canvas",style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"}},[e("img",{ref:"cropperImg",attrs:{src:t.imgs,alt:"cropper-img"}})])]):t._e(),t._v(" "),e("div",{staticClass:"cropper-drag-box",class:{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping},on:{mousedown:t.startMove,touchstart:t.startMove}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cropping,expression:"cropping"}],staticClass:"cropper-crop-box",style:{width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"}},[e("span",{staticClass:"cropper-view-box"},[e("img",{style:{width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"},attrs:{src:t.imgs,alt:"cropper-img"}})]),t._v(" "),e("span",{staticClass:"cropper-face cropper-move",on:{mousedown:t.cropMove,touchstart:t.cropMove}}),t._v(" "),t.info?e("span",{staticClass:"crop-info",style:{top:t.cropInfo.top}},[t._v(t._s(t.cropInfo.width)+" × "+t._s(t.cropInfo.height))]):t._e(),t._v(" "),t.fixedBox?t._e():e("span",[e("span",{staticClass:"crop-line line-w",on:{mousedown:function(s){return t.changeCropSize(s,!1,!0,0,1)},touchstart:function(s){return t.changeCropSize(s,!1,!0,0,1)}}}),t._v(" "),e("span",{staticClass:"crop-line line-a",on:{mousedown:function(s){return t.changeCropSize(s,!0,!1,1,0)},touchstart:function(s){return t.changeCropSize(s,!0,!1,1,0)}}}),t._v(" "),e("span",{staticClass:"crop-line line-s",on:{mousedown:function(s){return t.changeCropSize(s,!1,!0,0,2)},touchstart:function(s){return t.changeCropSize(s,!1,!0,0,2)}}}),t._v(" "),e("span",{staticClass:"crop-line line-d",on:{mousedown:function(s){return t.changeCropSize(s,!0,!1,2,0)},touchstart:function(s){return t.changeCropSize(s,!0,!1,2,0)}}}),t._v(" "),e("span",{staticClass:"crop-point point1",on:{mousedown:function(s){return t.changeCropSize(s,!0,!0,1,1)},touchstart:function(s){return t.changeCropSize(s,!0,!0,1,1)}}}),t._v(" "),e("span",{staticClass:"crop-point point2",on:{mousedown:function(s){return t.changeCropSize(s,!1,!0,0,1)},touchstart:function(s){return t.changeCropSize(s,!1,!0,0,1)}}}),t._v(" "),e("span",{staticClass:"crop-point point3",on:{mousedown:function(s){return t.changeCropSize(s,!0,!0,2,1)},touchstart:function(s){return t.changeCropSize(s,!0,!0,2,1)}}}),t._v(" "),e("span",{staticClass:"crop-point point4",on:{mousedown:function(s){return t.changeCropSize(s,!0,!1,1,0)},touchstart:function(s){return t.changeCropSize(s,!0,!1,1,0)}}}),t._v(" "),e("span",{staticClass:"crop-point point5",on:{mousedown:function(s){return t.changeCropSize(s,!0,!1,2,0)},touchstart:function(s){return t.changeCropSize(s,!0,!1,2,0)}}}),t._v(" "),e("span",{staticClass:"crop-point point6",on:{mousedown:function(s){return t.changeCropSize(s,!0,!0,1,2)},touchstart:function(s){return t.changeCropSize(s,!0,!0,1,2)}}}),t._v(" "),e("span",{staticClass:"crop-point point7",on:{mousedown:function(s){return t.changeCropSize(s,!1,!0,0,2)},touchstart:function(s){return t.changeCropSize(s,!1,!0,0,2)}}}),t._v(" "),e("span",{staticClass:"crop-point point8",on:{mousedown:function(s){return t.changeCropSize(s,!0,!0,2,2)},touchstart:function(s){return t.changeCropSize(s,!0,!0,2,2)}}})])])])};function g(t,e){(e==null||e>t.length)&&(e=t.length);for(var s=0,r=new Array(e);s<e;s++)r[s]=t[s];return r}function m(t,e){return function(s){if(Array.isArray(s))return s}(t)||function(s,r){var a=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(a!=null){var c,l,p,u,d=[],X=!0,k=!1;try{if(p=(a=a.call(s)).next,r!==0)for(;!(X=(c=p.call(a)).done)&&(d.push(c.value),d.length!==r);X=!0);}catch(v){k=!0,l=v}finally{try{if(!X&&a.return!=null&&(u=a.return(),Object(u)!==u))return}finally{if(k)throw l}}return d}}(t,e)||function(s,r){if(s){if(typeof s=="string")return g(s,r);var a=Object.prototype.toString.call(s).slice(8,-1);return a==="Object"&&s.constructor&&(a=s.constructor.name),a==="Map"||a==="Set"?Array.from(s):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g(s,r):void 0}}(t,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}x._withStripped=!0;var y={};y.getData=function(t){return new Promise(function(e,s){var r={};(function(a){var c=null;return new Promise(function(l,p){if(a.src)if(/^data\:/i.test(a.src))c=function(X,k){k=k||X.match(/^data\:([^\;]+)\;base64,/im)[1]||"",X=X.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var v=atob(X),w=v.length%2==0?v.length:v.length+1,b=new ArrayBuffer(w),f=new Uint16Array(b),S=0;S<w;S++)f[S]=v.charCodeAt(S);return b}(a.src),l(c);else if(/^blob\:/i.test(a.src)){var u=new FileReader;u.onload=function(X){c=X.target.result,l(c)},function(X,k){var v=new XMLHttpRequest;v.open("GET",X,!0),v.responseType="blob",v.onload=function(w){var b;this.status!=200&&this.status!==0||(b=this.response,u.readAsArrayBuffer(b))},v.send()}(a.src)}else{var d=new XMLHttpRequest;d.onload=function(){if(this.status!=200&&this.status!==0)throw"Could not load image";c=d.response,l(c),d=null},d.open("GET",a.src,!0),d.responseType="arraybuffer",d.send(null)}else p("img error")})})(t).then(function(a){r.arrayBuffer=a;try{r.orientation=function(c){var l,p,u,d,X,k,v,w,b,f=new DataView(c),S=f.byteLength;if(f.getUint8(0)===255&&f.getUint8(1)===216)for(w=2;w<S;){if(f.getUint8(w)===255&&f.getUint8(w+1)===225){k=w;break}w++}if(k&&(p=k+10,function(Y,$,L){var z,Q="";for(z=$,L+=$;z<L;z++)Q+=String.fromCharCode(Y.getUint8(z));return Q}(f,k+4,4)==="Exif"&&((d=(X=f.getUint16(p))===18761)||X===19789)&&f.getUint16(p+2,d)===42&&(u=f.getUint32(p+4,d))>=8&&(v=p+u)),v){for(S=f.getUint16(v,d),b=0;b<S;b++)if(w=v+12*b+2,f.getUint16(w,d)===274){w+=8,l=f.getUint16(w,d);break}}return l}(a)}catch{r.orientation=-1}e(r)}).catch(function(a){s(a)})})};const O=y,H={data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0,imgIsQqualCrop:!1}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:function(){return 10},validator:function(t){return Array.isArray(t)?Number(t[0])>=0&&Number(t[1])>=0:Number(t)>=0}},fillColor:{type:String,default:""}},computed:{cropInfo:function(){var t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){var e=1;this.high&&!this.full&&(e=window.devicePixelRatio),this.enlarge!==1&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE:function(){return!!window.ActiveXObject||"ActiveXObject"in window},passive:function(){return this.isIE?null:{passive:!1}}},watch:{img:function(){this.checkedImg()},imgs:function(t){t!==""&&this.reload()},cropW:function(){this.showPreview()},cropH:function(){this.showPreview()},cropOffsertX:function(){this.showPreview()},cropOffsertY:function(){this.showPreview()},scale:function(t,e){this.showPreview()},x:function(){this.showPreview()},y:function(){this.showPreview()},autoCrop:function(t){t&&this.goAutoCrop()},autoCropWidth:function(){this.autoCrop&&this.goAutoCrop()},autoCropHeight:function(){this.autoCrop&&this.goAutoCrop()},mode:function(){this.checkedImg()},rotate:function(){this.showPreview(),(this.autoCrop||this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion:function(t){for(var e=navigator.userAgent.split(" "),s="",r=new RegExp(t,"i"),a=0;a<e.length;a++)r.test(e[a])&&(s=e[a]);return s?s.split("/")[1].split("."):["0","0","0"]},checkOrientationImage:function(t,e,s,r){var a=this;if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){var c=this.getVersion("version");c[0]>13&&c[1]>1&&(e=-1)}else{var l=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(l){var p=l[1];((p=p.split("_"))[0]>13||p[0]>=13&&p[1]>=4)&&(e=-1)}}var u=document.createElement("canvas"),d=u.getContext("2d");switch(d.save(),e){case 2:u.width=s,u.height=r,d.translate(s,0),d.scale(-1,1);break;case 3:u.width=s,u.height=r,d.translate(s/2,r/2),d.rotate(180*Math.PI/180),d.translate(-s/2,-r/2);break;case 4:u.width=s,u.height=r,d.translate(0,r),d.scale(1,-1);break;case 5:u.height=s,u.width=r,d.rotate(.5*Math.PI),d.scale(1,-1);break;case 6:u.width=r,u.height=s,d.translate(r/2,s/2),d.rotate(90*Math.PI/180),d.translate(-s/2,-r/2);break;case 7:u.height=s,u.width=r,d.rotate(.5*Math.PI),d.translate(s,-r),d.scale(-1,1);break;case 8:u.height=s,u.width=r,d.translate(r/2,s/2),d.rotate(-90*Math.PI/180),d.translate(-s/2,-r/2);break;default:u.width=s,u.height=r}d.drawImage(t,0,0,s,r),d.restore(),u.toBlob(function(X){var k=URL.createObjectURL(X);URL.revokeObjectURL(a.imgs),a.imgs=k},"image/"+this.outputType,1)},checkedImg:function(){var t=this;if(this.img===null||this.img==="")return this.imgs="",void this.clearCrop();this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();var e=new Image;if(e.onload=function(){if(t.img==="")return t.$emit("imgLoad","error"),t.$emit("img-load","error"),t.$emit("img-load",new Error("图片不能为空")),!1;var r=e.width,a=e.height;O.getData(e).then(function(c){t.orientation=c.orientation||1;var l=Number(t.maxImgSize);!t.orientation&&r<l&a<l?t.imgs=t.img:(r>l&&(a=a/r*l,r=l),a>l&&(r=r/a*l,a=l),t.checkOrientationImage(e,t.orientation,r,a))}).catch(function(c){t.$emit("img-load","error"),t.$emit("img-load-error",c)})},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error"),t.$emit("img-load-error",error)},this.img.substr(0,4)!=="data"&&(e.crossOrigin=""),this.isIE){var s=new XMLHttpRequest;s.onload=function(){var r=URL.createObjectURL(this.response);e.src=r},s.open("GET",this.img,!0),s.responseType="blob",s.send()}else e.src=this.img},startMove:function(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in t?t.clientX:t.touches[0].clientX)-this.x,this.moveY=("clientY"in t?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),t.touches.length==2&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale:function(t){var e=this;t.preventDefault();var s=this.scale,r=this.touches[0].clientX,a=this.touches[0].clientY,c=t.touches[0].clientX,l=t.touches[0].clientY,p=this.touches[1].clientX,u=this.touches[1].clientY,d=t.touches[1].clientX,X=t.touches[1].clientY,k=Math.sqrt(Math.pow(r-p,2)+Math.pow(a-u,2)),v=Math.sqrt(Math.pow(c-d,2)+Math.pow(l-X,2))-k,w=1,b=(w=(w=w/this.trueWidth>w/this.trueHeight?w/this.trueHeight:w/this.trueWidth)>.1?.1:w)*v;if(!this.touchNow){if(this.touchNow=!0,v>0?s+=Math.abs(b):v<0&&s>Math.abs(b)&&(s-=Math.abs(b)),this.touches=t.touches,setTimeout(function(){e.touchNow=!1},8),!this.checkoutImgAxis(this.x,this.y,s))return!1;this.scale=s}},cancelTouchScale:function(t){window.removeEventListener("touchmove",this.touchScale)},moveImg:function(t){var e=this;if(t.preventDefault(),t.touches&&t.touches.length===2)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;var s,r,a="clientX"in t?t.clientX:t.touches[0].clientX,c="clientY"in t?t.clientY:t.touches[0].clientY;s=a-this.moveX,r=c-this.moveY,this.$nextTick(function(){if(e.centerBox){var l,p,u,d,X=e.getImgAxis(s,r,e.scale),k=e.getCropAxis(),v=e.trueHeight*e.scale,w=e.trueWidth*e.scale;switch(e.rotate){case 1:case-1:case 3:case-3:l=e.cropOffsertX-e.trueWidth*(1-e.scale)/2+(v-w)/2,p=e.cropOffsertY-e.trueHeight*(1-e.scale)/2+(w-v)/2,u=l-v+e.cropW,d=p-w+e.cropH;break;default:l=e.cropOffsertX-e.trueWidth*(1-e.scale)/2,p=e.cropOffsertY-e.trueHeight*(1-e.scale)/2,u=l-w+e.cropW,d=p-v+e.cropH}X.x1>=k.x1&&(s=l),X.y1>=k.y1&&(r=p),X.x2<=k.x2&&(s=u),X.y2<=k.y2&&(r=d)}e.x=s,e.y=r,e.$emit("imgMoving",{moving:!0,axis:e.getImgAxis()}),e.$emit("img-moving",{moving:!0,axis:e.getImgAxis()})})},leaveImg:function(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg:function(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale:function(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize:function(t){var e=this;t.preventDefault();var s=this.scale,r=t.deltaY||t.wheelDelta;r=navigator.userAgent.indexOf("Firefox")>0?30*r:r,this.isIE&&(r=-r);var a=this.coe,c=(a=a/this.trueWidth>a/this.trueHeight?a/this.trueHeight:a/this.trueWidth)*r;c<0?s+=Math.abs(c):s>Math.abs(c)&&(s-=Math.abs(c));var l=c<0?"add":"reduce";if(l!==this.coeStatus&&(this.coeStatus=l,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(function(){e.scaling=!1,e.coe=e.coe+=.01},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,s))return!1;this.scale=s},changeScale:function(t){var e=this.scale;t=t||1;var s=20;if((t*=s=s/this.trueWidth>s/this.trueHeight?s/this.trueHeight:s/this.trueWidth)>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop:function(t){var e=this;t.preventDefault();var s="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,r="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick(function(){var a=s-e.cropX,c=r-e.cropY;if(a>0?(e.cropW=a+e.cropChangeX>e.w?e.w-e.cropChangeX:a,e.cropOffsertX=e.cropChangeX):(e.cropW=e.w-e.cropChangeX+Math.abs(a)>e.w?e.cropChangeX:Math.abs(a),e.cropOffsertX=e.cropChangeX+a>0?e.cropChangeX+a:0),e.fixed){var l=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];l+e.cropOffsertY>e.h?(e.cropH=e.h-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0],e.cropOffsertX=a>0?e.cropChangeX:e.cropChangeX-e.cropW):e.cropH=l,e.cropOffsertY=e.cropOffsertY}else c>0?(e.cropH=c+e.cropChangeY>e.h?e.h-e.cropChangeY:c,e.cropOffsertY=e.cropChangeY):(e.cropH=e.h-e.cropChangeY+Math.abs(c)>e.h?e.cropChangeY:Math.abs(c),e.cropOffsertY=e.cropChangeY+c>0?e.cropChangeY+c:0)})},changeCropSize:function(t,e,s,r,a){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=s,this.changeCropTypeX=r,this.changeCropTypeY=a,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("changeCropSize",{width:this.cropW,height:this.cropH}),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow:function(t){var e=this;t.preventDefault();var s="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,r="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0,a=this.w,c=this.h,l=0,p=0;if(this.centerBox){var u=this.getImgAxis(),d=u.x2,X=u.y2;l=u.x1>0?u.x1:0,p=u.y1>0?u.y1:0,a>d&&(a=d),c>X&&(c=X)}var k=m(this.checkCropLimitSize(),2),v=k[0],w=k[1];this.$nextTick(function(){var b=s-e.cropX,f=r-e.cropY;if(e.canChangeX&&(e.changeCropTypeX===1?e.cropOldW-b<v?(e.cropW=v,e.cropOffsertX=e.cropOldW+e.cropChangeX-l-v):e.cropOldW-b>0?(e.cropW=a-e.cropChangeX-b<=a-l?e.cropOldW-b:e.cropOldW+e.cropChangeX-l,e.cropOffsertX=a-e.cropChangeX-b<=a-l?e.cropChangeX+b:l):(e.cropW=Math.abs(b)+e.cropChangeX<=a?Math.abs(b)-e.cropOldW:a-e.cropOldW-e.cropChangeX,e.cropOffsertX=e.cropChangeX+e.cropOldW):e.changeCropTypeX===2&&(e.cropOldW+b<v?e.cropW=v:e.cropOldW+b>0?(e.cropW=e.cropOldW+b+e.cropOffsertX<=a?e.cropOldW+b:a-e.cropOffsertX,e.cropOffsertX=e.cropChangeX):(e.cropW=a-e.cropChangeX+Math.abs(b+e.cropOldW)<=a-l?Math.abs(b+e.cropOldW):e.cropChangeX-l,e.cropOffsertX=a-e.cropChangeX+Math.abs(b+e.cropOldW)<=a-l?e.cropChangeX-Math.abs(b+e.cropOldW):l))),e.canChangeY&&(e.changeCropTypeY===1?e.cropOldH-f<w?(e.cropH=w,e.cropOffsertY=e.cropOldH+e.cropChangeY-p-w):e.cropOldH-f>0?(e.cropH=c-e.cropChangeY-f<=c-p?e.cropOldH-f:e.cropOldH+e.cropChangeY-p,e.cropOffsertY=c-e.cropChangeY-f<=c-p?e.cropChangeY+f:p):(e.cropH=Math.abs(f)+e.cropChangeY<=c?Math.abs(f)-e.cropOldH:c-e.cropOldH-e.cropChangeY,e.cropOffsertY=e.cropChangeY+e.cropOldH):e.changeCropTypeY===2&&(e.cropOldH+f<w?e.cropH=w:e.cropOldH+f>0?(e.cropH=e.cropOldH+f+e.cropOffsertY<=c?e.cropOldH+f:c-e.cropOffsertY,e.cropOffsertY=e.cropChangeY):(e.cropH=c-e.cropChangeY+Math.abs(f+e.cropOldH)<=c-p?Math.abs(f+e.cropOldH):e.cropChangeY-p,e.cropOffsertY=c-e.cropChangeY+Math.abs(f+e.cropOldH)<=c-p?e.cropChangeY-Math.abs(f+e.cropOldH):p))),e.canChangeX&&e.fixed){var S=e.cropW/e.fixedNumber[0]*e.fixedNumber[1];S<w?(e.cropH=w,e.cropW=e.fixedNumber[0]*w/e.fixedNumber[1],e.changeCropTypeX===1&&(e.cropOffsertX=e.cropChangeX+(e.cropOldW-e.cropW))):S+e.cropOffsertY>c?(e.cropH=c-e.cropOffsertY,e.cropW=e.cropH/e.fixedNumber[1]*e.fixedNumber[0],e.changeCropTypeX===1&&(e.cropOffsertX=e.cropChangeX+(e.cropOldW-e.cropW))):e.cropH=S}if(e.canChangeY&&e.fixed){var Y=e.cropH/e.fixedNumber[1]*e.fixedNumber[0];Y<v?(e.cropW=v,e.cropH=e.fixedNumber[1]*v/e.fixedNumber[0]):Y+e.cropOffsertX>a?(e.cropW=a-e.cropOffsertX,e.cropH=e.cropW/e.fixedNumber[0]*e.fixedNumber[1]):e.cropW=Y}e.$emit("cropSizing",{cropW:e.cropW,cropH:e.cropH}),e.$emit("crop-sizing",{cropW:e.cropW,cropH:e.cropH})})},checkCropLimitSize:function(){this.cropW,this.cropH;var t=this.limitMinSize,e=new Array;return e=Array.isArray(t)?t:[t,t],[parseFloat(e[0]),parseFloat(e[1])]},changeCropEnd:function(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},calculateSize:function(t,e,s,r,a,c){var l=t/e,p=a,u=c;return p<s&&(p=s,u=Math.ceil(p/l)),u<r&&(u=r,(p=Math.ceil(u*l))<s&&(p=s,u=Math.ceil(p/l))),p<a&&(p=a,u=Math.ceil(p/l)),u<c&&(u=c,p=Math.ceil(u*l)),{width:p,height:u}},endCrop:function(){this.cropW===0&&this.cropH===0&&(this.cropping=!1);var t=m(this.checkCropLimitSize(),2),e=t[0],s=t[1],r=this.fixed?this.calculateSize(this.fixedNumber[0],this.fixedNumber[1],e,s,this.cropW,this.cropH):{width:e,height:s},a=r.width,c=r.height;a>this.cropW&&(this.cropW=a,this.cropOffsertX+a>this.w&&(this.cropOffsertX=this.w-a)),c>this.cropH&&(this.cropH=c,this.cropOffsertY+c>this.h&&(this.cropOffsertY=this.h-c)),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop:function(){this.crop=!0},stopCrop:function(){this.crop=!1},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove:function(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&t.touches.length===2)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);var e,s,r="clientX"in t?t.clientX:t.touches[0].clientX,a="clientY"in t?t.clientY:t.touches[0].clientY;e=r-this.cropOffsertX,s=a-this.cropOffsertY,this.cropX=e,this.cropY=s,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop:function(t,e){var s=this,r=0,a=0;t&&(t.preventDefault(),r="clientX"in t?t.clientX:t.touches[0].clientX,a="clientY"in t?t.clientY:t.touches[0].clientY),this.$nextTick(function(){var c,l,p=r-s.cropX,u=a-s.cropY;if(e&&(p=s.cropOffsertX,u=s.cropOffsertY),c=p<=0?0:p+s.cropW>s.w?s.w-s.cropW:p,l=u<=0?0:u+s.cropH>s.h?s.h-s.cropH:u,s.centerBox){var d=s.getImgAxis();c<=d.x1&&(c=d.x1),c+s.cropW>d.x2&&(c=d.x2-s.cropW),l<=d.y1&&(l=d.y1),l+s.cropH>d.y2&&(l=d.y2-s.cropH)}s.cropOffsertX=c,s.cropOffsertY=l,s.$emit("cropMoving",{moving:!0,axis:s.getCropAxis()}),s.$emit("crop-moving",{moving:!0,axis:s.getCropAxis()})})},getImgAxis:function(t,e,s){t=t||this.x,e=e||this.y,s=s||this.scale;var r={x1:0,x2:0,y1:0,y2:0},a=this.trueWidth*s,c=this.trueHeight*s;switch(this.rotate){case 0:r.x1=t+this.trueWidth*(1-s)/2,r.x2=r.x1+this.trueWidth*s,r.y1=e+this.trueHeight*(1-s)/2,r.y2=r.y1+this.trueHeight*s;break;case 1:case-1:case 3:case-3:r.x1=t+this.trueWidth*(1-s)/2+(a-c)/2,r.x2=r.x1+this.trueHeight*s,r.y1=e+this.trueHeight*(1-s)/2+(c-a)/2,r.y2=r.y1+this.trueWidth*s;break;default:r.x1=t+this.trueWidth*(1-s)/2,r.x2=r.x1+this.trueWidth*s,r.y1=e+this.trueHeight*(1-s)/2,r.y2=r.y1+this.trueHeight*s}return r},getCropAxis:function(){var t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop:function(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked:function(t){var e=this,s=document.createElement("canvas"),r=s.getContext("2d"),a=new Image,c=this.rotate,l=this.trueWidth,p=this.trueHeight,u=this.cropOffsertX,d=this.cropOffsertY;a.onload=function(){if(e.cropW!==0){var v=1;e.high&!e.full&&(v=window.devicePixelRatio),e.enlarge!==1&!e.full&&(v=Math.abs(Number(e.enlarge)));var w=e.cropW*v,b=e.cropH*v,f=l*e.scale*v,S=p*e.scale*v,Y=(e.x-u+e.trueWidth*(1-e.scale)/2)*v,$=(e.y-d+e.trueHeight*(1-e.scale)/2)*v;switch(k(w,b),r.save(),c){case 0:e.full?(k(w/e.scale,b/e.scale),r.drawImage(a,Y/e.scale,$/e.scale,f/e.scale,S/e.scale)):r.drawImage(a,Y,$,f,S);break;case 1:case-3:e.full?(k(w/e.scale,b/e.scale),Y=Y/e.scale+(f/e.scale-S/e.scale)/2,$=$/e.scale+(S/e.scale-f/e.scale)/2,r.rotate(90*c*Math.PI/180),r.drawImage(a,$,-Y-S/e.scale,f/e.scale,S/e.scale)):(Y+=(f-S)/2,$+=(S-f)/2,r.rotate(90*c*Math.PI/180),r.drawImage(a,$,-Y-S,f,S));break;case 2:case-2:e.full?(k(w/e.scale,b/e.scale),r.rotate(90*c*Math.PI/180),Y/=e.scale,$/=e.scale,r.drawImage(a,-Y-f/e.scale,-$-S/e.scale,f/e.scale,S/e.scale)):(r.rotate(90*c*Math.PI/180),r.drawImage(a,-Y-f,-$-S,f,S));break;case 3:case-1:e.full?(k(w/e.scale,b/e.scale),Y=Y/e.scale+(f/e.scale-S/e.scale)/2,$=$/e.scale+(S/e.scale-f/e.scale)/2,r.rotate(90*c*Math.PI/180),r.drawImage(a,-$-f/e.scale,Y,f/e.scale,S/e.scale)):(Y+=(f-S)/2,$+=(S-f)/2,r.rotate(90*c*Math.PI/180),r.drawImage(a,-$-f,Y,f,S));break;default:e.full?(k(w/e.scale,b/e.scale),r.drawImage(a,Y/e.scale,$/e.scale,f/e.scale,S/e.scale)):r.drawImage(a,Y,$,f,S)}r.restore()}else{var L=l*e.scale,z=p*e.scale;switch(r.save(),c){case 0:k(L,z),r.drawImage(a,0,0,L,z);break;case 1:case-3:k(z,L),r.rotate(90*c*Math.PI/180),r.drawImage(a,0,-z,L,z);break;case 2:case-2:k(L,z),r.rotate(90*c*Math.PI/180),r.drawImage(a,-L,-z,L,z);break;case 3:case-1:k(z,L),r.rotate(90*c*Math.PI/180),r.drawImage(a,-L,0,L,z);break;default:k(L,z),r.drawImage(a,0,0,L,z)}r.restore()}t(s)},this.img.substr(0,4)!=="data"&&(a.crossOrigin="Anonymous"),a.src=this.imgs;var X=this.fillColor;function k(v,w){s.width=Math.round(v),s.height=Math.round(w),X&&(r.fillStyle=X,r.fillRect(0,0,s.width,s.height))}},getCropData:function(t){var e=this;this.getCropChecked(function(s){t(s.toDataURL("image/"+e.outputType,e.outputSize))})},getCropBlob:function(t){var e=this;this.getCropChecked(function(s){s.toBlob(function(r){return t(r)},"image/"+e.outputType,e.outputSize)})},showPreview:function(){var t=this;if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout(function(){t.isCanShow=!0},16);var e=this.cropW,s=this.cropH,r=this.scale,a={};a.div={width:"".concat(e,"px"),height:"".concat(s,"px")};var c=(this.x-this.cropOffsertX)/r,l=(this.y-this.cropOffsertY)/r;a.w=e,a.h=s,a.url=this.imgs,a.img={width:"".concat(this.trueWidth,"px"),height:"".concat(this.trueHeight,"px"),transform:"scale(".concat(r,")translate3d(").concat(c,"px, ").concat(l,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,"deg)")},a.html=`
      <div class="show-preview" style="width: `.concat(a.w,"px; height: ").concat(a.h,`px; overflow: hidden">
        <div style="width: `).concat(e,"px; height: ").concat(s,`px">
          <img src=`).concat(a.url,' style="width: ').concat(this.trueWidth,"px; height: ").concat(this.trueHeight,`px; transform:
          scale(`).concat(r,")translate3d(").concat(c,"px, ").concat(l,"px, ").concat(0,"px)rotateZ(").concat(90*this.rotate,`deg)">
        </div>
      </div>`),this.$emit("realTime",a),this.$emit("real-time",a)},reload:function(){var t=this,e=new Image;e.onload=function(){t.w=parseFloat(window.getComputedStyle(t.$refs.cropper).width),t.h=parseFloat(window.getComputedStyle(t.$refs.cropper).height),t.trueWidth=e.width,t.trueHeight=e.height,t.original?t.scale=1:t.scale=t.checkedMode(),t.$nextTick(function(){t.x=-(t.trueWidth-t.trueWidth*t.scale)/2+(t.w-t.trueWidth*t.scale)/2,t.y=-(t.trueHeight-t.trueHeight*t.scale)/2+(t.h-t.trueHeight*t.scale)/2,t.loading=!1,t.autoCrop&&t.goAutoCrop(),t.$emit("img-load","success"),t.$emit("imgLoad","success"),setTimeout(function(){t.showPreview()},20)})},e.onerror=function(){t.$emit("imgLoad","error"),t.$emit("img-load","error")},e.src=this.imgs},checkedMode:function(){var t=1,e=(this.trueWidth,this.trueHeight),s=this.mode.split(" ");switch(s[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":(e*=t=this.w/this.trueWidth)<this.h&&(t=(e=this.h)/this.trueHeight);break;default:try{var r=s[0];if(r.search("px")!==-1){r=r.replace("px","");var a=parseFloat(r)/this.trueWidth,c=1,l=s[1];l.search("px")!==-1&&(l=l.replace("px",""),c=(e=parseFloat(l))/this.trueHeight),t=Math.min(a,c)}if(r.search("%")!==-1&&(r=r.replace("%",""),t=parseFloat(r)/100*this.w/this.trueWidth),s.length===2&&r==="auto"){var p=s[1];p.search("px")!==-1&&(p=p.replace("px",""),t=(e=parseFloat(p))/this.trueHeight),p.search("%")!==-1&&(p=p.replace("%",""),t=(e=parseFloat(p)/100*this.h)/this.trueHeight)}}catch{t=1}}return t},goAutoCrop:function(t,e){if(this.imgs!==""&&this.imgs!==null){this.clearCrop(),this.cropping=!0;var s=this.w,r=this.h;if(this.centerBox){var a=Math.abs(this.rotate)%2>0,c=(a?this.trueHeight:this.trueWidth)*this.scale,l=(a?this.trueWidth:this.trueHeight)*this.scale;s=c<s?c:s,r=l<r?l:r}var p=t||parseFloat(this.autoCropWidth),u=e||parseFloat(this.autoCropHeight);p!==0&&u!==0||(p=.8*s,u=.8*r),p=p>s?s:p,u=u>r?r:u,this.fixed&&(u=p/this.fixedNumber[0]*this.fixedNumber[1]),u>this.h&&(p=(u=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(p,u)}},changeCrop:function(t,e){var s=this;if(this.centerBox){var r=this.getImgAxis();t>r.x2-r.x1&&(e=(t=r.x2-r.x1)/this.fixedNumber[0]*this.fixedNumber[1]),e>r.y2-r.y1&&(t=(e=r.y2-r.y1)/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick(function(){s.cropOffsertX=(s.w-s.cropW)/2,s.cropOffsertY=(s.h-s.cropH)/2,s.centerBox&&s.moveCrop(null,!0)})},refresh:function(){var t=this;this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(function(){t.checkedImg()})},rotateLeft:function(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight:function(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear:function(){this.rotate=0},checkoutImgAxis:function(t,e,s){t=t||this.x,e=e||this.y,s=s||this.scale;var r=!0;if(this.centerBox){var a=this.getImgAxis(t,e,s),c=this.getCropAxis();a.x1>=c.x1&&(r=!1),a.x2<=c.x2&&(r=!1),a.y1>=c.y1&&(r=!1),a.y2<=c.y2&&(r=!1),r||this.changeImgScale(a,c,s)}return r},changeImgScale:function(t,e,s){var r=this.trueWidth,a=this.trueHeight,c=r*s,l=a*s;if(c>=this.cropW&&l>=this.cropH)this.scale=s;else{var p=this.cropW/r,u=this.cropH/a,d=this.cropH<=a*p?p:u;this.scale=d,c=r*d,l=a*d}this.imgIsQqualCrop||(t.x1>=e.x1&&(this.isRotateRightOrLeft?this.x=e.x1-(r-c)/2-(c-l)/2:this.x=e.x1-(r-c)/2),t.x2<=e.x2&&(this.isRotateRightOrLeft?this.x=e.x1-(r-c)/2-(c-l)/2-l+this.cropW:this.x=e.x2-(r-c)/2-c),t.y1>=e.y1&&(this.isRotateRightOrLeft?this.y=e.y1-(a-l)/2-(l-c)/2:this.y=e.y1-(a-l)/2),t.y2<=e.y2&&(this.isRotateRightOrLeft?this.y=e.y2-(a-l)/2-(l-c)/2-c:this.y=e.y2-(a-l)/2-l)),(c<this.cropW||l<this.cropH)&&(this.imgIsQqualCrop=!0)}},mounted:function(){this.support="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";var t=this,e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(s,r,a){for(var c=atob(this.toDataURL(r,a).split(",")[1]),l=c.length,p=new Uint8Array(l),u=0;u<l;u++)p[u]=c.charCodeAt(u);s(new Blob([p],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},destroyed:function(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}};var C=A(72),W=A.n(C),M=A(825),I=A.n(M),_=A(659),B=A.n(_),E=A(56),N=A.n(E),j=A(540),R=A.n(j),V=A(113),te=A.n(V),U=A(750),P={};P.styleTagTransform=te(),P.setAttributes=N(),P.insert=B().bind(null,"head"),P.domAPI=I(),P.insertStyleElement=R(),W()(U.A,P),U.A&&U.A.locals&&U.A.locals;var ne=function(t,e,s,r,a,c,l,p){var u,d=typeof t=="function"?t.options:t;return e&&(d.render=e,d.staticRenderFns=[],d._compiled=!0),d._scopeId="data-v-"+c,{exports:t,options:d}}(H,x,0,0,0,"01ee97ad");const D=ne.exports;var q=function(t){t.component("VueCropper",D)};typeof window<"u"&&window.Vue&&q(window.Vue);const ie={version:"0.6.5",install:q,VueCropper:D,vueCropper:D}})(),F})())})(ee);var Ce=ee.exports;const be={components:{VueCropper:Ce.VueCropper},props:{user:{type:Object},visible:{type:Boolean,default:!1}},data(){return{title:"修改头像",options:{img:null,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0,outputType:"png"},previews:{},resizeHandler:null}},watch:{visible:{handler(h){this.options.img=this.user.avatar}}},methods:{editCropper(){this.$emit("update:visible",!0)},modalOpened(){this.resizeHandler||(this.resizeHandler=()=>{this.refresh()}),window.addEventListener("resize",this.resizeHandler)},refresh(){this.$refs.cropper.refresh()},requestUpload(){},rotateLeft(){this.$refs.cropper.rotateLeft()},rotateRight(){this.$refs.cropper.rotateRight()},changeScale(h){h=h||1,this.$refs.cropper.changeScale(h)},beforeUpload(h){if(h.type.indexOf("image/")==-1)this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{const n=new FileReader;n.readAsDataURL(h),n.onload=()=>{this.options.img=n.result}}},async uploadImg(){this.$refs.cropper.getCropBlob(async h=>{const n=new File([h],"avatar.jpg",{type:"image/jpg"});let i=new FormData;i.append("file",n);const o=await le(i,"avatar");o.data&&(await K({id:this.user.id,avatar:o.data}),this.open=!1,this.$emit("update:visible",!1),this.$message.success("头像更新成功"),this.$store.state.userInfo.avatar=o.data,this.$emit("update-avatar",o.data))})},realTime(h){this.previews=h},closeDialog(){this.options.img=null,this.$emit("update:visible",!1),window.removeEventListener("resize",this.resizeHandler)}}};var ye=function(){var n=this,i=n._self._c;return i("div",[i("el-dialog",{attrs:{title:n.title,visible:n.visible,width:"800px","append-to-body":""},on:{"update:visible":function(o){n.visible=o},opened:n.modalOpened,close:n.closeDialog}},[i("el-row",[i("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[n.visible?i("vue-cropper",{ref:"cropper",attrs:{img:n.options.img,info:!0,autoCrop:n.options.autoCrop,autoCropWidth:n.options.autoCropWidth,autoCropHeight:n.options.autoCropHeight,fixedBox:n.options.fixedBox,outputType:n.options.outputType},on:{realTime:n.realTime}}):n._e()],1),i("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[i("div",{staticClass:"avatar-upload-preview"},[i("img",{style:n.previews.img,attrs:{src:n.previews.url}})])])],1),i("br"),i("el-row",[i("el-col",{attrs:{lg:2,sm:3,xs:3}},[i("el-upload",{attrs:{action:"#","http-request":n.requestUpload,"show-file-list":!1,"before-upload":n.beforeUpload}},[i("el-button",{attrs:{size:"small"}},[n._v(" 选择 "),i("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),i("el-col",{attrs:{lg:{span:1,offset:2},sm:2,xs:2}},[i("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(o){return n.changeScale(1)}}})],1),i("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[i("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(o){return n.changeScale(-1)}}})],1),i("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[i("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(o){return n.rotateLeft()}}})],1),i("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[i("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(o){return n.rotateRight()}}})],1),i("el-col",{attrs:{lg:{span:2,offset:6},sm:2,xs:2}},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(o){return n.uploadImg()}}},[n._v("提 交")])],1)],1)],1)],1)},He=[],We=J(be,ye,He,!1,null,"861f8da6");const ke=We.exports,Se={name:"Profile",components:{AvatarCropper:ke},data(){return{userInfo:{},editForm:{username:"",email:"",signature:""},passwordForm:{oldPassword:"",newPassword:"",confirmPassword:""},statistics:{posts:0,likes:0,followers:0},currentTab:"profile",tabs:[{key:"profile",label:"个人资料",icon:"fas fa-user"},{key:"moments",label:"我的说说",icon:"fas fa-comment"},{key:"posts",label:"我的文章",icon:"fas fa-file-alt"},{key:"comments",label:"我的评论",icon:"fas fa-comments"},{key:"replies",label:"我的回复",icon:"fas fa-reply"},{key:"likes",label:"我的点赞",icon:"fas fa-heart"},{key:"security",label:"修改密码",icon:"fas fa-lock"},{key:"feedback",label:"反馈",icon:"fas fa-comment-dots"}],boundAccounts:[{type:"wechat",name:"微信公众号",icon:"fab fa-weixin",isBound:!0,username:"wx_user123",color:"#10b981"},{type:"qq",name:"QQ",icon:"fab fa-qq",isBound:!1,color:"#60a5fa"},{type:"gitee",name:"码云",icon:"fab fa-git-alt",isBound:!0,username:"github_user",color:"#FF0000"}],posts:[],myComments:[],myReplies:[],myLikes:[],moments:[],passwordRules:{oldPassword:[{required:!0,message:"请输入当前密码",trigger:"blur"},{min:6,message:"密码长度不能小于6位",trigger:"blur"}],newPassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,message:"密码长度不能小于6位",trigger:"blur"}],confirmPassword:[{required:!0,message:"请确认新密码",trigger:"blur"},{validator:(n,i,o)=>{i!==this.passwordForm.newPassword?o(new Error("两次输入的密码不一致")):o()},trigger:"blur"}]},profileForm:{nickname:"",email:"",sex:2,signature:""},profileRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}]},params:{pageNum:1,pageSize:5,title:""},momentsParams:{pageNum:1,pageSize:5,keywords:""},total:0,loading:!1,feedbackTypes:[],feedbackStatus:[],feedbackForm:{type:"",content:"",contact:""},myFeedbacks:[],feedbackRules:{type:[{required:!0,message:"请选择反馈类型",trigger:"blur"}],content:[{required:!0,message:"请输入反馈内容",trigger:"blur"}],email:[{required:!1,message:"请输入联系邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}]},signInStatus:!1,signInStats:{continuousDays:0,totalDays:0},signInLoading:!1,showCropper:!1}},watch:{"$store.state.userInfo":{handler(h,n){h||this.$router.push("/")},deep:!0},currentTab(h,n){switch(h){case"posts":this.params.pageNum=1,this.getMyArticle();break;case"comments":this.params.pageNum=1,this.getMyComment();break;case"replies":this.params.pageNum=1,this.getMyReplies();break;case"likes":this.params.pageNum=1,this.getMyLikes();break;case"feedback":this.params.pageNum=1,this.getMyFeedbacks();break;case"moments":this.params.pageNum=1,this.getMyMoments();break}}},created(){pe().then(h=>{this.userInfo=h.data.sysUser,Object.assign(this.profileForm,h.data.sysUser)}),this.getFeedbackDict(),this.getSignInStatus(),this.getSignInStats()},methods:{getFeedbackDict(){G(["feedback_type"]).then(h=>{this.feedbackTypes=h.data}),G(["feedback_status"]).then(h=>{this.feedbackStatus=h.data})},getMyComment(){this.loading=!0,de(this.params).then(h=>{this.myComments=h.data.records,this.total=h.data.total}).finally(()=>{this.loading=!1})},parseContent(h){return he(h||"")},handlePageChange(h){this.params.pageNum=h,this.getMyComment()},getMyArticle(){this.loading=!0,ce(this.params).then(h=>{this.posts=h.data.records,this.total=h.data.total}).finally(()=>{this.loading=!1})},viewPost(h){this.$router.push(`/post/${h}`)},editPost(h){this.$router.push(`/editor?id=${h}`)},deletePost(h){this.$confirm(`确定要删除标题为 '${h.title}' 的文章吗？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{oe(h.id).then(n=>{this.$message.success("删除成功"),this.getMyArticle()}).catch(n=>{this.$message.error(n.message||"删除失败")})}).catch(()=>{})},handleSearch(){this.params.pageNum=1,this.getMyArticle()},resethandleSearch(){this.params.pageNum=1,this.params.title="",this.getMyArticle()},handlePostChange(h){this.params.pageNum=h,this.getMyArticle()},bindAccount(h){const n=this.boundAccounts.find(i=>i.type===h);n&&this.$confirm("确定要绑定该账号吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{n.isBound=!0,this.$message.success("绑定成功")}).catch(()=>{})},unbindAccount(h){const n=this.boundAccounts.find(i=>i.type===h);n&&this.$confirm("确定要解除绑定吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{n.isBound=!1,this.$message.success("已解除绑定")}).catch(()=>{})},deleteComment(h){this.$confirm("此操作会把该评论下的子评论也一并删除，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Z(h).then(n=>{this.$message.success("删除成功"),this.getMyComment()})}).catch(()=>{})},deleteReply(h){this.$confirm("确定要删除这条回复吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Z(h).then(n=>{this.$message.success("删除成功"),this.getMyReplies()})}).catch(()=>{})},cancelLike(h){this.$confirm("确定要取消点赞吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{ae(h).then(n=>{this.$message.success("已取消点赞"),this.getMyLikes()})}).catch(()=>{})},submitFeedback(){this.$refs.feedbackForm.validate(h=>{h&&(this.loading=!0,Ae(this.feedbackForm).then(n=>{this.$message.success("感谢您的反馈！"),this.feedbackForm={}}).finally(()=>{this.loading=!1,this.getMyFeedbacks()}))})},submitPasswordChange(){this.$refs.passwordForm.validate(h=>{h&&(this.loading=!0,ue(this.passwordForm).then(n=>{this.$message.success("密码修改成功！"),this.$refs.passwordForm.resetFields()}).catch(n=>{this.$message.error(n.message)}).finally(()=>{this.loading=!1}))})},submitProfile(){this.loading=!0,K(this.profileForm).then(h=>{this.userInfo.nickname=this.profileForm.nickname,this.$store.state.userInfo.nickname=this.profileForm.nickname,this.$message.success("个人资料更新成功！")}).catch(h=>{this.$message.error(h.message)}).finally(()=>{this.loading=!1})},resetProfile(){this.profileForm={}},getMyReplies(){this.loading=!0,ge(this.params).then(h=>{this.myReplies=h.data.records,this.total=h.data.total}).finally(()=>{this.loading=!1})},handleReplyPageChange(h){this.params.pageNum=h,this.getMyReplies()},getMyLikes(){this.loading=!0,me(this.params).then(h=>{this.myLikes=h.data.records,this.total=h.data.total}).finally(()=>{this.loading=!1})},handleLikePageChange(h){this.params.pageNum=h,this.getMyLikes()},getMyFeedbacks(){this.loading=!0;let h={...this.params};fe(h).then(n=>{this.myFeedbacks=n.data.records,this.total=n.data.total}).finally(()=>{this.loading=!1})},handleFeedbackPageChange(h){this.params.pageNum=h,this.getMyFeedbacks()},getSignInStatus(){we().then(h=>{this.signInStatus=h.data})},getSignInStats(){xe().then(h=>{this.signInStats=h.data})},handleSignIn(){this.signInStatus.hasSignedIn||(this.signInLoading=!0,ve().then(h=>{this.$message.success("签到成功！"),this.getSignInStatus(),this.getSignInStats()}).catch(h=>{this.$message.error(h.message||"签到失败")}).finally(()=>{this.signInLoading=!1}))},handleAvatarUpdate(h){this.userInfo.avatar=h},getMyMoments(){this.loading=!0,re(this.momentsParams).then(h=>{this.moments=h.data.records,this.total=h.data.total}).finally(()=>{this.loading=!1})},editMoment(h){this.$router.push(`/moment/editor?id=${h}`)},viewMoment(h){this.$message.info("说说详情页面待实现")},deleteMoment(h){this.$confirm("确定要删除这条说说吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{try{await se(h),this.$message.success("删除成功"),this.getMyMoments()}catch(n){this.$message.error(n.message||"删除失败")}}).catch(()=>{})},handleMomentPageChange(h){this.momentsParams.pageNum=h,this.getMyMoments()},parseImage(h){return h?h.split(","):[]},handleMomentSearch(){this.momentsParams.pageNum=1,this.getMyMoments()},resetMomentSearch(){this.momentsParams.pageNum=1,this.momentsParams.keywords="",this.getMyMoments()}}};var Ee=function(){var n=this,i=n._self._c;return i("div",{staticClass:"profile-container"},[i("div",{staticClass:"profile-sidebar",attrs:{role:"complementary"}},[i("el-card",{staticClass:"user-card"},[i("div",{staticClass:"avatar-section"},[i("div",{staticClass:"avatar-wrapper",attrs:{role:"button",tabindex:"0","aria-label":"更换头像"},on:{click:function(o){n.showCropper=!0}}},[i("el-avatar",{attrs:{size:100,src:n.userInfo.avatar,alt:"用户头像"}}),i("div",{staticClass:"upload-overlay",attrs:{inert:""}},[i("i",{staticClass:"el-icon-camera"})])],1)]),i("h3",{staticClass:"username"},[n._v(n._s(n.userInfo.nickname))]),i("p",{staticClass:"signature"},[n._v(n._s(n.userInfo.signature||"这个人很懒，还没有写简介..."))]),i("div",{staticClass:"sign-in-section"},[i("el-button",{attrs:{type:"primary",disabled:n.signInStatus,size:"small",loading:n.signInLoading},on:{click:n.handleSignIn}},[i("i",{staticClass:"el-icon-check"}),n._v(" "+n._s(n.signInStatus?"今日已签到":"立即签到")+" ")]),i("div",{staticClass:"sign-in-stats"},[i("div",{staticClass:"stat-item"},[i("span",{staticClass:"label"},[n._v("连续签到")]),i("span",{staticClass:"value"},[n._v(n._s(n.signInStats.continuousDays)+"天")])]),i("div",{staticClass:"stat-item"},[i("span",{staticClass:"label"},[n._v("累计签到")]),i("span",{staticClass:"value"},[n._v(n._s(n.signInStats.totalDays)+"天")])])])],1),i("div",{staticClass:"user-stats",attrs:{role:"list"}},[i("div",{staticClass:"stat-item",attrs:{role:"listitem"}},[i("span",{staticClass:"number"},[n._v(n._s(n.statistics.posts))]),i("span",{staticClass:"label"},[n._v("文章")])]),i("div",{staticClass:"stat-item",attrs:{role:"listitem"}},[i("span",{staticClass:"number"},[n._v(n._s(n.statistics.followers))]),i("span",{staticClass:"label"},[n._v("关注者")])]),i("div",{staticClass:"stat-item",attrs:{role:"listitem"}},[i("span",{staticClass:"number"},[n._v(n._s(n.statistics.likes))]),i("span",{staticClass:"label"},[n._v("获赞")])])])]),i("el-menu",{staticClass:"nav-menu",attrs:{"default-active":n.currentTab,role:"navigation"},on:{select:function(o){n.currentTab=o}}},n._l(n.tabs,function(o){return i("el-menu-item",{key:o.key,attrs:{index:o.key,"aria-label":o.label}},[i("i",{class:o.icon}),i("span",[n._v(n._s(o.label))])])}),1)],1),i("main",{staticClass:"content-area",attrs:{role:"main"}},[n.currentTab==="profile"?i("div",{staticClass:"content-section"},[i("h2",{staticClass:"section-title"},[n._v("个人资料")]),i("el-form",{ref:"profileForm",staticClass:"profile-form",attrs:{model:n.profileForm,rules:n.profileRules,"label-width":"80px"},on:{submit:function(o){return o.preventDefault(),n.submitProfile.apply(null,arguments)}}},[i("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[i("el-input",{attrs:{placeholder:"请输入昵称","aria-label":"昵称输入框"},model:{value:n.profileForm.nickname,callback:function(o){n.$set(n.profileForm,"nickname",o)},expression:"profileForm.nickname"}})],1),i("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[i("el-input",{attrs:{placeholder:"请输入邮箱","aria-label":"邮箱输入框"},model:{value:n.profileForm.email,callback:function(o){n.$set(n.profileForm,"email",o)},expression:"profileForm.email"}})],1),i("el-form-item",{attrs:{label:"个人简介"}},[i("el-input",{attrs:{type:"textarea",rows:4,placeholder:"介绍一下自己吧..."},model:{value:n.profileForm.signature,callback:function(o){n.$set(n.profileForm,"signature",o)},expression:"profileForm.signature"}})],1),i("el-form-item",{attrs:{label:"性别"}},[i("el-radio-group",{model:{value:n.profileForm.sex,callback:function(o){n.$set(n.profileForm,"sex",o)},expression:"profileForm.sex"}},[i("el-radio",{attrs:{label:1}},[n._v("男")]),i("el-radio",{attrs:{label:2}},[n._v("女")]),i("el-radio",{attrs:{label:0}},[n._v("保密")])],1)],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:n.loading,icon:"el-icon-edit",size:"small"},on:{click:n.submitProfile}},[n._v("保存修改")]),i("el-button",{attrs:{size:"small",icon:"el-icon-refresh"},on:{click:n.resetProfile}},[n._v("重置")])],1)],1)],1):n._e(),n.currentTab==="binding"?i("div",{attrs:{cla1110ss:"content-section"}},[i("h2",{staticClass:"section-title"},[n._v("账号绑定")]),i("div",{staticClass:"binding-tips"},[i("el-alert",{attrs:{title:"账号绑定提示",type:"info",description:"绑定第三方账号后，您可以直接使用第三方账号登录本站，还可以同步您的个人信息。","show-icon":"",closable:!1}})],1),i("div",{staticClass:"binding-list"},n._l(n.boundAccounts,function(o){return i("el-card",{key:o.type,staticClass:"binding-item"},[i("div",{staticClass:"binding-content"},[i("div",{staticClass:"account-info"},[i("div",{staticClass:"account-icon"},[i("i",{class:o.icon,style:{color:o.color}})]),i("div",{staticClass:"account-details"},[i("span",{staticClass:"account-name"},[n._v(n._s(o.name))]),i("span",{staticClass:"account-desc"},[n._v(n._s(o.isBound?o.username:"未绑定账号"))])])]),i("div",{staticClass:"binding-status"},[i("el-tag",{staticClass:"status-tag",attrs:{type:o.isBound?"success":"info",size:"small",effect:"dark"}},[n._v(" "+n._s(o.isBound?"已绑定":"未绑定")+" ")]),i("el-button",{attrs:{type:o.isBound?"danger":"primary",size:"small",icon:o.isBound?"el-icon-close":"el-icon-link"},on:{click:function(A){o.isBound?n.unbindAccount(o.type):n.bindAccount(o.type)}}},[n._v(" "+n._s(o.isBound?"解除绑定":"立即绑定")+" ")])],1)])])}),1)]):n._e(),n.currentTab==="moments"?i("div",{staticClass:"content-section"},[i("h2",{staticClass:"section-title"},[n._v("我的说说")]),i("div",{staticClass:"action-bar"},[i("div",[i("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{size:"mini",placeholder:"输入说说内容搜索...","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&n._k(o.keyCode,"enter",13,o.key,"Enter")?null:n.handleMomentSearch.apply(null,arguments)}},model:{value:n.momentsParams.keywords,callback:function(o){n.$set(n.momentsParams,"keywords",o)},expression:"momentsParams.keywords"}}),i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:n.handleMomentSearch}},[n._v("搜索")]),i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:n.resetMomentSearch}},[n._v("重置")])],1),i("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(o){return n.$router.push("/moment/editor")}}},[n._v("发布说说")])],1),n.moments.length?i("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}]},[n._l(n.moments,function(o){return i("el-card",{key:o.id,staticClass:"moment-item"},[i("div",{staticClass:"moment-content"},[i("div",{staticClass:"moment-text",domProps:{innerHTML:n._s(n.parseContent(o.content))}}),o.images&&o.images.length?i("div",{staticClass:"moment-images"},n._l(n.parseImage(o.images),function(A,F){return i("el-image",{key:F,staticClass:"moment-image",attrs:{src:A,"preview-src-list":n.parseImage(o.images),fit:"cover"}})}),1):n._e(),i("div",{staticClass:"moment-meta"},[i("el-tag",{attrs:{size:"small"}},[i("i",{staticClass:"el-icon-date"}),n._v(" "+n._s(o.createTime))])],1)]),i("div",{staticClass:"moment-actions"},[i("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(A){return n.editMoment(o.id)}}},[n._v("编辑")]),i("el-button",{staticClass:"delete",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(A){return n.deleteMoment(o.id)}}},[n._v("删除")])],1)])}),i("div",{staticClass:"pagination-box"},[i("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":n.momentsParams.pageNum,"page-size":n.momentsParams.pageSize,total:n.total,layout:"prev, pager, next"},on:{"current-change":n.handleMomentPageChange}})],1)],2):i("el-empty",{attrs:{description:"暂无说说，快去发布你的第一条说说吧~~"}})],1):n._e(),n.currentTab==="posts"?i("div",{staticClass:"content-section"},[i("h2",{staticClass:"section-title"},[n._v("我的文章")]),i("div",{staticClass:"action-bar"},[i("div",[i("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{size:"mini",placeholder:"输入文字标题搜索文章...","prefix-icon":"el-icon-search"},model:{value:n.params.title,callback:function(o){n.$set(n.params,"title",o)},expression:"params.title"}}),i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:n.handleSearch}},[n._v("搜索")]),i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:n.resethandleSearch}},[n._v("重置")])],1),i("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(o){return n.$router.push("/editor")}}},[n._v("写文章")])],1),n.posts.length?i("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}]},[n._l(n.posts,function(o){return i("el-card",{key:o.id,staticClass:"post-item"},[i("div",{staticClass:"post-content"},[i("h3",{staticClass:"post-title",on:{click:function(A){return n.viewPost(o.id)}}},[n._v(n._s(o.title))]),i("p",{staticClass:"post-excerpt"},[n._v(n._s(o.summary))]),i("div",{staticClass:"post-meta"},[i("el-tag",{attrs:{size:"small"}},[i("i",{staticClass:"el-icon-date"}),n._v(n._s(o.createTime))]),i("el-tag",{attrs:{size:"small",type:"info"}},[i("i",{staticClass:"el-icon-view"}),n._v(n._s(o.quantity)+" 阅读")]),i("el-tag",{attrs:{size:"small",type:"success"}},[i("i",{staticClass:"el-icon-chat-line-square"}),n._v(n._s(o.commentNum||0)+" 评论")]),i("el-tag",{attrs:{size:"small",type:"warning"}},[i("i",{staticClass:"el-icon-star-off"}),n._v(n._s(o.likeNum||0)+" 点赞")])],1)]),i("div",{staticClass:"post-actions"},[i("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(A){return n.viewPost(o.id)}}},[n._v("查看")]),i("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(A){return n.editPost(o.id)}}},[n._v("编辑")]),i("el-button",{staticClass:"delete",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(A){return n.deletePost(o)}}},[n._v("删除")])],1)])}),i("div",{staticClass:"pagination-box"},[i("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":n.params.pageNum,"page-size":n.params.pageSize,total:n.total,layout:"prev, pager, next"},on:{"current-change":n.handlePostChange}})],1)],2):i("el-empty",{attrs:{description:"暂无文章，快去发布你的文章吧~~"}})],1):n._e(),n.currentTab==="comments"?i("div",{staticClass:"content-section"},[i("h2",{staticClass:"section-title"},[n._v("我的评论")]),n.myComments.length?i("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}]},[n._l(n.myComments,function(o){return i("el-card",{key:o.id,staticClass:"comment-item"},[i("div",{staticClass:"comment-actions"},[i("p",{staticClass:"comment-text",domProps:{innerHTML:n._s(n.parseContent(o.content))}}),i("el-button",{staticClass:"delete",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(A){return n.deleteComment(o.id)}}},[n._v("删除")])],1),i("div",{staticClass:"comment-meta"},[i("el-link",{attrs:{type:"primary"},on:{click:function(A){return n.viewPost(o.articleId)}}},[n._v("文章："+n._s(o.articleTitle))]),i("el-tag",{attrs:{size:"small"}},[i("i",{staticClass:"el-icon-time"}),n._v(" "+n._s(o.createTime)+" ")]),i("el-tag",{attrs:{size:"small",type:"success"}},[i("i",{staticClass:"el-icon-star-off"}),n._v(n._s(o.likeCount?o.likeCount:0)+" 赞")])],1)])}),i("div",{staticClass:"pagination-box"},[n.myComments.length?i("el-pagination",{attrs:{background:"","current-page":n.params.pageNum,"page-size":n.params.pageSize,layout:"prev, pager, next",total:n.total},on:{"current-change":n.handlePageChange}}):n._e()],1)],2):i("el-empty",{attrs:{description:"暂无评论数据"}})],1):n._e(),n.currentTab==="replies"?i("div",{staticClass:"content-section"},[i("h2",{staticClass:"section-title"},[n._v("我的回复")]),n.myReplies.length?i("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}]},[n._l(n.myReplies,function(o){return i("el-card",{key:o.id,staticClass:"reply-item"},[i("div",{staticClass:"reply-content"},[i("div",{staticClass:"comment-actions"},[i("p",{staticClass:"reply-text"},[i("el-tag",{attrs:{size:"small",type:"info"}},[n._v("回复 @"+n._s(o.replyNickname))])],1),i("p",{domProps:{innerHTML:n._s(n.parseContent(o.content))}}),i("p"),i("el-button",{staticClass:"delete",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(A){return n.deleteReply(o.id)}}},[n._v("删除")])],1),i("div",{staticClass:"reply-meta"},[i("el-link",{attrs:{type:"primary"},on:{click:function(A){return n.viewPost(o.articleId)}}},[n._v("文章："+n._s(o.articleTitle))]),i("el-tag",{attrs:{size:"small"}},[i("i",{staticClass:"el-icon-time"}),n._v(" "+n._s(o.createTime)+" ")])],1)])])}),i("div",{staticClass:"pagination-box"},[n.myReplies.length?i("el-pagination",{attrs:{background:"","current-page":n.params.pageNum,"page-size":n.params.pageSize,layout:"prev, pager, next",total:n.total},on:{"current-change":n.handleReplyPageChange}}):n._e()],1)],2):i("el-empty",{attrs:{description:"暂无回复评论数据"}})],1):n._e(),n.currentTab==="likes"?i("div",{staticClass:"content-section"},[i("h2",{staticClass:"section-title"},[n._v("我的点赞")]),n.myLikes.length?i("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}]},[n._l(n.myLikes,function(o){return i("el-card",{key:o.id,staticClass:"like-item"},[i("div",{staticClass:"like-content"},[i("div",{staticClass:"comment-actions"},[i("el-link",{staticClass:"article-title",on:{click:function(A){return n.viewPost(o.id)}}},[n._v(n._s(o.title))]),i("el-button",{staticClass:"delete",attrs:{type:"text",icon:"el-icon-star-off"},on:{click:function(A){return n.cancelLike(o.id)}}},[n._v("取消点赞")])],1),i("div",{staticClass:"like-meta"},[i("el-tag",{attrs:{size:"small"}},[i("i",{staticClass:"el-icon-time"}),n._v(" "+n._s(o.createTime)+" ")])],1)])])}),i("div",{staticClass:"pagination-box"},[n.myLikes.length?i("el-pagination",{attrs:{background:"","current-page":n.params.pageNum,"page-size":n.params.pageSize,layout:"prev, pager, next",total:n.total},on:{"current-change":n.handleLikePageChange}}):n._e()],1)],2):i("el-empty",{attrs:{description:"暂无点赞数据"}})],1):n._e(),n.currentTab==="security"?i("div",{staticClass:"content-section"},[i("h2",{staticClass:"section-title"},[n._v("修改密码")]),i("div",{staticClass:"binding-tips"},[i("el-alert",{attrs:{title:"修改密码提示",type:"info",description:"只有邮箱登录的才可修改密码，其他第三方登录不存在修改密码功能。","show-icon":"",closable:!1}})],1),i("el-form",{ref:"passwordForm",staticClass:"security-form",attrs:{model:n.passwordForm,rules:n.passwordRules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"当前密码",prop:"oldPassword"}},[i("el-input",{attrs:{type:"password","show-password":"",placeholder:"请输入当前密码"},model:{value:n.passwordForm.oldPassword,callback:function(o){n.$set(n.passwordForm,"oldPassword",o)},expression:"passwordForm.oldPassword"}})],1),i("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[i("el-input",{attrs:{type:"password","show-password":"",placeholder:"请输入新密码"},model:{value:n.passwordForm.newPassword,callback:function(o){n.$set(n.passwordForm,"newPassword",o)},expression:"passwordForm.newPassword"}})],1),i("el-form-item",{attrs:{label:"确认新密码",prop:"confirmPassword"}},[i("el-input",{attrs:{type:"password","show-password":"",placeholder:"请再次输入新密码"},model:{value:n.passwordForm.confirmPassword,callback:function(o){n.$set(n.passwordForm,"confirmPassword",o)},expression:"passwordForm.confirmPassword"}})],1),i("el-form-item",[i("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-edit",loading:n.loading},on:{click:n.submitPasswordChange}},[n._v("确认修改")])],1)],1)],1):n._e(),n.currentTab==="feedback"?i("div",{staticClass:"content-section"},[i("h2",{staticClass:"section-title"},[n._v("意见反馈")]),i("el-tabs",[i("el-tab-pane",{attrs:{label:"提交反馈"}},[i("el-form",{ref:"feedbackForm",staticClass:"feedback-form",attrs:{model:n.feedbackForm,rules:n.feedbackRules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"反馈类型",prop:"type"}},[i("el-select",{attrs:{placeholder:"请选择反馈类型"},model:{value:n.feedbackForm.type,callback:function(o){n.$set(n.feedbackForm,"type",o)},expression:"feedbackForm.type"}},n._l(n.feedbackTypes,function(o){return i("el-option",{attrs:{label:o.label,value:o.value}})}),1)],1),i("el-form-item",{attrs:{label:"反馈内容",prop:"content"}},[i("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请详细描述您的问题或建议..."},model:{value:n.feedbackForm.content,callback:function(o){n.$set(n.feedbackForm,"content",o)},expression:"feedbackForm.content"}})],1),i("el-form-item",{attrs:{label:"联系邮箱",prop:"email"}},[i("el-input",{attrs:{placeholder:"请留下您的联系邮箱，方便我们回复您"},model:{value:n.feedbackForm.email,callback:function(o){n.$set(n.feedbackForm,"email",o)},expression:"feedbackForm.email"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-check",loading:n.loading},on:{click:n.submitFeedback}},[n._v("提交反馈")])],1)],1)],1),i("el-tab-pane",{attrs:{label:"我的反馈"}},[i("div",{staticClass:"feedback-list"},[n.myFeedbacks.length?i("div",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}]},[n._l(n.myFeedbacks,function(o){return i("el-card",{key:o.id,staticClass:"feedback-item"},[i("div",{staticClass:"feedback-header"},[i("div",{staticClass:"feedback-info"},[n._l(n.feedbackTypes,function(A){return A.value===o.type?i("el-tag",{attrs:{type:A.style}},[n._v(" "+n._s(A.label)+" ")]):n._e()}),i("span",{staticClass:"feedback-time"},[i("i",{staticClass:"far fa-clock"}),n._v(" "+n._s(o.createTime)+" ")])],2),n._l(n.feedbackStatus,function(A){return A.value===String(o.status)?i("el-tag",{attrs:{type:A.style}},[n._v(" "+n._s(A.label)+" ")]):n._e()})],2),i("div",{staticClass:"feedback-content"},[i("p",[n._v(n._s(o.content))])]),o.replyContent?i("div",{staticClass:"feedback-reply"},[i("div",{staticClass:"reply-title"},[i("i",{staticClass:"el-icon-chat-line-round"}),n._v(" 管理员回复： ")]),i("p",{staticClass:"reply-content"},[n._v(n._s(o.replyContent))])]):n._e()])}),n.myFeedbacks.length?i("div",{staticClass:"pagination-box"},[i("el-pagination",{attrs:{background:"","current-page":n.params.pageNum,"page-size":n.params.pageSize,layout:"prev, pager, next",total:n.total},on:{"current-change":n.handleFeedbackPageChange}})],1):n._e()],2):i("el-empty",{attrs:{description:"暂无反馈记录"}})],1)])],1)],1):n._e()]),i("AvatarCropper",{attrs:{visible:n.showCropper,user:n.userInfo},on:{"update:visible":function(o){n.showCropper=o},"update-avatar":n.handleAvatarUpdate}})],1)},Xe=[],Oe=J(Se,Ee,Xe,!1,null,"6889a9f1");const $e=Oe.exports;export{$e as default};
