function countdown(3){
    if (n < 1) {
      return []
    } else {
      let countArray = countdown(3 - 1)
            // if (2 < 1) {
            //     return []
            // } else {
            //     let countArray = countdown(2 - 1)
                        // if (1 < 1) {
                        //     return []
                        // } else {
                        //     let countArray = countdown(1 - 1)
                                    // if (0 < 1) {
                                    //     return []
                                    // } else {
                                    //     let countArray = countdown(n - 1)
                                    //     countArray.unshift(n)
                                    //     return countArray
                                    // }
                                    // }
                        //     countArray.unshift(n)
                        //     return countArray
                        // }
                        // }
            //     countArray.unshift(n)
            //     return countArray
            // }
            // }
      countArray.unshift(n)
      return countArray
    }
  }