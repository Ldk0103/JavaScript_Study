// 기존 배열 앞에 추가 unshift
let arr1 = ['기아', '현대', '쌍용'];
arr1.unshift('부가티');
console.log(arr1);

// 기존 배열 뒤에 추가 push
let arr2 = ['기아', '현대', '쌍용'];
arr2.push('벤츠'); 
console.log(arr2);

// 기존 배열에 배열 합치기
let arr3 = ['기아', '현대', '쌍용'];
arr3 = arr3.concat(['bmw', '아우디']);
console.log(arr3);


console.log('------------------------------')


// 인덱스 번호 기준 범위 삭제 후 인자 추가가
let arr4 = ['a', 'b', 'c'];
arr4.splice(1,2,'g');
console.log(arr4);

// 기존 배열 맨 앞 삭제
let arr5 = ['기아', '현대', '쌍용'];
arr5.shift();
console.log(arr5);

// 기존 배열 맨 뒤 삭제
let arr6 = ['기아', '현대', '쌍용'];
arr6.pop();
console.log(arr6);


// 배열 정렬 sort / reverse
let arr7 = ['기아', '현대', '쌍용'];
arr7.reverse();
console.log(arr7);


