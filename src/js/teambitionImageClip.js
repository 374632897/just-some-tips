/*
* @Author: JGX
* @Date:   2016-02-19 09:31:47
* @Last Modified by:   JGX
* @Last Modified time: 2016-02-19 10:12:32
*/
function () {
    define("uis/image-cropper", ["require", "exports", "module"], function (e, t, i) {
      var r;
      return r = function () {
        function e(e) {
          if (this.inputId = e.input, this.containerId = e.container, this.containerWidth = e.containerWidth,
              this.containerHeight = e.containerHeight || 240, this.widthAdapt = e.widthAdapt || !1, this.heightAdapt =
              e.heightAdapt || !1, this.cropperWidth = e.cropperWidth || 0, this.cropperRatio = e.ratio || 1,
              this.croppedWidth = e.resultWidth || this.cropperWidth, this.cropperRound = e.round || !1, this
              .cropCallback = e.crop || null, this.onError = e.onError || null, this.fileSizeLimit = e.fileSizeLimit ||
              1 / 0, this.input = e.input || document.querySelector(this.inputId), this.container = e.container ||
              document.querySelector(this.containerId), this.imageContainer = document.createElement("div"),
              this.imageContainer.style.position = "relative", this.imageContainer.style.top = "0px", this.imageContainer
              .style.left = "0px", this.imageContainer.style.overflow = "hidden", this.imageContainer.style.width =
              this.containerWidth + "px", this.imageContainer.style.height = this.containerHeight + "px",
              this._events = {}, this.sourceImage = document.createElement("canvas"), this.cropper = document
              .createElement("canvas"), this.cropperSeResize = document.createElement("canvas"), this.cropperSource =
              document.createElement("canvas"), this.image = new Image, this.imageRatio = 1, this.reader =
              new FileReader, this.cropperSeResizeSize = 10, this.cropperOffsetTop = 0, this.cropperOffsetLeft =
              0, this.imageOffsetTop = 0, this.imageOffsetLeft = 0, this.cropperPrevX = 0, this.cropperPrevY =
              0, this.imagePrevX = 0, this.imagePrevY = 0, this.cropperResizePrevX = 0, this.cropperResizePrevY =
              0, this.listenTo(this.input, "change", this.readFile), this.listenTo(this.reader, "load", this.fileReady),
              this.listenTo(this.image, "load", this.imageReady), this.listenTo(this.sourceImage, "mousedown",
              this.sourceImageMousedown), this.listenTo(this.sourceImage, "touchstart", this.sourceImageMousedown),
              this.listenTo(this.cropper, "mousedown", this.cropperMousedown), this.listenTo(this.cropper,
              "touchstart", this.cropperMousedown), this.listenTo(this.cropperSeResize, "mousedown", this.cropperSeResizeMousedown),
              this.listenTo(this.cropperSeResize, "touchstart", this.cropperSeResizeMousedown), this.listenTo(
              document, "mouseup", this.stopListeningMousemove), this.listenTo(document, "touchend", this.stopListeningMousemove),
              this.container.innerHTML = "", this.container.appendChild(this.imageContainer), e.file) {
              if (e.file.size > this.fileSizeLimit) return void("function" == typeof this.onError && this.onError(
                      "sizeTooLarge"));
              this.reader.readAsDataURL(e.file)
          }
        }
        return e.prototype.stopListeningMousemove = function () {
          return this.stopListening(document, "mousemove"), this.stopListening(document, "touchmove"), this.cropperListener(!0)
        }, e.prototype.listenTo = function (e, t, i) {
            var r;
            return (r = this._events)[t] || (r[t] = []), i = i.bind(this), this._events[t].push({
                ele: e,
                eventListener: i
            }), e.addEventListener(t, i, !1)
        }, e.prototype.stopListening = function (e, t) {
            var i, r, s, n, a, o, c, l, p;
            if (e) {
                for (i = this._events[t] || [], this._events[t] = [], p = [], a = 0, c = i.length; c > a; a++) s =
                        i[a], s.ele === e ? p.push(e.removeEventListener(t, s.eventListener, !1)) : p.push(this
                        ._events[t].push(s));
                return p
            }
            l = this._events;
            for (t in l) for (r = l[t], n = 0, o = r.length; o > n; n++) s = r[n], s.ele.removeEventListener(t,
                        s.eventListener, !1);
            return this._events = {}
        }, e.prototype.destroy = function () {
            return this.stopListening()
        }, e.prototype.readFile = function (e) {
            var t;
            return t = e.target.files[0], t ? t.size > this.fileSizeLimit ? void("function" == typeof this.onError &&
                this.onError("sizeTooLarge")) : this.reader.readAsDataURL(e.target.files[0]) : void 0
        }, e.prototype.fileReady = function (e) {
            return this.image.src = e.target.result
        }, e.prototype.imageReady = function () {
            var e, t, i, r, s, n;
            return this.sourceImage.width = this.image.width, this.sourceImage.height = this.image.height, s =
                this.sourceImage.getContext("2d"), s.drawImage(this.image, 0, 0), s.fillStyle =
                "rgba(0, 0, 0, 0.5)", s.fillRect(0, 0, this.image.width, this.image.height), this.sourceImage.style
                .cursor = "move", this.sourceImage.style.position = "relative", this.sourceImage.style.top =
                "0px", this.sourceImage.style.left = "0px", this.imageContainer.appendChild(this.sourceImage),
                n = function (e) {
                return function () {
                    var t;
                    return e.sourceImage.style.width = e.containerWidth + "px", e.sourceImageWidth = e.containerWidth,
                        t = e.image.height * e.containerWidth / e.image.width, e.sourceImage.style.height = t +
                        "px", e.sourceImageLeft = 0, e.sourceImageTop = (e.containerHeight - t) / 2, e.sourceImage
                        .style.top = e.sourceImageTop + "px"
                }
            }(this), r = function (e) {
                return function () {
                    return e.sourceImage.style.height = e.containerHeight + "px", e.sourceImageWidth = e.image.width *
                        e.containerHeight / e.image.height,
                    e.sourceImage.style.width = e.sourceImageWidth + "px", e.sourceImageLeft = (e.containerWidth -
                        e.sourceImageWidth) / 2, e.sourceImageTop = 0, e.sourceImage.style.left = e.sourceImageLeft +
                        "px"
                }
            }(this), this.widthAdapt && !this.heightAdapt ? n() : this.heightAdapt && !this.widthAdapt ? r() :
                this.image.width / this.image.height >= this.containerWidth / this.containerHeight ? r() : n(),
                this.imageStyleWidth = parseInt(this.sourceImage.style.width.slice(0, -2)), this.imageStyleHeight =
                parseInt(this.sourceImage.style.height.slice(0, -2)), t = this.imageStyleWidth, this.imageStyleWidth >
                this.containerWidth && (t = this.containerWidth), e = this.imageStyleHeight, this.imageStyleHeight >
                this.containerHeight && (e = this.containerHeight), this.imageRatio = this.sourceImageWidth /
                this.sourceImage.width, this.imageOffsetTop = this.sourceImageTop / this.imageRatio, this.imageOffsetLeft =
                this.sourceImageLeft / this.imageRatio, 0 === this.cropperWidth && (this.cropperWidth = .8 *
                this.containerWidth), this.cropperHeight = this.cropperWidth / this.cropperRatio, this.cropperRatio >
                t / e ? this.cropperWidth > t && (this.cropperWidth = .8 * this.cropperBaseWidth, this.cropperHeight =
                this.cropperWidth / this.cropperRatio) : this.cropperHeight > e && (this.cropperHeight = .8 * e,
                this.cropperWidth = this.cropperHeight * this.cropperRatio), this.cropperOffsetTop = (this.containerHeight -
                this.cropperHeight) / 2, this.cropperOffsetLeft = (this.containerWidth - this.cropperWidth) / 2,
                this.cropper.style.cursor = "move", this.cropper.style.position = "absolute", this.imageContainer
                .appendChild(this.cropper), this.cropperSeResize.width = this.cropperSeResize.height = this.cropperSeResizeSize,
                i = this.cropperSeResize.getContext("2d"), i.fillStyle = "rgba(0, 0, 0, 0.24)", i.fillRect(0, 0,
                this.cropperSeResizeSize, this.cropperSeResizeSize), i.beginPath(), i.moveTo(0, 0), i.lineTo(
                this.cropperSeResizeSize, 0), i.lineTo(this.cropperSeResizeSize, this.cropperSeResizeSize), i.lineTo(
                0, this.cropperSeResizeSize), i.closePath(), i.lineWidth = 2, i.strokeStyle =
                "rgba(255, 255, 255, 0.4)", i.stroke(), this.cropperSeResize.style.cursor = "se-resize", this.cropperSeResize
                .style.position = "absolute", this.imageContainer.appendChild(this.cropperSeResize), this.cropperListener(!
                0)
        }, e.prototype.cropperListener = function (e) {
            var t, i, r, s, n, a, o, c, l, p, u, d, h, f;
            return null == e && (e = !0), this.cropperWidth = ~~this.cropperWidth, this.cropperHeight = ~~this.cropperHeight,
                d = -this.imageOffsetLeft + (this.cropperOffsetLeft - parseFloat(this.imageContainer.style.left
                .slice(0, -2))) / this.imageRatio, h = -this.imageOffsetTop + (this.cropperOffsetTop -
                parseFloat(this.imageContainer.style.top.slice(0, -2))) / this.imageRatio, u = this.cropperWidth /
                this.imageRatio, d + u <= this.image.width || (u = this.image.width - d), p = this.cropperHeight /
                this.imageRatio, h + p <= this.image.height || (p = this.image.height - h), f = e ? u : this.cropperWidth,
                o = e ? p : this.cropperHeight, this.cropper.width = f, this.cropper.height = o, s = this.cropper
                .getContext("2d"), s.drawImage(this.image, d, h, u, p, 0, 0, f, o), t = 1, s.save(), this.cropperSource
                .width = f, this.cropperSource.height = o, this.cropperSource.getContext("2d").drawImage(this.image,
                d, h, u, p, 0, 0, f, o), this.cropperRound && (s.fillStyle = "rgba(0, 0, 0, 0.5)", s.fillRect(0,
                0, f, o), i = document.createElement("canvas"), i.width = f, i.height = o, r = i.getContext(
                "2d"), r.drawImage(this.cropperSource, 0, 0), r.globalCompositeOperation = "destination-in", l =
                f > o ? o : f, l /= 2, l = l >= 0 ? l : 0, r.arc(f / 2, o / 2, l, 0, 2 * Math.PI), r.fill(), s.drawImage(
                i, 0, 0)), s.restore(), s.beginPath(), t = Math.ceil(t * f / this.cropperWidth), c = t / 2, a = ~~
                f, n = ~~o, s.moveTo(c, c), s.lineTo(a - c, c), s.lineTo(a - c, n - c), s.lineTo(c, n - c), s.closePath(),
                s.lineWidth = t, s.strokeStyle = "rgba(255, 255, 255, 0.24)", s.stroke(), "function" == typeof this
                .cropCallback && this.cropCallback(this.cropperSource), this.cropper.style.top = this.cropperOffsetTop +
                "px", this.cropper.style.left = this.cropperOffsetLeft + "px", this.cropper.style.width = this.cropperWidth +
                "px", this.cropper.style.height = this.cropperHeight + "px", this.cropperSeResize.style.top =
                this.cropperOffsetTop + this.cropperHeight - this.cropperSeResizeSize / 2 + "px", this.cropperSeResize
                .style.left = this.cropperOffsetLeft + this.cropperWidth - this.cropperSeResizeSize / 2 + "px"
        }, e.prototype.sourceImageMousedown = function (e) {
            return e.preventDefault(), this.imagePrevX = e.clientX || e.targetTouches[0].clientX, this.imagePrevY =
                e.clientY || e.targetTouches[0].clientY, this.listenTo(document, "mousemove", this.sourceImageMove),
                this.listenTo(document, "touchmove", this.sourceImageMove)
        }, e.prototype.sourceImageMove = function (e) {
            var t, i, r, s, n, a;
            return e.preventDefault(), this.sourceImage.offsetWidth > this.containerWidth ? (t = e.clientX || e
                .targetTouches[0].clientX, r = t - this.imagePrevX + parseFloat(this.sourceImage.style.left.slice(
                0, -2)), s = this.containerWidth - this.sourceImage.offsetWidth, s > r && (r = s), r > 0 && (r =
                0), this.sourceImage.offsetWifth > this.containerWidth && (this.sourceImage.style.left = r +
                "px")) : (i = e.clientY || e.targetTouches[0].clientY, n = i - this.imagePrevY + parseFloat(
                this.sourceImage.style.top.slice(0, -2)), a = this.containerHeight - this.sourceImage.offsetHeight,
                a > n && (n = a), n > 0 && (n = 0), this.sourceImage.offsetHeight > this.containerHeight && (
                this.sourceImage.style.top = n + "px")), this.imagePrevX = e.clientX || e.targetTouches[0].clientX,
                this.imagePrevY = e.clientY || e.targetTouches[0].clientY, this.imageOffsetTop = parseFloat(
                this.sourceImage.style.top.slice(0, -2)) / this.imageRatio, this.imageOffsetLeft = parseFloat(
                this.sourceImage.style.left.slice(0, -2)) / this.imageRatio, this.cropperListener()
        }, e.prototype.cropperMousedown = function (e) {
            return e.preventDefault(), this.cropperPrevX = e.clientX || e.targetTouches[0].clientX, this.cropperPrevY =
                e.clientY || e.targetTouches[0].clientY, this.listenTo(document, "mousemove", this.cropperMove),
                this.listenTo(document, "touchmove", this.cropperMove)
        }, e.prototype.cropperMove = function (e) {
            var t, i, r, s, n, a;
            return e.preventDefault(), t = e.clientX || e.targetTouches[0].clientX, i = e.clientY || e.targetTouches[
                0].clientY, this.cropperOffsetTop = i - this.cropperPrevY + this.cropper.offsetTop, this.cropperOffsetLeft =
                t - this.cropperPrevX + this.cropper.offsetLeft, this.imageStyleHeight < this.containerHeight ?
                (a = (this.containerHeight - this.imageStyleHeight) / 2, n = a + this.imageStyleHeight - this.cropperHeight) :
                (n = this.containerHeight - this.cropperHeight, a = 0), this.cropperOffsetTop > n && (this.cropperOffsetTop =
                n), this.cropperOffsetTop < a && (this.cropperOffsetTop = a), this.imageStyleWidth < this.containerWidth ?
                (s = (this.containerWidth - this.imageStyleWidth) / 2, r = s + this.imageStyleWidth - this.cropperWidth) :
                (r = this.containerWidth - this.cropperWidth, s = 0), this.cropperOffsetLeft > r && (this.cropperOffsetLeft =
                r), this.cropperOffsetLeft < s && (this.cropperOffsetLeft = s), this.cropperPrevX = e.clientX ||
                e.targetTouches[0].clientX, this.cropperPrevY = e.clientY || e.targetTouches[0].clientY, this.cropperListener()
        }, e.prototype.cropperSeResizeMousedown = function (e) {
            return e.preventDefault(), this.cropperResizePrevX = e.clientX || e.targetTouches[0].clientX, this.cropperResizePrevY =
                e.clientY || e.targetTouches[0].clientY, this.listenTo(document, "mousemove", this.cropperSeResizeMove),
                this.listenTo(document, "touchmove", this.cropperSeResizeMove)
        }, e.prototype.cropperSeResizeMove = function (e) {
            var t, i, r, s;
            return e.preventDefault(), s = this.imageStyleWidth < this.containerWidth ? this.imageStyleWidth /
                2 + this.containerWidth / 2 - this.cropperOffsetLeft : this.containerWidth - this.cropperOffsetLeft,
                r = this.imageStyleHeight < this.containerHeight ? this.imageStyleHeight / 2 + this.containerHeight /
                2 - this.cropperOffsetTop : this.containerHeight - this.cropperOffsetTop, this.cropperRatio >=
                1 ? (t = e.clientX || e.targetTouches[0].clientX, this.cropperWidth += t - this.cropperResizePrevX,
                this.cropperWidth < 0 && (this.cropperWidth = 0), this.cropperWidth > s && (this.cropperWidth =
                s), this.cropperHeight = Math.floor(this.cropperWidth / this.cropperRatio), this.cropperHeight >
                r && (this.cropperHeight = r, this.cropperWidth = this.cropperHeight * this.cropperRatio)) : (i =
                e.clientY || e.targetTouches[0].clientY, this.cropperHeight += i - this.cropperResizePrevY,
                this.cropperHeight < 0 && (this.cropperHeight = 0), this.cropperHeight > r && (this.cropperHeight =
                r), this.cropperWidth = Math.floor(this.cropperHeight * this.cropperRatio), this.cropperWidth >
                s && (this.cropperWidth = s, this.cropperHeight = this.cropperWidth / this.cropperRatio)), this
                .cropperWidth < 10 && (this.cropperWidth = 10, this.cropperHeight = this.cropperWidth / this.cropperRatio),
                this.cropperResizePrevX = e.clientX || e.targetTouches[0].clientX, this.cropperResizePrevY = e.clientY ||
                e.targetTouches[0].clientY, this.cropperListener()
        }, e.prototype.toBlob = function () {
            var e, t, i, r, s, n, a, o, c, l, p;
            for (e = document.createElement("canvas"), e.width = this.croppedWidth, e.height = this.croppedWidth /
                this.cropperRatio, e.getContext("2d").drawImage(this.cropperSource, 0, 0, e.width, e.height), s =
                "image/png", a = e.toDataURL(s), i = a.split(","), n = window.atob(i[1]), r = n.length, p = new Uint8Array(
                r), o = c = 0, l = n.length; l > c; o = ++c) t = n[o], p[o] = t.charCodeAt(0);
            return new Blob([p], {
                type: s
            })
        }, e.prototype.toDataURL = function () {
            return this.cropperSource.toDataURL()
        }, e
    }()
  })
}.call(this)