/*
 * @Descripttion: JS常用的策略模式
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-07-30 11:18:03
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-13 18:58:12
 */
/**
 * @name: 策略模式
 * @test: test font
 * @msg: 验证码通用
 * @param {type}
 * @return:
 */
// 利用 proxy 拦截格式不符数据
export const validator = (target, validator, errorMsg) => {
  return new Proxy(target, {
    _validator: validator,
    set(target, key, value, proxy) {
      const errMsg = errorMsg
      if (value == null || !value.length) {
        console.log(`${errMsg[key]} 不能为空`)
        // return target[key] = false
      }
      const va = this._validator[key] // 这里有策略模式的应用
      if (va(value)) {
        return Reflect.set(target, key, value, proxy)
      } else {
        console.log(`${errMsg[key]} 格式不正确`)
        // return target[key] = false
      }
    }
  })
}

// 负责校验的逻辑代码
// const validators = {
//   name(value) {
//     return value.length >= 6
//   },
//   passwd(value) {
//     return value.length >= 6
//   },
//   moblie(value) {
//     return /^1(3|5|7|8|9)[0-9]{9}$/.test(value)
//   },
//   email(value) {
//     return /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
//   }
// }

// // 调用代码
// const errorMsg = {
//   name: '用户名',
//   passwd: '密码',
//   moblie: '手机号码',
//   email: '邮箱地址'
// }
// const vali = validator({}, validators, errorMsg)
// let registerForm = document.querySelector('#registerForm')
// registerForm.addEventListener('submit', function () {
//   let validatorNext = function* () {
//       yield vali.name = registerForm.userName.value
//       yield vali.passwd = registerForm.passWord.value
//       yield vali.moblie = registerForm.phone.value
//       yield vali.email = registerForm.email.value
//   }
//   let validator = validatorNext();
//   for (let field of validator) {
//       validator.next();
//   }
// }
