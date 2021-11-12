export   function funcValidPhone(value) {
    const my_regex3 = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    const regex3 = my_regex3.test(value)
    console.log(regex3, "phone")
    if(regex3){
      return true
    }

  }