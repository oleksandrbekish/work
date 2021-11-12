export function funcValidEmail(value) {
    const my_regex2 = /^[a-z0-9._%+-]+@[a-z0-9-]+.+.[a-z]{2,4}$/;
    const regex2 = my_regex2.test(value)
    console.log(regex2, "email")
    if(regex2){
      return true
    }
  }