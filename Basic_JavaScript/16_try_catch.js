/**
 * try...catch
 * 
 * 1. 발생 시킬때 -> (에러를)던진다고한다. (throw)
 * 2. 명시적으로 인지할때 -> (에러를)잡는다고 한다. (catch)
 */
function runner(){
    try{
        console.log('Hello');

        //throw new Error('큰 문제가 생겼습니다!');
    
        console.log('Gyu code');
    }catch(e){ //try에서 에러가 잡히면 catch 구문이 발동된다.
        console.log('---catch---');
        console.log(e);
    } finally { //try에서 Error가 안잡히더라고 강제로 실행한다.
        console.log('---finally---');
    }
   
}
runner();
