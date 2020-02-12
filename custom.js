// 网站上似乎会因为加载延时导致错误，设置延时处理这个问题
(function () {
    var vue = new Vue({
        el: '#app',
        data () {
            return {
                modelOrdinal: 1,
                textureOrdinal: 1
            }
        },
        computed: {
            modelIndex() {
                return this.verifyInput(this.modelOrdinal, this.totalModelCount) - 1
            },
            textureIndex() {
                return this.verifyInput(this.textureOrdinal, this.totalTextureCount) - 1
            },
            textures () {
                return LAppDefine.MODELS[this.modelIndex]
            },
            totalModelCount () {
                return LAppDefine.MODELS.length
            },
            totalTextureCount () {
                return this.textures.length
            },
            model () {
                return this.textures[this.textureIndex]
            },
            canvasHeight () {
                return parseInt(window.outerHeight * .8)
            },
            canvasWidth () {
                return parseInt(this.canvasHeight / 400 * 150)
            }
        },
        watch: {
            modelOrdinal (val) {
                this.textureOrdinal = 1
                this.load()
            },
            textureOrdinal (val) {
                console.log(typeof val)
                this.load()
            },
        },
        methods: {
            load() {
                loadlive2d("live2d", this.model)
            },
            verifyInput(val, max, min=1) {
                // 确保是整数
                val = typeof val === "number" ? parseInt(val) : min
                // 确保在范围内
                val = val < min ? min : val
                val = val > max ? max : val
                return val
            }
        },
        mounted () {
            this.load()
        }
    })
})();