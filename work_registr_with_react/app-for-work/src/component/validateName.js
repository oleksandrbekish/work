
export function funcValidName(value) {
  const my_regex = /^[А-ЯЁ][а-яА-ЯёЁ\s]+$/;
  const reqex = my_regex.test(value)
  //console.log(reqex)
  if (reqex) {
    if (value.charAt(0) === value.charAt(0).toUpperCase()) {
      console.log("success")
      return true

    }
    else {
      return false
    }
  }
  else {
    return false
  }
}