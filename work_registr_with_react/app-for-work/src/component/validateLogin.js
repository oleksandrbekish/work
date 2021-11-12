export function funcValidLogin(value) {
    console.log(value)
    const my_regex1 = /^[a-z\s]+$/;
    const regex1 = my_regex1.test(value)
    //console.log(regex1, 'log')
    if(regex1){
      return true
    }
  }