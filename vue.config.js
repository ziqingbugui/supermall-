module.exports = {
    configureWebpack :{
        resolve:{
            extension:[],
            alias:{//别名
               'assets':'@/assets',
               'common':'@/common',
               'components':'@/components',
               'views':'@/views',
               'network':'@/network',
               //脚手架4不用配置common
               //vue里面已经配置过了 @相当于src，这里就先不用写了
            }
        }
    }
}