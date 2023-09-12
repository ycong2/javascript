let num = 10;
    num += 500;
    console.log(typeof num);
    num += "원";
    console.log(typeof num);
    num += 100;
    num += 100; //510원100100  문자로 인식되었기 때문에 
    console.log(typeof num);
    parseInt(num)
    console.log(typeof num);
    num = parseInt(num)
    console.log(typeof num);
