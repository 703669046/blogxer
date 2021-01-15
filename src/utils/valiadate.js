//匹配手机号
export function validatePhone(phone) {
	const reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
	return reg.test(Number(phone))
}

//匹配验证码
export function validatePwd(pwd){
    const reg=new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}');
    return reg.test(pwd)
}

//匹配邮箱
export function validateEmail(email){
    const reg =/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return reg.test(email)
}
