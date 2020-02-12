// 闭包执行的变量名提升可能导致 LAppDefine 还没被定义就开始生成 dom 了，所以改用删除变量的形式好了
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
vue = undefined;