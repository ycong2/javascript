let count = 0;

    //3개가 다 같은 표현
    count += 1; //1
    count = count + 1 //2 오른쪽에서 왼쪽순서
    ++count;  // 3  하나씩 늘이기   전치연산
    count++;  //3
    console.log(count); //4
    console.log(count++); //4
    console.log(++count); //6

    coount -= 5; //1
    count *= 5; //5 count = count * 5
    count /= 5; //1
    count += 13; //14
    count %= 5; //0 1 2 3 4  순환식 






    --count ;  // 1  하나씩 줄이기

    count-- ; //1  후치연산
    count; //0

    