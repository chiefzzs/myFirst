import Vue from 'vue'

export default {
    init_setting(innerSetting,outSetting){
        return lodash.merge({},innerSetting,outSetting)
    }
}